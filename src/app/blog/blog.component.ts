import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dvt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() autor: string;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
    
  }

}
