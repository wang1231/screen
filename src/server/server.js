import req from '../utils/serviceUtil';

/* 将所有接口统一起来便于维护
 * 可以根据 post或者get 修改 method 值
 */
// 一、 1.1接口
// 查询年
const getLanguageMediaTypeY = (param) => {
    return req.get(`/data/screen/doc/getLanguageMediaType?year=${param}`);
}
// 查询 年月
const getLanguageMediaTypeM = (param) => {
    return req.get(`/data/screen/doc/getLanguageMediaType?yearMonth=${param}`);
}
// 查询 年月日
const getLanguageMediaTypeD = (param) => {
    return req.get(`/data/screen/doc/getLanguageMediaType?yearMonthDay=${param}`);
}
// 一、 1.2接口
// 查询年
const getLanguageLibY = (param) => {
    return req.get(`/data/screen/doc/getLanguageLib?year=${param}`);
}
// 查询月
const getLanguageLibM = (param) => {
    return req.get(`/data/screen/doc/getLanguageLib?yearMonth=${param}`);
}
// 查询日
const getLanguageLibD = (param) => {
    return req.get(`/data/screen/doc/getLanguageLib?yearMonthDay=${param}`);
}
// 最新实时动态
const getDocList = (param) => {
    return req.get(`/data/screen/doc/getDocList?libId=${param}`);
}
// 外电+ 报刊库 当日数据量
const getPressAndForeign = (param) => {
    return req.get(`/data/screen/lib/getPressAndForeign?libId=${param}`);
}
// 待编库 + 成品库当日数据量
const getFinishedAndPending = (param) => {
    return req.get(`/data/screen/lib/getFinishedAndPending?libId=${param}`);
}
export default {
    getLanguageMediaTypeY,
    getLanguageMediaTypeM,
    getLanguageMediaTypeD,
    getLanguageLibY,
    getLanguageLibM,
    getLanguageLibD,
    getDocList,
    getPressAndForeign,
    getFinishedAndPending
}