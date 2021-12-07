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
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import administrarUsuarios from "views/administrarUsuarios.js";
import admOrdenesProduccion from "views/admOrdenesProduccion.js";
import administrarConfigProductos from "views/administrarConfigProductos.js";
import CrearConfiguracion from "views/CrearConfiguracion.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { Collapse } from "react-bootstrap";
import Submenu from "routes.js";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "nc-icon nc-sun-fog-29",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/administrarUsuarios",
    name: "Gestión Usuarios",
    icon: "nc-icon nc-single-02",
    component: administrarUsuarios,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Mi Perfil",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    
  },
   
  {
    path: "/administrarConfigProductos",
    name: "Gestión Productos",
    icon: "nc-icon nc-bag",
    component: administrarConfigProductos,
    layout: "/admin",
  },
  {
    path: "/CrearConfiguracion",
    name: "Crear Producto",
    icon: "nc-icon nc-ruler-pencil",
    component: CrearConfiguracion,
    layout: "/admin",
  },
  {
    path: "/admOrdenesProduccion",
    name: "Gestión de Ordenes ",
    icon: "nc-icon nc-bullet-list-67",
    component: admOrdenesProduccion,
    layout: "/admin",
  },
  {
    path: "/ordenes",
    name: "borradores----",
    icon: "nc-icon nc-bullet-list-67",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/materiasprimas",
    name: "Materias Primas",
    icon: "nc-icon nc-grid-45",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/reportes",
    name: "Reportes",
    icon: "nc-icon nc-single-copy-04",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
