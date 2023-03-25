export default class {
	icon: String = '';
	title: String = '';
	datetime: String = '';

	theme: String = '';
	guestOfHonor: String = '';
	registrationTier: String = '';

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
	setRegistrationTier(registrationTier: String = '') {
		this.registrationTier = registrationTier;
		return this;
	}

	getDetails() {
		return [
			{ title: 'Theme', subTitle: this.theme },
			{ title: 'Guest of Honor', subTitle: this.guestOfHonor },
			{ title: 'Registration Tier', subTitle: this.registrationTier }
		].filter((detail) => {
			return detail.subTitle.length;
		});
	}
}
