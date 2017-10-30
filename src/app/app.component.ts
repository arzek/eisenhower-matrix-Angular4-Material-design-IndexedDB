import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(): void {
    if(location.href === 'http://online-eisenhower-matrix.azurewebsites.net' || location.href === 'http://online-eisenhower-matrix.azurewebsites.net/')
      location.href = 'https://online-eisenhower-matrix.azurewebsites.net';
  }
}
