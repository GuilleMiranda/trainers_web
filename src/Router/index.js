import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Frame358 from '../Components/Frame358';
import Frame357 from '../Components/Frame357';
import Frame1125 from '../Components/Frame1125';
import Frame1124 from '../Components/Frame1124';
import Frame1123 from '../Components/Frame1123';
import Avatar from '../Components/Avatar';
import Iconsalertcircle from '../Components/iconsalertcircle';
import NavItemHelp from '../Components/NavItemHelp';
import Iconslogout from '../Components/iconslogout';
import NavItemLogout from '../Components/NavItemLogout';
import Filledsocialperson from '../Components/filledsocialperson';
import Filledactionvisibilityoff from '../Components/filledactionvisibilityoff';
import VariantContainedSizeLargeIconLeftFalseIconRightFalse from '../Components/VariantContainedSizeLargeIconLeftFalseIconRightFalse';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/frame358"><Frame358 /></Route>
				<Route exact path="/frame357"><Frame357 /></Route>
				<Route exact path="/frame1125"><Frame1125 /></Route>
				<Route exact path="/frame1124"><Frame1124 /></Route>
				<Route exact path="/frame1123"><Frame1123 /></Route>
				<Route exact path="/avatar"><Avatar /></Route>
				<Route exact path="/iconsalertcircle"><Iconsalertcircle /></Route>
				<Route exact path="/navitemhelp"><NavItemHelp /></Route>
				<Route exact path="/iconslogout"><Iconslogout /></Route>
				<Route exact path="/navitemlogout"><NavItemLogout /></Route>
				<Route exact path="/filledsocialperson"><Filledsocialperson /></Route>
				<Route exact path="/filledactionvisibilityoff"><Filledactionvisibilityoff /></Route>
				<Route exact path="/variantcontainedsizelargeiconleftfalseiconrightfalse"><VariantContainedSizeLargeIconLeftFalseIconRightFalse /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;