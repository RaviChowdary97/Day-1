import "./App.css";
import { ThirdCode } from "./Components/ThirdCode";
import { students } from "./Utils/students";

function App() {
  return (
    <div className="App">
      {/* <h1>App Component Loading on the Page</h1> */}
      {/* {FirstCode()} */}
      {/* HTML */}
      {/* <FirstCode></FirstCode> */}

      {/* Prefered One */}
      {/* <FirstCode /> */}
      {/* Pass the argumnets || Properties >Props */}
      {/* <SecondCode name="Salman" nickname="Tiger" />
      <SecondCode name="Akdhilesh" nickname="Akhi" /> */}
      {/* map method */}

      {
        students.map((element) => (
          <ThirdCode nickName={element.nickName} pic={element.pic} />
        ))

        // students.map((element) => {
        //   return <ThirdCode nickName={element.nickName} pic={element.pic} />;
        // })

        // spread operator
        // students.map((element) => (
        //   <ThirdCode {...element} />
        // ))
      }
    </div>
  );
}

export default App;

//named export  > {componentname}
// export default
