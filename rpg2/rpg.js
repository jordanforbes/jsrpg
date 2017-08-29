function char(side,hp,atk,status,alive){
  this.side;
  this.hp=hp;
  this.atk=atk;
  this.status=status;
  this.alive=alive;
}

function charSetUp(){
  player= new char("player",10,5,"alive",1)
  enemy= new char("enemy",8,2,"alive",1)

}

//turn change
  //turn tracker, 0 is player, 1 is enemy
  turn=0

  //turn markers
function turnCheck(turn){

      if(turn == 0){
        $(".playerbox").css("border","3px solid red")
        $(".playerbox").css("background-color","#E6B0AA")
        $(".enemybox").css("border","3px dashed gray")
        $(".enemybox").css("background-color","white")

        $(".attack").css("display","block")
        $(".cantattack").css("display","none")

      }else if(turn == 1){
        $(".enemybox").css("border","3px solid red")
        $(".enemybox").css("background-color","#E6B0AA")
        $(".playerbox").css("border","3px dashed gray")
        $(".playerbox").css("background-color","white")

        $(".attack").css("display","none")
        $(".cantattack").css("display","block")
      }
}
  //turn change function
function turnSwitch(x){
  var combatants=["player","enemy"]
  $(".currentturn").text(" "+combatants[x])
  turnCheck(turn)
}


//battle

//playerattacks
function attack(){

      enemy.hp -=player.atk

      if(enemy.hp>0 && player.status =="alive"){
        $(".log").append("<p>player attacks for "+player.atk+" damage!</p>")
        $(".enemyhp").text(enemy.hp)
      }else if(player.alive ==1){
        enemy.hp=0
        enemy.status="dead"
        enemy.alive =0
        // console.log(enemy.alive + " "+enemy.status)
        $(".enemyhp").text(enemy.hp)
        $(".enemystatus").text(enemy.status)
        $(".log").append("<p>player attacks for "+player.atk+" damage! you killed him!</p>")
      }

      if(enemy.status=="alive"){
        turn +=1
        turnSwitch(turn)
        console.log(turn)
      }
    //is enemy alive?
        console.log("enemy "+enemy.alive + " "+enemy.status)
}

//enemyattacks
function enemyAttack(){

        // $(".enemybox").css("border","1px dashed red")
        // $(".playerbox").css("border","1px dashed black")

        player.hp -= enemy.atk

        if(player.hp>0 && enemy.hp>0){
          $(".log").append("<p>enemy attacks for "+enemy.atk+" damage!</p>")
          $(".playerhp").text(player.hp)

        }else if(player.hp<0){

          player.alive =0
          console.log(player.alive +" "+player.status)
          player.hp=0
          player.status="dead"
          $(".playerstatus").text(player.status)
          $(".playerhp").text(player.hp)
          $(".log").append("<p>enemy attacks for "+enemy.atk+" damage! You died!")
        }

        if(player.status=="alive"){
          turn -=1
          turnSwitch(turn)
          console.log(turn)

        }

        clearTimeout(timeVar)

        //is player alive?
        console.log("player "+player.alive + " "+player.status)
}

//reset
function reset(){
    player= new char(10,5,"alive")

    enemy= new char(8,4,"alive")
}

// var timeVar=
//   setInterval(enemyAttack,1000)

function timer(){
    enemyAttack()
    clearTimeout(timeVar)
}

//gameloop
$('document').ready(
  function(){
    //set up character stats
    charSetUp()
    turnCheck(turn)
    $(".playerhp").text(player.hp)
    $(".playeratk").text(player.atk)
    $(".playerstatus").text(player.status)

    $(".enemyhp").text(enemy.hp)
    $(".enemyatk").text(enemy.atk)
    $(".enemystatus").text(enemy.status)

    //attack button
    $(".attack").click(function(){
      attack()
      if(enemy.status =="alive"){
        timeVar=
          setInterval(enemyAttack,1000)
          // clearTimeout(timeVar)

      }
    })

    //reset button
    $(".reset").click(function(){

      //reset characters
      charSetUp()

      //set the turn to 0
      turn=0

      //check what turn it is
      turnCheck(turn)

      // player status
      $(".playerhp").text(player.hp)
      $(".playeratk").text(player.atk)
      $(".playerstatus").text(player.status)

      // enemy status
      $(".enemyhp").text(enemy.hp)
      $(".enemyatk").text(enemy.atk)
      $(".enemystatus").text(enemy.status)


      //log of the battle
      $(".log").text("")
    })

  }
)
