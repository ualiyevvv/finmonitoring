const { createSession } = require('../database/neo4j');

class Data {
    async getOne(id) {
        return new Promise(() => {
            const session = createSession();

            let cypher = "MATCH (n:EDUCATION {`IIN:ID`:'AJABACFFDCCC'}) RETURN n";
            session.run(cypher)
            .then(result => {
                //     // On result, get count from first record
                //     const count = result.records[0].get('count');
                console.log(result.records);
                return result.records
            })
            .catch(e => {
                // Output the error
                console.log(e);
            })
            .then(() => {
                // Close the Session
                return session.close();
            });
        })
    }
}

module.exports = new Data()