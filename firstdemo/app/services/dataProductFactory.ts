namespace moduleFirstDemo {
    'use strict';

    export interface IDataProductFactory {
        getProducts:()=> ng.IPromise<moduleFirstDemo.domain.IProduct[]>;
    }
    export class DataProductFactory implements IDataProductFactory {
        static $inject: Array<string> = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getProducts(): ng.IPromise<moduleFirstDemo.domain.IProduct[]>{
            return this.$http.get('http://localhost:3000/products')
            .then((response:ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IProduct[]>):
                moduleFirstDemo.domain.IProduct[] =>{
                    return <moduleFirstDemo.domain.IProduct[]> response.data;
                });
        };

        insertProduct(): ng.IPromise<any>{
            return this.$http.get('http://localhost:3000/products')
            .then((response:ng.IHttpPromiseCallbackArg<moduleFirstDemo.domain.IProduct[]>):
                moduleFirstDemo.domain.IProduct[] =>{
                    return <moduleFirstDemo.domain.IProduct[]> response.data;
                });
        };
    }

    function factory($http:ng.IHttpService):IDataProductFactory {
        return new DataProductFactory($http);
    }

    angular
        .module('demoModule')
        .factory('DataProductFactory', factory);
}