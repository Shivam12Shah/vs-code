const { log } = require('console');
var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir("files",{withFileTypes:true},(err, files)=>{
    // console.log(files);
    res.render('index',{files});
  })
});
router.post("/editform/:oldname", function(req, res, next) {
  console.log(req.params.oldname);
  console.log(req.body.newname);
  fs.rename(`files/${req.params.oldname}`, `files/${req.body.newname}`, function(err){
    if ( err ) throw err;
    res.redirect("/")
  })
  
});

router.get("/filename", function(req, res){
  fs.writeFile(`files/${req.query.filename}`, "", function(err){
    if (err) throw err;
    console.log(req.query.filename);
    res.redirect("/")
  })
})
router.get("/foldername", function(req, res){
  fs.mkdir(`files/${req.query.foldername}`, function(err, path){
    if(err) throw err;
    console.log("babau");
    res.redirect("/")
  })
})
router.get("/file/:filename", function(req, res, next) {
  fs.readdir("files",{withFileTypes:true},(err, files)=>{
    res.render('file',{files, name:req.params.filename});
  })
});

router.get("/deletefile/:filename", function(req, res, next) {
  fs.unlink(`files/${req.params.filename}`, function(err){
    if(err) throw err;
    res.redirect("/")
  })
});
router.get("/deletefolder/:foldername", function(req, res, next) {
  fs.rmdir(`files/${req.params.foldername}`, function(err){
    if(err) throw err;
    res.redirect("/")
  })
});




module.exports = router;
