const mongoose = require( "mongoose" )

const chartSchema = new mongoose.Schema( {
    device: {
        type: String,
        unique:true
    },
    volume: {
        type:String
    },
    temperature: {
        type:String
    },
    pressure: {
        type:String
    }
} )

const Chart = mongoose.model( "Chart", chartSchema )
module.exports = Chart