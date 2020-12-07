import { Controller, Body, Param, Put } from '@nestjs/common';
import { GoalService } from './goal.service';
import { CreateGoalDto } from './dtos/create-goal.dto';

@Controller('v1/goals')
export class GoalController {
	constructor(private goalService: GoalService) { }

	@Put(':id')
	async find(@Param('id') id: string, @Body() goalDto: CreateGoalDto): Promise<string> {
		return (await this.goalService.update( id, goalDto )).id;
	}
}