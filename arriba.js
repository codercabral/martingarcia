$(document).ready(function(){
 
	// $('.subir').click(function(){
	// 	$('body, html').animate({
	// 		scrollTop: '0px'
	// 	}, 4000);
	// });

	$('.form-check-input').click(function(){
			$(".form-check-input").addClass("dark-mode");
			style.setProperty('$mode', 'true');
			if(html.css("$mode")=="true"){
				
			}

			// if(body.css("display")=="none"){ //open        
			// 	body.slideDown(250);         
			// 	$(this).addClass("open");
			// }
			// else{ //close       
			// 	body.slideUp(250);
			// 	$(this).removeClass("open");  
			// }

	});


	$(window).scroll(function(){
		if( $(this).scrollTop() > 500 ){
			$('.subir').slideDown(300);
		} else {
			$('.subir').slideUp(300);
		}
	});
 
});