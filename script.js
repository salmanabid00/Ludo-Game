let player1 = "player1";
        let player2 = "player2";

        function editNames(){
            player1 = prompt("Change Player Name")
            player2 = prompt("Change Player Name")

            if(player1.length<1 || player2.length<1){
                alert("Please Enter Valid Name")
                return;
            }
            document.querySelector("p.player1").innerHTML = player1;
            document.querySelector("p.player2").innerHTML = player2;
        }

        function rollTheDice(){
            let diceNum1 = document.querySelector(".img1");
            let diceNum2 = document.querySelector(".img2");

            diceNum1.setAttribute("src","diceroll.gif")
            diceNum2.setAttribute("src","diceroll.gif")

            let result = document.querySelector('h1')
            setTimeout(() => {
                let randomNumber1 = Math.floor(Math.random()*6)+1;
                let randomNumber2 = Math.floor(Math.random()*6)+1;

                diceNum1.setAttribute('src','dice'+randomNumber1+'.png');
                diceNum2.setAttribute('src','dice'+randomNumber2+'.png');
                if(randomNumber1 === randomNumber2){
                    result.innerHTML = "Draw!"
                }
                else if(randomNumber1<randomNumber2){
                    result.innerHTML = (player2+" Wins!");

                }
                else{
                    result.innerHTML = (player1+" Wins!");
                }
            }, 2500);
        }