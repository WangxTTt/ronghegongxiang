<template>
  <div>
    <!--    <div class="banner-box">-->
    <!--      <div class="imga">-->
    <!--        <img class="banner" src="../../assets/home/banner.png"/>-->
    <!--      </div>-->
    <!--      <div class="img-text">-->
    <!--        <div class="text-inner">-->
    <!--          <h2 class="text1">企业合伙人</h2>-->
    <!--          <p></p>-->
    <!--          <h4 class="text2">-->
    <!--            开放API、个性化定制开发，高效连接企业多渠道数据，安全<br/>省心打造企业专属合作-->
    <!--          </h4>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <section id="product-banner" class="ecological-franchise">
      <div class="stream-server-box">
        <!-- banner content box -->
        <div class="banner-container">
          <!-- title -->
          <span id="title" class="title">图观™生态伙伴计划</span>
          <div class="sub-title">加盟招募</div>
          <!-- content -->
          <p class="p-tint">
            数字化改革浪潮下，图观引擎致力于构建开放、共赢的生态合作体系，热忱招募生态合作伙伴，共赢数字经济时代蓝海！
          </p>
        </div>
        <div class="banner-video-container">
          <div class="banner-video-img-wrap">
            <img alt="" class="img-bg" src="@/assets/home/招募计划.jpg">
            <!--            <img alt="" class="img-play-btn" src="../img/video-tutorial/video_play_btn.png">-->
          </div>

        </div>
      </div>
    </section>
    <div class="tg-product-banner-menu-container">
      <div class="tg-product-banner-menu-wrap">
        <div class="banner-title">图观™生态加盟</div>
        <ul class="banner-menu-list">
          <li @click="scrollToSection(1)"><span
              class="banner-menu-item long"><span>什么是</span>图观生态伙伴</span>
          </li>
          <li @click="scrollToSection(2)"><span class="banner-menu-item">加盟优势</span>
          </li>
          <li @click="scrollToSection(3)"><span class="banner-menu-item">生态权益支持</span>
          </li>
          <li @click="scrollToSection(4)"><span class="banner-menu-item">加盟流程</span></li>
          <li @click="scrollToSection(5)"><span class="banner-menu-item">生态加盟</span></li>
        </ul>
      </div>
    </div>

    <section id="intelligent-vision-mission" style="position: relative;">
      <div class="intelligent-container">
        <div class="tg-modular-default-title">什么是图观生态伙伴</div>
        <span class="tg-title-bottom-line"></span>
        <p class="tg-modular-default-title-content">
          数字经济时代，数字化转型已成为大势所趋。政策加持，加之产业升级，数字孪生技术所涉及的细分市场也呈现出<br>
          蓬勃发展的态势。在这样一个机遇与挑战并存的时代背景下，图观引擎致力于构建开放、共赢的生态合作体系，<br>
          热忱招募生态合作伙伴，共赢数字经济时代蓝海！
        </p>
        <div class="tg-modular-sub-title ecological-partner">图观生态伙伴类型</div>
        <div class="ecological-partner-wrap">
          <div class="ecological-partner-card">
            <img alt="渠道销售型合作伙伴" src="@/assets/home/渠道.png">
            <div>
              <div class="ecological-partner-card-title">渠道销售型合作伙伴</div>
              <div class="ecological-partner-card-text">
                具备图观产品销售和业务咨询能力，进行产品分销、推广和销售支持，与图观团队共同开拓市场，推动业务增长。
              </div>
            </div>
          </div>
          <div class="ecological-partner-card">
            <img alt="实施交付型合作伙伴" src="@/assets/home/交付.png">
            <div>
              <div class="ecological-partner-card-title">实施交付型合作伙伴</div>
              <div class="ecological-partner-card-text">具备图观项目实施和交付能力，提供三维建模 或
                应用开发、安装部署、驻场交付等服务，共同为客户提供卓越的服务。
              </div>
            </div>
          </div>
          <div class="ecological-partner-card">
            <img alt="资源集成型伙伴" src="@/assets/home/资源.png">
            <div>
              <div class="ecological-partner-card-title">资源集成型伙伴</div>
              <div class="ecological-partner-card-text">
                能够整合和协调各种资源，在自身产品或解决方案中集成图观，向用户提供综合性的整体解决方案，实现双方的业务增长和利益最大化。
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
    <section id="intelligent-developer-journey">
      <div class="intelligent-container">
        <div class="tg-modular-default-title">加盟优势</div>
        <span class="tg-title-bottom-line"></span>
        <div class="tg-modular-sub-title join-advantage">携手在这个时代机遇中实现共赢</div>
        <div class="join-advantage-wrap">
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">市场广阔</span>
              <img alt="市场广阔" src="@/assets/home/广阔.png">
            </div>
            <div class="join-advantage-card-content">
              数字化改革浪潮下，各行业数字化转型需求旺盛、数字孪生行业细分市场发展蓬勃，数字孪生是大势所趋，市场前景和销售机会广阔。
            </div>
          </div>
          <hr>
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">无套路、0成本上手</span>
              <img alt="无套路、0成本上手" src="@/assets/home/零成本.png">
            </div>
            <div class="join-advantage-card-content">
              公有云免费用，私有云低价装！海量功能，真免费使用！超实惠价格容量升级！真正让利给合作伙伴，超低成本获得强大的数字孪生开发技术能力。
            </div>
          </div>
          <hr>
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">技术成熟，经验丰富</span>
              <img alt="技术成熟，经验丰富" src="@/assets/home/经验.png">
            </div>
            <div class="join-advantage-card-content">
              数字冰雹拥有十余年、千余个、遍及数十个行业的项目实施经验，深谙行业需求和数字孪生技术特性，助力伙伴高质量进行项目实施。
            </div>
          </div>
          <hr>
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">品牌影响力强</span>
              <img alt="品牌影响力强" src="@/assets/home/影响力.png">
            </div>
            <div class="join-advantage-card-content">
              数字冰雹作为深耕行业十七年的老牌厂商，拥有很高的知名度和优良的市场口碑，深受用户的信任和赞誉，选择图观
              就是选择数字冰雹做您坚实后盾。
            </div>
          </div>
          <hr>
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">产品过硬</span>
              <img alt="产品过硬" src="@/assets/home/过硬.png">
            </div>
            <div class="join-advantage-card-content">
              图观引擎专为数字孪生应用开发而生，已被华为、京东、百度等大厂一致认证，具备实际应用性、可交付性、技术成熟性、扩展灵活性等优势，真正赋予合作伙伴数字孪生应用高品质交付能力。
            </div>
          </div>
          <hr>
          <div class="join-advantage-card">
            <div class="join-advantage-card-title-wrap">
              <span class="title">服务完善</span>
              <img alt="服务完善" src="@/assets/home/完善.png">
            </div>
            <div class="join-advantage-card-content">
              图观拥有完善的技术支持和服务体系，资深技术团队可为您提供从项目咨询、方案设计、数字孪生场景构建、开发运维全流程配套服务，为数字孪生应用开发提供坚实基础，减少您的技术风险和投资风险。
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="intelligent-developer-rights">
      <div class="intelligent-container">
        <div class="tg-modular-default-title">生态权益支持</div>
        <span class="tg-title-bottom-line"></span>
        <div class="tg-modular-sub-title">真正让伙伴获利</div>
        <div class="ecological-rights-support-wrap">
          <div class="ecological-rights-support-content cross-line">
            <div class="ecological-rights-support-card">
              <div class="content">
                <div class="title"><span></span><img alt="客户服务收益" src="@/assets/home/服务收益.png">客户服务收益
                </div>
                <div class="text">
                  通过为客户提供数字孪生技术服务，获得客户满意度认可，有助于您在数字孪生市场上建立良好的声誉和口碑，为您未来的业务发展打下坚实的基础。
                </div>
              </div>
              <img alt="客户服务收益" src="@/assets/home/服务收益.png">
            </div>
            <div class="ecological-rights-support-card">
              <img alt="软件销售收益" src="@/assets/home/销售收益.png">
              <div class="content">
                <div class="title"><span></span><img alt="软件销售收益" src="@/assets/home/销售收益.png">软件销售收益
                </div>
                <div class="text">
                  积极推广图观引擎并成交可获相应收益，当然，图观团队会为您提供全面的技术和营销支持，以帮助您顺利开展销售推广工作。
                </div>
              </div>
            </div>
            <div class="ecological-rights-support-card">
              <div class="content">
                <div class="title"><span></span><img alt="项目承接收益" src="@/assets/home/承接收益.png">项目承接收益
                </div>
                <div class="text">
                  我们可为生态合作伙伴提供商机资源和充足利润空间，帮助伙伴迅速打开市场；合作伙伴也可快速积累经验和提高技能，为未来的业务发展提供强有力的支持。
                </div>
              </div>
              <img alt="项目承接收益" src="@/assets/home/承接收益.png">
            </div>
            <div class="ecological-rights-support-card">
              <img alt="交易佣金分润" src="@/assets/home/佣金收益.png">
              <div class="content">
                <div class="title"><span></span><img alt="交易佣金分润" src="@/assets/home/佣金收益.png">交易佣金分润
                </div>
                <div class="text">与我们携手，共同拓展数字孪生市场，引荐客户或推荐项目商机并成交订单，实现共赢。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="franchise-process-container">
      <div class="intelligent-container">
        <div class="tg-modular-default-title">加盟流程</div>
        <span class="tg-title-bottom-line"></span>
        <div class="franchise-process-wrap">
          <div class="franchise-process-card">
            <img alt="图观注册" src="@/assets/home/流程01_注册.png">
            <div class="franchise-process-card-text"><span>01</span>图观注册</div>
            <img alt="" class="franchise-process-arrow-img" src="@/assets/home/流程00_箭头.png">
          </div>
          <div class="franchise-process-card">
            <img alt="加盟申请" src="@/assets/home/流程02_申请.png">
            <div class="franchise-process-card-text"><span>02 </span>加盟申请</div>
            <img alt="" class="franchise-process-arrow-img" src="@/assets/home/流程00_箭头.png">
          </div>
          <div class="franchise-process-card">
            <img alt="能力审核" src="@/assets/home/流程03_审核.png">
            <div class="franchise-process-card-text"><span>03 </span>能力审核</div>
            <img alt="" class="franchise-process-arrow-img" src="@/assets/home/流程00_箭头.png">
          </div>
          <div class="franchise-process-card">
            <img alt="技能培训" src="@/assets/home/流程04_培训.png">
            <div class="franchise-process-card-text"><span>04 </span>技能培训</div>
            <img alt="" class="franchise-process-arrow-img" src="@/assets/home/流程00_箭头.png">
          </div>
          <div class="franchise-process-card">
            <img alt="加盟签约" src="@/assets/home/流程05_签约.png">
            <div class="franchise-process-card-text"><span>05 </span>加盟签约</div>
            <img alt="" class="franchise-process-arrow-img" src="@/assets/home/流程00_箭头.png">
          </div>
          <div class="franchise-process-card">
            <img alt="开展合作" src="@/assets/home/流程06_合作.png">
            <div class="franchise-process-card-text"><span>06 </span>开展合作</div>
          </div>
        </div>
      </div>
    </section>
    <div class="section2">
      <div class="container">
        <div class="stitle">你要找哪种合伙人？</div>
        <ul class="clearfix">
          <li v-for="(item,index) in mainData1" :key="index">
            <img :src="item.img" alt="" class="srcbg">
            <div class="t">{{ item.title }}</div>
            <div class="dec">
              {{ item.text }}
              <a class="seemore popReg">立即查看</a>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <section class="content_1">
      <div class="content_title">伙伴类型</div>
      <div class="type_wrapper">
        <div class="type">
          <div class="type_title"><img src="@/assets/liveOne/战略级.svg">
            <div class="title_right">
              <div class="text">
                <div class="zh">战略级生态合作伙伴</div>
                <div class="en">SAP (Strategic Account Partner)</div>
              </div>
              <i aria-label="图标: up" class="icon hover_content_m anticon anticon-up">
                <svg aria-hidden="true" class="" data-icon="up" fill="currentColor" focusable="false"
                     height="1em" viewBox="64 64 896 896" width="1em">
                  <path
                      d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
              </i> <i aria-label="图标: down" class="icon no_hover_content_m anticon anticon-down">
              <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                   height="1em" viewBox="64 64 896 896" width="1em">
                <path
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </i></div>
          </div>
          <div class="hover_content">
            <ul class="type_content">
              <li>
                1）根据任务标准或邀请方式认定为战略合作伙伴；
              </li>
              <li>
                2）具备全国性营销网络，作为星环全国性产品销售平台（包括但不限于售前、售后、研发、资金等）；
              </li>
              <li>
                3）或在全国某几个行业或区域有深入的业务理解，市场份额领先，具有能够在星环产品平台上提供行业解决方案的能力；
              </li>
              <li>
                4）或对星环的中长期发展有资本、生态、市场等战略意义的伙伴；承诺在全国某些行业或区域市场优先推广星环产品或具有星环产品的集成性/联合解决方案，并根据协议完成在全国某些行业或某些区域市场的任务目标（包括但不限于：销售目标、人员培养目标、市场目标等）。
              </li>
            </ul>
          </div>
        </div>
        <div class="type">
          <div class="type_title"><img src="@/assets/liveOne/金牌级.svg">
            <div class="title_right">
              <div class="text">
                <div class="zh">金牌级生态合作伙伴</div>
                <div class="en">GMAP (Gold Medal Account Partner)</div>
              </div>
              <i aria-label="图标: up" class="icon hover_content_m anticon anticon-up">
                <svg aria-hidden="true" class="" data-icon="up" fill="currentColor" focusable="false"
                     height="1em" viewBox="64 64 896 896" width="1em">
                  <path
                      d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
              </i> <i aria-label="图标: down" class="icon no_hover_content_m anticon anticon-down">
              <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                   height="1em" viewBox="64 64 896 896" width="1em">
                <path
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </i></div>
          </div>
          <div class="hover_content">
            <ul class="type_content">
              <li>
                1) 根据任务标准认定为金牌合作伙伴；
              </li>
              <li>
                2) 在某几个行业或区域具有良好的销售能力，有健全的销售平台，作为星环在某几个行业或区域的产品销售平台（包括但不限于售前、售后、研发、资金等）；
              </li>
              <li>
                3) 或在某几个行业或区域有深入的业务理解和行业影响力，具有能够在星环产品平台上提供行业解决方案的能力；
              </li>
              <li>
                4) 承诺在某几个行业或区域优先推广星环产品或具有星环产品的集成性/联合解决方案，并根据协议完成在某几个行业或区域市场的任务目标（包括但不限于：销售目标、人员培养目标、市场目标等）。
              </li>
            </ul>
          </div>
        </div>
        <div class="type">
          <div class="type_title"><img src="@/assets/liveOne/银牌级.svg">
            <div class="title_right">
              <div class="text">
                <div class="zh">银牌级生态合作伙伴</div>
                <div class="en">SMAP (Silver Medal Account Partner)</div>
              </div>
              <i aria-label="图标: up" class="icon hover_content_m anticon anticon-up">
                <svg aria-hidden="true" class="" data-icon="up" fill="currentColor" focusable="false"
                     height="1em" viewBox="64 64 896 896" width="1em">
                  <path
                      d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
              </i> <i aria-label="图标: down" class="icon no_hover_content_m anticon anticon-down">
              <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                   height="1em" viewBox="64 64 896 896" width="1em">
                <path
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </i></div>
          </div>
          <div class="hover_content">
            <ul class="type_content">
              <li>
                1) 根据任务标准认定为银牌合作伙伴；
              </li>
              <li>
                2) 在某区域行业市场具有良好的销售能力，有健全的销售平台，作为星环在某区域行业的产品销售平台（包括但不限于售前、售后、研发、资金等）；
              </li>
              <li>
                3) 或在某区域行业市场有良好的业务理解和行业影响力，具有能够在星环产品平台上提供行业解决方案的能力；
              </li>
              <li>
                4) 承诺在某区域行业市场优先推广星环产品或具有星环产品的集成性/联合解决方案，并根据协议完成某区域行业市场的任务目标（包括但不限于：销售目标、人员培养目标、市场目标等）。
              </li>
            </ul>
          </div>
        </div>
        <div class="type">
          <div class="type_title"><img src="@/assets/liveOne/认证级.svg">
            <div class="title_right">
              <div class="text">
                <div class="zh">认证级生态合作伙伴</div>
                <div class="en">CAP (Certified Account Partner)</div>
              </div>
              <i aria-label="图标: up" class="icon hover_content_m anticon anticon-up">
                <svg aria-hidden="true" class="" data-icon="up" fill="currentColor" focusable="false"
                     height="1em" viewBox="64 64 896 896" width="1em">
                  <path
                      d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
              </i> <i aria-label="图标: down" class="icon no_hover_content_m anticon anticon-down">
              <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                   height="1em" viewBox="64 64 896 896" width="1em">
                <path
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </i></div>
          </div>
          <div class="hover_content">
            <ul class="type_content">
              <li>
                星环初级的认证合作伙伴。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="aimingPoint-0" class="partner1">
      <div class="max-width-1200">
        <div class="big-title">
          <h2>智能数据全生命周期产品管理</h2>
        </div>

        <div class="title-top">
          <p>
            作为国内最早的BI厂商之一，亿信华辰始终专注于商务智能和大数据领域，现已发展成为国内少有的能提供智能数据全生命周期产品与服务的厂商。历经18年发展，亿信华辰拥有25000+项目实施经验，12000+合作客户，1800+合作伙伴，覆盖200+细分行业，长期占据行业领先地位。</p>
          <p>
            现诚邀有行业优势、交付优势或者区域优势的合作伙伴，整合资源，合作共赢，共同打造大数据应用生态体系，开启大数据新时代。</p>
          <div class="links">
            <a target="_blank">查看全产品线</a>
          </div>
        </div>

        <ul class="even-share">
          <li class="subelement">
            <div class="text-top">
              <div class="icon icon1"></div>
              <h6>数据存储</h6>
              <p>data storage</p>
              <div class="btn">+</div>
            </div>
            <div class="text-bottom">
              <h6>数据存储</h6>
              <p>
                <a target="_blank" title="湖仓一体化平台PetaBase-s">湖仓一体化平台PetaBase-s</a>
                <a target="_blank" title="实时数据仓库平台PetaBase-V">实时数据仓库平台PetaBase-V</a>
              </p>
            </div>
          </li>
          <li class="subelement">
            <div class="text-top">
              <div class="icon icon2"></div>
              <h6>数据处理</h6>
              <p>data processing</p>
              <div class="btn">+</div>
            </div>
            <div class="text-bottom">
              <h6>数据处理</h6>
              <p>
                <a target="_blank" title="报表采集分析-i@Report">报表采集分析-i@Report</a>
                <a target="_blank" title="数据工厂-EsDataFactory">数据工厂-EsDataFactory</a>
                <a target="_blank" title="指标管理-EsPowerIndex">指标管理-EsPowerIndex</a>
              </p>
            </div>
          </li>
          <li class="subelement">
            <div class="text-top">
              <div class="icon icon3"></div>
              <h6>数据治理</h6>
              <p>Data governance</p>
              <div class="btn">+</div>
            </div>
            <div class="text-bottom">
              <h6>数据治理</h6>
              <p>
                <a target="_blank" title="智能数据治理平台-睿治">智能数据治理平台-睿治</a>
                <a target="_blank" title="元数据管理-EsPowerMeta">元数据管理-EsPowerMeta</a>
                <a target="_blank" title="数据标准管理平台-EsDataStandard">数据标准管理平台-EsDataStandard</a>
                <a target="_blank" title="数据质量管理-EsDataClean">数据质量管理-EsDataClean</a>
                <a target="_blank" title="数据交换管理平台-EsDataExchange">数据交换管理平台-EsDataExchange</a>
                <a target="_blank" title="主数据管理平台-EsMDM">主数据管理平台-EsMDM</a>
                <a target="_blank" title="数据资产管理平台-EsDataAssets">数据资产管理平台-EsDataAssets</a>
              </p>
            </div>
          </li>
          <li class="subelement">
            <div class="text-top">
              <div class="icon icon4"></div>
              <h6>数据分析</h6>
              <p>Data analysis</p>
              <div class="btn">+</div>
            </div>
            <div class="text-bottom">
              <h6>数据分析</h6>
              <p>
                <a target="_blank" title="一站式数据分析平台-亿信ABI">一站式数据分析平台-亿信ABI</a>
                <a target="_blank" title="大屏可视化平台-酷屏">大屏可视化平台-酷屏</a>
                <a target="_blank" title="智能数据问答平台-智问">智能数据问答平台-智问</a>
                <a target="_blank" title="自助式数据分析-豌豆BI">自助式数据分析-豌豆BI</a>
                <a target="_blank" title="数据挖掘平台-豌豆DM">数据挖掘平台-豌豆DM</a>
              </p>
            </div>
          </li>
          <li class="subelement">
            <div class="text-top">
              <div class="icon icon5"></div>
              <h6>运营监控</h6>
              <p>Monitoring</p>
              <div class="btn">+</div>
            </div>
            <div class="text-bottom">
              <h6>运营监控</h6>
              <p>
                <a>系统管理</a>
                <a>系统监控</a>
                <a>数据监控</a>
                <a>服务监控</a>
                <a>数据价值</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content_2">
      <div class="content_title">如何成为稷生合作伙伴</div>
      <div class="step_wrapper">
        <div class="step">
          <div class="circle1">
            <div class="circle2"><img src="@/assets/liveOne/审核.svg"></div>
          </div>
          <div class="text">
            <div class="text1">step.01</div>
            <div class="text2">提交认证资料，通过审核</div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrow1">
            <div class="arrow2"></div>
          </div>
        </div>
        <div class="step">
          <div class="circle1">
            <div class="circle2"><img src="@/assets/liveOne/合作协议.svg"></div>
          </div>
          <div class="text">
            <div class="text1">step.02</div>
            <div class="text2">签订合作协议</div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrow1">
            <div class="arrow2"></div>
          </div>
        </div>
        <div class="step">
          <div class="circle1">
            <div class="circle2"><img src="@/assets/liveOne/合作伙伴.svg"></div>
          </div>
          <div class="text">
            <div class="text1">step.03</div>
            <div class="text2">成为合作伙伴</div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrow1">
            <div class="arrow2"></div>
          </div>
        </div>
        <div class="step">
          <div class="circle1">
            <div class="circle2"><img src="@/assets/liveOne/授权证书.svg"></div>
          </div>
          <div class="text">
            <div class="text1">step.04</div>
            <div class="text2">颁发授权证书</div>
          </div>
        </div> <!----></div>
    </section>
    <section class="content_3">
      <div class="content_title">合作伙伴要求及权益</div>
      <div class="require_wrapper">
        <div class="title_wrapper">
          <div class="name_wrapper2"></div>
          <div class="value_wrapper2">
            <div class="require_title" style="background-color:#353535;"><img src="@/assets/liveOne/战略级.svg">
              <div>战略级</div>
            </div>
            <div class="require_title" style="background-color:#CFAD5A;"><img
                src="@/assets/liveOne/金牌级.svg">
              <div>金牌级</div>
            </div>
            <div class="require_title" style="background-color:#79AFC7;"><img
                src="@/assets/liveOne/银牌级.svg">
              <div>银牌级</div>
            </div>
            <div class="require_title" style="background-color:#D5A98D;"><img
                src="@/assets/liveOne/认证级.svg">
              <div>认证级</div>
            </div>
          </div>
        </div>
        <div class="content_wrapper">
          <div class="name_wrapper">
            <div class="row name_row">
              <div class="col">市场地位</div>
              <div class="col">公司资质门槛</div>
              <div class="col">星环认证工程师</div>
              <div class="col">业绩要求</div>
              <div class="col">业绩激励</div>
            </div>
          </div>
          <div class="value_wrapper">
            <div class="row">
              <div class="col">行业领先</div>
              <div class="col"><span>注册资本≥500万且成立时间＞1年</span></div>
              <div class="col">不少于4名</div>
              <div class="col">500万</div>
              <div class="col">有</div>
            </div>
            <div class="row">
              <div class="col">有行业影响力</div>
              <div class="col"><span>注册资本≥500万且成立时间＞1年</span></div>
              <div class="col">不少于3名</div>
              <div class="col">200万</div>
              <div class="col">有</div>
            </div>
            <div class="row">
              <div class="col">有行业影响力</div>
              <div class="col"><span>注册资本≥500万且成立时间＞1年</span></div>
              <div class="col">不少于2名</div>
              <div class="col">100万</div>
              <div class="col">有</div>
            </div>
            <div class="row">
              <div class="col">-</div>
              <div class="col"><span>注册资本≥500万且成立时间＞1年</span></div>
              <div class="col">不少于1名</div>
              <div class="col">50万</div>
              <div class="col">有</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content_1 last_content">
      <div class="content_title">700+ 生态合作伙伴</div>
      <div class="logo_wrapper">
        <div class="img-box"><img src="@/assets/liveOne/partnerlogo.png"></div>
      </div>
    </section>
    <section id="aimingPoint-1" class="partner2">
      <div class="max-width-1200">
        <div class="big-title">
          <h2>选择稷生科技的四大理由</h2>
        </div>
        <ul class="even-share">
          <li class="subelement">
            <div class="icon icon1"></div>
            <h6>产品全覆盖</h6>
            <p>
              亿信华辰围绕数据全生命周期打造了多款重量级核心智能数据产品，其产品线涵盖数据处理、数据存储、数据治理到数据分析等多个领域。</p>
          </li>
          <li class="subelement">
            <div class="icon icon2"></div>
            <h6>经验丰富</h6>
            <p>产品成熟稳定，历经18年沉淀积累，在政务、金融、电力、大型企业集团等多个行业得到广泛应用，行业案例丰富。</p>
          </li>
          <li class="subelement">
            <div class="icon icon3"></div>
            <h6>服务优质</h6>
            <p>
              亿信华辰提供产品免费云体验、线上及线下培训支持、社区7*24小时支持等各类服务，可帮助伙伴快速并有效的完成项目交付。</p>
          </li>
          <li class="subelement">
            <div class="icon icon4"></div>
            <h6>政策更优</h6>
            <p>在产品、市场上深度合作，带给合作伙伴更具竞争力的产品价格和利润空间，共享渠道资源，提升彼此的竞争能力。</p>
          </li>
        </ul>
      </div>
    </section>
    <section id="aimingPoint-2" class="partner3">
      <div class="max-width-1200">
        <div class="big-title">
          <h2>合作方式</h2>
        </div>
        <ul class="even-share">
          <li class="subelement">
            <div class="img">
              <img alt="亿信华辰项目合作合作方式" src="@/assets/liveOne/tu1.jpg">
            </div>
            <div class="title">
              <h5>项目合作</h5>
              <h6>携手亿信华辰，共同完成项目交付</h6>
              <p>提供全方位服务支持</p>
              <p>提高项目交付效率</p>
            </div>
          </li>
          <li class="subelement">
            <div class="img">
              <img alt="亿信华辰产品/服务合作合作方式" src="@/assets/liveOne/tu2.jpg">
            </div>
            <div class="title">
              <h5>产品/服务合作</h5>
              <h6>携手亿信华辰，共同推广和销售亿信的产品和服务</h6>
              <p>优势互补，满足客户不同应用需求</p>
              <p>降低项目开发成本</p>

            </div>
          </li>
          <li class="subelement">
            <div class="img">
              <img alt="亿信华辰OEM合作合作方式" src="@/assets/liveOne/tu3.jpg">
            </div>
            <div class="title">
              <h5>OEM合作</h5>
              <h6>携手亿信华辰，共同打造高价值业务系统或行业解决方案</h6>
              <p>提供产品技术支持</p>
              <p>提升伙伴产品的竞争力</p>

            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="section4">
      <div class="stitle">简单五步即可对接</div>
      <div class="container">
        <img alt="" class="stepbg" src="../../assets/liveOne/step.png">
        <ul>
          <li>免费注册认证</li>
          <li>一键投递项目</li>
          <li>海量创投资源</li>
          <li>线下直约</li>
          <li>项目接洽合作</li>
        </ul>
      </div>
    </div>
    <div class="section5">
      <div class="stitle">线下真实对接加速创投合作</div>
      <div class="container">
        <div v-for="(item,index) in mainData2" :key="index" class="items">
          <img :src="item.img" alt="" class="">
          <span class="w">{{ item.title }}</span>
        </div>

        <a class="applyact">我要报名活动 &gt;&gt;</a>
      </div>
    </div>
    <div class="section6">
      <div class="container">
        <div class="swiper-container">
          <div class="swiper-wrapper"
               style="width:1200px;  height: 274px; margin: auto">
            <div v-for="(item,index) in mainData3" :key="index" class="swiper-slide swiper-slide-duplicate"
                 style="width: 287.5px; height: 274px;">
              <a>
                <div class="item">
                  <img :src="item.img" class="srcicon">
                  <div class="dec">
                    <div class="fn-text2-overflow">{{ item.text }}
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
        <div class="spage"><span class="ll"></span><span class="rr"></span></div>
      </div>
    </div>
    <div class="section7">
      <div class="stitle">投融界，专业的企业服务平台</div>
      <div class="container">
        <img class="bgs" src="../../assets/liveOne/bg4.jpg">
        <div class="w">
          浙江投融界科技有限公司是国内专业的一站式企业服务平台，创立于2010年，迄今已有12年企业服务经验。以“科技+服务”为核心资源优势，以“专业服务驱动企业价值提升”为使命，为处在各不同阶段的企业，提供包括创业辅导、创业培训、创投视界在内的企业一体化成长解决方案。
        </div>
      </div>
    </div>
    <!--    <div class="section8">-->
    <!--      <div class="stitle">来投融界，助您打通行业人脉</div>-->
    <!--      <div class="container">-->
    <!--        <ul class="clearfix">-->
    <!--          <li v-for="(item,index) in mainData4" :key="index">-->
    <!--            <img :src="item.img">-->
    <!--            <div class="w">{{ item.text }}</div>-->
    <!--          </li>-->

    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="a2">
      <div class="list1">
        <ul>
          <li>
            <img class="img1" height="158" src="@/assets/liveOne/cover6.png" width="254">
            <div class="zi">
              <div class="zi1">哈佛商业评论</div>
              <div class="zi2">
                FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场...
              </div>
              <div class="zi3"><a>查看详情</a></div>
            </div>
            <div style="clear:both"></div>
          </li>
          <li><img class="img1" height="158" src="@/assets/liveOne/cover7.png" width="254">
            <div class="zi">
              <div class="zi1">领英</div>
              <div class="zi2">
                FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场...
              </div>
              <div class="zi3"><a>查看详情</a></div>
            </div>
            <div style="clear:both"></div>
          </li>
          <li><img class="img1" height="158" src="@/assets/liveOne/cover8.png" width="254">
            <div class="zi">
              <div class="zi1">阳光100青年干部学校基地</div>
              <div class="zi2">
                FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场...
              </div>
              <div class="zi3"><a>查看详情</a></div>
            </div>
            <div style="clear:both"></div>
          </li>
          <li><img class="img1" height="158" src="@/assets/liveOne/cover9.jpg" width="254">
            <div class="zi">
              <div class="zi1">培训供应商</div>
              <div class="zi2">
                FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场...
              </div>
              <div class="zi3"><a>查看详情</a></div>
            </div>
            <div style="clear:both"></div>
          </li>

        </ul>
        <div class="listpage"></div>
      </div>
    </div>
    <div class="net pc-block">
      <div class="w1440">
        <div class="net-middle">
          <div class="title"><h2>全方位保障高品质网站</h2></div>
          <div class="tab-lists">
            <ul id="js-tab-0" class="js-tab">
              <li :class="{'active': colorId == 1}" class="tab-icon tab1" @click="changeColor(1)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>文案团队加持</p></div>
              </li>
              <li :class="{'active': colorId == 2}" class="tab-icon tab2" @click="changeColor(2)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>专业建站团队</p></div>
              </li>
              <li :class="{'active': colorId == 3}" class="tab-icon tab3" @click="changeColor(3)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>12年线上营销经验</p></div>
              </li>
              <li :class="{'active': colorId == 4}" class="tab-icon tab4" @click="changeColor(4)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>高新技术企业</p></div>
              </li>
              <li :class="{'active': colorId == 5}" class="tab-icon tab5" @click="changeColor(5)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>完善售后服务</p></div>
              </li>
              <li :class="{'active': colorId == 6}" class="tab-icon tab6" @click="changeColor(6)">
                <div class="tab-flex">
                  <div class="img"></div>
                  <p>SEO团队助力</p></div>
              </li>
            </ul>
          </div>
          <div id="js-tab-box-0" class="js-tab-box">
            <div :class="{'active': colorId == 1}" class="net-content js-tab-con"><h2>△ 文案团队加持 ▽</h2>
              <p>专业资深文案提供文案支持，内部文案团队快速响应，凸显品牌调性</p></div>
            <div :class="{'active': colorId == 2}" class="net-content js-tab-con"><h2>△ 专业建站团队 ▽</h2>
              <p>5年以上专业建站团队，从前期分析到后期上线内部高效联动，网站有保障</p></div>
            <div :class="{'active': colorId == 3}" class="net-content js-tab-con"><h2>△ 12年线上营销经验 ▽</h2>
              <p>始终坚持“一切努力超出客户预期”的经营理念，全方位为企业提供线上营销解决方案</p></div>
            <div :class="{'active': colorId == 4}" class="net-content js-tab-con"><h2>△ 高新技术企业 ▽</h2>
              <p>在互联网新领域获得的里程碑式的荣誉，有效保证网站的前沿性</p></div>
            <div :class="{'active': colorId == 5}" class="net-content js-tab-con"><h2>△ 完善售后服务 ▽</h2>
              <p>无忧售后：免费维护、免费更新、及时响应、网站完善等多重售后保障</p></div>
            <div :class="{'active': colorId == 6}" class="net-content js-tab-con"><h2>△ SEO团队助力 ▽</h2>
              <p>无忧售后：免费维护、免费更新、及时响应、网站完善等多重售后保障</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="subbox">
      <div class="eco">
        <div class="eco_nav">
          <a class="on">嘉为优势</a>
          <a class="">合作伙伴申请流程</a>
          <a class="">合作伙伴类型</a>
          <a class="">WeOps技术认证</a>
          <a class="">加入稷生科技</a>
        </div>

        <div class="eco_con eco_jr_s">
          <div class="container">
            <div class="title">
              <h2 class="font36">为什么要成为<span>稷生科技的合作伙伴？</span></h2>
              <p>全面专业的业务支持、全程顾问式项目支持、多样化营销支持，共同打造运维新生态。</p>
            </div>
            <div class="eco_jr">
              <div class="eco_jr_box">
                <div class="eco_jr_l">
                  <h3 class="font28">共同成长</h3>
                  <p>开放生态资源，与合作伙伴互联共赢，共建智慧产业新生态。</p>
                </div>
                <div class="icon_animation">
                  <img alt="共同成长" src="@/assets/iconAni4_1.png">
                  <img alt="共同成长" src="@/assets/icon1.png">
                </div>
              </div>
              <div class="eco_jr_box">
                <div class="eco_jr_l">
                  <h3 class="font28">专业培训</h3>
                  <p>定制培训课程，提供线上线下解决方案及产品培训、认证培训、专家大咖分享，全面提升合作伙伴业务能力。</p>
                </div>
                <div class="icon_animation">
                  <img alt="专业培训" src="@/assets/iconAni4_1.png">
                  <img alt="专业培训" src="@/assets/icon2.png">
                </div>
              </div>
              <div class="eco_jr_box">
                <div class="eco_jr_l">
                  <h3 class="font28">技术支持</h3>
                  <p>20多年运维经验沉淀，支持潜在客户的产品测试、售后服务、用户使用指导及二线技术专家支持。</p>
                </div>
                <div class="icon_animation">
                  <img alt="技术支持" src="@/assets/iconAni4_1.png">
                  <img alt="技术支持" src="@/assets/icon3.png">
                </div>
              </div>
              <div class="eco_jr_box">
                <div class="eco_jr_l">
                  <h3 class="font28">品牌认证</h3>
                  <p>联合市场推广、营销加乘市场激励、标杆案例宣传、独家品牌授权、高端峰会交流，助力合作伙伴拓展市场。</p>
                </div>
                <div class="icon_animation">
                  <img alt="品牌认证" src="@/assets/iconAni4_1.png">
                  <img alt="品牌认证" src="@/assets/icon4.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="eco_con eco_hb_s">
          <div class="container">
            <div class="title">
              <h2 class="font36"><span>合作伙伴</span>申请流程</h2>
              <p>互信携手，共创共赢</p>
            </div>
            <div class="eco_hb">
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon1.png">
                  <p class="font14">注册用户</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="@/assets/arror.png">
                </div>
              </div>
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon2.png">
                  <p class="font14">提交申请</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="@/assets/arror.png">
                </div>
              </div>
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon3.png">
                  <p class="font14">商务沟通</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="@/assets/arror.png">
                </div>
              </div>
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon4.png">
                  <p class="font14">线上入驻</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="@/assets/arror.png">
                </div>
              </div>
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon5.png">
                  <p class="font14">人工审核</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="@/assets/arror.png">
                </div>
              </div>
              <div class="eco_hb_box">
                <div class="eco_hb_con">
                  <img alt="" src="@/assets/iicon5.png">
                  <p class="font14">入驻成功</p>
                </div>
                <div class="eco_hb_r">
                  <img alt="" src="/assets/vie/img/r11.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="eco_con eco_lx_s">
      <div class="container">
        <div class="title">
          <h2 class="font36"><span>合作伙伴</span>类型</h2>
          <p>构建全国生态合作网络</p>
        </div>
        <div class="eco_lx">
          <div class="eco_lx_box">
            <h3 class="font28">签约合作伙伴​</h3>
            <p>紧密协作，双方资源优势互补，共同拓展业务版图，为客户呈现稷生科技WeOps产品及服务，实现互利共赢的长期发展。​</p>
            <span></span>
          </div>
          <div class="eco_lx_box">
            <h3 class="font28">独家经销商​</h3>
            <p>
              在特定区域或行业上，拥有稷生科技WeOps-4150运维一体机的独家销售权。全力开拓市场，构建专属销售网络，同时提升稷生科技品牌在区域内的市场份额与影响力。​</p>
            <span></span>
          </div>
          <div class="eco_lx_box">
            <h3 class="font28">区域服务中心​</h3>
            <p>
              扎根全国授权区域，为当地客户提供即时、专业的稷生科技WeOps产品交付实施和售后服务，快速响应客户需求，以优质服务增强客户信赖，稳固稷生科技品牌区域口碑。</p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="eco_con eco_lx_s">
      <div class="container">
        <div class="title">
          <h2 class="font36">WeOps技术认证</h2>
          <p></p>
        </div>
        <div class="eco_zc">
          <div class="weo_ld_con">
            <div class="weo_ld_l">
              <div class="sub_tnav">
                <i v-if="subId===1" style="opacity: 1; top: 0px;"></i>
                <i v-if="subId===2" style="opacity: 1; top: 134.175px;"></i>
                <i v-if="subId===3" style="opacity: 1; top: 283.025px;"></i>
                <a :class="{'on':subId===1}" @mouseenter="getsub(1)">
                  <h3 class="font22">WeOps初级技术认证</h3>
                  <div class="sub_tnav_p">
                    <p>学习WeOps的使用与配置管理</p>
                  </div>
                </a>
                <a :class="{'on':subId===2}" @mouseenter="getsub(2)">
                  <h3 class="font22">WeOps中级技术认证</h3>
                  <div class="sub_tnav_p">
                    <p>学习WeOps的运维与问题排查</p>
                  </div>
                </a>
                <a :class="{'on':subId===3}" @mouseenter="getsub(3)">
                  <h3 class="font22">WeOps高级技术认证</h3>
                  <div class="sub_tnav_p">
                    <p>学习WeOps的插件、大屏等对接开发</p>
                  </div>
                </a>
              </div>
              <a class="nepub_a">课程中心</a>
            </div>
            <div class="weo_ld_r">
              <a v-if="subId===1" class="weo_ld_img">
                <img alt="" src="@/assets/a1.png">
              </a>
              <a v-if="subId===2" class="weo_ld_img">
                <img alt="" src="@/assets/a2.png">
              </a>
              <a v-if="subId===3" class="weo_ld_img">
                <img alt="" src="@/assets/a3.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OnePage",
  data() {
    return {
      subId: 1,
      mainData1: [
        {
          img: require("@/assets/liveOne/icon1.png"),
          title: '股权合伙人',
          text: '指在企业发展期间出钱，占有公司股份，且在工商局登记注册的股东；这类合伙人主要投入有形资源。'
        }, {
          img: require("@/assets/liveOne/icon2.png"),
          title: '事业合伙人',
          text: ' 指认同组织价值观，与公司事业共创和责任共担的人，这类人通常是技术型人才，与企业共同成长。'
        }, {
          img: require("@/assets/liveOne/icon3.png"),
          title: '产业链合伙人',
          text: ' 指公司产业链条上下游的合伙人，如供应商、经销商、客户、拥有资源的提供者。'
        },
        {
          img: require("@/assets/liveOne/icon3.png"),
          title: '媒体合伙人',
          text: ' 指公司产业链条上下游的合伙人，如供应商、经销商、客户、拥有资源的提供者。'
        },
      ],
      mainData2: [
        {
          img: require("@/assets/liveOne/s1.png"),
          title: '专业活动团队'
        }, {
          img: require("@/assets/liveOne/s2.png"),
          title: '高效创投对接'
        }, {
          img: require("@/assets/liveOne/s3.png"),
          title: '助力合作签约'
        },
      ],
      mainData3: [
        {
          img: require("@/assets/liveOne/cover1.jpg"),
          text: '参加线下沙龙，拓宽你的合作渠道（投融界第420期创投对接沙龙成功举办）'
        }, {
          img: require("@/assets/liveOne/cover2.jpg"),
          text: '投融市场动作不断，“金九”利好创业者（投融界第36期资源相亲汇成功举办）'
        }, {
          img: require("@/assets/liveOne/cover3.jpg"),
          text: '想进民营500强？携手创投机构共发展（投融界第218期创投对接微路演成功举办）'
        }, {
          img: require("@/assets/liveOne/cover4.jpg"),
          text: '接力七夕，沙龙现场促“良缘”（投融界第416期创投对接沙龙成功举办）'
        }
      ],
      mainData4: [
        {
          img: require("@/assets/liveOne/a1.png"),
          text: '需求提供'
        },
        {
          img: require("@/assets/liveOne/a2.png"),
          text: '发布项目信息'
        },
        {
          img: require("@/assets/liveOne/a3.png"),
          text: '共享投融信息'
        },
        {
          img: require("@/assets/liveOne/a4.png"),
          text: '结识投融精英'
        },
        {
          img: require("@/assets/liveOne/a5.png"),
          text: '学习创业经验'
        },
        {
          img: require("@/assets/liveOne/a6.png"),
          text: '需求提供'
        }
      ],
      colorId: 1,
      mainData5: [
        {
          id: 1,
          title: '哈佛商业评论',
          text: ' FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业精英和企业决策者及时提出来自全球的商业、经济、市场...',
          cover: require('@/assets/liveOne/cover6.png')
        },
        {
          id: 2,
          title: '领英',
          text: ' FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业菁英和企业决策者及时提供来自全球的商业、经济、市场...',
          cover: require('@/assets/liveOne/cover7.png')
        },
        {
          id: 3,
          title: '阳光100青年干部学校基地<',
          text: ' FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业精英和企业决策者及时提出来自全球的商业、经济、市场...',
          cover: require('@/assets/liveOne/cover8.png')
        },
        {
          id: 4,
          title: '培训供应商',
          text: ' FT中文网是英国《金融时报》唯一的非英语网站,致力于向中国商业精英和企业决策者及时提出来自全球的商业、经济、市场...',
          cover: require('@/assets/liveOne/cover9.jpg')
        },
      ],
      mainData6: [
        {
          id: 1,
          h5: '项目合作',
          h6: '携手亿信华辰，共同完成项目交付',
          p1: '提供全方位服务支持',
          p2: '提高项目交付效率'
        }
      ]
    }
  },
  methods: {
    changeColor(id) {
      this.colorId = id
    },
    getsub(id) {
      this.subId = id
    },
    scrollToSection(id) {
      if (id === 1) {
        const element = document.getElementById("intelligent-vision-mission");
        element.scrollIntoView({behavior: 'smooth'});
      } else if (id === 2) {
        const element = document.getElementById("intelligent-developer-journey");
        element.scrollIntoView({behavior: 'smooth'});
      } else if (id === 3) {
        const element = document.getElementById("intelligent-developer-rights");
        element.scrollIntoView({behavior: 'smooth'});
      } else if (id === 4) {
        const element = document.getElementById("fff");
        element.scrollIntoView({behavior: 'smooth'});
      } else if (id === 5) {
        const element = document.getElementById("franchise-process-container");
        element.scrollIntoView({behavior: 'smooth'});
      }

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
        color: rgb(4, 106, 255);
        line-height: 64px;
        margin-bottom: 0px;
        font-weight: bold;
      }

      .text2 {
        font-size: 24px;
        color: rgb(125, 125, 125);
        line-height: 34px;
        font-weight: 300;
        margin: 16px 0px 0px 0px;
      }
    }
  }
}

.section2 {
  background: #F7F8FA;
  padding-bottom: 65px;

  .container {
    width: 1600px;
    max-width: 1600px;
    position: relative;
    margin: auto;

    .stitle {
      font-weight: bold;
      text-align: center;
      padding: 47px 0 30px;
      color: #333333;
      font-size: 34px;
    }

    ul {
      margin: 0 -15px;
      height: 550px;

      li {
        float: left;
        width: 360px;
        box-sizing: border-box;
        padding: 55px 50px;
        margin: 0 15px;
        border-radius: 15px;
        border: 1px solid transparent;
        box-shadow: 0 6px 10px 5px rgba(186, 188, 192, 0.2);
        list-style: none;

        .srcbg {
          display: block;
          margin: auto;
        }

        .t {
          color: #333333;
          font-size: 24px;
          text-align: center;
          padding: 20px 0;
        }

        .dec {
          line-height: 30px;
          color: #666666;
          font-size: 16px;
          text-align: justify;

          .seemore {
            display: block;
            width: 210px;
            height: 58px;
            text-align: center;
            line-height: 58px;
            font-size: 20px;
            color: #fff;
            margin-top: 40px;
            margin-left: 38px;
            background: url('../../assets/liveOne/seemore.png') no-repeat center;
          }
        }
      }
    }

    .clearfix:before, .clearfix:after {
      display: table;
      content: "";
      line-height: 0;
    }
  }
}

.section4 {
  background: #F7F8FA;
  padding-bottom: 95px;

  .stitle {
    font-weight: bold;
    text-align: center;
    padding: 47px 0 30px;
    color: #333333;
    font-size: 34px;
  }

  .container {
    width: 1200px;
    max-width: 1200px;
    position: relative;
    margin: auto;

    .stepbg {
      display: block;
      margin: auto;
    }

    ul {
      padding: 0 24.5px;
      margin-right: -110px;
      overflow: hidden;

      li {
        float: left;
        margin-top: 30px;
        font-size: 18px;
        color: #333333;
        width: 136px;
        text-align: center;
        margin-right: 110px;
        list-style: none;
      }
    }
  }

  .container:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}

.section5 {
  height: 485px;
  background: url('../../assets/liveOne/bg3.jpg') no-repeat center;

  .stitle {
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 47px 0 30px;
    font-size: 34px;
    //padding-top: 200px;
  }

  .container:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  .container {
    width: 1200px;
    max-width: 1200px;
    position: relative;
    margin: auto;

    .items {
      position: relative;
      float: left;
      margin-right: 20px;

      img {
        border: 0;
      }

      .w {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 76px;
        padding-left: 130px;
        color: #fff;
        font-size: 18px;
        box-sizing: border-box;
      }
    }
  }
}

.section6 {
  .container {
    background: #fff;
    margin-top: -227px;
    padding: 35px 25px 0;
    border-radius: 10px;
    box-sizing: border-box;

    .swiper-container {
      padding-bottom: 35px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      direction: ltr;
      backface-visibility: hidden;
      z-index: 1;

      .swiper-wrapper {
        position: relative;
        transition-property: transform, left, top;
        transition-timing-function: ease;
        box-sizing: content-box;

        .swiper-slide {
          float: left;
          box-sizing: content-box;

          .item {
            width: 266px;
            margin: 0 auto;
            box-shadow: 0 6px 12px 2px rgba(186, 188, 191, 0.36);

            img {
              width: 260px;
              height: 200px;
            }

            .dec {
              padding: 15px;
              font-size: 16px;
              color: #000000;
              line-height: 26px;
              width: 260px;

              .fn-text2-overflow {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }

            }
          }
        }

      }
    }
  }
}

.section7 {
  .stitle {
    font-weight: bold;
    text-align: center;
    padding: 47px 0 30px;
    color: #333333;
    font-size: 34px;
  }

  .container:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  .container {
    margin-top: 25px;
    padding-bottom: 80px;
    width: 1200px;
    max-width: 1200px;
    position: relative;
    margin: auto;

    .w {
      position: absolute;
      width: 450px;
      top: 42px;
      right: 90px;
      font-size: 18px;
      line-height: 38px;
      color: #333;
      text-align: justify;
    }

  }
}

.section8 {
  background: #F7F8FA;
  padding-bottom: 60px;

  .stitle {
    font-weight: bold;
    text-align: center;
    padding: 47px 0 30px;
    color: #333333;
    font-size: 34px;
  }

  .container {
    width: 1200px;
    max-width: 1200px;
    position: relative;
    margin: auto;

    ul {
      margin-right: -20px;
      height: 190px;

      li {
        width: 175px;
        border-radius: 10px;
        float: left;
        text-align: center;
        padding: 40px 0;
        box-shadow: 0 6px 12px 2px rgba(186, 188, 191, 0.36);
        border: 1px solid transparent;
        margin-right: 20px;
        list-style: none;

        .w {
          font-size: 20px;
          color: black;
          margin-top: 25px;
        }
      }
    }

    .clearfix:before, .clearfix:after {
      display: table;
      content: "";
      line-height: 0;
    }
  }
}

.net {
  width: 100%;
  background: url('../../assets/liveOne/net_bg_02.jpg');
  background-size: cover;
  display: block;

  .w1440 {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    .net-middle {
      width: 100%;
      background: url('../../assets/liveOne/net-middle_03.png') no-repeat center;
      min-height: 745px;
      position: relative;

      .title {
        padding: 60px 0;
        text-align: center;

        h2 {
          color: #fff;
          font-size: 30px;
          font-weight: 500;
        }
      }

      .tab-lists {
        ul {
          list-style: none;

          .tab1 {
            position: absolute;
            left: 4.8%;
            bottom: 13.6%;


            .img {
              background: url('../../assets/liveOne/tab-icon1_03.png');
            }

          }

          .tab1.active .img {
            background: url('../../assets/liveOne/tab-icon1-active_03.png');
          }

          .tab2 {
            position: absolute;
            left: 0;
            bottom: 38%;

            .active {
              .img {
                background: url('../../assets/liveOne/tab-icon2-active_03.png');
              }
            }

            .img {
              background: url('../../assets/liveOne/tab-icon2_03.png');
            }
          }

          .tab2.active .img {
            background: url('../../assets/liveOne/tab-icon2-active_03.png');
          }

          .tab3 {
            position: absolute;
            left: 4.8%;
            top: 26.6%;

            .active .img {
              background: url('../../assets/liveOne/tab-icon3-active_03.png');
            }

            .img {
              background: url('../../assets/liveOne/tab-icon3_03.png');
            }
          }

          .tab3.active .img {
            background: url('../../assets/liveOne/tab-icon3-active_03.png');
          }

          .tab4 {
            position: absolute;
            right: 4.8%;
            top: 26.6%;

            .active .img {
              background: url('../../assets/liveOne/tab-icon4-active_03.png');
            }

            .img {
              background: url('../../assets/liveOne/tab-icon4_03.png');
            }
          }

          .tab4.active .img {
            background: url('../../assets/liveOne/tab-icon4-active_03.png');
          }

          .tab5 {
            position: absolute;
            right: 0;
            bottom: 38%;

            .active .img {
              background: url('../../assets/liveOne/tab-icon5-active_03.png');
            }

            .img {
              background: url('../../assets/liveOne/tab-icon5_03.png');
            }
          }

          .tab5.active .img {
            background: url('../../assets/liveOne/tab-icon5-active_03.png');
          }

          .tab6 {
            position: absolute;
            right: 4.8%;
            bottom: 13.6%;

            .active .img {
              background: url('../../assets/liveOne/tab-icon6-active_03.png');
            }

            .img {
              background: url('../../assets/liveOne/tab-icon6_03.png');
            }
          }

          .tab6.active .img {
            background: url('../../assets/liveOne/tab-icon6-active_03.png');
          }

          .tab-icon {
            cursor: pointer;

            .tab-flex {
              display: flex;
              align-items: center;

              .img {
                margin-right: 35px;
                float: left;
                width: 67px;
                height: 79px;
                background-size: cover;
              }

              p {
                font-size: 24px;
                color: #fff;
                float: left;
              }
            }


          }
        }
      }

      .js-tab-box {
        .net-content {
          position: absolute;
          left: 50%;
          bottom: 10%;
          transform: translate(-50%, 0);
          text-align: center;
          width: 31.5%;
          color: #fff;
          display: none;

          h2 {
            font-size: 24px;
            margin-bottom: 16px;
            font-weight: 500;
          }

          p {
            font-size: 16px;
            line-height: 36px;
          }
        }

        .active {
          display: block;
        }
      }
    }
  }
}

.a2 {
  width: 1200px;
  margin: auto;

  .list1 {
    padding-top: 30px;

    ul {
      li:hover {
        background: #a41034;
        color: white;
        transition: all 0.8s;

        .zi {
          color: white;

          .zi1 {
            color: white;
          }

          .zi2 {
            color: white;
          }
        }
      }

      li {
        /* margin-bottom: 20px; */
        background: #f0f0f0;
        padding: 15px;
        margin-bottom: 30px;
        list-style: none;

        .img1 {
          float: left;
          /* width: 254px; */
          height: 180px;
        }

        .zi {
          float: right;
          width: 870px;

          .zi1 {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            line-height: 50px;
          }

          .zi2 {
            margin-top: 10px;
            font-size: 16px;
            line-height: 30px;
            color: #666;
          }

          .zi3 {
            text-align: right;

            a {
              border: 1px #fff solid;
              border-radius: 5px;
              padding: 10px 30px;
              background: #a41034;
              color: #FFF;
              font-size: 15px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

.partner1 {
  padding: 88px 0 121px;

  .max-width-1200 {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;

    .big-title {
      max-width: 94%;
      text-align: center;
      margin: 0 auto;

      h2 {
        line-height: 42px;
        font-size: 30px;
        letter-spacing: 1.5px;
        color: #000;
        font-weight: normal;
        margin: 0 auto;
      }
    }

    .title-top {
      height: auto;
      overflow: hidden;
      text-align: left;
      margin: 40px auto 0;

      p {
        line-height: 28px;
        text-align: left;
        font-size: 16px;
        color: #6a6a6a;
        letter-spacing: .5px;
        margin-bottom: 10px;
      }
    }

    ul {
      margin: 63px auto 0;
      height: 236px;
      list-style: none;
      display: flex;

      .subelement:hover {
        border: 0px solid #dae1ea;

        .text-top {
          display: none;
        }

        .text-bottom {
          display: block;
        }
      }

      li:nth-child(3) .text-bottom {
        top: -84px;
        left: -11px;
        width: calc(100% + 22px);
        height: calc(100% + 168px);
      }

      li:nth-child(4) .text-bottom {
        top: -59px;
        height: calc(100% + 118px);
      }

      .subelement {
        margin: 0;
        border-right: 0;
        box-sizing: border-box;
        position: relative;
        flex: 1;
        height: 100%;
        border: 1px solid #dae1ea;

        .text-top {
          padding: 37px 20px 24px;
          text-align: center;

          .icon {
            width: 52px;
            height: 52px;
            background-image: url('@/assets/liveOne/icon.png');
            background-position: 0 -48px;
            background-repeat: no-repeat;
            margin: 0 auto;
          }

          .icon2 {
            background-position: -52px -48px;
          }

          .icon3 {
            background-position: -104px -48px;
          }

          .icon4 {
            background-position: -156px -48px;
          }

          .icon5 {
            background-position: -208px -48px;
          }

          h6 {
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            color: #333;
            text-align: center;
            margin: 22px auto 0;
          }

          p {
            line-height: 19px;
            font-size: 14px;
            text-align: center;
            color: rgba(51, 51, 51, .45);
            text-transform: Uppercase;
          }

          .btn {
            width: 16px;
            height: 16px;
            text-align: center;
            line-height: 14px;
            font-size: 14px;
            color: white;
            border-radius: 50%;
            background: #586cf0;
            margin: 36px auto 0;
          }
        }

        .text-bottom {
          display: none;
          position: absolute;
          left: -1px;
          top: -24px;
          z-index: 2;
          width: calc(100% + 2px);
          height: calc(100% + 48px);
          background-image: url('@/assets/liveOne/partner-small-bg2.png');
          background-color: var(--whiteColor);
          background-position: center bottom;
          background-size: 100% auto;
          background-repeat: no-repeat;
          box-shadow: 0 1px 12px rgba(194, 215, 236, .5);

          h6 {
            margin-top: 0;
            margin-bottom: 0;
            width: 100%;
            height: 43px;
            font-size: 16px;
            color: white;
            font-weight: 400;
            line-height: 43px;
            text-align: center;
            background-image: url('@/assets/liveOne/partner-small-bg1.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          p {
            padding: 0px 23px 0;
            text-align: left;
            height: auto;
            overflow: hidden;

            a {
              display: block;
              line-height: 37px;
              font-size: 13px;
              color: #666;
              position: relative;
              border-bottom: 1px dashed #dae1ea;
              text-decoration: none;
            }

            a:last-child {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}

.partner2 {
  height: auto;
  overflow: hidden;
  padding: 91px 0 51px;
  background-image: url('@/assets/liveOne/bg1.jpg');
  background-color: #08090c;
  background-position: center;
  background-repeat: no-repeat;

  .max-width-1200 {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;

    .big-title {
      max-width: 94%;
      text-align: center;
      margin: 0 auto;

      h2 {
        color: #FFFFFF;
        line-height: 42px;
        font-size: 30px;
        letter-spacing: 1.5px;
        font-weight: normal;
        margin: 0 auto;
      }
    }

    ul {
      margin: 94px -10px 49px;
      display: flex;

      li:before {
        content: '';
        position: absolute;
        right: 0;
        top: 35px;
        width: 1px;
        height: calc(100% - 65px);
        background: rgba(255, 255, 255, .18);
      }

      li:hover {
        background: linear-gradient(135deg, #0077fa 0, #6a7aec 100%);
        background-color: #596efb;
        box-shadow: 0 0 49px #090b0f;
        border-radius: 2px;
        transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
        transition: all 0.7s;
      }

      .subelement {
        margin: 0;
        box-sizing: border-box;
        position: relative;
        flex: 1;
        padding: 45px 40px;
        height: auto;
        overflow: hidden;
        list-style: none;

        .icon {
          margin-left: 7px;
          width: 50px;
          height: 50px;
          background-image: url('@/assets/liveOne/icon.png');
          background-position: 0 -100px;
          background-repeat: no-repeat;
        }

        .icon2 {
          background-position: -50px -100px;
        }

        .icon3 {
          background-position: -100px -100px;
        }

        .icon4 {
          background-position: -150px -100px;
        }

        h6 {
          line-height: 33px;
          font-size: 22px;
          color: white;
          margin: 20px 0 24px;
        }

        p {
          line-height: 30px;
          font-size: 16px;
          color: rgba(255, 255, 255, .8);
          letter-spacing: .5px;
          font-weight: 300;
        }
      }
    }
  }
}

.partner3 {
  padding: 80px 0 56px;
  background: #f6f7fc;

  .max-width-1200 {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;

    .big-title {
      max-width: 94%;
      text-align: center;
      margin: 0 auto;
    }

    h2 {
      line-height: 42px;
      font-size: 30px;
      letter-spacing: 1.5px;
      color: #000;
      font-weight: normal;
      margin: 0 auto;
    }

    ul {
      margin: 98px -6px 59px;
      display: flex;

      .subelement {
        margin: 0 6px;
        box-sizing: border-box;
        position: relative;
        flex: 1;
        list-style: none;

        .img {
          height: auto;
          overflow: hidden;
          position: relative;

          img {
            max-width: 100%;
            height: auto;
          }
        }

        .title {
          padding: 36px 41px 0 39px;
          height: 310px;
          text-align: left;
          letter-spacing: .5px;
          position: relative;

          h5 {
            line-height: 34px;
            font-size: 22px;
            color: #000;
            font-weight: 400;
          }

          h6 {
            line-height: 24px;
            font-size: 16px;
            color: #323232;
            margin: 8px 0 30px;
            font-weight: 400;
          }

          p {
            padding-left: 22px;
            line-height: 29px;
            font-size: 16px;
            color: #595959;
            position: relative;
            margin-bottom: 15px;
          }

          p:before {
            content: '';
            position: absolute;
            top: 11px;
            left: 0;
            width: 6px;
            height: 6px;
            background: #497afc;
            border-radius: 50%;
          }

          .ban-btn {
            position: absolute;
            bottom: 44px;
            left: 39px;
            margin-top: 0;

            a {
              font-size: 16px;
              margin-right: 0;
              background-image: linear-gradient(90deg, #00aeff 0, #596efb 100%);
              background-color: #596efb;
              display: inline-block;
              vertical-align: top;
              width: auto;
              min-width: 123px;
              height: 36px;
              padding: 0 25px;
              text-align: center;
              line-height: 36px;
              font-size: 14px;
              color: white;
              position: relative;
              cursor: pointer;
              margin-right: 20px;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
            }
          }
        }

        .title:before {
          content: '';
          position: absolute;
          top: 32px;
          right: -5px;
          width: 1px;
          height: calc(100% - 64px);
          background: #ededf4;
        }
      }
    }

  }
}

.content_1 {
  padding: 60px 0 100px;

  .content_title {
    color: #131d27;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    margin-bottom: 32px;
  }

  .type_wrapper {
    display: flex;
    width: 1200px;
    margin: 0 auto;

    .type[data-v-50488240]:first-child {
      background: no-repeat 100% / cover url('@/assets/liveOne/战略底.png');
    }

    .type:nth-child(2) {
      background: no-repeat 100% / cover url('@/assets/liveOne/金牌底.png');
    }

    .type:nth-child(3) {
      background: no-repeat 100% / cover url('@/assets/liveOne/银牌底.png');
    }

    .type:nth-child(4) {
      background: no-repeat 100% / cover url('@/assets/liveOne/认证底.png');
    }

    .type:hover {
      z-index: 10;
      flex: none;
      width: 530px;
      padding: 22px;
      background: none;
      background-color: #fff;
      border: 1px solid #f2f4f8;
      box-shadow: 0 0 7px 3px #e4e4e4;
      //transition: all 0.3s;

      .hover_content {
        display: block;

        .type_content {
          height: 243px;
          margin-left: 28px;
          padding-top: 13px;
          padding-left: 25px;
          overflow: auto;
          list-style-type: disc;
          border-top: 1px solid #e6eaf2;

          li:first-child {
            margin-top: 0;
          }

          li {
            margin-top: 5px;
            line-height: 20px;
            list-style-type: disc;
          }
        }
      }
    }

    .type {
      flex: 1;
      height: 408px;
      border: 1px solid #f4f6fa;

      .type_title {
        display: flex;
        justify-content: center;
        margin-top: 58px;

        img {
          width: 28px;
          height: 28px;
        }

        .title_right {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .text {
            margin-left: 8px;

            .zh {
              color: #1a1f2e;
              font-weight: 600;
              font-size: 18px;
              line-height: 27px;
            }

            .en {
              color: rgba(26, 31, 46, .5);
              font-size: 12px;
              line-height: 14px;
            }
          }

          .anticon {
            display: none;
            color: inherit;
            font-style: normal;
            line-height: 0;
            text-align: center;
            text-transform: none;
            vertical-align: -.125em;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      }

      .hover_content {
        display: none;
      }
    }
  }
}

.content_2 {
  padding: 60px 0;
  background-color: #f8fafc;

  .content_title {
    color: #131d27;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    margin-bottom: 32px;
  }

  .step_wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .circle1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 102px;
        border: 5px solid #c6e3fc;
        border-radius: 100%;

        .circle2 {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: #0186f8;
          border-radius: 100%;
        }
      }

      .text {
        margin-top: 24px;
        text-align: center;

        .text1 {
          color: #0186f8;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
        }

        .text2 {
          color: #1a1f2e;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    .arrows {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 102px;
      height: 102px;

      .arrow1 {
        width: 20px;
        height: 20px;
        border: 4px solid #0186f8;
        border-top: none;
        border-left: none;
        transform: rotate(-45deg);

        .arrow2 {
          width: 20px;
          height: 20px;
          border: 4px solid #91c9f9;
          border-top: none;
          border-left: none;
          transform: translate(-10px, -10px);
        }
      }
    }
  }
}

.content_3 {
  padding: 100px 0;

  .content_title {
    color: #131d27;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    margin-bottom: 32px;
  }

  .require_wrapper {
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f2f6fa;

    .title_wrapper {
      display: flex;
      width: 100%;
      margin-bottom: 7px;
      font-size: 18px;

      .name_wrapper2 {
        width: 172px;
      }

      .value_wrapper2 {
        display: flex;
        width: calc(100% - 172px);

        .require_title:first-child {
          border-radius: 4px 0 0 0;
        }

        .require_title + .require_title {
          border-left: 1px solid #fff;
        }

        .require_title {
          display: flex;
          width: 25%;
          align-items: center;
          padding: 20px 30px;
          color: #fff;
          font-weight: 400;
          font-size: 18px;

          img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }
        }
      }
    }

    .content_wrapper {
      display: flex;
      word-break: break-word;

      .name_wrapper {
        display: flex;
        font-size: 14px;
        background: #fff;
        width: 172px;
        font-weight: 700;
        border-radius: 4px 0 0 4px;

        .name_row {
          width: 100%;
          display: flex;
          flex-direction: column;

          .col {
            display: flex;
            align-items: center;
            height: 60px;
            padding-left: 18px;
            overflow: auto;
          }
        }
      }

      .value_wrapper {
        display: flex;
        font-size: 14px;
        background: #fff;
        width: calc(100% - 172px);
        border-radius: 0 4px 4px 0;

        .row {
          width: 25%;
          display: flex;
          flex-direction: column;

          .col {
            display: flex;
            align-items: center;
            height: 60px;
            padding-left: 18px;
            overflow: auto;
          }

          .col:nth-child(2n) {
            background: rgba(205, 229, 249, .2);
          }
        }
      }
    }
  }
}

.last_content {
  background: no-repeat 50% / cover url('@/assets/liveOne/合作伙伴底.png');

  .logo_wrapper {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .img-box {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

}

.sub_banner {
  height: 575px;
  position: relative;

  .sub_banner_imghz::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    content: '';
  }

  .sub_banner_imghz {
    position: relative;
    height: 100%;

    img {

      width: 100%;
      border: 0;
      vertical-align: middle;
      object-fit: cover;
      height: 575px;
    }
  }

  .h_b_txt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 40px 0 0;
    margin: 0 auto;
    width: 72.9%;

    .h_b_txt_l {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 50%;

      .h_b_txt_p {
        margin-bottom: 50px;

        p {
          color: #fff;
        }

        p:first-child {
          font-size: 50px;
          margin-bottom: 15px;
        }

        p:not(:first-child) {
          width: 100%;
          line-height: 1.6;
          margin-bottom: 0;
          text-align: justify;
        }
      }

      .font18 {
        font-size: 18px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .h_b_txt_a {
        display: flex;

        a:nth-child(1) {
          background: #156bff;
          border-color: #156bff;
        }

        a {
          color: #fff;
          //border-color: #fff;
          width: auto;
          height: 46px;
          border-radius: 4px;
          border: 2px solid #156bff;
          margin-right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          padding: 0 30px;
          text-decoration: none;
        }

        .eco_t_a {
          margin-left: 28px;
          margin-top: -13px;

          p {
            display: flex;
            align-items: center;
            color: #bcd2ff;

            a:nth-child(1) {
              border-color: #156bff;
              background: #fff !important;
              color: #156bff !important;

            }

            a {
              width: auto;
              height: 46px;
              border-radius: 4px;
              border: 2px solid #156bff;
              margin-right: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #156bff;
              padding: 0 30px;
              padding: 0 15px;
              margin: 0;
              border: none;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

.subbox {
  background: #F5F7FB;
  width: 100%;

  .eco {
    .eco_nav {
      padding-top: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: initial;
      top: 0;
      background: #F5F7FB;
      z-index: 100;
      //padding-bottom: 0.2rem;

      .on {
        background: #156BFF;
        color: #fff;
      }

      a {
        padding: 0 40px;
        margin: 0 43px;
        height: 51px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transition: all 0.6s;
        background: #fff;
        text-decoration: none;
        color: #333;
      }
    }
  }
}

.eco_jr_s {
  .container {
    margin: 0 auto;
    width: 72.9%;

    .title {
      padding: 85px 0 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        color: #161b27;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 36px;

        span {
          color: #156BFF;

        }
      }

      p {
        color: #333;
        width: 90%;
        text-align: center;
        line-height: 1.6;
      }
    }

    .eco_jr {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: -40px;

      .eco_jr_box:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        background: #156bff;

        h3 {
          color: #fff;
        }

        p {
          color: #fff !important;
        }
      }

      .eco_jr_box {
        width: calc(50% - 130px);
        margin-bottom: 40px;
        background: #fff;
        border-radius: 8px;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 200px;
        transition: all 0.6s;

        .eco_jr_l {
          h3 {
            margin-bottom: 20px;
            transition: all 0.6s;
            font-size: 28px;
            text-align: justify;
          }

          p {
            color: #666;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            height: 60px;
            transition: all 0.6s;
          }
        }

        .icon_animation {
          flex-shrink: 0;
          margin-left: 68px;
          width: 60px;
          height: 50px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
}

.eco_hb_s {
  padding-bottom: 82px;

  .container {
    margin: 0 auto;
    width: 72.9%;

    .title {
      padding: 85px 0 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        color: #161b27;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 36px;

        span {
          color: #156BFF;
        }
      }

      p {
        color: #333;
        width: 90%;
        text-align: center;
        line-height: 1.6;
      }
    }

    .eco_hb {
      display: flex;
      align-items: center;

      .eco_hb_box {
        width: calc((100% - 350px) / 6);
        position: relative;
        margin: 0 70px 0 0;
        height: 50px;

        .eco_hb_con {
          width: 100%;
          height: 100%;
          border-radius: 3px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 20px;
            height: auto;
            margin-right: 10px;
            border: 0;
            vertical-align: middle;
            object-fit: cover;

          }

          .font14 {
            font-size: 14px;
          }
        }

        .eco_hb_r {
          position: absolute;
          left: 100%;
          top: 0;
          width: 70px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 6px;
            height: auto;
            border: 0;
            vertical-align: middle;
            object-fit: cover;
          }
        }
      }

    }
  }
}

.eco_lx_s {
  background: #fff;

  .container {
    margin: 0 auto;
    width: 72.9%;

    .title {
      padding: 85px 0 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        color: #161b27;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 36px;

        span {
          color: #156BFF;
        }
      }

      p {
        color: #333;
        width: 90%;
        text-align: center;
        line-height: 1.6;
      }
    }

    .eco_lx {
      display: flex;
      justify-content: space-between;

      .eco_lx_box:hover {
        background: #156bff;
        color: #fff !important;

        p {
          color: white;
        }
      }

      .eco_lx_box {
        padding: 45px 50px 0;
        height: 220px;
        background: #f5f7fb;
        border-radius: 10px;
        width: calc((100% - 340px) / 3);
        position: relative;
        overflow: hidden;

        h3 {
          margin-bottom: 15px;
          font-size: 28px;
        }

        p {
          color: #666;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }

        span {
          left: 50px;
          bottom: -15px;
          position: absolute;
          font-size: 70px;
          opacity: 0.1;
          color: #000;
          line-height: 1;
        }
      }
    }

    .eco_zc {
      padding-bottom: 100px;

      .weo_ld_con {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .weo_ld_l {
          height: 480px;
          width: 36.5%;

          .sub_tnav {
            position: relative;
            height: auto;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            height: 100%;

            i {
              position: absolute;
              height: 33.3%;
              top: 0;
              left: 0;
              background: #156bff;
              z-index: 1;
              border-radius: 5px;
              transition: all 0.6s;
              width: 5px;
            }

            a {
              padding: 0 0 0 40px;
              display: flex;
              height: auto !important;
              margin-bottom: 40px;
              z-index: 1;
              flex-direction: column;
              justify-content: center;
              flex-shrink: 0;
              text-decoration: none;
              text-align: left;

              h3 {
                color: #333;
                margin-bottom: 5px;
                font-size: 25px;
              }

              .sub_tnav_p {
                p {
                  font-size: 14px;
                  color: #666;
                  overflow-y: auto;
                  /* max-height: 4.5em; */
                  padding-right: 10px;
                  direction: ltr;
                }
              }
            }

            .on {
              color: #fff;

              h3 {
                color: #156BFF;
              }
            }
          }

          .nepub_a {
            width: 140px;
            height: 46px;
            background: #156bff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            border-radius: 4px;
            transition: all 0.6s;
            color: #fff;
            border: 1px solid transparent;
            margin-top: 40px;
            margin-left: 40px;
            text-decoration: none;
          }
        }

        .weo_ld_r {
          box-shadow: none;
          border: none;
          padding: 0;
          width: 60.5%;
          border-radius: 10px;
          background: #fff;

          .weo_ld_img {
            height: 480px;
            padding: 0;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            text-decoration: none;
            color: #333;

            img:not(.editor_img) {
              height: 100%;
              width: 100%;
              border: 0;
              vertical-align: middle;
              object-fit: cover;
            }
          }
        }
      }
    }

  }
}

.tg-product-banner-menu-container {
  width: 100%;
  height: 55px;
  box-shadow: 0px 1px 6px 0px rgb(23, 35, 61, 75%);
  margin-bottom: 10px;
  background-color: #fff;

  .tg-product-banner-menu-wrap {
    width: 1352px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /* line-height: 55px; */
    .banner-title {
      width: 25%;
      font-size: 28px;
      font-weight: 700;
    }

    .banner-menu-list {
      width: 75%;
      /* height: 100%; */
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      cursor: pointer;
      /* margin-left: 3%; */
      li {
        width: 25%;
        /* width: 18%; */
        /* height: 100%; */
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #dcdfe1;
        list-style: none;

        .active {
          border-bottom: 2px solid #0097eb;
        }

        .banner-menu-item {
          height: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
        }
      }
    }
  }
}

#intelligent-vision-mission {
  max-width: 3840px;
  /* padding-bottom: 20px; */
  background-image: url('@/assets/home/生态伙伴bg.jpg');
  background-repeat: no-repeat;
  background-size: auto;
  margin: 0 auto;
  background-position: top;

  .intelligent-container {
    max-width: 1314px;
    margin: 0 auto;
    padding-top: 30px;

    .tg-modular-default-title {
      /* width: 500px; */
      font-size: 30px;
      color: #17233d;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 16px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .tg-title-bottom-line {
      background-color: #1177e3;
      display: block;
      width: 110px;
      height: 4px;
      margin: 0 auto 39px;
    }

    .tg-modular-default-title-content {
      /* width: 1014px; */
      width: 100%;
      font-size: 16px;
      color: #515a6e;
      text-align: center;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
      padding-bottom: 35px;
    }

    .tg-modular-sub-title {
      font-size: 30px;
      color: #1d7ce1;
      text-align: center;
      padding-bottom: 20px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .ecological-partner {
      padding-bottom: 75px;
    }

    .ecological-partner-wrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 30px;

      .ecological-partner-card {
        position: relative;
        padding: 65px 30px 20px;
        border-radius: 4px;
        background-image: linear-gradient(-180deg, rgba(66, 142, 255, 0.35) 0, rgba(70, 145, 255, 0) 100%);

        img {
          position: absolute;
          top: -62px;
          left: 50%;
          transform: translateX(-50%);
        }

        .ecological-partner-card-title {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          color: #082543;
          margin-bottom: 20px;
        }

        .ecological-partner-card-text {
          font-size: 16px;
          font-weight: normal;
          color: #111a31;
        }
      }
    }
  }
}

#intelligent-developer-journey {
  margin-bottom: 60px;

  .intelligent-container {
    max-width: 1314px;
    margin: 0 auto;
    padding-top: 30px;

    .tg-modular-default-title {
      /* width: 500px; */
      font-size: 30px;
      color: #17233d;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 16px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .tg-title-bottom-line {
      background-color: #1177e3;
      display: block;
      width: 110px;
      height: 4px;
      margin: 0 auto 39px;
    }

    .tg-modular-sub-title {
      font-size: 30px;
      color: #1d7ce1;
      text-align: center;
      padding-bottom: 20px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .join-advantage {
      padding-bottom: 40px;
    }

    .join-advantage-wrap {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px 30px;

      hr {
        display: none;
      }

      .join-advantage-card {
        background-color: #ffffff;
        box-shadow: 0px 0px 7px 2px rgba(0, 65, 134, 0.2);
        border-radius: 4px;
        height: 200px;

        .join-advantage-card-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;
          background-image: linear-gradient(90deg, rgba(66, 142, 255, 0.35) 0, rgba(70, 145, 255, 0) 100%);

          .title {
            font-size: 22px;
            color: #082543;
            font-weight: 700;
          }
        }

        .join-advantage-card-content {
          padding: 10px 25px;
          text-align: justify;
          color: #111a31;
        }
      }
    }
  }
}

#intelligent-developer-rights {
  padding-bottom: 60px;

  .intelligent-container {
    max-width: 1314px;
    margin: 0 auto;
    padding-top: 30px;

    .tg-modular-default-title {
      font-size: 30px;
      color: #17233d;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 16px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .tg-title-bottom-line {
      background-color: #1177e3;
      display: block;
      width: 110px;
      height: 4px;
      margin: 0 auto 39px;
    }

    .tg-modular-sub-title {
      font-size: 30px;
      color: #1d7ce1;
      text-align: center;
      padding-bottom: 20px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .ecological-rights-support-wrap {
      max-width: 1314px;
      min-height: 626px;
      margin: 0 auto;
      background-image: url('@/assets/home/权益bg01.png'), url('@/assets/home/权益bg02.png');
      background-position: center, center;
      background-repeat: no-repeat;

      .ecological-rights-support-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 210px 396px;
        padding-top: 90px;

        .ecological-rights-support-card {
          display: flex;
          /* width: 35%; */
          .content {
            .title {
              display: flex;
              align-items: center;
              font-size: 22px;
              color: #10939f;

              span {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: currentColor;
                margin-right: 20px;
              }

              img {
                display: none;
              }
            }

            .text {
              font-size: 16px;
              color: #111a31;
            }
          }

          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
}


#franchise-process-container {
  padding-bottom: 100px;

  .intelligent-container {
    max-width: 1314px;
    margin: 0 auto;
    padding-top: 30px;

    .tg-modular-default-title {
      /* width: 500px; */
      font-size: 30px;
      color: #17233d;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 16px;
      font-weight: 700;
      font-stretch: normal;
      letter-spacing: 0px;
      margin: 0 auto;
    }

    .tg-title-bottom-line {
      background-color: #1177e3;
      display: block;
      width: 110px;
      height: 4px;
      margin: 0 auto 39px;
    }

    .franchise-process-wrap {
      display: grid;
      grid-template-columns: repeat(6, 1fr);

      .franchise-process-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 25px 0;
        border-right: solid 2px #c2e1ff50;
        background-image: linear-gradient(-180deg, rgba(66, 142, 255, 0.1) 0, rgba(70, 145, 255, 0) 100%);

        img {
          /* width: 90px; */
          margin-bottom: 5px;
        }

        .franchise-process-card-text {
          font-size: 22px;
          font-weight: 700;
          color: #1177e3;

          span {
            display: none;
          }
        }

        .franchise-process-arrow-img {
          position: absolute;
          right: -18px;
          top: 50%;
          transform: translateY(-50%);
          margin-bottom: 5px;
        }
      }
    }

  }
}

#product-banner {
  width: 100%;
  height: 645px;
  background-color: #fff;
  position: relative;

  .stream-server-box {
    //max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    background: url('@/assets/home/生态加盟-banner.jpg') no-repeat center / cover;
    display: flex;
    justify-content: space-evenly;

    .banner-container {
      width: auto;
      margin: 0;
      padding-top: 120px;

      .title {
        font-family: 'Microsoft YaHei';
        font-size: 54px;
        /* font-size: 46px; */
        font-weight: bold;
        color: #ffffff;
        text-shadow: 0px 2px 6px #000000;
        margin-left: 20px;
      }

      .sub-title {
        font-family: 'Microsoft YaHei';
        font-size: 36px;
        color: #ffffff;
        text-shadow: 0px 2px 6px #000000;
        margin-left: 20px;
      }

      p {
        width: 650px;
        background-color: rgb(0 0 0 / 20%);
        color: #ffffff;
        font-size: 16px;
        text-shadow: 0px 2px 6px #000000;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        padding: 20px;
        background-color: rgb(0 0 0 / 60%);
        margin: 30px 0;
        /* background: url(/img/industry/smart-weather/banner_bg.png) repeat; */
        backdrop-filter: blur(5px);
        text-align: justify;
      }
    }

    .banner-video-container {
      width: 568px;
      max-height: 321px;
      background-color: black;
      position: relative;
      margin-top: 120px;
      border: 3px solid;
      border-image: linear-gradient(to bottom, #73ffff, #01a4d9) 1;

      .banner-video-img-wrap {
        display: flex;
        width: 100%;
        height: 100%;
      }

    }
  }
}

</style>
