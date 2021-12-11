import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-wraps',
	templateUrl: './wraps.component.html',
	styleUrls: ['./wraps.component.sass'],
	encapsulation: ViewEncapsulation.None,
})
export class WrapsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
