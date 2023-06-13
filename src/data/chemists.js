import { arrayModifyForAccordion } from "../helper"
export const chemists=[
    {
      name: "Abbott’s",
      postCode: "N10 1LR",
      tel: "020 8883 3960",
      email: "pharmacy.fad37@nhs.net"
    },
    {
      name: "Alderman’s",
      postCode: "N13 4PN",
      tel: "020 8886 5511",
      email: "nhspharmacy.palmersgreen.aldermanspharmacyFAQ59@nhs.net"
    },
    {
      name: "Allcures",
      postCode: "N15 3PB",
      tel: "020 8888 3040",
      email: "nhspharmacy.tottenham.allcurespharmacyFQC60@nhs.net"
    },
    {
      name: "Alpha",
      postCode: "N22 8ED",
      tel: "020 8888 1584",
      email: "alpha.pharmacy@nhs.net"
    },
    {
      name: "Aqua / Chemist2You",
      postCode: "N9 8JE",
      tel: "020 8807 3564",
      email: "aqua.chemist@nhs.net"
    },
    {
      name: "Atkinson’s",
      postCode: "N21 3RE",
      tel: "020 8360 1037",
      email: "c.atkinsons.chemist@nhs.net"
    },
    {
      name: "Bee’s Chemist",
      postCode: "N18 2JB",
      tel: "020 8807 3228",
      email: "bees.chemist@nhs.net"
    },
    {
      name: "Beautychem",
      postCode: "N17 7LH",
      tel: "020 8808 4015",
      email: "beautychem.pharmacy@nhs.net"
    },
    {
      name: "Benjamin",
      postCode: "E4 8LP",
      tel: "020 8529 8263",
      email: "nhspharmacy.benjaminpharmacy.chingfordFLR34@nhs.net"
    },
    {
      name: "Boots Edmonton",
      postCode: "N9 0HW",
      tel: "020 8807 3188",
      email: "pharmacy.fgj87@nhs.net"
    },
    {
      name: "Boots Enfield Retail Park",
      postCode: "EN1 1TH",
      tel: "020 8367 7019",
      email: "susan.baxter7@nhs.net"
    },
    {
      name: "Boots Cheshunt",
      postCode: "EN8 0NN",
      tel: "01992635767",
      email: "pharmacy.frw21@nhs.net"
    },
    {
      name: "Cadge",
      postCode: "N15 4JR",
      tel: "020 8808 2740",
      email: "cadge.pharmacy@nhs.net"
    },
    {
      name: "Capricorn",
      postCode: "EN2 7HW",
      tel: "020 8367 3939",
      email: "nhspharmacy.enfield.capricornpharmacyFHG73@nhs.net"
    },
    {
      name: "Cheshunt Pharmacy",
      postCode: "EN7 5DJ",
      tel: "01992 624691",
      email: "pharmacy.ft020@nhs.net"
    },
    {
      name: "Clockwork",
      postCode: "N11 2DN",
      tel: "020 8888 3222",
      email: "clockworkqueensparade.FJJ70@nhs.net"
    },
    {
      name: "Cooper’s",
      postCode: "N15 4DJ",
      tel: "020 8808 0422",
      email: "coopers.pharmacy@nhs.net"
    },
    {
      name: "Coyle’s Waltham Cross",
      postCode: "EN8 7AP",
      tel: "01992 626 644",
      email: "edward.ofosu-manu@nhs.net"
    },
    {
      name: "Crescent Express",
      postCode: "N22 8HH",
      tel: "020 8889 0150",
      email: "jitesh.popat@nhs.net"
    },
    {
      name: "Cross Chemist",
      postCode: "N22 5DJ",
      tel: "020 8888 4166",
      email: "pharmacyFLE67@nhs.net"
    },
    {
      name: "Dobber",
      postCode: "N15 5NR",
      tel: "020 8800 5967",
      email: "dobberpharmacy@nhs.net"
    },
    {
      name: "Dowsett",
      postCode: "N17 9DD",
      tel: "020 8808 1088",
      email: "pharmacy.ffr30@nhs.net"
    },
    {
      name: "Electra Pharmacy",
      postCode: "EN3 4GS",
      tel: "02084 432783",
      email: "pharmacy.fd779@nhs.net"
    },
    {
      name: "Elgon",
      postCode: "EN3 4DN",
      tel: "020 8805 5298",
      email: "manan.banker@nhs.net"
    },
    {
      name: "Estons",
      postCode: "N18 2TW",
      tel: "020 8807 1467",
      email: "jignesh.patel18@nhs.net"
    },
    {
      name: "Forest",
      postCode: "N9 7HD",
      tel: "020 8805 1034",
      email: "roza.zobedey@nhs.net"
    },
    {
      name: "GF Porter",
      postCode: "N17 7BU",
      tel: "020 8808 7031",
      email: "pharmacy.fr470@nhs.net"
    },
    {
      name: "Good Health",
      postCode: "N15 5AA",
      tel: "020 3302 8060",
      email: "rahul.patel10@nhs.net"
    },
    {
      name: "Grace",
      postCode: "N17 0HJ",
      tel: "020 8808 4133",
      email: "grace.pharmacy@nhs.net"
    },
    {
      name: "Greencross",
      postCode: "N18 2TZ",
      tel: "020 8807 7282",
      email: "greencross.pharmacy@nhs.net"
    },
    {
      name: "Green Lanes",
      postCode: "N21 2SA",
      tel: "020 8350 8350",
      email: "bhupesh.patel1@nhs.net"
    },
    {
      name: "Green Light/DP Marks",
      postCode: "N4 1JX",
      tel: "020 8800 1638",
      email: "nhspharmacy.greenlanes.greenlightpharmacyFNJ72@nhs.net"
    },
    {
      name: "Green’s",
      postCode: "N13 6JU",
      tel: "020 8888 3915",
      email: "bina.shah3@nhs.net"
    },
    {
      name: "Hayward Enfield",
      postCode: "EN1 2PT",
      tel: "020 8360 2614",
      email: "hayward.pharmacy@nhs.net"
    },
    {
      name: "Healthfare",
      postCode: "EN1 1YY",
      tel: "020 8367 5456",
      email: "halil.karahan@nhs.net"
    },
    {
      name: "HomeUPath",
      postCode: "Online",
      tel: "020 8123 7026",
      email: "ajantha.alagaratnam@nhs.net"
    },
    {
      name: "J Lord",
      postCode: "N22 5DJ",
      tel: "020 8888 1022",
      email: "jlord.pharmacy@nhs.net"
    },
    {
      name: "Lamis",
      postCode: "EN1 2HB",
      tel: "020 8360 2212",
      email: "pravin.bhavnani@nhs.net"
    },
    {
      name: "Lex",
      postCode: "EN7 6QQ",
      tel: "01992 628066",
      email: "pharmacy.ftc400@nhs.net"
    },
    {
      name: "Lloyds Edmonton",
      postCode: "N9 0TY",
      tel: "020 8807 1412",
      email: "nhspharmacy.edmontongreen.lloydspharmacyFKW41@nhs.net"
    },
    {
      name: "Lloyds Enfield Baker St",
      postCode: "EN1 3LD",
      tel: "020 8363 3210",
      email: "pharmacy.fjt40@nhs.net"
    },
    {
      name: "Manson’s",
      postCode: "N15 6JR",
      tel: "020 8802 6205",
      email: "pharmacy.fx076@nhs.net"
    },
    {
      name: "Med-Chem Pharmacy",
      postCode: "N4 1DU",
      tel: "020 8802 4855",
      email: "medchem.pharmacy@nhs.net"
    },
    {
      name: "Minton’s",
      postCode: "N22 6BH",
      tel: "020 8888 4288",
      email: "mintons.pharmacy@nhs.net"
    },
    {
      name: "MK Shah",
      postCode: "EN3 6PR",
      tel: "01992 764 042",
      email: "manherlal.shah@nhs.net"
    },
    {
      name: "Morrison’s Chingford",
      postCode: "E4 8SN",
      tel: "020 8527 1331",
      email: "nhspharmacy.chingford.morrisonspharmacyFXN94@nhs.net"
    },
    {
      name: "Niti",
      postCode: "EN8 7BY",
      tel: "01992 717821",
      email: "bipan.sharma@nhs.net"
    },
    {
      name: "NR Patel",
      postCode: "N13 4SE",
      tel: "020 8888 2332",
      email: "nhspharmacy.bowesroad.NRPatelchemistFPQ44@nhs.net"
    },
    {
      name: "Palmer’s",
      postCode: "N13 4YB",
      tel: "020 8882 1081",
      email: "pharmacy.fc766@nhs.net"
    },
    {
      name: "Parade",
      postCode: "N4 1LG",
      tel: "020 8292 1636",
      email: "parade.chemist@nhs.net"
    },
    {
      name: "Parkview",
      postCode: "N14 4XA",
      tel: "020 8363 4712",
      email: "pinky.patel@nhs.net"
    },
    {
      name: "Pharmacy2U",
      postCode: "online",
      tel: "01132 650 222 ",
      email: "n/a"
    }
    ,
    {
      name: "Pharmacy Express",
      postCode: "N22 8HH",
      tel: "020 8888 1669",
      email: "pharmacyexpress.pharmacy@nhs.net"
    },
    {
      name: "Pharmocare 65a",
      postCode: "N17 8HH",
      tel: "020 8885 5095",
      email: "pharmocare65a.pharmacy@nhs.net"
    },
    {
      name: "Pharmocare 465",
      postCode: "N17 6QB",
      tel: "020 8808 9092",
      email: "pharmocare465.pharmacy@nhs.net"
    },
    {
      name: "Pharmocare 575",
      postCode: "N17 6SB",
      tel: "020 8808 3291",
      email: "napclan575.pharmacy@nhs.net"
    },
    {
      name: "Pharmocare 753",
      postCode: "N17 8AH",
      tel: "020 8808 1974",
      email: "bravo.rawat@nhs.net"
    },
    {
      name: "Phillips",
      postCode: "N17 6XF",
      tel: "020 8808 4040",
      email: "nhspharmacy.tottenham.phillipschemistSM689@nhs.net"
    },
    {
      name: "Reena",
      postCode: "N22 8JW",
      tel: "020 8888 1729",
      email: "alex.varnava@nhs.net (put FAO Wood Green in subject)"
    },
    {
      name: "Reid’s",
      postCode: "N9 9JJ",
      tel: "020 8360 2653",
      email: "nhspharmacy.edmontonlondon.reidspharmacyFNA19@nhs.net"
    },
    {
      name: "Ronchetti",
      postCode: "EN3 6UP",
      tel: "01992 650 302",
      email: "nhspharmacy.enfield.hyperchemltdtaroncheFHW08@nhs.net"
    },
    {
      name: "Safedale Clapton",
      postCode: "E5 9JZ",
      tel: "020 8806 7073",
      email: "nhspharmacy.clapton.safedalepharmacyFJT15@nhs.net"
    },
    {
      name: "Safedale Seven Sisters",
      postCode: "N15 6EP",
      tel: "020 8800 4876",
      email: "cemma.west@nhs.net"
    },
    {
      name: "Savemore",
      postCode: "N22 6SA",
      tel: "020 8888 5360",
      email: "ankur.shah@nhs.net"
    },
    {
      name: "Scott’s",
      postCode: "N18 1RP",
      tel: "020 8884 3134",
      email: "nan.banker@nhs.net"
    },
    {
      name: "Skot - Alphega",
      postCode: "N9 9BA",
      tel: "020 8803 3221",
      email: "nhspharmacy.edmonton.skotdispensingchemistsFJA11@nhs.net"
    },
    {
      name: "SIA",
      postCode: "N8 0DU",
      tel: "020 8340 1440",
      email: "shivali.patel5@nhs.net"
    },
    {
      name: "Somerset Gardens",
      postCode: "N17 8NW",
      tel: "020 8801 3539",
      email: "rahul.gajree1@nhs.net"
    },
    {
      name: "Superdrug Edmonton",
      postCode: "N9 0TZ",
      tel: "020 8803 1919",
      email: "pharmacy.fxn07@nhs.net"
    },
    {
      name: "Swan",
      postCode: "EN8 8NQ",
      tel: "01992 365 842",
      email: "hitin.patel@nhs.net"
    },
    {
      name: "Tesco Cheshunt",
      postCode: "EN8 0TA",
      tel: "020 3801 3012",
      email: "nhspharmacy.cheshunt.tescoFCA02@nhs.net"
    },
    {
      name: "Tesco Ponder’s End",
      postCode: "EN3 4DP",
      tel: "0345 677 9546",
      email: "nhspharmacy.288highs.tescoin-sfvw31@nhs.net"
    },
    {
      name: "Viren’s",
      postCode: "N9 8AG",
      tel: "020 8804 1932",
      email: "nhspharmacy.edmonton.virenschemistFE164@nhs.net"
    },
    {
      name: "Walker’s",
      postCode: "N13 5XG",
      tel: "020 8886 2561",
      email: "walkers-pharmacy@nhs.net"
    },
    {
      name: "Warwick",
      postCode: "N11 2EU",
      tel: "020 8888 2437",
      email: "lai.teow@nhs.net"
    },
    {
      name: "Well Chingford Hatch Lane",
      postCode: "E4 6LQ",
      tel: "020 8524 4310",
      email: "nhspharmacy.chingford.wellpharmacyFFF08@nhs.net"
    },
    {
      name: "Well Enfield 644",
      postCode: "EN3 6NA",
      tel: "01992 764 476",
      email: "nhspharmacy.enfield.wellpharmacyFYA05@nhs.net"
    },
    {
      name: "Well",
      postCode: "EN3 5 JL",
      tel: "02088055821",
      email: "pharmacy.fgr74@nhs.net"
    },
    {
      name: "Well",
      postCode: "N18 1ND",
      tel: "020 8807 5946",
      email: "pharmacy.flr96@nhs.net"
    },
    {
      name: "Well Enfield Silver Street",
      postCode: "EN1 3EP",
      tel: "020 8363 0823",
      email: "nhspharmacy.enfield.wellpharmacyFNY07@nhs.net"
    },
    {
      name: "Well Enfield 417 Hertford Rd",
      postCode: "EN3 5PT",
      tel: "020 8805 4154",
      email: "nhspharmacy.enfield.wellpharmacyFXF01@nhs.net"
    },
    {
      name: "Whitakers",
      postCode: "EN1 3EW",
      tel: "020 8364 6129",
      email: "vasant.patel@nhs.net"
    },
    {
      name: "VMS",
      postCode: "N9 7ES",
      tel: "020 8804 2363",
      email: "vms.pharmacy@nhs.net"
    },
    {
      name: "Zara",
      postCode: "EN3 4DR",
      tel: "020 8804 2567",
      email: "nhspharmacy.pondersend.zarapharmacyFH734@nhs.net"
    }
  ]

  export const chemistsList=arrayModifyForAccordion(chemists)

