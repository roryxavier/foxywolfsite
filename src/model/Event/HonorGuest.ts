export default class HonorGuest {
	name: string = '';
	href: string = '';

	constructor(name: string, href: string = '') {
		this.name = name;
		this.href = href;
	}
}
