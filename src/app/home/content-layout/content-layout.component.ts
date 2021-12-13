import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-content-layout',
	templateUrl: './content-layout.component.html',
	styleUrls: ['./content-layout.component.sass'],
	encapsulation: ViewEncapsulation.None,
})
export class ContentLayoutComponent implements OnInit {
	@Input() isHomeEnabled = false;
	@Input() isPortfolioEnabled = false;

	constructor() {}

	ngOnInit(): void {}
}
