import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  constructor(private httpClient: HttpClient) {}

  sendRequest(number: number) {
    return this.httpClient.post<{ result: string }>(
      environment.backendURL + '/fizzbuzz',
      {
        number,
      }
    );
  }
}
