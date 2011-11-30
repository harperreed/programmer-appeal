if (window == top) {
	
	$(document).ready(function() {
      console.log('asd');
		t = $('<div style="position: fixed; height: 144px; right: 200px; bottom: 0px;" id="programmer_holder"><a href="https://wikimediafoundation.org/wiki/Donate" target="_blank"><img border="0" style="display:none;" id="programmer" src="http://dopeman.org/brandon.png"   width="106" height="144"/></a></div>');
		$('body').append(t);

		show = Math.floor(Math.random()*11);
		console.log(show);
		
		if (show > 6){
			timeout = (Math.floor(Math.random()*5)*1000);
			if (timeout == 0) timeout = 4500;
			console.log(timeout);
			setTimeout(appeal,timeout);
		}
	});
	
	function appeal(){
		pos = Math.floor((window.innerWidth-106)*Math.random()*1);
		console.log(pos);
		$('#programmer_holder').css('right',pos);
  		$('#programmer').show("slide", { direction: "down" }, 2000);
	}
    
}
