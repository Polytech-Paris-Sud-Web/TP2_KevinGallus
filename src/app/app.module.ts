// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ArticleService } from './article.service';
// import { ArticleComponent } from './article/article.component';
// import { ArticlesComponent } from './articles/articles.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ArticleComponent,
//     ArticlesComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule
//   ],
//   providers: [ArticleService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LastArticlesComponent } from './last-articles/last-articles.component';
import { AuthorComponent } from './author/author.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'lastarticle', component: LastArticlesComponent},
  { path: 'author/:name', component: AuthorComponent },
  { path: '', component: ArticlesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleDetailComponent,
    LastArticlesComponent,
    AuthorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }

