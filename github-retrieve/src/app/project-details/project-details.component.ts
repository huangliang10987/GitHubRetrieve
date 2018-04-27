import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieveProjectService, Repository } from '../retrieve-project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  repo: Repository = {} as Repository;
  constructor(private route: ActivatedRoute, private service: RetrieveProjectService) { }

  ngOnInit() {
    let url = this.route.snapshot.paramMap.get("url");
    this.service.getRepository(url).subscribe(
      r => {
        this.repo = r;
      }, err => {

      }, () => {

      }
    )
  }

}
