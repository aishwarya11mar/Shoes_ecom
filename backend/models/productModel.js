const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
            type:String,
            required:[true,"Please enter product name"],
            trim:true
    }, 
    
    description:{
        type:String,
        required:[true,"Please enter product Description"],
    },

    price:{
        type:Number,
        required:[true,"Please enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },

    ratings:{
        type:Number,
        default:0
    },

    images:[{
        public_id:{
            type:String,
            required:true
        },

        url:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:false
        }
    }],

    

    category:{
        type:String,
        required:[true,"Please enter Product Category"],
    },

    stock:{
        type:Number,
        required:[true,"Please enter product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },

    numOfReviews:{
        type:Number,
        default:0
    },

    reviews:[{

        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },      
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
        
    
    }],


    amazon_link:{
        type:String,
        required:false
    },

    point1:{
        type:String,
        required:false
    },
    point2:{
        type:String,
        required:false
    },
    point3:{
        type:String,
        required:false
    },
    point4:{
        type:String,
        required:false
    },
    point5:{
        type:String,
        required:false
    },

    brand:{
        type:String,
        required:false
    },
    colour:{
        type:String,
        required:false
    },
    weight:{
        type:String,
        required:false
    },
    material:{
        type:String,
        required:false
    },
    itemdimensions:{
        type:String,
        required:false
    },

   

    createAt:{
        type:Date,
        default:Date.now
    }

});



module.exports = mongoose.model("Product",productSchema);