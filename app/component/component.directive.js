import ComponentController from './component.controller';

function componentDirective() {

	return {
		restrict: 'E',
		replace: true,
		scope: {},
		template: require('./component-template.html'),
		/*@ngInject*/
		controller: ComponentController,
		controllerAs: 'vm',
		bindToController: true // because the scope is isolated
	};
}


export default angular.module('componentModule', [])
				.directive('component', componentDirective).name;