import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input article: Article;
  @Input articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageBtnTitle: string = "Show Image";

  constructor() { 
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  ReadMore(): void {
    this.articleDescLen = this.symbols;
    
  }

  ngOnInit() {
  }

}
