$(document).ready(function() {
  $('.invia').click(function() {
    var textNew = $('.send-text').val();

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text' : textNew
    };
    var html = template(context);
    $('#app').append(html);
  });
});
