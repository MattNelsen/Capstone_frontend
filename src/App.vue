<template>
  <div id="app">
    <div class="about">
      <h1>Appy Hour</h1>
    </div>
    <header id="header">
      <nav id="nav">
        <ul>
          <li class="current"><a href="index.html">Home</a></li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Neighborhoods</a>
          </li>
          <li>
            <a href="#">Bars</a>
          </li>
        </ul>
      </nav>
      <!-- ... -->
    </header>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYpY_4ygW5LwbCx9l0pchLCrG5oOAhK3eSmFDkFcCN6Ikk-nu&s"
      alt=""
    />
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
  width: 100%;
}
</style>
