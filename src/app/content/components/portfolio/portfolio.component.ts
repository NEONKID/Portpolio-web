import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent implements OnInit {
	@Input() isHomeEnabled = false;
	@Input() isPortfolioEnabled = false;

	constructor() {}

	ngOnInit(): void {}
}
