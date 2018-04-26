import { Component } from '@angular/core';
import { RetrieveProjectService } from './retrieve-project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service: RetrieveProjectService) {
    service.getReporsitoriesForAngularProject("", "").subscribe(
      r => {
        console.log(r)
      },
      err => {
        console.log(err);
      }, () => {

      }
    );
  }
}
