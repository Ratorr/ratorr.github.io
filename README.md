<div align="center">
  <p><img src="RATTOR.png"/></p>
  <p><h2>寻着你想要的工具...</h2></p>
  <p><input style="width:350px" id="search"/></p>
  <p><button id="go" onclick="find()">在工具箱里搜索</button></p>
</div>
<p><div class="show" id="shower"/></p>
<audio id="au"/>
<script src="Script/tools_text.js">
  function find()
  {
    foreach(a in tools_text){
      if(a.indexOf("document.getElementById("search").value!=-1){
        document.getElementById("shower").innerHTML+="<h3>"+a+"</h3>\n"+tools_intro[a]+"\n"; 
      }
    }
  }
</script>
