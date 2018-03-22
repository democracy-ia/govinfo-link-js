# govinfoLinkService.CongressionalBills

All URIs are relative to *https://www.govinfo.gov/link*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billsFetchUsingGET**](CongressionalBills.md#billsFetchUsingGET) | **GET** /bills/{congress}/{billtype}/{billnum} | Query: bill number, bill type, congress, bill version OR most recent


<a name="billsFetchUsingGET"></a>
# **billsFetchUsingGET**
> Object billsFetchUsingGET(congress, billtype, billnum, opts)

Query: bill number, bill type, congress, bill version OR most recent

### Example
```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var apiInstance = new govinfoLinkService.CongressionalBills();

var congress = "congress_example"; // String | This is the numerical Congress number. Sample value is 112.

var billtype = "billtype_example"; // String | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.

var billnum = 56; // Number | This is the numerical bill number. Sample value is 1027.

var opts = { 
  'billversion': "billversion_example", // String | If bill version is not provided, the most recent version of a bill is returned. Values are as, ash, ath, ats, cdh, cds, cph, cps, eah, eas, eh, enr, eph, es, fah, fph, fps, hdh, hds, ih, iph, ips, is, lth, lts, nat, oph, ops, pap, pav, pch, pcs, pp, pwah, rah, ras, rch, rcs, rdh, rds, re, reah, renr, res, rfh, rfs, rft, rh, rhuc, rih, ris, rs, rth, rts, s_p, sas, sc, mostrecent.
  'linkType': "linkType_example" // String | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billsFetchUsingGET(congress, billtype, billnum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **congress** | **String**| This is the numerical Congress number. Sample value is 112. | 
 **billtype** | **String**| Values are hr, s, hjres, sjres, hconres, sconres, hres, sres. | 
 **billnum** | **Number**| This is the numerical bill number. Sample value is 1027. | 
 **billversion** | **String**| If bill version is not provided, the most recent version of a bill is returned. Values are as, ash, ath, ats, cdh, cds, cph, cps, eah, eas, eh, enr, eph, es, fah, fph, fps, hdh, hds, ih, iph, ips, is, lth, lts, nat, oph, ops, pap, pav, pch, pcs, pp, pwah, rah, ras, rch, rcs, rdh, rds, re, reah, renr, res, rfh, rfs, rft, rh, rhuc, rih, ris, rs, rth, rts, s_p, sas, sc, mostrecent. | [optional] 
 **linkType** | **String**| This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, related. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

