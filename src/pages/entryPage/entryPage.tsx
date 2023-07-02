import "./entryPage.css"
import TextField from "../../components/textField/textField";

export default function EntryPage() {
    return (
        <div id="entry-page-body">
            <div id="entry-page-panel">
                <div id="entry-page-logo">
                    <img src="src/assets/logo.svg" alt="logo.svg" />
                    <h1>Simple Weather</h1>
                </div>
                <div id="entry-page-content">
                    <form method="get" action="/weather">
                        <TextField id="country-field" name="country" placeholder="Country" /><br />
                        <TextField id="state-field" name="state" placeholder="State" /><br />
                        <TextField id="city-field" name="city" placeholder="City" /><br />
                        <button type="submit">
                            <img src="src/assets/go.svg" alt="go-button.svg" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}