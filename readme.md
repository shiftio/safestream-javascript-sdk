# SafeStream Javascript SDK

The SafeStream Javascript SDK is wrapper for the [SafeStream API](https://docs.safestream.com) with support for NodeJS and the browser.

## Getting Started

```bash
npm install --save @safestream/safestream-javascript-sdk
```

```javascript
import { SafeStream } from "@safestream/safestream-javascript-sdk"

// Initialize the SafeStream SDK with you API credentials
const ss = SafeStream({ auth: { apiKey: <API_KEY>, apiSecret: <API_SECRET> });

// Get to work
const videos = ss.getVideos()
```

## Usage

### Getting Videos

```javascript
import { SafeStream } from "@safestream/safestream-javascript-sdk"

// Initialize the SafeStream SDK with you API credentials
const ss = SafeStream({ auth: { apiKey: <API_KEY>, apiSecret: <API_SECRET> });

// Get to work
const videos = ss.getVideos()

// Response
// [
//     {
//         "id": "594a3442-79ea-451e-8a9b-cd45b8c786d0",
//         "scope": "dbad82b9-c36f-411f-b3ac-80e1ef1c87e8",
//         "sourceUrl": "https://uploads-safestream-com.s3-us-west-2.amazonaws.com/8741f3ae-d82e-4afe-b86b-88994805b1c3/Pexels Videos 2155942.mp4",
//         "key": "527f5edb-0fbe-451b-9783-9b8a6713d69e",
//         "encrypt": true,
//         "allowHmacAuth": true,
//         "enableForensic": false,
//         "posterFrameUrl": "https://s3.amazonaws.com/videos.safestream.com/dbadsu89-c36f-411f-b3ac-80e1ef1c87e8/309a3442-57ua-451e-8a9b-cd45b8c391d0_large.jpg",
//         "posterFrameTimeCode": 0,
//         "status": "INGESTED",
//         "targetBitRate": "4000k",
//         "groupId": "",
//         "createdBy": "24654d3b-259d-4ece-8ef3-d1e4546f6ece",
//         "createdOn": 1605019786000,
//         "updatedBy": "24654d3b-259d-4ece-8ef3-d1e4546f6ece",
//         "updatedOn": 1605019793000,
//         "filename": "Season_1_Episode_1.mp4",
//         "description": "",
//         "title": "Season_1_Episode_1.mp4",
//         "width": 1920,
//         "height": 1080,
//         "metadata": []
//     }
// ]
```

### Getting a Video

```javascript
import { SafeStream } from "@safestream/safestream-javascript-sdk"

// Initialize the SafeStream SDK with you API credentials
const ss = SafeStream({ auth: { apiKey: <API_KEY>, apiSecret: <API_SECRET> });

// Get to work
const videos = ss.getVideo("YOUR VIDEO ID")

// Response
// {
//     "id": "594a3442-79ea-451e-8a9b-cd45b8c786d0",
//     "scope": "dbad82b9-c36f-411f-b3ac-80e1ef1c87e8",
//     "sourceUrl": "https://uploads-safestream-com.s3-us-west-2.amazonaws.com/8741f3ae-d82e-4afe-b86b-88994805b1c3/Pexels Videos 2155942.mp4",
//     "key": "527f5edb-0fbe-451b-9783-9b8a6713d69e",
//     "encrypt": true,
//     "allowHmacAuth": true,
//     "enableForensic": false,
//     "posterFrameUrl": "https://s3.amazonaws.com/videos.safestream.com/dbadsu89-c36f-411f-b3ac-80e1ef1c87e8/309a3442-57ua-451e-8a9b-cd45b8c391d0_large.jpg",
//     "posterFrameTimeCode": 0,
//     "status": "INGESTED",
//     "targetBitRate": "4000k",
//     "groupId": "",
//     "createdBy": "24654d3b-259d-4ece-8ef3-d1e4546f6ece",
//     "createdOn": 1605019786000,
//     "updatedBy": "24654d3b-259d-4ece-8ef3-d1e4546f6ece",
//     "updatedOn": 1605019793000,
//     "filename": "Season_1_Episode_1.mp4",
//     "description": "",
//     "title": "Season_1_Episode_1.mp4",
//     "width": 1920,
//     "height": 1080,
//     "metadata": []
// }
```

### Getting a Watermark Stream

```javascript
import { SafeStream } from "@safestream/safestream-javascript-sdk"

// Initialize the SafeStream SDK with you API credentials
const ss = SafeStream({ auth: { apiKey: <API_KEY>, apiSecret: <API_SECRET> });

// Get to work
const videos = ss.getStream("YOUR VIDEO ID", "YOUR TEMPLATE ID", { UserData1: "Karol Fritz", UserData2: "karol@karolfritz.com", UserData3: "127.0.0.1"})

// Response
// {
//     "id": "f847c1ee-db3a-4293-903b-14a81cc536ea",
//     "createdOn": 1605296586438,
//     "status": "READY",
//     "containers": {
//         "iframe": "<span style='margin:0px;padding:0px;overflow:hidden'><iframe src='https://s2-api.safestream.com/player/2.0/?href=https%3A%2F%2Fs2-api.safestream.com%2F2.0%2Fwatermark%2F594a3442-79ea-451e-8a9b-cd45b8c786d0%2F1fe4fe237cece470d7f8ef2aece288abd42797897aee219105c76ffc674221c1%2Fvideo.m3u8%3Fkcgth%3D040848e2-68b4-4158-9e48-b3d8e8ca3f2a%26abr%3Dfalse%26expiration%3D1605300202521%26signature%3DEkYDsDlMH2boO5%252B%252Bcab6%252Bh7k%252B6lqhsPL0abisUxY7pY%253D&postframe=https://s3.amazonaws.com/videos.safestream.com/dbad82b9-c36f-411f-b3ac-80e1ef1c87e8/594a3442-79ea-451e-8a9b-cd45b8c786d0_large.jpg&trackingId=040848e2-68b4-4158-9e48-b3d8e8ca3f2a' allowfullscreen frameborder='0' style='overflow:hidden;height:100%;width:100%' height='100%' width='100%'></iframe></span>",
//         "href": "https://s2-api.safestream.com/player/2.0/?href=https%3A%2F%2Fs2-api.safestream.com%2F2.0%2Fwatermark%2F594a3442-79ea-451e-8a9b-cd45b8c786d0%2F1fe4fe237cece470d7f8ef2aece288abd42797897aee219105c76ffc674221c1%2Fvideo.m3u8%3Fkcgth%3D040848e2-68b4-4158-9e48-b3d8e8ca3f2a%26abr%3Dfalse%26expiration%3D1605300202521%26signature%3DEkYDsDlMH2boO5%252B%252Bcab6%252Bh7k%252B6lqhsPL0abisUxY7pY%253D&postframe=https://s3.amazonaws.com/videos.safestream.com/dbad82b9-c36f-411f-b3ac-80e1ef1c87e8/594a3442-79ea-451e-8a9b-cd45b8c786d0_large.jpg&trackingId=040848e2-68b4-4158-9e48-b3d8e8ca3f2a",
//         "m3u8": "https://s2-api.safestream.com/2.0/watermark/594a3442-79ea-451e-8a9b-cd45b8c786d0/1fe4fe237cece470d7f8ef2aece288abd42797897aee219105c76ffc674221c1/video.m3u8?kcgth=040848e2-68b4-4158-9e48-b3d8e8ca3f2a&abr=false&expiration=1605300202521&signature=EkYDsDlMH2boO5%2B%2Bcab6%2Bh7k%2B6lqhsPL0abisUxY7pY%3D"
//     },
//     "href": "https://s2-api.safestream.com/2.0/watermark/594a3442-79ea-451e-8a9b-cd45b8c786d0/1fe4fe237cece470d7f8ef2aece288abd42797897aee219105c76ffc674221c1?containers=m3u8&expiration=1605300202521&signature=%2FFpL%2BCwvXCz%2F%2FB4VhnzXjkJX05um%2BJoW55bw3X67sbc%3D"
// }
```

## Examples

### Browser Example 

__Pre-production only. Do not usein production since watermark reqwuests made directly from the browser are insecure__

[Github](https://github.com/shiftio/safestream-player-example)

[Codepen](https://codesandbox.io/s/github/shiftio/safestream-player-example/tree/master/)


### Server Example

[Github](https://github.com/shiftio/safestream-nodejs-server-example)

[Codepen](https://codesandbox.io/s/github/shiftio/safestream-nodejs-server-example/tree/master/)