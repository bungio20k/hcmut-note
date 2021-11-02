// import react from 'react';

export default function Note(props) {
    return (
        <div class='border border-dark rounded col-8' id='note'>
            <h5>{props.data.name}</h5>
            <p class='text-secondary'>{props.data.description}</p>
            <div class=''>
                <button class='rounded-pill col btn btn-secondary'>
                    <i class="bi bi-alarm"></i> {props.data.time}
                </button>
                <button class='rounded-pill col btn btn-secondary'>
                    <i class="bi bi-tags"></i> {props.data.tag}
                </button>
            </div>
        </div>
    )
}