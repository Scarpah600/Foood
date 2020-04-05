const variables = {
    Api: {
     port:process.env.port || 3000      
    },
    Database: {
        connection: process.env.connection || 'MONGODB<USERNAME>:<PASSWORD>'
    }
}

module.exports = variables;