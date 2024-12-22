

const options = {
    	method: 'GET',
    	headers: {
    		'x-rapidapi-key': '9d3517b10emshae7b2affd3b7951p162a25jsnf72d56b5fafd',
    		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    	}
    };

    document.addEventListener("click", () => {
      
      const navLinks = document.querySelectorAll('.nav-link');
  
      
      navLinks.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault(); 
  
              
              const gameType = this.getAttribute('data-category');
  
              
              getGames(gameType);
  
              
              navLinks.forEach(nav => nav.classList.remove('active'));
              this.classList.add('active'); 
          });
      });
  });
  

let gamesList = []

async function getGames(game_type){
      try{
       let Api = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game_type}`,options)
       let gamesData = await Api.json()
       gamesList = gamesData
       console.log(gamesData); 
       display_games() 
      }catch(error){
         document.querySelector(".row").innerHTML =`
<div class="main_wrapper vh-100">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          xml:space="preserve"
          viewBox="0 0 189.929 189.929"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="curve_svg"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> No Signal!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
  </div>
</div>
`
      }
      
   }
   getGames("mmorpg")



   function display_games(data) {
    let games = [];
    for (let i = 0; i < gamesList.length; i++) {
        games += `<div class="col-xlg-3 col-lg-3 col-md-4 col-sm-6">
                <div id="card" class="card pt-3 pe-3 ps-3 m-3 " data-index="${i}">
                    <img class="rounded-2" src="${gamesList[i].thumbnail}" alt="">
                    <div class="content position-relative">
                        <h5 class="name text-light mt-2">${gamesList[i].title.split(" ").slice(0, 2).join(" ")}</h5>
                        <p class="desc d-flex justify-content-center align-items-center text-center mt-4">${gamesList[i].short_description.split(" ").slice(0, 7).join(" ")}</p>
                        <p class="sale rounded-pill">Free</p>
                        <div class="info d-flex justify-content-between fw-bold">
                            <p class="type m-1 rounded-pill bg-secondary px-2 py-1">${gamesList[i].genre}</p>
                            <p class="console m-1 rounded-pill bg-secondary px-2 py-1">${gamesList[i].platform}</p>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    document.querySelector('.row').innerHTML = games;

    
    let cards = document.querySelectorAll('main .card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const index = card.getAttribute('data-index'); 
            displayGames_info(gamesList[index]);
        });
    });
}

function displayGames_info(data) {
    let games_info = `
    <div class="col-lg-12 col-md-4  col-sm-6">
            <h1 class="mb-3 text-light">Game Details</h1>
            <button id="close" class="btn border-0  "><i class="fa-solid fa-x"></i></button>
            <div class="games_info d-flex flex-md-row  flex-column">
                <img class="me-5" src="${data.thumbnail}" alt="${data.title}">
                <div class="content d-flex flex-column text-light">
                    <h2>Title: ${data.title}</h2>
                    <h4 class="category mt-3"><span class="fw-bold">Category:</span> ${data.genre}</h4>
                    <h4 class="platform mt-2"><span class="fw-bold">Platform:</span> ${data.platform}</h4>
                    <h4 class="status mt-2"><span class="fw-bold">Status:</span> ${data.status}</h4>
                    <p class="mt-3">${data.description}</p>
                    <a class="btn btn-outline-danger w-25" href="${data.game_url}" target="_blank">Play Now</a>
                </div>
            </div>
        </div>`;

    document.querySelector(".game_info .row").innerHTML = games_info;

    
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".games").classList.remove("d-none");  
        document.querySelector(".game_info .row").innerHTML = "";
    });
    let game_info = document.querySelector (".game_info")
   let cards = document.querySelectorAll('main .card');
   cards.forEach(card => {
       card.addEventListener('click', function () {
        game_info.classList.remove("d-none")
        document.querySelector(".games").classList.add("d-none");   
           
       });
   });
}



   

   







































 

//   document.getElementById("close").addEventListener("click", () => {
//   document.querySelector(".games").classList.remove("d-none");
//   document.querySelector(".game_info").classList.add("d-none");
// });



//  function showDetails(idGame) {
//     const details = new Details(idGame);
//     document.querySelector(".games").classList.add("d-none");
//     document.querySelector(".game_info").classList.remove("d-none");
//  }








   