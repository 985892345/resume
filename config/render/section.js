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
    title: '实践经历',
    content: [
      /**
       * 文章正文部分
       * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
       */

      p(
        `## 重庆邮电大学 · 红岩网校工作站 `,
        `(2020.9 - 至今)[Link](https://redrock.team/#/)`
      ),
      p(
        `隶属校团委的学生互联网组织，成立于2000年，共有成员90余人，其中包含产品、视觉、运维、移动端、前端、后端部门，拥有 PRD-UI-移动端/前后端开发-运营-迭代 的*完整开发流程*。`
      ),
      p(`*红岩网校工作站 · Android学员<small>（2020.9 - 2021.8）</small>* `),
      p(`*红岩网校工作站 · Android干事<small>（2021.9 - 2022.8）</small>* `),
      p(
        '- 负责掌上重邮 Android 端的代码维护',
        '[Source](https://github.com/RedrockMobile/CyxbsMobile_Android)'
      ),
      p(
        '- 参与了掌上重邮 store 模块的开发',
        '[Source](https://github.com/RedrockMobile/CyxbsMobile_Android/tree/develop/module_store)'
      ),
      p(
        '- 负责了掌上重邮核心业务 course 模块迭代工作',
        '[Source](https://github.com/RedrockMobile/CyxbsMobile_Android/tree/develop/module_course)'
      ),
      p(`*红岩网校工作站 · 移动副站<small>（2022.8 - 至今）</small>* `),
      p('- 负责移动开发部门的整体规划和开发进度的管理'),
      p(`- 负责了掌上重邮基层模块迁移以及重构工作`),
      p(`- 多次与学校团委和校级组织进行对接`),
    ],
  },
  {
    title: '个人能力',
    content: [
      p(`- *熟练掌握基本技能:* 熟悉 Java、**Kotlin**、Git、Android Studio 使用，会基本的数据结构与算法。`),
      p('- *熟练使用常用组件:* 如 **RecyclerView**、Activity、Fragment、View 等。'),
      p('- *熟悉消息机制:* 了解消息机制中的 **Handler**、MessageQueue 和 Looper 等核心类，能够理解消息机制的基本原理和流程。'),
      p('- *熟悉事件分发:* 能够深入了解 View 层次结构和**事件分发**流程，并根据需求实现自定义的事件分发逻辑。'),
      p('- *了解绘制流程:* 熟悉的 **onMeasure**、**onLayout** 和 onDraw 三个阶段，熟悉使用 **ValueAnimator** 等 API 实现属性动画效果。'),
      p('- *掌握 Jetpack 使用:* 熟悉Jetpack框架中的各个组件，例如 **LiveData**、**ViewModel**、DataBinding 等，能够根据具体的业务需求选择合适的组件。'),
    ],
  },
  {
    title: '自我评价',
    content: [
      p(
        '- *追求高质量代码:* 编写代码常常坚持高标准，力求写出结构清晰、易于维护、可扩展性强的代码。注重细节和整体思路，喜欢追求代码的简洁和可读性。'
      ),
      p(
        '- *自我驱动:* 有强烈的好奇心和求知欲，具有较强的自我驱动能力，能够主动发现问题并积极地探索解决方案。'
      ),
      p(
        '- *善于团队协作:* 担任移动副站，具有良好的沟通能力和团队协作能力，能与其他成员进行高效地沟通和协作。'
      ),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(`## 掌上重邮APP`, '(2021.8 - 至今)[Link](https://github.com/RedrockMobile/CyxbsMobile_Android)'),
      p(`重庆邮电大学首款整合校园与生活的 App。`),
      p('该项目自 15 年维护至今，代码总行数超过百万行，采用 **Kotlin 语言** 编写，应用了 **MVVM** 架构模式，同时也使用了**JetPack组件库**和**ARouter多模块**技术。'),
      p('在此期间曾负责了 store 模块、course 模块的开发，以及基层模块的迁移工作。'),
      p(),
      p('项目难点:'),
      p(
        '- 在 course 模块开发时，遇到 *BottomSheetBehavior* 嵌套横向 VP2 和竖直 RV 时，导致竖直 RV 无法与 Behavior 进行嵌套滑动的问题。' +
        '翻阅源码得知 BottomSheetBehavior 只能跟第一个布局进行嵌套滑动，最后在 VP2 外包一层布局用于中转嵌套滑动解决问题。   ' +
        '[Source>](https://github.com/RedrockMobile/CyxbsMobile_Android/blob/develop/module_course/lib_course/src/main/java/com/mredrock/cyxbs/lib/course/widget/VpBottomSheetNestedView.kt)'
      ),
      p(
        '- 在 store 模块开发时遇到需要嵌套 RV 并上下滑动的触摸事件处理，考虑了 AppBarLayout、**CoordainatorLayout** 等多种方案，' +
        '最后使用**自定义 ViewGroup**采取**嵌套滑动**方案实现产品需求。   ' +
        '[Source>](https://github.com/RedrockMobile/CyxbsMobile_Android/blob/develop/module_store/src/main/java/com/mredrock/cyxbs/store/utils/widget/SlideUpLayout.kt)',
      ),
      p(
        '- 在使用 NestedScrollView 中发现与 RV 嵌套会导致 RV 懒加载失效，' +
        '通过阅读源码发现 NSV 提供给子 View 的测量模式为 *UNSPECIFIED* 并且高度也为 0，最后通过重写 NSV 的 *measureChildWithMargins()* 解决问题。' +
        '[Link>](https://github.com/985892345/CustomViewWithAnimStudy#2nestedscrollview-%E5%B5%8C%E5%A5%97-rv-%E5%A4%8D%E7%94%A8%E5%A4%B1%E6%95%88)'
      ),
      p('## 网状布局NetLayout', '[Link](https://github.com/985892345/NetLayout)'),
      p('一个支持重叠、长度和宽度的不统一的网状布局'),
      p('为了更好的解耦实现掌上重邮中课表的功能，本项目是支撑整个课表的底层控件，采取纯自定义 View 开发。'),
      p(),
      p('项目难点：'),
      p(
        '- 在掌上重邮 course 模块开发中，为了实现多指触摸事件的分离和解耦，设计了专门用于分离多指事件的帮助类，采用组合的形式进行添加和处理。   ' +
        '[Source>](https://github.com/985892345/NetLayout/tree/master/netlayout/src/main/java/com/ndhzs/netlayout/touch/multiple)'
      ),
      p('- 为了支持行和列高度和宽度动态变化，使用了 **SparseArray** 用于保存行和列的比重，然后在 **onMeasure** 中重新计算行和列的宽高，最后在 **onLayout** 中进行布局。'),
      p('- 为了更好的进行扩展，参考了 RV 中 OnItemTouchListener、 ItemDecoration 的设计，提供了触摸事件分离的接口、绘制回调接口以及其他扩展接口。'),
      p(),
      p('## 多人开发项目WanAndroid', '[Link](https://github.com/VegetableChicken-Group/WanAndroid_Multi)'),
      p('大二期间搭建的用于大一学员练习的多人开发项目。'),
      p('其中使用了 **Composing builds** 构建多模块开发，并合理抽离 Base 层减少模板代码。')
    ],
  },
]
