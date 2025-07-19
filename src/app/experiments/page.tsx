import Link from "next/link";

export default function ExperimentsPage() {
  const experiments = [
    {
      title: "📚 Reading Journey",
      description: "Track reading goals and book progress",
      url: "/experiments/books",
      status: "active",
      category: "personal",
    },
    {
      title: "📝 Blog Planner",
      description: "Plan, track, and manage blog content with deadlines",
      url: "/experiments/blog-planner",
      status: "active",
      category: "productivity",
    },
    {
      title: "🎯 Goal Tracker",
      description: "Track personal and professional goals",
      url: "/experiments/goals",
      status: "planned",
      category: "productivity",
    },
    {
      title: "💡 Idea Vault",
      description: "Store and organize random ideas",
      url: "/experiments/ideas",
      status: "planned",
      category: "creativity",
    },
    {
      title: "📊 Learning Dashboard",
      description: "Track courses, skills, and learning progress",
      url: "/experiments/learning",
      status: "planned",
      category: "education",
    },
    {
      title: "🎨 Creative Projects",
      description: "Showcase side projects and experiments",
      url: "/experiments/projects",
      status: "planned",
      category: "creativity",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "personal":
        return "👤";
      case "productivity":
        return "⚡";
      case "creativity":
        return "🎨";
      case "education":
        return "📚";
      default:
        return "🔬";
    }
  };

  return (
    <div className="prose max-w-none">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">🔬 Experiments</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A playground for trying new ideas and features
        </p>
      </div>

      <div className="mb-8">
        <p>
          This is where I experiment with new features, track personal goals,
          and try out ideas. Some experiments might become permanent features,
          others might be archived. It's all part of the learning process.
        </p>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((experiment, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">
                  {getCategoryIcon(experiment.category)}
                </span>
                <h3 className="font-semibold text-lg m-0">
                  {experiment.title}
                </h3>
              </div>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  experiment.status
                )}`}
              >
                {experiment.status}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {experiment.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 capitalize">
                {experiment.category}
              </span>
              {experiment.status === "active" ? (
                <Link
                  href={experiment.url}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Try it out →
                </Link>
              ) : (
                <span className="text-gray-400 text-sm">Coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Why This Lab */}
      <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">🎯 Why This Lab?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is where I experiment with new features, track personal goals,
          and try out ideas. Some experiments might become permanent features,
          others might be archived. It's all part of the learning process.
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            • <strong>Personal tracking</strong> - Reading goals, learning
            progress, etc.
          </li>
          <li>
            • <strong>Feature testing</strong> - Try new ideas before making
            them permanent
          </li>
          <li>
            • <strong>Side projects</strong> - Showcase creative experiments
          </li>
          <li>
            • <strong>Learning playground</strong> - Safe space to try new
            technologies
          </li>
        </ul>
      </div>
    </div>
  );
}
