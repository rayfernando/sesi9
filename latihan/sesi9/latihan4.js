const hitungLuas = () => {
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;

    luas = 0.5 * alas * tinggi;

    document.getElementById('hasil').innerHTML = luas;
}

const clearInput = () => {
    document.getElementById('alas').value = 0;
    document.getElementById('tinggi').value = 0;
    document.getElementById('hasil').innerHTML = "-";
}