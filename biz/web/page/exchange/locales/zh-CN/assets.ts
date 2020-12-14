export default {
    'subTitle': {
        'asset': '资产',
        'recharge': '充值',
        'withdraw': '提现',
        'record': '充提记录'
    },
    'asset': {
        'mainAccount': '总资产折算',
        'subAccount': '母子账户总资产折算',
        'searchCurrency': '搜索资产',
        'hide': '隐藏小额资产',
        'hideAmount': '资产小于0.001USDT',
        'table': {
            'currency': '资产',
            'name': '名称',
            'balance': '总额',
            'useable': '可用资产',
            "withdraw":'可提',
            'frozen': '下单冻结',
            'USDT': 'USDT估值',
            'action': '操作',
            'button': {
                'recharge': '充值',
                'withdraw': '提现'
            }
        }
    },
    'record': {
        'title': '充提记录',
        'search': {
            'title': '类型',
            'recharge': '充值',
            'withdraw': '提现',
            'time': '时间',
            'currency': '资产',
            'status': '状态',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'export': '导出全部记录'
            }
        },
        'status': {
            'fail': '失败',
            'verify': '审核中',
            'arrival': '已到账'
        },
        'table': {
            'status': '状态',
            'chainAssetId': '资产',
            'orderId': '主网',
            'amount': '数量',
            'orderTimestamp': '时间',
            'address': '地址',
            'action': '操作',
            'cancle': '取消'
        }
    },
    'recharge':{
        'title':"充值",
        'digitalCurrencyRecharge':'数字货币充值',
        'legalCurrency':'法币充值',
        'currency':'资产',
        'pleaseSelect':'请选择币种',
        "noAccess":"您暂无该资产充值权限",
        "noAssetAccess":"该资产暂停充值服务",
        'tips':{
            'title':"温馨提示",
            'tips1':'请勿向上述地址充值任何非ERC20_USDT资产,否则资产将不可找回。',
            'tips2':'您充值至上述地址后，需要整个网络节点的确认，12次网络确认后到账，12次网络确认后可提币。',
            'tips3':'最小充值金额：1 USDT，小于最小金额的充值将不会上账且无法退回。',
            'tips4':'您的充值地址不会经常改变，可以重复充值；如有更改，我们会尽量通过网站公告或邮件通知您。',
            'tips5':'请务必确认电脑及浏览器安全，防止信息被篡改或泄漏。',
        },
        'selectContent':{
            'selectMainNetword':'选择主网',
            'address':'地址',
            'copyAddress':'复制地址',
            'download':'下载二维码',
            'lookRecord':'查看充币记录跟踪状态'
        }
    },
    'withdraw':{
        'title':"提现",
        'digitalCurrencyWithdraw':'数字货币提现',
        'currency':'资产',
        'totalAssets':'总资产',
        'orderFreeze':'提现冻结',
        'availableAssets':'可用资产',
        'tips':"请勿直接提现至众筹或ICO地址，否则将无法收到众筹或ICO发放的代币。",
        'pleaseSelect':'请选择主网',
        'pleaseAddress':'提现地址',
        'limit':'限额',
        'pleaseSelectCurrency':'请选择资产',
        'pleaseSelectAddress':'请选择白名单地址',
        'pleaseEnterNumber':'请输入提现金额',
        "noAccess":"您暂无该资产提现权限",
        "noAssetAccess":"该资产暂停提现服务",
        'assetHasOff':"当前主网已下架",
        "error1":"提现金额不能低于最小提现数量",
        "error5":"提现金额不能超过最小提现单位",
        "error2":"请输入正确的提现金额",
        "error3": "提现地址格式错误",
        "error4": "请勿填写交易所地址",
        "error6": "输入的小数位过长",
        'selectContent':{
            'selectMainNetword':'选择主网',
            'addressMgt':'地址管理',
            'goaddAddre':'去添加地址',
            'haveNo':'您未添加白名单地址',
            'number':'数量',
            'max':'全部',
            'min':'最小提现数量',
            'availableAssets':'可用资产',
            'commission':"手续费",
            'actualArrival':'实际到账',
            'currentAssets':'当前主网可提: ',
            'allAssets': '可提: ',
            'limit': '限额: ',
        },
        'confirm':{
            'title':'请核实您的提现请求',
            'tip':'提现请求一经链上确认无法取消',
            'detail':'详情',
            'address':'提现地址',
            'prediction':'预估',
            'cancel':'取 消',
            "sure":'确 认',
            'success':'提现发起成功',
            'failed':'提现失败',
            'pwd':'资金密码',
            'forgot':'忘记密码？'
        }
    },
    'transfer':{
        "noAccess":"您暂无该资产划转权限",
        "noAssetAccess":"该资产暂停划转服务",
    }
}