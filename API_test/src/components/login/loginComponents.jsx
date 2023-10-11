import PropTypes from "prop-types";

function InputUserName({ username, onChange }) {
  return (
    <div>
      <label
        htmlFor="userName"
        className="block text-md font-medium leading-6 text-slate-50 pl-2"
      >
        Usuaria/o
      </label>
      <div className="mt-2">
        <input
          id="userName"
          name="userName"
          type="text"
          autoComplete="text"
          required
          value={username}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-teal-300 placeholder:text-white bg-blackInput focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-md sm:leading-7"
        />
      </div>
    </div>
  );
}

function InputPassword({ password, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-md font-medium leading-6 text-slate-50 pl-2"
        >
          Contraseña
        </label>
      </div>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-teal-300 placeholder:text-white bg-blackInput focus:ring-3 focus:ring-inset focus:ring-teal-600 sm:text-md sm:leading-7"
        />
      </div>
    </div>
  );
}

function ButtonSumbit() {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-celadon px-3 py-1.5 text-md font-semibold leading-6 text-gunMetal shadow-sm hover:bg-teal-600  sm:leading-7 mt-12"
      >
        Ingresa
      </button>
    </div>
  );
}

export { InputUserName, InputPassword, ButtonSumbit };
InputUserName.propTypes = {
  username: PropTypes.string,
  onChange: PropTypes.func,
};
InputPassword.propTypes = {
  password: PropTypes.string,
  onChange: PropTypes.func,
};
