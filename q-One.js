//   function components
// const FunctionComponet= ()=>{
//     return()
// }

//  q -2

//  by using fragment syntax

// Function A() {
// // const [Name, setName]=useState('Xyz');
// return (
//     <>

//     {/* <div>Welcome</div>
// <div>Hello</div> */}
//      </>

// )
// },

// q- 19  Add an element at the 0th index

let arr = [2, 3, 4, 5];
arr.unshift(1);

// q -20 Spread operator? create one array and using spread operator create new array and copy all the elements of prev array.

let arr1 = [2, 3, 4, 5];
let newArr = [...arr1];
// console.log(newArr);

function x() {
  let a = 2;
  console.log(x);
  console.log(b); // not defind
  function y() {
    let b = 3;
  }
  y(b);
}
x();
