console.log("hello")
function init(json) {
    var data =  json

var newnodes = []
var newrels = []

let originalArray = data[0]._fields;

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

    var neo4jd3 = new Neo4jd3(resultData, '#neo4jd3', {
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
        icons: {
//                        'Address': 'home',
            'Api': 'gear',
//                        'BirthDate': 'birthday-cake',
            'Cookie': 'paw',
//                        'CreditCard': 'credit-card',
//                        'Device': 'laptop',
            'Email': 'at',
            'Git': 'git',
            'Github': 'github',
            'Google': 'google',
//                        'icons': 'font-awesome',
            'Ip': 'map-marker',
            'Issues': 'exclamation-circle',
            'Language': 'language',
            'Options': 'sliders',
            'Password': 'lock',
            'Phone': 'phone',
            'Project': 'folder-open',
            'SecurityChallengeAnswer': 'commenting',
            'User': 'user',
            'zoomFit': 'arrows-alt',
            'zoomIn': 'search-plus',
            'zoomOut': 'search-minus'
        },
        images: {
            'Address': 'img/twemoji/1f3e0.svg',
//                        'Api': 'img/twemoji/1f527.svg',
            'BirthDate': 'img/twemoji/1f382.svg',
            'Cookie': 'img/twemoji/1f36a.svg',
            'CreditCard': 'img/twemoji/1f4b3.svg',
            'Device': 'img/twemoji/1f4bb.svg',
            'Email': 'img/twemoji/2709.svg',
            'Git': 'img/twemoji/1f5c3.svg',
            'Github': 'img/twemoji/1f5c4.svg',
            'icons': 'img/twemoji/1f38f.svg',
            'Ip': 'img/twemoji/1f4cd.svg',
            'Issues': 'img/twemoji/1f4a9.svg',
            'Language': 'img/twemoji/1f1f1-1f1f7.svg',
            'Options': 'img/twemoji/2699.svg',
            'Password': 'img/twemoji/1f511.svg',
//                        'Phone': 'img/twemoji/1f4de.svg',
            'Project': 'img/twemoji/2198.svg',
            'Project|name|neo4jd3': 'img/twemoji/2196.svg',
//                        'SecurityChallengeAnswer': 'img/twemoji/1f4ac.svg',
            'User': 'img/twemoji/1f600.svg'
//                        'zoomFit': 'img/twemoji/2194.svg',
//                        'zoomIn': 'img/twemoji/1f50d.svg',
//                        'zoomOut': 'img/twemoji/1f50e.svg'
        },
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

// fetch('http://localhost:3000/api/data/between?id_start=AEBCBGFAADCE&id_end=JGAGBDDAACHH', { 
//   method: 'GET'
// })
// .then(function(response) { return response.json(); })
// .then(function(json) {
//   // use the json
//   console.log(json)
//   init(json)
// });

// fetch('http://localhost:3000/api/data/between?id_start=AEBCBGFAADCE&id_end=JGAGBDDAACHH')
//   .then(response => response.json())
//   .then(data => {
//     // data is the JSON object
//     console.log(data);
//   }).catch(error => {
//     console.error('Error:', error);
//   });

fetch('http://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
    console.log(json)
  // use the json
});

// async function testFet() {
//     const response = await fetch('http://localhost:3000/api/data/between?id_start=AEBCBGFAADCE&id_end=JGAGBDDAACHH');
//     const names = await response.json();
//     console.log(names); 
//     // logs [{ name: 'Joker'}, { name: 'Batman' }]
//   }
//   testFet();
// window.onload = init;