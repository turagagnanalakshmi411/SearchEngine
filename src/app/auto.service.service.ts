import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userdata } from './userdata';

@Injectable({
  providedIn: 'root',
})
export class AutoService {

  constructor(private http: HttpClient) {}

  searchUser(query: string) {
    return this.http.get<userdata[]>(
      `https://localhost:44369/api/search/?name=${query}`
    );
  }
}
