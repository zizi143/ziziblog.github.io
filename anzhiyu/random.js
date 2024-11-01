var posts=["2024/11/01/hello-world/","2024/11/01/【爱欲经济学】超性别化——美学享乐的自给自足，但并非自恋/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };