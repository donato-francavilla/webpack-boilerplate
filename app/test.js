//import angular from 'angular';
import $ from 'jquery';
import 'angular';
import 'angular-mocks';

import './index.js';

describe('My Test Test Suite', function() {

		let $controller;
		let $rootScope;
		let $compile;
		let $httpBackend;

	beforeEach(angular.mock.module('myApp'));

	beforeEach(angular.mock.inject(function($injector) {
		$controller = $injector.get('$controller');
		$rootScope = $injector.get('$rootScope');
		$compile = $injector.get('$compile');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it('should print Hello World!', function() {
		const scope = $rootScope.$new();
		const ctrl = $controller('myController', { $scope : scope});
		expect(scope.myvar).toEqual('Hello World!');
	});

	it('should Print a message', function() {
		var $body = $('body');
		var scope = $rootScope.$new();
		var el = angular.element('<component></component>');
		
		$compile(el)(scope);

		$body.append(el);

		scope.$digest();

		expect($(el).find('p').text()).toEqual('Hey There, I am a message');

	});
});