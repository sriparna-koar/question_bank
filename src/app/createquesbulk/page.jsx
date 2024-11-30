
import QuestionFormBulk from "@/components/QuestionFormBulk";
import Layout from "@/components/Layout";

export default function BulkPage() {
  return (
    <Layout>
      <main className="flex w-full items-center justify-center h-screen overflow-y-auto bg-gray-100">
        <QuestionFormBulk />
      </main>
    </Layout>
  );
}

