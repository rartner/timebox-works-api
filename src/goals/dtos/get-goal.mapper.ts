import { Goal } from "../goal.entity";
import { GetGoalDto } from "./get-goal.dto";

const toDto = (goal: Goal): GetGoalDto => {
	return {
		id: goal.id,
		title: goal.title,
		weight: goal.weight,
		finishedAt: goal.finishedAt,
		notes: goal.notes,
	} as GetGoalDto;
};

export { toDto as toGetGoalDto };