$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('#grandma_form').submit(function(event){
    event.preventDefault();
    user_input = $('#user_input').serialize();

    $.post("/grandma", user_input)
    .done(function(data) {
      $('#grandma_says').text(data);
    });

  });

});
