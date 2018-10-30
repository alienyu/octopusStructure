import React from 'react';
import { observable, useStrict, action } from 'mobx';

class LoadingMask {
    @observable status = false;

    @action changeStatus(val) {
        this.status = val;
    }
}

var loadingMask = new LoadingMask();

module.exports = loadingMask;