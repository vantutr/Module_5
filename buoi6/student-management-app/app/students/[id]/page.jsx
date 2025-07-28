import Link from "next/link";

// Component trang chi tiết nhận `params` làm prop
// `params.id` sẽ chứa giá trị ID từ URL
export default function StudentDetailPage({ params }) {
  const { id } = params;

  return (
    <div className="container">
      <h1>Student Information</h1>
      <div className="student-info">
        <p>Student: {id}</p>
      </div>
      <Link href="/" className="show-link">
        &larr; Back to list
      </Link>
    </div>
  );
}
