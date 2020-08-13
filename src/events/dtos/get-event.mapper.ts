import { Event } from "../event.entity";
import { GetEventDto } from "./get-event.dto";
import { toGetGoalDto } from "../../goals/dtos/get-goal.mapper";
import { toGetSideTopicDto } from "../../sidetopics/dtos/get-side-topic.mapper";

const toDto = (event: Event): GetEventDto => {
	const goals = event.goals
		? event.goals.map(goal => toGetGoalDto(goal)) : [];

	const sideTopics = event.sideTopics
		? event.sideTopics.map(sideTopic => toGetSideTopicDto(sideTopic)) : [];

	return {
		id: event.id,
		name: event.name,
		description: event.description,
		expectedStartDate: event.expectedStartDate,
		expectedEndDate: event.expectedEndDate,
		realStartDate: event.realStartDate,
		realEndDate: event.realEndDate,
		goals: goals,
		sideTopics: sideTopics,
	} as GetEventDto;
};

export { toDto as toGetEventDto };