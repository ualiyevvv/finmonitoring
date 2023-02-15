// require('dotenv').config()

const neo4j = require('neo4j-driver')
const driver = neo4j.driver(
    `neo4j+s://1aa232cb.databases.neo4j.io`,    
    neo4j.auth.basic(`neo4j`, `55RPlllhQxrtVIOy-O0PDSo1c83s5GY66v5ULTkOkfM`)
) 

function createSession() {
    return driver.session({ defaultAccessMode: neo4j.session.READ })
}

module.exports = {createSession}