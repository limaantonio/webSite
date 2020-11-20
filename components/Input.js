import '../styles/main.css';

const Input = ({name}) => {
  return (
    <div className="flex flex-col p-2  items-center">
      <label className="text-green" htmlFor="">{name}</label>
      <input className="p-2 h-10  bg-input box-border text-green bg-input border-color rounded-3xl" type="text"/>
    </div>
  );
}

export default Input;
