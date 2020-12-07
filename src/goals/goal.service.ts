import { Injectable, BadRequestException } from '@nestjs/common'; 
import { GoalRepository } from './goal.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGoalDto } from './dtos/create-goal.dto';
import { Goal } from './goal.entity';

@Injectable()
export class GoalService {

	constructor(
		@InjectRepository(GoalRepository)
		private goalRepository: GoalRepository,
	) { }

	async update(id: string, goalDto: CreateGoalDto): Promise<Goal> {
		return this.goalRepository.save( { id: id, ...goalDto } )
			.then( updated => {
				console.log(`Goal ${id} was updated: ${JSON.stringify(updated)}`);
				return updated;
			}).catch( error => {
				console.log(`Error while updating goal ${id}: ${error}`);
				throw new BadRequestException( error.message );
			});
	}
}
