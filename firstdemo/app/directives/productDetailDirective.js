var moduleFirstDemo;
(function (moduleFirstDemo) {
    var Progresbar = (function () {
        function Progresbar() {
            this.restrict = 'E';
            this.templateUrl = 'app/directives/productDetail.html';
        }
        Progresbar.instance = function () {
            return new Progresbar;
        };
        return Progresbar;
    }());
    moduleFirstDemo.Progresbar = Progresbar;
    angular.module('demoModule')
        .directive('productDetail', Progresbar.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=productDetailDirective.js.map
