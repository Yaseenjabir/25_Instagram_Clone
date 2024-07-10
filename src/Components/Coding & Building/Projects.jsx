import ProjectsList from "./ProjectsList";
import { ProjectsData } from "./assets/ProjectsData";

const Projects = () => {
  const data = ProjectsData;
  return (
    <>
      <section className="mt-20">
        <h1 className="text-2xl mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {data.map((item, index) => (
            <ProjectsList key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Projects;
