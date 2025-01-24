type ProjectDetails = {
  title: string;
  content: string;
  technologies: string[];
  links: { url: string; icon: string }[];
};

const Project = ({ project }: Readonly<{ project: ProjectDetails }>) => {
  return (
    <div>
      <section className="flex flex-col justify-between bg-gray-800 p-8 m-4 shadow-lg shadow-gray-950">
        <article className="pb-16">
          <h4 className="text-xl font-bold text-emerald-300 pb-2">
            {project.title}
          </h4>
          <p>{project.content}</p>
        </article>
        <section className="flex flex-row justify-between">
          <ul className="flex flex-row list-inside text-gray-400">
            {project.technologies.map((x) => (
              <li key={x} className="pr-4">
                {x}
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end">
            {project.links.map((x) => (
              <a key={x.url} className="pl-3" href={x.url} role="button">
                <svg
                  className="w-5 h-5 fill-current hover:fill-gray-400"
                  viewBox="0 0 24 24"
                >
                  <use href={x.icon}></use>
                </svg>
              </a>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export { Project, type ProjectDetails };
