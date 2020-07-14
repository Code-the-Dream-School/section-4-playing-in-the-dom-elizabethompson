const answers = ['a-1', 'a-2', 'a-3', 'a-4']

//------------------------Question 1 ---------------------------
// Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

const a1 = document.getElementById(answers[0])
const div1 = document.createElement('div')

div1.classList += 'square'
div1.addEventListener('click', (event) => {
  const element = event.target
  div1.innerText = element.innerText === 'X' ? 'O' : 'X'
})

a1.appendChild(div1)

//------------------------Question 2 ---------------------------
// Write a JavaScript program to remove items from a dropdown list.
// In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
// you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

const colors = ['red', 'white', 'black', 'green', 'orange']

const a2 = document.getElementById(answers[1])
const select2 = document.createElement('select')
let tmpOption

for (color of colors) {
  tmpOption = document.createElement('option')
  tmpOption.value = color
  tmpOption.innerText = color
  select2.appendChild(tmpOption)
}

const removeBtn2 = document.createElement('button')
removeBtn2.innerText = 'Remove'
removeBtn2.addEventListener('click', (event) => {
  const btn = event.target
  const select = btn.previousSibling
  select.remove(select.selectedIndex)
})

a2.appendChild(select2)
a2.appendChild(removeBtn2)

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{

 }

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
