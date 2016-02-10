---
layout: post
title: Case study: Improving performance and maintainability of a legacy website
categories: [performance]
tags: [performance]
published: True
---

- What we've currently got
    - PHP website backed with MySQL database
    - Messy codebase
    - Really, really shitty code - inline queries and DOM rendering
    - Fat page weight
    - Large scripts not placed in the correct areas
    - Messy CSS, IDs for selectors, no naming convention
    - Redundant features
    - No build process

- Moving from PHP to Jekyll
    - Chose jekyll because most of the site is static pages and data (good for performance as they're easily cachable)
    - Configurable
    - Simple templating language
    - Built in build steps (SCSS pre-compile)
    - Transitioned by moving data first
        - Exported SQL
        - Converted to CSV and then to YAML
        - Placed in the `_data` folder
        - Used `jekyll-datapage_gen` plugin (https://github.com/avillafiorita/jekyll-datapage_gen) to generate individual pages from each item of data
    - Moved search functionality from PHP to the client
    - Jekyll `foreach` loop used to render each item from the data
    - Copied across all assets but didn't change the location of them, just updated references to be relative
    - The site is still running via nginx so the email form PHP file can still work
    - Figuring out page redirect rules

- Clean up
    - CSS
        - Removed a few features (wishlist)
        - Re-wrote CSS to be mobile first and made the content responsive
        - Used classes and follow BEM naming methodology and split into smaller files for each component
        - Used basic variables to prevent duplicate of the same values across all stylesheets
        - Added in normalize.css
        - Changed any image assets to CSS ones
    - JavaScript
        - Threw away jQuery - no longer need to support legacy browsers and there's not enough functionality in the site to warrant using it
        - Used $.min.js as a small wrapper around `document.querySelector`
        - Used a different carosell plugin that didn't have any dependencies
        - Build script and npm
    - Images
        - Converted all the PNGs to JPGs as they will have a lower file size due to them no needing transparency
        - Improved folder structure and removed old school SEO names
        - Sprited icons/SVG icons
        - Added to build script to optimize them during deployment

- Performance improvements
    - Already gained from using static pages. No need to hit a database now
    - Smaller CSS, JS and images so less of a page load
    - Inline the CSS as it's so small. If it was larger, split into 2 bundles, with one containing the critical styles to the page which is inlined and the other async requested (using async loading technique)
    - Inline JS as well as it's so small
    - Pre-fetch/Pre-load/Pre-render
    - Add the site to CloudFlare. Will mean that the pages are cached with inline styles, serving the page faster and reduce load on the original box. Have to be careful about caching the page for a long time if inline assets need to change
    - Styles at the top, scripts at the bottom

- Begin the redesign
