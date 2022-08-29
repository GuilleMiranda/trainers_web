import React from 'react'
import './Frame1123.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import filledsocialperson from "./filledsocialperson"
import filledactionvisibilityoff from "./filledactionvisibilityoff"
import VariantContainedSizeLargeIconLeftFalseIconRightFalse from "./VariantContainedSizeLargeIconLeftFalseIconRightFalse"
export default function Frame1123 () {
	return (
		<div className='Frame1123_Frame1123'>
			<div className='Rectangle142'/>
			<div className='Footer'>
				<div className='Rectangle141'/>
			</div>
			<div className='Login'>
				<div className='Dados'>
					<span className='Login_1'>Login</span>
				</div>
				<div className='Usurio'>
					<div className='Group1120'>
						<span className='Usuario'>Usuario</span>
						<span className='Usuario_1'>Usuario</span>
						<filledsocialperson className='filledsocialperson'/>
					</div>
					<img className='Line1' src = {ImgAsset.Frame1123_Line1} />
				</div>
				<div className='Senha'>
					<div className='Group1121'>
						<span className='Contrasea'>Contraseña</span>
						<span className='Contrasea_1'>Contraseña</span>
						<filledactionvisibilityoff className='filledactionvisibilityoff'/>
					</div>
					<img className='Line2' src = {ImgAsset.Frame1123_Line2} />
				</div>
				<VariantContainedSizeLargeIconLeftFalseIconRightFalse className='UnstyledButton'/>
			</div>
			<div className='Logo'>
				<img className='image1' src = {ImgAsset.Frame1123_image1} />
			</div>
		</div>
	)
}