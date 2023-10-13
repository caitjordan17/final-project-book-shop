import React, {useState} from "react";
import Bookcase from "./Bookcase"
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Info from "./Info"
import BookForm from "./BookForm"


function App() {
  const [page, setPage] = useState("/")
  
  return (
    <div>
      <NavBar onChangePage={setPage}/>
      
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        
        <Route path="/new">
          <BookForm />
        </Route>
        
        <Route exact path="/">
          <Bookcase/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

