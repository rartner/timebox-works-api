import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from 'typeorm';
import { SideTopic } from 'src/sidetopics/side-topic.entity';
import { Goal } from 'src/goals/goal.entity';

@Entity()
export class Event extends BaseEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false, type: 'varchar', length: 100 })
	name: string;

	@Column({ nullable: false, type: 'varchar', length: 500 })
	description: string;

	@Column({ name: 'expected_start_date', nullable: false, type: 'timestamp' })
	expectedStartDate: Date;

	@Column({ name: 'expected_end_date', nullable: false, type: 'timestamp' })
	expectedEndDate: Date;

	@Column({ name: 'real_start_date', type: 'timestamp', nullable: true })
	realStartDate: Date;

	@Column({ name: 'real_end_date', type: 'timestamp', nullable: true })
	realEndDate: Date;

	@OneToMany(type => Goal, goal => goal.event, { cascade: true })
	goals: Goal[];

	@OneToMany(type => SideTopic, sideTopic => sideTopic.event)
	sideTopics: SideTopic[];

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
