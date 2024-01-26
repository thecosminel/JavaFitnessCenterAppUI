import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentItemServiceService {
  url = 'http://localhost:8080/equipmentItem'

  constructor(private http: HttpClient) { }

  getEquipmentItems(): Observable<any>
  {
    return this.http.get<any>(this.url)
  }
}
