import { EntityRepository, Repository } from 'typeorm';
import { SideTopic } from './side-topic.entity';

@EntityRepository(SideTopic)
export class SideTopicRepository extends Repository<SideTopic> {

}
