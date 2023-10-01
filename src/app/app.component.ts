import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-16-test';

  runImmediately = false;

  ngOnInit(): void {
    this.runImmediately =  /^\s*(true)\s*$/i.test('0');
    console.log(this.runImmediately);
  }
}
