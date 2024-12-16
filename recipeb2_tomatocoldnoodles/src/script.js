// $(document).ready(function(){
//   $('.button-toggle').click(function(e){
//     e.preventDefault();
//     $('.navbar-menu').toggleClass('active');
//   });
// });


document.getElementById("target").addEventListener("click", function() {
    // 更新訊息顯示為"恭喜你，找到了！"
    document.getElementById("text").innerText = "　恭喜你，找到食材了！ (點擊查看小知識)";
  document.getElementById("text").style.color = "rgba(233, 189, 83)";
    
    // 改變找到的物品的樣式
//     this.style.border = "2px solid rgba(250, 138, 90, 1)";

//     this.style.boxShadow = "0 0 8px 0 rgba(250, 138, 90, 0.8), inset 0 0 8px 0 rgba(250, 138, 90, 0.8)";
    
    this.style.background = "rgba(232, 255, 89, 0.5)";
  
    // this.style.pointerEvents = "none"; // 防止再次點擊
});

document.getElementById("text").addEventListener("click", function() {
  
    // 更新訊息顯示為"！"
  document.getElementById("text").innerHTML = '<img src="https://images.unsplash.com/photo-1536250748881-25d8cc4a285e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="圖片描述">'; 
  document.getElementById("text").innerText = "　運動前後，可以吃番茄提升表現或是減緩疲勞~";
  document.getElementById("text").style.color = "rgba(60, 64, 64)";
   
  
});


document.getElementById("foodinfo").addEventListener("click", function() {
  var svgContainer = document.getElementById("svgContainer");
  if (svgContainer.style.display === "none") {
    svgContainer.style.display = "block"; // 顯示 SVG
  } else {
    svgContainer.style.display = "none"; // 隱藏 SVG
  }
});