$(document).ready(function(){
	$('.fullwork-btn').on("click", function(e){
		e.preventDefault();
		$('.work-maintext').toggleClass('show-work');
		$(this).toggleClass('wrk-toggle');
		if($(this).hasClass('wrk-toggle'))
		{
			$('p.showproj').addClass('hidden').delay(400).queue(function(nxt) {
			  $(this).next().removeClass('hidden');
			  nxt();
			});
		}
		else
		{
			$('p.hideproj').addClass('hidden').delay(400).queue(function(nxt) {
			  $(this).prev().removeClass('hidden');
			  nxt();
			});
		}
	});
});