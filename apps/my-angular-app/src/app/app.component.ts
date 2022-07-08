import { Component } from '@angular/core';
import { NumberService } from "../services/NumberService";
export const d = '1';
@Component({
  selector: 'my-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';
  result = '';
  num = 3;

  constructor(private numberService: NumberService) {
  }

  isOddNumber(){
    this.numberService.isOddNumber(this.num).subscribe((response: any)=> {
      this.result = response ? "Yees!" : "Noo!";
    });
  }
}
