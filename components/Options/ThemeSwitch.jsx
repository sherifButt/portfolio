import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment, useState } from "react";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

export default function ThemeSwitch () {
   const { theme, setTheme } = useTheme()
   const [enableDark, setEnableDark] = useState(
      theme === "light" ? false : true
   );
  
  const themeToggle = () => {
      setEnableDark( !enableDark )
      if ( enableDark ) setTheme( "light" )
      else setTheme("dark")
      
      return enableDark;
   }
  
  

  return (
     <div className="flex justify-between px-4 py-2 text-sm dark:text-gray-400">
        

        <Switch
           checked={enableDark}
           onChange={themeToggle}
           className={classNames(
              enableDark ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
           )}>
           <span className="sr-only">Use setting</span>
           <span
              className={classNames(
                 enableDark ? "translate-x-5" : "translate-x-0",
                 "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-gray-900 dark:bg-white shadow transform ring-0 transition ease-in-out duration-200"
              )}>
              <span
                 className={classNames(
                    enableDark
                       ? "opacity-0 ease-out duration-100"
                       : "opacity-100 ease-in duration-200",
                    "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                 )}
                 aria-hidden="true">
                 🌜
              </span>
              <span
                 className={classNames(
                    enableDark
                       ? "opacity-100 ease-in duration-200"
                       : "opacity-0 ease-out duration-100",
                    "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                 )}
                 aria-hidden="true">
                 🔆
              </span>
           </span>
        </Switch>
     </div>
  );
}