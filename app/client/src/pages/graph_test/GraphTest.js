import React from 'react';
import Main from "../main/Main";
import Graph from "react-graph";
// import  from "react-graph";
// import GraphEventHandler from "react-graph";

import nodes from './data/nodes'
import relationships from './data/relationships'
import root from './data/root'


export default function GraphTest(){
    // console.log(GraphEventHandler)
    return (
        <Main>
            <Graph
                initialState={root}
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