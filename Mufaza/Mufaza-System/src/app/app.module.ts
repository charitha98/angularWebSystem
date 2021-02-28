import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppRoutingModule } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { environment } from "../environments/environment";
import { OrderTypesService } from "./shared/order-types.service";
import { ProductService } from './shared/product.service';

import { RegisterService } from './shared/register.service';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesService } from './shared/employees.service';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryRiderListComponent } from './delivery/delivery-rider-list/delivery-rider-list.component';
import { DeliveryAllocateRiderComponent } from './delivery/delivery-allocate-rider/delivery-allocate-rider.component';
import { DeliveryReportComponent } from './delivery/delivery-report/delivery-report.component';
import { DeliveryAddRiderComponent } from './delivery/delivery-add-rider/delivery-add-rider.component';
import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { DeliveryService } from './shared/delivery.service';
import { TailoringsComponent } from './tailorings/tailorings.component';
import { TailoringComponent } from './tailorings/tailoring/tailoring.component';
import { PromoComponent } from './promo/promo.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromocodeComponent } from './promo/promocode/promocode.component';
import { PromoService } from './shared/promo.service';
import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";
import { TailoringService } from "./shared/tailoring.service";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SalaryemployeeComponent } from './salaryemployee/salaryemployee.component';
import { SalaryComponent } from './salaryemployee/salary/salary.component';
import { SalaryslipComponent } from './salaryemployee/salaryslip/salaryslip.component';
import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { MatSliderModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductStockComponent } from './products/product-stock/product-stock.component';
import { ProductStockListComponent } from './products/product-stock-list/product-stock-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/order.service';
import { TrendingComponent } from './trending/trending.component';
import { TrendingReportComponent } from './trending/trending-report/trending-report.component';
import { UploadComponent } from './suppliers/supplies/supply/upload/upload.component';
import { ReportComponent } from './suppliers/report/report.component';
import { PaymentReportComponent } from './suppliers/report/payment-report/payment-report.component';
import { QuantityReportComponent } from './suppliers/report/quantity-report/quantity-report.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { TailoringListComponent } from './tailorings/tailoring-list/tailoring-list.component'

import { OrderReportComponent } from './orders/order-report/order-report.component';


@NgModule({
   declarations: [
      AppComponent,
      SuppliersComponent,
      SupplierComponent,
      ProductsComponent,
      ProductComponent,
      
      SupplierListComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent,
      DeliveryComponent,
      DeliveryRiderListComponent,
      DeliveryAllocateRiderComponent,
      DeliveryReportComponent,
      DeliveryAddRiderComponent,
      MatConfirmDialogComponent,
      TailoringsComponent,
      TailoringComponent,
      PromoComponent,
      PromoListComponent,
      PromocodeComponent,
      SuppliesComponent,
      ProductListComponent,
      SalaryemployeeComponent,
      SalaryComponent,
      SalaryslipComponent,
      SupplyComponent,
      ProductStockComponent,
      ProductStockListComponent,
      OrdersComponent,
      OrderReportComponent,
      TrendingComponent,
      TrendingReportComponent,
      UploadComponent,
      ReportComponent,
      PaymentReportComponent,
      QuantityReportComponent,
      CustomerComponent,
      CustomerListComponent,
      TailoringListComponent
   ],
   imports: [
      BrowserModule,
      MatSliderModule,
      AppRoutingModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MaterialModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      MatExpansionModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
   ],
   providers: [
      SuppliersService,
      OrderTypesService,
      ProductService,
      EmployeesService,
      RegisterService,
      DatePipe,
      DeliveryService,
      SuppliesService,
      TailoringService,
      PromoService,
      OrderService,
      CustomerService
      
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      SupplierComponent,
      ProductComponent,
      EmployeeComponent,
      DeliveryAddRiderComponent,
      DeliveryAllocateRiderComponent,
      MatConfirmDialogComponent,
      PromoComponent,
      PromocodeComponent,
      SupplyComponent,
      ProductStockComponent,
      ProductStockListComponent,
      UploadComponent,
      ReportComponent,
      PaymentReportComponent,
      QuantityReportComponent,
      TailoringComponent
   ]
})
export class AppModule { }
  