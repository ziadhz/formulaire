import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange, error }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-900 text-lg font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-2 p-3 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white`}
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
