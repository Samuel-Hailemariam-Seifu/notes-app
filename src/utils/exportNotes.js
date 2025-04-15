export const exportToMarkdown = (notes) => {
  const markdown = notes.map(note => (
    `# ${note.title}\n\n${note.content}\n\n---\n`
  )).join('\n');
  
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'notes.md';
  a.click();
  URL.revokeObjectURL(url);
};

export const exportToTxt = (notes) => {
  const text = notes.map(note => (
    `${note.title}\n\n${note.content}\n\n==========\n`
  )).join('\n');
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'notes.txt';
  a.click();
  URL.revokeObjectURL(url);
}; 