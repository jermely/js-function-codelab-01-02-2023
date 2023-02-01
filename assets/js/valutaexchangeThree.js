//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById("calculateButt");

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
  gatherInputData();
});

// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
  const myEuroRate = document.getElementById("euroRate").value;
  const myDollarRate = document.getElementById("dollarRate").value;

  const myDanishAmount = document.getElementById("danishAmount").value;

  makeExchange(myEuroRate, myDanishAmount);
  makeExchange(myDollarRate, myDanishAmount);

  showResult(
    makeExchange(myEuroRate, myDanishAmount),
    makeExchange(myDollarRate, myDanishAmount),
    myDanishAmount
  );
}

// håndterer data behandling  (controller code fra MVC)
function makeExchange(myRate, myDanishAmount) {
  return myDanishAmount / myRate;
}

// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC

// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML =
    myDanishAmount +
    " danske kroner bliver til: " +
    myEuroResult +
    " euro og " +
    myDollarResult +
    " dollars";
}
