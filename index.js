const {initializeDatabase} = require("./db/db.connect");

// const fs = require("fs");
const EventInfo = require("./models/EventInfo.models");

initializeDatabase();

// const jsonData = fs.readFileSync('events.json','utf-8' );
// const eventsData = JSON.parse(jsonData);
const express = require("express");
const { error } = require("console");
const app = express()
require("dotenv").config();
app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));



// function seedData(){
//     try {
//         for(const eventData of eventsData){
//             const newEvent = new EventInfo({
//                 eventImgUrl: eventData.eventImgUrl,
//                 eventName: eventData.eventName,
//                 eventDate: eventData.eventDate,
//                 eventTime: eventData.eventTime,
//                 eventType: eventData.eventType,
//                 hostedBy: eventData.hostedBy,
//                 details: eventData.details,
//                 dressCode: eventData.dressCode,
//                 ageRestriction: eventData.ageRestriction,
//                 eventTags: eventData.eventTags,
//                 eventEnding: eventData.eventEnding,
//                 address: eventData.address,
//                 price: eventData.price,
//                 speakerOneimgUrl: eventData.speakerOneimgUrl,
//                 speakerOnename: eventData.speakerOnename,
//                 speakerOnepost: eventData.speakerOnepost,
//                 speakerTwoimgUrl: eventData.speakerTwoimgUrl,
//                 speakerTwoname: eventData.speakerTwoname,
//                 speakerTwopost: eventData.speakerTwopost

//             })

//             newEvent.save();


//         }
//     } catch (error) {
//           console.log("Error seeding the data", error);   
//     }
// }

// seedData()


async function readAllEvents(){
    try {
        const allEvents = await EventInfo.find()
        return allEvents
    } catch (error) {
        console.log(error)
    }
} 


// readAllEvents()





app.get('/', async (req, res) => {
    try {
        const theEvent = await readAllEvents()
        if(theEvent){
            res.json(theEvent)
        }else{
            res.status(404).json({error: "Event not found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch event."})
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
 


