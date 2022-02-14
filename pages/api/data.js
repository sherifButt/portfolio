import data from "../../siteData.config";

export default async function helloAPI ( req, res ) {
   const _data = await { ...data };
   // replace blog categories id: with category object
   // iterate through data object to ge to category
   const replaceCatIdWithFullObject = async (
      data,
      type = "blog", // Post type to manipulate
      category = "category" // category type to consume
   ) => {
      _data[type].posts.map((post, postIdx) => {
         let arr = [];
         post.category.map((cats, catsIdx) => {
            // check the relevant category object to match blog post's id
            _data[category].posts.map((c, ii) => {
               if (c.id === cats) arr = [...arr, c];
            });
            _data[type].posts[postIdx].category = arr;
         });
      });

      return _data;
   };

   // const _data = await require( '../../siteData.config' )

   // console.log('data', data)
   let _cats = await replaceCatIdWithFullObject(
      _data,
      "blog",
      "category"
   );
   let _work = await replaceCatIdWithFullObject(
      _cats,
      "work",
      "toolkit"
   );
   res.status(200).json(_work);
}

export const getData = async () => {
   
   const _data = await {...data}
   // replace blog categories id: with category object
   // iterate through data object to ge to category
   const replaceCatIdWithFullObject = async (data,
      type = "blog", // Post type to manipulate
      category = "category" // category type to consume
   ) => {
        _data[type].posts.map((post, postIdx) => {
         let arr = [];
         post.category.map((cats, catsIdx) => {
            // check the relevant category object to match blog post's id
            _data[category].posts.map((c, ii) => {
               if (c.id === cats) arr = [...arr, c];
            });
            _data[type].posts[postIdx].category = arr;
         });
        } );
      
      return _data;
   };

   // const _data = await require( '../../siteData.config' )

   // console.log('data', data)
     let _cats = await replaceCatIdWithFullObject(_data,"blog", "category");
      let _work = await replaceCatIdWithFullObject(
         _cats,
         "work",
         "toolkit"
      );
   
   return await _work;
}
