export default class TierEvent {
	name: string = '';
	alternativeName: string = '';
	owner: string = '';

	setName(name: string) {
		this.name = name;
		return this;
	}
	setAlternativeName(name: string) {
		this.alternativeName = name;
		return this;
	}
	setOwner(owner: string) {
		this.owner = owner;
		return this;
	}
}
