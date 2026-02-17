import React from "react";

type ProfileFieldProps = {
  label: string;
  icon: React.ReactNode;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

export function ProfileField({
  label,
  icon,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: ProfileFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
        {icon}
        <input
          className="w-full outline-none text-gray-900 placeholder-gray-400 ml-2"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
