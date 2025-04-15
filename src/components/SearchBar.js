const SearchBar = ({ onSearch }) => (
  <div className="mb-8">
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-5 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 
        dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 
        focus:border-transparent dark:text-white transition-all duration-200"
      />
      <svg
        className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
);

export default SearchBar; 