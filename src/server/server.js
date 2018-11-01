import req from '../utils/serviceUtil';

/* 将所有接口统一起来便于维护
 * 可以根据 post或者get 修改 method 值
 */
// 一  知识库相关接口

// 2.1.1 查询库列表

// 四个库24小时入库量趋势接口data/screen/trend/fourLibTrend?date=2018-09-03
export const getTrendFourLibTrend = data => {
  return req.get(`/data/screen/trend/fourLibTrend?date=${data.date}`);
}
export const getService = data => {
  return req.get('/data/screen/service/getService');
}
// 正在下载
export const getDownLoad = data => {
  return req.get('/data/screen/rank/getCurrent?method=DownLoad');
}
// 正在浏览
export const getVisit = data => {
  return req.get('/data/screen/rank/getCurrent?method=Visit');
}
// 用户量
export const getUser = data => {
  return req.get('/data/screen/user/getUser');
}
// 每个库24小时入库量
export const getMediaTypeTrend = data => {
  return req.get(`/data/screen/trend/mediaTypeTrend?libId=${data.libId}&date=${data.date}`);
}
export default {
  getTrendFourLibTrend,
  getService,
  getDownLoad,
  getVisit,
  getUser,
  getMediaTypeTrend
}
