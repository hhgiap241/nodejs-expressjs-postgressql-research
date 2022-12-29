import {
  GraphQLID, GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';
import _ from 'lodash';

import {books, authors} from "./fakeData.js";
import Book from "../models/book.js";
import Author from "../models/author.js";

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({ // we need to wrap the fields in a function to avoid circular reference
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: new GraphQLNonNull(GraphQLString)},
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return Author.findById(parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: () => ({ // we need to wrap the fields in a function to avoid circular reference
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: new GraphQLNonNull(GraphQLInt)},
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return Book.find({authorId: parent.id});
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: new GraphQLNonNull(BookType),
      description: 'A single book',
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: (parent, args) => {
        // code to get data from db / other source
        return Book.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of all books',
      resolve: () => {
        return Book.find({});
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all authors',
      resolve: () => {
        return Author.find({});
      }
    },
    author: {
      type: new GraphQLNonNull(AuthorType),
      description: 'A single author',
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: (parent, args) => {
        return Author.findById(args.id);
      }
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: (parent, args) => {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve: (parent, args) => {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

export default schema;