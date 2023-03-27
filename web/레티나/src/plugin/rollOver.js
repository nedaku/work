$(function(){

	var imgItem = $(".gallery li, .grid-item");
	

	imgItem.hover(
		function(){
			$(this).find('img').attr("src", $(this).find('img').attr("src").replace(/_off(\.gif|\.jpg|\.png)$/, "_on$1"));
		},
		function(){
			$(this).find('img').attr("src", $(this).find('img').attr("src").replace(/_on(\.gif|\.jpg|\.png)$/, "_off$1"));
		}
	);

});