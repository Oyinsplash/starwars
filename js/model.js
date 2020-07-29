const url = 'https://swapi.dev/api/people/';
const image = [
    "https://www.clipartkey.com/mpngs/m/225-2252028_star-wars-luke-skywalker-cartoon.png",
    "https://cellularnews.com/wp-content/uploads/2020/05/46-star-wars-a-cute-c-3po-artwork-325x485.jpg",
    "https://i.pinimg.com/originals/f0/d1/2d/f0d12d26bd490498380bb8d30563749e.png",
    "https://i.pinimg.com/originals/e6/c8/46/e6c846e6b8a0a801c22463ab9594fefc.png",
    "https://i.pinimg.com/originals/b7/ce/fa/b7cefa8168f2552a76b3efee37e131d1.png",
    "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62795/5012547-star%20wars.jpg",
    "https://i.pinimg.com/564x/e8/9e/01/e89e0126a4bf717ad5181707d495f841.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91061d44-c4b7-4974-b86f-bb77b7f4c45f/db7whmf-b4c5faa7-bd99-4eb2-951e-0647a4c8e9bc.jpg/v1/fill/w_1024,h_1440,q_75,strp/r5_d4_speed_sketch_by_marshaparkins_db7whmf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDQwIiwicGF0aCI6IlwvZlwvOTEwNjFkNDQtYzRiNy00OTc0LWI4NmYtYmI3N2I3ZjRjNDVmXC9kYjd3aG1mLWI0YzVmYWE3LWJkOTktNGViMi05NTFlLTA2NDdhNGM4ZTliYy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-cI2624iM5rNOUAJL0X8-MBpLMSZKqGwsFyFHnQ7rRY",
    "https://i.pinimg.com/564x/44/6e/86/446e8626c09138d4fc36b802cadcd0b5.jpg",
    "https://i.pinimg.com/originals/cb/5f/14/cb5f14cfd50a0d246f28d6e9ea4c1b12.jpg"
];

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
    
    results.forEach((eachCharacter, index) => {
    
    let user = new User(eachCharacter.name, eachCharacter.gender, eachCharacter.height)
        
    let li = document.createElement("li");
    li.classList.add("character");
    li.className += " initial";

    let displayDiv = document.createElement("div");
    displayDiv.classList.add("displayDiv");

    let dp = document.createElement("img");
    dp.src= image[index];
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("dp_container");
    imageContainer.append(dp)
    displayDiv.append(imageContainer);

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
    let closeDiv = document.createElement('div');
    closeDiv.classList.add("closeDiv");
    let close = document.createElement("img");
    close.src ="../icons/cancel.svg";
    closeDiv.append(close);
    


    displayDetails.append(name);
    displayDetails.append(gender);
    displayDetails.append(height);
    displayDetails.append(closeDiv);
    li.append(displayDiv);
    li.append(displayDetails);   
    ul.append(li);

    displayName.addEventListener('click', (e)=>{
        if(e.target.parentElement.nextElementSibling.classList.contains("hide")){
            li.classList.remove("initial");
            li.className += " clicked";
            displayName.classList.add("hide");
            imageContainer.style.overflow= "visible";
            dp.setAttribute(
                "style", "height: 100%; margin: 1.5rem 0 1.5rem -6rem; border-bottom-left-radius: .5rem; border-bottom-right-radius: .5rem;")
            console.log("yea")
            displayDetails.classList.remove("hide");
        }
    });
    close.addEventListener('click',(e)=>{
        li.classList.remove("clicked");
        li.className += " initial";  
        displayDetails.classList.add("hide");
        imageContainer.style.overflow= "hidden";
        dp.setAttribute(
            "style", "margin: 0; border-bottom-left-radius: 0; border-bottom-right-radius: 0;")   
            displayName.classList.remove("hide");
    })

    })
})
.catch((error)=> console.log(error));