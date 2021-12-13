import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-left-sidebar',
	templateUrl: './left-sidebar.component.html',
	styleUrls: ['./left-sidebar.component.sass'],
})
export class LeftSidebarComponent implements OnInit {
	@Input() isHomeEnabled = false;
	@Input() isPortfolioEnabled = false;

	constructor() {}

	ngOnInit(): void {}

	homeClicked(event: MouseEvent) {
		this.isHomeEnabled = true;
		this.isPortfolioEnabled = false;

		console.log(this.isPortfolioEnabled)
	}

	portfolioClicked(event: MouseEvent) {
		this.isHomeEnabled = false;
		this.isPortfolioEnabled = true;

		console.log(this.isPortfolioEnabled)
	}
}
