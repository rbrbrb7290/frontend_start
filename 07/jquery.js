//document.querySelector('h1').innerHTML = 'hi';

// $('h1').html('hi');
// $('h1').fadeOut().delay(1000).fadeIn();

// var divs = document.querySelectorAll('div');
// for(var i =0; i < divs.length; i++)
// {
//     divs[i].style.backgroundColor = 'red';
// }



// var $div = $('div'); 
// $div
// .css('background-color' , 'yellow')
// .css('border', '1px solid red');

var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');


$('.wrap').on('click' , 'div' , function(event){
    console.log(event.target);
    $(event.target).fadeOut();

})

$('#btn').click(function(event){
    console.log('click');
    // if($txt.val() ==''){
    //     alert('값을 넣어주세요')
    //     return;
    // }

    // $debug.html($txt.val());
    // $('h1').hide('slow'); //fadeout()
    // $('h1').show('slow'); //fadeout()

    $('.wrap div').show('slow');
    
});