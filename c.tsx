import { Button } from "@/components/ui/button";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { InputField } from "./InputField";

interface LoginFormProps {
  onToggle: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
  const { values, errors, handleChange, validateForm, isSubmitted, resetForm } =
    useFormValidation(
      { email: "", password: "" },
      {
        email: (value) =>
          !value
            ? "Email is required"
            : !/\S+@\S+\.\S+/.test(value)
            ? "Email is invalid"
            : null,
        password: (value) =>
          !value
            ? "Password is required"
            : value.length < 6
            ? "Password must be at least 6 characters"
            : null,
      }
    );

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login form submitted", values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <InputField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={isSubmitted ? errors.email : null}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={isSubmitted ? errors.password : null}
      />
      <Button type="submit" className="w-full">
        <Mail className="mr-2 h-4 w-4" /> Login
      </Button>
      <p className="text-center">
        Don't have an account?{" "}
        <Button variant="link" onClick={onToggle} className="p-0">
          Sign Up
        </Button>
      </p>
    </form>
  );
};
