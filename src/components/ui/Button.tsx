import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
};

const Button = ({
  children,
  href,
  className = "",
  target,
  rel,
}: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        className={`cta-button ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`cta-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
