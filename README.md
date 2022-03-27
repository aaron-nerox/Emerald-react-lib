<!-- markdownlint-disable-next-line -->
<div align="center">
  <img src="https://user-images.githubusercontent.com/35573892/157494134-d811db26-78e9-4316-94c4-b30fc88f7b44.png" alt="logo" width="15%" />
</div>

<h1 align="center"> Emerald </h1>

<div align="center">
  
#### Build beautiful [React](https://reactjs.org/) user interfaces easily and quickly with the emerald react library that provides you with the most beautiful and simple to use set of components.
  
[![npm](https://img.shields.io/npm/dw/emerald-react)](https://www.npmjs.com/package/emerald-react)
[![npmv](https://img.shields.io/npm/v/emerald-react)](https://www.npmjs.com/package/emerald-react)
[![licence](https://img.shields.io/npm/l/emerald-react)](https://www.npmjs.com/package/emerald-react)
[![lastCommit](https://img.shields.io/github/last-commit/TheX-ByAaron/Emerald-react-lib)](https://github.com/TheX-ByAaron/Emerald-react-lib)
[![stars](https://img.shields.io/github/stars/TheX-ByAaron/Emerald-react-lib?style=social)](https://github.com/TheX-ByAaron/Emerald-react-lib)
[![follows](https://img.shields.io/github/followers/TheX-ByAaron?style=social)](https://github.com/TheX-ByAaron)
  
</div>

## Installation
### Emerald React is available as an [npm](https://www.npmjs.com/package/emerald-react) package.
```sh

//with npm
npm i emerald-react
```
### That's all, now enjoy a set of easy to use components that will grow more in the future for sure.

## Usage
```jsx
//app.js
import { Button } from 'emerald-react'
import './app.css';

function App() {
  return (
    <div >
      <Button 
          isDisabled={false}
          emeraldStyle="btn-style"
          onClick={() => alert('button clicked!')}>
        Hello Emerald
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

```css
/*app.css*/
.btn-style{
    background-color: #B100E8;
}

.btn-style:hover{
    background-color: #6A00F4;
}
```
### pretty easy right? And here's the good part, you can declar components directly without any style and they still would be beautifully styled by default. 

## Roadmap

- [x] Launch the first version of the component library with 24 components.
- [ ] Reach 100 easy to use components.
- [ ] Launch the library official documentation.
- [ ] Launch a contribution guide.
- [ ] Add other JavaScript formats support.
- [ ] Add TypeScript support.

## Changelog

- Version 1.1.0 is finally here.
- <b> BREAKING CHANGE! </b> Changed the styling attribute from <b>EmeraldStyle</b> to <b>emeraldStyle</b>.
- Added more container components like <b>AdaptiveGrid</b>, <b>AdaptiveContainer</b> and <b>Scrollable</b>.
- Added more utility components like <b>Avatar</b>, <b>Badge</b>, <b>Divider</b> and <b>ToolTip</b>.
- Added a simpler styling option for each component.
- Total components up from 24 to 34.
- Added support for common JavaScript alongside named ES modules.

## Licence
This project is licensed under the terms of the [MIT LICENCE](https://github.com/TheX-ByAaron/Emerald-react-lib/LICENCE).
