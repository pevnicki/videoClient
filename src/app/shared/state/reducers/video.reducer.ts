import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {Video} from '../../models/video.model';
import * as VideoActions from '../actions/video.actions';


export const videoFeatureKey = 'video';

export interface State extends  EntityState<Video> {
  videos?: Video[];
  currentVideo?: Video;
  deleteVideoId?: string;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
  error?: string;
  seenColor?: string;
}

export const adapter: EntityAdapter<Video> = createEntityAdapter<Video>();
export const initialState: State = adapter.getInitialState({
  isLoading: false,
  error: '',
  seenColor: 'red'
});

export const videoReducer = createReducer(
  initialState,

  on(VideoActions.getVideos, (state) => ({...state, isLoading: true})),

  on(VideoActions.setCardColor,
    (state, {color}) => ({
      ...state,
      seenColor: color
    })
  ),

  // Get Videos Reducer
on(VideoActions.getVideosSuccess,
    (state, action) =>
      adapter.setAll(action.videos, {
        ...state,
        isLoading: false,
        isLoadingSuccess: true
      })
  ),

// Delete Video Reducers

  on(VideoActions.deleteVideo, (state, action) =>
    adapter.removeOne(action.id, {...state, isLoading: false})
  ),

  // Update video Reducers
  on(VideoActions.editVideo, (state, {video}) => ({...state, isLoading: true, currentVideo: video})),
  on(VideoActions.editVideoSuccess, (state, action) => adapter.updateOne(action, {...state, isLoading: false})),

  // Create Video Reducers
on(VideoActions.createVideo, (state, {video}) => ({...state, isLoading: true, currentVideo: video})),
  on(VideoActions.createVideoSuccess, (state, result) => {
    {
      return adapter.setOne(result, {
        ...state,
        isLoading: false,
        isLoadingSuccess: true
      });
    }
  })
);





export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectIsLoading = (state: State) => state.isLoading;
export const selectError = (state: State) => state.error;

