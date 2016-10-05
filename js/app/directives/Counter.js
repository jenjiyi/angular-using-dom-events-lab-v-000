function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, elem, attrs, ctrl) {
			console.log(elem[0]);
			elem.on('click', function(){
				ctrl.count++;
				scope.$apply();

			});
			scope.$on('$destroy', function () {
	           elem.off();
	        });
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
