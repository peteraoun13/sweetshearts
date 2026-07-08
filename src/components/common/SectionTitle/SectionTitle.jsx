export function SectionTitle({ eyebrow, title, copy, align = "left", className = "" }) {
  return (
    <div className={`section-title section-title--${align} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
