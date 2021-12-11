import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-cursor',
	templateUrl: './cursor.component.html',
	styleUrls: ['./cursor.component.sass'],
})
export class CursorComponent implements OnInit {
	moveStyle: string = '';
	isHover: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	@HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent): void {
		this.moveStyle = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
	}

	@HostListener('window:mouseover', ['$event']) onMouseOver(event: MouseEvent): void {
		const tagName = (event.target as Element).tagName;

		if (tagName === 'A') {
			this.isHover = true;
		} else this.isHover = false;
	}
}
