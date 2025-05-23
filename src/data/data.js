// data.js - Separate data file for the Content component
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import StorageIcon from '@mui/icons-material/Storage';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const menuItems = [
  {
    group: '',
    items: [
      { text: 'Tổng quan', icon: <DashboardIcon /> },
    ],
  },
  {
    group: 'Quản lý khóa học',
    items: [
      { text: 'Học phần', icon: <SchoolIcon /> },
      { text: 'Lớp học', icon: <GroupIcon /> },
      { text: 'Kỳ học', icon: <CalendarTodayIcon /> },
    ],
  },
  {
    group: 'Quản lý hệ thống',
    items: [
      { text: 'Cấu hình', icon: <SettingsIcon /> },
      { text: 'Báo cáo', icon: <BarChartIcon /> },
    ],
  },
  {
    group: 'Cài đặt',
    items: [
      { text: 'Danh mục', icon: <TableChartIcon /> },
      { text: 'Dữ liệu eHUST', icon: <StorageIcon /> },
      { text: 'Người dùng', icon: <GroupIcon /> },
      { text: 'Vai trò', icon: <AssignmentIndIcon /> },
    ],
  },
];
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