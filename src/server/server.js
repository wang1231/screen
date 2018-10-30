import req from '../utils/serviceUtil';

/* 将所有接口统一起来便于维护
 * 可以根据 post或者get 修改 method 值
 */
// 一  知识库相关接口

// 2.1.1 查询库列表
export const getKnowledgeBase = data => {
    return req.post("/kbaseservice/kbases",data);
}

export default {
    getKnowledgeBase
}