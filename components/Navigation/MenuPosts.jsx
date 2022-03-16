import Link from "../NoScrollLink"
import {Popover} from '@headlessui/react'

const MenuPosts = ( { posts , mainTitle } ) => {
   return (
      
         <div className="px-5 py-5 bg-gray-50  dark:bg-gray-800 sm:px-8 sm:py-8">
            <div>
               <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                  Recent {mainTitle}
               </h3>
               <ul role="list" className="mt-4 space-y-4">
                  {posts?.slice(0, 5).map(item => (
                     <li
                        key={item.title.substring(0,20)}
                        className="text-base truncate">
                        <Popover.Button>
                           <Link
                              href={`${item.href}/${item.id}`}
                              passHref>
                              <a className="font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700">
                                 {item.title.substring(0,30)}
                              </a>
                           </Link>
                        </Popover.Button>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="mt-5 text-sm">
               <Popover.Button>
                  <Link href={posts[0].href}  passHref>
                     <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        {" "}
                        View all {mainTitle}{" "}
                        <span aria-hidden="true">&rarr;</span>
                     </a>
                  </Link>
               </Popover.Button>
            </div>
         </div>
         
   );
};

MenuPosts.defaultProps = {
   mainTitle:"posts"
}
export default MenuPosts