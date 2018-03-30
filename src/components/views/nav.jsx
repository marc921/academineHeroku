import React from "react";

export default class Nav extends React.Component {
	componentDidMount() {
	    this.callApi()
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('https://academine-backend.herokuapp.com/receiver', { 
		   method: 'post', 
		   headers: new Headers({
		     'Authorization': 'Basic '+btoa('2a8i6w3h/q*:9i2z#486RI@e6nW5q'), 
		     'Content-Type': 'application/x-www-form-urlencoded'
		   }), 
		   body: 'A=1&B=2'
		 });
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};
  
	render(){
		return(
		  <nav>
		    <Link className='academine' href='/' text='AcadéMine'/>
		    <Link href='/web' text='Web' />
		    <Link href='/java' text='Java' />
		    <Link href='/c' text='C' />
		    <Link href='/unity' text='Unity' />
		    <Link href='/hacking' text='Cybersécurité' />
		    <Link href='/linux' text='Linux' />
		    <Link href='/git' text='Git' />
		    <Link href='/concepts' text='Concepts' />
		    <Link href='/others' text='Autres' />
		  </nav>
		);
	};
}

export const Link = ({ className, href, text }) => {
	return (<a className={className} href={href} style={window.location.pathname.startsWith(href) ? {color: '#fd0'} : {}}>{text}</a>);
} 