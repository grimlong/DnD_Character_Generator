const apiData = {
    url:'https://www.dnd5eapi.co/api/',
    _class: 'Classes',
}

const {url,_class} = apiData
const apiClass = `${url}${_class}`

fetch(apiClass)
  .then( (data) => data.json() )
  .then( (classes) => _classList(classes))

let _classList = (data) => {
  
let cList =["Choose Your Class:",...data.results.map(x => x.name)];
   
const sel = document.getElementById('classList');
var fragment = document.createDocumentFragment();
  
cList.forEach(function(cList, index) {
  var opt = document.createElement('option');
  opt.innerHTML = cList;
  opt.value = cList;
  fragment.appendChild(opt);
  });
  
  sel.appendChild(fragment);
}

function classChoice(){
  const sel = document.getElementById('classList');
  let choice = sel.value.toLowerCase();
  fetch(apiClass + '/' + choice)
    .then( (data) => data.json())
    .then( (_class) => classData(_class))
  let classData = (data) => {
    const hitDie = document.getElementById('hd');
    hitDie.innerHTML = data.hit_die;
    console.log(data.hit_die);
  }
}

