<template>
  <div id="app">
    <span class="badge badge-warning">Must be 21+ years of age to view this website</span>
    <div class="about">
      <h1>Appy Hour</h1>
    </div>
    <header id="header">
      <nav id="nav">
        <ul>
          <li class="current"><a href="/home">Home</a></li>
          <li></li>
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li><a href="/login">Login</a></li>
          <li><a href="/logout">Logout</a></li>
          <li>
            <a href="/about">About Me</a>
          </li>

          <li>
            <a href="/neighborhoods">Neighborhoods</a>
          </li>
          <li>
            <a href="/bars">Bars</a>
          </li>
        </ul>
      </nav>

      <!-- ... -->
    </header>
    <!--     <img src="https://media2.fdncms.com/stranger/imager/u/large/41650363/bpp_2019_011mag.jpg" style="width:800px" /> -->
    <!--/header-->

    <router-view />

    <footer id="footer" class="midnight-blue">
      <!-- ... -->
    </footer>
    <!--/#footer-->
  </div>
</template>

<style>
h1 {
  color: tan;
  font-family: Arial Narrow, Arial, sans-serif;
  font-stretch: expanded;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
