# Ratorr's ORR
<div align="center">
  <p>
    <input id="search_input"/>
  </P><p>
    <button onclick="about()">在Ratorr中搜索</button>
  </p><p>
    <textarea id="result" width="300" height="400"></textarea>
  </p>
</div>
<script>
  var lib={"orr":"神奇的东西..."};
  function about(){
    document.getElementById("result").innerHTML=lib[document.getElementById("search_input").value];
  }
</script>
