import Link from "next/link";
import data from "../siteData.config";
import StyledLink from "../components/StyledLink";
const Logo = ({ src, text, alt, href, sr }) => {
   return (
      <div className="flex justify-start lg:w-0 lg:flex-1 align-middle">
         <Link href={href} passHref>
            <a className="inline-flex items-center">
               <span className="sr-only"> {sr} </span>
               <img
                  className="h-8 w-auto sm:h-10 text-indigo-500"
                  src={src}
                  alt={alt}
               />
               <span className="ml-2 font-size-20  text-2xl text-gray-500 align-middle h-auto inline">
                  {text}
               </span>
            </a>
         </Link>
      </div>
   );
};

Logo.defaultProps = {
   src: data?.logo.src ? data.logo.src : "/sbolio.svg",
   text: data?.logo.text ? data.logo.text : "SBOLIO",
   alt: data?.logo.alt
      ? data.logo.alt
      : "sherif's butt portfolio",
   href: data?.logo.href ? data.logo.href : "/",
   sr: data?.logo.sr ? data.logo.sr : "site logo",
};

export default Logo;
