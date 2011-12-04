var debug = false;
function dlog(s) {
  if( debug )
    console.log( s );
}

if (window == top) {
    bar = 7;
    dlog('dirty');
    t = $('<div style="position: fixed; height: 144px; right: 200px; bottom: 0px;" id="programmer_holder"><a href="http://gg.ly/t3xhIY" target="_blank"><img border="0" style="display:none;" id="programmer" src="https://harperreed.org/brandon.png"   width="106" height="144"/></a></div>');
    $('body').append(t);

    show = Math.floor(Math.random()*11);
    dlog("Brandon likelyhood for display (must be above "+bar+"): "+show);
    
    if (show > bar){
        timeout = (Math.floor(Math.random()*5)*1000);
        if (timeout == 0) timeout = 4500;
        dlog("Brandon delay: " + timeout);
        setTimeout(appeal,timeout);
    }else{
      dlog('sad day. no brandon');
    }
	
	function appeal(){
		pos = Math.floor((window.innerWidth-106)*Math.random()*1);
		dlog("Brandon position: " + pos);
		$('#programmer_holder').css('right',pos);
  		$('#programmer').show("slide", { direction: "down" }, 2000);
	}
    
}
