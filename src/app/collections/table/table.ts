import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() classNames: any = '';

  @Input('data') tableData: any = [];

  @Input('headers') tableHeaders: any = [];
}
