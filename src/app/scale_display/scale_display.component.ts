import { Component } from '@angular/core';
import { MajorScale } from '../shared/MajorScale.Model';
import { NgModule } from '@angular/core';
import { ScalePickerComponent } from '../scale_picker/scale_picker.component';

@Component({
  selector: 'app-scale-display',
  templateUrl: './scale_display.component.html',
  styleUrls: ['./scale_display.component.css'],
})
export class ScaleDisplayComponent {
  newScale: string[] = [];

  notesWithSharps = [
    'C',
    'C\u266F',
    'D',
    'D\u266F',
    'E',
    'F',
    'F\u266F',
    'G',
    'G\u266F',
    'A',
    'A\u266F',
    'B',
  ];

  MajorScale = new MajorScale(
    this.newScale[0],
    this.newScale[1],
    this.newScale[2],
    this.newScale[3],
    this.newScale[4],
    this.newScale[5],
    this.newScale[6]
  );

  getMajorScale() {
    const indexNote = this.notesWithSharps.indexOf('G');
    const firstHalf = this.notesWithSharps.slice(indexNote);
    const secondHalf = this.notesWithSharps.slice(0, indexNote);
    const newArray = firstHalf.concat(secondHalf);
    this.newScale.push(newArray[0]);
    this.newScale.push(newArray[2]),
      this.newScale.push(newArray[4]),
      this.newScale.push(newArray[5]),
      this.newScale.push(newArray[7]),
      this.newScale.push(newArray[9]),
      this.newScale.push(newArray[11]),
      console.log(this.newScale);
  }
}
