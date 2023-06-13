import {JSX} from "react";
import RequestForm from "../../components/RequestForm/RequestForm";

const SendRequest = (): JSX.Element => {
  return (
    <section>
      <h1>Send your request</h1>
      <RequestForm />
    </section>
  );
}
export default SendRequest;
