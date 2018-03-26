# Congressional Documents

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> The Congressional Documents collection consists of House Documents, Senate Documents, and Senate Treaty Documents. House and Senate documents contain various kinds of materials ordered to be printed by both chambers of Congress. Documents can include reports of executive departments and agencies, as well as committee prints, that were ordered to be printed as documents. Senate Treaty Documents contain the text of a treaty as it is submitted to the U. S. Senate for ratification by the President of the United States. [About Congressional Documents ![link-external][icon-octicon-link-external]](https://www.gpo.gov/help/index.html#about_congressional_documents.htm).
>
> FDsys - Browse CDOC . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CDOC> ![link-external][icon-octicon-link-external]

## `govinfo.CongressionalDocuments`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                           | HTTP request                                | Description                                     |
| -------------------------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| [**cdocFetchUsingGET**](CongressionalDocuments.md#cdocFetchUsingGET)             | **GET** /cdoc/{congress}/{doctype}/{docnum} | Query: congress, document type, document number |
| [**cdocJacketFetchUsingGET**](CongressionalDocuments.md#cdocJacketFetchUsingGET) | **GET** /cdoc/{congress}/{jacketid}         | Query: congress, jacket number                  |

<a name="cdocFetchUsingGET"></a>

## **`cdocFetchUsingGET`**

> ```js
> Object cdocFetchUsingGET(congress, doctype, docnum, opts)
> ```

Query: congress, document type, document number

### Example

```javascript
const { CongressionalDocuments } = require('govinfo-link-js')

const api = new CongressionalDocuments()

const congress = 56 // Number | This is the numberical Congress number. Sample value is 112.

const doctype = 'doctype_example' // String | This is the congressional document type. Congressional documents can either be house documents, senate documents, or treaty documents. Values are hdoc, sdoc, tdoc.

const docnum = 56 // Number | This is the numerical document number. Congressional documents are numbered consecutively within a Congress for each document type. Sample value is 15. Note: congressional documents that have been processed through the GPO collection are currently not available through the FDsys API.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.cdocFetchUsingGET(congress, doctype, docnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                                                                                                                                  | Notes      |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numberical Congress number. Sample value is 112.                                                                                                                                                                                                                                 |
| **doctype**  | **String** | This is the congressional document type. Congressional documents can either be house documents, senate documents, or treaty documents. Values are hdoc, sdoc, tdoc.                                                                                                                          |
| **docnum**   | **Number** | This is the numerical document number. Congressional documents are numbered consecutively within a Congress for each document type. Sample value is 15. Note: congressional documents that have been processed through the GPO collection are currently not available through the FDsys API. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                                                                                                                          | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="cdocJacketFetchUsingGET"></a>

## **`cdocJacketFetchUsingGETGET`**

> Object cdocJacketFetchUsingGET(congress, jacketid, opts)

Query: congress, jacket number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-js')

const api = new CongressionalDocuments()

const congress = 56 // Number | This is the numberical Congress number. Sample value is 112.

const jacketid = 'jacketid_example' // String | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 66-208.

const opts = {
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.cdocJacketFetchUsingGET(congress, jacketid, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                         | Notes      |
| ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numberical Congress number. Sample value is 112.                                                                                                                        |
| **jacketid** | **String** | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 66-208. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                 | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
