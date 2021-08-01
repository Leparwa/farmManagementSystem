import { SibasiFarmModuleForm } from "../models/farmModels.model";

export const addStallForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'stall_number',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Stall No',
                    templateOptions: {
                      label: 'Stall Number',
                      type:'text',
                      required: true,
                      placeholder:'Enter Stall Number',
                     
                     
                    },
                   
          
                  },
                {
                    className: 'col-6 mt-3',
                    key: 'status',
                    type: 'select',
                    isShowOnTable: false,
                    displayedTableName:'Status',
                    templateOptions: {
                      label: 'Status',
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
                    isShowOnTable: false,
                    displayedTableName:'Animals',
                    templateOptions: {
                      label: 'Select Animals To Be added',
                      required: true,
                      multiple: true,
                      options: [
                        {label: 'csi-33', value: 'csi-33'},
                        {label: 'ssi-12', value: 'ssi-12'},
                        {label: 'ccsi-43', value: 'ccsi-43'},
                        {label: 'gsi-4', value: 'gsi-4'},
                        {label: 'gsi-4', value: 'gsi-4'},
                      ],
                    
                    },
                    // expressionProperties: {
                    //     'templateOptions.onSelect': function view($viewValue, modelValue, $scope) {
                    //         console.log($viewValue)
                    //         }
                    // },
                  
                  },
                  
            ]
        }
    ],
   
}
