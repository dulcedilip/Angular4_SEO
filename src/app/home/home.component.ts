import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
     title.setTitle('My home page');

     meta.addTags([
      {
        name: 'author' , content: 'google.com'
      },
      {
        name: 'keywords' , content: 'ang4-seo'
      },
      {
        name: 'description' , content: 'home page deteails'
      }
     ]);
  }

  ngOnInit() {
  }

}
