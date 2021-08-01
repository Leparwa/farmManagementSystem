import { INavData } from "@coreui/angular";
export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: 'farmer',
    icon: 'icon-speedometer'
  },

  {
    name: 'Manage Farm Produce',
    url: '/dashboard',
    // icon: 'icon-apps-settings',
    // badge: {
    //   variant: 'info',
    //   text: 'milk'
    // },
    children:[
   
      {
        name: 'Collected Products',
        url: 'manage-farm/collected-products',
        icon: 'icon-list'
      },
      {
        name: 'Collect Product',
        url: 'manage-farm/collect-product',
        icon: 'icon-list'
      },
      {
        name: 'Sold Product',
        url: 'manage-farm/sold-product',
        icon: 'icon-list'
      },
     {
       name:'Invoice',
       url:'manage-farm/product-invoice',
       icon:'icon-list'
     }
    ]
  },

  {
    name: 'Manage Animals',
    url: 'manageAnimals/animalsList',
    children: [
    
      {
        name: 'Animals List',
        url: 'manage-animal/animals-list',
        icon: 'icon-list'
      },
     
      {
        name: 'Sold Animal',
        url: 'manage-animal/sold-animals',
        icon: 'icon-list'
      },
      {
        name: 'Stalls',
        url: 'manage-animal/add-stall',
        icon: 'icon-list'
      },
    ]
  },
 
  

  {
    name: 'Farm Inventory',
    url: 'inventory/animal-feeds',
    children: [
    
      {
        name: 'Animal feeds',
        url: 'inventory/animal-feeds',
        icon: 'icon-list'
      },
      {
        name: 'Animal medicines',
        url: 'inventory/animal-medicines',
        icon: 'icon-list'
      },
      {
        name: 'Farm Tools',
        url: 'inventory/farm-tools',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'Farm Reports',
    url: 'Reports/farm-expenses',

    children: [
    
      {
        name: 'Farm Expense Report',
        url: 'Reports/farm-expenses',
        icon: 'icon-list'
      },
      {
        name: 'Milk Collection Report',
        url: 'Reports/milk-collection',
        icon: 'icon-list'
      },
      {
        name: 'Milk Sell Report',
        url: 'Reports/milk-sells',
        icon: 'icon-list'
      },
      {
        name: 'Vaccine Monitor',
        url: 'farmer/animal-vaccination',
        icon: 'icon-list'
      },
      {
        name: 'Vaccine Anticipation',
        url: 'Reports/vaccination-anticipation',
        icon: 'icon-list'
      },
      {
        name: 'Animal Sale Report',
        url: 'Reports/animal-sale',
        icon: 'icon-list'
      },
      {
        name: 'Animals Statistic',
        url: 'Reports/animal-statistics',
        icon: 'icon-list'
      },
    ]
  },
];
