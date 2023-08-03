import {
  API_BASE_URL,
  API_TARGET_URL,
  MOCK_API_BASE_URL,
  MOCK_API_TARGET_URL
} from './constant'
import { loadEnv, ProxyOptions } from 'vite'

type ProxyTargetList = Record<string, ProxyOptions>;

export function createViteProxy(mode:string) {
  const env = loadEnv(mode, process.cwd())

  const init: ProxyTargetList = {
    [env.VITE_APP_BASE_API]: {
      target: env.VITE_APP_BASE_URL,
      changeOrigin: true,
      // logLevel: 'debug',
      rewrite: path => {
        return path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
      }
    },
    // test
    [API_BASE_URL]: {
      target: API_TARGET_URL,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${API_BASE_URL}`), '')
    },
    // mock
    [MOCK_API_BASE_URL]: {
      target: MOCK_API_TARGET_URL,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api')
    }
  }
  return init
}

// export default init
