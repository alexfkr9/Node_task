const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
const fs = require('fs');
const sharp = require('sharp');   // crop img


app.use(express.static(__dirname + '/data')); // folder for edited user's photo


// Model DB --------------------------------------------
const userScheme = new Schema({
                    name: String,                    
                    surname: String,
                    email: String,
                    photo: String
                    },
                    {versionKey: false});

const User = mongoose.model("user", userScheme); 


    // Connect to MONGO DB  and create server------------------------------
mongoose.connect(
    "mongodb+srv://___your_momgodb_profile___", 
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, 
    function(err){
    if(err) return console.log(err);
    app.listen(5000, function(){
        console.log("The server is running ...");
    });
});


    // Upload form data from client -----------------------------------------
const multer  = require('multer')
const upload = multer({ dest: './data/uploads/' })

app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   
   console.log(req.file, req.body);

    // edit user's photo
   sharp(req.file.path)                    
                    .resize(200)
                    .toBuffer()
                    .then( data => {
                        editFileName = __dirname + '/data/' + req.body.surname + '.png';
                        fs.writeFileSync(editFileName, data);
                    })
                    .then( () => {
                        delFile = __dirname + '/data/uploads/' + req.file.filename;
                        fs.unlink(delFile, function (err) {
                            if (err) throw err;
                                console.log('File deleted!');
                        });
                    })
                    .catch( err => {
                        console.log(err);
                    });

    
      // add user's data to Mongo db  
    const userName = req.body.name;
    const userSurname = req.body.surname;
    const userEmail = req.body.email;
    const userPhoto = req.body.surname + '.png';    

    const user = new User({ name: userName,
                            surname: userSurname,
                            email: userEmail,
                            photo: userPhoto });
        
    user.save(function(err){
        if(err) return console.log(err);
        console.log(user)
        res.send('<h3>user id - ' + user._id + '</h3>'); // send user's id to client
    });

                
});



    // All users -------------------------------------

app.get("/api/user", function(req, res){
        
    User.find({}, function(err, users){
 
        if(err) return console.log(err);
        res.send(users)
    });
});

    // Get user by id-------------------------------------
app.get("/api/user/:id", function(req, res){
         
    const id = req.params.id;
    User.findOne({_id: id}, function(err, user){
          
        if(err) return console.log(err);

        res.send(user);
    });
});