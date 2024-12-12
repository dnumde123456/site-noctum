function aktywujZakladke(zakladkaId) {
    document.getElementById('tablink1').style.display = 'none';
    document.getElementById('tablink2').style.display = 'none';

    document.getElementById(zakladkaId).style.display = 'block';
}

function openMain() {
    aktywujZakladke('tablink1');
}

function openNews() {
    aktywujZakladke('tablink2');
}

document.addEventListener('DOMContentLoaded', () => {
    aktywujZakladke('tablink1');
});

