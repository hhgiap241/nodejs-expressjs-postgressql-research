import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from './schema/schema.js';

const app = express();

app.use(cors());
// connect to database
mongoose.connect('mongodb+srv://admin:admin@cluster0.jnnq3yg.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(5000, () => console.log('Server running on port 5000'));