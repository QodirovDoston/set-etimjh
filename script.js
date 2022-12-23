let local = localStorage
let text = document.getElementById('text')
let text1 = document.getElementById("text1")
let inp = document.querySelector('#exampleFormControlInput1');
let innp = document.querySelector('#exampleFormControlInput2');
let handlerClick = document.getElementById("handlerClick")
let handlerClick1= document.getElementById('handlerClick1')

// if(text1 && text == ""){
//   alert("katakni toldir")
// }else{
//     alert("succesfull")
// }
handlerClick.addEventListener("click",()=>{
  let value = inp.value
  let value2 = innp.value   
    user = {
    name: value,
    parol: value2
    }
    local.setItem('user',JSON.stringify(user))
    foo()
    
})
foo()
function foo(arr){
    text.textContent = JSON.parse(local.getItem("user")).name
    text1.textContent = JSON.parse(local.getItem("user")).parol
}
handlerClick1.addEventListener("click",()=>{
    text.textContent = null
    text1.textContent = null
    localStorage.removeItem('user')
});