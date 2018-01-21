document.querySelectorAll("td").forEach(function(current) {
  current.addEventListener("click", function() {
    openModal(current.classList.contains("isReserved"));
  })
});

function openModal(isReserved) {
  if(isReserved) {
    document.getElementById("textModal").innerHTML = "Cette plage horaire est malheureusement déjà réservée, vous pouvez cependant vous abonner aux notifications au cas où elle se libérerait."
    document.getElementById("btnCalender").innerHTML = "S'abonner aux notifications."
  } else {
    document.getElementById("textModal").innerHTML = "Cette plage horaire est actuellement disponible, vous pouvez la réserver."
    document.getElementById("btnCalender").innerHTML = "Réserver la plage."
  }
  $("#modalCalender").modal();
}

function closeModal(txt) {
  if(txt == "Réserver la plage.") {
    document.getElementById("willBeReserved").className = "isReserved";
    alert("La plage a bien été réservée");

  } else {
    alert("Vous serez désormais notifié en cas de libération.");
  };
  $('#modalCalender').modal('toggle');
}
