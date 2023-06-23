import type TierEvent from './TierEvent';

export default class ConEvent {
	icon: String = '';
	title: String = '';
	datetime: String = '';

	theme: String = '';
	guestOfHonor: String = '';
	tierInfo: String = '';
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

	setTheme(theme: String = '') {
		this.theme = theme;
		return this;
	}

	setGuestOfHonor(guestOfHonor: String = '') {
		this.guestOfHonor = guestOfHonor;
		return this;
	}

	setTierInfo(tierInfo: String = '') {
		this.tierInfo = tierInfo;
		return this;
	}

	addRegistrationTier(tierEvent: TierEvent) {
		this.tierEvents.push(tierEvent);
		return this;
	}

	getDetails() {
		return [
			{ title: 'Theme', subTitle: this.theme },
			{ title: 'Guest of Honor', subTitle: this.guestOfHonor },
			{ title: 'Registration Tier', subTitle: this.tierInfo }
		].filter((detail) => {
			return detail.subTitle.length;
		});
	}
}
