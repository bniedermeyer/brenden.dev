import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './home/links/links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkComponent } from './home/links/link/link.component';
import { MaterialModule } from './material.module';
import { SkillsComponent } from './home/skills/skills.component';
import { ContactsComponent } from './home/contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LinksComponent, LinkComponent, SkillsComponent, ContactsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
