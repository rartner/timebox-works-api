import { Controller, Body, Param, Put, Delete } from "@nestjs/common";
import { SideTopicService } from "./side-topic.service";
import { CreateSideTopicDto } from "./dtos/create-side-topic.dto";
import { GetSideTopicDto } from "./dtos/get-side-topic.dto";
import { toGetSideTopicDto } from "./dtos/get-side-topic.mapper";

@Controller('v1/side-topics')
export class SideTopicController {
	constructor(private sideTopicService: SideTopicService) { }

	@Put(':id')
	async update(@Param('id') eventId: string,
		@Body() createSideTopicDto: CreateSideTopicDto): Promise<GetSideTopicDto> {
		return this.sideTopicService.create(eventId, createSideTopicDto)
			.then(toGetSideTopicDto)
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		this.sideTopicService.delete(id);
	}
}