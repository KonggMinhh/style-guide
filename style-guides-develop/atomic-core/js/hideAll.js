// JavaScript Document

$(".js-hideAll").on('click', function(event) {




if($('.atomic-h1').css('opacity') == '0'){

    $(this).removeClass('active');


      $('.compWrap').velocity({
          opacity: "1",
      }, {
          duration: 200
      });

      $('.compNotes').not($thisComp).velocity({
        opacity: "1",
    }, {
        duration: 200
    });

      $('.atoms-side').velocity({
          opacity: "1",
      }, {
          duration: 200
      });
      $('.atoms-side_show').velocity({
        opacity: "1",
    }, {
        duration:500
    });
      $('.atomic-h1').velocity({
          opacity: "1",
      }, {
          duration: 200
      });
      $('.compCodeBox').velocity({
        opacity: "1",
      }, {
          duration: 200
      });
  } else {

     $(this).addClass('active');
     $thisComp = $(this).closest('.compWrap');



    $('.compWrap').not($thisComp).velocity({
        opacity: "0",
    }, {
        duration: 200
    });

    $('.compNotes').not($thisComp).velocity({
        opacity: "0",
    }, {
        duration: 200
    });


    $('.atoms-side_show').velocity({
        opacity: "0",
    }, {
        duration: 0
    });

    $('.atoms-side').velocity({
        opacity: "0",
    }, {
        duration: 200
    });
    $('.atomic-h1').velocity({
        opacity: "0",
    }, {
        duration: 200
    });
    $('.compCodeBox').velocity({
        opacity: "0",
    }, {
        duration: 200
    });

  }
});


