import myAxios from "../MyAxios";
// import BASEURL from '../BaseUrl';

const AdminApi = {
  // 登录接口
  login(params) {
    return myAxios.post('/user/login', params)
  },
  // 查询登录用户数据
  userinfo(params) {
    return myAxios.get('/user/info', params)
  },
}

export default AdminApi