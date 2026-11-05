// The cream sheet with torn edges that carries every page's content. The edge
// images are the design's own paths, exported with their shadows; the body
// between them is flat cream with the paper grain multiplied over it, and the
// same grain is masked onto each edge so the sheet reads as one piece.
function Edge({ side }) {
  const src = `/collage/edge-${side}.svg`;
  return (
    <>
      <img src={src} alt="" aria-hidden="true" className={`paper__edge paper__edge--${side}`} />
      <div
        className={`paper__edge paper__edge--${side} paper__edge-grain`}
        style={{ "--edge": `url(${src})` }}
        aria-hidden="true"
      />
    </>
  );
}

export default function Paper({ className = "", children, top = true, bottom = true }) {
  return (
    <section className={`paper ${className}`}>
      {top && <Edge side="top" />}
      <div className="paper__grain" aria-hidden="true" />
      <div className="paper__body">{children}</div>
      {bottom && <Edge side="bottom" />}
    </section>
  );
}
