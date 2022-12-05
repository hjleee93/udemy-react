import './App.css'
import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  // const [count, setCount ] = useState(0) // array destructing state + setter, state 를 바로 변경하는 경우는 절대없음
  //setter 함수가 실행되면 리액트는 컴포넌트를 리렌더링함

  const [animals, setAnimals] = useState([])

  const handleClick = () =>{
    // setCount(count + 1)

    setAnimals([...animals, getRandomAnimal()])

    // animals.push(getRandomAnimal()) // modifies state! 
  }

  const renderedAnimals = animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index}/>

  })
return <div className='app'>
  <button onClick={handleClick}>Add animal</button> 
  <div className='animal-list'>
    {renderedAnimals}
  </div>
  {/* <p>count : {count}</p> */}
  {/* onClick={() => console.log('button was clicked')} 와 동일함
  간단한 함수를 작성하는 경우 따로 분리하는 것보다 편리함*/}
</div>
}
export default App

/**
 * using events
 * 1. 어떤 이벤트를 watch 할 지 결정
 * 2. 함수 생성, evnet handler callback function
 * 3. name pattern : handle+ evnet name , community convention 
 * 4. pass prop to plain element 
 * 5. pass function using a valid event name! 헷갈리는 경우 react docs 참고
//  * 6. pass reference to function ???
    const doGreeting = () => {
      return 'Hi there'
    }

    console.log(doGreeting) -> 함수를 호출 하지않음
    console.log(doGreeting()) -> 함수를 바로 호출함 


    State
    유저의 사용에따라 데이터가 바뀜, 바뀐데이터는 리액트가 자동으로 업데이트하여 화면에 보여줌
    one-and-only way
    화면에 보여주고 싶은경우 useState를 사용하면됨

 */
