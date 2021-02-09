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

const dtr = data.results


  let cList = ["Classes", dtr[0].name, dtr[1].name, dtr[2].name, dtr[3].name,dtr[4].name, dtr[5].name, dtr[6].name, dtr[7].name, dtr[8].name, 
               dtr[9].name, dtr[10].name, dtr[11].name]
  
  // let cList =[];
  // for (i = 0; i < data.results.length; i++){
  //     cList.push.apply(cList, data.results[i].name);
  // }

  var sel = document.getElementById('classList');
  var fragment = document.createDocumentFragment();
  
  cList.forEach(function(cList, index) {
      var opt = document.createElement('option');
      opt.innerHTML = cList;
      opt.value = cList;
      fragment.appendChild(opt);
  });
  
  sel.appendChild(fragment);
}


fetch(apiClass + '/barbarian')
 .then( (data0) => data0.json())
 .then( (barb) => barbarian(barb))

let barbarian = (data0) => {

  console.log(data0);
  
}


// document.getElementById('classList').addEventListener('change',function (e) {
//   if (e.target.value == "Barbarian") 
//   console.log("Barbarian Selected");
//   console.log(data0)
//  }