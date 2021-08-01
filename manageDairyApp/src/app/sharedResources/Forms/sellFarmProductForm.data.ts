import { viewClassName } from "@angular/compiler";
import { SibasiFarmModuleForm } from "../models/farmModels.model";

export const sellFarmProductForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'productType',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Product Type',
                  
                    templateOptions: {
                      label: 'Select Product Type',
                      type:'text',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'milk', value: 'milk'},
                        {label: 'meat', value: 'meat'},
                        {label: 'Egg', value: 'egg'},
                        {label: 'Animal Skin', value: 'hidesOrSkin'},
                      ],
                    
                    },
                    // expressionProperties: {
                    //     'templateOptions.onSelect': function view($viewValue, modelValue, $scope) {
                    //         console.log($viewValue)
                    //         }
                    // },
                  
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'buyerName',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Buyer Name',
                    templateOptions: {
                      label: 'Buyer Name',
                      type:'text',
                      required: true,
                      placeholder:'Enter The Name Of The Buyer',
                     
                     
                    },
                   
          
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'buyerPhone',
                    type: 'input',
                    isShowOnTable: false,
                    displayedTableName:'Buyer Phone',
                    templateOptions: {
                      label: 'Buyer Phone Number',
                      type:'text',
                      required: true,
                      placeholder:'Enter Phone Number Of The Buyer',
                     
                    },
                   
          
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'buyerEmail',
                    type: 'input',
                    isShowOnTable: false,
                    displayedTableName:'Buyer Email',
                    templateOptions: {
                      label: 'Buyer Email Address',
                      type:'text',
                      required: false,
                      placeholder:'Enter The Email Address Of The Buyer',
                     
                    },
                  
          
                  },
                  {
                    className: 'col-12 mt-3',
                    key: 'buyerAddress',
                    type: 'textarea',
                    isShowOnTable: false,
                    displayedTableName:'Buyer Address',
                    templateOptions: {
                      label: 'Buyer Address',
                      type:'text',
                      required: true,
                      rows:3,
                      placeholder:'Enter The Address Of The Buyer',
                     
                    },
                    // expressionProperties: {
                    //   'templateOptions.disabled': '!model.animalId',
                    // },
          
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'quantityBought',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Quantity Bought',
                    templateOptions: {
                      label: 'Quantity Bought',
                      type:'number',
                      required: true,
                      
                      placeholder:'Quantity',
                     
                    },
                   
                 
          
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'pricePerQuantity',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Price Per Quantity',
                    templateOptions: {
                      label: 'Price/Quantity',
                      type:'number',
                      required: true,  
                      disabled:true                  
                    },
                    // expressionProperties: {
                    //   disabled: true,
                    // },
          
                  },
                  {
                    className: 'col-4 mt-3',
                    key: 'totalPrice',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Total Price',
                    templateOptions: {
                      label: 'Total Price',
                      type:'number',
                      required: true,  
                      disabled:true                 
                    },
                 
          
                  },
                  {
                    className: 'col-4 mt-3',
                    key: 'amountPaid',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Amount Paid',
                    templateOptions: {
                      label: 'Total  Amount Paid',
                      type:'number',
                      required: true,  
                      disabled:false                  
                    },
                    // expressionProperties: {
                    //   disabled: true,
                    // },
          
                  },
                  {
                    className: 'col-4 mt-3',
                    key: 'balance',
                    type: 'input',
                    isShowOnTable: true,
                    // defaultValue:'44',
                    displayedTableName:'Balance Due',
                    templateOptions: {
                      label: 'Balance Due',
                      type:'number',
                      required: true,  
                      disabled:true                  
                    },
                    // expressionProperties: {
                    //   disabled: true,
                    // },
          
                  },
            ]
        }
    ],
   
}





