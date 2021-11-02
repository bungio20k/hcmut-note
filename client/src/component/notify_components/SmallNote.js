export default function Note(props) {
    return (
        <div class='border border-dark rounded text-secondary' id='small-note'>
            <h5>{props.data.name}</h5>
            <p class='btn btn-secondary btn-sm rounded-pill'><i class="bi bi-alarm"></i> {props.data.time}</p>
            <p class='btn btn-secondary btn-sm rounded-pill'><i class="bi bi-tags"></i> {props.data.tag}</p>
        </div>
    )
}