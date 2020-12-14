export default {
    'noLogin': '请先登录',
    'noAccount': '没有账户',
    'success': '下单成功',
    'title': '交易',
    'fee': '费率',
    'taker': 'Taker:',
    'maker': 'Maker:',
    'viewMore': '查看更多',
    'buy': '买入',
    'sell': '卖出',
    'amount': '数量',
    'total': '总计',
    'price': '价格',
    'market': '市价',
    'stop': '止损',
    'limit': '限价',
    'showAmount': '显示数量',
    'bestMarket': '市场最优价',
    'validity': '选择有效期',
    'login': '登录',
    'or': '或',
    'register': '注册',
    'orderErr': '下单失败',
    'orderType': {
        'limit': '限价',
        'market': '市价',
        'stopLimit': {
            'title': '止损限价',
            'content': '需要客户输入一个指定的止损价和指定的限价，一旦市场价格达到设置的止损价，将以限价单的方式下单。'
        },
        'stopMarket': {
            'title': '止损市价',
            'content': '需要客户设置一个触发价格，当此触发价格达到后，立刻向市场提交一份买入或卖出的市价单。'
        },
        'limitGtd': {
            'title': '限价-GTD',
            'content': '需要客户设置一个到期日和指定的价格，在到期日内，市场价格达到（或更优）所限制的成交价格时才会执行。该委托可在委托薄中保留到客户特别指定的到期日。'
        },
        'limitGfa': {
            'title': '限价-GFA',
            'content': '在集合竞价阶段发出的限价委托，可手动撤销。'
        },
        'icebergOrder': {
            'title': '冰山订单',
            'content': '大笔订单将被隐藏，只有部分订单会在市场显示。'
        },
        'hiddenOrder': {
            'title': '隐藏订单',
            'content': '订单将完全在市场隐藏'
        }
    },
    'timeCondition': {
        'ioc': 'IOC-立即执行或取消',
        'gfs': 'GFS-本节有效',
        'gfd': 'GFD-当日有效',
        'gtd': 'GTD-指定日期前有效',
        'gtc': 'GTC-撤销前有效',
        'gfa': 'GFA-集合竞价有效'
    },
    'modal': {
        'orderCfm': {
            'title': '请核实您的订单',
            'cfmBtn': '确认',
            'notice': '交易一经执行将无法取消',
            'details': '详情',
            'product': '产品',
            'orderType': '委托方式',
            'buy': '买入',
            'sell': '卖出',
            'price': '价格',
            'amount': '数量',
            'bestMarketPrice': '市场最优5档价格',
            'market': '市场价',
            'triggerPrice': '触发条件',
            'shownAmt': '显示数量',
            'expirationDate': '订单时效',
            'estimate': '预估',
            'estimatedCost': '交易支出',
            'fee': '手续费支出',
            'netExpenditure': '交易到账'
        },
        'pwd': {
            'title': '请输入交易密码',
            'forgetBtn': '忘记密码？',
            'msg1': "请先开启2FA认证",
        },
        'riskControl': {
            'title': '风险偏好确认书',
            'content': '请认真阅读风险偏好确认书，了解并确认所有投资风险',
            'read': '我已阅读并知晓'
        },
        'verify': {
            'title': '认证',
            'ok': '认证',
            'content': '请在交易前完成身份认证',
            'cfm': '确认'
        }
    },
    'identityExpired': '身份信息已过期',
    'formatErr': '输入字段格式不正确',
    'showAmountErr': '显示数量不能大于数量',
    'limitBuyErr': '已超出今日买入限额',
    'limitSellErr': '已超出今日卖出限额',
    'notEnoughErr': '资金或手续费不足',
    'maxErr': '已超出最大持仓限额',
    'noAccountErr': '暂无账户，请联系管理员为您添加账户',
    'priceInputErr': '请输入正确的价格',
    'amountInputErr': '请输入正确的数量',
    'balanceNotEnough': '可用余额不足'
}