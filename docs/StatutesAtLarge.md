# govinfoLinkService.StatutesAtLarge

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statuteTypeFetchUsingGET**](StatutesAtLarge.md#statuteTypeFetchUsingGET) | **GET** /statute/{congress}/{lawtype}/{lawnum} | Query: congress, law type, law number
[**statuteVolumeFetchUsingGET**](StatutesAtLarge.md#statuteVolumeFetchUsingGET) | **GET** /statute/{volume}/{page} | Query: volume, page number


<a name="statuteTypeFetchUsingGET"></a>
# **statuteTypeFetchUsingGET**
> Object statuteTypeFetchUsingGET(congress, lawtype, lawnum, opts)

Query: congress, law type, law number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.StatutesAtLarge();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 108.

var lawtype = "lawtype_example"; // String | This is the law type. Laws can either be public laws or private laws. Values are public, private.

var lawnum = 56; // Number | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 481.

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
apiInstance.statuteTypeFetchUsingGET(congress, lawtype, lawnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 108. | 
 **lawtype** | **String**| This is the law type. Laws can either be public laws or private laws. Values are public, private. | 
 **lawnum** | **Number**| This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 481. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="statuteVolumeFetchUsingGET"></a>
# **statuteVolumeFetchUsingGET**
> Object statuteVolumeFetchUsingGET(volume, page, opts)

Query: volume, page number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.StatutesAtLarge();

var volume = 56; // Number | This is the numerical volume number. Sample value is 118.

var page = 56; // Number | This is the numerical page number. Statutes at Large pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 3910.

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
apiInstance.statuteVolumeFetchUsingGET(volume, page, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume** | **Number**| This is the numerical volume number. Sample value is 118. | 
 **page** | **Number**| This is the numerical page number. Statutes at Large pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 3910. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

