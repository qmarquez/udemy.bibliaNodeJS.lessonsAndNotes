import { Component, OnInit, Input } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent implements OnInit {

  @Input() technology: Technology | any;

  constructor() {
  }

  ngOnInit() {
  }

}
