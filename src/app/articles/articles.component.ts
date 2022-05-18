import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
// export class ArticlesComponent implements OnInit {
  
//   article =  [
//     {title: '1', content : 'ger', author: 'ger'},
//     {title: '2', content : ' World', author: 'ger'},
//     {title: '3', content : 'dzefzef', author: 'ger'},
//     {title: '4', content : 'ferfer', author: 'ger'},
//     {title: '5', content : 'reger', author: 'ger3'},
//   ]

//   constructor(private articleService: ArticleService) {
//   }

//   articles(): Article[] {
//     return this.articleService.getArticles();
//   }

//   ngOnInit(): void {
//   }

// }
export class ArticlesComponent implements OnInit {

  articles!: Article[];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
    });
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(value => {
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
