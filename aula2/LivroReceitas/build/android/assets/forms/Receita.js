function Receita(){function e(e){var a=require("../forms/DescricaoReceita")();a.criar(e),t.addView(a.view());var i=require("../forms/Ingredientes")();i.criar(e),t.addView(i.view())}var a,i,t,r={};return r.criar=function(r,o){a=criarJanela(),i=require("../components/Banner")(),i.criar(o),t=Ti.UI.createScrollableView({top:"10%",height:"90%",width:"100%"}),a.add(i.view()),a.add(t),Ti.App.addEventListener("FecharJanelaReceita",function(){a.close()}),i.onVoltar(function(){a.close()}),e(),a.open()},r}module.exports=Receita;