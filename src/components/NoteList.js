import NoteItem from './NoteItem.js';

const NoteList = ({ notes, onDelete, onEdit }) => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {notes.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500 dark:text-gray-400">
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V6a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-xl font-medium">No notes yet</p>
          <p className="mt-2">Create your first note to get started!</p>
        </div>
      ) : (
        notes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  </div>
);

export default NoteList;
