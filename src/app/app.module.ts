import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { SBUComponent } from './sbu/sbu.component';
import { ShowSBUComponent } from './SBU/show-sbu/show-sbu.component';
import { EditSbuComponent } from './SBU/edit-sbu/edit-sbu.component';
import { AddSbuComponent } from './SBU/add-sbu/add-sbu.component';
import {SbuService} from 'src/app/Services/sbu.service';


@NgModule({
  declarations: [
    AppComponent,
    SBUComponent,
    ShowSBUComponent,
    EditSbuComponent,
    AddSbuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MatTableModule,
    MatIconModule
  
  ],
  providers: [SbuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
