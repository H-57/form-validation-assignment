

interface InputElementProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  Data:any;
  setData: any;
  error: any;
}

function InputElement({type,placeholder,label,name,Data,setData,error}: InputElementProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
      >
        {label}
      </label>
      <input
        value={Data[name]}
        onChange={(e) => {
       
          setData({
            ...Data,
            [e.target.name]: e.target.value,
          });
        }}
        type={type}
        id={name}
        name={name}
        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
        placeholder={placeholder}
      />
      {error[name] && (
        <p className="mt-2 text-sm  dark:text-red-500">
          <span className="font-medium">Error!</span> {error[name]}!
        </p>
      )}
    </div>
  );
}

export default InputElement;
