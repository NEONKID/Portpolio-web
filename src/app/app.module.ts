import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ContentModule } from '@app/content';
import { SharedModule } from '@app/shared';

import { ContentLayoutComponent } from './home/content-layout/content-layout.component';
import { LeftSidebarComponent } from './home/left-sidebar/left-sidebar.component';
import { HomeComponent } from './home/home.component';
import { MobileMenuComponent } from './home/mobile-menu/mobile-menu.component';

@NgModule({
	declarations: [AppComponent, ContentLayoutComponent, LeftSidebarComponent, HomeComponent, MobileMenuComponent],
	imports: [BrowserModule, AppRoutingModule, ContentModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
