// collects all the class
const panels = document.querySelectorAll('.panel')

// It removes the class active from the class
function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

// So for each panel we add event listener to it
// event listener will add a click
// and on click it first removes the class active from it and all the classes apparently
// and then add class active to the clicked class

panels.forEach(panel => {
  panel.addEventListener('click', () =>{
    removeActiveClasses();
    panel.classList.add('active');
  })
})
