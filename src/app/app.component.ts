import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(meta: Meta, title: Title) {
    title.setTitle('ang4 seo');
    meta.addTags([
      {
        name: 'author', content: 'Tirumala Dilip'
      },
      {
        name: 'keywords', content: 'ang4-universal-seo'
      },
      {
        name: 'description', content: 'Describes sample angular universal SEO'
      }
    ]);
  }

  ngOnInit() {
  }

}
