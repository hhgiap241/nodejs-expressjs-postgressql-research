import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import './App.css'
import BookList from "./components/BookList";

// set up apollo client
const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <BookList/>
        </div>
      </ApolloProvider>
  )
}

export default App
