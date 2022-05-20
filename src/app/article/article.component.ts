import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input()
  article !: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private route: Router ) { }

  ngOnInit(): void {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  details(){
    this.route.navigate(['/article', this.article.id]);
  }

  detailsAuteur(){
    this.route.navigate(['/author', this.article.author]);
  }

}

