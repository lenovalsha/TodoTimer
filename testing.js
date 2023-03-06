$(document).ready(function () {
    const hiddenElements = document.querySelectorAll('.hidden');
    // const hiddenElements = $('.hidden');

    // a class that takes a callback function in its constructor
    // it can obeserve multiple elements entries at the same time
    // this function will run everytime the visibility of one of the observed element changes
    const observer = new IntersectionObserver((entries) => {
        // because we have multiple entries we need to a foreach loop to loop through them
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));



    $('#btnFadeOut').click(function () {
        $('#box').fadeOut('fast', function () { //takes in a call back function(optional), that does something when its done
            $('#btnFadeOut').text('Its gone');
        }); //if you want this to go fasr or slow add 'slow' or in seconds 3000 for 3 seconds
    });
    $('#btnFadeIn').click(function () {
        $('#box').fadeIn();
    });
    $('#btnFadeTog').click(function () {
        $('#box').fadeToggle(1000);
    });


    $('#btnSlideUp').click(function () {
        $('#box').slideUp(1000);
    });
    $('#btnSlideDown').click(function () {
        $('#box').slideDown(1000);
    });
    $('#btnSlideTog').click(function () {
        $('#box').slideToggle(1000);
    });
    $('#btnStop').click(function () {
        $('#box').stop(1000);
    });

    $('#moveRight').click(function () {
        $('#box2').animate({ left: 500, height: '300px', width: '300px', opacity: '.5' }); //this is gonna move it 500 from the left, make sure that its position is relative or sles it wont work
    });

    $('#moveLeft').click(function () {
        $('#box2').animate({ left: 0, height: '100px', width: '100px', opacity: '1' });
    });
    $('#moveAround').click(function () {
        var box = $('#box2');
        box.animate({ left: 300 });
        box.animate({ top: 300 });
        box.animate({ top: 300, left: 0 });
        box.animate({ left: 0, top: 0 });



    });
});
