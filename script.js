let display = document.createElement('div')
display.className="slot"
// display.innerText='hello'
document.body.appendChild(display);
const section = document.getElementById("sec").innerHTML=
`<div class="div1">
<div class="logo"><img src="dogLogo.png"/></div>
<div><nav>
    <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">SERVICES</a></li>
        <li><a href="">CONTACT</a></li>
    </ul>
</nav></div>
    <div id="switch" class="form-check form-switch float-end my-3">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
    </div>
</div>
<div id="head"><p>LIST OF DOGS JUST CLICK TO DISPLAY</p> </div>
</div>
`
const doc1 = document.getElementById('flexSwitchCheckChecked');
const doc2 = document.querySelector('body');
doc1.addEventListener('change', function(){
    if (doc1.checked){
        doc2.classList.add('active')
    } 
    else {
        doc2.classList.remove('active')
    }
});


async function getAPI(){
    response = await fetch("https://dog.ceo/api/breeds/list/all")
    data =await response.json()
    console.log(data)
    createNewBreed(data.message)
}
getAPI();
function createNewBreed(newBreed){
    document.getElementById('sec').innerHTML += `
    <select class="choo" onchange="breeder(this.value)">
    <option>Choose a choice dog</option>
    ${Object.keys(newBreed).map(function (x){
    return `<option>${x}</option>`
     }).join('')}
     </select>`
    }

async function breeder(breed){
    if (breed != "Choose a choice dog"){
        const response= await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        console.log(data);
        showImage(data.message);
    }
}

function showImage(image){
    display.innerHTML = `<img src=${image[0]}>`
    }

