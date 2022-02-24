const ProgressBar = ({options,disabled} ) => {
   options = { ...ProgressBar.defaultProps.options, ...options };
  
   return (
      <div className="">
         <div className="flex justify-between mb-1">
            <span
               className={`text-base font-medium text-${options?.color}-700 dark:text-gray-400`}>
               {options?.label}
            </span>
            <span
               className={`text-sm font-medium text-${options?.color}-700 dark:text-gray-400`}>
               {options?.percentage} {options?.percentage && "%"}
            </span>
         </div>
         <div
            className={`w-full bg-gray-200 rounded-full h-${options?.height} dark:bg-gray-700`}>
            <div
               className={`bg-${options?.color}-600 h-${options?.height} rounded-full`}
               style={{
                  width: options?.percentage + "%",
               }}></div>
         </div>
         <span
            className={`text-sm  text-${options?.color}-200 dark:text-gray-500`}>
            {options?.description}
         </span>
      </div>
   );
};

ProgressBar.defaultProps = {
   options: {
      label: "Progress",
      percentage: 45,
      color: "indigo",
      height: 2.5, // 1.5 2.5 4 6
      description:
         "calculated base on total experience as frontend webDev",
   },
};

export default ProgressBar;
