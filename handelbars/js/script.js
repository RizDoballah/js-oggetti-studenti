$(document).ready(function() {
  $('.invia').click(function() {
    var textNew = $('.send-text').val();
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var time = hours + ': ' + minutes;

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text' : textNew,
      'time' : time
    };
    var html = template(context);
    $('#app').append(html);
  });
});
