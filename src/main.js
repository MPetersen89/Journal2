$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const body = $("#body").val();
    $("#output").text(title);
    $("#output").text(body);
  });
});