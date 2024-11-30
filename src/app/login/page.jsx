import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout"; 

export default function LoginPage() {
  return (
    <Layout>
      <main className="flex items-center justify-center h-screen">
        <AuthForm />
      </main>
    </Layout>
  );
}
