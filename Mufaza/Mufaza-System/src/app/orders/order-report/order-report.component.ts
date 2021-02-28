import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatProgressSpinnerModule } from '@angular/material';
import { OrderService } from 'src/app/shared/order.service';
import html2canvas from 'html2canvas';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { NotifcationService } from 'src/app/shared/notifcation.service';
import { DialogService } from 'src/app/shared/dailog.service';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
})
export class OrderReportComponent implements OnInit {
orders$;
progress;
showSpinner = true;
searchKey: string;

  constructor(private service: OrderService,private dialog: MatDialog, private   notificationService: NotifcationService, private dialogService: DialogService){
    this.orders$ = service.getOrders();
  }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =[`Order ID`,`shipping.name`,`shipping.phone`,`shipping.addressLine1`,`datePlaced`,`totalprice`,`newprice`,`Quantities`,`Titles`,'actions'];
  
  
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.service.getOrders().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);

        if(array.length < 151){
        this.progress = array.length;
      }else
        this.progress = Buffer;
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.showSpinner = false;
      }
    );
  }
  onSearchclear(){
    this.searchKey = "";
    this.applyfilter();
  }
  applyfilter(){

    this.listData.filter = this.searchKey.trim().toLowerCase();

  }
  ondelete($key){
    this.dialogService.openConfirmDialog("Are you sure you want to delete this record?")
    .afterClosed().subscribe(res =>{
      if(res){

        this.service.delete($key);
     this.service.form.reset();
      this.service.initializeFormGroup(); 
    this.notificationService.warn('::Order Successfully Deleted!');
      }



    });
  

  }

  objectKeys(obj) {
    return Object.keys(obj);
}

  print(){
    var data = document.getElementById("report");  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('orders.pdf'); // Generated PDF  
      this.notificationService.success('Report Printed Succesfully!' ); 
    });  
  }

}
