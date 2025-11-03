import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email validation regex
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Phone validator (Kenyan format)
  const validatePhone = (phone: string) => {
    const cleanedPhone = phone.replace(/\s+/g, "");
    if (cleanedPhone.startsWith("+254")) {
      return /^\+254\d{9}$/.test(cleanedPhone);
    } else if (cleanedPhone.startsWith("07")) {
      return /^07\d{8}$/.test(cleanedPhone);
    }
    return false;
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    // Email check
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Phone validation
    if (!validatePhone(phone)) {
      if (phone.startsWith("+254")) {
        setErrorMsg(
          "Invalid phone number. Format: +254712345678 (13 digits total)."
        );
      } else if (phone.startsWith("07")) {
        setErrorMsg(
          "Invalid phone number. Format: 0712345678 (10 digits total)."
        );
      } else {
        setErrorMsg("Phone number must start with +254 or 07.");
      }
      setLoading(false);
      return;
    }

    // Password checks
    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      setLoading(false);
      return;
    }

    // Proceed with backend API signup
    try {
      const apiUrl =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          confirmPassword,
          // Removed mongodbUri - backend handles this
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(
          data.message || "Failed to create account. Please try again."
        );
        setLoading(false);
        return;
      }

      setSuccessMsg("Signup successful! Welcome to HomeHaven.");

      // Store token and user data
      if (data.data?.token) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
      }

      // Navigate to dashboard after a short delay
      setTimeout(() => {
        const userRole = data.data?.user?.role;
        if (userRole === "admin" || userRole === "super_admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }, 2000);
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg(
        "An unexpected error occurred. Please check your connection and try again."
      );
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup} className="flex flex-col gap-6">
          {/* Error / Success Messages */}
          {errorMsg && (
            <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
              <p className="text-destructive text-sm text-center">{errorMsg}</p>
            </div>
          )}
          {successMsg && (
            <div className="rounded-md bg-green-500/10 border border-green-500/20 p-3">
              <p className="text-green-600 dark:text-green-400 text-sm text-center">
                {successMsg}
              </p>
            </div>
          )}

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                disabled={loading}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                disabled={loading}
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+254712345678 or 0712345678"
                required
                disabled={loading}
              />
              <FieldDescription>
                Include country code (e.g., +254712345678) or use local format
                (0712345678).
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                disabled={loading}
                minLength={8}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="••••••••"
                required
                disabled={loading}
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Creating account..." : "Create Account"}
              </Button>
              <Button
                variant="outline"
                type="button"
                disabled={loading}
                className="w-full"
                onClick={handleGoogleSignup}
              >
                Sign up with Google
              </Button>
              <FieldDescription className="text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
