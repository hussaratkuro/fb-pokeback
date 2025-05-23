# Facebook Specific Users Poke Back

A Tampermonkey/Greasemonkey userscript to automatically poke back specific people on the Facebook Pokes page (https://www.facebook.com/pokes). This script checks for poke notifications from the specified users and clicks their "Poke Back" buttons.

Note: Automating actions on Facebook may violate its Terms of Service, which could lead to account restrictions. Use this script responsibly and at your own risk.

## Features

* Automatically pokes back specific users when they poke you.
* Runs on the Facebook Pokes page (https://www.facebook.com/pokes).
* Checks for new pokes every 10 seconds.
* Logs actions to the browser console for debugging.

## Requirements

* A web browser (e.g., Chrome, Firefox).
* A userscript manager:
    * Tampermonkey for Chrome.
    * Greasemonkey for Firefox.
* Access to the Facebook Pokes page.

## Installation

1. Install a Userscript Manager:
    * For Chrome: Install Tampermonkey from the Chrome Web Store.
    * For Firefox: Install Greasemonkey from Firefox Add-ons.
2. Create the Script:
    * Open Tampermonkey or Greasemonkey in your browser (via its extension menu).
    * Click "Create a new script" or "Add a new script."
    * Copy and paste the contents of pokeback.js
3. Configure the Script:
    * Replace target1, target2 and target3 in the TARGET_NAMES array with the exact names of the people you want to poke back, as they appear in the poke notifications (e.g., ["Alice Johnson", "Bob Smith"]).
    * Save the script in Tampermonkey/Greasemonkey.
4. Enable the Script:
    * Ensure Tampermonkey/Greasemonkey is enabled in your browser.
    * The script will activate automatically when you visit https://www.facebook.com/pokes.

## Usage

1. Visit the Pokes Page:
    * Open your browser and go to https://www.facebook.com/pokes.
    * Keep the page open for the script to run.
2. Monitor the Script:
    * Open the browser console to see logs.
    * Look for messages like:
        * Checking for pokes...
        * Found poke from [Name]. Attempting to poke back.
        * Clicked poke back for [Name].
3. Verify Pokes:
    * The script checks every 10 seconds for pokes from the specified users and clicks their "Poke Back" buttons.
    * Confirm pokes are sent by checking the Pokes page or notifications.
4. Enjoy poke farming