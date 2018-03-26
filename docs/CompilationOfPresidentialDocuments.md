# Compilation of Presidential Documents

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> The Compilation of Presidential Documents collection consists of the Weekly Compilation of Presidential Documents and the Daily Compilation of Presidential Documents which are the official publications of materials released by the White House Press Secretary. The Compilation of Presidential Documents is published by the Office of the Federal Register (OFR), National Archives and Records Administration (NARA).
>
> FDsys - Browse Compilation of Presidential Documents . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CPD> ![link-external][icon-octicon-link-external]

## `govinfoLinkService.CompilationOfPresidentialDocuments`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                                 | HTTP request                    | Description                           |
| -------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| [**cpdDcpdFetchUsingGET**](CompilationOfPresidentialDocuments.md#cpdDcpdFetchUsingGET) | **GET** /cpd/{year}             | Query: dcpd type OR dcpd number       |
| [**cpdFetchUsingGET**](CompilationOfPresidentialDocuments.md#cpdFetchUsingGET)         | **GET** /cpd/{doctype}/{docnum} | Query: document type, document number |

<a name="cpdDcpdFetchUsingGET"></a>

# **`cpdDcpdFetchUsingGET`**

> ```js
> Object cpdDcpdFetchUsingGET(year, opts)
> ```

Query: dcpd type OR dcpd number

Query: dcpd type OR dcpd number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CompilationOfPresidentialDocuments()

const year = 56 // Number | This is the four digit numerical year. The first Daily Compilation of Presidential Documents (dcpd) document was published on 1/20/2009. Sample value is 2010.

const opts = {
  dcpdnumber: 56, // Number | This is the five digit numerical identifier on a dcpd document. It does not include the four digit year. Document are numbered sequentially within each year. Leading zeros can be supplied but are not required. Sample value is 00123. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
  dcpdtype: 'dcpdtype_example', // String | This is the type of dcpd document. Values are digest, nominations, checklist, actsapproved. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.cpdDcpdFetchUsingGET(year, opts, callback)
```

### Parameters

| Name           | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **year**       | **Number** | This is the four digit numerical year. The first Daily Compilation of Presidential Documents (dcpd) document was published on 1/20/2009. Sample value is 2010.                                                                                                                                                                                                                                                                                               |
| **dcpdnumber** | **Number** | This is the five digit numerical identifier on a dcpd document. It does not include the four digit year. Document are numbered sequentially within each year. Leading zeros can be supplied but are not required. Sample value is 00123. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber. | [optional] |
| **dcpdtype**   | **String** | This is the type of dcpd document. Values are digest, nominations, checklist, actsapproved. Either dcpdnumber or dcpdtype is required. If a document contains both a dcpdnumber and a dcpdtype, we recommend providing dcpdtype instead of dcpdnumber. If both are provided, precedence is given to dcpdnumber.                                                                                                                                              | [optional] |
| **linkType**   | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.                                                                                                                                                                                                                                                                                                                                          | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="cpdFetchUsingGET"></a>

## **`cpdFetchUsingGETGET`**

> Object cpdFetchUsingGET(doctype, docnum, opts)

Query: document type, document number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CompilationOfPresidentialDocuments()

const doctype = 'doctype_example' // String | Values are executiveorder, proclamation, determination.

const docnum = 56 // Number | This is the numerical document number. Sample value is 13514.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.cpdFetchUsingGET(doctype, docnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                         | Notes      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| **doctype**  | **String** | Values are executiveorder, proclamation, determination.                                                             |
| **docnum**   | **Number** | This is the numerical document number. Sample value is 13514.                                                       |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related. | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
