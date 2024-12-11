import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validateUrl = '/api/validate'; // URL to the validation endpoint
  private credentials: { username: string; password: string } | null = null;

  constructor(private http: HttpClient) {}

  validateCredentials(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`)
    });

    return this.http.get(this.validateUrl, { headers });
  }

  saveCredentials(username: string, password: string): void {
    this.credentials = { username, password };
  }

  getCredentials(): { username: string; password: string } | null {
    return this.credentials;
  }

  logout(): void {
    this.credentials = null;
  }
}
