import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/views/nav';
import Home from './components/views/home';
import EnglishRouter from './components/views/english';
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
import Python from './components/views/python';
import _3D from './components/views/_3D';
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


import EnglishHome from './components/views/en/home';
import EnglishWebHome from './components/views/en/web/home';
import EnglishHTML from './components/views/en/web/html';
import EnglishCSS from './components/views/en/web/css';
import EnglishJS from './components/views/en/web/js/home';
import EnglishReactPage from './components/views/en/web/js/react';
import EnglishAngular from './components/views/en/web/js/angular';
import EnglishJQuery from './components/views/en/web/js/jquery';
import EnglishNodeJS from './components/views/en/web/js/node';
import EnglishPHP from './components/views/en/web/php';
import EnglishSQL from './components/views/en/web/sql';
import EnglishWebAnnexes from './components/views/en/web/annexes';
import EnglishJavaHome from './components/views/en/java/home';
import EnglishC from './components/views/en/c';
import EnglishPython from './components/views/en/python';
import English_3D from './components/views/en/_3D';
import EnglishHackingHome from './components/views/en/hacking/home';
import EnglishHackingWeb from './components/views/en/hacking/web';
import EnglishHackingBinaries from './components/views/en/hacking/binaries';
import EnglishHackingSystem from './components/views/en/hacking/system';
import EnglishHackingNetwork from './components/views/en/hacking/network';
import EnglishHackingAnnexes from './components/views/en/hacking/annexes';
import EnglishGit from './components/views/en/git';
import EnglishLinux from './components/views/en/linux';
import EnglishConcepts from './components/views/en/concepts';
import EnglishOthers from './components/views/en/others';
import EnglishContact from './components/views/en/contact';
import EnglishUndefined from './components/views/en/undefined';

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
					<Route exact path='/python' component={Python} />
					<Route exact path='/_3D' component={_3D} />
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


				<Route exact path='/en' component={EnglishHome} />
					<Route exact path='/en/web' component={EnglishWebHome} />
						<Route exact path='/en/web/html' component={EnglishHTML} />
						<Route exact path='/en/web/css' component={EnglishCSS} />
						<Route exact path='/en/web/js' component={EnglishJS} />
							<Route exact path='/en/web/js/react' component={EnglishReactPage} />
							<Route exact path='/en/web/js/angular' component={EnglishAngular} />
							<Route exact path='/en/web/js/node' component={EnglishNodeJS} />
							<Route exact path='/en/web/js/jquery' component={EnglishJQuery} />
						<Route exact path='/en/web/php' component={EnglishPHP} />
						<Route exact path='/en/web/sql' component={EnglishSQL} />
						<Route exact path='/en/web/annexes' component={EnglishWebAnnexes} />
					<Route exact path='/en/java' component={EnglishJavaHome} />
					<Route exact path='/en/c-lang' component={EnglishC} />
					<Route exact path='/en/python' component={EnglishPython} />
					<Route exact path='/en/_3D' component={English_3D} />
					<Route exact path='/en/hacking' component={EnglishHackingHome} />
						<Route exact path='/en/hacking/web' component={EnglishHackingWeb} />
						<Route exact path='/en/hacking/binaries' component={EnglishHackingBinaries} />
						<Route exact path='/en/hacking/system' component={EnglishHackingSystem} />
						<Route exact path='/en/hacking/network' component={EnglishHackingNetwork} />
						<Route exact path='/en/hacking/annexes' component={EnglishHackingAnnexes} />
					<Route exact path='/en/git' component={EnglishGit} />
					<Route exact path='/en/linux' component={EnglishLinux} />
					<Route exact path='/en/concepts' component={EnglishConcepts} />
					<Route exact path='/en/others' component={EnglishOthers} />
					<Route exact path='/en/contact' component={EnglishContact} />
				
				<Route path='/en' component={EnglishUndefined} />
				
				<Route path='/' component={Undefined} />
			</Switch>
		</BrowserRouter>
		<Footer />
  	</div>,
  document.getElementById('root')
);

