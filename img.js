$('button').click(function(){

    $('#advice').text('Select your favourite colour among the colours');

    $('#img1').attr('src', 'red.jpg');
    $('#img2').attr('src', 'blue.jpg');
    $('#img3').attr('src', 'yellow.jpg');

    $('#sel').text('Your favourite colours in order');

});
$('#img1').click(function(){
    $('#img1').hide();
    $('ul:eq(0)').append('<li>Red</li>');
});
$('#img2').click(function(){
    $('#img2').hide();
    $('ul:eq(0)').append('<li>Blue</li>');
});
$('#img3').click(function(){
    $('#img3').hide();
    $('ul:eq(0)').append('<li>Yellow</li>');
});