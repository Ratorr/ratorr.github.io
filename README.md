<div align="center">
  <p>
    <img src="RATORR.png"/>
  </p><p>
    <input id="search_input" style="width: 300px"/>
  </P><p>
  <button onclick="about()" style="border-style: none"><p>搜索</p></button>
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
      document.getElementById("au").play();
    }
  }
</script>
