import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageFarmService } from '../../services/manage-farm.service';

@Component({
  selector: 'app-farm-product-invoice',
  templateUrl: './farm-product-invoice.component.html',
  styleUrls: ['./farm-product-invoice.component.scss']
})
export class FarmProductInvoiceComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private manageFarmService:ManageFarmService
  ) { }

  ngOnInit(): void {
    this.getSoldItem()
  }
  getSoldItem(){
    let itemIndex = this.activatedRoute.snapshot.queryParams.product
    console.log(itemIndex)
    this.manageFarmService.getOneSoldProduct(itemIndex).subscribe((res)=>{
      console.log(res)
    })
  }
}
