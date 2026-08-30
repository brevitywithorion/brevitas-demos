(function(){
  var skins = ["navy","amber","snow","slate"];
  var si = -1;
  try {
    var ss = localStorage.getItem("se-skin");
    if(!ss){
      var old = localStorage.getItem("se-look");
      if(old === "jobsite") ss = "amber";
      else if(old === "white") ss = "snow";
    }
    var f = skins.indexOf(ss);
    if(f >= 0) si = f;
  } catch(e){}

  function apply(){
    if(si < 0) return;
    document.body.setAttribute("data-skin", skins[si]);
    document.querySelectorAll(".demo-bar .swatch").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-skin") === skins[si] ? "true" : "false");
    });
    try { localStorage.setItem("se-skin", skins[si]); } catch(e){}
  }

  document.querySelectorAll(".demo-bar .swatch").forEach(function(b){
    b.addEventListener("click", function(){
      var id = b.getAttribute("data-skin");
      var f = skins.indexOf(id);
      if(f >= 0){ si = f; apply(); }
    });
  });
  apply();
})();
