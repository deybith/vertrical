const { env } = process

export const DEBUG: boolean = env.DEBUG === 'true'
export const PRODUCTION: boolean = env.NODE_ENV === 'production'