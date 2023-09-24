import { Component } from '@angular/core';
import { EmopGeneratorService } from './services/emop-generator.service';
import { MockData } from './models/emop-data';
import { MathRequest, MathResult } from './models/math-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my_app';
  input1 = '';
  input2 = '';
  result = '';
  emopData: MockData[] = [];
  mathResult: MathResult;
  constructor(private emopService: EmopGeneratorService) {
    this.mathResult = { sum: "-", diff: "-"};
  }

  getEmopData() {
    this.emopService.getDataFromServer().subscribe((edata) => {
      console.log(edata);
      this.emopData = edata;
    });
  }

  getJsonMathData() {
    const request: MathRequest = { x: this.input1, y: this.input2 };
    console.log('Request:', request);
    this.emopService.getJsonResultFromServer(request).subscribe((mdata) => {
      console.log('Response', mdata);
      this.mathResult = mdata;
      this.result = JSON.stringify(mdata);
    });
  }
}
