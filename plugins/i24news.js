var I24NEWS_BASE = "https://www.i24news.tv";

// register for resolver plugins
if(typeof resolverPlugins === 'undefined') {
    resolverPlugins = {};
}
resolverPlugins["i24news"] = resolveI24NewsVOD;

// register for search plugins
if(typeof searchPlugins === 'undefined') {
    searchPlugins = [];
}
searchPlugins.push(searchI24News);


function resolveI24NewsVOD(req, parts, onSuccess, onError) {
    try {
        console.debug("inside resolve i24news VOD");
        
        var query = null;
        var contentId = null;
        var contentType = null; // 'article', 'video', etc.
        
        // Parse query parameters
        for(let i in parts) {
            let part = parts[i];
            let keyValue = part.split("=");
            if(keyValue.length === 2) {
                let key = keyValue[0];
                let value = keyValue[1];
                switch(key) {
                    case "q":
                        query = decodeURIComponent(value);
                        break;
                    
                    case "id":
                        contentId = value;
                        break;
                    
                    case "type":
                        contentType = value;
                        break;
                }
            }
        }
        
        if(!query && !contentId) {
            if(onError) {
                onError("Invalid i24news query: missing query or id parameter");
            }
            return;
        }
        
        console.debug("extract i24news video... query=" + query + ", id=" + contentId + ", type=" + contentType);
        
        extractI24NewsVideo(query, contentId, contentType, onSuccess, onError);
        
    } catch(e) {
        console.error("Error in resolveI24NewsVOD: " + e);
        if(onError) {
            onError("Error resolving i24news: " + e);
        }
    }
}

function extractI24NewsVideo(query, contentId, contentType, onSuccess, onError) {
    try {
        // Step 1: Authenticate and get access token
        authenticateI24News(function(accessToken) {
            // Successfully authenticated, proceed to get credentials
            console.debug("Successfully authenticated with accessToken: " + accessToken);
            
            // Step 2: Get credentials using the access token
            getI24NewsCredentials(accessToken, function(credentials) {
                console.debug("Successfully obtained credentials: " + JSON.stringify(credentials));
                
                // Step 3: Get available contents and extract m3u8 URL
                getI24NewsContents(accessToken, contentId, onSuccess, onError);
            }, function(credError) {
                console.error("Failed to get credentials: " + credError);
                if(onError) {
                    onError(credError);
                }
            });
        }, function(authError) {
            // Authentication failed
            console.error("Authentication failed: " + authError);
            if(onError) {
                onError(authError);
            }
        });
    } catch(e) {
        console.error("Error in extractI24NewsVideo: " + e);
        if(onError) {
            onError("Error in i24news extraction: " + e);
        }
    }
}

function authenticateI24News(onSuccess, onError) {
    try {
        console.debug("Starting i24news authentication...");
        
        // Build authentication URL
        var authUrl = "https://api.i24news.wiztivi.io/authenticate?userName=I24News&hardwareId=2025-03-05T21:04:04.687&hardwareIdType=browser";
        
        // Send GET request to authenticate
        var result = sendHTTPRequest(req, authUrl, "GET", {}, {}, true);
        
        console.debug("Authentication response received: " + result.message);
        
        // Parse the JSON response
        var authResponse = null;
        try {
            authResponse = JSON.parse(result.message);
        } catch(parseError) {
            console.error("Failed to parse authentication response: " + parseError);
            if(onError) {
                onError("Failed to parse authentication response: " + parseError);
            }
            return;
        }
        
        // Check if accessToken exists
        if(!authResponse.accessToken) {
            console.error("accessToken not found in authentication response");
            console.debug("Full response: " + JSON.stringify(authResponse));
            if(onError) {
                onError("accessToken not found in authentication response");
            }
            return;
        }
        
        // Print and save the accessToken
        var accessToken = authResponse.accessToken;
        console.debug("✓ accessToken obtained successfully: " + accessToken);
        console.info("i24news accessToken: " + accessToken);
        
        // Call success callback with the token
        if(onSuccess) {
            onSuccess(accessToken);
        }
        
    } catch(e) {
        console.error("Authentication error: " + e);
        if(onError) {
            onError("Authentication error: " + e);
        }
    }
}

function getI24NewsCredentials(accessToken, onSuccess, onError) {
    try {
        console.debug("Getting i24news credentials with accessToken...");
        
        // Build credentials URL
        var credUrl = "https://api.i24news.wiztivi.io/authenticate/credentials?idToken=" + accessToken;
        
        // Build Authorization header with Bearer token
        var headers = {
            "Authorization": "Bearer " + accessToken
        };
        
        // Send GET request to get credentials
        var result = sendHTTPRequest(req, credUrl, "GET", headers, {}, true);
        
        console.debug("Credentials response received: " + result.message);
        
        // Parse the JSON response
        var credResponse = null;
        try {
            credResponse = JSON.parse(result.message);
        } catch(parseError) {
            console.error("Failed to parse credentials response: " + parseError);
            if(onError) {
                onError("Failed to parse credentials response: " + parseError);
            }
            return;
        }
        
        // Check if accessKeyId exists
        if(!credResponse.accessKeyId) {
            console.error("accessKeyId not found in credentials response");
            console.debug("Full response: " + JSON.stringify(credResponse));
            if(onError) {
                onError("accessKeyId not found in credentials response");
            }
            return;
        }
        
        // Print and save the credentials
        var accessKeyId = credResponse.accessKeyId;
        console.debug("✓ accessKeyId obtained successfully: " + accessKeyId);
        console.info("i24news accessKeyId: " + accessKeyId);
        
        // Call success callback with the credentials object
        if(onSuccess) {
            onSuccess(credResponse);
        }
        
    } catch(e) {
        console.error("Credentials error: " + e);
        if(onError) {
            onError("Credentials error: " + e);
        }
    }
}

function getI24NewsContents(accessToken, contentId, onSuccess, onError) {
    try {
        console.debug("Getting i24news contents with accessToken...");
        
        // Build contents URL
        var contentsUrl = "https://api.i24news.wiztivi.io/contents?provider=brightcove&type=DYNAMIC&key=channel&value=all";
        
        // Build Authorization header with Bearer token
        var headers = {
            "Authorization": "Bearer " + accessToken
        };
        
        // Send GET request to get contents
        var result = sendHTTPRequest(req, contentsUrl, "GET", headers, {}, true);
        
        console.debug("Contents response received");
        
        // Parse the JSON response
        var contentsResponse = null;
        try {
            contentsResponse = JSON.parse(result.message);
        } catch(parseError) {
            console.error("Failed to parse contents response: " + parseError);
            if(onError) {
                onError("Failed to parse contents response: " + parseError);
            }
            return;
        }
        
        // Verify that the response is an array
        if(!Array.isArray(contentsResponse)) {
            console.error("Contents response is not an array");
            console.debug("Response type: " + typeof contentsResponse);
            if(onError) {
                onError("Contents response is not an array");
            }
            return;
        }
        
        console.debug("✓ Contents response is an array with " + contentsResponse.length + " items");
        // print the array
        console.debug("Contents items: " + contentsResponse.map(function(c) { return c.id; }).join(", "));
        
        // If no contentId specified, use the first available or default to "he" (Hebrew)
        var targetId = contentId || "he";
        console.debug("Looking for content with id: " + targetId);
        
        // Search for the content with matching id
        var foundContent = null;
        for(let i = 0; i < contentsResponse.length; i++) {
            var content = contentsResponse[i];
            if(content.id === targetId) {
                foundContent = content;
                break;
            }
        }
        
        if(!foundContent) {
            console.error("Content with id '" + targetId + "' not found");
            console.debug("Available content ids: " + contentsResponse.map(function(c) { return c.id; }).join(", "));
            if(onError) {
                onError("Content with id '" + targetId + "' not found");
            }
            return;
        }
        
        console.debug("✓ Found content with id: " + targetId);
        
        // Extract m3u8 URL from customFields
        if(!foundContent.customFields || !foundContent.customFields.m3u8) {
            console.error("m3u8 URL not found in customFields for id: " + targetId);
            console.debug("Available customFields: " + JSON.stringify(foundContent.customFields));
            if(onError) {
                onError("m3u8 URL not found in customFields");
            }
            return;
        }
        
        var m3u8Url = foundContent.customFields.m3u8;
        console.debug("✓ m3u8 URL extracted successfully");
        console.info("i24news m3u8 URL: " + m3u8Url);
        
        // Call success callback with the resolved video URL
        if(onSuccess) {
            onSuccess(m3u8Url);
        }
        
    } catch(e) {
        console.error("Contents error: " + e);
        if(onError) {
            onError("Contents error: " + e);
        }
    }
}

function searchI24News(req, query) {
    // TODO: Add implementation for searching i24news content
    // This function should:
    // 1. Search for content on i24news matching the query
    // 2. Return a results object with content available on i24news
    // 3. Format: { "i24news": [ {title, id, type, ...}, ... ] }
    
    console.debug("searchI24News: Implementation pending");
    
    return {};
}
