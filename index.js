const express = require('express');
const redis = require('redis');
const fetch = require('node-fetch');

const PORT = 1000;
const REDIS_PORT = 6379;

const app = express();

const client = redis.createClient(REDIS_PORT);

//client.setex("node", 3600, "JS"); test

const checkCache =  (req, res, next) =>{
    const {username} = req.params;
    client.get(username, (err, data) => {
        if(err) throw err;
        if(data!=null){
            res.send(`<h2>${username} has ${data} public repos from redis</h2>`);        
        }
        else{
            next();
        }
    })
}

const getPost = async (req, res) => {
    const { username } = req.params;
    const result = await fetch(`https://api.github.com/users/${username}`);
    const data = await result.json();
    client.setex(username,3600,data.public_repos);
    res.send(`<h2>${username} has ${data.public_repos} public repos</h2>`);
}


app.get('/user/:username', checkCache, getPost)

app.listen(PORT, () => {
    console.log(`app is listening on PORT: ${PORT}`);
});