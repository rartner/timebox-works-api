import { GetGoalDto } from "src/goals/dtos/get-goal.dto";
import { GetSideTopicDto } from "src/sidetopics/dtos/get-side-topic.dto";

export class GetEventDto {
	id: string;
	name: string;
	description: string;
	expectedStartDate: Date;
	expectedEndDate: Date;
	realStartDate: Date;
	realEndDate: Date;
	goals: GetGoalDto[];
	sideTopics: GetSideTopicDto[];
}