import { CreateGoalDto } from "src/goals/dtos/create-goal.dto";

export class CreateEventDto {
	name: string;
	description: string;
	expectedStartDate: Date;
	expectedEndDate: Date;
	goals: CreateGoalDto[];
}