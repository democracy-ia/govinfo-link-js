# govinfo-link-js

<!-- standard-readme:banner -->

![democracy-ia goat][logo-js-image]

<!-- standard-readme:badges -->

[![Apache License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url]
[![NPM version][npm-image]][npm-url]<br>
[![NSP Status][nsp-image]][nsp-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][codacy-coverage-image]][codacy-url]
[![Codacy code quality][codacy-image]][codacy-url]

<!-- standard-readme:short-description -->

> Access U.S. Government Publishing Office's FDsys (Federal Digital System) content and metadata collections using the govinfo-link-js client of Node.js and Web browsers.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Install](#install)
  * [For Node.js environments](#for-nodejs-environments)
    + [Using npm](#using-npm)
    + [Using git](#using-git)
  * [For browser environments](#for-browser-environments)
  * [Webpack configuration](#webpack-configuration)
- [Usage](#usage)
- [API](#api)
  * [Models](#models)
  * [Endpoints](#endpoints)
- [Contribute](#contribute)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Install

### For Node.js environments

> You can download and install Node.js at the [Node.js site](https://nodejs.org/).

#### Using npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install govinfo-link-js --save
```

#### Using git

If the library is hosted at a git repository, e.g.
<https://github.com/democracy-ia/govinfo-link-js>
then install it via:

```shell
npm install democracy-ia/govinfo-link-js --save
```

---

<details>
  <summary><strong><img align="top" alt="code" height="20" width="20" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg"> Designers and developers</strong>: additional installation instructions</summary><p>

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your govinfo-link-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('govinfo-link-js')` in javascript files from the directory you ran the last command above from.

</p></details>

---

### For browser environments

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Usage

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const { CodeOfFederalRegulations } = require('govinfo-link-js')

const api = new CodeOfFederalRegulations()

// {Number} Title number
const titlenum = 3

// {String} Part number.
const partnum = '100'

const opts = {
  /**
   * @prop {String} sectionnum - This is the section number. Sample value is 1.
   *    If section number is not provided the entire part will be returned.
   */
  sectionnum: null,

  /**
   * @prop {String} year - This is the four digit numerical year OR mostrecent.
   *    If year is not provided, the most recent version of the CFR section
   *    or part is returned. Default is most recent.
   */
  year: '2011',

  /**
   * @prop {string=pdf} [linkType] - This is the format of the returned
   *    document. Default is pdf. Other values are xml, mods, premis,
   *    details, context, related.
   */
  linkType: 'xml'
}

api.cfrFetchUsingGET(titlenum, partnum, opts, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`✅  Returned data: ${api.toJson(data)}`)
  }
})
```

## API

The link service is used to create embedded links to content and metadata on **govinfo** and is currently enabled for the collections below. The collection code is listed in parenthesis after each collection name, and the available queries are listed below each collection. More information about each query is provided on the individual collection page.

All URIs are relative to _<https://www.govinfo.gov/link>_.

### Models

1.  [![API reference][api-26-image] `CodeOfFederalRegulations`: Code of Federal Regulations](CodeOfFederalRegulations.md)
1.  [![API reference][api-26-image] `CompilationOfPresidentialDocuments`: Compilation of Presidential Documents](CompilationOfPresidentialDocuments.md)
1.  [![API reference][api-26-image] `CongressionalBills`: Congressional Bills](CongressionalBills.md)
1.  [![API reference][api-26-image] `CongressionalCalendars`: Congressional Calendars](CongressionalCalendars.md)
1.  [![API reference][api-26-image] `CongressionalCommitteePrints`: Congressional Committee Prints](CongressionalCommitteePrints.md)
1.  [![API reference][api-26-image] `CongressionalDocuments`: Congressional Documents](CongressionalDocuments.md)
1.  [![API reference][api-26-image] `CongressionalHearings`: Congressional Hearings](CongressionalHearings.md)
1.  [![API reference][api-26-image] `CongressionalRecordDaily`: Congressional Record Daily](CongressionalRecordDaily.md)
1.  [![API reference][api-26-image] `CongressionalReports`: Congressional Reports](CongressionalReports.md)
1.  [![API reference][api-26-image] `FederalRegister`: Federal Register](FederalRegister.md)
1.  [![API reference][api-26-image] `PublicAndPrivateLaws`: Public and Private Laws](PublicAndPrivateLaws.md)
1.  [![API reference][api-26-image] `StatutesAtLarge`: Statutes at Large](StatutesAtLarge.md)
1.  [![API reference][api-26-image] `UnitedStatesCode`: United States Code](UnitedStatesCode.md)

### Endpoints

| Class                                                                                                   | Method                                                                                    | HTTP request                                                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [_govinfoLinkService\. CodeOfFederalRegulations_](docs/CodeOfFederalRegulations.md)                     | [`cfrFetchUsingGET`](docs/CodeOfFederalRegulations.md#cfrFetchUsingGET)                   | **GET** /cfr/{titlenum}/{partnum} <br><br>Parameters: title number, part number, section number, year OR most recent             |
| [_govinfoLinkService\. CompilationOfPresidentialDocuments_](docs/CompilationOfPresidentialDocuments.md) | [`cpdDcpdFetchUsingGET`](docs/CompilationOfPresidentialDocuments.md#cpdDcpdFetchUsingGET) | **GET** /cpd/{year} <br><br>Parameters: dcpd type OR dcpd number                                                                 |
| [_govinfoLinkService\. CompilationOfPresidentialDocuments_](docs/CompilationOfPresidentialDocuments.md) | [`cpdFetchUsingGET`](docs/CompilationOfPresidentialDocuments.md#cpdFetchUsingGET)         | **GET** /cpd/{doctype}/{docnum} <br><br>Parameters: document type, document number                                               |
| [_govinfoLinkService\. CongressionalBills_](docs/CongressionalBills.md)                                 | [`billsFetchUsingGET`](docs/CongressionalBills.md#billsFetchUsingGET)                     | **GET** /bills/{congress}/{billtype}/{billnum} <br><br>Parameters: bill number, bill type, congress, bill version OR most recent |
| [_govinfoLinkService\. CongressionalCalendars_](docs/CongressionalCalendars.md)                         | [`ccalFetchUsingGET`](docs/CongressionalCalendars.md#ccalFetchUsingGET)                   | **GET** /ccal/{chamber}/{section} <br><br>Parameters: chamber, section, publish date OR most recent                              |
| [_govinfoLinkService\. CongressionalCommitteePrints_](docs/CongressionalCommitteePrints.md)             | [`cprtHouseFetchUsingGET`](docs/CongressionalCommitteePrints.md#cprtHouseFetchUsingGET)   | **GET** /cprt/{congress}/house/{printnum}/{committee} <br><br>Parameters: congress, chamber, house print number, committee       |
| [_govinfoLinkService\. CongressionalCommitteePrints_](docs/CongressionalCommitteePrints.md)             | [`cprtJacketFetchUsingGET`](docs/CongressionalCommitteePrints.md#cprtJacketFetchUsingGET) | **GET** /cprt/{congress}/{jacketid} <br><br>Parameters: congress, jacket number                                                  |
| [_govinfoLinkService\. CongressionalCommitteePrints_](docs/CongressionalCommitteePrints.md)             | [`cprtSenateFetchUsingGET`](docs/CongressionalCommitteePrints.md#cprtSenateFetchUsingGET) | **GET** /cprt/{congress}/senate/{printnum} <br><br>Parameters: congress, chamber, senate print number                            |
| [_govinfoLinkService\. CongressionalDocuments_](docs/CongressionalDocuments.md)                         | [`cdocFetchUsingGET`](docs/CongressionalDocuments.md#cdocFetchUsingGET)                   | **GET** /cdoc/{congress}/{doctype}/{docnum} <br><br>Parameters: congress, document type, document number                         |
| [_govinfoLinkService\. CongressionalDocuments_](docs/CongressionalDocuments.md)                         | [`cdocJacketFetchUsingGET`](docs/CongressionalDocuments.md#cdocJacketFetchUsingGET)       | **GET** /cdoc/{congress}/{jacketid} <br><br>Parameters: congress, jacket number                                                  |
| [_govinfoLinkService\. CongressionalHearings_](docs/CongressionalHearings.md)                           | [`chrgHouseFetchUsingGET`](docs/CongressionalHearings.md#chrgHouseFetchUsingGET)          | **GET** /chrg/{congress}/house/{committee}/{serialnumber} <br><br>Parameters: congress, chamber, committee, house serial number  |
| [_govinfoLinkService\. CongressionalHearings_](docs/CongressionalHearings.md)                           | [`chrgJacketFetchUsingGET`](docs/CongressionalHearings.md#chrgJacketFetchUsingGET)        | **GET** /chrg/{congress}/{jacketid} <br><br>Parameters: congress, jacket number                                                  |
| [_govinfoLinkService\. CongressionalHearings_](docs/CongressionalHearings.md)                           | [`chrgSenateFetchUsingGET`](docs/CongressionalHearings.md#chrgSenateFetchUsingGET)        | **GET** /chrg/{congress}/senate/{hearingnumber} <br><br>Parameters: congress, chamber, senate hearing number                     |
| [_govinfoLinkService\. CongressionalRecordDaily_](docs/CongressionalRecordDaily.md)                     | [`crecSectionFetchUsingGET`](docs/CongressionalRecordDaily.md#crecSectionFetchUsingGET)   | **GET** /crec/section/{section} <br><br>Parameters: section, publish date OR most recent                                         |
| [_govinfoLinkService\. CongressionalRecordDaily_](docs/CongressionalRecordDaily.md)                     | [`crecTypeFetchUsingGET`](docs/CongressionalRecordDaily.md#crecTypeFetchUsingGET)         | **GET** /crec/cas/{congress}/{billtype}/{billnum} <br><br>Parameters: congress, bill number, bill type                           |
| [_govinfoLinkService\. CongressionalRecordDaily_](docs/CongressionalRecordDaily.md)                     | [`crecTypeFetchUsingGET1`](docs/CongressionalRecordDaily.md#crecTypeFetchUsingGET1)       | **GET** /crec/type/{type} <br><br>Parameters: document type, publish date OR most recent                                         |
| [_govinfoLinkService\. CongressionalRecordDaily_](docs/CongressionalRecordDaily.md)                     | [`crecVolumeFetchUsingGET`](docs/CongressionalRecordDaily.md#crecVolumeFetchUsingGET)     | **GET** /crec/{volume}/{pageprefix}/{page} <br><br>Parameters: volume, page prefix, page number                                  |
| [_govinfoLinkService\. CongressionalReports_](docs/CongressionalReports.md)                             | [`crptBillFetchUsingGET`](docs/CongressionalReports.md#crptBillFetchUsingGET)             | **GET** /crpt/{congress}/{associatedbillnum} <br><br>Parameters: associated bill, congress                                       |
| [_govinfoLinkService\. CongressionalReports_](docs/CongressionalReports.md)                             | [`crptReportFetchUsingGET`](docs/CongressionalReports.md#crptReportFetchUsingGET)         | **GET** /crpt/{congress}/{doctype}/{reportnum} <br><br>Parameters: congress, report type, report number                          |
| [_govinfoLinkService\. FederalRegister_](docs/FederalRegister.md)                                       | [`frDocFetchUsingGET`](docs/FederalRegister.md#frDocFetchUsingGET)                        | **GET** /fr/{frdocnum} <br><br>Parameters: Federal Register document number                                                      |
| [_govinfoLinkService\. FederalRegister_](docs/FederalRegister.md)                                       | [`frVolumeFetchUsingGET`](docs/FederalRegister.md#frVolumeFetchUsingGET)                  | **GET** /fr/{volume}/{page} <br><br>Parameters: volume, page number                                                              |
| [_govinfoLinkService\. PublicAndPrivateLaws_](docs/PublicAndPrivateLaws.md)                             | [`plawBillFetchUsingGET`](docs/PublicAndPrivateLaws.md#plawBillFetchUsingGET)             | **GET** /plaw/{congress}/{associatedbillnum} <br><br>Parameters: associated bill number, congress                                |
| [_govinfoLinkService\. PublicAndPrivateLaws_](docs/PublicAndPrivateLaws.md)                             | [`plawStatuteFetchUsingGET`](docs/PublicAndPrivateLaws.md#plawStatuteFetchUsingGET)       | **GET** /plaw/{statutecitation} <br><br>Parameters: Statutes at Large citation                                                   |
| [_govinfoLinkService\. PublicAndPrivateLaws_](docs/PublicAndPrivateLaws.md)                             | [`plawTypeFetchUsingGET`](docs/PublicAndPrivateLaws.md#plawTypeFetchUsingGET)             | **GET** /plaw/{congress}/{lawtype}/{lawnum} <br><br>Parameters: congress, law type, law number                                   |
| [_govinfoLinkService\. StatutesAtLarge_](docs/StatutesAtLarge.md)                                       | [`statuteTypeFetchUsingGET`](docs/StatutesAtLarge.md#statuteTypeFetchUsingGET)            | **GET** /statute/{congress}/{lawtype}/{lawnum} <br><br>Parameters: congress, law type, law number                                |
| [_govinfoLinkService\. StatutesAtLarge_](docs/StatutesAtLarge.md)                                       | [`statuteVolumeFetchUsingGET`](docs/StatutesAtLarge.md#statuteVolumeFetchUsingGET)        | **GET** /statute/{volume}/{page} <br><br>Parameters: volume, page number                                                         |
| [_govinfoLinkService\. UnitedStatesCode_](docs/UnitedStatesCode.md)                                     | [`uscodeFetchUsingGET`](docs/UnitedStatesCode.md#uscodeFetchUsingGET)                     | **GET** /uscode/{title}/{section} <br><br>Parameters: title number, type, section, year OR most recent                           |

## Contribute

[![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] We welcome contributions with GitHub **issues** and **pull requests**.

---

[![Request a feature][issues-new-feat-image]][issues-new-feat-url]
[![Report a defect][issues-new-defect-image]][issues-new-defect-url]

[![Read the CONTRIBUTING guidelines][contributing-image]][contributing-url]

---

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

1.  **[Create an issue][issues-url]**&mdash;e.g., a [defect ("bug") report][issues-new-defect-url] or a [feature request][issues-new-feat-url]&mdash;to propose changes.

    _Exceptions:_

    > If you're working on documentation and fixing something simple like a typo or an easy bug, go ahead and make a pull request.

1.  **[Follow the CONTRIBUTING guidelines][contributing-url].**

    _Why:_

    > Standards and guidelines make communication easier. If you're willing and able to program&mdash;or want to learn how&mdash; following the guidelines will increase the likelihood of adding your changes to the software product.

1.  **[Read the Code of Conduct][conduct-url].**

    _Why:_

    > It's more fun when everybody's friendly and respectful.

1.  **[Make a pull request][makeapullrequest-url]** when you're ready for other to review your changes (or you get stuck somewhere).

    _PR novices:_

    > **🙋 Never created a pull request?** No problem. [🆓 Take this free online training][makeapullrequest-url]. (It even covers most of the conventions in the [CONTRIBUTING guidelines][contributing-url]!)

## License

`govinfo-link-js v0.5.0` © [Apache 2.0][license-url]

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdemocracy-ia%2Fgovinfo-link-js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdemocracy-ia%2Fgovinfo-link-js?ref=badge_large)

<!-- ⛔️ Images ⛔️ -->

[conduct-url]: CODE_OF_CONDUCT.md
[contributing-image]: https://img.shields.io/badge/read-CONTRIBUTING%20Guidelines-yellow.svg?style=for-the-badge&label=read+the
[contributing-url]: CONTRIBUTING.md
[makeapullrequest-url]: http://makeapullrequest.com
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[logo-js-image]: https://avatars1.githubusercontent.com/u/34581173?s=200&v=4
[issues-new-defect-image]: https://img.shields.io/badge/report-defect-lightgrey.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: https://github.com/democracy-ia/govinfo-link-js/issues/new?title=fix%28affected-scope%29%3A+50-character-defect-summary&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&template=defect-report.md
[issues-url]: https://github.com/democracy-ia/govinfo-link-js/issues
[issues-new-feat-url]: https://github.com/democracy-ia/govinfo-link-js/issues/new?title=feat%28affected-scope%29%3A+50-character-change-proposal-summary&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&template=feature-request.md
[issues-new-feat-image]: https://img.shields.io/badge/request-feature-blue.svg?style=for-the-badge&label=request+a
[api-26-image]: .github/assets/img/icons8/icon-api-26.png

<!-- ⛔️ CI Services ⛔️  -->

[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789
[appveyor-image]: https://img.shields.io/appveyor/ci/democracy-ia/govinfo-link-js.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/democracy-ia/govinfo-link-js
[codacy-image]: https://img.shields.io/codacy/grade/b3ac6aaaa3cf41d0897959c1e5d732a3.svg?style=flat-square
[codacy-coverage-image]: https://img.shields.io/codacy/coverage/b3ac6aaaa3cf41d0897959c1e5d732a3.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/govinfo-link-js?utm_source=github.com&utm_medium=referral&utm_content=democracy-ia/govinfo-link-js&utm_campaign=Badge_Grade
[coveralls-image]: https://img.shields.io/coveralls/github/democracy-ia/govinfo-link-js/master.svg
[coveralls-url]: https://coveralls.io/r/democracy-ia/govinfo-link-js
[daviddm-dev-image]: https://david-dm.org/democracy-ia/govinfo-link-js/dev-status.svg?theme=shields.io&style=flat-square
[daviddm-dev-url]: https://david-dm.org/democracy-ia/govinfo-link-js?type=dev
[daviddm-image]: https://david-dm.org/democracy-ia/govinfo-link-js.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/democracy-ia/govinfo-link-js
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdemocracy-ia%2Fgovinfo-link-js.svg?type=shield&style=flat-square
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fdemocracy-ia%2Fgovinfo-link-js?ref=badge_shield
[license-image]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: http://www.apache.org/licenses/LICENSE-2.0
[npm-image]: https://badge.fury.io/js/govinfo-link-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/govinfo-link-js
[npms-image]: https://badges.npms.io/govinfo-link-js.svg?style=flat-square
[npms-url]: https://npms.io/search?q=govinfo-link-js
[nsp-image]: https://nodesecurity.io/orgs/democracy-ia/projects/cd614e9c-1458-438a-92ba-b7579052e1c8/badge
[nsp-url]: https://nodesecurity.io/orgs/democracy-ia/projects/cd614e9c-1458-438a-92ba-b7579052e1c8
[travis-image]: https://img.shields.io/travis/democracy-ia/govinfo-link-js.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.org/democracy-ia/govinfo-link-js

<!-- ⛔️ Octicon img references ⛔️  -->

[icon-octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[icon-octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[icon-octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[icon-octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[icon-octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[icon-octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[icon-octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[icon-octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[icon-octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[icon-octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[icon-octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[icon-octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[icon-octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[icon-octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[icon-octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[icon-octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[icon-octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[icon-octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[icon-octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[icon-octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[icon-octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[icon-octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[icon-octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[icon-octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[icon-octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[icon-octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[icon-octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[icon-octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[icon-octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[icon-octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[icon-octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[icon-octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[icon-octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[icon-octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[icon-octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[icon-octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[icon-octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[icon-octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[icon-octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[icon-octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[icon-octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[icon-octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[icon-octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[icon-octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[icon-octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[icon-octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[icon-octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[icon-octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[icon-octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[icon-octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[icon-octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[icon-octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[icon-octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[icon-octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[icon-octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[icon-octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[icon-octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[icon-octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[icon-octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[icon-octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[icon-octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[icon-octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[icon-octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[icon-octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[icon-octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[icon-octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[icon-octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[icon-octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[icon-octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[icon-octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[icon-octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[icon-octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[icon-octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[icon-octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[icon-octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[icon-octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[icon-octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[icon-octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[icon-octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[icon-octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[icon-octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[icon-octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[icon-octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[icon-octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[icon-octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[icon-octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[icon-octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[icon-octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[icon-octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[icon-octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[icon-octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[icon-octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[icon-octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[icon-octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[icon-octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[icon-octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[icon-octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[icon-octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[icon-octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[icon-octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[icon-octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[icon-octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[icon-octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[icon-octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[icon-octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[icon-octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[icon-octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[icon-octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[icon-octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[icon-octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[icon-octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[icon-octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[icon-octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[icon-octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[icon-octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[icon-octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[icon-octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[icon-octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[icon-octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[icon-octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[icon-octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[icon-octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[icon-octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[icon-octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[icon-octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[icon-octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[icon-octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[icon-octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[icon-octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[icon-octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[icon-octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[icon-octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[icon-octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[icon-octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[icon-octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[icon-octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[icon-octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[icon-octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[icon-octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[icon-octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[icon-octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[icon-octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[icon-octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[icon-octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[icon-octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[icon-octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[icon-octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[icon-octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[icon-octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[icon-octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[icon-octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[icon-octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[icon-octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[icon-octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[icon-octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[icon-octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[icon-octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[icon-octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[icon-octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[icon-octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[icon-octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[icon-octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[icon-octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[icon-octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[icon-octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[icon-octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[icon-octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[icon-octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
