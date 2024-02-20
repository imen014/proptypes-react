import React from "react";
import propTypes from 'prop-types';


function Card({ email, age, phone , color }){

    return (
        <div>
            <form action="#" method="post">
            <label htmlFor="username"> username </label>
            <input type="text" id="username" placeholder="enter username" />
            <label htmlFor="femme"></label>
            <input type="checkbox" name="femme" id="femmme" />
            <label htmlFor="homme"></label>
            <input type="checkbox" name="homme" id="hommme" />
            <label htmlFor="accept">accept</label>
            <input type="submit" id="confirmer" />
            </form>
            <p>

                {email} - {age} - {phone}
            </p>

        </div>
    )


}

Card.propTypes = {
    email : propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    phone:propTypes.string.isRequired,
    color:propTypes.string.isRequired
}

Card.defaultProps = {
    email : "default@gmail.com",
    age:30,
    phone:"+216",
    color:"yellow"
}
export default Card;