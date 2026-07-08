import { Link } from "react-router-dom";

export function Button({
  children,
  to,
  href,
  variant = "primary",
  icon,
  className = "",
  type = "button",
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        <span>{children}</span>
        {icon ? <span className="button__icon" aria-hidden="true">{icon}</span> : null}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        <span>{children}</span>
        {icon ? <span className="button__icon" aria-hidden="true">{icon}</span> : null}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      <span>{children}</span>
      {icon ? <span className="button__icon" aria-hidden="true">{icon}</span> : null}
    </button>
  );
}
