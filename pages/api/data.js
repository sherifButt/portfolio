import data from "../../siteData.config";

export default async function helloAPI(req, res) {
   console.time("apiDataTime");
   const _data = await { ...JSON.parse(JSON.stringify(data)) };
   // replace blog categories id: with category object

   // iterate through data object to ge to category

   /**
    * Replace blog categories id: with category object
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

   /**
   * check if a toolkit exist in any of works
   * loop through toolkit Object
   * in toolkit[0] loop through work Objects
   * in work[0] loop through category array
   * in category[0] check if category[0] === toolkit.id
   *push work object to toolkit.work
   
    */

   const addWorkToToolkits = () => {
      _data.toolkit.posts?.map((tool, toolIdx) => {
         let arr = [];
         data.work.posts?.map(work => {
            work.category.map(category => {
               if (category === tool.id) {
                  arr = [...arr, work];
               }
            });
            _data.toolkit.posts[toolIdx].work = arr;
         });
      });
   };

   

   replaceIdWithFullObject("toolkit", "work", "work", [
      "description",
   ]);
   replaceIdWithFullObject("blog", "category", "category");
   replaceIdWithFullObject("work", "category", "toolkit");
   replaceIdWithFullObject("work", "imgs", "gallery");
   addWorkToToolkits();

   res.status(200).json(_data);
   console.timeEnd("apiDataTime");
}

export const getData = async () => {
   console.time("getDataTime");
   const _data = await { ...JSON.parse(JSON.stringify(data)) };
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

   const addWorkToToolkits = () => {
      const check = _data.toolkit.posts?.map((tool, toolIdx) => {
         let arr = [];

         const foundWorks = data.work.posts?.map(work => {
            const foundWork = work.category.map(category => {
               if (category === tool.id) {
                  arr = [...arr, work];
               }
            });
            _data.toolkit.posts[toolIdx].work = arr;

            return foundWork;
         });

         return foundWorks;
      });

      return check;
   };
   replaceIdWithFullObject("toolkit", "work", "work", [
      "description",
   ]);
   replaceIdWithFullObject("blog", "category", "category");
   replaceIdWithFullObject("work", "category", "toolkit");
   replaceIdWithFullObject("work", "imgs", "gallery");
   addWorkToToolkits();
   console.timeEnd("getDataTime");
   return _data;
};
