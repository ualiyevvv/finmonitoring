import React, {useState} from 'react';

export default function SearchText({ onSearch=f=>f }){
    const [value, setValue] = useState("");

    return (
        <div className="search">
            <input
                className="input input-search"
                type="text"
                name="search"
                placeholder="Search text..."
                onChange={e => setValue(e.target.value)}
                value={value}
            />

            <button
                className="btn btn-search"
                onClick={e => onSearch(value)}
            >
                Find
            </button>
        </div>
    );
}