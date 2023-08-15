let username = "anshaneja5";
// const name= document.querySelector("[data-name]");
const search = document.querySelector("[data-search]");
const searchForm = document.querySelector("[data-searchForm]");
const img = document.querySelector("[data-img]");
const bio = document.querySelector(".bio-div");
const repos=document.querySelector("[data-repos]");
const followers=document.querySelector("[data-followers]");
const following=document.querySelector("[data-following]");
const attherate=document.querySelector("[data-attherate]");
const join=document.querySelector("[data-join]");
const name = document.querySelector("[data-name]");
const light = document.querySelector("[data-light]");
// const wrap = document.querySelector("[.wrapper]");
const wrap=document.querySelector("[topdiv]");
const dd=document.querySelector("[data-dd]");
const divv= document.querySelector(".main-div");
const numbers = document.querySelector(".numbers-div");
let response=" ";
light.addEventListener('click',()=>{
  if(light.innerHTML=="Light"){
    light.innerHTML="Dark";
    wrap.style.backgroundColor="#F6F8FF";
    light.style.color="#4B6A9B";
    dd.style.color="#4B6A9B";
    search.style.backgroundColor="#FEFEFE";
    divv.style.backgroundColor="#FEFEFE";
    name.style.color="black";
    join.style.color="#4B6A9B";
    numbers.style.backgroundColor="#F6F8FF";
    repos.style.color="black";
    followers.style.color="black";
    following.style.color="black";
    search.style.color="black";
  }
  else{
    light.innerHTML="Light";
    wrap.style.backgroundColor="#141D2F";
    light.style.color="white";
    dd.style.color="white";
    search.style.backgroundColor="#1E2A47";
    search.style.color="white";
    divv.style.backgroundColor="#1E2A47";
    name.style.color="white";
    join.style.color="white";
    numbers.style.backgroundColor="#141D2F";
    repos.style.color="white";
    followers.style.color="white";
    following.style.color="white";
  }
})
let month=[" ","january","febuary","march","april","may","june","july","august","september","october","november","december"];
async function apicall(){
  response = await fetch(`https://api.github.com/users/${username}`);
  const data= await response.json();
  console.log(data);
  console.log(data?.bio);
  bio.innerText=`${data?.bio}`;
  repos.innerText=`${data?.public_repos}`;
  followers.innerText=`${data?.followers}`;
  following.innerText=`${data?.following}`;
  attherate.innerText=`@${data?.login}`;
  attherate.href=`${data?.html_url}`;
  img.src=`${data?.avatar_url}`;
  join.innerText=`Joined at ${ data?.created_at.split("T").shift().split("-")[2]} ${month[parseInt(data?.created_at.split("T").shift().split("-")[1])]} ${data?.created_at.split("T").shift().split("-")[0]}`;
  // console.log(typeof();
  name.innerText=`${data?.name}`;
}
apicall();

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  username = search.value;
  apicall();
})
