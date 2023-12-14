"use client"

import {prettyPrint} from "@/services/display-util";

function getDiscriminator() {
    let account_key: string = (document.getElementById("account_key_input") as HTMLInputElement).value;
    // let account_type: string = (document.getElementById("account_type_input") as HTMLInputElement).value;
    let rpc_env: string = (document.getElementById("rpc_env_input") as HTMLInputElement).value;

    let url: string = process.env.NEXT_PUBLIC_BRYTE_DESCRIPTOR_URL + "/discriminator/" + account_key + "/" + rpc_env;
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

                <legend>Discriminator On-Chain Lookup - This form allows you to retrieve the discriminator for your account by retrieving the data on-chain.</legend>

                <div className="field">
                    <label className="label" htmlFor="account_key_input">Account Key</label>
                    <div className="control">
                        <input id="account_key_input" name="account_key_input" type="text" className="input "/>
                        <p className="help">The public key of the account for which you want to get the
                            discriminator</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="rpc_env_input">Solana Environment</label>
                    <div className="control">
                        <input id="rpc_env_input" name="rpc_env_input" type="text" className="input "/>
                        <p className="help">The Solana environment where your account lives. Values: Dev, Test, Main, Local</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="submit"></label>
                    <div className="control">
                        <button type={"button"} id="submit" className="button is-primary"
                                onClick={getDiscriminator}>Submit
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
