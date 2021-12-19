import Link from "next/link";
const NoScrollLink = ({ children, href, passHref }) => {
   return (
      <Link href={href} passHref={passHref} scroll={false}>
         {children}
      </Link>
   );
};

export default NoScrollLink;