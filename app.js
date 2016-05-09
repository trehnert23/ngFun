var app = angular.module("ngFun", []);


app.controller("PokemonCtrl", function($scope) {

	$scope.searchPokemon = '';



	$scope.info_highlighted = [
						{
							"id": "0",
							"text": "",
							"entities": []
						}, {
							"id": "1",
							"text": "EXECUTION COPY ",
							"entities": []
						}, {
							"id": "2",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "3",
							"text": "THIRD AMENDED AND RESTATED ",
							"entities": []
						}, {
							"id": "4",
							"text": "AGREEMENT OF LIMITED PARTNERSHIP ",
							"entities": []
						}, {
							"id": "5",
							"text": "OF ",
							"entities": []
						}, {
							"id": "6",
							"text": "THE RESOLUTE FUND III, L.P.",
							"entities": []
						}, {
							"id": "7",
							"text": "",
							"entities": []
						}, {
							"id": "8",
							"text": "",
							"entities": []
						}, {
							"id": "9",
							"text": "TABLE OF CONTENTS ",
							"entities": []
						}, {
							"id": "10",
							"text": "Page ",
							"entities": []
						}, {
							"id": "11",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "12",
							"text": "ARTICLE I GENERAL PROVISIONS .............................................................................. 1 ",
							"entities": []
						}, {
							"id": "13",
							"text": "Section 1.1 Formation............................................................................................. 1 ",
							"entities": []
						}, {
							"id": "14",
							"text": "Section 1.2 Name.................................................................................................... 1 ",
							"entities": []
						}, {
							"id": "15",
							"text": "Section 1.3 Purpose................................................................................................. 1 ",
							"entities": []
						}, {
							"id": "16",
							"text": "Section 1.4 Place of Business ................................................................................. 1 ",
							"entities": []
						}, {
							"id": "17",
							"text": "ARTICLE II DEFINITIONS; DETERMINATIONS; CAPITAL CONTRIBUTIONS; CAPITAL ACCOUNTS................................................ 2 ",
							"entities": []
						}, {
							"id": "18",
							"text": "Section 2.1 Definitions; Determinations................................................................. 2 ",
							"entities": []
						}, {
							"id": "19",
							"text": "Section 2.2 Capital Contribution Commitment; Key Person Provision ............... 19 ",
							"entities": []
						}, {
							"id": "20",
							"text": "Section 2.3 Capital Accounts................................................................................ 22 ",
							"entities": []
						}, {
							"id": "21",
							"text": "Section 2.4 Distributions in Kind.......................................................................... 23 ",
							"entities": []
						}, {
							"id": "22",
							"text": "Section 2.5 Determination of Voting Thresholds ................................................. 24 ",
							"entities": []
						}, {
							"id": "23",
							"text": "ARTICLE III DISTRIBUTIONS ......................................................................................... 24 ",
							"entities": []
						}, {
							"id": "24",
							"text": "Section 3.1 Distribution Policy............................................................................. 24 ",
							"entities": []
						}, {
							"id": "25",
							"text": "Section 3.2 Distribution of Short-Term Investment Income ................................ 25 ",
							"entities": []
						}, {
							"id": "26",
							"text": "Section 3.3 Distributions of Current Cash Income and Proceeds From Dispositions of or Partial Realizations with Respect to Investments and In Kind Distributions .............................................. 25 ",
							"entities": []
						}, {
							"id": "27",
							"text": "Section 3.4 Foreign Taxes..................................................................................... 27 ",
							"entities": []
						}, {
							"id": "28",
							"text": "ARTICLE IV MANAGEMENT FEE AND ORGANIZATIONAL EXPENSES ............... 28 ",
							"entities": []
						}, {
							"id": "29",
							"text": "Section 4.1 Management Fee................................................................................ 28 ",
							"entities": []
						}, {
							"id": "30",
							"text": "Section 4.2 Organizational and Partnership Expenses.......................................... 30 ",
							"entities": []
						}, {
							"id": "31",
							"text": "Section 4.3 Ordinary Operating Expenses ............................................................ 30 ",
							"entities": []
						}, {
							"id": "32",
							"text": "ARTICLE V GENERAL PARTNER.................................................................................. 30 ",
							"entities": []
						}, {
							"id": "33",
							"text": "Section 5.1 Investment Opportunities; Devotion of Time; Management Authority............................................................................................ 30 ",
							"entities": [{
								"id": "33",
								"entityType": "ORGANIZATION",
								"end": 54,
								"start": 50,
								"value": "Time"
							}, {
								"id": "33",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 56,
								"value": "Management Authority"
							}]
						}, {
							"id": "34",
							"text": "Section 5.2 Use of Affiliates................................................................................. 31 ",
							"entities": []
						}, {
							"id": "35",
							"text": "Section 5.3 Indebtedness....................................................................................... 31 ",
							"entities": []
						}, {
							"id": "36",
							"text": "Section 5.4 Limitation on Investments ................................................................. 31 ",
							"entities": []
						}, {
							"id": "37",
							"text": "Section 5.5 UBTI; ECI.......................................................................................... 34 ",
							"entities": []
						}, {
							"id": "38",
							"text": "Section 5.6 ERISA Matters................................................................................... 34 ",
							"entities": []
						}, {
							"id": "39",
							"text": "Section 5.7 Conflicts of Interest............................................................................ 35",
							"entities": []
						}, {
							"id": "40",
							"text": "",
							"entities": []
						}, {
							"id": "41",
							"text": "",
							"entities": []
						}, {
							"id": "42",
							"text": "TABLE OF CONTENTS (continued) ",
							"entities": []
						}, {
							"id": "43",
							"text": "Page ",
							"entities": []
						}, {
							"id": "44",
							"text": "704094543 -ii ",
							"entities": []
						}, {
							"id": "45",
							"text": "Section 5.8 No Transfer of General Partnership Interest; No Withdrawal or Loans.................................................................................................. 36 ",
							"entities": []
						}, {
							"id": "46",
							"text": "Section 5.9 Removal of the General Partner......................................................... 36 ",
							"entities": []
						}, {
							"id": "47",
							"text": "Section 5.10 No Liability to Limited Partners ........................................................ 38 ",
							"entities": []
						}, {
							"id": "48",
							"text": "Section 5.11 Indemnification of General Partner, the Manager and Advisory Committee.......................................................................................... 39 ",
							"entities": [{
								"id": "48",
								"entityType": "ORGANIZATION",
								"end": 83,
								"start": 65,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "49",
							"text": "Section 5.12 Co-investments with Fund II; Formation of New Fund or Business Endeavor ............................................................................. 40 ",
							"entities": []
						}, {
							"id": "50",
							"text": "Section 5.13 Interest as a Limited Partner .............................................................. 41 ",
							"entities": []
						}, {
							"id": "51",
							"text": "Section 5.14 Parallel Vehicles ................................................................................ 41 ",
							"entities": []
						}, {
							"id": "52",
							"text": "Section 5.15 Separate Investment Entities.............................................................. 42 ",
							"entities": []
						}, {
							"id": "53",
							"text": "Section 5.16 Media Company Investments ............................................................ 43 ",
							"entities": []
						}, {
							"id": "54",
							"text": "Section 5.17 Co-investment Partnerships ............................................................... 44 ",
							"entities": []
						}, {
							"id": "55",
							"text": "Section 5.18 Bridge Leveraging ............................................................................. 45 ",
							"entities": []
						}, {
							"id": "56",
							"text": "ARTICLE VI LIMITED PARTNERS.................................................................................. 47 ",
							"entities": []
						}, {
							"id": "57",
							"text": "Section 6.1 Limited Liability ................................................................................ 47 ",
							"entities": []
						}, {
							"id": "58",
							"text": "Section 6.2 Transfer of Limited Partnership Interests .......................................... 47 ",
							"entities": []
						}, {
							"id": "59",
							"text": "Section 6.3 No Withdrawal................................................................................... 49 ",
							"entities": []
						}, {
							"id": "60",
							"text": "Section 6.4 No Termination.................................................................................. 49 ",
							"entities": []
						}, {
							"id": "61",
							"text": "Section 6.5 Subsequent Limited Partners ............................................................. 49 ",
							"entities": []
						}, {
							"id": "62",
							"text": "Section 6.6 Regulatory Matters............................................................................. 52 ",
							"entities": []
						}, {
							"id": "63",
							"text": "Section 6.7 Indemnification and Reimbursement for Payments on Behalf of a Partner/Partner Clawback................................................................ 53 ",
							"entities": []
						}, {
							"id": "64",
							"text": "Section 6.8 Section 754 Election .......................................................................... 55 ",
							"entities": []
						}, {
							"id": "65",
							"text": "Section 6.9 Non-Voting Interests; BHCA Partners .............................................. 55 ",
							"entities": []
						}, {
							"id": "66",
							"text": "Section 6.10 Excused/Excluded Investments ......................................................... 56 ",
							"entities": []
						}, {
							"id": "67",
							"text": "Section 6.11 Limited Partner’s Default on Commitment ....................................... 56 ",
							"entities": []
						}, {
							"id": "68",
							"text": "Section 6.12 Investment Company Act Limitations ............................................... 59 ",
							"entities": []
						}, {
							"id": "69",
							"text": "Section 6.13 FATCA .............................................................................................. 59 ",
							"entities": []
						}, {
							"id": "70",
							"text": "ARTICLE VII ADVISORY COMMITTEE .......................................................................... 59 ",
							"entities": []
						}, {
							"id": "71",
							"text": "Section 7.1 Advisory Committee.......................................................................... 59",
							"entities": [{
								"id": "71",
								"entityType": "ORGANIZATION",
								"end": 30,
								"start": 12,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "72",
							"text": "",
							"entities": []
						}, {
							"id": "73",
							"text": "",
							"entities": []
						}, {
							"id": "74",
							"text": "TABLE OF CONTENTS (continued) ",
							"entities": []
						}, {
							"id": "75",
							"text": "Page ",
							"entities": []
						}, {
							"id": "76",
							"text": "704094543 -iii ",
							"entities": []
						}, {
							"id": "77",
							"text": "ARTICLE VIII DURATION AND TERMINATION ............................................................ 60 ",
							"entities": []
						}, {
							"id": "78",
							"text": "Section 8.1 Duration ............................................................................................. 60 ",
							"entities": []
						}, {
							"id": "79",
							"text": "Section 8.2 Early Termination .............................................................................. 60 ",
							"entities": []
						}, {
							"id": "80",
							"text": "Section 8.3 Termination and Liquidation of Partnership Interests; Annual Determination of General Partner Give Back.................................... 61 ",
							"entities": []
						}, {
							"id": "81",
							"text": "ARTICLE IX VALUATION OF PARTNERSHIP ASSETS............................................... 64 ",
							"entities": []
						}, {
							"id": "82",
							"text": "Section 9.1 Normal Valuation............................................................................... 64 ",
							"entities": []
						}, {
							"id": "83",
							"text": "Section 9.2 Restrictions on Transfer or Blockage ................................................ 64 ",
							"entities": []
						}, {
							"id": "84",
							"text": "Section 9.3 Objection to Valuation....................................................................... 64 ",
							"entities": []
						}, {
							"id": "85",
							"text": "Section 9.4 Write-down to Value.......................................................................... 65 ",
							"entities": []
						}, {
							"id": "86",
							"text": "ARTICLE X BOOKS OF ACCOUNTS; MEETINGS....................................................... 65 ",
							"entities": []
						}, {
							"id": "87",
							"text": "Section 10.1 Books ................................................................................................. 65 ",
							"entities": []
						}, {
							"id": "88",
							"text": "Section 10.2 Fiscal Year ......................................................................................... 65 ",
							"entities": []
						}, {
							"id": "89",
							"text": "Section 10.3 Reports ............................................................................................... 65 ",
							"entities": []
						}, {
							"id": "90",
							"text": "Section 10.4 Tax Allocation ................................................................................... 66 ",
							"entities": []
						}, {
							"id": "91",
							"text": "Section 10.5 Tax Controversies .............................................................................. 67 ",
							"entities": []
						}, {
							"id": "92",
							"text": "Section 10.6 Certain Tax Elections......................................................................... 67 ",
							"entities": []
						}, {
							"id": "93",
							"text": "Section 10.7 Code Section 83 Safe Harbor Election. ............................................. 67 ",
							"entities": []
						}, {
							"id": "94",
							"text": "Section 10.8 Tax Basis Elections............................................................................ 68 ",
							"entities": []
						}, {
							"id": "95",
							"text": "Section 10.9 Annual Meeting ................................................................................. 69 ",
							"entities": []
						}, {
							"id": "96",
							"text": "Section 10.10 Change in Accountants ...................................................................... 69 ",
							"entities": []
						}, {
							"id": "97",
							"text": "ARTICLE XI CERTIFICATE OF LIMITED PARTNERSHIP; POWER OF ATTORNEY.................................................................................................. 69 ",
							"entities": []
						}, {
							"id": "98",
							"text": "Section 11.1 Certificate of Partnership ................................................................... 69 ",
							"entities": []
						}, {
							"id": "99",
							"text": "Section 11.2 Power of Attorney.............................................................................. 69 ",
							"entities": []
						}, {
							"id": "100",
							"text": "ARTICLE XII MISCELLANEOUS ...................................................................................... 70 ",
							"entities": []
						}, {
							"id": "101",
							"text": "Section 12.1 Amendments ...................................................................................... 70 ",
							"entities": []
						}, {
							"id": "102",
							"text": "Section 12.2 Successors .......................................................................................... 71 ",
							"entities": []
						}, {
							"id": "103",
							"text": "Section 12.3 Governing Law; Severability............................................................. 71 ",
							"entities": []
						}, {
							"id": "104",
							"text": "Section 12.4 Notices ............................................................................................... 72",
							"entities": []
						}, {
							"id": "105",
							"text": "",
							"entities": []
						}, {
							"id": "106",
							"text": "",
							"entities": []
						}, {
							"id": "107",
							"text": "TABLE OF CONTENTS (continued) ",
							"entities": []
						}, {
							"id": "108",
							"text": "Page ",
							"entities": []
						}, {
							"id": "109",
							"text": "704094543 -iv ",
							"entities": []
						}, {
							"id": "110",
							"text": "Section 12.5 Legal Counsel .................................................................................... 72 ",
							"entities": []
						}, {
							"id": "111",
							"text": "Section 12.6 Miscellaneous .................................................................................... 72",
							"entities": []
						}, {
							"id": "112",
							"text": "",
							"entities": []
						}, {
							"id": "113",
							"text": "",
							"entities": []
						}, {
							"id": "114",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "115",
							"text": "Schedule 1 Limited Partners/Commitments/Notice Information Exhibit A Form of Guaranty Agreement",
							"entities": []
						}, {
							"id": "116",
							"text": "",
							"entities": []
						}, {
							"id": "117",
							"text": "",
							"entities": []
						}, {
							"id": "118",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "119",
							"text": "THIRD AMENDED AND RESTATED ",
							"entities": []
						}, {
							"id": "120",
							"text": "AGREEMENT OF LIMITED PARTNERSHIP OF ",
							"entities": []
						}, {
							"id": "121",
							"text": "THE RESOLUTE FUND III, L.P. ",
							"entities": []
						}, {
							"id": "122",
							"text": "THIS THIRD AMENDED AND RESTATED AGREEMENT OF LIMITED PARTNERSHIP (this “Agreement”) is dated effective as of April 30, 2014 between Resolute Fund Partners III, L.P., a Delaware limited partnership (in its capacity as general partner of the Partnership, the “General Partner”), and the limited partners listed in Schedule 1 attached hereto (in their capacities as limited partners of the Partnership, the “Limited Partners”) (the General Partner and the Limited Partners being herein collectively called the “Partners”). Capitalized terms not otherwise defined shall have the meanings ascribed to such terms in Section 2.1(a). ",
							"entities": [{
								"id": "122",
								"entityType": "ORGANIZATION",
								"end": 164,
								"start": 160,
								"value": "L.P."
							}, {
								"id": "122",
								"entityType": "LOCATION",
								"end": 176,
								"start": 168,
								"value": "Delaware"
							}, {
								"id": "122",
								"entityType": "ORGANIZATION",
								"end": 469,
								"start": 453,
								"value": "Limited Partners"
							}]
						}, {
							"id": "123",
							"text": "The General Partner and the initial limited partner entered into an Agreement of Limited Partnership, dated as of January 15, 2013 (the “Original Agreement”). The Original Agreement was subsequently amended and restated on October 11, 2013 (the “Amended and Restated Agreement”). The Amended and Restated Agreement was subsequently amended and restated on January 22, 2014 (the “Second Amended and Restated Agreement”). The parties hereto wish to amend and restate the Second Amended and Restated Agreement in the manner set forth herein. ",
							"entities": []
						}, {
							"id": "124",
							"text": "ARTICLE I ",
							"entities": []
						}, {
							"id": "125",
							"text": "GENERAL PROVISIONS ",
							"entities": []
						}, {
							"id": "126",
							"text": "Section 1.1 Formation. The Partners hereby agree to continue the limited partnership (the “Partnership”) pursuant to and in accordance with the Delaware Revised Uniform Limited Partnership Act (the “Delaware Partnership Act”). ",
							"entities": [{
								"id": "126",
								"entityType": "ORGANIZATION",
								"end": 35,
								"start": 27,
								"value": "Partners"
							}]
						}, {
							"id": "127",
							"text": "Section 1.2 Name. The name of the Partnership will be “The Resolute Fund III, L.P.” or such other name or names as the General Partner may from time to time designate. The General Partner will notify Limited Partners in writing of any change to the name of the Partnership. ",
							"entities": [{
								"id": "127",
								"entityType": "ORGANIZATION",
								"end": 187,
								"start": 172,
								"value": "General Partner"
							}, {
								"id": "127",
								"entityType": "ORGANIZATION",
								"end": 216,
								"start": 200,
								"value": "Limited Partners"
							}]
						}, {
							"id": "128",
							"text": "Section 1.3 Purpose. Subject to the express limitations set forth herein, the Partnership is organized for the object and purpose of (i) investing in equity and equity-related investments in companies primarily in the United States, including, without limitation, the making of investments in debt obligations of companies in anticipation of the exchange or conversion of such obligations into equity securities of such companies generally consistent with the investment strategy described in the Partnership’s Private Placement Memorandum and (ii) managing and monitoring such investments and engaging in such activities incidental or ancillary thereto as the General Partner deems necessary or advisable. ",
							"entities": [{
								"id": "128",
								"entityType": "LOCATION",
								"end": 231,
								"start": 218,
								"value": "United States"
							}]
						}, {
							"id": "129",
							"text": "Section 1.4 Place of Business. The Partnership will maintain offices and places of business at 399 Park Avenue, 30th floor, New York, New York 10022, or at such other place or",
							"entities": [{
								"id": "129",
								"entityType": "LOCATION",
								"end": 110,
								"start": 99,
								"value": "Park Avenue"
							}, {
								"id": "129",
								"entityType": "LOCATION",
								"end": 132,
								"start": 124,
								"value": "New York"
							}, {
								"id": "129",
								"entityType": "LOCATION",
								"end": 142,
								"start": 134,
								"value": "New York"
							}]
						}, {
							"id": "130",
							"text": "",
							"entities": []
						}, {
							"id": "131",
							"text": "",
							"entities": []
						}, {
							"id": "132",
							"text": "704094543 -2- ",
							"entities": []
						}, {
							"id": "133",
							"text": "places in the United States as the General Partner may from time to time designate; provided, however, that if the General Partner designates different places of business, it shall promptly notify the Limited Partners in writing. ",
							"entities": [{
								"id": "133",
								"entityType": "LOCATION",
								"end": 27,
								"start": 14,
								"value": "United States"
							}, {
								"id": "133",
								"entityType": "ORGANIZATION",
								"end": 130,
								"start": 115,
								"value": "General Partner"
							}, {
								"id": "133",
								"entityType": "ORGANIZATION",
								"end": 217,
								"start": 201,
								"value": "Limited Partners"
							}]
						}, {
							"id": "134",
							"text": "ARTICLE II ",
							"entities": []
						}, {
							"id": "135",
							"text": "DEFINITIONS; DETERMINATIONS; CAPITAL CONTRIBUTIONS; CAPITAL ACCOUNTS ",
							"entities": []
						}, {
							"id": "136",
							"text": "Section 2.1 Definitions; Determinations. ",
							"entities": []
						}, {
							"id": "137",
							"text": "(a) For purposes of this Agreement the following capitalized terms shall have the meanings set forth below: ",
							"entities": []
						}, {
							"id": "138",
							"text": "“Additional Limited Partners” has the meaning set forth in Section 6.5. ",
							"entities": []
						}, {
							"id": "139",
							"text": "“Advisory Committee” has the meaning set forth in Section 7.1. ",
							"entities": [{
								"id": "139",
								"entityType": "ORGANIZATION",
								"end": 19,
								"start": 1,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "140",
							"text": "“Advisory Fees” means directors, consulting, monitoring or similar fees in respect of a Portfolio Company, including options, warrants or other non-cash compensation received by a director or officer of a Portfolio Company which shall be valued at the earliest of (v) the time of exercise of such instrument, (w) three years after the underlying security of such instrument becomes a Marketable Security, (x) the first day of the last Management Fee Period prior to the dissolution of the Partnership, (y) the date the Partnership disposes of the Portfolio Investment that gave rise to such fee or (z) the date such option, warrant or other non-cash compensation was disposed of by the General Partner, the Manager, the members of the Senior Investment Team or their Affiliates and thereafter credited against Management Fees or paid to the Partnership pursuant to Section 4.1(c), in each such case to the extent actually paid, granted, issued or distributed, as applicable by a Portfolio Company and received by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates in respect of Portfolio Investments; provided, however, that (A) such fees shall not include, in each case, any such amounts that (1) are applied to cover amounts paid by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates that constitute unreimbursed (i) out-of-pocket expenses of such persons incurred in generating such fees, and (ii) Partnership Expenses incurred in generating such fees or (2) are paid to the Fund II Manager in respect of the capital invested by Fund II in any co-investment by the Partnership and Fund II pursuant to Section 5.12, (B) to the extent that the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates were actually reimbursed by the Partnership for any Partnership Expenses incurred in generating such fees, such fees will first be applied to repay the Partnership for such Partnership Expenses and (C) prior to application of such fees as Fee Offsets, such fees will first be applied to repay the Partnership for all third-party costs and expenses in connection with transactions that are not consummated that are not reimbursed by a Portfolio Company and costs of third-party brokers, consultants, research and market analyses that are borne by the Partnership.",
							"entities": [{
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 105,
								"start": 88,
								"value": "Portfolio Company"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 222,
								"start": 205,
								"value": "Portfolio Company"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 996,
								"start": 979,
								"value": "Portfolio Company"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 1088,
								"start": 1066,
								"value": "Senior Investment Team"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 1381,
								"start": 1359,
								"value": "Senior Investment Team"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 1858,
								"start": 1836,
								"value": "Senior Investment Team"
							}, {
								"id": "140",
								"entityType": "ORGANIZATION",
								"end": 2356,
								"start": 2339,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "141",
							"text": "",
							"entities": []
						}, {
							"id": "142",
							"text": "",
							"entities": []
						}, {
							"id": "143",
							"text": "704094543 -3- ",
							"entities": []
						}, {
							"id": "144",
							"text": "“Affiliate” has the meaning set forth in Rule 405 promulgated under the Securities Act. ",
							"entities": []
						}, {
							"id": "145",
							"text": "“Agent” has the meaning set forth in Section 2.4(b). ",
							"entities": []
						}, {
							"id": "146",
							"text": "“Agreement” has the meaning set forth in the introduction. ",
							"entities": []
						}, {
							"id": "147",
							"text": "“Amended and Restated Agreement” has the meaning set forth in the introduction. ",
							"entities": []
						}, {
							"id": "148",
							"text": "“Available Profits” means, with respect to a Waived Fee Amount, the cumulative amount of items of Partnership income and gain (such items being “Partnership Profits”) realized after the Waived Fee Notice giving rise to such Waived Fee Amount. The amount of Partnership Profits realized after a Waived Fee Notice for the purpose of this Available Profits definition shall equal the amount of Partnership income and gain realized after the Waived Fee Notice for purposes of maintaining Capital Accounts; provided, however, the amount of Partnership gain realized after a Waived Fee Notice that is attributable to any Portfolio Investment held by the Partnership at the time of such Waived Fee Notice that is taken into account in calculating Partnership Profits shall equal the excess, if any, of (1) the amount the Partnership realizes on the sale, transfer, or other disposition of such Portfolio Investment or its assets over (2) the fair market value (as determined by the General Partner) of such Portfolio Investment or its assets, as applicable, on the date of such Waived Fee Notice. Notwithstanding the two preceding sentences, the aggregate amount of all items of Partnership Profits for any taxable year included in Available Profits shall not exceed the total amount of the Partnership’s net income and gain for such taxable year as determined for federal income tax purposes, except that gain attributable to a Portfolio Investment shall be determined as described in the proviso to the preceding sentence. Notwithstanding the three preceding sentences, to the extent of the amount by which the Special Profit Interest with respect to a Portfolio Investment exceeds the Deemed Contribution with respect to such Portfolio Investment, Available Profits includes an allocable share of all items of income or gain realized by the Partnership with respect to such Portfolio Investment. ",
							"entities": []
						}, {
							"id": "149",
							"text": "“Basis” of any security means the basis of such security as determined in accordance with the Code less the amount of any write-down pursuant to Section 9.4 and as further adjusted by the General Partner in its reasonable discretion to reverse the effects of any exchange of securities that would result in an increase in tax basis pursuant to the Code. ",
							"entities": [{
								"id": "149",
								"entityType": "ORGANIZATION",
								"end": 203,
								"start": 188,
								"value": "General Partner"
							}]
						}, {
							"id": "150",
							"text": "“Benefit Plan Investor” means any Partner that is a “benefit plan investor” as defined in Section 3(42) of ERISA and any regulations promulgated thereunder. ",
							"entities": []
						}, {
							"id": "151",
							"text": "“BHC Act” means the Bank Holding Company Act of 1956, as amended (including, without limitation, any modifications made pursuant to the Gramm-Leach-Bliley Act), and other similar banking legislation, and the rules and regulations promulgated thereunder. ",
							"entities": []
						}, {
							"id": "152",
							"text": "“BHCA Partner” means a Limited Partner that is a bank holding company, as defined in Section 2(a) of the BHC Act, or a non-bank subsidiary of such bank holding company, provided, that such Limited Partner shall not be a BHCA Partner if (i) it is a financial holding company, as defined in Section 2(p) of the BHC Act, or a non-bank subsidiary thereof and is acting pursuant to Section 4(k)(4)(h) or Section 4(k)(4)(i) of the BHC Act as set forth in a notice to such effect to",
							"entities": []
						}, {
							"id": "153",
							"text": "",
							"entities": []
						}, {
							"id": "154",
							"text": "",
							"entities": []
						}, {
							"id": "155",
							"text": "704094543 -4- ",
							"entities": []
						}, {
							"id": "156",
							"text": "the General Partner; or (ii) it is a small business investment company licensed as such under the Small Business Investment Act of 1958, as amended. ",
							"entities": []
						}, {
							"id": "157",
							"text": "“Bridge Financing” means, with respect to the Partnership’s investment in a Portfolio Company, that portion of the investment that the Partnership provides as interim financing (including guarantees of debt financing) in anticipation of, or to support, a permanent investment by the Partnership in such Portfolio Company and that the Partnership intends to cause the Portfolio Company to repay or refinance within 18 months after the date of such investment in the Portfolio Company and which the General Partner designates in the Capital Call Notice therefor. During the first 18 months following a Bridge Financing, such Bridge Financing shall be treated as a Short-Term Investment. A Bridge Financing that is outstanding 18 months following the making of such Bridge Financing, or which has been written off prior to 18 months of its making, shall be treated by the Partnership as a permanent investment in a Portfolio Company. ",
							"entities": [{
								"id": "157",
								"entityType": "ORGANIZATION",
								"end": 320,
								"start": 303,
								"value": "Portfolio Company"
							}, {
								"id": "157",
								"entityType": "ORGANIZATION",
								"end": 384,
								"start": 367,
								"value": "Portfolio Company"
							}, {
								"id": "157",
								"entityType": "ORGANIZATION",
								"end": 482,
								"start": 465,
								"value": "Portfolio Company"
							}, {
								"id": "157",
								"entityType": "ORGANIZATION",
								"end": 929,
								"start": 912,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "158",
							"text": "“Bridge Leveraging” has the meaning set forth in Section 5.18(a). ",
							"entities": []
						}, {
							"id": "159",
							"text": "“Bridge Leveraging/Credit Support Facility” has the meaning set forth in Section 5.18(a). ",
							"entities": []
						}, {
							"id": "160",
							"text": "“Built-In Tax Amount” means, with respect to any distribution of securities in-kind received by the General Partner, an amount equal to the taxes that would be payable by the General Partner (and its direct and indirect partners), assuming (i) such securities were sold in a taxable transaction immediately after their receipt by the General Partner for an amount equal to their value and (ii) any gains were taxed at the highest marginal rates applicable to any of the General Partner’s partners or former partners, applying the assumptions set forth in Section 3.3(b) in the same manner as if such securities had been sold by the Partnership immediately before such distribution. ",
							"entities": [{
								"id": "160",
								"entityType": "ORGANIZATION",
								"end": 190,
								"start": 175,
								"value": "General Partner"
							}, {
								"id": "160",
								"entityType": "ORGANIZATION",
								"end": 349,
								"start": 334,
								"value": "General Partner"
							}, {
								"id": "160",
								"entityType": "ORGANIZATION",
								"end": 485,
								"start": 470,
								"value": "General Partner"
							}]
						}, {
							"id": "161",
							"text": "“Business Day” means any day other than (i) Saturday or Sunday or (ii) any other day on which banks located in New York City generally are closed for business. ",
							"entities": [{
								"id": "161",
								"entityType": "LOCATION",
								"end": 124,
								"start": 111,
								"value": "New York City"
							}]
						}, {
							"id": "162",
							"text": "“Capital Account” has the meaning set forth in Section 2.3. ",
							"entities": []
						}, {
							"id": "163",
							"text": "“Capital Call” has the meaning set forth in Section 2.2(a). ",
							"entities": []
						}, {
							"id": "164",
							"text": "“Capital Call Notice” has the meaning set forth in Section 2.2(a). ",
							"entities": []
						}, {
							"id": "165",
							"text": "“Capital Contribution” of any Partner means the amount received by the Partnership from such Partner as an actual contribution. ",
							"entities": []
						}, {
							"id": "166",
							"text": "“Capitalized Partnership Expenses” means Partnership Expenses that are reflected in the Basis of Portfolio Investments. ",
							"entities": []
						}, {
							"id": "167",
							"text": "“Carried Interest” means the General Partner’s 20% interest in the Partnership’s distributions specified in Section 3.3(a)(ii)(B) and Section 3.3(a)(iii)(B). ",
							"entities": [{
								"id": "167",
								"entityType": "ORGANIZATION",
								"end": 44,
								"start": 29,
								"value": "General Partner"
							}]
						}, {
							"id": "168",
							"text": "“Carried Interest Reserve Account” has the meaning set forth in Section 8.3(c).",
							"entities": []
						}, {
							"id": "169",
							"text": "",
							"entities": []
						}, {
							"id": "170",
							"text": "",
							"entities": []
						}, {
							"id": "171",
							"text": "704094543 -5- ",
							"entities": []
						}, {
							"id": "172",
							"text": "“Certificate” has the meaning set forth in Section 11.1. ",
							"entities": []
						}, {
							"id": "173",
							"text": "“Code” means the U.S. Internal Revenue Code of 1986, as amended. ",
							"entities": [{
								"id": "173",
								"entityType": "LOCATION",
								"end": 21,
								"start": 17,
								"value": "U.S."
							}]
						}, {
							"id": "174",
							"text": "“Co-Investment Opportunity” has the meaning set forth in Section 5.17(a). ",
							"entities": []
						}, {
							"id": "175",
							"text": "“Co-Investment Partnership” means any partnership, limited liability company or other entity that is an Affiliate of the General Partner, the Manager or any member of the Senior Investment Team, is not a Parallel Vehicle or a Separate Investment Entity, and is organized to invest in Portfolio Investments pursuant to a Co-Investment Opportunity. ",
							"entities": []
						}, {
							"id": "176",
							"text": "“Co-Investor” has the meaning set forth in Section 5.17(a). ",
							"entities": []
						}, {
							"id": "177",
							"text": "“Commitment” with respect to each Partner means the aggregate amount of cash agreed to be contributed as capital to the Partnership by such Partner (as determined with respect to the General Partner and the Special Limited Partner without regard to Section 2.2(a)(ii)) as specified in Schedule 1 attached hereto as the same may be modified from time to time under the terms of this Agreement. ",
							"entities": []
						}, {
							"id": "178",
							"text": "“Commitment Period” has the meaning set forth in Section 2.2(b). ",
							"entities": []
						}, {
							"id": "179",
							"text": "“Continuity Period” has the meaning set forth in Section 2.2(d). ",
							"entities": []
						}, {
							"id": "180",
							"text": "“Credit Support” has the meaning set forth in Section 5.3. ",
							"entities": []
						}, {
							"id": "181",
							"text": "“Current Cash Income” means all Current Income paid in cash or cash equivalents. ",
							"entities": []
						}, {
							"id": "182",
							"text": "“Current Income” means all interest and dividend income (including from original issue discount, purchases or investments at a market discount, and payment of in-kind income and other non-cash current income) from a Portfolio Company. ",
							"entities": []
						}, {
							"id": "183",
							"text": "“Deemed Contribution” means, as of any date, for any Portfolio Investment or the payment of expenses incurred directly in connection with the making, maintaining or disposing of such Portfolio Investment (i) the amount by which the Capital Contributions required from the General Partner or the Special Limited Partner are reduced pursuant to Section 2.2(a)(ii) with respect to such Portfolio Investment or the payment of related expenses, divided by (ii) the quotient determined by dividing (A) the aggregate Commitments of all Partners (other than the General Partner and the Special Limited Partner), by (B) the aggregate Commitments of all Partners. For a Portfolio Investment, that part of the Deemed Contribution described in clause (i) of the first sentence of this definition shall be allocated entirely to the Special Limited Partner and the remaining part of the Deemed Contribution shall be allocated between the General Partner and the Special Limited Partner in the same ratio that the Capital Contribution by the General Partner to make such Portfolio Investment bears to the amount described in clause (i) with respect to such Portfolio Investment. ",
							"entities": [{
								"id": "183",
								"entityType": "ORGANIZATION",
								"end": 253,
								"start": 232,
								"value": "Capital Contributions"
							}, {
								"id": "183",
								"entityType": "ORGANIZATION",
								"end": 569,
								"start": 554,
								"value": "General Partner"
							}, {
								"id": "183",
								"entityType": "ORGANIZATION",
								"end": 842,
								"start": 819,
								"value": "Special Limited Partner"
							}, {
								"id": "183",
								"entityType": "ORGANIZATION",
								"end": 971,
								"start": 948,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "184",
							"text": "“Defaulting Partner” has the meaning set forth in Section 6.11(a). ",
							"entities": []
						}, {
							"id": "185",
							"text": "“Delaware Partnership Act” has the meaning set forth in Section 1.1.",
							"entities": []
						}, {
							"id": "186",
							"text": "",
							"entities": []
						}, {
							"id": "187",
							"text": "",
							"entities": []
						}, {
							"id": "188",
							"text": "704094543 -6- ",
							"entities": []
						}, {
							"id": "189",
							"text": "“Determination Date” has the meaning set forth in Section 8.3(c). ",
							"entities": []
						}, {
							"id": "190",
							"text": "“Disability” has the meaning set forth in Section 2.2(d). ",
							"entities": []
						}, {
							"id": "191",
							"text": "“Disposition” or “Disposed of” means, with respect to all or a portion of a Portfolio Investment, the sale, exchange (other than (i) an exchange for other securities of or claims against (a) the Portfolio Company in which such Portfolio Investment is made or (b) another entity that is acquiring substantially all of the Partnership’s remaining interest in a Portfolio Investment in exchange for securities issued by such acquiring entity or (ii) a sale, exchange or other disposition that does not constitute a pro rata disposition of a portion of each class of securities or other interests constituting such Portfolio Investment) or other disposition by the Partnership of all or such portion of securities or other interests constituting that Portfolio Investment for cash, securities or other property, and shall also include the receipt by the Partnership of a liquidating dividend or other like distribution on such Portfolio Investment, if and only if such distribution is in complete liquidation of the Partnership’s entire interest in such Portfolio Investment. An in-kind distribution of all or part of a Portfolio Investment that has not theretofore been deemed to have been Disposed of shall be deemed a Disposition of all or part of such Portfolio Investment as of the date of and to the extent of such distribution. ",
							"entities": [{
								"id": "191",
								"entityType": "ORGANIZATION",
								"end": 212,
								"start": 195,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "192",
							"text": "“Distressed Investments” means any loans, debt obligations, securities or instruments or other evidences of indebtedness or commitments to provide, guaranty or support such indebtedness, or any shares of preferred or preference stock, which are (i) purchased or acquired from persons other than the obligor or issuer thereof at a discount from their outstanding principal amount or outstanding accreted amount, or, stated or liquidation value, as applicable, together with all accrued interest or dividends, as applicable, and other amounts payable or due in respect thereof, (ii) purchased in connection with the issuer or obligor thereof emerging from bankruptcy or which the General Partner expects will undergo a restructuring and which class of securities are expected by the General Partner to convert into a control position in the issuer or obligor, and (iii) purchased in anticipation of or in connection with pursuing a Portfolio Investment in the issuer or obligor thereof. ",
							"entities": [{
								"id": "192",
								"entityType": "ORGANIZATION",
								"end": 693,
								"start": 678,
								"value": "General Partner"
							}, {
								"id": "192",
								"entityType": "ORGANIZATION",
								"end": 796,
								"start": 781,
								"value": "General Partner"
							}]
						}, {
							"id": "193",
							"text": "“ECI” means income that is effectively connected with a United States trade or business within the meaning of Section 864(c) of the Code and the Treasury Regulations promulgated thereunder, but not including any income or gain attributable to the disposition of a “United States real property interest” as defined for purposes of Section 897(c) of the Code. ",
							"entities": [{
								"id": "193",
								"entityType": "LOCATION",
								"end": 69,
								"start": 56,
								"value": "United States"
							}, {
								"id": "193",
								"entityType": "ORGANIZATION",
								"end": 153,
								"start": 145,
								"value": "Treasury"
							}, {
								"id": "193",
								"entityType": "LOCATION",
								"end": 278,
								"start": 265,
								"value": "United States"
							}]
						}, {
							"id": "194",
							"text": "“Effective Date” means December 21, 2013, which is the earlier of (i) the date set forth in the Capital Call for the first Portfolio Investment and (ii) the date set forth in a written notice to the Limited Partners that the investment period of Fund II has terminated or expired. ",
							"entities": [{
								"id": "194",
								"entityType": "ORGANIZATION",
								"end": 215,
								"start": 199,
								"value": "Limited Partners"
							}]
						}, {
							"id": "195",
							"text": "“Eighty Percent in Interest of the Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling at least 80% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles. ",
							"entities": [{
								"id": "195",
								"entityType": "ORGANIZATION",
								"end": 75,
								"start": 59,
								"value": "Limited Partners"
							}, {
								"id": "195",
								"entityType": "ORGANIZATION",
								"end": 255,
								"start": 220,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "196",
							"text": "“Electing Limited Partner” has the meaning set forth in Section 2.4(b).",
							"entities": []
						}, {
							"id": "197",
							"text": "",
							"entities": []
						}, {
							"id": "198",
							"text": "",
							"entities": []
						}, {
							"id": "199",
							"text": "704094543 -7- ",
							"entities": []
						}, {
							"id": "200",
							"text": "“ERISA” means the U.S. Employee Retirement Income Security Act of 1974, as amended. ",
							"entities": []
						}, {
							"id": "201",
							"text": "“Existing Partners” has the meaning set forth in Section 6.5(c). ",
							"entities": []
						}, {
							"id": "202",
							"text": "“FCC” means the U.S. Federal Communications Commission. ",
							"entities": [{
								"id": "202",
								"entityType": "ORGANIZATION",
								"end": 54,
								"start": 16,
								"value": "U.S. Federal Communications Commission"
							}]
						}, {
							"id": "203",
							"text": "“FCC Attribution Rules” means the ownership attribution rules of the FCC, including, but not limited to, 47 C.F.R. §§ 21.912, Note 1; 24-709; 24.720; 26.101(b), (c); 73.3555, Note 2; 76.501, Note 2; 76.503, Note 2; 76-504, Note 1; Attribution Reconsideration Order, 58 Radio Regulation 2nd 604 (1985); Further Attribution Reconsideration Order, 1 FCC Rcd 802 (1986); Report and Order, 14 FCC Rcd 12559 (1999); Report and Order, 14 FCC Rcd 19014 (1999); Memorandum Opinion and Second Order in Reconsideration, FCC 00-431 (released Jan. 19, 2001); and Memorandum and Opinion and Order on Reconsideration, FCC-00-438 (released Jan. 19, 2001), all as the same may be amended or supplemented from time to time. ",
							"entities": [{
								"id": "203",
								"entityType": "ORGANIZATION",
								"end": 72,
								"start": 69,
								"value": "FCC"
							}, {
								"id": "203",
								"entityType": "ORGANIZATION",
								"end": 350,
								"start": 347,
								"value": "FCC"
							}, {
								"id": "203",
								"entityType": "ORGANIZATION",
								"end": 512,
								"start": 509,
								"value": "FCC"
							}]
						}, {
							"id": "204",
							"text": "“Fee Offsets” has the meaning set forth in Section 4.1(c). ",
							"entities": []
						}, {
							"id": "205",
							"text": "“Fifteen Percent in Interest of the Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling more than 15% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles. ",
							"entities": [{
								"id": "205",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 60,
								"value": "Limited Partners"
							}, {
								"id": "205",
								"entityType": "ORGANIZATION",
								"end": 181,
								"start": 164,
								"value": "Parallel Vehicles"
							}, {
								"id": "205",
								"entityType": "ORGANIZATION",
								"end": 257,
								"start": 222,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "206",
							"text": "“Final Closing” means the final closing of subscriptions by Limited Partners pursuant to Subscription Agreements, which, in any event, shall take place no later than the twelve (12) months following the First Closing. ",
							"entities": [{
								"id": "206",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 60,
								"value": "Limited Partners"
							}]
						}, {
							"id": "207",
							"text": "“First Closing” means the first closing of subscriptions by Limited Partners pursuant to Subscription Agreements. ",
							"entities": [{
								"id": "207",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 60,
								"value": "Limited Partners"
							}]
						}, {
							"id": "208",
							"text": "“Follow-on Investment” means investments made after the termination of the Commitment Period in securities of a Portfolio Company that are appropriate or necessary in the opinion of the General Partner to preserve, protect or enhance the investment in such Portfolio Company that was made by the Partnership during the Commitment Period. ",
							"entities": []
						}, {
							"id": "209",
							"text": "“Fund Group” has the meaning set forth in Section 2.2(d). ",
							"entities": []
						}, {
							"id": "210",
							"text": "“Fund II” means, collectively, The Resolute Fund II, L.P., a Delaware limited partnership, The Resolute Fund II SIE, L.P., a Cayman Islands limited partnership, The Resolute Fund II Maritime, L.P., a Delaware limited partnership, The Resolute Fund II Maritime (Offshore), L.P., a Delaware limited partnership, The Resolute Fund II E&P, L.P., a Delaware limited partnership, The Resolute Fund II E&P (Offshore), L.P., a Delaware limited partnership, together with any other parallel vehicle or separate investment entity formed from time to time in accordance with the agreement of limited partnership of any of the foregoing entities. ",
							"entities": [{
								"id": "210",
								"entityType": "LOCATION",
								"end": 69,
								"start": 61,
								"value": "Delaware"
							}, {
								"id": "210",
								"entityType": "LOCATION",
								"end": 139,
								"start": 125,
								"value": "Cayman Islands"
							}, {
								"id": "210",
								"entityType": "LOCATION",
								"end": 208,
								"start": 200,
								"value": "Delaware"
							}, {
								"id": "210",
								"entityType": "ORGANIZATION",
								"end": 276,
								"start": 272,
								"value": "L.P."
							}, {
								"id": "210",
								"entityType": "LOCATION",
								"end": 288,
								"start": 280,
								"value": "Delaware"
							}, {
								"id": "210",
								"entityType": "LOCATION",
								"end": 352,
								"start": 344,
								"value": "Delaware"
							}, {
								"id": "210",
								"entityType": "ORGANIZATION",
								"end": 415,
								"start": 411,
								"value": "L.P."
							}, {
								"id": "210",
								"entityType": "LOCATION",
								"end": 427,
								"start": 419,
								"value": "Delaware"
							}]
						}, {
							"id": "211",
							"text": "“Fund II Manager” means The Jordan Company II, L.P., a Delaware limited partnership.",
							"entities": [{
								"id": "211",
								"entityType": "ORGANIZATION",
								"end": 51,
								"start": 47,
								"value": "L.P."
							}, {
								"id": "211",
								"entityType": "LOCATION",
								"end": 63,
								"start": 55,
								"value": "Delaware"
							}]
						}, {
							"id": "212",
							"text": "",
							"entities": []
						}, {
							"id": "213",
							"text": "",
							"entities": []
						}, {
							"id": "214",
							"text": "704094543 -8- ",
							"entities": []
						}, {
							"id": "215",
							"text": "“Funded Commitment” means as to any Partner as of any date, that portion of a Partner’s Commitment that has been contributed (or “deemed contributed”) to the Partnership to meet a Capital Call (including any amounts contributed pursuant to Section 6.5(b)) plus with respect to the Special Limited Partner only, the aggregate amount of all Deemed Contributions treated as made on or prior to such date, reduced by (a) any amounts which are distributed (or “deemed distributed”) to such Partner in respect of a proposed Portfolio Investment (or portion thereof) that was not consummated, (b) any amounts which are distributed (or “deemed distributed”) to such Partner in respect of a Bridge Financing (or portion thereof) that was sold, refinanced, redeemed or otherwise disposed of within 18 months from the Investment Date of such Portfolio Investment in an amount not to exceed the Partner’s portion of Funded Commitments used to acquire such Bridge Financing, (c) any amounts paid by such Partner pursuant to subclauses (A), (B) and (C) of the third sentence of Section 6.5(b), (d) any amounts distributed (or “deemed distributed”) to such Partner pursuant to Section 6.5 (other than amounts attributable to payments by an Additional Limited Partner pursuant to subclauses (A), (B) and (C) of the third sentence of Section 6.5(b)), (e) in the sole discretion of the General Partner, any amounts distributed (or “deemed distributed”) to such Partner with respect to a Portfolio Investment that was sold, refinanced, redeemed or otherwise disposed of within 18 months after the Investment Date for such Portfolio Investment in an amount not to exceed the portion of such Partner’s Funded Commitments used to acquire such Portfolio Investment, all as determined in good faith by the General Partner and (f) in the sole discretion of the General Partner, any amounts distributed (or “deemed distributed”) to such Partner pursuant to Section 3.3(a)(i)(A) with respect to a Portfolio Investment, up to the aggregate amount of Capital Contributions previously made by such Partner in respect of any Management Fees, Partnership Expenses and Organizational Expenses allocated to such Portfolio Investment; provided, however, that in the case of the General Partner, the amounts taken into account for purposes of this clause (f) shall be the amounts that would have been taken into account with respect to the General Partner had the General Partner actually made the Capital Contributions required of a Limited Partner with the same Commitment. For the purposes of this definition, those proceeds otherwise distributable to a Partner that are retained for reinvestment or application to a Capital Call in accordance with the proviso to Section 3.1(b) or the proviso to the second to last sentence in Section 6.5(b), shall be “deemed distributed” to such Partner by the Partnership and “deemed contributed” by such Partner to the Partnership. ",
							"entities": [{
								"id": "215",
								"entityType": "ORGANIZATION",
								"end": 304,
								"start": 281,
								"value": "Special Limited Partner"
							}, {
								"id": "215",
								"entityType": "ORGANIZATION",
								"end": 2043,
								"start": 2022,
								"value": "Capital Contributions"
							}, {
								"id": "215",
								"entityType": "ORGANIZATION",
								"end": 2419,
								"start": 2404,
								"value": "General Partner"
							}, {
								"id": "215",
								"entityType": "ORGANIZATION",
								"end": 2483,
								"start": 2462,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "216",
							"text": "“GAAP” means U.S. generally accepted accounting principles as in effect from time to time. ",
							"entities": [{
								"id": "216",
								"entityType": "LOCATION",
								"end": 17,
								"start": 13,
								"value": "U.S."
							}]
						}, {
							"id": "217",
							"text": "“General Partner” has the meaning set forth in the introduction to this Agreement and includes any successor general partner of the Partnership appointed in accordance with this Agreement. ",
							"entities": []
						}, {
							"id": "218",
							"text": "“GP’s Counsel” has the meaning set forth in Section 12.5. ",
							"entities": []
						}, {
							"id": "219",
							"text": "“Guaranty Agreement” means the Guaranty Agreement, dated as of the date hereof, by and among the Partnership, the General Partner and the guarantors party thereto, substantially in the form of the agreement set forth in Exhibit A hereto, as amended from time to time in accordance with its terms.",
							"entities": [{
								"id": "219",
								"entityType": "ORGANIZATION",
								"end": 129,
								"start": 114,
								"value": "General Partner"
							}]
						}, {
							"id": "220",
							"text": "",
							"entities": []
						}, {
							"id": "221",
							"text": "",
							"entities": []
						}, {
							"id": "222",
							"text": "704094543 -9- ",
							"entities": []
						}, {
							"id": "223",
							"text": "“ILPA” means the Institutional Limited Partners Association. ",
							"entities": [{
								"id": "223",
								"entityType": "ORGANIZATION",
								"end": 59,
								"start": 17,
								"value": "Institutional Limited Partners Association"
							}]
						}, {
							"id": "224",
							"text": "“Indemnifying Partner” has the meaning set forth in Section 6.7(a). ",
							"entities": []
						}, {
							"id": "225",
							"text": "“Initial Fee Period” means the period starting on the Effective Date and ending on the earlier of (i) the termination of the Commitment Period, and (ii) the date on which management fees payable by a Successor Fund begin to accrue. ",
							"entities": []
						}, {
							"id": "226",
							"text": "“Insulated Partner” has the meaning set forth in Section 5.16. ",
							"entities": []
						}, {
							"id": "227",
							"text": "“Insulated Partner Affiliate” has the meaning set forth in Section 5.16. ",
							"entities": []
						}, {
							"id": "228",
							"text": "“Investment Company Act” means the Investment Company Act of 1940, as amended. ",
							"entities": []
						}, {
							"id": "229",
							"text": "“Investment Date” means, with respect to any Portfolio Investment, the date such Portfolio Investment was acquired by the Partnership. ",
							"entities": []
						}, {
							"id": "230",
							"text": "“Investment Income and Gain” means, with respect to a Portfolio Investment, (i) the excess, if any, of the proceeds from the Disposition of such Portfolio Investment or portion thereof or Partial Realization with respect to such Portfolio Investment or portion thereof that does not give rise to Current Income over the Basis of such Portfolio Investment or portion thereof, (ii) to the extent all or any portion of such Portfolio Investment is distributed to the Partners in kind as contemplated by Section 2.3, the excess, if any, of the value (as determined pursuant to Article IX) of the portion of such Portfolio Investment distributed to the Partners over the Basis of such portion of such Portfolio Investment, and (iii) Current Income attributable to such Portfolio Investment. ",
							"entities": [{
								"id": "230",
								"entityType": "ORGANIZATION",
								"end": 656,
								"start": 648,
								"value": "Partners"
							}]
						}, {
							"id": "231",
							"text": "“Investment Loss” means, with respect to a Portfolio Investment, (i) the deficiency, if any, of the proceeds from the Disposition of such Portfolio Investment or portion thereof or Partial Realization with respect to such Portfolio Investment or portion thereof that does not give rise to Current Income as compared to the Basis of such Portfolio Investment or portion thereof, (ii) to the extent all or any portion of such Portfolio Investment is distributed to the Partners in kind as contemplated by Section 2.4, the deficiency, if any, of the value (as determined pursuant to Article IX) of the portion of such Portfolio Investment distributed to the Partners as compared to the Basis of such portion of such Portfolio Investment, and (iii) the amount, as reasonably determined by the General Partner in accordance with Section 9.4, by which such Portfolio Investment has permanently declined in value below the Basis of such Portfolio Investment immediately prior to such determination. ",
							"entities": [{
								"id": "231",
								"entityType": "ORGANIZATION",
								"end": 663,
								"start": 655,
								"value": "Partners"
							}, {
								"id": "231",
								"entityType": "ORGANIZATION",
								"end": 804,
								"start": 789,
								"value": "General Partner"
							}, {
								"id": "231",
								"entityType": "ORGANIZATION",
								"end": 871,
								"start": 851,
								"value": "Portfolio Investment"
							}]
						}, {
							"id": "232",
							"text": "“Investment Team” means the investment professionals who are partners of the Manager or employed by the Manager, together with their Affiliates and other associated and related Persons. ",
							"entities": []
						}, {
							"id": "233",
							"text": "“JII Entities” means Jordan Industries International LLC and its respective subsidiaries and affiliates, along with their respective portfolio companies and investments.",
							"entities": [{
								"id": "233",
								"entityType": "ORGANIZATION",
								"end": 56,
								"start": 21,
								"value": "Jordan Industries International LLC"
							}]
						}, {
							"id": "234",
							"text": "",
							"entities": []
						}, {
							"id": "235",
							"text": "",
							"entities": []
						}, {
							"id": "236",
							"text": "704094543 -10- ",
							"entities": []
						}, {
							"id": "237",
							"text": "“JZAI/JZCP Entities” means Jordan/Zalaznick Advisers, Inc., JZ Capital Partners Ltd. and JZ International LLC and their respective parallel, sponsored, advised and affiliated funds and entities, along with their respective portfolio companies and investments. ",
							"entities": [{
								"id": "237",
								"entityType": "ORGANIZATION",
								"end": 58,
								"start": 27,
								"value": "Jordan/Zalaznick Advisers , Inc."
							}, {
								"id": "237",
								"entityType": "ORGANIZATION",
								"end": 84,
								"start": 60,
								"value": "JZ Capital Partners Ltd."
							}, {
								"id": "237",
								"entityType": "ORGANIZATION",
								"end": 109,
								"start": 89,
								"value": "JZ International LLC"
							}]
						}, {
							"id": "238",
							"text": "“Liability” has the meaning set forth in Section 6.7(c). ",
							"entities": []
						}, {
							"id": "239",
							"text": "“Limited Partners” means the persons listed in Schedule 1 hereto in their capacity as limited partners of the Partnership (including each person admitted to the Partnership in accordance with Section 6.5) and each person who is admitted to the Partnership as a substitute limited partner pursuant to Section 6.2 or 6.5, so long as each such person continues to be a limited partner of the Partnership hereunder. ",
							"entities": []
						}, {
							"id": "240",
							"text": "“Majority in Interest of the Affected Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling more than 50% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles that are affected by an action or event. ",
							"entities": [{
								"id": "240",
								"entityType": "ORGANIZATION",
								"end": 78,
								"start": 62,
								"value": "Limited Partners"
							}, {
								"id": "240",
								"entityType": "ORGANIZATION",
								"end": 183,
								"start": 166,
								"value": "Parallel Vehicles"
							}, {
								"id": "240",
								"entityType": "ORGANIZATION",
								"end": 259,
								"start": 224,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "241",
							"text": "“Majority in Interest of the Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling more than 50% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles. ",
							"entities": [{
								"id": "241",
								"entityType": "ORGANIZATION",
								"end": 69,
								"start": 53,
								"value": "Limited Partners"
							}, {
								"id": "241",
								"entityType": "ORGANIZATION",
								"end": 174,
								"start": 157,
								"value": "Parallel Vehicles"
							}, {
								"id": "241",
								"entityType": "ORGANIZATION",
								"end": 250,
								"start": 215,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "242",
							"text": "“Management Agreement” means the Management Agreement, dated as of July 15, 2013, by and among the Partnership, the General Partner and the Manager, as amended, restated, supplemented and modified from time to time in accordance with its terms. ",
							"entities": []
						}, {
							"id": "243",
							"text": "“Management Fee” has the meaning set forth in Section 4.1(a). ",
							"entities": []
						}, {
							"id": "244",
							"text": "“Management Fee Period” has the meaning set forth in Section 4.1(a). ",
							"entities": []
						}, {
							"id": "245",
							"text": "“Manager” means The Jordan Company III, L.P., a Delaware limited partnership, or other entity controlled by the members of the Senior Investment Team, and appointed as Manager by the General Partner on behalf of the Partnership from time to time. ",
							"entities": [{
								"id": "245",
								"entityType": "ORGANIZATION",
								"end": 44,
								"start": 40,
								"value": "L.P."
							}, {
								"id": "245",
								"entityType": "LOCATION",
								"end": 56,
								"start": 48,
								"value": "Delaware"
							}]
						}, {
							"id": "246",
							"text": "“Managing Partners” means John W. Jordan II, Jonathan F. Boucher, A. Richard Caputo, Jr., Thomas H. Quinn and Adam E. Max. ",
							"entities": [{
								"id": "246",
								"entityType": "PERSON",
								"end": 40,
								"start": 26,
								"value": "John W. Jordan"
							}, {
								"id": "246",
								"entityType": "PERSON",
								"end": 64,
								"start": 45,
								"value": "Jonathan F. Boucher"
							}, {
								"id": "246",
								"entityType": "PERSON",
								"end": 83,
								"start": 66,
								"value": "A. Richard Caputo"
							}, {
								"id": "246",
								"entityType": "PERSON",
								"end": 105,
								"start": 90,
								"value": "Thomas H. Quinn"
							}, {
								"id": "246",
								"entityType": "PERSON",
								"end": 121,
								"start": 110,
								"value": "Adam E. Max"
							}]
						}, {
							"id": "247",
							"text": "“Marketable Securities” means securities that (i) are (x) listed on a national securities exchange in the United States, (y) quoted on the NMS or (z) listed on a securities exchange or quoted on an established quotation system within or without the United States that in the opinion of the General Partner after consultation with the Advisory Committee supports sufficient trading activity and volume to allow for the orderly disposition of such securities by the Partners following a distribution thereof in accordance with Sections 2.4 and 3.3, and (ii) are not subject to restrictions on transfer as a result of applicable contract provisions, the provisions of the Securities Act or regulations thereunder (other than the volume, manner-of-sale and notice restrictions of Rule 144 promulgated thereunder or any successor rule thereto; provided, that if such securities are subject to volume limitations under Rule 144 and distributed in kind to",
							"entities": [{
								"id": "247",
								"entityType": "LOCATION",
								"end": 119,
								"start": 106,
								"value": "United States"
							}, {
								"id": "247",
								"entityType": "ORGANIZATION",
								"end": 142,
								"start": 139,
								"value": "NMS"
							}, {
								"id": "247",
								"entityType": "LOCATION",
								"end": 262,
								"start": 249,
								"value": "United States"
							}, {
								"id": "247",
								"entityType": "ORGANIZATION",
								"end": 305,
								"start": 290,
								"value": "General Partner"
							}, {
								"id": "247",
								"entityType": "ORGANIZATION",
								"end": 352,
								"start": 334,
								"value": "Advisory Committee"
							}, {
								"id": "247",
								"entityType": "ORGANIZATION",
								"end": 472,
								"start": 464,
								"value": "Partners"
							}]
						}, {
							"id": "248",
							"text": "",
							"entities": []
						}, {
							"id": "249",
							"text": "",
							"entities": []
						}, {
							"id": "250",
							"text": "704094543 -11- ",
							"entities": []
						}, {
							"id": "251",
							"text": "Limited Partners, each Limited Partner would be able to sell such securities promptly after the distribution thereof in accordance with Sections 2.4 and 3.3 (notwithstanding volume limitations)), or other applicable law. ",
							"entities": [{
								"id": "251",
								"entityType": "ORGANIZATION",
								"end": 16,
								"start": 0,
								"value": "Limited Partners"
							}, {
								"id": "251",
								"entityType": "ORGANIZATION",
								"end": 38,
								"start": 23,
								"value": "Limited Partner"
							}]
						}, {
							"id": "252",
							"text": "“Media Company” means any entity in which the Partnership has or acquires an investment and that directly or indirectly owns, controls or operates any: (i) broadcast radio or television station licensed by the FCC; (ii) U.S. cable television system; (iii) daily newspaper (as such term is defined in Section 73.3555 of the Ownership Rules); (iv) multipoint multichannel distribution system licensed by the FCC; (v) other communications facility the ownership or operation of which is subject to regulation by the FCC under (x) the Communications Act of 1934, as amended, (y) the FCC Attribution Rules, or (z) the FCC Ownership Rules; and (vi) other business or activity that is subject to ownership restrictions imposed by the FCC from time to time. ",
							"entities": [{
								"id": "252",
								"entityType": "ORGANIZATION",
								"end": 213,
								"start": 210,
								"value": "FCC"
							}, {
								"id": "252",
								"entityType": "LOCATION",
								"end": 224,
								"start": 220,
								"value": "U.S."
							}, {
								"id": "252",
								"entityType": "ORGANIZATION",
								"end": 409,
								"start": 406,
								"value": "FCC"
							}, {
								"id": "252",
								"entityType": "ORGANIZATION",
								"end": 516,
								"start": 513,
								"value": "FCC"
							}, {
								"id": "252",
								"entityType": "ORGANIZATION",
								"end": 730,
								"start": 727,
								"value": "FCC"
							}]
						}, {
							"id": "253",
							"text": "“Net Funded Commitment” means, in respect of any Partner and as of the first day of any Management Fee Period, such Partner’s Funded Commitment as of such date relating to (i) the retained portion of all Portfolio Investments with respect to which there has not been a complete Disposition, and (ii) the non-cash proceeds of any Portfolio Investment if and to the extent the same do not constitute proceeds from a Disposition. ",
							"entities": []
						}, {
							"id": "254",
							"text": "“New Limited Partner” has the meaning set forth in Section 2.2(a)(iii). ",
							"entities": []
						}, {
							"id": "255",
							"text": "“NMS” means the National Market System of the National Association of Securities Dealers, Inc. ",
							"entities": [{
								"id": "255",
								"entityType": "ORGANIZATION",
								"end": 93,
								"start": 16,
								"value": "National Market System of the National Association of Securities Dealers , Inc."
							}]
						}, {
							"id": "256",
							"text": "“Non-Marketable Securities” means all securities which are not Marketable Securities. ",
							"entities": [{
								"id": "256",
								"entityType": "ORGANIZATION",
								"end": 84,
								"start": 63,
								"value": "Marketable Securities"
							}]
						}, {
							"id": "257",
							"text": "“Non-U.S. Partner” means with respect to any determination hereunder, (i) any Limited Partner that is not a “United States person” within the meaning of Section 7701(a)(30) of the Code, or (ii) any Limited Partner that has a direct or indirect beneficial owner that (x) is not a “United States person” within the meaning of Section 7701(a)(30) of the Code and (y) is required to report on a United States federal income tax return or report any taxable income allocated to such Limited Partner pursuant to Section 10.4, to the extent of such beneficial owner’s pro rata share of such income, but in each case, only if such Limited Partner has notified the General Partner of such status at any time prior to such determination, by providing the General Partner an IRS Form W-8BEN or by some other method satisfactory to the General Partner. ",
							"entities": [{
								"id": "257",
								"entityType": "LOCATION",
								"end": 122,
								"start": 109,
								"value": "United States"
							}, {
								"id": "257",
								"entityType": "LOCATION",
								"end": 293,
								"start": 280,
								"value": "United States"
							}, {
								"id": "257",
								"entityType": "LOCATION",
								"end": 404,
								"start": 391,
								"value": "United States"
							}, {
								"id": "257",
								"entityType": "ORGANIZATION",
								"end": 767,
								"start": 745,
								"value": "General Partner an IRS"
							}]
						}, {
							"id": "258",
							"text": "“Non-Voting Interest” means any interest of a Limited Partner in the Partnership, and if applicable, any interest of a limited partner in a Parallel Vehicle (or portion thereof) with respect to which a Limited Partner or limited partner in a Parallel Vehicle has, or elects to have, no or limited voting rights pursuant to Section 6.9 or a similar provision in the agreement of limited partnership of the Parallel Vehicles, as the case may be. ",
							"entities": [{
								"id": "258",
								"entityType": "ORGANIZATION",
								"end": 61,
								"start": 46,
								"value": "Limited Partner"
							}]
						}, {
							"id": "259",
							"text": "“Obligations” has the meaning set forth in Section 5.18(b). ",
							"entities": []
						}, {
							"id": "260",
							"text": "“Operating Company” means an “operating company” within the meaning of the Plan Asset Regulation, including a “venture capital operating company.”",
							"entities": []
						}, {
							"id": "261",
							"text": "",
							"entities": []
						}, {
							"id": "262",
							"text": "",
							"entities": []
						}, {
							"id": "263",
							"text": "704094543 -12- ",
							"entities": []
						}, {
							"id": "264",
							"text": "“Original Agreement” has the meaning set forth in the introduction. ",
							"entities": []
						}, {
							"id": "265",
							"text": "“Organizational Expenses” means the out-of-pocket expenses (including, without limitation, travel, printing, legal and accounting fees and other expenses) of the General Partner, the Manager, the members of the Senior Investment Team and their respective Affiliates (but not including any Placement Fees) incurred in the formation of the Partnership, any Parallel Vehicle or any Separate Investment Entity or incurred in connection with the organization and funding of the Partnership, any Parallel Vehicle, Separate Investment Entity and the General Partner. ",
							"entities": [{
								"id": "265",
								"entityType": "ORGANIZATION",
								"end": 233,
								"start": 211,
								"value": "Senior Investment Team"
							}, {
								"id": "265",
								"entityType": "ORGANIZATION",
								"end": 534,
								"start": 508,
								"value": "Separate Investment Entity"
							}]
						}, {
							"id": "266",
							"text": "“Other Permitted Investment Activities” means the continuing involvement of the members of the Senior Investment Team (i) in connection with the Predecessor Resolute Fund Entities, (ii) in the case of Mr. Jordan, in connection with the JZAI/JZCP Entities, (iii) in the case of Mr. Jordan and Mr. Quinn, in connection with the JII Entities, (iv) with any successors of the foregoing entities, (v) as passive owners, stockholders, debtholders and investors in professionally managed hedge funds, fund of funds and other private investment entities and vehicles, (vi) subject to compliance with the devotion of time covenant in Section 5.1(a), in investments which do not otherwise meet the investment objectives of the Partnership, and (vii) in a Successor Fund organized in accordance with Section 5.12. ",
							"entities": [{
								"id": "266",
								"entityType": "PERSON",
								"end": 211,
								"start": 205,
								"value": "Jordan"
							}, {
								"id": "266",
								"entityType": "PERSON",
								"end": 287,
								"start": 281,
								"value": "Jordan"
							}, {
								"id": "266",
								"entityType": "PERSON",
								"end": 301,
								"start": 296,
								"value": "Quinn"
							}]
						}, {
							"id": "267",
							"text": "“Ownership Rules” means the multiple and cross-ownership rules of the FCC including, but not limited to, 47 C.F.R. §§ 21.912; 24-709; 24.720; 26.101(a); 73.3555; 74.931(h); 76.501; 76.503; 76.504, and other regulations or written policies of the FCC which limit or restrict ownership in Media Companies, all as the same may be amended or supplemented from time to time. ",
							"entities": [{
								"id": "267",
								"entityType": "ORGANIZATION",
								"end": 73,
								"start": 70,
								"value": "FCC"
							}, {
								"id": "267",
								"entityType": "ORGANIZATION",
								"end": 249,
								"start": 246,
								"value": "FCC"
							}]
						}, {
							"id": "268",
							"text": "“Parallel Vehicle” means any entity that is organized pursuant to Section 5.14 and designated a Parallel Vehicle by the General Partner, but solely for purposes of this Agreement, the Partnership is not a Parallel Vehicle. ",
							"entities": []
						}, {
							"id": "269",
							"text": "“Partial Realization” means, with respect to any Portfolio Investment, the realization by the Partnership of Current Cash Income or of proceeds from a recapitalization, extraordinary dividend, sale, redemption or other disposition of less than all of such Portfolio Investment (other than a pro rata disposition of a portion of each class of securities or other interests constituting such Portfolio Investment) or any other similar event that does not constitute a Disposition of such Portfolio Investment. ",
							"entities": []
						}, {
							"id": "270",
							"text": "“Participating Partner” means, with respect to any Portfolio Investment, any Limited Partner (other than the Special Limited Partner) who made a Capital Contribution that was applied to such Portfolio Investment. ",
							"entities": []
						}, {
							"id": "271",
							"text": "“Partner Interest” means for any Partner with respect to any Portfolio Investment (i) for each of the Special Limited Partner and the General Partner, the proportion that the sum of such Partner’s Capital Contributions and allocable share of Deemed Contributions that were applied to such Portfolio Investment bears to the aggregate Capital Contributions and Deemed Contributions of all Partners that were applied to such Portfolio Investment, and (ii) for any Partner other than the Special Limited Partner and the General Partner, the proportion that such Partner’s Capital Contributions that were applied to such Portfolio Investment bears to the",
							"entities": [{
								"id": "271",
								"entityType": "ORGANIZATION",
								"end": 125,
								"start": 102,
								"value": "Special Limited Partner"
							}, {
								"id": "271",
								"entityType": "ORGANIZATION",
								"end": 218,
								"start": 187,
								"value": "Partner 's Capital Contributions"
							}, {
								"id": "271",
								"entityType": "ORGANIZATION",
								"end": 354,
								"start": 333,
								"value": "Capital Contributions"
							}, {
								"id": "271",
								"entityType": "ORGANIZATION",
								"end": 507,
								"start": 484,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "272",
							"text": "",
							"entities": []
						}, {
							"id": "273",
							"text": "",
							"entities": []
						}, {
							"id": "274",
							"text": "704094543 -13- ",
							"entities": []
						}, {
							"id": "275",
							"text": "aggregate Capital Contributions and Deemed Contributions of all Partners that were applied to such Portfolio Investment. ",
							"entities": [{
								"id": "275",
								"entityType": "ORGANIZATION",
								"end": 31,
								"start": 10,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "276",
							"text": "“Partner Share” means, for any Partner, and for any period, the amount of Investment Income and Gain, Investment Loss, Current Cash Income, proceeds from the Disposition of or Partial Realization with respect to a Portfolio Investment for such period or Portfolio Investments distributed in kind, as the case may be, or items of Partnership income or expense (other than Management Fees or Placement Fees, if any), in each case for such period multiplied by such Partner’s Partner Interest in the Portfolio Investments giving rise to such items or to which such items are allocable pursuant to Section 3.3(c). ",
							"entities": [{
								"id": "276",
								"entityType": "ORGANIZATION",
								"end": 489,
								"start": 463,
								"value": "Partner 's Partner Interest"
							}, {
								"id": "276",
								"entityType": "ORGANIZATION",
								"end": 518,
								"start": 497,
								"value": "Portfolio Investments"
							}]
						}, {
							"id": "277",
							"text": "“Partners” means the General Partner and the Limited Partners, collectively. ",
							"entities": [{
								"id": "277",
								"entityType": "ORGANIZATION",
								"end": 36,
								"start": 21,
								"value": "General Partner"
							}, {
								"id": "277",
								"entityType": "ORGANIZATION",
								"end": 61,
								"start": 45,
								"value": "Limited Partners"
							}]
						}, {
							"id": "278",
							"text": "“Partnership” has the meaning set forth in Section 1.1. ",
							"entities": []
						}, {
							"id": "279",
							"text": "“Partnership Expenses” means all costs and expenses relating to the Partnership’s activities, investments and business (to the extent not borne or reimbursed by a Portfolio Company or proposed Portfolio Company), including, but not limited to, (i) all costs and out-of- pocket fees and expenses attributable to acquiring, investing, holding, monitoring and disposing of the Partnership’s investments, (ii) all other costs and out-of-pocket fees and expenses attributable to unconsummated transactions, (iii) legal, accounting, auditing, administrative, custodial, depository, consulting, regulatory and other fees and expenses (including, but not limited to, fees of the administrator of the Partnership, the custodian of the Partnership, the depository of the Partnership and insurance and other out-of-pocket expenses associated with negotiating, consummating, monitoring and disposing of the Partnership’s investments and the preparation of Partnership financial statements, tax returns and forms K-1), (iv) expenses of the Advisory Committee incurred in accordance with Article VII, (v) extraordinary expenses, liabilities, indemnities and other obligations of the Partnership (including, but not limited to, litigation and indemnification costs and expenses, judgments and settlements (including, but not limited to, costs and expenses payable under Section 5.11)), and (vi) all debt service obligations, including interest, premium, if any, fees, expenses and other amounts payable in respect of indebtedness of the Partnership incurred in accordance with Section 5.3, but in each case, not including Organizational Expenses in excess of $2.5 million, Management Fees, Placement Fees and those expenses borne by the General Partner or the Manager pursuant to Sections 4.3 and 12.1(h). Notwithstanding anything to the contrary in this Agreement, in no event shall any costs or expenses relating to any administrative or judicial proceeding resulting from any Waived Fee Amount be considered a Partnership Expense. ",
							"entities": [{
								"id": "279",
								"entityType": "ORGANIZATION",
								"end": 210,
								"start": 193,
								"value": "Portfolio Company"
							}, {
								"id": "279",
								"entityType": "ORGANIZATION",
								"end": 1045,
								"start": 1027,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "280",
							"text": "“Partnership Legal Matters” has the meaning set forth in Section 12.5. ",
							"entities": []
						}, {
							"id": "281",
							"text": "“Permitted GP Transferee” means, as to any partnership or other ownership interest in the General Partner, of or held by any existing member of the Senior Investment Team or other partner or investor in the General Partner (a) any family member of such person, (b) any other partner or investor in the General Partner who was a partner or investor in the General Partner as of the Final Closing, and (c) any trust, partnership, foundation corporation or other entity that is either controlled by such person or is primarily for the benefit of such person and/or their family members.",
							"entities": [{
								"id": "281",
								"entityType": "ORGANIZATION",
								"end": 222,
								"start": 207,
								"value": "General Partner"
							}, {
								"id": "281",
								"entityType": "ORGANIZATION",
								"end": 317,
								"start": 302,
								"value": "General Partner"
							}, {
								"id": "281",
								"entityType": "ORGANIZATION",
								"end": 370,
								"start": 355,
								"value": "General Partner"
							}]
						}, {
							"id": "282",
							"text": "",
							"entities": []
						}, {
							"id": "283",
							"text": "",
							"entities": []
						}, {
							"id": "284",
							"text": "704094543 -14- ",
							"entities": []
						}, {
							"id": "285",
							"text": "“Person” means an individual, a partnership, a limited liability company, a corporation, an association, a joint stock company, a trust, a joint venture, an unincorporated organization, or a governmental entity (or any department, agency or political subdivision thereof). ",
							"entities": []
						}, {
							"id": "286",
							"text": "“Placement Fees” means the fees and expenses and any interest on any deferred fees and expenses charged by or paid to any placement agency designated by the Partnership or the General Partner for the marketing and sale of interests in the Partnership and the Parallel Vehicles. The Partnership’s pro rata share of any Placement Fees shall be the amount of such fees multiplied by a fraction, the numerator of which is the aggregate Commitments of the Limited Partners giving rise to such fees, and the denominator of which is the sum of the aggregate Commitments of the Limited Partners and the aggregate capital commitments of all limited partners in all Parallel Vehicles giving rise to such fees. ",
							"entities": [{
								"id": "286",
								"entityType": "ORGANIZATION",
								"end": 191,
								"start": 176,
								"value": "General Partner"
							}, {
								"id": "286",
								"entityType": "ORGANIZATION",
								"end": 467,
								"start": 432,
								"value": "Commitments of the Limited Partners"
							}, {
								"id": "286",
								"entityType": "ORGANIZATION",
								"end": 586,
								"start": 570,
								"value": "Limited Partners"
							}]
						}, {
							"id": "287",
							"text": "“Plan Assets” means “plan assets” as defined in the Plan Asset Regulation. ",
							"entities": []
						}, {
							"id": "288",
							"text": "“Plan Asset Event” has the meaning set forth in Section 5.6(e). ",
							"entities": []
						}, {
							"id": "289",
							"text": "“Plan Asset Regulation” means the U.S. Department of Labor regulation located at 29 C.F.R. Section 2510.3-101, or any successor regulation thereto, as in effect at the time of reference, as modified by Section 3(42) of ERISA. ",
							"entities": [{
								"id": "289",
								"entityType": "ORGANIZATION",
								"end": 58,
								"start": 34,
								"value": "U.S. Department of Labor"
							}]
						}, {
							"id": "290",
							"text": "“Portfolio Company” means any corporation, partnership, limited liability company or other entity in which the Partnership has made an investment, other than Short-Term Investments. ",
							"entities": []
						}, {
							"id": "291",
							"text": "“Portfolio Investments” means any investments held by the Partnership, other than Short- Term Investments. If the Partnership holds multiple classes of securities or other interests that were issued by a Portfolio Company in a single closing or series of related closings, all of such securities or interests in the aggregate shall constitute one Portfolio Investment. ",
							"entities": [{
								"id": "291",
								"entityType": "ORGANIZATION",
								"end": 221,
								"start": 204,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "292",
							"text": "“Predecessor Resolute Fund Entities” means The Resolute Fund, L.P., a Delaware limited partnership, The Resolute Fund Singapore PV, L.P., a Delaware limited partnership, The Resolute Fund Netherlands PV I, L.P., a Delaware limited partnership, The Resolute Fund Netherlands PV II, L.P., a Delaware limited partnership, The Resolute Fund NQP, L.P., a Delaware limited partnership, Fund II and their respective parallel, sponsored, advised and associated funds, and their respective general partners, managers and advisors and affiliated entities, along with their respective portfolio companies and portfolio investments. ",
							"entities": [{
								"id": "292",
								"entityType": "LOCATION",
								"end": 78,
								"start": 70,
								"value": "Delaware"
							}, {
								"id": "292",
								"entityType": "LOCATION",
								"end": 148,
								"start": 140,
								"value": "Delaware"
							}, {
								"id": "292",
								"entityType": "LOCATION",
								"end": 222,
								"start": 214,
								"value": "Delaware"
							}, {
								"id": "292",
								"entityType": "LOCATION",
								"end": 297,
								"start": 289,
								"value": "Delaware"
							}, {
								"id": "292",
								"entityType": "LOCATION",
								"end": 358,
								"start": 350,
								"value": "Delaware"
							}]
						}, {
							"id": "293",
							"text": "“Preferred Amount” means, for any Partner and as of any date, the amount, if any, that would be required to be distributed on such date so that the aggregate distributions (other than distributions pursuant to Section 3.3(a)(i)(A)) to such Partner provide a return of 8% per annum (compounded annually) on such Partner’s Preference Base. For purposes of this definition, a Partner’s “Preference Base” is the sum of (a) such Partner’s Capital Contributions applied to make Portfolio Investments that have been Disposed of on or prior to such date or applied to pay Capitalized Partnership Expenses with respect to such Portfolio Investments, (b) such Partner’s Partner Share of all writedowns (including complete writeoffs) pursuant to Section 9.4 in respect of Portfolio Investments that have not been Disposed of by the Partnership on or prior to such date, (c) such Partner’s Capital Contributions applied to pay Management Fees, Placement Fees,",
							"entities": [{
								"id": "293",
								"entityType": "ORGANIZATION",
								"end": 455,
								"start": 424,
								"value": "Partner 's Capital Contributions"
							}, {
								"id": "293",
								"entityType": "ORGANIZATION",
								"end": 899,
								"start": 868,
								"value": "Partner 's Capital Contributions"
							}]
						}, {
							"id": "294",
							"text": "",
							"entities": []
						}, {
							"id": "295",
							"text": "",
							"entities": []
						}, {
							"id": "296",
							"text": "704094543 -15- ",
							"entities": []
						}, {
							"id": "297",
							"text": "Organizational Expenses and Uncapitalized Partnership Expenses that have been allocated (in accordance with Section 3.3(c)) to Portfolio Investments that have been Disposed of, written down or written off on or prior to such date, and (d) solely for purposes of (i) determining the amount of proceeds attributable to a Partial Realization with respect to a Portfolio Investment that are distributable pursuant to Section 3.3(a)(i)(B) and (ii) crediting proceeds attributable to a Partial Realization against such Partner’s Preferred Amount with respect to the distribution of proceeds attributable to another Portfolio Investment, such Partner’s unreturned Capital Contributions applied to make the Portfolio Investment to which such proceeds are attributable, applying all proceeds of a Partial Realization as payments of the amounts described in Section 3.3(a)(i), beginning with the amount described in clause (B) thereof, then the amounts described in clause (A), but in each case solely with respect to such Portfolio Investment. A Partner’s Preference Base shall not include any Capital Contributions returned to such Partner pursuant to Section 2.2(c). A Partner’s Preferred Amount shall be calculated on the basis of the actual number of days elapsed from and including the date on which each Capital Contribution that is included in such Partner’s Preference Base is contributed to the Partnership, to, but not including, the date that distributions constituting a return of such Capital Contributions were made pursuant to Section 3.3(a)(i). ",
							"entities": []
						}, {
							"id": "298",
							"text": "“Qualified Purchaser” has the meaning set forth in Section 2(a)(51) of the Investment Company Act and the regulations promulgated thereunder. ",
							"entities": []
						}, {
							"id": "299",
							"text": "“Redeemed Limited Partner” has the meaning set forth in Section 6.6(c). ",
							"entities": []
						}, {
							"id": "300",
							"text": "“Redemption Effective Date” has the meaning set forth in Section 6.6(c). ",
							"entities": []
						}, {
							"id": "301",
							"text": "“Redemption Value” means, with respect to any interest in the Partnership, or such portion thereof in the case of a partial withdrawal, being redeemed because of a Plan Asset Event or Regulatory Issue, the fair market value of such interest as of the applicable Redemption Effective Date, as determined in good faith by the General Partner; provided that, if the Plan Asset Event or the Regulatory Issue is a result of a breach of a representation, warranty or covenant made by the Redeemed Limited Partner or a change in law applicable to the Redeemed Limited Partner, the Redemption Value shall be (in each case as determined in good faith by the General Partner) the lesser of (i) the fair market value of such Redeemed Limited Partner’s interest in the Partnership on the applicable Redemption Effective Date and (ii) the fair market value of the applicable portion of the Redeemed Limited Partner’s interest in the Partnership being redeemed on the date on which cash is allocated to make redemption payments. In making such determination of fair market value, the General Partner shall assume that all of the assets of the Partnership will be sold on the applicable date in a commercially reasonable manner and the proceeds of such sale, net of estimated closing costs, as reasonably determined by the General Partner, and all obligations of the Partnership (other than the redemption of the interest or interests in the Partnership being redeemed as of such date), will be distributed to the Partners pursuant to this Agreement. With respect to a Plan Asset Event or Regulatory Issue that is not a result of a breach of a representation, warranty or covenant made by the Redeemed Limited Partner or a change in law, if the majority of such Redeemed Limited Partners disagree with the General Partner’s determination of the Redemption Value of the applicable interests in the Partnership, such Redeemed Limited Partners shall negotiate in good faith to resolve such disagreement, and if such Redeemed Limited Partners continue to disagree after negotiations are",
							"entities": [{
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 339,
								"start": 324,
								"value": "General Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 506,
								"start": 482,
								"value": "Redeemed Limited Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 664,
								"start": 649,
								"value": "General Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 738,
								"start": 714,
								"value": "Redeemed Limited Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 901,
								"start": 877,
								"value": "Redeemed Limited Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1085,
								"start": 1070,
								"value": "General Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1323,
								"start": 1308,
								"value": "General Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1507,
								"start": 1499,
								"value": "Partners"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1702,
								"start": 1678,
								"value": "Redeemed Limited Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1772,
								"start": 1747,
								"value": "Redeemed Limited Partners"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 1806,
								"start": 1791,
								"value": "General Partner"
							}, {
								"id": "301",
								"entityType": "ORGANIZATION",
								"end": 2023,
								"start": 1998,
								"value": "Redeemed Limited Partners"
							}]
						}, {
							"id": "302",
							"text": "",
							"entities": []
						}, {
							"id": "303",
							"text": "",
							"entities": []
						}, {
							"id": "304",
							"text": "704094543 -16- ",
							"entities": []
						}, {
							"id": "305",
							"text": "held, either side may request that an independent evaluator (who must be reasonably acceptable to the other party) be retained, whose valuation shall be final and binding on the Partnership and all of the Partners. The Partnership will bear the cost of the independent evaluator. ",
							"entities": [{
								"id": "305",
								"entityType": "ORGANIZATION",
								"end": 213,
								"start": 205,
								"value": "Partners"
							}]
						}, {
							"id": "306",
							"text": "“Regulated Investor” has the meaning set forth in Section 6.6(b). ",
							"entities": []
						}, {
							"id": "307",
							"text": "“Regulatory Issue” has the meaning set forth in Section 6.6(b). ",
							"entities": []
						}, {
							"id": "308",
							"text": "“Second Amended and Restated Agreement” has the meaning set forth in the introduction. ",
							"entities": []
						}, {
							"id": "309",
							"text": "“Securities Act” means the Securities Act of 1933, as amended. ",
							"entities": []
						}, {
							"id": "310",
							"text": "“Senior Investment Team” means the following senior investment professionals who are partners of the General Partner or are employed by the Manager, for so long as such persons have not voluntarily resigned from, or been terminated by, the General Partner or Manager, and any other senior investment professionals from time to time who are designated as such by the General Partner: John W. Jordan II, Jonathan F. Boucher, A. Richard Caputo, Jr., Adam E. Max, Thomas H. Quinn, David M. Butler, Joseph C. Linnen, Douglas J. Zych, Michael R. Denvir, Brian J. Higgins and Eion Hu. ",
							"entities": [{
								"id": "310",
								"entityType": "PERSON",
								"end": 397,
								"start": 383,
								"value": "John W. Jordan"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 421,
								"start": 402,
								"value": "Jonathan F. Boucher"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 440,
								"start": 423,
								"value": "A. Richard Caputo"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 458,
								"start": 447,
								"value": "Adam E. Max"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 475,
								"start": 460,
								"value": "Thomas H. Quinn"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 492,
								"start": 477,
								"value": "David M. Butler"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 510,
								"start": 494,
								"value": "Joseph C. Linnen"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 527,
								"start": 512,
								"value": "Douglas J. Zych"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 546,
								"start": 529,
								"value": "Michael R. Denvir"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 564,
								"start": 548,
								"value": "Brian J. Higgins"
							}, {
								"id": "310",
								"entityType": "PERSON",
								"end": 576,
								"start": 569,
								"value": "Eion Hu"
							}]
						}, {
							"id": "311",
							"text": "“Separate Investment Entity” has the meaning set forth in Section 5.15. ",
							"entities": []
						}, {
							"id": "312",
							"text": "“Seventy Percent in Interest of the Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling at least 70% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles. ",
							"entities": [{
								"id": "312",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 60,
								"value": "Limited Partners"
							}, {
								"id": "312",
								"entityType": "ORGANIZATION",
								"end": 256,
								"start": 221,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "313",
							"text": "“Short-Term Investment Income” means the income earned on Short-Term Investments including in any event any gains and net of any losses from dispositions of Short-Term Investments and also net of any costs and expenses directly attributable thereto. ",
							"entities": [{
								"id": "313",
								"entityType": "ORGANIZATION",
								"end": 179,
								"start": 157,
								"value": "Short-Term Investments"
							}]
						}, {
							"id": "314",
							"text": "“Short-Term Investments” means investments in (a) cash, (b) obligations of, or fully guaranteed as to timely payment of principal and interest by, the United States of America and with a maturity date not in excess of 12 months from the date of purchase by the Partnership, (c) interest-bearing accounts and/or certificates of deposit of any U.S. bank with capital and surplus in excess of $500 million and whose debt securities are rated not lower than P-1 by Moody’s Investor Services, Inc. or A-1 by Standard & Poor’s Corporation, (d) repurchase agreements of any U.S. bank with capital and surplus in excess of $500 million and whose debt securities are rated not lower than P-1 by Moody’s Investor Services, Inc. or A-1 by Standard & Poor’s Corporation, and (e) money market mutual funds with assets of not less than $500 million, substantially all of which assets are reasonably believed by the General Partner to consist of items described in one or more of the foregoing clauses (b), (c) and (d). ",
							"entities": [{
								"id": "314",
								"entityType": "LOCATION",
								"end": 175,
								"start": 151,
								"value": "United States of America"
							}, {
								"id": "314",
								"entityType": "LOCATION",
								"end": 346,
								"start": 342,
								"value": "U.S."
							}, {
								"id": "314",
								"entityType": "ORGANIZATION",
								"end": 492,
								"start": 461,
								"value": "Moody 's Investor Services , Inc."
							}, {
								"id": "314",
								"entityType": "ORGANIZATION",
								"end": 532,
								"start": 503,
								"value": "Standard & Poor 's Corporation"
							}, {
								"id": "314",
								"entityType": "LOCATION",
								"end": 571,
								"start": 567,
								"value": "U.S."
							}, {
								"id": "314",
								"entityType": "ORGANIZATION",
								"end": 717,
								"start": 686,
								"value": "Moody 's Investor Services , Inc."
							}, {
								"id": "314",
								"entityType": "ORGANIZATION",
								"end": 757,
								"start": 728,
								"value": "Standard & Poor 's Corporation"
							}]
						}, {
							"id": "315",
							"text": "“Special Limited Partner” means Resolute Special LP III, LLC, a Delaware limited liability company.",
							"entities": [{
								"id": "315",
								"entityType": "ORGANIZATION",
								"end": 60,
								"start": 57,
								"value": "LLC"
							}, {
								"id": "315",
								"entityType": "LOCATION",
								"end": 72,
								"start": 64,
								"value": "Delaware"
							}]
						}, {
							"id": "316",
							"text": "",
							"entities": []
						}, {
							"id": "317",
							"text": "",
							"entities": []
						}, {
							"id": "318",
							"text": "704094543 -17- ",
							"entities": []
						}, {
							"id": "319",
							"text": "“Special Profit Interest” means (i) the Special Limited Partner’s right to receive distributions pursuant to the first two sentences of Section 3.3(a), but only to the extent such distributions exceed the distributions that would have been made to the Special Limited Partner pursuant to the first two sentences of Section 3.3(a) if such distributions had been made pro rata according to each Partner’s Capital Contributions to the Partnership, and (ii) the Special Limited Partner’s right to receive distributions pursuant to Section 3.3(e). ",
							"entities": [{
								"id": "319",
								"entityType": "ORGANIZATION",
								"end": 275,
								"start": 252,
								"value": "Special Limited Partner"
							}, {
								"id": "319",
								"entityType": "ORGANIZATION",
								"end": 424,
								"start": 393,
								"value": "Partner 's Capital Contributions"
							}]
						}, {
							"id": "320",
							"text": "“Subscription Agreement” means the Subscription Agreement (including a Subscriber Information Form) executed and delivered by each Limited Partner investing in the Partnership. ",
							"entities": [{
								"id": "320",
								"entityType": "ORGANIZATION",
								"end": 98,
								"start": 71,
								"value": "Subscriber Information Form"
							}, {
								"id": "320",
								"entityType": "ORGANIZATION",
								"end": 146,
								"start": 131,
								"value": "Limited Partner"
							}]
						}, {
							"id": "321",
							"text": "“Successor Fund” has the meaning set forth in Section 5.12. ",
							"entities": []
						}, {
							"id": "322",
							"text": "“Tax Distributions” means the aggregate amount of distributions that would be made to the General Partner if the General Partner received no distributions other than those required pursuant to Section 3.3(b). ",
							"entities": [{
								"id": "322",
								"entityType": "ORGANIZATION",
								"end": 128,
								"start": 113,
								"value": "General Partner"
							}]
						}, {
							"id": "323",
							"text": "“Tax Exempt Partner” means (i) a Limited Partner that is exempt from tax under Section 501 of the Code or (ii) a Limited Partner that has a direct or indirect beneficial owner that (x) is exempt from tax under Section 501 of the Code and (y) is required to report on a United States federal income tax return or report any taxable income allocated to such Limited Partner pursuant to Section 10.4, to the extent of such beneficial owner’s pro rata share of such income, but only if such Limited Partner has notified the General Partner in writing regarding the status of such direct or indirect beneficial owner. ",
							"entities": [{
								"id": "323",
								"entityType": "LOCATION",
								"end": 282,
								"start": 269,
								"value": "United States"
							}]
						}, {
							"id": "324",
							"text": "“Terminated Partner” has the meaning set forth in the agreement of limited partnership of the General Partner, as amended form time to time in accordance with its terms. ",
							"entities": []
						}, {
							"id": "325",
							"text": "“Topping and Break-up Fees” means topping, break-up or similar fees in connection with prospective Portfolio Investments that are not completed, in each case to the extent actually paid by, on behalf of, or at the direction of, a prospective Portfolio Company and received by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates; provided, however, that (A) such fees shall not include, in each case, any such amounts that (1) are applied to cover amounts paid by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates that constitute unreimbursed (i) out-of-pocket expenses of such persons incurred in generating such fees, and (ii) Partnership Expenses incurred in generating such fees or (2) are paid to the Fund II Manager in respect of the capital invested by Fund II in any co-investment by the Partnership and Fund II pursuant to Section 5.12, (B) to the extent that the General Partner, the Manager, the members of the Senior Investment Team or their Affiliates were actually reimbursed by the Partnership for any Partnership Expenses incurred in generating such fees, such fees will first be applied to repay the Partnership for such Partnership Expenses and (C) prior to application of such fees as Fee Offsets, such fees will first be applied to repay the Partnership for all third-party costs and expenses in connection with transactions that are not consummated that are not reimbursed by a Portfolio Company and costs of third-party brokers, consultants, research and market analyses that are borne by the Partnership.",
							"entities": [{
								"id": "325",
								"entityType": "ORGANIZATION",
								"end": 259,
								"start": 242,
								"value": "Portfolio Company"
							}, {
								"id": "325",
								"entityType": "ORGANIZATION",
								"end": 351,
								"start": 329,
								"value": "Senior Investment Team"
							}, {
								"id": "325",
								"entityType": "ORGANIZATION",
								"end": 608,
								"start": 586,
								"value": "Senior Investment Team"
							}, {
								"id": "325",
								"entityType": "ORGANIZATION",
								"end": 1557,
								"start": 1540,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "326",
							"text": "",
							"entities": []
						}, {
							"id": "327",
							"text": "",
							"entities": []
						}, {
							"id": "328",
							"text": "704094543 -18- ",
							"entities": []
						}, {
							"id": "329",
							"text": "“Transaction Fees” means commitment, transaction, closing, merger and acquisition, divestiture, financing and similar fees in respect of a Portfolio Company, in each case to the extent actually paid by, on behalf of, or at the direction of, a Portfolio Company and received by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates; provided, however, that (A) such fees shall not include, in each case, any such amounts that (1) are applied to cover amounts paid by the General Partner, the Manager, the members of the Senior Investment Team, employees of the Manager or their Affiliates that constitute unreimbursed (i) out-of-pocket expenses of such persons incurred in generating such fees, and (ii) Partnership Expenses incurred in generating such fees or (2) are paid to the Fund II Manager in respect of the capital invested by Fund II in any co-investment by the Partnership and Fund II pursuant to Section 5.12, (B) to the extent that the General Partner, the Manager, the members of the Senior Investment Team or their Affiliates were actually reimbursed by the Partnership for any Partnership Expenses incurred in generating such fees, such fees will first be applied to repay the Partnership for such Partnership Expenses and (C) prior to application of such fees as Fee Offsets, such fees will first be applied to repay the Partnership for all third-party costs and expenses in connection with transactions that are not consummated that are not reimbursed by a Portfolio Company and costs of third-party brokers, consultants, research and market analyses that are borne by the Partnership. ",
							"entities": [{
								"id": "329",
								"entityType": "ORGANIZATION",
								"end": 260,
								"start": 243,
								"value": "Portfolio Company"
							}, {
								"id": "329",
								"entityType": "ORGANIZATION",
								"end": 352,
								"start": 330,
								"value": "Senior Investment Team"
							}, {
								"id": "329",
								"entityType": "ORGANIZATION",
								"end": 609,
								"start": 587,
								"value": "Senior Investment Team"
							}, {
								"id": "329",
								"entityType": "ORGANIZATION",
								"end": 1558,
								"start": 1541,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "330",
							"text": "“Triggering Event” has the meaning set forth in Section 2.2(d). ",
							"entities": []
						}, {
							"id": "331",
							"text": "“Two-Thirds in Interest of the Limited Partners” means Limited Partners with Commitments and limited partners in Parallel Vehicles with capital commitments to Parallel Vehicles totaling more than 662/3% of the aggregate Commitments of all Limited Partners and capital commitments of limited partners in Parallel Vehicles. ",
							"entities": [{
								"id": "331",
								"entityType": "ORGANIZATION",
								"end": 71,
								"start": 55,
								"value": "Limited Partners"
							}, {
								"id": "331",
								"entityType": "ORGANIZATION",
								"end": 176,
								"start": 159,
								"value": "Parallel Vehicles"
							}, {
								"id": "331",
								"entityType": "ORGANIZATION",
								"end": 255,
								"start": 220,
								"value": "Commitments of all Limited Partners"
							}]
						}, {
							"id": "332",
							"text": "“UBTI” means unrelated business taxable income and unrelated debt financed taxable income, as defined in Sections 512 and 514 of the Code, respectively. ",
							"entities": []
						}, {
							"id": "333",
							"text": "“Unapplied Waived Fee Amounts” means, as of the date of determination, the excess, if any, of (i) the sum of (A) the aggregate Waived Fee Amount for all Management Fee Periods, (B) the aggregate amount described in clause (i) of the definition of “Deemed Contribution” relating to the aggregate Capital Contributions previously returned to the Partners pursuant to Section 2.2(c) (including, without limitation, in respect of Bridge Financings) and (C) amounts added to the Unapplied Waived Fee Amounts pursuant to Section 6.5(b) over (ii) the aggregate amount described in clause (i) of the definition of “Deemed Contribution” as of such time. ",
							"entities": [{
								"id": "333",
								"entityType": "ORGANIZATION",
								"end": 316,
								"start": 295,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "334",
							"text": "“Uncapitalized Partnership Expenses” means Partnership Expenses that are not Capitalized Partnership Expenses. ",
							"entities": []
						}, {
							"id": "335",
							"text": "“Unfunded Commitment” means that portion of a Partner’s Commitment that is not a Funded Commitment. ",
							"entities": []
						}, {
							"id": "336",
							"text": "“Waived Fee Amount” has the meaning set forth in Section 4.1(d). ",
							"entities": []
						}, {
							"id": "337",
							"text": "“Waived Fee Notice” has the meaning set forth in Section 4.1(d). ",
							"entities": []
						}, {
							"id": "338",
							"text": "“Waiver Contribution” has the meaning set forth in Section 2.2(a)(ii).",
							"entities": []
						}, {
							"id": "339",
							"text": "",
							"entities": []
						}, {
							"id": "340",
							"text": "",
							"entities": []
						}, {
							"id": "341",
							"text": "704094543 -19- ",
							"entities": []
						}, {
							"id": "342",
							"text": "Section 2.2 Capital Contribution Commitment; Key Person Provision. Subject to Section 5.6(b): ",
							"entities": []
						}, {
							"id": "343",
							"text": "(a) (i) Each Partner agrees to make contributions in cash to the capital of the Partnership pro rata based upon such Partner’s respective Unfunded Commitment in an aggregate amount up to its Unfunded Commitment when and as called by the General Partner (“Capital Call”) upon at least ten Business Days written notice (the “Capital Call Notice”); provided, however, that neither the General Partner nor the Special Limited Partner shall be obligated to make Capital Contributions to be used to pay the Management Fee or Placement Fees, and Capital Contributions to pay the Management Fee will be made by each Limited Partner based on the amount of each payment of the Management Fee that is borne by such Limited Partner pursuant to Section 4.1(b). Any Capital Contributions made by the Limited Partners to pay the Partnership’s pro rata share of any Placement Fees shall be made by the Limited Partners whose Commitments gave rise to such fees, pro rata in accordance with their respective Commitments. The aggregate Commitments and capital commitments to all Parallel Vehicles of the General Partner, the Special Limited Partner and the Investment Team, (including any holder of a Limited Partner interest in the Partnership received pursuant to Section 2.2(a)(iii)) shall be pro rata and shall equal at least $200 million. The aggregate capital commitments to the General Partner of the Managing Partners and their Affiliates shall equal at least $150 million and the General Partner will use such capital commitments to fund its Commitment. The General Partner will not be deemed to be in violation of this Agreement including for purposes of Section 5.9, if there is a default or defaults in Commitments or capital commitments to Parallel Vehicles by the General Partner, the Special Limited Partner or the Investment Team arising from (x) a default by a partner of the General Partner in respect of its capital commitment to the General Partner or (y) a transfer of the interest of a partner of the General Partner pursuant to Section 2.2(a)(iii), if the undefaulted capital commitments to the General Partner of the Managing Partners and their Affiliates is at least $150 million. Subsequent to any such default or transfer, the Commitment of the General Partner and the Special Limited Partner shall be permanently reduced by the amount and to the extent of the defaulted or transferred Commitment and the remaining Unfunded Commitment related thereto and the General Partner shall promptly notify the Limited Partners in writing of any such reduction. Notwithstanding the foregoing, in the event of such a default or transfer of the General Partner’s Commitment, the General Partner shall continue to fund all Capital Calls pro rata with Limited Partners to the extent of its reduced Commitment, including any Capital Call as to which a partner of the General Partner has defaulted. Each Capital Contribution shall be made by Partners in cash either by delivery to the Partnership of a certified check or wire transfer of immediately available funds to an account designated by the General Partner, provided, however, that the Capital Contributions of the General Partner and the Special Limited Partner may be made by cash contributions or by Deemed Contributions as set forth in Section 2.2(a)(ii). ",
							"entities": [{
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 560,
								"start": 539,
								"value": "Capital Contributions"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 623,
								"start": 608,
								"value": "Limited Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 802,
								"start": 786,
								"value": "Limited Partners"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 902,
								"start": 886,
								"value": "Limited Partners"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 1129,
								"start": 1106,
								"value": "Special Limited Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 1197,
								"start": 1182,
								"value": "Limited Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 1485,
								"start": 1470,
								"value": "General Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 1889,
								"start": 1874,
								"value": "General Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2019,
								"start": 2004,
								"value": "General Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2525,
								"start": 2509,
								"value": "Limited Partners"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2669,
								"start": 2641,
								"value": "General Partner 's Commitment"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2690,
								"start": 2675,
								"value": "General Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2762,
								"start": 2746,
								"value": "Limited Partners"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 2875,
								"start": 2860,
								"value": "General Partner"
							}, {
								"id": "343",
								"entityType": "ORGANIZATION",
								"end": 3105,
								"start": 3090,
								"value": "General Partner"
							}]
						}, {
							"id": "344",
							"text": "A Capital Call Notice shall: (i) specify the purpose for which the Capital Contributions are required to be made; (ii) in the case of a Capital Call Notice with respect to the anticipated making of a Portfolio Investment, include: (A) a brief description of the identity, nature and business of such Portfolio Investment; (B) a statement as to whether the Portfolio Investment might be structured through a Separate Investment Entity; (C) a designation as such of any Bridge Financing to be made as part of such Portfolio Investment, and (D) a statement as to whether the Portfolio Investment is an investment in a Media Company or could, in the",
							"entities": [{
								"id": "344",
								"entityType": "ORGANIZATION",
								"end": 628,
								"start": 615,
								"value": "Media Company"
							}]
						}, {
							"id": "345",
							"text": "",
							"entities": []
						}, {
							"id": "346",
							"text": "",
							"entities": []
						}, {
							"id": "347",
							"text": "704094543 -20- ",
							"entities": []
						}, {
							"id": "348",
							"text": "reasonable judgment of the General Partner, cause a Limited Partner to realize UBTI or ECI or cause a Non-U.S. Partner to which Section 892 of the Code applies to be considered or deemed to be engaged in a commercial activity; (iii) specify a Limited Partner’s pro rata share of the aggregate Capital Contributions of all Partners required to be made by such Limited Partner, the portion of the Capital Contribution to be applied towards the payment of Management Fees, and the amount of a Limited Partner’s Unfunded Commitment remaining following the funding of such Capital Contribution; and (iv) be substantially in accordance with the reporting standards for capital call notices that have been developed by ILPA as of the date hereof. ",
							"entities": [{
								"id": "348",
								"entityType": "ORGANIZATION",
								"end": 83,
								"start": 79,
								"value": "UBTI"
							}, {
								"id": "348",
								"entityType": "ORGANIZATION",
								"end": 330,
								"start": 293,
								"value": "Capital Contributions of all Partners"
							}]
						}, {
							"id": "349",
							"text": "(ii) Notwithstanding Section 2.2(a)(i) above, at such time as the General Partner delivers any Capital Call Notice, the General Partner’s or the Special Limited Partner’s required Capital Contributions in respect of anticipated or actual Portfolio Company and/or expenses incurred directly in connection with the making, maintaining or disposing of such Portfolio Company, at the Special Limited Partner’s election, shall be reduced by an amount up to the lesser of (A) the amount of Capital Contributions otherwise required to be made by the General Partner or the Special Limited Partner pursuant to Section 2.2(a)(i), or (B) the amount of any existing Unapplied Waived Fee Amounts, and such amount shall instead be funded by the Participating Partners pro rata according to their respective Commitments (for any Partner, a “Waiver Contribution”). If, as of any date, the aggregate amounts described in clause (i) of the definition of “Deemed Contribution” exceed the sum of the amounts described in clause (i) of the definition of “Unapplied Waived Fee Amounts,” the General Partner or Special Limited Partner, as the case may be, shall, within ten Business Days after such date, make a Capital Contribution equal to the amount of such excess. Such amount shall be distributed to the Partners as a return of their Capital Contributions, in proportion to their respective Waiver Contributions. Corresponding adjustments shall be made to the Special Profits Interest. The Managing Partners and their Affiliates will not use Waiver Contributions to fund any portion of their capital commitments to the General Partner or the Special Limited Partner and the aggregate Waiver Contributions by the other members of the Investment Team and their Affiliates will not exceed $50 million. ",
							"entities": [{
								"id": "349",
								"entityType": "ORGANIZATION",
								"end": 81,
								"start": 66,
								"value": "General Partner"
							}, {
								"id": "349",
								"entityType": "ORGANIZATION",
								"end": 255,
								"start": 238,
								"value": "Portfolio Company"
							}, {
								"id": "349",
								"entityType": "ORGANIZATION",
								"end": 589,
								"start": 566,
								"value": "Special Limited Partner"
							}, {
								"id": "349",
								"entityType": "ORGANIZATION",
								"end": 1648,
								"start": 1625,
								"value": "Special Limited Partner"
							}, {
								"id": "349",
								"entityType": "ORGANIZATION",
								"end": 1731,
								"start": 1716,
								"value": "Investment Team"
							}]
						}, {
							"id": "350",
							"text": "(iii) Notwithstanding Section 2.2(a)(i) above, but subject to Sections 5.8 and 6.2, in the event that the General Partner elects to transfer a portion of its Partner Interest in, and Unfunded Commitment to, the Partnership to a partner of the General Partner, the General Partner may convert that portion of its interest in the Partnership that it is to so transfer into a Limited Partner interest in the Partnership and then distribute that Limited Partner interest in the Partnership to the partner of the General Partner (the “New Limited Partner”); provided that the Commitment of the General Partner (including the aggregate capital commitments of the Managing Partners and their Affiliates to the General Partner) and Special Limited Partner together with capital commitments to Parallel Vehicles by the General Partner, Special Limited Partner or the Investment Team is at least $150 million. At all times after such transfer, such New Limited Partner shall assume that portion of the General Partner’s Commitment that is associated with the portion of the General Partner’s Partner Interest that is transferred, as determined by the General Partner, and the General Partner’s Commitment shall be reduced by a like amount. ",
							"entities": [{
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 121,
								"start": 106,
								"value": "General Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 258,
								"start": 243,
								"value": "General Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 388,
								"start": 373,
								"value": "Limited Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 457,
								"start": 442,
								"value": "Limited Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 523,
								"start": 508,
								"value": "General Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 850,
								"start": 827,
								"value": "Special Limited Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 1007,
								"start": 992,
								"value": "General Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 1098,
								"start": 1064,
								"value": "General Partner 's Partner Interest"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 1156,
								"start": 1141,
								"value": "General Partner"
							}, {
								"id": "350",
								"entityType": "ORGANIZATION",
								"end": 1181,
								"start": 1166,
								"value": "General Partner"
							}]
						}, {
							"id": "351",
							"text": "(b) Each Partner’s Commitment will commence on the Effective Date and will expire on the earlier of (i) six years from the Effective Date, (ii) a date after 80% of Commitments have",
							"entities": []
						}, {
							"id": "352",
							"text": "",
							"entities": []
						}, {
							"id": "353",
							"text": "",
							"entities": []
						}, {
							"id": "354",
							"text": "704094543 -21- ",
							"entities": []
						}, {
							"id": "355",
							"text": "been funded as the General Partner may elect by written notice to the Limited Partners if, after consulting with the Advisory Committee, the General Partner determines that it is impractical for the Partnership to seek additional Portfolio Investments, (iii) the date on which the General Partner determines that 90% of the aggregate Commitments of the Partners to the Partnership have been funded (and are not subject to reinvestment, or needed for purposes described in clauses (i) through (iii) of the next sentence below), (iv) the effective date that the Commitment Period is terminated pursuant to Section 2.2(d), or (v) the date that the Commitment Period is terminated with the consent of Seventy Percent in Interest of the Limited Partners (such period being referred to as the “Commitment Period”). Notwithstanding the expiration or the termination of the Commitment Period, the Partners will remain obligated to make cash contributions throughout the duration of the Partnership pursuant to their respective Unfunded Commitments to the extent needed (i) to make Follow-on Investments; provided, however, that the aggregate of all Follow-on Investments made after the termination of the Commitment Period shall not exceed 20% of the aggregate Commitments, (ii) to make investments pursuant to written commitments, letters of intent, memorandum or similar understandings, existing prior to or on the date of termination of the Commitment Period, and (iii) to pay Partnership Expenses and the Management Fee. The General Partner shall notify the Limited Partners within 30 days of the termination of the Commitment Period as to all in process investments to the extent the General Partner is not bound by confidentiality obligations related thereto. ",
							"entities": [{
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 135,
								"start": 117,
								"value": "Advisory Committee"
							}, {
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 156,
								"start": 141,
								"value": "General Partner"
							}, {
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 361,
								"start": 353,
								"value": "Partners"
							}, {
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 748,
								"start": 732,
								"value": "Limited Partners"
							}, {
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 897,
								"start": 889,
								"value": "Partners"
							}, {
								"id": "355",
								"entityType": "ORGANIZATION",
								"end": 1570,
								"start": 1554,
								"value": "Limited Partners"
							}]
						}, {
							"id": "356",
							"text": "(c) The General Partner shall cause the Partnership to return to the Partners all or any portion of any Capital Contribution to the Partnership which is not invested in a Portfolio Investment or used to pay Partnership Expenses, Management Fees, Placement Fees or Organizational Expenses or which has been contributed in order to fund a Bridge Financing which is refinanced. Each such return of Capital Contributions shall be made pro rata among all Partners in the same proportion as the Partners made such Capital Contributions and shall be made on or before the sixtieth (60th) day following the date such Capital Contributions were due (as set forth in the Capital Call Notice pursuant to which such Capital Contributions were made by the Partners to the Partnership), provided, however, that such Capital Contributions may be retained and applied with respect to another outstanding Capital Call Notice and may also be retained if the General Partner determines in good faith that there will be a Capital Call within thirty (30) days after the date that such Capital Contributions would otherwise be required to be returned, and if not so applied and retained, may be called again by the General Partner according to the provisions of this Section 2.2 as if such returned Capital Contributions had not been previously called. ",
							"entities": [{
								"id": "356",
								"entityType": "ORGANIZATION",
								"end": 497,
								"start": 489,
								"value": "Partners"
							}, {
								"id": "356",
								"entityType": "ORGANIZATION",
								"end": 751,
								"start": 743,
								"value": "Partners"
							}, {
								"id": "356",
								"entityType": "ORGANIZATION",
								"end": 955,
								"start": 940,
								"value": "General Partner"
							}, {
								"id": "356",
								"entityType": "ORGANIZATION",
								"end": 1208,
								"start": 1193,
								"value": "General Partner"
							}, {
								"id": "356",
								"entityType": "ORGANIZATION",
								"end": 1298,
								"start": 1277,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "357",
							"text": "(d) If (i) any two of John W. Jordan II, Jonathan F. Boucher, A. Richard Caputo, Jr. and Adam E. Max should (A) die, (B) due to disability not devote substantially all of their business time and attention to the affairs of the Partnership, the Parallel Vehicles, Separate Investment Entities and their respective Portfolio Investments (collectively, the “Fund Group”) for 120 days or more during any nine-month period (a “Disability”) or (C) cease to devote substantially all of their business time and attention to the affairs of the Fund Group for any reason other than death or Disability, or (ii) more than twenty-five percent (25%) of the beneficial interest of the General Partner (consisting of capital, carried interest and voting interests) or more than forty percent (40%) of the beneficial interest of the Manager (consisting of economic or voting interests) is transferred to any person or group of persons other than the existing members of the Senior Investment Team as of the date of this Agreement and Permitted",
							"entities": [{
								"id": "357",
								"entityType": "PERSON",
								"end": 36,
								"start": 22,
								"value": "John W. Jordan"
							}, {
								"id": "357",
								"entityType": "PERSON",
								"end": 60,
								"start": 41,
								"value": "Jonathan F. Boucher"
							}, {
								"id": "357",
								"entityType": "PERSON",
								"end": 79,
								"start": 62,
								"value": "A. Richard Caputo"
							}, {
								"id": "357",
								"entityType": "PERSON",
								"end": 100,
								"start": 89,
								"value": "Adam E. Max"
							}, {
								"id": "357",
								"entityType": "ORGANIZATION",
								"end": 545,
								"start": 535,
								"value": "Fund Group"
							}, {
								"id": "357",
								"entityType": "ORGANIZATION",
								"end": 686,
								"start": 671,
								"value": "General Partner"
							}]
						}, {
							"id": "358",
							"text": "",
							"entities": []
						}, {
							"id": "359",
							"text": "",
							"entities": []
						}, {
							"id": "360",
							"text": "704094543 -22- ",
							"entities": []
						}, {
							"id": "361",
							"text": "GP Transferees (the circumstances specified in each of clauses (i) and (ii) above being referred to herein as a “Triggering Event”), then the Partnership shall automatically enter into a 120-day period in which the Commitment Period will be suspended (a “Continuity Period”). The Partnership shall not make any new investments during the Continuity Period, except to the extent arising from written obligations or similar legally binding commitments arising prior to the commencement of the Continuity Period. The Senior Investment Team’s pursuit of Other Permitted Investment Activities will not give rise to a Triggering Event. The General Partner will promptly notify the Limited Partners of the occurrence of a Triggering Event. During a Continuity Period, the General Partner shall, after consultation with the Advisory Committee, prepare for and provide to the Limited Partners within 60 days of the Triggering Event a program recommended by the General Partner for resumption by the Partnership of its full range of activities at the end of such Continuity Period. Unless a Majority in Interest of the Limited Partners elect to continue the Commitment Period prior to the end of the Continuity Period, the Commitment Period shall terminate on the date such Continuity Period expires. ",
							"entities": [{
								"id": "361",
								"entityType": "ORGANIZATION",
								"end": 649,
								"start": 634,
								"value": "General Partner"
							}, {
								"id": "361",
								"entityType": "ORGANIZATION",
								"end": 691,
								"start": 675,
								"value": "Limited Partners"
							}, {
								"id": "361",
								"entityType": "ORGANIZATION",
								"end": 834,
								"start": 816,
								"value": "Advisory Committee"
							}, {
								"id": "361",
								"entityType": "ORGANIZATION",
								"end": 883,
								"start": 867,
								"value": "Limited Partners"
							}, {
								"id": "361",
								"entityType": "ORGANIZATION",
								"end": 1125,
								"start": 1109,
								"value": "Limited Partners"
							}]
						}, {
							"id": "362",
							"text": "Section 2.3 Capital Accounts. A capital account (“Capital Account”) will be established for each Partner on the books of the Partnership and will be adjusted as follows: ",
							"entities": []
						}, {
							"id": "363",
							"text": "(a) Capital Contributions. A Partner’s Capital Contribution will be credited to its Capital Account when received by the Partnership. ",
							"entities": [{
								"id": "363",
								"entityType": "ORGANIZATION",
								"end": 59,
								"start": 29,
								"value": "Partner 's Capital Contribution"
							}]
						}, {
							"id": "364",
							"text": "(b) Short-Term Investment Income. Short-Term Investment Income earned in each quarterly period with respect to Capital Contributions that have not yet been invested in Portfolio Investments or used to pay fees and expenses of the Partnership will be credited to the Capital Accounts of the Partners pro rata according to their respective Capital Contributions to which such Short-Term Investment Income is attributable. Short-Term Investment Income on undistributed proceeds from Portfolio Investments shall be credited to the Capital Accounts of the Partners ratably in proportion to their respective shares of such undistributed amounts. ",
							"entities": [{
								"id": "364",
								"entityType": "ORGANIZATION",
								"end": 359,
								"start": 338,
								"value": "Capital Contributions"
							}, {
								"id": "364",
								"entityType": "ORGANIZATION",
								"end": 559,
								"start": 551,
								"value": "Partners"
							}]
						}, {
							"id": "365",
							"text": "(c) Investment Income and Gain and Investment Loss. Taking into account Section 6.6(d), Investment Income and Gain or Investment Loss shall be allocated among the Partners for each taxable period in such a manner that, as of the end of such taxable period, and to the extent possible, the Capital Account of each Partner shall be equal to the net amount, positive or negative, which would be distributed to each Partner or for which such Partner would be liable to the Partnership under this Agreement (including Sections 8.3(c) and (d)), determined as if the Partnership were to liquidate the assets of the Partnership for an amount equal to their Basis, reduced, but not below zero, by the amount of nonrecourse debt, if any, to which such Partnership assets are subject, and distribute the proceeds in liquidation after the payment of all liabilities (other than nonrecourse liabilities) in accordance with Sections 3.2 and 3.3. For purposes of the foregoing determination, no amount shall be treated as distributable pursuant to subclause (z) of clause (A) of Section 3.3(a)(i) or clause (B) of Section 3.3(a)(i) with respect to any Portfolio Investment or portion thereof solely because of the deemed liquidation of such Portfolio Investment; provided, however, that any increase in the Basis of a Portfolio Investment shall be taken into account for this purpose in the same manner as proceeds of a Partial Realization.",
							"entities": [{
								"id": "365",
								"entityType": "ORGANIZATION",
								"end": 171,
								"start": 163,
								"value": "Partners"
							}]
						}, {
							"id": "366",
							"text": "",
							"entities": []
						}, {
							"id": "367",
							"text": "",
							"entities": []
						}, {
							"id": "368",
							"text": "704094543 -23- ",
							"entities": []
						}, {
							"id": "369",
							"text": "(d) Organizational Expenses, Management Fee. Organizational Expenses that are borne by the Partnership will be apportioned to the Partners pro-rata according to their respective Capital Contributions to pay Organizational Expenses. Organizational Expenses that are described in Section 705(a)(2)(B) of the Code will be debited against the Capital Accounts of the Partners in the fiscal period in which they are incurred, and Organizational Expenses that are described in Section 709(b) of the Code will be debited against the Capital Accounts of Partners (but not for purposes of any payments or offsets against the Management Fee pursuant to Section 4.1(c)) over a 180-month period commencing on the date of formation of the Partnership. The Management Fee for any Management Fee Period shall be debited against the Capital Account of each Limited Partner (other than the Special Limited Partner) in the amount that is borne by such Limited Partner pursuant to Section 4.1(b) for such Management Fee Period. ",
							"entities": [{
								"id": "369",
								"entityType": "ORGANIZATION",
								"end": 138,
								"start": 130,
								"value": "Partners"
							}, {
								"id": "369",
								"entityType": "ORGANIZATION",
								"end": 199,
								"start": 178,
								"value": "Capital Contributions"
							}, {
								"id": "369",
								"entityType": "ORGANIZATION",
								"end": 371,
								"start": 339,
								"value": "Capital Accounts of the Partners"
							}, {
								"id": "369",
								"entityType": "ORGANIZATION",
								"end": 554,
								"start": 526,
								"value": "Capital Accounts of Partners"
							}, {
								"id": "369",
								"entityType": "ORGANIZATION",
								"end": 896,
								"start": 873,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "370",
							"text": "(e) Distributions. Any amounts distributed to the Partners will be debited against their Capital Accounts. ",
							"entities": [{
								"id": "370",
								"entityType": "ORGANIZATION",
								"end": 58,
								"start": 50,
								"value": "Partners"
							}]
						}, {
							"id": "371",
							"text": "(f) Partnership Expenses. Uncapitalized Partnership Expenses shall be debited against the Capital Accounts of the Partners in proportion to their respective Commitments. ",
							"entities": []
						}, {
							"id": "372",
							"text": "(g) Placement Fees. Placement Fees, shall be debited against the Capital Accounts of the Limited Partners (other than the Special Limited Partner) whose Commitments gave rise to such fees, in proportion to their respective Commitments. ",
							"entities": [{
								"id": "372",
								"entityType": "ORGANIZATION",
								"end": 105,
								"start": 65,
								"value": "Capital Accounts of the Limited Partners"
							}, {
								"id": "372",
								"entityType": "ORGANIZATION",
								"end": 145,
								"start": 122,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "373",
							"text": "Section 2.4 Distributions in Kind. ",
							"entities": []
						}, {
							"id": "374",
							"text": "(a) If any securities are to be distributed in kind to the Partners as provided in Article III, such securities will first be written up or down to their value (as determined pursuant to Article IX as of the date of such distribution), thus creating Investment Income and Gain or Investment Loss, which shall be allocated in accordance with Section 2.3 to the Capital Accounts of the Partners, and upon the distribution (or deemed distribution pursuant to Section 2.4(b)) of such securities to the Partners, the value of such securities shall be debited, in accordance with Section 2.3(e), against the Capital Accounts of the Partners. ",
							"entities": [{
								"id": "374",
								"entityType": "ORGANIZATION",
								"end": 634,
								"start": 626,
								"value": "Partners"
							}]
						}, {
							"id": "375",
							"text": "(b) The General Partner shall give at least ten Business Days prior notice to the Limited Partners of any proposed distribution of securities pursuant to this Section 2.4, the date of such proposed distribution and the type and quantity of such securities. In connection with any distribution of securities in kind, the General Partner shall offer each Limited Partner the right to elect to receive a distribution of securities or to have the Partnership dispose of all or any portion of such securities for the account of such Limited Partner. At the election of a Limited Partner (an “Electing Limited Partner”), all distributions of securities that otherwise would be made to the Electing Limited Partner by the Partnership shall be made, as determined by the General Partner, to the General Partner or an independent escrow agent or custodian as agent for the Limited Partner (the “Agent”) and, unless otherwise specified in writing, an Electing Limited Partner shall be deemed to have chosen to have the Partnership sell its share of securities in full. An Electing Limited Partner shall bear all expenses (including, without limitation, underwriting costs and brokerage commissions) relating to the sale by the Partnership of such securities. The General Partner may require the Electing Limited Partner to make any representations, warranties and covenants as the General Partner shall reasonably determine are necessary or",
							"entities": [{
								"id": "375",
								"entityType": "ORGANIZATION",
								"end": 335,
								"start": 320,
								"value": "General Partner"
							}, {
								"id": "375",
								"entityType": "ORGANIZATION",
								"end": 778,
								"start": 763,
								"value": "General Partner"
							}, {
								"id": "375",
								"entityType": "ORGANIZATION",
								"end": 802,
								"start": 787,
								"value": "General Partner"
							}]
						}, {
							"id": "376",
							"text": "",
							"entities": []
						}, {
							"id": "377",
							"text": "",
							"entities": []
						}, {
							"id": "378",
							"text": "704094543 -24- ",
							"entities": []
						}, {
							"id": "379",
							"text": "desirable in order to dispose of the securities. For all purposes of this Agreement, the Limited Partner shall be deemed to have received such distribution of securities on the date that such securities are delivered to the Agent. Immediately following a distribution to the Agent pursuant to this Section 2.4(b), the General Partner shall notify the Limited Partner of the type and quantity of securities distributed. The Agent shall thereafter hold such securities for a period of 10 Business Days following which the Agent shall use its reasonable efforts to promptly sell such securities and deliver the net proceeds therefrom to the Limited Partner; provided, however, that the Agent shall not sell such securities and shall instead promptly deliver such securities to the Limited Partner following the conclusion of such 10 Business Day period if, prior to the conclusion of such period, the Limited Partner notifies the Agent that the receipt of such securities would not violate any law, regulation or governmental order applicable to the Limited Partner. The Agent shall use good faith efforts in selling such securities at the highest available price, but shall not be liable to an Electing Limited Partner in any manner in connection with such sale, including for any claim that the Agent was unable to effect any such sale (for any reason) or failed to obtain the highest possible sale price for such securities. ",
							"entities": [{
								"id": "379",
								"entityType": "ORGANIZATION",
								"end": 499,
								"start": 486,
								"value": "Business Days"
							}, {
								"id": "379",
								"entityType": "ORGANIZATION",
								"end": 913,
								"start": 898,
								"value": "Limited Partner"
							}]
						}, {
							"id": "380",
							"text": "(c) An Electing Limited Partner’s election pursuant to Section 2.4(b) may be revoked by the Electing Limited Partner at any time upon notice to the General Partner; provided, however, that an election may not be revoked with respect to securities if the Agent has entered into a binding commitment to sell securities on behalf of the Electing Limited Partner. ",
							"entities": [{
								"id": "380",
								"entityType": "ORGANIZATION",
								"end": 358,
								"start": 334,
								"value": "Electing Limited Partner"
							}]
						}, {
							"id": "381",
							"text": "Section 2.5 Determination of Voting Thresholds. Any vote, approval or consent that is to be based upon a specified proportion of the interests in the Partnership held by the limited partners shall be based upon the Limited Partners’ Commitments and the capital commitments of limited partners in Parallel Vehicles, excluding (i) except as specifically provided in Section 6.9, that portion of each Limited Partner’s Commitment and the capital commitment of each limited partner in a Parallel Vehicle that represents a Non-Voting Interest, (ii) except as otherwise set forth in Section 12.1(b), limited partner interests in the Partnership or in any Parallel Vehicle held by a Defaulting Partner or a defaulting partner of a Parallel Vehicle, and (iii) limited partner interests in the Partnership or in any Parallel Vehicle held by the General Partner, the members of the Investment Team, the Special Limited Partner or any of their respective Affiliates or any limited partner transferee of the General Partner pursuant to Section 2.2(a)(iii) prior to any removal of the General Partner pursuant to Section 5.9. Each Limited Partner (and limited partner in a Parallel Vehicle, if applicable) will be solicited at the same time on all matters submitted to a vote, consent or approval of the Limited Partners (or limited partners in Parallel Vehicles, if applicable) pursuant to this Agreement. ",
							"entities": [{
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 426,
								"start": 398,
								"value": "Limited Partner 's Commitment"
							}, {
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 851,
								"start": 836,
								"value": "General Partner"
							}, {
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 887,
								"start": 872,
								"value": "Investment Team"
							}, {
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 1011,
								"start": 996,
								"value": "General Partner"
							}, {
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 1087,
								"start": 1072,
								"value": "General Partner"
							}, {
								"id": "381",
								"entityType": "ORGANIZATION",
								"end": 1307,
								"start": 1291,
								"value": "Limited Partners"
							}]
						}, {
							"id": "382",
							"text": "ARTICLE III ",
							"entities": []
						}, {
							"id": "383",
							"text": "DISTRIBUTIONS ",
							"entities": []
						}, {
							"id": "384",
							"text": "Section 3.1 Distribution Policy. ",
							"entities": []
						}, {
							"id": "385",
							"text": "(a) The General Partner may in its sole discretion make distributions of cash or Marketable Securities at any time and from time to time; provided, however, that no securities",
							"entities": [{
								"id": "385",
								"entityType": "ORGANIZATION",
								"end": 102,
								"start": 81,
								"value": "Marketable Securities"
							}]
						}, {
							"id": "386",
							"text": "",
							"entities": []
						}, {
							"id": "387",
							"text": "",
							"entities": []
						}, {
							"id": "388",
							"text": "704094543 -25- ",
							"entities": []
						}, {
							"id": "389",
							"text": "will be distributed in kind to the Partners that are not Marketable Securities until the final distribution of the assets of the Partnership to the Partners pursuant to Section 8.3(b). All distribution notices in respect of the Partnership will be substantially in accordance with the reporting standards for distribution notices that have been developed by ILPA as of the date hereof. ",
							"entities": [{
								"id": "389",
								"entityType": "ORGANIZATION",
								"end": 156,
								"start": 148,
								"value": "Partners"
							}]
						}, {
							"id": "390",
							"text": "(b) The General Partner will cause the Partnership to distribute (i) Current Cash Income at least semi-annually unless reinvested as described in this Section 3.1(b), (ii) Short- Term Investment Income at least quarterly, and (iii) the net cash proceeds received from Dispositions of or Partial Realizations with respect to Portfolio Investments within 60 days of the receipt thereof unless reinvested as described in this Section 3.1(b), after, in each case, the setting aside by the General Partner, in its discretion, of appropriate reserves for anticipated obligations and commitments of the Partnership as well as any required tax withholdings; provided, however, that if the General Partner determines in good faith that there will be a Capital Call within 30 days after the date that an amount that would otherwise be distributed that would be described in clauses (a), (b) and (d) of the definition of “Funded Commitment,” or if there is an outstanding Capital Call Notice the General Partner may, in its discretion, retain such amount and reduce the amount required to be contributed with respect to such Capital Call. ",
							"entities": [{
								"id": "390",
								"entityType": "ORGANIZATION",
								"end": 696,
								"start": 681,
								"value": "General Partner"
							}]
						}, {
							"id": "391",
							"text": "Section 3.2 Distribution of Short-Term Investment Income. Short-Term Investment Income will be distributed among the Partners in the same proportions as Short-Term Investment Income was credited to the Partners’ Capital Accounts. ",
							"entities": [{
								"id": "391",
								"entityType": "ORGANIZATION",
								"end": 125,
								"start": 117,
								"value": "Partners"
							}, {
								"id": "391",
								"entityType": "ORGANIZATION",
								"end": 228,
								"start": 202,
								"value": "Partners ' Capital Accounts"
							}]
						}, {
							"id": "392",
							"text": "Section 3.3 Distributions of Current Cash Income and Proceeds From Dispositions of or Partial Realizations with Respect to Investments and In Kind Distributions. ",
							"entities": []
						}, {
							"id": "393",
							"text": "(a) All distributions of Current Cash Income and all distributions out of net proceeds from Dispositions of or Partial Realizations with respect to Portfolio Investments (in each case, net of Partnership Expenses) and all distributions of Portfolio Investments shall be apportioned in proportion to their respective Partner Interests among the General Partner, the Special Limited Partner and the Participating Partners with respect to the Portfolio Investment that gave rise to such Current Cash Income or net proceeds or that is being distributed in kind. The General Partner’s Partner Share of such distributions shall be distributed 100% to the General Partner and the Special Limited Partner’s Partner Share of such distributions shall be distributed 100% to the Special Limited Partner. Each Participating Partner’s Partner Share shall be distributed to such Participating Partner and the General Partner as follows: ",
							"entities": [{
								"id": "393",
								"entityType": "ORGANIZATION",
								"end": 388,
								"start": 365,
								"value": "Special Limited Partner"
							}, {
								"id": "393",
								"entityType": "ORGANIZATION",
								"end": 696,
								"start": 673,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "394",
							"text": "(i) First, 100% to such Participating Partner until (A) the aggregate amount distributed to such Participating Partner in accordance with this paragraph (i) is sufficient to provide for a return of all Capital Contributions (including Waiver Contributions) in respect of (x) all Portfolio Investments that have been Disposed of on or prior to the date of such distribution by the Partnership and all Capitalized Partnership Expenses relating to such Portfolio Investments (taking into account previous distributions with respect to a writedown (including a complete writeoff) of such Portfolio Investments), (y) such Participating Partner’s Partner Share of any writedown or writeoff pursuant to Section 9.4 in respect of Portfolio Investments that have not been Disposed of on or prior to such date and (z) such Participating Partner’s Partner Share of all Organizational Expenses, Uncapitalized Partnership Expenses, Placement Fees and",
							"entities": []
						}, {
							"id": "395",
							"text": "",
							"entities": []
						}, {
							"id": "396",
							"text": "",
							"entities": []
						}, {
							"id": "397",
							"text": "704094543 -26- ",
							"entities": []
						}, {
							"id": "398",
							"text": "Management Fees from and after the Effective Date through the date of determination that are allocated to any Portfolio Investment that has been Disposed of, written down or written off by the Partnership on or prior to the date of such distribution (with such amounts being allocated to such Portfolio Company as set forth in Section 3.3(c)), and (B) such Participating Partner has received distributions pursuant to this Section 3.3 in addition to amounts referenced to in clause (A) above, equal to such Participating Partner’s Preferred Amount as of such date. Solely for purposes of (1) determining whether proceeds of a Partial Realization are distributable pursuant to Section 3.3(a)(i)(A) and (2) crediting proceeds attributable to a Partial Realization against the amount of proceeds attributable to another Portfolio Investment that are required to be distributed to such Participating Partner pursuant to Section 3.3(a)(i)(A), the Portfolio Investment giving rise to such proceeds shall be treated as if it were Disposed of on the date such proceeds were received. ",
							"entities": [{
								"id": "398",
								"entityType": "ORGANIZATION",
								"end": 310,
								"start": 293,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "399",
							"text": "(ii) Second, (A) 20% to such Participating Partner and (B) 80% to the General Partner until the aggregate distributions to the General Partner with respect to such Participating Partner pursuant to this paragraph (ii)(B) and paragraph (iii)(B), reduced by any amounts contributed to the Partnership by the General Partner with respect to such Participating Partner pursuant to Section 8.3(c), equal 20% of the aggregate distributions of such Participating Partner’s Partner Share of such amounts to the General Partner, reduced by any amounts contributed to the Partnership by the General Partner with respect to such Participating Partner pursuant to Section 8.3(c), and such Participating Partner pursuant to paragraph (ii)(A), paragraph (iii)(A) and clause (B) of the immediately preceding paragraph. ",
							"entities": []
						}, {
							"id": "400",
							"text": "(iii) Third, (A) 80% to such Participating Partner and (B) 20% to the General Partner. ",
							"entities": []
						}, {
							"id": "401",
							"text": "For purposes of this Section 3.3(a), amounts distributed to a Participating Partner pursuant to Section 8.3(c) shall be treated as having been distributed pursuant to this Section 3.3(a). ",
							"entities": []
						}, {
							"id": "402",
							"text": "(b) Anything contained herein to the contrary notwithstanding, including the Carried Interest Reserve Account, the General Partner shall be entitled to receive cash distributions from the Partnership (after taking into account any other distributions received by the General Partner in such fiscal year pursuant to Sections 3.3(a)(ii)(B) and 3.3(a)(iii)(B)) in amounts sufficient to enable the General Partner and the individual partners of the General Partner to discharge any federal, state and local tax liability (excluding penalties) arising as a result of the General Partner’s Carried Interest in the Partnership, determined by assuming the applicability of the highest combined effective marginal federal, state and local income tax rates applicable to an individual resident in New York, New York. The amount of such tax liability shall be calculated taking into account (i) the deductibility (to the extent allowed) of state and local income taxes for United States Federal income tax purposes, (ii) the amount of net cumulative tax loss previously allocated to the General Partner in prior fiscal years with respect to the Carried Interest and not used in prior fiscal years to reduce taxable income for the purpose of making distributions under this subsection (b) and (iii) the character of any income or gain and the income tax rates applicable thereto. The calculation shall be made on the assumption that taxable income or tax loss from the Partnership with respect to the Carried Interest is the General Partner’s only taxable income or tax loss. Such distributions shall be debited to the General Partner’s Capital Account, as provided in Section 2.3(e). Any amounts distributed pursuant to this subsection (b) shall be",
							"entities": [{
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 109,
								"start": 77,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 460,
								"start": 445,
								"value": "General Partner"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 600,
								"start": 566,
								"value": "General Partner 's Carried Interest"
							}, {
								"id": "402",
								"entityType": "LOCATION",
								"end": 795,
								"start": 787,
								"value": "New York"
							}, {
								"id": "402",
								"entityType": "LOCATION",
								"end": 805,
								"start": 797,
								"value": "New York"
							}, {
								"id": "402",
								"entityType": "LOCATION",
								"end": 975,
								"start": 962,
								"value": "United States"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 1091,
								"start": 1076,
								"value": "General Partner"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 1505,
								"start": 1489,
								"value": "Carried Interest"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 1528,
								"start": 1513,
								"value": "General Partner"
							}, {
								"id": "402",
								"entityType": "ORGANIZATION",
								"end": 1640,
								"start": 1607,
								"value": "General Partner 's Capital Account"
							}]
						}, {
							"id": "403",
							"text": "",
							"entities": []
						}, {
							"id": "404",
							"text": "",
							"entities": []
						}, {
							"id": "405",
							"text": "704094543 -27- ",
							"entities": []
						}, {
							"id": "406",
							"text": "considered an advance against the next distribution payable to the General Partner and shall offset such distributions. ",
							"entities": []
						}, {
							"id": "407",
							"text": "(c) A Partner’s Capital Contributions used to pay Organizational Expenses, Management Fees, Placement Fees and Uncapitalized Partnership Expenses as required by this Agreement that are to be allocated to a Portfolio Investment or portion thereof that is being Disposed of, written down or written off shall be determined on the date such Portfolio Investment or portion thereof is Disposed of, written down or written off and shall equal the product of (i) such Capital Contributions not theretofore allocated to Portfolio Investments multiplied by (ii) a fraction, the numerator of which shall equal such Partner’s Capital Contributions in respect of such Portfolio Investment or portion thereof and the denominator of which shall equal such Partner’s Capital Contributions in respect of such Portfolio Investment or portion thereof and all Portfolio Investments or portions thereof that have not been Disposed of, written down or written off on or prior to the date such allocation is effected. For purposes of the determinations described in subclause (d) of the second sentence of the definition of Preferred Amount, such Capital Contributions shall be tentatively allocated to the Portfolio Investment or portion thereof giving rise to such Partial Realization proceeds as though such Portfolio Investment or portion thereof had been Disposed of on the date such proceeds were realized. ",
							"entities": []
						}, {
							"id": "408",
							"text": "(d) In the event of a partial Disposition of a Portfolio Investment, the unreturned Capital Contributions with respect to such Portfolio Investment shall be allocated (including for purposes of determining the Preferred Amount) between the Disposed of portion and retained portion of such Portfolio Investment, pro rata, based on the relative amounts that are Disposed of and retained, respectively, of that portion of such Portfolio Investment held by the Partnership immediately prior to such Disposition. ",
							"entities": []
						}, {
							"id": "409",
							"text": "(e) Notwithstanding anything to the contrary in this Agreement, but subject to Section 8.3(e), if at the expiration of the Commitment Period, there are Unapplied Waived Fee Amounts, the Special Limited Partner shall, in its sole discretion, prior to any other distribution pursuant to this Article III, be entitled to a distribution of cash equal to the Unapplied Waived Fee Amount. ",
							"entities": []
						}, {
							"id": "410",
							"text": "Section 3.4 Foreign Taxes. The amount of any foreign taxes paid by the Partnership (or by an entity in which the Partnership holds an interest, either directly or indirectly through one or more such entities, that is treated as a partnership or is disregarded for federal income tax purposes) or withheld from receipts of the Partnership or such entity from a Portfolio Investment shall be allocated among the Partners as reasonably determined by the General Partner (taking into account any allocation of taxes under Section 6.7) and, for purposes of Sections 3.3(a)(i) – (iii), shall be deemed to have been distributed to each Partner as Current Cash Income or proceeds from the Disposition of a Portfolio Investment to the extent that the payment or withholding of such foreign taxes reduced Current Cash Income or the proceeds from the Disposition of a Portfolio Investment, as the case may be, otherwise distributable to such Partner as provided herein (for this purpose taking into account with respect to each Partner any reduction in such foreign taxes that occurs by reason of such Partner’s status); provided (a) that the General Partner shall deem foreign taxes paid by or withheld from receipts of the Partnership and allocable to a Tax Exempt Partner to have been distributed to such Tax Exempt Partner as described above only to the extent that such Tax Exempt Partner incurs and is subject to tax on",
							"entities": [{
								"id": "410",
								"entityType": "ORGANIZATION",
								"end": 418,
								"start": 410,
								"value": "Partners"
							}, {
								"id": "410",
								"entityType": "ORGANIZATION",
								"end": 466,
								"start": 451,
								"value": "General Partner"
							}]
						}, {
							"id": "411",
							"text": "",
							"entities": []
						}, {
							"id": "412",
							"text": "",
							"entities": []
						}, {
							"id": "413",
							"text": "704094543 -28- ",
							"entities": []
						}, {
							"id": "414",
							"text": "UBTI relating to such Tax Exempt Partner’s interest in the Partnership, as determined by the General Partner and (b) that the General Partner shall deem foreign taxes paid by or withheld from receipts of the Partnership and allocable to a Non-U.S. Partner that is not subject to taxation in the jurisdiction in which it is a tax resident to have been distributed to such Non-U.S. Partner as described above only to the extent that such Non-U.S. Partner incurs and is subject to tax on income relating to such Non-U.S. Partner’s interest in the Partnership in the jurisdiction in which such Non-U.S. Partner is a tax resident, as determined by the General Partner. ",
							"entities": [{
								"id": "414",
								"entityType": "ORGANIZATION",
								"end": 662,
								"start": 647,
								"value": "General Partner"
							}]
						}, {
							"id": "415",
							"text": "ARTICLE IV ",
							"entities": []
						}, {
							"id": "416",
							"text": "MANAGEMENT FEE AND ORGANIZATIONAL EXPENSES ",
							"entities": []
						}, {
							"id": "417",
							"text": "Section 4.1 Management Fee. ",
							"entities": []
						}, {
							"id": "418",
							"text": "(a) During each quarterly period beginning on each January 1, April 1, July 1 and October 1 from and after the Effective Date (each such quarterly period, a “Management Fee Period”) until the termination of the Partnership, the Partnership will pay the Manager a quarterly fee as calculated below (the “Management Fee”), in advance on each January 1, April 1, July 1 and October 1, as compensation for managing the affairs of the Partnership, provided, however, that the initial payment of the Management Fee shall be for the period from the Effective Date to April 1, 2014. ",
							"entities": []
						}, {
							"id": "419",
							"text": "(b) The Management Fee payable by the Partnership shall be the sum of the amounts determined for each Limited Partner pursuant to this Section 4.1. No Management Fee shall be payable with respect to the General Partner, the Special Limited Partner and their Affiliates. Subject to Sections 4.1(c) and 4.1(d), the quarterly Management Fee payable with respect to a Limited Partner during the Initial Fee Period shall be 0.4375% of the Commitment of such Limited Partner (resulting in an aggregate annual Management Fee of 1.7500%). Following the expiration of the Initial Fee Period, the quarterly Management Fee payable with respect to a Limited Partner shall be 0.2500% of the aggregate Net Funded Commitment of such Limited Partner as reduced by any writedowns or writeoffs pursuant to Section 9.4 in respect of Portfolio Investments that have not been Disposed of on or prior to such date (resulting in an aggregate annual Management Fee of 1.0000%). The Management Fee in any partial quarterly period will be pro-rated on a daily basis according to the actual number of days in such period. ",
							"entities": [{
								"id": "419",
								"entityType": "ORGANIZATION",
								"end": 117,
								"start": 102,
								"value": "Limited Partner"
							}]
						}, {
							"id": "420",
							"text": "(c) The Management Fee payable with respect to any Management Fee Period and with respect to a Limited Partner will be reduced (but not below zero) by (x) such Limited Partner’s Partner Share of one hundred percent (100%) of all Topping and Break-up Fees and Transaction Fees, (y) such Limited Partner’s Partner Share of one hundred percent (100%) of all Advisory Fees and (z) by such Limited Partner’s Capital Contributions used pursuant to Section 2.2(a)(i) to pay any Placement Fees and any Organizational Expenses in excess of $2.5 million, paid or payable by the Partnership (collectively, the “Fee Offsets”). To the extent that such Limited Partner’s share of the Management Fee in any Management Fee Period is reduced to zero as a result of the Fee Offsets, the excess shall be, at the election of the General Partner, either reimbursed to the Partnership for any previously unreimbursed Management Fees paid by",
							"entities": [{
								"id": "420",
								"entityType": "ORGANIZATION",
								"end": 424,
								"start": 403,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "421",
							"text": "",
							"entities": []
						}, {
							"id": "422",
							"text": "",
							"entities": []
						}, {
							"id": "423",
							"text": "704094543 -29- ",
							"entities": []
						}, {
							"id": "424",
							"text": "the Partnership for prior Management Fee Periods and distributed in the same manner as the net proceeds of a Disposition of a Portfolio Investment (with such amounts being treated for purposes of Section 3.3(a) as distributions in return of the Capital Contributions made to pay such Management Fees), carried forward to the next Management Fee Period (and, if necessary, to one or more subsequent Management Fee Periods) and applied as a reduction of the Management Fee, but not below zero, for such succeeding Management Fee Period (or a subsequent Management Fee Period) or any combination of the foregoing; provided, however, that in the event that any Partner desires not to receive any such excess Fee Offsets, such Partner may elect in writing at any time prior to the distribution of Fee Offsets by the Partnership to waive receipt of any such Fee Offsets, in which case the amount of Fee Offsets that would otherwise have been allocated and distributed to such Partner shall instead be allocated and distributed to the other non-waiving Partners on a pro rata basis in accordance with their respective Commitments. ",
							"entities": []
						}, {
							"id": "425",
							"text": "(d) After taking into account any reduction in the Management Fee payable for any Management Fee Period with respect to a Limited Partner pursuant to Section 4.1(c), the Management Fee payable for any Management Fee Period with respect to such Limited Partner shall be further reduced by an amount (the “Waived Fee Amount”) equal to the lesser of (i) the amount of the Management Fee to which the Manager would otherwise be entitled pursuant to this Section 4.1 that the Manager has irrevocably elected to waive in a written notice (a “Waived Fee Notice”) delivered to the Partnership with respect to each Management Fee Period, at least 15 days prior the end of the calendar year immediately preceding the calendar year in which such Management Fee Period begins, and (ii) the amount that would be payable to the Manager on such Management Fee Period pursuant to this Section 4.1 in the absence of this Section 4.1(d). A Limited Partner’s share of the Waived Fee Amount for any Management Fee Period is equal to the Waived Fee Amount for such Management Fee Period multiplied by the quotient determined by dividing (i) the Management Fee that would be payable for such Management Fee Period with respect to such Limited Partner in the absence of this Section 4.1(d) by (ii) the total Management Fee that would be payable for such Management Fee Period in the absence of this Section 4.1(d). If the Manager delivers a Waived Fee Notice with respect to any Management Fee Period that begins after the Effective Date but before the date of the Final Closing, (i) if such Waived Fee Notice specifies that a percentage of the Management Fee otherwise payable for such Management Fee Period be waived, the Manager shall be deemed to have waived a proportionate amount of the Management Fee otherwise payable for such Management Fee Period by all Additional Limited Partners whose subscriptions are accepted after the date of such Waived Fee Notice and (ii) if such Waived Fee Notice specifies that a fixed dollar amount of such Management Fee otherwise payable for such Management Fee Period be waived, the reduction in the Management Fee for such Management Fee Period shall be allocated to all Limited Partners in the same proportion as the Management Fee is borne by the Limited Partners for such Management Fee Period. ",
							"entities": []
						}, {
							"id": "426",
							"text": "(e) For purposes of Section 4.1(c), a Limited Partner’s share of Advisory Fees and Transaction Fees is equal to the amount of such fees multiplied by the Limited Partner’s Partner Interest in the Portfolio Investment to which such Advisory Fees and Transaction Fees are attributable, and a Limited Partner’s share of Topping and Break-up Fees is equal to the amount of such fees multiplied by the proportion of such Limited Partner’s Commitment to the",
							"entities": [{
								"id": "426",
								"entityType": "ORGANIZATION",
								"end": 188,
								"start": 154,
								"value": "Limited Partner 's Partner Interest"
							}, {
								"id": "426",
								"entityType": "ORGANIZATION",
								"end": 305,
								"start": 290,
								"value": "Limited Partner"
							}]
						}, {
							"id": "427",
							"text": "",
							"entities": []
						}, {
							"id": "428",
							"text": "",
							"entities": []
						}, {
							"id": "429",
							"text": "704094543 -30- ",
							"entities": []
						}, {
							"id": "430",
							"text": "Commitments of all Partners on the first day of the Management Fee Period in which such Topping and Break-up Fees are paid. ",
							"entities": []
						}, {
							"id": "431",
							"text": "Section 4.2 Organizational and Partnership Expenses. The Partnership will reimburse the General Partner or the Manager for all Organizational Expenses incurred by the General Partner or the Manager on behalf of the Partnership. The Partnership will pay all Partnership Expenses. ",
							"entities": []
						}, {
							"id": "432",
							"text": "Section 4.3 Ordinary Operating Expenses. The Manager shall pay all ordinary overhead expenses of the Partnership, the General Partner, the Manager, the Separate Investment Entities and the Parallel Vehicles (including fees and expenses associated with the General Partner’s and the Manager’s registration under or compliance with the Investment Advisers Act of 1940, the Investment Company Act and the rules and regulations promulgated thereunder or any other regulatory compliance costs of the General Partner or Manager, salaries, rent, overhead, travel expenses which are not directly related to a Portfolio Investment or a potential Portfolio Investment or included in Organizational Expenses and similar expenses), other than Partnership Expenses, Organizational Expenses and Placement Fees. ",
							"entities": [{
								"id": "432",
								"entityType": "ORGANIZATION",
								"end": 271,
								"start": 256,
								"value": "General Partner"
							}]
						}, {
							"id": "433",
							"text": "ARTICLE V ",
							"entities": []
						}, {
							"id": "434",
							"text": "GENERAL PARTNER ",
							"entities": []
						}, {
							"id": "435",
							"text": "Section 5.1 Investment Opportunities; Devotion of Time; Management Authority. ",
							"entities": [{
								"id": "435",
								"entityType": "ORGANIZATION",
								"end": 54,
								"start": 50,
								"value": "Time"
							}, {
								"id": "435",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 56,
								"value": "Management Authority"
							}]
						}, {
							"id": "436",
							"text": "(a) The members of the Senior Investment Team shall each devote substantially all of their business time and attention to the Fund Group; provided, however, that the members of the Senior Investment Team may engage and be involved in Other Permitted Investment Activities. Subject to the foregoing and to Section 5.12(a), during the Commitment Period, the General Partner, the Manager and the members of the Senior Investment Team will present all investment opportunities first to the Partnership which they believe in good faith are suitable for the Partnership and fit the investment objective of the Partnership. However, the members of the Senior Investment Team and the Manager will not be restricted from pursuing, engaging in and completing acquisitions and investments in, through or by the Predecessor Resolute Fund Entities in connection with Other Permitted Investment Activities. Notwithstanding anything contained herein, the General Partner’s sole business activity is to act as general partner of the Partnership and any Parallel Vehicles and Separate Investment Entities, as applicable, and the General Partner has a fiduciary duty to the Limited Partners pursuant to and in accordance with the Delaware Partnership Act. ",
							"entities": [{
								"id": "436",
								"entityType": "ORGANIZATION",
								"end": 136,
								"start": 126,
								"value": "Fund Group"
							}, {
								"id": "436",
								"entityType": "ORGANIZATION",
								"end": 430,
								"start": 408,
								"value": "Senior Investment Team"
							}, {
								"id": "436",
								"entityType": "ORGANIZATION",
								"end": 955,
								"start": 940,
								"value": "General Partner"
							}, {
								"id": "436",
								"entityType": "ORGANIZATION",
								"end": 1127,
								"start": 1112,
								"value": "General Partner"
							}, {
								"id": "436",
								"entityType": "ORGANIZATION",
								"end": 1172,
								"start": 1156,
								"value": "Limited Partners"
							}]
						}, {
							"id": "437",
							"text": "(b) Subject to the retention of the Manager, the General Partner will have full control over the business and affairs of the Partnership consistent with its fiduciary duties arising under the Delaware Partnership Act. The General Partner will have the power on behalf and in the name of the Partnership to carry out any and all of the objects and purposes of the Partnership and to perform all acts and enter into and perform all contracts and other undertakings which, in its sole discretion, are necessary or advisable or incidental thereto, including the power to acquire or dispose of any security (including Marketable Securities). Notwithstanding the foregoing, the",
							"entities": [{
								"id": "437",
								"entityType": "ORGANIZATION",
								"end": 64,
								"start": 49,
								"value": "General Partner"
							}, {
								"id": "437",
								"entityType": "ORGANIZATION",
								"end": 634,
								"start": 613,
								"value": "Marketable Securities"
							}]
						}, {
							"id": "438",
							"text": "",
							"entities": []
						}, {
							"id": "439",
							"text": "",
							"entities": []
						}, {
							"id": "440",
							"text": "704094543 -31- ",
							"entities": []
						}, {
							"id": "441",
							"text": "management of the Partnership will vest in the Manager which will provide the Partnership with portfolio management and administrative services, including investigating, analyzing, structuring and negotiating potential investments, monitoring the performance of Portfolio Companies and advising as to disposition opportunities. In no event shall the Manager, which has been engaged by the Partnership, be treated as an agent or partner of the General Partner. ",
							"entities": [{
								"id": "441",
								"entityType": "ORGANIZATION",
								"end": 458,
								"start": 443,
								"value": "General Partner"
							}]
						}, {
							"id": "442",
							"text": "(c) Except to the extent otherwise provided in this Agreement, all matters concerning (i) the allocation of Short-Term Investment Income, Current Income, Investment Income and Gain, Investment Loss, Partnership Expenses, Organizational Expenses, Carried Interest, and the distribution of net proceeds and the return of capital among the Partners, including the taxes thereon, (ii) accounting procedures and determinations (including the determination of the Preferred Amount), estimates of the amount of Management Fees or Placement Fees payable by any Defaulting Partner, (iii) the calculation of the Management Fee (including Advisory Fees, Topping and Break-up Fees and Transaction Fees ), (iv) the reinvestment of any amounts distributed in respect of a Bridge Financing (or portion thereof) that was sold, refinanced or otherwise disposed of within eighteen (18) months from the Investment Date of such Bridge Financing and (v) other determinations not specifically and expressly provided for by the terms of this Agreement, shall be determined by the General Partner in accordance with its reasonable interpretation of the provisions of this Agreement made in good faith. ",
							"entities": [{
								"id": "442",
								"entityType": "ORGANIZATION",
								"end": 1072,
								"start": 1057,
								"value": "General Partner"
							}]
						}, {
							"id": "443",
							"text": "(d) The General Partner will not reduce the Carried Interest or Management Fee payable by, or with respect to, any Limited Partner (other than members of the Investment Team or their Affiliates), or any limited partner of a Parallel Vehicle (other than members of the Investment Team or their Affiliates), without the prior written consent of a Majority in Interest of the Limited Partners. ",
							"entities": [{
								"id": "443",
								"entityType": "ORGANIZATION",
								"end": 173,
								"start": 158,
								"value": "Investment Team"
							}, {
								"id": "443",
								"entityType": "ORGANIZATION",
								"end": 283,
								"start": 268,
								"value": "Investment Team"
							}, {
								"id": "443",
								"entityType": "ORGANIZATION",
								"end": 389,
								"start": 373,
								"value": "Limited Partners"
							}]
						}, {
							"id": "444",
							"text": "Section 5.2 Use of Affiliates. The General Partner shall retain the services of the Manager and any officers, directors or Affiliates thereof in connection with the operation of the Partnership, and the compensation of the Manager and such persons shall be as provided in Section 4.1 hereof; provided, however, that nothing contained in this Section 5.2 shall be construed to relieve the General Partner of its responsibilities under this Agreement or the duties and limitations set forth in this Article V. ",
							"entities": []
						}, {
							"id": "445",
							"text": "Section 5.3 Indebtedness. Subject to Section 5.4 and Section 5.5, the Partnership may not incur indebtedness other than Bridge Leveraging or the issuance of credit support of the obligations of Portfolio Companies or their subsidiaries, which may be in the form of guarantees, letters of credit or pledges of a portion of the Commitments (“Credit Support”). Any such indebtedness will not be considered as Capital Contributions by the Partners unless, until and to the extent the General Partner calls for Capital Contributions in connection therewith pursuant to a Capital Call Notice pursuant to this Agreement. ",
							"entities": [{
								"id": "445",
								"entityType": "ORGANIZATION",
								"end": 527,
								"start": 506,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "446",
							"text": "Section 5.4 Limitation on Investments. ",
							"entities": []
						}, {
							"id": "447",
							"text": "(a) The Partnership will not invest (including Credit Support of the obligations of a Portfolio Company or any of its subsidiaries), more than fifteen percent (15%) of the aggregate Commitments in any single Portfolio Company together with any of its Affiliates, exclusive of any Bridge Financing. A Bridge Financing, when added to the amount of permanent investment",
							"entities": [{
								"id": "447",
								"entityType": "ORGANIZATION",
								"end": 103,
								"start": 86,
								"value": "Portfolio Company"
							}, {
								"id": "447",
								"entityType": "ORGANIZATION",
								"end": 225,
								"start": 208,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "448",
							"text": "",
							"entities": []
						}, {
							"id": "449",
							"text": "",
							"entities": []
						}, {
							"id": "450",
							"text": "704094543 -32- ",
							"entities": []
						}, {
							"id": "451",
							"text": "by the Partnership in the Portfolio Investment that is the subject of the Bridge Financing, may not exceed twenty percent (20%) of the aggregate Commitments. ",
							"entities": []
						}, {
							"id": "452",
							"text": "(b) The aggregate amount of Bridge Financings outstanding at any one time shall not exceed twenty percent (20%) of the aggregate Commitments; provided, however, with the approval of the Advisory Committee, the aggregate amount of Bridge Financings outstanding at any one time may exceed twenty percent (20%) of aggregate Commitments if not in excess of twenty-five percent (25%) of aggregate Commitments. ",
							"entities": [{
								"id": "452",
								"entityType": "ORGANIZATION",
								"end": 204,
								"start": 186,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "453",
							"text": "(c) Subject to Section 5.5, the Partnership may issue Credit Support, which does not at any one time exceed the lesser of (x) twenty percent (20%) of the aggregate Commitments and (y) Unfunded Commitments. ",
							"entities": []
						}, {
							"id": "454",
							"text": "(d) The Partnership shall invest cash in Short-Term Investments. ",
							"entities": []
						}, {
							"id": "455",
							"text": "(e) The aggregate investments (valued at cost) by the Partnership in Portfolio Companies, (i) having their principal operations (e.g., more than seventy five percent (75%) of total operating assets, revenues and executive management) outside the United States shall not exceed twenty-five percent (25%) of the aggregate Commitments and (ii) having their principal operations (e.g., more than seventy five percent (75%) of total operating assets, revenues and executive management) in the People’s Republic of China, Hong Kong, Japan, South Korea, Taiwan and Macau (collectively, “Asia”), shall not exceed fifteen percent (15%) of the aggregate Commitments. ",
							"entities": [{
								"id": "455",
								"entityType": "LOCATION",
								"end": 259,
								"start": 246,
								"value": "United States"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 514,
								"start": 488,
								"value": "People 's Republic of China"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 525,
								"start": 516,
								"value": "Hong Kong"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 532,
								"start": 527,
								"value": "Japan"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 545,
								"start": 534,
								"value": "South Korea"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 553,
								"start": 547,
								"value": "Taiwan"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 563,
								"start": 558,
								"value": "Macau"
							}, {
								"id": "455",
								"entityType": "LOCATION",
								"end": 584,
								"start": 580,
								"value": "Asia"
							}]
						}, {
							"id": "456",
							"text": "(f) While the Partnership may participate in tender offers, takeover bids or other means of pursuing an acquisition, the Partnership will not acquire control of a business through a tender offer or takeover bid (or other similar means) if the General Partner has actual knowledge that such acquisition is opposed by a majority of the members of such business’s board of directors (or, if there is no board of directors, an analogous governing body with similar responsibilities) or by stockholders possessing a majority of the voting power of such business’s outstanding securities; provided, that the foregoing shall not apply to the acquisition of an entity that is a debtor in a proceeding under Title 11 of the U.S. Bankruptcy Code or similar proceeding under non-U.S. law (whether or not the equity owners or their representatives oppose the acquisition). ",
							"entities": [{
								"id": "456",
								"entityType": "ORGANIZATION",
								"end": 258,
								"start": 243,
								"value": "General Partner"
							}]
						}, {
							"id": "457",
							"text": "(g) The Partnership will not make investments: ",
							"entities": []
						}, {
							"id": "458",
							"text": "(i) directly in real property or in entities engaged primarily in the acquisition, management, development and sale of real estate; ",
							"entities": []
						}, {
							"id": "459",
							"text": "(ii) in any derivative securities or instruments other than derivative securities or instruments acquired as a hedge against Portfolio Company securities; ",
							"entities": [{
								"id": "459",
								"entityType": "ORGANIZATION",
								"end": 142,
								"start": 125,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "460",
							"text": "(iii) in entities engaged in the manufacture, sales or marketing of firearms (including, but not limited to, assault weapons) or large capacity magazines that are illegal for sale to, or possession by, private individuals in California under California law; or",
							"entities": [{
								"id": "460",
								"entityType": "LOCATION",
								"end": 235,
								"start": 225,
								"value": "California"
							}, {
								"id": "460",
								"entityType": "LOCATION",
								"end": 252,
								"start": 242,
								"value": "California"
							}]
						}, {
							"id": "461",
							"text": "",
							"entities": []
						}, {
							"id": "462",
							"text": "",
							"entities": []
						}, {
							"id": "463",
							"text": "704094543 -33- ",
							"entities": []
						}, {
							"id": "464",
							"text": "(iv) in any publicly traded securities, except for (w) securities issued by Portfolio Companies or their Affiliates, (x) securities not in excess of twenty percent (20%) of the aggregate Commitments which are (1) acquired in connection with a “going private” transaction, (2) Distressed Investments, (3) acquired if, in the reasonable judgment of the General Partner, the Partnership will acquire (in one transaction or a series of transactions) a toehold position in a public company in anticipation of a “going private” transaction or acquisition of control position over the management of the issuer, (4) publicly traded securities acquired in connection with a Portfolio Investment where the Partnership may designate at least one member of the board of directors of the issuer, or (5) securities acquired in connection with the acquisition of non-public securities or privately-held assets of an Affiliate of the issuer of such securities, (y) securities acquired pursuant to Section 5.4(f), or (z) as otherwise approved by the Advisory Committee. ",
							"entities": [{
								"id": "464",
								"entityType": "ORGANIZATION",
								"end": 366,
								"start": 351,
								"value": "General Partner"
							}, {
								"id": "464",
								"entityType": "ORGANIZATION",
								"end": 1051,
								"start": 1033,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "465",
							"text": "(h) The Partnership will not invest as a partner or member in any pooled investment fund or “fund of funds” in which an investment adviser or manager of such fund (other than the Partnership) receives management fees or the right to carried interest distributions on the Partnership’s investment or interest therein unless the amount of any such management fee is considered part of the Capital Contribution relating to such Portfolio Investment and the amounts distributable to the General Partner under Sections 3.3(a)(ii) and 3.3(a)(iii) are reduced by the amount of any carried interest payable to such sponsor or investment manager. ",
							"entities": [{
								"id": "465",
								"entityType": "ORGANIZATION",
								"end": 498,
								"start": 483,
								"value": "General Partner"
							}]
						}, {
							"id": "466",
							"text": "(i) The Partnership will not invest in excess of 40% of aggregate Commitments in any twelve-month period, exclusive of any Bridge Financing; provided, however, that the Partnership may invest in excess of 40% and up to 45% of the aggregate Commitments, exclusive of any Bridge Financing, in any twelve-month period with the consent of the Advisory Committee. ",
							"entities": [{
								"id": "466",
								"entityType": "ORGANIZATION",
								"end": 357,
								"start": 339,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "467",
							"text": "(j) The aggregate investments by the Partnership in Portfolio Companies engaged principally in oil and gas exploration or directly in oil and gas reserve properties shall not exceed twenty percent (20%) of the aggregate Commitments. ",
							"entities": []
						}, {
							"id": "468",
							"text": "(k) In connection with a Portfolio Investment in any non-U.S. jurisdiction, the General Partner shall obtain an opinion of counsel with respect to such jurisdiction to the effect that (i) no Limited Partner, solely as a result of the Partnership making such investments, will be required either (x) to file an income tax return in such jurisdiction (other than in connection with an application for a refund of withholding or similar taxes) or (y) to pay income tax in such jurisdiction with respect to income not derived from the Partnership, and (ii) no Limited Partner shall be personally liable for any debts or losses of the Partnership in such jurisdiction in excess of such Limited Partner’s Unfunded Commitment. The General Partner shall use commercially reasonable efforts to ensure that any opinion obtained pursuant to this Section 5.4(k) will permit the Limited Partners to rely thereon. The General Partner shall ask local counsel to confirm and/or update periodically as it deems necessary any opinion it obtains pursuant to this Section 5.4(k). The Partnership will use commercially reasonable efforts to prepare all tax rebate, reduction or reclaim forms or other filings or elections that are required to obtain any available exemption from, reduction in, or refund of, any withholding or other taxes required in any taxing jurisdiction on behalf of each Limited Partner, for signature by such Limited Partner, and to assist each Limited Partner, at such Limited Partner’s expense, to obtain refunds for taxes",
							"entities": [{
								"id": "468",
								"entityType": "ORGANIZATION",
								"end": 95,
								"start": 80,
								"value": "General Partner"
							}, {
								"id": "468",
								"entityType": "ORGANIZATION",
								"end": 882,
								"start": 866,
								"value": "Limited Partners"
							}, {
								"id": "468",
								"entityType": "LOCATION",
								"end": 1387,
								"start": 1372,
								"value": "Limited Partner"
							}, {
								"id": "468",
								"entityType": "ORGANIZATION",
								"end": 1426,
								"start": 1411,
								"value": "Limited Partner"
							}]
						}, {
							"id": "469",
							"text": "",
							"entities": []
						}, {
							"id": "470",
							"text": "",
							"entities": []
						}, {
							"id": "471",
							"text": "704094543 -34- ",
							"entities": []
						}, {
							"id": "472",
							"text": "withheld or paid with respect to such Limited Partner as to which a refund is obtainable. Each Partner agrees that it will cooperate with the General Partner in making any such filings or elections to the extent the General Partner determines that such cooperation is necessary or desirable. ",
							"entities": []
						}, {
							"id": "473",
							"text": "Section 5.5 UBTI; ECI. The General Partner shall use reasonable best efforts not to (i) take any action that would cause any Tax Exempt Partner to recognize UBTI, (ii) take any action that would cause any Non-U.S. Partner to recognize ECI, (iii) cause the Partnership to acquire a Portfolio Investment that the General Partner reasonably believes at the time of such acquisition is or is likely to become a “United States real property interest” within the meaning of Section 897(c) of the Code, or (iv) take any action that would cause any Non-U.S. Partner to which Section 892 of the Code applies to be considered or deemed to be engaged in commercial activity for purposes of Section 892 of the Code; provided, however, that the use of Bridge Leveraging and the use of Advisory Fees, Topping and Break-up Fees, Transaction Fees and Placement Fees to offset the Management Fee, as described in Section 4.1(c) will not be deemed a violation of this Section 5.5. ",
							"entities": [{
								"id": "473",
								"entityType": "LOCATION",
								"end": 421,
								"start": 408,
								"value": "United States"
							}]
						}, {
							"id": "474",
							"text": "Section 5.6 ERISA Matters. ",
							"entities": []
						}, {
							"id": "475",
							"text": "(a) The General Partner will use reasonable best efforts to conduct the affairs and operations of the Partnership in such a manner that the Partnership will qualify as an Operating Company or for another exception from being deemed to hold Plan Assets of any Benefit Plan Investor. As of the initial Capital Contribution date, the General Partner shall deliver to each Benefit Plan Investor either (i) an opinion from the General Partner’s counsel to the effect that the Partnership should qualify as an Operating Company as of the initial Capital Contribution date or (ii) a certificate, based on consultation with the General Partner’s counsel, to the effect that the Partnership should qualify for another exemption from being deemed to hold Plan Assets of any Benefit Plan Investor as of the initial Capital Contribution date. Annually thereafter, the General Partner will provide a certificate to Benefit Plan Investors confirming that the Partnership continues to qualify for an exception from being deemed to hold Plan Assets of any Benefit Plan Investor and specifying which exception from Plan Assets is available to the Partnership as of the date of the certificate. ",
							"entities": [{
								"id": "475",
								"entityType": "ORGANIZATION",
								"end": 437,
								"start": 422,
								"value": "General Partner"
							}, {
								"id": "475",
								"entityType": "ORGANIZATION",
								"end": 635,
								"start": 620,
								"value": "General Partner"
							}, {
								"id": "475",
								"entityType": "ORGANIZATION",
								"end": 871,
								"start": 856,
								"value": "General Partner"
							}]
						}, {
							"id": "476",
							"text": "(b) Notwithstanding Section 2.2, until such time as the General Partner delivers to each Benefit Plan Investor (and the escrow agent, if any) a certificate that identifies the exception from holding Plan Assets on which the Partnership will rely, the initial Capital Contribution required to be made to the Partnership by a Benefit Plan Investor shall, at the request of the General Partner, instead be deposited directly by such Benefit Plan Investor into an escrow account that is intended to comply with Department of Labor Advisory Opinion 95-04A. ",
							"entities": [{
								"id": "476",
								"entityType": "ORGANIZATION",
								"end": 550,
								"start": 507,
								"value": "Department of Labor Advisory Opinion 95-04A"
							}]
						}, {
							"id": "477",
							"text": "(c) Each Partner that is or will be a Benefit Plan Investor on the date (or date of transfer, if applicable) when it is admitted to the Partnership shall so notify the General Partner in writing prior to such date (or date of transfer, if applicable). Any Limited Partner which has not indicated in its Subscription Agreement (or transfer documentation, in the case of a transfer) that it is a Benefit Plan Investor hereby represents, warrants and covenants that it is not, it is not acting on behalf of and, so long as it holds an interest in the Partnership, it will not be and will not be acting on behalf of a Benefit Plan Investor.",
							"entities": []
						}, {
							"id": "478",
							"text": "",
							"entities": []
						}, {
							"id": "479",
							"text": "",
							"entities": []
						}, {
							"id": "480",
							"text": "704094543 -35- ",
							"entities": []
						}, {
							"id": "481",
							"text": "(d) It is intended that none of the Partnership, the General Partner, the Manager or any of their Affiliates will act as or be deemed to be a fiduciary under ERISA with respect to any Benefit Plan Investor or the assets of the Partnership; provided, however, that this provision is not intended to negate the fiduciary duties imposed upon a general partner under the Delaware Partnership Act. Notwithstanding any other provision of this Agreement, the General Partner is authorized to take any action or refrain from taking any action, which in its judgment is necessary or desirable in order to prevent any Partnership assets from being deemed to constitute Plan Assets. ",
							"entities": [{
								"id": "481",
								"entityType": "ORGANIZATION",
								"end": 467,
								"start": 452,
								"value": "General Partner"
							}]
						}, {
							"id": "482",
							"text": "(e) Should the General Partner reasonably determine that the continued participation of a Benefit Plan Investor would result in the assets of the Partnership being deemed Plan Assets of such Benefit Plan Investor (a “Plan Asset Event”), the General Partner shall so notify, as soon as reasonably practicable, each of the Benefit Plan Investors in writing of such determination. Thereafter, the General Partner shall take reasonable steps to correct or cure the Plan Asset Event and, if the General Partner determines that it is not reasonably likely that the Partnership’s Plan Asset Event can be reasonably corrected or cured as soon as reasonably practicable following the delivery of such notice, taking into account the overall interest of the Partnership, the General Partner shall terminate the Partnership and wind up its affairs in accordance with Sections 8.2 and 8.3. If a Limited Partner is a Benefit Plan Investor and it reasonably determines that its continued participation would result in a Plan Asset Event, such Benefit Plan Investor shall notify the General Partner in writing within 30 days of such determination. Thereafter, the General Partner shall take reasonable steps to correct or cure the Plan Asset Event and if, in the opinion of counsel for the Benefit Plan Investor (which counsel and opinion shall be reasonably acceptable to the General Partner), the Plan Asset Event cannot be corrected or cured, and if the General Partner has determined not to terminate or wind up the affairs of the Partnership, the General Partner shall cause the interests of Benefit Plan Investors in the Partnership to be redeemed pro rata pursuant to the provisions of Section 6.6(c) and (d), to the extent necessary to cure the Plan Asset Event. In connection with the foregoing obligation, in addition to any other powers the General Partner may have, the General Partner shall have the authority to take any of the following actions, in its sole discretion: (i) any action necessary or desirable, in the General Partner’s reasonable judgment, to cure the Partnership’s failure to qualify as an Operating Company, if applicable; (ii) in accordance with the provisions of Section 12.1, amend this Agreement to cure any illegality or other adverse consequences to the Partnership; (iii) amend, terminate or restructure any then existing or contemplated arrangements to cure any illegality or other adverse consequences to the Partnership; (iv) redeem any Benefit Plan Investor’s interest in the Partnership, in whole or in part, in a manner consistent with the procedures in Section 6.6(d); (v) force the sale of all or any portion of any Benefit Plan Investor’s interest in the Partnership to one or more Limited Partners at the Redemption Value or (vi) terminate the Partnership and wind up its affairs in accordance with Sections 8.2 and 8.3. ",
							"entities": [{
								"id": "482",
								"entityType": "ORGANIZATION",
								"end": 409,
								"start": 394,
								"value": "General Partner"
							}, {
								"id": "482",
								"entityType": "ORGANIZATION",
								"end": 505,
								"start": 490,
								"value": "General Partner"
							}, {
								"id": "482",
								"entityType": "ORGANIZATION",
								"end": 780,
								"start": 765,
								"value": "General Partner"
							}, {
								"id": "482",
								"entityType": "ORGANIZATION",
								"end": 1164,
								"start": 1149,
								"value": "General Partner"
							}, {
								"id": "482",
								"entityType": "ORGANIZATION",
								"end": 1457,
								"start": 1442,
								"value": "General Partner"
							}]
						}, {
							"id": "483",
							"text": "Section 5.7 Conflicts of Interest. ",
							"entities": []
						}, {
							"id": "484",
							"text": "(a) Except as permitted by Sections 5.12(a) and 5.17(a), without the prior approval of either (i) a majority of the members of the Advisory Committee or (ii) a Majority in Interest of the Limited Partners, neither the General Partner, the Manager, the members of the Senior Investment Team, nor any of their respective Affiliates will invest in any securities of any company in which the Partnership either is actively considering making a Portfolio Investment or",
							"entities": [{
								"id": "484",
								"entityType": "ORGANIZATION",
								"end": 149,
								"start": 131,
								"value": "Advisory Committee"
							}, {
								"id": "484",
								"entityType": "ORGANIZATION",
								"end": 204,
								"start": 188,
								"value": "Limited Partners"
							}]
						}, {
							"id": "485",
							"text": "",
							"entities": []
						}, {
							"id": "486",
							"text": "",
							"entities": []
						}, {
							"id": "487",
							"text": "704094543 -36- ",
							"entities": []
						}, {
							"id": "488",
							"text": "has an investment; provided, that (x) the foregoing will not apply to Other Permitted Investment Activities, (y) each such person will be permitted to hold securities which such person received in a distribution by the Partnership and (z) any Parallel Vehicles or Separate Investment Entities will be permitted to invest in Portfolio Companies in accordance with this Agreement. ",
							"entities": []
						}, {
							"id": "489",
							"text": "(b) Except as permitted by Sections 5.12(a) and 5.17(a), without the prior approval of either (i) a majority of the members of the Advisory Committee or (ii) a Majority in Interest of the Limited Partners, the Partnership will not invest in any securities issued by, acquire investments from, sell investments to, or enter into any transaction with an entity in which the General Partner, the Manager, the members of the Senior Investment Team, or their respective Affiliates (x) has a material financial interest in respect of such entity or (y) owns securities issued by such entity representing three percent (3%) or more of the outstanding equity securities; provided that (A) notwithstanding the foregoing, the Partnership will not invest in any securities of, provide any financing to, or acquire, sell or transfer any securities of, any Predecessor Resolute Fund Entity, including in connection with any acquisitions or investments by those Predecessor Resolute Fund Entities, unless approved by the Advisory Committee, and (B) the foregoing will not apply to (x) Other Permitted Investment Activities, or (y) investments by the Partnership in Portfolio Companies in which the Parallel Vehicles, Separate Investment Entities or Co-Investment Partnerships invest in accordance with this Agreement; provided, further, that the Partnership will not be precluded from investing in securities of a company in which the General Partner, the Manager, the members of the Senior Investment Team, or their respective Affiliates either (A) in the case of public companies, owns securities issued by such company representing one percent (1%) or less of the outstanding equity securities, or (B) own only securities which such Persons received in a distribution by the Partnership. ",
							"entities": [{
								"id": "489",
								"entityType": "ORGANIZATION",
								"end": 149,
								"start": 131,
								"value": "Advisory Committee"
							}, {
								"id": "489",
								"entityType": "ORGANIZATION",
								"end": 204,
								"start": 188,
								"value": "Limited Partners"
							}, {
								"id": "489",
								"entityType": "ORGANIZATION",
								"end": 1025,
								"start": 1007,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "490",
							"text": "(c) Subject to Sections 2.2(d) and 5.1, the members of the Senior Investment Team shall at all times during the term of the Partnership be permitted to pursue Other Permitted Investment Activities. ",
							"entities": [{
								"id": "490",
								"entityType": "ORGANIZATION",
								"end": 81,
								"start": 59,
								"value": "Senior Investment Team"
							}]
						}, {
							"id": "491",
							"text": "(d) The General Partner will furnish to the Advisory Committee annually at the time annual financial statements of the Partnership are furnished pursuant to Section 10.3(b): (i) a report of each acquisition or investment by a Predecessor Resolute Fund Entity involving total consideration (including assumed indebtedness on the face of a balance sheet) of $10 million or more that closed during the preceding fiscal year, and (ii) a report of each private stock or equity investment in a portfolio company by each member of the Senior Investment Team of $2 million or more closed during the preceding fiscal year in a private portfolio company (other than such entities referenced in clause (v) of the definition of “Other Permitted Investment Activities”). ",
							"entities": [{
								"id": "491",
								"entityType": "ORGANIZATION",
								"end": 23,
								"start": 8,
								"value": "General Partner"
							}, {
								"id": "491",
								"entityType": "ORGANIZATION",
								"end": 62,
								"start": 44,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "492",
							"text": "Section 5.8 No Transfer of General Partnership Interest; No Withdrawal or Loans. The General Partner will not sell, assign, pledge, mortgage or otherwise dispose of its General Partner interest in the Partnership and will not borrow or withdraw any amount from the Partnership. The General Partner will not knowingly take any voluntary action that would reasonably be expected to result in its dissolution. The General Partner will not voluntarily withdraw from the Partnership. ",
							"entities": []
						}, {
							"id": "493",
							"text": "Section 5.9 Removal of the General Partner.",
							"entities": []
						}, {
							"id": "494",
							"text": "",
							"entities": []
						}, {
							"id": "495",
							"text": "",
							"entities": []
						}, {
							"id": "496",
							"text": "704094543 -37- ",
							"entities": []
						}, {
							"id": "497",
							"text": "(a) The General Partner may be removed at any time after the second anniversary of the Effective Date upon the consent of Eighty Percent in Interest of the Limited Partners. ",
							"entities": [{
								"id": "497",
								"entityType": "ORGANIZATION",
								"end": 172,
								"start": 156,
								"value": "Limited Partners"
							}]
						}, {
							"id": "498",
							"text": "(b) By consent of Two-Thirds in Interest of the Limited Partners, the General Partner may be removed in the event of (i) the General Partner’s, the Manager’s or any Senior Investment Team member’s conviction of (or plea of nolo contendere to), a material violation of federal or state securities law or a felony criminal violation, (ii) the General Partner’s, the Manager’s or any Senior Investment Team member’s adjudication in a final non-appealable judgment by a court of competent jurisdiction as having committed in respect of the Partnership an act or omission of a material nature involving gross negligence, bad faith, willful misconduct or fraud, or (iii) the General Partner’s, the Manager’s or any Senior Investment Team member’s (A) material breach of fiduciary duties to the Partnership (provided that the provisions of this Agreement that eliminate or modify the fiduciary duties of such Persons to the Partnership otherwise existing at law or in equity are agreed by the Partners to so eliminate or modify the duties of such Persons to the Partnership to the extent permitted by law), (B) material violation of this Agreement (other than a violation by a member of the Senior Investment Team of the covenant in Section 5.1(a) relating to the devotion of substantially all of their business time and attention to the Fund Group) or (C) material violation of the Management Agreement, which has a material and adverse effect on the Partnership and which remains uncured for 30 days. Notwithstanding the foregoing, if an event described in clauses (i), (ii) or (iii) above has occurred and the event relates to a violation or act of a member of the Senior Investment Team, the Limited Partners may remove the General Partner only if such violation or act relates to the Partnership or a Portfolio Company and has a material adverse effect on the Partnership and in the case of a violation arising under clause (iii) above, such violation is not cured within 60 days and, in the case of an event arising under clause (i), (ii) or (iii) above, the General Partner or the Manager fail to make the Partnership whole for any actual financial loss that such conduct caused the Partnership and such member of the Senior Investment Team is not terminated as a partner of the General Partner and the Manager within 60 days and ceases to own any interest in the future carried interest or voting interests in the General Partner. The General Partner will provide the Limited Partners with prompt written notice of the occurrence of an event or events described in clauses (i), (ii) or (iii) above. Concurrently with the removal of the General Partner, the Manager shall be removed as manager of the Partnership unless re-appointed by the successor general partner of the Partnership. Upon removal of the General Partner pursuant to this Section 5.9(b), the departing General Partner’s Carried Interest will be automatically reduced by thirty-five percent (35%). ",
							"entities": [{
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 64,
								"start": 48,
								"value": "Limited Partners"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 994,
								"start": 986,
								"value": "Partners"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 1341,
								"start": 1331,
								"value": "Fund Group"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 1683,
								"start": 1661,
								"value": "Senior Investment Team"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 1705,
								"start": 1689,
								"value": "Limited Partners"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 1816,
								"start": 1799,
								"value": "Portfolio Company"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 2821,
								"start": 2806,
								"value": "General Partner"
							}, {
								"id": "498",
								"entityType": "ORGANIZATION",
								"end": 2903,
								"start": 2869,
								"value": "General Partner 's Carried Interest"
							}]
						}, {
							"id": "499",
							"text": "(c) Upon removal of the General Partner pursuant to this Section 5.9, the Partnership may be continued by consent of Two-Thirds in Interest of the Limited Partners and appointment of a new general partner by consent of Two-Thirds in Interest of the Limited Partners. In such an event: ",
							"entities": [{
								"id": "499",
								"entityType": "ORGANIZATION",
								"end": 39,
								"start": 24,
								"value": "General Partner"
							}, {
								"id": "499",
								"entityType": "ORGANIZATION",
								"end": 163,
								"start": 147,
								"value": "Limited Partners"
							}, {
								"id": "499",
								"entityType": "ORGANIZATION",
								"end": 265,
								"start": 249,
								"value": "Limited Partners"
							}]
						}, {
							"id": "500",
							"text": "(i) The former General Partner shall, subject to the last sentence of Section 5.9(b), be entitled to receive distributions equal to any amounts it would have been entitled to had the Partnership been dissolved and wound up in accordance with Sections 8.3(a) and (b) and distributed in kind all Partnership assets as of the date of the election of the Limited Partners to continue the Partnership. The Partnership shall issue an unsecured promissory note to the former General Partner in the face amount of the liquidating distribution determined in accordance with",
							"entities": [{
								"id": "500",
								"entityType": "ORGANIZATION",
								"end": 367,
								"start": 351,
								"value": "Limited Partners"
							}, {
								"id": "500",
								"entityType": "ORGANIZATION",
								"end": 483,
								"start": 468,
								"value": "General Partner"
							}]
						}, {
							"id": "501",
							"text": "",
							"entities": []
						}, {
							"id": "502",
							"text": "",
							"entities": []
						}, {
							"id": "503",
							"text": "704094543 -38- ",
							"entities": []
						}, {
							"id": "504",
							"text": "this Section 5.9, such note to be payable upon the final liquidation of the Partnership. All such distributions shall be subject to the obligations set forth in Section 8.3(c) and (d); provided, however, that the General Partner shall not be obligated to fund Commitments in respect of its obligations in Section 8.3(c) relating to such liquidating distribution until and to the extent the unsecured promissory note described in this Section 5.9(c)(i) is paid by the Partnership. For purposes of determining allocation and distributions pursuant to the preceding sentence, securities and other property held by the Partnership shall be valued pursuant to the procedures set forth in Article IX. ",
							"entities": []
						}, {
							"id": "505",
							"text": "(ii) The Partnership shall redeem the Special Limited Partner’s interest in the Partnership. The former Special Limited Partner shall be entitled to receive distributions equal to any amounts it would have been entitled to had the Partnership been dissolved and wound up in accordance with Sections 8.3(a) and (b) and distributed in kind all Partnership assets as of the date of the election of the Limited Partners to continue the Partnership. The Partnership shall issue an unsecured promissory note to the former Special Limited Partner in the face amount of the liquidating distribution determined in accordance with this Section 5.9(c)(ii), such note to be payable upon the final liquidation of the Partnership. All such distributions shall be subject to the obligations set forth in Section 8.3(e); provided, however, that the former Special Limited Partner shall not be obligated to fund Commitments in respect of its obligations in Section 8.3(e) relating to such liquidating distribution until and to the extent the unsecured promissory note described in this Section 5.9 is paid by the Partnership. For purposes of determining allocation and distributions pursuant to the preceding sentence, securities and other property held by the Partnership shall be valued pursuant to the procedures set forth in Article IX. ",
							"entities": [{
								"id": "505",
								"entityType": "ORGANIZATION",
								"end": 61,
								"start": 38,
								"value": "Special Limited Partner"
							}, {
								"id": "505",
								"entityType": "ORGANIZATION",
								"end": 415,
								"start": 399,
								"value": "Limited Partners"
							}, {
								"id": "505",
								"entityType": "ORGANIZATION",
								"end": 539,
								"start": 516,
								"value": "Special Limited Partner"
							}]
						}, {
							"id": "506",
							"text": "Section 5.10 No Liability to Limited Partners. ",
							"entities": [{
								"id": "506",
								"entityType": "ORGANIZATION",
								"end": 45,
								"start": 29,
								"value": "Limited Partners"
							}]
						}, {
							"id": "507",
							"text": "(a) None of the General Partner, the Manager, the members of the Senior Investment Team or their Affiliates, officers, directors, members, partners, shareholders, employees or agents will be liable to any Limited Partner or to the Partnership for any action taken, or omitted to be taken, as General Partner with respect to the Partnership, or for any action taken, or omitted to be taken, by any member, partner, director, officer, employee or agent of the General Partner or Manager in connection with its activities for or on behalf of the Partnership so long as such person (i) acted in good faith, (ii) acted in a manner reasonably believed to be in the best interests of the Partnership, (iii) was neither grossly negligent nor engaged in willful malfeasance, fraud or reckless disregard of fiduciary duties, (iv) did not materially breach this Agreement in any material respect, and (v) with respect to any criminal action, such person had reasonable cause at the time of such action to believe that such person’s conduct was not unlawful. ",
							"entities": []
						}, {
							"id": "508",
							"text": "(b) No member of the Advisory Committee, or any Affiliate or employer of any member of the Advisory Committee or any Limited Partner represented on the Advisory Committee by any member (as the case may be) will be liable to any Partner or the Partnership for any action taken, or omitted to be taken, in good faith on behalf of the Advisory Committee (as the case may be) with respect to the Partnership and in accordance with the provisions of this Agreement.",
							"entities": [{
								"id": "508",
								"entityType": "ORGANIZATION",
								"end": 39,
								"start": 21,
								"value": "Advisory Committee"
							}, {
								"id": "508",
								"entityType": "ORGANIZATION",
								"end": 109,
								"start": 91,
								"value": "Advisory Committee"
							}, {
								"id": "508",
								"entityType": "ORGANIZATION",
								"end": 132,
								"start": 117,
								"value": "Limited Partner"
							}, {
								"id": "508",
								"entityType": "ORGANIZATION",
								"end": 170,
								"start": 152,
								"value": "Advisory Committee"
							}, {
								"id": "508",
								"entityType": "ORGANIZATION",
								"end": 350,
								"start": 332,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "509",
							"text": "",
							"entities": []
						}, {
							"id": "510",
							"text": "",
							"entities": []
						}, {
							"id": "511",
							"text": "704094543 -39- ",
							"entities": []
						}, {
							"id": "512",
							"text": "(c) If any Limited Partner obtains a final judgment in a court of competent jurisdiction against the General Partner for matters relating to the Partnership, the General Partner shall pursue against its members the remedies (if any) that it has against such member relating to such claim. ",
							"entities": []
						}, {
							"id": "513",
							"text": "Section 5.11 Indemnification of General Partner, the Manager and Advisory Committee. (a) The Partnership will indemnify (A) the members of the Senior Investment Team, the General Partner, the Manager and each of their respective members, partners, shareholders, directors, officers, employees, agents and Affiliates against any losses, liabilities, damages or expenses (including amounts paid for attorneys’ fees, judgments and settlements in connection with any threatened, pending or completed action, suit or proceeding) to which any of such persons may become subject in connection with such person’s activities on behalf of the Partnership or in connection with any involvement with a Portfolio Company (including serving as an officer, director, consultant or employee of any Portfolio Company) directly or indirectly on behalf of the Partnership and (B) the members of the Advisory Committee, any Affiliate or employer of any such members and any Limited Partner represented on the Advisory Committee by any member, in connection with any involvement with the Advisory Committee, respectively, but, in the case of members of the Advisory Committee or their Affiliates and employers or any Limited Partner represented on the Advisory Committee by any member, only to the extent that such person acted in good faith and, in the case of the members of the Senior Investment Team, the General Partner, the Manager and each of their respective members, partners, shareholders, directors, officers, employees, agents and Affiliates, only to the extent that such person (i) acted in good faith, (ii) acted in a manner reasonably believed to be in the best interests of the Partnership or the Portfolio Company (as the case may be), (iii) was neither grossly negligent nor engaged in willful malfeasance, fraud, (iv) did not materially breach this Agreement (v) did not materially breach such person’s fiduciary duties to the Partnership (provided that the provisions of this Agreement that eliminate or modify the fiduciary duties of such Persons to the Partnership otherwise existing at law or in equity are agreed by the Partners to so eliminate or modify the duties of such Persons to the Partnership to the extent permitted by law), and (vi) with respect to any criminal action, such person did not have reasonable cause at the time of such action to believe that such person’s conduct was unlawful. Any person described in clause (A) of this Section 5.11(a) entitled to seek indemnification hereunder shall first use reasonable efforts to seek indemnification from other available sources, if any, prior to obtaining indemnification hereunder; provided that any such person may seek and obtain indemnification hereunder if at any time such person reasonably believes that such person will not receive timely indemnification on terms reasonably acceptable to such person from such other sources. The Partnership may, in the sole judgment of the General Partner, pay the expenses of any person indemnifiable under this Section 5.11 in advance of the final disposition of any proceeding, so long as (w) with respect to any derivative action brought by any Limited Partner, the person receiving the advance is not the subject of such derivative action, (x) the proceeding is not instituted by a Majority in Interest of the Limited Partners against the General Partner, (y) General Partner has a good faith belief such expenses are indemnifiable, and (z) the General Partner receives a written undertaking by such person to repay the full amount advanced if there is a final determination that such person did not satisfy the standards set forth in clauses (i) through (vi) immediately above or that such person is not otherwise entitled to indemnification as provided herein. Notwithstanding the foregoing, no person will be exculpated or exonerated from liability or indemnified against loss for violations of federal or state securities laws, or for",
							"entities": [{
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 83,
								"start": 65,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 165,
								"start": 143,
								"value": "Senior Investment Team"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 799,
								"start": 782,
								"value": "Portfolio Company"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 898,
								"start": 880,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 969,
								"start": 954,
								"value": "Limited Partner"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1007,
								"start": 989,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1085,
								"start": 1067,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1154,
								"start": 1136,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1211,
								"start": 1196,
								"value": "Limited Partner"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1249,
								"start": 1231,
								"value": "Advisory Committee"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1382,
								"start": 1360,
								"value": "Senior Investment Team"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 1709,
								"start": 1692,
								"value": "Portfolio Company"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 2131,
								"start": 2123,
								"value": "Partners"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 2964,
								"start": 2949,
								"value": "General Partner"
							}, {
								"id": "513",
								"entityType": "ORGANIZATION",
								"end": 3389,
								"start": 3374,
								"value": "General Partner"
							}]
						}, {
							"id": "514",
							"text": "",
							"entities": []
						}, {
							"id": "515",
							"text": "",
							"entities": []
						}, {
							"id": "516",
							"text": "704094543 -40- ",
							"entities": []
						}, {
							"id": "517",
							"text": "any other intentional or criminal wrongdoing. No person shall be indemnifiable under this Section 5.11 in respect of losses, liabilities, damages or expenses to which any such person may become subject in connection with (x) such person’s activities with any Portfolio Company if such losses arise after the Partnership’s final disposition of such Portfolio Company or (y) a dispute among the General Partner, the Manager, their respective partners and employees, and the members of the Senior Investment Team. ",
							"entities": [{
								"id": "517",
								"entityType": "ORGANIZATION",
								"end": 408,
								"start": 393,
								"value": "General Partner"
							}, {
								"id": "517",
								"entityType": "ORGANIZATION",
								"end": 509,
								"start": 487,
								"value": "Senior Investment Team"
							}]
						}, {
							"id": "518",
							"text": "(b) No Limited Partner shall have any obligation or liability, including any obligation to make a Capital Contribution to the Partnership, in respect of an indemnity obligation arising from a Portfolio Investment with respect to which such Limited Partner is not a Participating Partner. ",
							"entities": []
						}, {
							"id": "519",
							"text": "(c) The General Partner will use reasonable efforts to cause each Portfolio Company for which any Affiliate of the General Partner serves as an officer or director to adopt organizational documents which provide mandatory indemnification to directors, officers and managers to the fullest extent permitted by applicable law. ",
							"entities": [{
								"id": "519",
								"entityType": "ORGANIZATION",
								"end": 83,
								"start": 66,
								"value": "Portfolio Company"
							}, {
								"id": "519",
								"entityType": "ORGANIZATION",
								"end": 130,
								"start": 115,
								"value": "General Partner"
							}]
						}, {
							"id": "520",
							"text": "Section 5.12 Co-investments with Fund II; Formation of New Fund or Business Endeavor. (a) Until the termination or expiration of the investment period of Fund II, the Partnership and Fund II will co-invest in all investments made by the Partnership or Fund II after the Effective Date that the General Partner believes, in its sole discretion, fit the investment objectives of the Partnership and Fund II, as applicable, and on the same terms and conditions in all material respects, and with amounts for investment allocated equally between the Partnership and Fund II (subject to available capital or other investment limitations or restrictions on the Partnership or Fund II, including those set forth in Section 5.4), as determined by the General Partner. Each of the Partnership and Fund II will dispose of securities of a Portfolio Company that are of the same class at the same time and on the same economic and other terms. Notwithstanding the foregoing, in no event will the Partnership or any Successor Fund participate in any add-on investment, including any follow-on investment, made by Fund II portfolio companies other than a Fund II portfolio company in which the Partnership has made a Portfolio Investment pursuant to this Section 5.12(a). ",
							"entities": [{
								"id": "520",
								"entityType": "ORGANIZATION",
								"end": 309,
								"start": 294,
								"value": "General Partner"
							}, {
								"id": "520",
								"entityType": "ORGANIZATION",
								"end": 758,
								"start": 743,
								"value": "General Partner"
							}]
						}, {
							"id": "521",
							"text": "(b) Subject to the other provisions of this Article V, each Partner’s interest in the business endeavors of the other Partners is limited to his, her or its interest in the Partnership and no Partner’s future business activities are restricted. Notwithstanding the foregoing and other than as permitted in Section 5.7(c), unless consented to by a Majority in Interest of the Limited Partners, neither the General Partner, the Manager, any member of the Senior Investment Team nor any of their respective Affiliates will close and make investments, act as general partner, managing member, advisor, manager, employee, agent, or the primary source of transactions on behalf of (x) another pooled investment vehicle (other than the Predecessor Resolute Fund Entities, a Parallel Vehicle or Separate Investment Entity) or (y) any managed account, that has private equity investment objectives substantially similar to those of the Partnership (a “Successor Fund”) until the earlier of (i) the date on which at least 75% of the Commitments have been invested, committed or reserved (pursuant to a letter of intent, memorandum of understanding or other similar written agreement) for investment in Portfolio Companies or otherwise set aside for Follow-on Investments and (ii) the end of the Commitment Period, provided, however, that this Section 5.12 shall not prohibit the formation of one or more Co-",
							"entities": [{
								"id": "521",
								"entityType": "ORGANIZATION",
								"end": 67,
								"start": 60,
								"value": "Partner"
							}, {
								"id": "521",
								"entityType": "ORGANIZATION",
								"end": 391,
								"start": 375,
								"value": "Limited Partners"
							}]
						}, {
							"id": "522",
							"text": "",
							"entities": []
						}, {
							"id": "523",
							"text": "",
							"entities": []
						}, {
							"id": "524",
							"text": "704094543 -41- ",
							"entities": []
						}, {
							"id": "525",
							"text": "investment Partnerships, and Co-investment Partnerships shall not be considered Successor Funds. If a Successor Fund is organized prior to the termination of the Commitment Period of the Partnership, as permitted under the previous sentence, the Successor Fund may only coinvest in investments made by the Partnership alongside the Partnership, and, if applicable, Fund II, on the same terms and conditions in all material respects, with amounts for investment allocated equally between the Partnership, the Successor Fund, and, if Fund II is also participating in such investment, Fund II, subject to available capital or other investment limitations on the Partnership, the Successor Fund, and, if Fund II is also participating in such investment, Fund II as determined by the General Partner. Any Successor Fund will dispose of securities of a Portfolio Company that are of the same class as those purchased by the Partnership, and, if applicable, Fund II, at the same time as the Partnership, and, if applicable, Fund II, and on the same economic and other terms. ",
							"entities": [{
								"id": "525",
								"entityType": "ORGANIZATION",
								"end": 794,
								"start": 779,
								"value": "General Partner"
							}]
						}, {
							"id": "526",
							"text": "Section 5.13 Interest as a Limited Partner. To the extent that the General Partner acquires the interest of a Defaulting Partner or any other Limited Partner, the General Partner will (subject to Section 2.5) be deemed to be a Limited Partner with respect to such interest for all purposes of this Agreement. ",
							"entities": [{
								"id": "526",
								"entityType": "ORGANIZATION",
								"end": 82,
								"start": 67,
								"value": "General Partner"
							}, {
								"id": "526",
								"entityType": "ORGANIZATION",
								"end": 178,
								"start": 163,
								"value": "General Partner"
							}]
						}, {
							"id": "527",
							"text": "Section 5.14 Parallel Vehicles. The General Partner and the Manager may organize and capitalize Parallel Vehicles for purposes of facilitating investments in Portfolio Companies by the Investment Team, non-U.S. investors and certain accredited investors that are not qualified purchasers (as defined in the Investment Company Act) in the Fund Group. If any Parallel Vehicles are organized, then the Partnership and each Parallel Vehicle (a) will invest in each Portfolio Company in direct proportion to their respective available capital commitments, subject to the conditions and limitations therein, so that the Partnership will invest in each Portfolio Company an amount equal to the total investment by the Partnership and any Parallel Vehicle multiplied by a fraction, the numerator of which is the aggregate Commitments, and the denominator of which is the sum of the aggregate Commitments plus the aggregate capital commitments by investors in the Parallel Vehicles, provided that such proportion may be modified by the General Partner with the prior approval of the Advisory Committee or a Majority in Interest of the Limited Partners in order to reflect the available commitments and any tax, regulatory or other legal aspects of any Parallel Vehicle and its investors and (b) invest in and dispose of Portfolio Company at the same time and on effectively the same economic terms and conditions. Any item of income, fees, reimbursement or expense that relates to a Portfolio Company in which the Partnership and one or more Parallel Vehicles are investors or to a potential investment that is considered on behalf of the Partnership and any Parallel Vehicles by the General Partner, the Manager or the general partners or managers of any Parallel Vehicles shall, to the extent that any such item is not directly attributable to the Partnership or a Parallel Vehicle, be pro rated among the Partnership and the Parallel Vehicles based on their respective investments in such Portfolio Company or the portions of such potential investment that would have been made available to the Partnership in accordance with the preceding sentence, as applicable. Organizational Expenses shall be borne by the Partnership and each Parallel Vehicle in proportion to their respective aggregate capital commitments, except the Partnership and each Parallel Vehicle shall separately bear the Organizational Expenses that are directly attributed to each such entity. Each Parallel Vehicle shall reimburse the Partnership for such Parallel Vehicle’s share of Organizational Expenses that were paid by the Partnership. Investments in Parallel Vehicles by investors shall be on substantially the same terms and conditions as",
							"entities": [{
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 200,
								"start": 185,
								"value": "Investment Team"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 348,
								"start": 338,
								"value": "Fund Group"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 478,
								"start": 461,
								"value": "Portfolio Company"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 663,
								"start": 646,
								"value": "Portfolio Company"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 1042,
								"start": 1027,
								"value": "General Partner"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 1092,
								"start": 1074,
								"value": "Advisory Committee"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 1142,
								"start": 1098,
								"value": "Majority in Interest of the Limited Partners"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 1491,
								"start": 1474,
								"value": "Portfolio Company"
							}, {
								"id": "527",
								"entityType": "ORGANIZATION",
								"end": 2000,
								"start": 1983,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "528",
							"text": "",
							"entities": []
						}, {
							"id": "529",
							"text": "",
							"entities": []
						}, {
							"id": "530",
							"text": "704094543 -42- ",
							"entities": []
						}, {
							"id": "531",
							"text": "investments in the Partnership by Limited Partners. For the avoidance of doubt, all references to Portfolio Investments shall include investments made by the Partnership, all Parallel Vehicles and all Separate Investment Entities. To the extent that this Agreement provides that the Limited Partners shall vote together with the investors of any Parallel Vehicle, the General Partner agrees (i) that the relevant documentation of any such Parallel Vehicle shall contain comparable voting provisions to the extent applicable, (ii) that any combined vote of the Limited Partners and the investors in any Parallel Vehicle on any such matter for the purposes of this Agreement shall constitute a combined vote on the matter for the purposes of the Parallel Vehicles and (iii) each such matter shall, if approved by such vote, be equally applicable to the Partnership and all Parallel Vehicles. The provisions and economic terms of each such Parallel Vehicle shall be substantially the same in all material respects as those of the Partnership, except (i) to the extent such terms are required to differ from the economic and other material terms of this Agreement due to the tax, regulatory, legal or other considerations applicable to the investors in such Parallel Vehicle and (ii) if the purpose of such Parallel Vehicle is to facilitate investments in Portfolio Companies by the Investment Team. ",
							"entities": [{
								"id": "531",
								"entityType": "ORGANIZATION",
								"end": 50,
								"start": 34,
								"value": "Limited Partners"
							}, {
								"id": "531",
								"entityType": "ORGANIZATION",
								"end": 299,
								"start": 283,
								"value": "Limited Partners"
							}, {
								"id": "531",
								"entityType": "ORGANIZATION",
								"end": 576,
								"start": 560,
								"value": "Limited Partners"
							}, {
								"id": "531",
								"entityType": "ORGANIZATION",
								"end": 1394,
								"start": 1379,
								"value": "Investment Team"
							}]
						}, {
							"id": "532",
							"text": "Section 5.15 Separate Investment Entities. If the General Partner determines for legal, tax, regulatory or other similar reasons, in its sole discretion that it is in the best interests of the Partners to invest in one or more Portfolio Company through an entity other than the Partnership, such investment or investments shall not be made by the Partnership but shall instead be made, either in lieu of or in conjunction with, the Partnership, by one or more limited partnerships, limited liability companies, corporations or similar entities (each a “Separate Investment Entity”) owned in the aggregate by all of the Partners and managed by the General Partner or an Affiliate thereof controlled by the members of the Senior Investment Team. Each Separate Investment Entity shall receive an opinion of counsel for the benefit of the Limited Partners (x) regarding its classification for United States Federal income tax purposes and the limited liability of the Separate Investment Entity and (y) to the effect that no Limited Partner shall be personally liable for any debts or losses of the Separate Investment Entity in such jurisdiction in excess of such Limited Partner’s Unfunded Commitment. In the event that the Partnership invests in a Portfolio Company in conjunction with a Separate Investment Entity, the Partnership and such Separate Investment Entity will invest in and dispose of such Portfolio Company at the same time and on effectively the same economic terms and conditions. To the extent that Benefit Plan Investors participate in a Separate Investment Entity, such Separate Investment Entity shall be (i) structured so that it will not be deemed to hold Plan Assets and shall provide the same ERISA protections to those Benefit Plan Investors that are provided under this Agreement, and (ii) established on substantially the same terms and conditions in all material respects as Partners are required to make Capital Contributions to the Partnership, and such capital contributions shall be deemed to reduce the Unfunded Commitment of each Partner to the same extent that it would be reduced if made to the Partnership. The provisions and economic terms of each such Separate Investment Entity shall be substantially the same in all material respects as those of the Partnership, except to the extent such terms are required to differ from the economic and other material arrangements reflected in the terms of this Agreement in order to accomplish the purposes of such Separate Investment Entity (including, for example, different economic treatment of different Partners resulting solely from the consequences of a structure created to minimize the amount of UBTI recognized by a Tax Exempt Partner). The gains and losses of any such Separate Investment Entity shall be treated as having been realized by the Partnership for all economic calculations under this Agreement (including, without limitation, the calculation",
							"entities": [{
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 65,
								"start": 50,
								"value": "General Partner"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 201,
								"start": 193,
								"value": "Partners"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 244,
								"start": 227,
								"value": "Portfolio Company"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 627,
								"start": 619,
								"value": "Partners"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 662,
								"start": 647,
								"value": "General Partner"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 742,
								"start": 720,
								"value": "Senior Investment Team"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 851,
								"start": 835,
								"value": "Limited Partners"
							}, {
								"id": "532",
								"entityType": "LOCATION",
								"end": 902,
								"start": 889,
								"value": "United States"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 1121,
								"start": 1095,
								"value": "Separate Investment Entity"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 1264,
								"start": 1247,
								"value": "Portfolio Company"
							}, {
								"id": "532",
								"entityType": "ORGANIZATION",
								"end": 2688,
								"start": 2684,
								"value": "UBTI"
							}]
						}, {
							"id": "533",
							"text": "",
							"entities": []
						}, {
							"id": "534",
							"text": "",
							"entities": []
						}, {
							"id": "535",
							"text": "704094543 -43- ",
							"entities": []
						}, {
							"id": "536",
							"text": "of the General Partner give back obligation pursuant to Section 8.3(c)), and there will be no duplication of management fees or Carried Interest. The Partners having interests in the Separate Investment Entity (including the General Partner and its Affiliates with respect to their Commitments as Partners) shall contribute to each Separate Investment Entity the amounts required to fund such Separate Investment Entity, with each such Partner contributing its pro rata portion of such amounts (based on the relative Unfunded Commitments of the Partners as of the date of such contributions) up to such Partner’s remaining Unfunded Commitment. Each Limited Partner hereby agrees and consents to the formation of each Separate Investment Entity and hereby covenants and agrees that it will execute and deliver any agreements, documents and certificates as reasonably necessary for, or incidental to, the formation and continuation of each such Separate Investment Entity and its participation as a limited partner, member or participant in each such Separate Investment Entity established in accordance with this Section 5.15. ",
							"entities": [{
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 158,
								"start": 150,
								"value": "Partners"
							}, {
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 240,
								"start": 225,
								"value": "General Partner"
							}, {
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 553,
								"start": 545,
								"value": "Partners"
							}, {
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 743,
								"start": 717,
								"value": "Separate Investment Entity"
							}, {
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 969,
								"start": 943,
								"value": "Separate Investment Entity"
							}, {
								"id": "536",
								"entityType": "ORGANIZATION",
								"end": 1075,
								"start": 1049,
								"value": "Separate Investment Entity"
							}]
						}, {
							"id": "537",
							"text": "Section 5.16 Media Company Investments. ",
							"entities": []
						}, {
							"id": "538",
							"text": "(a) In the event and for so long as, and only during periods from time to time in which, the Partnership shall directly or indirectly hold (or otherwise have attributed to it) an ownership or other interest in a Media Company that is “attributed” to the Partnership under the rules and regulations of the FCC relating to the particular FCC service in which the Media Company operates, no Limited Partner (an “Insulated Partner”), or any person that is a director, officer, equivalent non-corporate official, partner, member or 5% or greater shareholder or other direct or indirect owner of an Insulated Partner such that the ownership interests of the Insulated Partner, are “attributed” to such owner, director, officer, equivalent non-corporate officer, partner or member (an “Insulated Partner Affiliate”), to the extent reasonably determined by the General Partner (with the advice of GP’s Counsel) to be necessary to have such ownership or interest not be attributable to the Limited Partners for purposes of the FCC Attribution Rules and the Ownership Rules, shall do any of the following: ",
							"entities": [{
								"id": "538",
								"entityType": "ORGANIZATION",
								"end": 225,
								"start": 212,
								"value": "Media Company"
							}, {
								"id": "538",
								"entityType": "ORGANIZATION",
								"end": 308,
								"start": 305,
								"value": "FCC"
							}, {
								"id": "538",
								"entityType": "ORGANIZATION",
								"end": 374,
								"start": 361,
								"value": "Media Company"
							}, {
								"id": "538",
								"entityType": "ORGANIZATION",
								"end": 868,
								"start": 853,
								"value": "General Partner"
							}, {
								"id": "538",
								"entityType": "ORGANIZATION",
								"end": 1021,
								"start": 1018,
								"value": "FCC"
							}]
						}, {
							"id": "539",
							"text": "(i) act as an employee of the Partnership or any Media Company if such Insulated Partner’s or Insulated Partner Affiliate’s functions, directly or indirectly, relate to the media or common carrier enterprises of the Partnership or any Media Company; ",
							"entities": [{
								"id": "539",
								"entityType": "ORGANIZATION",
								"end": 248,
								"start": 235,
								"value": "Media Company"
							}]
						}, {
							"id": "540",
							"text": "(ii) serve, in any material capacity, as an independent contractor or agent of the Partnership or any Media Company with respect to the media or common carrier enterprises of the Partnership or any such Media Company; ",
							"entities": [{
								"id": "540",
								"entityType": "ORGANIZATION",
								"end": 115,
								"start": 102,
								"value": "Media Company"
							}, {
								"id": "540",
								"entityType": "ORGANIZATION",
								"end": 216,
								"start": 203,
								"value": "Media Company"
							}]
						}, {
							"id": "541",
							"text": "(iii) communicate with the General Partner or any Portfolio Company on matters pertaining to the day-to-day operations of any Media Company; ",
							"entities": [{
								"id": "541",
								"entityType": "ORGANIZATION",
								"end": 139,
								"start": 126,
								"value": "Media Company"
							}]
						}, {
							"id": "542",
							"text": "(iv) to the extent Partners have the power under this Agreement to admit additional General Partners, vote to admit any additional General Partner to the Partnership unless such addition is subject to the veto of the General Partner; ",
							"entities": [{
								"id": "542",
								"entityType": "ORGANIZATION",
								"end": 100,
								"start": 84,
								"value": "General Partners"
							}]
						}, {
							"id": "543",
							"text": "(v) to the extent Partners have the power under this Agreement, except as permitted under Sections 5.9 and 8.2, vote on the removal of the General Partner; ",
							"entities": []
						}, {
							"id": "544",
							"text": "(vi) perform any services for the Partnership or any Media Company materially relating to the media or common carrier enterprises of the Partnership or such Media",
							"entities": [{
								"id": "544",
								"entityType": "ORGANIZATION",
								"end": 66,
								"start": 53,
								"value": "Media Company"
							}]
						}, {
							"id": "545",
							"text": "",
							"entities": []
						}, {
							"id": "546",
							"text": "",
							"entities": []
						}, {
							"id": "547",
							"text": "704094543 -44- ",
							"entities": []
						}, {
							"id": "548",
							"text": "Company, with the exception of making loans to, or acting as a surety for, such Media Company or the Partnership to the extent consistent with the “equity or debt plus” component of the FCC Attribution Rules; ",
							"entities": [{
								"id": "548",
								"entityType": "ORGANIZATION",
								"end": 93,
								"start": 80,
								"value": "Media Company"
							}]
						}, {
							"id": "549",
							"text": "(vii) become actively involved in the management or operation of any Media Company; or ",
							"entities": [{
								"id": "549",
								"entityType": "ORGANIZATION",
								"end": 82,
								"start": 69,
								"value": "Media Company"
							}]
						}, {
							"id": "550",
							"text": "(viii) serve as a member or otherwise participate in the activities of the Advisory Committee if, in the determination of the Insulated Partner, such membership or participation would cause the Insulated Partner to lose its insulated status under the Attribution Rules. ",
							"entities": [{
								"id": "550",
								"entityType": "ORGANIZATION",
								"end": 93,
								"start": 75,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "551",
							"text": "(b) An Insulated Partner may, upon five Business Days’ prior written notice to the General Partner, relinquish its status as an Insulated Partner, in which case the provisions of this Section 5.16 shall no longer apply to such Limited Partner; provided, that such relinquishment shall not be effective until the General Partner has received an opinion of special counsel to the Partnership on FCC matters stating that such relinquishment will not (1) cause the Partnership or any of its Affiliates to violate any law, regulation, rule or policy applicable to matters currently subject to FCC jurisdiction or (2) in any way limit or restrict the activities of the Partnership or any of its Affiliates. To the extent that issuance of such an opinion requires the filing of any notices with the FCC or the issuance of any approvals by the FCC, the General Partner and the Insulated Partner seeking to relinquish its insulated status shall reasonably cooperate in making any such filing or obtaining any such approval, and the General Partner shall seek the opinion of special counsel to the Partnership on FCC matters with respect to the making of any such filing or the obtaining of any such approval. ",
							"entities": [{
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 327,
								"start": 312,
								"value": "General Partner"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 396,
								"start": 393,
								"value": "FCC"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 591,
								"start": 588,
								"value": "FCC"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 795,
								"start": 792,
								"value": "FCC"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 839,
								"start": 836,
								"value": "FCC"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 860,
								"start": 845,
								"value": "General Partner"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 1038,
								"start": 1023,
								"value": "General Partner"
							}, {
								"id": "551",
								"entityType": "ORGANIZATION",
								"end": 1106,
								"start": 1103,
								"value": "FCC"
							}]
						}, {
							"id": "552",
							"text": "(c) Nothing in this Section 5.16 shall be interpreted to restrict the activities of (A) the Limited Partners or (B) the beneficial interest holders of any Limited Partner during the period that it is an Insulated Partner so long as such Limited Partner’s partnership or other governing agreement contains language reasonably designed to insulate such Limited Partner’s unaffiliated limited partners or beneficial interest holders, as the case may be, from having the Partnership’s interest in any Media Company being attributed under the FCC attribution rules to such beneficial owners. ",
							"entities": [{
								"id": "552",
								"entityType": "ORGANIZATION",
								"end": 170,
								"start": 155,
								"value": "Limited Partner"
							}, {
								"id": "552",
								"entityType": "ORGANIZATION",
								"end": 252,
								"start": 237,
								"value": "Limited Partner"
							}, {
								"id": "552",
								"entityType": "ORGANIZATION",
								"end": 510,
								"start": 497,
								"value": "Media Company"
							}, {
								"id": "552",
								"entityType": "ORGANIZATION",
								"end": 541,
								"start": 538,
								"value": "FCC"
							}]
						}, {
							"id": "553",
							"text": "(d) Upon written request by an Insulated Partner, the General Partner shall, prior to the Partnership consummating an investment in a Media Company, cause the legal counsel to the Partnership to deliver an opinion reasonably acceptable to such Insulated Partner to the effect that such investment shall not be “attributed” to the Insulated Partner under the rules and regulations of the FCC relating to the particular FCC service in which such Media Company operates. ",
							"entities": [{
								"id": "553",
								"entityType": "ORGANIZATION",
								"end": 147,
								"start": 134,
								"value": "Media Company"
							}, {
								"id": "553",
								"entityType": "ORGANIZATION",
								"end": 390,
								"start": 387,
								"value": "FCC"
							}, {
								"id": "553",
								"entityType": "ORGANIZATION",
								"end": 457,
								"start": 444,
								"value": "Media Company"
							}]
						}, {
							"id": "554",
							"text": "Section 5.17 Co-investment Partnerships. ",
							"entities": []
						}, {
							"id": "555",
							"text": "(a) If the General Partner, in its reasonable good faith discretion, determines that the Partnership should not purchase all of the securities available to be purchased that have been or are to be issued by a Portfolio Company, the General Partner may, in its discretion, provide co- investment opportunities (each a “Co-Investment Opportunity”) to one or more Limited Partners, strategic investors, lenders, or partners, investors, Affiliates or employees of the General Partner",
							"entities": [{
								"id": "555",
								"entityType": "ORGANIZATION",
								"end": 226,
								"start": 209,
								"value": "Portfolio Company"
							}, {
								"id": "555",
								"entityType": "ORGANIZATION",
								"end": 377,
								"start": 361,
								"value": "Limited Partners"
							}]
						}, {
							"id": "556",
							"text": "",
							"entities": []
						}, {
							"id": "557",
							"text": "",
							"entities": []
						}, {
							"id": "558",
							"text": "704094543 -45- ",
							"entities": []
						}, {
							"id": "559",
							"text": "and Manager (each a “Co-Investor”); provided, however, that unless approved by the Advisory Committee, none of the General Partner, the Manager and their partners, investors, members of the Senior Investment Team, Affiliates, officers, directors or employees may have any material interest in, or receive management fees from, such Co-Investment Partnerships or such co- investors or participate as such Co-Investors except for investments made by Fund II in accordance with Section 5.12. The General Partner intends to not provide Co-Investment Opportunities to Benefit Plan Investors to the extent necessary to prevent such Co-Investment Opportunity from being deemed to be Plan Assets of the related Benefit Plan Investor. ",
							"entities": [{
								"id": "559",
								"entityType": "ORGANIZATION",
								"end": 101,
								"start": 83,
								"value": "Advisory Committee"
							}, {
								"id": "559",
								"entityType": "ORGANIZATION",
								"end": 130,
								"start": 115,
								"value": "General Partner"
							}, {
								"id": "559",
								"entityType": "ORGANIZATION",
								"end": 212,
								"start": 190,
								"value": "Senior Investment Team"
							}]
						}, {
							"id": "560",
							"text": "(b) The General Partner may, as a condition to any Co-Investment Opportunity, (i) require any or all Co-Investors to execute a confidentiality agreement relating to such Co- Investment Opportunity in form and substance acceptable to the General Partner, and (ii) require Co-Investors electing to participate in a Co-Investment Opportunity to coinvest through a Co- Investment Partnership, which may have investors other than Limited Partners. ",
							"entities": [{
								"id": "560",
								"entityType": "ORGANIZATION",
								"end": 196,
								"start": 170,
								"value": "Co - Investment Opportunity"
							}, {
								"id": "560",
								"entityType": "ORGANIZATION",
								"end": 387,
								"start": 361,
								"value": "Co - Investment Partnership"
							}, {
								"id": "560",
								"entityType": "ORGANIZATION",
								"end": 441,
								"start": 425,
								"value": "Limited Partners"
							}]
						}, {
							"id": "561",
							"text": "(c) Each Limited Partner shall treat the information provided to it pursuant to this Section 5.17 as confidential, shall use such information solely for the purpose of considering the offer made pursuant to this Section, shall, upon the request of the General Partner, promptly return to the General Partner any written information provided it pursuant to this Section, and shall not disclose the identity of the securities or issuer to any person other than (i) its employees, counsel or advisors, solely on a need to know and confidential basis, (ii) any governmental authority or regulatory authority which regulates such Limited Partner’s ability to engage in any of its businesses under U.S. or foreign law to the extent such information is required by such governmental authority or regulatory authority, as the case may be, and (iii) to the extent such Limited Partner is required by law or regulation to disclose such information. ",
							"entities": [{
								"id": "561",
								"entityType": "LOCATION",
								"end": 696,
								"start": 692,
								"value": "U.S."
							}]
						}, {
							"id": "562",
							"text": "(d) If Co-Investment Partnerships or Co-Investors purchase securities of a Portfolio Company that are of the same class as securities of a Portfolio Company purchased by the Partnership and such securities are purchased by Co-Investment Partnerships or Co-Investors within thirty (30) days of the purchase of such securities by the Partnership, the Partnership shall purchase such securities on terms that are no less advantageous than the terms on which any such Co-Investment Partnership or Co-Investor purchases such securities. Each Co-Investment Partnership and Co-Investor will dispose of securities of a Portfolio Company that are of the same class as securities of a Portfolio Company purchased by the Partnership at the same time and on substantially the same terms (including price) as the Partnership. ",
							"entities": [{
								"id": "562",
								"entityType": "ORGANIZATION",
								"end": 156,
								"start": 139,
								"value": "Portfolio Company"
							}, {
								"id": "562",
								"entityType": "ORGANIZATION",
								"end": 692,
								"start": 675,
								"value": "Portfolio Company"
							}]
						}, {
							"id": "563",
							"text": "Section 5.18 Bridge Leveraging. (a) The Partnership is authorized to enter into one or more credit facilities (each, a “Bridge Leveraging/Credit Support Facility”) in order to (i) borrow money (“Bridge Leveraging”) for the purpose of (A) providing interim financing for the acquisition of Portfolio Investments to the extent necessary prior to the receipt of Capital Contributions (including as a result of any default by any Limited Partner or limited partner of a Parallel Vehicle in the making of Capital Contributions), and (B) paying Partnership Expenses; and/or (ii) provide Credit Support for the obligations of Portfolio Companies or their subsidiaries as described in Section 5.4(c); provided, however, that in no event shall the aggregate amount of Bridge Leveraging outstanding at any time under any Bridge Leveraging/Credit Support Facility exceed the aggregate amount of Unfunded Commitments as of such date. A Bridge Leveraging/Credit Support Facility may be secured by (x) a pledge by the Partnership of all or a",
							"entities": []
						}, {
							"id": "564",
							"text": "",
							"entities": []
						}, {
							"id": "565",
							"text": "",
							"entities": []
						}, {
							"id": "566",
							"text": "704094543 -46- ",
							"entities": []
						}, {
							"id": "567",
							"text": "portion of the aggregate Unfunded Commitments of the Partners, and (y) a pledge and assignment by the General Partner of the rights of the General Partner contained herein, including, without limitation, the right to deliver Capital Call Notices and enforce all remedies against Partners that fail to fund their respective Unfunded Commitments pursuant thereto and in accordance with the terms hereof. The Partnership and any Parallel Vehicles may be co- borrowers or co-guarantors under any Bridge Leveraging/Credit Support Facility, in which event the Partnership and the Parallel Vehicles may be jointly and severally liable for all obligations under such Bridge Leveraging/Credit Support Facility. In the event such a Bridge Leveraging/Credit Support Facility is so secured by Commitments, and to the extent funds are advanced against the Commitment of a particular Partner or partner of a Parallel Vehicle because such Person is late in funding or defaults on a Capital Call Notice delivered hereunder or by the Parallel Vehicle, each Limited Partner understands, acknowledges and agrees that (i) it may be required to make a Capital Contribution in respect of its pro rata share of such late or defaulted contribution amount, provided, however, that in no event shall any Partner be required to make Capital Contributions in excess of its Unfunded Commitment, and (ii) as a result of such default or late payment, the allocation between the Partnership and each Parallel Vehicle of a Portfolio Investment (together with any item of income, fees, reimbursement or expense that relates to such Portfolio Investment) with respect to which there has occurred a shortfall in contributions made by the Partners or the partners in a Parallel Vehicle shall be made by the General Partner based on the total amount of Capital Contributions of the Partners and the partners in each Parallel Vehicle actually funded to acquire such Portfolio Investment. In addition to the rights and remedies of the General Partner in respect of a Defaulting Partner pursuant to Section 6.11, any Partner that is late in funding or defaults on a Capital Call Notice shall be responsible for any interest or other expenses incurred in connection with such advance. Any such expenses shall be withheld from distributions otherwise to be made to such Defaulting Partner, and, to the extent such expenses exceed such distributions, such Defaulting Partner shall pay the amount of such excess to the Partnership in the manner and at the time or times required by the General Partner. Any such excess shall not be credited to such Defaulting Partner’s Capital Account. For purposes of this Agreement, any amount withheld from a Defaulting Partner and paid to a lender shall be paid to the lender on behalf of such Defaulting Partner and shall be treated as if distributed to such Defaulting Partner. ",
							"entities": [{
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 61,
								"start": 53,
								"value": "Partners"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 154,
								"start": 139,
								"value": "General Partner"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 1055,
								"start": 1040,
								"value": "Limited Partner"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 1710,
								"start": 1702,
								"value": "Partners"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 1785,
								"start": 1770,
								"value": "General Partner"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 1852,
								"start": 1844,
								"value": "Partners"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 1894,
								"start": 1878,
								"value": "Parallel Vehicle"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 2010,
								"start": 1995,
								"value": "General Partner"
							}, {
								"id": "567",
								"entityType": "ORGANIZATION",
								"end": 2556,
								"start": 2541,
								"value": "General Partner"
							}]
						}, {
							"id": "568",
							"text": "(b) To induce any such lender to enter into a Bridge Leveraging/Credit Support Facility with the Partnership, each Limited Partner hereby: (i) acknowledges that the Partnership has informed such Limited Partner that the Partnership may pledge to a lender the right to call all Unfunded Commitments to secure all obligations made under the Bridge Leveraging/Credit Support Facility (collectively, the “Obligations”) and, in connection therewith, grant to such lender the right to issue Capital Call Notices when an event of default under such Bridge Leveraging/Credit Support Facility exists, including an event of default resulting from the failure of a partner of a Parallel Vehicle to fund any capital contributions when required, which each Limited Partner shall fund, consistent with the terms hereof and its rights and obligations hereunder; (ii) acknowledges that the Partnership has informed such Limited Partner that for so long as the Bridge Leveraging/Credit Support Facility is in place, the General Partner and the Partnership may agree with the lender not to amend, modify, supplement, cancel, terminate, reduce (other than with respect to Funded Commitments) or suspend any of such Limited Partner’s obligations to fund its Unfunded Commitment pursuant hereto without the lender’s prior written consent; and (iii) acknowledges that such Limited Partner shall remain absolutely",
							"entities": [{
								"id": "568",
								"entityType": "ORGANIZATION",
								"end": 1018,
								"start": 1003,
								"value": "General Partner"
							}]
						}, {
							"id": "569",
							"text": "",
							"entities": []
						}, {
							"id": "570",
							"text": "",
							"entities": []
						}, {
							"id": "571",
							"text": "704094543 -47- ",
							"entities": []
						}, {
							"id": "572",
							"text": "and unconditionally obligated to fund Capital Contributions duly called by the General Partner or by a lender under a Bridge Leveraging/Credit Support Facility, without setoff, counterclaim or defense, including without limitation any defense under any bankruptcy or insolvency law, including Section 365 of the Bankruptcy Code. For the avoidance of doubt, the foregoing does not preclude the Limited Partners from (x) exercising their rights pursuant to Sections 2.2(d), 5.6, 5.9, 6.6 or 8.2(a), provided, that notwithstanding any exercise of such rights, the Limited Partners shall remain obligated to fund their Unfunded Commitments to pay the Obligations or (y) independently asserting any claim they may have against the General Partner or any of its Affiliates. ",
							"entities": [{
								"id": "572",
								"entityType": "ORGANIZATION",
								"end": 577,
								"start": 561,
								"value": "Limited Partners"
							}]
						}, {
							"id": "573",
							"text": "ARTICLE VI ",
							"entities": []
						}, {
							"id": "574",
							"text": "LIMITED PARTNERS ",
							"entities": []
						}, {
							"id": "575",
							"text": "Section 6.1 Limited Liability. The Limited Partners will not be personally liable for any obligations of the Partnership and will have no obligation (including with respect to a deficit balance in their Capital Account) to make contributions to the Partnership in excess of their respective Commitments specified in Schedule 1 attached hereto in accordance with this Agreement, except to the extent set forth in Section 6.7 or the Delaware Partnership Act. The Limited Partners will take no part in the control, direction or operation of the affairs of the Partnership and will have no power to bind the Partnership. No Limited Partner shall have any fiduciary duty, or any other duty or liability (except as (i) expressly provided in this Agreement or (ii) any liability which under the Delaware Partnership Act may not be contractually limited or eliminated), to the Partnership or any Partner. ",
							"entities": [{
								"id": "575",
								"entityType": "ORGANIZATION",
								"end": 477,
								"start": 461,
								"value": "Limited Partners"
							}]
						}, {
							"id": "576",
							"text": "Section 6.2 Transfer of Limited Partnership Interests. ",
							"entities": []
						}, {
							"id": "577",
							"text": "(a) A Limited Partner may not sell, assign, transfer, pledge, mortgage or otherwise dispose of all or any of its interest in the Partnership unless the General Partner has consented to such transfer or assignment in writing; provided, that with regard to an assignment by a Limited Partner to an Affiliate of such Limited Partner, such consent shall not be unreasonably withheld. ",
							"entities": [{
								"id": "577",
								"entityType": "ORGANIZATION",
								"end": 167,
								"start": 152,
								"value": "General Partner"
							}]
						}, {
							"id": "578",
							"text": "(b) A Limited Partner which is a trust under an employee benefit plan may, upon prior written notice to the General Partner, assign a beneficial interest in all or a portion of its interest in the Partnership to any other trust under such employee benefit plan or to any other employee benefit plan having the same sponsor (provided that income and loss allocable to the Limited Partner of the Partnership will continue to be included in the same filings under the same employer identification number with the Internal Revenue Service). Such assignment to another trust under such employee benefit plan or to any other employee benefit plan having the same sponsor will not be deemed to be an assignment or transfer of a limited partnership interest pursuant to this Agreement (and therefore will not require the General Partner’s consent pursuant to Section 6.2(a)). In addition, a change in any trustee or fiduciary of a Limited Partner will not be deemed to be an assignment or transfer of a limited partnership interest pursuant to this Agreement (and therefore not require the General Partner’s consent pursuant to Section 6.2(e)), so long as any such replacement trustee or fiduciary is also a fiduciary as defined under",
							"entities": [{
								"id": "578",
								"entityType": "ORGANIZATION",
								"end": 405,
								"start": 371,
								"value": "Limited Partner of the Partnership"
							}, {
								"id": "578",
								"entityType": "ORGANIZATION",
								"end": 534,
								"start": 510,
								"value": "Internal Revenue Service"
							}, {
								"id": "578",
								"entityType": "ORGANIZATION",
								"end": 828,
								"start": 813,
								"value": "General Partner"
							}, {
								"id": "578",
								"entityType": "ORGANIZATION",
								"end": 1097,
								"start": 1082,
								"value": "General Partner"
							}]
						}, {
							"id": "579",
							"text": "",
							"entities": []
						}, {
							"id": "580",
							"text": "",
							"entities": []
						}, {
							"id": "581",
							"text": "704094543 -48- ",
							"entities": []
						}, {
							"id": "582",
							"text": "applicable law, that income and loss allocable to the Limited Partner of the Partnership will continue to be included in the same filings under the same employer identification number with the Internal Revenue Service, and the General Partner receives prior written notice of such change in trustee or fiduciary. In connection with any assignment of interest or change in trustee or fiduciary under this Section 6.2(b), the Limited Partner shall provide such documentation as the General Partner shall reasonably request. ",
							"entities": [{
								"id": "582",
								"entityType": "ORGANIZATION",
								"end": 217,
								"start": 193,
								"value": "Internal Revenue Service"
							}]
						}, {
							"id": "583",
							"text": "(c) The voting rights of any Limited Partner’s interest shall automatically terminate upon any transfer of such interest to a trust, heir, beneficiary, executor, personal representative, guardian or conservator or upon any other transfer if the transferor no longer retains control over such voting rights and the General Partner has not consented pursuant to Section 6.2(e) to such transferee becoming a substitute Limited Partner. No consent of any other Limited Partner will be required as a condition precedent to any such transfer or substitution. ",
							"entities": [{
								"id": "583",
								"entityType": "ORGANIZATION",
								"end": 44,
								"start": 29,
								"value": "Limited Partner"
							}, {
								"id": "583",
								"entityType": "ORGANIZATION",
								"end": 329,
								"start": 314,
								"value": "General Partner"
							}]
						}, {
							"id": "584",
							"text": "(d) As a condition to any transfer of a Limited Partner’s interest pursuant to Section 6.2(a), the transferor and the transferee shall provide such legal opinions and documentation as the General Partner shall reasonably request; provided that if the transfer is to be made from a Limited Partner to a co-trustee or trustee as contemplated above or to an Affiliate pursuant to Section 6.2(a), an officer’s certificate in form reasonably satisfactory to the General Partner shall be delivered by the Limited Partner in lieu of such legal opinions and other documentation. ",
							"entities": [{
								"id": "584",
								"entityType": "ORGANIZATION",
								"end": 55,
								"start": 40,
								"value": "Limited Partner"
							}, {
								"id": "584",
								"entityType": "ORGANIZATION",
								"end": 203,
								"start": 188,
								"value": "General Partner"
							}]
						}, {
							"id": "585",
							"text": "(e) Notwithstanding anything to the contrary contained in this Section 6.2 or 6.11, a transferee or assignee will not become a substitute Limited Partner (i.e., a transfer other than as described in Section 6.2(b)) without the consent of the General Partner, which consent may be granted or withheld in its sole and absolute discretion (except for a disposition by a Limited Partner to an Affiliate permitted by Section 6.2(a), for which such consent shall not be unreasonably withheld), and without executing (i) a copy of this Agreement or amendment hereto, and (ii) a Subscription Agreement in form and substance satisfactory to the General Partner in its sole discretion. Any substitute Limited Partner admitted to the Partnership with the consent of the General Partner will succeed to all rights and be subject to all the obligations of the transferring or assigning Limited Partner with respect to the interest to which such Limited Partner was substituted, but any transferee or assignee that does not become a substitute Limited Partner shall have the right to receive allocations pursuant to Section 2.3 and distributions pursuant to Article III and Article VIII, but shall have no other rights under this Agreement. ",
							"entities": [{
								"id": "585",
								"entityType": "ORGANIZATION",
								"end": 651,
								"start": 636,
								"value": "General Partner"
							}, {
								"id": "585",
								"entityType": "ORGANIZATION",
								"end": 706,
								"start": 691,
								"value": "Limited Partner"
							}, {
								"id": "585",
								"entityType": "ORGANIZATION",
								"end": 774,
								"start": 759,
								"value": "General Partner"
							}, {
								"id": "585",
								"entityType": "ORGANIZATION",
								"end": 888,
								"start": 873,
								"value": "Limited Partner"
							}, {
								"id": "585",
								"entityType": "ORGANIZATION",
								"end": 947,
								"start": 932,
								"value": "Limited Partner"
							}]
						}, {
							"id": "586",
							"text": "(f) The transferor and transferee of any Limited Partner’s interest shall be jointly and severally obligated to reimburse the General Partner and the Partnership for all reasonable expenses (including attorneys’ fees and expenses) of any transfer or proposed transfer of a Limited Partner’s interest, whether or not consummated. ",
							"entities": [{
								"id": "586",
								"entityType": "ORGANIZATION",
								"end": 141,
								"start": 126,
								"value": "General Partner"
							}, {
								"id": "586",
								"entityType": "ORGANIZATION",
								"end": 288,
								"start": 273,
								"value": "Limited Partner"
							}]
						}, {
							"id": "587",
							"text": "(g) The transferee of any Limited Partner’s interest shall be treated as having made all of the Capital Contributions made by, and received all of the distributions received by, the transferor of such interest. ",
							"entities": []
						}, {
							"id": "588",
							"text": "(h) Anything in this Agreement to the contrary notwithstanding, no admission (or purported admission) of a Partner, and no transfer (or purported transfer) of all or any part of a",
							"entities": []
						}, {
							"id": "589",
							"text": "",
							"entities": []
						}, {
							"id": "590",
							"text": "",
							"entities": []
						}, {
							"id": "591",
							"text": "704094543 -49- ",
							"entities": []
						}, {
							"id": "592",
							"text": "Partner’s interest in the Partnership (or any economic interest therein) whether to another Partner or to a person who is not a Partner, shall be effective, and any such admission or transfer (or purported admission or transfer) shall be void ab initio, and no person shall otherwise become a Partner if after such admission or transfer (or purported admission or transfer) the Partnership would have more than one hundred (100) Partners, unless the General Partner determines in its sole discretion that the Partnership will meet the requirements set forth in Treasury Regulation § 1.7704-1(j)(1) for the taxable year of such transfer and all subsequent taxable years. In determining whether the Partnership will have more than one hundred (100) Partners for purposes of this Section 6.2(h), each person indirectly owning an interest in the Partnership through a partnership (including any entity treated as a partnership for federal income tax purposes), a grantor trust or an S corporation (each such entity a “flow-through entity”) shall be treated as a Partner unless the General Partner determines in its sole discretion, after consulting with qualified tax counsel, that less than substantially all of the value of the beneficial owner’s interest in the flow-through entity is attributable to the flow-through entity’s interest (direct or indirect) in the Partnership. ",
							"entities": [{
								"id": "592",
								"entityType": "ORGANIZATION",
								"end": 465,
								"start": 450,
								"value": "General Partner"
							}, {
								"id": "592",
								"entityType": "ORGANIZATION",
								"end": 569,
								"start": 561,
								"value": "Treasury"
							}, {
								"id": "592",
								"entityType": "ORGANIZATION",
								"end": 1092,
								"start": 1077,
								"value": "General Partner"
							}]
						}, {
							"id": "593",
							"text": "(i) Anything in this Agreement to the contrary notwithstanding, no admission (or purported admission) of a Partner, and no transfer (or purported transfer) of all or any part of a Partner’s interest in the Partnership (or any economic interest therein) whether to another Partner or to a person who is not a Partner, shall be effective, and any such admission or transfer (or purported admission or transfer) shall be void ab initio, and no person shall otherwise become a Partner if after such admission or transfer (or purported admission or transfer) the Partnership would be subject to the registration or reporting requirements of the Investment Company Act or in the General Partner’s good faith determination, such transfer would cause the assets of the Partnership to be deemed Plan Assets. Each transferee that is or will be a Benefit Plan Investor as of the transfer effective date shall so notify the General Partner in writing prior to the transfer effective date. Any transferee that has not so indicated in writing its status as a Benefit Plan Investor hereby represents, warrants and covenants that it is not, it is not acting on behalf of and, so long as it holds an interest in the Partnership, it will not be and will not be acting on behalf of a Benefit Plan Investor. ",
							"entities": [{
								"id": "593",
								"entityType": "ORGANIZATION",
								"end": 187,
								"start": 180,
								"value": "Partner"
							}]
						}, {
							"id": "594",
							"text": "Section 6.3 No Withdrawal. Subject to the provisions of Sections 6.2, 6.6 and 6.11, no Limited Partner may withdraw as a Partner of the Partnership, nor may a Limited Partner be required to withdraw, nor may a Limited Partner borrow or withdraw any portion of its Capital Account from the Partnership. ",
							"entities": []
						}, {
							"id": "595",
							"text": "Section 6.4 No Termination. The substitution, death, insanity, dissolution (whether voluntary or involuntary) or bankruptcy of a Limited Partner will not affect the existence of the Partnership, and the Partnership will continue for the term of this Agreement until its existence is terminated as provided herein. ",
							"entities": []
						}, {
							"id": "596",
							"text": "Section 6.5 Subsequent Limited Partners. ",
							"entities": []
						}, {
							"id": "597",
							"text": "(a) The General Partner may accept additional Limited Partners (“Additional Limited Partners”) subsequent to the First Closing up to and including the date twelve (12) months after the First Closing; provided, however, that no Additional Limited Partner will be admitted to the Partnership if, as a result of such admission, the aggregate Commitments to the Partnership and",
							"entities": [{
								"id": "597",
								"entityType": "ORGANIZATION",
								"end": 23,
								"start": 8,
								"value": "General Partner"
							}, {
								"id": "597",
								"entityType": "ORGANIZATION",
								"end": 62,
								"start": 46,
								"value": "Limited Partners"
							}]
						}, {
							"id": "598",
							"text": "",
							"entities": []
						}, {
							"id": "599",
							"text": "",
							"entities": []
						}, {
							"id": "600",
							"text": "704094543 -50- ",
							"entities": []
						}, {
							"id": "601",
							"text": "commitments to Parallel Vehicles exceed $3.2 billion. Any Additional Limited Partners will be treated as having been a party to this Agreement and have made its Commitment as of the First Closing for all purposes, and such Additional Limited Partners will be required to bear a portion of the Management Fee, Organizational Expenses and Partnership Expenses equivalent to that which would have been borne by such Additional Limited Partner had such Limited Partner been a Limited Partner from the First Closing. ",
							"entities": []
						}, {
							"id": "602",
							"text": "(b) Such Additional Limited Partners shall contribute to the Partnership, on the date of their admission to the Partnership, an amount of their Commitments equal to their portion (based on the Commitments of all Partners) determined pursuant to this Section 6.5(b). The initial drawdown for each Limited Partner will include such Limited Partner’s proportionate share of (i) Management Fees retroactive to the Effective Date (as adjusted pursuant to Section 4.1(c)); (ii) Placement Fees, if any, retroactive to the Effective Date, (iii) Organizational Expenses (to the extent provided in Section 4.2) and Partnership Expenses attributable to the Partnership; and (iv) Capital Contributions made at or prior to such drawdown to fund any Portfolio Investment, other than Capital Contributions that have been returned prior to such drawdown to the Partners who made such Capital Contributions. In addition, Additional Limited Partners will be required to pay to the Partnership, with respect to the period from the Effective Date to the date of their admission to the Partnership: (A) interest at the prime or base rate announced, from time to time, by Citibank N.A. plus 2% on their proportionate share of Management Fees retroactive to the Effective Date (as adjusted pursuant to Section 4.1(c)); (B) interest at the prime or base rate plus 2% on their proportionate share of Organizational Expenses (to the extent provided in Section 4.2), Placement Fees and Partnership Expenses attributable to the Partnership; and (C) interest at the prime or base rate plus 2% on their proportionate share of the Capital Contributions made prior to such drawdown, to fund any Portfolio Investment; provided, however, that interest payable pursuant to sub-clauses (B) and (C) above shall be reduced, but not below zero, by each Additional Limited Partner’s pro rata portion (based on Commitments of all Partners) of all distributions made prior to the date of such drawdown to all Partners pursuant to Sections 3.3(a)(i), 3.3(a)(ii)(A) and 3.3(a)(iii)(A), to the extent such distributions exceed the aggregate amount of Capital Contributions to make Portfolio Investments that have been Disposed of prior to the date of such drawdown. Any amounts paid to the Partnership under clause (i) and subclause (A) above will be paid to the Manager (and to the extent the General Partner has waived all or part of such Management Fees, such Waived Fee Amount shall not be paid to the Manager or the General Partner but will instead increase the Unapplied Waived Fee Amounts). Any amounts paid to the Partnership under clause (ii) above shall be paid to the applicable placement agency. Any amounts paid to the Partnership under clauses (iii) and (iv) above, and subclauses (B) and (C) above shall be distributed to the Partners that participated in the earlier Capital Contributions based upon their relative shares of each earlier Capital Contribution, and any such returned Capital Contributions (but not amounts referred to in subclauses (B) and (C) above) may be recalled by the General Partner pursuant to Section 2.2(a) above as if such returned Capital Contributions had not previously been called; provided, that if the General Partner determines in good faith that there will be a Capital Call within 30 days after the contribution of such amounts to the Partnership, the General Partner may, in its discretion, retain such amounts and reduce the Capital Call with respect to such other Partners (in which event the Funded Commitments of such other Partners shall be increased by their pro rata share of that portion of such amounts referred to in subclauses (B) and (C) above).",
							"entities": [{
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 311,
								"start": 296,
								"value": "Limited Partner"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 345,
								"start": 330,
								"value": "Limited Partner"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 889,
								"start": 868,
								"value": "Capital Contributions"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 931,
								"start": 904,
								"value": "Additional Limited Partners"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 1163,
								"start": 1150,
								"value": "Citibank N.A."
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 1621,
								"start": 1600,
								"value": "Capital Contributions"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 2364,
								"start": 2349,
								"value": "General Partner"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 2929,
								"start": 2909,
								"value": "Capital Contribution"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 3150,
								"start": 3129,
								"value": "Capital Contributions"
							}, {
								"id": "602",
								"entityType": "ORGANIZATION",
								"end": 3220,
								"start": 3205,
								"value": "General Partner"
							}]
						}, {
							"id": "603",
							"text": "",
							"entities": []
						}, {
							"id": "604",
							"text": "",
							"entities": []
						}, {
							"id": "605",
							"text": "704094543 -51- ",
							"entities": []
						}, {
							"id": "606",
							"text": "For purposes of this Section 6.5, a Limited Partner that increases its Commitment shall be treated as an Additional Limited Partner with respect to the amount by which its Commitment increased. ",
							"entities": []
						}, {
							"id": "607",
							"text": "(c) Each Additional Limited Partner admitted to the Partnership pursuant to this Section 6.5 shall be treated as purchasing a pro rata share of the interests in the Partnership of the Partners to whom amounts are distributed pursuant to this Section 6.5 (“Existing Partners”), and a portion of the Capital Account of each Existing Partner shall be allocated to such Additional Limited Partner so that after such allocation the Capital Accounts and Capital Contributions of such Additional Limited Partner and Existing Partners attributable to each Portfolio Investment and to the payment of Organizational Expenses, Management Fees, Placement Fees and Partnership Expenses are as equal as practicable to what their Capital Accounts and Capital Contributions attributable to each Portfolio Investment and to the payment of Organizational Expenses, Management Fees, Placement Fees and Partnership Expenses would have been if such Additional Limited Partner had been admitted to the Partnership at the First Closing. ",
							"entities": []
						}, {
							"id": "608",
							"text": "(d) If the admission of Additional Limited Partners to the Partnership or of investors in Parallel Vehicles or the purchase by a limited partner in a Parallel Vehicle of a portion of the interest of a Defaulting Partner pursuant to Section 6.11 would result in the Partnership and the Parallel Vehicles not having reimbursed the General Partner and its Affiliates for Organizational Expenses in the proportions contemplated by Section 4.2 hereof or would result in the Partnership and the Parallel Vehicles not owning investments in Portfolio Companies in the proportions contemplated by Sections 5.14 or 5.15 hereof, the General Partner shall have the authority: ",
							"entities": [{
								"id": "608",
								"entityType": "ORGANIZATION",
								"end": 344,
								"start": 329,
								"value": "General Partner"
							}, {
								"id": "608",
								"entityType": "ORGANIZATION",
								"end": 637,
								"start": 622,
								"value": "General Partner"
							}]
						}, {
							"id": "609",
							"text": "(i) to effect transfers of funds and of investments in Portfolio Companies to Parallel Vehicles and to effect transfers of funds and portfolio investments of Parallel Vehicles to the Partnership for the purpose of reallocating the ownership of investments in Portfolio Companies and the reimbursements of Organizational Expenses by the Partnership and the Parallel Vehicles, and ",
							"entities": []
						}, {
							"id": "610",
							"text": "(ii) to make allocations to, or to reallocate, the Capital Accounts and Capital Contributions attributable to each Portfolio Investment and to the payment of Organizational Expenses, Management Fees, Placement Fees and Partnership Expenses of the Existing Partners and the Additional Limited Partners in the manner contemplated by the previous provisions of this Section 6.5, ",
							"entities": [{
								"id": "610",
								"entityType": "ORGANIZATION",
								"end": 300,
								"start": 273,
								"value": "Additional Limited Partners"
							}]
						}, {
							"id": "611",
							"text": "in each case to achieve allocations and distributions as close as practicable to those that would have been obtained had such Additional Limited Partners or investors been admitted to the Partnership or to Parallel Vehicles, respectively, at the First Closing or had such purchased interest of a Defaulting Partner been issued to the purchaser at the First Closing. Any distribution of cash made by the Partnership in connection with a reallocation under this Section 6.5(d) representing a return of Capital Contributions may be recalled by the General Partner pursuant to Section 2.2(a) as if such returned Capital Contributions had not previously been called. Notwithstanding the foregoing, the General Partner may make any equitable adjustments to such required capital contributions and payments (including the interest component) as it believes would be fair and equitable to account for a material change in value of a pre-existing Portfolio Investment; provided that no Limited Partner will be permitted to acquire an indirect",
							"entities": []
						}, {
							"id": "612",
							"text": "",
							"entities": []
						}, {
							"id": "613",
							"text": "",
							"entities": []
						}, {
							"id": "614",
							"text": "704094543 -52- ",
							"entities": []
						}, {
							"id": "615",
							"text": "interest in a pre-existing Portfolio Investment through the Partnership at any subsequent closing at a discount to the original acquisition cost of such Portfolio Investment unless such action is consented to by either (x) a Majority In Interest of the Limited Partners that have an interest in such Portfolio Investment through the Partnership or (y) the Advisory Committee. ",
							"entities": [{
								"id": "615",
								"entityType": "ORGANIZATION",
								"end": 269,
								"start": 253,
								"value": "Limited Partners"
							}, {
								"id": "615",
								"entityType": "ORGANIZATION",
								"end": 374,
								"start": 356,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "616",
							"text": "Section 6.6 Regulatory Matters. ",
							"entities": []
						}, {
							"id": "617",
							"text": "(a) Each Limited Partner acknowledges that the assets of the Partnership are not intended to constitute plan assets of such Limited Partner for purposes of any applicable non- U.S., state or local law governing the investment and management of the assets of that Limited Partner, and that, as a result, none of the Partnership, the General Partner, the Manager or any of their Affiliates intend to be acting as a fiduciary within the meaning of any applicable non-U.S., state or local law relating to governmental plans or foreign plans with respect to such Limited Partner or the Partnership assets; provided, however, that this provision is not intended to negate the fiduciary duties imposed upon a general partner under the Delaware Partnership Act. ",
							"entities": [{
								"id": "617",
								"entityType": "LOCATION",
								"end": 180,
								"start": 176,
								"value": "U.S."
							}, {
								"id": "617",
								"entityType": "ORGANIZATION",
								"end": 278,
								"start": 263,
								"value": "Limited Partner"
							}]
						}, {
							"id": "618",
							"text": "(b) In the event that the General Partner determines in good faith that (i) the investment in the Partnership by a Limited Partner which is a governmental plan, foreign plan or other regulated entity (each, a “Regulated Investor”) is reasonably likely to result in (A) any violation of any provision of law, rule or regulation applicable to such Regulated Investor, (B) the treatment of the assets of the Partnership as assets of such Regulated Investor or (C) the treatment of the Partnership, the General Partner or the Manager as a fiduciary under such provisions of law applicable to such Regulated Investor and (ii) if, in the reasonable judgment of the General Partner, any of the foregoing conditions result in or are reasonably likely to result in any adverse consequences to the Partnership, the General Partner or the Manager (both of (i) and (ii), a “Regulatory Issue”), then the General Partner, in its sole discretion, (x) may require that such Regulated Investor provide (at such Regulated Investor’s expense) an opinion of counsel (including any in-house counsel of such Regulated Investor), reasonably acceptable to the General Partner in form and substance, that no Regulatory Issue exists or (y) in the event such an opinion is not delivered within a reasonable time after being requested, may (1) in accordance with Section 12.1 amend this Agreement to cure any illegality or other adverse consequences to the Partnership; (2) amend, terminate or restructure any then existing or contemplated arrangements to cure any illegality or other adverse consequences to the Partnership; (3) redeem such Regulated Investor’s interest in the Partnership, in whole or in part, in a manner consistent with the provisions of Section 6.6(d); (4) force the sale of all or any portion of such Regulated Investor’s interest in the Partnership to one or more Limited Partners at the Redemption Value; or (5) terminate the Partnership and wind up its affairs in accordance with Sections 8.2 and 8.3. Further, if, in the opinion of counsel for a Limited Partner that is a Regulated Investor (which counsel and opinion shall be reasonably acceptable to the General Partner), there is a material likelihood that if such Regulated Investor were to continue as a Limited Partner of the Partnership, such Regulated Investor would be in violation of a law applicable to such Regulated Investor (other than as a result of a Plan Asset Event), such Regulated Investor may by notice to the General Partner request that the Partnership redeem such Regulated Investor’s interest in the Partnership, in whole or in part, and upon receipt of such notice the General Partner shall cause the Partnership to redeem the interests of such Limited Partner’s interest in the Partnership in accordance with Sections 6.6(c) and (d).",
							"entities": [{
								"id": "618",
								"entityType": "ORGANIZATION",
								"end": 41,
								"start": 26,
								"value": "General Partner"
							}, {
								"id": "618",
								"entityType": "ORGANIZATION",
								"end": 1151,
								"start": 1136,
								"value": "General Partner"
							}, {
								"id": "618",
								"entityType": "ORGANIZATION",
								"end": 2495,
								"start": 2480,
								"value": "General Partner"
							}, {
								"id": "618",
								"entityType": "ORGANIZATION",
								"end": 2735,
								"start": 2720,
								"value": "Limited Partner"
							}]
						}, {
							"id": "619",
							"text": "",
							"entities": []
						}, {
							"id": "620",
							"text": "",
							"entities": []
						}, {
							"id": "621",
							"text": "704094543 -53- ",
							"entities": []
						}, {
							"id": "622",
							"text": "(c) Effective upon the date specified by the General Partner in the notice sent to a Limited Partner, notifying such Limited Partner of the General Partner’s determination to completely or partially redeem such Limited Partner’s interest in the Partnership pursuant to Section 5.6(e) or Section 6.6(b) or the date the General Partner receives the notice described in Section 6.6(b) (the “Redemption Effective Date”), such Limited Partner (the “Redeemed Limited Partner”) shall cease to be a Partner of the Partnership for purposes of the withdrawn portion of its interest only and, in addition to its right to receive payment for its withdrawn interest in the Partnership as provided in Section 6.6(d), shall continue to be entitled, with respect to its remaining interest only, if any, to the rights of a Partner under this Agreement (including, without limitation, the right to have any allocations made to its Capital Account (as such may be adjusted) pursuant to Article II, the right to receive distributions pursuant to Article III and upon dissolution of the Partnership pursuant to Article VIII and the right to vote on matters as provided in this Agreement). ",
							"entities": [{
								"id": "622",
								"entityType": "ORGANIZATION",
								"end": 155,
								"start": 140,
								"value": "General Partner"
							}, {
								"id": "622",
								"entityType": "ORGANIZATION",
								"end": 226,
								"start": 211,
								"value": "Limited Partner"
							}]
						}, {
							"id": "623",
							"text": "(d) In connection with a redemption pursuant to Section 6.6(b)(y)(3), the Redemption Value shall be paid by the Partnership to such Redeemed Limited Partner in cash by paying to such Limited Partner a “pro rata portion” of each distribution payable to the Redeemed Limited Partners until the Redemption Value has been fully paid; provided, that the General Partner shall be under no obligation to sell, finance or refinance any Partnership property or assets or to take any other action to effect such redemption which, in the judgment of the General Partner, may affect adversely the Partnership (taking into account the liquidity needs of the Partnership) or any Partner. For purposes of the preceding sentence, a Redeemed Limited Partner’s “pro rata portion” of a distribution shall be an amount equal to the amount such Redeemed Limited Partner would have received in respect of the redeemed interest had such interest not been redeemed. ",
							"entities": [{
								"id": "623",
								"entityType": "ORGANIZATION",
								"end": 281,
								"start": 256,
								"value": "Redeemed Limited Partners"
							}, {
								"id": "623",
								"entityType": "ORGANIZATION",
								"end": 308,
								"start": 292,
								"value": "Redemption Value"
							}]
						}, {
							"id": "624",
							"text": "Section 6.7 Indemnification and Reimbursement for Payments on Behalf of a Partner/Partner Clawback. ",
							"entities": []
						}, {
							"id": "625",
							"text": "(a) If the Partnership is obligated to pay any amount to a governmental agency or to any other person (or otherwise makes a payment) in respect of any tax because of a Partner’s status or otherwise specifically attributable to a Partner (including, without limitation, federal withholding taxes with respect to foreign partners, state personal property taxes, state unincorporated business taxes, etc.), then such Partner (the “Indemnifying Partner”) shall indemnify the Partnership in full for the entire amount paid (including, without limitation, any interest, and any penalties and expenses associated with such payment to the extent such penalties and expenses are attributable to such Partner’s actions or failure to act); provided, however that such Partner shall not be obligated to indemnify the Partnership with respect to any such interest, penalties and expenses incurred by the Partnership arising from the General Partner’s gross negligence or willful misconduct. At the option of the General Partner, the amount to be indemnified may be charged against the Capital Account of the Indemnifying Partner, and, at the option of the General Partner, either: ",
							"entities": [{
								"id": "625",
								"entityType": "ORGANIZATION",
								"end": 1014,
								"start": 999,
								"value": "General Partner"
							}]
						}, {
							"id": "626",
							"text": "(i) promptly upon notification of an obligation to indemnify the Partnership, the Indemnifying Partner shall make a cash payment to the Partnership equal to the full amount to be indemnified (and the amount paid shall be added to the Indemnifying Partner’s Capital Account but shall not be deemed a Capital Contribution hereunder), or",
							"entities": []
						}, {
							"id": "627",
							"text": "",
							"entities": []
						}, {
							"id": "628",
							"text": "",
							"entities": []
						}, {
							"id": "629",
							"text": "704094543 -54- ",
							"entities": []
						}, {
							"id": "630",
							"text": "(ii) the Partnership shall reduce subsequent distributions which would otherwise be made to the Indemnifying Partner until the Partnership has recovered the amount to be indemnified (provided, that the amount of such reduction shall be deemed to have been distributed for all purposes of this Agreement, but such deemed distribution shall not further reduce the Indemnifying Partner’s Capital Account). If the General Partner reasonably expects that subsequent distributions to such Partner will be sufficient to satisfy such Partner’s obligation to pay such amount, the General Partner shall not seek a payment pursuant to clause (i) above, until the General Partner reasonably believes such distributions will not be sufficient. ",
							"entities": [{
								"id": "630",
								"entityType": "ORGANIZATION",
								"end": 425,
								"start": 410,
								"value": "General Partner"
							}, {
								"id": "630",
								"entityType": "ORGANIZATION",
								"end": 586,
								"start": 571,
								"value": "General Partner"
							}]
						}, {
							"id": "631",
							"text": "(b) A Partner’s obligation to make contributions to the Partnership under this Section 6.7 shall, subject to the limitations set forth in Section 6.7(c), survive the termination, dissolution, liquidation and winding up of the Partnership until the second (2nd) anniversary of the date of the final distribution made in connection with the complete liquidation of the assets of the Partnership and, for purposes of this Section 6.7, the Partnership shall be treated as continuing in existence. The Partnership may pursue and enforce all rights and remedies it may have against each Partner under this Section 6.7, including instituting a lawsuit to collect such contribution with interest equal to the prime or base rate then in effect (as announced by Citibank, N.A., New York, New York) plus six percentage points per annum (but not in excess of the highest rate per annum permitted by law). ",
							"entities": [{
								"id": "631",
								"entityType": "ORGANIZATION",
								"end": 760,
								"start": 752,
								"value": "Citibank"
							}, {
								"id": "631",
								"entityType": "LOCATION",
								"end": 776,
								"start": 768,
								"value": "New York"
							}, {
								"id": "631",
								"entityType": "LOCATION",
								"end": 786,
								"start": 778,
								"value": "New York"
							}]
						}, {
							"id": "632",
							"text": "(c) At any time and from time to time prior to the second (2nd) anniversary of the date of receipt thereof, the General Partner may require each Partner to return distributions (including distributions made in connection with the complete liquidation of the assets of the Partnership) to the Partnership in an amount sufficient to satisfy all or any portion of (i) such Partner’s indemnification obligations pursuant to Section 6.7(a), or (ii) any liability which the Partnership would be required by this Agreement or otherwise to pay if it had adequate funds, including but not limited to (A) the expenses of investigating, defending or handling any pending or threatened litigation or claim arising out of the Partnership’s activities, investments or business, (B) the amount of any judgment or settlement arising out of such litigation or claim, and (C) the Partnership’s obligation to indemnify any Partner or other Person pursuant to Section 5.11 (a “Liability”), whether such obligations arise before or after the last day of the Partnership or, with respect to any Partner, before or after such Partner’s withdrawal from the Partnership; provided, that (x) each Partner will return distributions in respect of its share of any such indemnification payment in proportion to the aggregate amount of distributions received by such Partner that have not previously been returned to the Partnership by such Partner pursuant to this Section 6.7(c); and (y) subject to Section 8.3(c), each Partner’s maximum liability under this Section 6.7 is limited to an amount equal to the lesser of (1) 25% of such Partner’s Commitment, and (2) 331/3% of the aggregate amount of distributions received by such Partner as of such date. Any distributions returned pursuant to this Section 6.7(c) shall not be treated as Capital Contributions, but shall be treated as returns of distributions in making subsequent distributions pursuant to Section 3.3 and in determining the amount that the General Partner is required to contribute to the Partnership pursuant to Section 8.3(c) (other than for purposes of computing a Partner’s Preferred Amount, which shall be computed based on actual Capital Contributions made and distributions received). Nothing in this Section 6.7(c), express or implied, is intended or shall be construed to give any person other than the Partnership or the Partners any legal or equitable right, remedy or claim under or in respect of this Section 6.7(c) or any provision contained herein. If a Limited Partner returns an amount to the Partnership under Section 6.7(c)(ii) after",
							"entities": [{
								"id": "632",
								"entityType": "ORGANIZATION",
								"end": 1177,
								"start": 1170,
								"value": "Partner"
							}, {
								"id": "632",
								"entityType": "ORGANIZATION",
								"end": 1498,
								"start": 1491,
								"value": "Partner"
							}, {
								"id": "632",
								"entityType": "ORGANIZATION",
								"end": 2377,
								"start": 2369,
								"value": "Partners"
							}]
						}, {
							"id": "633",
							"text": "",
							"entities": []
						}, {
							"id": "634",
							"text": "",
							"entities": []
						}, {
							"id": "635",
							"text": "704094543 -55- ",
							"entities": []
						}, {
							"id": "636",
							"text": "the final distribution of the assets of the Partnership, the amount the General Partner is required to contribute to the Partnership with respect to such Limited Partner pursuant to Section 8.3(c) shall be re-determined, taking into account the return of such amount to the Partnership. The provisions of Section 8.3(c) shall apply, and the payments required thereby shall be made, in the same manner as if the return of such amount to the Partnership had occurred prior to the final distribution of the assets of the Partnership. ",
							"entities": []
						}, {
							"id": "637",
							"text": "Section 6.8 Section 754 Election. Upon the written request of a Majority in Interest of the Limited Partners, that an election provided for in Section 754 of the Code be made, the General Partner shall, if then permitted by applicable law, make such election. ",
							"entities": []
						}, {
							"id": "638",
							"text": "Section 6.9 Non-Voting Interests; BHCA Partners. ",
							"entities": [{
								"id": "638",
								"entityType": "ORGANIZATION",
								"end": 47,
								"start": 34,
								"value": "BHCA Partners"
							}]
						}, {
							"id": "639",
							"text": "(a) Any Limited Partner may, upon notice to the General Partner, elect to hold all or any fraction of such Limited Partner’s interest in the Partnership as a Non-Voting Interest, in which case such Limited Partner shall not be entitled to vote or otherwise participate in any consent of the Limited Partners with respect to the portion of its interest which is held as a Non- Voting Interest (and such Non-Voting Interest shall not be counted in determining the giving or withholding of any such consent or whether the requisite percentage of the Limited Partners or Partners, as the case may be, have consented to, approved, adopted or taken any other action hereunder). Except as provided in this Section 6.9, an interest held as a Non-Voting Interest shall be identical in all regards to all other interests held by Limited Partners. Any such election shall be irrevocable and shall bind the assignees of such Limited Partner’s interest. ",
							"entities": [{
								"id": "639",
								"entityType": "ORGANIZATION",
								"end": 122,
								"start": 107,
								"value": "Limited Partner"
							}, {
								"id": "639",
								"entityType": "ORGANIZATION",
								"end": 835,
								"start": 819,
								"value": "Limited Partners"
							}]
						}, {
							"id": "640",
							"text": "(b) Any interest in the Partnership held for its own account by a BHCA Partner, that is determined at the time of admission of such BHCA Partner, the complete or partial withdrawal of another Limited Partner or any other adjustment of the interests of the Partners pursuant to this Agreement to be in excess of 4.99% (or such other amount as may be permitted by applicable regulation to be held by a BHCA Partner as voting securities, but not including Section 4(k) of the BHC Act or any successor provision thereto) of the interests of the Limited Partners, excluding for purposes of calculating this percentage portions of any other interests that are Non- Voting Interests, shall be a Non-Voting Interest (whether or not subsequently transferred in whole or in part to any other person) and shall not be included in determining whether the requisite percentage of the Partners have consented to, approved, adopted or taken any action hereunder; provided, that such Non-Voting Interest shall be permitted to vote on any proposal to continue the business of the Partnership under Section 8.2(a) but not on the selection of a General Partner pursuant to Section 8.2(a). Each BHCA Partner hereby further irrevocably waives its corresponding right to vote for a successor general partner under Section 17-801 of the Delaware Partnership Act with respect to any Non-Voting Interest, which waiver shall be binding upon such BHCA Partner and any entity which succeeds to its interest. Upon the occurrence of a subsequent closing or any event specified in the second preceding sentence, a recalculation of the interest held by all BHCA Partners shall be made, and only that portion of the total interest held by each BHCA Partner that is determined as of the date of such recalculation to be in excess of 4.99% (or such other amount) of the interests of the Limited Partners, excluding Non-Voting Interests as of such date, shall be a Non-Voting Interest.",
							"entities": [{
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 264,
								"start": 256,
								"value": "Partners"
							}, {
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 557,
								"start": 541,
								"value": "Limited Partners"
							}, {
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 879,
								"start": 871,
								"value": "Partners"
							}, {
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 1638,
								"start": 1625,
								"value": "BHCA Partners"
							}, {
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 1723,
								"start": 1711,
								"value": "BHCA Partner"
							}, {
								"id": "640",
								"entityType": "ORGANIZATION",
								"end": 1868,
								"start": 1852,
								"value": "Limited Partners"
							}]
						}, {
							"id": "641",
							"text": "",
							"entities": []
						}, {
							"id": "642",
							"text": "",
							"entities": []
						}, {
							"id": "643",
							"text": "704094543 -56- ",
							"entities": []
						}, {
							"id": "644",
							"text": "Section 6.10 Excused/Excluded Investments. In the event that (a) the Partnership makes or proposes to make a Portfolio Investment which the General Partner reasonably determines could result in a material violation by any Limited Partner (or any of its Affiliates) of any law, regulation, order, decree or judgment of any court or governmental agency applicable to such Limited Partner (or any of its Affiliates), or (b) the General Partner reasonably determines that a Limited Partner’s participation in a proposed Portfolio Investment of the Partnership could have a material adverse effect on the Partnership, the entity in which such investment is to be made, such Limited Partner, or the General Partner and its Affiliates, the General Partner may, in its sole discretion, and subject to Section 5.6(a), (x) reduce or eliminate the interest of the such Limited Partner with respect to such Portfolio Investment and the distributions with respect thereto (provided that any Capital Contributions made by such Limited Partner with respect to such Portfolio Investment shall be promptly returned to such Limited Partner) and correspondingly increase the interest of the other Limited Partners with respect to such Portfolio Investment (provided, however, that no Partner shall be obligated as a result of this Section 6.10, without its consent, to contribute an amount in excess of (A) 125% of the aggregate Capital Contributions that would have been required from such Partner in respect of a Portfolio Investment prior to taking into account such excuse or exclusion or (B) its Unfunded Commitment) and/or (y) increase the interest of such Limited Partner in future Portfolio Investments of the Partnership and such Limited Partner’s interest in the distributions with respect thereto and correspondingly decrease the interests of the other Limited Partners in such Portfolio Investments. All determinations necessary to reflect the operation of this Section 6.10 and not otherwise explicitly provided for in this Section 6.10 shall be made on an equitable basis as determined by the General Partner in good faith, whose decision thereon shall be final and binding on all Limited Partners. Determinations by the General Partner pursuant to clauses (a) and (b) above may be made on its own initiative or after considering the request of any Limited Partner, including any supporting legal analysis or other documentation submitted by such Limited Partner (including any such supporting legal analysis or other documentation prepared by in-house counsel of such Limited Partner). ",
							"entities": [{
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 708,
								"start": 693,
								"value": "General Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 748,
								"start": 733,
								"value": "General Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 873,
								"start": 858,
								"value": "Limited Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 1194,
								"start": 1178,
								"value": "Limited Partners"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 1659,
								"start": 1644,
								"value": "Limited Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 1735,
								"start": 1720,
								"value": "Limited Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 2103,
								"start": 2088,
								"value": "General Partner"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 2192,
								"start": 2176,
								"value": "Limited Partners"
							}, {
								"id": "644",
								"entityType": "ORGANIZATION",
								"end": 2231,
								"start": 2216,
								"value": "General Partner"
							}]
						}, {
							"id": "645",
							"text": "Section 6.11 Limited Partner’s Default on Commitment. ",
							"entities": []
						}, {
							"id": "646",
							"text": "(a) If any Limited Partner fails to make full payment of any portion of its Commitment when due (a “Defaulting Partner”) and such failure is not cured within five Business Days after receipt by such Limited Partner of written notice from the General Partner with respect to such failure to pay, the General Partner shall promptly notify the Advisory Committee in writing of any such uncured default and may in its discretion and subject to Section 5.6(a), undertake any one or more of the following steps: ",
							"entities": [{
								"id": "646",
								"entityType": "ORGANIZATION",
								"end": 314,
								"start": 299,
								"value": "General Partner"
							}, {
								"id": "646",
								"entityType": "ORGANIZATION",
								"end": 359,
								"start": 341,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "647",
							"text": "(i) The General Partner may require non-Defaulting Partners to make additional Capital Contributions, pro rata based on their respective Commitments, in an aggregate amount equal to the shortfall created by such default (but not to exceed each Partner’s Unfunded Commitment); provided, however, that no Partner shall be obligated as a result of this Section 6.11, without its consent, to contribute an amount in excess of 125% of the aggregate Capital Contributions that would have been required from such Partner in respect of a Portfolio Investment prior to taking into account such default; provided, further, that the foregoing limitation shall not apply with respect to any Capital Call Notice, the proceeds of which are to be used to repay Obligations with respect to any Bridge Leveraging/Credit Support Facility.",
							"entities": [{
								"id": "647",
								"entityType": "ORGANIZATION",
								"end": 465,
								"start": 444,
								"value": "Capital Contributions"
							}]
						}, {
							"id": "648",
							"text": "",
							"entities": []
						}, {
							"id": "649",
							"text": "",
							"entities": []
						}, {
							"id": "650",
							"text": "704094543 -57- ",
							"entities": []
						}, {
							"id": "651",
							"text": "(ii) The General Partner may assist the Defaulting Partner in finding a buyer for the Defaulting Partner’s Partnership interest (provided, that the General Partner will have no obligation to contact any particular Limited Partner or other person with regard to such sale). ",
							"entities": [{
								"id": "651",
								"entityType": "ORGANIZATION",
								"end": 163,
								"start": 148,
								"value": "General Partner"
							}]
						}, {
							"id": "652",
							"text": "(iii) The Partnership may pursue and enforce all rights and remedies the Partnership may have against such Defaulting Partner with respect thereto, including a lawsuit to collect the overdue portion of the Commitment and any other amounts due the Partnership or General Partner hereunder, with interest at a rate equal to the prime or base rate then in effect (as announced by Citibank, N.A., New York, New York) plus six percentage points (but not in excess of the highest rate per annum permitted by law). ",
							"entities": [{
								"id": "652",
								"entityType": "ORGANIZATION",
								"end": 385,
								"start": 377,
								"value": "Citibank"
							}, {
								"id": "652",
								"entityType": "LOCATION",
								"end": 401,
								"start": 393,
								"value": "New York"
							}, {
								"id": "652",
								"entityType": "LOCATION",
								"end": 411,
								"start": 403,
								"value": "New York"
							}]
						}, {
							"id": "653",
							"text": "(iv) The General Partner may offer the Defaulting Partner’s interest to the Partners and the partners in the Parallel Vehicles (other than any Defaulting Partners) pro rata in accordance with their Commitments and their capital commitments to Parallel Vehicles on the terms set forth below. If any Partner or partner in a Parallel Vehicle does not elect to purchase the entire interest offered to it, the remaining interest allocable to the Partners and the partners in the Parallel Vehicles will be reoffered pro rata to the Partners and the partners in Parallel Vehicles who have purchased the entire interest offered to them until either all of such interest is acquired or no Partner or partner in a Parallel Vehicle wishes to make a further investment. At the closing of such purchase (on a date and at a place designated by the General Partner), each purchasing Partner shall (A) deliver a non-interest bearing, non-recourse (except to the extent of the Partnership interest purchased and the proceeds therefrom) ten-year promissory note (in a form approved by the General Partner) payable to the Defaulting Partner in an amount equal to the portion of the Defaulting Partner’s Capital Account being purchased by such Partner, and (B) assume the portion of the Defaulting Partner’s obligation to make both defaulted and further Capital Contributions pursuant to its Commitment which is equal to the portion of the Defaulting Partner’s interest being purchased by such Partner. In the case of a purchase of a portion of a Defaulting Partner’s Capital Account by one or more partners in a Parallel Vehicle, such Parallel Vehicle shall deliver a note in the same form as the note described above to the Partnership for the aggregate portion of the Defaulting Partner’s Capital Account being purchased by the limited partners in such Parallel Vehicle, the Partnership shall make the adjustments described in Section 6.5(d) with respect to such purchase and the Partnership shall distribute such note to the Defaulting Partner. If a Partner purchases a portion of the interest of a defaulting partner of a Parallel Vehicle, the Partner purchasing such interest shall increase its Commitments as described above with respect to purchases of an interest of a Defaulting Partner, and shall guarantee the note delivered to the Parallel Vehicle, and the Partnership shall make such other adjustments as are required by Section 6.5(d). The General Partner will handle the mechanics of making the offers set forth herein and will in its discretion impose time limits for acceptance. ",
							"entities": [{
								"id": "653",
								"entityType": "ORGANIZATION",
								"end": 84,
								"start": 76,
								"value": "Partners"
							}, {
								"id": "653",
								"entityType": "ORGANIZATION",
								"end": 449,
								"start": 441,
								"value": "Partners"
							}, {
								"id": "653",
								"entityType": "ORGANIZATION",
								"end": 534,
								"start": 526,
								"value": "Partners"
							}, {
								"id": "653",
								"entityType": "ORGANIZATION",
								"end": 1086,
								"start": 1071,
								"value": "General Partner"
							}, {
								"id": "653",
								"entityType": "ORGANIZATION",
								"end": 2450,
								"start": 2435,
								"value": "General Partner"
							}]
						}, {
							"id": "654",
							"text": "(v) If the entire Defaulting Partner’s interest is not purchased in the manner set forth in (iii) above, the General Partner in its sole discretion may offer the remaining interest either (A) to a third party or parties on the same terms as originally offered to the Partners pursuant to (iii) above (in which case such third party or parties will, as a condition of purchasing such interest, become a party to this Agreement), or (B) to the Partners and the partners in Parallel Vehicles in the manner provided in (iii) above, but with no requirement to assume the Defaulting Partner’s obligation to make further capital contributions pursuant to its Commitment, in which case the Defaulting Partner’s Commitment shall be deemed reduced (effective on the",
							"entities": [{
								"id": "654",
								"entityType": "ORGANIZATION",
								"end": 124,
								"start": 109,
								"value": "General Partner"
							}, {
								"id": "654",
								"entityType": "ORGANIZATION",
								"end": 450,
								"start": 442,
								"value": "Partners"
							}]
						}, {
							"id": "655",
							"text": "",
							"entities": []
						}, {
							"id": "656",
							"text": "",
							"entities": []
						}, {
							"id": "657",
							"text": "704094543 -58- ",
							"entities": []
						}, {
							"id": "658",
							"text": "date of the default) to the amount actually paid in and the aggregate Commitments of the Partnership shall be reduced by the amount of such Defaulting Partner’s remaining contributions to be made pursuant to its Commitment. ",
							"entities": []
						}, {
							"id": "659",
							"text": "(vi) In addition to, or instead of, the other remedies and undertakings available to the General Partner pursuant to this Section 6.11(a), the General Partner may, in its sole discretion, reduce (effective on the date of the default, after giving effect to the 5-day cure period) any portion of such Defaulting Partner’s Commitment (which has not been assumed by another Partner) to the amount of the Capital Contributions (which have not been purchased by another Partner) made by such Defaulting Partner (net of distributions pursuant to Section 6.5(b)) and the aggregate Commitments of the Partnership shall be commensurately reduced. The General Partner shall promptly notify the Advisory Committee in writing of any reduction pursuant to this Section 6.11(a)(vi). ",
							"entities": [{
								"id": "659",
								"entityType": "ORGANIZATION",
								"end": 104,
								"start": 89,
								"value": "General Partner"
							}, {
								"id": "659",
								"entityType": "ORGANIZATION",
								"end": 702,
								"start": 684,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "660",
							"text": "(vii) Notwithstanding anything contained herein to the contrary, from and after any date on which a Defaulting Partner’s Commitment is reduced pursuant to subparagraph (v) above, (A) such Defaulting Partner will have no right to receive any distributions, except for distributions made upon the Partnership’s liquidation, (B) such Defaulting Partner’s Capital Account will not be credited with any Investment Income and Gain or Short-Term Investment Income which shall instead be allocated to the Partners (other than any Defaulting Partners) in accordance with Section 2.3(b) and (c), as appropriate (and as adjusted to treat the Defaulting Partner’s Capital Contribution as equal to zero), (C) until such Defaulting Partner’s Capital Account is reduced to zero, (1) such Defaulting Partner’s Capital Account shall continue to be debited in accordance with Sections 2.3(c), (d), (f), and (g) for such Defaulting Partner’s share of Investment Loss, Organizational Expenses, Placement Fees and Uncapitalized Partnership Expenses as if there had been no reduction in such Defaulting Partner’s Commitment or Capital Contributions and (2) the Management Fee payable by the Defaulting Partner shall be calculated as if there had been no reduction in such Defaulting Partner’s Commitment, and (D) once such Defaulting Partner’s Capital Account is reduced to zero, (1) such Defaulting Partner’s Commitment shall be reduced to zero for all purposes of the Agreement, including the calculation of the Partnership’s aggregate Commitments and determination of the Management Fee and (2) such Defaulting Partner (and not the Partnership or any other Limited Partner) shall be liable each quarterly period to the General Partner for an amount equal to its portion of the Management Fee for such period as if there had been no reduction in such Defaulting Partner’s Commitment. ",
							"entities": [{
								"id": "660",
								"entityType": "ORGANIZATION",
								"end": 541,
								"start": 522,
								"value": "Defaulting Partners"
							}]
						}, {
							"id": "661",
							"text": "(viii) No consent of any Limited Partner shall be required as a condition precedent to any transfer, assignment or other disposition of a Defaulting Partner’s interest pursuant to this Section 6.11. ",
							"entities": []
						}, {
							"id": "662",
							"text": "(b) Additionally, the Defaulting Partner shall indemnify and hold harmless the General Partner and the Partnership against any losses, damages and expenses (including attorneys’ fees) incurred by the General Partner and the Partnership in enforcing or attempting to enforce the provisions of this Section 6.11 or resulting from the Partnership failing to meet its obligations with respect to any Portfolio Investment by reason of any such default.",
							"entities": [{
								"id": "662",
								"entityType": "ORGANIZATION",
								"end": 215,
								"start": 200,
								"value": "General Partner"
							}]
						}, {
							"id": "663",
							"text": "",
							"entities": []
						}, {
							"id": "664",
							"text": "",
							"entities": []
						}, {
							"id": "665",
							"text": "704094543 -59- ",
							"entities": []
						}, {
							"id": "666",
							"text": "Section 6.12 Investment Company Act Limitations. Notwithstanding anything to the contrary contained in this Agreement, (i) no person shall be admitted to the Partnership as Limited Partner, an Additional Limited Partner or a substitute Limited Partner unless such person is a Qualified Purchaser, and (ii) no sale, assignment, transfer, pledge, mortgage or other disposition of any or all of a Limited Partner’s interest in the Partnership shall be effective unless the assignee of any beneficial interest in the Partnership is a Qualified Purchaser. ",
							"entities": [{
								"id": "666",
								"entityType": "ORGANIZATION",
								"end": 409,
								"start": 394,
								"value": "Limited Partner"
							}]
						}, {
							"id": "667",
							"text": "Section 6.13 FATCA. Each Limited Partner that holds an interest in a Separate Investment Entity organized outside the United States shall provide the General Partner and the Partnership with any information available to such Limited Partner, representations, certificates or forms relating to such Limited Partner (or its direct or indirect owners or account holders) that are requested from time to time by the General Partner and that the General Partner determines in good faith are necessary in order for the Partnership to (i) enter into, maintain or comply with the agreement contemplated by Section 1471(b) of the Code, (ii) satisfy any requirement imposed under Sections 1471 through 1474 of the Code in order to avoid any withholding required under Sections 1471 through 1474 of the Code (including any withholding upon any payments to such Limited Partner under this Agreement) or (iii) comply with any reporting or withholding requirements under Sections 1471 through 1474 of the Code. In addition, each such Limited Partner shall take such actions as the General Partner may reasonably request in connection with the foregoing. ",
							"entities": [{
								"id": "667",
								"entityType": "ORGANIZATION",
								"end": 95,
								"start": 69,
								"value": "Separate Investment Entity"
							}, {
								"id": "667",
								"entityType": "LOCATION",
								"end": 131,
								"start": 118,
								"value": "United States"
							}, {
								"id": "667",
								"entityType": "ORGANIZATION",
								"end": 165,
								"start": 150,
								"value": "General Partner"
							}, {
								"id": "667",
								"entityType": "ORGANIZATION",
								"end": 427,
								"start": 412,
								"value": "General Partner"
							}, {
								"id": "667",
								"entityType": "ORGANIZATION",
								"end": 456,
								"start": 441,
								"value": "General Partner"
							}]
						}, {
							"id": "668",
							"text": "ARTICLE VII ",
							"entities": []
						}, {
							"id": "669",
							"text": "ADVISORY COMMITTEE ",
							"entities": []
						}, {
							"id": "670",
							"text": "Section 7.1 Advisory Committee. (a) A committee (an “Advisory Committee”) of at least three and not more than nineteen individuals who are affiliated with or officers, employees, representatives or designees of Limited Partners or limited partners of Parallel Vehicles (but are not affiliated with the General Partner, the Manager, the members of the Senior Investment Team or any Affiliates thereof) will be appointed by the General Partner. The General Partner will not appoint to the Advisory Committee any individual who is an officer, employee or representative of a BHCA Partner whose Partner Interest in the Partnership is over 4.99%. The Advisory Committee will meet at least semi-annually with the General Partner and will perform such duties as is contemplated by this Agreement and provide such advice and counsel, including advice and counsel as to general economic and financial trends, portfolio investments and valuations, as is requested by the General Partner in connection with the investments of the Partnership, the Parallel Vehicles and the Separate Investment Entities, and other matters related thereto; provided, that the General Partner will retain ultimate responsibility for all decisions relating to the operation and management of the Partnership, including all investment decisions. The Advisory Committee will be consulted on potential conflicts involving the Partnership and will perform the duties contemplated by this Agreement and all transactions (other than non- material arms-length transactions conducted in the ordinary course of business of a Portfolio Company) between the Partnership or any Portfolio Company, on the one hand, and the General Partner, the Manager and their Affiliates, on the other hand, not specifically contemplated by this Agreement must be approved by the Advisory Committee. The General Partner shall be entitled",
							"entities": [{
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 30,
								"start": 12,
								"value": "Advisory Committee"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 227,
								"start": 211,
								"value": "Limited Partners"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 441,
								"start": 426,
								"value": "General Partner"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 505,
								"start": 487,
								"value": "Advisory Committee"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 607,
								"start": 591,
								"value": "Partner Interest"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 664,
								"start": 646,
								"value": "Advisory Committee"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 976,
								"start": 961,
								"value": "General Partner"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 1161,
								"start": 1146,
								"value": "General Partner"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 1335,
								"start": 1317,
								"value": "Advisory Committee"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 1601,
								"start": 1584,
								"value": "Portfolio Company"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 1651,
								"start": 1634,
								"value": "Portfolio Company"
							}, {
								"id": "670",
								"entityType": "ORGANIZATION",
								"end": 1838,
								"start": 1820,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "671",
							"text": "",
							"entities": []
						}, {
							"id": "672",
							"text": "",
							"entities": []
						}, {
							"id": "673",
							"text": "704094543 -60- ",
							"entities": []
						}, {
							"id": "674",
							"text": "to remove a member of the Advisory Committee selected by the General Partner from among the Limited Partners (or their representatives) upon at least 15 days prior written notice to the Limited Partners, provided, however that the General Partner may not remove a member of the Advisory Committee designated by a Limited Partner without the consent of 75% of the other members of the Advisory Committee. The Limited Partner that had the right to designate the removed member of the Advisory Committee shall have the right to designate a replacement. The Partnership will reimburse each member of the Advisory Committee for such member’s reasonable out-of-pocket expenses incurred in attending meetings of the Advisory Committee. Such reimbursements shall be Partnership Expenses. The Advisory Committee shall act by affirmative vote or written consent of a majority of its members. ",
							"entities": [{
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 44,
								"start": 26,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 76,
								"start": 61,
								"value": "General Partner"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 108,
								"start": 92,
								"value": "Limited Partners"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 246,
								"start": 231,
								"value": "General Partner"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 296,
								"start": 278,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 402,
								"start": 384,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 500,
								"start": 482,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 618,
								"start": 600,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 727,
								"start": 709,
								"value": "Advisory Committee"
							}, {
								"id": "674",
								"entityType": "ORGANIZATION",
								"end": 802,
								"start": 784,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "675",
							"text": "(b) Neither the members of the Advisory Committee, nor the Limited Partners on behalf of whom such members act as representatives, shall owe any duties (fiduciary or otherwise) to the Partnership or any other Limited Partner in respect of the activities of the Advisory Committee, other than the duty to act in good faith. ",
							"entities": [{
								"id": "675",
								"entityType": "ORGANIZATION",
								"end": 49,
								"start": 31,
								"value": "Advisory Committee"
							}, {
								"id": "675",
								"entityType": "ORGANIZATION",
								"end": 279,
								"start": 261,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "676",
							"text": "(c) The General Partner shall promptly notify the Advisory Committee in writing if 10% or more of a Managing Partner’s carried interest in the General Partner is transferred to any Person or group of Persons other than the existing members of the Senior Investment Team as of the date of this Agreement and Permitted GP Transferees. ",
							"entities": [{
								"id": "676",
								"entityType": "ORGANIZATION",
								"end": 68,
								"start": 50,
								"value": "Advisory Committee"
							}, {
								"id": "676",
								"entityType": "ORGANIZATION",
								"end": 158,
								"start": 143,
								"value": "General Partner"
							}]
						}, {
							"id": "677",
							"text": "ARTICLE VIII ",
							"entities": []
						}, {
							"id": "678",
							"text": "DURATION AND TERMINATION ",
							"entities": []
						}, {
							"id": "679",
							"text": "Section 8.1 Duration. The Partnership will terminate on the tenth anniversary of the Effective Date, except that the term of the Partnership may be extended by the General Partner in its sole discretion for one additional one-year period and may be extended by the General Partner with the approval of the Advisory Committee for up to two additional one-year periods. ",
							"entities": [{
								"id": "679",
								"entityType": "ORGANIZATION",
								"end": 179,
								"start": 164,
								"value": "General Partner"
							}, {
								"id": "679",
								"entityType": "ORGANIZATION",
								"end": 280,
								"start": 265,
								"value": "General Partner"
							}, {
								"id": "679",
								"entityType": "ORGANIZATION",
								"end": 324,
								"start": 306,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "680",
							"text": "Section 8.2 Early Termination. ",
							"entities": []
						}, {
							"id": "681",
							"text": "(a) The Partnership shall terminate on: ",
							"entities": []
						}, {
							"id": "682",
							"text": "(i) the bankruptcy of the General Partner or on the happening of any other event that would cause a dissolution of the Partnership under the Delaware Partnership Act (other than removal of the General Partner for Cause pursuant to Section 5.9), unless, within 90 days after notice is given to the Limited Partners of the occurrence of such event, a Majority in Interest of the Limited Partners select a new General Partner and elect to continue the business of the Partnership; ",
							"entities": [{
								"id": "682",
								"entityType": "ORGANIZATION",
								"end": 218,
								"start": 193,
								"value": "General Partner for Cause"
							}, {
								"id": "682",
								"entityType": "ORGANIZATION",
								"end": 393,
								"start": 377,
								"value": "Limited Partners"
							}, {
								"id": "682",
								"entityType": "ORGANIZATION",
								"end": 422,
								"start": 407,
								"value": "General Partner"
							}]
						}, {
							"id": "683",
							"text": "(ii) at any time upon the consent of Eighty Percent in Interest of the Limited Partners; ",
							"entities": [{
								"id": "683",
								"entityType": "ORGANIZATION",
								"end": 87,
								"start": 71,
								"value": "Limited Partners"
							}]
						}, {
							"id": "684",
							"text": "(iii) a good faith determination by the General Partner that dissolution of the Partnership is necessary or desirable (A) as a result of a Plan Asset Event or (B) to avoid any",
							"entities": []
						}, {
							"id": "685",
							"text": "",
							"entities": []
						}, {
							"id": "686",
							"text": "",
							"entities": []
						}, {
							"id": "687",
							"text": "704094543 -61- ",
							"entities": []
						}, {
							"id": "688",
							"text": "material adverse consequences to the Partnership, the General Partner or the Manager as a result of any law or regulation applicable to a Regulated Investor; or ",
							"entities": []
						}, {
							"id": "689",
							"text": "(iv) the removal of the General Partner pursuant to Section 5.9 unless Two- Thirds in Interest of the Limited Partners select a successor general partner and elect to continue the business of the Partnership pursuant to Section 5.9. ",
							"entities": [{
								"id": "689",
								"entityType": "ORGANIZATION",
								"end": 118,
								"start": 102,
								"value": "Limited Partners"
							}]
						}, {
							"id": "690",
							"text": "(b) As promptly as possible following the election by the Limited Partners of a successor General Partner pursuant to Section 8.2(a)(i), there shall be distributed to the former General Partner, in full payment and satisfaction of its interest in the Partnership, a limited partnership interest in the Partnership, entitling the former General Partner to the same distributions and allocations in respect of Portfolio Investments made prior to the removal of the former General Partner it would have received had it remained the General Partner, subject to the obligations set forth in Section 8.3(c), and to the rights of a Limited Partner hereunder with a Commitment equal to the Commitment of the former General Partner, but shall not entitle it to any other rights to participate in the management of the Partnership. After its removal as General Partner, a former General Partner shall only be liable under this Agreement for actions taken and investments in Portfolio Companies made prior to the date of such removal. If the Limited Partners elect to continue the Partnership’s business pursuant to Section 8.2(a)(i), an appropriate amendment to this Agreement and to the Certificate shall be made within 90 days after the event giving rise to such election. ",
							"entities": [{
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 74,
								"start": 58,
								"value": "Limited Partners"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 105,
								"start": 90,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 193,
								"start": 178,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 351,
								"start": 336,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 485,
								"start": 470,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 858,
								"start": 843,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 884,
								"start": 869,
								"value": "General Partner"
							}, {
								"id": "690",
								"entityType": "ORGANIZATION",
								"end": 1047,
								"start": 1031,
								"value": "Limited Partners"
							}]
						}, {
							"id": "691",
							"text": "Section 8.3 Termination and Liquidation of Partnership Interests; Annual Determination of General Partner Give Back. ",
							"entities": []
						}, {
							"id": "692",
							"text": "(a) Liquidation. Upon termination, the Partnership will be liquidated in an orderly manner. The General Partner (or, in the absence, bankruptcy or removal under Section 5.9, of the General Partner, the Person selected by a Majority in Interest of the Limited Partners) will be the liquidator to wind up the affairs of the Partnership pursuant to this Agreement. ",
							"entities": [{
								"id": "692",
								"entityType": "ORGANIZATION",
								"end": 196,
								"start": 181,
								"value": "General Partner"
							}, {
								"id": "692",
								"entityType": "ORGANIZATION",
								"end": 267,
								"start": 251,
								"value": "Limited Partners"
							}]
						}, {
							"id": "693",
							"text": "(b) Final Allocation and Distribution. Upon termination of the Partnership (whether or not an early termination), the General Partner will make a final allocation of all kinds of income, loss and expense in accordance with Article II hereof and the Partnership’s liabilities and obligations to its creditors shall be paid or adequately provided for prior to any distributions to the Partners. After payment or provision for payment of all debts of the Partnership, the remaining assets, if any, will be distributed among the Partners as provided in Sections 3.2 and 3.3. ",
							"entities": [{
								"id": "693",
								"entityType": "ORGANIZATION",
								"end": 133,
								"start": 118,
								"value": "General Partner"
							}, {
								"id": "693",
								"entityType": "ORGANIZATION",
								"end": 391,
								"start": 383,
								"value": "Partners"
							}, {
								"id": "693",
								"entityType": "ORGANIZATION",
								"end": 533,
								"start": 525,
								"value": "Partners"
							}]
						}, {
							"id": "694",
							"text": "(c) General Partner Give Back. Within 90 days after the end of each fiscal year and after the final distribution of the assets of the Partnership among the Partners as provided in Sections 3.2 and 3.3 (each of the end of each fiscal year and the date of such final distribution, a “Determination Date”), the General Partner will make a Capital Contribution to the Partnership with respect to each Limited Partner (and such amount will be distributed to the Limited Partners in proportion to the amounts determined with respect to each Limited Partner pursuant to this Section 8.3(c)), equal to the greater of:",
							"entities": [{
								"id": "694",
								"entityType": "ORGANIZATION",
								"end": 164,
								"start": 156,
								"value": "Partners"
							}, {
								"id": "694",
								"entityType": "ORGANIZATION",
								"end": 323,
								"start": 308,
								"value": "General Partner"
							}, {
								"id": "694",
								"entityType": "ORGANIZATION",
								"end": 356,
								"start": 336,
								"value": "Capital Contribution"
							}, {
								"id": "694",
								"entityType": "ORGANIZATION",
								"end": 473,
								"start": 457,
								"value": "Limited Partners"
							}, {
								"id": "694",
								"entityType": "ORGANIZATION",
								"end": 550,
								"start": 535,
								"value": "Limited Partner"
							}]
						}, {
							"id": "695",
							"text": "",
							"entities": []
						}, {
							"id": "696",
							"text": "",
							"entities": []
						}, {
							"id": "697",
							"text": "704094543 -62- ",
							"entities": []
						}, {
							"id": "698",
							"text": "(i) the amount by which (A) (x) the aggregate distributions to the General Partner pursuant to Sections 3.3(a)(ii) and 3.3(a)(iii) (including amounts initially distributed pursuant to Section 3.3(b)) with respect to such Limited Partner’s Partner Share of distributions pursuant to Section 3.3(a) as of the applicable Determination Date less (y) all amounts previously contributed by the General Partner pursuant to this Section 8.3(c) with respect to such Limited Partner, exceed (B) 20% of the excess of (x) such Limited Partner’s Partner Share of all distributions pursuant to Section 3.3(a) from the Partnership as of the applicable Determination Date (including amounts distributed to the General Partner pursuant to Sections 3.3(a)(ii) and 3.3(a)(iii), but reduced by any amounts previously contributed by the General Partner pursuant to this Section 8.3(c)) over (y) the aggregate Capital Contributions made by such Limited Partner to the Partnership that are described in clauses (a), (b) and (c) of the second sentence of the definition of “Preferred Amount” as of the applicable Determination Date; and ",
							"entities": [{
								"id": "698",
								"entityType": "ORGANIZATION",
								"end": 82,
								"start": 67,
								"value": "General Partner"
							}, {
								"id": "698",
								"entityType": "ORGANIZATION",
								"end": 403,
								"start": 388,
								"value": "General Partner"
							}, {
								"id": "698",
								"entityType": "ORGANIZATION",
								"end": 831,
								"start": 816,
								"value": "General Partner"
							}]
						}, {
							"id": "699",
							"text": "(ii) the amount by which all distributions received by such Limited Partner as of the applicable Determination Date are less than the sum of such Limited Partner’s Capital Contributions that are described in clauses (a), (b) and (c) of the second sentence of the definition of “Preferred Amount” as of the applicable Determination Date, plus such Limited Partner’s aggregate Preferred Amount as of the applicable Determination Date; provided, however, that the aggregate General Partner Capital Contributions pursuant to this Section 8.3(c) will not exceed the excess, if any, of (x) an amount equal to 100% of the net amount distributed to the General Partner with respect to such Limited Partner over the entire term of the Partnership (other than Tax Distributions) pursuant to Sections 3.3(a)(ii) and 3.3(a)(iii) over (y) the Built-In Tax Amount with respect to any distribution of securities in-kind received by the General Partner with respect to such Limited Partner. Within 90 days after each Determination Date, the General Partner will provide the Advisory Committee with a calculation of any amounts required to be contributed by the General Partner pursuant to this Section 8.3(c), if any. Amounts required to be contributed by the General Partner pursuant to this Section 8.3(c) shall first be satisfied from the Carried Interest Reserve Account referenced below to the extent thereof, and thereafter shall be contributed by the General Partner. ",
							"entities": [{
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 508,
								"start": 471,
								"value": "General Partner Capital Contributions"
							}, {
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 1040,
								"start": 1025,
								"value": "General Partner"
							}, {
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 1076,
								"start": 1058,
								"value": "Advisory Committee"
							}, {
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 1160,
								"start": 1145,
								"value": "General Partner"
							}, {
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 1259,
								"start": 1244,
								"value": "General Partner"
							}, {
								"id": "699",
								"entityType": "ORGANIZATION",
								"end": 1358,
								"start": 1326,
								"value": "Carried Interest Reserve Account"
							}]
						}, {
							"id": "700",
							"text": "The Partnership shall establish an account (the “Carried Interest Reserve Account”) into which a portion of the amount otherwise distributable to the General Partner in respect of its Carried Interest shall, subject to the terms of this Section 8.3(c) and subject to Section 3.3(b), be deposited. Prior to making any distribution to the General Partner in respect of its Carried Interest, the Partnership shall hold back, and shall not distribute to the General Partner, an amount equal to twenty percent (20%) of the amount otherwise distributable to the General Partner in respect of its Carried Interest and shall deposit such amount in the Carried Interest Reserve Account. The amounts in the Carried Interest Reserve Account shall be invested by the Partnership in Short-Term Investments, with the income and loss derived therefrom specially allocated to the General Partner and the income earned thereon distributed from time to time to the General Partner. If as of any Determination Date, it is determined that the General Partner is not required to make a Capital Contribution to the Partnership pursuant to this Section 8.3(c), all amounts in the Carried Interest Reserve Account as of such Determination Date shall be released from the Carried Interest Reserve Account and be distributed to the General Partner. In addition, the General Partner may request from time to time that the Partnership distribute to the General Partner additional amounts held in the Carried Interest Reserve Account, and, with the consent of a Majority in Interest of the Limited Partners, such amount shall be released from the Carried",
							"entities": [{
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 352,
								"start": 337,
								"value": "General Partner"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 676,
								"start": 644,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 729,
								"start": 697,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 879,
								"start": 864,
								"value": "General Partner"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 1189,
								"start": 1157,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 1279,
								"start": 1247,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 1355,
								"start": 1340,
								"value": "General Partner"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 1504,
								"start": 1472,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "700",
								"entityType": "ORGANIZATION",
								"end": 1577,
								"start": 1561,
								"value": "Limited Partners"
							}]
						}, {
							"id": "701",
							"text": "",
							"entities": []
						}, {
							"id": "702",
							"text": "",
							"entities": []
						}, {
							"id": "703",
							"text": "704094543 -63- ",
							"entities": []
						}, {
							"id": "704",
							"text": "Interest Reserve Account and distributed to the General Partner. If as of any Determination Date, it is determined that the General Partner is required to make a Capital Contribution to the Partnership pursuant to this Section 8.3(c), the lesser of (x) the amount of such required Capital Contribution from the General Partner and (y) the aggregate amounts in the Carried Interest Reserve Account as of such Determination Date, shall be released from the Carried Interest Reserve Account and be distributed to the Limited Partners and any amounts remaining in the Carried Interest Reserve Account as of such Determination Date following such distribution shall be released from the Carried Interest Reserve Account and be distributed to the General Partner. Upon the dissolution of the Partnership, after satisfaction of the Partnership’s liabilities but before any liquidating distribution, the General Partner shall distribute to each Limited Partner from the Carried Interest Reserve Account, up to the full positive balance thereof, an amount equal to the amount determined pursuant to this Section 8.3(c). ",
							"entities": [{
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 24,
								"start": 0,
								"value": "Interest Reserve Account"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 139,
								"start": 124,
								"value": "General Partner"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 396,
								"start": 364,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 487,
								"start": 455,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 530,
								"start": 514,
								"value": "Limited Partners"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 596,
								"start": 564,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 714,
								"start": 682,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "704",
								"entityType": "ORGANIZATION",
								"end": 994,
								"start": 962,
								"value": "Carried Interest Reserve Account"
							}]
						}, {
							"id": "705",
							"text": "(d) The General Partner hereby covenants and agrees that each of the partners of the General Partner entitled to receive Carried Interest distributions from the General Partner has guaranteed and will guaranty severally, but not jointly, the payment of his, her or its pro rata share of the payments required by Section 8.3(c) in excess of the amounts in the Carried Interest Reserve Account as of the applicable Determination Date which are distributed to the Limited Partners, to the extent and on the terms set forth in the Guaranty Agreement. ",
							"entities": [{
								"id": "705",
								"entityType": "ORGANIZATION",
								"end": 176,
								"start": 161,
								"value": "General Partner"
							}, {
								"id": "705",
								"entityType": "ORGANIZATION",
								"end": 391,
								"start": 359,
								"value": "Carried Interest Reserve Account"
							}, {
								"id": "705",
								"entityType": "ORGANIZATION",
								"end": 477,
								"start": 461,
								"value": "Limited Partners"
							}]
						}, {
							"id": "706",
							"text": "(e) Special Profit Interest Give Back. After the final distribution of the assets of the Partnership among the Partners as provided in this Section 8.3 (and Article III hereof), but prior to the application of Section 8.3(c), the Special Limited Partner shall be obligated to make aggregate Capital Contributions to the Partnership, within 30 days after the date of such final distribution, in an amount equal to the sum of the excess, if any, of (i) the distributions received by the Special Limited Partner on account of the Special Profit Interest attributable to each Waived Fee Amount over (ii) the Available Profits with respect to such Waived Fee Amount. The distributions described in clause (i) of the preceding sentence with respect to a Waived Fee Amount are the Special Profit Interest distributions attributable to the Portfolio Company with respect to which the General Partner applied such Waived Fee Amount pursuant to Section 2.2(a)(ii), treating the Waived Fee Amounts as having been applied on a “first-in, first-out” basis. Amounts distributed to the Special Limited Partner pursuant to Section 3.3(e) shall be treated for this purpose as proceeds from Portfolio Company made on the date of each Waived Fee Notice giving rise to Waived Fee Amounts that are not applied to Portfolio Company pursuant to Section 2.2(a)(ii). For purposes of applying the first sentence of this Section 8.3(e), Partnership Profits shall not be treated as Available Profits with respect to more than one Waived Fee Amount. All such amounts returned to the Partnership shall be distributed to the Partners (other than a Defaulting Partner or the Special Limited Partner) in accordance with the provisions of Section 3.3. All determinations and calculations pursuant to this Section 8.3(e) shall be made by the General Partner in its sole discretion.",
							"entities": [{
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 119,
								"start": 111,
								"value": "Partners"
							}, {
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 312,
								"start": 291,
								"value": "Capital Contributions"
							}, {
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 849,
								"start": 832,
								"value": "Portfolio Company"
							}, {
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 1190,
								"start": 1173,
								"value": "Portfolio Company"
							}, {
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 1309,
								"start": 1292,
								"value": "Portfolio Company"
							}, {
								"id": "706",
								"entityType": "ORGANIZATION",
								"end": 1822,
								"start": 1807,
								"value": "General Partner"
							}]
						}, {
							"id": "707",
							"text": "",
							"entities": []
						}, {
							"id": "708",
							"text": "",
							"entities": []
						}, {
							"id": "709",
							"text": "704094543 -64- ",
							"entities": []
						}, {
							"id": "710",
							"text": "ARTICLE IX ",
							"entities": []
						}, {
							"id": "711",
							"text": "VALUATION OF PARTNERSHIP ASSETS ",
							"entities": []
						}, {
							"id": "712",
							"text": "Section 9.1 Normal Valuation. ",
							"entities": []
						}, {
							"id": "713",
							"text": "(a) For purposes of this Agreement, the value of any security as of any date (or in the event such date is a holiday or other day which is not a Business Day, as of the next preceding Business Day) will be determined as follows: ",
							"entities": []
						}, {
							"id": "714",
							"text": "(i) a Marketable Security which is listed on a recognized securities exchange or the NMS will be valued at the average of the last sales prices (or, if no sale occurred on such date, at the last “bid” price thereon) for the ten consecutive trading days before such date; ",
							"entities": [{
								"id": "714",
								"entityType": "ORGANIZATION",
								"end": 88,
								"start": 85,
								"value": "NMS"
							}]
						}, {
							"id": "715",
							"text": "(ii) a Marketable Security which is traded over-the-counter (other than on the NMS) will be valued at the average of the last “bid” prices for the ten consecutive trading days before such date; and ",
							"entities": [{
								"id": "715",
								"entityType": "ORGANIZATION",
								"end": 82,
								"start": 79,
								"value": "NMS"
							}]
						}, {
							"id": "716",
							"text": "(iii) subject to Section 9.3, all Non-Marketable Securities will be valued on such date by the General Partner at fair market value in such manner as it may determine. ",
							"entities": []
						}, {
							"id": "717",
							"text": "(iv) a Marketable Security which meets clause (ii), but not clause (i) of the definition of “Marketable Securities” will be valued as if it had been converted, exchanged or exercised as of such date. ",
							"entities": []
						}, {
							"id": "718",
							"text": "(b) The General Partner will promptly notify the Advisory Committee of any material change to the valuation policies of the General Partner (other than any change required by GAAP or applicable law). ",
							"entities": [{
								"id": "718",
								"entityType": "ORGANIZATION",
								"end": 67,
								"start": 49,
								"value": "Advisory Committee"
							}, {
								"id": "718",
								"entityType": "ORGANIZATION",
								"end": 139,
								"start": 124,
								"value": "General Partner"
							}, {
								"id": "718",
								"entityType": "ORGANIZATION",
								"end": 179,
								"start": 175,
								"value": "GAAP"
							}]
						}, {
							"id": "719",
							"text": "Section 9.2 Restrictions on Transfer or Blockage. Any security which is held under a representation that it has been acquired for investment and not with a view to public sale or distribution, or which is held subject to any other restriction, or where the size of the Partnership’s holdings compared to the trading volume would affect its marketability, will, subject to the provisions of Section 9.3, be valued at such discount from the value determined under Section 9.1 above as the General Partner deems necessary to reflect properly the marketability of such security. ",
							"entities": []
						}, {
							"id": "720",
							"text": "Section 9.3 Objection to Valuation. Prior to acting upon its final valuation of any security pursuant to Sections 9.1 or 9.2 or its determination of written down value pursuant to Section 9.4, the General Partner shall provide the members of the Advisory Committee with notice and backup support of the General Partner’s valuation of such security. If within 30 days after delivery of such notice a majority of the members of the Advisory Committee delivers written notice to the General Partner objecting to the valuation of such security and if, within 15 days from the date on which the General Partner receives such notice from a majority of the Advisory Committee, the General Partner and the Advisory Committee cannot agree on the valuation of such security, then the General Partner will (at the Partnership’s expense) cause an independent securities expert mutually acceptable to the General Partner and the Advisory",
							"entities": [{
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 264,
								"start": 246,
								"value": "Advisory Committee"
							}, {
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 448,
								"start": 430,
								"value": "Advisory Committee"
							}, {
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 668,
								"start": 650,
								"value": "Advisory Committee"
							}, {
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 689,
								"start": 674,
								"value": "General Partner"
							}, {
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 716,
								"start": 698,
								"value": "Advisory Committee"
							}, {
								"id": "720",
								"entityType": "ORGANIZATION",
								"end": 907,
								"start": 892,
								"value": "General Partner"
							}]
						}, {
							"id": "721",
							"text": "",
							"entities": []
						}, {
							"id": "722",
							"text": "",
							"entities": []
						}, {
							"id": "723",
							"text": "704094543 -65- ",
							"entities": []
						}, {
							"id": "724",
							"text": "Committee to review such valuation, and such expert’s determination will be binding on the parties. ",
							"entities": []
						}, {
							"id": "725",
							"text": "Section 9.4 Write-down to Value. Any Portfolio Investment that has permanently declined in value as determined by the General Partner will be written down to its value (or, if applicable, written off) pursuant to the provisions of this Article IX, including the valuation provisions of Section 9.3, as of the date of such determination. The General Partner shall provide the Advisory Committee at least annually with the then current valuation of all Portfolio Investments. ",
							"entities": [{
								"id": "725",
								"entityType": "ORGANIZATION",
								"end": 133,
								"start": 118,
								"value": "General Partner"
							}, {
								"id": "725",
								"entityType": "ORGANIZATION",
								"end": 393,
								"start": 375,
								"value": "Advisory Committee"
							}]
						}, {
							"id": "726",
							"text": "ARTICLE X ",
							"entities": []
						}, {
							"id": "727",
							"text": "BOOKS OF ACCOUNTS; MEETINGS ",
							"entities": []
						}, {
							"id": "728",
							"text": "Section 10.1 Books. The Partnership will maintain complete and accurate books of account of the Partnership’s affairs at the Partnership’s principal office, which books will be open to inspection by any Partner (or its authorized representative) at any time during ordinary business hours. ",
							"entities": []
						}, {
							"id": "729",
							"text": "Section 10.2 Fiscal Year. The fiscal year of the Partnership will be the calendar year, unless otherwise determined by the General Partner. ",
							"entities": [{
								"id": "729",
								"entityType": "ORGANIZATION",
								"end": 138,
								"start": 123,
								"value": "General Partner"
							}]
						}, {
							"id": "730",
							"text": "Section 10.3 Reports. The General Partner will furnish the Limited Partners: ",
							"entities": [{
								"id": "730",
								"entityType": "ORGANIZATION",
								"end": 41,
								"start": 26,
								"value": "General Partner"
							}]
						}, {
							"id": "731",
							"text": "(a) within 45 days after the end of each of the first three quarters of each fiscal year, and with respect to the fourth quarter in each fiscal year at the time of delivery of the annual financial statements under Section 10.3(b), (i) unaudited quarterly financial statements (including balance sheet and income statement, schedule of investments (including additions, dispositions and write-offs) showing each Partner’s Capital Account prepared, except as otherwise provided in this Agreement, including Article IX, which shall govern valuations for purposes of such financial statements, in accordance with GAAP, applied on a consistent basis (except that, in accordance with GAAP, such quarterly financial reports may omit footnotes and year-end adjustments, accruals and reserves), (ii) descriptive investment information for each Portfolio Company and narrative summary financial information for each Portfolio Company, including revenues, EBITDA and net debt, and (iii) a statement of the aggregate amount invested directly or indirectly by Co-Investors in Portfolio Companies during such quarter; ",
							"entities": [{
								"id": "731",
								"entityType": "ORGANIZATION",
								"end": 613,
								"start": 609,
								"value": "GAAP"
							}, {
								"id": "731",
								"entityType": "ORGANIZATION",
								"end": 682,
								"start": 678,
								"value": "GAAP"
							}, {
								"id": "731",
								"entityType": "ORGANIZATION",
								"end": 852,
								"start": 835,
								"value": "Portfolio Company"
							}, {
								"id": "731",
								"entityType": "ORGANIZATION",
								"end": 923,
								"start": 906,
								"value": "Portfolio Company"
							}, {
								"id": "731",
								"entityType": "ORGANIZATION",
								"end": 951,
								"start": 945,
								"value": "EBITDA"
							}]
						}, {
							"id": "732",
							"text": "(b) within 90 days after the end of each fiscal year, (i) financial statements for such year prepared, except as otherwise provided in this Agreement, including Article IX, which shall govern valuations for purposes of such financial statements, in accordance with GAAP, applied on a consistent basis (certified by a firm of independent certified public accountants of recognized national standing selected by the General Partner), (ii) valuations of the Partnership’s investments as of the end of such year (including a statement of each Partner’s closing Capital Account), (iii) the certification to Benefit Plan Investors confirming that the Partnership continues to qualify for an exception from Plan Assets described in the last sentence of Section 5.6(a) and a certification regarding the Partnership’s compliance in all material respects",
							"entities": [{
								"id": "732",
								"entityType": "ORGANIZATION",
								"end": 269,
								"start": 265,
								"value": "GAAP"
							}, {
								"id": "732",
								"entityType": "ORGANIZATION",
								"end": 429,
								"start": 414,
								"value": "General Partner"
							}]
						}, {
							"id": "733",
							"text": "",
							"entities": []
						}, {
							"id": "734",
							"text": "",
							"entities": []
						}, {
							"id": "735",
							"text": "704094543 -66- ",
							"entities": []
						}, {
							"id": "736",
							"text": "with Article III hereof, (iv) an overview of the Partnership’s investment activities for the fiscal year, including narrative descriptive investment information for each Portfolio Investment and summary financial information for each Portfolio Company, including revenues, EBITDA and net debt, and (v) a report on the Advisory Fees, Topping and Break-up Fees and Transaction Fees received during such fiscal year and all offsets pursuant to Section 4.1(c) hereof resulting from such receipts; ",
							"entities": [{
								"id": "736",
								"entityType": "ORGANIZATION",
								"end": 251,
								"start": 234,
								"value": "Portfolio Company"
							}, {
								"id": "736",
								"entityType": "ORGANIZATION",
								"end": 279,
								"start": 273,
								"value": "EBITDA"
							}]
						}, {
							"id": "737",
							"text": "(c) within 90 days after the end of each fiscal year (subject to reasonable delays in the event of late receipt of any necessary financial statements or other information necessary to prepare tax returns in respect of any Portfolio Investment), the Partnership’s tax return and the Limited Partners’ respective forms K-l; ",
							"entities": []
						}, {
							"id": "738",
							"text": "(d) at a Limited Partner’s reasonable request, reasonable monthly or quarterly information as to Partnership income and expenses, quarterly information as to Partnership balance sheet items and any reasonable information such Limited Partner may require in order to withhold tax or to file tax returns and reports or to furnish tax information to any of its partners, including information required by a Limited Partner or any partner thereof in order to comply with any reporting or withholding requirements applicable to such Limited Partner or any partner thereof pursuant to Section 897 or 1445 of the Code, or any such reporting requirements with respect to UBTI or ECI; and ",
							"entities": []
						}, {
							"id": "739",
							"text": "(e) any information or report that in the opinion of the General Partner is required by applicable law to be furnished to the Limited Partners. ",
							"entities": [{
								"id": "739",
								"entityType": "ORGANIZATION",
								"end": 142,
								"start": 126,
								"value": "Limited Partners"
							}]
						}, {
							"id": "740",
							"text": "Section 10.4 Tax Allocation. ",
							"entities": []
						}, {
							"id": "741",
							"text": "(a) Except as otherwise set forth in this Section 10.4(a), the income, gains, losses, deductions and credits of the Partnership will be allocated, for federal, state and local income tax purposes, among the Partners in accordance with the allocation of such income, gains, losses, deductions and credits among the Partners for computing their Capital Accounts, except that if any such allocation is not permitted by the Code or other applicable law, the Partnership’s subsequent income, gains, losses, deductions and credits will be allocated among the Partners so as to reflect as nearly as possible the allocation set forth herein in computing their Capital Accounts. Notwithstanding the preceding sentence, in the event the Basis of any asset of the Partnership differs from its adjusted tax basis for federal income tax purposes, subsequent allocations of income, gain, loss, and deduction with respect to such asset shall take account of any variation between the adjusted basis of such asset for federal income tax purposes and its Basis in the same manner as under Section 704(c) of the Code and the Regulations thereunder. ",
							"entities": [{
								"id": "741",
								"entityType": "ORGANIZATION",
								"end": 215,
								"start": 207,
								"value": "Partners"
							}, {
								"id": "741",
								"entityType": "ORGANIZATION",
								"end": 322,
								"start": 314,
								"value": "Partners"
							}, {
								"id": "741",
								"entityType": "ORGANIZATION",
								"end": 561,
								"start": 553,
								"value": "Partners"
							}]
						}, {
							"id": "742",
							"text": "(b) If any Partner is treated for income tax purposes as realizing ordinary income because of receipt of his, her or its Partnership interest (whether under Section 83 of the Code or any similar provisions of any law, rule or regulation or any other applicable law, rule, regulation or doctrine) and the Partnership is entitled to any offsetting deduction, the Partnership’s deduction will be allocated among the Partners in such manner as to, as nearly as possible, offset such ordinary income realized by such Partner. If the Internal Revenue Service successfully asserts an adjustment to the taxable income of a Partner and, as a result of such adjustment, the Partnership is entitled to a deduction for federal income tax purposes in excess of any gain",
							"entities": [{
								"id": "742",
								"entityType": "ORGANIZATION",
								"end": 552,
								"start": 528,
								"value": "Internal Revenue Service"
							}]
						}, {
							"id": "743",
							"text": "",
							"entities": []
						}, {
							"id": "744",
							"text": "",
							"entities": []
						}, {
							"id": "745",
							"text": "704094543 -67- ",
							"entities": []
						}, {
							"id": "746",
							"text": "recognized by the Partnership, such excess deduction shall be allocated to such Partner. If the Internal Revenue Service successfully asserts an adjustment to the taxable income of the Partnership and, as a result of such adjustment, any Partner is entitled to a deduction for federal income tax purposes in excess of any gain recognized by such Partner, the additional Partnership taxable income shall be allocated to such Partner. If the Internal Revenue Service successfully asserts an adjustment to the taxable income of the Partnership disallowing deductions for any of the fees paid or payable to the General Partner, then additional Partnership taxable income allocable to the Partners as a result of such disallowance shall be reallocated to the General Partner. ",
							"entities": [{
								"id": "746",
								"entityType": "ORGANIZATION",
								"end": 120,
								"start": 96,
								"value": "Internal Revenue Service"
							}, {
								"id": "746",
								"entityType": "ORGANIZATION",
								"end": 464,
								"start": 440,
								"value": "Internal Revenue Service"
							}, {
								"id": "746",
								"entityType": "ORGANIZATION",
								"end": 622,
								"start": 607,
								"value": "General Partner"
							}]
						}, {
							"id": "747",
							"text": "(c) Notwithstanding any other provision of this Agreement, if a Partner unexpectedly receives an adjustment, allocation or distribution described in Treasury Regulation § 1.704- 1(b)(2)(ii) (d)(4), (5) or (6) which gives rise to a negative Capital Account (or which would give rise to a negative Capital Account when added to expected adjustments, allocations or distributions of the same type), such Partner will be allocated items of income and gain in an amount and manner sufficient to eliminate such deficit balance as quickly as possible; provided that the Partnership’s subsequent income, gains, losses, deductions and credits will be allocated among the Partners so as to achieve as nearly as possible the results that would have been achieved if this Section 10.4(c) had not been in this Agreement, except that no such allocation shall be made which would violate the provisions or purposes of Treasury Regulation § 1.704-1(b). ",
							"entities": [{
								"id": "747",
								"entityType": "ORGANIZATION",
								"end": 157,
								"start": 149,
								"value": "Treasury"
							}, {
								"id": "747",
								"entityType": "ORGANIZATION",
								"end": 255,
								"start": 240,
								"value": "Capital Account"
							}, {
								"id": "747",
								"entityType": "ORGANIZATION",
								"end": 311,
								"start": 296,
								"value": "Capital Account"
							}, {
								"id": "747",
								"entityType": "ORGANIZATION",
								"end": 670,
								"start": 662,
								"value": "Partners"
							}, {
								"id": "747",
								"entityType": "ORGANIZATION",
								"end": 911,
								"start": 903,
								"value": "Treasury"
							}]
						}, {
							"id": "748",
							"text": "Section 10.5 Tax Controversies. The General Partner is hereby designated the “Tax Matters Partner” (as defined in Section 6231 of the Code), and is authorized and required to represent the Partnership (at the Partnership’s expense) in connection with all examinations of the Partnership’s business and affairs by tax authorities, including resulting administrative and judicial proceedings, and to expend Partnership funds for professional services and costs associated therewith. Each Limited Partner agrees to cooperate with the General Partner and to do or refrain from doing any or all things reasonably requested by the General Partner with respect to the conduct of such proceedings. The General Partner shall provide the Limited Partners with all notices required to be provided to them by law in connection with such proceedings, and shall otherwise keep the Limited Partners reasonably informed of the progress thereof. ",
							"entities": [{
								"id": "748",
								"entityType": "ORGANIZATION",
								"end": 640,
								"start": 625,
								"value": "General Partner"
							}, {
								"id": "748",
								"entityType": "ORGANIZATION",
								"end": 744,
								"start": 728,
								"value": "Limited Partners"
							}, {
								"id": "748",
								"entityType": "ORGANIZATION",
								"end": 883,
								"start": 867,
								"value": "Limited Partners"
							}]
						}, {
							"id": "749",
							"text": "Section 10.6 Certain Tax Elections. The Partnership shall not, without the consent of all Partners, file an election (i) pursuant to Section 761 of the Code not to be treated as a partnership, or (ii) pursuant to Treasury Regulation §301.7701-3(c) to be treated as an association taxable as a corporation. ",
							"entities": [{
								"id": "749",
								"entityType": "ORGANIZATION",
								"end": 221,
								"start": 213,
								"value": "Treasury"
							}]
						}, {
							"id": "750",
							"text": "Section 10.7 Code Section 83 Safe Harbor Election. ",
							"entities": []
						}, {
							"id": "751",
							"text": "(a) Notice 2005-43. By executing this Agreement, each Partner authorizes and directs the Partnership to elect to have the “Safe Harbor” described in the proposed Revenue Procedure set forth in Internal Revenue Service Notice 2005-43 (the “Notice”) apply to any interest in the Partnership transferred to a service provider by the Partnership on or after the effective date of such Revenue Procedure in connection with services provided to the Partnership. For purposes of making such Safe Harbor election, the General Partner is hereby",
							"entities": []
						}, {
							"id": "752",
							"text": "",
							"entities": []
						}, {
							"id": "753",
							"text": "",
							"entities": []
						}, {
							"id": "754",
							"text": "704094543 -68- ",
							"entities": []
						}, {
							"id": "755",
							"text": "designated as the “partner who has responsibility for federal income tax reporting” by the Partnership and, accordingly, execution of such Safe Harbor election by the General Partner constitutes execution of a “Safe Harbor Election” in accordance with section 3.03(1) of the Notice. The Partnership and each Partner hereby agrees to comply with all requirements of the Safe Harbor described in the Notice, including, without limitation, the requirement that each Partner shall prepare and file all federal income tax returns reporting the income tax effects of each “Safe Harbor Partnership Interest” (as described in Section 3.02 of the Notice) issued by the Partnership in a manner consistent with the requirements of the Notice. ",
							"entities": [{
								"id": "755",
								"entityType": "ORGANIZATION",
								"end": 182,
								"start": 167,
								"value": "General Partner"
							}]
						}, {
							"id": "756",
							"text": "(b) Amendment. Each Partner authorizes the General Partner to amend Section 10.7(a) to the extent necessary to achieve substantially the same tax treatment with respect to any interest in the Partnership transferred to a service provider by the Partnership in connection with services provided to the Partnership as set forth in section 4 of the Notice (e.g., to reflect changes from the rules set forth in the Notice in subsequent Internal Revenue Service guidance), provided that such amendment is not materially adverse to any Partner (as compared with the after-tax consequences that would result if the provisions of the Notice applied to all interests in the Partnership transferred to a service provider by the Partnership in connection with services provided to the Partnership). ",
							"entities": [{
								"id": "756",
								"entityType": "ORGANIZATION",
								"end": 456,
								"start": 432,
								"value": "Internal Revenue Service"
							}]
						}, {
							"id": "757",
							"text": "Section 10.8 Tax Basis Elections. Each Limited Partner hereby agrees and covenants that, with respect to such Partner’s interest in the Partnership, it shall not make an election under Section 732(d) of the Code without the prior written consent of the General Partner. Each Limited Partner hereby acknowledges and agrees that the Partnership may, but shall not be obligated to, elect to be treated as an electing investment Partnership under Section 743(e) of the Code in the event the Partnership qualifies to do so. In such event, each transferring Limited Partner hereby agrees to provide the Partnership and its transferee with the timely notice required in IRS Notice 2005-32, or any successor guidance or interpretations(s), including such information as is necessary to enable such transferee to compute the amount of losses disallowed under Section 743(e) of the Code. Alternatively, in the event that the Partnership elects or is required to adjust the basis of the Partnership property under Section 743 of the Code, each Limited Partner hereby agrees to promptly provide the General Partner with any information reasonably requested by the General Partner in connection with such adjustment to the basis of Partnership property. In addition, to the extent that the transfer to a Limited Partner (or the transfer of interests in a Limited Partner) results in the Partnership adjusting the basis of Partnership property, each Limited Partner that received an interest in the Partnership by reason of such transfer (or, in the case of the transfer of interest in a Limited Partner, such Limited Partner) hereby agrees to reimburse the Partnership and/or the General Partner within 10 Business Days for any expenses (including without limitation accounting fees) reasonably incurred by the Partnership and/or the General Partner (and their respective affiliates) in connection with effecting such adjustments to the basis of Partnership property as it relates to such transfer. The General Partner is hereby authorized by each Limited Partner, with respect to any distribution to which such Limited Partner might otherwise be entitled, to defer making such distribution to such Limited Partner, if at the time such distribution would otherwise be effected, such Limited Partner has not satisfied its obligation to make the reimbursements provided for in the preceding sentence within the period specified therein.",
							"entities": [{
								"id": "757",
								"entityType": "LOCATION",
								"end": 567,
								"start": 552,
								"value": "Limited Partner"
							}, {
								"id": "757",
								"entityType": "ORGANIZATION",
								"end": 1167,
								"start": 1152,
								"value": "General Partner"
							}, {
								"id": "757",
								"entityType": "ORGANIZATION",
								"end": 1451,
								"start": 1436,
								"value": "Limited Partner"
							}]
						}, {
							"id": "758",
							"text": "",
							"entities": []
						}, {
							"id": "759",
							"text": "",
							"entities": []
						}, {
							"id": "760",
							"text": "704094543 -69- ",
							"entities": []
						}, {
							"id": "761",
							"text": "Section 10.9 Annual Meeting. The General Partner will hold annual general informational meetings for the Limited Partners. ",
							"entities": [{
								"id": "761",
								"entityType": "ORGANIZATION",
								"end": 121,
								"start": 105,
								"value": "Limited Partners"
							}]
						}, {
							"id": "762",
							"text": "Section 10.10 Change in Accountants. If during the term of the Partnership, the General Partner chooses to change the independent certified public accountants responsible for preparation of the reports required by Section 10.3(b)(i), the General Partner will provide the Limited Partners with prior written notice of such change no later than 30 days prior to the effective date of such change. Absent extraordinary circumstances, the Partnership will use a “big four” accounting firm for preparation of the reports required by Section 10.3(b)(i). ",
							"entities": [{
								"id": "762",
								"entityType": "ORGANIZATION",
								"end": 95,
								"start": 80,
								"value": "General Partner"
							}, {
								"id": "762",
								"entityType": "ORGANIZATION",
								"end": 253,
								"start": 238,
								"value": "General Partner"
							}]
						}, {
							"id": "763",
							"text": "ARTICLE XI ",
							"entities": []
						}, {
							"id": "764",
							"text": "CERTIFICATE OF LIMITED PARTNERSHIP; POWER OF ATTORNEY ",
							"entities": []
						}, {
							"id": "765",
							"text": "Section 11.1 Certificate of Partnership. A certificate of Limited Partnership within the meaning of the Delaware Partnership Act (the “Certificate”) was prepared prior to the execution and delivery of this Agreement. The General Partner caused the Certificate to be filed and recorded in the office of the Secretary of State of the State of Delaware and, to the extent required by local law, will cause the Certificate to be filed and recorded in the appropriate place in each state in which the Partnership may hereafter establish a place of business; provided, however, that the Partnership will not be obligated to provide the Limited Partners with a copy of any amendment to or restatement of the Certificate other than any amendment or restatement required to be filed in connection with an amendment of this Agreement pursuant to Section 12.1. The General Partner will also cause to be filed, recorded and published such statements, notices, certificates or other instruments required by any provision of any applicable law which governs the formation of the Partnership or the conduct of its business from time to time. ",
							"entities": [{
								"id": "765",
								"entityType": "LOCATION",
								"end": 349,
								"start": 341,
								"value": "Delaware"
							}, {
								"id": "765",
								"entityType": "ORGANIZATION",
								"end": 646,
								"start": 630,
								"value": "Limited Partners"
							}, {
								"id": "765",
								"entityType": "ORGANIZATION",
								"end": 869,
								"start": 854,
								"value": "General Partner"
							}]
						}, {
							"id": "766",
							"text": "Section 11.2 Power of Attorney. Each of the undersigned does hereby constitute and appoint each partner of the General Partner (for so long as such partner is not a Terminated Partner) and each person who hereafter becomes a partner of the General Partner (for so long as such partner is not a Terminated Partner) with full power to act without the others, as his, her or its true and lawful representative and attorney-in-fact, in her, his or its name, place and stead, to make, execute, sign, acknowledge and deliver or file (a) the Certificate, (b) any amendment to or cancellation of the Certificate or any amendment to, or waiver of, this Agreement effected in accordance with Section 12.1, (c) all instruments, documents and certificates which may from time to time be required by any law to effectuate, implement and continue the valid and subsisting existence of the Partnership, (d) all instruments, documents and certificates which may be required to effectuate the dissolution and termination of the Partnership, (e) in the case of a Defaulting Partner any bills of sale or other appropriate transfer documents necessary to effectuate transfers of such Defaulting Partner’s interest pursuant to Section 6.11 above and (f) in the case of a Regulated Investor, all instruments, documents and certificates which may be required to effectuate Section 6.6. The powers of attorney granted herein will be deemed to be coupled with an interest, will be irrevocable and will survive the death, incompetency, disability or dissolution of a Limited Partner. Without limiting the foregoing, the powers of attorney",
							"entities": [{
								"id": "766",
								"entityType": "ORGANIZATION",
								"end": 126,
								"start": 111,
								"value": "General Partner"
							}, {
								"id": "766",
								"entityType": "ORGANIZATION",
								"end": 255,
								"start": 240,
								"value": "General Partner"
							}]
						}, {
							"id": "767",
							"text": "",
							"entities": []
						}, {
							"id": "768",
							"text": "",
							"entities": []
						}, {
							"id": "769",
							"text": "704094543 -70- ",
							"entities": []
						}, {
							"id": "770",
							"text": "granted herein will not be deemed to constitute the written consent of any Limited Partner for purposes of Section 12.1. Notwithstanding the foregoing or anything contained in this Agreement to the contrary, the foregoing power of attorney may not be exercised by the General Partner after the occurrence of an event specified in Section 8.2 or the removal of the General Partner pursuant to Section 5.9. ",
							"entities": [{
								"id": "770",
								"entityType": "ORGANIZATION",
								"end": 283,
								"start": 268,
								"value": "General Partner"
							}, {
								"id": "770",
								"entityType": "ORGANIZATION",
								"end": 379,
								"start": 364,
								"value": "General Partner"
							}]
						}, {
							"id": "771",
							"text": "ARTICLE XII ",
							"entities": []
						}, {
							"id": "772",
							"text": "MISCELLANEOUS ",
							"entities": []
						}, {
							"id": "773",
							"text": "Section 12.1 Amendments. ",
							"entities": []
						}, {
							"id": "774",
							"text": "(a) This Agreement may be amended only by the written consent of the General Partner and, except as otherwise provided in this Section 12.1, a Majority in Interest of the Limited Partners. ",
							"entities": [{
								"id": "774",
								"entityType": "ORGANIZATION",
								"end": 187,
								"start": 171,
								"value": "Limited Partners"
							}]
						}, {
							"id": "775",
							"text": "(b) Notwithstanding anything in this Section 12.1 to the contrary, no amendment will be valid as to any Limited Partner (including a Defaulting Partner) which increases or decreases such Limited Partner’s Commitment without the written consent of such Limited Partner. ",
							"entities": []
						}, {
							"id": "776",
							"text": "(c) Notwithstanding anything in this Section 12.1 to the contrary, no amendment will be valid as to any Limited Partner (including a Defaulting Partner) which alters (i) the provisions of Sections 2.3, 3.3, 4.1 or 8.3(c) or (ii) any other provision of this Agreement in a manner adverse to such Limited Partner, without the written consent of such Limited Partner; provided, however, that with respect to clause (ii), if such Limited Partner is not treated differently in any material respect from any other Limited Partner then such amendment will be valid with only the written consent of the General Partner and the Limited Partners representing at least a Majority in Interest of the Limited Partners. ",
							"entities": [{
								"id": "776",
								"entityType": "ORGANIZATION",
								"end": 704,
								"start": 688,
								"value": "Limited Partners"
							}]
						}, {
							"id": "777",
							"text": "(d) Notwithstanding anything in this Section 12.1 to the contrary, no amendment will be valid as to any Limited Partner (including a Defaulting Partner), which alters the provisions of Sections 1.3, 5.4, 5.10, 5.11, 6.1, 6.7(c), or 12.1 without the written consent of the General Partner and at least Two-Thirds in Interest of the Limited Partners. ",
							"entities": [{
								"id": "777",
								"entityType": "ORGANIZATION",
								"end": 347,
								"start": 331,
								"value": "Limited Partners"
							}]
						}, {
							"id": "778",
							"text": "(e) Notwithstanding anything in this Section 12.1 to the contrary, no amendment which would alter the provisions of Section 5.5 and 6.6, or, with respect to Benefit Plan Investors, Section 5.6, Section 12.1(e), the provisions in Section 5.15 relating to Benefit Plan Investors or the definitions of Benefit Plan Investor or Redemption Value, will be valid without the written consent of at least a Majority in Interest of the Affected Limited Partners that are materially and adversely affected by such amendment (including Limited Partners whose direct or indirect beneficial owners would be so affected), which for purposes of any amendment to the ECI covenant in Section 5.5(ii), shall include a majority in interest of Non-U.S. Partners to whom Section 892 of the Code does not apply.",
							"entities": [{
								"id": "778",
								"entityType": "ORGANIZATION",
								"end": 540,
								"start": 524,
								"value": "Limited Partners"
							}, {
								"id": "778",
								"entityType": "ORGANIZATION",
								"end": 740,
								"start": 723,
								"value": "Non-U.S. Partners"
							}]
						}, {
							"id": "779",
							"text": "",
							"entities": []
						}, {
							"id": "780",
							"text": "",
							"entities": []
						}, {
							"id": "781",
							"text": "704094543 -71- ",
							"entities": []
						}, {
							"id": "782",
							"text": "(f) Notwithstanding anything in this Section 12.1 to the contrary, no amendment shall be made which would amend the provisions hereof relating to the rights of BHCA Partners without the consent of each BHCA Partner affected thereby. ",
							"entities": [{
								"id": "782",
								"entityType": "ORGANIZATION",
								"end": 173,
								"start": 160,
								"value": "BHCA Partners"
							}, {
								"id": "782",
								"entityType": "ORGANIZATION",
								"end": 214,
								"start": 202,
								"value": "BHCA Partner"
							}]
						}, {
							"id": "783",
							"text": "(g) Notwithstanding anything in this Section 12.1 to the contrary, the General Partner may amend any provisions of this Agreement solely as it relates to a Limited Partner pursuant to one or more side letters with such Limited Partner without the consent of the Limited Partners not party to such side letters. ",
							"entities": [{
								"id": "783",
								"entityType": "ORGANIZATION",
								"end": 86,
								"start": 71,
								"value": "General Partner"
							}, {
								"id": "783",
								"entityType": "ORGANIZATION",
								"end": 278,
								"start": 262,
								"value": "Limited Partners"
							}]
						}, {
							"id": "784",
							"text": "(h) In addition to any amendments or waivers otherwise authorized hereby, this Agreement may be amended from time to time by the General Partner without the consent of any of the Limited Partners (i) to add to the representations, duties or obligations of the General Partner or surrender any right or power (but not responsibilities) granted to the General Partner herein; (ii) to take such actions contemplated in Sections 5.6(e) or 6.6(b); (iii) to cure any ambiguity or correct any provisions hereof which may be inconsistent with any other provisions hereof, or correct any printing, stenographic or clerical errors or omissions; (iv) to admit one or more Additional Limited Partners, or withdraw one or more Limited Partners, in accordance with the terms of this Agreement; and (v) with the prior written consent of the Advisory Committee, to the extent the taxation of the Carried Interest is adversely affected by any change in law, as determined by the General Partner, so long as (A) such amendment does not adversely affect the interests of any Limited Partner, (B) the General Partner bears all legal and other costs and expenses associated with (1) assessing, evaluating, processing or otherwise responding to any such change in law, (2) drafting and proposing any amendment pursuant to this clause (v) and (3) reorganizing or restructuring the Partnership as a result of any amendment pursuant to this clause (v), (C) such amendment does not change the amount, timing, character or tax treatment of distributions pursuant to Sections 3.2 and 3.3 to any Limited Partner and (D) the General Partner gives the Limited Partners at least ten (10) Business Days written notice prior to the effectiveness of any amendment pursuant to this clause (v). The General Partner shall promptly send each Limited Partner a copy of any amendment adopted pursuant to Section 12.1, and, solely with respect to any amendment made by the General Partner pursuant to this Section 12.1(h), if within 30 days of receipt of a copy of such amendment, no less than Fifteen Percent in Interest of the Limited Partners notify the General Partner in writing of their objection to such amendment, then the General Partner shall submit such amendment for approval by a Majority in Interest of the Limited Partners pursuant to Section 12.1(a). ",
							"entities": [{
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 195,
								"start": 179,
								"value": "Limited Partners"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 730,
								"start": 714,
								"value": "Limited Partners"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 844,
								"start": 826,
								"value": "Advisory Committee"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 977,
								"start": 962,
								"value": "General Partner"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 1637,
								"start": 1621,
								"value": "Limited Partners"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 1946,
								"start": 1931,
								"value": "General Partner"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 2103,
								"start": 2052,
								"value": "Fifteen Percent in Interest of the Limited Partners"
							}, {
								"id": "784",
								"entityType": "ORGANIZATION",
								"end": 2295,
								"start": 2279,
								"value": "Limited Partners"
							}]
						}, {
							"id": "785",
							"text": "Section 12.2 Successors. Except as otherwise provided herein, this Agreement will inure to the benefit of and be binding upon the Partners and their legal representatives, heirs, successors and assigns. ",
							"entities": []
						}, {
							"id": "786",
							"text": "Section 12.3 Governing Law; Severability. This Agreement will be construed in accordance with the laws of the State of Delaware and, to the maximum extent possible, in such manner as to comply with all the terms and conditions of the Delaware Partnership Act. If it is determined by a court of competent jurisdiction that any provision of this Agreement is invalid under applicable law, such provision will be ineffective only to the extent of such prohibition or invalidity, without invalidating the remainder of this Agreement.",
							"entities": [{
								"id": "786",
								"entityType": "LOCATION",
								"end": 127,
								"start": 119,
								"value": "Delaware"
							}]
						}, {
							"id": "787",
							"text": "",
							"entities": []
						}, {
							"id": "788",
							"text": "",
							"entities": []
						}, {
							"id": "789",
							"text": "704094543 -72- ",
							"entities": []
						}, {
							"id": "790",
							"text": "Section 12.4 Notices. All notices, demands and other communications to be given and delivered under or by reason of provisions under this Agreement will be in writing and will be deemed to have been given when personally delivered, sent by telecopy (with hard copy to follow by reputable overnight courier) or sent by reputable overnight courier service (charges prepaid) or mailed by first class mail (with a copy sent by telecopy) to the addresses or telecopy numbers set forth in Schedule 1 hereto or to such other address or telecopy number as has been indicated to all Partners. ",
							"entities": []
						}, {
							"id": "791",
							"text": "Section 12.5 Legal Counsel. Each Partner hereby agrees and acknowledges that: ",
							"entities": []
						}, {
							"id": "792",
							"text": "(a) The law firm retained by the General Partner, the Partnership and any Parallel Vehicle or Separate Investment Entity (the “GP’s Counsel”) in connection with the formation of the Partnership, the offering of Limited Partner interests and the management and operation of the Partnership does not and will not represent the Limited Partners in connection with any such matter or in connection with any dispute which may arise between the Limited Partners on one hand and the General Partner, the Partnership and any Parallel Vehicle or Separate Investment Entity on the other (the “Partnership Legal Matters”). ",
							"entities": [{
								"id": "792",
								"entityType": "ORGANIZATION",
								"end": 48,
								"start": 33,
								"value": "General Partner"
							}, {
								"id": "792",
								"entityType": "ORGANIZATION",
								"end": 341,
								"start": 325,
								"value": "Limited Partners"
							}, {
								"id": "792",
								"entityType": "ORGANIZATION",
								"end": 455,
								"start": 439,
								"value": "Limited Partners"
							}]
						}, {
							"id": "793",
							"text": "(b) Each Limited Partner will, if it wishes counsel on a Partnership Legal Matter, retain its own independent counsel with respect to each of the foregoing matters described in Section 12.5(a). ",
							"entities": []
						}, {
							"id": "794",
							"text": "(c) Each Limited Partner hereby agrees that the GP’s Counsel may represent (i) the General Partner and the Partnership and any Parallel Vehicle or Separate Investment Entity in connection with any and all Partnership Legal Matters (including any dispute between the General Partner and one or more Limited Partners, but excluding a Limited Partner’s derivative action brought against the General Partner), and may further represent the Predecessor Resolute Fund Entities in connection with their mezzanine or other investments, or loans or transactions with Portfolio Companies. ",
							"entities": [{
								"id": "794",
								"entityType": "ORGANIZATION",
								"end": 281,
								"start": 266,
								"value": "General Partner"
							}]
						}, {
							"id": "795",
							"text": "Section 12.6 Miscellaneous. This document and the schedules, exhibits and side letter agreements between the Partnership and certain of the Limited Partners in connection herewith and the Subscription Agreements contain the entire Agreement among the parties and supersede all prior arrangements or understanding with respect thereto. Descriptive headings are for convenience only and will not control or affect the meaning or construction of any provision of this Agreement. This Agreement may be executed in any number of counterparts, any one of which need not contain the signatures of more than one party, but all of such counterparts together will constitute one agreement. The symbol “$” and the term “dollar” refer to United States dollars. ",
							"entities": [{
								"id": "795",
								"entityType": "ORGANIZATION",
								"end": 156,
								"start": 140,
								"value": "Limited Partners"
							}, {
								"id": "795",
								"entityType": "LOCATION",
								"end": 739,
								"start": 726,
								"value": "United States"
							}]
						}, {
							"id": "796",
							"text": "[Remainder of page intentionally left blank]",
							"entities": []
						}, {
							"id": "797",
							"text": "",
							"entities": []
						}, {
							"id": "798",
							"text": "",
							"entities": []
						}, {
							"id": "799",
							"text": "",
							"entities": []
						}, {
							"id": "800",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "801",
							"text": "LIMITED PARTNERS ",
							"entities": []
						}, {
							"id": "802",
							"text": "On file with the General Partner.",
							"entities": [{
								"id": "802",
								"entityType": "ORGANIZATION",
								"end": 32,
								"start": 17,
								"value": "General Partner"
							}]
						}, {
							"id": "803",
							"text": "",
							"entities": []
						}, {
							"id": "804",
							"text": "",
							"entities": []
						}, {
							"id": "805",
							"text": "",
							"entities": []
						}, {
							"id": "806",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "807",
							"text": "SCHEDULE 1 ",
							"entities": []
						}, {
							"id": "808",
							"text": "On file with the General Partner.",
							"entities": [{
								"id": "808",
								"entityType": "ORGANIZATION",
								"end": 32,
								"start": 17,
								"value": "General Partner"
							}]
						}, {
							"id": "809",
							"text": "",
							"entities": []
						}, {
							"id": "810",
							"text": "",
							"entities": []
						}, {
							"id": "811",
							"text": "704094543 ",
							"entities": []
						}, {
							"id": "812",
							"text": "EXHIBIT A ",
							"entities": []
						}, {
							"id": "813",
							"text": "Form of Guaranty Agreement",
							"entities": []
						}, {
							"id": "814",
							"text": "",
							"entities": []
						}, {
							"id": "815",
							"text": "",
							"entities": []
						}, {
							"id": "816",
							"text": "EXECUTION COPY ",
							"entities": []
						}, {
							"id": "817",
							"text": "704086038 ",
							"entities": []
						}, {
							"id": "818",
							"text": "GUARANTY AGREEMENT ",
							"entities": []
						}, {
							"id": "819",
							"text": "THIS GUARANTY AGREEMENT (this “Agreement”), dated as of October 11, 2013, by the undersigned guarantors (together with any person who may hereafter agree to become a guarantor under this Agreement by signing a written instrument expressly agreeing to be so bound, each a “Guarantor” and collectively, the “Guarantors”), and Resolute Fund Partners III, L.P., a Delaware limited partnership (the “General Partner”), for the benefit of The Resolute Fund III, L.P., a Delaware limited partnership (the “Partnership”), each of the limited partners of the Partnership, each Parallel Vehicle that may be formed from time to time (the “Parallel Vehicles”) and each of the limited partners of the Parallel Vehicles (the Partnership, the Parallel Vehicles and each of their respective limited partners are individually referred to as a “Beneficiary” and collectively, the “Beneficiaries”). All capitalized terms not otherwise defined herein shall have the meanings set forth in the Agreement of Limited Partnership of the Partnership and the Parallel Vehicles, as amended from time to time (the “Partnership Agreements”). ",
							"entities": [{
								"id": "819",
								"entityType": "ORGANIZATION",
								"end": 356,
								"start": 352,
								"value": "L.P."
							}, {
								"id": "819",
								"entityType": "LOCATION",
								"end": 368,
								"start": 360,
								"value": "Delaware"
							}, {
								"id": "819",
								"entityType": "ORGANIZATION",
								"end": 460,
								"start": 456,
								"value": "L.P."
							}, {
								"id": "819",
								"entityType": "LOCATION",
								"end": 472,
								"start": 464,
								"value": "Delaware"
							}]
						}, {
							"id": "820",
							"text": "WHEREAS, as an inducement to the limited partners to invest in the Partnership and the Parallel Vehicles and make their capital commitments to the Partnership and the Parallel Vehicles, the Guarantors have agreed to enter into this Agreement; ",
							"entities": []
						}, {
							"id": "821",
							"text": "WHEREAS, the Guarantors are the direct and indirect members of the General Partner and acknowledge that they will benefit from the limited partners’ investments in the Partnership and the Parallel Vehicles; ",
							"entities": [{
								"id": "821",
								"entityType": "ORGANIZATION",
								"end": 82,
								"start": 67,
								"value": "General Partner"
							}]
						}, {
							"id": "822",
							"text": "WHEREAS, in consideration for the agreements set forth in the Partnership Agreements, the Guarantors are incurring obligations hereunder concurrently with the incurring by the General Partner of its obligations under such Partnership Agreements; and ",
							"entities": []
						}, {
							"id": "823",
							"text": "WHEREAS, pursuant to Section 8.3(c) (General Partner Give Back) of the Partnership Agreements, the General Partner may be required to contribute capital or return distributions to the Partnership and/or Parallel Vehicles, at such times and in such amounts as are provided for therein (the obligations of the General Partner thereunder, the “Give Back Obligation”). ",
							"entities": []
						}, {
							"id": "824",
							"text": "NOW, THEREFORE, in consideration of the premises set forth above, the parties hereto hereby agree as follows: ",
							"entities": []
						}, {
							"id": "825",
							"text": "1. (a) Each Guarantor hereby unconditionally and irrevocably guarantees severally (but not jointly) in favor of the Beneficiaries the full payment in cash and performance, when due, of such Guarantor’s Pro Rata Share (as defined below) of the remaining amount of the General Partner’s Give Back Obligation. If for any reason the General Partner shall fail fully and punctually to pay and perform the Give Back Obligation, each of the Guarantors shall, subject to the preceding sentence, pay its Pro Rata Share of such sum to the Partnership and/or the Parallel Vehicles, as applicable, to satisfy the General Partner’s Give Back Obligation. This Guaranty is an absolute, unconditional, continuing guarantee of payment and performance and not of collection, and is in no way conditioned or contingent upon any attempt to collect from the",
							"entities": []
						}, {
							"id": "826",
							"text": "",
							"entities": []
						}, {
							"id": "827",
							"text": "",
							"entities": []
						}, {
							"id": "828",
							"text": "704086038 2 ",
							"entities": []
						}, {
							"id": "829",
							"text": "General Partner, enforce performance by the General Partner or on any other condition or contingency. No Guarantor shall be obligated to pay more than its Pro Rata Share. ",
							"entities": [{
								"id": "829",
								"entityType": "ORGANIZATION",
								"end": 59,
								"start": 44,
								"value": "General Partner"
							}]
						}, {
							"id": "830",
							"text": "(b) “Pro Rata Share” shall mean the fraction, the numerator of which shall be the aggregate distributions made at any time to a Guarantor and to its Related Partners (as defined in the limited partnership agreement of the General Partner) with respect to the General Partner’s Carried Interest (the “General Partner Distributions”), and the denominator of which shall be the aggregate distributions made at any time to the Guarantors and their Related Partners in respect of the General Partner’s Carried Interest (assuming, for this purpose, that all Carried Interest is distributed (and not retained) by the General Partner). ",
							"entities": [{
								"id": "830",
								"entityType": "ORGANIZATION",
								"end": 293,
								"start": 259,
								"value": "General Partner 's Carried Interest"
							}, {
								"id": "830",
								"entityType": "ORGANIZATION",
								"end": 513,
								"start": 479,
								"value": "General Partner 's Carried Interest"
							}, {
								"id": "830",
								"entityType": "ORGANIZATION",
								"end": 625,
								"start": 610,
								"value": "General Partner"
							}]
						}, {
							"id": "831",
							"text": "(c) The General Partner and each Guarantor covenants and agrees that 100% of the General Partner’s Carried Interest and Give Back Obligation will be supported by this Guaranty Agreement. ",
							"entities": [{
								"id": "831",
								"entityType": "ORGANIZATION",
								"end": 115,
								"start": 81,
								"value": "General Partner 's Carried Interest"
							}]
						}, {
							"id": "832",
							"text": "2. Each guaranty pursuant to Section 1 above (a) shall not be impaired, discharged or terminated by any amendment to the Partnership Agreement (other than an amendment to Section 8.3(c) (General Partner Give Back) of the Partnership Agreements) or any other act or omission that may, in accordance with applicable law, affect the enforceability of a guaranty, and (b) shall not be affected by the bankruptcy, insolvency or inability to pay of the General Partner, a Guarantor or of any other party. ",
							"entities": []
						}, {
							"id": "833",
							"text": "3. Promptly following the determination that a contribution is required to be made by the General Partner pursuant to Section 8.3(c) (General Partner Giveback) of the Partnership Agreement, the General Partner shall notify its members of each Guarantor’s Pro Rata Share of the Give Back Obligation. When the Give Back Obligation becomes due and payable and the General Partner fails to fully and punctually pay and perform its Give Back Obligation, the Partnership, the Parallel Vehicles or any of their respective limited partners may make demand upon a Guarantor for the payment or performance of such Guarantor’s Pro Rata Share of such remaining amount of the Give Back Obligation, and each Guarantor binds and obliges itself to make such payment or performance forthwith to the Partnership and/or the Parallel Vehicles, as applicable, upon such demand. ",
							"entities": [{
								"id": "833",
								"entityType": "ORGANIZATION",
								"end": 105,
								"start": 90,
								"value": "General Partner"
							}, {
								"id": "833",
								"entityType": "ORGANIZATION",
								"end": 209,
								"start": 194,
								"value": "General Partner"
							}, {
								"id": "833",
								"entityType": "ORGANIZATION",
								"end": 376,
								"start": 361,
								"value": "General Partner"
							}]
						}, {
							"id": "834",
							"text": "4. Each Guarantor hereby assents to all the terms and conditions of the Give Back Obligation and waives: (a) demand for the payment of the Give Back Obligation or of any claim for interest or any part thereof (other than the demand provided for in Section 3 of this Agreement); (b) notice of the occurrence of default or any event of default under the Give Back Obligation; (c) protest of the nonpayment of the Give Back Obligation or of any claim for interest or any part thereof; (d) notice of presentment, demand and protest; (e) notice of acceptance of any guaranty herein provided for or of the terms and provisions thereof or hereof by the Partnership, the Parallel Vehicles or any of their respective limited partners; (f) notice of any indulgences or extensions granted to the General Partner or any successor to the General Partner or any person or party which shall have assumed the obligations of the General Partner; (g) any requirement of diligence or promptness with respect to the performance of the Give Back Obligation or this Agreement; (h) any enforcement of the Give Back Obligation; and (i) any and all notices of every kind and description which may be required to be given by any statute or rule of law in any jurisdiction. The waivers set forth in this Section 4 shall be effective",
							"entities": [{
								"id": "834",
								"entityType": "ORGANIZATION",
								"end": 840,
								"start": 825,
								"value": "General Partner"
							}]
						}, {
							"id": "835",
							"text": "",
							"entities": []
						}, {
							"id": "836",
							"text": "",
							"entities": []
						}, {
							"id": "837",
							"text": "704086038 3 ",
							"entities": []
						}, {
							"id": "838",
							"text": "notwithstanding the fact that the General Partner ceases to exist by reason of its liquidation, merger, consolidation or otherwise. ",
							"entities": []
						}, {
							"id": "839",
							"text": "5. The obligations of each Guarantor under this Agreement shall be unconditional and primary (as though such Guarantor were the maker of the Give Back Obligation), irrespective of the validity, regularity or enforceability of the Give Back Obligation, and shall not be affected by any action taken under the Partnership Agreements with respect to the Give Back Obligation in the exercise of any right or remedy therein conferred, or by any failure or omission on the part of the Partnership, the Parallel Vehicles or any of their respective limited partners to enforce any right given thereunder or hereunder or any remedy conferred thereby or hereby, or by any waiver of any term, covenant, agreement or condition of the Give Back Obligation or this Agreement, or by any release of any security or any other guaranty at any time existing for the benefit of the Give Back Obligation, or by the merger or consolidation of the General Partner, the Partnership and/or the Parallel Vehicles, or by sale, lease or transfer by the General Partner to any person of any or all of its properties, or by any action of the Partnership, the Parallel Vehicles or any of their respective limited partners granting indulgence or extension to, or waiving or acquiescing in any default by the General Partner, or any successor to the General Partner or by any other party which shall have assumed its obligations, or by reason of any disability or other defense of the General Partner or any successor to the General Partner, or by any modification, alteration, or by any circumstance whatsoever (with or without notice to or knowledge of any Guarantor) which may or might in any manner or to any extent vary the risk of any Guarantor hereunder; it being the purpose and intent of each Guarantor that the obligations of such Guarantor hereunder shall be absolute and unconditional under any and all circumstances and shall not be discharged except by payment or performance or by release as herein provided, and then only to the extent of such payment, performance or release. ",
							"entities": [{
								"id": "839",
								"entityType": "ORGANIZATION",
								"end": 940,
								"start": 925,
								"value": "General Partner"
							}, {
								"id": "839",
								"entityType": "ORGANIZATION",
								"end": 1040,
								"start": 1025,
								"value": "General Partner"
							}]
						}, {
							"id": "840",
							"text": "6. Any claim against the Partnership or a Parallel Vehicle to which any Guarantor may be or become entitled (including, without limitation, claims by subrogation or otherwise by reason of any payment or performance by such Guarantor in satisfaction and discharge, in whole or in part, of its obligations under this Agreement) shall be and hereby is made subject and subordinate to the prior payment or performance in full of the Give Back Obligation. ",
							"entities": []
						}, {
							"id": "841",
							"text": "7. If a court of competent jurisdiction shall hold any provisions of this Agreement to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions shall not in any way be affected or impaired thereby. ",
							"entities": []
						}, {
							"id": "842",
							"text": "8. This Agreement may be executed in any number of counterparts and by the different parties hereto on separate counterparts, each of which when so executed and delivered shall be an original, but all of the counterparts shall together constitute one and the same instrument. ",
							"entities": []
						}, {
							"id": "843",
							"text": "9. This Agreement shall remain in full force and effect until such time as the Give Back Obligation has been satisfied. Notwithstanding the foregoing, this Agreement shall be reinstated if at any time following the termination of this Agreement under the preceding sentence, any payment to the Partnership a Parallel Vehicle or their respective limited partners by the Guarantors, the General Partner or by any other person in satisfaction of the Give Back Obligation is rescinded or must otherwise be returned by the Partnership, a Parallel Vehicle or",
							"entities": []
						}, {
							"id": "844",
							"text": "",
							"entities": []
						}, {
							"id": "845",
							"text": "",
							"entities": []
						}, {
							"id": "846",
							"text": "704086038 4 ",
							"entities": []
						}, {
							"id": "847",
							"text": "any of their respective limited partners or any other person to the Guarantors, the General Partner or such other person making such payment upon the insolvency, bankruptcy, reorganization, dissolution or liquidation of the Guarantors, the General Partner or such other person making such payment or otherwise, and is so rescinded or returned, all as though such payment had not been made. Such period of reinstatement shall continue until satisfaction of the conditions contained in, and shall continue to be subject to, the provisions of this Section 9. ",
							"entities": []
						}, {
							"id": "848",
							"text": "10. The provisions of this Agreement are solely for the benefit of the Beneficiaries. Nothing in this Agreement, express or implied, is intended or shall be construed to give any other person any legal or equitable right, remedy or claim under or in respect of this Agreement or any provision contained herein. ",
							"entities": []
						}, {
							"id": "849",
							"text": "11. THIS AGREEMENT SHALL BE GOVERNED BY AND CONSTRUED AND ENFORCED IN ACCORDANCE WITH THE LAWS OF THE STATE OF DELAWARE APPLICABLE TO AGREEMENTS MADE AND TO BE PERFORMED ENTIRELY WITHIN SUCH STATE. ",
							"entities": []
						}, {
							"id": "850",
							"text": "12. This Agreement shall inure to the benefit of the successors and assigns of the Partnership, the Parallel Vehicles and their respective limited partners who shall have, to the extent of their interests, the rights of the Partnership, the Parallel Vehicles and their respective limited partners hereunder. This Agreement is binding upon the Guarantors and their respective successors and assigns. A Guarantor may not assign his or her obligations hereunder, in whole or in part, to any other person. ",
							"entities": []
						}, {
							"id": "851",
							"text": "13. This Agreement may be amended only with the consent of all Limited Partners (excluding any Defaulting Partner, any defaulting limited partner of a Parallel Vehicle, the General Partner, the Special Limited Partner or any of their respective Affiliates or any Limited Partner transferee of the General Partner) and the unanimous consent of the Guarantors. Notwithstanding the foregoing, subject to Section 12 hereof, this Agreement may be amended to reflect the addition of persons as Guarantors without the consent of the limited partners of the Partnership or any Parallel Vehicle. The General Partner hereby agrees that it will not admit any person as a member that receives distributions with respect to the General Partner’s Carried Interest unless such person shall have executed a supplemental agreement hereto pursuant to which such person agrees to become a Guarantor hereunder and to be bound by the provisions of this Agreement or another Guarantor shall have executed a supplemental agreement hereto pursuant to which such Guarantor shall guarantee the Pro Rata Share of such new member’s Give Back Obligation. ",
							"entities": [{
								"id": "851",
								"entityType": "ORGANIZATION",
								"end": 79,
								"start": 63,
								"value": "Limited Partners"
							}, {
								"id": "851",
								"entityType": "ORGANIZATION",
								"end": 312,
								"start": 297,
								"value": "General Partner"
							}, {
								"id": "851",
								"entityType": "ORGANIZATION",
								"end": 606,
								"start": 591,
								"value": "General Partner"
							}, {
								"id": "851",
								"entityType": "ORGANIZATION",
								"end": 749,
								"start": 715,
								"value": "General Partner 's Carried Interest"
							}]
						}, {
							"id": "852",
							"text": "14. In connection with the formation of a Parallel Vehicle or Separate Investment Vehicle in accordance with Section 5.14 (Parallel Vehicles) and Section 5.15 (Separate Investment Vehicles) of the Partnership Agreement, this Agreement shall be deemed to apply to any give back obligation of the General Partner to such Parallel Vehicle or Separate Investment Vehicle in all respects. ",
							"entities": []
						}, {
							"id": "853",
							"text": "15. This Agreement shall become effective as to any other person who becomes a Guarantor as of the date that such Guarantor first becomes a direct or indirect member of the General Partner and executes the supplemental agreement as described in Section 13.",
							"entities": [{
								"id": "853",
								"entityType": "ORGANIZATION",
								"end": 188,
								"start": 173,
								"value": "General Partner"
							}]
						}, {
							"id": "854",
							"text": "",
							"entities": []
						}, {
							"id": "855",
							"text": "",
							"entities": []
						}, {
							"id": "856",
							"text": "704086038 5 ",
							"entities": []
						}, {
							"id": "857",
							"text": "16. All notices, requests, demands and other communications shall be in writing and shall be sent by registered or certified mail, Federal Express, U.S. overnight mail, or given by telecopy or other electronic means or by hand delivery as follows: ",
							"entities": [{
								"id": "857",
								"entityType": "ORGANIZATION",
								"end": 146,
								"start": 131,
								"value": "Federal Express"
							}, {
								"id": "857",
								"entityType": "LOCATION",
								"end": 152,
								"start": 148,
								"value": "U.S."
							}]
						}, {
							"id": "858",
							"text": "(i) If to a Guarantor: ",
							"entities": []
						}, {
							"id": "859",
							"text": "c/o Resolute Fund Partners III, L.P. 399 Park Avenue, 30th Floor New York, New York 10022 Facsimile: (212) 755-5263 ",
							"entities": [{
								"id": "859",
								"entityType": "LOCATION",
								"end": 52,
								"start": 32,
								"value": "L.P. 399 Park Avenue"
							}, {
								"id": "859",
								"entityType": "LOCATION",
								"end": 73,
								"start": 65,
								"value": "New York"
							}, {
								"id": "859",
								"entityType": "LOCATION",
								"end": 83,
								"start": 75,
								"value": "New York"
							}]
						}, {
							"id": "860",
							"text": "or at such other address as a Guarantor shall have specified by notice in writing to the Partnership. ",
							"entities": []
						}, {
							"id": "861",
							"text": "(ii) If to the General Partner: ",
							"entities": []
						}, {
							"id": "862",
							"text": "Resolute Fund Partners III, L.P. 399 Park Avenue, 30th Floor New York, New York 10022 Facsimile: (212) 755-5263 ",
							"entities": [{
								"id": "862",
								"entityType": "LOCATION",
								"end": 48,
								"start": 28,
								"value": "L.P. 399 Park Avenue"
							}, {
								"id": "862",
								"entityType": "LOCATION",
								"end": 69,
								"start": 61,
								"value": "New York"
							}, {
								"id": "862",
								"entityType": "LOCATION",
								"end": 79,
								"start": 71,
								"value": "New York"
							}]
						}, {
							"id": "863",
							"text": "(iii) If to the Partnership: ",
							"entities": []
						}, {
							"id": "864",
							"text": "The Resolute Fund III, L.P. 399 Park Avenue, 30th Floor New York, New York 10022 Facsimile: (212) 755-5263 ",
							"entities": [{
								"id": "864",
								"entityType": "LOCATION",
								"end": 43,
								"start": 32,
								"value": "Park Avenue"
							}, {
								"id": "864",
								"entityType": "LOCATION",
								"end": 64,
								"start": 56,
								"value": "New York"
							}, {
								"id": "864",
								"entityType": "LOCATION",
								"end": 74,
								"start": 66,
								"value": "New York"
							}]
						}, {
							"id": "865",
							"text": "(iv) If to a Limited Partner of the Partnership, to such address as shall be set forth as the address of such limited partner in the books and records of the Partnership. ",
							"entities": []
						}, {
							"id": "866",
							"text": "Notices mailed in accordance with the foregoing shall be deemed to have been given and made three business days following the date so mailed or, if sent by telecopy or other electronic means, on the date so sent and appropriate answer back or confirmation of successful transmission is received.",
							"entities": []
						}, {
							"id": "867",
							"text": "",
							"entities": []
						}, {
							"id": "868",
							"text": "",
							"entities": []
						}, {
							"id": "869",
							"text": "",
							"entities": []
						}, {
							"id": "870",
							"text": "",
							"entities": []
						}, {
							"id": "871",
							"text": "",
							"entities": []
						}, {
							"id": "872",
							"text": "",
							"entities": []
						}, {
							"id": "873",
							"text": "",
							"entities": []
						}, {
							"id": "874",
							"text": "",
							"entities": []
						}, {
							"id": "875",
							"text": "",
							"entities": []
						}, {
							"id": "876",
							"text": "",
							"entities": []
						}, {
							"id": "877",
							"text": "",
							"entities": []
						}, {
							"id": "878",
							"text": "",
							"entities": []
						}, {
							"id": "879",
							"text": "",
							"entities": []
						}, {
							"id": "880",
							"text": "",
							"entities": []
						}, {
							"id": "881",
							"text": "",
							"entities": []
						}, {
							"id": "882",
							"text": "",
							"entities": []
						}, {
							"id": "883",
							"text": "",
							"entities": []
						}, {
							"id": "884",
							"text": "",
							"entities": []
						}, {
							"id": "885",
							"text": "",
							"entities": []
						}, {
							"id": "886",
							"text": "",
							"entities": []
						}, {
							"id": "887",
							"text": "",
							"entities": []
						}, {
							"id": "888",
							"text": "",
							"entities": []
						}, {
							"id": "889",
							"text": "",
							"entities": []
						}, {
							"id": "890",
							"text": "",
							"entities": []
						}, {
							"id": "891",
							"text": "",
							"entities": []
						}, {
							"id": "892",
							"text": "",
							"entities": []
						}, {
							"id": "893",
							"text": "",
							"entities": []
						}, {
							"id": "894",
							"text": "",
							"entities": []
						}, {
							"id": "895",
							"text": "",
							"entities": []
						}, {
							"id": "896",
							"text": "",
							"entities": []
						}, {
							"id": "897",
							"text": "",
							"entities": []
						}, {
							"id": "898",
							"text": "",
							"entities": []
						}, {
							"id": "899",
							"text": "",
							"entities": []
						}, {
							"id": "900",
							"text": "",
							"entities": []
						}

	];


	$scope.currentID = 1;

	$scope.currentItem = $scope.info_highlighted[$scope.currentID];

	$scope.incrementID = function() {
		$scope.currentID++;
		$scope.currentItem = $scope.info_highlighted[$scope.currentID];
		// $scope.$apply();
		console.log($scope.currentID);
	};
	$scope.decrementID = function() {
		$scope.currentID--;
		$scope.currentItem = $scope.info_highlighted[$scope.currentID];
		// $scope.$apply();
		console.log($scope.currentID);
	}

	console.log($scope.currentItem);

	console.log($scope.currentID);

});









