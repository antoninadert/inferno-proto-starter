# inferno-proto-starter
An isomorphic (universal) web app starter project.
* Fast rendering, good performance.
* Developer productivity and happiness in mind.

This starter has SSR, isomorphic routing built-in, and will render the initial component's states directly in both client and server (first server-rendering, then client rehydration).

This uses Viewmodel for declarative components and state management.
Viewmodel is easy-to-use and powerful, and fallback on Inferno (an ultra-fast, react-like library) if needed.

It is also using Meteor platform for out-of-the-box reactive data. 
This project is a good starting point to prototype an app.

Technology used 
-------------
If you need to change the stack or add dependencies

1. [Meteor](https://www.meteor.com/) for isomorphic database reactivity, isomorphic builds, SSR, exact code splitting, reactive data, user accounts, security...
2. [Viewmodel](https://viewmodel.org/) For components,internal state management, data validation(client-side), bindings between state and view... 
3. [Inferno](https://infernojs.org/) For the underlying layer of Viewmodel. It can be changed to [React](https://facebook.github.io/react/). See [ProtoStarter](https://github.com/antoninadert/proto-starter)
4. [Universal router](https://github.com/kriasoft/universal-router) and [History](https://github.com/browserstate/history.js/) to provide an [easy-to-use](https://github.com/kriasoft/universal-router/issues/80), isomorphic router.
5. To ease the future creation of User accounts, [accounts-password](https://docs.meteor.com/api/passwords.html) is already integrated


Installation
-------------
1. [Install Meteor](https://www.meteor.com/install)
2. In the command line, type: `git clone https://github.com/antoninadert/proto-starter.git` . Your folder must now be created
3. Go in this folder from the command line: `cd proto-starter`
4. `meteor update` (if needed)
5. `meteor npm install` (if needed)
6. `meteor npm update --save` (if needed)

`PROTIP:` If Meteor's builder gets stuck in the process, you can try to press Ctrl+C to abort some (sometime invisible) tasks and resume installation.
Pressing Ctrl+C twice will abort the run. If you do that type `meteor` again or just press up arrow.
`PROTIP2:`If you have weird behaviors, errors that reference stuff that shouldn't be there anymore, you should delete `node_modules` directory and do a `meteor npm install` again

Run
-------------
`meteor`

Then open your localhost: http://localhost:3000/


Usage
-------------
The full architecture follows [Meteor's file and folder structure](https://guide.meteor.com/structure.html)

`/imports` 
This folder contains code that must be imported to be used (meteor convention). Mainly used to put your Components and Collections that will be imported later by server and client (isomorphic). 
Every component, that stores its own data, must be defined and imported in `/both/_Routes.js` to exist in the app.

In Inferno-VM components, you can omit to import the children as long as they are located in a file of the same name as the sub-folder containing them 
e.g. In `/imports/Home.js` the `< Home / >` component will include `< Ads / >` component and don't need to import it as it is located in `/imports/Ads/Ads.js`

`/Hub` 
This folder contains isomorphic code, used by both client and server.
The `_Routes.js` file must be loaded before all other files, hence the name (first in alphabetical order)
Remember to import your components in `_Routes.js` in order to use them. Routes are the nevralgic point of this App. 

`/Hub/client` 
This folder contains browser code, used for initializing the project (browser-side).

`/Hub/server` 
This folder contains server code, used for initializing the project (server-side)


You can then see the result at : http://localhost:3000/


Technology that you won't need to use
-------------
1. [RxJS](https://github.com/Reactive-Extensions/RxJS) as state management is handled by Viewmodel
2. [Redux](http://redux.js.org/) as state management is handled by Viewmodel
3. [React-helmet](https://github.com/nfl/react-helmet) as this is easy to generate this yourself using server-render package from Meteor (See sink.appendToHead() method used in `/server/router.js` ) 
4. [React router](https://github.com/ReactTraining/react-router) as universal router is more concise and simpler


CSS
-------------
1. No CSS builder/prefixer included in the proto-starter, it should be easy to add your own.
2. Right now you can use a mix of css files and inline styles (see ViewModel styles). 
The priority order is:
`*.css files using !important` > `ViewModel Styles` > `normal *.css files` > `ViewModel styles using !important`
(due to a bug, !important don't work in inline styles) 


Caveats
-------------
1. The first time you use the project, Meteor can take a while (15 min?) to initiate. This should only happen if Meteor is changing versions (Current version: `1.5.2`), or downloading the full `npm install` from scratch with 3g connection and fucking antivirus.
2. I couldn't find a way to serve data from a MongoDB collection in the server-side, hence a special code is used to generate a fake list of items on the server-side rendering, that will be replaced by DB data when client-side rendering happens.
3. Defer bindings don't work with Inferno and ViewModel (unlike the React version), find the [issue here](https://github.com/ManuelDeLeon/viewmodel-react/issues/29)


Related projects
-------------
I did a starter with [semantic-ui here](https://github.com/antoninadert/proto-starter-semantic) in case you want to try with Postcss and Semantic-UI and React

Useful ressources to get started
-------------
0. [Meteor with React tutorial](https://www.meteor.com/tutorials/react/creating-an-app) --> It should be very similar with Inferno
1. To [understand more on VM](https://forums.meteor.com/t/viewmodel-for-react-alpha/26490)
2. To [understand how async/await and promises work in Meteor](https://blog.meteor.com/using-promises-and-async-await-in-meteor-8f6f4a04f998)
4. When removing the [insecure package](https://atmospherejs.com/meteor/insecure) from Meteor, it would be important to know more about [meteor publish/subscribe](https://docs.meteor.com/api/pubsub.html) and [meteor methods](https://guide.meteor.com/methods.html) (according to pub/sub mechanism)
5. Use [Bundle Visualizer](https://blog.meteor.com/putting-your-app-on-a-diet-with-meteor-1-5s-bundle-visualizer-6845b685a119) to check your dependencies and how they load with [exact code splitting](https://blog.meteor.com/dynamic-imports-in-meteor-1-5-c6130419c3cd)

Licence
-------------
Apache 2.0 Licence (see LICENCE file)

Copyright © Antonin Adert 2017 All Rights Reserved.
