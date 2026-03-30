function openReservation(car) {
    document.getElementById("reservation").style.display = "flex";
    document.getElementById("carName").innerText = car;
}

function closeReservation() {
    document.getElementById("reservation").style.display = "none";
}

function confirmReservation() {
    alert("Réservation confirmée ✅");

    closeReservation();
}