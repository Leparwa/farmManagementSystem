import { SibasiFarmModuleForm } from "../../models/farmModels.model";

export const farmPurchasesForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
            fieldGroup: [
              
              {
                className: 'col-6 mt-3',
                key: 'purchaseMadeBy',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'Purchaser Name',
                templateOptions: {
                  label: 'Name of person making the purchase',
                  type:'text',
                  required: true,
                  placeholder:'Enter your official name',
               
                 
                },
              },
              {
                className: 'col-6 mt-3',
                key: 'purchaseMadeById',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'Purchaser ID',
                templateOptions: {
                  label: 'ID Number(work id) of person making the purchase',
                  type:'text',
                  required: true,
                  placeholder:'Enter your work ID number',
               
                 
                },
              },
                {
                    className: 'col-6 mt-3',
                    key: 'itemType',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Item Type',
                    templateOptions: {
                      label: 'Type of the item you want to purchase',
                      type:'text',
                      required: true,
                      placeholder:'Choose item type',
                      options: [
                        {label: 'fertilizers', value: 'fertilizers'},
                        {label: 'animals feeds', value: 'animals-feeds'},
                        {label: 'farm tools', value: 'farm-tools'},
                        {label: 'insecticide', value: 'insecticide'},
                        {label: 'herbicides', value: 'herbicides'},
                        {label: 'crop seeds', value: 'crop-seeds'},
                        {label: 'farm machineries', value: 'farm-machineries'},
                        {label: 'animals medicines', value: 'animals-medicines'},

                      ],
                     
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'itemName',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Item Name',
                    templateOptions: {
                      label: 'Name of the item you want to purchase',
                      type:'text',
                      required: true,
                      placeholder:'Enter the name of item',
                   
                     
                    },
                  },
                  {
                    className: 'col-12 w-100 mt-3',
                    key: 'purchaseType',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Purchase From',
                    templateOptions: {
                      label: 'How do you want to purchase this item',
                      type:'text',
                      required: true,
                      placeholder:'--Choose--',
                      options: [
                        {label: 'purchase from suggested vendors', value: 'suggest-vendor'},
                        {label: 'purchase from new vendor', value: 'new-vendor'},
                      ],
                     
                    },
                  },
            ]
           

        },
        {
          fieldGroupClassName:'row',
        
          fieldGroup:[
            {
              className:'col-12 mt-4',
              template: '<h3 class="text-danger d-flex justify-content-center"><strong>Information About The Vendor</strong></h3> <hr>',
            },
            {
              className: 'col-6 mt-3',
              key: 'vendorId',
              type: 'input',
              isShowOnTable: true,
              defaultValue:'dksdsoid',
              displayedTableName:'Vendor ID',
              templateOptions: {
                label: 'Vendor ID',
                type:'text',
                disabled:true,
                required: true,
                placeholder:'Enter the name of the vendor',
             
               
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'vendorName',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Vendor',
              templateOptions: {
                label: 'Vendor Name',
                type:'text',
                required: true,
                placeholder:'Enter the name of the vendor',
             
               
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'vendorItemsCategories',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Vendor Items Category',
              templateOptions: {
                label: 'Vendor Items\'s Category',
                type:'text',
                required: true,
                placeholder:'Enter the name of the vendor',
             
               
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'vendorCustomerRating',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Vendor Ratings',
              templateOptions: {
                label: 'Rate The Vendor(0-10)',
                type:'number',
                required: false,
                placeholder:'Rate vender on a scale of 1-10',
             
               
              },
            
            },
            {
              className:'col-12 mt-4',
              template: '<h5><strong>Vendor Address</strong></h5>',
            },
            
              {
                
                className: 'col-6 mt-3',
                key: 'contact',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'Contacts',
                templateOptions: {
                  label: 'Vendor Contacts',
                  type:'text',
                  required: true,
                  placeholder:'Enter Vendor\s contacts',
               
                 
                },
              
              },
              {
                
                className: 'col-6 mt-3',
                key: 'location',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'Vendor Location',
                templateOptions: {
                  label: 'Vendor Location',
                  type:'text',
                  required: true,
                  placeholder:'Enter Vendor\s Location',
               
                 
                },
              
              },
              {
                
                className: 'col-6 mt-3',
                key: 'vendorWebsite',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'Website Url',
                templateOptions: {
                  label: 'Vendor Website url',
                  type:'text',
                  required: false,
                  placeholder:'Enter Vendor\s website url',
               
                 
                },
              
              },
              {
                
                className: 'col-6 mt-3',
                key: 'email',
                type: 'input',
                isShowOnTable: true,
                displayedTableName:'email address',
                templateOptions: {
                  label: 'Vendor Email Address',
                  type:'text',
                  required: false,
                  placeholder:'Enter Vendor\s valid email address',
               
                 
                },
              
              },
              {
                
                className: 'col-12 mt-3',
                key: 'postalAddress',
                type: 'textarea',
                isShowOnTable: true,
                displayedTableName:'postal address',
                templateOptions: {
                  label: 'Vendor Postal Address',
                  type:'text',
                  rows:4,
                  required: false,
                  placeholder:'Enter Vendor\s Postal address e.g P.O Box ---',
               
                 
                },
              
              },
          ],
          hideExpression: "model.purchaseType !='new-vendor'",

        },
        {
          
          fieldGroupClassName:'row',
          fieldGroup:[
            
            {
              className:'col-12 mt-4',
              template: '<h3 class="text-danger d-flex justify-content-center"><strong>Information About The Item Being Purchased</strong></h3> <hr>',
            },
            
            {
              className: 'col-6 mt-3',
              key: 'farmItemType',
              type: 'select',
              isShowOnTable: true,
              displayedTableName:'Item Type',
              templateOptions: {
                label: 'Type of the item you want to purchase',
                type:'text',
                required: true,
                placeholder:'Choose item type',
                options: [
                  {label: 'fertilizers', value: 'fertilizers'},
                  {label: 'animals feeds', value: 'animals-feeds'},
                  {label: 'farm tools', value: 'farm-tools'},
                  {label: 'insecticide', value: 'insecticide'},
                  {label: 'herbicides', value: 'herbicides'},
                  {label: 'crop seeds', value: 'crop-seeds'},
                  {label: 'farm machineries', value: 'farm-machineries'},
                  {label: 'animals medicines', value: 'animals-medicines'},

                ],
             
              },
            },
            {
              className: 'col-6 mt-3',
              key: 'itemName',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Item ID',
              templateOptions: {
                label: 'Name of the item you want to purchase',
                type:'text',
                required: true,
                placeholder:'Enter the name of item',
             
               
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'itemId',
              type: 'input',
              isShowOnTable: true,
              defaultValue:'kskkaks',
              displayedTableName:'Item ID',
              templateOptions: {
                label: 'Item purchased Id',
                type:'text',
                disabled:true,
                required: true, 
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'itemPrice',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Item Price',
              templateOptions: {
                label: 'Price of the item(Ksh)',
                placeholder:'enter the buying price of the item',
                type:'text',
                required: true, 
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'itemManufacturer',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Manufacturer',
              templateOptions: {
                label: 'Item Manufacturer',
                placeholder:'enter the name of manufacturer',
                type:'text',
                required: true, 
              },
            
            },
            {
              className: 'col-6 mt-3',
              key: 'itemImageUrl',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Image',
              templateOptions: {
                label: 'Enter item image url',
                placeholder:'provide image url',
                type:'text',
                required: true, 
              },
            
            },
            {
              className: 'col-4 mt-3',
              key: 'itemStatus',
              type: 'select',
              isShowOnTable: true,
              displayedTableName:'Item Status',
              templateOptions: {
                label: 'Select Item Status',
                placeholder:'--select status--',
                type:'text',
                required: true, 
                options: [
                  {label: 'refurbished', value: 'refurbished'},
                  {label: 'new', value: 'new'},
                ],
               
              },
            
            },
            {
              className: 'col-4 mt-3',
              key: 'itemManufacturedDate',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Manufactured Date',
              templateOptions: {
                label: 'Manufactured Date',
                type:'date',
                required: true,  
              },
            
            },
            {
              className: 'col-4 mt-3',
              key: 'itemExpiryDate',
              type: 'input',
              isShowOnTable: true,
              displayedTableName:'Expiry Date',
              templateOptions: {
                label: 'Expiry Date',
                type:'date',
                required: true, 
               
               
              },
            
            },
            {
              className: 'col-12 mt-3',
              key: 'itemDescription',
              type: 'textarea',
              isShowOnTable: false,
              displayedTableName:'Description',
              templateOptions: {
                label: 'Item Description',
                type:'text',
                placeholder:'Brief description the Item',
                rows:4,
                required: true, 
               
               
              },
            
            },
            {
              className: 'col-12 mt-3',
              key: 'itemUsageProcedure',
              type: 'textarea',
              isShowOnTable: false,
              displayedTableName:'Usage',
              templateOptions: {
                label: 'Item Usage Procedure',
                placeholder:'describe item usage in number format',
                type:'text',
                rows:4,
                required: true, 
               
               
              },
            
            },
          ],
          
          hideExpression: "model.purchaseType !='new-vendor'",

        },
    ]
}