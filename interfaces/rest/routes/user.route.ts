import express, {NextFunction, Request, Response} from "express";
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('All Users');
  throw new Error('Error from user route');
});

router.get('/new', (req, res) => {
  res.send('New User');
});

router.get('/:id', (req: Request, res: Response) => {
  // @ts-ignore
  console.log(req.user);
  res.send(`User ID: ${req.params.id}`);

});
const userRoute = [{'name': 'John'}, {'name': 'Jane'}];
router.param('id', (req: Request, res: Response, next: NextFunction, id) => {
  // @ts-ignore
  req.user = userRoute[id];
  next(); // call the get /:id function
});

export default router;
