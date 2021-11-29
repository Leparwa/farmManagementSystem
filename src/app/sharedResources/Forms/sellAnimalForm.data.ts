import { SibasiFarmModuleForm } from "../models/farmModels.model";

export const sellFarmAnimalForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'animalType',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Animal Type',
                  
                    templateOptions: {
                      label: 'Select Animal Type',
                      type:'text',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'cow', value: 'cow'},
                        {label: 'sheep', value: 'sheep'},
                        {label: 'chicken', value: 'chicken'},
                        {label: 'goat', value: 'goat'},
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
                    key: 'animaId',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Animal ID',
                  
                    templateOptions: {
                      label: 'Select Animal ID',
                      type:'text',
                      required: true,
                      placeholder:'--select--',
                      options: [
                        {label: 'csi-33', value: 'csi-33'},
                        {label: 'ssi-12', value: 'ssi-12'},
                        {label: 'ccsi-43', value: 'ccsi-43'},
                        {label: 'gsi-4', value: 'gsi-4'},
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
                    className: 'col-6 mt-3',
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
                    key: 'pricePerQuantity',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Current Valuation',
                    templateOptions: {
                      label: 'Animal Current Valuation',
                      type:'number',
                      required: false,  
                      disabled:true                  
                    },
                    // expressionProperties: {
                    //   disabled: true,
                    // },
          
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'totalPrice',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Total Price',
                    templateOptions: {
                      label: 'Total Price',
                      type:'number',
                      required: false,  
                      disabled:true                
                    },
                 
          
                  },
                  {
                    className: 'col-6 mt-3',
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
                    className: 'col-6 mt-3',
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
