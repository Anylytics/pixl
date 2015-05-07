(function ( $ ) {
	
	$.fn.pixl = function (width, height, pixl) {

		this.empty();

		this.css( "height", height );
		this.css( "width", width );
		this.css( "text-align", "center" );
		this.css( "background-color", "grey" );
		this.css( "line-height", "0" );

		var pixlSize;
		var pixlMargin;
		var pixlSizeName = "";
		
		switch (pixl) {
			case 1:
				pixlSizeClass = "ten"
				pixlSize = 10;
				pixlMargin = 2;
				break;
			case 2:
				pixlSizeClass = "sixteen"
				pixlSize = 16;
				pixlMargin = 4;
				break;
			case 3:
				pixlSizeClass = "twenty"
				pixlSize = 20;
				pixlMargin = 4;
				break;
			case 4:
				pixlSizeClass = "forty"
				pixlSize = 40;
				pixlMargin = 8;
				break;

		}

		var divX = this.width();
		var divY = this.height();

		var pixlX = Math.floor( divX / ( pixlSize + pixlMargin * 2 ) ) ;
		var pixlY = Math.floor( divY / ( pixlSize + pixlMargin * 2 ) ) ;

		//console.log("This div is " + divX + " by " + divY + " pixels. We can fit " + pixlX + " pixels in the X direction and " + pixlY + " pixels in the Y direction" );
		
		for ( var iy = 0; iy < pixlY; iy++ ) {
			for ( var ix = 0; ix < pixlX; ix++ ) {
				this.append( "<div id='_"+ix+"_"+iy+"' class='pixl pixl-"+pixlSizeClass+"'></div>" ).hide().show('fast');
			}
		}



	};

}( jQuery ));