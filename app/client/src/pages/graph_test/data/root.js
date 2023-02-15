module.exports = {
    nodes: [
        {
            id: "e025a50dbaae7186e51175",
            labels: [
                "EDUCATION"
            ],
            properties: {
                "name": "Alexandros Childe",
                "IIN:ID": "AJAIADFFAGDF"
            },
        },
        {
            id: "40d5e61963abf20da067",
            labels: [
                "EDUCATION"
            ],
            properties: {
                "name": "Riannon Curdell",
                "IIN:ID": "AGAJCHGFAFDB"
            },
        },
        
    ],
    relationships: [
        {
            id: "87",
            startNodeId: "e025a50dbaae7186e51175",
            endNodeId: "40d5e61963abf20da067",
            properties: {
                end_date: "07.06.2021",
                source: "MON_RK",
                start_date: "03.09.2019"
            },
            type: "УЧИЛСЯ",
        },
        {
            id: "86",
            startNodeId: "e025a50dbaae7186e51175",
            endNodeId: "40d5e61963abf20da067",
            properties: {
                source: "MON_RK",
                start_date: "13.08.2021"
            },
            type: "УЧИЛСЯ",
        },
        
    ],
};
