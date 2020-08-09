import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Goal extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false, type: 'varchar', length: 200 })
	title: string;

	@Column({ nullable: false, type: 'integer', default: 1 })
	weight: number;

	@Column({ name: 'finished_at', type: 'timestamp', nullable: true })
	finishedAt: Date;

	@Column({ nullable: true, type: 'varchar', length: 500 })
	notes: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
