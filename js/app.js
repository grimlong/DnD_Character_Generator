const apiData = {
    url:'https://www.dnd5eapi.co/api/',
    _class: 'Classes',
}

const {url,_class} = apiData
const apiUrl = `${url}${_class}`


fetch(apiUrl)
  .then( (data) => data.json() )
  .then( (classes) => _classList(classes))


const _classList = (data) => {

  for (i = 0; i < data.results.length; i++){
  console.log(data.results[i].name)
  }
}
console.log(apiUrl)
  // const _classList
    
  
  //   var classes = document.getElementById("classList");
  //   var option = document.createElement("option");

    // for (i = 0; i < data.results.length; i++) {
    // option.text = (data.results[0].name);
    // classes.add(options,classes[i]);

    
    // }
  
    
    // let dropdown = document.getElementById('classList');
    // dropdown.length = 0;
    
    // let defaultOption = document.createElement('option');
    // defaultOption.text = 'Choose Class';
    
    // dropdown.add(defaultOption);
    // dropdown.selectedIndex = 0;
    
    // const url = 'https://www.dnd5eapi.co/api/classes';
    
    // const request = new XMLHttpRequest();
    // request.open('GET', url, true);
    
    // request.onload = function() {
    //   if (request.status === 200) {
    //     const data = JSON.parse(request.responseText);
    //     let option;
    //     for (let i = 0; i < data.length; i++) {
    //       option = document.createElement('option');
    //       option.text = data.results[i].name;
    //       dropdown.add(option);
    //     }
    //    } else {
    //     // Reached the server, but it returned an error
    //   }   
    // }
    
    // request.onerror = function() {
    //   console.error('An error occurred fetching the JSON from ' + url);
    // };
    
    // request.send();


// let dropdown = document.getElementById('classList');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose Class';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = 'https://www.dnd5eapi.co/api/classes';

// fetch(url)  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.warn('Looks like there was a problem. Status Code: ' + 
//           response.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data.results[i].name;
//       	  option.value = data.results[i].abbreviation;
//       	  dropdown.add(option);
//     	}    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err);  
//   });

