import axios from 'axios';

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

export const SafeStream = (config: SafeStreamSDKConfig) => {
    return {
        getVideos: async () => {
            try {
                const response = await axios.get(
                    `${API_PROTOCOL}://${API_DOMAIN}/${API_VERSION}${API_VIDEOS_PATH}`, 
                    { 
                        headers: {
                            'x-api-key': config.auth.apiKey,
                            'x-api-secret': config.auth.apiSecret
                        }
                    }
                )

                return response.data
            } catch(e) {
                console.log(e);
            } finally {
                console.log("DONE")
            }
        }
    }
}