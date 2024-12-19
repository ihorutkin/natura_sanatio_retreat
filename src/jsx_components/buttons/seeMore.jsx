import React from 'react';
import "../../styles/buttons/see_more_btn.css"

const SeeMoreBtn = ({ children }) => {
    return (
        <div class="box-1">
            <div class="btn btn-one">
                { children }
            </div>
        </div>
    )
}

export default SeeMoreBtn