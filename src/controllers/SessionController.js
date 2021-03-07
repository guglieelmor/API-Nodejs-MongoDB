const md5 = require('md5');
const User = require('../models/User');

module.exports = {    
    async store(req, res){
        const { email } = req.body; 
        let { password } = req.body;
        password = md5(password);

        let user = await User.findOne({ email, password });

        if(!user){
            user = await User.create({ email, password });
        }
        
        return res.json(user);
    },
    async consult(req, res){
        const { email } = req.body; 
        let { password } = req.body;
        password = md5(password);

        let user = await User.findOne({ email, password });

        if(!user){
           user = {'status': 404, 'message':'NOT_FOUND'};
        } 
        
        return res.json(user);
    }    
}