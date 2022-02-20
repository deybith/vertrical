import next from 'next'
import { NextServer, NextServerOptions } from 'next/dist/server/next'
import conf from './next.config'


const index = async (options: NextServerOptions): Promise<NextServer> => {
  options.conf = {
    ...conf,
    ...options.conf,
    basePath: conf?.publicRuntimeConfig?.basePath
  }
  const app = Object.create(next(options))
  await app.prepare()
  return app
}

export default index