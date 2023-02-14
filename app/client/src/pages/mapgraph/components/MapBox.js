import React, {useEffect, useState} from 'react';

function SearchText({
                        onSearch = value => console.log("searched:", value)
}){
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


function Category({ name="", num=0 }){
    return (
        <div className="category">
            {name}
            <span>{num}</span>
        </div>
    );
}

function Categories({   tab="",
                        nodes=[], //[{name: "alar", num:10}],
                        relationships=[]//[{name: "ayan", num:23}]
}){
    return (<>
        <div id="nodes" className={`categories ${tab==='nodes'?'categories-active':''}`}>
            {nodes.map(c => <Category name={c.name} num={c.num}/>)}
        </div>

        <div id="relationships" className={`categories ${tab==='relationships'?'categories-active':''}`}>
            {relationships.map(c => <Category name={c.name} num={c.num}/>)}
        </div>
    </>);
}

function Tabs({ tab="", setTab=f=>f, nodes=[], relationships=[]}){
    return (
        <div className="tabs" >
            <div className={`tab ${tab==='nodes'?'tab-active':''}`}
                 onClick={e => setTab('nodes')}
            >
                Nodes
                <span>{relationships.length}</span>
            </div>

            <div className={`tab ${tab==='relationships'?'tab-active':''}`}
                 onClick={e => setTab('relationships')}
            >
                Relationships
                <span>{nodes.length}</span>
            </div>
        </div>
    );
}


export default function MapBox({ }){

    const [tab, setTab] = useState('nodes');

    const [nodes, setNodes] = useState([{name: "alar", num:10}])
    const [relationships, setRelationships] = useState([{name: "ayan", num:23}])

    return (
        <div className="mapbox">

            <SearchText />

            <div className="map">

            </div>

            <div className="panel panel-right">

                <Tabs tab={tab} setTab={setTab} nodes={nodes} relationships={relationships}/>

                <Categories tab={tab} nodes={nodes} relationships={relationships}/>

            </div>
        </div>
    );
}