import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.send('All Users');
});

router.get('/new', (req, res) => {
  res.send('New User');
});

router.get('/:id', (req, res) => {
  console.log(req.user);
  res.send(`User ID: ${req.params.id}`);

});
const userRoute = [{'name': 'John'}, {'name': 'Jane'}];
router.param('id', (req, res, next, id) => {
  req.user = userRoute[id];
  next(); // call the get /:id function
});

export default router;
