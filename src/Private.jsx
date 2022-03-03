import loginGuard from "./loginGuard";

const Private = (props) => {
  return <h1>This is a private component...hihi {props.message}</h1>;
};
const Guarded = loginGuard(Private); // a Private componens csak akkor jön létreha be van jelentkezve
export default Guarded;
