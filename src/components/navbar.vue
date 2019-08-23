<template>
  <div style="width:100%">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">HOMEPLACE</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <span>活動公告</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span>交通方式</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span>周邊景點</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span>關於我們</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style>
.hometag {
  font: Bold 20px/23px Arial Rounded MT;
}
.nav-link >span {
  font: Bold 18px/12px Arial Rounded MT;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  margin-right: 65px;
}
</style>