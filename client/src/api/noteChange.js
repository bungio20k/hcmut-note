import {useState, useEffect} from 'react';

export default function noteChange(props) {
    const [submit, setSubmit] = useState(false);

    const handleNoteUpdate = async () => {
        if (!submit) return;
        const res = await axios.post('/notechange', {
            userId: localStorage.getItem('token'),
            note: note
        });
        if (!note.hasOwnProperty('databaseid')) {
            setNote((prev) => ({
                ...prev,
                databaseid: res.data
            }))
        }
    }

    useEffect(() => handleNoteUpdate(), [submit]);

    return {
        submit,
        setSubmit
    }
}