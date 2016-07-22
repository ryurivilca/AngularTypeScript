namespace moduleFirstDemo {

    interface IProductDetailScope extends ng.IScope {
        value: number;
        showProgress: boolean;
    }

    export class Progresbar implements ng.IDirective {

        static instance(): ng.IDirective {
            return new Progresbar;
        }        
        restrict = 'E';
        templateUrl = 'app/directives/productDetail.html';
    }
    angular.module('demoModule')
        .directive('productDetail', Progresbar.instance)
}