const mongoose = require( "mongoose" )

//mongoose.connect( `mongodb://localhost/chart` )
mongoose.connect(`mongodb+srv://abhishek:abhishek@cluster0.zekva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
const db = mongoose.connection
db.on( 'error', console.error.bind( console, "Error in connecting to db" ) )
db.once( 'open', () => {
    console.log( "Successfully connected to DB Chart" )
} )

module.exports = db