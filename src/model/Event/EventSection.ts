import type ConEvent from './EventCon';

export default class EventSection {
	title: string;
	events: ConEvent[];

	constructor(title: string, ...events: ConEvent[]) {
		this.title = title;
		this.events = events;
	}
}
