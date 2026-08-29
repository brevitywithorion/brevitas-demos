(function(){
  var h=document.querySelector("header.site"), t=document.querySelector(".nav-toggle");
  if(t&&h){ t.addEventListener("click", function(){ var o=h.classList.toggle("open"); t.setAttribute("aria-expanded", o?"true":"false"); }); }

  var looks = [
    {id:"truck", name:"Navy + orange truck"},
    {id:"editorial", name:"Cream / ink"},
    {id:"jobsite", name:"Jobsite amber"},
    {id:"white", name:"White + bolt orange"}
  ];
  var i = 0;
  try {
    var saved = localStorage.getItem("se-look");
    var found = looks.findIndex(function(l){ return l.id === saved; });
    if(found >= 0) i = found;
  } catch(e){}
  function apply(){
    document.body.setAttribute("data-theme", looks[i].id);
    var n = document.getElementById("look-name");
    if(n) n.textContent = looks[i].name;
    try { localStorage.setItem("se-look", looks[i].id); } catch(e){}
  }
  function step(d){ i = (i + d + looks.length) % looks.length; apply(); }
  var prev = document.getElementById("look-prev");
  var next = document.getElementById("look-next");
  if(prev) prev.addEventListener("click", function(){ step(-1); });
  if(next) next.addEventListener("click", function(){ step(1); });
  apply();
})();
