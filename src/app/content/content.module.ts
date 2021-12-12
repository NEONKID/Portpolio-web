import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
	declarations: [HeroComponent, ResumeComponent, PortfolioComponent],
	imports: [CommonModule],
	exports: [HeroComponent, PortfolioComponent],
})
export class ContentModule {}
