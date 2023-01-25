import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Neo4jD3 from './n2.js';
// import React, { useEffect } from 'react';

function App() {
    

  const [formData, setFormData] = useState({
    input1: '',
    input2: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/api/data/between?id_start=${formData.input1}&id_end=${formData.input2}`)
      .then(response => {
        setData(response.data);
      });
  }

  const [data, setData] = useState(null);

  function init() {
    var ford3data =  [
{
"keys": [
    "a",
    "b",
    "c",
    "r1",
    "r2"
],
"length": 5,
"_fields": [
    {
    "identity": {
        "low": 165,
        "high": 0
    },
    "labels": [
        "EDUCATION"
    ],
    "properties": {
        "name": "Clarette Cobelli",
        "IIN:ID": "JGAGBDDAACHH"
    }
    },
    {
    "identity": {
        "low": 167,
        "high": 0
    },
    "labels": [
        "EDUCATION"
    ],
    "properties": {
        "name": "Katharyn Jerrans",
        "IIN:ID": "AEBCBGFAADCE"
    }
    },
    {
    "identity": {
        "low": 106,
        "high": 0
    },
    "labels": [
        "EDU"
    ],
    "properties": {
        "BIN:ID": "ABBBEAAADGCG",
        "name": "Школа 3"
    }
    },
    {
    "identity": {
        "low": 436,
        "high": 0
    },
    "start": {
        "low": 165,
        "high": 0
    },
    "end": {
        "low": 106,
        "high": 0
    },
    "type": "УЧИЛСЯ",
    "properties": {
        "end_date": "25.06.2013",
        "source": "MON_RK",
        "start_date": "01.09.2005"
    }
    },
    {
    "identity": {
        "low": 190,
        "high": 0
    },
    "start": {
        "low": 167,
        "high": 0
    },
    "end": {
        "low": 106,
        "high": 0
    },
    "type": "УЧИЛСЯ",
    "properties": {
        "end_date": "11.01.2017",
        "source": "MON_RK",
        "start_date": "26.01.2015"
    }
    }
],
"_fieldLookup": {
    "a": 0,
    "b": 1,
    "c": 2,
    "r1": 3,
    "r2": 4
}
}
]

var newnodes = []
var newrels = []

let originalArray = ford3data[0]._fields;

originalArray.forEach(function(object) {

if (!object.labels) {
    // console.log(object)
    newrels.push({
        "id": object.identity.low.toString(),
        "startNode": object.start.low.toString(),
        "endNode": object.end.low.toString(),
        "properties": object.properties,
        "type": object.type,
    });
} else {
    newnodes.push({
        "id": object.identity.low.toString(),
        "labels": object.labels,
        "properties": object.properties
    })
}
});

var resultData = {
"results": [{
    "data": [{
        "graph": {
            "nodes": newnodes,
            "relationships": newrels 
        }
    }]
}],
"errors": []
}

    var neo4jd3 = new Neo4jD3(resultData, '#neo4jd3', {
        highlight: [
            {
                class: 'Project',
                property: 'name',
                value: 'neo4jd3'
            }, {
                class: 'User',
                property: 'userId',
                value: 'eisman'
            }
        ],
        minCollision: 60,
        neo4jDataUrl: '../json/neo4jData.json',
        nodeRadius: 25,
        onNodeDoubleClick: function(node) {
            switch(node.id) {
                case '25':
                    // Google
                    window.open(node.properties.url, '_blank');
                    break;
                default:
                    var maxNodes = 5,
                        data = neo4jd3.randomD3Data(node, maxNodes);
                    neo4jd3.updateWithD3Data(data);
                    break;
            }
        },
        onRelationshipDoubleClick: function(relationship) {
            console.log('double click on relationship: ' + JSON.stringify(relationship));
        },
        zoomFit: true
    });
}

useEffect(() => {
  // This function will be called when the component mounts
  init();
}, []);
// init()
// window.onload = init;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" name="input1" value={formData.input1} onChange={handleChange} />
        </label>
        <label>
          Input 2:
          <input type="text" name="input2" value={formData.input2} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {data && <div>{JSON.stringify(data)}</div>}
      
      <div id="neo4jd3"></div>
    </div>
  );
}

export default App;