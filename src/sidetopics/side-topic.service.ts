import { Injectable, NotFoundException, BadRequestException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SideTopicRepository } from "./side-topic.repository";
import { SideTopic } from "./side-topic.entity";
import { EventService } from "src/events/event.service";
import { CreateSideTopicDto } from "./dtos/create-side-topic.dto";
import { CreateSideTopicToEntity } from "./dtos/create-side-topic.mapper";
import { Event } from "src/events/event.entity";

@Injectable()
export class SideTopicService {
	private readonly logger = new Logger(SideTopicService.name);

	constructor(
		@InjectRepository(SideTopicRepository)
		private sideTopicRepository: SideTopicRepository,
		private eventService: EventService,
	) { }

	async create(eventId: string, sideTopicDto: CreateSideTopicDto): Promise<SideTopic> {
		let sideTopic = CreateSideTopicToEntity(sideTopicDto);
		const event: Event = await this.eventService.findEvent(eventId);

		if (this.doesNotExist(event)) {
			throw new NotFoundException('This event does not exist');
		}

		sideTopic.event = event;
		return await this.sideTopicRepository.save(sideTopic);
	}

	async delete(id: string): Promise<void> {
		let sideTopic = await this.sideTopicRepository.findOne( id );

		if (this.doesNotExist(sideTopic)) {
			this.logger.error(`Cannot find side topic for id ${id}`);
			throw new NotFoundException(`Cannot find side topic for id ${id}`);
		}

		this.sideTopicRepository.remove( [{ id } as SideTopic] )
			.then( value => {
				this.logger.log(`Side topic ${id} was successfully deleted`);
			}).catch( error => {
				this.logger.error(`Error deleting side topic: ${error}`);
				throw new BadRequestException( error.message );
			});
	}

	private doesNotExist(object: Object): boolean {
		return !object;
	}
}