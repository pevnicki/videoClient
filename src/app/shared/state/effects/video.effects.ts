import {Injectable} from '@angular/core';
import {ActionsSubject} from '@ngrx/store';
import {VideoService} from '../../services/video.service';
import * as VideoActions from '../actions/video.actions';
import {createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, concatMap, exhaustMap, map} from 'rxjs/operators';


@Injectable()
export class VideoEffects {

  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideos),
      exhaustMap(action =>
        this.service.getAll().pipe(
          map(u => {
            return VideoActions.getVideosSuccess({videos: u});
          }),
          catchError((error: any) => of(VideoActions.getVideosFailure(error)))
        ))
    )
  );

  deleteVideo$ = createEffect(() => this.actions$.pipe(
    ofType(VideoActions.deleteVideo),
    concatMap(action =>
      this.service.remove(action.id))
    ),
    {dispatch: false}
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.createVideo),
      exhaustMap(action =>
        this.service.create(action.video).pipe(
          map(response => {
            return VideoActions.createVideoSuccess(response); }),
          catchError((error: any) => of(VideoActions.createVideoFailure(error))))
      )
    )
  );
  editVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.editVideo),
      exhaustMap(action =>
        this.service.update(action.video).pipe(
          map(response => {
            return VideoActions.editVideoSuccess(response); }),
          catchError((error: any) => of(VideoActions.editVideoFailure(error))))
      )
    )
  );

  constructor(private actions$: ActionsSubject, private service: VideoService) {
  }
}
