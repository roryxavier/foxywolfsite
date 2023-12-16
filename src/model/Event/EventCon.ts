import type HonorGuest from './HonorGuest';
import type Theme from './Theme';
import type TierEvent from './TierEvent';

export default class ConEvent {
	icon: string = '';
	title: string = '';
	datetime: string = '';

	link: string = '';

	theme: Theme | undefined;
	honorGuest: HonorGuest | undefined;
	tierEvents: TierEvent[] = [];

	setIcon(icon: string = '') {
		this.icon = icon;
		return this;
	}
	setTitle(title: string = '') {
		this.title = title;
		return this;
	}
	setDateTime(datetime: string = '') {
		this.datetime = datetime;
		return this;
	}
	setTheme(theme: Theme) {
		this.theme = theme;
		return this;
	}
	setHonorGuest(guestOfHonor: HonorGuest) {
		this.honorGuest = guestOfHonor;
		return this;
	}
	addRegistrationTier(tierEvent: TierEvent) {
		this.tierEvents.push(tierEvent);
		return this;
	}
	setLink(link: string) {
		this.link = link;
		return this;
	}
}
