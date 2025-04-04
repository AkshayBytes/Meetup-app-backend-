const mongoose = require("mongoose");

const eventInfoSchema = new mongoose.Schema({
    eventImgUrl: {type: String,
        required: true
    },
    eventName: {type: String,
        required: true
    },
    eventDate: {type: String,
        required: true
    },
    eventTime: {type: String,
        required: true
    },
    eventType: [
        {
            type: String,
            enum: ['offline','online']
        }
    ],
    hostedBy: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    
     dressCode: String,
     ageRestriction: String,

    
    eventTags: [{
        type: String,
        enum: ["marketing", "digital","design","AI","Tally","Accounting","computer specialist","Artificial Inteligence",]
    }],
    eventEnding: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    speakerOneimgUrl: String,
    speakerOnename: String,
    speakerOnepost: String,
    speakerTwoimgUrl: String,
    speakerTwoname: String,
    speakerTwopost: String
        
    
},{
    timestamps: true,
}
);


const EventInfo = mongoose.model("EventInfo", eventInfoSchema );

module.exports = EventInfo;


