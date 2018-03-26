# Code of Federal Regulations

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> The Code of Federal Regulations (CFR) annual edition is the codification of the general and permanent rules published in the Federal Register by the departments and agencies of the Federal Government. It is divided into 50 titles that represent broad areas subject to Federal regulation. The 50 subject matter titles contain one or more individual volumes, which are updated once each calendar year, on a staggered basis. The annual update cycle is as follows: titles 1-16 are revised as of January 1; titles 17-27 are revised as of April 1; titles 28-41 are revised as of July 1; and titles 42-50 are revised as of October 1. Each title is divided into chapters, which usually bear the name of the issuing agency. Each chapter is further subdivided into parts that cover specific regulatory areas. Large parts may be subdivided into subparts. All parts are organized in sections, and most citations to the CFR refer to material at the section level. [About the Code of Federal Regulations (annual edition)(https://www.gpo.gov/help/index.html#about_code_of_federal_regulations.htm).
>
> FDsys - Browse Code of Federal Regulations (Annual Edition) . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collectionCfr.action?collectionCode=CFR> ![link-external][icon-octicon-link-external]

## `govinfo.CodeOfFederalRegulations`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                               | HTTP request                      | Description                                                           |
| -------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------- |
| [**cfrFetchUsingGET**](CodeOfFederalRegulations.md#cfrFetchUsingGET) | **GET** /cfr/{titlenum}/{partnum} | Query: title number, part number, section number, year OR most recent |

<a name="cfrFetchUsingGET"></a>

## **`cfrFetchUsingGET`**

> ```js
> Object cfrFetchUsingGET(titlenum, partnum, opts)
> ```

Query: title number, part number, section number, year OR most recent

### Example

```javascript
const { CodeOfFederalRegulations } = require('govinfo-link-js')

const api = new CodeOfFederalRegulations()

const titlenum = 56 // Number | Title number. Sample value is 3.

const partnum = 'partnum_example' // String | Part number. Sample value is 100

const opts = {
  sectionnum: 'sectionnum_example', // String | This is the section number. Sample value is 1. If section number is not provided the entire part will be returned.
  year: 'year_example', // String | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the CFR section or part is returned. Default is most recent. Sample value is 2011.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, context, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.cfrFetchUsingGET(titlenum, partnum, opts, callback)
```

### Parameters

| Name           | Type       | Description                                                                                                                                                                                | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **titlenum**   | **Number** | Title number. Sample value is 3.                                                                                                                                                           |
| **partnum**    | **String** | Part number. Sample value is 100                                                                                                                                                           |
| **sectionnum** | **String** | This is the section number. Sample value is 1. If section number is not provided the entire part will be returned.                                                                         | [optional] |
| **year**       | **String** | This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the CFR section or part is returned. Default is most recent. Sample value is 2011. | [optional] |
| **linkType**   | **String** | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, context, related.                                                                | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
