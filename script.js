
$(window).on("load", function () {

    $(".loader-wrapper").fadeOut(3000);
});
$(document).ready(function () {


    const audio = new Audio();
    audio.src = "sound/alarm.wav";
    var name = $(".nameText").val();


    $(".btnName").click(function () {
        var name = $(".nameText").val();
        $(".test").html("Hello " + name);
        window.location.href = '#hello';

    });

//#endregion Timer
    $("#btnStart").click(function () {

        // $("#btnStart").html("Pause");
        $(".timerH1").html("GoodLuck " + name);
        var tMinute = $("#tMinute").val();
        var oMinute = $("#oMinute").val();
        var tSecond = $("#tSecond").val();
        var oSecond = $("#oSecond").val();
        $(".hidden").removeClass("show");
        $(".timesUp").removeClass("timesUpShow");
        $(".timerH1").removeClass("hideText");

        var interval = setInterval(function () {
            // var timer = timeValue.split('');

            --oSecond;
            if (oSecond < 0) {
                --tSecond;
                oSecond = 9;

            }
            if (tSecond == 0 && oSecond == 0 && oMinute == 0 && tMinute == 0) {
                oSecond = 0;
                clearInterval(interval);
                $(".hidden").addClass("show");
                $(".timesUp").addClass("timesUpShow");
                $(".soundOn").addClass("timesUpShow");
                $(".timerH1").addClass("hideText");
                audio.play();

            }
            if (tSecond < 0 && oMinute > 0) {
                tSecond = 5;
                --oMinute;
            }
            if (tSecond < 0 && oMinute == 0) {
                tSecond = 0;
            }
            if (oMinute < 0) {
                --tMinute;
            }
            if (oMinute == 0 && tMinute > 0) {
                // tSecond--;
                oMinute = 9; tSecond = 5
                --tMinute;

            }
            if (tMinute < 0) {
                tMinute = 0;

            }

            $("#tMinute").val(tMinute);
            $("#oMinute").val(oMinute);
            $("#tSecond").val(tSecond);
            $("#oSecond").val(oSecond);


            tMinute = tMinute;
            oMinute = oMinute;
            tSecond = tSecond;
            oSecond = oSecond;

        }, 1000);



        $("#btnPause").click(function () {
            tMinute = tMinute;
            oMinute = oMinute;
            tSecond = tSecond;
            oSecond = oSecond;
            $("#tMinute").val(tMinute);
            $("#oMinute").val(oMinute);
            $("#tSecond").val(tSecond);
            $("#oSecond").val(oSecond);

            clearInterval(interval);
            // alert("adsasd");

        });
    });
    //#endregion
//#region TodoList
$("#btnAdd").click(function(){
if($("#newTask input").val() == "")
{
    alert("Please insert a todo task")
}
else{

 var text = $("#newTask input").val();
 $('ul').append('<li>' + text + '</li>');



}
});
$("ul").click(function(e)
{
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }

});




    $(window).scroll(function () {

        var viewTop = $(window).scrollTop();
        var viewBottom = $(window).height() + viewTop;

        var elemTop = $('.welcome').offset().top;
        var elemBottom = elemTop + $('.welcome').height();


        $('.test').fadeToggle(3000, function () {

            window.location.href = '#row';

        });

    });




});
