import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentItem } from '../model/equipmentItem';
import { log } from 'console';

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

  postEquipmentItem(item: EquipmentItem): Observable<any>
  {
    console.log(item);
    return this.http.post<any>(this.url, item, {observe: 'response'})
  }

  putEquipmentItem(item: EquipmentItem): number
  {
    console.log(item);
    const updateUrl = `${this.url}/${item.id}`;
    var result = this.http.put<any>(updateUrl, item, {observe: 'response'});
    result.subscribe((response) => {
      console.log(response.status);
      return response.status;
    })
    return 500;
  }

  deleteEquipmentItem(id: number): Observable<any>
  {
    const deleteUrl = `${this.url}/${id}`;
    console.log(deleteUrl)
    var result = this.http.delete<any>(deleteUrl, {observe: 'response'});
    result.subscribe((response) => {});
    return result;
  }
}
