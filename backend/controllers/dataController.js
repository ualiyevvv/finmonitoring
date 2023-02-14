// const driver = require('../database/neo4j')
// const Data = require('../models/data')
const { createSession } = require('../database/neo4j');


class DataController {


    async getOne(req,res) {    
        const {id} = req.params
        console.log(id)
        const session = createSession();

        let cypher = "MATCH (n:EDUCATION {`IIN:ID`:'" + id + "'}) RETURN n";

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

    async between(req,res) {    
        const {id_start, id_end} = req.query
        console.log(id_start, id_end)
        const session = createSession();

        // let cypher = "MATCH (who:EDUCATION)-[:УЧИЛСЯ]->(where:EDU) WHERE who.`IIN:ID` = '" + id_start + "' or who.`IIN:ID` = '" + id_end + "' RETURN who, where";
        // let cypher = 'MATCH (a:EDUCATION {`IIN:ID`:"' + id_start + '"})-[r1]->(c:EDU)<-[r2]-(b:EDUCATION {`IIN:ID`:"' + id_end + '"}) RETURN a,b,c,r1,r2';
        let cypher = 'MATCH p=shortestPath((a:EDUCATION {`IIN:ID`: "' + id_start + '"})-[*]-(b:EDUCATION {`IIN:ID`:"' + id_end + '"})) RETURN p';

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

    async getAll(req, res) { 
        const {id_start, id_end} = req.query
        console.log(id_start, id_end)
        const session = createSession();

        // let cypher = "MATCH (who:EDUCATION)-[:УЧИЛСЯ]->(where:EDU) WHERE who.`IIN:ID` = '" + id_start + "' or who.`IIN:ID` = '" + id_end + "' RETURN who, where";
        let cypher = 'MATCH p=()-[r:`УЧИЛСЯ`]->() RETURN p';

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

    async getRelations(req,res) {    
        try {
            const session = createSession();

            let cypher = "MATCH ()-[r]->() RETURN DISTINCT type(r)";
    
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
        } catch (e) {
            console.log(e)
        }
        
    }

    async viewappp(req, res) {
        const {id_start, id_end} = req.query
        console.log(id_start, id_end)
        try {
            const session = createSession();

            let cypher = 'MATCH (a:EDUCATION {`IIN:ID`:"' + id_start + '"})-[r1]->(c:EDU)<-[r2]-(b:EDUCATION {`IIN:ID`:"' + id_end + '"}) RETURN a,b,c,r1,r2';
    
            session.run(cypher)
            .then(result => {
                //     // On result, get count from first record
                //     const count = result.records[0].get('count');
                console.log(result.records);
                const ldata = result.records.join()
                // res.render('index2', {
                //     data: JSON.stringify(ldata)
                // })
                // res.json(result.records) 
            })
            .catch(e => {
                // Output the error
                console.log(e);
            })
            .then(() => {
                // Close the Session
                return session.close();
            });
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new DataController()