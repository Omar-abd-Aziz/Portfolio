//btn for scroll

let btnup = document.getElementById('btnup')

window.onscroll = function() {
  if (window.scrollY >= 200) {
    btnup.style.display = "block";
  } else {
    btnup.style.display = "none";
  }
};


btnup.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}


//end button for scroll


/* start navBar */

document.querySelector("#nav-menu-btn").addEventListener("click",()=>{
    document.querySelector("#nav-menu").classList.toggle("hide")
})

document.querySelector("#homeBtn").addEventListener("click",()=>{
    history.go(0);
    document.querySelector("#nav-menu").classList.toggle("hide")
})

document.querySelector("#aboutBtn").addEventListener("click",()=>{
    location.href="#about";
    document.querySelector("#nav-menu").classList.toggle("hide")
})

document.querySelector("#servicesBtn").addEventListener("click",()=>{
    location.href="#services";
    document.querySelector("#nav-menu").classList.toggle("hide")
})

document.querySelector("#portflioBtn").addEventListener("click",()=>{
    location.href="#portflio";
    document.querySelector("#nav-menu").classList.toggle("hide")
})

document.querySelector("#contactBtn").addEventListener("click",()=>{
    location.href="#contact";
    document.querySelector("#nav-menu").classList.toggle("hide")
})


/* end navBar */







/*start firebase*///////////////////////////////////////////////////////////

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,setDoc,doc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';


var firebaseConfig = {
apiKey: "AIzaSyBBfQ1pFA77crXCBkkLRilcNZdBmf0YFQA",
authDomain: "my-app-25838.firebaseapp.com",
databaseURL: "https://my-app-25838-default-rtdb.firebaseio.com",
projectId: "my-app-25838",
storageBucket: "my-app-25838.appspot.com",
messagingSenderId: "127559623465",
appId: "1:127559623465:web:c2d0de972a931187008d38",
measurementId: "G-3E1S2T8D20"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



let X;

async function getCit(db,X) {
const citiesCol = collection(db,`${X}`);
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());

return cityList;
}



/*end firebase*/////////////////////////////////////////////////////////////


/* start function for rest api */

function getCards(){
  let  H,G;

  getCit(db, 'Cards').then(async (e) => {

    G = e;
  
    H = G[0].cardsDad;

    document.querySelector(".project-dad").innerHTML=`${H}`
  })
}

setInterval(getCards, 1000)


window.onload=getCards()


/* end function for rest api */






























///////////////////////////////////* start btn of social *//////////////////////////////////////


document.querySelector(".facebook-btn").addEventListener("click", ()=>{
  location.href="https://www.facebook.com/profile.php?id=100013753383562"
})

document.querySelector(".telegram-btn").addEventListener("click", ()=>{
  location.href="https://t.me/Boy_Unnormal"
})


document.querySelector(".whatsapp-btn").addEventListener("click", ()=>{
  location.href="https://api.whatsapp.com/send/?phone=%2B201111881968&text&app_absent=0"
})



///////////////////////////////////* end btn of social *//////////////////////////////////////