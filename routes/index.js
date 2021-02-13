const {Router, response} = require('express');
const axios = require('axios');
var cors = require('cors')
const router = Router();

router.post('/login', cors(),async(req, res, next) => {
    try{
        res.header("Access-Control-Allow-Origin", "https://zen-jones-87ccd3.netlify.app/"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const response = await axios.post('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',
    {user: req.body.email, password: req.body.password}
    )
    res.status(200).json(response.data)
    } catch(error) {
        res.status(401).json(error.response.data)
    }
})

module.exports = router;