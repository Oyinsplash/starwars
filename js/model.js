const url = 'https://swapi.dev/api/people/';
const image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2seyuhiUnD1RSnq0Gs2AW-ZNC0zTObikNDQ&usqp=CAU"];

 class User {
    constructor (name, gender, height){
        this.name = name,
        this.gender = gender,
        this.height = height
    }
};


const ul = document.querySelector('#characters');

// 


// let vard = new Character ("vardamoth", "female", 2.1);

// console.log(vard.gender);

// use api url to fetch data
fetch(url)
// convert data to from object to json
.then((res)=> res.json())
// destructure results from json data and get necessary detail by looping through each of its element 
.then(({results})=>{
    // console.log(results);
    
    results.forEach((eachCharacter) => {
    
    let user = new User(eachCharacter.name, eachCharacter.gender, eachCharacter.height)
        
    let li = document.createElement("li");
    li.classList.add("character");
    li.className += " initial";

    let displayDiv = document.createElement("div");
    displayDiv.classList.add("displayDiv");

    let dp = document.createElement("img");
    dp.src= image[0];
    displayDiv.append(dp);
    let displayName = document.createElement("p");
    displayName.textContent = user.name;
    displayDiv.append(displayName)

    let displayDetails = document.createElement("div");
    displayDetails.className  += "detailsDiv hide";

    let name = document.createElement('p');
    name.textContent = displayName.textContent;
    let gender = document.createElement('p');
    gender.textContent = user.gender;
    let height = document.createElement('p');
    height.textContent = user.height;

    displayDetails.append(name);
    displayDetails.append(gender);
    displayDetails.append(height);

    li.append(displayDiv);
    li.append(displayDetails);   
    ul.append(li);

    displayName.addEventListener('click', (e)=>{
        if(e.target.parentElement.nextElementSibling.classList.contains("hide")){
            li.classList.remove("initial");
            li.className += " clicked";
            displayName.classList.add("hide");
            console.log("yea")
            displayDetails.classList.remove("hide");
            
        }
    });
    })
})