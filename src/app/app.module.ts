import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, MatTableModule, MatPaginatorModule, MatSortModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
