(function(){
  var h=document.querySelector("header.site"), t=document.querySelector(".nav-toggle");
  if(t&&h){ t.addEventListener("click", function(){ var o=h.classList.toggle("open"); t.setAttribute("aria-expanded", o?"true":"false"); }); }

  /* Reusable demo bar: copy this config + HTML onto other Brevitas demos. */
  var layouts = [
    {id:"truck", name:"Van beside copy"},
    {id:"billboard", name:"Van on top"},
    {id:"jobsite", name:"Work ticket"},
    {id:"storefront", name:"Shop directory"}
  ];
  var skins = [
    {id:"navy", name:"Navy + orange"},
    {id:"amber", name:"Charcoal + amber"},
    {id:"snow", name:"White + orange"},
    {id:"slate", name:"Slate + blue"}
  ];
  var legacy = {truck:"truck", editorial:"truck", jobsite:"jobsite", white:"storefront"};
  var li = 0, si = 0;
  try {
    var sl = localStorage.getItem("se-layout") || legacy[localStorage.getItem("se-look")] || "";
    var f = layouts.findIndex(function(l){ return l.id === sl; });
    if(f >= 0) li = f;
    var ss = localStorage.getItem("se-skin");
    if(!ss){
      var old = localStorage.getItem("se-look");
      ss = old === "jobsite" ? "amber" : old === "white" ? "snow" : "navy";
    }
    var fs = skins.findIndex(function(s){ return s.id === ss; });
    if(fs >= 0) si = fs;
  } catch(e){}

  function apply(){
    document.body.setAttribute("data-layout", layouts[li].id);
    document.body.setAttribute("data-skin", skins[si].id);
    var n = document.getElementById("layout-name");
    if(n) n.textContent = layouts[li].name;
    document.querySelectorAll(".demo-bar .swatch").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-skin") === skins[si].id ? "true" : "false");
    });
    try {
      localStorage.setItem("se-layout", layouts[li].id);
      localStorage.setItem("se-skin", skins[si].id);
    } catch(e){}
  }
  function step(d){ li = (li + d + layouts.length) % layouts.length; apply(); }
  var prev = document.getElementById("layout-prev");
  var next = document.getElementById("layout-next");
  if(prev) prev.addEventListener("click", function(){ step(-1); });
  if(next) next.addEventListener("click", function(){ step(1); });
  document.querySelectorAll(".demo-bar .swatch").forEach(function(b){
    b.addEventListener("click", function(){
      var id = b.getAttribute("data-skin");
      var f = skins.findIndex(function(s){ return s.id === id; });
      if(f >= 0){ si = f; apply(); }
    });
  });
  apply();
})();
