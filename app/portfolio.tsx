import { Project } from "@/app/project";
import PortfolioProjects from "@/app/data/portfolio.json";

export default function Portfolio() {
  return (
    <>
      <a id="Portfolio"></a>
      <div className="bg-gray-900">
        <div className="container mx-auto p-4 flex flex-row items-center">
          <div>
            <h2 className="text-2xl font-bold p-4">Personal projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 py-4">
              {PortfolioProjects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
