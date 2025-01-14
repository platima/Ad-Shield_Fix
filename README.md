# Slashdot Ad-Shield Fix for Chrome

A TamperMonkey script that prevents intrusive ad-enforcement popups and overlay messages on Slashdot while maintaining site functionality.

**NOTE:** This is specifically tested and working with Chrome on Windows, and with TamperMonkey. It has also been tested with uBlock Origin running with no issues. It _may_ work in Firefox, and it _should_ work on macOS, but this is untested. If you are having issues, please see [Troubleshooting].

## Overview

This script is designed to work around Slashdot's Ad-Shield system that can make the site unusable for users with ad blockers or if their network is subject to DNS filtering, resulting in the dreaded html-load.com error, amongst others. It:
- Prevents intrusive popup messages
- Blocks overlay iframes that attempt to force users to disable ad blockers
- Maintains normal site functionality
- Removes empty ad containers that take up space
- Works across all Slashdot pages

## Installation

1. Install the [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension for Chrome
2. Click [here](https://github.com/platima/slashdot-ad-fix/raw/main/slashdot-ad-fix.user.js) to install the script (TamperMonkey will automatically detect and prompt you to install it)
3. Click "Install" in the TamperMonkey prompt

Alternatively, you can manually install the script:
1. Open TamperMonkey in Chrome
2. Click the "Create a new script" button
3. Copy the entire content of `slashdot-ad-fix.user.js`
4. Paste it into the editor
5. Click File > Save or press Ctrl+S

## Features

- Blocks Ad-Shield's intrusive popup messages
- Prevents page reloads and redirects
- Stops style sheet removal attempts
- Removes empty ad containers
- Cleans up overlay iframes
- Works on both www.slashdot.org and slashdot.org
- Persists across page navigation

## Technical Details

The script works by:
- Intercepting and neutralising alert() calls
- Preventing overlay iframe creation
- Blocking style sheet removal attempts
- Removing empty ad containers
- Running at document-start to ensure maximum effectiveness

## Troubleshooting
_**Last Tested Working:** 2025-01-15_

1. Ensure that the script is loading when you visit /. by observing the red '1' on the TamperMonkey icon, and click it to confirm the script is active [as shown here](Example.png).
2. Make sure you're using Chrome with the TamperMonkey extension. Firefox is an unknown, as is GreaseMonkey.
3. Clear your browsers cache. Alternatively enable TamperMonkey to run in Incognito Mode and open /. in that.
4. Ensure no conflicting add-ons are running. Other addons like running multiple scripts may interfere with the functionality.
5. Remove and re-install the extension and the script. This is just in case TamperMonkey is not functioning correctly or the script needs to be updated.
6. Lodge an issue [using this template](https://github.com/platima/slashdot-ad-fix/issues/new?labels=bug&template=bug_report.md&title=%5BBUG%5D).

## Credits

- Original concept by Daniel Perelman (perelman@aweirdimagination.net / https://openuserjs.org/scripts/dperelman)
- Chrome/TamperMonkey adaptation by Platima
- Licensed under MIT License

## Contributing

Pull requests are welcome! Please feel free to submit issues or improvements.

## License

MIT License - see `LICENSE` file for details.

## Version History

_Note this may not always be up to date, but the commit history is ☺_

- 2025-01-15: Added issue template and troubleshooting guide.

- 2025-01-13: DPerelman added a fix for the alert blocking

- 2025-01-11: Initial Chrome/TamperMonkey release
  - Enhanced iframe and popup blocking
  - Enhanced documentation
  - Added better metadata to script
  - Added license
  - Added attribution URL

- 2025-01-08: Initial Chrome/TamperMonkey release
  - Adapted from original Firefox/Greasemonkey script
  - Added support for Chrome
  - Enhanced iframe and popup blocking
  - Improved ad container cleanup
