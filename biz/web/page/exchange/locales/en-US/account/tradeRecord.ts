export default {
    'navBar': {
        'current': 'Open Orders',
        'historical': 'Order History',
        'traded': 'Trade History',
        'deliver': 'Statement'
    },
    'current': {
        'title': 'Open Orders',
        'searchForm': {
            'date': 'Time',
            'product': 'Product',
            'direction': 'Side',
            'account': 'Account Name/No.',
            'operator': 'Operator',
            'button': {
                'reset': 'Reset',
                'search': 'Search'
            },
        },
        'table': {
            'delegationTime': 'Time',
            'operator': 'Operator',
            'accountName': 'Account Name',
            'accountNo': 'Account No.',
            'product': 'Product',
            'type': 'Type',
            'direction': 'Side',
            'price': 'Price',
            'num': 'Amount',
            'completeness': 'Filled %',
            'dealAmt': 'Total',
            'condition': 'Trigger Price',
            'showNum': 'Displayed Amount',
            'expireDate': 'Expiry',

        }
    },
    'deliver': {
        'title': 'Statement',
        'searchForm': {
            'date': 'Time',
            'type': 'Type',
            'product': 'Product/Asset',
            'operator': 'Operator',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'export': 'Export ALL'
            } 
        },
        'table': {
            'occurDate': 'Time Initiated',
            'type': 'Type',
            'dealDate': 'Time Completed',
            'tradeBehavior': 'Action',
            'product': 'Product/Asset',
            'dealAmt': 'Amount',
            'dealPrice': 'Price',
            'dealVol': 'Total',
            'fee': 'Fees',
            'transferFee': 'Transfer Fees',
            'tradeFee': 'Exchange Fees',
            'stampTax': 'Stamp Duty',
            'acctNo': 'Account No.',
            'acctName': 'Account Name',
            'operator': 'Operator'
        }
    },
    'historical': {
        'title': 'Order History',
        'searchForm': {
            'date': 'Time',
            'product': 'Product',
            'direction': 'Side',
            'account': 'Account Name/No.',
            'operator': 'Operator',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'hide': 'Hide All Cancelled Orders',
                'export': 'Export ALL'
            } 
        },
        'table': {
            'dealTime': 'Time',
            'operator': 'Operator',
            'accountName': 'Account Name',
            'accountNo': 'Account No.',
            'product': 'Product',
            'type': 'Type',
            'direction': 'Side',
            'dealPrice': 'Avg. Filled Price',
            'price': 'Order Price',
            'dealNum': 'Excuted Amount',
            'num': 'Ordered Amount',
            'dealAmt': 'Filled Volume',
            'conditionPrice': 'Trigger Price',
            'showNum': 'Displayed Amount',
            'expire': 'Expiry',
            'status': 'Status'
        }
    },
    'traded': {
        'title': 'Trade History',
        'searchForm': {
            'date': 'Time',
            'product': 'Product',
            'direction': 'Side',
            'account': 'Account Name/No.',
            'operator': 'Operator',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'export': 'Export ALL'
            } 
        },
        'table': {
            'dealTime': 'Time',
            'operator': 'Operator',
            'accountName': 'Account Name',
            'accountNo': 'Account No.',
            'product': 'Product',
            'direction': 'Side',
            'dealPrice': 'Price',
            'dealNum': 'Amount',
            'fee': 'Fees',
            'dealAmt': 'Total',
            'tradeStatus': 'Status'
        },
        'status': {
            'waiting': 'Under Settlement',
            'success': 'Executed',
            'rejected': 'Transaction Retrieved'
        }
    }
}