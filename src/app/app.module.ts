import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgZorroModule} from './ng-zorro.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {VideoStateModule} from './shared/state/video.state.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    CreatePageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NgZorroModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    VideoStateModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
