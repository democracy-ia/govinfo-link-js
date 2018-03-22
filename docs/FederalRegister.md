# Federal Register

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> Published by the Office of the Federal Register, National Archives and Records Administration (NARA), the Federal Register is the official daily publication for rules, proposed rules, and notices of Federal agencies and organizations, as well as executive orders and other presidential documents. [About the Federal Register](https://www.gpo.gov/help/index.html#about_federal_register.htm).
>
> FDsys - Browse Federal Register . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=FR> ![link-external][icon-octicon-link-external]

## `govinfoLinkService.FederalRegister`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                | HTTP request                | Description                             |
| --------------------------------------------------------------------- | --------------------------- | --------------------------------------- |
| [**frDocFetchUsingGET**](FederalRegister.md#frDocFetchUsingGET)       | **GET** /fr/{frdocnum}      | Query: Federal Register document number |
| [**frVolumeFetchUsingGET**](FederalRegister.md#frVolumeFetchUsingGET) | **GET** /fr/{volume}/{page} | Query: volume, page number              |

<a name="frDocFetchUsingGET"></a>

## **`frDocFetchUsingGETGET`**

> Object frDocFetchUsingGET(frdocnum, opts)

Query: Federal Register document number

### Example

```javascript
const { FederalRegister } = require('govinfo-link-service-client-js')

const api = new FederalRegister()

const frdocnum = 'frdocnum_example' // String | Required - The is the FR doc number that is listed at the end of each Federal Register document. Sample value is 2010-32535.

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
api.frDocFetchUsingGET(frdocnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                  | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **frdocnum** | **String** | Required - The is the FR doc number that is listed at the end of each Federal Register document. Sample value is 2010-32535. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related. | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="frVolumeFetchUsingGET"></a>

## **`frVolumeFetchUsingGETGET`**

> Object frVolumeFetchUsingGET(volume, page, opts)

Query: volume, page number

### Example

```javascript
const { FederalRegister } = require('govinfo-link-service-client-js')

const api = new FederalRegister()

const volume = 56 // Number | This is the numerical volume number. Sample value is 76.

const page = 56 // Number | This is the numerical page number. Federal Register pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 575.

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
api.frVolumeFetchUsingGET(volume, page, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                                                                                                                                                                              | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **volume**   | **Number** | This is the numerical volume number. Sample value is 76.                                                                                                                                                                                                                                                                                 |
| **page**     | **Number** | This is the numerical page number. Federal Register pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 575. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context, related.                                                                                                                                                                                                             | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
