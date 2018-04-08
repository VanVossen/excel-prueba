import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule} from '@angular/router';
import { SettingComponent } from './setting/setting.component';

import { ConnectingFredService } from './connecting-fred.service';
import { HttpModule } from '@angular/http';

export const appRoutes: Routes = [
  { 
    path: 'inicio',
    component: InicioComponent
  },
  { 
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ConnectingFredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [SettingComponent,InicioComponent];