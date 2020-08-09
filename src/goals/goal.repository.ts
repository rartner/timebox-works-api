import { EntityRepository, Repository } from 'typeorm';
import { Goal } from './goal.entity';

@EntityRepository(Goal)
export class GoalRepository extends Repository<Goal> {

}
