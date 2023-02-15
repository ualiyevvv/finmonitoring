const { createSession } = require('../../../database/neo4j');

const dataController = {}
//'/by/:id'
dataController.getOne = async (req, res) => {

}
//'/between'
dataController.between = async (req, res) => {
    const {id_start, id_end} = req.query
    console.log(id_start, id_end)
    const session = createSession();

    // let cypher = "MATCH (who:EDUCATION)-[:УЧИЛСЯ]->(where:EDU) WHERE who.`IIN:ID` = '" + id_start + "' or who.`IIN:ID` = '" + id_end + "' RETURN who, where";
    // let cypher = 'MATCH (a:EDUCATION {`IIN:ID`:"' + id_start + '"})-[r1]->(c:EDU)<-[r2]-(b:EDUCATION {`IIN:ID`:"' + id_end + '"}) RETURN a,b,c,r1,r2';
    let cypher = 'MATCH p=allShortestPaths((a:EDUCATION {`IIN:ID`: "' + id_start + '"})-[*]-(b:EDU {`BIN:ID`:"' + id_end + '"})) RETURN p';

    session.run(cypher)
    .then(result => {
        //     // On result, get count from first record
        //     const count = result.records[0].get('count');
        console.log(result.records);
        res.json(result.records) 
    })
    .catch(e => {
        // Output the error
        console.log(e);
    })
    .then(() => {
        // Close the Session
        return session.close();
    });
}
//'/bynode'
dataController.bynode = async (req, res) => {

}
//'/relations'
dataController.getRelations = async (req, res) => {

}
//'/viewappp'
dataController.viewappp = async (req, res) => {

}
//'/all'
dataController.getAll = async (req, res) => {
    // const {id_start, id_end} = req.query
    // console.log(id_start, id_end)
    const session = createSession();

    // let cypher = "MATCH (who:EDUCATION)-[:УЧИЛСЯ]->(where:EDU) WHERE who.`IIN:ID` = '" + id_start + "' or who.`IIN:ID` = '" + id_end + "' RETURN who, where";
    // let cypher = 'MATCH (a:EDUCATION {`IIN:ID`:"' + id_start + '"})-[r1]->(c:EDU)<-[r2]-(b:EDUCATION {`IIN:ID`:"' + id_end + '"}) RETURN a,b,c,r1,r2';
    let cypher = 'MATCH p=(a)-[r]-(b) RETURN p';

    session.run(cypher)
    .then(result => {
        //     // On result, get count from first record
        //     const count = result.records[0].get('count');
        console.log(result.records);
        res.json(result.records) 
    })
    .catch(e => {
        // Output the error
        console.log(e);
    })
    .then(() => {
        // Close the Session
        return session.close();
    });
}

module.exports = dataController;