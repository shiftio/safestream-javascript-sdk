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