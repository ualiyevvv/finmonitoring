const express = require('express')
const path = require('path')
const session = require('./database/neo4j')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/',function(req,res) {
//     let cypher = "MATCH (n:EDU) RETURN count(n) as count";
//     session.run(cypher)
//     .then(result => {
//         // On result, get count from first record
//         const count = result.records[0].get('count');
//         // Log response
//         console.log( count.toNumber() );
//     })
//     .catch(e => {
//         // Output the error
//         console.log(e);
//     })
//     .then(() => {
//         // Close the Session
//         return session.close();
//     });
//     res.send("It works");
// });
app.get('/',function(req,res) {
    let cypher = "MATCH (n:EDU) RETURN n";
    session.run(cypher)
    .then(result => {
        
        // Log response
        console.log( result.records );
    })
    .catch(e => {
        // Output the error
        console.log(e);
    })
    .then(() => {
        // Close the Session
        return session.close();
    });
    res.send("It works");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})