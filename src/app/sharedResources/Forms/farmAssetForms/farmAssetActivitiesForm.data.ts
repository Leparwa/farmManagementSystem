import { SibasiFarmModuleForm } from "../../models/farmModels.model";

export const farmAssetActivitiesForm:SibasiFarmModuleForm={
    
    fields:[
        {
            fieldGroupClassName: "row",
           
            fieldGroup: [
                {
                    className: 'col-6 mt-3',
                    key: 'activity',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Activity Type',
                    templateOptions: {
                      label: 'Asset Activity',
                      type:'text',
                      required: true,
                      placeholder:'Enter Asset Activity', 
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'activityStartDate',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'Activity Start Date',
                    templateOptions: {
                      label: 'Asset Activity Start Date',
                      type:'Date',
                      required: true,
                     
                     
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'activityEndDate',
                    type: 'input',
                    isShowOnTable: true,
                    displayedTableName:'End/Expected Date',
                    templateOptions: {
                      label: 'Activity Expected/End Date',
                      type:'Date',
                      required: true,
                     
                     
                    },
                  },
                //activityDate
                {
                    className: 'col-6 mt-3',
                    key: 'assetActivityAssignerID',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Approver ID',
                    templateOptions: {
                      label: 'Asset Activity Approver ID',
                      type:'text',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                      ],
                    
                    }, 
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'assetActivityStatus',
                    type: 'select',
                    isShowOnTable: true,
                    displayedTableName:'Status',
                    templateOptions: {
                      label: 'Asset Status On Assignment',
                      required: true,
                      placeholder:'--select--',
                      onSelect: true,
                      options: [
                        {label: 'borrowed', value: 'borrowed'},
                        {label: 'repair', value: 'repair'},
                        {label: 'returned', value: 'returned'},
                      
                      ],
                    },
                  },
                  {
                    className: 'col-6 mt-3',
                    key: 'assigneeFarmRole',
                    type: 'select',
                    isShowOnTable: false,
                    displayedTableName:'Asset Assignee Role',
                    templateOptions: {
                      label: 'Role Of Assignee In The Farm',
                      type:'text',
                      required: true,
                      placeholder:'--select role--',
                      onSelect: true,
                      options: [
                        {label: 'staff', value: 'staff'},
                        {label: 'non staff', value: 'non staff'},
                      
                      ],
                    
                    },
                 
                  
                  },
                  {
                    className: 'col-12 mt-3',
                    key: 'activityAssigneeID',
                    type: 'select',
                    isShowOnTable: false,
                    displayedTableName:'Assignee ID',
                    templateOptions: {
                      label: 'Assignee ID',
                      type:'text',
                      required: true,
                      placeholder:'--select staff id--',
                      onSelect: true,
                      options: [
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                        {label: 'sibasi-farm-staff-32', value: 'sibasi-farm-staff-32'},
                      
                      ],
                    
                    },
                    hideExpression:"!model.assigneeFarmRole || model.assigneeFarmRole ==='non staff'"

                  
                  },
                  {
                    className: 'col-12 mt-3',
                    key: 'activityAssignee',
                    type: 'input',
                    isShowOnTable: false,
                    displayedTableName:'Assignee Name',
                    templateOptions: {
                      label: 'Assignee Name',
                      placeholder:'Enter Assignee Name',
                      required: true,
                    },
                    hideExpression:"!model.assigneeFarmRole || model.assigneeFarmRole ==='staff'"
                  },
                  {
                    className: 'col-12 mt-3',
                    key: 'activityAssigneeAddress',
                    type: 'textarea',
                    isShowOnTable: false,
                    displayedTableName:'Assignee Address',
                    templateOptions: {
                      label: 'Assignee Address',
                      placeholder:'Enter Assignee Address',
                      required: true,
                      rows:5,
                    },
                    hideExpression:"!model.assigneeFarmRole || model.assigneeFarmRole ==='staff'"
                  },
                
            ]
        }
    ],
   
}
