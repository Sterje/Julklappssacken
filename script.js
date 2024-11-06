// Skapar själva julklappssäcken, en array som kallas currentBag
const currentBag = [];

// Funktion för att lägga till paket i säcken.
function addItem() {

        // Hämtar värdet från textfältet "giftitem". VIktigt att lägga till .value
        const giftInput = document.getElementById("giftItem").value;
            // Lägger till värdet från giftInput till array currentBag
            currentBag.push(giftInput);
            // Rensar input fältet när objekt lagts till i säcken.
            giftItem.value = "";
}

// Här är funktionen för att visa innehållet i säcken.
function showBag() {

//För att skapa en oordnad lista att skriva ut innehållet i säcken i. Loopas igenom tills allt är utskrivet.
let text = "<ul>";
for (let i = 0; i < currentBag.length; i++) {
    document.getElementById("listItems").innerHTML = text += "<li>" + currentBag[i] + "</li>";
}
text += "</ul>";
}

    