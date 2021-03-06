function customDirective() {
    return {
        restrict : "E",
        template : '<jsonforms-control>' +
          '<input type="text" style="background-color: #3278b3; color: #8dd0ff" class="jsf-control-string jsf-control form-control" ng-change="vm.propagateChanges()" ng-model="vm.modelValue[vm.fragment]" />' +
        '</jsonforms-control>',
        controller : ['BaseController', '$scope', function(BaseController, $scope) {
            BaseController.call( this, $scope );
        }],
        controllerAs : 'vm'
    };
}

var app = angular.module('makeithappen');
app.directive('customControl', customDirective)
    .run(['RendererService', 'JSONFormsTesters', function(RendererService, testers) {
        RendererService.register("custom-control",
            testers.and(
                testers.uiTypeIs('Control'),
                testers.schemaPropertyName('firstName')
            ), 3);
    }]);
