import { Injectable } from '@angular/core';
import { Article } from './models/Article';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ArticleCreation } from './models/ArticleCreation';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public addArticle(article: ArticleCreation): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles", article);
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  // public searchArticle(keyword: string): Observable<Article[]> {
  //   return this.http.get<Article[]>(`http://localhost:3000/articles?q=${keyword}`);
  // }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/articles/${id}`);
  }
  
  // public getArticles() : Article[] {
  //   return [{
  //     title: 'My First Article',
  //     content: 'Hello World',
  //     author: 'Orangefire'
  //   }, {
  //     title: 'Angular component',
  //     content: 'Angular component looks awesome!',
  //     author: 'Orangefire'
  //   }, {
  //     title: 'Angular service',
  //     content: 'I read something about angular service, i will try it soon',
  //     author: 'Orangefire'
  //   }];
  // } 
}
