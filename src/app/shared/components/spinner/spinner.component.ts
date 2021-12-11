import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.sass'],
})
export class SpinnerComponent implements OnInit {
	isLoading: boolean = true;

	constructor() {}

	ngOnInit(): void {
		setTimeout(() => {
			this.isLoading = false;
		}, 2000);
	}
}
