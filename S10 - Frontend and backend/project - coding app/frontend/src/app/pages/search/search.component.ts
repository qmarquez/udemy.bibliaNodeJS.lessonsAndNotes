import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technologies } from '../../models/technology.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  technologies: Technologies = [];
  query: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(({ query }) => {
        this.query = query;
        this.httpService.searchTechnologies(query)
          .subscribe({
            next: ({ data }) => this.technologies = data
          });
      });
  }

}
