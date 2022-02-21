import axios from 'axios'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig()

const API_VERSION = 'v1'

export const axiosBaseInstance = axios.create({
	baseURL: `${publicRuntimeConfig.appihost}api/${API_VERSION}`,
})