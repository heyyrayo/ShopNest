import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue shopping with ShopNest."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;