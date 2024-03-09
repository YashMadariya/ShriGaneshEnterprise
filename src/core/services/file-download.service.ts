import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  downloadFile(url: string, filename: string): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/octet-stream' });
    return this.http.get(url, { headers, responseType: 'blob' });
  }
}
