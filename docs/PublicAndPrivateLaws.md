# Public and Private Laws

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> Public and private laws are also known as slip laws. A slip law is an official publication of the law and is competent evidence admissible in all state and Federal courts and tribunals of the United States. Public laws affect society as a whole, while private laws affect an individual, family, or small group.
>
> FDsys - Browse Public and Private Laws . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=PLAW> ![link-external][icon-octicon-link-external]

---

<details>
  <summary><img align="bottom" alt="info" height="20" width="20"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg">
Click here to learn more about slip laws.</summary>
<p>

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> After the President signs a bill into law, it is delivered to the Office of the Federal Register (OFR), National Archives and Records Administration (NARA) where it is assigned a law number, legal statutory citation (public laws only), and prepared for publication as a slip law. Private laws receive their legal statutory citations when they are published in the United States Statutes at Large.
>
> Prior to publication as a slip law, OFR also prepares marginal notes and citations for each law, and a legislative history for public laws only. Until the slip law is published, through the U.S. Government Publishing Office (GPO), the text of the law can be found by accessing the enrolled version of the bill. [About Public and Private Laws](https://www.gpo.gov/help/index.html#about_public_and_private_laws.htm).
>
> FDsys - Browse Public and Private Laws . (2018). Gpo.gov. Retrieved 22 March 2018, from <https://www.gpo.gov/fdsys/browse/collection.action?collectionCode=PLAW>

</p></details>

---

## `govinfoLinkService.PublicAndPrivateLaws`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                                           | HTTP request                                 | Description                             |
| -------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------- |
| [**plawBillFetchUsingGET**](PublicAndPrivateLaws.md#plawBillFetchUsingGET)       | **GET** /plaw/{congress}/{associatedbillnum} | Query: associated bill number, congress |
| [**plawStatuteFetchUsingGET**](PublicAndPrivateLaws.md#plawStatuteFetchUsingGET) | **GET** /plaw/{statutecitation}              | Query: Statutes at Large citation       |
| [**plawTypeFetchUsingGET**](PublicAndPrivateLaws.md#plawTypeFetchUsingGET)       | **GET** /plaw/{congress}/{lawtype}/{lawnum}  | Query: congress, law type, law number   |

<a name="plawBillFetchUsingGET"></a>

## **`plawBillFetchUsingGETGET`**

> Object plawBillFetchUsingGET(congress, associatedbillnum, opts)

Query: associated bill number, congress

### Example

```javascript
const { PublicAndPrivateLaws } = require('govinfo-link-service-client-js')

const api = new PublicAndPrivateLaws()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 111.

const associatedbillnum = 'associatedbillnum_example' // String | Public and private laws are associated with a primary bill number. The primary bill number is listed at the beginning of the law. Sample value is S. 3397.

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
api.plawBillFetchUsingGET(congress, associatedbillnum, opts, callback)
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                | Notes      |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**          | **Number** | This is the numerical Congress number. Sample value is 111.                                                                                                |
| **associatedbillnum** | **String** | Public and private laws are associated with a primary bill number. The primary bill number is listed at the beginning of the law. Sample value is S. 3397. |
| **linkType**          | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.                                        | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="plawStatuteFetchUsingGET"></a>

## **`plawStatuteFetchUsingGETGET`**

> Object plawStatuteFetchUsingGET(statutecitation, opts)

Query: Statutes at Large citation

### Example

```javascript
const { PublicAndPrivateLaws } = require('govinfo-link-service-client-js')

const api = new PublicAndPrivateLaws()

const statutecitation = 'statutecitation_example' // String | A Statutes at Large citation is listed at the top of each page of a law. Use a + (plus sign) in place of spaces in the citation. Sample value is 124+stat+2859.

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
api.plawStatuteFetchUsingGET(statutecitation, opts, callback)
```

### Parameters

| Name                | Type       | Description                                                                                                                                                     | Notes      |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **statutecitation** | **String** | A Statutes at Large citation is listed at the top of each page of a law. Use a + (plus sign) in place of spaces in the citation. Sample value is 124+stat+2859. |
| **linkType**        | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.                                             | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

<a name="plawTypeFetchUsingGET"></a>

## **`plawTypeFetchUsingGETGET`**

> Object plawTypeFetchUsingGET(congress, lawtype, lawnum, opts)

Query: congress, law type, law number

### Example

```javascript
const { PublicAndPrivateLaws } = require('govinfo-link-service-client-js')

const api = new PublicAndPrivateLaws()

const congress = 56 // Number | This is the numerical Congress number. Sample value is 111.

const lawtype = 'lawtype_example' // String | This is the law type. Laws can either be public laws or private laws. Values are public, private.

const lawnum = 56 // Number | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 78.

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
api.plawTypeFetchUsingGET(congress, lawtype, lawnum, opts, callback)
```

### Parameters

| Name         | Type       | Description                                                                                                                   | Notes      |
| ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress** | **Number** | This is the numerical Congress number. Sample value is 111.                                                                   |
| **lawtype**  | **String** | This is the law type. Laws can either be public laws or private laws. Values are public, private.                             |
| **lawnum**   | **Number** | This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 78. |
| **linkType** | **String** | This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.           | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
