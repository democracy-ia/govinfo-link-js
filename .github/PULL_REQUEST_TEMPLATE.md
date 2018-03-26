# <img align="top" alt="git-pull-request" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg">Submit a pull request (PR)

## Description of change(s)

_Please describe your changes here._

### Associated issue(s)

Closes #{ISSUE_NUMBER}

### Acceptance criteria/task completion

* [ ] The acceptance criteria for all associated issues have been completed, tested, and validated.
* [ ] All badges below show successful statuses.

  > [![Apache License][license-image]][license-url] [![FOSSA Status][fossa-image]][fossa-url] [![NPM version][npm-image]][npm-url]<br>[![NSP Status][nsp-image]][nsp-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br> [![MacOS and Ubuntu build statuses][travis-image]][travis-url] [![Windows build status][appveyor-image]][appveyor-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy code quality][codacy-image]][codacy-url]

## <img align="top" alt="checklist" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg"> PR check-list

> **![check][icon-octicon-check] Please verify and select ("check") each task/checkbox below.**

### 1. Code standards compliance

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

* [ ] `ESLint` passes.

### 2. Code quality [![Quality Gate][sonar-gate-img]][sonar-gate-url]

* [ ] The quality gateways pass with an "A" grade.

| Measure               | Scores                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Complexity`**      | [![Complexity][sonar-complexity-img]][sonar-complexity-url]<br>[![Cognitive complexity][sonar-cognitive-img]][sonar-cognitive-url]<br>[![Complexity per Class][sonar-complexity-class-img]][sonar-complexity-class-img]<br>[![Complexity per file][sonar-complexity-file-img]][sonar-complexity-file-img] <br>[![Complexity per Function][sonar-complexity-function-img]][sonar-complexity-function-url] |
| **`Duplications`**    | [![Duplications][sonar-duplications-img]][sonar-duplications-url]                                                                                                                                                                                                                                                                                                                                        |
| **`Issues`**          | [![Issues][sonar-issues-img]][sonar-issues-url]                                                                                                                                                                                                                                                                                                                                                          |
| **`Maintainability`** | [![Code smells][sonar-code-smells-img]][sonar-code-smells-url]<br>[![Maintainability][sonar-maintainability-img]][sonar-maintainability-url]<br>[![Technical debt][sonar-tech-debt-img]][sonar-tech-debt-url]                                                                                                                                                                                            |
| **`Reliability`**     | [![Reliability][sonar-reliability-img]][sonar-reliability-url]                                                                                                                                                                                                                                                                                                                                           |
| **`Security`**        | [![Security][sonar-security-img]][sonar-security-url]                                                                                                                                                                                                                                                                                                                                                    |

### 3. Test coverage [![Coverage Status][coveralls-image]][coveralls-url]

* [ ] The source code is 100% covered with passing specs.

> **![info][icon-octicon-info] These tasks are not required to open a PR, and may be addressed while the PR is open.**

[icon-octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[icon-octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[appveyor-image]: https://img.shields.io/appveyor/ci/democracy-ia/govinfo-link-js.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/democracy-ia/govinfo-link-js
[codacy-coverage-image]: https://img.shields.io/codacy/coverage/b3ac6aaaa3cf41d0897959c1e5d732a3.svg?style=flat-square
[codacy-image]: https://img.shields.io/codacy/grade/b3ac6aaaa3cf41d0897959c1e5d732a3.svg?style=flat-square
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
[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789
[npm-image]: https://badge.fury.io/js/govinfo-link-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/govinfo-link-js
[npms-image]: https://badges.npms.io/govinfo-link-js.svg?style=flat-square
[npms-url]: https://npms.io/search?q=govinfo-link-js
[nsp-image]: https://nodesecurity.io/orgs/democracy-ia/projects/cd614e9c-1458-438a-92ba-b7579052e1c8/badge
[nsp-url]: https://nodesecurity.io/orgs/democracy-ia/projects/cd614e9c-1458-438a-92ba-b7579052e1c8
[travis-image]: https://img.shields.io/travis/democracy-ia/govinfo-link-js.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.org/democracy-ia/govinfo-link-js
[sonar-code-smells-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=code_smells
[sonar-code-smells-url]: https://sonarcloud.io/component_measures/metric/code_smells/list?id=democracy-ia-govinfo-link-js&metric=code_smells
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=democracy-ia-govinfo-link-js&metric=cognitive_complexity
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=complexity
[sonar-complexity-function-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=function_complexity
[sonar-complexity-function-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=function_complexity
[sonar-complexity-file-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=file_complexity
[sonar-complexity-file-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=file_complexity
[sonar-complexity-class-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=class_complexity
[sonar-complexity-class-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=class_complexity
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=coverage
[sonar-duplications-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=duplicated_line_density
[sonar-duplications-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=duplicated_lines_density
[sonar-gate-img]: http://sonarcloud.io/api/badges/gate?key=democracy-ia-govinfo-link-js
[sonar-gate-url]: https://sonarcloud.io/dashboard?id=democracy-ia-govinfo-link-js
[sonar-issues-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=blocker_violations
[sonar-issues-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=violations
[sonar-maintainability-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=new_maintainability_rating
[sonar-maintainability-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=new_maintainability_rating
[sonar-reliability-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=new_reliability_rating
[sonar-reliability-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=new_reliability_rating
[sonar-security-img]: http://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=vulnerabilities
[sonar-security-url]: https://sonarcloud.io/component_measures?id=democracy-ia-govinfo-link-js&metric=vulnerabilities
[sonar-tech-debt-img]: https://sonarcloud.io/api/badges/measure?key=democracy-ia-govinfo-link-js&metric=sqale_debt_ratio
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=democracy-ia-govinfo-link-js&metric=sqale_debt_ratio
