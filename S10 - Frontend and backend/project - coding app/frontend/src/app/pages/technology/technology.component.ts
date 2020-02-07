import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.technology = {
      name: '',
      description: '',
      logo: '',
      _id: '',
      tags: [],
      createdAt: null,
      updatedAt: null
    };
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.httpService.getTechnology(id)
          .subscribe({
            next: ({ data }) => this.technology = data
          });
      });
  }

}
