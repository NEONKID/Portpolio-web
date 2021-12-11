import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ContentModule } from '@app/content';
import { SharedModule } from '@app/shared';

import { ContentLayoutComponent } from './wraps/content-layout/content-layout.component';
import { LeftSidebarComponent } from './wraps/left-sidebar/left-sidebar.component';
import { WrapsComponent } from './wraps/wraps.component';

@NgModule({
	declarations: [AppComponent, ContentLayoutComponent, LeftSidebarComponent, WrapsComponent],
	imports: [BrowserModule, AppRoutingModule, ContentModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
