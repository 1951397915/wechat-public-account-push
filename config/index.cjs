/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa012bacb26292da4',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a1ada8d9e8ed5974f380604089385ca7',

  PROVINCE: '江西',
  CITY: '赣州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '娜娜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omC7m5qTm4DPha6Dyp6HiX1X_HQY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'LF9M4llSQILpCrIWhpguMlrEpRvrAtOaffeQaBJfwVs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娜娜', year: '2002', date: '07-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
        {
          type: '节日', name: '我们相识纪念日', year: '2020', date: '09-15',
        },
        {
          type: '节日', name: '考试', year: '2023', date: '04-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-13' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'SBqu5hC-ZdZAYLiWRzT1mx7qwUEqJXBO01JoO_LXYdg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omC7m5qdottXp0VR8vWneeoWJR0g',
    }
  ],

}

module.exports = USER_CONFIG

