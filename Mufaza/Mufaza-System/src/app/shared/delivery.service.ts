import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private firebase :AngularFireDatabase) { }

  deliveryLists : AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $keys: new FormControl(null),
    riderName: new FormControl('', Validators.required),
    riderAddress: new FormControl(''),
    riderMobile : new FormControl('ng',Validators.pattern('[6-8]\\d{8}')),
    riderEmail : new FormControl('bad *@* -',Validators.email),
    bikenumber: new FormControl('', Validators.required)
  });

initializeFormGroup() {
    this.form.setValue({
      $keys: null,
      riderName: '',
      riderAddress: '',
      riderMobile: '',
      riderEmail: '',
      bikenumber: ''
    });
  }

  getDelivery(){
    this.deliveryLists =this.firebase.list('deliveryy');
    return this.deliveryLists.snapshotChanges(); 
  }

  insertDelivery(deliveryy){
    this.deliveryLists.push({
      riderName: deliveryy.riderName,
      riderAddress: deliveryy.riderAddress,
      riderMobile: deliveryy.riderMobile,
      riderEmail: deliveryy.riderEmail,
      bikenumber: deliveryy.bikenumber,
    });
  }

  updateDelivery(deliveryy){
    this.deliveryLists.update(deliveryy.$keys,
      {
        riderName: deliveryy.riderName,
        riderAddress: deliveryy.riderAddress,
        riderMobile: deliveryy.riderMobile,
        riderEmail: deliveryy.riderEmail,
        bikenumber: deliveryy.bikenumber
      } );
  }

  populateForm(deliveryy) {
    this.form.patchValue(deliveryy);
  }

  deleteDelivery($keys:string){
    this.deliveryLists.remove($keys);
  }

}
