const Note = ({ note, del, edit, pinHandler, detail, displayTime}) => {
  const { id, title, text, date, pinned, color, time, tag } = note;
  const styleCard = {
    position: "relative",
    "border-color": color,
    color: color,
  };
  const styleEditIcon = {
    position: "absolute",
    top: "0",
    right: "2px",
  };
  const styleDelIcon = {
    position: "absolute",
    bottom: "0",
    right: "2px",
  };
  const stylePinIcon = {
    position: "absolute",
    top: "0",
    left: "2px",
  };
  return (
    <div className="card card-note" style={styleCard}>
      {(pinned === "n") ? (
        <i
          role="button"
          className="bi bi-pin"
          style={stylePinIcon}
          onClick={() => pinHandler(id, "n")}
        ></i>
      ) : (
        <i
          role="button"
          className="bi bi-pin-angle"
          style={stylePinIcon}
          onClick={() => pinHandler(id, "y")}
        ></i>
      )}
      <i
        role="button"
        className="bi bi-pencil"
        style={styleEditIcon}
        onClick={() => {
          edit(id);
        }}
      ></i>
      <div
        className="card-body"
        role="button"
        onClick={() => detail(id)}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#see-detail"
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{date}</p>
        {displayTime && (
        <p className="badge btn-secondary btn-sm rounded-pill">
          <i className="bi bi-alarm"></i> {time}
        </p>
        )}
        <p className="badge btn-secondary btn-sm rounded-pill">
          <i className="bi bi-tags"></i> {tag}
        </p>
      </div>
      <i
        role="button"
        className="bi bi-trash"
        style={styleDelIcon}
        onClick={() => del(id)}
      ></i>
    </div>
  );
};

export default Note;
