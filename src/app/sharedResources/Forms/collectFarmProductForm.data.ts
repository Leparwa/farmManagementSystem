import {  SibasiFarmModuleForm } from "../models/farmModels.model";

export const collectFarmProductForm:SibasiFarmModuleForm=
{
  
  fields: [
      {
        fieldGroupClassName: "row",
        fieldGroup: [
          {
            className: 'col-6 mt-3',
            type: 'select',
            key: 'animalType',
            isShowOnTable: true,
            displayedTableName:'Animal Type',
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
            key: 'collectedAt',
            displayedTableName:'Product Collected At',
            isShowOnTable: true,
            templateOptions: {
              type:'text',
              label: 'Product Collected At?',
              required: true,
              placeholder:'--select--',
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
        ],
      },
      {
        fieldGroupClassName: "row",
        fieldGroup: [
          {
            className: 'col-6 mt-3',
            key: 'animalId',
            type: 'select',
            isShowOnTable: true,
            displayedTableName:'Animal ID',
            templateOptions: {
              label: 'Select Animal ID',
              type:'text',
              required: true,
              placeholder:'--select--',
              options: [
                {label: 'sibasi-farm-animal-02', value: 'sibasi-farm-animal-02'},
                {label: 'sibasi-farm-animal-03', value: 'sibasi-farm-animal-03'},
                {label: 'sibasi-farm-animal-04', value: 'sibasi-farm-animal-04'},
                {label: 'sibasi-farm-animal-05', value: 'sibasi-farm-animal-05'},
                {label: 'sibasi-farm-animal-09', value: 'sibasi-farm-animal-09'},
                {label: 'sibasi-farm-animal-012', value: 'sibasi-farm-animal-012'},
                {label: 'sibasi-farm-animal-07', value: 'sibasi-farm-animal-07'},
                {label: 'sibasi-farm-animal-08', value: 'sibasi-farm-animal-08'},
              ],
            },

          },
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
              options: [
                {label: 'milk', value: 'milk'},
                {label: 'meat', value: 'meat'},
                {label: 'Egg', value: 'egg'},
                {label: 'Animal Skin', value: 'hidesOrSkin'},
              ],
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.animalId',
            },
  
          },
          
        
        ], 
        key:'animalProduct',
    },
    {
      fieldGroupClassName:'row',
      fieldGroup:[
        {
          className: 'col-4 mt-3',
          key: 'quantity',
          type: 'input',
          isShowOnTable: true,
          displayedTableName:'Quantity',
          templateOptions: {
            label: 'Milk Quantity (in litres)',
            type:'text',
            required: true,
          },
        },
        {
          className: 'col-4 mt-3',
          key: 'Type',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:' Milk Type',
          templateOptions: {
            label: 'Milk Type',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
            
              {label: 'Raw Milk', value: 'rawMilk'},
            
            ],
          },
        }, 
        {
          className: 'col-4 mt-3',
          key: 'fatContent',
          type: 'input',
          isShowOnTable: false,
          displayedTableName:'Fat Content',
          templateOptions: {
            label: 'Milk Fat (in percentage)',
            type:'number',
            required: true,
          },
        },
        
      ],
     
      hideExpression: "model.animalProduct.productType !='milk'",
    },
    {
      fieldGroupClassName:'row',
      fieldGroup:[
        {
          className: 'col-6 mt-3',
          key: 'quantity',
          type: 'input',
          isShowOnTable: false,
          isShowData:true,
          displayedTableName:'Quantity',
          templateOptions: {
            label: 'Number Of Eggs Collected',
            type:'number',
            required: true,
          },
        },
        {
          className: 'col-6 mt-3',
          key: 'grade',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:' Egg Grade',
          templateOptions: {
            label: 'Egg Grade',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Grade AA', value: 'Grade AA'},
              {label: 'Grade A', value: 'Grade A'},
              {label: 'Grade B', value: 'Grade B'},
            ],
          },
        }, 
        {
          className: 'col-6 mt-3',
          key: 'size',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:' Egg Size',
          templateOptions: {
            label: 'Egg Size',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Jumbo', value: 'jumbo'},
              {label: 'Small', value: 'small'},
              {label: 'Large', value: 'large'},
            ],
          },
        },
        {
          className: 'col-6 mt-3',
          key: 'color',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:' Egg Color',
          templateOptions: {
            label: 'Egg Color',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Brown', value: 'Brown'},
              {label: 'White', value: 'Brown'},
            ],
          },
        },
        
      ],
     
       hideExpression: "model.animalProduct.productType !='egg'",

    },
    {
      fieldGroupClassName:'row',
      fieldGroup:[
        {
          className: 'col-6 mt-3',
          key: 'quantity',
          type: 'input',
          isShowOnTable: false,
          isShowData:true,
          displayedTableName:'Weight',
          templateOptions: {
            label: 'Hide/Skin Weight (in kg)',
            type:'number',
            required: true,
          },
        },
        {
          className: 'col-6 mt-3',
          key: 'type',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:'Type',
          templateOptions: {
            label: 'Type',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Hide', value: 'Hide'},
              {label: 'Skin', value: 'SKin'},
            
            ],
          },
        }, 
        {
          className: 'col-12 mt-3',
          key: 'describe',
          type: 'textarea',
          templateOptions: {
            label: 'Describe The State Of The Product',
            placeholder: 'Give a brief description of this product ',
            rows: 5,
            required: true,
          }, 
        },
        
      ],
     
      hideExpression: "model.animalProduct.productType !='hidesOrSkin'",
    },
    {
      fieldGroupClassName:'row',
      fieldGroup:[
        {
          className: 'col-6 mt-3',
          key: 'quantity',
          type: 'input',
          isShowOnTable: false,
          isShowData:true,
          displayedTableName:'Quantity',
          templateOptions: {
            label: 'Meat Quantity (in kg)',
            type:'number',
            required: true,
          },
        },
        {
          className: 'col-6 mt-3',
          key: 'type',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:' Meat Type',
          templateOptions: {
            label: 'Meat Type',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'Red', value: 'Red'},
              {label: 'White Meat', value: 'White'},
            
            ],
          },
        }, 
        
      ],
     
      hideExpression: "model.animalProduct.productType !='meat'",
    },
    {
      fieldGroupClassName:'row',
      fieldGroup:[
        {
          className: 'col-12 mt-3',
          key: 'collecterId',
          type: 'select',
          isShowOnTable: false,
          displayedTableName:'Staff ID',
          templateOptions: {
            label: 'Select Your Staff ID Number',
            type:'text',
            required: true,
            placeholder:'--select--',
            options: [
              {label: 'sibasi-farm-staff-02', value: 'sibasi-farm-staff-02'},
              {label: 'sibasi-farm-staff-03', value: 'sibasi-farm-staff-03'},
              {label: 'sibasi-farm-staff-04', value: 'sibasi-farm-staff-04'},
              {label: 'sibasi-farm-staff-05', value: 'sibasi-farm-staff-05'},
              {label: 'sibasi-farm-staff-09', value: 'sibasi-farm-staff-09'},
              {label: 'sibasi-farm-staff-012', value: 'sibasi-farm-staff-012'},
              {label: 'sibasi-farm-staff-07', value: 'sibasi-farm-staff-07'},
              {label: 'sibasi-farm-staff-08', value: 'sibasi-farm-staff-08'},
            ],
          },
        },
      ]
    }
     
  ]
}