  const SkeletonLoader = () => (
    <div className="w-[300px] h-[300px] max-w-[440px] aspect-square rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="h-20 w-20text-gray-400">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );

export default SkeletonLoader;