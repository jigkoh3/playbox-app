import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.scss']
})
export class TableBaseComponent implements OnInit {
  @Input() dataSource: any;
  @Input() table: any;

  @Output() onEditRow: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteRow: EventEmitter<any> = new EventEmitter();
  @Output() onPageEventChanged: EventEmitter<any> = new EventEmitter();
  private _unsubscribeAll: Subject<any>;

  constructor() {
    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }



  onEdit(row: any): void {
    this.onEditRow.emit(row);
  }

  onDelete(row: any): void {
    this.onDeleteRow.emit(row);
  }

  onPageEvent($event: any): void {
    this.onPageEventChanged.emit($event);
  }


}
