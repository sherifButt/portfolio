import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLinks = motion(styled.a``);

const StyledLink = ({ children, href, className }) => {
   return (
      <StyledLinks href={href} className={className} passHref>
         {children}
      </StyledLinks>
   );
};
export default StyledLink;
