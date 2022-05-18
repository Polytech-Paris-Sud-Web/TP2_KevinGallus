import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../models/Article';
import { ArticleService } from '../article.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private routeur : Router, private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  } 


  ngOnInit(): void { }

  createArticle() {
    const { title, content, author } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      author
    }

    this.articleService.addArticle(newArticle).subscribe(value => {
      console.log(value);
    });
    this.routeur.navigate(['']);

  }

}
