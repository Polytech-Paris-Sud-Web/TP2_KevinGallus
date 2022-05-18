import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../models/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  author : Author = {
    name: 'Auteur inconnu',
    biographie: 'Pas de bio',
    id: 0,
  };

  constructor(private route: ActivatedRoute, private authorService : AuthorService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.authorService.getAuthor(name).subscribe(value => 
    {
      this.author = value[0];
    });
  }

}
