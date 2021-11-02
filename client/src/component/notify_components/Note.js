// import react from 'react';

export default function Note(props) {
    return (
        <div class='border border-dark rounded col-4'>
            <h5>{props.data.name}</h5>
            <p>{props.data.description}</p>
            <div class=''>
                <button class='rounded-pill col-5 btn btn-info'>
                    <i class="bi bi-alarm"></i> {props.data.time}
                </button>
                <button class='border rounded-pill col-5 btn btn-info'>
                    <i class="bi bi-tags"></i> {props.data.tag}
                </button>
            </div>
        </div>
    )
}