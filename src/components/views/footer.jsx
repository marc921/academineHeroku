import React from "react";

export default class Footer extends React.Component {
	constructor(props){
		super(props);
		let language = '';
		let contact = '';
		if (location.pathname.startsWith('/en')){
			language = 'english';
			contact = '/en/contact';
		}
		else{
			language = 'french';
			contact = '/contact';
		}

		this.state = {
			language: language,
			contact: contact,
			constructionMessages: {
				"french": "Le site est actuellement (01/05/2018) en construction.",
				"english": "The website is currently (01/05/2018) under construction."
			}
		};
	}

	switchLanguage(value){
		this.setState({language: value});
		let languageHome = '';
		switch(value){
			case 'french':
				languageHome = '/';
				break;
			case 'english':
				languageHome = '/en';
				break;
			default:
				languageHome = '/';
		}
		location.assign(languageHome)

	}
  
	render(){
		return(
		  <footer>
		    <span>{this.state.constructionMessages[this.state.language]}</span>
		    <a href={this.state.contact}>Contact</a>
		    <select onChange={event => this.switchLanguage(event.target.value)} value={this.state.language}>
			  <option value="french">Français</option>
			  <option value="english">English</option>
			</select>
		  </footer>
		);
	};
}