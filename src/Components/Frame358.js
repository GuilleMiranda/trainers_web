import React from 'react'
import './Frame358.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Avatar from "./Avatar"
import NavItemHelp from "./NavItemHelp"
import NavItemLogout from "./NavItemLogout"
export default function Frame358 () {
	return (
		<div className='Frame358_Frame358'>
			<div className='Screen'/>
			<div className='ChatBar'>
				<div className='Rectangle10'/>
				<div className='Rectangle11'/>
				<div className='Send'>
					<img className='Vector' src = {ImgAsset.Frame358_Vector} />
					<img className='Vector_1' src = {ImgAsset.Frame358_Vector_1} />
				</div>
				<div className='Attachfile'>
					<img className='Vector_2' src = {ImgAsset.Frame358_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.Frame358_Vector_3} />
				</div>
				<span className='_'>|</span>
				<span className='Escribtumensajeac'>Escribí tu mensaje acá</span>
			</div>
			<div className='Group33'>
				<div className='Rectangle2'/>
				<div className='ContactList'>
					<div className='Contact'>
						<span className='FranciscaPintos'>Francisca Pintos</span>
						<span className='Muchasgracias'>Muchas gracias!</span>
						<span className='_10062022'>10/06/2022</span>
						<div className='__1'>
							<img className='Vector_4' src = {ImgAsset.Frame358_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Frame358_Vector_5} />
						</div>
					</div>
					<div className='Contact_1'>
						<span className='MarcosMeza'>Marcos Meza</span>
						<span className='HolaQuedamosenreu'>Hola! Quedamos en reu...</span>
						<span className='Ayer'>Ayer</span>
						<div className='__2'>
							<img className='Vector_6' src = {ImgAsset.Frame358_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Frame358_Vector_7} />
						</div>
					</div>
					<div className='Contact_2'>
						<div className='Rectangle9'/>
						<span className='CinthiaRojas'>Cinthia Rojas</span>
						<span className='HolaQuedamosenreu_1'>Hola! Quedamos en reu...</span>
						<span className='_637PM'>6:37 PM</span>
						<div className='__3'>
							<img className='Vector_8' src = {ImgAsset.Frame358_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Frame358_Vector_9} />
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
							<img className='Vector_10' src = {ImgAsset.Frame358_Vector_10} />
							<img className='Vector_11' src = {ImgAsset.Frame358_Vector_11} />
						</div>
						<span className='Search'>Search</span>
					</div>
				</div>
				<img className='Vector2' src = {ImgAsset.Frame358_Vector2} />
				<div className='Banner'>
					<div className='Rectangle10_1'/>
					<div className='Accountcircle'>
						<div className='Rectangle12'/>
						<img className='Vector_12' src = {ImgAsset.Frame358_Vector_12} />
						<img className='Vector_13' src = {ImgAsset.Frame358_Vector_13} />
					</div>
					<span className='CinthiaRojas_1'>Cinthia Rojas</span>
				</div>
				<div className='Logo'>
					<img className='image1' src = {ImgAsset.Frame358_image1} />
				</div>
			</div>
			<img className='Line1' src = {ImgAsset.Frame358_Line1} />
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
			<div className='Sidebar'>
				<div className='Background'/>
				<div className='Accountcircle_1'>
					<div className='Rectangle12_1'/>
					<img className='Vector_14' src = {ImgAsset.Frame358_Vector_14} />
					<img className='Vector_15' src = {ImgAsset.Frame358_Vector_15} />
				</div>
				<Link to='/frame357'>
					<div className='Close'>
						<img className='Vector_16' src = {ImgAsset.Frame358_Vector_16} />
						<img className='Vector_17' src = {ImgAsset.Frame358_Vector_17} />
					</div>
				</Link>
				<div className='Section2'>
					<div className='Rectangle12_2'/>
					<span className='Message'>Ubicación</span>
					<span className='Info'>Cinthia se encuentra en Asunción, Paraguay</span>
					<div className='Locationon'>
						<img className='Vector_18' src = {ImgAsset.Frame358_Vector_18} />
						<img className='Vector_19' src = {ImgAsset.Frame358_Vector_19} />
					</div>
				</div>
				<div className='Section1'>
					<div className='Rectangle12_3'/>
					<span className='Message_1'>Cinthia te eligió como entrenador el 18/06/2022</span>
					<span className='Info_1'>Info</span>
					<div className='Infooutline'>
						<div className='Group'>
							<img className='Vector_20' src = {ImgAsset.Frame358_Vector_20} />
							<img className='Vector_21' src = {ImgAsset.Frame358_Vector_21} />
						</div>
					</div>
				</div>
			</div>
			<span className='CinthiaRojas_2'>Cinthia Rojas</span>
		</div>
	)
}