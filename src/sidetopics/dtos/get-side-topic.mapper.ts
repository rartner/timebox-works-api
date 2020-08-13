import { SideTopic } from "../side-topic.entity";
import { GetSideTopicDto } from "./get-side-topic.dto";

const toDto = (sideTopic: SideTopic): GetSideTopicDto => {
	return {
		id: sideTopic.id,
		description: sideTopic.description,
	} as GetSideTopicDto;
};

export { toDto as toGetSideTopicDto };