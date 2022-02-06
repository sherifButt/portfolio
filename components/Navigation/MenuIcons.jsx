import Link from "../NoScrollLink"

const MenuIcon = ({ posts, category }) => {
   return (
      <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8 ">
         {posts.slice(0, 5).map(item => (
            <Link
               key={item.title}
               href={`${category?category.href:(item.href?item.href:"")}/${category?item.href:(item.id?item.id:"")}`}
               passHref>
               <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     aria-hidden="true"
                     class="flex-shrink-0 h-6 w-6 text-indigo-600">
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={item.icon}></path>
                  </svg>
                  <div className="ml-4">
                     <p className="text-base font-medium text-gray-900 dark:text-gray-400">
                        {item.title.substring(0, 30)}
                     </p>
                     <p className="mt-1 text-sm text-gray-500">
                        {item.description.substring(0, 60)}
                     </p>
                  </div>
               </a>
            </Link>
         ))}
      </div>
   );
};
export default MenuIcon