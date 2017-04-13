import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BeerService } from './beer.service';
import { BeersComponent } from './beers.component';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
