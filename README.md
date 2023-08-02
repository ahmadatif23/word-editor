# React Word Editor

## Demo / Example
Go to https://ahmadatif23.github.io/word-editor/

## Installation

```bash
npm install
```

## Run Word Editor

```bash
npm start
```

## Package

### 1. jodit-react

The main engine for this word editor.
Will generate html that can be save to database as string.
Those string can be use to be display in react app using dangerouslySetInnerHTML.

```js
<div dangerouslySetInnerHTML={{ __html: htmlStringFromDatabase }} />
```

### 2. dompurify

Use to sanitize whatever input by user for security purposed.

```js
const sanitizedContent = DOMPurify.sanitize(htmlStringFromDatabase);
<div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
```

## Disclaimer

Not a package.