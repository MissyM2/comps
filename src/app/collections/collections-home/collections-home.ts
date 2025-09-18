import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  standalone: false,
  templateUrl: './collections-home.html',
  styleUrl: './collections-home.css',
})
export class CollectionsHome {
  data = [
    { name: 'James', age: 25, job: 'Developer', employed: true },
    { name: 'Alice', age: 30, job: 'Designer', employed: false },
    { name: 'Bob', age: 22, job: 'Tester', employed: true },
    { name: 'Eve', age: 28, job: 'Manager', employed: false },
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
