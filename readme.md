<a name="module_al-files-service"></a>
## al-files-service
Exposes operations supported by awardletter files RESTful API


* [al-files-service](#module_al-files-service)
  * [.upload(Root, Authorization, content)](#module_al-files-service.upload) ⇒ <code>function</code>
  * [.getFile(Root, Authorization, string)](#module_al-files-service.getFile) ⇒ <code>function</code>
  * [.getRecords(Root, Authorization, string)](#module_al-files-service.getRecords) ⇒ <code>function</code>

<a name="module_al-files-service.upload"></a>
### al-files-service.upload(Root, Authorization, content) ⇒ <code>function</code>
upload a file as application/octet-stream content

**Kind**: static method of <code>[al-files-service](#module_al-files-service)</code>  
**Returns**: <code>function</code> - A promise.  The promise will resolve with an Id (fileId) for the uploaded file.  Any response whose status code is not 2xx will result in a rejected promise.  

| Param | Type | Description |
| --- | --- | --- |
| Root | <code>rootUrl</code> | url of awardletter API |
| Authorization | <code>authorization</code> | header value |
| content | <code>object</code> | JSON content to be uploaded |

<a name="module_al-files-service.getFile"></a>
### al-files-service.getFile(Root, Authorization, string) ⇒ <code>function</code>
retrieves file processing results summary

**Kind**: static method of <code>[al-files-service](#module_al-files-service)</code>  
**Returns**: <code>function</code> - A promise.  A resolved promise will return the the file processing results summary.  Any response with a status code that is not 2xx will result in a rejected promise.  

| Param | Type | Description |
| --- | --- | --- |
| Root | <code>rootUrl</code> | url of awardletter API |
| Authorization | <code>authorization</code> | header value |
| string | <code>fileId</code> | The Id of the file being retrieved |

<a name="module_al-files-service.getRecords"></a>
### al-files-service.getRecords(Root, Authorization, string) ⇒ <code>function</code>
get all records for a given file

**Kind**: static method of <code>[al-files-service](#module_al-files-service)</code>  
**Returns**: <code>function</code> - Returns a promise of the results.  A resolved promise returns all records for a given file.  Any response with a status code that is not 2xx will result in a rejected promise.  

| Param | Type | Description |
| --- | --- | --- |
| Root | <code>rootUrl</code> | url of awardletter API |
| Authorization | <code>authorization</code> | header value |
| string | <code>fileId</code> | The Id of the file for which records are being retrieved |

