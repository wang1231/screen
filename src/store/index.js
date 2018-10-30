import Vue from 'vue'
import Vuex from 'vuex'
// 引入当前开发者的状态管理.js
import storeYll from "./module/store-yll"
import storeYxb from './module/store-yxb'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    // 将开发者模块合并
    modules: {
        storeYxb: storeYxb.module,
        storeYll: storeYll.module
    }
})