import { ApolloServer } from "apollo-server";
import typeDefs from "./src/schema.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`
  🚀  Server ready at ${url}
  📭  Query at https://studio.apollographql.com/dev
  `);
});
