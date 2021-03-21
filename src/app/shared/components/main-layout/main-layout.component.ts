import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as videoReducer from '../../state/reducers/video.reducer';
import * as videoActions from '../../state/actions/video.actions';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private store: Store<videoReducer.State>) {

  }

  ngOnInit(): void {
  }

  selectChangeHandler(color: string): void {
    this.store.dispatch(videoActions.setCardColor({color}));
  }

}
