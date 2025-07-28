import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội" },
        { id: 2, name: "Trần Thị B", age: 22, address: "TP. Hồ Chí Minh" },
        { id: 3, name: "Lê Văn C", age: 21, address: "Đà Nẵng" },
        { id: 4, name: "Phạm Thị D", age: 19, address: "Hải Phòng" },
        { id: 5, name: "Hoàng Minh E", age: 23, address: "Cần Thơ" },
      ],
    };
  }

  render() {
    const { students } = this.state;
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              {/* 'key' giúp React theo dõi các phần tử trong danh sách */}
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
