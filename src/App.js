import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {

    /**
     BAD!!!! -> 업데이트가 되지않음 -> push를 사용해서 진행하는 경우
    기존 배열을 업데이트하는 방식이기 때문에 메모리상의 같은 주소로 접근을 하게됨 즉, 리액트는 해당 배열을 같은 배열이라고 인식하기때문에 리렌더링하지않음 
    
    solve -> new array(다른 메모리 사용)를 만들어서 생성하는 것으로 해결할수 있음

    books.push({ id: 123, title: title })
    setBooks(books)
    -> 이처럼 state를 사용하는 기존 배열에 추가, 삭제, 수정을 하는 경우는 같은 메모리가 참조되기 때문에 리렌더링하지않음!
    -> 일반 객체나 배열은 무관함
    */

    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title }
    ]
    console.log(updatedBooks)

    setBooks(updatedBooks) //새로운 메모리 주소의 어레이를 참조하게되므로 리렌더링 발생


  }
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    })

    setBooks(updatedBooks)
  }
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>)

}

export default App
