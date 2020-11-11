import axios from 'axios';
import { isBrowser } from "./utils"

type SafeStreamSDKAuthConfig = {
    apiKey: string,
    apiSecret: string
}

type SafeStreamSDKConfig = {
    auth: SafeStreamSDKAuthConfig
}

const API_PROTOCOL = "https";
const API_DOMAIN = "s2-api.safestream.com";
const API_VERSION = "2.0"
const API_VIDEOS_PATH = "/videos"
const API_TEMPLATES_PATH = "/templates"
const API_WATERMARK_PATH = "/watermark"

export const SafeStream = (config: SafeStreamSDKConfig) => {
    const AUTH_HEADERS = {
        'x-api-key': config.auth.apiKey,
        'x-api-secret': config.auth.apiSecret
    }
    return {
        getVideos: async () => {
            const response = await axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_VIDEOS_PATH}`, { headers: AUTH_HEADERS })
            return response.data
        },
        getVideo: async (id: string) => {
            const response = await axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_VIDEOS_PATH}/${id}`, { headers: AUTH_HEADERS })
            return response.data
        },
        getTemplates: async () => {
            const response = await axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_TEMPLATES_PATH}/`, { headers: AUTH_HEADERS })
            return response.data
        },
        getStream: async (videoId: string, templateId: string, mappings: object) => {
            if(isBrowser()) {
                console.error("It's common to create streams in the browser during development. However, streams should be created server side in proiduction. Creating streams in the browser in production is insecure. See https://docs.safestream.com.")
            }
            const payload = {
                videoId: videoId,
                settingsTemplateMapping: {
                    id: templateId,
                    mappings: mappings
                }
            }
            const response = await axios.post(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_WATERMARK_PATH}/`, payload, { headers: AUTH_HEADERS })
            return response.data
        }
    }
}