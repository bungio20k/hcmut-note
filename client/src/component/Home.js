import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>A workspace for HCMUT-er.</h1>
            <p>More than just a notes organiser, we provide an entire workspace for those who hustle hard.</p>
            <Link to='/register'>Get started now</Link>
            <img srd='' alt='illustration'></img>
        </div>
    )
}