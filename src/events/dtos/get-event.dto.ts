export class GetEventDto {
	id: string;
	name: string;
	description: string;
	expectedStartDate: Date;
	expectedEndDate: Date;
	realStartDate: Date;
	realEndDate: Date;
}