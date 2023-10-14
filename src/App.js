import React, {useState, useEffect} from "react";
import Bookcase from "./Bookcase"
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Info from "./Info"
import BookForm from "./BookForm"


function App() {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
        .then((r) => r.json())
        .then((r) => setBooks(r))
  }, [])

  function handleUpdate(newData){
    setBooks([...books, newData])
  }

  function handleLike(newData){
    const bookLiked = books.map((book) => 
      (book.id === newData.id ? newData : book)
    );
    setBooks(bookLiked)
  }

  return (
    <div>
      <NavBar />
      
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        
        <Route path="/new">
          <BookForm books={books} handleUpdate={handleUpdate}/>
        </Route>
        
        <Route exact path="/">
          <Bookcase books={books} handleLike={handleLike}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

