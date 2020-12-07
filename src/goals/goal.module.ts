import { Module } from '@nestjs/common';
import { GoalRepository } from './goal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';

@Module({
	controllers: [GoalController],
	providers: [GoalService],
	imports: [TypeOrmModule.forFeature([GoalRepository])],
	exports: [GoalService]
})
export class GoalModule { }
