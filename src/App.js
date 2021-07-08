import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import VaccineList from "./components/VaccineList";
import PatientList from "./components/PatientList";

function App() {
  const httpLink = new HttpLink({
    uri: "https://ger-test.hasura.app/v1/graphql",
    headers: {
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET
    }
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <Switch>
        <Route exact path="/" component={() => 'Home'} />  
        <Route exact path="/vaccines" component={VaccineList} />
        <Route exact path="/patients" component={PatientList} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
