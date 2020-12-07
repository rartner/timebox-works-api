import { Module } from '@nestjs/common';
import { SideTopicRepository } from './side-topic.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SideTopicController } from './side-topic.controller';
import { SideTopicService } from './side-topic.service';
import { EventModule } from 'src/events/event.module';

@Module({
	controllers: [SideTopicController],
	providers: [SideTopicService],
	imports: [TypeOrmModule.forFeature([SideTopicRepository]), EventModule],
	exports: [SideTopicService]
})
export class SideTopicModule { }
