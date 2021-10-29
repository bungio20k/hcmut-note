export default function Note(props) {
    return (
        <div class='border border-dark rounded'>
            <h5>{props.data.name}</h5>
            <p class='border border-dark rounded-pill w-75'><i class="bi bi-alarm"></i> {props.data.time}</p>
            <p class='border border-dark rounded-pill w-50'><i class="bi bi-tags"></i> {props.data.tag}</p>
        </div>
    )
}