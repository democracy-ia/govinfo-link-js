# govinfoLinkService.PublicAndPrivateLaws

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**plawBillFetchUsingGET**](PublicAndPrivateLaws.md#plawBillFetchUsingGET) | **GET** /plaw/{congress}/{associatedbillnum} | Query: associated bill number, congress
[**plawStatuteFetchUsingGET**](PublicAndPrivateLaws.md#plawStatuteFetchUsingGET) | **GET** /plaw/{statutecitation} | Query: Statutes at Large citation
[**plawTypeFetchUsingGET**](PublicAndPrivateLaws.md#plawTypeFetchUsingGET) | **GET** /plaw/{congress}/{lawtype}/{lawnum} | Query: congress, law type, law number


<a name="plawBillFetchUsingGET"></a>
# **plawBillFetchUsingGET**
> Object plawBillFetchUsingGET(congress, associatedbillnum, opts)

Query: associated bill number, congress

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.PublicAndPrivateLaws();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 111.

var associatedbillnum = "associatedbillnum_example"; // String | Public and private laws are associated with a primary bill number. The primary bill number is listed at the beginning of the law. Sample value is S. 3397.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.plawBillFetchUsingGET(congress, associatedbillnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 111. | 
 **associatedbillnum** | **String**| Public and private laws are associated with a primary bill number. The primary bill number is listed at the beginning of the law. Sample value is S. 3397. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="plawStatuteFetchUsingGET"></a>
# **plawStatuteFetchUsingGET**
> Object plawStatuteFetchUsingGET(statutecitation, opts)

Query: Statutes at Large citation

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.PublicAndPrivateLaws();

var statutecitation = "statutecitation_example"; // String | A Statutes at Large citation is listed at the top of each page of a law. Use a + (plus sign) in place of spaces in the citation. Sample value is 124+stat+2859.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.plawStatuteFetchUsingGET(statutecitation, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statutecitation** | **String**| A Statutes at Large citation is listed at the top of each page of a law. Use a + (plus sign) in place of spaces in the citation. Sample value is 124+stat+2859. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="plawTypeFetchUsingGET"></a>
# **plawTypeFetchUsingGET**
> Object plawTypeFetchUsingGET(congress, lawtype, lawnum, opts)

Query: congress, law type, law number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.PublicAndPrivateLaws();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 111.

var lawtype = "lawtype_example"; // String | This is the law type. Laws can either be public laws or private laws. Values are public, private.

var lawnum = 56; // Number | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 78.

var opts = { 
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.plawTypeFetchUsingGET(congress, lawtype, lawnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 111. | 
 **lawtype** | **String**| This is the law type. Laws can either be public laws or private laws. Values are public, private. | 
 **lawnum** | **Number**| This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 78. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

