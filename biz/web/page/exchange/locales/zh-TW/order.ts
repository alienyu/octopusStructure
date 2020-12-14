export default {
    'navBar': {
        'current': '当前委托',
        'historical': '历史委托',
        'traded': '历史成交',
        'deliver': '对账单'
    },
    'directon': '买入, 卖出',
    'typeList': '全部, 限价单, 市价单, 止盈止损, 冰山订单, 隐藏订单',
    'orderStatus': '全部成交, 部分成交还在队列中, 部分成交不在队列中, 未成交还在队列中, 未成交不在队列中, 撤单, 部分成交部分撤单, BTS已接受, 交易所已接受, 已触发止损',
    'bussinessTypeEnum': '买入清算, 卖出清算, 充值, 提现, 分红派息',
    'current': {
        'title': '当前委托',
        'search': '筛选',
        'typeList': '全部, 限价单, 市价单, 止盈止损, 冰山订单, 隐藏订单',
        'button': {
            'cancel': '取消全部订单',
            'cancelBtn': '取消',
            'confirm': '确认'
        },
        'table': {
            'delegationTime': '时间',
            'product': '产品',
            'type': '类型',
            'direction': '方向',
            'sell': '卖出',
            'buy': '买入',
            'price': '价格',
            'num': '数量',
            'completeness': '完成度',
            'dealAmt': '成交额',
            'condition': '触发价',
            'showNum': '显示数量',
            'expireDate': '有效期',
            'action': '操作',
            'button': {
                'cancel': '撤单'
            }
        },
        'cancle': {
            'title': '您确定撤销该笔订单？',
            'all': '您确定撤销所有订单？'
        }
    },
    'deliver': {
        'title': '对账单',
        'searchForm': {
            'date': '日期',
            'type': '业务类型',
            'product': '产品/币种',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'export': '导出全部对账单'
            } 
        },
        'table': {
            'occurDate': '发生日期',
            'type': '业务类型',
            'dealDate': '成交日期',
            'tradeBehavior': '交易行为',
            'product': '产品',
            'dealAmt': '成交数量',
            'dealPrice': '成交价格',
            'dealVol': '成交金额',
            'fee': '手续费',
            'transferFee': '过户费',
            'tradeFee': '交易规费',
            'stampTax': '印花税',
            'acctNo': '账户号',
            'acctName': '账户名'
        }
    },
    'historical': {
        'title': '历史委托',
        'searchForm': {
            'date': '时间',
            'product': '产品',
            'type': '买卖类别',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'hide': '隐藏所有已撤单',
                'export': '导出全部历史委托记录'
            } 
        },
        'table': {
            'dealTime': '时间',
            'product': '产品',
            'type': '类型',
            'direction': '方向',
            'dealPrice': '成交均价',
            'price': '价格',
            'dealNum': '成交数量',
            'num': '委托数量',
            'dealAmt': '成交额',
            'conditionPrice': '触发价',
            'showNum': '显示数量',
            'expire': '有效期',
            'status': '状态'
        }
    },
    'traded': {
        'title': '历史成交',
        'searchForm': {
            'date': '时间',
            'product': '币对',
            'type': '买卖类别',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'export': '导出全部历史委托记录'
            } 
        },
        'table': {
            'dealTime': '时间',
            'product': '产品',
            'direction': '方向',
            'dealPrice': '成交均价',
            'dealNum': '成交数量',
            'fee': '手续费',
            'dealAmt': '成交额',
            'tradeStatus': '成交状态'
        },
        'status': {
            'waiting': '待确认',
            'success': '被确认成功',
            'rejected': '被撤回'
        }
    }
}