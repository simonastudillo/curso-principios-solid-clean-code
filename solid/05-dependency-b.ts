import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c.ts";


export interface Post {
   body: string;
   id: number;
   title: string;
   userId: number;
}


export class PostService {

   private posts: Post[] = [];

   constructor(private postProvider: LocalDataBaseService) { }

   async getPosts() {
      this.posts = await this.postProvider.getFakePosts();

      return this.posts;
   }
}