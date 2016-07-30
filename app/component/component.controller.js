export default class ComponentController {
	/*@ngInject*/
	constructor($scope) {
		var vm = this;
		vm.activate();
	}

	activate() {
		this.message = 'message';
	}

	giveSpace(input) {
		if(undefined !== input) {
			this.printedSpace = this.input.split().join(' ');
		}
	}
}