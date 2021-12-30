import axios from "axios";
import { useEffect, useState } from "react";
import InterviewsUsers from "./InterviewsUsers";

import { PlusIcon } from "@heroicons/react/solid";


const api = "https://randomuser.me/api";

const Interviews = () => {
   const [data, setData] = useState([]);
   const [rawData, setRawData] = useState([]);
   const [dataJSON, setDataJSON] = useState("");
   const [toggleJSONData, setToggleJSONData] = useState(true);
   const [fetchError, setFetchError] = useState("nothing");
   const [page, setPage] = useState(1);

   useEffect(() => {
		getRandomData( api );
		
	}, [ page ] );
	
	const getRandomData = async api => {
      try {
         // fetch data from api
         const res = await axios(`${api}?page=${page}`);
         const _data = res.data.results;

         setData([..._data, ...data] || "no data");
         setRawData([..._data, ...data]||"no data");
         setDataJSON(
            JSON.stringify([..._data, ...data], null, 2) ||
               "No data!"
         );
      } catch (e) {
         console.log("error:", { e });
         setFetchError(e);
      }
	};
	
	

   const dataSwitchHandler = e => {
      toggleJSONData ? setData(dataJSON) : setData(rawData);
      setToggleJSONData(!toggleJSONData);
   };

   return (
      <div>
         <h1 className="mt-8">Interview React</h1>
         <button
            type="button"
            className="inline-flex items-center  mt-2 py-2 px-6 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-500 shadow-lg active:shadow-md shadow-indigo-400/50"
            onClick={dataSwitchHandler}>
            {toggleJSONData
               ? "Show JSON"
               : "← Back to Preview"}
         </button>
         {toggleJSONData ? (
            <button
               type="button"
               className="inline-flex mt-2 ml-2 py-2 px-6 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-500 shadow-lg active:shadow-md shadow-indigo-400/50"
               onClick={() => setPage(page + 1)}>
               Load more
               <PlusIcon
                  className="ml-2 mt-1 -mr-0.5 h-4 w-4"
                  aria-hidden="true"
               />
            </button>
         ) : (
            ""
         )}
         <div className="mt-8">
            {Array.isArray(data) ? (
               data ? (
                  <InterviewsUsers people={data} />
               ) : (
                  <p>
                     {fetchError.message
                        ? fetchError.message
                        : "loading data"}
                     ...
                  </p>
               )
            ) : (
               <article class="prose prose-slate">
                  <pre>{data}</pre>
               </article>
            )}
         </div>
      </div>
   );
};
export default Interviews;
