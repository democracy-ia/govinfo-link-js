# govinfoLinkService.FederalRegister

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**frDocFetchUsingGET**](FederalRegister.md#frDocFetchUsingGET) | **GET** /fr/{frdocnum} | Query: Federal Register document number
[**frVolumeFetchUsingGET**](FederalRegister.md#frVolumeFetchUsingGET) | **GET** /fr/{volume}/{page} | Query: volume, page number


<a name="frDocFetchUsingGET"></a>
# **frDocFetchUsingGET**
> Object frDocFetchUsingGET(frdocnum, opts)

Query: Federal Register document number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.FederalRegister();

var frdocnum = "frdocnum_example"; // String | Required - The is the FR doc number that is listed at the end of each Federal Register document. Sample value is 2010-32535.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.frDocFetchUsingGET(frdocnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frdocnum** | **String**| Required - The is the FR doc number that is listed at the end of each Federal Register document. Sample value is 2010-32535. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="frVolumeFetchUsingGET"></a>
# **frVolumeFetchUsingGET**
> Object frVolumeFetchUsingGET(volume, page, opts)

Query: volume, page number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.FederalRegister();

var volume = 56; // Number | This is the numerical volume number. Sample value is 76.

var page = 56; // Number | This is the numerical page number. Federal Register pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 575.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.frVolumeFetchUsingGET(volume, page, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume** | **Number**| This is the numerical volume number. Sample value is 76. | 
 **page** | **Number**| This is the numerical page number. Federal Register pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 575. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

