export default {
  /**
   * 屏蔽简历的文字显示
   * 如果显示简历，直接设置成 false 即可
   * 此处是方便直接隐藏简历
   * 当内容为字符串时，将自动屏蔽简历，显示屏蔽后的文字
   */
  blockMsg: false,
  /**
   * HTML页面的title
   * @param {[String]}
   */
  docName: '简历 | 郭祥瑞',
  /**
   * 此处是针对SEO优化
   * 会在搜索引擎的摘要界面显示。
   * 默认值为: 张xx(小张)的个人简历 - 搬砖工程师
   * 即默认会展示你的姓名，昵称，职位字段
   */
  description: '郭祥瑞（985892345）的个人简历 - Android开发工程师',
  /**
   * 生成PDF的默认文件名
   * 若不指定，默认为HTML页面的title去除空格后的结果
   */
  printName: 'Android开发工程师-郭祥瑞-重庆邮电大学',
  /**
   * 设定 Github Logo 地址
   * 若为空，则不显示
   * 此logo会在页面大小大于1440px时显示
   */
  githubLogoLocation: 'https://avatars.githubusercontent.com/u/62180145?v=4',
  /**
   * 是否展示界面最下方 “@ CoderMing” 字样
   * 如果你认为在个人的页面上显示此条消息不合适，可以通过此方法快速消除
   * 什么？你 star 没给也好意思注释这一条？？？ :(
   */
  showAboutInfo: false
}
