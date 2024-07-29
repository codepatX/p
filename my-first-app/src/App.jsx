

// function Heading() {

import { useState } from "react"

// return(
//   <>
//   <h1>hello</h1>
// <h2>how</h2>
//  <HeadingBody/>
// </>

// )


// }

// function HeadingBody(){
//   return(

//     <h1>this is the body of my heading</h1>

//   )
// }




// export default Heading

// import '../src/impo.css'
// import About from './componenets/about/about'

// function App() {
//   let items = ['tomatoes', 'onion', 'pepper']

//   return (
//     <>
//       <p>list of vegetables</p>
//       <ul>{

//         items.map(function(item){
//           return <li>{item}</li>
//         })

//       }
//       </ul>
//       <Red/>
//       <Yellow/>
//       <Green/>
//       <Users/>
//       <About/>
//     </>
//   )
// }

// function Red(){
//   let red={backgroundColor:'red',height:'10rem',width:'20rem',marginBottom:'2px',borderRadius:'2rem'}
//   let text={textAlign:'center',color:'white',fontSize:'2rem'}

//   return (
//     <>
//     <div className="redo" style={red}>
//       <p style={text}>Red</p>
//     </div>
//     </>
//   );
// }

// function Yellow(){
//   let yellow={backgroundColor:'yellow',height:'10rem',width:'20rem',marginBottom:'2px',borderRadius:'2rem'}
//   let text={textAlign:'center',paddingTop:'4rem',color:'white',fontSize:'2rem'}

//   return (
//    <>
//     <div style={yellow}>
//       <p style={text}>Yellow</p>
//     </div>
//    </>
//   );
// }

// function Green(){
//   let green={backgroundColor:'green',height:'10rem',width:'20rem',marginBottom:'2px',borderRadius:'2rem'}
// let text={textAlign:'center',paddingTop:'4rem',color:'white',fontSize:'2rem'}
//   return (
//     <>
//     <div style={green}>
//       <p style={text}>green</p>
//     </div>
//     </>
//   );
// }

// function Users(){
// let users = [{name:'Adam', age:'20'},{name:'james', age:'30'},{name:'john', age:'19'}]
// const a ={color:'orange',fontSize:'7rem'}
// const mono ={backgroundColor:'red',width:'14rem',height:'14rem',border:'10px solid blue',borderRadius:'20px'}
// const container = {width:'20rem',height:'15.2rem',border:'5px solid black',borderRadius:'7px'}

// return(
//   <>
//   <li style={a}>List of users</li>
//   <ol>
//     <div style={mono}>

//     </div>


//     <div style={container} >

//     </div>

//  {
//    users.map(function(user){
//     return <li>{user.name} {user.age}</li>

//  }
//    )}
//   </ol>
//   </>
// )
// }

// function Mock(){
// return(
//   <>
//   <About user = 'Ama'/>
//   </>
// )


// }

// function About(props){
//   return (
//     <>
//     <h1>hello {props.user}</h1>
//     </>
//   )
// }



// function User() {
//   let user = { name: 'Ama', age: '14', height: '1.2' }
//   return (
//     <>
//     <Display name={user.name} age={user.age} height={user.height} />
//   </>
//   )
// }



// function Display(props) {
//   return (
//     <>
//       <h1>Name:{props.name}</h1>
//       <h1>Age:{props.age}</h1>
//       <h1>Height:{props.height}</h1>
//     </>
//   )
// }





// function Names(){
//   const[name,setName]=useState('confirmed')
//   return(
//     <>
//     <h1>your package has been {name}</h1>
//     <button onClick={()=>setName('sent')}>send</button>
//     </>
//   )
// }

// function Check() {
//   const[name,setName]=useState('confirm')
//     return(
//       <>
//       <h1>your package has been {name}</h1>
//       <button>send</button>
//       </>
//     )
// }


function Count() {
  const [counts, counter] = useState(1)
  return (
    <>
      <h1>your package reads {counts}$ per week</h1>
      <button onClick={() => counter((counts) => counts+1)}>check</button>
    </>
  )
}

export default Count