import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>ZCoder Dashboard</h2>
    <p>Total Items: {{ data.length }}</p>

    <div *ngFor="let item of data">
      {{ item.title }}
    </div>
  `
})
export class DashboardComponent implements OnInit {
    data: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any[]>('http://localhost:5000/questions')
            .subscribe(res => {
                this.data = res;
            });
    }
}