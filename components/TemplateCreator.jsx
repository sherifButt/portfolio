import { useState } from "react";
import useStuff from "../state/hooks/useStuff";

const TemplateCreator = () => {
   const [text, setText] = useState(
      "Hi there how are you to, today. Are you sure you want to, continue this sentence today? ?,."
   );
   const [[stuff,editText], setStuff] = useStuff(
      text
   );
  
  
  
   return (
      <div>
         <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700">
            Add your comment
         </label>

         <div className="mt-1">
            <textarea
               rows={4}
               name="comment"
               id="comment"
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
               defaultValue={text}
               placeholder={text}
               onChange={e => {
                  setText(e.target.value);
                  setStuff(e.target.value);
               }}
            />
         </div>
         <p className="mt-20">{text}</p>
         <p className="mt-20">{editText}</p>
         <h1 className="mt-20">{stuff}</h1>
      </div>
   );
};

export default TemplateCreator;
