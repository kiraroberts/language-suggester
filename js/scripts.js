// BACK END

// if (inputFrontBack === "front-end" && inputColor === "red" && inputVacation === "osaka" && inputMusic === "1995" && inputRather === "geology") {
//   $('#ruby').show();
//   $('#python, #c, #no-match').hide();
// }


// FRONT END

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputFrontBack = $("input:radio[name=front-back]:checked").val();
    var inputColor = $("input:radio[name=color]:checked").val();
    var inputVacation = $("input:radio[name=vacation]:checked").val();
    var inputMusic = $("input:radio[name=music]:checked").val();
    var inputRather= $("input:radio[name=rather].checked").val();

    if (inputFrontBack === "front-end" && inputColor === "red" && inputVacation === "osaka" && inputMusic === "1995" && inputRather === "geology") {
      $('#ruby').show();
      $('#python, #c, #no-match').hide();
    } else if (inputFrontBack === "back-end" && inputColor === "blue" && inputVacation === "amsterdam" &&

  event.preventDefault();
  });
});
