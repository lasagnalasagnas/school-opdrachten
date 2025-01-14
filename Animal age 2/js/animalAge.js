document.addEventListener('DOMContentLoaded', () => {
    const animalAges = {
        'Hond': 5.5,
        'Gecko': 11,
        'Olifant': 1.6,
        'Vlieg': 1216
    };

    const mijnLeeftijdInput = document.getElementById('mijnLeeftijd');
    const uitvoerVeld = document.getElementById('uitvoerVeld');
    const resultaatImg = document.getElementById('resultaatImg');

    function checkAge(animal) {
        const mijnLeeftijd = parseFloat(mijnLeeftijdInput.value);
        const animalAge = animalAges[animal];

        if (isNaN(mijnLeeftijd)) {
            uitvoerVeld.textContent = 'Voer een geldig getal in.';
            return;
        }

        if (mijnLeeftijd > animalAge) {
            uitvoerVeld.textContent = `Te hoog! Een ${animal} leeft ${animalAge} jaar per mensenjaar.`;
            resultaatImg.src = 'images/pijl_omlaag.gif';
        } else if (mijnLeeftijd < animalAge) {
            uitvoerVeld.textContent = `Te laag! Een ${animal} leeft ${animalAge} jaar per mensenjaar.`;
            resultaatImg.src = 'images/pijl_omhoog.gif';
        } else {
            uitvoerVeld.textContent = `Goed geraden! Een ${animal} leeft ${animalAge} jaar per mensenjaar.`;
            resultaatImg.src = `images/${animal.toLowerCase()}.gif`;
        }
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => checkAge(button.textContent));
    });
});