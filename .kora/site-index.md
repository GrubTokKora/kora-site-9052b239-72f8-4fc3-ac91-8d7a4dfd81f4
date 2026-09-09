# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Taco John's | Mexican Food, Tacos & Potato Olés — MA & CT
purpose: The landing page — what the chain serves, the three locations, guest reviews, the FAQ and the app promotion.
sections:
- `#hero` "Taco John's Mexican Food" — the hero, with its rotating slider in `#hero-slider`
- `#value-props` "Value Menu" — the three offer blocks, naming: Boss Burrito, Meat & Potato Burrito, Scrambler Burritos, Meat & Potato Breakfast Burritos, Mexican Donut Bites
- `#locations` "Our Locations" — the three restaurants with their addresses, phone numbers and today's hours: Leominster, Boston, Newington
- `#about` "Proudly Serving Our Communities" — the chain's story
- `#reviews` "Guest Reviews" — guest review quotes, with its heading in `#reviews-heading`
- `#faq` "Frequently Asked Questions" — an accordion naming: tacos, burritos, Potato Olés, Stuffed Grilled Tacos, Fried Chicken Taco, breakfast burritos, Value Menu — with its heading in `#faq-heading`
- "Download our Mobile App" — the app promotion, with its heading in `#app-download-heading` and the FREE FOOD! line in `#app-download-freefood`
also: Each location's address, phone number and hours are written here AND again in full on that location's own page. Three locations means every address or hours change is two edits, and nothing on either page shows the two disagreeing.
also: This site has no menu page. Every dish named anywhere on it is named inside the Value Menu blocks or the FAQ answers, so a request to change a menu item means editing marketing copy, not a menu.
also: Potato Olés is a registered mark and is written with the ® symbol on the location pages but without it here, so a rename has to account for both forms.

## location-boston.html → /location-boston
title: Taco John's Boston | Tacos, Burritos & Mexican Food — MA
purpose: The Boston restaurant's page — its address, hours, ordering links and a description of the location.
sections:
- "Boston — Mexican Food & Tacos" — the page hero, with the address, a directions link, the phone number and the Order Now action
- "RESTAURANT HOURS" — the weekly opening hours, one row per day, plus today's hours
- "ABOUT TACO JOHN'S BOSTON" — the description of this location, naming: Meat & Potato Burritos, Stuffed Grilled Tacos, Potato Olés, Fried Chicken Taco
also: This page carries no ids at all, so every change here is located by its heading or its wording.
also: The three location pages are near-identical in structure and wording, differing only in the city name, the address, the phone number and the hours. A change meant for one will look correct applied to any of them.

## location-leominster.html → /location-leominster
title: Taco John's Leominster | Tacos, Burritos & Mexican Food — MA
purpose: The Leominster restaurant's page — its address, hours, ordering links and a description of the location.
sections:
- "Leominster — Mexican Food & Tacos" — the page hero, with the address, a directions link, the phone number and the Order Now action
- "RESTAURANT HOURS" — the weekly opening hours, one row per day, plus today's hours
- "ABOUT TACO JOHN'S" — the description of this location
also: This page carries no ids at all, so every change here is located by its heading or its wording.

## location-newington.html → /location-newington
title: Taco John's Newington | Mexican Food Coming Soon — CT
purpose: The Newington restaurant's page — a not-yet-open location, with its address and pointers to the open restaurants.
sections:
- "Newington — Mexican Food Coming Soon" — the page hero, with the Coming Soon marker, the address, a directions link and the phone number
- "RESTAURANT HOURS" — a placeholder saying hours are to be announced
- "While You Wait, Visit Our Open Locations" — links to the Leominster and Boston pages
- "ABOUT TACO JOHN'S NEWINGTON" — the description of this location
also: This location is not open. The page carries an Order Now button that says online ordering is coming soon, and the hours block has no hours in it. Both have to change together when the restaurant opens, along with the Coming Soon marker on index.html's locations block.
also: This page carries no ids at all, so every change here is located by its heading or its wording.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — a plain-text summary of the business for AI crawlers — derived from the site by the deploy, not written by hand
- `robots.txt` — crawler rules and the sitemap link — derived from the site by the deploy, not written by hand
- `sitemap.xml` — the list of page URLs — derived from the site by the deploy, not written by hand
- `style.css` — the site's styling and brand colours
- `js/main.js` — the hero slider and the scroll animations
- `js/shared-layout.js` — THE HEADER AND FOOTER MARKUP for every page, and the logo  [content]

## shared (every page)
The header, navigation, mobile menu and footer are NOT in the pages. They are rendered at
load by `js/shared-layout.js`, which is where every change to the shared chrome has to be made. Editing a
page's markup to change the header will appear to do nothing, because there is no header in
it to change.
