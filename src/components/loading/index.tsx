export function Loading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex items-center space-x-2">
        <span className="sr-only">Loading...</span>
        <div className="h-3 w-3 bg-blue-600 rounded-full animate-pulse-fast"></div>
        <div className="h-3 w-3 bg-blue-600 rounded-full animate-pulse-fast animation-delay-200"></div>
        <div className="h-3 w-3 bg-blue-600 rounded-full animate-pulse-fast animation-delay-400"></div>
      </div>
    </div>
  );
}
