var beat=1



//attacks

function attack(name, startInterval, currentInterval, damage){ //attack constructor
  this.name= name;
  this.startInterval= startInterval;
  this.currentInterval = currentInterval;
  this.damage = damage;
}

moveSet=[
  iceMag = new attack("Ice", 7, 7, 7),
  thunderMag = new attack("Thunder", 5,5,5),
  fireMag = new attack("FireBall",3,3,3),
  windMag = new attack("Wind",4,4,4)
  ]


function move(attack){ //use move

  for(i=1;i<=8;i++){
    if(i == attack.currentInterval){
    attack.currentInterval = attack.currentInterval + attack.startInterval

    if(attack.currentInterval>8){
        attack.currentInterval = attack.currentInterval -8
      }
      $("#"+i).text("-"+attack.name + " damage: "+attack.damage +", next beat: "+attack.currentInterval)
    }
    }

}

//clock setup
function setClock(beat){ //highlights clock position
  $("#"+beat).css("background-color","red")
}

function measureClockSystem(){
  setClock(beat)

  $(".next").click(function(){
    $("#"+beat).css("background-color","") //clears previous number

    if(beat==8){ //advances clock but makes sure clock doesn't go over 8

      $(".tick").text("-") //clears measure

      beat=1

      loadedMoves()

    }else{
      beat = beat+1
    }

    setClock(beat)
    console.log(beat)

  })
}

// moveSet= [thunderMag,fireMag,iceMag]
function loadedMoves(){

  for(j=0;j<moveSet.length;j++){ //cycles through moveset
    move(moveSet[j])

  }
  // i=0
  // i=1
  // move(moveSet[i])
  //
  // i=2
  // move(moveSet[i])




}

$("document").ready(
  function(){
    measureClockSystem()
    console.log(beat)

    $(".start").click(function(){ //turns start button into next button
      loadedMoves()

      $(".start").css("display","none")
      $(".next").css("display","block")
    })

  }

)
