import { Link } from "react-router-dom";
import { brand } from "../../../data/brand.js";

export function Logo({ tone = "dark", onClick }) {
  return (
    <Link className={`logo logo--${tone}`} to="/" aria-label={`${brand.name} home`} onClick={onClick}>
      {brand.logoSrc ? (
        <img className="logo__image" src={brand.logoSrc} alt={brand.name} />
      ) : (
        <span className="logo__fallback" aria-hidden="true">
          <span className="logo__name">{brand.name}</span>
          <span className="logo__descriptor">{brand.descriptor}</span>
        </span>
      )}
    </Link>
  );
}
