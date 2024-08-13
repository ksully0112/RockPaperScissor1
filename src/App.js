import {useState} from"react"
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨턴ㄴ 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors:{
    name:"Scissors",
    img:"https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/6822487/6822487_o02_081820/6822487",
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T-QEB7PfNnFmRcCOpwn1FntAuQ0Yt9FXqw&s",
  }
}
function App() {
  let [userSelect, setUserSelect] = useState(null)
  const play = (userChoice) => {
    setUserSelect (choice[userChoice])
  }
  return (
    <div>
      <div className="main">
      <Box title="You" item={userSelect}/>
      {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
