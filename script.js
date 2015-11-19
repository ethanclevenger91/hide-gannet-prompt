if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload=releasetheKraken;
    document.body.appendChild(script);
}
else {
    releasetheKraken();
}
function releasetheKraken() {
  jQuery('[class*="prompt-iframe-container"]').remove();
  jQuery('body').scrollTop(jQuery('body').scrollTop()+20);
}
