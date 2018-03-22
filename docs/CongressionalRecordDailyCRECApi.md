# govinfoLinkService.CongressionalRecordDaily

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crecSectionFetchUsingGET**](CongressionalRecordDaily.md#crecSectionFetchUsingGET) | **GET** /crec/section/{section} | Query: section, publish date OR most recent
[**crecTypeFetchUsingGET**](CongressionalRecordDaily.md#crecTypeFetchUsingGET) | **GET** /crec/cas/{congress}/{billtype}/{billnum} | Query: congress, bill number, bill type
[**crecTypeFetchUsingGET1**](CongressionalRecordDaily.md#crecTypeFetchUsingGET1) | **GET** /crec/type/{type} | Query: document type, publish date OR most recent
[**crecVolumeFetchUsingGET**](CongressionalRecordDaily.md#crecVolumeFetchUsingGET) | **GET** /crec/{volume}/{pageprefix}/{page} | Query: volume, page prefix, page number


<a name="crecSectionFetchUsingGET"></a>
# **crecSectionFetchUsingGET**
> Object crecSectionFetchUsingGET(section, opts)

Query: section, publish date OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalRecordDaily();

var section = "section_example"; // String | This is the Congressional Record section. Values are dailydigest, senate, house, extensions.

var opts = { 
  'publishdate': "publishdate_example", // String | If date is not provided, the most recent version of the Congressional Record section is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are mods, premis, details, context, related. Note: mods, premis, and details are returned at the package level because they are not available for section level granules.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.crecSectionFetchUsingGET(section, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **String**| This is the Congressional Record section. Values are dailydigest, senate, house, extensions. | 
 **publishdate** | **String**| If date is not provided, the most recent version of the Congressional Record section is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are mods, premis, details, context, related. Note: mods, premis, and details are returned at the package level because they are not available for section level granules. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="crecTypeFetchUsingGET"></a>
# **crecTypeFetchUsingGET**
> Object crecTypeFetchUsingGET(congress, billtype, billnum, opts)

Query: congress, bill number, bill type

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalRecordDaily();

var congress = "congress_example"; // String | This is the numerical Congress number. Sample value is 115.

var billtype = "billtype_example"; // String | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.

var billnum = 56; // Number | This is the numerical bill number. Sample value is 997.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is html. Other values are pdf, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.crecTypeFetchUsingGET(congress, billtype, billnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **String**| This is the numerical Congress number. Sample value is 115. | 
 **billtype** | **String**| Values are hr, s, hjres, sjres, hconres, sconres, hres, sres. | 
 **billnum** | **Number**| This is the numerical bill number. Sample value is 997. | 
 **linkType** | **String**| This is the format of the returned document. Default is html. Other values are pdf, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="crecTypeFetchUsingGET1"></a>
# **crecTypeFetchUsingGET1**
> Object crecTypeFetchUsingGET1(type, opts)

Query: document type, publish date OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalRecordDaily();

var type = "type_example"; // String | This is the type of Congressional Record document within each section. Please see tables below for values.

var opts = { 
  'publishdate': "publishdate_example", // String | If date is not provided, the most recent version of the Congressional Record document is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.crecTypeFetchUsingGET1(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| This is the type of Congressional Record document within each section. Please see tables below for values. | 
 **publishdate** | **String**| If date is not provided, the most recent version of the Congressional Record document is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="crecVolumeFetchUsingGET"></a>
# **crecVolumeFetchUsingGET**
> Object crecVolumeFetchUsingGET(volume, pageprefix, page, opts)

Query: volume, page prefix, page number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalRecordDaily();

var volume = 56; // Number | This is the numerical volume number. Sample value is 158.

var pageprefix = "pageprefix_example"; // String | This is the page prefix that corresponds to the Congressional Record section. Sections are Daily Digest, House, Senate, and Extensions of Remarks. Values are d, h, s, e.

var page = "page_example"; // String | This is the numerical page number. Congressional record pages are numbered consecutively in a section within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 234.

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
apiInstance.crecVolumeFetchUsingGET(volume, pageprefix, page, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volume** | **Number**| This is the numerical volume number. Sample value is 158. | 
 **pageprefix** | **String**| This is the page prefix that corresponds to the Congressional Record section. Sections are Daily Digest, House, Senate, and Extensions of Remarks. Values are d, h, s, e. | 
 **page** | **String**| This is the numerical page number. Congressional record pages are numbered consecutively in a section within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 234. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

