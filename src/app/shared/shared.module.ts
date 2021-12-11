import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CursorComponent } from './components/cursor/cursor.component';

@NgModule({
	declarations: [SpinnerComponent, CursorComponent],
	imports: [CommonModule],
	exports: [CommonModule, SpinnerComponent, CursorComponent],
})
export class SharedModule {}
