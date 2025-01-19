const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Yassine's Portfolio - Home",
  description:
    "Yassine's Portfolio is a personal website showcasing my projects, skills, and experiences.",
};

// default open graph data
const og = {
  title: "Yassine's Portfolio",
  description:
    "Yassine's Portfolio is a personal website showcasing my projects, skills, and experiences.",
  type: "website",
  image: "/images/og_image.jpg",
};

// default schema data
const schema = {
  logo: "images/logo_perso.png",
  type: "PersonalWebsite",
  name: "Yassine's Portfolio",
  description:
    "Yassine's Portfolio is a personal website showcasing my projects, skills, and experiences.",
  email: "yassinenajidev@gmail.com",
};

// social links
const social = {
  // twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/in/yassinenaji0/",
  github: "https://github.com/N4J1",
};

export { baseURL, style, meta, og, schema, social };
