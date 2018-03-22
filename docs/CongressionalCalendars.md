# Congressional Calendars

## `govinfoLinkService.CongressionalCalendars`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                               | HTTP request                      | Description                                          |
| -------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------- |
| [**ccalFetchUsingGET**](CongressionalCalendars.md#ccalFetchUsingGET) | **GET** /ccal/{chamber}/{section} | Query: chamber, section, publish date OR most recent |

## **`ccalFetchUsingGET`**

> ```js
> Object ccalFetchUsingGET(chamber, section, opts)
> ```

Query: chamber, section, publish date OR most recent

### Example

```javascript
const { CongressionalCalendars } = require('govinfo-link-service-client-js')

const api = new CongressionalCalendars()

const chamber = 'chamber_example' // String | This is the chamber of Congress. Values are house, senate.

const section = 'section_example' // String | This is the name of the calendar section. Recommend encoding special characters and spaces (%20). Common sample values include Unanimous Consent Agreements, Cover and Special Orders, Subjects on the Table, Union Calendar, Bills in Conference, Special Legislative Days.

const opts = {
  publishdate: 'publishdate_example', // String | If date is not provided, the most recent version of the calendar is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.ccalFetchUsingGET(chamber, section, opts, callback)
```

### Parameters

| Name            | Type       | Description                                                                                                                                                                                                                                                                  | Notes      |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **chamber**     | **String** | This is the chamber of Congress. Values are house, senate.                                                                                                                                                                                                                   |
| **section**     | **String** | This is the name of the calendar section. Recommend encoding special characters and spaces (%20). Common sample values include Unanimous Consent Agreements, Cover and Special Orders, Subjects on the Table, Union Calendar, Bills in Conference, Special Legislative Days. |
| **publishdate** | **String** | If date is not provided, the most recent version of the calendar is returned. Values are date formated as yyyy-mm-dd or mostrecent. Default is most recent.                                                                                                                  | [optional] |
| **linkType**    | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                                                                                                          | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
