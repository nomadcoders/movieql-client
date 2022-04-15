import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
