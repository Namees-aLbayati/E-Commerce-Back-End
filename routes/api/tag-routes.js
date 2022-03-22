const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  const result=await Tag.findAll({include:[{model:Product}]});
  res.json(result)
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id',async (req, res) => {
  const result=await Tag.findByPk(req.params.id,{include:[{model:Product}]});
res.json(result)
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async(req, res) => {
  const result=await Tag.create({tag_name:req.body.tag_name});
  if(req.body.tag_name){
    res.json(result)
  }else{
      res.send('enter tag_name ')

  }


  // create a new tag
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  const result=await Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  res.send('UPDATED')

});

router.delete('/:id', async(req, res) => {
  const result=await Tag.destroy({where:{id:req.params.id}})
  res.send('TAG DELETED')
  // delete on tag by its `id` value
});

module.exports = router;
