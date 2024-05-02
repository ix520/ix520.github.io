var posts=["2023/05/01/你好/","2024/05/02/about/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };