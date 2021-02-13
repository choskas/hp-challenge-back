const {Router, response} = require('express');
const axios = require('axios');
const router = Router();

router.post('/login',async(req, res, next) => {
    try{
    const response = await axios.post('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',
    {user: req.body.email, password: req.body.password}
    )
    res.status(200).json(response.data)
    } catch(error) {
        res.status(401).json(error.response.data)
    }
})

module.exports = router;