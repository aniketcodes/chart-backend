const mongoose = require( "mongoose" )

mongoose.connect( `mongodb://localhost/chart` )
const db = mongoose.connection
db.on( 'error', console.error.bind( console, "Error in connecting to db" ) )
db.once( 'open', () => {
    console.log( "Successfully connected to DB Chart" )
} )

module.exports = db
