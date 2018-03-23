# Congressional Record Daily

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> The Congressional Record is the official record of the proceedings and debates of the United States Congress. It is published daily when Congress is in session. FDsys contains Congressional record volumes from 140 (1994) to the present. At the back of each daily issue is the "Daily Digest," which summarizes the day's floor and committee activities. [About the Congressional Record ![link-external][icon-octicon-link-external]](https://www.gpo.gov/help/index.html#about_congressional_record.htm).
>
> FDsys - Browse CREC . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CREC> ![link-external][icon-octicon-link-external]

## `govinfoLinkService.CongressionalRecordDaily`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                               | HTTP request                                      | Description                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| [**crecSectionFetchUsingGET**](CongressionalRecordDaily.md#crecSectionFetchUsingGET) | **GET** /crec/section/{section}                   | Query: section, publish date OR most recent       |
| [**crecTypeFetchUsingGET**](CongressionalRecordDaily.md#crecTypeFetchUsingGET)       | **GET** /crec/cas/{congress}/{billtype}/{billnum} | Query: congress, bill number, bill type           |
| [**crecTypeFetchUsingGET1**](CongressionalRecordDaily.md#crecTypeFetchUsingGET1)     | **GET** /crec/type/{type}                         | Query: document type, publish date OR most recent |
| [**crecVolumeFetchUsingGET**](CongressionalRecordDaily.md#crecVolumeFetchUsingGET)   | **GET** /crec/{volume}/{pageprefix}/{page}        | Query: volume, page prefix, page number           |

<a name="crecSectionFetchUsingGET"></a>

## **`crecSectionFetchUsingGET`**

> ```js
>  Object crecSectionFetchUsingGET(section, opts)
> ```

Query: section, publish date OR most recent

### Example

```javascript
const { CongressionalRecordDaily } = require('govinfo-link-js')

const api = new CongressionalRecordDaily()

const section = 'section_example' // String | This is the Congressional Record section. Values are dailydigest, senate, house, extensions.

const opts = {
  publishdate: 'publishdate_example', // String | If date is not provided, the most recent version of the Congressional Record section is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are mods, premis, details, context, related. Note: mods, premis, and details are returned at the package level because they are not available for section level granules.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.crecSectionFetchUsingGET(section, opts, callback)
```

### Parameters

| Name            | Type       | Description                                                                                                                                                                                                                                         | Notes      |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **section**     | **String** | This is the Congressional Record section. Values are dailydigest, senate, house, extensions.                                                                                                                                                        |
| **publishdate** | **String** | If date is not provided, the most recent version of the Congressional Record section is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.                                                                     | [optional] |
| **linkType**    | **String** | This is the format of the returned document. Default is pdf. Other values are mods, premis, details, context, related. Note: mods, premis, and details are returned at the package level because they are not available for section level granules. | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="crecTypeFetchUsingGET"></a>

## **`crecTypeFetchUsingGET`**

> ```js
> Object crecTypeFetchUsingGET(congress, billtype, billnum, opts)
> ```

Query: congress, bill number, bill type

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CongressionalRecordDaily()

const congress = 'congress_example' // String | This is the numerical Congress number. Sample value is 115.

const billtype = 'billtype_example' // String | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.

const billnum = 56 // Number | This is the numerical bill number. Sample value is 997.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is html. Other values are pdf, details, context, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.crecTypeFetchUsingGET(congress, billtype, billnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                    | Notes      |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **String** | This is the numerical Congress number. Sample value is 115.                                                    |
| **billtype** | **String** | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.                                                  |
| **billnum**  | **Number** | This is the numerical bill number. Sample value is 997.                                                        |
| **linkType** | **String** | This is the format of the returned document. Default is html. Other values are pdf, details, context, related. | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="crecTypeFetchUsingGET1"></a>

## **`crecTypeFetchUsingGET1`**

> ```js
> Object crecTypeFetchUsingGET1(type, opts)
> ```

Query: document type, publish date OR most recent

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CongressionalRecordDaily()

const type = 'type_example' // String | This is the type of Congressional Record document within each section. Please see tables below for values.

const opts = {
  publishdate: 'publishdate_example', // String | If date is not provided, the most recent version of the Congressional Record document is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.crecTypeFetchUsingGET1(type, opts, callback)
```

### Parameters

| Name            | Type       | Description                                                                                                                                                                      | Notes      |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **type**        | **String** | This is the type of Congressional Record document within each section. Please see tables below for values.                                                                       |
| **publishdate** | **String** | If date is not provided, the most recent version of the Congressional Record document is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent. | [optional] |
| **linkType**    | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.                                                     | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="crecVolumeFetchUsingGET"></a>

## **`crecVolumeFetchUsingGET`**

> ```js
> Object crecVolumeFetchUsingGET(volume, pageprefix, page, opts)
> ```

Query: volume, page prefix, page number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CongressionalRecordDaily()

const volume = 56 // Number | This is the numerical volume number. Sample value is 158.

const pageprefix = 'pageprefix_example' // String | This is the page prefix that corresponds to the Congressional Record section. Sections are Daily Digest, House, Senate, and Extensions of Remarks. Values are d, h, s, e.

const page = 'page_example' // String | This is the numerical page number. Congressional record pages are numbered consecutively in a section within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 234.

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
api.crecVolumeFetchUsingGET(volume, pageprefix, page, opts, callback)
```

### Parameters

| Name           | Type       | Description                                                                                                                                                                                                                                                                                                                                               | Notes      |
| -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **volume**     | **Number** | This is the numerical volume number. Sample value is 158.                                                                                                                                                                                                                                                                                                 |
| **pageprefix** | **String** | This is the page prefix that corresponds to the Congressional Record section. Sections are Daily Digest, House, Senate, and Extensions of Remarks. Values are d, h, s, e.                                                                                                                                                                                 |
| **page**       | **String** | This is the numerical page number. Congressional record pages are numbered consecutively in a section within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 234. |
| **linkType**   | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.                                                                                                                                                                                                                              | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
