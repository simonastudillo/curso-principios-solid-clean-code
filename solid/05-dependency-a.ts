import { PostService } from "./05-dependency-b.ts";
import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c.ts";



// Main
(async () => {
   const provider = new LocalDataBaseService();
   const postService = new PostService( provider );

   const posts = await postService.getPosts();

   console.log({ posts })


})();