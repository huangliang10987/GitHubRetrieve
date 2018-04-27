import { Component, OnInit } from '@angular/core';
import { Repository, RetrieveProjectService } from '../retrieve-project.service';
import { LazyLoadEvent } from 'primeng/primeng';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  list: Repository[] = [];
  cols: { field, header }[];
  rows: number = 10;
  totalRecords: number;
  loading: boolean = true;
  constructor(private service: RetrieveProjectService) {

  }
  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Repository ID' },
      { field: 'name', header: 'Name' },
      { field: 'full_name', header: 'Full Name' },
      { field: 'description', header: 'Description' },
      { field: 'stargazers_count', header: 'Stargazers Count' },
    ];
  }
  lazyLoad(event?: LazyLoadEvent) {
    this.loading = true;
    this.service.getReporsitoriesForAngularProject(event.first , event.rows, event.globalFilter, "").subscribe(
      r => {
        console.log(r);
        this.list = r.items;
        this.totalRecords = r.total_count;
      },
      err => {
        console.log(err);
        this.loading = false;
      }, () => {
        this.loading = false;
      }
    );
  }

}
