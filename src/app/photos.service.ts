import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface PhotoResponse {
  urls: {regular:string}
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getRandomPhoto() {
    return this.http.get<PhotoResponse>("https://api.unsplash.com/photos/random", {
    headers: {
    Authorization: "Client-ID j6MfJjjrU5O3LAcQ8nzJZn1DJZiSk6lrQHwWdbLrzps"}}).pipe(map(a=>a.urls.regular))
  }
}
