# paste-json-chrome

Effectively pastes the contents of the clipboard into a new Chrome tab.

Copy some JSON or a plain JavaScript object to the clipboard. Enter a keyboard shortcut. A temporary JSON file is created containing the clipboard contents. The file opens in a new Chrome tab.

## Dependencies

- macOS (i.e. OS X)
- Google Chrome
- A Chrome extension like [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

_N.B. JSON Formatter has a setting "Allow access to file URLs" which needs to be enabled. You can access the extension's settings via chrome://extensions in the browser._

## Example Usage

Examples assume that you have chosen `⌘⌃J` as the keyboard shortcut.

#### 1: Curl response

- `curl https://jsonplaceholder.typicode.com/todos | pbcopy`
- Type `⌘⌃J` and JSON response opens in Chrome.

#### 2: JSON response of a prior XHR request

To view the JSON response of a prior XHR request on a web page you're debugging:

- Go to the Network tab of Chrome's developer tools
- Right-click the request > Copy > Copy response.
- Type `⌘⌃J` and JSON response opens in Chrome.

_Useful when you can't use the "Open in new tab" option because e.g. an Authorization header is required._

## Installation & Setup

## 1. Install this

```
npm install -g paste-json-chrome
```

### 2. Make Automator Workflow

- Open macOS Automator App
- ⌘N
- Select "Service" then click "Choose" button
- Click Library icon to open Library panel
- Select Utilities from Library
- Double-Click "Run Shell Script"
- Click Library icon again to close Library panel
- Paste following into the text area:
  ```
  test -f ~/.bashrc && . ~/.bashrc
  paste-json-chrome &>/dev/null &
  ```
- ⌘S to save, name it "Paste JSON to Chrome"

### 3. Create Keyboard Shortcut

- Open "keyboard" in System Preferences
- "Shortcuts" tab
- "Services" from categories on left
- Ensure General is expanded on right
- Click "Add Shortcut" button for "Paste JSON to Chrome"
- Choose shortcut, e.g. ⌘⌃J
