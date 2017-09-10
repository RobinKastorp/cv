
var width = $(window).width()

$(function () {

	$('.slider').width(width);

	$(window).resize(function() {
	var width = $(window).width();
		$('.slider').width(width);
	})

	$('.toggle').click(function() {
		e = $(this).attr('id');
		h2 = $(this).find('h2');
		str = h2.text();


		$('.' + e).slideToggle();

		if(str == '+') {
			h2.text('-')
		} else {
			h2.text('+')
		}

	});


	$('footer li').mouseenter(function() {
		var $this = $(this);
		var c = $this.attr('class');
		var d = $this.attr('data');

				$this.text(d)
				$this.attr('id', 'special')

		$('footer li').mouseleave(function() {
				$this.text(c)
				$this.attr('id', '')
		})
	});




	$('.help').click(function() {
		$('.dialstart').slideToggle()
	});

	$('.dialstart select').change(function() {
		var opt = $(this).find('option:selected')
		var data = opt.attr('data')
		var btn = $('.halp')
		var block = btn.hasClass('.blocked')

	if(block != true) {

		if(data != 'default') {
		  	 btn.text('Vidare')
		  	 btn.removeClass('blocked')
		} else {
		  	 	btn.text('Välj')
		  	 	btn.addClass('blocked')
		}
    }});


    $('.halp').click(function() {
    	var dia = $('.dialstart');
    	var str = $('.dialstart p');
    	var o = dia.find('select');
    	var opt = o.find('option:selected');
    	var data = opt.attr('data');

    	var reading = 'För att läsa mer var vänlig och klicka på någon utav de nedan färgerna emellan blå, lila, grön eller röd. Rutan kommer då att expandera och minimera om du sedan klickar på den igen. Vart på det färgade området spelar dock ingen roll!';
    	var con = 'Du kan se min kontakt information m.m. genom att plasera datamusen över det gråa färgade fältet. Beroende på vad du plaserar musen över bestämmer också vad du får för information.';

     if(data != 'default') {

     	

    	if(data == 'read') {
    		str.text(reading)
    	dia.fadeIn('slow')
    	} else if (data == 'con') {
    		str.text(con) 
    		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
    	}

    }
    });

    $('.exit').click(function() {
    	$('.dialstart').slideUp();
    });

});



$(function() {

 	var speed = 1000;
 	var pause = 5000;
 	var count = 1;
 	var size = 5;

 	var header = $('header');
 	var slide = header.find('.slide');

	$('.slider').css('left', -width)

	slider = setInterval(function() {
	slide.animate({'margin-left': '-='+width}, speed, function() {
	 	 	
	count++;

	if(count === size) {
	 	count = 1;
	 	slide.css('margin-left', 0);
	};
	});
	}, pause)

});

$(function() {

 var ref = $('.referens')
 var cont = ref.find('.container')
 var ul = cont.find('ul:not(:even)')

  ul.css('float', 'right')


});


$(function() {

	$('.locked').hide()
	

	$('.signin').click(function() {

	var username = $('.username').val().toLowerCase();
	var password = $('.password').val().toLowerCase();

	var user = "guest"
	var pass = "guest159"

		if(username == user && password == pass) {
			$('.locked').delay(400).fadeIn('100');
			$('.login').fadeOut('400');
		} else {
			alert('Felaktig inloggnings information har angivits.');
			$('.username').val("")	
			$('.password').val("")
		}

	});

$('input').keypress(function (e) {
  if (e.which == 13) {
    $('.signin').click();
    return false;    //<---- Add this line
  }
});

});
