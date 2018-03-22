# govinfoLinkService.CongressionalCalendars

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ccalFetchUsingGET**](CongressionalCalendars.md#ccalFetchUsingGET) | **GET** /ccal/{chamber}/{section} | Query: chamber, section, publish date OR most recent


<a name="ccalFetchUsingGET"></a>
# **ccalFetchUsingGET**
> Object ccalFetchUsingGET(chamber, section, opts)

Query: chamber, section, publish date OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalCalendars();

var chamber = "chamber_example"; // String | This is the chamber of Congress. Values are house, senate.

var section = "section_example"; // String | This is the name of the calendar section. Recommend encoding special characters and spaces (%20). Common sample values include Unanimous Consent Agreements, Cover and Special Orders, Subjects on the Table, Union Calendar, Bills in Conference, Special Legislative Days.

var opts = { 
  'publishdate': "publishdate_example", // String | If date is not provided, the most recent version of the calendar is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ccalFetchUsingGET(chamber, section, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chamber** | **String**| This is the chamber of Congress. Values are house, senate. | 
 **section** | **String**| This is the name of the calendar section. Recommend encoding special characters and spaces (%20). Common sample values include Unanimous Consent Agreements, Cover and Special Orders, Subjects on the Table, Union Calendar, Bills in Conference, Special Legislative Days. | 
 **publishdate** | **String**| If date is not provided, the most recent version of the calendar is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

