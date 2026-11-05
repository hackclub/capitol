// One certified project, in the strip's card: a one-ink screenshot plate, the
// name in the serif, and a line of sans underneath. Used by the homepage strip
// and the gallery grid.
export default function ProjectCard({ project, priority = false }) {
  const { projectName, demoUrl, codeUrl, githubUsername, imageSrc } = project;
  const primary = demoUrl || codeUrl || "/gallery";
  const external = primary.startsWith("http");

  return (
    <article className="project-card">
      <a
        href={primary}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="project-card__image"
        aria-label={`${projectName}${demoUrl ? " (live demo)" : codeUrl ? " (source code)" : ""}`}
      >
        <img
          src={imageSrc}
          alt={`Screenshot of ${projectName}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </a>
      <h3 className="project-card__title" title={projectName}>
        {projectName}
      </h3>
      <p className="project-card__text">
        {githubUsername ? (
          <>
            Built by{" "}
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
              @{githubUsername}
            </a>{" "}
            for the Congressional App Challenge and certified by Hack Club.
          </>
        ) : (
          <>Built for the Congressional App Challenge and certified by Hack Club.</>
        )}
        {codeUrl && (
          <>
            {" "}
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </>
        )}
        {demoUrl && (
          <>
            {" "}
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </>
        )}
      </p>
    </article>
  );
}
