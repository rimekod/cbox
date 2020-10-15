const CBOX = {
  create: function(text, settings = {}){
      /* 
          settings = { (Example)
              animation: "right 500",
              delay: 3000,
              boxWidth:"350px",
              boxBackground: "#202020",
              contentColor: "#fff",
              firstButtonDisplay: true,
              secondButtonDisplay: true,
              firstButtonText: "Onayla",
              secondButtonText: "Reddet",
              firstButtonBackground: "#4692f0",
              secondButtonBackground: "transparent",
              firstButtonTextColor: "#fff",
              secondButtonTextColor: "#fff"
          }
      */
      if(!settings.animation){
        var from = "right";
        var ms = 400;
      }else{
        var anim = settings.animation.split(" ");
        var from = anim[0];
        var ms = parseInt(anim[1]);
      }

      if(!settings.delay){
        var delay = 100;
      }else{
        var delay = settings.delay;
      }

      document.body.style.position = "relative";
      document.body.style.overflowX = "hidden";

      document.body.innerHTML = document.body.innerHTML + 
      `
            <div id="cbox" class="box">
            <span>`+text+`</span>
            <div class="buttons">
            `+(settings.firstButtonDisplay != false ? (`<a id="firstButton" class="accept">`+(!settings.firstButtonText ? "Accept" : settings.firstButtonText)+`</a>`) : "")+`
            `+(settings.secondButtonDisplay != false ? (`<a id="secondButton" class="close">`+(!settings.secondButtonText ? "Close" : settings.secondButtonText)+`</a>`) : "")+`
            </div>
            
            </div>` + `
            <style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                  a {
                    cursor:pointer;
                  }
                  #cbox {
                    font-family: PT Sans;
                    font-weight: 400;
                    width:`+(!settings.boxWidth ? 'auto' : settings.boxWidth)+`;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 0px 3px 15px rgba(0,0,0,.3);
                    position: fixed;
                    bottom:5vh;
                    border-radius:5px;
                    right:3vw;
                    background: `+(!settings.boxBackground ? '#f5f6f9' : settings.boxBackground)+`;
                    padding:0px 15px;
                    animation: cbox `+ms+`ms ease-in-out 1;
                  }
                  @keyframes cbox {
                    0% {
                      `+(from == "right" ? "right:-500px;" : "bottom:-300px;" )+`
                    }
                    100% {
                      `+(from == "right" ? "right:30px;" : "bottom:30px;" )+`
                    }
                  }
                  #cbox span {
                    text-align: center;
                    margin-bottom: 15px;
                    max-width:90%;
                    margin-top:20px;
                    color: `+(!settings.contentColor ? '#000' : settings.contentColor)+`;
                  }
                  #cbox .buttons {
                    height:40px;
                    display: `+(settings.secondButtonDisplay == false && settings.firstButtonDisplay == false ? 'none' : 'flex')+`;
                    flex-direction:`+(settings.secondButtonDisplay == false || settings.firstButtonDisplay == false ? 'column' : 'row')+`;
                    justify-content: `+(settings.secondButtonDisplay == false || settings.firstButtonDisplay == false ? 'stretch' : 'space-between')+`;
                    margin:15px;
                    width:100%;
                    overflow:hidden;
                  }
                  #cbox .buttons a:hover {
                    opacity:.9;
                  }
                  #cbox a.accept {
                    color: `+(!settings.firstButtonTextColor ? '#fff' : settings.firstButtonTextColor)+`;
                    background:`+(!settings.firstButtonBackground ? '#00d68f' : settings.firstButtonBackground)+`;
                    padding:10px 30px;
                    text-decoration: none;
                    box-sizing:border-box;
                    margin-right: 0px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border-radius:3px;
                    transition:.2s all;
                    width:`+(settings.secondButtonDisplay == false || settings.firstButtonDisplay == false ? '100%' : '48%')+`;
                  }
          
                  #cbox a.close {
                    color: `+(!settings.secondButtonTextColor ? '#fff' : settings.secondButtonTextColor)+`;
                    background:`+(!settings.secondButtonBackground ? 'indianred' : settings.secondButtonBackground)+`;
                    padding:10px 30px;
                    text-decoration: none;
                    box-sizing:border-box;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border-radius:3px;
                    transition:.2s all;
                    width: `+(settings.secondButtonDisplay == false || settings.firstButtonDisplay == false ? '100%' : '48%')+`;
                  }
                  @media only screen and (max-width:565px){
                    #cbox {
                      margin-left: auto;
                      margin-right: auto;
                      left: 0;
                      right: 0;
                      bottom:20px;
                      text-align: center;
                    }
                  }
                  </style>
                `;
          ;
      function delayFnc(){
        document.getElementById("cbox").style.display = "none";
        function delay2(){
          setTimeout(() => {
            document.getElementById("cbox").style.display = "flex";
          }, delay);
        }
        delay2();
      }
      delayFnc();
  },
  firstButton: function(fnc){
    document.getElementById("firstButton").addEventListener('click', function(){
      fnc()
    })
  },
  secondButton: function(fnc){
    document.getElementById("secondButton").addEventListener('click', function(){
      fnc()
    })
  },
  hide: function(){
    document.getElementById("cbox").style.display = "none";
  }

}
