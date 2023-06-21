export default class TierEvent {
	tierName: string;
	tierAltName: string;
	tierOwner: string;

	constructor(tierName: string, tierAltName: string, tierOwner: string) {
		this.tierName = tierName;
		this.tierAltName = tierAltName;
		this.tierOwner = tierOwner;
	}
}
