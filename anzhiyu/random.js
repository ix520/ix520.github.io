var posts=["2023/05/01/你好/","2024/05/10/移动云手机搭建网站或alist/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };