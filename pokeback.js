// ==UserScript==
// @name         Facebook Poke Back Script
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Automatically poke back specific people on Facebook
// @author       Hussar
// @match        https://www.facebook.com/pokes*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const TARGET_NAMES = ["target1", "target2", "target3"];

    function pokeBack() {
        console.log("Checking for pokes...");

        const pokeButtons = document.querySelectorAll('div[aria-label="Poke Back"], div[class*="poke-back-button"]');

        if (pokeButtons.length === 0) {
            console.log("No poke back buttons found. Check selector or page structure.");
            return;
        }

        pokeButtons.forEach(button => {
            const parentContainer = button.closest('div[data-visualcompletion="ignore-dynamic"]') || button.closest('div');
            const nameElement = parentContainer ? parentContainer.querySelector('span') : null;

            if (nameElement) {
                const currentName = nameElement.textContent;
                if (TARGET_NAMES.some(target => currentName.includes(target))) {
                    const matchedName = TARGET_NAMES.find(target => currentName.includes(target));
                    console.log(`Found poke from ${matchedName}. Attempting to poke back.`);
                    console.log("Button element:", button.outerHTML);
                    button.click();
                    console.log(`Clicked poke back for ${matchedName}`);
                }
            }
        });
    }

    pokeBack();

    setInterval(pokeBack, 10000);
})();