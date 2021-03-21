import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Video} from '../models/video.model';
import {map} from 'rxjs/operators';



@Injectable({providedIn: 'root'})
export class  VideoService{

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.api}`);
  }
  update(video: Video): Observable<Video> {
    return this.http.put<Video>(`${environment.api}/${video.id}`, video);
  }
  remove(id: string): Observable<Video> {
    return this.http.delete(`${environment.api}/${id}`, );
  }

  create(user: Video): Observable<Video> {
    return this.http.post(`${environment.api}`, user);
  }
}
