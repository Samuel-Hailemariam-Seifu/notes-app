# Notes App

A modern, responsive note-taking application built with React and styled with Tailwind CSS.

## Features

- ✍️ Create, edit, and delete notes
- 🔍 Search through notes
- 🌓 Dark mode support
- 📱 Responsive design
- 💾 Local storage persistence
- 📤 Export notes to Markdown or TXT
- 🔎 Detailed note view
- 🎨 Modern UI with animations

## Technologies Used

- React
- Tailwind CSS
- LocalStorage for data persistence
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository: 

```bash
git clone https://github.com/Samuel-Hailemariam-Seifu/notes-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage


The app will be available at `http://localhost:3000`

## Usage

- **Create Note**: Click the "Add New Note" button and fill in the title and content
- **Edit Note**: Click the "Edit" button on any note to modify it
- **Delete Note**: Click the "Delete" button to remove a note
- **View Note**: Click on any note to view its full content
- **Search Notes**: Use the search bar to filter notes
- **Export Notes**: Use the export buttons to download notes in MD or TXT format
- **Dark Mode**: Toggle dark mode using the moon icon in the top-right corner

## Project Structure

src/
src/ ├── components/ /n │ ├── NoteForm.js # Note creation form │ ├── NoteList.js # List of notes │ ├── NoteItem.js # Individual note component │ ├── NoteDetail.js # Detailed note view │ ├── SearchBar.js # Search functionality │ ├── Modal.js # Modal component │ └── DarkModeToggle.js # Dark mode toggle ├── utils/ │ └── exportNotes.js # Note export utilities ├── App.js # Main application component └── index.js # Application entry point


## Features in Detail

### Note Management
- Create notes with title and content
- Edit existing notes
- Delete unwanted notes
- View full note content in a modal

### Search Functionality
- Real-time search through notes
- Searches both titles and content
- Case-insensitive search

### Dark Mode
- System preference detection
- Manual toggle option
- Persistent preference

### Export Options
- Export to Markdown (.md)
- Export to Text (.txt)
- Maintains note formatting

### Data Persistence
- Automatically saves to localStorage
- Restores notes on page reload
- No backend required

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




