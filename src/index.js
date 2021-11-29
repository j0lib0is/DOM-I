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

// ✅ STEP 2A: Using your selectors, update the text contents of the relevant elements, matching the design file.
// ✅ STEP 2B: Find the correct texts for the elements inside the data object in `src/index.js`.

// ✅ STEP 3A: Give the anchor tags inside the nav an italic style by adding the classname `italic` to them alone.
// ✅ STEP 3B: Give the anchor tag inside the footer a bolder appearence by adding the classname `bold` to it alone.

// STEP 4A: Make the img tags on the page display the correct images by editing their `src` attribute.
// STEP 4B: Find the correct URLs for the images inside the data object in `src/index.js`.


// HEADER
const headerImg = document.querySelector('#logo-img');


// > Nav
const navLinks = document.querySelectorAll('nav a');
const navLinksArray = Array.from(navLinks);
navLinks.forEach(link => link.classList.add('italic'));
navLinksArray[0].textContent = siteContent['nav']['nav-item-1'];
navLinksArray[1].textContent = siteContent['nav']['nav-item-2'];
navLinksArray[2].textContent = siteContent['nav']['nav-item-3'];
navLinksArray[3].textContent = siteContent['nav']['nav-item-4'];
navLinksArray[4].textContent = siteContent['nav']['nav-item-5'];
navLinksArray[5].textContent = siteContent['nav']['nav-item-6'];


// CTA
const ctaHeading = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
ctaHeading.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];


// MAIN CONTENT

// > Top Content
const topText = document.querySelectorAll('.top-content .text-content');
const topTextArray = Array.from(topText);

const topTextFirst = topTextArray[0];
const topTextFirstHeader = topTextFirst.querySelector('h4');
topTextFirstHeader.textContent = siteContent['main-content']['features-h4'];
const topTextFirstPara = topTextFirst.querySelector('p');
topTextFirstPara.textContent = siteContent['main-content']['features-content'];

const topTextSecond = topTextArray[1];
const topTextSecondHeader = topTextSecond.querySelector('h4');
topTextSecondHeader.textContent = siteContent['main-content']['about-h4'];
const topTextSecondPara = topTextSecond.querySelector('p');
topTextSecondPara.textContent = siteContent['main-content']['about-content'];

// > Middle Content
const middleImg = document.querySelector('.middle-img');

// > Bottom Content
const bottomText = document.querySelectorAll('.bottom-content .text-content');
const bottomTextArray = Array.from(bottomText);

const bottomTextFirst = bottomTextArray[0];
const bottomTextFirstHeader = bottomTextFirst.querySelector('h4');
bottomTextFirstHeader.textContent = siteContent['main-content']['services-h4'];
const bottomTextFirstPara = bottomTextFirst.querySelector('p');
bottomTextFirstPara.textContent = siteContent['main-content']['services-content'];

const bottomTextSecond = bottomTextArray[1];
const bottomTextSecondHeader = bottomTextSecond.querySelector('h4');
bottomTextSecondHeader.textContent = siteContent['main-content']['product-h4'];
const bottomTextSecondPara = bottomTextSecond.querySelector('p');
bottomTextSecondPara.textContent = siteContent['main-content']['product-content'];

const bottomTextThird = bottomTextArray[2];
const bottomTextThirdHeader = bottomTextThird.querySelector('h4');
bottomTextThirdHeader.textContent = siteContent['main-content']['vision-h4'];
const bottomTextThirdPara = bottomTextThird.querySelector('p');
bottomTextThirdPara.textContent = siteContent['main-content']['vision-content'];


// CONTACT
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p:nth-of-type(1)');
address.textContent = siteContent['contact']['address'];

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent['contact']['email'];


// FOOTER
const footerLink = document.querySelector('footer a');
footerLink.classList.add('bold');
footerLink.textContent = siteContent['footer']['copyright'];