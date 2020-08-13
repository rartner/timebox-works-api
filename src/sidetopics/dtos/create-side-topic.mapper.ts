import { CreateSideTopicDto } from "./create-side-topic.dto";
import { SideTopic } from "../side-topic.entity";

const toEntity = (createSideTopicDto: CreateSideTopicDto): SideTopic => {
	return {
		description: createSideTopicDto.description,
	} as SideTopic;
}

export { toEntity as CreateSideTopicToEntity };