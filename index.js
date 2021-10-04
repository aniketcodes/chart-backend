const express = require( "express" );
const app = express()
const PORT = 8000
const db=require("./config/mongoose")
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) )

const Chart = require( "./models/Chart" );

app.get( "/chart",async  ( req, res ) => {
    let data=await Chart.find()
    res.send( {status:200,message:"success",data})
} )

app.post( "/chart", async( req, res ) => {
    console.log( req.body )
    let result = await Chart.create( { ...req.body } )
    console.log(result)
    return res.send( {status: 200})
})

app.listen( PORT, (err) => {
    if ( err ) return console.log( `Error in running at ${ PORT } ` )
    console.log(`Server runnng at ${PORT}`)
})