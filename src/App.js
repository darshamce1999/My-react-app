import logo from './logo.svg';
import './App.css';
import { HeaderComp } from './Components/HeaderComp';
import {CountriesInfo} from "./Components/CountriesInfo"
import {CounterComp, CounterRefComp} from "./Components/CounterComp"
import {UseEffectComp} from "./Components/UseEffectComp"
import { ExampleComp } from './Components/ExampleComp';
import {CloserEx} from "./Components/CloserEx"
import { ToDoComp } from './Components/ToDoComp';
import PromisePolyFill from './Components/PromisePolyFill';
import ForwaredRefClassComp from './Components/ForwaredRefClassComp';
import TrafficLightComp from './Components/TrafficLightComp';
import CheckBox from './Components/CheckBox';
import Ex1Comp from './Components/Ex1Comp';
import LinkedListTestComp, { CircularLinkedListComp, DoublyLinkedListComp, LinkedListTestWithTailComp } from './Components/LinkedListTestComp';
import { PriorityQueue } from './Components/Queue';
import Accordion from './Components/Accordion';
import BinarySearchTree from './Components/BinarySearchTree';
import GraphComp, { AdjMatrixGraphComp, MyGraph } from './Components/GraphComp';
import IncrementCount from './Components/IncrementCount';

function App() {
  // const data = ['India', 'USA', 'UK', "Australia", 'Canada', 'Germany', 'Russia', 'Finland'];

  // const s = {}

  //   const t ={name:'t'};
  //   const u ={name:'u'};

  //   s[t]=111;
  //   s[u]=222;

  //   console.log(s[u])

  // amount.add(100).multiply(2).total().subtract(50).divide(2).add(100).total()

  //Natove progress bar

  //storage

  //function constructor



    // const arr = [{name:"test",id:1},{name:"test-1",id:2},{name:"test-2",id:3}]
    // const dataOutput = arr.reduce((event,value) => ( {...event,[value.name]:value}),{})
    // console.log(dataOutput)

    //  input = [1,2,3,4]
// output = [24,12,8,6]


  return (
    <div className="App">
      {/* <CounterComp />
      <CounterRefComp />
      <UseEffectComp /> 
      <CountriesInfo />
      <ExampleComp data={data} column={"Country Name"} />
      <CloserEx /> 
      <ToDoComp />
      <PromisePolyFill />
      <ForwaredRefClassComp />
      <TrafficLightComp />*/}
      {/* <CheckBox />
      <Ex1Comp /> */}
      {/* <CountriesInfo /> */}
      {/* <LinkedListTestComp /> */}
      {/* <PriorityQueue /> */}


      {/* <Ex1Comp />  */}
      {/* <DoublyLinkedListComp /> */}
      {/* <CircularLinkedListComp /> */}

      {/* <Accordion head={"Accordion1"} content={"ahhhhjuhhugugug ugygygygy ggug"} child={true}/> */}
      {/* <BinarySearchTree /> */}
      {/* <GraphComp /> */}
      {/* <MyGraph /> */}
      {/* <AdjMatrixGraphComp /> */}
      {/* <TrafficLightComp /> */}


      <Ex1Comp />
    </div>
  );
}

export default App;
