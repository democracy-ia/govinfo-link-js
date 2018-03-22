# govinfoLinkService.CompilationOfPresidentialDocuments

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cpdDcpdFetchUsingGET**](CompilationOfPresidentialDocuments.md#cpdDcpdFetchUsingGET) | **GET** /cpd/{year} | Query: dcpd type OR dcpd number
[**cpdFetchUsingGET**](CompilationOfPresidentialDocuments.md#cpdFetchUsingGET) | **GET** /cpd/{doctype}/{docnum} | Query: document type, document number


<a name="cpdDcpdFetchUsingGET"></a>
# **cpdDcpdFetchUsingGET**
> Object cpdDcpdFetchUsingGET(year, opts)

Query: dcpd type OR dcpd number

Query: dcpd type OR dcpd number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CompilationOfPresidentialDocuments();

var year = 56; // Number | This is the four digit numerical year. The first Daily Compilation of Presidential Documents (dcpd) document was published on 1/20/2009. Sample value is 2010.

var opts = { 
  'dcpdnumber': 56, // Number | This is the five digit numerical identifier on a dcpd document. It does not include the four digit year. Document are numbered sequentially within each year. Leading zeros can be supplied but are not required. Sample value is 00123. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
  'dcpdtype': "dcpdtype_example", // String | This is the type of dcpd document. Values are digest, nominations, checklist, actsapproved. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cpdDcpdFetchUsingGET(year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| This is the four digit numerical year. The first Daily Compilation of Presidential Documents (dcpd) document was published on 1/20/2009. Sample value is 2010. | 
 **dcpdnumber** | **Number**| This is the five digit numerical identifier on a dcpd document. It does not include the four digit year. Document are numbered sequentially within each year. Leading zeros can be supplied but are not required. Sample value is 00123. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber. | [optional] 
 **dcpdtype** | **String**| This is the type of dcpd document. Values are digest, nominations, checklist, actsapproved. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="cpdFetchUsingGET"></a>
# **cpdFetchUsingGET**
> Object cpdFetchUsingGET(doctype, docnum, opts)

Query: document type, document number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CompilationOfPresidentialDocuments();

var doctype = "doctype_example"; // String | Values are executiveorder, proclamation, determination.

var docnum = 56; // Number | This is the numerical document number. Sample value is 13514.

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
apiInstance.cpdFetchUsingGET(doctype, docnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctype** | **String**| Values are executiveorder, proclamation, determination. | 
 **docnum** | **Number**| This is the numerical document number. Sample value is 13514. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

