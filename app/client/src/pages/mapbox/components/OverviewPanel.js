import React, {useState} from 'react';

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
            {nodes.map((c, i) => <Category key={i} name={c.name} num={c.num}/>)}
        </div>

        <div id="relationships" className={`categories ${tab==='relationships'?'categories-active':''}`}>
            {relationships.map((c, i) => <Category key={i} name={c.name} num={c.num}/>)}
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

export default function OverviewPanel({
                                          nodes=[],
                                          relationships=[]
}){
    const [tab, setTab] = useState('nodes');

    return (
        <div className="panel panel-right">

            <Tabs
                tab={tab}
                setTab={setTab}
                nodes={nodes}
                relationships={relationships}
            />

            <Categories
                tab={tab}
                nodes={nodes}
                relationships={relationships}
            />

        </div>
    );
}