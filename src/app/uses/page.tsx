import { UsesCategories } from "@/lib/constants";

export default function Uses() {
  return (
    <div className="prose">
      <p>
        🛠️ A list of software, hardware, and tools that I use on a daily basis
        to get my work done.
      </p>

      <div className="space-y-4">
        {Object.entries(UsesCategories).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-xs font-semibold mb-1 text-gray-800 dark:text-gray-200">
              {category}
            </h2>
            <ul className="space-y-1">
              {items.map(({ name, description, link }) => (
                <li key={name}>
                  <h3 className="text-xs font-medium">
                    <a
                      href={link}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                    >
                      {name}
                    </a>
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-tight">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
