export default {
    'navBar': {
        'current': 'Open Orders',
        'historical': 'Order History',
        'traded': 'Trade History',
        'deliver': 'Statement'
    },
    'directon': 'BUY, SELL',
    'typeList': "All, Limit Order, Market Order, Stop-Limit Order, Iceberg Order, Hidden Order, Stop-Market Order",
    'typeList2': "All, Limit Order, Market Order",
    'custudyTypeEnum': 'Buy Received,Sell Received,Buy Cost,Sell Cost,Dividend Payment,Transfer to Trading Account,Transfer from Trading Account,Deposit,Withdrawal,Trading Fees,Deposit Fees,Withdrawal Fees,Fees for Applying ST Permission,Fees for ST Wallet Registration,Transfer to Custody Account,Transfer from Custody Account',
    'orderStatus': 'All Traded, Part Traded Queuing , Part Traded Not Queuing, No Trade Not Queuing, Cancelled, All Cancelled , BTS Accepted, EX Accepted, Stop Loss Triggered, Under Settlement, All Returned, Part Returned',
    'tradeStatus': '-, Cancelled, Traded, Returned',
    'bussinessTypeEnum': 'Buy Clearing, Sell Clearing, Deposit, Withdrawal, Fund Out, Fund In',
    'orderActionEnum': 'Buy-Maker, Sell-Taker, Deposit, Withdraw, Fund Out, Fund In, Sell-Maker, Buy-Taker',
    'timeConditionEnum': 'IOC, GFS, GFD, GTD, GTC, GFA',
    'current': {
        'title': 'Open Orders',
        'search': 'Filter',
        'typeList': "All Orders, Limit Order, Market Order, Stop Order, Iceberg Order, Hidden Order",
        'timeConditionEnum': 'IOC, GFS, GFD, GTD, GTC, GFA',
        'button': {
            'cancel': 'Cancel All',
            'cancelBtn': 'Cancel',
            'confirm': 'Confirm'
        },
        'table': {
            'delegationTime': 'Time',
            'product': 'Product',
            'type': 'Type',
            'direction': 'Side',
            'sell': 'Sell',
            'buy': 'Buy',
            'allOrder': 'All',
            'limitOrder': 'Limit',
            'marketOrder': 'Market',
            'stopOrder': 'Stop',
            'icebergOrder': 'Iceberg',
            'hideOrder': 'Hidden',
            'price': 'Price',
            'num': 'Amount',
            'completeness': 'Filled %',
            'dealAmt': 'Total',
            'condition': 'Trigger Price',
            'showNum': 'Displayed Amount',
            'expireDate': 'Expiry',
            'action': 'Action',
            'button': {
                'cancel': 'Cancel'
            }
        },
        'cancle': {
            'title': 'Confirm to cancel this order?',
            'all': 'Confirm to cancel ALL orders?'
        }
    },
    'deliver': {
        'title': 'Statement',
        'searchForm': {
            'date': 'Time',
            'type': 'Type',
            'product': 'Product/Asset',
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
            'dealVol': 'Value',
            'fee': 'Fees',
            'transferFee': 'Account Transfer Fee',
            'tradeFee': 'Exchange Fee',
            'stampTax': 'Stamp Duty',
            'acctNo': 'Account No.',
            'acctName': 'Account Name'
        }
    },
    'historical': {
        'title': 'Order History',
        'searchForm': {
            'date': 'Time',
            'product': 'Product',
            'type': 'Side',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'hide': 'Hide All Cancelled Orders',
                'export': 'Export ALL'
            } 
        },
        'table': {
            'dealTime': 'Time',
            'id': 'ID',
            'product': 'Product',
            'type': 'Type',
            'direction': 'Side',
            'dealPrice': 'Average Price',
            'price': 'Price',
            'dealNum': 'Filled Amount',
            'num': 'Amount',
            'dealAmt': 'Filled Value',
            'conditionPrice': 'Trigger Price',
            'showNum': 'Displayed Amount',
            'completeness': 'Filled %',
            'expire': 'Expiry',
            'status': 'Status'
        },
        'tableDetail': {
            'dealTime': 'Time',
            'id': 'ID',
            'dealPrice': 'Price',
            'dealNum': 'Amount',
            'fee': 'Fees',
            'dealAmt': 'Volume',
            'status': 'Status',
            'title': 'Order Details'
        }
    },
    'traded': {
        'title': 'Trade History',
        'searchForm': {
            'date': 'Time',
            'product': 'Product',
            'type': 'Type',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'export': 'Export ALL'
            } 
        },
        'table': {
            'dealTime': 'Time',
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
            'rejected': 'Returned'
        }
    }
}