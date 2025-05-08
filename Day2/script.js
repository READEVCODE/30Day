const urenwijzer = document.querySelector(".uren-wijzer");
const minutenwijzer = document.querySelector(".minuten-wijzer");
const secondenwijzer = document.querySelector(".seconden-wijzer");
const digitaletijd = document.getElementById("digitale-tijd");

function setDate() {
  const date = new Date();
  const uren = date.getHours();
  const minuten = date.getMinutes();
  const seconden = date.getSeconds();


  const urenDegrees = (uren / 12) * 360 + 90;
  const minutenDegrees = (minuten / 60) * 360 + 90;
  const secondenDegrees = (seconden / 60) * 360 + 90;

  if (secondenDegrees === 90) {
    urenwijzer.style.transition = `all 0s`;
    minutenwijzer.style.transition = `all 0s`;
    secondenwijzer.style.transition = `all 0s`;
  }

  urenwijzer.style.transform = `rotate(${urenDegrees}deg)`;
  minutenwijzer.style.transform = `rotate(${minutenDegrees}deg)`;
  secondenwijzer.style.transform = `rotate(${secondenDegrees}deg)`;

  const digitaletijdtekst = date.toLocaleTimeString();
  digitaletijd.textContent = digitaletijdtekst;
}

setInterval(setDate, 1000);
