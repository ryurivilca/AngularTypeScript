var moduleFirstDemo;
(function (moduleFirstDemo) {
    var ProductEdit = (function () {
        function ProductEdit() {
            this.scope = {
                'productList': '=',
                'currentProduct': '='
            };
            this.restrict = 'E';
            this.templateUrl = 'app/directives/productEdit.html';
            this.controllerAs = 'ctrl';
            this.controller = function ($scope, $element) {
                this.save = function () {
                    console.log('saving...');
                    $scope.productList.push(this.currentProduct);
                };
            };
        }
        ProductEdit.instance = function () {
            return new ProductEdit;
        };
        return ProductEdit;
    }());
    moduleFirstDemo.ProductEdit = ProductEdit;
    angular.module('demoModule')
        .directive('productEdit', ProductEdit.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=productEditDirective.js.map
