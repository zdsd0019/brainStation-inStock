import React from 'react';
import HeaderLogo from '../../assets/Logo/Logo-instock.svg';
import './logo.scss';



class Logo extends React.Component {
    render() {
      return (     
        <>
        <img src={ HeaderLogo } alt="Instock logo"></img>
        </>
      );
    }
  }


export default Logo;