# govinfoLinkService.CodeOfFederalRegulations

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cfrFetchUsingGET**](CodeOfFederalRegulations.md#cfrFetchUsingGET) | **GET** /cfr/{titlenum}/{partnum} | Query: title number, part number, section number, year OR most recent


<a name="cfrFetchUsingGET"></a>
# **cfrFetchUsingGET**
> Object cfrFetchUsingGET(titlenum, partnum, opts)

Query: title number, part number, section number, year OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CodeOfFederalRegulations();

var titlenum = 56; // Number | Title number. Sample value is 3.

var partnum = "partnum_example"; // String | Part number. Sample value is 100

var opts = { 
  'sectionnum': "sectionnum_example", // String | This is the section number. Sample value is 1. If section number is not provided the entire part will be returned.
  'year': "year_example", // String | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the CFR section or part is returned. Default is most recent. Sample value is 2011.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cfrFetchUsingGET(titlenum, partnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **titlenum** | **Number**| Title number. Sample value is 3. | 
 **partnum** | **String**| Part number. Sample value is 100 | 
 **sectionnum** | **String**| This is the section number. Sample value is 1. If section number is not provided the entire part will be returned. | [optional] 
 **year** | **String**| This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the CFR section or part is returned. Default is most recent. Sample value is 2011. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

