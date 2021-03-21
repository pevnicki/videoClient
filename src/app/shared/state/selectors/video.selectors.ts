import {createFeatureSelector, createSelector} from '@ngrx/store'

import * as fromStore from '../reducers/video.reducer'

const videoSelectorState = createFeatureSelector<fromStore.State>(fromStore.videoFeatureKey);

export const isLoading = createSelector(
  videoSelectorState,
  state => state.isLoading
);

export const videos = createSelector(
  videoSelectorState,
  fromStore.selectAll
);

export const error = createSelector(
  videoSelectorState,
  state => state.error
);
export const seenColor = createSelector(
  videoSelectorState,
  state => state.seenColor
);
