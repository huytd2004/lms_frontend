// data.js - Separate data file for the Content component

export const tableData = [
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Khởi tạo', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Tạm dừng', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
  { id: 'IT2025', name: 'Cấu trúc dữ liệu và thuật toán', credit: '5 (2-1-0-5)', dept: 'Trường CNTT&TT', instructor: 'Nguyễn Văn An', status: 'Đang dạy', hasExam: 'Đã có' },
];

export const headerColumns = [
  { id: 'id', label: 'Mã học phần' },
  { id: 'name', label: 'Tên học phần' },
  { id: 'credit', label: 'Số tín chỉ' },
  { id: 'dept', label: 'Đơn vị' },
  { id: 'instructor', label: 'Trưởng nhóm chuyên môn' },
  { id: 'status', label: 'Trạng thái' },
  { id: 'hasExam', label: 'TT khóa mẫu' },
  { id: 'note', label: 'Ghi chú' },
  { id: 'actions', label: 'Thao tác' },
];

export const totalRecords = 200;

export const getStatusColor = (status) => {
  switch (status) {
    case 'Đang dạy':
      return '#4caf50'; // green
    case 'Tạm dừng':
      return '#f44336'; // red
    case 'Khởi tạo':
      return '#2196f3'; // blue
    default:
      return '#757575'; // gray
  }
};