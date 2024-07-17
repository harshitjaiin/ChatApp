const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const response = await axios.put("https://api.chatengine.io/users/" , 
        {
            username:username ,
            secret:username,
            first_name:username
        },{
            headers:{
                "private-key":"6dc633d8-b9ea-4397-baaf-3338214358b1"
            }
        }
    )
    return res.status(response.status).json(response.data);
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);