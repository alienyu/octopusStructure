export default {
    'navBar': {
        'current': '当前委托',
        'historical': '历史委托',
        'traded': '历史成交',
        'deliver': '对账单'
    },
    'current': {
        'title': '当前委托',
        'searchForm': {
            'date': '时间',
            'product': '产品',
            'direction': '方向',
            'account': '账户名/账户号',
            'operator': '操作员名',
            'button': {
                'reset': '重置',
                'search': '搜索'
            },
        },
        'table': {
            'delegationTime': '时间',
            'operator': '操作员',
            'accountName': '账户名',
            'accountNo': '账户号',
            'product': '产品',
            'type': '类型',
            'direction': '方向',
            'price': '价格',
            'num': '数量',
            'completeness': '完成度',
            'dealAmt': '委托金额',
            'condition': '触发价',
            'showNum': '显示数量',
            'expireDate': '有效期',

        }
    },
    'deliver': {
        'title': '对账单',
        'searchForm': {
            'date': '时间',
            'type': '业务类型',
            'product': '产品/资产',
            'operator': '操作员名',
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
            'acctName': '账户名',
            'operator': '操作员'
        }
    },
    'historical': {
        'title': '历史委托',
        'searchForm': {
            'date': '时间',
            'product': '产品',
            'direction': '方向',
            'account': '账户名/账户号',
            'operator': '操作员名',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'hide': '隐藏所有已撤单',
                'export': '导出全部历史委托记录'
            } 
        },
        'table': {
            'dealTime': '时间',
            'operator': '操作员',
            'accountName': '账户名',
            'accountNo': '账户号',
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
            'product': '产品',
            'direction': '方向',
            'account': '账户名/账户号',
            'operator': '操作员名',
            'button': {
                'reset': '重置',
                'search': '搜索',
                'export': '导出全部历史委托记录'
            } 
        },
        'table': {
            'dealTime': '时间',
            'operator': '操作员',
            'accountName': '账户名',
            'accountNo': '账户号',
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