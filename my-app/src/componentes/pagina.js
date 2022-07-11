import React from "react";

function Pagina (){
    return (
 <div className="contenedor-pagina">
    <img 
    className ="icono1" src="./images/icon1.png"/>
    <img 
    className ="icono2" src="./images/icon2.png"/>
    <img
    className ="icono3" src="./images/icon3.png"/>
    <img
    className ="icono3" src="./images/icon4.png"/>
    <img
    className ="icono3" src="./images/icon5.png"/>
    <img
    className ="icono3" src="./images/icon6.png"/>

    <div className="contenedor-texto-cabecera">
        
    <p className="say-hello">Say hello to ReactJS</p>
    <p className="texto-inferior">You will learn how to use<br>the most popular frontend library,</br><br>and become a super Ninja devoloper</br></p>
    <p className="Awesome">Awesome!</p>
    <h2>Declarative</h2>
    <p className="declarative">React makes it painless to create interactive Uls.</p>
    <h2>Componets</h2>
    <p className="components">Build encapsulated componets that manage their state.</p>
    <h2>Single-Way</h2>
    <p className="single">A set of immutable values are passed to the componet´s.</p>
    <h2>JSX</h2>
    <p className="jsx">Statically-typed desing to run on modern browseer</p>
 </div>
</div>
  );
}

export default Pagina;