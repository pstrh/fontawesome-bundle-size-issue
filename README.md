This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It shows that adding just one icon via [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) adds 11 KB gzipped to your bundle.

The icon has be added to the app via the steps documented in the react-fontawesome documentation:

    $ yarn add @fortawesome/fontawesome-svg-core
    $ yarn add @fortawesome/free-solid-svg-icons
    $ yarn add @fortawesome/react-fontawesome

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons'

    const element = <FontAwesomeIcon icon={faCoffee} />

Steps to analyze and try yourself:
- `yarn install` to install dependency
- `yarn start` to start the application
- To analyze the bundle size run `yarn build` followed by `yarn analyze`

The example also contains commented code (uncomment this code to try it yourself). It shows that adding the same coffee.svg via SVGR (already included in CRA) only adds less than 300 B gzipped to the bundle.

SVGR + CRA allows to add svgs via:

    import { ReactComponent as FontAwesomeCoffee } from './coffee.svg';
