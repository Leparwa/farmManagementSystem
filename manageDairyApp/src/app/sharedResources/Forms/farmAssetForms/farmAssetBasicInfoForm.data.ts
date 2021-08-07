import { SibasiFarmModuleForm } from "../../models/farmModels.model";

export const farmAssetBasicForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'serial_number',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Serial Number',
                    templateOptions: {
                      label: 'Asset Serial Number',
                      type:'text',
                      required: true,
                      placeholder:'Enter Stall Number',
                     
                     
                    },
                  },
                {
                    className: 'col-6 mt-3',
                    key: 'asset_type',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Asset Type',
                    templateOptions: {
                      label: 'Asset Type',
                      type:'text',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'empty', value: 'empty'},
                        {label: 'full', value: 'full'},
                        {label: 'booked', value: 'booked'},
                        {label: 'under repair', value: 'under repair'},
                      ],
                    
                    },
                 
                  
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'asset',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Asset',
                    templateOptions: {
                      label: 'Asset Name',
                      required: true,
                     
                    
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'status',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'status',
                    templateOptions: {
                      label: 'Asset Current Status',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'new', value: 'new'},
                        {label: 'refurbished', value: 'refurbished'},
                        {label: 'old', value: 'old'},
                        {label: 'broken', value: 'broken'},
                        {label: 'under repair', value: 'under repair'},
                      ],
                    },
                  },
                  {
                    className: 'col-12 mt-3',
                    key: 'description',
                    type: 'textarea',
                    isShowOnTable: false,
                    displayedTableName:'Asset',
                    templateOptions: {
                      label: 'Asset Description',
                      placeholder: 'Give a brief description of this asset based on selected status',
                      rows: 5,
                      required: true,
                    }, 
                  },
            ]
        }
    ],
   
}
