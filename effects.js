$(document).ready(function(){

	$("#img1").hover(function() {
		$(this).attr("src","img/Xmas-Doebbelin-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/doebbelin-xmas-world.png");
	});
	
	$("#img2").hover(function() {
		$(this).attr("src","img/Doebbelin-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/doebbelin-mansion.png");
	});
	
	$("#img3").hover(function() {
		$(this).attr("src","img/Doebbelin-church-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/doebbelin-kirche.png");
	});
	
	$("#img4").hover(function() {
		$(this).attr("src","img/Bismarck-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/Otto-Von-Bismarck.jpg");
	});
	
	$("#img5").hover(function() {
		$(this).attr("src","img/Darnewitz-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/darnewitz.jpg");
	});
	
	$("#img6").hover(function() {
		$(this).attr("src","img/Tornau-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/tornau.jpg");
	});
	
	$("#img7").hover(function() {
		$(this).attr("src","img/Stendal-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/stadtsee.jpg");
	});
	
	$("#img8").hover(function() {
		$(this).attr("src","img/Steinfeld-PostCard-back.png");
			}, function() {
		$(this).attr("src","img/steinfeld.jpg");
	});
	
	
	( function( $ ) {
	
	$.fn.hoverfold = function( args ) {

		this.each( function() {
		
			$( this ).children( '.view' ).each( function() {
			
				var $item 	= $( this ),
					img		= $item.children( 'img' ).attr( 'src' ),
					struct	= '<div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
									struct	+='<div class="slice s5">';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div>';
					
				var $struct = $( struct );
				
				$item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
				
			} );
			
		});

	};

} )( jQuery );
	
});