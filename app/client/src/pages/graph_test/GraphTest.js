import React, {useState, useEffect} from 'react';
import Main from "../main/Main";
import ReactGraph from "react-graph";

import nodes from './data/nodes'
import relationships from './data/relationships'
import root from './data/root'

import SearchText from '../mapbox/components/SearchText'

function mySplit(value){
    return value.split(', ');
}

export default function GraphTest(){

    const [graphs, setGraphs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch("/api/data/all")
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const newnodes = []
                const newrels = []

                for (let i=0;i<data.length;i++) {
                    // console.log(data[i]._fields[0])
                    let originalArray = data[i]._fields[0].segments;
                    // console.log(originalArray)
                    originalArray.forEach(function(object) {
                        for (let prop in object) {
                            // console.log(object[prop])

                            if (!object[prop].labels) {
                                // console.log(object)
                                // indexesRel.push(object[prop].identity.low.toString())
                                newrels.push({
                                    "id": object[prop].identity.low.toString() + "000000000000000000",
                                    "startNodeId": object[prop].start.low.toString() + "0000000000000000000",
                                    "endNodeId": object[prop].end.low.toString() + "0000000000000000000",
                                    "properties": object[prop].properties,
                                    "type": object[prop].type,
                                });
                            } else {
                                // indexes.push(object[prop].identity.low.toString())
                                newnodes.push({
                                    "id": object[prop].identity.low.toString() + "0000000000000000000",
                                    "labels": object[prop].labels,
                                    "properties": object[prop].properties
                                })
                            }
                        };

                    });
                }

                const resultData = {
                    "nodes": newnodes,
                    "relationships": newrels
                }

                setGraphs(resultData);
                setIsLoading(false);

            });

    }, []);


    const [value, setValue] = useState("");
    async function onSearch(value){
        setIsLoading(true)
        setValue("")
        const arr = mySplit(value)
        const query = {name_start:arr[0], name_end:arr[1]}
        try{
            const res = await fetch("/api/data/between?" + new URLSearchParams(query));
            const json = await res.json();
            console.log(json);
            return json;
        }catch(e){
            console.log(e);
            return null;
        }
        setIsLoading(false)
    }

    return (
        <Main>
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

            {!isLoading &&
                <ReactGraph
                    initialState={graphs}
                    nodes={nodes}
                    relationships={relationships}
                    width="100%"
                    height="100%"
                    hasLegends
                    hasInspector
                    hasTruncatedFields
                />
            }

        </Main>
    );
}