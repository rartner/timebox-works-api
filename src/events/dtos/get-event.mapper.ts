import { Event } from "../event.entity";
import { GetEventDto } from "./get-event.dto";

const toDto = (event: Event): GetEventDto => {
	return {
		id: event.id,
		name: event.name,
		description: event.description,
		expectedStartDate: event.expectedStartDate,
		expectedEndDate: event.expectedEndDate,
		realStartDate: event.realStartDate,
		realEndDate: event.realEndDate,
	} as GetEventDto;
};

export { toDto };