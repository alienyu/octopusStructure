export default {
    'asset': {
        'mainAccount': '总资产折算',
        'subAccount': '母子账户总资产折算',
        'searchCurrency': '搜索币种',
        'hide': '隐藏小额资产',
        'table': {
            'currency': '币种',
            'name': '名称',
            'balance': '总资产',
            'useable': '可用资产',
            'frozen': '冻结',
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
            'currency': '币种',
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
            'chainAssetId': '币对',
            'orderId': '类型',
            'amount': '数量',
            'orderTimestamp': '时间'
        }
    },
    'recharge':{
        'title':"充值",
        'digitalCurrencyRecharge':'数字货币充值',
        'currency':'币种',
        'pleaseSelect':'请选择币种',
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
            'address':'BTC地址：',
            'copyAddress':'复制地址',
            'download':'下载二维码',
            'lookRecord':'查看充币记录跟踪状态'
        }
    },
    'withdraw':{
        'title':"提现",
        'digitalCurrencyWithdraw':'数字货币提现',
        'currency':'币种',
        'totalAssets':'总资产',
        'orderFreeze':'冻结',
        'availableAssets':'可用资产',
        'tips':"请勿直接提现至众筹或ICO地址，否则将无法收到众筹或ICO发放的代币。",
        'pleaseSelect':'请选择主网',
        'pleaseSelectAddress':'请选择白名单地址',
        'pleaseEnterNumber':'请输入提现金额',
        'pleaseAddress':'提现地址',
        'limit':'限额',
        'selectContent':{
            'goaddAddre':'去添加地址',
            'selectMainNetword':'选择主网',
            'addressMgt':'地址管理',
            'haveNo':'您未添加白名单地址',
            'number':'数量',
            'max':'全部',
            'min':'最小提现数量',
            'availableAssets':'可用资产 ',
            'commission':"手续费",
            'actualArrival':'实际到账'

        }
    }
}