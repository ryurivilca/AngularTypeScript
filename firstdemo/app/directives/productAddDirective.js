var moduleFirstDemo;
(function (moduleFirstDemo) {
    var ProductAdd = (function () {
        function ProductAdd() {
            this.scope = {
                'productList': '='
            };
            this.restrict = 'E';
            this.templateUrl = 'app/directives/ProductAdd.html';
            this.controllerAs = 'ctrl';
            this.controller = function ($scope, $element) {
                this.save = function () {
                    console.log('saving...');
                    $scope.productList.push($scope.currentProduct);
                };
            };
        }
        ProductAdd.instance = function () {
            return new ProductAdd;
        };
        return ProductAdd;
    }());
    moduleFirstDemo.ProductAdd = ProductAdd;
    angular.module('demoModule')
        .directive('productAdd', ProductAdd.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=productAddDirective.js.map
