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

  for(i=1;i<=8;i++){//determines next beat
    if(i == attack.currentInterval){ //does the attack's current interval match the beat
      attack.currentInterval += attack.startInterval //if yes then move the interval up

      if(attack.currentInterval>8){//makes sure next beat is within 8
        attack.currentInterval -=8
      }

    $("#"+i).append("<span class='attackname'>"+attack.name + "</span> damage: "+attack.damage +", next beat: "+attack.currentInterval+"/ ")
    console.log("move "+i+" "+ attack.damage+" dam")
    }
  }
}

// moveSet= [thunderMag,fireMag,iceMag]
function loadedMoves(){
  for(j=0;j<moveSet.length;j++){ //cycles through moveset
    move(moveSet[j])
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
  })
}



//game loop
$("document").ready(
  function(){
    measureClockSystem()

    $(".start").click(function(){ //turns start button into next button
      // var beat=1
      loadedMoves()

      $(".start").css("display","none")
      $(".next").css("display","block")
    })

  }

)

//todo

//swap this "append" system for one that involves pushing the attacks to arrays for each turn. at which point move priority can be determined
//make it so that you can decide which move to use instead of just automatically using all of the moves as frequently as possible.
