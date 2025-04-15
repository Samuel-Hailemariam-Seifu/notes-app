import React, { useState } from 'react';
import Modal from './Modal.js';
import NoteDetail from './NoteDetail.js';

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    if (typeof onEdit !== 'function') {
      console.error('onEdit is not a function');
      return;
    }
    onEdit(note.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <div 
          className="cursor-pointer"
          onClick={() => setIsDetailOpen(true)}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 line-clamp-1">{note.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px] line-clamp-3">{note.content}</p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="px-4 py-2 text-sm text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-all duration-300"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}
            className="px-4 py-2 text-sm text-red-500 hover:text-white bg-red-50 hover:bg-red-500 rounded-lg transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>

      <Modal isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)}>
        <NoteDetail note={note} />
      </Modal>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Note</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content</label>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NoteItem;
  