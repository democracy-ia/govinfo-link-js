# govinfoLinkService.CongressionalHearings

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chrgHouseFetchUsingGET**](CongressionalHearings.md#chrgHouseFetchUsingGET) | **GET** /chrg/{congress}/house/{committee}/{serialnumber} | Query: congress, chamber, committee, house serial number
[**chrgJacketFetchUsingGET**](CongressionalHearings.md#chrgJacketFetchUsingGET) | **GET** /chrg/{congress}/{jacketid} | Query: congress, jacket number
[**chrgSenateFetchUsingGET**](CongressionalHearings.md#chrgSenateFetchUsingGET) | **GET** /chrg/{congress}/senate/{hearingnumber} | Query: congress, chamber, senate hearing number


<a name="chrgHouseFetchUsingGET"></a>
# **chrgHouseFetchUsingGET**
> Object chrgHouseFetchUsingGET(congress, committee, serialnumber, opts)

Query: congress, chamber, committee, house serial number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalHearings();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 109.

var committee = "committee_example"; // String | This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is energy.

var serialnumber = 56; // Number | This is the numerical house committee serial number. House hearings are not numbered consecutively across committees within a Congress. For example, 109-138 could exist for both the Energy Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 138.

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
apiInstance.chrgHouseFetchUsingGET(congress, committee, serialnumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 109. | 
 **committee** | **String**| This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is energy. | 
 **serialnumber** | **Number**| This is the numerical house committee serial number. House hearings are not numbered consecutively across committees within a Congress. For example, 109-138 could exist for both the Energy Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 138. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="chrgJacketFetchUsingGET"></a>
# **chrgJacketFetchUsingGET**
> Object chrgJacketFetchUsingGET(congress, jacketid, opts)

Query: congress, jacket number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalHearings();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 105.

var jacketid = "jacketid_example"; // String | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 48-707.

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
apiInstance.chrgJacketFetchUsingGET(congress, jacketid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 105. | 
 **jacketid** | **String**| This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 48-707. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="chrgSenateFetchUsingGET"></a>
# **chrgSenateFetchUsingGET**
> Object chrgSenateFetchUsingGET(congress, hearingnumber, opts)

Query: congress, chamber, senate hearing number

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalHearings();

var congress = 56; // Number | This is the numerical Congress number. Sample value is 112.

var hearingnumber = 56; // Number | This is the numerical Senate hearing number. Senate hearings are numbered consecutively across committees within a Congress. Sample value is 122.

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
apiInstance.chrgSenateFetchUsingGET(congress, hearingnumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **Number**| This is the numerical Congress number. Sample value is 112. | 
 **hearingnumber** | **Number**| This is the numerical Senate hearing number. Senate hearings are numbered consecutively across committees within a Congress. Sample value is 122. | 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

