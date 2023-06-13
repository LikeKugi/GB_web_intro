import {JSX} from "react";

const RequestForm = (): JSX.Element => {
  return (
    <form>
      <fieldset>
        <legend>Name</legend>
        <label> Input your name:
        <input type="text"
               placeholder={'Enter your name'}/></label>
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <label> Input your email:
          <input type="email"
                 placeholder={'Enter your email'}/>
        </label>
      </fieldset>
      <fieldset>
        <button type={"submit"}>Send</button>
        <button type={"reset"}>Reset</button>
      </fieldset>
    </form>
  );
}
export default RequestForm;
