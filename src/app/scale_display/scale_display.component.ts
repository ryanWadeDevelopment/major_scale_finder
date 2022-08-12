import { Component } from '@angular/core';
import { MajorScale } from '../shared/MajorScale.Model';

@Component({
  selector: 'app-scale-display',
  templateUrl: './scale_display.component.html',
  styleUrls: ['./scale_display.component.css'],
})
export class ScaleDisplayComponent {
  CScale = new MajorScale('C', 'D', 'E', 'F', 'G', 'A', 'B');
}
