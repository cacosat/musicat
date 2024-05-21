import React from "react";

export default function ListHeader(props) {

    return(
        <div className="w-full h-fit px-4 py-2 bg-custom-cards-light rounded-lg shadow-custom-vertical text-custom-gray-200 text-sm font-extralight">
            <div className="w-full grid grid-cols-4 place-items-center">
                {/* TODO (optional): map over an array of categories to show provided via a prop */}
                <p>Song</p>
                <p>Album</p>
                <p>Streams</p>
                <p>Options</p>
            </div>
        </div>
    )
}