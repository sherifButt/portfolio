import data from "../../siteData.config.json";
import { getData as getPostData } from "./posts";

export default async function helloAPI(req, res) {
   console.time("apiDataTime");

   const _data = await getData();

   res.status(200).json(_data);
   console.timeEnd("apiDataTime");
}

export async function getData() {
   console.time("getDataTime");
   const _data = await { ...data };
   console.log(_data)
   const addBlogToData = async () => {
      try {
         const postData = await getPostData();
         _data.blog.posts = postData.posts;
         
         // console.log(_data.blog.posts);  
      } catch (err) {
         console.log("error:", err.message);
      }
   };

   await addBlogToData();
   // replace blog categories id: with category object
   // iterate through data object to ge to category
   /**
    * @param {Object} _data data to process
    * @param {String} type Post type to manipulate
    * @param {String} typeSubElement Post's sub element name to manipulate
    * @param {String} category category type to consume
    * @param {Array} exclude objects
    * @returns Object
    */

   const replaceIdWithFullObject = async (
      type = "blog", // Post type to manipulate
      typeSubElement = "category", // Post's sub element name to manipulate
      category = "category", // category type to consume
      exclude // excluded objects
   ) => {
      _data[type].posts.map((post, postIdx) => {
         let arr = [];
         post[typeSubElement]?.map((cats, catsIdx) => {
            // check the relevant category object to match blog post's id
            _data[category].posts.map((c, ii) => {
               const excludedObjects = exclude?.reduce(
                  (acc, curr) => ((acc[curr] = ""), acc),
                  {}
               );
               if (c.id === cats)
                  arr = [...arr, { ...c, ...excludedObjects }];
            });
            _data[type].posts[postIdx][typeSubElement] = arr;
         });
      });

      return _data;
   };

   // check if a toolkit exist in any of works
   // loop through toolkit Object
   // in toolkit[0] loop through work Objects
   // in work[0] loop through category array
   // in category[0] check if category[0] === toolkit.id
   // push work object to toolkit.work
   /**
    *
    * @param {Object} something to be added
    * @param {Object} otherThing to be added to (container)
    * @returns
    */
   const addSomethingToContainer = async (
      something = "work",
      container = "toolkit"
   ) => {
      const check = _data[container].posts?.map(
         (tool, toolIdx) => {
            let arr = [];
            const foundWorks = data[something].posts?.map(
               work => {
                  const foundWork = work.category.map(
                     category => {
                        if (category === tool.id) {
                           arr = [...arr, work];
                        }
                     }
                  );
                  _data[container].posts[toolIdx][something] =
                     arr;
                  return foundWork;
               }
            );
            return foundWorks;
         }
      );
      return check;
   };

   replaceIdWithFullObject("blog", "imgs", "gallery");
   replaceIdWithFullObject("blog", "category", "category");
   replaceIdWithFullObject("blog", "author", "author");
   replaceIdWithFullObject( "blog", "tags", "tags" );
   
   addSomethingToContainer("blog", "category");

   replaceIdWithFullObject("toolkit", "work", "work", [
      "description",]);

   replaceIdWithFullObject("work", "category", "toolkit");
   replaceIdWithFullObject("work", "imgs", "gallery");
   replaceIdWithFullObject("work", "tags", "tags");
   addSomethingToContainer("work", "toolkit");
   console.timeEnd( "getDataTime" );
   
   return _data;
}