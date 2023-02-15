import React from 'react';
import Main from "../main/Main";
import Graph from "react-graph";

import nodes from './data/nodes'
import relationships from './data/relationships'
import root from './data/root'

export default function GraphTest(){
    return (
        <Main>
            <h1>[Graph Test]</h1>
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