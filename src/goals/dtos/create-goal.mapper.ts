import { CreateGoalDto } from "./create-goal.dto";
import { Goal } from "../goal.entity";

const toEntity = (createGoalDto: CreateGoalDto): Goal => {
	return {
		title: createGoalDto.title,
		weight: createGoalDto.weight,
		finishedAt: createGoalDto.finishedAt,
		notes: createGoalDto.notes,
	} as Goal;
}

export { toEntity };