/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Admin() { // se construye por pedazo la vista del admin. ESTE ES UN COMPONENTE 
  //cada const es como un minicomponente XD, como atributo(una variable de tipo constante en su tipo de dato), a los cuales se les da un nombre
  // el const es como una manera de tomar a uno de los componentes importados y se identifica cual es el que se llama, por los nombres de los parametros que se modifican.
  // dos variables utilizando array destructuring 
  const [image, setImage] = React.useState(sidebarImage); // se le otorga un estado inicial, asignandole un valor inicial con usestate a este atributo de la funcion
  const [color, setColor] = React.useState("black");//todos son hooks
  const [hasImage, setHasImage] = React.useState(true);
  //En primer lugar, declaramos dos variables utilizando array destructuring:
  // la primera, hasImage, representa el estado del componente; 
  //la segunda, setHasImage, representa la función con la que cambiaremos el valor de ese estado. Además, le asignamos un valor inicial (true).

  //el react.useState asigna un estado inicial. es la manera deasignar el valor a ese atributo
  // estos son los llamados hooks
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
