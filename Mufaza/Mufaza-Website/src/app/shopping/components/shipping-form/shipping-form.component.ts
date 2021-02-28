import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Order } from "../../../shared/models/order";
import { ShoppingCartSummaryComponent } from '../shopping-cart-summary/shopping-cart-summary.component';
import { FormGroup } from '@angular/forms';
import { SummaryResolver } from '@angular/compiler';
import { NewPriceService } from 'shared/services/new-price.service';
import { Product } from 'shared/models/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
  providers: [DatePipe]
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('cart') cart: ShoppingCart;
  @Input('producr') product: Product;

  shipping = {};
  userSubscription: Subscription;
  userId: string;
  newPrice: number;
  datePlaced = new Date();
  datePlaced2: string;
  addressLine1:string;
  addressLine2: string;
  city:string;
  phone: number;
  
 

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private sharedService: NewPriceService,
    private datePipe: DatePipe) {

      this.datePlaced2 = this.datePipe.transform(this.datePlaced,'yyyy-MM-dd');
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping,this.datePlaced2, this.cart,this.sharedService.newprice);
    console.log(this.sharedService.newPrice);

    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  async enter(){
   this.shipping={name: "Savandi Subhartha",addressLine1: "madiwela",addressLine2: "kotte",city:"colombo",phone: "0773648388"};
  
}
}
