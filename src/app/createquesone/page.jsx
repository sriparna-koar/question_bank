import QuestionFormOneByOne from "@/components/QuestionFormOneByOne";
import Layout from "@/components/Layout"; 

export default function OnePage() {
  return (
    <Layout>
      <main className="flex w-full items-center justify-center h-screen bg-gray-100">
        <QuestionFormOneByOne />
      </main>
    </Layout>
  );
}
