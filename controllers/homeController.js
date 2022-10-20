//Controller handles requests and responses that will be sent to the model 

const index = (req,res) => {
    try{
        res.send("Welcome to spotify api")
    } catch(err) {
        res.status(500).send({error: "You have entered the wrong route"})
    }
    
}

module.exports = { index }

