import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface SignInFormProps {
  onToggle: () => void;
}

export default function SignInForm({ onToggle }: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = signIn(email, password);
    
    if (!success) {
      setError("Invalid email or password");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onToggle}
            className="text-purple-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
        <div className="bg-purple-50 rounded-lg p-3 mt-4">
          <p className="text-xs text-purple-700 font-medium mb-1">Demo Accounts:</p>
          <p className="text-xs text-purple-600">Super Admin: admin@shophub.com</p>
          <p className="text-xs text-purple-600">Regular: user@example.com</p>
          <p className="text-xs text-purple-600">Password: password123</p>
        </div>
      </div>
    </form>
  );
}