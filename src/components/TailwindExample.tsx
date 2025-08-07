import React from 'react';
import styled from '@emotion/styled';

interface TailwindExampleProps {
  title?: string;
  description?: string;
}

const TailwindExample: React.FC<TailwindExampleProps> = ({ 
  title = "Tailwind + Emotion", 
  description = "This component demonstrates both Tailwind classes and Emotion styled components working together." 
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Pure Tailwind Component */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
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

      {/* Mixed Tailwind + Emotion Component */}
      <StyledCard className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Emotion Styled Component with Tailwind Classes
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          This card uses Emotion for styling but also includes Tailwind utility classes for text and spacing.
        </p>
      </StyledCard>

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

// Emotion styled component that can still use Tailwind classes
const StyledCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default TailwindExample; 