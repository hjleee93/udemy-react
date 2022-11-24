// 컴포넌트를 포함하고 있는 파일은 대문자로 시작해야함
import React from 'react'

function App() {
  const data = new Date()
  const time = data.toLocaleTimeString()
  let msg = 'bye'
  if (Math.random() > 0.5) {
    msg = 'hello!'
  }
  <h4>no show!</h4> // 리턴을 하지 않는 다면 보이지 않는다.

  const name = "hyeonjeong"
  const age = 30
  const inputType = 'number'
  const minValue = 5
  return (
    <div>
      <div>{msg}</div>
      <div>time: {time}</div>
      <div>time: {new Date().toLocaleTimeString()}</div>
      hi my name is {name} my age is {age}
      <input type={inputType} min={minValue} max={10} style={{ border: '3px solid blue' }} />
      <textarea autoFocus={true} />
      <input maxLength={5} style={{ border: '2px solid orange', marginTop: '10px' }} />
    </div>
    //변수를 사용하는 경우 {} 사용 , boolan, undefined, null은 표시되지않음
    //배열은 콤마가 제외되고 보임
    //객체는 에러를 발생시킴 => 객체가 프로퍼티로 들어가는 경우는 가능

    //html -> jsx
    //1. props name은 항상 camelcase로 작성
    //2. 숫자는 {} 안에 작성
    //3. boolena -> true :아무것도 작성하지 않으면 true, false : {}안에 작성
    //4. class -> className으로 작성
    //5. 인라인 스타일을 작성하는 경우에는 객체로 작성하고 camelCase로 작성

  )
} export default App;
