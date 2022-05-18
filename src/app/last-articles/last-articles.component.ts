import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  articles!: Article[];

  constructor(private articleService: ArticleService) {
    this.articleService.getTenLastArticle().subscribe(value => {
      this.articles = value;
    });
  }

  ngOnInit() {
    this.articleService.getTenLastArticle().subscribe(value => {
      this.articles = value;
    });
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(value => {
      this.articles = this.articles.filter(value => value.id !== article.id);
    });
  }

  searchKeyword(e: Event) {
    const keyword = (<HTMLInputElement>e.target).value;    
    this.articleService.searchArticle(keyword).subscribe(value => {
      this.articles = value;
    });
  }

}
