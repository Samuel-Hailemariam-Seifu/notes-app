const NoteDetail = ({ note }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{note.title}</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{note.content}</p>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Created: {new Date(note.id).toLocaleString()}
      </div>
    </div>
  );
};

export default NoteDetail; 