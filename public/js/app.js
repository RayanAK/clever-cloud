async function retrieveData() {
  let response = await fetch("https://swapi.dev/api/planets/");
  let data = await response.json();
  return data;
}

lottie.loadAnimation({
  container: document.getElementById("lottie"), // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../../rocket_lottie.json", // the path to the animation json
});

function showPlanets() {
  retrieveData().then((data) => {
    let planets = data.results;
    let card = document.getElementsByClassName("card");
    let images = [
      "./public/images/tatooine.png",
      "./public/images/alderaan.png",
      "./public/images/yavin4.png",
      "./public/images/hoth.png",
      "./public/images/dagobah.png",
      "./public/images/bespin.png",
    ];

    for (let i = 0; i < 6; i++) {
      let myH2 = document.createElement("h2");
      let myImg = document.createElement("img");
      let myP1 = document.createElement("p");
      let myP2 = document.createElement("p");
      let myP3 = document.createElement("p");
      let myP4 = document.createElement("p");
      let myButton = document.createElement("button");

      myButton.addEventListener("click", () => {
        lottie.play();

        setTimeout(() => {
          lottie.stop();
        }, 2500);
      });

      myH2.textContent = planets[i].name;
      myImg.src = images[i];
      myP1.textContent = "Climate : " + planets[i].climate;
      myP2.textContent = "Terrain : " + planets[i].terrain;
      myP3.textContent = "Population : " + planets[i].population;
      myP4.textContent = "Hours a day : " + planets[i].rotation_period;
      myButton.textContent = "TAKE OFF 🚀";

      card[i].appendChild(myH2);
      card[i].appendChild(myImg);
      card[i].appendChild(myP1);
      card[i].appendChild(myP2);
      card[i].appendChild(myP3);
      card[i].appendChild(myP4);
      card[i].appendChild(myButton);
    }
  });
}

showPlanets();
