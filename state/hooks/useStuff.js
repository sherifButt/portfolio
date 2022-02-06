import { useState } from "react";

const text =
   "Hi there how are you today. Are you sure you want to continue this sentence today?";
const structure = {
   provider: {
      owner: { name: "sherif" },
      service: { dose: "do", where: "google", what: "ads" },
   },
   consumer: {
      owner: { name: "Johan" },
      Entity: { where: "online", what: "store" },
      funtion: { does: "sells", who: "dogs", what: "callers" },
   },
};
const useStuff = text => {
   const [value, setValue] = useState(text);

   const splitText = value ? value.split(/([.,!,?, ,\n])/) : [];

   const duplicatedText = splitText
      .map((word, idx) => {
         let c = 0;
         let w;
         splitText.map((secondWord, i) => {
            if (word == secondWord) c++;
            if (c > 1) w = word;
         });
         return w;
      })
      .filter(Boolean)
      .filter(t => t.length > 1 || t === "I");

   const duplicatedTextShort = [...new Set(duplicatedText)];

   const editText = splitText.map((word, ids) => {
      let w = word;
      duplicatedTextShort.map((secondWord, i) => {
         if (word === secondWord)
            w = (
               <span>
                  <input
                     className="block-inline"
                     placeholder={secondWord}
                     size={secondWord.length}></input>
               </span>
            );
      });
      if (word === " ") w = <span>&nbsp;</span>;
      if (word === "\t") w = <span>&nbsp;&nbsp;&nbsp;</span>;
      if (word === "\n")
         w = (
            <>
               <p />
            </>
         );

      return w;
   });
   console.log("editText", editText, duplicatedTextShort);
   return [[duplicatedTextShort, editText], setValue];
};

export default useStuff;
