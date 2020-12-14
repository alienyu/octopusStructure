export default {
    'subTitle': {
        'asset': 'Asset',
        'recharge': 'Deposit',
        'withdraw': 'Withdraw',
        'record': 'Record'
    },
    'asset': {
        'mainAccount': 'Total Balance',
        'subAccount': 'Total (Master & Sub-account)',
        'searchCurrency': 'Search',
        'hide': 'Hide Small Balances',
        'hideAmount': 'Less than 0.001USDT',
        'table': {
            'currency': 'Asset',
            'name': 'Name',
            'balance': 'Total',
            'useable': 'Available',
            "withdraw":'Withdrawable',
            'frozen': 'Frozen',
            'USDT': 'USDT Estimated',
            'action': 'Operation',
            'button': {
                'recharge': 'Deposit',
                'withdraw': 'Withdraw'
            }
        }
    },
    'record': {
        'title': 'Record',
        'search': {
            'title': 'Type',
            'recharge': 'Deposit',
            'withdraw': 'Withdraw',
            'time': 'Time',
            'currency': 'Asset',
            'status': 'Status',
            'button': {
                'reset': 'Reset',
                'search': 'Search',
                'export': 'Export ALL'
            }
        },
        'status': {
            'fail': 'Failed',
            'verify': 'Reviewing',
            'arrival': 'Arrived'
        },
        'table': {
            'status': 'Status',
            'chainAssetId': 'Asset',
            'orderId': 'Mainnet',
            'amount': 'Amount',
            'orderTimestamp': 'Time',
            'address': 'Address',
            'action': 'Action',
            'cancle': 'Cancel'
        }
    }, 
    'recharge':{
        'title':"Deposit",
        'digitalCurrencyRecharge':'Crypto',
        'legalCurrency':'Fiat',
        'currency':'Asset',
        'pleaseSelect':'Please select the coin',
        "noAccess":"You have no permission to deposit this coin",
        "noAssetAccess":"This coin is out of service currently",
        'tips':{
            'title':"Notice",
            'tips1':'Please do NOT deposit asset any other than USDT(ERC20) to the above address, as the assets will not be recovered.',
            'tips2':'Your deposit need to be confirmed by all nodes of the network. You can check your deposit and withdraw it after 12 network confirmations.',
            'tips3':'Minimum Deposit Amount: 1 USDT. Deposit less than the minimum amount will not be recorded and cannot be returned.',
            'tips4':'Your deposit address will not change frequently and you could repeat your operations with no need to change the address; if there is any change, we will inform you via website announcement or email.',
            'tips5':'Please ensure the safety of your computer and browser to avoid information falsification or leakage.',
        },
        'selectContent':{
            'selectMainNetword':'Select the mainnet',
            'address':'Address',
            'copyAddress':'Copy the Address',
            'download':'Download the QR Code',
            'lookRecord':'Check deposit history and status'
        }
    },
    'withdraw':{
        'title':"Withdraw",
        'digitalCurrencyWithdraw':'Crypto',
        'currency':'Asset',
        'totalAssets':'Total',
        'orderFreeze':'Frozen',
        'availableAssets':'Available',
        'tips':"Please do not withdraw directly to a crowdfund or ICO address, as your account will not be credited with tokens from such sales.",
        'pleaseSelect':'Please select the mainnet',
        'pleaseAddress':'Withdrawal Address',
        'limit':'Limited Amount',
        'pleaseSelectCurrency':'Please select the coin',
        'pleaseSelectAddress':'Please select the whitelist address',
        'pleaseEnterNumber':'Please enter the amount',
        "noAccess":"You have no permission to withdraw",
        "noAssetAccess":"This coin is out of service currently",
        'assetHasOff':"Current mainnet status: offline",
        "error1":"The withdrawal amount cannot be less than the minimum withdrawal amount",
        "error2":"Please enter the correct amount",
        "error3": "Withdrawal address format error",
        "error4": "Please do not enter the exchange house address",
        "error5":"Withdrawal amount can not exceed the min counting unit",
        "error6": "Decimal places exceeded",
        'selectContent':{
            'selectMainNetword':'Select the mainnet',
            'addressMgt':'Address Management',
            'goaddAddre':'Go to add address',
            'haveNo':'You have no whitelist address added',
            'number':'Amount',
            'max':'Maximum',
            'min':'Minimum Withdrawal Amount',
            'availableAssets':'Available',
            'commission':"Fees",
            'actualArrival':'Received',
            'currentAssets':'Available (Current Mainnet):',
            'allAssets': 'Available:',
            'limit': 'Limited Amount:'
        },
        'confirm':{
            'title':'Please confirm your withdrawal request',
            'tip':'The withdrawal request can NOT be cancelled once it be confirmed on chain',
            'detail':'Details',
            'address':'Withdrawal Address',
            'prediction':'Estimated',
            'cancel':'Cancel',
            "sure":'Confirm',
            'success':'Withdrawal initiated successfully',
            'failed':'Failed',
            'pwd':'Fund Password',
            'forgot':'Forgot Password?'
        }
    },
    'transfer':{
        "noAccess":"No transfer permission for this asset",
        "noAssetAccess": "This coin is out of service currently",
    }
    
}