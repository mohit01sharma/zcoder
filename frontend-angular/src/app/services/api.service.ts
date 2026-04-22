import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
    baseUrl = 'http://localhost:5000'; // change if your backend port differs

    constructor(private http: HttpClient) { }

    getQuestions() {
        return this.http.get(`${this.baseUrl}/questions`);
    }
}