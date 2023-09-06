/*
 * @Author: Lin
 * @Date: 2019-11-13 22:42:18
 * @LastEditTime: 2019-12-07 11:34:49
 * @Description: 修改原简历内容
 * @FilePath: \resume\config\render\section.js
 */
/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` }
}

/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
  /**
   * 每一个小模块，都有以下几个配置项：
   * title： 顶部名称栏
   * content: 里面的内容，需要注意的是每一条内容都会换行
   */
  {
    title: '实习经历',
    content: [
      p(),
      p(
        '## 快手 · 海外 ',
        '(2023.7-2023.9)'
      ),
      p(),
      p('实习期间主要负责快手海外版消费相关业务开发'),
      p(),
      p('- 参与多次需求开发，经历从技术评审到上线的全流程。'),
      p(),
      p('- 熟悉快手的 MVPs 架构'),
      p(),
      p('- 了解快手海外版的页面整体设计'),
    ]
  },
  {
    title: '学校经历',
    content: [
      /**
       * 文章正文部分
       * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
       */
      p(),
      p(
        `## 重庆邮电大学 · 红岩网校工作站 `,
        `(2020.9 - 至今)[Link](https://redrock.team/#/)`
      ),
      p(),
      p(
        `隶属校团委的学生互联网组织，成立于2000年，共有成员90余人，包含产品、视觉、运维、移动、前端、后端部门，拥有PRD-UI-开发-运营-迭代的*完整开发流程*。`
      ),
      p(),
      p(`*红岩网校工作站 · Android学员<small>（2020.9 - 2021.8）</small>* `),
      p(),
      p(`*红岩网校工作站 · Android干事<small>（2021.9 - 2022.8）</small>* `),
      p(),
      p('- 参与了掌上重邮 store 模块的开发',),
      p(),
      p('- 负责了掌上重邮核心业务 course 模块重构工作',),
      p(),
      p(`*红岩网校工作站 · 移动副站<small>（2022.8 - 至今）</small>* `),
      p(),
      p('- 负责移动开发部门的整体规划和开发进度管理'),
      p(),
      p(`- 负责了掌上重邮基层模块迁移和重构工作`),
    ],
  },
  {
    title: '个人能力',
    content: [
      p(),
      p(`- *熟练掌握基本技能:* 熟练掌握 Java、**Kotlin**、Git 等基础。熟悉使用 **RecyclerView**、Activity、Fragment 等常见组件。`),
      p(),
      p('- *熟悉消息机制:* 了解 **Handler**、MessageQueue 和 Looper 等核心类，理解消息机制原理和流程。'),
      p(),
      p('- *熟悉事件分发:* 深入了解**触摸事件分发**流程，项目中多次处理滑动冲突和复杂事件分发流程。'),
      p(),
      p('- *了解绘制流程:* 熟悉 **onMeasure**、**onLayout** 和 onDraw，熟练使用 **ValueAnimator** 等 API 实现动画效果。'),
      p(),
      p('- *掌握 Jetpack 使用:* 熟悉Jetpack框架中的各个组件，例如 **LiveData**、**ViewModel** 等。'),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(),
      p(`## 掌上重邮 APP`, '(2021.8 - 至今)[Link](https://github.com/RedrockMobile/CyxbsMobile_Android)'),
      p(),
      p(`重庆邮电大学首款整合校园与生活的 App。`),
      p('该项目自 15 年维护至今，日活最高可达上万次，代码总行数超过百万行，采用 **Kotlin 语言** 编写，应用 **MVVM** 架构模式。'),
      p('在此期间曾负责了 store 模块、course 模块的开发，以及基层模块的迁移工作。'),
      p(),
      p('*项目难点:*'),
      p(
        '- 项目中遇到过 **BottomSheetBehavior** 嵌套横向 VP2 和竖直 RV 时的嵌套滑动问题，' +
        '分析源码后通过中转嵌套滑动解决。   ' +
        '[Source>](https://github.com/RedrockMobile/CyxbsMobile_Android/blob/develop/module_course/lib_course/src/main/java/com/mredrock/cyxbs/lib/course/widget/VpBottomSheetNestedView.kt)'
      ),
      p(),
      p(
        '- 实现过嵌套 RV 的上下抽屉布局，考虑了 AppBarLayout、**CoordainatorLayout**，' +
        '最后采取**自定义嵌套滑动**实现。   ' +
        '[Source>](https://github.com/RedrockMobile/CyxbsMobile_Android/blob/develop/module_store/src/main/java/com/mredrock/cyxbs/store/utils/widget/SlideUpLayout.kt)',
      ),
      p(),
      p(
        '- 使用 NestedScrollView 中发现与 RV 嵌套导致懒加载失效，' +
        '通过源码分析后重写 *measureChildWithMargins()* 解决。' +
        '[Link>](https://github.com/985892345/CustomViewWithAnimStudy#2nestedscrollview-%E5%B5%8C%E5%A5%97-rv-%E5%A4%8D%E7%94%A8%E5%A4%B1%E6%95%88)'
      ),
      p(),
      p(),
      p(),
      p('## 网格布局 NetLayout', '[Link](https://github.com/985892345/NetLayout)'),
      p(),
      p('一个继承于 ViewGroup，支持子 View 重叠和长宽不统一的网格布局。用于解耦掌上重邮中的课表布局。'),
      p(),
      p(),
      p('项目难点：'),
      p('- 继承于 ViewGroup，参考 FrameLayout 的源码进行设计，重写了 onLayout()、onMeasure() 等方法。'),
      p(),
      p('- 参考 RV 中 OnItemTouchListener 和 ItemDecoration 设计，提供触摸事件分离和绘制回调的扩展接口。'),
      p(),
      p(
        '- 实现多指触摸事件的解耦，设计了专门用于分离多指事件的帮助类，采用组合的形式进行添加和处理。   ' +
        '[Source>](https://github.com/985892345/NetLayout/tree/master/netlayout/src/main/java/com/ndhzs/netlayout/touch/multiple)'
      ),
      p(),
      p(),
      p(),
      p('## 多人开发项目 WanAndroid', '[Link](https://github.com/VegetableChicken-Group/WanAndroid_Multi)'),
      p(),
      p('使用 **Composing builds** 构建的多模块开发项目，并合理抽离 Base 层减少模板代码。在大二期间搭建，用于大一学员练习。'),
      p(),
      p(),
      p(),
      p('## KMM 多模块服务提供框架 KtProvider', '[Link](https://github.com/985892345/KtProvider)'),
      p(),
      p('支持 KMM 的跨模块服务提供轻量级框架。'),
    ],
  },
]
