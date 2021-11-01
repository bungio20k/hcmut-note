import React from 'react';
import { Link } from 'react-router-dom';

const tagData = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];

export default function Sidebar() {
    return (
        <div class='col-1'>
            <button type="button" class="btn btn-outline-info"><i class="bi bi-sticky-fill"></i></button>
            <button type="button" class="btn btn-outline-info"><i class="bi bi-bell-fill"></i></button>
            <button type="button" class="btn btn-outline-info"><i class="bi bi-briefcase-fill"></i></button>
            <button type="button" class="btn btn-outline-info"><i class="bi bi-bookmark-plus-fill"></i></button>
            {tagData.map(tag => (
                <>
                    <div class='w-100'></div>
                    <i class="bi bi-tag">{tag}</i>
                </>
            ))}
        </div>
    )
}