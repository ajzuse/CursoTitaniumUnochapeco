function Banner(){var e,n,t,a={};return a.criar=function(a,i){i="undefined"==typeof i?!0:i,e=Ti.UI.createView({top:0,left:0,width:"100%",height:"10%",backgroundColor:"#e74c3c"}),n=Ti.UI.createLabel({text:a,textAlign:"center",color:"white"}),e.add(n),i&&(t=Ti.UI.createLabel({left:0,width:"30%",text:"<",textAlign:"center",color:"white",font:{fontSize:40}}),e.add(t))},a.view=function(){return e},a.onVoltar=function(e){t.addEventListener("click",e)},a}module.exports=Banner;