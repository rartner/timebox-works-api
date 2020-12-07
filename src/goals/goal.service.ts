import { Injectable, BadRequestException, Logger, NotFoundException } from '@nestjs/common'; 
import { GoalRepository } from './goal.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGoalDto } from './dtos/create-goal.dto';
import { Goal } from './goal.entity';

@Injectable()
export class GoalService {
	private readonly logger = new Logger(GoalService.name);

	constructor(
		@InjectRepository(GoalRepository)
		private goalRepository: GoalRepository,
	) { }

	async update(id: string, goalDto: CreateGoalDto): Promise<Goal> {
		let goal: Goal = await this.goalRepository.findOne( { id: id } );

		if (this.goalDoesNotExist(goal)) {
			throw new NotFoundException(`Cannot find goal with id ${id}`);
		}

		return this.goalRepository.save( { id: id, ...goalDto } )
			.then( updated => {
				this.logger.log(`Goal ${id} was updated`);
				return updated;
			}).catch( error => {
				this.logger.error(`Error updating goal: ${error}`);
				throw new BadRequestException( error.message );
			});
	}

	private goalDoesNotExist(goal: Goal) {
		return !goal;
	}
}
