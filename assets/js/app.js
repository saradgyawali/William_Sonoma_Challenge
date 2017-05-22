$(document).ready(function() {
	$("#text").hide();
	$(".expand").click(function(){
		$("#text").slideToggle("slow")
	})


   var orgImgSrc = $(".main-img").attr("src");
   $(".product-small img").mouseover(function(){
       $(".main-img").attr("src", this.src.replace("small", "large"));
   });
    
   $(".product-small img").mouseout(function(){
       $(".main-img").attr("src", orgImgSrc);
   });
   
   $(".product-small img").click(function(){
       orgImgSrc = this.src.replace("small", "large");
   })

})