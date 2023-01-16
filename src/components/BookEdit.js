import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  }

  //NOT SO GOOD 부모컴포넌트에서 자식컴포넌트와 연관된 이벤트를 정의하고(handleSubmit)
  //자식 컴포넌트에서 해당 이벤트를 호출함(onSubmit) => 이미 비슷한 이름을 가진 OnEdit 함수가 있음

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">save</button>
    </form>
  )
}
export default BookEdit;
