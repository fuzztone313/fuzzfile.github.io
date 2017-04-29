$(function(){
    menu();
    overlay();
    section();
    backHome();
    
});

function menu (){
    $('.hamburger-menu, .top-nav').on('click', function() {
		$('.bar').toggleClass('animate');
	});    
}

function overlay (){
    $("#toggle, .top-nav").on('click', function(){
        $('.overlay-nav').toggleClass('active-overlay');
    });    
}

function section (){
    
    $('section').first().addClass('active-section');
    $('.border-light').first().addClass('active-list');
    
    $('.border-light, .top-nav').click(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        
        $('section').removeClass('active-section').eq(position).addClass('active-section');
    });
}

function backHome (){
    
    $('.navbar-brand').click(function(){
        $('section').removeClass('active-section').eq(0).addClass('active-section');
    });
    
}

