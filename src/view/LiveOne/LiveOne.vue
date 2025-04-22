<template>
  <div>
    <div class="banner-box">
      <div class="imga">
        <img class="banner" src="../../assets/home/banner.png"/>
      </div>
      <div class="img-text">
        <div class="text-inner">
          <h2 class="text1">企业合伙人</h2>
          <p></p>
          <h4 class="text2">
            开放API、个性化定制开发，高效连接企业多渠道数据，安全<br/>省心打造企业专属合作
          </h4>
        </div>
      </div>
    </div>
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
    <div class="section8">
      <div class="stitle">来投融界，助您打通行业人脉</div>
      <div class="container">
        <ul class="clearfix">
          <li v-for="(item,index) in mainData4" :key="index">
            <img :src="item.img">
            <div class="w">{{ item.text }}</div>
          </li>

        </ul>
      </div>
    </div>
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

  </div>
</template>

<script>
export default {
  name: "OnePage",
  data() {
    return {
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

</style>
