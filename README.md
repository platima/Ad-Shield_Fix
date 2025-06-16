<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=platima.slashdotadfix" height="20" />

# 🛡️ Slashdot Ad-Shield Fix for Chrome

A Tampermonkey script that prevents intrusive ad-enforcement popups and overlay messages on Slashdot while maintaining site functionality.

**NOTE:** This is specifically tested and working on Windows. It *should* work on macOS, but this is untested. If you are having issues, please see [Troubleshooting](#-troubleshooting).

## 📋 Table of Contents
- [Overview](#-overview)
- [Installation](#-installation)
- [Features](#-features)
- [Technical Details](#-technical-details)
- [Tested Combinations](#-tested-combinations)
- [Other Domains](#-other-domains)
- [Troubleshooting](#-troubleshooting)
- [Credits](#-credits)
- [Contributing](#-contributing)
- [License](#-license)
- [Version History](#-version-history)

## 🎯 Overview
This script is designed to work around Slashdot's Ad-Shield system that can make the site unusable for users with ad blockers or if their network is subject to DNS filtering, resulting in the dreaded html-load.com error, amongst others. 

## 💾 Installation
### Automatic Installation
1. Install the [Tampermonkey](https://chrome.google.com/webstore/detail/Tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension for Chrome if you have not already
2. Enable [Developer Mode](https://www.Tampermonkey.net/faq.php#Q209) in Tampermonkey. This is required for userscripts with Chromium Manifest V3 updates
3. Click [here](https://github.com/platima/slashdot-ad-fix/raw/main/ad-shield-fix.user.js) to install the script (Tampermonkey will automatically detect and prompt you to install it)
4. Click "Install" in the Tampermonkey prompt

### Manual Installation
1. Open Tampermonkey in Chrome
2. Click the "Create a new script" button
3. Copy the entire content of `ad-shield-fix.user.js`
4. Paste it into the editor
5. Click File > Save or press Ctrl+S

## ✨ Features
The script provides comprehensive protection against intrusive advertising elements:

- Blocks Ad-Shield's intrusive popup messages
- Prevents page reloads and redirects
- Stops style sheet removal attempts
- Removes empty ad containers
- Cleans up overlay iframes
- Works on both www.slashdot.org and slashdot.org
- Persists across page navigation

## 🔧 Technical Details
The script implements several protective measures:

- Intercepting and neutralising alert() calls
- Preventing overlay iframe creation
- Blocking style sheet removal attempts
- Removing empty ad containers
- Running at document-start to ensure maximum effectiveness

## 🧪 Tested Combinations

- Windows 10 - x64
  - ✅ Google Chrome 131 + Tampermonkey
  - ✅ Google Chrome 131 + uBlock Origin + Tampermonkey
  - ✅ Microsoft Edge 131 + Tampermonkey
  - ✅ Microsoft Edge 131 + uBlock Origin + Tampermonkey
  - ✅ Firefox 134 + GreaseMonkey
- macOS Monterey - Intel _(not that macOS version should matter)_
  - ✅ Chrome 132 + Tampermonkey
  - ✅ Chrome 132 + uBlock Origin + Tampermonkey
  - ✖ Firefox - Could not reproduce the issue even manually injecting loader.min.js and calling `asload()`
- Ubuntu 24.04.1 LTS - x64
  - ✅ Firefox 133 + GreaseMonkey
  - ✅ Firefox 133 + uBlock Origin + GreaseMonkey

## 🌐 Other Domains
Other domains that have been seen to have this issue related to html-load.com and the error dialog "This page could not be loaded properly due to incorect [snip]" referring to ht<span>tps://</span>report.error-report.com (catching keywords for people scouring the internet here!):

- j-cast.com
- timesofindia.indiatimes.com (external confirmation)
- picrew.me (external confirmation)

For the script to work with these, you must add more `@match` directives, such as
`@match https://j-cast.com/*`

## 🔍 Troubleshooting
***Last Tested Working:** 2025-06-16*

1. Ensure that the script is loading when you visit Slashdot by observing the red '1' on the Tampermonkey icon, and click it to confirm the script is active [as shown here](Example.png).
2. Ensure that you have [enabled Developer Mode](https://www.Tampermonkey.net/faq.php#Q209).
3. Make sure you're using Chrome with the Tampermonkey extension. Firefox is an unknown, as is GreaseMonkey.
4. Clear your browser's cache and cookies. Alternatively, enable Tampermonkey to run in Incognito Mode and open Slashdot in that mode.
5. Ensure no conflicting add-ons are running. Other addons or multiple scripts may interfere with the functionality.
6. Check your Chrome version is up to date (Settings > Help > About Google Chrome).
7. Verify that JavaScript is enabled in your browser settings.
8. Try disabling other extensions temporarily to identify any conflicts.
9. Check if the issue persists in a new Chrome profile (Chrome Menu > Add Profile).
10. Ensure your system's date and time are set correctly, as this might affect script execution.
11. Remove and re-install the extension and the script. This is just in case Tampermonkey is not functioning correctly or the script needs to be updated.
12. If using a work or school computer, check with your IT department about potential network restrictions.
13. Lodge an issue [using this template](https://github.com/platima/slashdot-ad-fix/issues/new?labels=bug&template=bug_report.md&title=%5BBUG%5D).

## 👥 Credits
- Original concept by [Daniel Perelman](https://github.com/dperelman) (perelman@aweirdimagination.net / https://openuserjs.org/scripts/dperelman)
- Chrome/Tampermonkey adaptation by Platima
- Verified functional on SourceForge and adapted by [@mpql](https://github.com/mpql)
- Licensed under MIT License

## 🤝 Contributing
Pull requests are welcome! Please feel free to submit issues or improvements.

## 📄 License
MIT License - see [LICENSE](LICENSE) file for details.

## 📅 Version History

### 2025
- **2025-06-16**
  - Accepted PR #5 by [@mpql](https://github.com/mpql) to add SourceForge
  - This included renaming the file to make it more generic / applicable
  - Updated README
- **2025-01-16**
  - Confirmed Firefox works (using the same fault on j-cast.com)
  - Added information about other domains and added instructions
  - Updated last-tested date
  - Updated header warning re OS
- **2025-01-15**
  - Added issue template and troubleshooting guide
  - Added additional installation instruction about Developer Mode
  - Added tested combinations
  - Refactored README.md in general
  - Improved code reliability, performance and cleanliness
- **2025-01-13**
  - DPerelman added a fix for the alert blocking
- **2025-01-11**
  - Initial Chrome/Tampermonkey release
  - Enhanced iframe and popup blocking
  - Enhanced documentation
  - Added better metadata to script
  - Added licence
  - Added attribution URL
- **2025-01-08**
  - Initial Chrome/Tampermonkey release
  - Adapted from original Firefox/Greasemonkey script
  - Added support for Chrome
  - Enhanced iframe and popup blocking
  - Improved ad container cleanup

---
*🔄 Last updated: 16 June 2025*
