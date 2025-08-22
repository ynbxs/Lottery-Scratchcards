# 🎲 Lottery Scratchcards

A simple lottery scratchcard game built with **HTML, CSS, and JavaScript**.  
Users can buy scratchcards, reveal winnings, and track their balance.

## 🚀 Live Demo
[View it on GitHub Pages](https://ynbxs.github.io/Lottery-Scratchcards/) 

## 🔧 Features
- Start with a balance of 100€
- Buy scratchcards for 10€ each
- Reveal hidden winnings using `data-amount` attributes
- Prevent double-clicks by marking cards as scratched
- Display updated balance in real time
- Visual feedback (scratched cards turn lighter)

## 🧠 Concept
This project demonstrates how to use **data attributes** (`data-*`) in HTML to store hidden values and interact with them in JavaScript.  
It also reinforces working with **DOM events, dataset properties, and conditional logic**.

## 🧩 Structure
- `index.html` – Grid of scratchcards with `data-amount` and `data-scratched` attributes  
- `style.css` – Styles for scratchcards and balance display  
- `lib/scratchcards.js` – Game logic (buying, scratching, balance updates)  

## 💡 How it Works
1. User clicks on a scratchcard.  
2. Balance decreases by 10€.  
3. If the scratchcard has a winning `data-amount`, it is added to the balance.  
4. The card is marked as scratched (`data-scratched="true"`) and cannot be reused.  
5. The card reveals the winning amount visually.  
6. Game ends when balance reaches 0€.  
