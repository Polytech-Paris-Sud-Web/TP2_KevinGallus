import { Injectable } from '@angular/core';
import { Article } from './models/Article';
import {HttpClient} from "@angular/common/http";
import { map, Observable, of } from 'rxjs';
import { ArticleCreation } from './models/ArticleCreation';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private preloadArticles : Article[] | undefined;
  constructor(private http : HttpClient) {
  }

  public preloadArticles$(): Observable<Article[]> {
    if (!this.preloadArticles) {
      return this.http.get<Article[]>(`${environment.apiUrl}/articles?_sort=date&_order=desc`).pipe(
        map(articles => {
          this.preloadArticles = articles;
          return articles;
        })
      );
    }

    return of(this.preloadArticles);
  }

  public addArticle(article: ArticleCreation): Observable<Article> {
    const body = {
      date: new Date(),
      ...article
    };

    return this.http.post<Article>(`${environment.apiUrl}/articles`, body);
  }

  public getArticles(): Observable<Article[]> {
    return this.preloadArticles ? of(this.preloadArticles) : this.http.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  public getArticle(id: number): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.id === id) as Article)
    );
  }

  public searchArticle(keyword: string): Observable<Article[]> {
    return this.getArticles().pipe(map(articles => articles.filter(article => article.title.includes(keyword) || article.content.includes(keyword) || article.author.includes(keyword))));
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public getTenLastArticle(): Observable<Article[]> {
    return this.preloadArticles ? of(this.preloadArticles) : this.http.get<Article[]>(`${environment.apiUrl}/articles?_page=1`);
  }  

}
