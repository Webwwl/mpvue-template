import { promisify } from '@/utils'

class MyHttp {
  constructor() {}
  request(options = {}) {
    if (this.requestInterceptor) {
      this.requestInterceptor(options)
    }
    return new Promise((resolve, reject) => {
      promisify(wx.request, options)
      .then(res => {
        let responseInterceptorRes
        if (this.responseInterceptor) {
          responseInterceptorRes = this.responseInterceptor(res)
        }
        responseInterceptorRes && resolve(res.data)
      })
    })
  }
  interceptor(options = {requestInterceptor: null, responseInterceptor: null}) {
    this.requestInterceptor = options.requestInterceptor
    this.responseInterceptor  = options.responseInterceptor
  }
}

const config = {
  timeout: 5000,
  baseUrl: 'http://localhost:8098'
}


const interceptors = {
  requestInterceptor: function (opt) {
    opt.url = config.baseUrl + opt.url
    opt.headers = {
      wwl: 'ok'
    }
  },
  responseInterceptor: function (res) {
    if (res.data.status !== 0) {
      console.log('not status 0')
      return false
    }
    return true
  },
}

const $http = new MyHttp()
$http.interceptor(interceptors)

export default $http