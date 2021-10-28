// import { MdDeleteForever } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa'

const Note = ( {id,title, text, date }) => {
    return (
        <div className = 'Note'>
            <h3>{title}</h3>
            <span> {text}</span>
            <div className = 'Note-footer'>
                
                <small>{date}</small>
                
                <FaTimes
                    className = 'delete-icon'
                    size = '1.3em'
                    style = {{color: 'red', cursor: 'pointer'}}
                />
                
                
            </div>
        </div>
    )
}

export default Note
