import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendBoxComponent } from './friend-box/friend-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
