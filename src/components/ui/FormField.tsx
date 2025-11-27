import React from 'react';
import { motion } from 'framer-motion';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'file' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  disabled?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  options,
  rows = 4,
  disabled = false,
  helperText,
  icon,
}) => {
  const inputId = `field-${name}`;
  
  const baseInputStyles = `
    w-full rounded-xl border-2 
    bg-white dark:bg-slate-800
    text-gray-900 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-slate-500
    transition-all duration-200
    focus:outline-none focus:ring-0
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error 
      ? 'border-red-300 dark:border-red-500 focus:border-red-500' 
      : 'border-gray-200 dark:border-slate-600 focus:border-sky-500 dark:focus:border-sky-400'
    }
    ${icon ? 'pl-11' : 'px-4'}
  `;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          className={`${baseInputStyles} py-3 resize-none`}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      );
    }

    if (type === 'select') {
      return (
        <select
          id={inputId}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${baseInputStyles} py-3 pr-10 appearance-none cursor-pointer`}
          aria-describedby={error ? `${inputId}-error` : undefined}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === 'file') {
      return (
        <div className="relative">
          <input
            id={inputId}
            name={name}
            type="file"
            disabled={disabled}
            className="hidden"
            aria-describedby={error ? `${inputId}-error` : undefined}
          />
          <label
            htmlFor={inputId}
            className={`
              flex items-center justify-center gap-3
              w-full py-4 px-4
              border-2 border-dashed rounded-xl
              border-gray-300 dark:border-slate-600
              bg-gray-50 dark:bg-slate-800/50
              text-gray-500 dark:text-slate-400
              cursor-pointer
              hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30
              transition-all duration-200
            `}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
            <span className="font-medium">Click to upload or drag and drop</span>
          </label>
        </div>
      );
    }

    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${baseInputStyles} py-3`}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>
    );
  };

  return (
    <motion.div 
      className="mb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label
        htmlFor={inputId}
        className="block text-sm font-semibold text-gray-700 dark:text-slate-200 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {renderInput()}
        
        {/* Select dropdown icon */}
        {type === 'select' && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-slate-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>

      {/* Helper text */}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-gray-500 dark:text-slate-400">
          {helperText}
        </p>
      )}

      {/* Error message */}
      {error && (
        <motion.p
          id={`${inputId}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

// Success message component
interface FormSuccessProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({
  title,
  message,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
      >
        {icon || (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-slate-300 max-w-sm mx-auto">
        {message}
      </p>
    </motion.div>
  );
};
