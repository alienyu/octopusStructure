import React from 'react';
import { observable, useStrict, action } from 'mobx';
useStrict(true);

class Menu {
    @observable currentHeaderMenu = location.hash.split('#')[1].split('?')[0].match('space') ? '/space' : location.hash.split('#')[1].split('?')[0];
    @observable currentSpaceMenu = location.hash.split('#')[1].split('?')[0];

    @action changeHeaderMenu(path) {
        this.currentHeaderMenu = path;
    }

    @action changeSpaceMenu(path) {
        this.currentSpaceMenu = path;
    }
}

var menu = new Menu();

module.exports = menu;