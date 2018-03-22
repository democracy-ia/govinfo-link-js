# govinfoLinkService.UnitedStatesCode

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uscodeFetchUsingGET**](UnitedStatesCode.md#uscodeFetchUsingGET) | **GET** /uscode/{title}/{section} | Query: title number, type, section, year OR most recent


<a name="uscodeFetchUsingGET"></a>
# **uscodeFetchUsingGET**
> Object uscodeFetchUsingGET(title, section, opts)

Query: title number, type, section, year OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.UnitedStatesCode();

var title = 56; // Number | This is the title number. Sample value is 5.

var section = 56; // Number | This is the section number. Sample value is 104.

var opts = { 
  'type': "type_example", // String | This is the U.S. Code section type. Values are usc, uscappendix. Default value is usc.
  'year': "year_example", // String | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the U.S. Code section is returned. Default is most recent. Sample value is 2010.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uscodeFetchUsingGET(title, section, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **Number**| This is the title number. Sample value is 5. | 
 **section** | **Number**| This is the section number. Sample value is 104. | 
 **type** | **String**| This is the U.S. Code section type. Values are usc, uscappendix. Default value is usc. | [optional] 
 **year** | **String**| This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the U.S. Code section is returned. Default is most recent. Sample value is 2010. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

