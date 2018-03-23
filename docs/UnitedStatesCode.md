# `United States Code

> The United States Code is the codification by subject matter of the general and permanent laws of the United States. It is divided by broad subjects into 53 titles and published by the Office of the Law Revision Counsel of the U.S. House of Representatives. The U.S. Code was first published in 1926. The next main edition was published in 1934, and subsequent main editions have been published every six years since 1934. In between editions, annual cumulative supplements are published in order to present the most current information.
>
> FDsys - Browse USCODE . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collectionUScode.action?collectionCode=USCODE> ![link-external][icon-octicon-link-external]

## `govinfoLinkService.UnitedStatesCode`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                             | HTTP request                      | Description                                             |
| ------------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------- |
| [**uscodeFetchUsingGET**](UnitedStatesCode.md#uscodeFetchUsingGET) | **GET** /uscode/{title}/{section} | Query: title number, type, section, year OR most recent |

<a name="uscodeFetchUsingGET"></a>

## **`uscodeFetchUsingGETGET`**

> Object uscodeFetchUsingGET(title, section, opts)

Query: title number, type, section, year OR most recent

### Example

```javascript
const { UnitedStatesCode } = require('govinfo-link-js')

const api = new UnitedStatesCode()

const title = 56 // Number | This is the title number. Sample value is 5.

const section = 56 // Number | This is the section number. Sample value is 104.

const opts = {
  type: 'type_example', // String | This is the U.S. Code section type. Values are usc, uscappendix. Default value is usc.
  year: 'year_example', // String | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the U.S. Code section is returned. Default is most recent. Sample value is 2010.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.uscodeFetchUsingGET(title, section, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                              | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **title**    | **Number** | This is the title number. Sample value is 5.                                                                                                                                             |
| **section**  | **Number** | This is the section number. Sample value is 104.                                                                                                                                         |
| **type**     | **String** | This is the U.S. Code section type. Values are usc, uscappendix. Default value is usc.                                                                                                   | [optional] |
| **year**     | **String** | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the U.S. Code section is returned. Default is most recent. Sample value is 2010. | [optional] |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                      | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_
