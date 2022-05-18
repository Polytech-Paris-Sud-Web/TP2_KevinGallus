import { Article } from "./Article";

export type ArticleCreation = Omit<Article, "id">;