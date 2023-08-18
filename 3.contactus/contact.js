let bar=document.querySelector('.bar')
let resnav=document.querySelector('.resnav ul')


bar.addEventListener('click',()=>{
resnav.classList.toggle('show')
})
function clicked(event)
{event.preventDefault()
}