import { NgModule } from '@angular/core';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzFormControlComponent} from 'ng-zorro-antd/form';



@NgModule({
  declarations: [],
  exports: [
    NzTabsModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzDropDownModule,
    NzPageHeaderModule
  ]
})
export class NgZorroModule { }
