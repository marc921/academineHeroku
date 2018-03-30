import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/views/nav';
import Home from './components/views/home';
import WebHome from './components/views/web/home';
import HTML from './components/views/web/html';
import CSS from './components/views/web/css';
import JS from './components/views/web/js/home';
import ReactPage from './components/views/web/js/react';
import Angular from './components/views/web/js/angular';
import JQuery from './components/views/web/js/jquery';
import NodeJS from './components/views/web/js/node';
import PHP from './components/views/web/php';
import SQL from './components/views/web/sql';
import WebAnnexes from './components/views/web/annexes';
import JavaHome from './components/views/java/home';
import C from './components/views/c';
import Unity from './components/views/unity';
import HackingHome from './components/views/hacking/home';
import HackingWeb from './components/views/hacking/web';
import HackingBinaries from './components/views/hacking/binaries';
import HackingSystem from './components/views/hacking/system';
import HackingNetwork from './components/views/hacking/network';
import HackingAnnexes from './components/views/hacking/annexes';
import Git from './components/views/git';
import Linux from './components/views/linux';
import Concepts from './components/views/concepts';
import Others from './components/views/others';
import Contact from './components/views/contact';
import Undefined from './components/views/undefined';
import Footer from './components/views/footer';
import './index.css';


ReactDOM.render(
	<div className="container">
		<Nav />
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
					<Route exact path='/web' component={WebHome} />
						<Route exact path='/web/html' component={HTML} />
						<Route exact path='/web/css' component={CSS} />
						<Route exact path='/web/js' component={JS} />
							<Route exact path='/web/js/react' component={ReactPage} />
							<Route exact path='/web/js/angular' component={Angular} />
							<Route exact path='/web/js/node' component={NodeJS} />
							<Route exact path='/web/js/jquery' component={JQuery} />
						<Route exact path='/web/php' component={PHP} />
						<Route exact path='/web/sql' component={SQL} />
						<Route exact path='/web/annexes' component={WebAnnexes} />
					<Route exact path='/java' component={JavaHome} />
					<Route exact path='/c-lang' component={C} />
					<Route exact path='/unity' component={Unity} />
					<Route exact path='/hacking' component={HackingHome} />
						<Route exact path='/hacking/web' component={HackingWeb} />
						<Route exact path='/hacking/binaries' component={HackingBinaries} />
						<Route exact path='/hacking/system' component={HackingSystem} />
						<Route exact path='/hacking/network' component={HackingNetwork} />
						<Route exact path='/hacking/annexes' component={HackingAnnexes} />
					<Route exact path='/git' component={Git} />
					<Route exact path='/linux' component={Linux} />
					<Route exact path='/concepts' component={Concepts} />
					<Route exact path='/others' component={Others} />
					<Route exact path='/contact' component={Contact} />
				
				<Route path='/' component={Undefined} />
			</Switch>
		</BrowserRouter>
		<Footer />
  	</div>,
  document.getElementById('root')
);

