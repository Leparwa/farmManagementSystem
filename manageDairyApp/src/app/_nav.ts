import { INavData } from "@coreui/angular";
export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: 'farmer',
    icon: 'icon-speedometer'
  },

  {
  
    name: 'Farm Products',
    url: 'manage-farm/collected-products',
   icon:'icon-bag',
    children:[
   
      {
        name: 'Collected Products',
        url: 'manage-farm/collected-products',
        icon: 'icon-basket-loaded'
      },
    
      {
        name: 'Sold Product',
        url: 'manage-farm/sold-product',
        icon: 'icon-options-vertical'
      },
     {
       name:'Invoice',
       url:'manage-farm/product-invoice',
       icon:'icon-docs'
     }
    ]
  },

  {
    name: 'Manage Farm',
    url: 'manageAnimals/animalsList',
    icon:'icon-settings',
    children: [
    
      {
        name: 'Farm Animals',
        url: 'manage-animal/animals-list',
        icon: 'icon-list',

        children:[
          {
            name: 'All Animals',
            url: 'manage-animal/animals-list',
            icon: 'icon-plus',
          },
          {
            name: 'Sold Animal',
            url: 'manage-animal/sold-animals',
            icon:'icon-close',
          }
        ]
      },
     
    
      {
        name: 'Farm Stalls',
        url: 'manage-animal/farm-stalls',
        icon: 'icon-bag'
      },
    ]
  },
 
  

  {
    name: 'Farm Inventory',
    url: 'inventory/animal-feeds',
    icon:'icon-wrench',
    children: [
      {
        name: 'Farm Assets',
        url: 'inventory/farm-assets',
        icon: 'icon-layers'
      },
      {
        name: 'Farm Inputs',
        url: 'inventory/farm-inputs',
        icon: 'icon-grid'
      },
      {
        name: 'Farm Purchases',
        url: 'inventory/farm-tools',
        icon:'icon-puzzle',
      },
    ]
  },
  {
    name: 'Farm Reports',
    url: 'Reports/farm-expenses',
    icon:'icon-chart',
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
