"use client"

import {prettyPrint} from "@/services/display-util";

function getDiscriminator() {
    let account_name: string = (document.getElementById("account_name_input") as HTMLInputElement).value;
    let account_type: string = (document.getElementById("account_type_input") as HTMLInputElement).value;
    let solana_env: string = (document.getElementById("solana_env") as HTMLInputElement).value;

    let url: string = process.env.NEXT_PUBLIC_BRYTE_DESCRIPTOR_URL + "/discriminator-offline/" + account_name + "/" + account_type;
    console.log(url);
    fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
                console.log(
                    'Looks like there was a problem. Status Code: ' + response.status
                );
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                // @ts-ignore
                document.getElementById('discriminator').innerHTML = "["+ data + "]";
            });
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

export default function Discriminator() {
    return <div>
        <form className="form-horizontal">
            <fieldset>

                <legend>Discriminator Offline Lookup</legend>
                <span>
                    This form allows you to retrieve the discriminator for your account or event struct without retrieving the data on-chain.
                </span>
                <div className="field">
                    <label className="label" htmlFor="account_name_input">Account Name</label>
                    <div className="control">
                        <input id="account_name_input" name="account_name_input" type="text" className="input "/>
                        <p className="help">The name of the struct (account or event) for which you want to get the discriminator</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="account_type_input">Account Type</label>
                    <div className="control">
                        <input id="account_type_input" name="account_type_input" type="text" className="input "/>
                        <p className="help">The type of data for the struct for which you want to retrieve the discriminator. Most common values are account or event (Anchor and BryteDescriptor use these values as prefixes when generating the disciminator).</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="submit"></label>
                    <div className="control">
                        <button type={"button"} id="submit" className="button is-primary" onClick={getDiscriminator}>Submit
                        </button>
                    </div>
                </div>

            </fieldset>
        </form>

        <div className="content has-text-centered is-flex-align-items-flex-end mt-auto pt-2">
            <pre><code id="discriminator"></code></pre>
        </div>
    </div>;
}
