'use client';

import {prettyPrint} from "@/services/display-util";

function getAccount() {
  let account_key: string = (document.getElementById("account_key_input") as HTMLInputElement).value;
  let program_id: string = (document.getElementById("program_id_input") as HTMLInputElement).value;
  let solana_env: string = (document.getElementById("solana_env") as HTMLInputElement).value;

  let url: string = process.env.NEXT_PUBLIC_BRYTE_DESCRIPTOR_URL + "/account/" + account_key + "/" + program_id + "/" + solana_env;
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
          document.getElementById('account').innerHTML = prettyPrint(data);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
}

const Home: React.FC = () => {
  return (

      <div>

        <form className="form-horizontal">
          <fieldset>

            <legend>Account Data Lookup</legend>

            <div className="field">
              <label className="label" htmlFor="account_key_input">Account Key</label>
              <div className="control">
                <input id="account_key_input" name="account_key_input" type="text" className="input "/>
                <p className="help">The public key of the account for which you want to retrieve data</p>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="program_id_input">Program ID</label>
              <div className="control">
                <input id="program_id_input" name="program_id_input" type="text" className="input "/>
                <p className="help">The program ID to which the account was initialized.</p>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="submit"></label>
              <div className="control">
                <button type={"button"} id="submit" className="button is-primary" onClick={getAccount}>Submit</button>
              </div>
            </div>

          </fieldset>
        </form>

        <div className="content is-flex-align-items-flex-end mt-auto pt-2">
          <pre><code id="account"></code></pre>
        </div>
      </div>
  );
}

export default Home;
