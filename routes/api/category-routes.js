const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
const result=await Category.findAll({
  include:[{model:Product}]}
);
try{
  res.json(result) 

}catch(err){
res.status(404).json({status:'not found Namees'})
}

});

router.get('/:id', async(req, res) => {
  const result=await Category.findByPk(req.params.id,{
    include:[{model:Product}]
  });
  try{
    res.json(result)
  }catch(err){
    res.status(404).send('not Found')
  }
 
});

router.post('/',async (req, res) => {
  let category_name=req.body;
  const create=await Category.create(category_name)
  if(!category_name){
    res.status(404).send('please enter category_name VALUE!!')
  }
  res.json(create)
});

router.put('/:id', async(req, res) => {
  const category_nameU=req.body;
  const updateUser=await Category.update(req.body,{
    where:{
      id:req.params.id}
    });
    res.send('UPDATED')


});

router.delete('/:id', async(req, res) => {
  const Userdelete=await Category.destroy({
    where:{
      id:req.params.id
    }
  })
  res.send('DELETED')

});

module.exports = router;
