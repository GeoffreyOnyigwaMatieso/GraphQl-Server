const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwell' },
];

const movies = [
  { id: 1, title: 'The Matrix', director: 'The Wachowskis' },
  { id: 2, title: 'Inception', director: 'Christopher Nolan' },
];

// Type definitions (schema)
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Movie {
    id: ID!
    title: String!
    director: String!
  }

  type Query {
    users: [User!]!
    books: [Book!]!
    movies: [Movie!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    books: () => books,
    movies: () => movies,
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log('Server ready at http://localhost:4000' + server.graphqlPath)
  );
});
