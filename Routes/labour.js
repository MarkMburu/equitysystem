const router = require("express").Router();
const Labour = require("../models/units/labour");

router.route("/").get((req,res)=>{
  Labour.find()
  .then(labour => {
      res.json(labour)
  })
});

router.route("/labour").post((req,res)=>{
  const {category,number,amount} = req.body;
  const newLabour = new Labour({
      category, number, amount
  })
  newLabour.save()
  .then(()=> res.json('Labourer added!'))
  .catch(err => res.status(400).json('Error: '+err))
});


module.exports = router;