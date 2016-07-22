namespace moduleFirstDemo {

    interface IProductEditScope extends ng.IScope {
        currentProduct: moduleFirstDemo.domain.IProduct;
        productList: moduleFirstDemo.domain.IProduct[];
    }

    export class ProductEdit implements ng.IDirective {

        static instance(): ng.IDirective {
            return new ProductEdit;
        }
        scope={
            'productList':'=',
            'currentProduct':'='
        }
        restrict = 'E';
        templateUrl = 'app/directives/productEdit.html';
        controllerAs = 'ctrl';
        controller = function ($scope, $element) {
             this.save = function(){
                 console.log('saving...');                 
                 $scope.productList.push(this.currentProduct);                 
             }
        }        
    }
    angular.module('demoModule')
        .directive('productEdit', ProductEdit.instance)
}