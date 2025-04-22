<template>
  <div>

    <div class="banner-box">
      <div class="imga">
        <img class="banner" src="../../assets/livefive/banner.jpg"/>
      </div>
      <div class="img-text">
        <div class="text-inner">
          <h2 class="text1">资源共享</h2>
          <p></p>
          <h4 class="text2">
            通过平台使企业能够高效利用闲置设备、人才和数据，降低成本<br/>提高资源利用率，促进创新与合作。
          </h4>
        </div>
      </div>
    </div>
    <div class="floor_1">
      <div class="title">资源共享</div>
      <ul class="w1180">
        <li>
          <i><b>01</b>资源整合与共享</i>
          <div class="tit"><em>整合各方资源</em>实现资源的最大化利用。</div>
          <dl>
            <dd>平台共享</dd>
            <dd>资源库</dd>
            <dd>数据机制</dd>
            <dd>共同开发</dd>
          </dl>

        </li>
        <li>
          <i><b>02</b>市场拓展合作</i>
          <div class="tit"><em>联合各方力量</em>共同开拓更广阔的市场</div>
          <dl class="dl2">
            <dd>联合营销</dd>
            <dd>行业展会</dd>
            <dd>社媒推广</dd>
            <dd>跨品牌</dd>
          </dl>

        </li>
        <li>
          <i><b>03</b>技术合作创新</i>
          <div class="tit"><em>提升创新能力</em>携手推进技术研发</div>
          <dl class="dl3">
            <dd>共同研发</dd>
            <dd>API共享</dd>
            <dd>技术培训</dd>
            <dd>技术联盟</dd>
          </dl>

        </li>
        <li>
          <i><b>04</b>经验交流平台</i>
          <div class="tit"><em>搭建交流平台</em>分享成功经验与教训</div>
          <dl class="dl4">
            <dd>分享会</dd>
            <dd>知识管理</dd>
            <dd>创新案例</dd>
            <dd>合作培训</dd>
          </dl>

        </li>
      </ul>
    </div>
    <div class="part02-kj">
      <div class="part02">
        <h3>企业为什么要构建资源共享？</h3>
        <div class="tongdian clearfix">
          <ul>
            <li v-for="item in mainData3" :key="item.id" class="p01">
              <p class="t01">{{ item.name }}</p>
              <p class="t02">{{ item.text }}</p>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="product_list">
      <ul class="product_detail_list">
        <li style="background: #f5f7fa">
          <div class="w1440 clearfix">
            <div class="left">
              <div class="img">
                <img alt="报表共享"
                     src="../../assets/livefive/cover2.png">
              </div>
            </div>
            <div class="right">
              <div class="title fnt_30">
                报表共享<br>
              </div>
              <div class="des fnt_16">
                通过报表集中编制，推进集团标准化进程，打通报表与总账端及业务端的数据通道，实现报表编报效率飞跃的同时，让数据实现追溯<br>
              </div>
              <div class="txt fnt_16 clearfix">
                <p>批量编报</p>
                <p>批量上报</p>
                <p>批量审批</p>
              </div>
              <div class="product_detail_link">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="w1440 clearfix">

            <div class="right">
              <div class="title fnt_30">
                总账共享<br>
              </div>
              <div class="des fnt_16">
                以财务业务流程处理为基础，以优化组织结构、规范流程、提升流程效率、降低运营成本或创造价值为目的，以市场视角为内外部客户提供专业化生产服务的分布式管理<br>
              </div>
              <div class="txt fnt_16 clearfix">
                <p>高效准确的记账、对账和结账工作</p>
                <p>记账中心</p>
                <p>对账中心</p>
                <p>结账中心</p>
              </div>
              <div class="product_detail_link" data-wow-delay="0.3s">
              </div>
            </div>
            <div class="left">
              <div class="img">
                <img alt="总账共享"
                     src="../../assets/livefive/cover1.png">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cloud-intro">
      <div class="w1440">
        <div class="s-title">
          <h2 class="fnt_32">共创未来</h2>
          <h2 class="fnt_32">资源共享助力成功</h2>
          <p class="fnt_16 txt">
            <br>
          </p>
        </div>
        <div class="ctn-list">
          <div class="tu">
            <img alt="" src="../../assets/livefive/cover3.png">
          </div>
          <ul>
            <li>
              <h2 class="fnt_20">资源互通，开启合作篇章</h2>
              <p class="fnt_16">
                引入技术，推动组织内部创新和能力提升，实现跨行业<br>
              </p>
            </li>
            <li>
              <h2 class="fnt_20">提供支持，激发潜力</h2>
              <p class="fnt_16">
                提供必要的支持，能增强合作伙伴的信任感，帮助其成长 <br>
              </p>
            </li>
            <li>
              <h2 class="fnt_20">确保高效的资源配置与利用</h2>
              <p class="fnt_16">
                优化资源配置，确保各项资源能够得到高效的利用，及时作出调整 <br>
              </p>
            </li>
            <li>
              <h2 class="fnt_20">建立互利共赢的合作机制</h2>
              <p class="fnt_16">
                建立资源共享的良性循环，在实现目标的同时获得更多的价值 <br>
              </p>
            </li>
            <li>
              <h2 class="fnt_20">增强合作伙伴的综合能力</h2>
              <p class="fnt_16">
                通过知识、技术等支持，提高核心竞争力，实现长远发展 <br>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="num_box numCount w1440">
      <div class="wow  animated w1440 animated" data-wow-delay="0.1s"
           style="visibility: visible; animation-delay: 0.1s;">
        <div class="num fnt_70">
          <span id="mumC1" class="numCX">5000</span>
          +
        </div>
        <p class="fnt_20">生态伙伴</p>
      </div>
      <div class="dashed"></div>
      <div class="wow  animated w1440 animated"
           style="visibility: visible; animation-delay: 0.1s;">
        <div class="num fnt_70">
          <span id="mumC2" class="numCX">743</span>
          万+
        </div>
        <p class="fnt_20">客户数</p>
      </div>
      <div class="dashed"></div>
      <div class="wow  animated w1440 animated"
           style="visibility: visible; animation-delay: 0.1s;">
        <div class="num fnt_70">
          <span id="mumC3" class="numCX">170</span>
          +
        </div>
        <p class="fnt_20">国家地区数</p>
      </div>
      <div class="dashed"></div>
    </div>
    <div class="manage cloud-intro">
      <div class="w1440">
        <h2 class="fnt_32">资源共享四大权益</h2>
        <div class="EBC-intro-list">
          <ul class="clearfix">
            <li v-for="(item,index) in mainData2" :key="index">
              <div class="icon"><img
                  :src="item.img"
                  alt="市场营销">
              </div>
              <div class="txt">
                <h3 class="fnt_20"><b>{{ item.title }}</b></h3>
                <p>{{ item.text }}</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="pages-yl-defult pages-qydongcha">
      <div class="w1442">
        <div class="title">
          <h2 class="fnt_42">更多前沿洞察</h2>
        </div>
        <div class="cont">
          <div class="swiper-dongcha">
            <ul class="swiper-wrapper">
              <li v-for="(item,index) in mainData1" :key="index" class="swiper-slide">
                <div class="in-box">
                  <div class="img"><img :src="item.img" alt=""></div>
                  <div class="txt">
                    <h2 class="fnt_24">{{ item.title }}<br/>{{ item.title2 }}</h2>
                    <p class="sm fnt_16">
                      {{ item.text }}</p>
                    <div class="pdf fnt_16">
                    </div>
                  </div>
                </div>
              </li>

            </ul>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveFive",
  data() {
    return {
      mainData1: [
        {
          img: require("@/assets/livefive/img_dc01.jpg"),
          title: '智能化资源共享平台的崛起',
          title2: '人工智能助力高效资源匹配',
          text: '通过智能化推荐算法，用户能够更快速、准确地找到合作伙伴，从而加速信息流通和资源的高效利用。'
        }, {
          img: require("@/assets/livefive/img_dc02.jpg"),
          title: '数据共享与隐私保护',
          title2: '并行发展的挑战与机遇',
          text: '在数据驱动的时代，资源共享不再仅仅是物理资源的交换，数据成为新的核心资源。'
        }, {
          img: require("@/assets/livefive/img_dc03.jpg"),
          title: '平台经济下',
          title2: '资源共享模式的多元化与创新',
          text: ' 平台通过打通各种资源的供需链条，促进了各类产业的互联互通，提供更广泛的资源获取渠道和服务创新'
        }, {
          img: require("@/assets/livefive/img_dc04.jpg"),
          title: '共享经济',
          title2: '在可持续发展中的新动能',
          text: '随着全球对环保和可持续发展的关注不断增加，资源共享平台开始更加注重如何实现绿色、环保的共享方式。'
        }, {
          img: require("@/assets/livefive/img_dc05.jpg"),
          title: ' 区块链技术助力',
          title2: '提升资源共享透明度与安全性',
          text: '区块链能够确保交易过程的透明性和可追溯性，为资源共享提供了更加安全、可信赖的技术支持。'
        }, {
          img: require("@/assets/livefive/img_dc06.jpg"),
          title: '社会化资源共享',
          title2: '推动社区驱动的创新与合作',
          text: '随着社会化网络的成熟，社区驱动的资源共享模式逐渐兴起。在这一模式下，个体和小型企业通过社交平台实现资源的互助和共享。'
        },
      ],
      mainData2: [
        {
          img: require("@/assets/livefive/icon1.png"),
          title: '互利共赢',
          text: '通过共享各自的优势资源，双方可以更快地达到共同目标，获得更高的回报。'
        }, {
          img: require("@/assets/livefive/icon2.png"),
          title: '技术创新',
          text: '通过共享先进的技术或创新成果，合作伙伴可以加速技术的应用与推广。'
        }, {
          img: require("@/assets/livefive/Icon3.png"),
          title: '市场拓展',
          text: '共享的资源可以帮助企业打开新的销售通路，扩大市场影响力，并提升品牌知名度和用户基础。'
        }, {
          img: require("@/assets/livefive/icon4.png"),
          title: '成本分担',
          text: '在资源共享的过程中，各方能够共享成本，从而降低单方承担的风险和压力。'
        },
      ],
      mainData3: [
        {
          id: 1,
          name: '成本不断增加',
          text: '随着企业的扩张发展，每个分子公司、成员公司都设立有财务职能部门，运营成本居高不下'
        },
        {
          id: 2,
          name: '管控难以统一',
          text: '人员技能不一、所处地域不均、团队氛围差异、工作模式不同、标准规范不一等影响集团化财务管控效率'
        },
        {
          id: 3,
          name: '数据价值难以发挥',
          text: '业务、财务、税务等未实现端到端的数据拉通，管理规范、主数据、平台不统一，数据洞察力弱'
        },
        {
          id: 4,
          name: '财务组织亟需转型',
          text: '财务人员核算与结算工作占比高，需释放一线财务人员精力，转移工作重心至业财分析、管理型财务工作'
        },

      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 600px;
  position: relative;

  .imga {
    display: inline-block;
    width: 100%;
    height: 100%;

    .banner {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .img-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);

    .text-inner {
      width: 1200px;
      margin: 0 auto;

      .text1 {
        font-size: 44px;
        color: rgb(255, 255, 255);
        line-height: 64px;
        margin-bottom: 0px;
        font-weight: bold;
      }

      .text2 {
        font-size: 24px;
        color: rgb(236, 236, 236);
        line-height: 34px;
        font-weight: 300;
        margin: 16px 0px 0px 0px;
      }
    }
  }
}

.floor_1 {
  height: auto;
  overflow: hidden;

  .title {
    text-align: center;
    padding: 60px 0 50px;
    font-size: 30px;
    font-weight: bold;
    color: #000000;

  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .w1180 {
    width: 1180px;
    margin: 0 auto;

    li:nth-child(2) {
      i {
        background-image: url('../../assets/home/fl1_2.png');
      }

      b {
        background: #f78121;
        margin-left: 32px;
      }

      .tit {
        em {
          color: #f78121;
        }
      }


      .btn-b {
        border: 1px solid #f78121;

        a {
          color: #f78121;
        }

        .btn_c {
          background: #f78121;
          color: #fff;
        }

        a {
          display: block;
          width: 50%;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: #f03737;
        }
      }

    }

    li:nth-child(3) {
      i {
        background-image: url('../../assets/home/fl1_3.png');
      }

      b {
        background: #1d79e0;
      }

      .tit em {
        color: #1d79e0;
      }

      .dl3 {
        dd:nth-child(1)::before {
          background-position: 0 -24px;
        }

        dd:nth-child(2)::before {
          background-position: -24px -24px;
        }

        dd:nth-child(3)::before {
          background-position: -47px -24px;
        }

        dd:nth-child(4)::before {
          background-position: -72px -24px;
        }
      }

      .btn-b {
        border: 1px solid #1d79e0;

        a {
          color: #1d79e0;
          display: block;
          width: 50%;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
        }

        .btn_c {
          background: #1d79e0;
          color: #fff;
        }
      }
    }

    li:nth-child(4) {
      i {
        background-image: url('../../assets/home/fl1_4.png');

        b {
          background: #0cb2c6;
          margin-left: 32px;
        }
      }

      .tit em {
        color: #0cb2c6;
      }

      .dl4 {
        dd:nth-child(1)::before {
          background-position: -94px -24px;
        }

        dd:nth-child(2)::before {
          background-position: -116px -24px;
        }

        dd:nth-child(3)::before {
          background-position: -138px -24px;
        }

        dd:nth-child(4)::before {
          background-position: -162px -24px;
          margin: 10px 4px 0;
          width: 15px;
        }
      }

      .btn-b {
        border: 1px solid #0cb2c6;

        a {
          color: #0cb2c6;
          display: block;
          width: 50%;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
        }

        .btn_c {
          background: #0cb2c6;
          color: #fff;
        }
      }
    }


    li {
      width: 265px;
      height: 378px;
      border: 1px solid #fff;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 0 16px rgba(0, 0, 0, .06);
      cursor: pointer;
      transition: 0.3s all;
      list-style: none;

      i {
        display: block;
        width: 265px;
        height: 116px;
        background: url('../../assets/home/fl1_1.png') center top no-repeat;
        line-height: 116px;
        font-size: 24px;
        color: #fff;
        font-style: normal;

        b {
          display: block;
          font-size: 14px;
          float: left;
          color: #fff;
          font-weight: bold;
          text-align: center;
          height: 25px;
          line-height: 25px;
          width: 25px;
          border-radius: 50%;
          background: #f03737;
          margin: 48px 6px 0 44px;
        }
      }

      .tit {
        text-align: center;
        font-size: 16px;
        color: #7b7b7b;
        padding: 40px 0 26px;

        em {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #f03737;
          margin-bottom: 8px;
          font-style: normal;
        }
      }

      dl {
        width: 230px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;

        dd {
          height: 34px;
          line-height: 34px;
          width: 108px;
          border: 1px solid #dcdcdc;
          border-radius: 6px;
          margin-bottom: 10px;
          font-size: 16px;
          color: #000000;
          margin-left: 5px;
        }

        dd::before {
          display: block;
          content: '';
          float: left;
          background-image: url('../../assets/home/icons.png');
          background-size: 267px;
          background-position: 0 0;
          height: 18px;
          width: 18px;
          overflow: hidden;
          margin: 10px 4px 0 10px;
        }

        dd:nth-child(2)::before {
          background-position: -24px 0;
        }

        dd:nth-child(3)::before {
          background-position: -47px 0;
        }

        dd:nth-child(4)::before {
          background-position: -72px 0;
        }
      }

      .dl2 {
        dd:nth-child(1)::before {
          background-position: -94px 0;
        }

        dd:nth-child(2)::before {
          background-position: -116px 0;
        }

        dd:nth-child(3)::before {
          background-position: -138px 0;
        }

        dd:nth-child(4)::before {
          background-position: -162px 0;
        }
      }

      .btn-b {
        width: 228px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 25px auto 0;
        border-radius: 6px;
        border: 1px solid #f03737;
        height: 34px;
        line-height: 34px;
        overflow: hidden;

        div {

          display: block;
          width: 50%;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: #f03737;

        }

        //.btn1 {
        //
        //  width: 228px;
        //  display: flex;
        //  justify-content: space-between;
        //  flex-wrap: wrap;
        //  margin: 25px auto 0;
        //  border-radius: 6px;
        //  border: 1px solid #f03737;
        //  height: 34px;
        //  line-height: 34px;
        //  overflow: hidden;
        //  text-decoration: none;
        //  cursor: pointer;
        //}

        .btn_2 {
          color: #fff;
          background: #f03737;
        }
      }
    }
  }
}

.part02-kj {
  background-color: #fff;
  padding: 50px 0 60px;

  .part02 {
    width: 1200px;
    margin: 0 auto;

    h3 {
      text-align: center;
      color: #20242b;
      font-size: 30px;
      line-height: 30px;
    }

    .tongdian {
      width: 1200px;
      margin: 40px auto 0;

      ul {
        padding: 0;
        list-style: none;
        height: 250px;

        li:last-child {
          margin-right: 0;
        }

        li {
          list-style: none;
          float: left;
          width: 240px;
          height: 270px;
          margin-right: 80px;
          margin-bottom: 40px;
          padding: 150px 0 0;
          box-sizing: border-box;
          text-align: center;

          p.t01 {
            color: #363f4e;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
            margin-bottom: 15px;
          }

          p.t02 {
            color: #737c8b;
            font-size: 15px;
            line-height: 24px;
            text-align: left;
          }
        }

        .p01 {
          background: url('../../assets/livefive/td01.png') center top no-repeat;
          background-size: 144px;
        }

        .p02 {
          background: url('../../assets/livefive/td02.png') center top no-repeat;
          background-size: 144px;
        }

        .p03 {
          background: url('../../assets/livefive/td03.png') center top no-repeat;
          background-size: 144px;
        }

        .p04 {
          background: url('../../assets/livefive/td04.png') center top no-repeat;
          background-size: 144px;
        }
      }
    }
  }
}

.product_list {
  .product_detail_list {
    margin-left: -40px;

    li:first-child {
      padding-top: 3.57%;
    }

    li:nth-child(even) .left {
      float: right !important;
    }

    li:nth-child(even) .right {
      right: auto;
      left: 0;
    }

    li {
      padding: 5.57% 0;
      list-style-type: none;
      height: 300px;

      .w1440 {
        width: 1440px;
        margin-left: auto;
        margin-right: auto;
        position: relative;

        .left {
          width: 46%;
          float: left;
          position: relative;

          img {
            max-width: 100%;
          }
        }

        .right {
          width: 50%;
          float: right;
          position: absolute;
          right: 0;
          top: 0;

          .title {
            margin-bottom: 18px;
            color: #000;
          }

          .fnt_30 {
            font-size: 30px;
          }

          .fnt_16 {
            font-size: 16px;
          }

          .des {
            line-height: 1.625em;
            color: #000;
          }

          .txt {
            margin-bottom: 32px;

            p {
              margin-top: 10px;
              position: relative;
              padding-left: 34px;
            }

            p:before {
              content: '';
              width: 16px;
              height: 12px;
              background: url('../../assets/livefive/dui.png') no-repeat;
              background-size: cover;
              position: absolute;
              left: 2px;
              top: 6px;
            }
          }
        }
      }

      .clearfix:before {
        content: '';
        display: table;
      }
    }
  }
}

.cloud-intro {
  background: #fafbfb;
  padding: 3.5vw 0 6vw;

  .w1440 {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;

    .s-title {
      text-align: center;

      h2 {
        font-weight: bold;
        color: #28293b;
        line-height: 1.3;
      }

      p {
        color: #575d6c;
        line-height: 1.8;
        width: 75%;
        margin: 0 auto;
      }

      .fnt_16 {
        font-size: 16px;
      }

      .fnt_32 {
        font-size: 32px;
      }
    }

    .ctn-list {
      position: relative;

      .tu {
        margin: 0 auto;
        width: 34.5%;

        img {
          width: 100%;
        }
      }

      li {
        position: absolute;
        width: 410px;
        list-style-type: none;

        h2 {
          color: #252b3a;
          position: relative;
          line-height: 1.3;
          font-weight: 600;
        }

        h2:before {
          content: "";
          width: 100px;
          height: 1px;
          background: #4e86e2;
          position: absolute;
          right: -120px;
          top: 35px;
        }

        h2:after {
          content: "";
          width: 1px;
          height: 30px;
          background: #4e86e2;
          position: absolute;
          right: -132px;
          top: 30px;
          transform: rotateZ(-50deg);
        }

        p {
          color: #575d6c;
          opacity: 0.7;
          line-height: 1.6;
          margin-top: 10px;
        }

        .fnt_16 {
          font-size: 16px;
        }

        .fnt_20 {
          font-size: 20px;
        }
      }

      li:first-child {
        text-align: right;
        top: 2%;

        h2 {
          color: #252b3a;
          position: relative;
          line-height: 1.3;
          font-weight: 600;
        }
      }

      li:nth-child(2) {
        bottom: 15%;
        text-align: right;

        h2:before {
          width: 80px;
          right: -100px;
          top: 40px;
        }

        h2:after {
          right: -108px;
          top: 24px;
          height: 20px;
          transform: rotateZ(50deg);
        }
      }

      li:nth-child(3) {
        top: 2%;
        right: 0;

        h2:before {
          left: -120px;
          text-align: left;
          color: #252b3a;
        }

        h2:after {
          left: -132px;
          transform: rotateZ(50deg);
        }
      }

      li:nth-child(4) {
        right: 0px;
        bottom: 15%;

        h2:before {
          width: 80px;
          left: -100px;
          top: 40px;
        }

        h2:after {
          left: -108px;
          top: 24px;
          height: 20px;
          transform: rotateZ(-50deg);
        }
      }

      li:nth-child(5) {
        left: 50%;
        transform: translateX(-50%);
        bottom: -15%;

        h2:before {
          width: 1px;
          height: 20px;
          left: 50%;
          transform: translateX(-50%);
          top: -20px;
        }

        h2:after {
          width: 0;
          height: 0;
        }
      }
    }
  }
}

.num_box {
  padding: 4.68vw 0 0 0;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  .num {
    font-weight: bold;
    text-align: center;
    color: #3a85f0;
    letter-spacing: -1.8px;

    .fnt_70 {
      font-size: 70px;
      line-height: 1.3;
    }

    p {
      font-weight: 400;
      text-align: center;
      color: #28293b;
    }

    .fnt_20 {
      font-size: 20px;
    }
  }

  p {
    text-align: center;
    font-size: 21px;
  }

  .fnt_70 {
    font-size: 70px;
    line-height: 1.3;
  }
}

.num_box > .dashed {
  border-right: 1px dashed rgba(0, 0, 0, 0.03);
}

.w1440 {
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.manage {
  padding: 3.64% 0 1.64% !important;

  .w1440 {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;

    h2 {
      font-weight: bold;
      text-align: center;
    }

    .fnt_32 {
      font-size: 32px;
    }

    .EBC-intro-list {
      margin-top: 20px;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
          position: relative;
          text-align: center;
          margin-bottom: 40px !important;
          float: left;
          width: 25%;
          list-style-type: none;

          .icon {
            margin: 0 auto 10px !important;
            max-width: 85px;
            width: 68px;
            height: 64px;

            img {
              max-width: 100%;
              transition: all .5s;
              width: 100%;
            }
          }

          .txt {
            padding: 0 6%;

            h3 {
              text-align: center;
              margin-bottom: 12px;
            }

            .fnt_20 {
              font-size: 16px;
            }
          }

          p {
            text-align: left;
            color: #575d6c;
            line-height: 28px;
            font-size: 16px;
          }
        }
      }

      .clearfix:before, .clearfix:after {
        content: '';
        display: table;
      }
    }
  }
}

.cloud-intro {
  background: #fafbfb;
}

.pages-qydongcha {
  overflow: hidden;
  padding: 65px 0 80px;

  .w1442 {
    width: 1442px;
    margin: 0 auto;

    .title {
      text-align: center;
      margin-bottom: 50px;

      h2 {
        font-weight: bold;
      }

      .fnt_42 {
        font-size: 34px;
      }
    }

    .cont {
      .swiper-dongcha {
        ul {
          flex-wrap: wrap;

          li:hover {
            .in-box {
              p {
                visibility: visible;
              }
            }
          }

          li {
            width: 31%;
            margin-right: 2.08044%;
            margin-bottom: 30px;
            list-style-type: none;

            .in-box {
              padding-bottom: 100px;
              background-color: #f3f5f9;
              border-radius: 10px;
              overflow: hidden;
              transition: all 0.5s;
              position: relative;
              height: 280px;

              .img {
                height: 250px;
                position: relative;
                z-index: 1;
                overflow: hidden;

                img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.4s;
                  object-fit: cover;
                  border: 0;
                  display: inline-block;
                }
              }

              .txt {
                padding: 18px 6% 28px;
                position: absolute;
                left: 0;
                bottom: -100px;
                width: 100%;
                z-index: 2;
                transition: all 0.5s;
                background-color: #f3f5f9;

                h2 {
                  margin-bottom: 48px;
                  font-weight: bold;
                  line-height: 32px;
                  height: 64px;
                  transition: all 1s;
                }

                p {
                  margin-bottom: 10px;
                  color: #424a5f;
                  word-break: break-all;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  height: 48px;
                  line-height: 24px;
                  opacity: 0;
                  transition: all 0.5s;
                  visibility: hidden;
                }

                .pdf {
                  transition: all 0.5s;
                  opacity: 0;
                  visibility: hidden;

                  a {
                    color: #2386ee;
                  }
                }

                .fnt_24 {
                  font-size: 18px;
                }

                .fnt_16 {
                  font-size: 14px;
                }
              }
            }
          }
        }

        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 800px;
          z-index: 1;
          display: flex;
          box-sizing: content-box;

          .swiper-slide {
            flex-shrink: 0;
            height: 400px;
            position: relative;
          }
        }
      }
    }
  }
}

.pages-yl-defult {
  padding: 65px 0 80px;
}
</style>
