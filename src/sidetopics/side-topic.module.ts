import { Module } from '@nestjs/common';
import { SideTopicRepository } from './side-topic.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([SideTopicRepository])]
})
export class SideTopicModule { }
