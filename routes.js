const User =  require('./user')

function routes(app){
    app.get('/users',async(req,res)=>{
        try{
            const users = await User.find();
            res.json(users);
        }catch(error){
            res.status(500).json({error:'Error retriving users'})
        }
    });

    app.post('/users',async(req,res)=>{
        const{name,department,email}=req.body;
        try{
            const user = new User({name,department,email});
            await user.save();
            res.json(user);
        }catch(error){
            res.status(500).json({error:'Error creating users'})
        }
    });

    app.put('/users/:id',async(req,res)=>{
        const {id}=req.params;
        const{name,department,email}=req.body;
        try{
            const user = await User.findByIdAndUpdate(id,{name,department,email},{new:true});
            res.json(user);
        }catch(error){
            res.status(500).json({error:'Error updating users'})
        }
    });

    
    app.delete('/users/:id',async(req,res)=>{
        const {id}=req.params;
        try{
            const user = await User.findByIdAndDelete(id);
            res.json(user);
        }catch(error){
            res.status(500).json({error:'Error deletiing users'})
        }
    });
}

module.exports = routes;