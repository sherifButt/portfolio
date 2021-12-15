import Feature from "../Feature";
import Link from "next/link";
const Features = ({
   title,
   subtitle,
   ctaButton,
   subCta,
   features,
}) => {
   return (
      <section className="py-12 px-4 ">
         
            <h2 className="text-4xl text-center mb-12 font-semibold font-heading dark:text-gray-200 ">
               {title}
            </h2>
            <p className="text-center mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
               {subtitle}
            </p>
            <div className="flex flex-wrap -mx-4 mb-6">
               {features?.filter(Boolean).map((feature, i) => (
                  <Feature
                     path={feature.path}
                     title={feature.title}
                     text={feature.text}
                  />
               ))}
            </div>
            <div className="text-center">
               <Link href="#" passHref>
                  <a
                     className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded"
                     href="#">
                     {ctaButton.text}{" "}
                     <span className="font-light">
                        {ctaButton.textLight}{" "}
                        {String.fromCharCode(ctaButton.icon)}{" "}
                     </span>
                  </a>
               </Link>
               <p className="text-sm text-gray-400 mt-5">
                 {subCta}
               </p>
            </div>
         
      </section>
   );
};

export default Features;
