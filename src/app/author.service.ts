import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Author } from './models/Author';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private preloadAuthors: Author[] | undefined;

  constructor(private http : HttpClient) { }

  // public getAuthor(name: string): Observable<Author[]> {
  //   return this.http.get<Author[]>(`http://localhost:3000/authors?name=${name}`);
  // }

  public preloadAuthors$(): Observable<Author[]> {
    if (!this.preloadAuthors) {
      return this.http.get<Author[]>(`${environment.apiUrl}/authors`).pipe(
        map(authors => {
          this.preloadAuthors = authors;
          return authors;
        })
      );
    }
    return of(this.preloadAuthors);
  }

  public getAuthor(name: string): Observable<Author> {
    const defaultAuthor : Author = {
      name: 'Auteur inconnu',
      id: 0,
      biographie: 'Pas de bio'
    }
    
    return of(this.preloadAuthors?.find(author => author.name === name) || defaultAuthor);
  }

}
