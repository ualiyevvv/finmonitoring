const neo4j = require('neo4j-driver')
const driver = neo4j.driver(
    `neo4j://${process.env.HOST}:${process.env.NEO_PORT}`,    
    neo4j.auth.basic(`${process.env.NEO_USER}`, `${process.env.NEO_PASS}`)
) 


const session = driver.session({ defaultAccessMode: neo4j.session.READ });

module.exports = session