import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { TrendingService } from 'src/app/shared/trending.service';


@Component({
  selector: 'app-trending-report',
  templateUrl: './trending-report.component.html',
  styleUrls: ['./trending-report.component.css']
})
export class TrendingReportComponent implements OnInit {
  orders$;
  constructor(private service: TrendingService,private dialog: MatDialog){
    this.orders$ = service.getProducts();
  }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =[`#`, `title`,`sales`];

   
  
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getProducts().subscribe(
    list => {
      let array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.listData = new MatTableDataSource(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }
  );
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
      pdf.save('trending.pdf'); // Generated PDF   
    });  
  }

}
