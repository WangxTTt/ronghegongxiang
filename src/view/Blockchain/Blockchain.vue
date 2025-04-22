<template>
  <div>
    <div class="m-baasBanner">
      <div class="u-mainCon clearFix">
        <div class="txt">
          <h3 class="wow rollIn animated animated">
            区块链BaaS平台</h3>
          <p class="wow rollIn animated animated">
            符合金融行业特性的一站式区块链应用开放平台
          </p>
        </div>
        <!--        <div class="bcg">-->
        <!--          <img height="420" src="@/assets/qkl/el-BaaS-banner.jpg" width="718">-->
        <!--        </div>-->
      </div>
    </div>
    <div class="m-advantageContent">
      <div class="u-mainCon">
        <div class="f-modelTitle">
          <h2 class="wow bounceInUp animated animated" style="visibility: visible; animation-name: bounceInUp;">
            Technical Advantages</h2>
          <h3 class="wow bounceInUp animated animated" style="visibility: visible; animation-name: bounceInUp;">
            技术优势</h3>
          <img height="42" src="@/assets/qkl/el-title-triangle.png" width="45">
        </div>
        <ul class="u-advantageTab wow bounceInUp animated clearFix animated"
            style="visibility: visible; animation-name: bounceInUp;">
          <li v-for="item in mainData1" :key="item.id" :class="{'active':advantageId===item.id}" class="clearFix"
              @click="changeAdvantage(item.id)">
            <img :src="item.icon" height="30" width="30">
            <div class="txt">
              <p>{{ item.name }}</p>
              <div class="line"></div>
            </div>
          </li>

        </ul>
        <div class="f-advantageInfo wow bounceInUp animated animated"
             style="visibility: visible; animation-name: bounceInUp;">
          <div class="dot-bcg"><img height="50" src="@/assets/qkl/el-dot-bcg.png" width="65"></div>
          <div class="f-advantageDet bounceInUp animated clearFix">
            <div class="txt">
              <h3>{{ selectAdv.name }}</h3>
              <p>{{ selectAdv.text }}</p>
            </div>
            <div class="bcg"><img :src="selectAdv.cover" height="280" width="280"></div>
          </div>

        </div>
      </div>
    </div>
    <div class="m-platformContent">
      <div class="u-mainCon">
        <div class="f-modelTitle wow bounceInUp animated animated"
             style="visibility: visible; animation-name: bounceInUp;">
          <h2>Platform Advantages</h2>
          <h3>平台优势</h3>
        </div>
        <div class="f-platformList">
          <div class="list-01 wow rollIn animated animated" style="visibility: visible; animation-name: rollIn;">
            <img height="83" src="@/assets/qkl/el-platform-icon01.png" width="299"></div>
          <div class="list-02 wow bounceInRight animated animated"
               style="visibility: visible; animation-name: bounceInRight;">
            <img height="83" src="@/assets/qkl/el-platform-icon02.png" width="344"></div>
          <div class="list-03 wow bounceInRight animated animated"
               style="visibility: visible; animation-name: bounceInRight;">
            <img height="80" src="@/assets/qkl/el-platform-icon03.png" width="300">
          </div>
        </div>
      </div>
    </div>
    <div class="u-valueContent">
      <div class="u-mainCon">
        <div class="f-commonTitle">平台价值</div>
        <ul class="clearFix">
          <li v-for="item in mainData3" :key="item.id" class="clearFix">
            <img :src="item.icon" height="68" width="68">
            <div class="txt">
              <h3>{{ item.title }}</h3>
              <p>
                {{ item.text }}
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="u-advantageContent">
      <div class="u-mainCon">
        <div class="f-commonTitle">平台优势</div>
        <ul class="f-advantageUl clearFix">
          <li id="list01" :class="{'on':enterId===1}" class="list-01" @mouseenter="enterItem(1)">
            <img class="img-01" height="80" src="@/assets/qkl/el-list-icon01.png" width="80">
            <img class="img-02" height="66" src="@/assets/qkl/el-list-icon01.png" width="66">
            <h3>支持多区块链底层</h3>
            <div class="arrow">
              <img height="18" src="@/assets/qkl/el-arrow.png" width="18">
            </div>
            <p v-if="enterId===1">
              支持自主研发区块链基础平台以及Hyperleger Fabric、FISCO
              BCOS等主流开源平台。
            </p>
          </li>
          <li :class="{'on':enterId===2}" class="" @mouseenter="enterItem(2)">
            <img class="img-02" height="66" src="@/assets/qkl/el-list-icon02.png" width="66">
            <img class="img-01" height="80" src="@/assets/qkl/el-list-icon02.png" width="80">
            <h3>金融级安全保障</h3>
            <div class="arrow">
              <img height="18" src="@/assets/qkl/el-arrow.png" width="18">
            </div>
            <p v-if="enterId===2">
              提供分区共识、隐私交易、多级签名等特性，在性能、隐私保护、交易一致性等方面符合金融行业的应用特性。
            </p>
          </li>
          <li :class="{'on':enterId===3}" class="" @mouseenter="enterItem(3)">
            <img class="img-02" height="66" src="@/assets/qkl/el-list-icon03.png" width="66">
            <img class="img-01" height="80" src="@/assets/qkl/el-list-icon03.png" width="80">
            <h3>灵活部署</h3>
            <div class="arrow">
              <img height="18" src="@/assets/qkl/el-arrow.png" width="18">
            </div>
            <p v-if="enterId===3">
              提供多种部署方式，满足合作方在不同业务场景下对价格、性能的需求。
            </p>
          </li>
          <li :class="{'on':enterId===4}" class="" @mouseenter="enterItem(4)">
            <img class="img-02" height="66" src="@/assets/qkl/el-list-icon04.png" width="66">
            <img class="img-01" height="80" src="@/assets/qkl/el-list-icon04.png" width="80">
            <h3>快速接入</h3>
            <div class="arrow">
              <img height="18" src="@/assets/qkl/el-arrow.png" width="18">
            </div>
            <p v-if="enterId===4">
              统一封装中间件，提供SDK路由等服务，简化网络复杂度，进一步降低了合作方开发与接入难度。
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="u-serviceMode">
      <div class="u-mainCon">
        <div class="f-commonTitle">服务模式</div>
        <div class="f-modeContent">
          <div class="list">
            <div class="title clearFix">
              <h3><span>01</span>开放联盟链</h3>
              <div class="line"></div>
            </div>
            <div class="chart-con clearFix">
              <div class="chart">
                <embed src="@/assets/qkl/区块链1.svg.full.svg" style="width: 333px;height:300px;margin: auto" type=""/>
                <!--                <img height="300" src="@/assets/qkl/el-service-chart666.png" width="333">-->
              </div>
              <ul>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>合作方共享基础设施</p>
                </li>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>适合中小型企业</p>
                </li>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>对交易性能要求不太高</p>
                </li>
              </ul>
            </div>
            <div class="bcg">
              <img height="110" src="@/assets/qkl/el-service-bcg01.png" width="110">
            </div>
          </div>
          <div class="list list-02">
            <div class="title clearFix">
              <h3><span>02</span>企业联盟链</h3>
              <div class="line"></div>
            </div>
            <div class="chart-con clearFix">
              <div class="chart">
                <!--                <img height="310" src="@/assets/qkl/el-service-chart02.png" width="512">-->
                <embed src="@/assets/qkl/区块链2.svg.full.svg" style="width: 512px;height:310px;margin: auto" type=""/>
              </div>
              <ul>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>合作方区块链隔离</p>
                </li>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>提供更高更独立资源环境</p>
                </li>
                <li class="clearFix">
                  <img height="18" src="@/assets/qkl/el-service-dot.png" width="18">
                  <p>支持合作方生态扩展</p>
                </li>
              </ul>
            </div>
            <div class="bcg" style="bottom: 30px">
              <img height="110" src="@/assets/qkl/el-service-bcg02.png" width="110">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="u-coreFunction">
      <div class="u-mainCon">
        <div class="f-commonTitle">核心功能</div>
        <div class="clearFix">
          <ul class="f-characterTab">
            <li :class="{'active':pId===1}" class="" @click="changeP(1)">交易存证</li>
            <li :class="{'active':pId===2}" class="" @click="changeP(2)">存证查验</li>
          </ul>

          <div v-if="pId===1" class="f-characterDet clearFix" style="display: block;">
            <h3>交易存证</h3>
            <div class="bcg">
              <!--              <img height="418" src="@/assets/qkl/el-core-chart01.png" width="396">-->
              <embed src="@/assets/qkl/区块链3.svg.full.svg" style="width: 396px;height:418px;margin: auto" type=""/>
            </div>
            <div class="txt">
              <div class="line"></div>
              <ul class="chart-txt">
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    用户通过SDK对业务数据进行签名后发送至OpenAPI网关，调用区块链中间件，由平台提供的通用智能合约登记至区块链平台。
                  </p>
                </li>
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    与物联网、人工智能、大数据等技术融合，构建多元化技术生态。
                  </p>
                </li>
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    结合金融、司法、政务、医疗、公益等应用领域场景打造“区块链+”生态。
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="pId===2" class="f-characterDet character-con clearFix">
            <h3>存证查验</h3>
            <div class="bcg">
              <!--              <img height="427" src="@/assets/qkl/el-core-chart02.png" width="449">-->
              <embed src="@/assets/qkl/区块链4.svg.full.svg" style="width: 449px;height:427px;margin: auto" type=""/>
            </div>
            <div class="txt">
              <div class="line"></div>
              <ul class="chart-txt">
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    用户可以通过OpenAPI、门户等多个渠道直接使用存证查验服务，支持第三方平台间接使用存证查验服务。
                  </p>
                </li>
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    任意用户可以使用合作方调用BaaS平台上链交易时返回的交易哈希进行区块链交易查证。
                  </p>
                </li>
                <li>
                  <img height="6" src="@/assets/qkl/el-txt-dot.png" width="6">
                  <p>
                    合作方可以通过登记区块链时在BaaS平台中保存的交易请求、业务主键、交易哈希的关联关系，使用业务主键进行区块链交易信息的查证。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="u-applyIntroduce clearFix">
      <div class="bcg"><img height="283" src="@/assets/qkl/el-apply-bcg.png" width="497"></div>
      <div class="info">
        <div class="f-introduceTitle">
          <h3>区块链+供应链金融应用</h3>
          <div class="line"></div>
        </div>
        <div class="f-introduceTxt" style="text-indent:2em;">
          2016年12月，国务院印发的《“十三五”国家信息化规划》中，区块链技术首次被列入《国家信息化规划》。随着区块链技术的快速发展，分布式商业模式被越来越多的实体经济认可。
        </div>
      </div>
      <div class="bcg-01"><img height="50" src="@/assets/qkl/el-dot-bcg.png" width="65"></div>
      <div class="bcg-02"><img height="177" src="@/assets/qkl/el-introduce-bcg.png" width="155"></div>
    </div>
    <div class="f-listBcg" style="margin-top: 30px;">
      <!--      <img height="337" src="../images/el-apply-chart05.png" width="750">-->
      <embed src="@/assets/qkl/区域链5.svg.full.svg" style="width: 750px;height:337px;margin: auto" type=""/>
    </div>
    <div class="f-listBcg">
      <!--      <img height="390" src="../images/el-apply-chart04.png" style="padding: 0;" width="750">-->
      <embed src="@/assets/qkl/区域链6.svg.full.svg" style="width: 750px;height:390px;margin: auto" type=""/>
    </div>
    <div class="f-listBcg">
      <!--      <img height="449" src="../images/el-cooperate-chart01.png" width="844">-->
      <embed src="@/assets/qkl/区块链7.svg.full.svg" style="width: 844px;height:449px;margin: auto;margin-top: 20px"
             type=""/>
    </div>
    <div class="f-listBcg">
      <!--      <img height="449" src="../images/el-cooperate-chart01.png" width="844">-->
      <embed src="@/assets/qkl/区块链8.svg.full.svg" style="width: 844px;height:483px;margin: auto" type=""/>
    </div>

    <div class="u-coreFunction">
      <div class="u-mainCon">

        <div class="clearFix">
          <ul class="f-characterTab">
            <li :class="{'active':pId2===3}" class="" @click="changePP(3)">SaaS服务模式</li>
            <li :class="{'active':pId2===4}" class="" @click="changePP(4)">联盟链模式</li>
            <li :class="{'active':pId2===5}" class="" @click="changePP(5)">私有链模式</li>
          </ul>

          <div v-if="pId2===3" class="f-characterDet clearFix" style="display: block;">
            <h3>SaaS服务模式</h3>
            <div class="bcg" style="padding: 65px 55px 0 43px;">
              <!--              <img height="418" src="@/assets/qkl/el-core-chart01.png" width="396">-->
              <embed src="@/assets/qkl/区块链9.svg.full.svg" style="width: 687px;height:357px;margin: auto" type=""/>
            </div>

          </div>
          <div v-if="pId2===4" class="f-characterDet character-con clearFix">
            <h3>联盟链模式</h3>
            <div class="bcg" style="padding: 65px 55px 0 43px;">
              <!--              <img height="427" src="@/assets/qkl/el-core-chart02.png" width="449">-->
              <embed src="@/assets/qkl/区块链10.svg.full.svg" style="width: 687px;height:357px;margin: auto" type=""/>
            </div>

          </div>
          <div v-if="pId2===5" class="f-characterDet character-con clearFix">
            <h3>私有链模式</h3>
            <div class="bcg" style="padding: 65px 55px 0 43px;">
              <!--              <img height="427" src="@/assets/qkl/el-core-chart02.png" width="449">-->
              <embed src="@/assets/qkl/区块链11.svg.full.svg" style="width: 687px;height:357px;margin: auto" type=""/>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="f-listTxt">
      <p>应用区块链技术，充分发挥去中心化/多中心化、不可篡改、高安全性和智能合约的技术特征，有如下优势：</p>
    </div>

    <div class="u-applyIntroduce clearFix">
      <div class="bcg"><img height="283" src="@/assets/qkl/el-institute-book.png" width="497"></div>
      <ul class="info-list">
        <li class="clearFix">
          <span class="dot"></span>
          <p>真实交易的资产“上链”转化为数字资产</p>
        </li>
        <li class="clearFix">
          <span class="dot"></span>
          <p>去中心化/多中心化的份额化权属登记</p>
        </li>
        <li class="clearFix">
          <span class="dot"></span>
          <p>业务规则的智能化管理与自动履约</p>
        </li>
        <li class="clearFix">
          <span class="dot"></span>
          <p>交易的安全性及信息隐私</p>
        </li>
      </ul>
      <div class="bcg-02" style="top: 140px;"><img height="152" src="@/assets/qkl/el-honor-bcg.png" width="133"></div>
    </div>
    <div class="f-listEnterprise clearFix">
      <div class="f-bigTitle"><img height="28" src="@/assets/qkl/el-institute-icon03.png" width="28">对企业的价值</div>
      <ul class="clearFix">
        <li class="clearFix">
          <img height="155" src="@/assets/qkl/el-apply-bcg01.png" width="240">
          <div class="txt">
            <div class="line"></div>
            <p>盘活企业自身资源，实现降杠杆、降成本、增效益</p>
          </div>
        </li>
        <li class="last clearFix">
          <img height="155" src="@/assets/qkl/el-apply-bcg02.png" width="240">
          <div class="txt">
            <div class="line"></div>
            <p>中小企业更易获得金融服务支持</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="cont2" class="cont2 fbCenter">
      <div class="container">
        <h1 class="">核心功能</h1>
        <div class="share">
          <div class="left">
            <h2>
              <img alt="" src="@/assets/qkl/box.png">
              <span>数据消费者</span>
              <img alt="" src="@/assets/qkl/box.png">
            </h2>
            <div class="kua">
              <div v-for="item in mainData2" :key="item.id" class="shaCon">
                <img :src="item.icon" alt="">
                <h2>{{ item.name }}</h2>
              </div>
            </div>
            <div class="kua">
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/data.png">
                <h2>提供数据</h2>
              </div>
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/cha.png">
                <h2>查看数据合约</h2>
              </div>
            </div>
          </div>

          <div class="left">
            <h2>
              <img alt="" src="@/assets/qkl/box.png">
              <span>联盟方</span>
              <img alt="" src="@/assets/qkl/box.png">
            </h2>
            <div class="kua">
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/jia.png">
                <h2>创建合约</h2>
              </div>
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/fb4.png">
                <h2>审核合约</h2>
              </div>
            </div>
            <div class="kua">
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/cun4.png">
                <h2>审核数据</h2>
              </div>
              <div class="shaCon">
                <img alt="" src="@/assets/qkl/cha.png">
                <h2>查看数据合约</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="cont3" class="cont3">
      <div class="container datu">
        <h1 class="">产品架构</h1>
        <h2>
          <embed src="@/assets/qkl/区块链12.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
        </h2>
      </div>
    </div>
    <div id="cont4" class="cont4">
      <div class="container qk-con">
        <h1>产品特点与优势</h1>
        <br>
        <div class="lm-cont4">
          <div v-for="item in mainData4" :key="item.id" class="section">
            <div class="col-md-2">
              <img :src="item.icon" alt="">
            </div>
            <div class="col-md-10 col-sm-12">
              <h2>{{ item.name }}</h2>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div id="productBrief" class="wpo-features-section-2 section-padding">
      <div class="container">
        <div class="section-title">
          <h2>产品简介</h2>
          <p>
            全链通BaaS平台，提供全面的区块链即服务功能，从企业和开发者角度出发，提供多种部署形式，既能灵活部署，又可安全易用，基于流行的kubernetes技术，提供高可靠可扩展的区块链平台。</p>
        </div>
        <div class="wpo-features-bundle">

          <div class="row">

            <div class="col-md-3 col-sm-6 custom-grid col-12">
              <div class="wpo-features-style-2">
                <div class="wpo-features-single">
                  <div class="wpo-features-icon">
                    <!--                    <i class="fi flaticon-startup"></i>-->
                    <img class="fi flaticon-startup" src="@/assets/qkl/fi1.png">
                  </div>
                  <div class="wpo-features-text">
                    <h2>多链选择</h2>
                    <p>基于BCOS、Hyperledger Fabric开源项目的区块链服务平台</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 custom-grid col-12">
              <div class="wpo-features-style-2">
                <div class="wpo-features-single">
                  <div class="wpo-features-icon">
                    <!--                    <i class="fi flaticon-label"></i>-->
                    <img class="fi flaticon-startup" src="@/assets/qkl/fi2.png">
                  </div>
                  <div class="wpo-features-text">
                    <h2>安全可靠</h2>
                    <p>
                      BaaS平台支持企业提供集群和存储环境，支持企业自建baas平台，数据完全由企业持有，从根本上解决数据安全问题</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 custom-grid col-12">
              <div class="wpo-features-style-2">
                <div class="wpo-features-single">
                  <div class="wpo-features-icon">
                    <!--                    <i class="fi flaticon-hand"></i>-->
                    <img class="fi flaticon-startup" src="@/assets/qkl/fi3.png">
                  </div>
                  <div class="wpo-features-text">
                    <h2>灵活易用</h2>
                    <p>
                      平台提供适合于开发者的一键部署功能，轻松定制区块链底层和示例应用；提供适合于企业级建链的跨平台建链功能，安全方便</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 custom-grid col-12">
              <div class="wpo-features-style-2">
                <div class="wpo-features-single">
                  <div class="wpo-features-icon">
                    <!--                    <i class="fi flaticon-support"></i>-->
                    <img class="fi flaticon-startup" src="@/assets/qkl/fi5.png">
                  </div>
                  <div class="wpo-features-text">
                    <h2>自服务运维</h2>
                    <p>备完整的自服务运维系统屏蔽 IT 的复杂度，全面监测 IT 问题，发现问题根源</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="productFunction" class="wpo-service-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>产品功能</h2>
              <p>构建于云基础之上，利用云计算的特性快速构建自己的IT基础设施和区块链服务。</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="item in mainData6" :key="item.id" class="col-lg-4 col-sm-6 col-12 custom-grid">
            <div class="wpo-service-item">
              <div class="wpo-service-icon">
                <img :src="item.icon" alt="S-icon">
              </div>
              <div class="wpo-service-text">
                <h2>{{ item.name }}</h2>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="logical-architecture">
      <div class="content logical-arch-cont">
        <div class="platform-part-title">
          <div class="platform-part-title-text">核心产品逻辑架构</div>
        </div>
        <div class="platform-part-subtitle">星火区块链产品共有八大系统产品，每个系统都可独立部署。</div>
        <div class="logical-architecture-block">
          <img alt="" class="logical-architecture-img" src="@/assets/qkl/logical-architecture.png">
          <span class="arrow1"></span>
          <span class="arrow2"></span>
        </div>
        <img alt="" class="logical-architecture-bg" src="@/assets/qkl/logical-architecture-bg.png">
      </div>
    </div>
    <div class="core-products">
      <div class="content core-products-cont">
        <div class="platform-part-title">
          <div class="platform-part-title-text">核心产品</div>
        </div>
        <div class="platform-part-subtitle">
          区块链是价值互联网的基石和数字时代的重要基础设施。我们致力打造业界易用稳健的区块链技术和产品，让各行各业的客户和合作伙伴专注商业化区块链应用和创新，让区块链充分激发信任商业时代的潜力。
        </div>
        <div class="products-wrapper">
          <div class="products-tabs">
            <div v-for="item in mainData5" :key="item.id" :class="{'active':qklId===item.id}" class="product-tab"
                 @click="changeqkl(item.id)">
              <img :src="item.icon" alt="" class="product-tab-img">
              <img :src="item.activeIcon" alt="" class="product-tab-img-active">
              <div class="product-tab-text">{{ item.name }}</div>
            </div>

          </div>
          <div class="swiper-container products-swiper-js products-list swiper-container-horizontal">
            <div class="swiper-wrapper" style="transition-duration: 0ms; ">
              <div v-if="qklId===8" class="swiper-slide product-item swiper-slide-duplicate"
                   data-swiper-slide-index="7" style="width: 1200px;">
                <div class="product-name">星火链网APP</div>
                <div class="product-detail spark-chain-net-deatil">
                  <img alt="" class="product-img" src="@/assets/qkl/bg (6).png"
                       style="width: 654px;height: 404px;margin:0 100px 0 0">
                  <div class="product-info">
                    <div class="product-desc">
                      星火链APP是基于星火链技术建立的综合性业务移动端APP，借助此APP，您使用身份扫码签名、代管企业身份、管理账户密钥，查看认证证书等操作，助力企业或个人高效管理星火链网业务。全面安全保障，银行级别加密水平，保障个人或企业数据安全。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-29.png">
                        <div class="product-feature-text">身份注册</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-30.png">
                        <div class="product-feature-text">身份确权</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-31.png">
                        <div class="product-feature-text">证书管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-32.png">
                        <div class="product-feature-text">资产管理</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 星火区块链底层平台 -->
              <div v-if="qklId==1" class="swiper-slide product-item" data-swiper-slide-index="0"
                   style="width: 1200px;">
                <div class="product-name">星火区块链底层平台</div>
                <div class="product-detail">
                  <img alt="" class="product-img" src="@/assets/qkl/blockchain-underlying.png">
                  <div class="product-info">
                    <div class="product-desc">
                      区块链底层平台立足安全、自主、可控的原则，旨在构建国家级区块链基础设施，面向各行业领域提供区块链运营产品，构建分布式商业应用生态，采用可横向扩展的“1+N”主从链群架构,构建高性能、高可用、易扩展的区块链底层平台，构建多中心的分布式协作商业体系。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-text-item">横向扩容的1+N主子链群</div>
                      <div class="product-feature-text-item">原生高效的BID账户体系</div>
                      <div class="product-feature-text-item">安全可靠的混合共识机制</div>
                      <div class="product-feature-text-item">可扩展的同异构跨链互操作</div>
                      <div class="product-feature-text-item">可审计的隐私保护机制</div>
                      <div class="product-feature-text-item">支持多语言的智能合约引擎</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 公共数据服务平台 -->
              <div v-if="qklId===2" class="swiper-slide2 product-item" data-swiper-slide-index="1"
                   style="width: 1200px;">
                <div class="product-name">公共数据服务平台</div>
                <div class="product-detail public-data-deatil">
                  <div class="product-info">
                    <div class="product-desc">
                      公共数据服务平台通过星火区块链，安全的存储个人和企业用户的身份信息，并在保护隐私的情况下为用户、用户信息提供方、用户信息使用方提供身份标识和信息交互，使得企业和机构可以更合规的使用和管理用户身份信息及数据授权，而身份信息的真实性得到了极大的保障。帮助用户充分保护其身份与数据的隐私和安全，赋予他们全面掌控自己的身份和数据的权利。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-01.png">
                        <div class="product-feature-text">身份管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-02.png">
                        <div class="product-feature-text">认证管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-03.png">
                        <div class="product-feature-text">隐私数据价值化流转</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-04.png">
                        <div class="product-feature-text">公共数据管理</div>
                      </div>
                    </div>
                  </div>
                  <img alt="" class="product-img" src="@/assets/qkl/bg (2).png">
                </div>
              </div>
              <!-- 数据资源管理平台 -->
              <div v-if="qklId===3" class="swiper-slide2 product-item swiper-slide-prev" data-swiper-slide-index="2"
                   style="width: 1200px;">
                <div class="product-name">数据资源管理平台</div>
                <div class="product-detail data-resource-deatil">
                  <div class="product-info">
                    <div class="product-desc" style="margin-bottom: 18px">
                      实现链上链下数据分布式存储、数据上链和链上链下数据管理的功能，实现资源数据开放共享平台、数据权限配置、数据共享、数据版本管理等功能，并开放了跨链执行、数据认证、密钥调用等相关接口。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-05.png">
                        <div class="product-feature-text">资源管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-06.png">
                        <div class="product-feature-text">数据共享</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-07.png">
                        <div class="product-feature-text">查询资源</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-08.png">
                        <div class="product-feature-text">权限管理</div>
                      </div>
                    </div>
                  </div>
                  <img alt="" class="product-img" src="@/assets/qkl/bg (1).png" style="width: 689px;height: 305px">
                </div>
              </div>
              <!-- 业务管理平台 -->
              <div v-if="qklId===4" class="swiper-slide2 product-item swiper-slide-active" data-swiper-slide-index="3"
                   style="width: 1200px;">
                <div class="product-name">业务管理平台</div>
                <div class="product-detail business-management-deatil">
                  <img alt="" class="product-img" src="@/assets/qkl/bg.png"
                       style="width:817px;height: 399px;margin: 0 26px 0 0">
                  <div class="product-info">
                    <div class="product-desc" style="margin-bottom: 8px">
                      星火区块链业务管理平台支持同构/异构区块链的创建与接入、节点接入配置、智能合约管理、区块链网络监控、成员准入管理、权限配置等功能。全流程可视化操作，大幅度降低区块链应用门槛，提升区块链运维管理的效率。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-09.png">
                        <div class="product-feature-text">可视化链群管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-10.png">
                        <div class="product-feature-text">智能合约管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-11.png">
                        <div class="product-feature-text">成员准入管理</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-12.png">
                        <div class="product-feature-text">权限功能配置</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 多标识融合平台 -->
              <div v-if="qklId===5" class="swiper-slide2 product-item swiper-slide-next" data-swiper-slide-index="4"
                   style="width: 1200px;">
                <div class="product-name">多标识融合平台</div>
                <div class="product-detail multi-identity-fusion-deatil">
                  <div class="product-info">
                    <div class="product-desc">
                      建立强而有效的互联互通的异构标识融合系统,达到各个异构标识体系的相互融合万物互联的目的。工业互联网标识包括新型分布式标识、Handle、OID、Ecode、UID、DNS、GS1等异构标识和分布式网络相结合起来。新型分布式标识为人、载体、对象等接入互联网的异构标识提供基础结构，构建各种跨平台、跨体系的新型多标识融合系统，打造可控、隐私、兼容型强的异构标识互联互通的标识体系。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-16.png">
                        <div class="product-feature-text">多标识融合</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-13.png">
                        <div class="product-feature-text">标识注册</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-14.png">
                        <div class="product-feature-text">标识解析</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-15.png">
                        <div class="product-feature-text">标识双向解析</div>
                      </div>
                    </div>
                  </div>
                  <img alt="" class="product-img" src="@/assets/qkl/bg (3).png">
                </div>
              </div>
              <!-- 监管监测平台 -->
              <div v-if="qklId===6" class="swiper-slide product-item" data-swiper-slide-index="5"
                   style="width: 1200px;">
                <div class="product-name">监管监测平台</div>
                <div class="product-detail regulatory-monitoring-deatil">
                  <img alt="" class="product-img" src="@/assets/qkl/bg (4).png">
                  <div class="product-info">
                    <div class="product-desc">
                      通过穿透式监测监管技术，辅助运营机构对链的日常运维工作；支持区块链的监管功能，保证区块链运行管理制度化、透明化和规范化，促进区块链生态健康发展。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-17.png">
                        <div class="product-feature-text">链群监测</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-18.png">
                        <div class="product-feature-text">节点监测</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-19.png">
                        <div class="product-feature-text">故障告警</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-20.png">
                        <div class="product-feature-text">审核业务</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-21.png">
                        <div class="product-feature-text">惩罚违规</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img"
                             src="@/assets/qkl/icon-22.png">
                        <div class="product-feature-text">合法合规监管</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 区块链浏览器 -->
              <div v-if="qklId===7" class="swiper-slide product-item" data-swiper-slide-index="6"
                   style="width: 1200px;">
                <div class="product-name">区块链浏览器</div>
                <div class="product-detail blockchain-explorer-deatil">
                  <div class="product-info">
                    <div class="product-desc">
                      星火链网区块链浏览器是将底层区块链的数据通过采集、分析、存储等手段进行归类展示，最终形成一款对链上数据可查、可追溯、可分析的链上资源浏览工具。开发者可以基于星火链网区块链浏览器开放平台的数据服务，以便快速为您的企业区块链应用系统赋予链上“查证”功能。
                    </div>
                    <div class="product-feature-list">
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-23.png">
                        <div class="product-feature-text">数据概览</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-24.png">
                        <div class="product-feature-text">交易查证</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-25.png">
                        <div class="product-feature-text">账户详情</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-26.png">
                        <div class="product-feature-text">智能合约</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-27.png">
                        <div class="product-feature-text">多标识融合</div>
                      </div>
                      <div class="product-feature-item">
                        <img alt="" class="product-feature-img" src="@/assets/qkl/icon-28.png">
                        <div class="product-feature-text">数字资产</div>
                      </div>
                    </div>
                  </div>
                  <img alt="" class="product-img" src="@/assets/qkl/bg5.png"
                       style="width: 541px;height: 450px;margin: 0 0 0 120px">
                </div>
              </div>
              <!-- 星火链网APP -->

            </div>
            <span aria-atomic="true" aria-live="assertive" class="swiper-notification"></span></div>
          <!-- Add Pagination -->
          <div
              class="swiper-pagination products-swiper-pagination-js products-list-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span aria-label="Go to slide 1" class="swiper-pagination-bullet" role="button" tabindex="0"></span><span
              aria-label="Go to slide 2" class="swiper-pagination-bullet" role="button" tabindex="0"></span><span
              aria-label="Go to slide 3" class="swiper-pagination-bullet" role="button" tabindex="0"></span><span
              aria-label="Go to slide 4" class="swiper-pagination-bullet swiper-pagination-bullet-active" role="button"
              tabindex="0"></span><span aria-label="Go to slide 5" class="swiper-pagination-bullet" role="button"
                                        tabindex="0"></span><span
              aria-label="Go to slide 6" class="swiper-pagination-bullet" role="button" tabindex="0"></span><span
              aria-label="Go to slide 7" class="swiper-pagination-bullet" role="button" tabindex="0"></span><span
              aria-label="Go to slide 8" class="swiper-pagination-bullet" role="button" tabindex="0"></span></div>
        </div>
      </div>
    </div>
    <div class="construct-content">
      <div class="content">
        <div class="title">建设内容</div>
        <div class="desc">
          以“星火·链网——区块链网络基础设施建设工程”为核心，以“星火·链网国家技术创新中心”为载体，以“星火·许可链——底层区块链核心技术研发平台”、“星火·标识码——区块链身份标识核心技术研发平台”为依托，打造“区块链+工业/民生/金融/能源”等10大产业集聚平台、“区块链+云计算/5G/人工智能/大数据”等4大技术创新平台、“区块链基础运行监测平台”等3大国家网络安全保障平台，从而建设形成具有全球影响力的国家级区块链网络基础设施，构建涵盖核心技术、关键系统、支撑平台和集成应用的较为完备的区块链产业体系，更好发挥区块链对建设网络强国、发展数字经济、助力经济社会发展等方面的重要作用。按照“环节完备、有序发展”原则，国内建立完整的供给侧能力和完善的生态，终端、网络、平台等产业支撑环节不存在明显短板，国际上具备一定主导能力。
        </div>
        <img alt="" class="construct-img" src="@/assets/liveOne/construct-content.png">
      </div>

    </div>
    <div class="alliance-content">
      <div class="content">
        <div class="title">联盟委员会</div>
        <div class="desc">
          联盟的主要任务是以区块链新型基础设施建设为核心，聚集产业生态各方力量，联合开展区块链技术标准、测试评价、应用场景、产业生态、国际合作、政策治理等方面研究，促进产业链协同发展，带动完善公共服务体系，加强复合创新型人才培养，引导行业规范自律，构建稳定有序、开放协同的产业发展环境，并重点推动信息基础设施创新发展。
        </div>
        <img alt="" class="alliance-img" src="@/assets/liveOne/alliance-committee.png">
      </div>

    </div>
    <div class="construct-content" style="margin-top: 80px;">
      <div class="content">
        <div class="title">应用生态</div>
        <div class="desc">
          应用生态组成由星火主链（信通院）、应用组件（数字身份、溯源存证、电子合同、私钥管理、供应链、数据交换和共享、应用安全）、业务子链（企信码数字身份管理平台；一物一码产品结算应用；产品供应链金融服务；链上资产管理）等组成。
        </div>
        <img alt="" class="construct-img" src="@/assets/qkl/topology.png">
      </div>

    </div>
    <div class="chain-net-content">
      <div class="content">
        <div class="title">链网治理</div>
        <div class="desc">
          星火链网将秉持开放、透明、民主、高效的原则，广泛邀请政、产、学、研、用各界主体，组建多元、多方的社群，围绕星火链网的基础设施管理、技术研发、应用推广、创新培育、安全保障等领域建立广泛的治理体系，以包容审慎的理念推进区块链融合创新，以共治共享的模式激发星火链网发展潜能。
        </div>
        <div class="chain-net-list">
          <div class="chain-net-item">
            <img alt="" class="chain-net-item-img" src="@/assets/qkl/infrastructure-management.png">
            <div class="chain-net-item-content">
              <div class="chain-net-item-title">基础设施管理</div>
              <div class="chain-net-item-desc">
                聚焦链网节点管理、基础服务运营以及链网体系的开放和兼容，推动链网基础设施建设、底层技术完善，形成完备的基础服务生态。
              </div>
            </div>
          </div>
          <div class="chain-net-item">
            <img alt="" class="chain-net-item-img" src="@/assets/qkl/industry-ecology-development.png">
            <div class="chain-net-item-content">
              <div class="chain-net-item-title">产业生态发展</div>
              <div class="chain-net-item-desc">
                聚焦链网技术、应用和标准，围绕链网组件开发、平台运营、技术服务、行业应用等方面搭建产业交流和共识平台，推动链网生态技术标准发展，培育行业应用方案，开展链网产业治理。
              </div>
            </div>
          </div>
          <div class="chain-net-item">
            <img alt="" class="chain-net-item-img" src="@/assets/qkl/communication.png">
            <div class="chain-net-item-content">
              <div class="chain-net-item-title">交流合作推广</div>
              <div class="chain-net-item-desc">聚焦绕链网的行业发展、标准制定和产业治理等领域组织广泛研讨，围绕链网发展关键问题开展开放研究和成果发布，组织技术竞赛、应用培训等活动。
              </div>
            </div>
          </div>
          <div class="chain-net-item">
            <img alt="" class="chain-net-item-img" src="@/assets/qkl/innovate.png">
            <div class="chain-net-item-content">
              <div class="chain-net-item-title">创新创业培育</div>
              <div class="chain-net-item-desc">
                建立链网创新创业培育平台，设立“创业创新项目孵化温室”机制，注入基础设施和服务、人才和资金，加快技术和应用创新转化，引导和推动链网生态中的大中小企业融通发展。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="industrial-collaboration">
      <div class="content">
        <div class="title">产业协同模式</div>
        <div class="desc">星火·链网建设运营将充分依托现有区块链创新企业、以及联合大企业的区块链平台，实现基础设施建设和产业发展的协同，共同探索发展模式。2020年预计组织20家左右全国优秀企业对接星火·链网。
        </div>
        <div class="partners">
          <div class="paterner-item">
            <img alt="" class="paterner-logo-first" src="@/assets/qkl/block-chain-logo.png">
            <div class="paterner-desc">
              基于可信区块链计划的评测结果，精准筛选企业，目前拥有300多家成员单位
            </div>
            <img alt="" class="rt-img" src="@/assets/qkl/cube.png">
          </div>
          <div class="paterner-item">
            <img alt="" class="paterner-logo-second"
                 src="@/assets/qkl/internet-industry-logo.png">
            <div class="paterner-desc">
              基于可信区块链计划的评测结果，精准筛选企业，目前拥有300多家成员单位
            </div>
            <img alt="" class="rt-img" src="@/assets/qkl/cube.png">
          </div>
          <div class="paterner-item">
            <img alt="" class="paterner-logo-third" src="@/assets/qkl/internet-logo.png">
            <div class="paterner-desc">
              基于可信区块链计划的评测结果，精准筛选企业，目前拥有300多家成员单位
            </div>
            <img alt="" class="rt-img" src="@/assets/qkl/cube.png">
          </div>
          <div class="paterner-item">
            <img alt="" class="paterner-logo-fourth" src="@/assets/qkl/intelligence-logo.png">
            <div class="paterner-desc">
              基于可信区块链计划的评测结果，精准筛选企业，目前拥有300多家成员单位
            </div>
            <img alt="" class="rt-img" src="@/assets/qkl/cube.png">
          </div>
        </div>
      </div>
    </div>
    <div class="application">
      <div class="content application-cont">
        <div class="cont-title">
          <div class="title-text">星火应用开放</div>
          <div class="sub-title-text">
            星火主链应用生态开放，行业伙伴正在参与星火应用体系的建设和应用规范的制定，包括星火·可信跨链规范、星火·产融服务接入规范、星火·可信存证服务接入规范和星火·数字身份接入规范等。
          </div>
        </div>
        <div class="app-box">
          <img src="@/assets/qkl/application-bg.png">
          <div class="application-list">
            <div class="application-item">
              <div class="item-title">
                <img src="@/assets/qkl/application-icon.png">
                <span>星火·可信跨链规范</span>
                <a class="item-link" href="https://bif-doc.readthedocs.io/zh_CN/latest/business/cross_chain.html"
                   target="_blank">
                  <img src="@/assets/qkl/arrow.png">
                </a>
              </div>
              <div class="item-desc">
                星火·可信跨链面向骨干节点与超级节点提供跨链互操作服务，实现数据跨链、资产跨链和智能合约跨链互操作性等，制定了跨链交互协议、跨链角色、跨链过程、跨链验证等规范。
              </div>
            </div>
            <div class="application-item">
              <div class="item-title">
                <img src="@/assets/qkl/application-icon.png">
                <span>星火·产融服务接入规范</span>
              </div>
              <div class="item-desc">
                星火产融域面向骨干节点提供产融基础服务，协助骨干节点搭建产融平台，制定了清结算服务、账户服务、融资服务、供应链票据服务、债权登记服务、发票验真服务等规范。
              </div>
            </div>
            <div class="application-item">
              <div class="item-title">
                <img src="@/assets/qkl/application-icon.png">
                <span>星火·可信存证服务接入规范</span>
              </div>
              <div class="item-desc">
                星火·可信存证面向骨干节点用户和可信企业用户提供基础存证服务，实现用户身份、信息、资产、行为等电子数据上链存证，且无法篡改，制定了文件存证接入和
                Hash 存证接入等规范。
              </div>
            </div>
            <div class="application-item">
              <div class="item-title">
                <img src="@/assets/qkl/application-icon.png">
                <span>星火·数字身份接入规范</span>
              </div>
              <div class="item-desc">
                星火·数字身份面向体系内的星火用户提供数字身份服务，实现身份自主管理、安全可控和隐私保护等，制定了发证方接入和应用方接入等规范。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockchainPage",
  data() {
    return {
      enterId: 1,
      pId: 1,
      pId2: 3,
      mainData1: [
        {
          id: 1,
          icon: require('@/assets/qkl/el-advantage-icon01.png'),
          name: '国密算法',
          text: "应我国监管要求，采用SM2非对称算法及SM3杂凑算法。",
          cover: require('@/assets/qkl/el-advantage-bcg01.png')
        },
        {
          id: 2,
          icon: require('@/assets/qkl/el-advantage-icon02.png'),
          name: '分区共识',
          text: "按业务划分不同的链，分区账本物理级隔离。",
          cover: require('@/assets/qkl/el-advantage-bcg02.png')
        },
        {
          id: 3,
          icon: require('@/assets/qkl/el-advantage-icon03.png'),
          name: '隐私交易',
          text: "共识后的私密交易Hash植存在公共账本保证私密数据隔离，又可验证交易真实性。",
          cover: require('@/assets/qkl/el-advantage-bcg03.png')
        },
        {
          id: 4,
          icon: require('@/assets/qkl/el-advantage-icon04.png'),
          name: '分区归档',
          text: "基于状态快照的数据归档。",
          cover: require('@/assets/qkl/el-advantage-bcg04.png')
        },
        {
          id: 5,
          icon: require('@/assets/qkl/el-advantage-icon05.png'),
          name: '多级签名',
          text: "通过智能合约进行约束并控制读写操作权限，保障客户和金融机构只能查询到自身数据。",
          cover: require('@/assets/qkl/el-advantage-bcg05.png')
        },
        {
          id: 6,
          icon: require('@/assets/qkl/el-advantage-icon06.png'),
          name: '灵活部署',
          text: "客户可自行选择，门槛可低至零自行部署服务器节点。",
          cover: require('@/assets/qkl/el-advantage-bcg06.png')
        },
        {
          id: 7,
          icon: require('@/assets/qkl/el-advantage-icon07.png'),
          name: '跨链协同',
          text: "不同区块链之间的协同操作。",
          cover: require('@/assets/qkl/el-advantage-bcg07.png')
        },

      ],
      advantageId: 1,
      selectAdv: {
        id: 1,
        icon: require('@/assets/qkl/el-advantage-icon01.png'),
        name: '国密算法',
        text: "应我国监管要求，采用SM2非对称算法及SM3杂凑算法。",
        cover: require('@/assets/qkl/el-advantage-bcg01.png')
      },
      mainData2: [
        {
          id: 1,
          name: '创建数据',
          icon: require('@/assets/qkl/cun4.png')
        },
        {
          id: 1,
          name: '发布需求',
          icon: require('@/assets/qkl/fb4.png')
        },

      ],
      mainData3: [
        {
          id: 1,
          title: '降低区块链业务落地成本',
          text: '降低建链、管链技术门槛，提升研发效率，缩短上层应用落地周期。',
          icon: require('@/assets/qkl/el-value-icon01.png')
        },
        {
          id: 2,
          title: '加强区块链管控能力',
          text: '通过BaaS对底层区块链进行统一纳管、监控，保证上层业务的安全稳定。',
          icon: require('@/assets/qkl/el-value-icon02.png')
        },
        {
          id: 3,
          title: '助力拓展区块链业务',
          text: '快递构建、拓展区快链联盟网络，展开链上数据协同、业务协同。',
          icon: require('@/assets/qkl/el-value-icon03.png')
        },
        {
          id: 4,
          title: '构建区块链生态',
          text: ' 支持开发者业务拓展，向全行业输出优质区块链服务，构建行业生态。',
          icon: require('@/assets/qkl/el-value-icon04.png')
        },
      ],
      mainData4: [
        {
          id: 1,
          name: '开放自治',
          text: '采用众享自主研发的区块链技术底层平台ChainSQL，使用便捷，兼容多种数据库，支持可编程的智能合约和拔插式国密算法',
          icon: require('@/assets/qkl/yun.png')
        },
        {
          id: 2,
          name: '可视化运维',
          text: '支持节点监控、区块链浏览器和网络拓扑图',
          icon: require('@/assets/qkl/su1.png')
        },
        {
          id: 3,
          name: '安全合规',
          text: '提供标准的数据上链组件、交换协议和记账合约，保障数据的安全与合规',
          icon: require('@/assets/qkl/su4.png')
        },
        {
          id: 4,
          name: '数据量化',
          text: '数据的贡献和使用被确权，系统运转透明、高效。',
          icon: require('@/assets/qkl/su5.png')
        },
      ],
      mainData5: [
        {
          id: 1,
          name: '区块链底层平台',
          icon: require('@/assets/qkl/01.png'),
          activeIcon: require('@/assets/qkl/01-active.png'),
        },
        {
          id: 2,
          name: '公共数据服务平台',
          icon: require('@/assets/qkl/02.png'),
          activeIcon: require('@/assets/qkl/02-active.png'),
        },
        {
          id: 3,
          name: '数据资源管理平台',
          icon: require('@/assets/qkl/03.png'),
          activeIcon: require('@/assets/qkl/03-active.png'),
        },
        {
          id: 4,
          name: '业务管理平台',
          icon: require('@/assets/qkl/04.png'),
          activeIcon: require('@/assets/qkl/04-active.png'),
        },
        {
          id: 5,
          name: '多标识融合平台',
          icon: require('@/assets/qkl/05.png'),
          activeIcon: require('@/assets/qkl/05-active.png'),
        },
        {
          id: 6,
          name: '监管监测平台',
          icon: require('@/assets/qkl/06.png'),
          activeIcon: require('@/assets/qkl/06-active.png'),
        },
        {
          id: 7,
          name: '区块链浏览器',
          icon: require('@/assets/qkl/07.png'),
          activeIcon: require('@/assets/qkl/07-active.png'),
        },
        {
          id: 8,
          name: '星火链网APP',
          icon: require('@/assets/qkl/08.png'),
          activeIcon: require('@/assets/qkl/08-active.png'),
        },
      ],
      mainData6: [
        {
          id: 1,
          name: '企业组网',
          text: '帮助企业便捷地创建或加入生产环境的企业联盟链网络中，完美实现业务与区块链网络快速完成无缝对接。',
          icon: require('@/assets/qkl/img-1.png')
        },
        {
          id: 2,
          name: '身份链',
          text: '基于区块链的身份认证系统，为所有用户和区块链节点背书，去中心化的管理BaaS网络用户。',
          icon: require('@/assets/qkl/img-2.png')
        },
        {
          id: 3,
          name: '多底层支持',
          text: ' 提供适用于不同应用场景的多种底层区块链网络方案，使企业可以根据实际业务需求，灵活选择真正适合自己的区块链网络。',
          icon: require('@/assets/qkl/img-3.png')
        },
        {
          id: 4,
          name: '密钥保险箱',
          text: '全方位保护企业私密数据，保证用户在区块链上的数据、行为更加安全可靠。',
          icon: require('@/assets/qkl/img-4.png')
        },
        {
          id: 5,
          name: '区块链浏览器',
          text: '通过内置在智能合约中的展现方式，提供交易数据和状态数据的可视化探查功能，助力企业轻松查看链上数据。',
          icon: require('@/assets/qkl/img-5.png')
        },
        {
          id: 6,
          name: '一键部署',
          text: '帮助用户秒级启动企业级私有链网络，用户可以无需关心区块链底层细节，零门槛进入区块链世界。',
          icon: require('@/assets/qkl/img-6.png')
        },

      ],
      qklId: 1
    }
  },
  methods: {
    enterItem(id) {
      this.enterId = id
      console.log('id', id)
    },
    changeP(id) {
      this.pId = id
    },
    changePP(id) {
      this.pId2 = id
    },
    changeAdvantage(id) {
      this.advantageId = id
      this.selectAdv = this.mainData1.find(item => item.id === id)
    },
    changeqkl(id) {
      this.qklId = id
      console.log(' this.qklId', this.qklId)
    }
  }
}
</script>


<style lang="scss" scoped>
.m-baasBanner {
  width: 100%;
  height: 600px;
  background: url('@/assets/qkl/bgg.png') no-repeat center;

  .clearFix:after {
    clear: both;
    display: block;
    content: "";
  }

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;
    zoom: 1;

    .txt {
      float: left;

      h3 {
        font-size: 30px;
        color: black;
        padding: 104px 0 16px;
        font-weight: 500;
      }

      p {
        line-height: 26px;
        font-size: 16px;
        color: black;
        padding-bottom: 50px;
      }
    }

    .bcg {
      float: right;
      margin-right: -35px;

      img {
        border: none;
        vertical-align: top;
      }
    }
  }
}

.u-valueContent {
  display: flex;

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .f-commonTitle {
      font-size: 24px;
      color: #121537;
      text-align: center;
      padding: 45px 0 32px;
      font-weight: 500;
    }

    ul {
      width: 1100px;
      margin-left: 1px;
      list-style: none;
      zoom: 1;

      .clearFix:after {
        clear: both;
        display: block;
        content: "";
      }

      li {
        float: left;
        width: 548px;
        height: 168px;
        border: 1px solid #D9D9D9;
        margin-left: -1px;

        img {
          float: left;
          padding: 50px 40px 0 40px;
        }

        .txt {
          float: left;
          color: #353855;
          width: 328px;
          line-height: 26px;

          h3 {
            padding: 20px 0 12px;
            color: #121537;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.u-advantageContent {
  width: 100%;
  height: 520px;
  background: #F6F8FB;
  margin-top: 60px;

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .f-commonTitle {
      font-size: 24px;
      color: #121537;
      text-align: center;
      padding: 45px 0 32px;
      font-weight: 500;
    }

    .f-advantageUl {
      margin-left: 1px;
      margin-bottom: 93px;
      zoom: 1;

      .on {
        height: 350px;
        width: 300px;
        margin-top: -29px;
        border: none;
        border: 1px solid #d9d9d9;
        border-top: 5px solid #2E6DF6;
        background: url('@/assets/qkl/el-advantage-bcg.png') no-repeat bottom left #fff;
        text-align: center;
        box-shadow: 0 6px 18px 0 rgba(17, 76, 152, 0.14);
        position: relative;
        z-index: 99;
        transition: all 0.5s;
      }

      li {
        float: left;
        width: 232px;
        height: 288px;
        background: #fff;
        border: 1px solid #d9d9d9;
        margin-left: -1px;
        text-align: center;
        cursor: pointer;
        list-style: none;

        .img-01 {
          display: none;
          margin: 0 auto;
        }

        img {
          padding: 66px 0 28px;
        }

        h3 {
          font-size: 18px;
          color: #333;
          padding-bottom: 18px;
          font-weight: normal;
        }

        .arrow {
          img {
            padding: 0;
          }
        }

        p {
          //display: none;
          width: 240px;
          margin: 0 auto;
          font-size: 14px;
          color: #6F7287;
          line-height: 27px;
        }
      }
    }
  }
}

.u-serviceMode {
  width: 100%;
  height: 1030px;
  background: #363C55;

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .f-commonTitle {
      font-size: 24px;
      color: #fff;
      text-align: center;
      padding: 45px 0 32px;
      font-weight: 500;
    }

    .f-modeContent {
      width: 1100px;
      height: 884px;
      background: #fff;

      .list {
        margin: 0 40px 10px;
        position: relative;

        .clearFix:after {
          clear: both;
          display: block;
          content: "";
        }

        .title {
          width: 1020px;
          border-bottom: 1px solid #D8D8D8;
          position: relative;
          zoom: 1;

          h3 {
            font-size: 18px;
            color: #121537;
            line-height: 25px;
            height: 25px;
            padding: 32px 0 8px 6px;
            font-weight: 500;

            span {
              padding-right: 22px;
            }
          }

          .line {
            width: 30px;
            height: 4px;
            background: #2E6DF6;
            display: block;
            position: absolute;
            bottom: -1px;
            left: 0;
          }
        }

        .chart-con {
          zoom: 1;

          .chart {
            float: left;
            padding: 19px 183px 0 92px;

            img {
              border: none;
              vertical-align: top;
            }
          }

          ul {
            float: left;

            padding: 0;
            padding-top: 107px;
            margin: 0;
            list-style: none;

            .clearFix:after {
              clear: both;
              display: block;
              content: "";
            }

            li {
              line-height: 18px;
              font-size: 16px;
              color: #121537;
              zoom: 1;
              list-style: none;
              display: flex;
              align-items: center;

              img {
                float: left;
                padding-top: 15px;
              }

              p {
                float: left;
                padding-left: 14px;
                padding-top: 15px;
              }
            }
          }
        }

        .bcg {
          position: absolute;
          right: 22px;
          bottom: -30px;
        }
      }

      .list-02 {
        .chart {
          padding: 19px 80px 0 18px !important;
        }
      }
    }
  }
}

.u-coreFunction {
  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .f-commonTitle {
      font-size: 24px;
      color: #121537;
      text-align: center;
      padding: 45px 0 32px;
      font-weight: 500;
    }

    .clearFix {
      zoom: 1;
      display: flex;

      .f-characterTab {
        padding: 14px 40px 0 0;
        float: left;

        .active {
          background: #E7F1FB;
          color: #121537;
        }

        li {
          width: 198px;
          height: 48px;
          line-height: 48px;
          background: #fff;
          border: 1px solid #DFDFDF;
          font-size: 16px;
          color: #65677D;
          padding-left: 20px;
          margin-bottom: 15px;
          display: block;
          cursor: pointer;
        }
      }

      .f-characterDet {
        margin-top: 14px;
        width: 836px;
        height: 477px;
        float: left;
        /* width: 756px; */
        /* height: 390px; */
        background: #fff;
        border: 2px solid #DFDFDF;
        margin: 40px 0 50px;
        position: relative;

        h3 {
          position: absolute;
          top: -49px;
          left: 55px;
          height: 48px;
          line-height: 48px;
          padding: 0 12px;
          background: #fff;
          font-size: 24px;
          color: #121537;
          font-weight: normal;
          display: block;
          z-index: 999;
        }

        .bcg {
          text-align: left;
          float: left;
          padding: 35px 55px 0 43px;

          img {
            border: none;
            vertical-align: top;
          }
        }

        .txt {
          float: left;
          width: 270px;
          padding-top: 125px;

          .line {
            width: 20px;
            height: 4px;
            background: #2E6DF6;
            display: block;
            margin-bottom: 9px;
          }

          .chart-txt {
            li {
              margin-bottom: 10px;
              position: relative;

              img {
                position: absolute;
                left: -15px;
                top: 11px;
              }

              p {
                line-height: 28px;
                font-size: 14px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}

.m-advantageContent {
  width: 100%;
  height: 670px;
  background: url('@/assets/qkl/el-advantage-setting.png') no-repeat center;

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .clearFix:after {
      clear: both;
      display: block;
      content: "";
    }

    .f-modelTitle {
      position: relative;
      text-align: center;
      padding-top: 50px;

      h2 {
        font-size: 48px;
        color: #F2F2F2;
      }

      h3 {
        font-size: 28px;
        color: #121537;
        position: absolute;
        top: 98px;
        width: 114px;
        left: 50%;
        margin-left: -57px;
      }

      img {
        position: absolute;
        top: 74px;
        left: 50%;
        margin-left: 300px;
      }
    }

    .u-advantageTab {
      display: flex;
      justify-content: space-between;
      padding-top: 48px;

      .clearFix:after {
        clear: both;
        display: block;
        content: "";
      }

      .active {
        .txt {
          .line {
            width: 68px;
            height: 4px;
            background: #2E6DF6;
            display: block;
            margin-top: 7px;
          }

          p {
            color: #121537;
          }
        }
      }

      li:hover .txt p {
        color: #121537;
      }

      li {
        cursor: pointer;
        float: left;
        padding-right: 28px;
        list-style: none;
        zoom: 1;
        display: flex;
        align-items: center;

        img {
          float: left;
        }

        .txt {
          float: left;
          padding-left: 10px;

          p {
            font-size: 17px;
            color: #65677D;
            line-height: 32px;
          }
        }
      }
    }

    .f-advantageInfo {
      width: 1100px;
      height: 325px;
      background: url('@/assets/qkl/el-bcg-line02.png') repeat-x;
      display: block;
      position: relative;
      box-shadow: 0 7px 35px 0 rgba(0, 0, 0, 0.08);

      .dot-bcg {
        position: absolute;
        top: 20px;
        right: 0;
      }

      .bounceInUp {
        .txt {
          float: left;
          padding: 74px 0 0 80px;

          h3 {
            font-size: 28px;
            color: #121537;
            font-weight: 500;
            padding-bottom: 30px;
          }

          p {
            width: 480px;
            font-size: 18px;
            line-height: 36px;
            color: #6F7287;
          }
        }

        .bcg {
          float: right;
          padding: 20px 110px 0 0;
        }
      }
    }
  }
}

.m-platformContent {
  width: 100%;
  height: 670px;
  background: url('@/assets/qkl/el-platform-bcg.png') no-repeat center;

  .u-mainCon {
    position: relative;
    width: 1100px;
    margin: 0 auto;

    .f-modelTitle {
      position: relative;
      text-align: center;
      padding-top: 10px;

      h2 {
        color: #35539A;
        font-size: 48px;
      }

      h3 {
        font-size: 28px;
        color: #fff;
        position: absolute;
        top: 99px;
        width: 114px;
        left: 50%;
        margin-left: -57px;
      }
    }

    .f-platformList {
      position: relative;

      .list-01 {
        position: absolute;
        left: 35px;
        top: 220px;
      }

      .list-02 {
        position: absolute;
        right: 74px;
        top: 46px;
      }

      .list-03 {
        position: absolute;
        right: 100px;
        top: 420px;
      }
    }
  }
}

.clearFix:after {
  clear: both;
  display: block;
  content: "";
}

.u-applyIntroduce {
  margin: 40px 0 6px;
  position: relative;
  width: 1100px;
  margin: 0 auto;

  .bcg {
    float: left;
  }

  .info {
    float: left;
    width: 538px;
    padding: 60px 0 0 65px;

    .f-introduceTitle {
      position: relative;

      h3 {
        font-size: 18px;
        color: #121537;
        font-weight: 500;
        height: 25px;
        line-height: 25px;

        .line {
          width: 25px;
          height: 4px;
          background: #2E8CF6;
          display: block;
          position: absolute;
          top: -14px;
          left: 0;
        }
      }
    }

    .f-introduceTxt {
      font-size: 14px;
      line-height: 30px;
      color: #353855;
      padding-top: 27px;
    }
  }

  .bcg-01 {
    position: absolute;
    top: 39px;
    right: 0;
    z-index: -1;
  }

  .bcg-02 {
    position: absolute;
    top: 110px;
    right: 0;
    z-index: -1;
  }
}

.f-listBcg {
  width: 1098px;
  border: 1px solid #CCCCCC;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;


  img {
    padding: 30px 0;
  }
}

.f-listBcg {
  width: 1098px;
  border: 1px solid #CCCCCC;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
}

.f-listTxt {
  padding-top: 10px;
  width: 1100px;
  margin: auto;

  p {
    font-size: 14px;
    line-height: 30px;
    color: #353855;
  }
}

.u-applyIntroduce {
  //margin: 40px 0 6px;
  position: relative;

  .bcg {
    float: left;
  }

  .info-list {
    float: left;
    padding: 60px 0 0 85px;

    .clearFix:after {
      clear: both;
      display: block;
      content: "";
    }

    li {
      height: 34px;
      line-height: 34px;
      font-size: 15px;
      color: #353855;
      padding-bottom: 12px;
      list-style: none;
      display: flex;
      align-items: center;

      .dot {
        float: left;
        width: 5px;
        height: 5px;
        background: #999;
        border-radius: 2.5px;
        display: block;
        margin: 0px 12px 0 0;
      }

      p {
        float: left;
      }
    }
  }
}

.f-listEnterprise {
  width: 1200px;
  margin: auto;

  .f-bigTitle {
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #121537;
    font-weight: 500;
    padding-top: 22px;

    img {
      padding-right: 6px;
    }
  }

  .clearFix:after {
    clear: both;
    display: block;
    content: "";
  }

  ul {
    padding-top: 20px;

    .clearFix:after {
      clear: both;
      display: block;
      content: "";
    }

    .last {
      margin: 0;
    }

    li {
      border: none;
      float: left;
      /* width: 532px; */
      height: 170px;
      background: #fff;
      width: 530px;
      list-style: none;;
      border: 1px solid #e6e6e6 \9
    ;
      box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.1);
      margin-right: 34px;

      img {
        float: left;
        margin: 7px 38px 0 8px;
      }

      .txt {
        float: left;
        width: 230px;
        font-size: 14px;
        color: #353855;
        line-height: 24px;

        .line {
          width: 25px;
          height: 4px;
          background: #2E6DF6;
          margin: 38px 0 20px;
          display: block;
        }
      }
    }
  }

}

.cont2 {
  width: 100%;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  .container:after {
    clear: both;
  }

  .container {
    width: 1170px;

    h1 {
      font-weight: normal;
      margin-top: 50px;
      font-size: 24px;
      text-align: center;
      margin-bottom: 30px;
    }

    .share {
      display: flex;
      justify-content: space-between;
      width: 980px;
      margin: 0 auto;

      .left {
        float: left;
        width: 40%;

        h2 {
          font-size: 20px;
          text-align: center;
          color: #595757;
          font-weight: normal;
          margin: 40px 0 35px;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            margin: 0 8px;
          }
        }

        .kua {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;

          .shaCon {
            background: #fff;
            box-shadow: 0 3px 10px #ddd;
            text-align: center;
            width: 150px;
            height: 195px;

            img {
              margin-top: 30px;
            }

            h2 {
              margin-top: 30px;
              font-size: 18px;
              color: #2983f0;
              text-align: center;
              /* color: #595757; */
              font-weight: normal;
              margin: 40px 0 35px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
}

.cont3 {
  width: 100%;
  padding-bottom: 60px;

  .container {
    width: 1100px;
    margin: auto;

    h1 {
      font-weight: normal;
      margin-top: 50px;
      font-size: 24px;
      text-align: center;
      margin-bottom: 30px;
    }

    h2 {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      font-size: 30px;
    }
  }
}

.cont4 {
  background: #f2f2f2;
  width: 100%;
  overflow: hidden;
  padding-bottom: 60px;

  .container {
    width: 1170px;
    margin: auto;

    h1 {
      font-weight: normal;
      margin-top: 50px;
      font-size: 24px;
      text-align: center;
      margin-bottom: 30px;
    }

    .lm-cont4 {
      .section {
        width: 100%;
        height: 165px;
        background: #fff;
        box-shadow: 0 3px 10px #ddd;
        display: flex;
        align-items: center;
        margin-bottom: 18px;

        .col-md-2 {
          padding: 0 30px;
          width: 16.66666667%;
          float: left;
        }

        .col-md-10 {
          padding: 0 30px 0 49px;
          width: 83.33333333%;
          float: left;

          h2 {
            font-size: 22px;
            color: #000f19;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
          }

          p {
            font-size: 16px;
            color: #666;
            margin: 0;
            line-height: 26px;
          }
        }
      }
    }
  }
}

.wpo-features-section-2 {
  padding-bottom: 100px;
  padding-top: 50px;

  .container {
    width: 1170px;
    margin: auto;
    padding-right: 15px;
    padding-left: 15px;

    .section-title {
      margin: auto;
      margin-bottom: 55px;
      text-align: center;

      h2 {
        padding-bottom: 25px;
        position: relative;
        display: inline-block;
        color: #2d4277;
        font-size: 36px;
        font-weight: 600;
      }

      h2:before {
        position: absolute;
        content: "";
        left: 50%;
        bottom: 0;
        width: 100px;
        height: 5px;
        background: #0069ff;
        border-radius: 15px;
        transform: translateX(-50%);
      }

      h2:after {
        position: absolute;
        content: "";
        left: 56%;
        bottom: 0;
        width: 8px;
        height: 5px;
        border-radius: 15px;
        background: #fff;
        transform: translateX(-60%);
      }

      p {
        max-width: 480px;
        color: #666666;
        line-height: 1.6em;
        font-size: 16px;
        margin: auto;
      }
    }

    .wpo-features-bundle:before {
      position: absolute;
      left: 15%;
      top: 28%;
      width: 70%;
      content: "";
      border: 1px dashed rgb(160, 160, 160, .2);
    }

    .wpo-features-bundle {
      box-shadow: 0px 5px 15px 0px rgba(68, 68, 68, 0.1);
      background: #fff;
      /* box-shadow: 0px 5px 18.4px 1.6px rgba(0, 105, 255, 0.1); */
      padding: 60px 50px 30px;
      position: relative;
      display: flex;

      .row {
        margin-right: -15px;
        margin-left: -15px;
        float: left;
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;

        .col-md-3 {
          width: 22%;
          float: left;
          position: relative;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;

          .wpo-features-style-2 {
            text-align: center;
            margin-bottom: 30px;

            .wpo-features-single {
              .wpo-features-icon {
                width: 130px;
                height: 130px;
                background: #fff;
                line-height: 130px;
                border-radius: 50%;
                margin: auto;
                margin-bottom: 40px;
                -webkit-box-shadow: 0px 10px 40px 0px rgba(50, 50, 50, 0.1);
                -moz-box-shadow: 0px 10px 40px 0px rgba(50, 50, 50, 0.1);
                box-shadow: 0px 10px 40px 0px rgba(50, 50, 50, 0.1);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;

                .fi:before {
                  color: #0069ff;
                }
              }

              .wpo-features-text {
                h2 {
                  color: #283a5e;
                  font-size: 24px;
                  font-weight: 600;
                  margin-bottom: 20px;
                  transition: all .3s ease;
                }

                p {
                  color: #666666;
                  line-height: 1.6em;
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}

.wpo-service-area {
  padding-bottom: 90px;
  display: flex;

  .container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto;

    .row {
      margin-right: -15px;
      margin-left: -15px;

      .section-title {
        margin: auto;
        margin-bottom: 55px;
        text-align: center;

        h2 {
          padding-bottom: 25px;
          position: relative;
          display: inline-block;
          color: #2d4277;
          font-size: 36px;
          font-weight: 600;
        }

        h2:before {
          position: absolute;
          content: "";
          left: 50%;
          bottom: 0;
          width: 100px;
          height: 5px;
          background: #0069ff;
          border-radius: 15px;
          transform: translateX(-50%);
        }

        h2:after {
          position: absolute;
          content: "";
          left: 56%;
          bottom: 0;
          width: 8px;
          height: 5px;
          border-radius: 15px;
          background: #fff;
          transform: translateX(-60%);
        }

        p {
          max-width: 480px;
          color: #666666;
          line-height: 1.6em;
          font-size: 16px;
          margin: auto;
        }
      }

      .col-lg-4 {
        width: 30.333333%;
        float: left;
        padding-right: 15px;
        padding-left: 15px;

        .wpo-service-item {
          padding: 40px 25px;
          /* -webkit-box-shadow: 0px 5px 15px 0px rgba(68, 68, 68, 0.1); */
          box-shadow: 0px 5px 15px 0px rgba(68, 68, 68, 0.1);
          margin-bottom: 30px;

          .wpo-service-icon {
            text-align: center;
            margin: auto;
            margin-bottom: 40px;

            img {
              width: 169px;
              height: 168px;
              object-fit: contain;
            }
          }

          .wpo-service-text {
            text-align: center;

            h2 {
              font-size: 24px;
              font-weight: 600;
              color: #2d4277;
              margin-bottom: 20px;
              margin-top: 10px;
            }

            p {
              height: 80px;
              margin: 15px 0;
              font-weight: 400;
              color: #666666;
              line-height: 1.6em;
              font-size: 16px;
            }
          }
        }
      }
    }


  }
}

.logical-architecture {
  background-color: #f4f8ff;
  line-height: 1.5;

  .logical-arch-cont {
    position: relative;
    padding-bottom: 60px;
    width: 1200px;
    margin: 0 auto;

    .platform-part-title {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      padding-top: 50px;

      .platform-part-title-text:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate3d(-50%, 0, 0);
        width: 70px;
        height: 2px;
        background-color: #4f545b;
      }

      .platform-part-title-text {
        position: relative;
        font-size: 32px;
        font-weight: 500;
        padding-bottom: 10px;
        line-height: 1;
        color: #272f38;
      }


    }

    .platform-part-subtitle {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
      color: #626e7b;
      text-align: center;
    }

    .logical-architecture-block {
      position: relative;
      text-align: center;

      .logical-architecture-img {
        width: 912px;
        height: 616px;
        margin: 0 auto;


      }

      .arrow1 {
        position: absolute;
        background: url('@/assets/qkl/arrow.png');
        width: 23px;
        height: 20px;
        top: 445px;
        left: 269px;
        animation: arrow1Animation 7s linear infinite;
        background-size: contain;
      }

      .arrow2 {
        position: absolute;
        //background: url('@/assets/qkl/arrow.png');
        width: 23px;
        height: 20px;
        top: 445px;
        left: 269px;
        //animation: arrow2Animation 10s linear infinite;
        background-size: contain;
        //background: red;
      }

      @keyframes arrow1Animation {
        0% {
          transform: translate(0, 0); /* 初始位置 */
        }
        20% {
          //transform: translate(30px, 50px); /* 向右下移动 */
        }
        40% {
          transform: translate(490px, -340px); /* 向右上移动 */
        }
        60% {
          //transform: translate(30px, -50px); /* 向左上移动 */
        }
        80% {
          //transform: translate(-30px, -20px); /* 向左下移动 */
        }
        100% {
          transform: translate(0, 0); /* 回到初始位置 */
        }
      }

      @keyframes arrow2Animation {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(80px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    .logical-architecture-bg {
      position: absolute;
      width: 1238px;
      top: 210px;
      left: -90px;
    }
  }
}

.core-products {
  background-color: #fff;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .platform-part-title {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      padding-top: 50px;

      .platform-part-title-text:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate3d(-50%, 0, 0);
        width: 70px;
        height: 2px;
        background-color: #4f545b;
      }

      .platform-part-title-text {
        position: relative;
        font-size: 32px;
        font-weight: 500;
        padding-bottom: 10px;
        line-height: 1;
        color: #272f38;
      }


    }

    .platform-part-subtitle {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 30px;
      color: #626e7b;
      text-align: center;
    }

    .products-wrapper {
      //padding-bottom: 90px;
      position: relative;

      .active {
        background-color: #517dd6;
        border: 1px solid #517dd6;

        //.product-tab {
        .product-tab-img {
          display: none !important;
        }

        .product-tab-img-active {
          display: block !important;
        }

        .product-tab-text {
          color: white !important;
        }

        //}
      }

      .products-tabs {
        display: flex;
        justify-content: space-around;
        margin-bottom: 60px;

        .product-tab {
          width: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 6px;
          border: 1px solid #ccc;
          border-radius: 2px;
          cursor: pointer;
          transition: all .3s;

          .product-tab-img {
            width: 60px;
            height: 60px;
            margin-bottom: 6px;
            display: block;
          }

          .product-tab-img-active {
            display: none;
            width: 60px;
            height: 60px;
            margin-bottom: 6px;
          }

          .product-tab-text {
            font-weight: 500;
            color: #333;
          }
        }
      }

      .products-list {
        height: 700px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;

        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          z-index: 1;
          box-sizing: content-box;

          .swiper-slide {
            height: 100%;
            position: relative;

            .product-name:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background-color: #2d69d8;
            }

            .product-name {
              position: relative;
              height: 30px;
              line-height: 30px;
              font-size: 24px;
              padding-left: 24px;
              margin-bottom: 30px;
              font-weight: 500;
            }

            .product-detail {
              display: flex;
              padding: 0 10px;

              .product-img {
                width: 574px;
                height: 438px;
                margin-right: 80px;
              }

              .product-info {
                flex: 1;

                .product-desc {
                  line-height: 30px;
                  margin-bottom: 24px;
                  color: #626e7b;
                }

                .product-feature-list {
                  display: flex;
                  flex-wrap: wrap;

                  .product-feature-text-item {
                    width: 247px;
                    height: 46px;
                    line-height: 46px;
                    margin: 0 16px 16px 0;
                    text-align: center;
                    color: #fff;
                    background-color: #517dd6;
                  }

                  .product-feature-item {
                    width: 160px;
                    height: 110px;
                    margin: 0 10px 10px 0;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    background-color: #517dd6;

                    .product-feature-img {
                      width: 60px;
                      height: 60px;
                      margin-bottom: 16px;
                    }
                  }
                }
              }
            }
          }

          .swiper-slide2 {
            height: 100%;
            position: relative;

            .product-name:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background-color: #2d69d8;
            }

            .product-name {
              position: relative;
              height: 30px;
              line-height: 30px;
              font-size: 24px;
              padding-left: 24px;
              margin-bottom: 30px;
              font-weight: 500;
            }

            .product-detail {
              display: flex;
              padding: 0 10px;

              .product-img {
                width: 802px;
                height: 382px;
                margin: 0 0 0 46px;
              }

              .product-info {
                flex: 1;

                .product-desc {
                  line-height: 30px;
                  margin-bottom: 12px;
                  color: #626e7b;
                }

                .product-feature-list {
                  display: flex;
                  flex-wrap: wrap;

                  .product-feature-text-item {
                    width: 247px;
                    height: 46px;
                    line-height: 46px;
                    margin: 0 16px 16px 0;
                    text-align: center;
                    color: #fff;
                    background-color: #517dd6;
                  }

                  .product-feature-item {
                    width: 156px;
                    height: 110px;
                    margin: 0 10px 10px 0;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    background-color: #517dd6;

                    .product-feature-img {
                      width: 60px;
                      height: 60px;
                      margin-bottom: 16px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.construct-content {
  height: 900px;
  //padding-top: 80px;
  text-align: center;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .title {
      height: 29px;
      font-size: 30px;
      line-height: 29px;
      color: #333;
      margin-bottom: 29px;
    }

    .desc {
      font-size: 16px;
      line-height: 26px;
      color: #666;
      margin-bottom: 40px;
    }

    .construct-img {
      width: 910px;
      height: 516px;
      margin: 0 auto;
    }
  }
}

.alliance-content {
  height: 860px;
  padding-top: 80px;
  text-align: center;
  background-color: #f8fbff;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .title {
      height: 29px;
      font-size: 30px;
      line-height: 29px;
      color: #333;
      margin-bottom: 29px;
    }

    .desc {
      font-size: 16px;
      line-height: 26px;
      color: #666;
      margin-bottom: 40px;
    }

    .alliance-img {
      width: 918px;
      height: 530px;
      margin: 0 auto;
    }
  }
}

.chain-net-content {
  height: 698px;
  padding-top: 80px;
  text-align: center;
  background-color: #f8fbff;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .title {
      height: 29px;
      font-size: 30px;
      line-height: 29px;
      color: #333;
      margin-bottom: 29px;
    }

    .desc {
      font-size: 16px;
      line-height: 26px;
      color: #666;
      margin-bottom: 40px;
    }

    .chain-net-list {
      display: flex;
      flex-wrap: wrap;

      .chain-net-item {
        display: flex;
        width: 496px;
        height: 188px;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 40px;
        text-align: left;

        .chain-net-item-img {
          width: 80px;
          height: 84px;
          margin-right: 32px;
        }

        .chain-net-item-content {
          .chain-net-item-title {
            height: 18px;
            font-size: 18px;
            line-height: 1;
            color: #272f38;
            margin-bottom: 25px;
          }

          .chain-net-item-desc {
            width: 398px;
            height: 63px;
            font-size: 14px;
            color: #626e7b;
            text-align: justify;
          }
        }
      }
    }
  }
}

.industrial-collaboration {
  padding-top: 80px;
  height: 674px;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .title {
      height: 29px;
      line-height: 29px;
      font-size: 30px;
      color: #333;
      margin-bottom: 29px;
      text-align: center;
    }

    .desc {
      line-height: 28px;
      font-size: 16px;
      color: #666;
      text-align: center;
    }

    .partners {
      padding: 20px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 1120px;
      margin: 21px auto;
      position: relative;
      background: url('@/assets/qkl/bg-img.png') no-repeat;
      background-size: 360px 360px;
      background-position: 50%;

      .paterner-item {
        padding: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        width: 350px;
        height: 120px;
        margin-bottom: 52px;
        position: relative;
        background-color: #fff;

        .paterner-logo-first {
          width: 150px;
          height: 40px;
          margin-bottom: 20px;
        }

        .paterner-logo-second {
          width: 177px;
          height: 40px;
          margin-bottom: 20px;
        }

        .paterner-logo-third {
          width: 44px;
          height: 48px;
          margin-bottom: 20px;
        }

        .paterner-logo-fourth {
          width: 126px;
          height: 40px;
          margin-bottom: 20px;
        }

        .paterner-desc {
          font-size: 14px;
          color: #626e7b;
        }

        .rt-img {
          position: absolute;
          top: 0;
          right: 16px;
          width: 71px;
          height: 46px;
        }
      }
    }
  }
}

.application {
  background: #f4f8ff;
  padding: 72px 0 46px;

  .content {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .cont-title {
      .title-text {
        font-size: 32px;
        color: #0e1a3a;
        text-align: center;
        font-weight: 500;
      }

      .sub-title-text {
        text-align: left;
        padding: 0 10px;
        margin-top: 16px;
        font-size: 16px;
        color: #626e7b;
        letter-spacing: 0;
        /* text-align: center; */
        line-height: 22px;
        font-weight: 400;
      }
    }

    .app-box {
      padding-top: 24px;
      display: flex;
      justify-content: space-between;

      img {
        width: 500px;
        height: auto;
        //margin: 25px 65px 0;
      }

      .application-list {
        .application-item {
          width: 435px;
          margin-bottom: 20px;

          .item-title {
            font-size: 18px;
            color: #272f38;
            letter-spacing: 0;
            font-weight: 500;
            margin-bottom: 8px;

            img {
              display: inline-block;
              width: 14px;
              margin-right: 2px;
              vertical-align: middle;
            }

            span {
              vertical-align: middle;
            }
          }

          .item-desc {
            font-size: 14px;
            color: #626e7b;
            letter-spacing: 0;
            text-align: justify;
            line-height: 22px;
            font-weight: 400;
            margin-left: 22px;
          }
        }
      }
    }
  }
}
</style>
