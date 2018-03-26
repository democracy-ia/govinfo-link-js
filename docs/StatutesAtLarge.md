# Statutes at Large

## `govinfoLinkService.StatutesAtLarge`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                          | HTTP request                                   | Description                           |
| ------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------- |
| [**statuteTypeFetchUsingGET**](StatutesAtLarge.md#statuteTypeFetchUsingGET)     | **GET** /statute/{congress}/{lawtype}/{lawnum} | Query: congress, law type, law number |
| [**statuteVolumeFetchUsingGET**](StatutesAtLarge.md#statuteVolumeFetchUsingGET) | **GET** /statute/{volume}/{page}               | Query: volume, page number            |

<a name="statuteTypeFetchUsingGET"></a>

## **`statuteTypeFetchUsingGETGET`**

> Object statuteTypeFetchUsingGET(congress, lawtype, lawnum, opts)

Query: congress, law type, law number

### Example

```javascript
const { StatutesAtLarge } = require('govinfo-link-js')

const api = new StatutesAtLarge()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 108.

const lawtype = 'lawtype_example' // String | This is the law type. Laws can either be public laws or private laws. Values are public, private.

const lawnum = 56 // Number | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 481.

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
api.statuteTypeFetchUsingGET(congress, lawtype, lawnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                    | Notes      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **congress** | **Number** | This is the numerical Congress number. Sample value is 108.                                                                    |
| **lawtype**  | **String** | This is the law type. Laws can either be public laws or private laws. Values are public, private.                              |
| **lawnum**   | **Number** | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 481. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.            | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="statuteVolumeFetchUsingGET"></a>

## **`statuteVolumeFetchUsingGETGET`**

> Object statuteVolumeFetchUsingGET(volume, page, opts)

Query: volume, page number

### Example

```javascript
const { StatutesAtLarge } = require('govinfo-link-js')

const api = new StatutesAtLarge()

const volume = 56 // Number | This is the numerical volume number. Sample value is 118.

const page = 56 // Number | This is the numerical page number. Statutes at Large pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 3910.

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
api.statuteVolumeFetchUsingGET(volume, page, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                                                                                                                                                                                | Notes      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **volume**   | **Number** | This is the numerical volume number. Sample value is 118.                                                                                                                                                                                                                                                                                  |
| **page**     | **Number** | This is the numerical page number. Statutes at Large pages are numbered consecutively within a volume. Note: when multiple granules are contained on a page, content and metadata for the last granule on the page will be returned. Recommend selecting PDF link-type to return content for all granules on a page. Sample value is 3910. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                                                                                                                                                                        | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
