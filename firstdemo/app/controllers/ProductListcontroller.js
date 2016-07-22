var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var ProductListController = (function () {
        function ProductListController(DataProductService, DataProductFactory) {
            var _this = this;
            this.DataProductService = DataProductService;
            this.DataProductFactory = DataProductFactory;
            this.title = "Lista de productos";
            this.showImage = false;
            this.DataProductFactory.getProducts().then(function (res) {
                _this.products = res;
            });
        }
        ProductListController.prototype.toggleImage = function () {
            this.showImage = !this.showImage;
        };
        ProductListController.prototype.deleteProduct = function (product) {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1);
        };
        ProductListController.$inject = ['DataProductService', 'DataProductFactory'];
        return ProductListController;
    }());
    moduleFirstDemo.ProductListController = ProductListController;
    angular
        .module('demoModule')
        .controller('ProductListController', ProductListController);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=ProductListcontroller.js.map
