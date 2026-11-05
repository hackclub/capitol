import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import projects from "./projects.json";

export const metadata = {
  title: "Project gallery - Capitol",
  description:
    "Browse projects from Congressional App Challenge participants who earned their Hack Club certificate.",
};

export default function GalleryPage() {
  return (
    <PageShell>
      <h1 className="t-heading page-paper__title">Certified projects</h1>
      <div className="t-lead page-intro">
        <p>
          {projects.length} projects from Congressional App Challenge participants, open-sourced
          and certified by Hack Club.
        </p>
      </div>

      <div className="gallery-grid page-section">
        {projects.map((project, index) => (
          <ProjectCard key={project.recordId} project={project} priority={index < 8} />
        ))}
      </div>
    </PageShell>
  );
}
