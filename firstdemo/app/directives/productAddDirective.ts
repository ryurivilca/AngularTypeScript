namespace moduleFirstDemo {

    interface IProductAddScope extends ng.IScope {
        currentProduct: moduleFirstDemo.domain.IProduct;
        productList: moduleFirstDemo.domain.IProduct[];
    }

    export class ProductAdd implements ng.IDirective {

        static instance(): ng.IDirective {
            return new ProductAdd;
        }
        scope={
            'productList':'='
        }
        restrict = 'E';
        templateUrl = 'app/directives/ProductAdd.html';
        controllerAs = 'ctrl';
        controller = function ($scope, $element) {
             this.save = function(){
                 console.log('saving...');                 
                 $scope.productList.push($scope.currentProduct);                 
             }          
        }        
    }
    angular.module('demoModule')
        .directive('productAdd', ProductAdd.instance)
}