import $ from 'jquery'
import store from '../store'
/**
 * 中央民大获取菜单
 */
export const getMenu = (data, callback) => {
  $.post(store.state.user.innerIframeUrl + '/zymdMenu/getMenu', data, callback, 'json')
}
/**
 * 添加访问记录
 */
export const addBrowseRecord = (data, callback) => {
  $.post(store.state.user.innerIframeUrl + '/browseRecordInfo/addBrowseRecord', data, callback, 'json')
}
