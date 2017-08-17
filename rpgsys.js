$("document").ready(
  function(){
    beat=1
    $("#"+beat).css("background-color","red")

    $(".next").click(function(){
      $("#"+beat).css("background-color","")
      if(beat==8){
        beat = 1
      }else{

        beat = beat+1
      }
      $("#"+beat).css("background-color","red")

    })
  }

)
