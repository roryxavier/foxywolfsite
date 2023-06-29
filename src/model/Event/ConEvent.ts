import type HonorGuest from './HonorGuest';
import type Theme from './Theme';
import type TierEvent from './TierEvent';

export default class ConEvent {
	icon: String = '';
	title: String = '';
	datetime: String = '';

	theme: Theme | undefined;
	honorGuest: HonorGuest | undefined;
	tierEvents: TierEvent[] = [];

	setIcon(icon: String = '') {
		this.icon = icon;
		return this;
	}
	setTitle(title: String = '') {
		this.title = title;
		return this;
	}
	setDateTime(datetime: String = '') {
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
}
