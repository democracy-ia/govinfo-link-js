# govinfoLinkService.CongressionalDocuments

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cdocFetchUsingGET**](CongressionalDocuments.md#cdocFetchUsingGET) | **GET** /cdoc/{congress}/{doctype}/{docnum} | Query: congress, document type, document number
[**cdocJacketFetchUsingGET**](CongressionalDocuments.md#cdocJacketFetchUsingGET) | **GET** /cdoc/{congress}/{jacketid} | Query: congress, jacket number


<a name="cdocFetchUsingGET"></a>
# **cdocFetchUsingGET**
> Object cdocFetchUsingGET(congress, doctype, docnum, opts)

Query: congress, document type, document number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalDocuments();

var congress = 56; // Number | This is the numberical Congress number. Sample value is 112.

var doctype = "doctype_example"; // String | This is the congressional document type. Congressional documents can either be house documents, senate documents, or treaty documents. Values are hdoc, sdoc, tdoc.

var docnum = 56; // Number | This is the numerical document number. Congressional documents are numbered consecutively within a Congress for each document type. Sample value is 15. Note: congressional documents that have been processed through the GPO collection are currently not available through the FDsys API.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cdocFetchUsingGET(congress, doctype, docnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numberical Congress number. Sample value is 112. | 
 **doctype** | **String**| This is the congressional document type. Congressional documents can either be house documents, senate documents, or treaty documents. Values are hdoc, sdoc, tdoc. | 
 **docnum** | **Number**| This is the numerical document number. Congressional documents are numbered consecutively within a Congress for each document type. Sample value is 15. Note: congressional documents that have been processed through the GPO collection are currently not available through the FDsys API. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="cdocJacketFetchUsingGET"></a>
# **cdocJacketFetchUsingGET**
> Object cdocJacketFetchUsingGET(congress, jacketid, opts)

Query: congress, jacket number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalDocuments();

var congress = 56; // Number | This is the numberical Congress number. Sample value is 112.

var jacketid = "jacketid_example"; // String | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 66-208.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cdocJacketFetchUsingGET(congress, jacketid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numberical Congress number. Sample value is 112. | 
 **jacketid** | **String**| This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 66-208. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

