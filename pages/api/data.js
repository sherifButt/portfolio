import data from "../../siteData.config";



export default function helloAPI ( req, res ) {
   // replace blog categories id: with category object
   // iterate through data object to ge to category
   const replaceCatIdWithFullObject = (
      type = "blog", // Post type to manipulate
      category = "category" // category type to consume
   ) => {
      data[type].posts.map((post, postIdx) => {
         let arr = [];
         post.category.map((cats, catsIdx) => {
            // check the relevant category object to match blog post's id
            data[category].posts.map((c, ii) => {
               if (c.id === cats) arr = [...arr, c];
            });
            data[type].posts[postIdx].category = arr;
         });
      });
   };
  
  replaceCatIdWithFullObject("blog", "category");
  replaceCatIdWithFullObject("portafolio", "skill");

   res.status(200).json(data);
}

export const getData = () => data