const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// INSTRUCTIONS

// ✅ STEP 1: Declare variables pointing to the relevant DOM elements, using any of the selectors you have learned.

// STEP 2A: Using your selectors, update the text contents of the relevant elements, matching the design file.
// STEP 2B: Find the correct texts for the elements inside the data object in `src/index.js`.

// STEP 3A: Give the anchor tags inside the nav an italic style by adding the classname `italic` to them alone.
// STEP 3B: Give the anchor tag inside the footer a bolder appearence by adding the classname `bold` to it alone.

// STEP 4A: Make the img tags on the page display the correct images by editing their `src` attribute.
// STEP 4B: Find the correct URLs for the images inside the data object in `src/index.js`.


// HEADER
const headerImg = document.querySelector('#logo-img');


// > Nav
const navLinks = document.querySelectorAll('nav a');
const navLinksArray = Array.from(navLinks);


// CTA
const ctaHeading = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');


// MAIN CONTENT

// > Top Content
const topText = document.querySelectorAll('.text-content');
const topTextArray = Array.from(topText);

const topTextFirst = topTextArray[0];
const topTextSecond = topTextArray[1];

// > Middle Content
const middleImg = document.querySelector('.middle-img');

// > Bottom Content
const bottomText = document.querySelectorAll('.text-content');
const bottomTextArray = Array.from(bottomText);

const bottomTextFirst = bottomTextArray[0];
const bottomTextSecond = bottomTextArray[1];
const bottomTextThird = bottomTextArray[2];


// CONTACT
const contactHeader = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');


// FOOTER
const footerLink = document.querySelector('footer a');