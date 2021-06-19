( function( $ ) {

	const $wheel = $( '.wheel .wheel__inner' );
	const items = 28;
	const diameter = $wheel.height();
	const radius = diameter / 2;
	const angle = 360 / items;
	const circumference = Math.PI * diameter;
	const height = circumference / items;

	$wheel.css( {
		'transform-origin': `50% calc(50% + ${height / 2}px)`,
		'margin-top': `-${height}px`
	} );

	for ( let i = 0; i < items; i++ ) {
		var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

		$( '<div>', {
			class: 'wheel__segment'
		} ).css( {
			'transform': transform,
			'height': height,
		} ).html( `<span>Item ${ i }</span>` ).appendTo( $wheel );

	}

} )( jQuery );
