/*
七牛云配置
*/
const qiniu = require('qiniu')
// 创建上传凭证
const accessKey = 'kgfcH_oDX9NZOHAc2l3Uy5WFCbzKyQfJw6p1RwTU' 
const secretKey = '4siJwH7EKFf6Q3w--DoMsuXZPuDRaZYN4e5Msejt'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'images',
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)
module.exports = {
   uploadToken

}