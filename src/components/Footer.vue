<template>
  <div class="footer-box">
    <div class="footer">
      <div class="top">合作伙伴</div>
      <!-- <img class="logo" src="../assets/jslogo.png" /> -->
      <div class="detail">
        <div class="left">
          <div class="title">关于稷生</div>
          <div class="text">公司介绍</div>
          <div class="text">公司介绍</div>
          <div class="text">公司介绍</div>
          <div class="text">公司介绍</div>
        </div>
        <div class="center">
          <div class="title">热门推荐</div>
          <div class="text-list">
            <div class="text">微信商城</div>
            <div class="text">免费网点模板</div>
            <div class="text">微信商城</div>
            <div class="text">小程序模板</div>
            <div class="text">微信商城</div>
            <div class="text">微信商城</div>
            <div class="text">免费网点模板</div>
            <div class="text">微信商城</div>
            <div class="text">小程序模板</div>
            <div class="text">微信商城</div>
          </div>
        </div>
        <div class="right">
          <div class="title">友情链接</div>
          <div class="text-list">
            <div class="text">微信商城</div>
            <div class="text">免费网点模板</div>
            <div class="text">微信商城</div>
            <div class="text">小程序模板</div>
            <div class="text">微信商城</div>
            <div class="text">微信商城</div>
            <div class="text">免费网点模板</div>
            <div class="text">微信商城</div>
            <div class="text">小程序模板</div>
            <div class="text">微信商城</div>
          </div>
        </div>
        <div class="weix">
          <div class="title">关注我们</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "FooterPage",
};
</script>

<style lang="scss" scoped>
.footer-box {
  width: 100%;
  height: auto;
  background: #282828;
  //margin-top: 100px;

  .footer {
    width: 70%;
    margin: auto;
    padding: 30px 0;
    .top {
      color: #878a82;
      margin-top: 10px;
    }
    .logo {
      width: 100%;
    }
    .detail {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .left {
        width: 90px;
        line-height: 35px;
        .title {
          color: #878a82;
        }
        .text {
          color: #5d5d5d;
        }
      }
      .center {
        width: 330px;
        line-height: 35px;
        .title {
          color: #878a82;
        }
        .text-list {
          color: #5d5d5d;
          display: grid;
          grid-template-columns: repeat(3, 33.3%);
          .text {
          }
        }
      }
      .right {
        width: 330px;
        line-height: 35px;
        .title {
          color: #878a82;
        }
        .text-list {
          color: #5d5d5d;
          display: grid;
          grid-template-columns: repeat(3, 33.3%);
          .text {
          }
        }
      }
    }
  }
}
</style>
