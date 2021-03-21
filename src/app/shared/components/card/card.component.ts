import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../models/video.model';
import {Store} from '@ngrx/store';
import * as videoReducer from '../../state/reducers/video.reducer';
import * as videoActions from '../../state/actions/video.actions';
import * as videoSelector from '../../state/selectors/video.selectors';

import {Observable} from 'rxjs';
import {log} from 'ng-zorro-antd/core/logger';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  video: Video;
  @Input()
  color: Observable<string |null>;

  gridStyle = {
    backgroundColor: '',
  };

  constructor(private store: Store<videoReducer.State>) {}

  ngOnInit(): void {
    this.color.subscribe(color => this.gridStyle.backgroundColor = this.video.seen ? color : 'blue');
  }

  deleteVideo(id: string): void{
    this.store.dispatch(videoActions.deleteVideo({id}));
  }
  updateVideo(): void{
    const updateVideo: Video = {
      id: this.video.id,
      seen: !this.video.seen
    };
    this.store.dispatch(videoActions.editVideo({video: updateVideo}));
  }

}
