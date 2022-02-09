import Clouds from "../Clouds";
// import data from "../../../siteData.config";



const Testimonials = ({data}) => {
   return (
      <section className=" py-24 2xl:py-44">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
               <div className="w-full lg:w-1/3 xl:w-1/2 px-4">
                  <span className="mb-9 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-300">
                     {data.pretitle}
                  </span>
                  <h2 className="mb-16 font-lagag font-heading font-medium text-6xl md:text-10xl xl:text-11xl leading-normal dark:text-gray-100">
                     <span
                        className=""
                        className="Container"
                        dangerouslySetInnerHTML={{
                           __html: data.title,
                        }}></span>
                  </h2>
                  <p className="text-lg leading-6 mb-20 xl:mb-0 text-darkBlueGray-400 dark:text-gray-400">
                     {data.subtitle}
                  </p>
               </div>
               <div className="w-full lg:w-2/3 xl:w-1/2 px-4">
                  <div className="flex flex-wrap">
                     {data.posts.filter(Boolean).map((cloud, i) => (
                        <Clouds
                           // key={"cloud_"+i}
                           // imgSrc={cloud.img.imgSrc}
                           title={cloud.title}
                           // bgColor={cloud.img.bgColor}
                           icon={ cloud.icon }
                           catHref={data.href}
                           href={ cloud.href }
                           id={cloud.id}
                           // css={cloud.img.css}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
