<template>
  <div>
    <!--    <div class="banner-box">-->
    <!--      <div class="imga">-->
    <!--        <img class="banner" src="../../assets/livethree/banner_renwu2.png"/>-->
    <!--      </div>-->
    <!--      <div class="img-text">-->
    <!--        <div class="text-inner">-->
    <!--          <h2 class="text1">产品与服务</h2>-->
    <!--          <p></p>-->
    <!--          <h4 class="text2">-->
    <!--            通过该平台，企业、组织或个人可以共享资源、技术、市场信息等，<br/>形成协同效应，从而提升效率和创新能力-->
    <!--          </h4>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="b-layout">
      <div class="b-content layout-content">
        <div class="b-l">
          <div>完整API | 丰富应用模块 | 全代码开源</div>
          <div>部门协同办公定制专家</div>
          <div>
            <li>— 100%开放源代码</li>
            <li>— 支持二次开发与业务定制</li>
            <li>— 高效的技术支持服务模式</li>
            <li>— 宽松的软件商用许可形式</li>
            <li>— 支持OEM与品牌重塑</li>
          </div>

        </div>
        <div class="b-r"><img alt="O2OA" src="@/assets/livethree/pic_banner@2x.png"></div>
      </div>
    </div>
    <div class="case_menu">
      <div class="inner_case_menu_box">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <ul id="swiper-wrapper-76e32d51ba10cf1db" aria-live="polite" class="swiper-wrapper menu_ul">
            <li v-for="item in mainData1" :key="item.id" :class="{'active':colorId===item.id}" aria-label="1 / 8"
                class="swiper-slide menu_li swiper-slide-active" role="group"
                style="width: 141.25px; margin-right: 10px;" @mouseenter="changeColor(item.id)">{{ item.title }}
            </li>
          </ul>
          <span aria-atomic="true" aria-live="assertive" class="swiper-notification"></span></div>

      </div>
    </div>
    <div class="customer_classics">
      <p class="type_title">精品案例推荐</p>
      <div class="classics_swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <ul id="swiper-wrapper-3d7ba58cf6811665" aria-live="polite" class="classics_ul data_ul swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px);">
          <li v-for="(item,index) in selectData" :key="index" class=" swiper-slide case_box">
            <div class="case_logo"><img :src="item.img" alt=""></div>
            <div class="case_text_box">
              <div class="text_top">
                <span class="company_name">{{ item.title }}</span><span class="industry_name">{{ item.unit }}</span>
              </div>
              <p class="short_info">
                {{ item.text }}</p>
              <!--              <a class="case_link" href="/gsdt/76385.html" target="_blank"><p>了解更多<span-->
              <!--                  class="font_family icon-icon_more"></span></p></a>-->
            </div>
          </li>

        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>


        <span aria-atomic="true" aria-live="assertive" class="swiper-notification"></span></div>

    </div>

    <section class="section">
      <div class="layout-content">
        <div class="layout-title">用O2OA可以做什么？</div>
        <div class="d-content">
          <div class="d-l">
            <video autoplay="" controls="" loop="" muted="muted" poster="@/assets/livethree/videoframe_5989.png">
              <source src="@/assets/livethree/o2oa06.mp4" type="video/mp4">
              <!--              <source src="/videos/o2oa06.webm" type="video/webm">-->
            </video>
          </div>
          <div class="d-r">
            <div>
              <li>— 开源赋能 创新无限</li>
              <li> — 功能完备 业务多样</li>
              <li> — 定制灵活 扩展方便</li>
              <li> — 国产适配 信创兼容</li>
              <li> — 国密保障 数据无忧</li>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="section1">
      <div class="layout-content">
        <div class="layout-title">轻松实现协同办公系统</div>
        <div class="d-title">
          O2OA开发平台凭借其强大的核心功能和丰富的内置应用，能够帮助企事业单位快速、高效地构建协同办公系统，满足各类业务需求。
        </div>
        <div class="d-c">
          <div class="d-c-n">
            <li v-for="item in mainData10" :key="item.id" :class="{'d-c-n-cur':tapId===item.id}"
                @click="getTap(item.id)">{{ item.tapName }}
            </li>

          </div>
          <div class="d-c-img">
            <div class="d-c-img-content">
              <img :src="selectTap.cover" alt="综合信息平台" class="d-c-img-cur">

            </div>
          </div>

          <div class="d-c-detail">
            <li class="d-c-detail-cur">
              {{ selectTap.text }}
            </li>


          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="layout-content">
        <div class="layout-title">产品核心能力</div>
        <div class="c-title">
          平台基于JavaEE分布式架构设计，拥有五大核心能力以及多个内置应用，能够让开发者根据客户需求按需定制、低代码快速实现复杂业务应用。全程在线设计，移动设计同步，可视化表间关系，轻松规划集团企业组织架构、跨组织跨领域各种业务流程和管理模式。
        </div>
      </div>
      <div class="c-content layout-content">
        <div v-for="item in mainData11" :key="item.id">
          <div class="c-l">
            <img :src="item.cover" alt="流程管理平台">
          </div>
          <div class="c-r">
            <div class="home-title">{{ item.title }}</div>
            <div class="home-detail">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section3">
      <div class="layout-content">
        <div class="layout-title">丰富的内置应用</div>
        <div class="f-c">
          <a v-for="item in mainData16" :key="item.id">
            <img :alt="item.name" :src="item.icon">
            <span>{{ item.name }}</span>
          </a>

        </div>

      </div>
    </section>
    <section class="section4">
      <div class="layout-content">
        <div class="layout-title">开发与扩展能力</div>
        <div class="k-content">
          <div v-for="item in mainData15" :key="item.id">
            <div class="home-title">{{ item.name }}</div>
            <div class="home-detail">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section5">
      <div class="layout-content">
        <div class="layout-title">灵活的服务与支持模式</div>
        <div class="l-content">
          <div v-for="item in mainData14" :key="item.id" class="llbox">
            <div class="l-l">
              <div class="home-title">{{ item.name }}</div>
              <div class="home-detail">
                {{ item.text }}
              </div>
            </div>
            <img :src="item.icon" alt="VIP">
          </div>

        </div>
      </div>
    </section>
    <section class="section6">
      <div class="layout-content">
        <div class="layout-title">优秀的合作案例</div>
        <div class="y-content">
          <div v-for="item in mainData13" :key="item.id">
            <img :alt="item.name" :src="item.icon">
            <div class="home-title">{{ item.name }}</div>
            <div class="home-detail">
              {{ item.text }}
            </div>
          </div>

        </div>
      </div>
    </section>

    <div id="core" class="product_advan module" style="padding-bottom: 100px;">
      <div class="product_title"><img
          src="@/assets/livethree/left.png">
        <p>核心功能</p> <img src="@/assets/livethree/right.png"></div>
      <div class="advan_box">
        <div class="advan_item">
          <div class="image">
            <img src="@/assets/livethree/cloudI1.png">
          </div>
          <div class="text" style="background-image: url('@/assets/livethree/core1.png');">
            <div>多云纳管、混合云管理</div>
            <div>提供公有云、私有云的统一混合式管理。</div>
          </div>
        </div>
        <div class="advan_item">
          <div class="image"><img src="@/assets/livethree/cloudI2.png"
          >
          </div>
          <div class="text"
               style="background-image: url('@/assets/livethree/core2.png');">
            <div>自动化运维</div>
            <div>
              具备脚本/命令批量执行、预设脚本库、文件自动分发/收集、任务编排等自动化运维特性，告别枯燥的重复工作，提高工作效率。
            </div>
          </div>
        </div>
        <div class="advan_item">
          <div class="image"><img src="@/assets/livethree/cloudI3.png"/>
          </div>
          <div class="text"
               style="background-image: url('@/assets/livethree/core3.png');">
            <div>云资源全生命周期管理</div>
            <div>集云资源申请、创建、交付、运维以及最终的释放销毁于一体的全生命周期管理。</div>
          </div>
        </div>
        <div class="advan_item">
          <div class="image"><img src="@/assets/livethree/cloudI4.png"/>
          </div>
          <div class="text"
               style="background-image: url('@/assets/livethree/core4.png');">
            <div>成本分析与优化</div>
            <div>
              能够从实例、带宽、磁盘等各个维度分析您的成本支出，让您一目了然的清晰云资源的成本支出结构，并通过对应用负载进行数据挖掘分析，告诉您如何进行云资源的增减配，让您不花冤枉钱。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="advan" class="advanCloud module">
      <div class="product_title"><img
          src="@/assets/livethree/left.png">
        <p>价值优势</p> <img src="@/assets/livethree/right.png"></div>
      <div>
        <div class="advanCloudbox">
          <div class="advanCloudItem">
            <div class="advanCloudItemLeft"><img src="@/assets/livethree/advanCloud1.png"></div>
            <div class="advanCloudItemRight"><h4>极致的性价比</h4>
              <p>无需硬件投入、无需安装部署、无需后期维护，一键开通，立即使用</p></div>
          </div>
          <div class="advanCloudItem">
            <div class="advanCloudItemLeft"><img src="@/assets/livethree/advanCloud2.png"></div>
            <div class="advanCloudItemRight"><h4>全面的云平台兼容能力</h4>
              <p>
                可无缝对接阿里云、AWS、华为云、腾讯云、Ucloud、百度云、Azure、京东云、青云等多种云平台，让您能在一个平台上完成多朵云的统一管理</p>
            </div>
          </div>
          <div class="advanCloudItem">
            <div class="advanCloudItemLeft"><img src="@/assets/livethree/advanCloud3.png"></div>
            <div class="advanCloudItemRight"><h4>集多云管理和安全管理于一体</h4>
              <p>具备完善的配套安全解决方案，实现业务和安全的一体化管理</p></div>
          </div>
          <div class="advanCloudItem">
            <div class="advanCloudItemLeft"><img src="@/assets/livethree/advanCloud4.png"></div>
            <div class="advanCloudItemRight"><h4>流程管理提升管理效率</h4>
              <p>通过工单系统帮助您优化管理工作流程，提升运维管理效率</p></div>
          </div>
        </div>
      </div>
    </div>
    <div id="application" class="module">
      <div class="product_title"><img src="@/assets/livethree/left.png">
        <p>应用场景</p> <img src="@/assets/livethree/right.png"></div>
      <div class="appliction_nav">
        <div :class="{'active':applicationId===1}" class="appliction-one" style="width: 50%;"
             @click="changeApplication(1)">
          <b class="top">
            <i class="top-arrow1"></i>
            <i class="top-arrow2"></i>
          </b>
          <div class="name">
            <img v-if="applicationId===1" src="@/assets/livethree/cloud11.png" style="margin-right: 8px;">
            <img v-if="applicationId===2" src="@/assets/livethree/cloud1.png" style="margin-right: 8px;">
            <p>多云管理</p>
          </div>
        </div>
        <div :class="{'active':applicationId===2}" class="appliction-one" style="width: 50%;"
             @click="changeApplication(2)">
          <b class="top">
            <i class="top-arrow1"></i>
            <i class="top-arrow2"></i>
          </b>
          <div class="name">
            <img v-if="applicationId===1" src="@/assets/livethree/cloud2.png" style="margin-right: 8px;">
            <img v-if="applicationId===2" src="@/assets/livethree/cloud21.png" style="margin-right: 8px;">
            <p>混合云管理</p>
          </div>
        </div>
      </div>
      <div v-if="applicationId===1" class="appliction_box">
        <div class="appliction_left"><img alt="多云管理"
                                          src="@/assets/livethree/cloud-bg1.png"></div>
        <div class="appliction_right">
          <div class="applicationItem" style="margin-top: 0px;">
            <div class="applicationItemTit">多云管理复杂</div>
            <div class="detail">
              业务运行在多个云平台上，需要建设统一的云管理平台提升运维管理效率，有效控制支出成本。
            </div>
          </div>
          <div class="applicationItem" style="margin-top: 20px;">
            <div class="applicationItemTit">能够解决</div>
            <div class="detailList">
              <div>
                <div class="detailName">
                  <div>1</div>
                  <span>统一管理</span></div>
                <p class="detailMs">一个平台管理统一管理多个云平台上的业务，提升管理效率。</p></div>
              <div>
                <div class="detailName">
                  <div>2</div>
                  <span>成本分析</span></div>
                <p class="detailMs">通过数据分析提供合理的资源建议，控制成本开支。</p></div>
              <div>
                <div class="detailName">
                  <div>3</div>
                  <span>工单流程</span></div>
                <p class="detailMs">自定义工作工单系统，规范工作流程。</p></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="applicationId===2" class="appliction_box">
        <div class="appliction_left"><img alt="混合管理"
                                          src="@/assets/livethree/cloud-bg2.png"></div>
        <div class="appliction_right">
          <div class="applicationItem" style="margin-top: 0px;">
            <div class="applicationItemTit">混合云管理复杂</div>
            <div class="detail">
              部分业务上了公有云，部分业务运营在私有云环境，需要建设统一的管理平台
            </div>
          </div>
          <div class="applicationItem" style="margin-top: 20px;">
            <div class="applicationItemTit">能够解决</div>
            <div class="detailList">
              <div>
                <div class="detailName">
                  <div>1</div>
                  <span>统一管理</span></div>
                <p class="detailMs">一个平台管理统一管理多个云平台上的业务，提升管理效率。</p></div>
              <div>
                <div class="detailName">
                  <div>2</div>
                  <span>资产自动化运维</span></div>
                <p class="detailMs">资产一键自动导入，自动运维，提升运维效率</p></div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="OAbox">
      <div class="t_sert_l01">OA办公化协同系统</div>
      <div class="n_bottom"></div>
      <div class="text">
        通过单位特有流程或特定环节与日常事务联系在一起，使公文在流转、业务审批、信息发布等方面提高效率，实现办公管理规范化和信息规范化，降低单位运行成本。<br/>
        OA主要功能包括个人办公、内部通讯、信息发布、网上审批、项目管理、资源管理、系统管理等；
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_img"><img src="@/assets/home/cut1(1).jpg"></div>
        <div class="page_about_jj_con">
          <div class="page_about_jj_con_name c">个人办公</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;个人办公可快速查询个人待办、已办事项，以及单位内部通讯录，也可以设置个人签名等。<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_conl">
          <div class="page_about_jj_con_name c">内部通讯</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;内部通讯主要用于单位内部员工在线发送消息或手机短信，可以查看个人收件箱、发件箱。<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
        <div class="page_about_jj_imgr"><img src="@/assets/home/cut2(1).jpg"></div>
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_img"><img src="@/assets/home/cut3(1).jpg"></div>
        <div class="page_about_jj_con">
          <div class="page_about_jj_con_name c">通知公告</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;单位内部通知、公告、公示发布与查询、历史数据查询。<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_conl">
          <div class="page_about_jj_con_name c">网上审批</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;用户可根据不同的办文类型发起业务审批，不同的业务类型按持有审批类型进行审批。<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
        <div class="page_about_jj_imgr"><img src="@/assets/home/cut4(1).jpg"></div>
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_img">
          <img src="@/assets/home/cut5(1).jpg"></div>
        <div class="page_about_jj_con">
          <div class="page_about_jj_con_name c">建设项目</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;建设项目主要特点有规模大、工期时间长、耗资大、环节多等，功能主要包括项目立项、项目可研、项目概算、项目实施、项目验收、项目审计。<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
      <div class="page_about_jj c">
        <div class="page_about_jj_conl">
          <div class="page_about_jj_con_name c">资源管理</div>
          <div class="n_bottom"></div>
          <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
            &nbsp;资源管理根据不同业务类型查询已归档的业务数据，对业务数据进行分析<br>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
        <div class="page_about_jj_imgr"><img src="@/assets/home/cut6(1).jpg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainData1: [
        {
          id: 1,
          title: '500强'
        }, {
          id: 2,
          title: '跨国企业'
        }, {
          id: 3,
          title: '出海企业'
        }, {
          id: 4,
          title: '制造'
        }, {
          id: 5,
          title: '企业服务'
        }, {
          id: 6,
          title: '软件互联网'
        }, {
          id: 7,
          title: '生命科学'
        }, {
          id: 8,
          title: '消费品'
        },
      ],
      colorId: 1,
      mainData2: [
        {
          img: require("@/assets/livethree/cover1.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover2.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover3.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover1.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover2.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover3.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData3: [
        {
          img: require("@/assets/livethree/cover7.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover8.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover9.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover10.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover11.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover12.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData4: [
        {
          img: require("@/assets/livethree/cover10.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover11.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover12.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover7.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover8.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover9.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData5: [
        {
          img: require("@/assets/livethree/cover13.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover14.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover15.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover10.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover11.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover12.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData6: [
        {
          img: require("@/assets/livethree/cover16.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover17.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover18.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover13.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover14.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover15.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData7: [
        {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover10.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover11.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover12.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData8: [
        {
          img: require("@/assets/livethree/cover22.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover23.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover24.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover13.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover14.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover15.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover22.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover23.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover24.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData9: [
        {
          img: require("@/assets/livethree/cover25.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover26.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover27.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      selectData: [
        {
          img: require("@/assets/livethree/cover1.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover2.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover3.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover1.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover2.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover3.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover19.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover20.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        }, {
          img: require("@/assets/livethree/cover21.jpg"),
          title: '威立雅',
          unit: '专业服务',
          text: '基于销售云产品及专业的实施服务, 销售易帮助威立雅废弃物处置与可再生资源利用业务构建 L2C的全流程自动化管理体系,为威立雅提供全触点的客户连接,以及360度客户旅程数字化支持。'
        },
      ],
      mainData10: [
        {
          id: 1,
          tapName: '综合信息平台',
          cover: require('@/assets/livethree/pic_zonghe@2x.png'),
          text: ' 信息发布、流程审批、文档管理、日程安排、通讯录管理以及自定义模块。这些功能使得平台成为一个统一的信息入口，方便员工获取和处理各类信息，提高工作效率和协同能力。',
        },
        {
          id: 2,
          tapName: '工单审批平台',
          cover: require('@/assets/livethree/pic_gongdan@2x.png'),
          text: '流程定制、工单创建与提交、审批与流转、查询与统计、提醒与通知以及权限控制。这些功能共同实现了企业内部审批流程的自动化、规范化，提高了工作效率和透明度，确保了业务的高效运转。',
        },
        {
          id: 3,
          tapName: '教育协作平台',
          cover: require('@/assets/livethree/pic_jiaoyu@2x.png'),
          text: '在线协作、资源共享、课程管理、学习计划、成绩管理以及互动交流。这些功能为师生提供了一个便捷、高效的教育环境，促进教学资源的整合与共享，提升教学质量和学习效果。',
        },
        {
          id: 4,
          tapName: '流程管理中台',
          cover: require('@/assets/livethree/pic_liucheng@2x.png'),
          text: '主要业务功能包括：流程建模、流程实例化、流程引擎、流程监控、流程优化和版本管理。这些功能为企业提供了从流程设计、执行到监控优化的全生命周期管理，助力企业提升业务流程的效率和规范性。',
        },
        {
          id: 5,
          tapName: '党建门户系统',
          cover: require('@/assets/livethree/pic_dangjian@2x.png'),
          text: '党建门户系统包含组织管理、党员管理、学习教育、宣传展示以及考核评估。这些功能使得党组织能够高效地开展党建工作，加强党员队伍建设，提高党组织的凝聚力和战斗力。',
        },
        {
          id: 6,
          tapName: '政务办公系统',
          cover: require('@/assets/livethree/pic_zhengwu@2x.png'),
          text: '政务办公系统主要业务功能包括：公文管理、事务审批、资源管理、信息发布及个人办公。助力政府机构实现流程规范化、信息共享和实时监控，提升政务服务质量，加强内部协作。',
        },
        {
          id: 7,
          tapName: '数据大屏与决策平台',
          cover: require('@/assets/livethree/pic_daping@2x.png'),
          text: '使用O2OA创建的数据大屏与决策平台，致力于为企业提供数据驱动的决策支持。其核心业务功能包括：数据整合、报表生成、大屏展示、实时监控和智能分析。平台能够快速构建数据可视化大屏，直观呈现关键业务数据，助力企业决策层洞察市场趋势，提升决策效率和准确性。',
        },
        {
          id: 8,
          tapName: '医院管理系统',
          cover: require('@/assets/livethree/pic_yiyuan@2x.png'),
          text: '医院管理系统旨在提升医院运营效率和服务质量。其核心业务功能包括：病历管理、医嘱管理、药品管理、财务管理和行政管理。通过系统化管理，医院能够实现信息共享、流程优化和资源整合，提升医疗服务水平，降低运营成本。',
        },
      ],
      tapId: 1,
      selectTap: {
        id: 1,
        tapName: '综合信息平台',
        cover: require('@/assets/livethree/pic_zonghe@2x.png'),
        text: ' 信息发布、流程审批、文档管理、日程安排、通讯录管理以及自定义模块。这些功能使得平台成为一个统一的信息入口，方便员工获取和处理各类信息，提高工作效率和协同能力。',
      },
      mainData11: [
        {
          id: 1,
          cover: require('@/assets/livethree/pic_liucheng1@2x.png'),
          title: '流程管理功能',
          text: '通过数字化手段，实现了业务流程的全面管理、优化与自动化，提升企业运营效率和协同能力。智能监控、预警机制以及移动端操作能力，为企业高效运营提供了有力支撑。'
        },
        {
          id: 2,
          cover: require('@/assets/livethree/pic_xinxi1@2x.png'),
          title: '内容管理功能',
          text: '实现企业信息资源的集中管理、共享与高效利用，提升信息价值。强大而灵活的权限控制以及智能检索功能，助力企业降低信息管理成本，增强业务创新能力。'
        },
        {
          id: 3,
          cover: require('@/assets/livethree/pic_menhu1@2x.png'),
          title: '门户管理功能',
          text: '打造统一、高效、安全的信息门户，满足员工、客户、合作伙伴的不同需求，提升企业形象和业务协同效率，帮助企业实现信息资源的整合与共享，提高决策效率。'
        },
        {
          id: 4,
          cover: require('@/assets/livethree/pic_shuju1@2x.png'),
          title: '数据管理功能',
          text: '提供灵活的数据查询和报表生成功能，方便用户快速获取所需数据。帮助企业实现数据的规范化、集中化和可视化，提高决策效率和业务协同能力。'
        },
        {
          id: 5,
          cover: require('@/assets/livethree/pic_fuwu1@2x.png'),
          title: '服务管理平台',
          text: '更加灵活、高效地管理和封装服务，以满足不断变化的业务需求。实现服务的组合、编排和调用，提高服务响应速度和可扩展性。'
        },
      ],
      mainData12: [
        {
          id: 1,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 2,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 3,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 4,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 5,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 6,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 7,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
      ],
      applicationId: 1,
      mainData13: [
        {
          id: 1,
          name: '浙江省某局办单位',
          text: '随着信息化建设的不断深入，某省某局面临办公系统升级优化的迫切需求。现有办公系统已无法满足日益增长的业务需求和管理效率的提升，需要构建一套功能强大、操作便捷、安全可靠的全新办公系统。项目旨在通过系统升级改造，提升工作效率，优化业务流程，实现信息化管理的全面提升。',
          icon: require('@/assets/livethree/pic_anli_13@2x.png')
        },
        {
          id: 2,
          name: '江西某村镇银行贷前审批管理系统',
          text: '随着银行业务的快速发展和数字化转型的推进，江西省某村镇银行面临着提升信贷审批效率、降低操作风险、优化客户体验等多方面的挑战。为此，该行决定启动贷前审批信息系统项目，以实现业务办理的电子化、移动化，从而提升整体业务效率和服务水平。',
          icon: require('@/assets/livethree/pic_anli_7@2x.png')
        },
        {
          id: 3,
          name: '广西某高校OA系统建设项目',
          text: '该高校作为一所知名的教育机构，在教育教学、行政管理等方面面临日益增长的信息化需求。为了提高办公效率，优化管理流程，高校决定对现有的OA系统进行整体优化与重建。',
          icon: require('@/assets/livethree/pic_anli_9@2x.png')
        },
        {
          id: 4,
          name: '某矿业公司协同办公系统升级项目',
          text: '该矿业公司是位于阿根廷的一家专注于锂矿开发与加工的企业。随着业务的快速发展，企业面临着内部沟通不畅、信息管理分散、审批流程繁琐等问题。为了提高工作效率，加强内部沟通，该公司决定建设一套协同办公系统，以满足日常办公的各类需求。',
          icon: require('@/assets/livethree/pic_anli_1@2x.png')
        },
      ],
      mainData14: [
        {
          id: 1,
          name: "标准技术支持服务",
          text: '标准的技术支持服务为用户提供了专业的技术支持和问题解决方案，确保用户能够顺利地使用平台进行开发和管理工作。',
          icon: require('@/assets/livethree/pic_zhichi_5@2x.png')
        },
        {
          id: 2,
          name: "免费的藕粉社区支持",
          text: '社区用户可以获取官方发布的技术文档、教程、案例等资料，方便学习和参考，有助于快速了解平台开发方式。',
          icon: require('@/assets/livethree/pic_zhichi_1@2x.png')
        },
        {
          id: 3,
          name: "源码级技术支持",
          text: '源码级技术支持服务让开发者更快速了解、熟悉源代码的架构，核心业务逻辑。支持团队可以以远程的方式协助调试代码、解决代码问题。',
          icon: require('@/assets/livethree/pic_zhichi_2@2x.png')
        },
        {
          id: 4,
          name: "免费的技术文档中心",
          text: '文档中心包含了平台的使用说明、开发指南、API文档、插件开发教程等，方便用户快速了解平台的功能、特性和使用方法。',
          icon: require('@/assets/livethree/pic_zhichi_3@2x.png')
        },
        {
          id: 5,
          name: "VIP专属技术支持服务",
          text: '专属技术支持服务提供更高效的定制化解决方案和技术支持，能够更好地满足企业需求，提高企业的开发效率和项目成功率。',
          icon: require('@/assets/livethree/pic_zhichi_6@2x.png')
        },
        {
          id: 6,
          name: "免费的视频教程支持",
          text: '专属技术支持服务提供更高效的定制化解决方案和技术支持，能够更好地满足企业需求，提高企业的开发效率和项目成功率。',
          icon: require('@/assets/livethree/pic_zhichi_4@2x.png')
        },
      ],
      mainData15: [
        {
          id: 1,
          name: '灵活支持与外部系统集成',
          text: 'O2OA开发平台提供灵活的支持与外部系统集成能力，能够实现不同系统的无缝对接。通过标准API接口和插件机制，平台可以与各类业务系统进行数据交互和流程整合，提高工作效率和数据一致性。这种集成能力有助于打破信息孤岛，实现跨部门、跨组织的高效协同。'
        },
        {
          id: 1,
          name: '完整的API提供',
          text: 'API提供了丰富的功能和工具，使开发者能够轻松地与平台进行交互，实现定制化开发。通过API，开发者可以扩展平台的功能、集成外部系统、创建插件和模块，以满足企业的特定需求。完整的API不仅提高了开发者的生产力，还促进了企业内部的创新和协作。'
        },
        {
          id: 1,
          name: '支持源代码级二次开发',
          text: 'O2OA开发平台提供灵活的支持与外部系统集成能力，能够实现不同系统的无缝对接。通过标准API接口和插件机制，平台可以与各类业务系统进行数据交互和流程整合，提高工作效率和数据一致性。这种集成能力有助于打破信息孤岛，实现跨部门、跨组织的高效协同。'
        },
      ],
      mainData16: [
        {
          id: 1,
          name: '考勤管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 2,
          name: '日程管理',
          icon: require('@/assets/livethree/icon_kaoqinguanli_c@2x.png')
        },
        {
          id: 3,
          name: '会议管理',
          icon: require('@/assets/livethree/icon_huiyiguanli_c@2x.png')
        }, {
          id: 4,
          name: '工作管理',
          icon: require('@/assets/livethree/icon_gongwenguanli@2x.png')
        },
        {
          id: 5,
          name: '企业社区',
          icon: require('@/assets/livethree/icon_luntan_c@2x.png')
        },
        {
          id: 6,
          name: '企业网盘',
          icon: require('@/assets/livethree/icon_qiyewangpan@2x.png')
        },
        {
          id: 7,
          name: '资产管理',
          icon: require('@/assets/livethree/icon_zichanguanli@2x.png')
        },
        {
          id: 8,
          name: '人事管理',
          icon: require('@/assets/livethree/icon_renshiguanli@2x.png')
        },
        {
          id: 9,
          name: '信息管理',
          icon: require('@/assets/livethree/icon_xinxiguanli@2x.png')
        },
        {
          id: 9,
          name: '云笔记',
          icon: require('@/assets/livethree/icon_yunbiji@2x.png')
        },
        {
          id: 10,
          name: '合同管理',
          icon: require('@/assets/livethree/icon_hetongguanli@2x.png')
        },
        {
          id: 11,
          name: '客户管理',
          icon: require('@/assets/livethree/icon_kehuguanli@2x.png')
        },
        {
          id: 12,
          name: '请假申请',
          icon: require('@/assets/livethree/icon_qingjiashenqing@2x.png')
        },
        {
          id: 13,
          name: '培训管理',
          icon: require('@/assets/livethree/icon_peixunguanli@2x.png')
        },
        {
          id: 14,
          name: '报销申请',
          icon: require('@/assets/livethree/icon_baoxiaoshenqing@2x.png')
        },
        {
          id: 15,
          name: '数据管理',
          icon: require('@/assets/livethree/icon_shujuguanli_c@2x.png')
        },
        {
          id: 16,
          name: '流程管理',
          icon: require('@/assets/livethree/icon_liuchengguanli_c@2x.png')
        },
        {
          id: 17,
          name: '文档协作',
          icon: require('@/assets/livethree/icon_wendangxiezuo@2x.png')
        },
        {
          id: 18,
          name: '财务审批',
          icon: require('@/assets/livethree/icon_caiwuguanli@2x.png')
        },
        {
          id: 19,
          name: '公文管理',
          icon: require('@/assets/livethree/icon_gongwenguanli@2x.png')
        }
      ]

    }
  },
  methods: {
    changeColor(id) {
      this.colorId = id
      if (id === 1) {
        this.selectData = this.mainData2
      } else if (id === 2) {
        this.selectData = this.mainData3
      } else if (id === 3) {
        this.selectData = this.mainData4
      } else if (id === 4) {
        this.selectData = this.mainData5
      } else if (id === 5) {
        this.selectData = this.mainData6
      } else if (id === 6) {
        this.selectData = this.mainData7
      } else if (id === 7) {
        this.selectData = this.mainData8
      } else if (id === 8) {
        this.selectData = this.mainData9
      }
    },
    getTap(id) {
      this.tapId = id
      this.selectTap = this.mainData10.find(item => item.id === id)
      console.log(this.selectTap)
    },
    changeApplication(id) {
      this.applicationId = id
    }
  }
};
</script>

<style lang="scss" scoped>
.b-layout {
  width: 100%;
  height: 550px;
  background: url('../../assets/liveTwo/banner.jpg') no-repeat center;
  background-size: cover;

  .b-content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .b-l > div:nth-child(1) {
      height: 40px;
      font-size: 22px;
      color: white;
    }

    .b-l > div:nth-child(2) {
      height: 100px;
      font-size: 54px;
      color: white;
    }

    .b-l > div:nth-child(3) {
      flex-direction: column;
      row-gap: 10px;
      font-size: 18px;
      color: white;
    }

    .b-l {
      width: calc(100% - 550px);
      height: 100%;
      flex-direction: column;
      justify-content: center;
      display: flex;

      div {
        display: flex;
      }
    }

    .b-r {
      width: 550px;
      height: 100%;
      justify-content: flex-end;
      align-items: flex-end;

      img {
        width: 546px;
        height: 434px;
      }
    }
  }
}

.banner-box {
  width: 100%;
  height: 600px;
  position: relative;
  z-index: -1;

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
        color: rgb(81, 81, 81);
        line-height: 64px;
        margin-bottom: 0px;
        font-weight: bold;
      }

      .text2 {
        font-size: 24px;
        color: rgb(85, 85, 85);
        line-height: 34px;
        font-weight: 300;
        margin: 16px 0px 0px 0px;
      }
    }
  }
}

.case_menu {
  padding: 50px 0 15px;
  display: flex;
  justify-content: center;
  max-width: 1426px;
  width: 100%;
  margin: -38px auto 0;
  border-radius: 1px;
  background-color: rgba(5, 100, 245, 1);
  box-sizing: border-box;

  .inner_case_menu_box {
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;

    .swiper-pointer-events {
      touch-action: pan-y;

      .menu_ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
        margin: 0;
        transform: translate3d(0px, 0, 0);
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition-property: transform;
        box-sizing: content-box;

        .menu_li {
          line-height: 51px;
          color: rgba(255, 255, 255, 100);
          font-size: 20px;
          padding: 0 20px;
          min-width: 135px;
          box-sizing: border-box;
          border-radius: 2px;
          text-align: center;
          cursor: pointer;
          flex-shrink: 0;
          height: 100%;
          position: relative;
          transition-property: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .active {
          color: rgba(5, 100, 245, 100);
          background-color: #fff !important;
        }
      }

      .swiper-notification {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
      }
    }

    .swiper {
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      list-style: none;
      padding: 0;
      z-index: 1;
    }
  }
}

.customer_classics {
  padding-top: 88px;

  .type_title {
    line-height: 48px;
    color: rgba(44, 46, 48, 100);
    font-size: 34px;
    text-align: center;
    margin: 0;
    position: relative;
  }

  .type_title:after {
    content: "";
    display: block;
    width: 32px;
    height: 6px;
    background-image: linear-gradient(90deg, #46BAED, #007AFF);
    position: absolute;
    bottom: -16px;
    left: calc(50% - 16px);
  }

  .classics_swiper {
    max-width: 100%;
    width: 1200px;
    margin: 75px auto 0;
    touch-action: pan-y;

    .data_ul {
      list-style: none;
      text-align: left;
      padding: 0;
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
      flex-wrap: wrap;
      justify-content: space-between;

      li:nth-child(3n) {
        margin-right: 0;
      }

      li {
        width: 374px;
        max-width: 100%;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 12px 0px rgba(204, 211, 214, 0.25);
        border: 1px solid rgba(234, 234, 234, 0.4);
        margin-bottom: 62px;
        margin-right: 24px;

        .case_logo {
          height: 183px;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          background: #0564f5;

          img {
            vertical-align: middle;
            display: block;
            width: 100%;
          }
        }

        .case_text_box {
          padding: 24px 16px 25px 19px;

          .text_top {
            display: flex;
            align-items: center;

            .company_name {
              line-height: 33px;
              color: rgba(44, 46, 48, 100);
              font-size: 24px;
              margin-right: 15px;
            }

            .industry_name {
              line-height: 28px;
              border-radius: 17px;
              background-color: rgba(230, 249, 250, 1);
              padding: 0 23px;
              display: inline-block;
              color: rgba(0, 152, 164, 100);
              font-size: 14px;
            }
          }

          .short_info {
            color: rgba(122, 122, 122, 100);
            font-size: 15px;
            line-height: 23px;
            min-height: 103px;
            margin: 16px 0 22px;
            border-bottom: 1px solid #EBEBEB;
            text-align: justify;
          }
        }
      }

      .swiper-slide {
        transform: translateZ(0);
        backface-visibility: hidden;
        flex-shrink: 0;
        height: 100%;
        position: relative;
        transition-property: transform;
      }
    }

    .swiper-pagination {
      position: absolute;
      text-align: center;
      transition: .3s opacity;
      transform: translate3d(0, 0, 0);
      z-index: 10;
    }
  }
}

.section {
  width: 100%;
  margin-top: 30px;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .d-content {
      display: flex;
      column-gap: 40px;

      .d-l {
        width: 800px;
        height: 450px;

        video {
          width: 100%;
          border-radius: 10px;
          mix-blend-mode: darken;
        }
      }

      .d-r {
        padding: 30px 50px;
        width: 175px;
        height: 390px;
        color: #333;
        font-size: 18px;
        border: 1px solid #e6e6e6;
        border-radius: 8px;

        li {
          padding: 0;
          margin: 0;
          list-style-type: none;
          color: #333;
          font-size: 18px;
          font-weight: 300;
        }
      }

      .d-r > div:nth-child(1) {
        margin-bottom: 30px;
      }

      .d-r > div:nth-child(1) li {
        line-height: 36px;
      }
    }
  }
}

.section1 {
  width: 100%;
  margin-top: 120px;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
      font-weight: 300;

    }

    .d-title {
      height: 30px;
      font-size: 20px;
      color: #000;
      font-weight: 300;
    }

    .d-c {
      margin-top: 30px;

      .d-c-n {
        display: flex;
        align-items: center;
        column-gap: 40px;
        height: 40px;
        border-bottom: 1px solid #e6e6e6;

        .d-c-n-cur {
          color: #2e82f7 !important;
          text-decoration-thickness: 2px;
          text-decoration-color: #2e82f7;
          text-decoration-line: underline;
          text-underline-offset: 12px;
        }

        li {
          font-size: 18px;
          color: #666;
          cursor: pointer;
          list-style: none;
        }
      }

      .d-c-img {
        .d-c-img-content {
          height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 800px;
            height: 444px;
          }
        }
      }

      .d-c-spot {
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        column-gap: 8px;

        li {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #dedede;
        }

        .d-c-spot-cur {
          background-color: #2e82f7 !important;
          width: 20px !important;
        }
      }

      .d-c-detail {
        font-size: 20px;
        color: #000;
        line-height: 34px;
        font-weight: 300;

        li {
          overflow: hidden;
          width: 0;
          height: 0;
          list-style: none;
        }

        .d-c-detail-cur {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
  }
}

.section2 {
  width: 100%;
  margin-top: 120px;
  font-weight: 300;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .c-title {
      line-height: 30px;
      font-size: 20px;
      color: #000;
    }


  }

  .c-content > div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    .c-l {
      width: 350px;
      height: 190px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .c-r {
      width: 820px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      div:nth-child(2) {
        margin-top: 10px;
      }

      .home-title {
        font-size: 20px;
        color: #000;
        font-weight: 400 !important;
      }

      .home-detail {
        font-size: 16px;
        color: #333;
        line-height: 28px;
      }
    }
  }

  .c-content {
    margin: 0 auto;
    margin-top: 50px;
    width: 1200px;
    padding: 0 10px;

    font-weight: 300;


  }
}

.section3 {
  width: 100%;
  margin-top: 120px;
  font-weight: 300;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .f-c {
      display: flex;
      flex-wrap: wrap;
      row-gap: 40px;
      column-gap: 60px;

      a {
        width: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        font-size: 16px;
        color: #333;
        text-decoration: none;

        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

.section4 {
  width: 100%;
  margin-top: 120px;
  font-weight: 300;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .k-content {
      display: flex;
      column-gap: 75px;

      div {
        width: 350px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        .home-title {
          font-size: 20px;
          color: #000;
          font-weight: 400 !important;
        }

        .home-detail {
          font-size: 16px;
          color: #333;
          line-height: 28px;
        }
      }
    }
  }
}

.section5 {
  width: 100%;
  margin-top: 120px;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .l-content {
      display: flex;
      flex-wrap: wrap;
      column-gap: 80px;
      row-gap: 30px;

      .llbox {
        width: 560px;
        display: flex;
        justify-content: space-between;
        column-gap: 30px;

        .l-l {
          .home-title {
            font-size: 20px;
            color: #000;
            font-weight: 400 !important;
          }

          .home-detail {
            font-size: 16px;
            color: #333;
            line-height: 28px;
            margin: 10px 0 20px 0;
          }
        }

        img {
          width: 180px;
          height: 135px;
        }
      }
    }
  }
}

.section6 {
  width: 100%;
  margin-top: 120px;

  .layout-content {
    width: 1200px;
    padding: 0 10px;
    margin: 0 auto;

    .layout-title {
      font-size: 42px;
      text-align: center;
      color: #000;
      margin-bottom: 60px;
    }

    .y-content > div {
      width: 560px;
    }

    .y-content {
      display: flex;
      flex-wrap: wrap;
      column-gap: 80px;
      row-gap: 60px;

      img {
        width: 500px;
        height: 285px;
        margin-bottom: 20px;
        border-radius: 10px;
      }

      .home-title {
        font-size: 20px;
        color: #000;
        font-weight: 400 !important;
      }

      .home-detail {
        font-size: 16px;
        color: #333;
        line-height: 28px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
}

.module {
  display: inline-block;
  width: 100%;

  .product_title {
    display: flex;
    margin: 80px auto 60px;
    justify-content: center;
    align-items: center;

    p {
      font-size: 28px;
      font-weight: 600;
      color: #333;
      opacity: 1;
      margin: 0 24px;
      line-height: 36px;
    }
  }

  .advan_box {
    display: flex;
    justify-content: center;

    .advan_item {
      width: 280px;
      margin-right: 20px;

      .image {
        width: 80px;
        height: 80px;
        background: #216cf9;
        -webkit-box-shadow: 0 4px 8px rgba(33, 108, 249, .2);
        box-shadow: 0 4px 8px rgba(33, 108, 249, .2);
        border-radius: 50%;
        margin-left: 100px;
        display: flex;
        justify-content: center;

        img {
          width: 40px;
          height: 40px;
          margin-top: 20px;
        }
      }

      .text {
        width: 280px;
        height: 280px;
        -webkit-box-shadow: 0 0 24px rgba(33, 108, 249, .2);
        box-shadow: 0 0 24px rgba(33, 108, 249, .2);
        opacity: 1;
        border-radius: 2px;
        margin-top: -40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div:first-child {
          font-size: 18px;
          font-weight: 500;
          line-height: 26px;
          color: #333;
          padding-top: 75px;
        }

        div:nth-child(2) {
          width: 220px;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #666;
          text-align: left;
          margin: 12px 30px 0;
        }
      }
    }
  }

  .appliction_nav {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 2px solid #ececec;

    .active {
      color: #216cf9;
      border-bottom: 2px solid #2e8ae6;

      .top {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        z-index: 2;
        bottom: -1px;

        .top-arrow1 {
          width: 0;
          height: 0;
          display: block;
          position: absolute;
          left: 0;
          top: 1px;
          z-index: 5;
          overflow: hidden;
          border-color: transparent transparent #2e8ae6;
          border-style: dashed dashed solid;
          border-width: 9px 10px 10px;
        }

        .top-arrow2 {
          width: 0;
          height: 0;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
          border-color: transparent transparent #fff;
          border-style: dashed dashed solid;
          border-width: 11px 10px 10px;
          overflow: hidden;
          top: 1px;
        }

        i {
          text-decoration: none;
          font-style: normal;
        }
      }

      .name {
        display: flex;
        margin-bottom: 20px;
        justify-content: center;

        p {
          display: inline-block;
          line-height: 30px;
        }
      }
    }

    .appliction-one {
      position: relative;
      cursor: pointer;

      .name {
        display: flex;
        margin-bottom: 20px;
        justify-content: center;
        align-items: center;

        img {
          width: 30px;
          height: 31px;
        }

        p {
          display: inline-block;
          line-height: 30px;
        }
      }
    }
  }
}

.advanCloud {
  background-image: url('@/assets/livethree/advanCloudbg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 100px;

  .product_title {
    display: flex;
    margin: 80px auto 60px;
    justify-content: center;
    align-items: center;

    p {
      font-size: 28px;
      font-weight: 600;
      color: #333;
      opacity: 1;
      margin: 0 24px;
      line-height: 36px;
    }
  }

  .advanCloudbox {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .advanCloudItem {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      align-items: center;

      .advanCloudItemLeft {

      }

      .advanCloudItemRight {
        text-align: left;
        width: 315px;
        margin-left: 22px;

        h4 {
          font-size: 20px;
          font-weight: 400;
          font-stretch: normal;
          line-height: 26px;
          letter-spacing: 0;
          color: #333;


        }

        p {
          font-size: 14px;
          font-weight: 400;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 0;
          margin-top: 10px;
          color: #666;
        }
      }
    }
  }
}

.appliction_box {
  display: flex;
  margin-top: 40px;
  margin-bottom: 100px;
  justify-content: center;

  .appliction_left {
    width: 803px;
    height: 588px;
    padding: 15px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;

    img {
      width: 100%;
    }
  }

  .appliction_right {
    width: 357px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 40px;

    .applicationItem {
      border-radius: 2px;
      background: #fff;
      border: 1px solid #ddd;
      margin-top: 20px;
      position: relative;

      .applicationItemTit {
        position: absolute;
        font-size: 18px;
        font-weight: 400;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0;
        color: #fff;
        top: 30px;
        left: 0;
        padding: 0 30px 0 15px;
        background-image: url("@/assets/livethree/jx.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .detail {
        font-size: 14px;
        font-weight: 400;
        font-stretch: normal;
        line-height: 24px;
        color: #666;
        padding: 96px 38px 32px;
        text-align: left;
      }

      .detailList {
        text-align: left;
        padding: 76px 40px 30px;

        .detailName {
          display: flex;
          margin-top: 20px;

          div {
            width: 15px;
            height: 15px;
            background: #226cf9;
            font-size: 12px;
            font-weight: 400;
            line-height: 15px;
            color: #fff;
            text-align: center;
            border-radius: 15px;
            margin: 4px 12px 0 0;
          }

          span {
            font-size: 14px;
            line-height: 22px;
            color: #216cf9;
            display: inline-block;
          }
        }

        .detailMs {
          font-size: 14px;
          font-weight: 400;
          font-stretch: normal;
          line-height: 22px;
          letter-spacing: 0;
          color: #666;
          margin-top: 7px;
        }
      }
    }
  }
}

.OAbox {
  width: 1200px;
  margin: auto;


  .t_sert_l01 {
    width: 100%;
    font-size: 40px;
    color: #333333;
    margin: 71px 0 20px 0;
  }

  .n_bottom {
    width: 100%;
    height: 1px;
    border-bottom: 1px #cacfd5 solid;
    padding-bottom: 20px;
  }

  .text {
    margin-top: 20px;
    color: #626262;
  }

  .page_about_jj {
    margin-top: 40px;
    height: 400px;

    .page_about_jj_img {
      width: 595px;
      height: 323px;
      float: left;
    }

    .page_about_jj_imgr {
      width: 595px;
      height: 323px;
      float: right;
    }

    .page_about_jj_con {
      width: 595px;
      float: right;

      .page_about_jj_con_name {
        color: #000000;
        font-size: 30px;
      }

      .n_bottom {
        width: 100%;
        height: 1px;
        border-bottom: 1px #cacfd5 solid;
        padding-bottom: 20px;
      }

      .page_about_jj_con_js {
        margin-top: 15px;
        font-size: 14px;
        color: #666666;
        line-height: 30px;
      }
    }

    .page_about_jj_conl {
      width: 595px;
      float: left;

      .page_about_jj_con_name {
        color: #000000;
        font-size: 30px;
      }

      .n_bottom {
        width: 100%;
        height: 1px;
        border-bottom: 1px #cacfd5 solid;
        padding-bottom: 20px;
      }

      .page_about_jj_con_js {
        margin-top: 15px;
        font-size: 14px;
        color: #666666;
        line-height: 30px;
      }
    }
  }
}
</style>
