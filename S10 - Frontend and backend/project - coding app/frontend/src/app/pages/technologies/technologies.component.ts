import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Technologies, Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public technologies: Technology[];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getTechnologies()
      .subscribe({
        next: ({ data }) => this.technologies = data
      });
  }

}
