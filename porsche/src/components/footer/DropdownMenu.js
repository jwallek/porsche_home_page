let countryRegion = {
      "North America": ["Canada (English)", "Canada (French)", "USA"],
      "Latin America": ["Mexico", 
                        "Argentina", 
                        "Bolivia", 
                        "Brazil", 
                        "Chile", 
                        "Columbia", 
                        "Costa Rica", 
                        "Dominican Republic",
                        "Ecuador",
                        "El Salvador",
                        "Guadeloupe",
                        "Guatemala",
                        "Haiti",
                        "Honduras",
                        "Jamaica",
                        "Panama",
                        "Paraguay",
                        "Peru",
                        "Puerto Rico",
                        "Trinidad & Tobago",
                        "Uruguay",
                        "Venezuela",
                        "Other countries"
                    ],
      "Europe": ["Austria", 
                "Belarus", 
                "Belgium", 
                "Bosnia",
                "Bulgaria",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Great Britain",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Lithuania",
                "Latvia",
                "Luxemburg",
                "Macedonia",
                "Malta",
                "Moldova",
                "Netherlands",
                "Norway",
                "Poland",
                "Portugal",
                "Russia",
                "Romania",
                "Serbia",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland (German)",
                "Switzerland (French)",
                "Switzerland (Italian)",
                "Ukraine",
                "Other countries"
            ],    
      "Middle East": ["Abu Dhabi", 
                    "Bahrain", 
                    "Duabi",
                    "Fujairah",
                    "Israel",
                    "Jordan",
                    "Kuwait",
                    "Lebanon",
                    "Oman",
                    "Qatar",
                    "Saudi Arabia",
                    "Sharjah",
                    "Middle East (English)",
                    "Middle East (French)"
                ],
      "Africa": ["Egypt",
                 "Ghana", 
                 "La Reunion",
                 "Morocco",
                 "Mauritius",
                 "South Africa",
                 "Tunisia"
            ],
        "Asia": ["Armenia",
                 "Azerbaijan",
                 "Turkey",
                 "India",
                 "Brunei",
                 "Cambodia",
                 "Indonesia",
                 "Malaysia",
                 "Mongolia",
                 "Philippines",
                 "Singapore",
                 "Sri Lanka",
                 "Thailand",
                 "Vietnam",
                 "China Mainland (Chinese)",
                 "China Mainland (English)",
                 "Hong-Kong & Macau",
                 "Japan",
                 "Kazakhstan",
                 "South Korea",
                 "Taiwan (Chinese)",
                 "Taiwain (English)",
                 "Other countries/regions"

        ],
        "Australia/Oceania":["Australia",
                            "French Polynesia",
                            "New Caledonia",
                            "New Zealand",
                            "Other countries"
        ]
    }

  window.onload = function() {
    let countrySel = document.getElementById("country");
    let regionSel = document.getElementById("region");
    for (let x in countryRegion) {
      countrySel.options[countrySel.options.length] = new Option(x, x);
    }
    countrySel.onchange = function(){
    regionSel.disabled = false
    regionSel.length = 1;
      //display correct values
      let z = countryRegion[countrySel.value];
      console.log(z)
    for (let i = 0; i < z.length; i++) {
      regionSel.options[regionSel.options.length] = new Option(z[i], z[i]);
    }
    }
}