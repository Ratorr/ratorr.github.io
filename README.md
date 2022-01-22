<div align="center">
  <p>
    <img src="RATORR.png"/>
  </p><p>
    <input id="search_input"/>
  </P><p>
    <button onclick="about()">在Ratorr中搜索</button>
  </p><p>
    <div id="result"/>
  </p>
</div>
<audio id="au"/>
<script>
  var lib={"orr":"神奇的东西...","黑色收音机":"丢了我的黑色收音机，我感到很沮丧，因此写下了这首歌..."};
  function about(){
    document.getElementById("result").innerHTML=lib[document.getElementById("search_input").value];
    if(document.getElementById("search_input").value=="黑色收音机"){
      document.getElementById("au").setAttribute("src","Music/黑色收音机.mp3");
      document.getElementById("au").setAttribute("autoplay","autoplay");
    }
  }
</script>
