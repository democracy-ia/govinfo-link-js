# govinfo-link-service-client-js

> A Node.js JavaScript client for accessing content and metadata collections from the U.S. Government Publishing Office's FDsys (Federal Digital System).

[![Apache License](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](http://www.apache.org/licenses/LICENSE-2.0)
[![node](https://img.shields.io/node/v/package.svg?style=flat-square)]()
[![Codacy](https://img.shields.io/codacy/id.svg?style=flat-square)]()
[![Travis CI](https://img.shields.io/travis/user/repository.svg?style=flat-square)](https://travis-ci.org/user/repository)

## Overview

The **govinfo** Link Service provides services for developers and webmasters to access content and metadata on **govinfo**. Current and planned services include a link service, list service, and search service. Please contact [askGPO](https://www.gpo.gov/askgpo/) for additional information about current or planned services.

## Table of contents

<!-- toc -->

- [Installation](#installation)
  * [For Node.js](#for-nodejs)
    + [npm](#npm)
      - [Local development](#local-development)
    + [git](#git)
  * [For browser](#for-browser)
  * [Webpack Configuration](#webpack-configuration)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Documentation](#documentation)
  * [Models](#models)
  * [Open API (Swagger) specifications](#open-api-swagger-specifications)
  * [Authorization](#authorization)

<!-- tocstop -->

<!-- tocend -->

## Installation

### For Node.js

> You can download and install Node.js at the [Node.js site](https://nodejs.org/).

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install govinfo-link-service-client-js --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your govinfo-link-service-client-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('govinfo-link-service-client-js')` in javascript files from the directory you ran the last 
command above from.

#### git

If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/govinfo-link-service-client-js
then install it via:

```shell
    npm install YOUR_USERNAME/govinfo-link-service-client-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

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

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var govinfoLinkService = require('govinfo-link-service-client-js');

var api = new govinfoLinkService.CodeOfFederalRegulations()

var titlenum = 56; // {Number} Title number. Sample value is 3.

var partnum = "partnum_example"; // {String} Part number. Sample value is 100

var opts = { 
  'sectionnum': "sectionnum_example", // {String} This is the section number. Sample value is 1. If section number is not provided the entire part will be returned.
  'year': "year_example", // {String} This is the four digit numerical year OR mostrecent. If year is not provided the most recent version of the CFR section or part is returned. Default is most recent. Sample value is 2011.
  'linkType': "linkType_example" // {String} This is the format of the returned document. Default is pdf. Other values are xml, mods, premis, details, context, related.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cfrFetchUsingGET(titlenum, partnum, opts, callback);

```

## API Endpoints

The link service is used to create embedded links to content and metadata on **govinfo** and is currently enabled for the collections below. The collection code is listed in parenthesis after each collection name, and the available queries are listed below each collection. More information about each query is provided on the individual collection page.

All URIs are relative to *https://www.govinfo.gov/link*

| Class                                                   | Method                                                                                      | HTTP request                                              | Description                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| *govinfoLinkService.CodeOfFederalRegulations*           | [**cfrFetchUsingGET**](docs/CodeOfFederalRegulations.md#cfrFetchUsingGET)                   | **GET** /cfr/{titlenum}/{partnum}                         | Query: title number, part number, section number, year OR most recent |
| *govinfoLinkService.CompilationOfPresidentialDocuments* | [**cpdDcpdFetchUsingGET**](docs/CompilationOfPresidentialDocuments.md#cpdDcpdFetchUsingGET) | **GET** /cpd/{year}                                       | Query: dcpd type OR dcpd number                                       |
| *govinfoLinkService.CompilationOfPresidentialDocuments* | [**cpdFetchUsingGET**](docs/CompilationOfPresidentialDocuments.md#cpdFetchUsingGET)         | **GET** /cpd/{doctype}/{docnum}                           | Query: document type, document number                                 |
| *govinfoLinkService.CongressionalBills*                 | [**billsFetchUsingGET**](docs/CongressionalBills.md#billsFetchUsingGET)                     | **GET** /bills/{congress}/{billtype}/{billnum}            | Query: bill number, bill type, congress, bill version OR most recent  |
| *govinfoLinkService.CongressionalCalendars*             | [**ccalFetchUsingGET**](docs/CongressionalCalendars.md#ccalFetchUsingGET)                   | **GET** /ccal/{chamber}/{section}                         | Query: chamber, section, publish date OR most recent                  |
| *govinfoLinkService.CongressionalCommitteePrints*       | [**cprtHouseFetchUsingGET**](docs/CongressionalCommitteePrints.md#cprtHouseFetchUsingGET)   | **GET** /cprt/{congress}/house/{printnum}/{committee}     | Query: congress, chamber, house print number, committee               |
| *govinfoLinkService.CongressionalCommitteePrints*       | [**cprtJacketFetchUsingGET**](docs/CongressionalCommitteePrints.md#cprtJacketFetchUsingGET) | **GET** /cprt/{congress}/{jacketid}                       | Query: congress, jacket number                                        |
| *govinfoLinkService.CongressionalCommitteePrints*       | [**cprtSenateFetchUsingGET**](docs/CongressionalCommitteePrints.md#cprtSenateFetchUsingGET) | **GET** /cprt/{congress}/senate/{printnum}                | Query: congress, chamber, senate print number                         |
| *govinfoLinkService.CongressionalDocuments*             | [**cdocFetchUsingGET**](docs/CongressionalDocuments.md#cdocFetchUsingGET)                   | **GET** /cdoc/{congress}/{doctype}/{docnum}               | Query: congress, document type, document number                       |
| *govinfoLinkService.CongressionalDocuments*             | [**cdocJacketFetchUsingGET**](docs/CongressionalDocuments.md#cdocJacketFetchUsingGET)       | **GET** /cdoc/{congress}/{jacketid}                       | Query: congress, jacket number                                        |
| *govinfoLinkService.CongressionalHearings*              | [**chrgHouseFetchUsingGET**](docs/CongressionalHearings.md#chrgHouseFetchUsingGET)          | **GET** /chrg/{congress}/house/{committee}/{serialnumber} | Query: congress, chamber, committee, house serial number              |
| *govinfoLinkService.CongressionalHearings*              | [**chrgJacketFetchUsingGET**](docs/CongressionalHearings.md#chrgJacketFetchUsingGET)        | **GET** /chrg/{congress}/{jacketid}                       | Query: congress, jacket number                                        |
| *govinfoLinkService.CongressionalHearings*              | [**chrgSenateFetchUsingGET**](docs/CongressionalHearings.md#chrgSenateFetchUsingGET)        | **GET** /chrg/{congress}/senate/{hearingnumber}           | Query: congress, chamber, senate hearing number                       |
| *govinfoLinkService.CongressionalRecordDaily*           | [**crecSectionFetchUsingGET**](docs/CongressionalRecordDaily.md#crecSectionFetchUsingGET)   | **GET** /crec/section/{section}                           | Query: section, publish date OR most recent                           |
| *govinfoLinkService.CongressionalRecordDaily*           | [**crecTypeFetchUsingGET**](docs/CongressionalRecordDaily.md#crecTypeFetchUsingGET)         | **GET** /crec/cas/{congress}/{billtype}/{billnum}         | Query: congress, bill number, bill type                               |
| *govinfoLinkService.CongressionalRecordDaily*           | [**crecTypeFetchUsingGET1**](docs/CongressionalRecordDaily.md#crecTypeFetchUsingGET1)       | **GET** /crec/type/{type}                                 | Query: document type, publish date OR most recent                     |
| *govinfoLinkService.CongressionalRecordDaily*           | [**crecVolumeFetchUsingGET**](docs/CongressionalRecordDaily.md#crecVolumeFetchUsingGET)     | **GET** /crec/{volume}/{pageprefix}/{page}                | Query: volume, page prefix, page number                               |
| *govinfoLinkService.CongressionalReports*               | [**crptBillFetchUsingGET**](docs/CongressionalReports.md#crptBillFetchUsingGET)             | **GET** /crpt/{congress}/{associatedbillnum}              | Query: associated bill, congress                                      |
| *govinfoLinkService.CongressionalReports*               | [**crptReportFetchUsingGET**](docs/CongressionalReports.md#crptReportFetchUsingGET)         | **GET** /crpt/{congress}/{doctype}/{reportnum}            | Query: congress, report type, report number                           |
| *govinfoLinkService.FederalRegister*                    | [**frDocFetchUsingGET**](docs/FederalRegister.md#frDocFetchUsingGET)                        | **GET** /fr/{frdocnum}                                    | Query: Federal Register document number                               |
| *govinfoLinkService.FederalRegister*                    | [**frVolumeFetchUsingGET**](docs/FederalRegister.md#frVolumeFetchUsingGET)                  | **GET** /fr/{volume}/{page}                               | Query: volume, page number                                            |
| *govinfoLinkService.PublicAndPrivateLaws*               | [**plawBillFetchUsingGET**](docs/PublicAndPrivateLaws.md#plawBillFetchUsingGET)             | **GET** /plaw/{congress}/{associatedbillnum}              | Query: associated bill number, congress                               |
| *govinfoLinkService.PublicAndPrivateLaws*               | [**plawStatuteFetchUsingGET**](docs/PublicAndPrivateLaws.md#plawStatuteFetchUsingGET)       | **GET** /plaw/{statutecitation}                           | Query: Statutes at Large citation                                     |
| *govinfoLinkService.PublicAndPrivateLaws*               | [**plawTypeFetchUsingGET**](docs/PublicAndPrivateLaws.md#plawTypeFetchUsingGET)             | **GET** /plaw/{congress}/{lawtype}/{lawnum}               | Query: congress, law type, law number                                 |
| *govinfoLinkService.StatutesAtLarge*                    | [**statuteTypeFetchUsingGET**](docs/StatutesAtLarge.md#statuteTypeFetchUsingGET)            | **GET** /statute/{congress}/{lawtype}/{lawnum}            | Query: congress, law type, law number                                 |
| *govinfoLinkService.StatutesAtLarge*                    | [**statuteVolumeFetchUsingGET**](docs/StatutesAtLarge.md#statuteVolumeFetchUsingGET)        | **GET** /statute/{volume}/{page}                          | Query: volume, page number                                            |
| *govinfoLinkService.UnitedStatesCode*                   | [**uscodeFetchUsingGET**](docs/UnitedStatesCode.md#uscodeFetchUsingGET)                     | **GET** /uscode/{title}/{section}                         | Query: title number, type, section, year OR most recent               |


## Documentation

### Models

1. [CodeOfFederalRegulations](./docs/CodeOfFederalRegulationsCFRApi.md)
1. [CompilationOfPresidentialDocuments](./docs/CompilationOfPresidentialDocumentsCPDApi.md)
1. [CongressionalBills](./docs/CongressionalBillsBILLSApi.md)
1. [CongressionalCalendars](./docs/CongressionalCalendarsCCALApi.md)
1. [CongressionalCommitteePrints](./docs/CongressionalCommitteePrintsCPRTApi.md)
1. [CongressionalDocuments](./docs/CongressionalDocumentsCDOCApi.md)
1. [CongressionalHearings](./docs/CongressionalHearingsCHRGApi.md)
1. [CongressionalRecordDaily](./docs/CongressionalRecordDailyCRECApi.md)
1. [CongressionalReports](./docs/CongressionalReportsCRPTApi.md)
1. [FederalRegister](./docs/FederalRegisterFRApi.md)
1. [PublicAndPrivateLaws](./docs/PublicAndPrivateLawsPLAWApi.md)
1. [StatutesAtLarge](./docs/StatutesAtLargeSTATUTEApi.md)
1. [UnitedStatesCode](./docs/UnitedStatesCodeUSCODEApi.md)

### Open API (Swagger) specifications

1. [swagger.json](./docs/swagger.json)
1. [swagger.yaml](./docs/swagger.yaml)

### Authorization

No endpoints require authorization.

---

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.5.0
- Package version: 0.5.0
- Build package: `io.swagger.codegen.languages.JavascriptClientCodegen`

---
