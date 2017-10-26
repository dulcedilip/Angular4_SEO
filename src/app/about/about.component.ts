import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(meta: Meta, title: Title) {
    title.setTitle('About page');
    meta.addTags([
      {
        name: 'author', content: 'google.com'
      },
      {
        name: 'keywords', content: 'ang4-seo'
      },
      {
        name: 'description', content: 'about page deteails'
      }
    ]);
  }

  ngOnInit() {
  }

}
