import { SibasiFarmModuleForm } from "../../models/farmModels.model";

export const farmInputForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'inputType',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Input Type',
                    templateOptions: {
                      label: 'Farm Input Type',
                      type:'text',
                      required: true,
                      placeholder:'Choose Input Type',
                      options: [
                        {label: 'fertilizer', value: 'fertilizer'},
                        {label: 'feeds', value: 'feeds'},
                        {label: 'seeds', value: 'seeds'},
                        {label: 'insecticide', value: 'insecticide'},
                        {label: 'pesticide', value: 'pesticide'},
                        {label: 'water', value: 'water'},
                      ],
                     
                    },
                  },
                {
                    className: 'col-6 mt-3',
                    key: 'inputName',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Input Name',
                    templateOptions: {
                      label: 'Farm Input Name',
                      type:'text',
                      required: true,
                      placeholder:'Name of farm input',
                   
                    }, 
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'quantity',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Quantity',
                    templateOptions: {
                      label: 'Quantity',
                      required: true,
                     
                    
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'buyingDate',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Date Bought',
                    templateOptions: {
                      type: 'date',
                      label: 'Choose The Date Bought',
                      required: true,
                     
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'expiryDate',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Expiry Date',
                    templateOptions: {
                     type:'date',
                      label: 'Date Of Expiry',
                      required: true,
                    }, 
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'acquisition',
                    type: 'select',
                    isShowOnTable: false,
                    displayedTableName:'Acquisition',
                    templateOptions: {
                     type:'text',
                      label: 'Input Acquired Through',
                      required: true,
                      placeholder:'---select---',
                      options: [
                        {label: 'purchase', value: 'purchase'},
                        {label: 'donation', value: 'donation'},
                        {label: 'other', value: 'other'},
                       
                      ],
                    }, 
                  },
            ]
        },
        {
            fieldGroupClassName:'row',
            fieldGroup:[
                {
                        className: 'col-6 mt-3',
                        key: 'boughtFrom',
                        type: 'input',
                        isShowOnTable: false,
                        displayedTableName:'Bought From',
                        templateOptions: {
                          label: 'Seller Name',
                          type:'text',
                          required: true,
                          placeholder:'Enter Seller Name',
                       
                        }, 
                      
                },
                {
                    className: 'col-6 mt-3',
                    key: 'buyingPrice',
                    type: 'input',
                    isShowOnTable: false,
                    displayedTableName:'Buying Price',
                    templateOptions: {
                      label: 'Buying Price',
                      type:'text',
                      required: true,
                      placeholder:'Enter Buying Price',
                   
                    }, 

                  
            },
            {
                className: 'col-6 mt-3',
                key: 'receiptNo',
                type: 'input',
                isShowOnTable: false,
                displayedTableName:'Receipt Number',
                templateOptions: {
                  label: 'Receipt Number',
                  type:'text',
                  required: true,
                  placeholder:'Enter Receipt Number',
               
                }, 

              
        },
        {
            className: 'col-6 mt-3',
            key: 'operationOfficiatedBy',
            type: 'input',
            isShowOnTable: false,
            displayedTableName:'Operation Officiated By',
            templateOptions: {
              label: 'Farm Input Addition Officiated/Approved By',
              type:'text',
              required: true,
              placeholder:'Enter Work ID',
           
            }, 
           },

                {
                    className: 'col-12 mt-3',
                    key: 'address',
                    type: 'textarea',
                    isShowOnTable: false,
                    displayedTableName:'seller Address',
                    templateOptions: {
                      label: 'Seller Address',
                      type:'text',
                      required: true,
                      rows:5,
                      placeholder:'street address, P.O Box, company name',
                   
                    }, 
                  
            },
            
            ],
            hideExpression: "model.acquisition !='purchase'",
 
        }
    ],
   
}
