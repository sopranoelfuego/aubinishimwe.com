import NextLink, { LinkProps } from "next/link";
import { HTMLProps, MouseEvent, FC } from "react";

 const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ as, children, href, replace, scroll, shallow, passHref, ...rest}) => {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const destination = document.getElementById(href.substring(1));
      if (destination) destination.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NextLink as={as} href={href} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow}>
      <a href={href} {...rest} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
};
export default Link