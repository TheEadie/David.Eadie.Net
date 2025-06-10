import Image from "next/image";

export default function About() {
  const technologies: string[] = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "SQL Server",
    "PostgreSQL",
    "TypeScript",
    "React",
    "Kubernetes",
    "Docker",
    "OpenTelemetry",
  ];

  return (
    <>
      <a id="About"></a>
      <div className="container mx-auto min-h-[85%] p-4 flex flex-row items-center">
        <div className="lg:flex lg:flex-row items-center">
          <section className="p-4 lg:w-2/3">
            <h1 className="text-2xl font-bold pb-8">Hi!</h1>
            <p className="pb-8">
              {"I'm "}
              <span className="text-xl font-bold text-emerald-300">
                David Eadie
              </span>
              {", a Software Architect based in Cambridge, UK"}
            </p>
            <p className="pb-2">
              {
                "I enjoy designing solutions to complex problems, with a focus on developer experience, continuous integration and continuous deployment."
              }
            </p>
            <p className="pb-8">
              {
                "I've been working in software development for over 15 years. I'm currently bringing DevOps processes to the database at Redgate Software."
              }
            </p>
            <p className="pb-2">
              {
                "These are a few of the technologies I've been working with recently:"
              }
            </p>
            <ul className="grid grid-cols-2 list-disc list-inside text-gray-400">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
          <section className="py-16 lg:p-4 lg:w-1/3">
            <Image
              className="mx-auto shadow-lg shadow-gray-950 rounded-3xl"
              src="/me.jpg"
              alt="A photo of David Eadie"
              width={400}
              height={400}
            />
          </section>
        </div>
      </div>
    </>
  );
}
