# Congressional Reports

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> Congressional reports originate from congressional committees and deal with proposed legislation and issues under investigation. There are two types of reports:
>
> 1.  House and Senate Reports: Reports of congressional committees concerning proposed legislation and/or contain findings on matters under investigation.
>
> 1.  Senate Executive Reports: Reports of the Committee on Foreign Relations relating to treaties between the United States and foreign nations which have been submitted to the U.S. Senate for ratification, or are reports of various Senate committees regarding nomination of individuals.
>
> FDsys - Browse CRPT . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CRPT> ![link-external][icon-octicon-link-external]

## `govinfoLinkService.CongressionalReports`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                         | HTTP request                                   | Description                                 |
| ------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------- |
| [**crptBillFetchUsingGET**](CongressionalReports.md#crptBillFetchUsingGET)     | **GET** /crpt/{congress}/{associatedbillnum}   | Query: associated bill, congress            |
| [**crptReportFetchUsingGET**](CongressionalReports.md#crptReportFetchUsingGET) | **GET** /crpt/{congress}/{doctype}/{reportnum} | Query: congress, report type, report number |

<a name="crptBillFetchUsingGET"></a>

## **`crptBillFetchUsingGET`**

> ```js
> Object crptBillFetchUsingGET(congress, associatedbillnum, opts)
> ```

Query: associated bill, congress

### Example

```javascript
const { CongressionalReports } = require('govinfo-link-js')

const api = new CongressionalReports()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 112.

const associatedbillnum = 'associatedbillnum_example' // String | Congressional reports often accompany a specific bill. Note: some associated bill numbers may produce multiple results. This will occur when two different reports are issues to accompany a single bill within a single Congress. In this case, the desired report may not be returned. When enabled, the API List Service will return a reference to both reports. Sample value is h.r.2297.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.crptBillFetchUsingGET(congress, associatedbillnum, opts, callback)
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                    | Notes      |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**          | **Number** | This is the numerical Congress number. Sample value is 112.                                                                                                                                                                                                                                                                                                                                    |
| **associatedbillnum** | **String** | Congressional reports often accompany a specific bill. Note: some associated bill numbers may produce multiple results. This will occur when two different reports are issues to accompany a single bill within a single Congress. In this case, the desired report may not be returned. When enabled, the API List Service will return a reference to both reports. Sample value is h.r.2297. |
| **linkType**          | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.                                                                                                                                                                                                                                                                   | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="crptReportFetchUsingGET"></a>

## **`crptReportFetchUsingGETGET`**

```js
> Object crptReportFetchUsingGET(congress, doctype, reportnum, opts)
```

Query: congress, report type, report number

### Example

```javascript
const { CongressionalReports } = require('govinfo-link-js')

const api = new CongressionalReports()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 112.

const doctype = 'doctype_example' // String | This is the congressional report type. Congressional reports can either be house reports, senate reports, or senate executive reports. Values are hrpt, srpt, erpt.

const reportnum = 56 // Number | This is the numerical report number. Congressional reports are numbered consecutively within a Congress for each report type. Sample value is 154.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.crptReportFetchUsingGET(congress, doctype, reportnum, opts, callback)
```

### Parameters

| Name          | Type       | Description                                                                                                                                                         | Notes      |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**  | **Number** | This is the numerical Congress number. Sample value is 112.                                                                                                         |
| **doctype**   | **String** | This is the congressional report type. Congressional reports can either be house reports, senate reports, or senate executive reports. Values are hrpt, srpt, erpt. |
| **reportnum** | **Number** | This is the numerical report number. Congressional reports are numbered consecutively within a Congress for each report type. Sample value is 154.                  |
| **linkType**  | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.                                        | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
