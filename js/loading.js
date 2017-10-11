// $(window).load(function() {
//     $('#loadScreen').hide();
//     $('#picMenu').show();
// });

//for demoing loader
$(window).load(function() {
    setTimeout('endLoader()', 4000);
});

function endLoader(){
	$('#loadScreen').hide();
	$('#picMenu').show();
}
