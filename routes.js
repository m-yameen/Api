var express = require('express');
var router = express.Router();
var student = require('./Models/Students')



//api to fetch data
router.get('/students',async(req,res)=>{
    const stud = await student.find()
    res.send(stud)
})



//api to add data
router.post("/students",async(req,res)=>{
    const stud = new student({
        name:req.body.name,
        er:req.body.er,
        branch:req.body.branch
    })
    await stud.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



// api for updating
router.patch('/students/:id',async (req,res)=>{
    const stud = await student.findOne({_id:req.params.id})
    stud.name = req.body.name
    stud.er = req.body.er
    stud.branch=req.body.branch
    await stud.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



//delete api
router.delete("/students/:id",async(req,res)=>{
    student.findByIdAndDelete(req.params.id).then((student) => {
        if (!student) {
            return res.status(404).send();
        }
        res.send(student);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router 