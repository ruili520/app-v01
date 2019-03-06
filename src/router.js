import home from "./components/home";

export default [
  {
    path: "/",
    component: home,
    children: [
      {
        path: "/",
        redirect: "/loan"
      },
      {
        path: "/login",
        meta: {
          title: "登录"
        },
        component: resolve => require(["./page/user/index"], resolve)
      },
      {
        path: "/reg",
        meta: {
          title: "注册"
        },
        component: resolve => require(["./page/user/index"], resolve)
      },
      {
        path: "/forget",
        meta: {
          title: "忘记密码"
        },
        component: resolve => require(["./page/user/index"], resolve)
      },

      {
        path: "/agreement",
        meta: {
          title: "委托服务确认书"
        },
        component: resolve => require(["./page/user/index"], resolve)
      },

      {
        path: "user",
        component: home,
        children: [
          {
            path: "/",
            meta: {
              title: "个人中心"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "articleList",
            meta: {
              title: "我的文章"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "collectList",
            meta: {
              title: "我的收藏"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "borrowList",
            component: resolve => require(["./page/user/index"], resolve),
            children: [
              {
                path: "/",
                meta: {
                  title: "全部借款"
                },
                component: resolve => require(["./page/user/index"], resolve)
              },
              {
                path: "apply",
                meta: {
                  title: "申请中借款"
                },
                component: resolve => require(["./page/user/index"], resolve)
              },
              {
                path: "repay",
                meta: {
                  title: "待归还借款"
                },
                component: resolve => require(["./page/user/index"], resolve)
              },
              {
                path: "over",
                meta: {
                  title: "已结束借款"
                },
                component: resolve => require(["./page/user/index"], resolve)
              }
            ]
          },
          {
            path: "borrowDetail/:id",
            meta: {
              title: "借款详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "borrowDetail/:id/more",
            meta: {
              title: "更多详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "borrowReason/:id",
            meta: {
              title: "查看不过理由"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "dealList",
            meta: {
              title: "查看合同列表"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "dealDetail",
            meta: {
              title: "借款协议"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "repayList",
            meta: {
              title: "我的还款"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "repayGo/:id/:total",
            meta: {
              title: "操作还款"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "repayTips",
            meta: {
              title: "确认信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "repayRecord",
            meta: {
              title: "还款记录"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "rewardList",
            component: resolve => require(["./page/user/index"], resolve),
            children: [
              {
                path: "/",
                meta: {
                  title: "被打赏"
                },
                component: resolve => require(["./page/user/index"], resolve)
              },
              {
                path: "byMe",
                meta: {
                  title: "打赏"
                },
                component: resolve => require(["./page/user/index"], resolve)
              }
            ]
          },
          {
            path: "invite",
            meta: {
              title: "邀请"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "helpList",
            meta: {
              title: "帮助中心"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "helpDetail/:index",
            meta: {
              title: "疑问解答"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "feedback",
            meta: {
              title: "意见反馈"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "setting",
            meta: {
              title: "设置"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "aboutUs",
            meta: {
              title: "关于我们"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "updateUser",
            meta: {
              title: "编辑资料"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "updatePenName",
            meta: {
              title: "修改笔名"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "personSign",
            meta: {
              title: "个性签名"
            },
            component: resolve => require(["./page/user/index"], resolve)
          }
        ]
      },

      {
        path: "loan",
        component: home,
        children: [
          {
            path: "/",
            meta: {
              title: "借款中心"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "articleDetail",
            meta: {
              title: "文章详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "samll",
            meta: {
              title: "小额借款"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "large",
            meta: {
              title: "福利借款"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "dataComm",
            meta: {
              title: "完善资料"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "dataMust",
            meta: {
              title: "必填资料"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "dataSelect",
            meta: {
              title: "选填资料"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "submitApply",
            meta: {
              title: "提交申请"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "loanDes",
            meta: {
              title: "借款描述"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "loanRecom",
            meta: {
              title: "推荐人手机号码"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "sureMsg",
            meta: {
              title: "确认信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "sureMore",
            meta: {
              title: "借款详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "cancelSup",
            meta: {
              title: "取消上标"
            },
            component: resolve => require(["./page/user/index"], resolve)
          }
        ]
      },

      {
        path: "credit",
        component: home,
        children: [
          {
            path: "/",
            meta: {
              title: "信用中心"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "userInfo",
            meta: {
              title: "个人信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "contacts",
            meta: {
              title: "联系人信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "scan",
            meta: {
              title: "人脸识别"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "work",
            meta: {
              title: "工作信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "bankInfo",
            meta: {
              title: "添加银行卡"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "support",
            meta: {
              title: "查看支持银行"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "bankHelp",
            meta: {
              title: "帮助"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "bankSMS",
            meta: {
              title: "验证银行卡"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "bankDetail",
            meta: {
              title: "银行卡详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "mobile",
            meta: {
              title: "手机认证"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "idCard",
            meta: {
              title: "身份认证"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "waterBank",
            meta: {
              title: "选择银行"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "waterLogin/:index",
            meta: {
              title: "银行登录"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "sbsqCity",
            meta: {
              title: "选择城市"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "sbsqLogin",
            meta: {
              title: "社保登录"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "gjjCity",
            meta: {
              title: "选择城市"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "gjjLogin",
            meta: {
              title: "公积金登录"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "zhima",
            meta: {
              title: "芝麻分"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "alipay",
            meta: {
              title: "支付宝认证"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "otherData",
            meta: {
              title: "其它资料"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "uploadPic/:param",
            meta: {
              title: "上传图片"
            },
            component: resolve => require(["./page/user/index"], resolve)
          }
        ]
      },

      {
        path: "creditReport",
        component: home,
        children: [
          {
            path: "/",
            meta: {
              title: "简版个人征信报告"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "login",
            meta: {
              title: "央行征信登录"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "get",
            meta: {
              title: "获取报告"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "sms",
            meta: {
              title: "快捷验证"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "answers",
            meta: {
              title: "身份验证"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "cover",
            meta: {
              title: "征信报告封面"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "list",
            meta: {
              title: "征信报告列表"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "detail",
            meta: {
              title: "征信报告详情"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "helps",
            meta: {
              title: "疑问解答"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "regHow",
            meta: {
              title: "如何注册账号"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "regStep1",
            meta: {
              title: "填写信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          },
          {
            path: "regStep2",
            meta: {
              title: "补充信息"
            },
            component: resolve => require(["./page/user/index"], resolve)
          }
        ]
      }
    ]
  },
  {
    path: "*",
    meta: {
      title: "页面不存在"
    },
    component: resolve => require(["./page/user/index"], resolve)
  }
];
