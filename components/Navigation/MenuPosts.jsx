import Link from "../NoScrollLink"

const MenuPosts = ( { posts , mainTilte } ) => {
   return (
      
         <div className="px-5 py-5 bg-gray-50  dark:bg-gray-800 sm:px-8 sm:py-8">
            <div>
               <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                  Recent {mainTilte}s
               </h3>
               <ul role="list" className="mt-4 space-y-4">
                  {posts?.slice(0, 5).map(item => (
                     <li
                        key={item.title.substring(0,20)}
                        className="text-base truncate">
                        <Link
                           href={`${item.href}/${item.id}`}
                           passHref>
                           <a className="font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700">
                              {item.title.substring(0,30)}
                           </a>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="mt-5 text-sm">
               <Link href={posts[0].href}  passHref>
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                     {" "}
                     View all {mainTilte}s{" "}
                     <span aria-hidden="true">&rarr;</span>
                  </a>
               </Link>
            </div>
         </div>
         
   );
};

MenuPosts.defaultProps = {
   mainTilte:"post"
}
export default MenuPosts