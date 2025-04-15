import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm.js';
import NoteList from './components/NoteList.js';
import SearchBar from './components/SearchBar.js';
import DarkModeToggle from './components/DarkModeToggle.js';
import { exportToMarkdown, exportToTxt } from './utils/exportNotes.js';
import Modal from './components/Modal.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notes-app') || '[]');
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, ...updatedNote } : note
    ));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <DarkModeToggle />
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Notes App
        </h1>
        <div className="flex justify-between items-center gap-3 mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg 
            hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Note
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => exportToMarkdown(notes)}
              className="px-5 py-2.5 text-sm font-medium text-white bg-purple-600 rounded-lg 
              hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export to MD
            </button>
            <button
              onClick={() => exportToTxt(notes)}
              className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg 
              hover:bg-green-700 transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export to TXT
            </button>
          </div>
        </div>
        <SearchBar onSearch={setSearchTerm} />
        <NoteList 
          notes={filteredNotes} 
          onDelete={deleteNote}
          onEdit={editNote}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NoteForm 
          onAdd={(note) => {
            addNote(note);
            setIsModalOpen(false);
          }} 
        />
      </Modal>
    </div>
  );
}

export default App;
