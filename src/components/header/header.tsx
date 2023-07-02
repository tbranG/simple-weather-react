import "./header.css"
import TextField from "../textField/textField";

import { useState } from "react";

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const buildHeader = (): JSX.Element => {
        if (isMenuActive) {
            return (
                <header id="page-header">
                    <div id="header-logo">
                        <img src="src/assets/logo.svg" />
                        <h1>Simple Weather</h1>
                    </div>
                    <div id="menu-button">
                        <button id="menu-button-b" onClick={() => {
                            setIsMenuActive(!isMenuActive)
                        }}>
                            <img src="src/assets/menu.svg" alt="menu_icon.png"/>
                        </button>
                    </div>
                    <div id="header-form">
                        <form method="get" action="/weather">
                            <div id="form-textboxes">
                                <TextField id="country-field" name="country" placeholder="Country" /><br />    
                                <TextField id="state-field" name="state" placeholder="State"/>    <br />
                                <TextField id="city-field" name="city" placeholder="City" />    <br />
                            </div>
                            <button type="submit">
                                <img src="src/assets/search.svg" alt="search.svg"/>
                            </button>
                        </form>
                    </div>
                </header>
            )
        } else {
            return (
                <header id="page-header">
                    <div id="header-logo">
                        <img src="src/assets/logo.svg" />
                        <h1>Simple Weather</h1>
                    </div>
                    <div id="menu-button">
                        <button id="menu-button-b" onClick={() => {
                            setIsMenuActive(!isMenuActive)
                        }}>
                            <img src="src/assets/menu.svg" alt="menu_icon.png"/>
                        </button>
                    </div>
                </header>
            )
        }
    }

    return (
        buildHeader()
    )
}