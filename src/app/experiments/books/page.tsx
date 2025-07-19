"use client";

import { useState } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  status: "reading" | "completed" | "planned";
  rating?: number;
  notes?: string;
  genre: string;
  completedDate?: string;
  startedDate?: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      status: "completed",
      rating: 5,
      genre: "tech",
      completedDate: "2024-01-15",
      notes:
        "Essential reading for any developer. Great insights on software craftsmanship.",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      status: "reading",
      genre: "productivity",
      startedDate: "2024-01-20",
      notes: "Currently reading - great insights on building good habits.",
    },
    {
      id: "3",
      title: "Deep Work",
      author: "Cal Newport",
      status: "planned",
      genre: "productivity",
    },
    {
      id: "4",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      status: "planned",
      genre: "finance",
    },
  ]);

  const [yearlyGoal] = useState(12);
  const completedBooks = books.filter(
    (book) => book.status === "completed"
  ).length;
  const currentlyReading = books.filter(
    (book) => book.status === "reading"
  ).length;
  const plannedBooks = books.filter((book) => book.status === "planned").length;

  const getGenreColor = (genre: string) => {
    const colors = {
      tech: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      productivity:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      finance:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      leadership:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      fiction: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    };
    return (
      colors[genre as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    );
  };

  return (
    <div className="prose max-w-none">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">📚 Reading Journey</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tracking my reading goals and discoveries
        </p>
      </div>

      {/* Reading Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {yearlyGoal}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Yearly Goal
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {completedBooks}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Completed
          </div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {currentlyReading}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Reading Now
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {plannedBooks}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Planned
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Progress: {completedBooks}/{yearlyGoal}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {Math.round((completedBooks / yearlyGoal) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${Math.min((completedBooks / yearlyGoal) * 100, 100)}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Currently Reading */}
      {currentlyReading > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            📖 Currently Reading
          </h2>
          <div className="space-y-4">
            {books
              .filter((book) => book.status === "reading")
              .map((book) => (
                <div
                  key={book.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
                      📖
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{book.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        by {book.author}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getGenreColor(
                          book.genre
                        )}`}
                      >
                        {book.genre}
                      </span>
                      {book.notes && (
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
                          "{book.notes}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Completed Books */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          ✅ Completed ({completedBooks})
        </h2>
        <div className="space-y-4">
          {books
            .filter((book) => book.status === "completed")
            .map((book) => (
              <div
                key={book.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
                    ✅
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-lg">{book.title}</h3>
                      {book.rating && (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < book.rating!
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      by {book.author}
                    </p>
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getGenreColor(
                          book.genre
                        )}`}
                      >
                        {book.genre}
                      </span>
                      {book.completedDate && (
                        <span className="text-xs text-gray-500">
                          Completed:{" "}
                          {new Date(book.completedDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    {book.notes && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "{book.notes}"
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Planned Books */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          📚 Planned ({plannedBooks})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books
            .filter((book) => book.status === "planned")
            .map((book) => (
              <div
                key={book.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-16 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500 text-sm">
                    📚
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{book.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      by {book.author}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getGenreColor(
                        book.genre
                      )}`}
                    >
                      {book.genre}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Reading Goals */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🎯 Reading Goals</h2>
        <ul className="space-y-2 text-sm">
          <li>✅ Read at least {yearlyGoal} books this year</li>
          <li>📖 Read 1 book per month consistently</li>
          <li>🎯 Mix of tech, leadership, and personal development books</li>
          <li>📝 Take notes on key insights and takeaways</li>
          <li>🔄 Share learnings that could help others</li>
        </ul>
      </section>
    </div>
  );
}
