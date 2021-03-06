import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// app component
import { EnviroAppComponent } from './enviro.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { EnviroTableComponent } from './enviro-table/enviro-table.component';
import { HeaderComponent} from './header/app-header.component';

// angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mat components
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material';




// add components into declarations
@NgModule({
  declarations: [
    EnviroAppComponent,
    DropdownMenuComponent,
    EnviroTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [EnviroAppComponent]
})
export class AppModule { }
