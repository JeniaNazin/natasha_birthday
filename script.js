let allAudios = document.querySelectorAll( 'audio' );

allAudios.forEach( elem => {
  elem.addEventListener( 'play', function( e ) {
    allAudios.forEach( audio => {
      if( audio !== e.target ) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  });
});