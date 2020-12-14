export default {
    'navBar': {
        'current': '当前委托',
        'historical': '历史委托',
        'traded': '历史成交',
        'deliver': '对账单'
    },
    'directon': '买入, 卖出',
    'typeList': '全部, 限价单, 市价单, 限价止盈止损, 冰山订单, 隐藏订单, 市价止盈止损',
    'typeList2': '全部, 限价单, 市价单',
    'custudyTypeEnum': '买入到账,卖出到账,买入支出,卖出支出,分红派息,转到交易账户,交易账户转入,充值,提现,交易手续费,充值手续费,提现手续费,ST资格申请手续费,ST钱包注册手续费,转到存管账户,存管账户转入',
    'orderStatus': '全部成交, 部分成交还在队列中, 部分成交不在队列中, 未成交还在队列中, 未成交不在队列中, 全部撤单, 部分成交, BTS已接受, 交易所已接受, 已触发止损, 结算中, 全部退回, 部分退回，部分撤单',
    'tradeStatus': '-, 已撤单, 已成交, 已退回',
    'bussinessTypeEnum': '买入清算, 卖出清算, 充值, 提现, 资金划出, 资金划入',
    'orderActionEnum': '买入-maker, 卖出-taker, 充值, 提现, 资金划出, 资金划入, 卖出-maker, 买入-taker',
    'timeConditionEnum': '立即执行或取消, 本节有效, 当日有效, 指定日期前有效, 撤销前有效, 集合竞价有效',
    'current': {
        'title': '当前委托',
        'search': '筛选',
        'typeList': '全部, 限价单, 市价单, 止盈止损, 冰山订单, 隐藏订单',
        'timeConditionEnum': '立即执行或取消, 本节有效, 当日有效, 指定日期前有效, 撤销前有效, 集合竞价有效',
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
            'allOrder': '全部',
            'limitOrder': '限价单',
            'marketOrder': '市价单',
            'stopOrder': '止盈止损',
            'icebergOrder': '冰山订单',
            'hideOrder': '隐藏订单',
            'price': '价格',
            'num': '数量',
            'completeness': '完成度',
            'dealAmt': '委托金额',
            'condition': '触发价',
            'showNum': '显示数量',
            'expireDate': '有效期',
            'action': '操作',
            'button': {
                'cancel': '撤单'
            }
        },
        'cancle': {
            'title': '您确定要撤销该笔订单？',
            'all': '您确定要撤销所有订单？'
        }
    },
    'deliver': {
        'title': '对账单',
        'searchForm': {
            'date': '时间',
            'type': '业务类型',
            'product': '产品/资产',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'export': '导出全部对账单'
            } 
        },
        'table': {
            'occurDate': '发生时间',
            'type': '业务类型',
            'dealDate': '成交时间',
            'tradeBehavior': '交易行为',
            'product': '产品/资产',
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
            'type': '方向',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'hide': '隐藏所有已撤单',
                'export': '导出全部历史委托记录'
            } 
        },
        'table': {
            'dealTime': '时间',
            'id': '委托ID',
            'product': '产品',
            'type': '类型',
            'direction': '方向',
            'dealPrice': '平均价格',
            'price': '委托价格',
            'dealNum': '成交数量',
            'num': '委托数量',
            'dealAmt': '成交额',
            'conditionPrice': '触发价',
            'showNum': '显示数量',
            'completeness': '完成度',
            'expire': '有效期',
            'status': '状态'
        },
        'tableDetail': {
            'dealTime': '时间',
            'id': '成交ID',
            'dealPrice': '成交价格',
            'dealNum': '数量',
            'fee': '手续费',
            'dealAmt': '成交额',
            'status': '状态',
            'title': '订单明细'
        }
    },
    'traded': {
        'title': '历史成交',
        'searchForm': {
            'date': '时间',
            'product': '产品',
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
            'waiting': '结算中',
            'success': '已成交',
            'rejected': '交易退回'
        }
    }
}