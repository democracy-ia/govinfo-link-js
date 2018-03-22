# Congressional Committee Prints

## `govinfoLinkService.CongressionalCommitteePrints`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                                 | HTTP request                                          | Description                                             |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| [**cprtHouseFetchUsingGET**](CongressionalCommitteePrints.md#cprtHouseFetchUsingGET)   | **GET** /cprt/{congress}/house/{printnum}/{committee} | Query: congress, chamber, house print number, committee |
| [**cprtJacketFetchUsingGET**](CongressionalCommitteePrints.md#cprtJacketFetchUsingGET) | **GET** /cprt/{congress}/{jacketid}                   | Query: congress, jacket number                          |
| [**cprtSenateFetchUsingGET**](CongressionalCommitteePrints.md#cprtSenateFetchUsingGET) | **GET** /cprt/{congress}/senate/{printnum}            | Query: congress, chamber, senate print number           |

<a name="cprtHouseFetchUsingGET"></a>

## **`cprtHouseFetchUsingGET`**

> ```js
> Object cprtHouseFetchUsingGET(congress, printnum, committee, opts)
> ```

Query: congress, chamber, house print number, committee

### Example

```javascript
const {
  CongressionalCommitteePrints
} = require('govinfo-link-service-client-js')

const api = new CongressionalCommitteePrints()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 109.

const printnum = 56 // Number | This is the numerical House committee print number. House prints are not numbered consecutively across committees within a Congress. For example, 109-2 could exist for both the Ways and Means Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 2.

const committee = 'committee_example' // String | This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is Ways and Means.

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
api.cprtHouseFetchUsingGET(congress, printnum, committee, opts, callback)
```

### Parameters

| Name          | Type       | Description                                                                                                                                                                                                                                                                                        | Notes      |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**  | **Number** | This is the numerical Congress number. Sample value is 109.                                                                                                                                                                                                                                        |
| **printnum**  | **Number** | This is the numerical House committee print number. House prints are not numbered consecutively across committees within a Congress. For example, 109-2 could exist for both the Ways and Means Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 2. |
| **committee** | **String** | This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is Ways and Means.                                                                                                                                                                   |
| **linkType**  | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                                                                                                                                | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="cprtJacketFetchUsingGET"></a>

## **`cprtJacketFetchUsingGETGET`**

> Object cprtJacketFetchUsingGET(congress, jacketid, opts)

Query: congress, jacket number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-service-client-js')

const api = new CongressionalCommitteePrints()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 112.

const jacketid = 'jacketid_example' // String | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 74-558.

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
api.cprtJacketFetchUsingGET(congress, jacketid, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                         | Notes      |
| ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numerical Congress number. Sample value is 112.                                                                                                                         |
| **jacketid** | **String** | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 74-558. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                 | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="cprtSenateFetchUsingGET"></a>

## **`cprtSenateFetchUsingGETGET`**

> Object cprtSenateFetchUsingGET(congress, printnum, opts)

Query: congress, chamber, senate print number

### Example

```javascript
const govinfoLinkService = require('govinfo-link-service-client-js')

const api = new CongressionalCommitteePrints()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 112.

const printnum = 56 // Number | This is the numerical Senate print number. Senate prints are numbered consecutively across committees within a Congress. Sample value is 4.

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
api.cprtSenateFetchUsingGET(congress, printnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                 | Notes      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numerical Congress number. Sample value is 112.                                                                                 |
| **printnum** | **Number** | This is the numerical Senate print number. Senate prints are numbered consecutively across committees within a Congress. Sample value is 4. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                         | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
