export default function BasicButton({
  title,
  handleClick,
  classes,
  disabled,
  icon,
}) {
  return (
    <>
      <button
        disabled={disabled}
        type="submit"
        class={`text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
          classes && classes
        } ${disabled ? "opacity-70" : ""}`}
        onClick={() => handleClick()}
      >
        {icon && <i className={`${icon} px-1`}></i>}
        {/* {icon && ``} */}
        {title}
      </button>
    </>
  );
}
