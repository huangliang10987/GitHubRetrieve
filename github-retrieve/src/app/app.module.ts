import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RetrieveProjectService } from './retrieve-project.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule, CardModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
  ],
  providers: [
    RetrieveProjectService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
