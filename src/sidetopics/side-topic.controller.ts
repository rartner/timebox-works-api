import { Controller, Post, Body, Param } from "@nestjs/common";
import { SideTopicService } from "./side-topic.service";
import { CreateSideTopicDto } from "./dtos/create-side-topic.dto";
import { GetSideTopicDto } from "./dtos/get-side-topic.dto";
import { toGetSideTopicDto } from "./dtos/get-side-topic.mapper";

@Controller('side-topics')
export class SideTopicController {
	constructor(private sideTopicService: SideTopicService) { }

	@Post(':eventId')
	async create(@Param('eventId') eventId: string,
		@Body() createSideTopicDto: CreateSideTopicDto): Promise<GetSideTopicDto> {
		return this.sideTopicService.create(eventId, createSideTopicDto)
			.then(toGetSideTopicDto)
	}
}