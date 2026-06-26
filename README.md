# Kairos Search Website

Production-ready GitHub Pages website for **Kairos Search**, a Hong Kong-based executive search and specialist recruitment consultancy.

The website is built using **HTML5**, **CSS3**, and **Vanilla JavaScript** only. No frameworks or build tools are required, making it lightweight, fast, easy to maintain, and fully compatible with GitHub Pages.

---

# Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Google Fonts (Inter)
* GitHub Pages

---

# Project Structure

```text
kairos-search/
│
├── index.html
│
├── css/
│   ├── style.css
│   └── animations.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── logo.jpg
│   ├── hero.jpg
│   └── ...
│
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

---

# Deploying to GitHub Pages

## 1. Create a GitHub Repository

Create a new repository, for example:

```
kairos-search
```

---

## 2. Upload the Website Files

Upload the entire project structure to the repository.

The root should contain:

```
index.html
css/
js/
images/
```

---

## 3. Enable GitHub Pages

1. Open the repository.
2. Click **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose:

```
Deploy from a branch
```

5. Branch:

```
main
```

6. Folder:

```
/ (root)
```

7. Click **Save**.

GitHub will publish the website automatically.

---

## 4. Custom Domain (Optional)

If using your own domain:

1. Open **Settings → Pages**.
2. Enter:

```
www.kairosrecruit.com
```

3. Update your DNS records with your domain registrar.
4. Enable **Enforce HTTPS** once available.

---

# Replacing the Company Logo

The website uses a single logo file:

```
images/logo.jpg
```

To update the logo:

1. Create a new JPG image.
2. Name it:

```
logo.jpg
```

3. Replace:

```
images/logo.jpg
```

No HTML changes are required if the filename remains the same.

---

# Replacing the Hero Image

If a hero background image is used, replace:

```
images/hero.jpg
```

with your new image.

Recommendations:

* Width: 1920 px
* Height: 1080 px
* JPG format
* Optimized for web
* File size under 300 KB

Keeping the same filename avoids any code changes.

---

# Updating Website Text

Most website content is located in:

```
index.html
```

Common sections include:

* Hero
* About
* Services
* Functional Expertise
* Industry Coverage
* Global Search Capability
* Contact
* Footer

Simply edit the text between the HTML tags.

Example:

```html
<h2>About Kairos Search</h2>

<p>
Your updated company description.
</p>
```

---

# Updating Contact Information

The contact section is located near the bottom of:

```
index.html
```

Update:

* Email address
* LinkedIn URL
* Contact wording

Example:

```html
<a href="mailto:info@kairosrecruit.com">
```

---

# Updating the Employment Agency Licence Number

The licence number appears once in the footer.

Locate:

```html
Employment Agency Licence No. 79980
```

Replace only the number.

Example:

```html
Employment Agency Licence No. 81234
```

No other changes are required.

---

# Editing Colours

Colours are defined using CSS variables.

Open:

```
css/style.css
```

Locate:

```css
:root {

    --color-primary: #F26522;

    --color-charcoal: #222222;

    --color-light-grey: #F5F5F5;

    --color-white: #FFFFFF;

}
```

Updating these variables changes the colour palette throughout the site.

---

# Editing Fonts

The website uses Google Font:

```
Inter
```

To change fonts:

1. Replace the Google Fonts link in:

```
index.html
```

2. Update:

```css
--font-family
```

inside:

```
css/style.css
```

---

# Editing Styles

Main styling:

```
css/style.css
```

Animations:

```
css/animations.css
```

JavaScript functionality:

```
js/main.js
```

---

# Updating Navigation

Navigation links are located near the top of:

```
index.html
```

Example:

```html
<li>
    <a href="#services">Services</a>
</li>
```

To add a new section:

1. Add a new navigation link.
2. Create a section with a matching `id`.

Example:

```html
<section id="new-section">
```

---

# Updating GitHub Pages

Whenever changes are made:

1. Save the edited files.
2. Commit the changes.
3. Push to GitHub.

Example:

```bash
git add .

git commit -m "Update website"

git push origin main
```

GitHub Pages will automatically rebuild and publish the latest version.

Deployment usually completes within a few minutes.

---

# Browser Support

Designed for all modern browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Mobile Safari
* Chrome for Android

---

# Performance Goals

* Mobile-first
* Responsive
* SEO-friendly
* Lightweight
* Accessible
* Fast loading
* GitHub Pages compatible
* No external frameworks
* Easy to maintain

---

# License

© Kairos Search. All rights reserved.
