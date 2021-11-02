import Note from "./Note";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.content}
          date={note.date}
          pinned={note.pinned}
        />
      ))}
    </div>
  );
};

export default NotesList;
