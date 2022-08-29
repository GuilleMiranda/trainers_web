import React from 'react'
import './Frame1125.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Avatar from "./Avatar"
import NavItemHelp from "./NavItemHelp"
import NavItemLogout from "./NavItemLogout"
export default function Frame1125 () {
	return (
		<div className='Frame1125_Frame1125'>
			<div className='Rectangle1'/>
			<div className='Rectangle2'/>
			<div className='ChatBar'>
				<div className='Rectangle10'/>
				<div className='Rectangle11'/>
				<div className='Send'>
					<img className='Vector' src = {ImgAsset.Frame1125_Vector} />
					<img className='Vector_1' src = {ImgAsset.Frame1125_Vector_1} />
				</div>
				<div className='Attachfile'>
					<img className='Vector_2' src = {ImgAsset.Frame1125_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.Frame1125_Vector_3} />
				</div>
				<span className='_'>|</span>
				<span className='Escribtumensajeac'>Escribí tu mensaje acá</span>
			</div>
			<div className='Group33'>
				<div className='Rectangle2_1'/>
				<div className='ContactList'>
					<div className='Contact'>
						<span className='FranciscaPintos'>Francisca Pintos</span>
						<span className='Muchasgracias'>Muchas gracias!</span>
						<span className='_10062022'>10/06/2022</span>
						<div className='__1'>
							<img className='Vector_4' src = {ImgAsset.Frame1125_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Frame1125_Vector_5} />
						</div>
					</div>
					<div className='Contact_1'>
						<span className='MarcosMeza'>Marcos Meza</span>
						<span className='HolaQuedamosenreu'>Hola! Quedamos en reu...</span>
						<span className='Ayer'>Ayer</span>
						<div className='__2'>
							<img className='Vector_6' src = {ImgAsset.Frame1125_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Frame1125_Vector_7} />
						</div>
					</div>
					<div className='Contact_2'>
						<div className='Rectangle9'/>
						<span className='CinthiaRojas'>Cinthia Rojas</span>
						<span className='HolaQuedamosenreu_1'>Hola! Quedamos en reu...</span>
						<span className='_637PM'>6:37 PM</span>
						<div className='__3'>
							<img className='Vector_8' src = {ImgAsset.Frame1125_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Frame1125_Vector_9} />
						</div>
					</div>
				</div>
				<Avatar className='Avatar'/>
				<NavItemHelp className='NavItemdefault'/>
				<NavItemLogout className='NavItemdefault_1'/>
				<div className='Group29'>
					<div className='Rectangle8'/>
					<div className='Frame4'>
						<div className='search'>
							<img className='Vector_10' src = {ImgAsset.Frame1125_Vector_10} />
							<img className='Vector_11' src = {ImgAsset.Frame1125_Vector_11} />
						</div>
						<span className='Search'>Search</span>
					</div>
				</div>
				<img className='Vector2' src = {ImgAsset.Frame1125_Vector2} />
				<div className='Banner'>
					<div className='Rectangle10_1'/>
					<Link to='/frame358'>
						<img className='MenuVertical' src = {ImgAsset.Frame357_MenuVertical} />
					</Link>
					<div className='Accountcircle'>
						<div className='Rectangle12'/>
						<img className='Vector_12' src = {ImgAsset.Frame1125_Vector_12} />
						<img className='Vector_13' src = {ImgAsset.Frame1125_Vector_13} />
					</div>
					<span className='CinthiaRojas_1'>Cinthia Rojas</span>
				</div>
				<div className='Logo'>
					<img className='image1' src = {ImgAsset.Frame1125_image1} />
				</div>
			</div>
			<img className='Line1' src = {ImgAsset.Frame1125_Line1} />
			<div className='ChatSection'>
				<div className='Frame353'>
					<span className='HolaCinthiaAsesnosvemos'>Hola Cinthia! Así es, nos vemos !</span>
				</div>
				<div className='Frame159'>
					<div className='Frame356'>
						<span className='HolaQuedamosenreunirnoshoy'>Hola! Quedamos en reunirnos hoy</span>
						<span className='Nosvemosenelgimnasio'>Nos vemos en el gimnasio!</span>
					</div>
				</div>
			</div>
			<div className='Rectangle7'/>
		</div>
	)
}