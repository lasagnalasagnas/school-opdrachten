let appelPrijs = 1;
let peerPrijs = 2;
let banaanPrijs = 3;

let totaalAppel = 0;
let totaalPeer = 0;
let totaalBanaan = 0;

function koopProduct(fruit, prijs) {
    if (fruit == "appel") {
        totaalAppel++;
        document.getElementById('totaal_appel').value = totaalAppel;
        document.getElementById('totaalPrijs_appel').value = totaalAppel * appelPrijs;
    } else if (fruit == "peer") {
        totaalPeer++;
        document.getElementById('totaal_peer').value = totaalPeer;
        document.getElementById('totaalPrijs_peer').value = totaalPeer * peerPrijs;
    } else if (fruit == "banaan") {
        totaalBanaan++;
        document.getElementById('totaal_banaan').value = totaalBanaan;
        document.getElementById('totaalPrijs_banaan').value = totaalBanaan * banaanPrijs;
    }
    berekenPrijs();
}

function verwijderProduct(fruit, prijs) {
    if (fruit == "appel" && totaalAppel > 0) {
        totaalAppel--;
        document.getElementById('totaal_appel').value = totaalAppel;
        document.getElementById('totaalPrijs_appel').value = totaalAppel * appelPrijs;
    } else if (fruit == "peer" && totaalPeer > 0) {
        totaalPeer--;
        document.getElementById('totaal_peer').value = totaalPeer;
        document.getElementById('totaalPrijs_peer').value = totaalPeer * peerPrijs;
    } else if (fruit == "banaan" && totaalBanaan > 0) {
        totaalBanaan--;
        document.getElementById('totaal_banaan').value = totaalBanaan;
        document.getElementById('totaalPrijs_banaan').value = totaalBanaan * banaanPrijs;
    }
    berekenPrijs();
}

function berekenPrijs() {
    var totaalPrijs = (totaalAppel * appelPrijs) + (totaalPeer * peerPrijs) + (totaalBanaan * banaanPrijs);
    document.getElementById('totaalPrijs').value = totaalPrijs;
}