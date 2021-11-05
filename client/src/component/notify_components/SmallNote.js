export default function Note(props) {
  return (
    <div className="border border-dark rounded text-secondary" id="small-note">
      <h5>{props.data.title}</h5>
      <p className="badge btn-secondary btn-sm rounded-pill">
        <i className="bi bi-alarm"></i> {props.data.time}
      </p>
      <p className="badge btn-secondary btn-sm rounded-pill">
        <i className="bi bi-tags"></i> {props.data.tag}
      </p>
    </div>
  );
}
