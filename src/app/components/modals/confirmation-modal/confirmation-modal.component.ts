import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  confirm: EventEmitter<any>;
  payload: any;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.confirm.emit(this.payload);
    this.bsModalRef.hide();
  }

  onDecline(): void {
    this.bsModalRef.hide();
  }

}
