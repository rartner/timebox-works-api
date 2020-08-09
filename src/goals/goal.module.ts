import { Module } from '@nestjs/common';
import { GoalRepository } from './goal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([GoalRepository])]
})
export class GoalModule { }
