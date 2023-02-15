import React, {useState, useEffect} from 'react';
import Main from "../main/Main";
import ReactGraph from "react-graph";

import nodes from './data/nodes'
import relationships from './data/relationships'
import root from './data/root'


export default function GraphTest(){

    const [graphs, setGraphs] = useState([]);

    useEffect(() => {
        fetch("/api/data/all")
            .then(response => response.json())
            .then(result => {
                let data = result
                console.log(data)
                // let newnodes = []
                // let newrels = []
                // for (let i=0;i<data.length;i++) {
                //     console.log(data[0]._fields[i])
                //     let originalArray = data[0]._fields[i].segments;
                //     console.log(originalArray)
                //     originalArray.forEach(function(object) {
                //         // console.log(object1)
                //         for (let prop in object) {
                //             if (!object[prop].labels) {
                //                 // console.log(object)
                //                 // indexesRel.push(object[prop].identity.low.toString())
                //                 newrels.push({
                //                     "id": "e025a50dbaae7186e51" + object[prop].identity.low.toString(),
                //                     "startNodeId": "e025a50dbaae7186e51" + object[prop].start.low.toString(),
                //                     "endNodeId": "e025a50dbaae7186e51" + object[prop].end.low.toString(),
                //                     "properties": object[prop].properties,
                //                     "type": object[prop].type,
                //                 });
                //             } else {
                //                 // indexes.push(object[prop].identity.low.toString())
                //                 newnodes.push({
                //                     "id": "e025a50dbaae7186e51" + object[prop].identity.low.toString(),
                //                     "labels": object[prop].labels,
                //                     "properties": object[prop].properties
                //                 })
                //             }
                //         };

                //     });
                // }

                // var resultData = {
                //     "nodes": newnodes,
                //     "relationships": newrels
                // }

                // setGraphs(resultData);
            });

    }, []);

    return (
        <Main>
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
        </Main>
    );
}