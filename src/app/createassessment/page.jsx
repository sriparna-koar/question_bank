// import AssessmentDetails from "@/components/AssessmentDetails";
// import Layout from "@/components/Layout"; 

// export default function LoginPage() {
//   return (
//     <Layout>
//       <main className="flex items-center justify-center h-screen">
//         <AssessmentDetails />
//       </main>
//     </Layout>
//   );
// }
"use client";

import { Suspense } from "react";
import AssessmentDetails from "@/components/AssessmentDetails";
import Layout from "@/components/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <main className="flex items-center justify-center h-screen">
        <Suspense fallback={<div>Loading assessment details...</div>}>
          <AssessmentDetails />
        </Suspense>
      </main>
    </Layout>
  );
}
