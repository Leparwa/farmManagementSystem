import {Component} from '@angular/core';

import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized:boolean;
  // public navItems = navItems;

   public navItems = [...navItems];
   ngOnInit(): void {
     this.sidebarMinimized=false;
  }
  toggleMinimize(e) {
    console.log("toggle click"+e)
    this.sidebarMinimized = e;
  }
 
}
