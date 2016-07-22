namespace moduleFirstDemo {
    'use strict';
    //alias
    import IProduct = moduleFirstDemo.domain.IProduct;
    export interface IProductListController{
        title:string;
        products:IProduct[];
        showImage:boolean;
        newProduct:boolean;
        toggleImage():void;
    }
    export class ProductListController implements IProductListController {
        static $inject: Array<string> = ['DataProductService','DataProductFactory'];
        title:string;
        products:IProduct[];
        showImage:boolean;

        constructor(private DataProductService: moduleFirstDemo.IDataProductService,
        private DataProductFactory:moduleFirstDemo.IDataProductFactory) {
           this.title="Lista de productos"; 
           this.showImage=false;                     
           this.DataProductFactory.getProducts().then(
               res=>{
                   this.products=res;                   
               }
           );           
        }

        toggleImage():void{
            this.showImage=!this.showImage;
        }

        deleteProduct(product: moduleFirstDemo.domain.IProduct):void{
            var index = this.products.indexOf(product)
            this.products.splice(index,1);
        }
    }

    angular
        .module('demoModule')
        .controller('ProductListController', ProductListController);
}