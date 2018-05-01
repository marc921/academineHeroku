import React from "react";

export default class Nav extends React.Component {
	componentDidMount() {
	    this.callApi()
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('https://academine-backend.herokuapp.com/receiver');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};
  
	render(){
		let nav = location.pathname.startsWith('/en')
			? <nav>
			    <Link className='academine' href='/' text='AcadéMine'/>
			    <Link href='/en/web' text='Web' />
			    <Link href='/en/java' text='Java' />
			    <Link href='/en/c-lang' text='C' />
			    <Link href='/en/python' text='Python' />
			    <Link href='/en/_3D' text='3D' />
			    <Link href='/en/hacking' text='Hacking' />
			    <Link href='/en/linux' text='Linux' />
			    <Link href='/en/git' text='Git' />
			    <Link href='/en/concepts' text='Concepts' />
			    <Link href='/en/others' text='Others' />
			  </nav> 
			: <nav>
			    <Link className='academine' href='/' text='AcadéMine'/>
			    <Link href='/web' text='Web' />
			    <Link href='/java' text='Java' />
			    <Link href='/c-lang' text='C' />
			    <Link href='/python' text='Python' />
			    <Link href='/_3D' text='3D' />
			    <Link href='/hacking' text='Cybersécurité' />
			    <Link href='/linux' text='Linux' />
			    <Link href='/git' text='Git' />
			    <Link href='/concepts' text='Concepts' />
			    <Link href='/others' text='Autres' />
			  </nav>;

		return(nav);
	};
}

export const Link = ({ className, href, text }) => {
	return (<a className={className} href={href} style={window.location.pathname.startsWith(href) ? {color: '#fd0'} : {}}>{text}</a>);
} 