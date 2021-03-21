import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as videoReducer from './reducers/video.reducer';
import {VideoEffects} from './effects/video.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(videoReducer.videoFeatureKey, videoReducer.videoReducer),
    EffectsModule.forFeature([VideoEffects])
  ],
  declarations: []
})

export  class  VideoStateModule{
}
