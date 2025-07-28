import Link from "next/link";

const students = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Deckow Crist" },
  { id: 4, name: "Patricia Lebsack" },
  { id: 5, name: "Clementina DuBuque" },
  { id: 6, name: "Glenna Reichert" },
];

export default function StudentListPage() {
  return (
    <div className="container">
      <h1>Student List</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <Link href={`/students/${student.id}`} className="show-link">
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
