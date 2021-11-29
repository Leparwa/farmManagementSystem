import { SibasiFarmModuleForm } from "../models/farmModels.model";

export const RegisterNewAnimalForm:SibasiFarmModuleForm={

  fields: [
   
    {
        
   
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          className: 'col-6 mt-3',
          type: 'select',
          key: 'animalType',
          isShowOnTable: true,
          displayedTableName:'Type',
          templateOptions: {
            label: 'Select Animal Type',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Cow', value: 'cow'},
              {label: 'Goat', value: 'goat'},
              {label: 'Sheep', value: 'sheep'},
              {label: 'Pig', value: 'pig'},
              {label: 'Chicken', value: 'chicken'},
            ],
          },
        },
        {
            className: 'col-6 mt-3',
            type: 'select',
            key: 'animalCategory',
            isShowOnTable: true,
            displayedTableName:'Category',
            templateOptions: {
              label: 'Select Animal Category',
              type:'text',
              required: true,
              placeholder:'--select--',
              options: [
                {label: 'Cow', value: 'cow'},
                {label: 'Goat', value: 'goat'},
                {label: 'Sheep', value: 'sheep'},
                {label: 'Pig', value: 'pig'},
                {label: 'Chicken', value: 'chicken'},
              ],
            },
            expressionProperties: {
                'templateOptions.disabled': '!model.animalType',
              },
          },
        {
            className: 'col-6 mt-3',
            type: 'select',
            key: 'location',
            displayedTableName:'Stall',
            isShowOnTable: true,
            templateOptions: {
              type:'text',
              label: 'Place Animal To?',
              required: true,
              placeholder:'--select Stall--',
              options: [
                {label: 'Stall 1', value: 'stall1'},
                {label: 'Stall 2', value: 'stall2'},
                {label: 'Stall 3', value: 'stall3'},
                {label: 'Stall 4', value: 'stall4'},
                {label: 'Stall 5', value: 'stall5'},
                {label: 'Stall 6', value: 'stall6'},
                {label: 'Stall 7', value: 'stall7'},
              ],
            },
           
          },
          {
            className: 'col-6 mt-3',
            type: 'input',
            key: 'animalId',
            displayedTableName:'Animal ID',
            isShowOnTable: true,
            templateOptions: {
              type:'text',
              label: 'Assign New ID',
              required: true,
             
            
            },
           
          },
        {
          className: 'col-6 mt-3',
          type: 'select',
          key: 'animalGender',
          displayedTableName:'Gender',
          isShowOnTable: true,
          templateOptions: {
            type:'text',
            label: 'Gender',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
            
            ],
          },
         
        },
        {
            className: 'col-6 mt-3',
            type: 'input',
            key: 'animalWeight',
            displayedTableName:'Animal Weight',
            isShowOnTable: false,
            templateOptions: {
              type:'text',
              label: 'Weight',
              required: true,
             
            
            },
           
          },
      
      ],
    },
  
    {
        fieldGroupClassName: "row",
        key:'animalAcquisitionProcess',
        fieldGroup: [
            {
                className: 'col-6 mt-3',
                type: 'textarea',
                key: 'acquistationStatus',
                displayedTableName:'Animal Status On Acquisition',
                isShowOnTable: false,
                templateOptions: {
                    label:"Describe animal's status on acquisition",
                    placeholder: 'Comment on status of this animal on acquisition',
                    rows: 3,
                    required: true,
                },
               
              },
            {
                className: 'col-6 mt-3',
                type: 'select',
                key: 'acquisition',
                displayedTableName:'Acquisition',
                isShowOnTable: true,
                templateOptions: {
                  type:'text',
                  label: 'How Did You Acquire The Animal',
                  required: true,
                  placeholder:'--select--',
                  options: [
                    {label: 'Inherited', value: 'Inherited'},
                    {label: 'Bought', value: 'Bought'},
                    {label: 'Born in farm', value: 'bornInFarm'},
                  ],
                },
               
              },
        ]
    },
    {
        fieldGroupClassName: "row",
        fieldGroup: [
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'inheritedWhen',
                displayedTableName:'Inherited when',
                isShowOnTable: false,
                templateOptions: {
                    label:"When did you inherit the animal",
                   type:'date'
                },
               
              },
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'inheritedFrom',
                displayedTableName:'Inherited from',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Animal Inherited from',
                  required: true,
                    placeholder:'Name Of The Person You Inherited The Animal From'
                },
               
              },
              {
                className: 'col-6 mt-3',
                type: 'textarea',
                key: 'inheritedWhy',
                displayedTableName:'Inheritance Reason',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Reason For Inheritance',
                  required: true,
                    placeholder:'Comment on reason for inheritance',
                    rows: 3,
                   
                },
               
              },
              {
                className:'col-3 mt-5',
                template: '<p class="d-flex justify-content-center">Upload Inheritance <br />Proof Document</p>',
              },
              {
                className: 'col-3 mt-5',
                key: 'inheritanceProof',
                type: 'file',
                templateOptions: {
                    className:'',
                    type:'file',
                      
                  },
              },
        ],
        hideExpression: "model.animalAcquisitionProcess.acquisition !='Inherited'",
    },
    { 
        fieldGroupClassName:"row",
        fieldGroup:[
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'dateOfBirth',
                displayedTableName:'Date Of Birth',
                isShowOnTable: false,
                templateOptions: {
                    label:"Date Of Birth",
                   type:'date'
                },
               
              },
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'weightWhenBorn',
                displayedTableName:'When On Birth',
                isShowOnTable: false,
                templateOptions: {
                  type:'number',
                  label: 'Weight On Birth',
                  required: true,
                    placeholder:'Weight On Birth'
                },
               
              },
              {
                className: 'col-4 mt-3',
                type: 'select',
                key: 'breedType',
                displayedTableName:'When On Birth',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Breed',
                  required: true,
                    placeholder:'--select breed type---',
                    options: [
                        {label: 'Fressian', value: 'Fressian'},
                        {label: 'ayshire', value: 'Ayshire'},
                        {label: 'zebu', value: 'zebu'},
                      ],
                },
               
              },
              {
                className: 'col-4 mt-3',
                type: 'select',
                key: 'pregnancyType',
                displayedTableName:'When On Birth',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Breed',
                  required: true,
                    placeholder:'--select pregnancy type---',
                    options: [
                        {label: 'Natural Pregnancy', value: 'Natural Pregnancy'},
                        {label: 'Artificial Insemination', value: 'Artificial Insemination'},
                        {label: 'Unknown', value: 'Unknown'},
                      ],
                },
               
              },
              {
                className: 'col-4 mt-3',
                type: 'input',
                key: 'parentId',
                displayedTableName:'Parent ID',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Serial Number / Identify Parent',
                    placeholder:'Identify The Parent',
                  
                },
               
              }
        ],
        hideExpression: "model.animalAcquisitionProcess.acquisition !='bornInFarm'",

    },
    {
        fieldGroupClassName: "row",
        fieldGroup: [
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'boughtWhen',
                displayedTableName:'Bought When',
                isShowOnTable: false,
                templateOptions: {
                    label:"When Did You Buy?",
                   type:'date'
                },
               
              },
            {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'boughtFrom',
                displayedTableName:'Bought From',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Enter The Name Of The Seller',
                  required: true,
                    placeholder:'Enter The Name Of The Seller You Bought Animal From'
                },
               
              },
              {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'buyingPrice',
                displayedTableName:'Buying Price',
                isShowOnTable: false,
                templateOptions: {
                  type:'number',
                  label: 'Buying Price',
                  required: true,
                    placeholder:'Enter The Buying Price (in dollars)'   
                },
               
              },
              {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'weightWhenBuying',
                displayedTableName:'Animal Weight',
                isShowOnTable: false,
                templateOptions: {
                  type:'number',
                  label: 'Weight When Buying',
                  required: true,
                    placeholder:'Enter The Weight Price (in kg)'   
                },
               
              },
              {
                className: 'col-6 mt-3',
                type: 'input',
                key: 'receiptNumber',
                displayedTableName:'Receipt Number',
                isShowOnTable: false,
                templateOptions: {
                  type:'text',
                  label: 'Enter Transaction Receipt Number',
                  required: true,
                    placeholder:'Enter The Weight Price'   
                },
               
              },
             
              {
                className:'col-3 mt-5',
                template: "<p class='d-flex justify-content-center'>Upload Transaction's <br />Receipt</p>",
              },
              {
                className: 'col-3 mt-5',
                key: 'receipt',
                type: 'file',
                templateOptions: {
                    className:'',
                    type:'file',
                      
                  },
              },
        ],
        hideExpression: "model.animalAcquisitionProcess.acquisition !='Bought'",
    }
]
}