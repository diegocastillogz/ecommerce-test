import React from "react";
import Layout from "containers/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemsListView from "views/itemsListView";
import SearchResultsItemsView from "views/searchResultsItemsView";
import ItemDetailView from "views/itemDetailView";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <ItemsListView />
        </Route>
        <Route exact path="/items">
          <SearchResultsItemsView />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetailView />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
