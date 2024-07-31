export default function InputField({
  label,
  icon,
  placeholder,
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-sm">
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
        <input
          id={label}
          name={label}
          type="text"
          placeholder={placeholder}
          className="block w-[400px] rounded-xl border border-grey-400 py-2 pl-12 pr-10 text-gray-800 placeholder:text-gray-400 sm:text-sm outline-none"
        />
      </div>
    </div>
  );
}
