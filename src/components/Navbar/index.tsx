import {Link} from "gatsby";
import React from "react";
import icon from "./icon.png";
import {NavbarWrapper, NavbarItems} from "./styles";

const Navbar = ({siteTitle = ""}) => (
    <NavbarWrapper>
        <NavbarItems>
            {/* <img src={icon} style={{ width: "70px" }} /> */}
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </NavbarItems>
        <NavbarItems>
            <button>discord link here</button>
            <button>reddit (maybe?) link here</button>
        </NavbarItems>
    </NavbarWrapper>
)

export default Navbar;
