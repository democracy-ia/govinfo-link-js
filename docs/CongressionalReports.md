# govinfoLinkService.CongressionalReports

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crptBillFetchUsingGET**](CongressionalReports.md#crptBillFetchUsingGET) | **GET** /crpt/{congress}/{associatedbillnum} | Query: associated bill, congress
[**crptReportFetchUsingGET**](CongressionalReports.md#crptReportFetchUsingGET) | **GET** /crpt/{congress}/{doctype}/{reportnum} | Query: congress, report type, report number


<a name="crptBillFetchUsingGET"></a>
# **crptBillFetchUsingGET**
> Object crptBillFetchUsingGET(congress, associatedbillnum, opts)

Query: associated bill, congress

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalReports();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 112.

var associatedbillnum = "associatedbillnum_example"; // String | Congressional reports often accompany a specific bill. Note: some associated bill numbers may produce multiple results. This will occur when two different reports are issues to accompany a single bill within a single Congress. In this case, the desired report may not be returned. When enabled, the API List Service will return a reference to both reports. Sample value is h.r.2297.

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
apiInstance.crptBillFetchUsingGET(congress, associatedbillnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 112. | 
 **associatedbillnum** | **String**| Congressional reports often accompany a specific bill. Note: some associated bill numbers may produce multiple results. This will occur when two different reports are issues to accompany a single bill within a single Congress. In this case, the desired report may not be returned. When enabled, the API List Service will return a reference to both reports. Sample value is h.r.2297. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="crptReportFetchUsingGET"></a>
# **crptReportFetchUsingGET**
> Object crptReportFetchUsingGET(congress, doctype, reportnum, opts)

Query: congress, report type, report number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalReports();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 112.

var doctype = "doctype_example"; // String | This is the congressional report type. Congressional reports can either be house reports, senate reports, or senate executive reports. Values are hrpt, srpt, erpt.

var reportnum = 56; // Number | This is the numerical report number. Congressional reports are numbered consecutively within a Congress for each report type. Sample value is 154.

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
apiInstance.crptReportFetchUsingGET(congress, doctype, reportnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 112. | 
 **doctype** | **String**| This is the congressional report type. Congressional reports can either be house reports, senate reports, or senate executive reports. Values are hrpt, srpt, erpt. | 
 **reportnum** | **Number**| This is the numerical report number. Congressional reports are numbered consecutively within a Congress for each report type. Sample value is 154. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

