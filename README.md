# Slashdot Ad-Shield Fix for Chrome

A TamperMonkey script that prevents intrusive ad-enforcement popups and overlay messages on Slashdot while maintaining site functionality.

## Overview

This script is designed to work around Slashdot's Ad-Shield system that can make the site unusable for users with ad blockers or if their network is subject to DNS filtering. It:
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

## Credits

- Original concept by Daniel Perelman (perelman@aweirdimagination.net / openuserjs.org/scripts/dperelman)
- Chrome/TamperMonkey adaptation by Platima
- Licensed under MIT License

## Contributing

Pull requests are welcome! Please feel free to submit issues or improvements.

## License

MIT License - see LICENSE file for details.

## Version History

- 2025-01-08: Initial Chrome/TamperMonkey release
  - Adapted from original Firefox/Greasemonkey script
  - Added support for Chrome
  - Enhanced iframe and popup blocking
  - Improved ad container cleanup

- 2025-01-11: Initial Chrome/TamperMonkey release
  - Enhanced iframe and popup blocking
  - Enhanced documentation
  - Added better metadata to script
