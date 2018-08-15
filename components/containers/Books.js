import React from 'react';
import BookCard from  '../presentationals/BookCard';
import {getState} from 'redux';


//Provider/Container React Component
class Books extends React.Component {
  render() {
      const stateProps = this.props.store.getState();
      console.log(stateProps);
  const bookItems = stateProps.books.map((book) => <BookCard key={book} stateProps = {stateProps} />);
      return (
      <div className="books-container">
      {bookItems}
        <BookCard stateProps ={stateProps}/>
        <BookCard stateProps ={stateProps}/>
      </div>

    )
  }
}
export default Books;