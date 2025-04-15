import { useState } from 'react';

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ id: Date.now(), title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Create New Note</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 
            dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            dark:text-white transition-all duration-200"
            placeholder="Enter note title..."
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 
            dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            dark:text-white transition-all duration-200"
            placeholder="Enter note content..."
          />
        </div>
      </div>
      <button 
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
        hover:bg-blue-700 transform transition-all duration-200 hover:scale-[1.02] 
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Create Note
      </button>
    </form>
  );
};

export default NoteForm;
