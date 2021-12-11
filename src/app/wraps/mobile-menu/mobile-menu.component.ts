import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.sass'],
})
export class MobileMenuComponent implements OnInit {
	mobileMenuOpen = false;

	constructor() {}

	ngOnInit(): void {}

	hamburgerClicked(event: MouseEvent) {
		this.mobileMenuOpen = !this.mobileMenuOpen;
	}
}
