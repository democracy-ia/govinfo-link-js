# Congressional Hearings

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> A hearing is a meeting or session of a Senate, House, joint, or special committee of Congress, usually open to the public, to obtain information and opinions on proposed legislation, conduct an investigation, or evaluate/oversee the activities of a government department or the implementation of a Federal law. In addition, hearings may also be purely exploratory in nature, providing testimony and data about topics of current interest. Most congressional hearings are published two months to two years after they are held.
>
> FDsys - Browse CHRG . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CHRG>

---

<details>
  <summary><img align="top" alt="alert" height="20" width="20"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg">
Click here for important information about document availability.</summary>
<p>

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> **Not all congressional hearings are available on FDsys**. Whether or not a hearing is disseminated on FDsys depends on the committee. GPO continues to add hearings as they become available during each session of Congress. If a congressional hearing is not listed in FDsys, it is not available electronically via GPO at this time. NOTE: If a committee has not made a hearing available electronically via GPO for a specific Congress, the committee's name will not appear in the browse list until a hearing for that committee is made available in FDsys. Committee publications may also be browsed via the FDsys congressional committee browse page.
>
> FDsys contains selected House and Senate hearings for the 105th Congress (1997-98) forward. The House and Senate appropriations hearings for fiscal year 1998 forward are also included. Documents are available as text and PDF. Graphics, including scanned images of camera ready copy are omitted from the ASCII text version but are contained in the PDF files. About the Congressional Hearings.
>
> FDsys - Browse CHRG . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=CHRG> ![link-external][icon-octicon-link-external]

</p></details>

---

## `govinfoLinkService.CongressionalHearings`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                          | HTTP request                                              | Description                                              |
| ------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| [**chrgHouseFetchUsingGET**](CongressionalHearings.md#chrgHouseFetchUsingGET)   | **GET** /chrg/{congress}/house/{committee}/{serialnumber} | Query: congress, chamber, committee, house serial number |
| [**chrgJacketFetchUsingGET**](CongressionalHearings.md#chrgJacketFetchUsingGET) | **GET** /chrg/{congress}/{jacketid}                       | Query: congress, jacket number                           |
| [**chrgSenateFetchUsingGET**](CongressionalHearings.md#chrgSenateFetchUsingGET) | **GET** /chrg/{congress}/senate/{hearingnumber}           | Query: congress, chamber, senate hearing number          |

<a name="chrgHouseFetchUsingGET"></a>

### **`chrgHouseFetchUsingGET`**

> ```js
> Object chrgHouseFetchUsingGET(congress, committee, serialnumber, opts)
> ```

Query: congress, chamber, committee, house serial number

### Example

```javascript
const { CongressionalHearings } = require('govinfo-link-js')

const api = new CongressionalHearings()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 109.

const committee = 'committee_example' // String | This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is energy.

const serialnumber = 56 // Number | This is the numerical house committee serial number. House hearings are not numbered consecutively across committees within a Congress. For example, 109-138 could exist for both the Energy Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 138.

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
api.chrgHouseFetchUsingGET(congress, committee, serialnumber, opts, callback)
```

### Parameters

| Name             | Type       | Description                                                                                                                                                                                                                                                                                       | Notes      |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**     | **Number** | This is the numerical Congress number. Sample value is 109.                                                                                                                                                                                                                                       |
| **committee**    | **String** | This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is energy.                                                                                                                                                                          |
| **serialnumber** | **Number** | This is the numerical house committee serial number. House hearings are not numbered consecutively across committees within a Congress. For example, 109-138 could exist for both the Energy Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 138. |
| **linkType**     | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                                                                                                                               | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="chrgJacketFetchUsingGET"></a>

## **`chrgJacketFetchUsingGET`**

> ```js
> Object chrgJacketFetchUsingGET(congress, jacketid, opts)
> ```

Query: congress, jacket number

### Example

```javascript
const { CongressionalHearings } = require('govinfo-link-js')

const api = new CongressionalHearings()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 105.

const jacketid = 'jacketid_example' // String | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 48-707.

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
api.chrgJacketFetchUsingGET(congress, jacketid, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                         | Notes      |
| ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numerical Congress number. Sample value is 105.                                                                                                                         |
| **jacketid** | **String** | This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 48-707. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                                                                 | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="chrgSenateFetchUsingGET"></a>

## **`chrgSenateFetchUsingGET`**

> Object chrgSenateFetchUsingGET(congress, hearingnumber, opts)

Query: congress, chamber, senate hearing number

### Example

```javascript
const { CongressionalHearings } = require('govinfo-link-js')

const api = new CongressionalHearings()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 112.

const hearingnumber = 56 // Number | This is the numerical Senate hearing number. Senate hearings are numbered consecutively across committees within a Congress. Sample value is 122.

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
api.chrgSenateFetchUsingGET(congress, hearingnumber, opts, callback)
```

### Parameters

| Name              | Type       | Description                                                                                                                                       | Notes      |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**      | **Number** | This is the numerical Congress number. Sample value is 112.                                                                                       |
| **hearingnumber** | **Number** | This is the numerical Senate hearing number. Senate hearings are numbered consecutively across committees within a Congress. Sample value is 122. |
| **linkType**      | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.                               | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
