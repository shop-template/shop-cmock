module.exports = {
	"name": "密码登录",
	"url": "/api/loginByPassword",
	"method": "post",
	"type": "application/json, text/plain, */*",
	"createTime": "2022-06-23 21:44:23",
	"updateTime": "2022-06-23 21:49:08",
	"isUseMockjs": false,
	"timeout": 1000,
	"bodyKey": {},
	"body": {
		"username_aaa___password_123456": {
			"code": 0,
			"data": {
				"token": "abcdefghijklmn",
				"userInfo": {
					"id": 6,
					"name": "fxss",
					"account": "182****9555",
					"headerImg": "https://img.fxss.work/header-1583418772000-23-production"
				}
			}
		}
	}
}