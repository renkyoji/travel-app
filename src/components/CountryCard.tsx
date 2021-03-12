import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ICountry } from "../redux/reducers/reducerTypes";

interface ICountryCardProps {
	data: ICountry
}

const CountryCard = ({ data }: ICountryCardProps) => {

	const { country, imageURL, ISOCode } = data;


	return (
		<Link to={`/countries/${ISOCode}`}>

			<div className="country-card">
				<img className={"card-img"} src={imageURL} alt={country} />
				<span className="card-text">{country}</span>
			</div>
		</Link >
	);
};

export default CountryCard;