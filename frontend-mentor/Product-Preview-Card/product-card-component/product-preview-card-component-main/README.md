# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

My end result on mobile (you can see also desktop on the links section)

![](./images/Screenshot%20from%202023-01-26%2015-24-37.png)

The end result of the frontendmentor

![](./images/image-product-mobile.jpg)


### Links

- Live Site URL: [](https://astonishing-haupia-0d0643.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learn a lot of cool features, starting with grid that brings to me a whole new world when it comes to display things on the screen. Like the button stretches to the end of the box, the gap that you can put between lines, the columns that you can add when it switches from desktop to mobile and viceversa, and so on. Also learn a little bit of display flex that i used on the box to fit the prices. And overall practice sizing things on the screen.
I really enjoyed this challange, it was so much fun!.

To see how you can add code snippets, see below:

```html nice accessibility feature with visually-hidden class omitting the content to only softwares that reads pages can read it.
<p class="discount-price">
                <span class="visually-hidden">Discount price:</span>
                $149.99
              </p>
              <p class="original-price">
                <span class="visually-hidden">Original price:</span>
                <s>$169.99</s>
              </p>
```
```css changing from mobile to desktop. Gotta have a max-width tho
@media (min-width: 600px) {
  .product-content {
    --content-padding: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}
```
```css button to display icon before text
.button[data-icon="shopping-cart"]::before {
  content: "";
  width: 15px;
  height: 16px;
  background-image: url("images/icon-cart.svg");
}
```


### Useful resources

- [Youtube](https://www.youtube.com/@KevinPowell) - This guy is awesome on teaching CSS and showing CSS features to anyone independent of low or high level of knowledge on the theme
- [Youtube](https://www.youtube.com/@WebDevSimplified) - Also another influencer that really helps with the basics and advanced contents of the frontend world.
- [W3Schools](https://www.w3schools.com/) - This one is my go-to site when i forget about a property on either html or css


## Author

- Website - [Gabriel Carvalho]()
- Frontend Mentor - [@NHDrizzt](https://www.frontendmentor.io/profile/NHDrizzt)
- Github - [@NHDrizzt](https://github.com/NHDrizzt)


## Acknowledgments

Kevin Powell was the guy that really help me out when i was stuck on something in the code.
