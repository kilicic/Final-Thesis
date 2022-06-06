const express = require("express");
const app = express();
const cors = require("cors");
const pg = require('pg');
const findPics = require('./helpers/findPics');

const knex = require('knex');

const database = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1', 
        user: 'postgres',
        password: 'bazepodataka', 
        database: 'zavrsni_rad'
    }
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/gallery', (req, res) =>  { 
    
    const {name, description, happiness, fear, sadness, surprise, disgust, anger, arousal, valence, approachavoidance, category, group} = req.body
    let paramsForQuery = findPics(name, description, happiness, fear, sadness, surprise, disgust, anger, arousal, valence, approachavoidance, category, group)

    if(paramsForQuery[0] === "noName" && paramsForQuery[1] === "noDescription") {
        console.log("tu1")
        database.select('id','location').from('image')
        .join('emotion', 'id', 'emotion.imageid').join('emotion_with_be','id', 'emotion_with_be.imageid')
        .whereRaw(`(categoryid = ${(paramsForQuery[11])[0]} or categoryid = ${(paramsForQuery[11])[1]} or categoryid = ${(paramsForQuery[11])[2]} 
            or categoryid = ${(paramsForQuery[11])[3]} or categoryid = ${(paramsForQuery[11])[4]})`)
        .andWhereRaw(`(sex = '${(paramsForQuery[12])[0]}' or sex = '${(paramsForQuery[12])[1]}' or sex = '${(paramsForQuery[12])[2]}')`)
        .andWhereRaw(`(happinessm between ${(paramsForQuery[2])[0]} and ${(paramsForQuery[2])[1]})`)
        .andWhereRaw(`(happinesssd between ${(paramsForQuery[2])[2]} and ${(paramsForQuery[2])[3]})`)
        .andWhereRaw(`(fearm between ${(paramsForQuery[3])[0]} and ${(paramsForQuery[3])[1]})`)
        .andWhereRaw(`(fearsd between ${(paramsForQuery[3])[2]} and ${(paramsForQuery[3])[3]})`)
        .andWhereRaw(`(sadnessm between ${(paramsForQuery[4])[0]} and ${(paramsForQuery[4])[1]})`)
        .andWhereRaw(`(sadnesssd between ${(paramsForQuery[4])[2]} and ${(paramsForQuery[4])[3]})`)
        .andWhereRaw(`(surprisem between ${(paramsForQuery[5])[0]} and ${(paramsForQuery[5])[1]})`)
        .andWhereRaw(`(surprisesd between ${(paramsForQuery[5])[2]} and ${(paramsForQuery[5])[3]})`)
        .andWhereRaw(`(disgustm between ${(paramsForQuery[6])[0]} and ${(paramsForQuery[6])[1]})`)
        .andWhereRaw(`(disgustsd between ${(paramsForQuery[6])[2]} and ${(paramsForQuery[6])[3]})`)
        .andWhereRaw(`(angerm between ${(paramsForQuery[7])[0]} and ${(paramsForQuery[7])[1]})`)
        .andWhereRaw(`(angersd between ${(paramsForQuery[7])[2]} and ${(paramsForQuery[7])[3]})`)
        .andWhereRaw(`(arousalm between ${(paramsForQuery[8])[0]} and ${(paramsForQuery[8])[1]})`)
        .andWhereRaw(`(arousalsd between ${(paramsForQuery[8])[2]} and ${(paramsForQuery[8])[3]})`)
        .andWhereRaw(`(valencem between ${(paramsForQuery[9])[0]} and ${(paramsForQuery[9])[1]})`)
        .andWhereRaw(`(valencesd between ${(paramsForQuery[9])[2]} and ${(paramsForQuery[9])[3]})`)
        .andWhereRaw(`(avapm between ${(paramsForQuery[10])[0]} and ${(paramsForQuery[10])[1]})`)
        .andWhereRaw(`(avapsd between ${(paramsForQuery[10])[2]} and ${(paramsForQuery[10])[3]})`)
        .then(rows => res.json(rows))
        .catch(err => res.status(400).json(err))
    }
    else if (paramsForQuery[0] !== "noName" && paramsForQuery[1] === "noDescription") {
      
        database.select('id','location').from('image')
        .join('emotion', 'id', 'emotion.imageid').join('emotion_with_be','id', 'emotion_with_be.imageid')
        .whereRaw(`(categoryid = ${(paramsForQuery[11])[0]} or categoryid = ${(paramsForQuery[11])[1]} or categoryid = ${(paramsForQuery[11])[2]} 
            or categoryid = ${(paramsForQuery[11])[3]} or categoryid = ${(paramsForQuery[11])[4]})`)
        .andWhereRaw(`(sex = '${(paramsForQuery[12])[0]}' or sex = '${(paramsForQuery[12])[1]}' or sex = '${(paramsForQuery[12])[2]}')`)
        .andWhereRaw(`(happinessm between ${(paramsForQuery[2])[0]} and ${(paramsForQuery[2])[1]})`)
        .andWhereRaw(`(happinesssd between ${(paramsForQuery[2])[2]} and ${(paramsForQuery[2])[3]})`)
        .andWhereRaw(`(fearm between ${(paramsForQuery[3])[0]} and ${(paramsForQuery[3])[1]})`)
        .andWhereRaw(`(fearsd between ${(paramsForQuery[3])[2]} and ${(paramsForQuery[3])[3]})`)
        .andWhereRaw(`(sadnessm between ${(paramsForQuery[4])[0]} and ${(paramsForQuery[4])[1]})`)
        .andWhereRaw(`(sadnesssd between ${(paramsForQuery[4])[2]} and ${(paramsForQuery[4])[3]})`)
        .andWhereRaw(`(surprisem between ${(paramsForQuery[5])[0]} and ${(paramsForQuery[5])[1]})`)
        .andWhereRaw(`(surprisesd between ${(paramsForQuery[5])[2]} and ${(paramsForQuery[5])[3]})`)
        .andWhereRaw(`(disgustm between ${(paramsForQuery[6])[0]} and ${(paramsForQuery[6])[1]})`)
        .andWhereRaw(`(disgustsd between ${(paramsForQuery[6])[2]} and ${(paramsForQuery[6])[3]})`)
        .andWhereRaw(`(angerm between ${(paramsForQuery[7])[0]} and ${(paramsForQuery[7])[1]})`)
        .andWhereRaw(`(angersd between ${(paramsForQuery[7])[2]} and ${(paramsForQuery[7])[3]})`)
        .andWhereRaw(`(arousalm between ${(paramsForQuery[8])[0]} and ${(paramsForQuery[8])[1]})`)
        .andWhereRaw(`(arousalsd between ${(paramsForQuery[8])[2]} and ${(paramsForQuery[8])[3]})`)
        .andWhereRaw(`(valencem between ${(paramsForQuery[9])[0]} and ${(paramsForQuery[9])[1]})`)
        .andWhereRaw(`(valencesd between ${(paramsForQuery[9])[2]} and ${(paramsForQuery[9])[3]})`)
        .andWhereRaw(`(avapm between ${(paramsForQuery[10])[0]} and ${(paramsForQuery[10])[1]})`)
        .andWhereRaw(`(avapsd between ${(paramsForQuery[10])[2]} and ${(paramsForQuery[10])[3]})`)
        .andWhereRaw(`(name = ${paramsForQuery[0]})`)
        .then(rows => res.json(rows))
        .catch(err => res.status(400).json(err))
    }
    else if (paramsForQuery[0] === "noName" && paramsForQuery[1] !== "noDescription") {
        database.select('id','location').from('image')
        .join('emotion', 'id', 'emotion.imageid').join('emotion_with_be','id', 'emotion_with_be.imageid')
        .whereRaw(`(categoryid = ${(paramsForQuery[11])[0]} or categoryid = ${(paramsForQuery[11])[1]} or categoryid = ${(paramsForQuery[11])[2]} 
            or categoryid = ${(paramsForQuery[11])[3]} or categoryid = ${(paramsForQuery[11])[4]})`)
        .andWhereRaw(`(sex = '${(paramsForQuery[12])[0]}' or sex = '${(paramsForQuery[12])[1]}' or sex = '${(paramsForQuery[12])[2]}')`)
        .andWhereRaw(`(happinessm between ${(paramsForQuery[2])[0]} and ${(paramsForQuery[2])[1]})`)
        .andWhereRaw(`(happinesssd between ${(paramsForQuery[2])[2]} and ${(paramsForQuery[2])[3]})`)
        .andWhereRaw(`(fearm between ${(paramsForQuery[3])[0]} and ${(paramsForQuery[3])[1]})`)
        .andWhereRaw(`(fearsd between ${(paramsForQuery[3])[2]} and ${(paramsForQuery[3])[3]})`)
        .andWhereRaw(`(sadnessm between ${(paramsForQuery[4])[0]} and ${(paramsForQuery[4])[1]})`)
        .andWhereRaw(`(sadnesssd between ${(paramsForQuery[4])[2]} and ${(paramsForQuery[4])[3]})`)
        .andWhereRaw(`(surprisem between ${(paramsForQuery[5])[0]} and ${(paramsForQuery[5])[1]})`)
        .andWhereRaw(`(surprisesd between ${(paramsForQuery[5])[2]} and ${(paramsForQuery[5])[3]})`)
        .andWhereRaw(`(disgustm between ${(paramsForQuery[6])[0]} and ${(paramsForQuery[6])[1]})`)
        .andWhereRaw(`(disgustsd between ${(paramsForQuery[6])[2]} and ${(paramsForQuery[6])[3]})`)
        .andWhereRaw(`(angerm between ${(paramsForQuery[7])[0]} and ${(paramsForQuery[7])[1]})`)
        .andWhereRaw(`(angersd between ${(paramsForQuery[7])[2]} and ${(paramsForQuery[7])[3]})`)
        .andWhereRaw(`(arousalm between ${(paramsForQuery[8])[0]} and ${(paramsForQuery[8])[1]})`)
        .andWhereRaw(`(arousalsd between ${(paramsForQuery[8])[2]} and ${(paramsForQuery[8])[3]})`)
        .andWhereRaw(`(valencem between ${(paramsForQuery[9])[0]} and ${(paramsForQuery[9])[1]})`)
        .andWhereRaw(`(valencesd between ${(paramsForQuery[9])[2]} and ${(paramsForQuery[9])[3]})`)
        .andWhereRaw(`(avapm between ${(paramsForQuery[10])[0]} and ${(paramsForQuery[10])[1]})`)
        .andWhereRaw(`(avapsd between ${(paramsForQuery[10])[2]} and ${(paramsForQuery[10])[3]})`)
        .andWhereRaw(`(description = ${paramsForQuery[1]})`)
        .then(rows => res.json(rows))
        .catch(err => res.status(400).json(err))
    }
    else {
        console.log("tu")
        database.select('id','location').from('image')
        .join('emotion', 'id', 'emotion.imageid').join('emotion_with_be','id', 'emotion_with_be.imageid')
        .whereRaw(`(categoryid = ${(paramsForQuery[11])[0]} or categoryid = ${(paramsForQuery[11])[1]} or categoryid = ${(paramsForQuery[11])[2]} 
            or categoryid = ${(paramsForQuery[11])[3]} or categoryid = ${(paramsForQuery[11])[4]})`)
        .andWhereRaw(`(sex = '${(paramsForQuery[12])[0]}' or sex = '${(paramsForQuery[12])[1]}' or sex = '${(paramsForQuery[12])[2]}')`)
        .andWhereRaw(`(happinessm between ${(paramsForQuery[2])[0]} and ${(paramsForQuery[2])[1]})`)
        .andWhereRaw(`(happinesssd between ${(paramsForQuery[2])[2]} and ${(paramsForQuery[2])[3]})`)
        .andWhereRaw(`(fearm between ${(paramsForQuery[3])[0]} and ${(paramsForQuery[3])[1]})`)
        .andWhereRaw(`(fearsd between ${(paramsForQuery[3])[2]} and ${(paramsForQuery[3])[3]})`)
        .andWhereRaw(`(sadnessm between ${(paramsForQuery[4])[0]} and ${(paramsForQuery[4])[1]})`)
        .andWhereRaw(`(sadnesssd between ${(paramsForQuery[4])[2]} and ${(paramsForQuery[4])[3]})`)
        .andWhereRaw(`(surprisem between ${(paramsForQuery[5])[0]} and ${(paramsForQuery[5])[1]})`)
        .andWhereRaw(`(surprisesd between ${(paramsForQuery[5])[2]} and ${(paramsForQuery[5])[3]})`)
        .andWhereRaw(`(disgustm between ${(paramsForQuery[6])[0]} and ${(paramsForQuery[6])[1]})`)
        .andWhereRaw(`(disgustsd between ${(paramsForQuery[6])[2]} and ${(paramsForQuery[6])[3]})`)
        .andWhereRaw(`(angerm between ${(paramsForQuery[7])[0]} and ${(paramsForQuery[7])[1]})`)
        .andWhereRaw(`(angersd between ${(paramsForQuery[7])[2]} and ${(paramsForQuery[7])[3]})`)
        .andWhereRaw(`(arousalm between ${(paramsForQuery[8])[0]} and ${(paramsForQuery[8])[1]})`)
        .andWhereRaw(`(arousalsd between ${(paramsForQuery[8])[2]} and ${(paramsForQuery[8])[3]})`)
        .andWhereRaw(`(valencem between ${(paramsForQuery[9])[0]} and ${(paramsForQuery[9])[1]})`)
        .andWhereRaw(`(valencesd between ${(paramsForQuery[9])[2]} and ${(paramsForQuery[9])[3]})`)
        .andWhereRaw(`(avapm between ${(paramsForQuery[10])[0]} and ${(paramsForQuery[10])[1]})`)
        .andWhereRaw(`(avapsd between ${(paramsForQuery[10])[2]} and ${(paramsForQuery[10])[3]})`)
        .andWhereRaw(`(name = '${paramsForQuery[0]}')`)
        .andWhereRaw(`(description = '${paramsForQuery[1]}')`)
        .then(rows => res.json(rows))
        .catch(err => res.status(400).json(err))
    }
   
   
})

app.post('/picture', (req, res) => {
    console.log("usla u pic")
    const {id} = req.body;
    database.select('image.name', 'image.description', 'imagemetadata.*', 'emotion_with_be.*', 'emotion.*')
    .from('image')
    .join('emotion', 'id', 'emotion.imageid').join('emotion_with_be','id', 'emotion_with_be.imageid')
    .join('imagemetadata', 'id', 'imagemetadata.imageid')
    .where('id', '=', id)
    .then(rows => res.json(rows))
    .catch(err => res.status(400).json(err))

})



app.listen(5000, () => {
    console.log("Server has started on port 5000")
})