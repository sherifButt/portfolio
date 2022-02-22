import data from "../../siteData.config";

export default async function helloAPI ( req, res ) {
   console.time('apiDataTime')
   const _data = await { ...JSON.parse(JSON.stringify(data)) };
   // replace blog categories id: with category object
   // iterate through data object to ge to category
   /**
    *
    * @param {Object} _data data to process
    * @param {String} type Post type to manipulate
    * @param {String} typeSubElement Post's sub element name to manipulate
    * @param {String} category category type to consume
    * @returns Object
    */
   const replaceCatIdWithFullObject = async (
      type = "blog", // Post type to manipulate
      typeSubElement = "category", // Post's sub element name to manipulate
      category = "category" // category type to consume
   ) => {
      _data[type].posts.map((post, postIdx) => {
         let arr = [];
         post[typeSubElement]?.map((cats, catsIdx) => {
            // check the relevant category object to match blog post's id
            _data[category].posts.map((c, ii) => {
               if (c.id === cats) arr = [...arr, c];
            });
            _data[type].posts[postIdx][typeSubElement] = arr;
         });
      });
console.timeEnd("apiDataTime");
      return _data;
   };

   replaceCatIdWithFullObject("blog", "category", "category");
   replaceCatIdWithFullObject("work", "category", "toolkit");
   replaceCatIdWithFullObject("work", "imgs", "gallery");
   
   res.status( 200 ).json( _data );
}

export const getData = async () => {
   console.time("getDataTime");
    const _data = await { ...JSON.parse(JSON.stringify(data)) };
    // replace blog categories id: with category object
    // iterate through data object to ge to category
    /**
     *
     * @param {Object} _data data to process
     * @param {String} type Post type to manipulate
     * @param {String} typeSubElement Post's sub element name to manipulate
     * @param {String} category category type to consume
     * @returns Object
     */
    const replaceCatIdWithFullObject = async (
       type = "blog", // Post type to manipulate
       typeSubElement = "category", // Post's sub element name to manipulate
       category = "category" // category type to consume
    ) => {
       _data[type].posts.map((post, postIdx) => {
          let arr = [];
          post[typeSubElement]?.map((cats, catsIdx) => {
             // check the relevant category object to match blog post's id
             _data[category].posts.map((c, ii) => {
                if (c.id === cats) arr = [...arr, c];
             });
             _data[type].posts[postIdx][typeSubElement] = arr;
          });
       });

       return _data;
    };

    replaceCatIdWithFullObject("blog", "category", "category");
    replaceCatIdWithFullObject("work", "category", "toolkit");
    replaceCatIdWithFullObject("work", "imgs", "gallery");
console.timeEnd("getDataTime");
   return _data;
};
