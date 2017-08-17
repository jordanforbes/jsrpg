var beat=1

//clock setup
function setClock(beat){ //highlights clock position
  $("#"+beat).css("background-color","red")
}

function measureClockSystem(){
  setClock(beat)

  $(".next").click(function(){
    $("#"+beat).css("background-color","") //clears previous number

    if(beat==8){ //advances clock but makes sure clock doesn't go over 8
      beat=1
    }else{
      beat = beat+1
    }

    setClock(beat)
    console.log(beat)
    fireBall(beat)
    thunder(beat)
  })
}

//attacks
function fireBall(beat){
  if(beat==2){
    console.log("fireball " + beat)
  }
}

interval = 5

function thunder(beat){

  function check(){

    if(beat==interval){
      console.log("thunder " + beat)

      interval= interval+5
      if(interval>8){
         interval= interval - 8
      }
      console.log("new interval "+interval)
    }

  }
  check()
}



$("document").ready(
  function(){
    measureClockSystem()
    console.log(beat)

  }

)
