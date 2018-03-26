# Congressional Bills

> <img align="left" alt="quote" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg"> Congressional bills are legislative proposals from the House of Representatives and Senate within the United States Congress. There are eight different types of bills.

---

<details>
  <summary><img align="bottom" alt="info" height="20" width="20"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg">
Click here for summaries of the eight types of bills.</summary>
<p>

* **(1) House bills (H.R.) and (2) Senate bills (S.)** require the approval of both chambers (ie House and Senate) and the signature of the President to become law.

* **(3) House Joint Resolutions (H.J. Res.) and (4) Senate Joint Resolutions (S.J. Res.)** require the approval of both chambers and the signature of the President. Joint resolutions generally are used for limited matters, such as a single appropriation for a specific purpose and to propose amendments to the Constitution.

* **(5) House Concurrent Resolutions (H. Con. Res.) and (6) Senate Concurrent Resolutions (S. Con. Res.)** require the approval of both chambers but do not require the signature of the President and do not have the force of law. Concurrent resolutions generally are used to make or amend rules that apply to both chambers.

* **(7) House Simple Resolutions (H. Res.) and (8) Senate Simple Resolutions (S. Res.)** address matters entirely within the prerogative of one chamber or the other. They do not require the approval of the other chamber or the signature of the President, and they do not have the force of law.

* There are numerous different bill versions that track a bill through the legislative process from introduction through passage by both chambers (enrolled version). All final published bill versions are available from GPO. [About the Congressional Bills ![link-external][icon-octicon-link-external]](https://www.gpo.gov/help/index.html#about_congressional_bills.htm).

</p></details>

---

## `govinfo.CongressionalBills`

> ![info][icon-octicon-info] All URIs are relative to _<https://www.govinfo.gov/link> ![link-external][icon-octicon-link-external]_.

| Method                                                             | HTTP request                                   | Description                                                          |
| ------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------- |
| [**billsFetchUsingGET**](CongressionalBills.md#billsFetchUsingGET) | **GET** /bills/{congress}/{billtype}/{billnum} | Query: bill number, bill type, congress, bill version OR most recent |

<a name="billsFetchUsingGET"></a>

### **`billsFetchUsingGET`**

> ```js
> Object billsFetchUsingGET(congress, billtype, billnum, opts)
> ```

Query: bill number, bill type, congress, bill version OR most recent

### Example

```javascript
const { CongressionalBills } = require('govinfo-link-js')

const api = new CongressionalBills()

const congress = 'congress_example' // String | This is the numerical Congress number. Sample value is 112.

const billtype = 'billtype_example' // String | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.

const billnum = 56 // Number | This is the numerical bill number. Sample value is 1027.

const opts = {
  billversion: 'billversion_example', // String | If bill version is not provided, the most recent version of a bill is returned. Values are as, ash, ath, ats, cdh, cds, cph, cps, eah, eas, eh, enr, eph, es, fah, fph, fps, hdh, hds, ih, iph, ips, is, lth, lts, nat, oph, ops, pap, pav, pch, pcs, pp, pwah, rah, ras, rch, rcs, rdh, rds, re, reah, renr, res, rfh, rfs, rft, rh, rhuc, rih, ris, rs, rth, rts, s_p, sas, sc, mostrecent.
  linkType: 'linkType_example' // String | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, related.
}

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`SUCCESS: ${JSON.stringify(response, null, 2)}`)
  }
}
api.billsFetchUsingGET(congress, billtype, billnum, opts, callback)
```

### Parameters

| Name            | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                   | Notes      |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **congress**    | **String** | This is the numerical Congress number. Sample value is 112.                                                                                                                                                                                                                                                                                                                                   |
| **billtype**    | **String** | Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.                                                                                                                                                                                                                                                                                                                                 |
| **billnum**     | **Number** | This is the numerical bill number. Sample value is 1027.                                                                                                                                                                                                                                                                                                                                      |
| **billversion** | **String** | If bill version is not provided, the most recent version of a bill is returned. Values are as, ash, ath, ats, cdh, cds, cph, cps, eah, eas, eh, enr, eph, es, fah, fph, fps, hdh, hds, ih, iph, ips, is, lth, lts, nat, oph, ops, pap, pav, pch, pcs, pp, pwah, rah, ras, rch, rcs, rdh, rds, re, reah, renr, res, rfh, rfs, rft, rh, rhuc, rih, ris, rs, rth, rts, s_p, sas, sc, mostrecent. | [optional] |
| **linkType**    | **String** | This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, related.                                                                                                                                                                                                                                                                            | [optional] |

### Return type

**`Object`**

### Authorization

No authorization required.

### HTTP request headers

* **Content-Type**: `application/json`
* **Accept**: _/_

[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
