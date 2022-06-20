const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


router.get('/',async function(req, res) {
  try {
    // const { apiRoute } = req.params
    const apiResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts' 
    )
    const apiResponseJson = await apiResponse.json()
    // await db.collection('collection').insertOne(apiResponseJson)
    console.log(apiResponseJson)
    res.json({message:'Done – check console log',apiResponseJson})
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
});

module.exports = router;