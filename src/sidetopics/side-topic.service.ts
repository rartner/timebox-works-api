import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SideTopicRepository } from "./side-topic.repository";
import { SideTopic } from "./side-topic.entity";
import { EventService } from "src/events/event.service";
import { CreateSideTopicDto } from "./dtos/create-side-topic.dto";
import { CreateSideTopicToEntity } from "./dtos/create-side-topic.mapper";
import { Event } from "src/events/event.entity";

@Injectable()
export class SideTopicService {
	constructor(
		@InjectRepository(SideTopicRepository)
		private sideTopicRepository: SideTopicRepository,
		private eventService: EventService,
	) { }

	async create(eventId: string, sideTopicDto: CreateSideTopicDto): Promise<SideTopic> {
		let sideTopic = CreateSideTopicToEntity(sideTopicDto);
		const event = await this.eventService.findEvent(eventId);

		if (this.eventDoesNotExist(event)) {
			throw new NotFoundException('This event does not exist');
		}

		sideTopic.event = event;
		return await this.sideTopicRepository.save(sideTopic);
	}

	private eventDoesNotExist(event: Event): boolean {
		return !event;
	}
}