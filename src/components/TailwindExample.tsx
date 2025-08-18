import React from "react";

interface TailwindExampleProps {
  title?: string;
  description?: string;
}

const TailwindExample: React.FC<TailwindExampleProps> = ({
  title = "Pure Tailwind",
  description = "This component demonstrates Tailwind classes for all styling.",
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Pure Tailwind Component */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        {/* Tailwind Buttons */}
        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors duration-200">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Pure Tailwind Gradient Card */}
      <div className="mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-xl hover:-translate-y-0.5 transition-transform duration-200">
        <h3 className="text-xl font-semibold text-white mb-2">
          Pure Tailwind Gradient Card
        </h3>
        <p className="text-white/90">
          This card uses only Tailwind classes for styling including gradients
          and hover effects.
        </p>
      </div>

      {/* Responsive Grid with Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg text-white"
          >
            <h4 className="font-semibold mb-2">Card {item}</h4>
            <p className="text-sm opacity-90">
              Responsive grid item using Tailwind classes.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindExample;
