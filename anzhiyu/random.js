var posts=["post/20230501203519.html","post/20240510234429.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };