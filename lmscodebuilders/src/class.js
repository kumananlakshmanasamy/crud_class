// EcmaScript -- 2015 
// arrow functions 
// multi line strings
// default parameter 
// template literals
// destructuring -- array , object 
// spread operator 
// ternary operator
// import and export statements
// javascript promises
// rest operator 

// state  -- two way binding  --- content changes 
// props  --  sigle way binding  -- content visualise 
// rerendering  state 

// hooks 
// use state
// use effect
// use memo
// use ref
// use context 
// use callback 
// custom hooks

//  axios is a javascript library
// HTTP request server create

// map Filter reducer 

//  map -- create a new array 

  // //  map --> array of values
  // var myarray = [1,2,3,4,5]
  // var multiplay = myarray.map(function(e){
  //     return e*5
  // });
  // console.log(multiplay)

  // //  filter --> filter the even numbers , array of values
  // var evennumber = myarray.filter(function(e){
  //     return e%2==0
  // })
  // console.log(evennumber)

  // //  reducer  -- single value as output
  // var sum = myarray.reduce(function(e,f){
  //     return e+f
  // })
  // console.log(sum)
    

 //  rest operator 
//  function show(a,b,c,...args){
//   console.log(a,b,c,...args)
//  }
//  show (1,2,3,4,5,6,7,8)
  // ternary operator
  // if (7<9){
    
  // }else{
    
  // }
  // {7<9 ? console.log(" it prints from first ") : console.log("it prints from second")}

  //  arrow function 
  // let addtownumbers=(a,b)=>a+b;
  // console.log(addtownumbers(2,3))

  // multi line strings
  //  let kumanan = `Hello world,
  //                 greetings to all`
  // console.log(kumanan)

  // template literals
  // let firstname ='kumanan'
  // let name = `my name is ${firstname}, i am working in code builders`
  // console.log(name)
  
  // destructuring of array
  // let vegetables = ['carrot', 'tomato', 'onion']
  // let [a,b] = vegetables
  // console.log(a,b)

  // destructuring of object
  // let person ={names:'kumanan',age:25}
  // let {names,age} =person
  // console.log(`my name is ${names} and my age is ${age}`)

  // spread operator
  // let arr =[1,2,3,5,6,7,8]
  // console.log([...arr,9,10])

  //  default parameter 
  // const addition =(a,b=5)=>{
  //   return a+b
  // }
  // console.log(addition(1))
  
  // js promises -- resolve , reject 
  // let countValue = new Promise(function(resolve,reject){
  //   setTimeout(() => {
  //     reject("promise rejected")
  //   }, 5000);
  // })
  
  // countValue.then(function success(result){
  //   console.log(result)
  // }).catch(function failure(result){
  //   console.log(result)
  // })

  // import { useEffect, useState } from 'react'
  // import './App.css'
  
  // function App() {
  //   const [count, setCount] = useState(0)
  //   const increment =()=>{
  //     setCount((count) => count + 1)
  //   }
  //   const decrement =()=>{
  //     setCount((count) => count - 1)
  //   }
  
  //   const reset =()=>{
  //     setCount(0)
  //   }
  
  //   return (
  //     <>
  //       <div>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <p>{count}</p>
  //         <button onClick={increment}>increment
  //         </button>
  //         <button onClick={decrement}>decrement
  //         </button>
  //         <button onClick={reset}>reset
  //         </button>
  //       </div>
  //       <p className="read-the-docs">
  //        LMS CODE BUILDERS
  //       </p>
  //     </>
  //   )
  // }
  
  // export default App
  