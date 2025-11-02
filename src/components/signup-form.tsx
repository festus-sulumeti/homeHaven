import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Email validation regex
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // ✅ Phone validator (Kenyan format)
  const validatePhone = (phone: string) => {
    if (phone.startsWith("+254")) {
      return /^\+254\d{9}$/.test(phone);
    } else if (phone.startsWith("07")) {
      return /^07\d{8}$/.test(phone);
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

    // ✅ Email check
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // ✅ Phone validation
    if (!validatePhone(phone)) {
      if (phone.startsWith("+254")) {
        setErrorMsg("Invalid phone number. Format: +254712345678 (13 digits total).");
      } else if (phone.startsWith("07")) {
        setErrorMsg("Invalid phone number. Format: 0712345678 (10 digits total).");
      } else {
        setErrorMsg("Phone number must start with +254 or 07.");
      }
      setLoading(false);
      return;
    }

    // ✅ Password checks
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

    // ✅ Proceed with Supabase signup
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name, phone_number: phone },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data?.user?.email_confirmed_at == null) {
        setSuccessMsg(
          "Signup successful! Please check your email to confirm your account."
        );
        setShowPopup(true);
        setLoading(false);
        return;
      }

      setShowPopup(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred, please try again.");
      setLoading(false);
    }
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
        <form   onSubmit={handleSignup}
      className={cn("flex flex-col gap-6", className)}
      {...props}
      >
          <FieldGroup
           {/* ✅ Error / Success Messages */}
        {errorMsg && <p className="text-red-500 text-center text-sm">{errorMsg}</p>}
        {successMsg && <p className="text-green-600 text-center text-sm">{successMsg}</p>}

          >
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>

            {/* ✅ Phone Field */}
        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254712345678"
            required
          />
          <FieldDescription>
            Include country code (e.g., +254712345678) or use local format (0712345678).
          </FieldDescription>
        </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
           <AuthPopup
        visible={showPopup}
        title="Account created!"
        message={successMsg || "Welcome to Niokolee."}
      />
        </form>
      </CardContent>
    </Card>
  )
}
