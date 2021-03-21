import {createAction, props} from '@ngrx/store';
import {Video} from '../../models/video.model';

export const GET_VIDEOS = '[Video] Get Videos';
export const GET_VIDEOS_SUCCESS = '[Video] Get Videos Success';
export const GET_VIDEOS_FAILURE = '[Video] Get Videos Failure';

export const CREATE_VIDEO = '[Video] Create User';
export const CREATE_VIDEO_SUCCESS = '[Video] Create Video Success';
export const CREATE_VIDEO_FAILURE = '[Video] Create Video Failure';

export const DELETE_VIDEO = '[Video] Delete Video';

export const EDIT_VIDEO = '[Video] Edit Video';
export const EDIT_VIDEO_SUCCESS = '[Video] Edit Video Success';
export const EDIT_VIDEO_FAILURE = '[Video] Edit Video Failure';

export const SET_CAR_VIDEO_ = '[Video] ESet Card video;';



export const getVideos = createAction(
  GET_VIDEOS
);

export const getVideosSuccess = createAction(
  GET_VIDEOS_SUCCESS,
  props<{videos: Video[]}>()
);

export const getVideosFailure = createAction(
  GET_VIDEOS_FAILURE,
  props<{any}>()
);

export const createVideo = createAction(
  CREATE_VIDEO,
  props<{video: Video}>()
);

export const createVideoSuccess = createAction(
  CREATE_VIDEO_SUCCESS,
  props<any>()
);

export const createVideoFailure = createAction(
  CREATE_VIDEO_FAILURE,
  props<{any}>()
);

export const deleteVideo = createAction(
  DELETE_VIDEO,
  props<{id: string}>()
);


export const editVideo = createAction(
  EDIT_VIDEO,
  props<{video: Video}>()
);

export const editVideoSuccess = createAction(
  EDIT_VIDEO_SUCCESS,
  props<any>()
);

export const editVideoFailure = createAction(
  EDIT_VIDEO_FAILURE,
  props<{any}>()
);

export const setCardColor = createAction(
  SET_CAR_VIDEO_,
  props<{color: string}>()
);
