import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFeedback } from 'src/app/shared/models/infrastructure/feedback';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendFeedback(feedBack: IFeedback) {
    return this.http.post(this.baseUrl + 'mail/feedback', feedBack );
  }

}
