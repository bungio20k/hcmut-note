// import react from 'react';

export default function Note(props) {
    return (
        <div class='border border-dark rounded col-6'>
            <h5>{props.data.name}</h5>
            <p>{props.data.description}</p>
            <div class=''>
                <p class='border border-dark rounded-pill col-5'><i class="bi bi-alarm"></i> {props.data.time}</p>
                <p class='border border-dark rounded-pill col-5'><i class="bi bi-tags"></i> {props.data.tag}</p>
            </div>
        </div>
    )
}