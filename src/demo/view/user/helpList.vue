<template>
  <div class="container">
    <topComponent title='帮助中心'></topComponent>
    <ul class="listCom list-arrow list-help">
      <li v-for='(item,index) of items' @click="$router.push('/user/helpDetail/'+index)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  //引入页面需要的数据
  // import helpDatas from '../../data/helpDatas.json';

  export default {
    data() {
      return {
        items: [
          {
            "title": "如何进行还款？",
            "detail": "<p class='pt10'><strong class='tit blue'>方式一：</strong>借款订单到期前，您只需要将资金存入绑定的银行卡即可，系统会自动划扣银行卡余额来归还借款本息。</b>。</p><p class='pt30'><strong class='tit blue'>方式二：</strong>在“个人中心”找到“还款”，选择需要还款的订单之后，可以使用已绑定的收款银行卡直接进行还款，如果想要分多次进行还款，可以在支付时修改还款的金额。如果在还款过程中有任何疑问，请致电我们的客服人员<b>400-877-0890</b>。</p><p class='pt30'><strong class='tit blue'>方式三：</strong>无法通过收款银行卡还款时，您可以通过支付宝转账的方式还款到我们的支付宝账户。转账时，请在备注栏填写“姓名+手机号码”，转账成功后，请联系我们的客服人员<b>400-877-0890</b>进行确认。</p><p><strong class='tit'>支付宝帐户：</strong>账户名：浙江草根网络科技有限公司<br>账　户：cgtz.com@cgtz.com</p><p class='pt30'><strong class='tit blue'>方式四：</strong>如果您通过方式一和方式二还款均失败时，还可以采用网银转账的方式还款到我们的对公银行账户。转账时，请在备注栏填写“姓名+手机号码”，转账成功后，请联系我们的客服人员<b>400-877-0890</b>进行确认。</p><p><strong class='tit'>对公银行账户：</strong>账户名：浙江草根网络科技有限公司<br>账　户：571907566810301<br />开户行：招行高新支行</p>"
          }, {
            "title": "利息从哪一天开始计算？还款日期怎么确定？",
            "detail": "您在草根金融借款，利息从财务操作放款的当天开始计算。还款日是按照借款的实际发放日期，顺延借款期限，借款发放之后，您可以在订单详情页面查看详细信息。"
          }
        ]
      }
    }
  }
</script>
