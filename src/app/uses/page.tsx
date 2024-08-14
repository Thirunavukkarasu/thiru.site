import { UsesCategories } from "@/lib/constants";

export default function Uses() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
          Software, Hardware, and Tools I Use
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          A list of software, hardware, and tools that I use on a daily basis to
          get my work done.
        </p>
      </header>
      <hr className="my-4" />
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          {Object.entries(UsesCategories).map(([category, items]) => (
            <section
              key={category}
              aria-labelledby={`:${category}:`}
              className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
            >
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <h2
                  id={`:${category}:`}
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  {category}
                </h2>
                <div className="md:col-span-3">
                  <ul role="list" className="space-y-16">
                    {items.map(({ name, description, link }) => (
                      <li
                        key={name}
                        className="group relative flex flex-col items-start"
                      >
                        {/* Heading with link */}

                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <a href={link}>{name}</a>
                        </h3>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
