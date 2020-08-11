import { Event } from "../event.entity";
import { GetEventDto } from "./get-event.dto";
import { toDto as GoalToDto } from "../../goals/dtos/get-goal.mapper";
import { toDto as SideTopicToDto } from "../../sidetopics/dtos/get-side-topic.mapper";

const toDto = (event: Event): GetEventDto => {
	return {
		id: event.id,
		name: event.name,
		description: event.description,
		expectedStartDate: event.expectedStartDate,
		expectedEndDate: event.expectedEndDate,
		realStartDate: event.realStartDate,
		realEndDate: event.realEndDate,
		goals: event.goals ? event.goals.map(goal => GoalToDto(goal)) : [],
		sideTopics: event.sideTopics ? event.sideTopics.map(sideTopic => SideTopicToDto(sideTopic)) : []
	} as GetEventDto;
};

export { toDto as toGetEventDto };