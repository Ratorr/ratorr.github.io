# Ratorr's ORR
<input id="search_input"/>
<button onclick="about()">在Ratorr中搜索</button><br/>
<textarea id="result" width="300" height="400"></textarea>
<script>
  var lib={"orr":"神奇的东西..."};
  function about(){
    document.getElementById("result").innerHTML=lib[document.getElementById("search_input").value];
  }
</script>
