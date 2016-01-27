$(document).ready(function(){
  
  // browser refreshes on submit
  // $('form').on('submit', function(){
  //   var name = $('#name').val();
  //   $("#hello").text("Hello, " + name);
  // });

  //examine event object
  // $('form').on('submit', function(event){
  //   var name = $('#name').val();
  //   $("#hello").text("Hello, " + name);
  //   debugger;
  //   event.preventDefault();
  // });

  // stop page refresh
  $('form').on('submit', function(event){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
    event.preventDefault();
  });

});