import React from "react";

export default class Nav extends React.Component {
  
	render(){
		return(
		  <nav>
		    <Link className='academine' href='/' text='AcadéMine'/>
		    <Link href='/web' text='WEB' />
		    <Link href='/java' text='JAVA' />
		    <Link href='/unity' text='UNITY' />
		    <Link href='/hacking' text='CYBERSECURITE' />
		    <Link href='/linux' text='LINUX' />
		    <Link href='/git' text='GIT' />
		    <Link href='/concepts' text='CONCEPTS' />
		    <Link href='/others' text='AUTRES' />
		  </nav>
		);
	};
}

export const Link = ({ className, href, text }) => {
	return (<a className={className} href={href} style={window.location.pathname.startsWith(href) ? {color: '#fd0'} : {}}>{text}</a>);
} 