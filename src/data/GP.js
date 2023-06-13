import { arrayModifyForAccordion } from "../helper";

export const gp  = [
    {
      name: "Abernethy House",
      email: "enquiries.abernethyhouse@nhs.net",
      postCode: "N13 4RJ",
      tel: "0208 370 4959"
    },
    {
      name: "Alma Healthcare Centre",
      email: "nclccg.mhp.alma@nhs.net",
      postCode: "EN3 4GS",
      tel: "0208 804 1122"
    },
    {
      name: "Angel surgery (Silver Point 88-90 Fore Street)",
      email: "edtangelsurgery@nhs.net",
      postCode: "N18 2FF",
      tel: "0208 887 7555 ext. 2"
    },
    {
      name: "Arnos Grove Medical Centre",
      email: "nclccg.arnosgrove-reception@nhs.net",
      postCode: "N11 1BD",
      tel: "07708 828 844"
    },
    {
      name: "Bincote Road surgery",
      email: "nclccg.bincotesurgery@nhs.net",
      postCode: "EN2 7RD",
      tel: "0208 367 7315"
    },
    {
      name: "Bounces Road surgery",
      email: "Docman.f85044@nhs.net",
      postCode: "N9 7HD",
      tel: "0208 443 4078"
    },
    {
      name: "Boundary Court surgery",
      email: "boundary.referrals@nhs.net",
      postCode: "N9 0TW",
      tel: "0208 344 3129"
    },
    {
      name: "Boundary House Surgery",
      email: "nclccg.boundaryhousesurgery@nhs.net",
      postCode: "N9 7HD",
      tel: "0208 344 3129"
    },
    {
      name: "Bush Hill Park medical centre",
      email: "nclccg.bushhillparkmedicalcentre@nhs.net",
      postCode: "EN1 1XG",
      tel: "0208 342 1772"
    },
    {
      name: "Carlton House surgery",
      email: "carltonhouse@nhs.net",
      postCode: "EN1 3LL",
      tel: "0208 370 4919"
    },
    {
      name: "Chalfont Road surgery",
      email: "edt.chalfontroad@nhs.net",
      postCode: "N9 0TW",
      tel: "0204 513 6415"
    },
    {
      name: "Cockfosters medical centre",
      email: "reception.cockfosters@nhs.net",
      postCode: "EN4 9NB",
      tel: "0208 441 4604"
    },
    {
      name: "Connaught surgery",
      email: "nclccg.connaughtsurgery@nhs.net",
      postCode: "N13 5ST",
      tel: "0208 920 2156"
    },
    {
      name: "Eagle House surgery",
      email: "nclccg.eaglehousesurgery@nhs.net",
      postCode: "EN3 4DN",
      tel: "0208 344 6197"
    },
    {
      name: "East Enfield Medical Practice (188 High Street)",
      email: "enfccg.eastenfieldmedical@nhs.net",
      postCode: "EN3 4EZ",
      tel: "0208 443 0413"
    },
    {
      name: "Edmonton medical centre (234 Fore Street)",
      email: "EDT.edmontonmedicalcentre@nhs.net",
      postCode: "N18 2LY",
      tel: "0208 803 2621"
    },
    {
      name: "Enfield Island surgery",
      email: "enfieldisland.surgery@nhs.net",
      postCode: "EN3 6GS",
      tel: "01992 760 378"
    },
    {
      name: "Evergreen surgery",
      email: "evergreen.referrals@nhs.net",
      postCode: "N9 0TW",
      tel: "0208 887 8350"
    },
    {
      name: "Forest Road PCC (Forest Primary Care Centre)",
      email: "forestroad.grouppractice@nhs.net",
      postCode: "N9 7HD",
      tel: "07512 771272 / 0208 342 0577"
    },
    {
      name: "Freezywater PCC",
      email: "enfccg.freezywaterpcc@nhs.net",
      postCode: "EN3 6PN",
      tel: "01992 702125"
    },
    {
      name: "Gillan House",
      email: "gillanhouse@nhs.net",
      postCode: "N13 4BS",
      tel: "0208 920 6741"
    },
    {
      name: "Green Cedars Medical Centre",
      email: "nclccg.greencedarsmedicalcentre@nhs.net",
      postCode: "N18 1RP",
      tel: "0208 807 6196"
    },
    {
      name: "Grenoble Gardens Surgery",
      email: "gpdoctor@nhs.net",
      postCode: "N13 6JE",
      tel: "0208 920 3120"
    },
    {
      name: "Highlands Practice",
      email: "highlands.practicewebsite@nhs.net",
      postCode: "N21 1UJ",
      tel: "020 8360 3953"
    }, 
    {
        name: "Keats surgery",
        email: "EDT.Keatssurgery@nhs.net",
        postCode: "N9 7HJ",
        tel: "07756 595221"
      },
      {
        name: "Latymer Road Surgery",
        email: "nclccg.LatymerRoadSurgery@nhs.net",
        postCode: "N9 9PU",
        tel: "0208 887 6092"
      },
      {
        name: "Lincoln Road Medical Practice",
        email: "nclccg.lincolnroadmedicalpractice@nhs.net",
        postCode: "EN1 1LJ",
        tel: "0208 367 8993"
      },
      {
        name: "Moorfield Road Health Centre",
        email: "nclccg.mhp-rhmc@nhs.net",
        postCode: "EN3 5PR",
        tel: "07440 629558"
      },
      {
        name: "Morecambe Surgery",
        email: "nclccg.morecambe@nhs.net",
        postCode: "N18 1LA",
        tel: "0208 803 0049"
      },
      {
        name: "Natal Road surgery",
        email: "gpdoctor@nhs.net",
        postCode: "N11 2HU",
        tel: "0208 920 3120"
      },
      {
        name: "Nightingale House surgery",
        email: "nightingalehousesurgery@nhs.net",
        postCode: "N9 8AJ",
        tel: "0208 805 6969"
      },
      {
        name: "North London Health Centre",
        email: "tnlhc@nhs.net",
        postCode: "N13 4JJ",
        tel: "0203 011 5761"
      },
      {
        name: "Oakwood Medical Centre",
        email: "ENfccg.oakwood-reception@nhs.net",
        postCode: "N14 4AQ",
        tel: "020 8350 1918"
      },
      {
        name: "Ordnance Unity Centre for Health",
        email: "ENFCCG.Ordnanceroadclinical@nhs.net",
        postCode: "EN3 6ND",
        tel: "01992 766 208"
      },
      {
        name: "Rainbow Practice",
        email: "rainbow.practice@nhs.net",
        postCode: "N9 0TW",
        tel: "0208 887 8323"
      },
      {
        name: "Southbury Surgery",
        email: "southbury.surgery@nhs.net",
        postCode: "EN1 1PJ",
        tel: "0208 366 7149"
      },
      {
        name: "The Town Surgery",
        email: "ENFCCG.TheTownSurgery@nhs.net",
        postCode: "EN2 6TJ",
        tel: "0208 370 3818"
      },
      {
        name: "Trinity Avenue Surgery/Bush Hill Trinity",
        email: "nclccg.trinityavenuesurgery@nhs.net",
        postCode: "EN1 1HS",
        tel: "0208 363 3438"
      },
      {
        name: "White Lodge Medical Practice",
        email: "EDT.whitelodgemedicalpractice@nhs.net",
        postCode: "EN2 6NL",
        tel: "0203 974 4715"
      },
      {
        name: "Willow House Surgery",
        email: "ENFCCG.WillowHouse@nhs.net",
        postCode: "EN1 3AZ",
        tel: "0208 362 1313"
      },
      {
        name: "Winchmore Hill Practice (808 Green Lanes)",
        email: "winchmore.reception@nhs.net",
        postCode: "N21 2SA",
        tel: "0208 350 2138"
      },
      {
        name: "Woodberry Practice",
        email: "ENFCCG.WoodberryPractice@nhs.net",
        postCode: "N21 3LE",
        tel: "0208 920 2025"
      }
  ];
  export const gpList=arrayModifyForAccordion(gp)