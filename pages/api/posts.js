import fs from "fs"
import matter from "gray-matter"
import path from "path"
import data from "../../siteData.config";


export default async function (req, res) {
   const {
      query: { limit },
      method,
   } = req;
   try {
      const posts = await getData();
      res.status(200).json({ posts });
   } catch (err) {
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
      const filenames = fs.readdirSync(dir);
      const posts = filenames.map(filename => {
         const fileContent = fs.readFileSync(
            path.join(dir, filename),
            "utf-8"
         );
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
               keywords,
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
            keywords,
            readingTime,
            description: content,
         };

         return grayMatter;
      } );
     
     const _data = await { ...JSON.parse( JSON.stringify( data ) ) };
     _data.blog.posts = posts
     
//  fs.writeFileSync(path.join(path.resolve('./'),'/siteData.config.json'),JSON.stringify(_data))
      return { posts };
   } catch ( err )
   {
     console.error(err.message)
      return {message: err.message};
   }
}
