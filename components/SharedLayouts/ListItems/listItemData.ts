import en from "../locales/en";
import sr from "../locales/sr";

export const primaryList = (locale:string) => {
  const lang = locale ==="en" ? en : sr
  return [
      { title: lang.dashboard, href: "/", color: "" },
      { title: lang.health, href: "/Health", color: "error" },
      { title: lang.training, href: "/Training", color: "green" },
      { title: lang.books, href: "/Books", color: "brown" },
      { title: lang.language, href: "/Languages", color: "primary" },
      { title: lang.meditation, href: "/Meditation", color: "orange" },
      { title: lang.music, href: "/Music", color: "secondary" },
      { title: lang.toDo, href: "/ToDo", color: "gold" },
      { title: lang.goals, href: "/Goals", color: "black" },
  ]
}

export const businesses =(locale:string)=>{
  const lang = locale ==="en" ? en : sr
  return lang.businesses
} 

export const secondaryList = (locale:string)=> {
  const lang = locale ==="en" ? en : sr
  return [
    { title: lang.law, href: "/Law", color: "goldenrod" },
    { title: lang.programming, href: "/Programming", color: "green" },
    { title: lang.ranting, href: "/Ranting", color: "darkorchid" },
  ];
}

