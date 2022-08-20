import tampaIcon from "../images/tampa-icon.svg"
import peteIcon from "../images/pete-icon.svg"
import kenwoodIcon from "../images/kenwood-icon.svg"
import yborIcon from "../images/ybor-icon.svg"
import hydeIcon from "../images/hyde-icon.svg"
import dunedinIcon from "../images/dunedin.svg"
import heightsIcon from "../images/heights-icon.svg"
import wesleyIcon from "../images/wesley-icon.svg"
import tampa_pic from "../images/tampa_pic.jpg"
import heights_pic from "../images/heights.jpg"
import stpete_pic from "../images/stpete.jpg"
import dunedin_pic from "../images/dunedin.jpg"
import beaches_pic from "../images/beaches.jpg"
import ybor_pic from "../images/ybor.jpg"
import kenwood_pic from "../images/kenwood.jpg"
import wesley_pic from "../images/wesley.jpg"

const neighborhoods_data = {
  downtownTampa: {
    image: tampa_pic,
    title: "Tampa",
    text:
      "Within a mere 2-mile radius, residents can experience an NHL game or top artist live in concert, catch a traveling Broadway production and an independent film festival, view countless art galleries, and explore culinary delights while taking a stroll down the Tampa Riverwalk.",
    link:
      "https://livinglovingteam.idxbroker.com/idx/results/listings?idxID=d003&pt=1&ccz=city&city%5B%5D=45806",
  },
  downtownPete: {
    image: stpete_pic,
    title: "St. Petersburg",
    text:
      "As one of the most urbanized neighborhoods in the Tampa Bay area, St. Petersburg is home to more than 5,000 people.  The community merges a variety of living options from trendy work, live, play downtown and along the 4th Street corridor to the throwback of years gone by in places like Jungle Terrace and Gulf Port.",
    link:
      "https://livinglovingteam.idxbroker.com/idx/results/listings?city%5B%5D=55041&ccz=city&idxID=d003&pt=1&start=1",
  },
  historicKenwood: {
    image: kenwood_pic,
    title: "Historic Kenwood",
    text:
      "Just west of downtown St. Petersburg, Historic Kenwood has earned its place on the national Register of Historic Places for having one of the highest concentrations of bungalows in Florida. Packed with galleries, restaurants and entertainment, Historic Kenwood is a cultural district all of its own!",
    link: "https://livinglovingteam.idxbroker.com/idx/search/basic",
  },
  yborCity: {
    image: ybor_pic,
    title: "Ybor City",
    text:
      "Tampa’s “Latin Quarter”, Ybor is about a mile from downtown Tampa. It features a strong ethnic influence including food, music, and architecture left behind from the Cuban, Afro-Caribbean, Italian and Spanish immigrants who settled there.",
    link:
      "https://livinglovingteam.idxbroker.com/idx/results/listings?idxID=d003&pt=1&a_propStatus%5B%5D=Active&ccz=city&city%5B%5D=52892",
  },
  wesleyChapel: {
    image: wesley_pic,
    title: "Wesley Chapel",
    text:
      "Step away from the hustle and bustle of the city and step into your gorgeous new home in your resort style community. Surrounded by shopping, A rated schools, and plenty of outdoor activities Wesley Chapel provides more bang for your buck!",
    link:
      "https://livinglovingteam.idxbroker.com/idx/results/listings?idxID=d003&pt=1&a_propStatus%5B%5D=Active&ccz=city&city%5B%5D=50630",
  },
  dunedin: {
    image: dunedin_pic,
    title: "Dunedin",
    text:
      "Best kept secret in the Sunshine State! Dunedin is a quaint waterfront community with a lively downtown area. Right off the Pinellas Trail and within biking distance of some of the top rated beaches in the world!",
    link:
      "https://livinglovingteam.idxbroker.com/idx/results/listings?idxID=d003&pt=1&a_propStatus%5B%5D=Active&ccz=city&city%5B%5D=12983",
  },
  beaches: {
    image: beaches_pic,
    title: "Beaches",
    text:
      "With 35 miles of soft white sandy beaches there is something for everyone to call home. Whether you want sleepy coastal village style living, adventurous water access for speed boating and deep saltwater fishing, or calm intercoastal waterways for paddle boarding next to the dolphins you can find it here.",
    link: "https://livinglovingteam.idxbroker.com/idx/search/basic",
  },
  heights: {
    image: heights_pic,
    title: "The Heights",
    text:
      "This historic district made up of Tampa, Seminole and Ybor Heights, boasts award winning dining and entertainment. Centrally located with a beautiful river running through and around it, it’s also minutes to downtown Tampa.",
    link: "https://livinglovingteam.idxbroker.com/idx/search/basic",
  },
}

export const hoods = [
  {
    icon: tampaIcon,
    title: "Tampa",
    text: "The Yuppy",
    value: "downtownTampa",
  },
  {
    icon: peteIcon,
    title: "St. Petersburg",
    text: "The Yuppy",
    value: "downtownPete",
  },
  {
    icon: hydeIcon,
    title: "Beaches",
    text: "The Yuppy",
    value: "beaches",
  },
  {
    icon: dunedinIcon,
    title: "Dunedin",
    text: "The Yuppy",
    value: "dunedin",
  },
  {
    icon: heightsIcon,
    title: "The Heights",
    text: "The Yuppy",
    value: "heights",
  },
  {
    icon: yborIcon,
    title: "Ybor City",
    text: "The Yuppy",
    value: "yborCity",
  },
  {
    icon: wesleyIcon,
    title: "Wesley Chapel",
    text: "The Yuppy",
    value: "wesleyChapel",
  },
  {
    icon: kenwoodIcon,
    title: "Historic Kenwood",
    text: "The Yuppy",
    value: "historicKenwood",
  },
]

export const handleNeighborhood = selectedHood => {
  let obj = {
    img: "",
    title: "",
    text: "",
    link: "",
  }
  switch (selectedHood) {
    case "downtownTampa":
      obj = neighborhoods_data.downtownTampa
      break
    case "downtownPete":
      obj = neighborhoods_data.downtownPete
      break
    case "historicKenwood":
      obj = neighborhoods_data.historicKenwood
      break
    case "yborCity":
      obj = neighborhoods_data.yborCity
      break
    case "wesleyChapel":
      obj = neighborhoods_data.wesleyChapel
      break
    case "dunedin":
      obj = neighborhoods_data.dunedin
      break
    case "beaches":
      obj = neighborhoods_data.beaches
      break
    case "heights":
      obj = neighborhoods_data.heights
      break
    default:
      obj = neighborhoods_data.downtownTampa
      break
  }

  return obj
}
