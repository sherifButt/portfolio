import fs from "fs";
import path from "path";
import matter from 'gray-matter'
// const fs = require('fs')

export default async function ( req, res ) {
  const {
      query: { limit },
      method,
  } = req;
  try
  {
    const posts = await getData()
    res.status( 200 ).json( { posts } )
  } catch ( err )
  {
    res.status(201).json({
       success: false,
       message: err.message,
    });
  }

}

export async function getData() {
  
   const dirRelativeToPublicFolder = "posts";
   try {
      const dir = path.resolve(
         "./public",
         dirRelativeToPublicFolder
      );
      const filenames =  fs.readdirSync(dir);
      // const postsPaths = filenames?.map(name =>
      //    path.join("/", dirRelativeToPublicFolder, name)
      // );
     const posts =  filenames.map(  filename => {
       const fileContent =   fs.readFileSync(
         path.join( dir, filename ),
         "utf-8"
       )
       const {
          content,
          data: {
             id,
             title,
             href,
             date,
            datetime,
             readingTime,
            imageUrl,
            tags,
             category,
             imgs,
             relatedPosts,
             draft,
             author,
             excerpt,
            
          },
       } = matter(fileContent);
       const grayMatter = {
          id,
          filename: filename.split(".")[0],
          title,
          href,
          date,
         datetime,
          
          imageUrl,
          tags,
          category,
          imgs,
          relatedPosts,
          draft,
          author,
          excerpt,
          readingTime,
          description: content,
       };

       return grayMatter;

     })

     
     return{posts}
   } catch (err) {
      
     return -1
   }
};
