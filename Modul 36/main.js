$('#titulli1')
$('li')
$('.main')
$('#btn')

$('li').click(function(){
    alert('clicked')
})

$('#btn').click(function(){
    console.log($('#tituli1').text)
    $('#titulli1').text('Testing Text')
    $('titulli1').append('Extra Text')
})

$('.square').animate({
    'width': '200px',
    'height': '200px'
})