import request from '@/router/axios'
const scope = 'server'

/**
 * 登陆
 * @param username   用户名
 * @param password   密码
 * @returns {*}
 */
export const loginByUsername = (username, password) => {
  const grant_type = 'password'
  return request({
    url: '/user/login',
    headers: {
      isToken:false,
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { username, password, grant_type }
  })
}

/**
 * 刷新token
 * @param refresh_token
 * @returns {*}
 */
export const refreshToken = (refresh_token) => {
  const grant_type = 'refresh_token'
  return request({
    url: '/user/refreshToken',
    headers: {
      'isToken': false,
      'Authorization': 'Basic cGlnOnBpZw==',
    },
    method: 'post',
    params: { refresh_token, grant_type }
  })
}

/**
 * 退出登陆
 * @returns {*}
 */
export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'delete'
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}
