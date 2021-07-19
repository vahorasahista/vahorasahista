$(document).ready(() => {
  console.log("ready!");
  //Active search type
  $("#tabEmail").on("click", (e) => {
    //Show hide tab. forms
    $(".tab-search").removeClass("active");
    $("#tabEmail").addClass("active");
  });
  $("#tabPhone").on("click", (e) => {
    //Show hide tab. forms
    $(".tab-search").removeClass("active");
    $("#tabPhone").addClass("active");
  });
  $("#btn-search").on("click", () => {
    //Validate search input
    //If validate
    //1. show loading icon
    //use ajax and called api
    //On result disabled loading icon
    //show results in above search form
    //if not valid, show error
  });
});
