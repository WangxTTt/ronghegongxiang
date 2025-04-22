<template>
  <div>
    <div class="banner-box">
      <div class="imga">
        <img class="banner" src="../../assets/liveTwo/banner.jpg"/>
      </div>
      <div class="img-text">
        <div class="text-inner">
          <h2 class="text1">开放平台</h2>
          <p></p>
          <h4 class="text2">
            开放API、个性化定制开发，高效连接企业多渠道数据，安全<br/>省心打造企业专属直播间
          </h4>
        </div>
      </div>
    </div>
    <div id="title" class="title container" data-v-63f6c790="">
      <div class="tab-block pt-lyd-120 container" data-v-63f6c790="">
        <div class="fs-1 fw-bold text-center lyd-title-colo1 aos-init aos-animate" data-aos="fade-up"
             data-v-63f6c790="">平台概述
        </div>
        <div class="fs-3 text-center lyd-title-colo1 title_div aos-init aos-animate" data-aos="fade-up"
             data-v-63f6c790="">博信诚
          智慧创新平台ECOP是基于云架构、微服务、低代码理念建设的轻量级开发支撑平台，业务及行业细分服务由多个细分组件组成，各种产品都能独立使用，企业可选择任一/多个组件实现行业管理组件化。
        </div>
        <embed src="@/assets/livefour/融合1.svg.full.svg">
      </div>
    </div>
    <div class="ability" data-v-63f6c790="">
      <div class="abilityBoxs" data-v-63f6c790="">
        <div class="abilityBox" data-v-63f6c790="">
          <img alt="" class="abilityBox_img" src="@/assets/livefour/bb1.png">
          <div class="abilityBox_content aos-init aos-animate" data-aos="fade-up" data-v-63f6c790="">
            <h4 class="fs-1 text-white" data-v-63f6c790="">大数据、微服务支持能力</h4>
            <div class="fs-text text-white" data-v-63f6c790="">
              灵活的进行各种资源部署,将分布在各处的资源综合利用，负载由单个节点转移到多个，从而提高效率，分布式可以避免由于单个节点失效而使整个系统崩溃的危险
            </div>
          </div>
        </div>
        <div class="abilityBox" data-v-63f6c790="">
          <img alt="" class="abilityBox_img" src="@/assets/livefour/bb2.png">
          <div class="abilityBox_content aos-init aos-animate" data-aos="fade-up" data-v-63f6c790="">
            <h4 class="fs-1 text-white" data-v-63f6c790="">低代码建模能力</h4>
            <div class="fs-text text-white" data-v-63f6c790="">
              通过不同需求进行业务场景、财务建模，搭建业务底层结构框架，实现数据多视角填报、计算、展现和分析且支持动态多维汇总，动态成员公式和灵活的计算逻辑个性化展示，即时呈现，即时更新，更是做到了0代码鼠标拖带式操作交互。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="framework container" data-v-63f6c790="">
      <div class="tab-block pt-lyd-120 container ind" data-v-63f6c790="">
        <div class="fs-1 fw-bold text-center lyd-title-colo1" data-v-63f6c790="">平台架构图</div>
        <p class="fs-3 text-center lyd-title-colo1" data-v-63f6c790="">云架构、低代码、微服务</p></div>
      <div class="framework_btns container" data-v-63f6c790="">
        <div v-for="item in mainData4" :key="item.id" :class="{'active':framId===item.id}" class="framework_btn"
             data-v-63f6c790="" @click="changeFramId(item.id)">{{ item.name }}
        </div>

      </div>
      <div v-if="framId===1" class="framework_contents container" data-v-63f6c790="">
        <div class="framework_content" data-v-63f6c790=""><p
            class="fs-3 text-center lyd-title-colo1 framework_content_title aos-init aos-animate" data-aos="fade-up"
            data-v-63f6c790="">
          技术中台通过自主研发的底层技术架构而搭建，中台之上，创建了包含全场景技术应用组件，通过标准组件和自定义组件，开发者及用户可以乐高式、插件式的方式，快速搭建并迭代出有价值的场景应用</p>
          <embed src="@/assets/livefour/融合2.svg.full.svg">
        </div>
      </div>
      <div v-if="framId===2" class="framework_contents container" data-v-63f6c790="">
        <div class="framework_content" data-v-63f6c790=""><p
            class="fs-3 text-center lyd-title-colo1 framework_content_title aos-init aos-animate" data-aos="fade-up"
            data-v-63f6c790="">
          业务中台提供针对各种业务和财务数据对象的建模能力，满足各种场景下的明细台账、汇总分析、权限控制、审批流程等需求。更适用于财务场景的核心模块，即从财务数据模型中读取数据的同时，实时进行多维汇总计算。ECOP是一个低代码平台，简单配置标准组件即可生成满足用户多样化需要的成熟模型，同时还支持用户上传使用自定义组件。平台具备强大的可扩展性和灵活性，场景化应用能够快速成熟交付</p>
          <embed src="@/assets/livefour/融合3.svg.full.svg">
        </div>
      </div>
      <div v-if="framId===3" class="framework_contents container" data-v-63f6c790="">
        <div class="framework_content" data-v-63f6c790=""><p
            class="fs-3 text-center lyd-title-colo1 framework_content_title aos-init aos-animate" data-aos="fade-up"
            data-v-63f6c790="">
          数据中台汇聚企业级数据资产，专注打造企业数字化、智能化数据服务中台，支撑企业智慧经营能力体系建设，从数
          据集成、建模、到应用端到端将数据赋能于企业决策运营，围绕平台化、资产化、服务化，聚焦数智场景，赋能行业生态，让数据产生价值。
          覆盖全链路的数据采集、数据分析、数据挖掘、任务运维、数据质量、数据地图、数据模型、数据 API 开放等场景，
          充分满足企业建设数据中台过程中的多样复杂需求。兼容市面主流大数据平台，或者基于数栈自有计算引擎，可以快速完成大数据平台从
          0 到 1 的搭建</p>
          <embed src="@/assets/livefour/融合数据中台.svg.full.svg">
        </div>
      </div>
      <div v-if="framId===4" class="framework_contents container" data-v-63f6c790="">
        <div class="framework_content" data-v-63f6c790=""><p
            class="fs-3 text-center lyd-title-colo1 framework_content_title aos-init aos-animate" data-aos="fade-up"
            data-v-63f6c790="">
          通过统一数据连接器与其他业务系统如生产制造系统、供应链系统等（Oracle、NC、SAP等）无缝整合，实现连接+报账实现业财的全面融合。连接中台支撑200+系统识别、500+业务类别，满足企业价值链和上下有全面协同管理，提升企业高质量发展。</p>
          <embed src="@/assets/livefour/融合企业业务前台.svg.full.svg">
        </div>
      </div>
  
    </div>
    <div id="values" class="values" data-v-63f6c790="">
      <div class="tab-block pt-lyd-120 container ind aos-init aos-animate" data-aos="fade-up" data-v-63f6c790=""><h3
          class="fs-1 fw-bold text-center lyd-title-colo1" data-v-63f6c790="">平台价值</h3>
        <p class="fs-3 text-center lyd-title-colo1" data-v-63f6c790="">云架构、低代码、微服务</p></div>
      <div class="valuesBoxs container" data-v-63f6c790="">
        <div class="valuesBoxsbg_img" data-v-63f6c790="">
          <img alt="" class="valuesBoxs_img" data-v-63f6c790="" src="@/assets/livefour/value.427e3177.png"></div>
        <div class="value" data-v-63f6c790="">
          <div class="valueBoxes" data-v-63f6c790="">
            <div
                class="swiper-container mySwipe swiper-no-swiping swiper-container-initialized swiper-container-horizontal"
                data-v-63f6c790="">
              <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1860px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      数据互通，支持业务决策和优化</h4>
                      <p class="text-white" data-v-63f6c790="">
                        平台各应用数据天然互通，构建企业数据资产，解决数据不一致问题，不断发挥数据价值，进而支持业务的决策和优化</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="0" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      迭代升级，快速响应</h4>
                      <p class="text-white" data-v-63f6c790="">
                        平台覆盖业务应用、流程构建、数据服务、智能决策等数字化管理要素，帮助企业敏捷构建业务应用服务并不断迭代升级，从而快速响应不断变化的市场环节与客户需求</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      聚合服务，平台衍生</h4>
                      <p class="text-white" data-v-63f6c790="">
                        提供统一基座，统一服务，统一组件，所有服务聚合到统一平台中衍生，不断促进业务的标准化、规范化和统一化</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      规模化创新，提高业务敏捷度</h4>
                      <p class="text-white" data-v-63f6c790="">
                        弱化技术门槛，降低需求传递失真，提供快速编排、组合服务能力，更好地支持企业规模化创新，提高业务的敏捷，降低试错成本</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="3" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      共享服务，快速复用</h4>
                      <p class="text-white" data-v-63f6c790="">
                        通过业务抽象，将通用能力、核心能力，提炼为基础服务并下沉，提供共享服务，为前台不断变化的业务提供支撑，避免重复造轮子，实现服务快速复用</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide" data-swiper-slide-index="4" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      数据互通，支持业务决策和优化</h4>
                      <p class="text-white" data-v-63f6c790="">
                        平台各应用数据天然互通，构建企业数据资产，解决数据不一致问题，不断发挥数据价值，进而支持业务的决策和优化</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" data-v-63f6c790=""
                     style="width: 600px; margin-right: 20px;">
                  <div class="valueBox" data-v-63f6c790="">
                    <div class="valueBoxContent" data-v-63f6c790=""><h4 class="text-white" data-v-63f6c790="">
                      迭代升级，快速响应</h4>
                      <p class="text-white" data-v-63f6c790="">
                        平台覆盖业务应用、流程构建、数据服务、智能决策等数字化管理要素，帮助企业敏捷构建业务应用服务并不断迭代升级，从而快速响应不断变化的市场环节与客户需求</p>
                    </div>
                  </div>
                </div>
              </div>
              <span aria-atomic="true" aria-live="assertive" class="swiper-notification"></span></div>
            <div id="swiper-pagination" data-v-63f6c790="">
              <div id="1" class="swiperBox" data-v-63f6c790=""><span id="11" class="swiperBox_line line"
                                                                     data-v-63f6c790=""></span><span
                  id="12" class="swiperBox_content content" data-v-63f6c790="">01</span></div>
              <div id="2" class="swiperBox" data-v-63f6c790=""><span id="21" class="swiperBox_line line"
                                                                     data-v-63f6c790=""></span><span
                  id="22" class="swiperBox_content content" data-v-63f6c790="">02</span></div>
              <div id="3" class="swiperBox" data-v-63f6c790=""><span id="31" class="swiperBox_line line"
                                                                     data-v-63f6c790=""></span><span
                  id="32" class="swiperBox_content content" data-v-63f6c790="">03</span></div>
              <div id="4" class="swiperBox" data-v-63f6c790=""><span id="41" class="swiperBox_line"
                                                                     data-v-63f6c790=""></span><span
                  id="42" class="swiperBox_content content" data-v-63f6c790="">04</span></div>
              <div id="5" class="swiperBox" data-v-63f6c790=""><span id="51" class="swiperBox_line"
                                                                     data-v-63f6c790=""></span><span
                  id="52" class="swiperBox_content content" data-v-63f6c790="">05</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="advantage" class="advantage" data-v-63f6c790="">
      <div class="advatageImg" data-v-63f6c790=""><img alt="" data-v-63f6c790=""
                                                       src="static/img/advantagebg1.895bb367.png"><img alt=""
                                                                                                       data-v-63f6c790=""
                                                                                                       src="static/img/advantagebg2.06e71c4f.jpg"><img
          alt=""
          data-v-63f6c790=""
          src="static/img/advantagebg3-new.35a901d0.jpg"></div>
      <div class="advantageBoxs container" data-v-63f6c790=""><h3
          class="advantageBoxs_title fs-1 text-center text-white"
          data-v-63f6c790="">
        平台优势</h3>
        <div class="advantageBox" data-v-63f6c790=""><img alt=""
                                                          data-v-63f6c790=""
                                                          src="data:image/png;base64,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">
          <!----><!----></div>
        <div class="advantageBox" data-v-63f6c790=""><img alt=""
                                                          data-v-63f6c790=""
                                                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA9CAYAAAAal7HUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIzQTQyRDg5OEQ4NTExRURBNjEyRjQ1QUE0QjJFNTQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIzQTQyRDhBOEQ4NTExRURBNjEyRjQ1QUE0QjJFNTQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjNBNDJEODc4RDg1MTFFREE2MTJGNDVBQTRCMkU1NDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjNBNDJEODg4RDg1MTFFREE2MTJGNDVBQTRCMkU1NDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7FmXlnAAAG/ElEQVR42txb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">
          <h4 class="text-light aos-init aos-animate" data-aos="fade-up"
              data-v-63f6c790="">
            强大的业务能力和平台能力</h4>
          <div class="advantageBox_content text-light aos-init aos-animate" data-aos="fade-up" data-v-63f6c790="">
            可依据不同的数据分类和特性，采用不同的数据存储和管理模式的组合，尽可能的达到性能和空间的最优配置，提供元数据的管理和定义功能，
            更好的管理和使用数据，使得数据的应用范围更加广泛，提供标准的数据接入服务和数据访问服务，更好的集成不同的业务系统和分析系统，更快的创造系统应用价值
          </div>
        </div>
        <div class="advantageBox" data-v-63f6c790=""><img alt=""
                                                          data-v-63f6c790=""
                                                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA9CAYAAAAal7HUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QjQxMTE4OEQ4NTExRUQ4MUNERERCM0E2RThDRDU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4QjQxMTE5OEQ4NTExRUQ4MUNERERCM0E2RThDRDU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NThCNDExMTY4RDg1MTFFRDgxQ0REREIzQTZFOENENTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NThCNDExMTc4RDg1MTFFRDgxQ0REREIzQTZFOENENTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YviK2AAAFNElEQVR42uyaaWwVVRTH51kEWaqmKiLUSMUaoxADQsWNQGrgg0ENWxDrQkkQE0IIRCCBCCjE6AcwQXBJE2SRpLgkjYmRHa24ty5pRSAgDUuAitiUAq31jf8jZ+LheGfevK3MTN9Jfnn3zr0z886bc+9Z5sVs27YiIhPBNDCE+z+ACvC+6xmkfARYZbvL227nRUHx6XZimW46NxZys+8FmtWxj/hznDqeD87KA1eEfJ2PUv2VYDzzaoK5oVf+RtV/U7TfVWN9o6Z8teovFu0X1NghfXKY1/w14A1Qpo5/x5/DxLE/2Ura5MQuIVX8PrAZFBrGhhmOPaEVD6vZzwJfuihukhfBp6aBoD75W8Ct7Ma+F25tLZig5jaBx8AR8CQYDuJs/h+AX8IS4RWDKhWgHADLwD5D8LIL9E31fkHa8B4C20FXn/PJjy9I54ZBUT7G0VcPH3MbeYffmu5Ng7LmJyjF94I1YCB4Thw/AwaBk5m4aVCUHy3ap8BdtB1x/0pQzu1u4PdM3TQorq6naF8QipP8Jto9knBxGVvzfUAeOJYl5aeA90R/BXgL3AY2gWuFW7sB/KXOv9njQcbZDSbt6qaCGtAG/gb7wUtZcHGjbH+yVJ2Xz+4u7nFOnOfkJ1PMqPC44J4MKl4CmnwoXgdi6twy27+U6Xu7mcrTXA9zk/vBxgyYeyn4GlydYB4tiRK1FzgFCr+S72e3p7W9Sh17h9ebTBMplHwF1KeoeAkHNVLqwCRwB7u005y2/uxyjVbVXy82yCJ+iG5zjWY/VJnLCjE2RY3NTNHUR/AeIqUW9EzyOuXqGv3FWH81Vu7H7K9X/V2G+pgj16XwxGnJfKZ2Z7KeoaAlzWU0wKXt28/vVf0FnFE55q/Ty4ViPJGQgp+rY/W8BOIdHVyYlG8AO9WTOszHn1JzC8AycBC8Bnrz8X7sq3fzj7mV95EveE9x5Cv+Qc5dltDKZS0V2qlJM1gDTvqYWw+6pOkm9ZovFWOlqax5kqPgEX7iWmhdzgZzwXFDHf15YQFusoPLTe2XM6b2Smw+4U1jEps+JRi1oIqTD5LV/EPMcVG4gUtOY9W+8LrB1CmfL/b4Pi1ct7OzbfbJ0gssBu3CzPYL11UEGsVYpTr/UZ/LqlotlayYfbJChYilylVtF30KPH4SY/0MEaUfedD08iEoKW2TaD/ORUjHY9wrxnSWlcxunxdU5T8U7Zs4XCX3tket+U3qvHb1wzws2GBIUQOp/CJVYuoOHlBzKJH52OMaZ9gbOHzbkUFOOtLC5n3YZZwsYEyCa3RNEG53iKsbwe7N6CRAjVrj0r3dyaHvPVyFaeQcocIKkJiUJ1PdZjBXUwmZfPM+w9h56//vxwMnJrMf7kNxi2tpz1ghFpPy3ZKJkcKsvMnsdWV0Lbsrp4q73GNu6JXXUgm2iABjuRUR8ePqZChabEVIsvG6itzjVR7jzVFVntLb+dalr59MEdyzqjYYeuXJS6z0MY/q5y9zhhb4Ne9XyNTbwuQiM/nkKdtqFbH5j1z1kTl7Ebdbo7rhOUIZ2RLRv1soHxpXl6oUGNa61VmUj0SQk1M+p3xO+ZzyOeWjqPxB1ZcvGH5VYydUtiZr6n94ZHM6s5NzL3jcg6TB5bvp7+6lxyURHoWkMzgw0VHYTOu/mp4uI0+2LlZ3nGt0F2OlhghPtpeouY4UqrGR6p6UPDlV48FqjF6Zyf/kmPSgV2vrQKPzJ8RvrIv/jugscgDc7ihvd8IlH3PMnt6vz0tQhIiKUEb578uTfwQYAMzvZsnXlkrQAAAAAElFTkSuQmCC">
          <!----><!----></div>
        <div class="advantage_btnBox" data-v-63f6c790="">
          <div class="advantage_btn" data-v-63f6c790="">
            <div class="advantage_btn_content text-light" data-v-63f6c790="">云原生、微服务</div>
          </div>
          <div class="advantage_btn advantage_btn_active" data-v-63f6c790=""><span
              class="advantage_btn_content text-light"
              data-v-63f6c790="">强大的业务能力和平台能力</span>
          </div>
          <div class="advantage_btn" data-v-63f6c790=""><span class="advantage_btn_content text-light"
                                                              data-v-63f6c790="">Business Connector 实现业财融合新模式</span>
          </div>
        </div>
      </div>
    </div>


    <div class="section section-intro">
      <div class="container">
        <h2 class="section-title section-title-l">资源共享开放平台</h2>

        <div class="cols cols-4 mb-cols-2 cards-block clearfix">
          <div v-for="(item,index) in mainData1" :key="index" class="col">
            <div class="card">
              <div><img :src="item.img" alt="连接工作伙伴" class="img"></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div id="jjfa" class="section2">
      <h2 class="section-title">核心功能</h2>
      <div id="swiper_feature" class="swiper-container bg-jb swiper-container-initialized swiper-container-horizontal"
           data-nav="swiper-nav-case" style="cursor: grab;">
        <!---Swiper Nav-->
        <ul id="swiper-nav-case" class="swiper-tab swiper-tab-1">
          <li class="" @click="changeColor(1)">
            <img v-if="colorId==1" class="icon iconfont" src='../../assets/livefour/icon1a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon1.png'/>
            资源共享
          </li>
          <li class="" @click="changeColor(2)">
            <img v-if="colorId==2" class="icon iconfont" src='../../assets/livefour/icon2a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon2.png'/>信息互通
          </li>
          <li class="" @click="changeColor(3)">
            <img v-if="colorId==3" class="icon iconfont" src='../../assets/livefour/icon3a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon3.png'/>创新协作
          </li>
          <li class="" @click="changeColor(4)">
            <img v-if="colorId==4" class="icon iconfont" src='../../assets/livefour/icon4a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon4.png'/>联合营销
          </li>
          <li class="active" @click="changeColor(5)">
            <img v-if="colorId==5" class="icon iconfont" src='../../assets/livefour/icon5a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon5.png'/> 知识共享
          </li>
          <li class="" @click="changeColor(6)">
            <img v-if="colorId==6" class="icon iconfont" src='../../assets/livefour/icon6a.png'/>
            <img v-else class="icon iconfont" src='../../assets/livefour/icon6.png'/>数据分析
          </li>
        </ul>
        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 2031px;">
          <div class="container">
            <div class="jumbo clearfix">
              <div class="jumbo-text">
                <ul class="list-text">
                  <li>
                    <h3>{{ selectData.title1 }}</h3>
                    <p>{{ selectData.text1 }}</p>
                  </li>
                  <li>
                    <h3>{{ selectData.title2 }}</h3>
                    <p>{{ selectData.text2 }}</p>
                  </li>
                  <li>
                    <h3>{{ selectData.title3 }}</h3>
                    <p>{{ selectData.text3 }}</p>
                  </li>
                </ul>
              </div>
              <div class="jumbo-img">
                <img alt="统一门户" src="../../assets/livefour/img_sdk.png">
              </div>
            </div>
          </div>
        </div>

        <br>
      </div>

      <br>
    </div>
    <div id="section-security" class="section3">
      <div class="container clearfix">
        <h2 class="section-title section-title-l">开放平台的核心价值与应用</h2>

        <div class="cols cols-3  card-box clearfix">
          <div v-for="item in mainData3" :key="item.id" class="col">
            <div class="card">
              <div class="card-hd">{{ item.name }}</div>
              <div class="card-bd bg-box1">
                <ul class="list-dot">
                  <li v-for="(li,index) in item.list" :key="index">{{ li }}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div id="scene" class="section4 scene">
      <div class="container">
        <h2 class="section-title section-title-l">开放平台，三大应用场景</h2>
        <div class="jumbo  clearfix">
          <div class="jumbo-text">
            <h3>企业数字化转型</h3>
            <p>助力企业加速数字化转型，企业可以借助平台提供的技术和服务，实现从传统业务到互联网+、数字化业务的转型。</p>
          </div>
          <div class="jumbo-img">
            <img src="../../assets/livefour/s1.png">
          </div>
        </div>
        <div class="jumbo  clearfix">
          <div class="jumbo-img">
            <img src="../../assets/livefour/s2.png">
          </div>
          <div class="jumbo-text">
            <h3>跨行业合作与资源共享</h3>
            <p>
              开放平台为不同行业、领域的企业提供了一个合作的桥梁。允许企业在平台上共享资源、技术、数据等，形成跨行业的合作网络。</p>
          </div>

        </div>
        <div class="jumbo  clearfix">
          <div class="jumbo-text">
            <h3>创新产品与服务开发</h3>
            <p>开放平台为第三方开发者提供了丰富的接口和工具，支持他们在平台基础上开发创新的应用和服务。</p>
          </div>
          <div class="jumbo-img">
            <img src="../../assets/livefour/s3.png">
          </div>
        </div>
      </div>
    </div>
    <div class="section6">
      <div class="container">
        <h2 class="section-title">可扩展性</h2>
        <p class="pad center">
          具备较强的扩展能力，能够支持第三方应用、插件、工具等扩展模块的接入,增强平台的功能和应用场景。</p>
        <div class="img center">
          <img class="img-b" src="../../assets/livefour/img_platform1.png">
        </div>
      </div>
    </div>
    <div id="u647300" anchor-id="" class="layout_row layrow col_order_pattern" data-id="647300" name="layout_row">
      <div class="laybox">
        <div id="u647301" class="layout_column one_column " data-class-col="pc_col_12" data-col_order_val="custom"
             data-id="647301"
             data-mb-col="1" data-mb-order="0" data-mb_custom_col="1" data-pc-col="12"
             name="layout_column">
          <div class="modules">
            <div id="u647302" anchor-id="" class="module basic_rich_text" data-animation-key="j-647302"
                 name="basic_rich_text" style="animation: 0s ease 0s 1 normal none running none;">
              <div class="basic_rich_text">
                <div class="content_detail">
                  <div id="detail_content_word_wrap" class="rich_content_wrap" data-comb-dom="">
                    <div style="position: relative;overflow: hidden;min-height: 30px;">
                      <div><p class="sy_wzy1"
                              style="font-size:64px;color:#fff;line-height:1;font-family:Arial;margin-top: -10px">
                        <strong>Advantages</strong>
                      </p>
                        <p class="sy_wzz" style="font-size:40px;color:#fff;margin-top: -36px">
                          我们的优势
                        </p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="u647303" anchor-id="" class="module basic_text_rich_type" data-animation-key="j-647303"
                 name="basic_text_rich_type" style="animation: 0s ease 0s 1 normal none running none;">
              <div class="basic_text_rich_type">
                <div class="coverPart  module_text_font_size_frame">
                  <div id="detail_content_word_wrap" class="textEdit editDiv"><span
                      style="font-size:16px;color:#FFFFFF;">
<p style="margin:0px;font-size: 22px;margin-bottom: 35px">
	提供高效的技术支持、丰富的资源共享、灵活的定制化服务以及强大的可扩展性，帮助企业在数字化转型过程<b>提升创新能力,</b>并实现可持续增长。
</p>
</span></div>
                </div>
              </div>
            </div>
            <div id="u647304" anchor-id="" class="module basic_rich_text" data-animation-key="j-647304"
                 name="basic_rich_text" style="animation: 0s ease 0s 1 normal none running none;">
              <div class="basic_rich_text">
                <div class="content_detail">
                  <div id="detail_content_word_wrap" class="rich_content_wrap" data-comb-dom="">
                    <div style="position: relative;overflow: hidden;min-height: 30px;">
                      <div>
                        <div class="ys_zbox"
                             style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;">
                          <div
                              class="ys_box"
                              style="text-align:center;width:250px;height:250px;background-color:#FFFFFF;border-radius:20px 20px 0px 0px;border-bottom:2px solid #249AB6;padding:37px;">
                            <div style="position:relative;">
                              <img
                                  class="ys_pic1"
                                  height="static"
                                  src="https://img01.71360.com/file/read/www2/M00/98/CD/wKj2K2NaOCuANOy-AAASJNjGKI4035.png"
                                  width="90"> <img
                                class="ys_pic2"
                                height="static"
                                src="https://img01.71360.com/file/read/www2/M00/98/CD/wKj2K2NaOCuADrCRAAAQLdbFQ8w707.png"
                                style="position:absolute;top:0px;left:0px;right:0px;margin:0 auto;text-align:center;"
                                width="90">
                            </div>
                            <p class="ys_tit" style="font-size:24px;color:#333333;margin-top:27px;">
                              <span style="color:#000000;">技术领先</span>
                            </p>
                            <p class="ys_tity" style="font-size:14px;color:#666;line-height:1.3;">
                              <span style="color:#000000;">Reduce transaction costs</span>
                            </p>
                            <p class="ys_con"
                               style="font-size:16px;color:#666;line-height:26px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-top:14px;">
                              <span style="color:#000000;"><span
                                  style="color:#666666;">采用最新的技术架构和解决方案，</span></span>确保平台在性能和安全性上保持行业领先
                            </p>
                          </div>
                          <div
                              class="ys_box"
                              style="text-align:center;width:250px;height:250px;background-color:#FFFFFF;border-radius:20px 20px 0px 0px;border-bottom:2px solid #249AB6;padding:37px;">
                            <div style="position:relative;">
                              <img
                                  class="ys_pic1"
                                  height="static"
                                  src="https://img01.71360.com/file/read/www2/M00/98/CD/wKj2K2NaOCuAMEZBAAAQvUQlJj8672.png"
                                  width="90"> <img
                                class="ys_pic2"
                                height="static"
                                src="https://img01.71360.com/file/read/www2/M00/99/1B/wKj2K2NaQm6AEVggAAAPSTwmMdM360.png"
                                style="position:absolute;top:0px;left:0px;right:0px;margin:0 auto;text-align:center;"
                                width="90">
                            </div>
                            <p class="ys_tit" style="font-size:24px;color:#333333;margin-top:27px;">
                              <span style="color:#000000;">资源共享</span>
                            </p>
                            <p class="ys_tity" style="font-size:14px;color:#666;line-height:1.3;">
                              <span style="color:#000000;">Service System</span>
                            </p>
                            <p class="ys_con"
                               style="font-size:16px;color:#666;line-height:26px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-top:14px;">
                              有效利用闲置设备、技术、人才等资源,提升整体竞争力
                            </p>
                          </div>
                          <div
                              class="ys_box"
                              style="text-align:center;width:250px;height:250px;background-color:#FFFFFF;border-radius:20px 20px 0px 0px;border-bottom:2px solid #249AB6;padding:37px;">
                            <div style="position:relative;">
                              <img
                                  class="ys_pic1"
                                  height="static"
                                  src="https://img01.71360.com/file/read/www2/M00/98/CD/wKj2K2NaOCuAeKiNAAAOSr9LReM983.png"
                                  width="90"> <img
                                class="ys_pic2"
                                height="static"
                                src="https://img01.71360.com/file/read/www2/M00/99/21/wKj2K2NaQx2AF4ZxAAANfP7C_4Q374.png"
                                style="position:absolute;top:0px;left:0px;right:0px;margin:0 auto;text-align:center;"
                                width="90">
                            </div>
                            <p class="ys_tit" style="font-size:24px;color:#333333;margin-top:27px;">
                              <span style="color:#000000;">灵活定制化</span>
                            </p>
                            <p class="ys_tity" style="font-size:14px;color:#666;line-height:1.3;">
                              <span style="color:#000000;">Improve payment efficiency</span>
                            </p>
                            <p class="ys_con"
                               style="font-size:16px;color:#666;line-height:26px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-top:14px;">
                              根据不同企业的需求和行业特点量身打造解决方案
                            </p>
                          </div>
                          <div
                              class="ys_box"
                              style="text-align:center;width:250px;height:250px;background-color:#FFFFFF;border-radius:20px 20px 0px 0px;border-bottom:2px solid #249AB6;padding:37px;">
                            <div style="position:relative;">
                              <img
                                  class="ys_pic1"
                                  height="static"
                                  src="https://img01.71360.com/file/read/www2/M00/98/CD/wKj2K2NaOCuARueNAAAQ10bsTxQ488.png"
                                  width="90"> <img
                                class="ys_pic2"
                                height="static"
                                src="https://img01.71360.com/file/read/www2/M00/99/21/wKj2K2NaQx2ARVbDAAAPJ2HE_oQ070.png"
                                style="position:absolute;top:0px;left:0px;right:0px;margin:0 auto;text-align:center;"
                                width="90">
                            </div>
                            <p class="ys_tit" style="font-size:24px;color:#333333;margin-top:27px;">
                              <span style="color:#000000;">可持续发展</span>
                            </p>
                            <p class="ys_tity" style="font-size:14px;color:#666;line-height:1.3;">
                              <span style="color:#000000;">Reduce financial risks</span>
                            </p>
                            <p class="ys_con"
                               style="font-size:16px;color:#666;line-height:26px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-top:14px;">
                              支持企业在快速变化的环境中灵活应对,推动长期发展
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="u647305" anchor-id="" class="module basic_plugin_code" data-animation-key="j-647305"
                 data-wait-animation="" name="basic_plugin_code">
              <div class="basic_plugin_code"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveFour",
  data() {
    return {
      mainData1: [
        {
          img: require("@/assets/livefour/p1.png"),
          title: '资源共享与整合',
          text: '通过合作共享平台，各方可以高效整合和共享各种资源，包括设备、数据等'
        }, {
          img: require("@/assets/livefour/p2.png"),
          title: '信息透明与互通',
          text: '平台促进信息的透明与互通，各参与方可以实时共享市场动态和合作机会'
        }, {
          img: require("@/assets/livefour/p3.png"),
          title: '协同创新与研发',
          text: '合作共享平台致力于推动跨企业、跨领域的协同创新与联合研发，促进企业间的深度合作'
        }, {
          img: require("@/assets/livefour/p4.png"),
          title: ' 共同成长与发展',
          text: '共享培训资源，提升技能水平，推动共同成长,为实现产业升级提供坚实支持'
        },
      ],
      colorId: 1,
      mainData2: [
        {
          id: 1,
          title1: '设备资源共享',
          title2: ' 技术资源共享',
          title3: '人力资源共享',
          text1: '企业可以通过平台共享闲置设备，避免高昂的设备投资。这些设备包括生产设备、办公设备等,通过共享，不仅节省了资源浪费，还能提高设备的使用效率',
          text2: '合作共享平台允许企业之间共享技术成果，如专利、技术文档、开发工具等。技术共享能加速创新，减少重复研发，',
          text3: '无论是临时项目需求还是长期合作，企业能获得所需的专业人才和技术支持，从而降低人力资源的配置成本，提升工作效率。',
        },
        {
          id: 2,
          title1: '市场动态共享',
          title2: ' 需求信息',
          title3: '供应链信息',
          text1: '平台为企业提供实时的市场数据和行业趋势，让企业及时了解市场变化企业能够做出更精准的决策，提升竞争力。',
          text2: '平台汇集各方企业的需求信息，帮助企业找到潜在合作伙伴和客户。企业通过平台发布自己的需求',
          text3: '生产商可以通过平台实时了解原料库存、物流运输情况等，有助于优化库存管理、降低供应链成本，提高运营效率',
        }, {
          id: 3,
          title1: '跨行业创新',
          title2: ' 联合研发平台',
          title3: '技术知识共享',
          text1: '企业可以通过平台进行跨行业的技术交流和项目合作，共同开发新产品或新服务，突破传统行业的局限',
          text2: '平台为合作伙伴提供了联合研发的机会，企业可以通过平台合作开发新技术、设计新产品。通过共享研发成果、技术交流，能够加快产品研发周期，降低研发成本',
          text3: '平台上参与方可以共享技术经验与行业洞察，帮助各方提升创新能力。通过技术文档、线上研讨会等形式，参与企业能够快速获取前沿技术动态',
        }, {
          id: 4,
          title1: '品牌联合推广',
          title2: ' 产品联合促销',
          title3: ' 渠道资源共享',
          text1: '平台支持多个企业进行联合品牌推广。参与企业可以通过共享平台的客户资源，共同推出营销活动或跨品牌的联合广告',
          text2: '企业可以在平台上进行联合促销，推出捆绑销售、折扣活动等。通过平台进行联合促销，可以吸引更多客户，还能通过共同的营销资源',
          text3: '企业可以利用平台拓展新的销售渠道，或者通过平台共享经销商、代理商等渠道资源，实现渠道互通，拓宽市场覆盖面。',
        }, {
          id: 5,
          title1: '行业案例分享',
          title2: ' 专业培训资源',
          title3: ' 技术文档共享',
          text1: '平台为企业提供行业内成功案例的共享，参与企业可以从中吸取经验和教训。通过对案例的分析，企业能够总结出最佳实践',
          text2: '平台提供专业的培训资源，包括技术培训、管理课程等，帮助企业提升员工技能和专业素养。企业可以通过平台提供的学习资料和在线课程，迅速提升团队的整体能力',
          text3: '可以共享技术文档、操作手册、开发工具等资源。企业能够通过平台迅速获得技术支持和解决方案，降低研发成本，提升技术团队的工作效率。',
        }, {
          id: 6,
          title1: '市场趋势分析',
          title2: ' 客户需求分析',
          title3: '运营数据分析',
          text1: '通过大数据分析，帮助企业了解市场趋势、消费者行为以及行业发展方向。企业可以借此制定更加精确的市场策略，预测未来的市场需求。',
          text2: '企业可以获得客户需求的深度洞察。企业能够从客户的购买行为、反馈数据等多维度分析，优化产品和服务，提升客户满意度。',
          text3: '帮助企业实时监控运营状态，分析生产效率、库存管理等关键数据，从而优化内部管理，提高整体运营效率。',
        },
      ],
      selectData: {
        id: 1,
        title1: '设备资源共享',
        title2: ' 技术资源共享',
        title3: '人力资源共享',
        text1: '企业可以通过平台共享闲置设备，避免高昂的设备投资。这些设备包括生产设备、办公设备等,通过共享，不仅节省了资源浪费，还能提高设备的使用效率',
        text2: '合作共享平台允许企业之间共享技术成果，如专利、技术文档、开发工具等。技术共享能加速创新，减少重复研发，',
        text3: '无论是临时项目需求还是长期合作，企业能获得所需的专业人才和技术支持，从而降低人力资源的配置成本，提升工作效率。',
      },
      mainData3: [
        {
          id: 1,
          name: '开放性',
          list: [
            "开放平台鼓励外部开发者接入平台，利用平台提供的接口和服务进行开发创新。"
          ]
        },
        {
          id: 2,
          name: '创新驱动',
          list: [
            "构建自己的应用或服务",
            "通过赋能开发者和合作伙伴，推动更多创新的诞生。"
          ]
        },
        {
          id: 3,
          name: 'API和SDK支持',
          list: [
            "提供丰富的API和SDK",
            "帮助开发者快速集成平台的功能，如支付",
            "通讯录可见权限设置和高管模式"
          ]
        },
        {
          id: 4,
          name: '降低开发成本',
          list: [
            "减少开发成本和时间",
            "提供的开发工具、API和SDK使得开发者可以不必从零开始"
          ]
        },
        {
          id: 5,
          name: '提高市场竞争力',
          list: [
            "能够让平台本身和其合作伙伴共同受益。通过拓展更多的外部应用和服务，平台的市场竞争力得以提升"
          ]
        },
        {
          id: 6,
          name: '数据与服务共享',
          list: [
            "用户数据：如用户画像、行为数据等",
            "第三方应用的集成：如支付、社交、地图等外部服务",
            "平台的核心服务：如云计算、分析等"
          ]
        },
      ],
      mainData4: [
        {
          name: '技术中台',
          id: 1
        },
        {
          name: '业务中台',
          id: 2
        },
        {
          name: '数据中台',
          id: 3
        },
        {
          name: '连接中台(连接器)',
          id: 4
        },
      ],
      framId: 1

    }
  },
  methods: {
    changeColor(id) {
      this.colorId = id
      this.selectData = this.mainData2.find(item => item.id === id);
      console.log(this.selectData);  // 打印选中的数据
    },
    changeFramId(id) {
      this.framId = id
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

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
}

.ability {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .abilityBoxs {
    display: flex;
    justify-content: center;
    align-items: center;

    .abilityBox {
      position: relative;
      overflow: hidden;

      .abilityBox_img:hover {
        transform: scale(1.1);
      }

      .abilityBox_img {
        transition: all 1s ease;
      }

      .abilityBox_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;

        .fs-1 {
          font-size: 30px;
          font-weight: bold;
          color: white;
        }

        .fs-text {
          font-size: 19px;
          color: white;
        }
      }
    }
  }
}

.framework {
  max-width: 1320px;

  .pt-lyd-120 {
    padding-top: 90px !important;

    .fs-1 {
      font-size: 19px;
      color: #12294f;
      text-align: center !important;
      font-weight: 700 !important;
    }

    .fs-3 {
      color: #65676b !important;
      font-size: 18px;
      text-align: center;
      margin: 0 0 30px !important;
      margin-top: 10px !important;

    }
  }

  .framework_contents {
    .framework_content {
      p {
        width: 80%;
        text-align: center;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }

  .framework_btns {
    display: flex;
    justify-content: center;

    .active[data-v-63f6c790] {
      background: #005bab;
      color: #fff !important;
    }

    .framework_btn[data-v-63f6c790] {
      margin-right: 40px;
      border: 1px solid #e1e4eb;
      border-radius: 10px;
      padding: 5px 20px;
      color: #131d35;
      cursor: pointer;
    }
  }
}

.values {
  .pt-lyd-120 {
    padding-top: 90px !important;

    .fs-1 {
      font-size: 19px;
      color: #12294f;
      text-align: center !important;
      font-weight: 700 !important;
    }

    .fs-3 {
      color: #65676b !important;
      font-size: 18px;
      text-align: center;
      margin: 0 0 30px !important;
      margin-top: 10px !important;
    }
  }

  .container {
    max-width: 1320px;

  }

  .valuesBoxs {
    display: flex;
    background: url('@/assets/livefour/bg4.png');
    height: 500px;

    .valuesBoxsbg_img {
      margin-left: -6px;
      overflow: hidden;

      .valuesBoxs_img {
        transition: all 1s ease;
      }

      .valuesBoxs_img:hover {
        transform: scale(1.1);
      }
    }

    .value[data-v-63f6c790] {
      width: 600px;
      cursor: pointer;

      .valueBoxes[data-v-63f6c790] {
        height: 100%;
        position: relative;

        .swiper-container {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
          height: 100%;

          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-transition-property: -webkit-transform;
            transition-property: -webkit-transform;
            -o-transition-property: transform;
            transition-property: transform;
            transition-property: transform, -webkit-transform;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;

            .swiper-slide {
              -webkit-flex-shrink: 0;
              -ms-flex-negative: 0;
              flex-shrink: 0;
              width: 100%;
              height: 100%;
              position: relative;
              -webkit-transition-property: -webkit-transform;
              transition-property: -webkit-transform;
              -o-transition-property: transform;
              transition-property: transform;
              transition-property: transform, -webkit-transform;

              .valueBox[data-v-63f6c790] {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 20px;

                .valueBoxContent[data-v-63f6c790] {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;

                  .text-white {
                    color: white;
                    font-weight: bold;
                    font-size: 25px;
                    width: 90%;
                    text-align: center;
                  }

                  p {
                    font-size: 18px !important;
                    font-weight: normal !important;
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

.advantage[data-v-63f6c790] {
  width: 100%;
  margin-top: 50px;
  height: 700px;
  position: relative;
  background-image: url('@/assets/livefour/bg5.jpg');

  .advatageImg[data-v-63f6c790] {
    position: absolute;
    top: 0;
    left: 0;

    img[data-v-63f6c790] {
      opacity: 0;
    }
  }

  .advantageBoxs[data-v-63f6c790] {
    height: 100%;
    //padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    max-width: 1320px;

    .fs-1 {
      font-size: 27px;
      text-align: center !important;
      color: white;
    }

    .advantageBox[data-v-63f6c790] {
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      bottom: 230px;

      img[data-v-63f6c790] {
        width: 9%;
      }

      .text-light {
        color: white;
        font-size: 22px;
        font-weight: bold;
      }

      .advantageBox_content {
        color: white;
        font-size: 18px;
      }
    }

    .advantage_btnBox[data-v-63f6c790] {
      height: 250px;
      display: flex;
      justify-content: space-between;
      width: 600px;
      align-items: center;

      .advantage_btn[data-v-63f6c790] {
        width: 190px;
        position: relative;
        background: url("@/assets/livefour/i4.png");
        background-size: 190px 100px;
        height: 100px;
        display: flex;
        align-items: center;
        cursor: pointer;

        .advantage_btn_content[data-v-63f6c790] {
          width: 190px;
          padding: 0 13px;
          text-align: center;
          color: #f8f9fa;
        }
      }

      .advantage_btn_active[data-v-63f6c790] {
        background: url("@/assets/livefour/i5.png");
        background-color: #000;
        background-size: 19rem 10rem;
      }
    }
  }
}


.container {
  max-width: 1320px;
  margin: auto;

  .pt-lyd-120 {
    padding-top: 90px !important;

    .fs-1 {
      color: #12294f;
      font-size: 30px;
      text-align: center;
      font-weight: bold;
    }

    .fs-3 {
      color: #12294f;
      font-size: 17px;
    }
  }
}

.section {
  padding-top: 30px;
  padding-bottom: 50px;

  .container {
    width: 1200px;
    margin: auto;

    .section-title-l {
      width: 450px;
    }

    .section-title {
      background-image: url('../../assets/livefour/bg_title.png?v=3');
      background-size: 100% 100%;
      margin: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      margin-bottom: 46px;
      font-weight: 800;
    }

    .cols {
      margin: 0 auto;
      width: 100%;
      height: 300px;

      .col {
        width: 25%;
        padding: 20px;
        box-sizing: border-box;
        float: left;
        list-style: none;

        .card {
          padding: 20px;
          box-sizing: border-box;
          background-color: #fff;
          box-shadow: 0px 0px 20px #d3e3ff;
          border-radius: 8px;
          width: 100%;
          text-align: center;
          position: relative;
          transition: all .3s ease-in-out;
          display: block;

          img {
            width: 120px;
            height: 100%;
          }

          h3 {
            font-size: 18px;
            margin-bottom: 18px;
          }

          p {
            font-size: 14px;
            display: block;
            line-height: 25px;
            padding: 5px 0px;
            margin: 0px;
          }
        }
      }
    }

    //核心功能

  }
}

.section2 {
  margin: auto;
  padding-top: 30px;
  padding-bottom: 50px;
  //width: 1200px;

  .section-title-l {
    width: 450px;
  }

  .section-title {
    background-image: url('../../assets/livefour/bg_title.png?v=3');
    background-size: 100% 100%;
    margin: auto;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 32px;
    margin-bottom: 46px;
    font-weight: 800;
    width: 230px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;

    .swiper-tab {
      margin: auto;
      text-align: center;
      background: #fff;

      li {
        display: inline-block;
        cursor: pointer;
        padding: 1rem;
        color: #666;
        position: relative;
        padding-left: 60px;
        text-align: left;
        margin: 0px 20px;
        font-size: 1.2rem;
        list-style: none;

        .icon {
          color: #CEDEF2;
          display: inline-block;
          font-size: 40px;
          position: absolute;
          left: 0px;
          top: 20px;
          width: 35px;
        }

        .iconfont {
          font-family: "iconfont" !important;
          font-style: normal;
        }
      }
    }

    .swiper-tab-1 li {
      line-height: 40px;
      list-style: none;
    }

    .swiper-slide {
      flex-shrink: 0;
      height: 100%;
      position: relative;
      transition-property: transform;

      .container {
        width: 1200px;
        margin: auto;

        .jumbo {
          margin: 40px 0px;

          .jumbo-text {
            text-align: left;
            padding-left: 30px;

            .list-text {
              margin-left: 25px;

              li {
                box-shadow: 0px 0px 20px #d3e3ff;
                border-radius: 8px;
                border-left: 4px solid #0067ed;
                background-color: #fff;
                padding: 20px;
                margin-bottom: 10px;
                list-style: none;

                h3 {
                  margin: 0px;
                  margin-bottom: 10px;
                  padding: 0px;
                }

                p {
                  margin: 0px;
                  padding: 0px;
                }
              }
            }
          }

          .jumbo-img img {
            max-width: 550px;
          }

          .jumbo-text, .jumbo-img {
            width: 50%;
            display: table-cell;
            vertical-align: middle;
            height: 300px;
          }
        }
      }
    }
  }
}

.section3 {
  padding-top: 30px;
  padding-bottom: 50px;

  .container {
    width: 1200px;
    margin: auto;

    .section-title-l {
      width: 450px;
    }

    .section-title {
      background-image: url('../../assets/livefour/bg_title.png?v=3');
      background-size: 100% 100%;
      margin: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      margin-bottom: 46px;
      font-weight: 800;
      width: 460px;
    }

    .cols {
      margin: 0 auto;
      width: 100%;
      height: 450px;

      .col {
        width: 33%;
        padding: 20px;
        box-sizing: border-box;
        float: left;
        list-style: none;

        .card {
          width: 100%;
          text-align: center;
          position: relative;
          transition: all .3s ease-in-out;
          display: block;
          box-shadow: 0px 0px 20px #d3e3ff;
          border-radius: 8px;
          margin: 0px 20px;
          background-color: #f2f6fd;

          .card-hd {
            background-color: #0067ed;
            color: #fff;
            padding: 10px;
            border-radius: 8px 8px 0px 0px;
          }

          .card-bd {
            height: 130px !important;
            padding: 10px;
            text-align: left;
            display: table-cell;
            vertical-align: middle;
            line-height: 1.5rem;
          }

          .bg-box1 {
            background-image: url('../../assets/livefour/bg-box1.png');
            background-size: 100%;
          }

          .bg-box2 {
            background-image: url('../../assets/livefour/bg-box2.png');
            background-size: 100%;
          }
        }
      }
    }
  }
}

.section4 {
  padding-top: 30px;
  padding-bottom: 50px;

  .container {
    width: 1200px;
    margin: auto;

    .section-title-l {
      width: 450px;
    }

    .section-title {
      background-image: url('../../assets/livefour/bg_title.png');
      background-size: 100% 100%;
      margin: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      margin-bottom: 46px;
      font-weight: 800;
    }

    .jumbo {
      box-shadow: 0px 0px 20px #d3e3ff;
      margin-bottom: 20px;

      .jumbo-text {
        width: 45%;
        height: 300px;
        padding: 0px 50px;
        text-align: left;
        display: table-cell;
        vertical-align: middle;

        h3 {
          color: rgba(0, 65, 176, 1);
        }
      }

      .jumbo-img {
        width: 55%;
        height: 300px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;

        img {
          width: 100%;
          height: 100%;
          max-width: 550px;
        }
      }
    }
  }
}

.section6 {
  padding-top: 30px;
  padding-bottom: 100px;

  .container {
    width: 1200px;
    margin: auto;

    .section-title {
      background-image: url('../../assets/livefour/bg_title.png');
      background-size: 100% 100%;
      display: inline_block;
      margin: auto;
      width: 250px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      margin-bottom: 46px;
      font-weight: 800;
    }

    .center {
      text-align: center;
      padding: 10px;

      .img-b {
        width: 100%;
      }
    }
  }
}

#u647300 {
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  background-image: url('../../assets/livefour/bg3.jpg');
  box-shadow: 0 0 0 #fff;
  background-color: rgba(255, 255, 255, 1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.layrow {
  width: 100%;
  position: relative;

  .laybox {
    max-width: 1380px;
    padding-left: 0.5236%;
    padding-right: 0.5236%;
    padding-top: 5.0262%;
    padding-bottom: 5.7592%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    #u647301 {
      background-color: rgba(255, 255, 255, 0);
      border-color: rgba(0, 0, 0, 1);
      border-style: solid;
      border-left-width: 0px;
      border-right-width: 0px;
      border-top-width: 0px;
      border-bottom-width: 0px;
      background-image: none;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      box-shadow: 0 0 0 #fff;
      padding-left: 0%;
      padding-right: 0%;
      padding-top: 0%;
      padding-bottom: 0%;
      margin-left: 0%;
      margin-right: 0%;
      margin-top: 0%;
      margin-bottom: 0%;
      width: 100%;
    }

    .one_column .modules {
      width: 100%;
      height: 100%;
      float: left;

      #u647302 {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
      }

      .module {
        position: relative;

        .basic_rich_text .content_detail {
          overflow: visible !important;
          padding: 0;
          min-height: 30px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
