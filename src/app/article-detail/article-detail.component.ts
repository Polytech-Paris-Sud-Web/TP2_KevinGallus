import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input()
  article : Article= {
    title: "",
    content: "",
    author: "",
    id: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.articleService.getArticle(id).subscribe((value: Article) => {
      this.article = value;
    });
  }

  ngOnInit(): void {
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe((_value: any) => {
      this.router.navigate(['/articles']);
    });
  }

}
