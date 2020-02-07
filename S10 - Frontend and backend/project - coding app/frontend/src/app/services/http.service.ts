import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology, Technologies } from '../models/technology.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = environment.BASE_API_URL;
  }

  public getTechnologies() {
    return this.httpClient.get<Technologies>(this.baseUrl + '/technologies');
  }
  public getTechnology(id) {
    return this.httpClient.get<Technology>(this.baseUrl + `/technologies/${id}`);
  }
  public searchTechnologies(name) {
    return this.httpClient.get<Technologies>(this.baseUrl + '/technologies/search', { params: { name } });
  }
}
