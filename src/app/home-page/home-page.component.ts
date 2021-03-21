import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Video} from '../shared/models/video.model';
import {Store} from '@ngrx/store';
import * as videoReducer from '../shared/state/reducers/video.reducer';
import * as videoActions from '../shared/state/actions/video.actions';
import * as videoSelector from '../shared/state/selectors/video.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchStr: any = '';
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  videos$: Observable<Video[]>;
  cardColor$: Observable<string | null>;


  constructor(private store: Store<videoReducer.State>) {
    this.store.dispatch(videoActions.getVideos());
  }

  ngOnInit(): void {
    this.videos$ = this.store.select(videoSelector.videos);
    this.isLoading$ = this.store.select(videoSelector.isLoading);
    this.error$ = this.store.select(videoSelector.error);
    this.cardColor$ = this.store.select(videoSelector.seenColor);

  }

}
