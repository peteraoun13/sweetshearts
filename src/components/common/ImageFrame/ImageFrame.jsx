export function ImageFrame({
  src,
  alt,
  caption,
  aspect = "portrait",
  className = "",
  loading = "lazy",
}) {
  return (
    <figure className={`image-frame image-frame--${aspect} ${className}`.trim()}>
      <img src={src} alt={alt} loading={loading} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
