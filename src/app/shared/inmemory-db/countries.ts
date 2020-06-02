export class CountryDB {
    static countries = [
      { display: 'Afghanistan', value: 'AF' },
      { display: 'Åland Islands', value: 'AX' },
      { display: 'Albania', value: 'AL' },
      { display: 'Algeria', value: 'DZ' },
      { display: 'American Samoa', value: 'AS' },
      { display: 'AndorrA', value: 'AD' },
      { display: 'Angola', value: 'AO' },
      { display: 'Anguilla', value: 'AI' },
      { display: 'Antarctica', value: 'AQ' },
      { display: 'Antigua and Barbuda', value: 'AG' },
      { display: 'Argentina', value: 'AR' },
      { display: 'Armenia', value: 'AM' },
      { display: 'Aruba', value: 'AW' },
      { display: 'Australia', value: 'AU' },
      { display: 'Austria', value: 'AT' },
      { display: 'Azerbaijan', value: 'AZ' },
      { display: 'Bahamas', value: 'BS' },
      { display: 'Bahrain', value: 'BH' },
      { display: 'Bangladesh', value: 'BD' },
      { display: 'Barbados', value: 'BB' },
      { display: 'Belarus', value: 'BY' },
      { display: 'Belgium', value: 'BE' },
      { display: 'Belize', value: 'BZ' },
      { display: 'Benin', value: 'BJ' },
      { display: 'Bermuda', value: 'BM' },
      { display: 'Bhutan', value: 'BT' },
      { display: 'Bolivia', value: 'BO' },
      { display: 'Bosnia and Herzegovina', value: 'BA' },
      { display: 'Botswana', value: 'BW' },
      { display: 'Bouvet Island', value: 'BV' },
      { display: 'Brazil', value: 'BR' },
      { display: 'British Indian Ocean Territory', value: 'IO' },
      { display: 'Brunei Darussalam', value: 'BN' },
      { display: 'Bulgaria', value: 'BG' },
      { display: 'Burkina Faso', value: 'BF' },
      { display: 'Burundi', value: 'BI' },
      { display: 'Cambodia', value: 'KH' },
      { display: 'Cameroon', value: 'CM' },
      { display: 'Canada', value: 'CA' },
      { display: 'Cape Verde', value: 'CV' },
      { display: 'Cayman Islands', value: 'KY' },
      { display: 'Central African Republic', value: 'CF' },
      { display: 'Chad', value: 'TD' },
      { display: 'Chile', value: 'CL' },
      { display: 'China', value: 'CN' },
      { display: 'Christmas Island', value: 'CX' },
      { display: 'Cocos (Keeling) Islands', value: 'CC' },
      { display: 'Colombia', value: 'CO' },
      { display: 'Comoros', value: 'KM' },
      { display: 'Congo', value: 'CG' },
      { display: 'Congo, The Democratic Republic of the', value: 'CD' },
      { display: 'Cook Islands', value: 'CK' },
      { display: 'Costa Rica', value: 'CR' },
      { display: 'Cote D\'Ivoire', value: 'CI' },
      { display: 'Croatia', value: 'HR' },
      { display: 'Cuba', value: 'CU' },
      { display: 'Cyprus', value: 'CY' },
      { display: 'Czech Republic', value: 'CZ' },
      { display: 'Denmark', value: 'DK' },
      { display: 'Djibouti', value: 'DJ' },
      { display: 'Dominica', value: 'DM' },
      { display: 'Dominican Republic', value: 'DO' },
      { display: 'Ecuador', value: 'EC' },
      { display: 'Egypt', value: 'EG' },
      { display: 'El Salvador', value: 'SV' },
      { display: 'Equatorial Guinea', value: 'GQ' },
      { display: 'Eritrea', value: 'ER' },
      { display: 'Estonia', value: 'EE' },
      { display: 'Ethiopia', value: 'ET' },
      { display: 'Falkland Islands (Malvinas)', value: 'FK' },
      { display: 'Faroe Islands', value: 'FO' },
      { display: 'Fiji', value: 'FJ' },
      { display: 'Finland', value: 'FI' },
      { display: 'France', value: 'FR' },
      { display: 'French Guiana', value: 'GF' },
      { display: 'French Polynesia', value: 'PF' },
      { display: 'French Southern Territories', value: 'TF' },
      { display: 'Gabon', value: 'GA' },
      { display: 'Gambia', value: 'GM' },
      { display: 'Georgia', value: 'GE' },
      { display: 'Germany', value: 'DE' },
      { display: 'Ghana', value: 'GH' },
      { display: 'Gibraltar', value: 'GI' },
      { display: 'Greece', value: 'GR' },
      { display: 'Greenland', value: 'GL' },
      { display: 'Grenada', value: 'GD' },
      { display: 'Guadeloupe', value: 'GP' },
      { display: 'Guam', value: 'GU' },
      { display: 'Guatemala', value: 'GT' },
      { display: 'Guernsey', value: 'GG' },
      { display: 'Guinea', value: 'GN' },
      { display: 'Guinea-Bissau', value: 'GW' },
      { display: 'Guyana', value: 'GY' },
      { display: 'Haiti', value: 'HT' },
      { display: 'Heard Island and Mcdonald Islands', value: 'HM' },
      { display: 'Holy See (Vatican City State)', value: 'VA' },
      { display: 'Honduras', value: 'HN' },
      { display: 'Hong Kong', value: 'HK' },
      { display: 'Hungary', value: 'HU' },
      { display: 'Iceland', value: 'IS' },
      { display: 'India', value: 'IN' },
      { display: 'Indonesia', value: 'ID' },
      { display: 'Iran, Islamic Republic Of', value: 'IR' },
      { display: 'Iraq', value: 'IQ' },
      { display: 'Ireland', value: 'IE' },
      { display: 'Isle of Man', value: 'IM' },
      { display: 'Israel', value: 'IL' },
      { display: 'Italy', value: 'IT' },
      { display: 'Jamaica', value: 'JM' },
      { display: 'Japan', value: 'JP' },
      { display: 'Jersey', value: 'JE' },
      { display: 'Jordan', value: 'JO' },
      { display: 'Kazakhstan', value: 'KZ' },
      { display: 'Kenya', value: 'KE' },
      { display: 'Kiribati', value: 'KI' },
      { display: 'Korea, Democratic People\'S Republic of', value: 'KP' },
      { display: 'Korea, Republic of', value: 'KR' },
      { display: 'Kuwait', value: 'KW' },
      { display: 'Kyrgyzstan', value: 'KG' },
      { display: 'Lao People\'S Democratic Republic', value: 'LA' },
      { display: 'Latvia', value: 'LV' },
      { display: 'Lebanon', value: 'LB' },
      { display: 'Lesotho', value: 'LS' },
      { display: 'Liberia', value: 'LR' },
      { display: 'Libyan Arab Jamahiriya', value: 'LY' },
      { display: 'Liechtenstein', value: 'LI' },
      { display: 'Lithuania', value: 'LT' },
      { display: 'Luxembourg', value: 'LU' },
      { display: 'Macao', value: 'MO' },
      { display: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
      { display: 'Madagascar', value: 'MG' },
      { display: 'Malawi', value: 'MW' },
      { display: 'Malaysia', value: 'MY' },
      { display: 'Maldives', value: 'MV' },
      { display: 'Mali', value: 'ML' },
      { display: 'Malta', value: 'MT' },
      { display: 'Marshall Islands', value: 'MH' },
      { display: 'Martinique', value: 'MQ' },
      { display: 'Mauritania', value: 'MR' },
      { display: 'Mauritius', value: 'MU' },
      { display: 'Mayotte', value: 'YT' },
      { display: 'Mexico', value: 'MX' },
      { display: 'Micronesia, Federated States of', value: 'FM' },
      { display: 'Moldova, Republic of', value: 'MD' },
      { display: 'Monaco', value: 'MC' },
      { display: 'Mongolia', value: 'MN' },
      { display: 'Montserrat', value: 'MS' },
      { display: 'Morocco', value: 'MA' },
      { display: 'Mozambique', value: 'MZ' },
      { display: 'Myanmar', value: 'MM' },
      { display: 'Namibia', value: 'NA' },
      { display: 'Nauru', value: 'NR' },
      { display: 'Nepal', value: 'NP' },
      { display: 'Netherlands', value: 'NL' },
      { display: 'Netherlands Antilles', value: 'AN' },
      { display: 'New Caledonia', value: 'NC' },
      { display: 'New Zealand', value: 'NZ' },
      { display: 'Nicaragua', value: 'NI' },
      { display: 'Niger', value: 'NE' },
      { display: 'Nigeria', value: 'NG' },
      { display: 'Niue', value: 'NU' },
      { display: 'Norfolk Island', value: 'NF' },
      { display: 'Northern Mariana Islands', value: 'MP' },
      { display: 'Norway', value: 'NO' },
      { display: 'Oman', value: 'OM' },
      { display: 'Pakistan', value: 'PK' },
      { display: 'Palau', value: 'PW' },
      { display: 'Palestinian Territory, Occupied', value: 'PS' },
      { display: 'Panama', value: 'PA' },
      { display: 'Papua New Guinea', value: 'PG' },
      { display: 'Paraguay', value: 'PY' },
      { display: 'Peru', value: 'PE' },
      { display: 'Philippines', value: 'PH' },
      { display: 'Pitcairn', value: 'PN' },
      { display: 'Poland', value: 'PL' },
      { display: 'Portugal', value: 'PT' },
      { display: 'Puerto Rico', value: 'PR' },
      { display: 'Qatar', value: 'QA' },
      { display: 'Reunion', value: 'RE' },
      { display: 'Romania', value: 'RO' },
      { display: 'Russian Federation', value: 'RU' },
      { display: 'RWANDA', value: 'RW' },
      { display: 'Saint Helena', value: 'SH' },
      { display: 'Saint Kitts and Nevis', value: 'KN' },
      { display: 'Saint Lucia', value: 'LC' },
      { display: 'Saint Pierre and Miquelon', value: 'PM' },
      { display: 'Saint Vincent and the Grenadines', value: 'VC' },
      { display: 'Samoa', value: 'WS' },
      { display: 'San Marino', value: 'SM' },
      { display: 'Sao Tome and Principe', value: 'ST' },
      { display: 'Saudi Arabia', value: 'SA' },
      { display: 'Senegal', value: 'SN' },
      { display: 'Serbia and Montenegro', value: 'CS' },
      { display: 'Seychelles', value: 'SC' },
      { display: 'Sierra Leone', value: 'SL' },
      { display: 'Singapore', value: 'SG' },
      { display: 'Slovakia', value: 'SK' },
      { display: 'Slovenia', value: 'SI' },
      { display: 'Solomon Islands', value: 'SB' },
      { display: 'Somalia', value: 'SO' },
      { display: 'South Africa', value: 'ZA' },
      { display: 'South Georgia and the South Sandwich Islands', value: 'GS' },
      { display: 'Spain', value: 'ES' },
      { display: 'Sri Lanka', value: 'LK' },
      { display: 'Sudan', value: 'SD' },
      { display: 'Suridisplay', value: 'SR' },
      { display: 'Svalbard and Jan Mayen', value: 'SJ' },
      { display: 'Swaziland', value: 'SZ' },
      { display: 'Sweden', value: 'SE' },
      { display: 'Switzerland', value: 'CH' },
      { display: 'Syrian Arab Republic', value: 'SY' },
      { display: 'Taiwan, Province of China', value: 'TW' },
      { display: 'Tajikistan', value: 'TJ' },
      { display: 'Tanzania, United Republic of', value: 'TZ' },
      { display: 'Thailand', value: 'TH' },
      { display: 'Timor-Leste', value: 'TL' },
      { display: 'Togo', value: 'TG' },
      { display: 'Tokelau', value: 'TK' },
      { display: 'Tonga', value: 'TO' },
      { display: 'Trinidad and Tobago', value: 'TT' },
      { display: 'Tunisia', value: 'TN' },
      { display: 'Turkey', value: 'TR' },
      { display: 'Turkmenistan', value: 'TM' },
      { display: 'Turks and Caicos Islands', value: 'TC' },
      { display: 'Tuvalu', value: 'TV' },
      { display: 'Uganda', value: 'UG' },
      { display: 'Ukraine', value: 'UA' },
      { display: 'United Arab Emirates', value: 'AE' },
      { display: 'United Kingdom', value: 'GB' },
      { display: 'United States', value: 'US' },
      { display: 'United States Minor Outlying Islands', value: 'UM' },
      { display: 'Uruguay', value: 'UY' },
      { display: 'Uzbekistan', value: 'UZ' },
      { display: 'Vanuatu', value: 'VU' },
      { display: 'Venezuela', value: 'VE' },
      { display: 'Viet Nam', value: 'VN' },
      { display: 'Virgin Islands, British', value: 'VG' },
      { display: 'Virgin Islands, U.S.', value: 'VI' },
      { display: 'Wallis and Futuna', value: 'WF' },
      { display: 'Western Sahara', value: 'EH' },
      { display: 'Yemen', value: 'YE' },
      { display: 'Zambia', value: 'ZM' },
      { display: 'Zimbabwe', value: 'ZW' }
    ]
  }