import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		const action = { type: types.logout };
		dispatch(action);
		navigate("/login", { replace: true });
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4 animate__animated animate__slideInDown'>
			<Link className='navbar-brand ms-4' to='/'>
				Asociaciones
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink className='nav-item nav-link' to='/marvel'>
						Marvel
					</NavLink>

					<NavLink className='nav-item nav-link' to='/dc'>
						DC
					</NavLink>
					<NavLink className='nav-item nav-link' to='/search'>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-info'>{user.nickname}</span>
					<button className='nav-item nav-link btn me-3' onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
