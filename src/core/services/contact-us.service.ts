import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient: HttpClient) { }

  sendContactEmail(model:any){
    return this.httpClient.post(`${environment.baseUrl}email`, model);
  }
}
