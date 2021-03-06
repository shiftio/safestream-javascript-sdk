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
        getVideos: () => 
            axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_VIDEOS_PATH}`, { headers: AUTH_HEADERS })
                .then(({ data }) => data),
        getVideo: (id: string) => 
            axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_VIDEOS_PATH}/${id}`, { headers: AUTH_HEADERS })
                .then(({ data }) => data),
        getTemplates: () => 
            axios.get(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_TEMPLATES_PATH}/`, { headers: AUTH_HEADERS })
                .then(({ data }) => data),
        getStream: async (videoId: string, templateId: string, mappings: object) => {
            if(isBrowser()) {
                console.warn(new Error("You are currently running in test mode!!!! It's common to create streams in the browser during development. However, streams should be created server side in production. Creating streams in the browser in production is insecure. See https://docs.safestream.com."))
            }
            const payload = {
                videoId: videoId,
                settingsTemplateMapping: {
                    id: templateId,
                    mappings: mappings
                }
            }

            return axios.post(`${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_WATERMARK_PATH}/`, payload, { headers: AUTH_HEADERS })
                .then(({ data }) => data)
        }
    }
}