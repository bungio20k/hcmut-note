// import react from 'react';

export default function Note(props) {
  return (
    <div className="border border-dark rounded col-8" id="note">
      <h5>{props.data.name}</h5>
      <p className="text-secondary">{props.data.description}</p>
      <div className="">
        <button className="rounded-pill col btn btn-secondary">
          <i className="bi bi-alarm"></i> {props.data.time}
        </button>
        <button className="rounded-pill col btn btn-secondary">
          <i className="bi bi-tags"></i> {props.data.tag}
        </button>
      </div>
    </div>
  );
}
