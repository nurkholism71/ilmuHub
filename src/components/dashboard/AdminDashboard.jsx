import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Video, 
  Calendar, 
  FileText, 
  HelpCircle, 
  Award, 
  MessageSquare, 
  DollarSign, 
  BarChart2, 
  Layers, 
  Settings, 
  Link2, 
  FileBarChart, 
  LifeBuoy, 
  Search, 
  Bell, 
  Globe, 
  ChevronDown, 
  ChevronRight, 
  TrendingUp, 
  Download, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  LogOut, 
  UserCheck, 
  Coins, 
  MoreVertical, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Plus, 
  Eye, 
  Filter, 
  Check, 
  Radio,
  UserPlus,
  Edit3,
  Trash2,
  Key,
  Ban,
  Mail,
  Upload,
  Shield,
  UploadCloud,
  Star,
  CheckCircle,
  AlertCircle,
  XCircle,
  FileCheck,
  Phone,
  Sliders,
  CheckSquare,
  X,
  CreditCard,
  Edit2,
  User,
  MoreHorizontal,
  MapPin,
  Heart,
  Copy,
  ArrowUpRight
} from 'lucide-react';

export default function AdminDashboard({ user, onNavigateToLive, onBackToHome, onLogout, onSwitchRole }) {
  const [activeNav, setActiveNav] = useState('users'); // default to 'users' (matching media_1790731825631.jpg)
  const [dateRangeFilter, setDateRangeFilter] = useState('1 Sep 2026 - 30 Sep 2026');
  const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = useState(false);
  const [revenuePeriodFilter, setRevenuePeriodFilter] = useState('All Time');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [contentManagementOpen, setContentManagementOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

  // =========================================================
  // VIP TEACHER APPLICATIONS STATES (Pendaftaran Guru VIP)
  // =========================================================
  const [vipTabFilter, setVipTabFilter] = useState('all'); // 'all' | 'pending' | 'verified' | 'approved' | 'revision'
  const [vipSearchQuery, setVipSearchQuery] = useState('');
  const [vipSubjectFilter, setVipSubjectFilter] = useState('All Subjects');
  const [vipTierFilter, setVipTierFilter] = useState('All Tiers');
  const [selectedVipTeacherId, setSelectedVipTeacherId] = useState('vip-1');
  const [selectedVipDetailTab, setSelectedVipDetailTab] = useState('dossier'); // 'dossier' | 'tiers' | 'documents' | 'financials'
  const [selectedVipCheckboxes, setSelectedVipCheckboxes] = useState([]);
  const [isApproveVipModalOpen, setIsApproveVipModalOpen] = useState(false);
  const [isRevisionVipModalOpen, setIsRevisionVipModalOpen] = useState(false);
  const [isScheduleVipModalOpen, setIsScheduleVipModalOpen] = useState(false);
  const [isAddVipModalOpen, setIsAddVipModalOpen] = useState(false);
  const [isDocViewerModalOpen, setIsDocViewerModalOpen] = useState(false);
  const [activeDocPreview, setActiveDocPreview] = useState(null);
  const [targetVipTeacher, setTargetVipTeacher] = useState(null);
  const [platformTakeRate, setPlatformTakeRate] = useState(15); // Platform 15%, Teacher 85%

  // =========================================================
  // USERS ROOM STATES (matching media_1790731145724.jpg)
  // =========================================================
  const [userTabFilter, setUserTabFilter] = useState('all'); // 'all' (12,548) | 'students' (9,856) | 'teachers' (1,248) | 'admins' (56)
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('All Roles');
  const [userStatusFilter, setUserStatusFilter] = useState('All Status');
  const [userJoinDateFilter, setUserJoinDateFilter] = useState('All Join Dates');
  const [selectedUserId, setSelectedUserId] = useState('usr-1');
  const [selectedUserDetailTab, setSelectedUserDetailTab] = useState('profile'); // 'profile' | 'activity' | 'classes' | 'certificates'
  const [selectedUserCheckboxes, setSelectedUserCheckboxes] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isImportUsersModalOpen, setIsImportUsersModalOpen] = useState(false);
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // =========================================================
  // TEACHERS ROOM STATES (matching media_1790732606905.jpg)
  // =========================================================
  const [teacherTabFilter, setTeacherTabFilter] = useState('all'); // 'all' (1,248) | 'active' (1,092) | 'pending' (48) | 'inactive' (108)
  const [teacherSearchQuery, setTeacherSearchQuery] = useState('');
  const [teacherSubjectFilter, setTeacherSubjectFilter] = useState('All Subjects');
  const [teacherStatusFilter, setTeacherStatusFilter] = useState('All Status');
  const [teacherJoinDateFilter, setTeacherJoinDateFilter] = useState('All Joining Dates');
  const [selectedFacultyId, setSelectedFacultyId] = useState('tea-2'); // Default to Siti Aisyah matching screenshot
  const [selectedFacultyDetailTab, setSelectedFacultyDetailTab] = useState('profile'); // 'profile' | 'classes' | 'performance' | 'documents'
  const [selectedFacultyCheckboxes, setSelectedFacultyCheckboxes] = useState([]);
  const [isAddFacultyModalOpen, setIsAddFacultyModalOpen] = useState(false);
  const [isImportFacultyModalOpen, setIsImportFacultyModalOpen] = useState(false);

  // =========================================================
  // STUDENTS ROOM STATES (Data Mahasiswa & Siswa)
  // =========================================================
  const [studentTabFilter, setStudentTabFilter] = useState('all'); // 'all' (8,156) | 'active' (7,420) | 'graduated' (1,890) | 'inactive' (736)
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [studentProgramFilter, setStudentProgramFilter] = useState('All Programs');
  const [studentStatusFilter, setStudentStatusFilter] = useState('All Status');
  const [studentJoinDateFilter, setStudentJoinDateFilter] = useState('All Joining Dates');
  const [selectedStudentId, setSelectedStudentId] = useState('std-1'); // Default to Aisha Rahman
  const [selectedStudentDetailTab, setSelectedStudentDetailTab] = useState('profile'); // 'profile' | 'courses' | 'certificates' | 'payments'
  const [selectedStudentCheckboxes, setSelectedStudentCheckboxes] = useState([]);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isImportStudentModalOpen, setIsImportStudentModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Jakarta, Indonesia',
    program: 'Bahasa Arab & Nahwu',
    level: 'Beginner',
    status: 'Active'
  });

  // =========================================================
  // CLASSES ROOM STATES (Data Kelas, Pengajar, & Santri)
  // =========================================================
  const [classTabFilter, setClassTabFilter] = useState('all'); // 'all' (248) | 'active' (184) | 'upcoming' (42) | 'completed' (22)
  const [classSearchQuery, setClassSearchQuery] = useState('');
  const [classSubjectFilter, setClassSubjectFilter] = useState('All Subjects');
  const [classLevelFilter, setClassLevelFilter] = useState('All Levels');
  const [selectedClassId, setSelectedClassId] = useState('cls-1'); // Default to Nahwu for Beginners
  const [selectedClassDetailTab, setSelectedClassDetailTab] = useState('overview'); // 'overview' | 'students' | 'syllabus' | 'grades'
  const [selectedClassCheckboxes, setSelectedClassCheckboxes] = useState([]);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isImportClassesModalOpen, setIsImportClassesModalOpen] = useState(false);
  const [isEnrollStudentModalOpen, setIsEnrollStudentModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({
    title: '',
    code: '',
    subject: 'Nahwu & Shorof',
    level: 'Beginner',
    instructor: 'Ust. Ahmed Mohamed',
    schedule: 'Senin & Rabu • 19:30 WIB',
    quota: 50,
    price: 'Rp 299.000 / bln',
    format: 'Live Zoom + Rekaman HD',
    description: ''
  });

  // =========================================================
  // LIVE ROOMS STATES (matching media_1790734764232.jpg)
  // =========================================================
  const [liveTabFilter, setLiveTabFilter] = useState('all'); // 'all' (48) | 'live' (12) | 'upcoming' (18) | 'ended' (18)
  const [liveSearchQuery, setLiveSearchQuery] = useState('');
  const [liveSubjectFilter, setLiveSubjectFilter] = useState('All Subjects');
  const [liveTeacherFilter, setLiveTeacherFilter] = useState('All Teachers');
  const [liveStatusFilter, setLiveStatusFilter] = useState('All Status');
  const [selectedLiveRoomId, setSelectedLiveRoomId] = useState('live-1'); // Default to Quran Recitation
  const [selectedLiveCheckboxes, setSelectedLiveCheckboxes] = useState([]);
  const [isCreateLiveModalOpen, setIsCreateLiveModalOpen] = useState(false);
  const [isScheduleLiveModalOpen, setIsScheduleLiveModalOpen] = useState(false);
  const [newLiveRoom, setNewLiveRoom] = useState({
    title: '',
    subtitle: '',
    teacher: 'Siti Aisyah',
    subject: 'Islamic Studies',
    startTime: '23 Sep 2026 09:00 AM',
    duration: '1h 20m',
    status: 'Live',
    description: "Let's practice correct recitation with proper Tajweed rules."
  });

  // =========================================================
  // SCHEDULES ROOM STATES (matching media_1790735024374.png)
  // =========================================================
  const [scheduleViewMode, setScheduleViewMode] = useState('calendar'); // 'calendar' | 'list' | 'teacher' | 'room'
  const [scheduleClassFilter, setScheduleClassFilter] = useState('All Classes');
  const [scheduleTeacherFilter, setScheduleTeacherFilter] = useState('All Teachers');
  const [scheduleSubjectFilter, setScheduleSubjectFilter] = useState('All Subjects');
  const [scheduleStatusFilter, setScheduleStatusFilter] = useState('All Status');
  const [scheduleSearchQuery, setScheduleSearchQuery] = useState('');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(23); // 23 Sep (matching screenshot)
  const [isCreateScheduleModalOpen, setIsCreateScheduleModalOpen] = useState(false);
  const [isImportScheduleModalOpen, setIsImportScheduleModalOpen] = useState(false);
  const [newScheduleSlot, setNewScheduleSlot] = useState({
    title: '',
    teacher: 'Siti Aisyah',
    subject: 'Islamic Studies',
    day: 'Mon',
    time: '09:00 - 10:00',
    date: '23 Sep 2026',
    room: 'Live Room 1'
  });

  // =========================================================
  // ASSIGNMENTS ROOM STATES (matching media_1790785679753.jpg)
  // =========================================================
  const [assignmentTabFilter, setAssignmentTabFilter] = useState('all'); // 'all' (284) | 'active' (201) | 'pending' (156) | 'graded' (2260) | 'drafts' (83) | 'archived' (22)
  const [assignmentSearchQuery, setAssignmentSearchQuery] = useState('');
  const [assignmentClassFilter, setAssignmentClassFilter] = useState('All Classes');
  const [assignmentSubjectFilter, setAssignmentSubjectFilter] = useState('All Subjects');
  const [assignmentTeacherFilter, setAssignmentTeacherFilter] = useState('All Teachers');
  const [assignmentStatusFilter, setAssignmentStatusFilter] = useState('All Status');
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('asg-1');
  const [selectedAssignmentCheckboxes, setSelectedAssignmentCheckboxes] = useState([]);
  const [isCreateAssignmentModalOpen, setIsCreateAssignmentModalOpen] = useState(false);
  const [isImportAssignmentModalOpen, setIsImportAssignmentModalOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [selectedSubmissionToGrade, setSelectedSubmissionToGrade] = useState(null);
  const [gradeInput, setGradeInput] = useState('95');
  const [feedbackInput, setFeedbackInput] = useState('Kerja bagus! Analisis sangat mendalam dan terstruktur.');
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    type: 'Essay',
    class: 'Grade 10A',
    subject: 'Science',
    teacher: 'Dr. Ahmad Fauzi',
    dueDate: '25 Sep 2026, 23:59',
    totalPoints: 100,
    description: ''
  });

  const adminName = user?.name || 'Admin';
  const adminRole = 'Super Admin';
  const adminEmail = user?.email || 'admin@ilmhub.com';
  const adminAvatar = user?.avatar || '/images/tutor_ahmed.jpg';

  // Navigation Items matching media_1790730977291.jpg & media_1790731145724.jpg & media_1790731825631.jpg
  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'vip-teachers', label: 'VIP Teachers', icon: Award, badge: '24' },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap },
    { id: 'students', label: 'Students', icon: UserCheck },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'live', label: 'Live Classrooms', icon: Video },
    { id: 'schedules', label: 'Schedules', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  ];

  const systemNavItems = [
    { id: 'integrations', label: 'Integrations', icon: Link2 },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'help', label: 'Help & Support', icon: LifeBuoy },
  ];

  // Top 4 Main KPI Cards Data (Dashboard)
  const topMetrics = [
    {
      id: 'users',
      title: 'Total Users',
      value: '12,548',
      change: '12% from last month',
      isPositive: true,
      icon: Users,
      iconColor: 'bg-blue-100 text-blue-600',
      graphColor: 'text-blue-500'
    },
    {
      id: 'classes',
      title: 'Total Classes',
      value: '248',
      change: '18% from last month',
      isPositive: true,
      icon: GraduationCap,
      iconColor: 'bg-emerald-100 text-emerald-600',
      graphColor: 'text-emerald-500'
    },
    {
      id: 'enrollments',
      title: 'Total Enrollments',
      value: '3,862',
      change: '24% from last month',
      isPositive: true,
      icon: FileText,
      iconColor: 'bg-purple-100 text-purple-600',
      graphColor: 'text-purple-500'
    },
    {
      id: 'earnings',
      title: 'Total Earnings',
      value: '$5,482.00',
      change: '32% from last month',
      isPositive: true,
      icon: Coins,
      iconColor: 'bg-amber-100 text-amber-600',
      graphColor: 'text-amber-500'
    }
  ];

  // Secondary 4 Operational Mini KPI Cards Data
  const secondaryMetrics = [
    {
      id: 'live',
      title: 'Live Classes Today',
      value: '12',
      subtext: '2 ongoing now',
      change: '↑ 33%',
      icon: BookOpen,
      iconColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'assignments',
      title: 'Assignments Submitted',
      value: '284',
      change: '↑ 21%',
      icon: FileText,
      iconColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'quizzes',
      title: 'Quizzes Completed',
      value: '512',
      change: '↑ 28%',
      icon: HelpCircle,
      iconColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'certificates',
      title: 'Certificates Issued',
      value: '176',
      change: '↑ 40%',
      icon: Award,
      iconColor: 'bg-amber-100 text-amber-700'
    }
  ];

  // User Distribution Data
  const userDistributionList = [
    { label: 'Students', pct: '65%', count: '8,156', color: 'bg-blue-500', dot: 'bg-blue-500' },
    { label: 'Teachers', pct: '18%', count: '2,259', color: 'bg-emerald-500', dot: 'bg-emerald-500' },
    { label: 'Admins', pct: '5%', count: '627', color: 'bg-purple-500', dot: 'bg-purple-500' },
    { label: 'Others', pct: '12%', count: '1,506', color: 'bg-amber-400', dot: 'bg-amber-400' },
  ];

  // Daily Revenue Bars Data (Sep 1 to Sep 30)
  const dailyRevenueBars = [
    { day: 1, val: 35 }, { day: 2, val: 55 }, { day: 3, val: 40 }, { day: 4, val: 65 }, { day: 5, val: 50 },
    { day: 6, val: 75 }, { day: 7, val: 95 }, { day: 8, val: 60 }, { day: 9, val: 70 }, { day: 10, val: 80 },
    { day: 11, val: 100 }, { day: 12, val: 85 }, { day: 13, val: 70 }, { day: 14, val: 60 }, { day: 15, val: 75 },
    { day: 16, val: 90 }, { day: 17, val: 80 }, { day: 18, val: 70 }, { day: 19, val: 65 }, { day: 20, val: 85 },
    { day: 21, val: 95 }, { day: 22, val: 70 }, { day: 23, val: 60 }, { day: 24, val: 75 }, { day: 25, val: 85 },
    { day: 26, val: 65 }, { day: 27, val: 70 }, { day: 28, val: 55 }, { day: 29, val: 75 }, { day: 30, val: 90 },
  ];

  // Recent Activities Data
  const recentActivitiesList = [
    {
      id: 'act-1',
      title: 'New user registered',
      sub: 'Aisha Rahman joined as a student',
      time: '10 minutes ago',
      avatar: '/images/student_aisha.jpg',
      icon: null
    },
    {
      id: 'act-2',
      title: 'Class created',
      sub: 'Dr. Layla Ahmad created "Academic Writing"',
      time: '25 minutes ago',
      icon: GraduationCap,
      iconBg: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'act-3',
      title: 'Assignment submitted',
      sub: 'Omar Hassan submitted Week 3 assignment',
      time: '1 hour ago',
      icon: FileText,
      iconBg: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'act-4',
      title: 'Quiz completed',
      sub: 'Fatimah Ali completed "Arabic Vocabulary Quiz"',
      time: '2 hours ago',
      icon: HelpCircle,
      iconBg: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'act-5',
      title: 'Certificate issued',
      sub: 'Muhammad Khan earned certificate for "Islamic History"',
      time: '3 hours ago',
      icon: Award,
      iconBg: 'bg-amber-100 text-amber-700'
    }
  ];

  // Top Classes Data
  const topClassesList = [
    {
      id: 'tc-1',
      rank: 1,
      title: 'Nahwu for Beginners',
      students: '342 students',
      revenue: '$687.00',
      image: '/images/class_nahwu.jpg'
    },
    {
      id: 'tc-2',
      rank: 2,
      title: 'Arabic Conversation',
      students: '287 students',
      revenue: '$574.00',
      image: '/images/class_conversation.jpg'
    },
    {
      id: 'tc-3',
      rank: 3,
      title: 'Academic Writing',
      students: '254 students',
      revenue: '$508.00',
      image: '/images/class_sharaf.jpg'
    },
    {
      id: 'tc-4',
      rank: 4,
      title: 'Islamic History',
      students: '221 students',
      revenue: '$442.00',
      image: '/images/class_tajweed.jpg'
    },
    {
      id: 'tc-5',
      rank: 5,
      title: 'Environmental Management',
      students: '198 students',
      revenue: '$396.00',
      image: '/images/class_balaghah.jpg'
    }
  ];

  // System Status Data
  const systemStatusList = [
    { name: 'Website', status: 'Operational' },
    { name: 'Live Classroom', status: 'Operational' },
    { name: 'Database', status: 'Operational' },
    { name: 'Payment Gateway', status: 'Operational' },
    { name: 'Email Service', status: 'Operational' },
    { name: 'File Storage', status: 'Operational' },
  ];

  // =========================================================
  // 10 USERS FULL DATASET (matching media_1790731145724.jpg)
  // =========================================================
  const [adminUsersList, setAdminUsersList] = useState([
    {
      id: 'usr-1',
      number: 1,
      name: 'Aisha Rahman',
      email: 'aisha.rahman@example.com',
      avatar: '/images/student_aisha.jpg',
      initials: null,
      userId: 'USR-001245',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '12 Sep 2026',
      lastActive: '2 hours ago',
      classesCount: 8,
      completedClasses: 5,
      certificatesCount: 3,
      bio: 'Passionate student learning Arabic & Islamic studies.'
    },
    {
      id: 'usr-2',
      number: 2,
      name: 'Omar Hassan',
      email: 'omar.hassan@example.com',
      avatar: '/images/student_omar.jpg',
      initials: null,
      userId: 'USR-001246',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '10 Sep 2026',
      lastActive: '1 day ago',
      classesCount: 6,
      completedClasses: 4,
      certificatesCount: 2,
      bio: 'Intermediate learner focused on Arabic conversation.'
    },
    {
      id: 'usr-3',
      number: 3,
      name: 'Fatimah Ali',
      email: 'fatimah.ali@example.com',
      avatar: '/images/student_fatimah.jpg',
      initials: null,
      userId: 'USR-001247',
      role: 'Teacher',
      roleBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '5 Sep 2026',
      lastActive: '30 minutes ago',
      classesCount: 12,
      completedClasses: 10,
      certificatesCount: 8,
      bio: 'Arabic grammar & Sharaf specialist.'
    },
    {
      id: 'usr-4',
      number: 4,
      name: 'Ustadz Ahmad Fauzi',
      email: 'ahmad.fauzi@example.com',
      avatar: '/images/tutor_ahmed.jpg',
      initials: null,
      userId: 'USR-001248',
      role: 'Teacher',
      roleBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '1 Sep 2026',
      lastActive: '3 hours ago',
      classesCount: 10,
      completedClasses: 9,
      certificatesCount: 12,
      bio: 'Senior Arabic instructor with 1,200+ students.'
    },
    {
      id: 'usr-5',
      number: 5,
      name: 'Muhammad Khan',
      email: 'muhammad.khan@example.com',
      avatar: '/images/student_ali.jpg',
      initials: null,
      userId: 'USR-001249',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Inactive',
      statusType: 'inactive',
      joinDate: '28 Aug 2026',
      lastActive: '2 weeks ago',
      classesCount: 4,
      completedClasses: 2,
      certificatesCount: 1,
      bio: 'Studying Islamic history and Quran tajweed.'
    },
    {
      id: 'usr-6',
      number: 6,
      name: 'Sara Nabilah',
      email: 'sara.nabilah@example.com',
      avatar: '/images/student_aisha.jpg',
      initials: null,
      userId: 'USR-001250',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '25 Aug 2026',
      lastActive: '5 hours ago',
      classesCount: 7,
      completedClasses: 4,
      certificatesCount: 2,
      bio: 'Academic writing student.'
    },
    {
      id: 'usr-7',
      number: 7,
      name: 'Ali Reza',
      email: 'ali.reza@example.com',
      avatar: null,
      initials: 'AR',
      initialBg: 'bg-sky-100 text-sky-800',
      userId: 'USR-001251',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '20 Aug 2026',
      lastActive: '1 day ago',
      classesCount: 5,
      completedClasses: 3,
      certificatesCount: 2,
      bio: 'Learning Quran tajweed and Islamic studies.'
    },
    {
      id: 'usr-8',
      number: 8,
      name: 'Layla Karim',
      email: 'layla.karim@example.com',
      avatar: null,
      initials: 'LK',
      initialBg: 'bg-purple-100 text-purple-800',
      userId: 'USR-001252',
      role: 'Student',
      roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '18 Aug 2026',
      lastActive: '12 hours ago',
      classesCount: 6,
      completedClasses: 4,
      certificatesCount: 3,
      bio: 'Student at Cairo University, studying Arabic.'
    },
    {
      id: 'usr-9',
      number: 9,
      name: 'Zaid Abdullah',
      email: 'zaid.abdullah@example.com',
      avatar: '/images/tutor_ahmed.jpg',
      initials: null,
      userId: 'USR-001253',
      role: 'Admin',
      roleBadge: 'bg-amber-50 text-amber-800 border-amber-200',
      status: 'Active',
      statusType: 'active',
      joinDate: '10 Aug 2026',
      lastActive: '1 hour ago',
      classesCount: '-',
      completedClasses: '-',
      certificatesCount: '-',
      bio: 'Platform systems administrator.'
    },
    {
      id: 'usr-10',
      number: 10,
      name: 'Hassan Malik',
      email: 'hassan.malik@example.com',
      avatar: '/images/student_omar.jpg',
      initials: null,
      userId: 'USR-001254',
      role: 'Teacher',
      roleBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      status: 'Pending',
      statusType: 'pending',
      joinDate: '8 Aug 2026',
      lastActive: '3 days ago',
      classesCount: 3,
      completedClasses: 1,
      certificatesCount: 2,
      bio: 'Prospective Islamic studies instructor.'
    }
  ]);

  // Selected user currently shown in the right sidebar with safe fallback
  const fallbackUser = {
    id: 'usr-1',
    number: 1,
    name: 'Aisha Rahman',
    email: 'aisha.rahman@example.com',
    avatar: '/images/student_aisha.jpg',
    initials: null,
    userId: 'USR-001245',
    role: 'Student',
    roleBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    status: 'Active',
    statusType: 'active',
    joinDate: '12 Sep 2026',
    lastActive: '2 hours ago',
    classesCount: 8,
    completedClasses: 5,
    certificatesCount: 3,
    bio: 'Passionate student learning Arabic & Islamic studies.'
  };
  const currentSelectedUser = adminUsersList.find(u => u.id === selectedUserId) || adminUsersList[0] || fallbackUser;

  const toggleSelectUserCheckbox = (id) => {
    setSelectedUserCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllUsers = () => {
    if (selectedUserCheckboxes.length === adminUsersList.length) {
      setSelectedUserCheckboxes([]);
    } else {
      setSelectedUserCheckboxes(adminUsersList.map(u => u.id));
    }
  };

  // =========================================================
  // FACULTY & REGULAR TEACHERS DATASET (media_1790732606905.jpg)
  // =========================================================
  const [facultyTeachersList, setFacultyTeachersList] = useState([
    {
      id: 'tea-1',
      number: 1,
      name: 'Dr. Ahmad Fauzi',
      email: 'ahmad.fauzi@example.com',
      avatar: '/images/tutor_ahmed.jpg',
      teacherId: 'TCH-001247',
      subjects: [
        { label: 'Islamic Studies', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { label: 'History', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
        { label: '+2', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Islamic Studies', 'History', 'Arabic', 'Quran'],
      classesCount: 12,
      totalStudents: 342,
      rating: 4.9,
      reviewsCount: 184,
      status: 'Active',
      statusType: 'active',
      joinDate: '12 Jan 2024',
      subtitle: 'Islamic Studies | History Professor',
      bio: 'Experienced scholar specializing in classical Islamic history, Sirah Nabawiyyah, and Islamic jurisprudence with interactive digital methods.'
    },
    {
      id: 'tea-2',
      number: 2,
      name: 'Siti Aisyah',
      email: 'siti.aisyah@example.com',
      avatar: '/images/student_aisha.jpg',
      teacherId: 'TCH-001248',
      subjects: [
        { label: 'Arabic', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
        { label: 'Quran', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
        { label: '+1', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Arabic', 'Quran', 'Islamic Studies'],
      classesCount: 8,
      totalStudents: 284,
      rating: 4.8,
      reviewsCount: 126,
      status: 'Active',
      statusType: 'active',
      joinDate: '5 Feb 2024',
      subtitle: 'Arabic Teacher | Quran Studies',
      bio: 'Passionate about Islamic education and Arabic language. Helping students to understand Quran with modern learning methods.'
    },
    {
      id: 'tea-3',
      number: 3,
      name: 'Omar Hassan',
      email: 'omar.hassan@example.com',
      avatar: '/images/student_omar.jpg',
      teacherId: 'TCH-001249',
      subjects: [
        { label: 'English', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
        { label: 'Academic Writing', bg: 'bg-purple-50 text-purple-700 border-purple-200' }
      ],
      allSubjects: ['English', 'Academic Writing'],
      classesCount: 15,
      totalStudents: 412,
      rating: 4.7,
      reviewsCount: 205,
      status: 'Active',
      statusType: 'active',
      joinDate: '20 Jan 2024',
      subtitle: 'English Language & Academic Writing Instructor',
      bio: 'Academic researcher dedicated to building robust communication and scholarly writing skills for global learners.'
    },
    {
      id: 'tea-4',
      number: 4,
      name: 'Layla Karim',
      email: 'layla.karim@example.com',
      avatar: '/images/student_fatimah.jpg',
      teacherId: 'TCH-001250',
      subjects: [
        { label: 'Science', bg: 'bg-pink-50 text-pink-700 border-pink-200' },
        { label: 'Environmental', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
        { label: '+1', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Science', 'Environmental', 'Biology'],
      classesCount: 10,
      totalStudents: 298,
      rating: 4.9,
      reviewsCount: 142,
      status: 'Active',
      statusType: 'active',
      joinDate: '18 Feb 2024',
      subtitle: 'Science & Environmental Studies Specialist',
      bio: 'Connecting science and nature with ecological principles and sustainable community education.'
    },
    {
      id: 'tea-5',
      number: 5,
      name: 'Zainab Ali',
      email: 'zainab.ali@example.com',
      avatar: '/images/student_aisha.jpg',
      teacherId: 'TCH-001251',
      subjects: [
        { label: 'Mathematics', bg: 'bg-pink-50 text-pink-700 border-pink-200' },
        { label: 'Statistics', bg: 'bg-purple-50 text-purple-700 border-purple-200' }
      ],
      allSubjects: ['Mathematics', 'Statistics'],
      classesCount: 14,
      totalStudents: 356,
      rating: 4.6,
      reviewsCount: 178,
      status: 'Active',
      statusType: 'active',
      joinDate: '10 Mar 2024',
      subtitle: 'Mathematics & Data Science Educator',
      bio: 'Passionate about simplifying complex mathematical concepts and statistical reasoning for all backgrounds.'
    },
    {
      id: 'tea-6',
      number: 6,
      name: 'Muhammad Khan',
      email: 'muhammad.khan@example.com',
      avatar: '/images/student_ali.jpg',
      teacherId: 'TCH-001252',
      subjects: [
        { label: 'Business', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
        { label: 'Economics', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
        { label: '+1', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Business', 'Economics', 'Islamic Finance'],
      classesCount: 11,
      totalStudents: 301,
      rating: 4.8,
      reviewsCount: 153,
      status: 'Active',
      statusType: 'active',
      joinDate: '22 Feb 2024',
      subtitle: 'Business & Applied Economics Lecturer',
      bio: 'Guiding students through financial fundamentals, business ethics, and modern economic frameworks.'
    },
    {
      id: 'tea-7',
      number: 7,
      name: 'Fatimah Nur',
      email: 'fatimah.nur@example.com',
      avatar: '/images/student_fatimah.jpg',
      teacherId: 'TCH-001253',
      subjects: [
        { label: 'Computer Science', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
        { label: 'AI', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
        { label: '+1', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Computer Science', 'AI', 'Machine Learning'],
      classesCount: 9,
      totalStudents: 276,
      rating: 4.7,
      reviewsCount: 98,
      status: 'Pending',
      statusType: 'pending',
      joinDate: '2 Sep 2026',
      subtitle: 'Computer Science & AI Researcher',
      bio: 'Exploring cutting-edge machine learning applications and curriculum development for computer science.'
    },
    {
      id: 'tea-8',
      number: 8,
      name: 'Hassan Malik',
      email: 'hassan.malik@example.com',
      avatar: '/images/tutor_ahmed.jpg',
      teacherId: 'TCH-001254',
      subjects: [
        { label: 'Physics', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
        { label: 'Engineering', bg: 'bg-purple-50 text-purple-700 border-purple-200' }
      ],
      allSubjects: ['Physics', 'Engineering'],
      classesCount: 7,
      totalStudents: 198,
      rating: 4.5,
      reviewsCount: 84,
      status: 'Active',
      statusType: 'active',
      joinDate: '14 Jan 2024',
      subtitle: 'Physics & Applied Engineering Tutor',
      bio: 'Bridging theoretical physics with practical engineering principles and experiments.'
    },
    {
      id: 'tea-9',
      number: 9,
      name: 'Nadia Rahman',
      email: 'nadia.rahman@example.com',
      avatar: '/images/student_aisha.jpg',
      teacherId: 'TCH-001255',
      subjects: [
        { label: 'Psychology', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
        { label: 'Personal Development', bg: 'bg-blue-50 text-blue-700 border-blue-200' }
      ],
      allSubjects: ['Psychology', 'Personal Development'],
      classesCount: 6,
      totalStudents: 167,
      rating: 4.8,
      reviewsCount: 79,
      status: 'Inactive',
      statusType: 'inactive',
      joinDate: '28 Aug 2026',
      subtitle: 'Psychology & Mentorship Coach',
      bio: 'Focusing on cognitive psychology, emotional intelligence, and holistic personal growth.'
    },
    {
      id: 'tea-10',
      number: 10,
      name: 'Ali Reza',
      email: 'ali.reza@example.com',
      avatar: '/images/student_omar.jpg',
      teacherId: 'TCH-001256',
      subjects: [
        { label: 'Accounting', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { label: 'Finance', bg: 'bg-teal-50 text-teal-700 border-teal-200' },
        { label: '+1', bg: 'bg-gray-100 text-gray-600 border-gray-200' }
      ],
      allSubjects: ['Accounting', 'Finance', 'Auditing'],
      classesCount: 13,
      totalStudents: 321,
      rating: 4.6,
      reviewsCount: 140,
      status: 'Active',
      statusType: 'active',
      joinDate: '8 Mar 2024',
      subtitle: 'Accounting & Corporate Finance Specialist',
      bio: 'Certified financial analyst teaching corporate financial analysis and tax accounting.'
    }
  ]);

  const currentSelectedFaculty = facultyTeachersList.find(f => f.id === selectedFacultyId) || facultyTeachersList[1] || facultyTeachersList[0];

  const toggleSelectFacultyCheckbox = (id) => {
    setSelectedFacultyCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllFaculty = () => {
    if (selectedFacultyCheckboxes.length === facultyTeachersList.length) {
      setSelectedFacultyCheckboxes([]);
    } else {
      setSelectedFacultyCheckboxes(facultyTeachersList.map(f => f.id));
    }
  };

  // =========================================================
  // 10 STUDENTS FULL DATASET (Data Mahasiswa & Siswa)
  // =========================================================
  const [studentsList, setStudentsList] = useState([
    {
      id: 'std-1',
      number: 1,
      name: 'Aisha Rahman',
      email: 'aisha.rahman@example.com',
      avatar: '/images/student_aisha.jpg',
      studentId: 'STD-2026-001',
      phone: '+62 812-3456-7890',
      city: 'Jakarta, Indonesia',
      program: 'Bahasa Arab & Nahwu',
      level: 'Intermediate',
      enrolledCourses: 5,
      completedCourses: 3,
      progress: 78,
      gpa: '3.88',
      attendance: '96%',
      status: 'Active',
      statusType: 'active',
      joinDate: '12 Sep 2026',
      lastActive: '10 mins ago',
      vipMentorship: true,
      bio: 'Mahasiswi tekun memperdalam Nahwu-Shorof dan literatur klasik Islam.',
      guardian: 'H. Rahman (Ayah) • +62 811-9988-7711',
      courses: [
        { name: 'Nahwu for Beginners', tutor: 'Ust. Ahmed Mohamed', progress: 100, score: '95/100 (A)' },
        { name: 'Arabic Conversation B2', tutor: 'Ust. Siti Aisyah', progress: 85, score: '90/100 (A-)' },
        { name: 'Balaghah & Retorika', tutor: 'Dr. Tariq Al-Madani', progress: 50, score: 'Sedang Berjalan' }
      ],
      certificates: [
        { title: 'Sertifikat Kelulusan Nahwu Dasar', issueDate: '15 Ags 2026', code: 'CERT-ILM-2026-0812' },
        { title: 'Tashrif & Shorof Kilat Level 1', issueDate: '28 Jul 2026', code: 'CERT-ILM-2026-0744' }
      ],
      payments: [
        { item: 'VIP Mentorship Bulanan', amount: 'Rp 199.000', date: '01 Sep 2026', status: 'Lunas' },
        { item: 'Paket Kelas Bahasa Arab', amount: 'Rp 450.000', date: '12 Ags 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-2',
      number: 2,
      name: 'Omar Hassan',
      email: 'omar.hassan@example.com',
      avatar: '/images/student_omar.jpg',
      studentId: 'STD-2026-002',
      phone: '+62 813-8877-6655',
      city: 'Surabaya, Indonesia',
      program: 'Arabic Conversation',
      level: 'Beginner',
      enrolledCourses: 3,
      completedCourses: 1,
      progress: 45,
      gpa: '3.65',
      attendance: '90%',
      status: 'Active',
      statusType: 'active',
      joinDate: '10 Sep 2026',
      lastActive: '1 hour ago',
      vipMentorship: false,
      bio: 'Fokus melancarkan muhadatsah harian dan percakapan bisnis Arab.',
      guardian: 'Ibu Fatimah • +62 813-2211-4433',
      courses: [
        { name: 'Dasar Percakapan Arab', tutor: 'Ust. Siti Aisyah', progress: 100, score: '88/100 (B+)' },
        { name: 'Muhadatsah Lanjutan', tutor: 'Ust. Bilal Mansur', progress: 35, score: 'Sedang Berjalan' }
      ],
      certificates: [
        { title: 'Kemahiran Muhadatsah Level 1', issueDate: '01 Sep 2026', code: 'CERT-ILM-2026-0901' }
      ],
      payments: [
        { item: 'Kelas Reguler Muhadatsah', amount: 'Rp 250.000', date: '10 Sep 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-3',
      number: 3,
      name: 'Muhammad Khan',
      email: 'muhammad.khan@example.com',
      avatar: '/images/student_ali.jpg',
      studentId: 'STD-2026-003',
      phone: '+60 12-345-6789',
      city: 'Kuala Lumpur, Malaysia',
      program: 'Tahsin & Tahfidz',
      level: 'Advanced',
      enrolledCourses: 6,
      completedCourses: 4,
      progress: 85,
      gpa: '3.92',
      attendance: '98%',
      status: 'Active',
      statusType: 'active',
      joinDate: '28 Aug 2026',
      lastActive: '4 hours ago',
      vipMentorship: true,
      bio: "Penghafal Al-Qur'an mengambil sanad Matn Al-Jazariyyah.",
      guardian: 'Khan Senior • +60 19-876-5432',
      courses: [
        { name: 'Tahsin Matn Al-Jazariyyah', tutor: 'Syaikh Yusuf Al-Qari', progress: 100, score: '98/100 (A+)' },
        { name: 'Hifdz Juz 28-30 Talaqqi', tutor: 'Ust. Ahmad Fauzi', progress: 80, score: '94/100 (A)' }
      ],
      certificates: [
        { title: 'Ijazah Matn Al-Jazariyyah Bersanad', issueDate: '20 Ags 2026', code: 'CERT-ILM-2026-0820' },
        { title: 'Tahsin Level 3 Mutamayyiz', issueDate: '10 Jul 2026', code: 'CERT-ILM-2026-0710' }
      ],
      payments: [
        { item: 'Talaqqi Sanad VIP 3 Bulan', amount: 'Rp 750.000', date: '28 Ags 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-4',
      number: 4,
      name: 'Zahra Putri',
      email: 'zahra.putri@example.com',
      avatar: '/images/student_fatimah.jpg',
      studentId: 'STD-2026-004',
      phone: '+62 811-2233-4455',
      city: 'Bandung, Indonesia',
      program: 'Fiqih & Muamalah',
      level: 'Intermediate',
      enrolledCourses: 4,
      completedCourses: 4,
      progress: 100,
      gpa: '3.95',
      attendance: '100%',
      status: 'Graduated',
      statusType: 'graduated',
      joinDate: '15 Jul 2026',
      lastActive: '2 days ago',
      vipMentorship: false,
      bio: "Telah menyelesaikan seluruh jenjang Fiqih Ibadah Mazhab Syafi'i dengan predikat Mumtaz.",
      guardian: 'Drs. Hendra • +62 811-3322-1100',
      courses: [
        { name: "Fiqih Matan Abu Syuja'", tutor: 'Dr. Tariq Al-Madani', progress: 100, score: '97/100 (A+)' },
        { name: 'Faraidh Dasar', tutor: 'Ust. Ridwan', progress: 100, score: '96/100 (A+)' }
      ],
      certificates: [
        { title: 'Diploma Fiqih Ibadah Lengkap', issueDate: '25 Sep 2026', code: 'CERT-ILM-2026-0925' }
      ],
      payments: [
        { item: 'Diploma Fiqih Final Fee', amount: 'Rp 500.000', date: '15 Jul 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-5',
      number: 5,
      name: 'Bilal Tariq',
      email: 'bilal.tariq@example.com',
      avatar: null,
      initials: 'BT',
      studentId: 'STD-2026-005',
      phone: '+44 7700 900077',
      city: 'London, United Kingdom',
      program: 'Bahasa Arab & Nahwu',
      level: 'Beginner',
      enrolledCourses: 2,
      completedCourses: 0,
      progress: 20,
      gpa: '3.40',
      attendance: '82%',
      status: 'Pending',
      statusType: 'pending',
      joinDate: '20 Sep 2026',
      lastActive: '3 days ago',
      vipMentorship: false,
      bio: 'International student studying classical Arabic linguistics online.',
      guardian: 'Tariq Sr. • +44 7700 900088',
      courses: [
        { name: 'Introduction to Arabic Morphology', tutor: 'Ust. Siti Aisyah', progress: 20, score: 'Sedang Berjalan' }
      ],
      certificates: [],
      payments: [
        { item: 'Course Registration', amount: '$45.00', date: '20 Sep 2026', status: 'Pending Review' }
      ]
    },
    {
      id: 'std-6',
      number: 6,
      name: 'Maryam Abdullah',
      email: 'maryam.abdullah@example.com',
      avatar: null,
      initials: 'MA',
      studentId: 'STD-2026-006',
      phone: '+62 819-9988-7766',
      city: 'Yogyakarta, Indonesia',
      program: 'Tafsir & Ulumul Quran',
      level: 'Advanced',
      enrolledCourses: 7,
      completedCourses: 5,
      progress: 90,
      gpa: '3.97',
      attendance: '99%',
      status: 'Active',
      statusType: 'active',
      joinDate: '5 Aug 2026',
      lastActive: '15 mins ago',
      vipMentorship: true,
      bio: 'Santriwati berprestasi dengan spesialisasi Tafsir Jalalain dan Kaidah Tafsir.',
      guardian: 'H. Abdullah • +62 819-1122-3344',
      courses: [
        { name: 'Kaidah-Kaidah Tafsir', tutor: 'Dr. Tariq Al-Madani', progress: 100, score: '99/100 (A+)' },
        { name: 'Tafsir Juz 1-5', tutor: 'Ust. Ahmad Fauzi', progress: 85, score: '96/100 (A)' }
      ],
      certificates: [
        { title: "Sertifikat Mumtaz Ulumul Qur'an", issueDate: '10 Sep 2026', code: 'CERT-ILM-2026-0910' }
      ],
      payments: [
        { item: 'VIP Tafsir Membership', amount: 'Rp 199.000', date: '05 Sep 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-7',
      number: 7,
      name: 'Hamzah Al-Farisi',
      email: 'hamzah.alfarisi@example.com',
      avatar: null,
      initials: 'HA',
      studentId: 'STD-2026-007',
      phone: '+62 821-4455-6677',
      city: 'Medan, Indonesia',
      program: 'Hadits & Sunnah',
      level: 'Intermediate',
      enrolledCourses: 3,
      completedCourses: 1,
      progress: 50,
      gpa: '3.55',
      attendance: '88%',
      status: 'Active',
      statusType: 'active',
      joinDate: '18 Aug 2026',
      lastActive: '1 day ago',
      vipMentorship: false,
      bio: "Mengkaji syarah Hadits Arba'in dan Musthalah Hadits dasar.",
      guardian: 'Farisi Family • +62 821-9988-1122',
      courses: [
        { name: "Syarah 40 Hadits Nawawi", tutor: 'Ust. Ahmed Mohamed', progress: 60, score: '86/100 (B+)' }
      ],
      certificates: [
        { title: 'Sertifikat Musthalah Hadits', issueDate: '01 Sep 2026', code: 'CERT-ILM-2026-0902' }
      ],
      payments: [
        { item: 'Reguler Hadits Course', amount: 'Rp 200.000', date: '18 Ags 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-8',
      number: 8,
      name: 'Nurul Hidayah',
      email: 'nurul.hidayah@example.com',
      avatar: null,
      initials: 'NH',
      studentId: 'STD-2026-008',
      phone: '+62 857-1122-3344',
      city: 'Semarang, Indonesia',
      program: 'Khat & Kaligrafi',
      level: 'Beginner',
      enrolledCourses: 1,
      completedCourses: 0,
      progress: 15,
      gpa: '3.30',
      attendance: '75%',
      status: 'Inactive',
      statusType: 'inactive',
      joinDate: '10 Jul 2026',
      lastActive: '3 weeks ago',
      vipMentorship: false,
      bio: 'Sedang cuti sementara karena kesibukan tugas akhir perkuliahan umum.',
      guardian: 'H. Sudirman • +62 857-9988-3322',
      courses: [
        { name: "Khat Naskhi & Riq'ah", tutor: 'Ust. Bilal Mansur', progress: 15, score: 'Cuti Belajar' }
      ],
      certificates: [],
      payments: [
        { item: 'Khat Workshop', amount: 'Rp 150.000', date: '10 Jul 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-9',
      number: 9,
      name: 'Zaid Ibrahim',
      email: 'zaid.ibrahim@example.com',
      avatar: null,
      initials: 'ZI',
      studentId: 'STD-2026-009',
      phone: '+65 9123 4567',
      city: 'Singapore',
      program: 'Bahasa Arab & Nahwu',
      level: 'Advanced',
      enrolledCourses: 8,
      completedCourses: 6,
      progress: 92,
      gpa: '3.90',
      attendance: '97%',
      status: 'Active',
      statusType: 'active',
      joinDate: '1 Jun 2026',
      lastActive: '5 hours ago',
      vipMentorship: true,
      bio: "Menguasai Alfiyyah Ibnu Malik dan I'rob Al-Qur'an tingkat lanjut.",
      guardian: 'Ibrahim Sr. • +65 9988 1122',
      courses: [
        { name: 'Alfiyyah Ibnu Malik Jilid 1', tutor: 'Dr. Tariq Al-Madani', progress: 100, score: '95/100 (A)' },
        { name: "I'rob Al-Qur'an Terapan", tutor: 'Ust. Ahmed Mohamed', progress: 90, score: '93/100 (A)' }
      ],
      certificates: [
        { title: 'Sertifikat Alfiyyah 500 Bait Pertama', issueDate: '15 Ags 2026', code: 'CERT-ILM-2026-0815' }
      ],
      payments: [
        { item: 'VIP Alfiyyah Mentorship', amount: '$75.00', date: '01 Sep 2026', status: 'Lunas' }
      ]
    },
    {
      id: 'std-10',
      number: 10,
      name: 'Khadijah Nur',
      email: 'khadijah.nur@example.com',
      avatar: null,
      initials: 'KN',
      studentId: 'STD-2026-010',
      phone: '+62 812-9900-1122',
      city: 'Makassar, Indonesia',
      program: 'Tahsin & Tahfidz',
      level: 'Intermediate',
      enrolledCourses: 4,
      completedCourses: 3,
      progress: 80,
      gpa: '3.80',
      attendance: '94%',
      status: 'Active',
      statusType: 'active',
      joinDate: '22 Aug 2026',
      lastActive: 'Just now',
      vipMentorship: false,
      bio: 'Sedang menyelesaikan talaqqi surat Al-Baqarah dengan makharijul huruf tepat.',
      guardian: 'H. Nuruddin • +62 812-8877-4455',
      courses: [
        { name: 'Tahsin Talaqqi Bersanad', tutor: 'Syaikh Yusuf Al-Qari', progress: 80, score: '92/100 (A-)' }
      ],
      certificates: [
        { title: 'Tahsin Mutawassith Bersanad', issueDate: '12 Sep 2026', code: 'CERT-ILM-2026-0912' }
      ],
      payments: [
        { item: 'Paket Talaqqi 30 Sesi', amount: 'Rp 400.000', date: '22 Ags 2026', status: 'Lunas' }
      ]
    }
  ]);

  const currentSelectedStudent = studentsList.find(s => s.id === selectedStudentId) || studentsList[0];

  const toggleSelectStudentCheckbox = (id) => {
    setSelectedStudentCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllStudents = () => {
    if (selectedStudentCheckboxes.length === studentsList.length) {
      setSelectedStudentCheckboxes([]);
    } else {
      setSelectedStudentCheckboxes(studentsList.map(s => s.id));
    }
  };

  // =========================================================
  // 10 CLASSES FULL DATASET (Data Kelas, Pengajar, & Santri)
  // =========================================================
  const [classesList, setClassesList] = useState([
    {
      id: 'cls-1',
      number: 1,
      title: 'Nahwu for Beginners (Al-Ajurrumiyyah)',
      code: 'CLS-NAH-101',
      subject: 'Nahwu & Shorof',
      level: 'Beginner',
      image: '/images/class_nahwu.jpg',
      instructor: {
        name: 'Ust. Ahmed Mohamed',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: 'Senior Arabic Grammarian',
        email: 'ahmed.mohamed@example.com',
        phone: '+62 812-9876-5432'
      },
      enrollment: 342,
      quota: 400,
      schedule: 'Senin & Rabu • 19:30 - 21:00 WIB',
      format: 'Live Zoom + Rekaman HD',
      rating: 4.9,
      reviewsCount: 128,
      price: 'Rp 299.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '01 Sep 2026',
      endDate: '30 Nov 2026',
      totalSessions: 24,
      completedSessions: 8,
      description: "Kajian mendalam Matan Al-Ajurrumiyyah dari dasar kalam, tanda i'rob, hingga marfu'at dan manshubat.",
      enrolledStudents: [
        { id: 'std-1', name: 'Aisha Rahman', email: 'aisha.rahman@example.com', avatar: '/images/student_aisha.jpg', studentId: 'STD-2026-001', attendance: '96%', score: '95 (A)', submittedAssignments: '8/8', status: 'Active' },
        { id: 'std-2', name: 'Omar Hassan', email: 'omar.hassan@example.com', avatar: '/images/student_omar.jpg', studentId: 'STD-2026-002', attendance: '90%', score: '88 (B+)', submittedAssignments: '7/8', status: 'Active' },
        { id: 'std-9', name: 'Zaid Ibrahim', email: 'zaid.ibrahim@example.com', avatar: null, studentId: 'STD-2026-009', attendance: '97%', score: '93 (A)', submittedAssignments: '8/8', status: 'Active' },
        { id: 'std-7', name: 'Hamzah Al-Farisi', email: 'hamzah.alfarisi@example.com', avatar: null, studentId: 'STD-2026-007', attendance: '88%', score: '86 (B+)', submittedAssignments: '6/8', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: "Pengantar Ilmu Nahwu & Pembagian Kalimah (Isim, Fi'il, Huruf)", status: 'Selesai' },
        { module: 'Modul 2', title: "Tanda-tanda I'rob (Rofa', Nashob, Khofadh, Jazm)", status: 'Selesai' },
        { module: 'Modul 3', title: "Al-Marfu'at: Fa'il, Naibul Fa'il, Mubtada & Khobar", status: 'Sedang Berjalan' },
        { module: 'Modul 4', title: "Al-Manshubat & Al-Makhfudhat + Praktek I'rob", status: 'Mendatang' }
      ]
    },
    {
      id: 'cls-2',
      number: 2,
      title: 'Arabic Conversation & Muhadatsah B2',
      code: 'CLS-CONV-201',
      subject: 'Arabic Conversation',
      level: 'Intermediate',
      image: '/images/class_conversation.jpg',
      instructor: {
        name: 'Ustazah Siti Aisyah, M.A.',
        avatar: '/images/student_fatimah.jpg',
        specialty: 'Muhadatsah & Applied Linguistics',
        email: 'siti.aisyah@example.com',
        phone: '+62 813-2233-4455'
      },
      enrollment: 287,
      quota: 300,
      schedule: 'Selasa & Kamis • 20:00 - 21:30 WIB',
      format: 'Live Interactive Talaqqi',
      rating: 4.8,
      reviewsCount: 96,
      price: 'Rp 275.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '05 Sep 2026',
      endDate: '05 Des 2026',
      totalSessions: 20,
      completedSessions: 6,
      description: 'Latihan percakapan bahasa Arab aktif tematik, pelafalan fushah, ungkapan idiomatik, dan debat ilmiyah.',
      enrolledStudents: [
        { id: 'std-1', name: 'Aisha Rahman', email: 'aisha.rahman@example.com', avatar: '/images/student_aisha.jpg', studentId: 'STD-2026-001', attendance: '94%', score: '90 (A-)', submittedAssignments: '6/6', status: 'Active' },
        { id: 'std-2', name: 'Omar Hassan', email: 'omar.hassan@example.com', avatar: '/images/student_omar.jpg', studentId: 'STD-2026-002', attendance: '92%', score: '88 (B+)', submittedAssignments: '5/6', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: "Ta'aruf Tingkat Lanjut & Ungkapan Diplomasi", status: 'Selesai' },
        { module: 'Modul 2', title: 'Diskusi Tema Sosial, Pendidikan, & Dakwah', status: 'Sedang Berjalan' },
        { module: 'Modul 3', title: 'Retorika Berbicara & Presentasi Bahasa Arab', status: 'Mendatang' }
      ]
    },
    {
      id: 'cls-3',
      number: 3,
      title: 'Tahsin & Matn Al-Jazariyyah Bersanad',
      code: 'CLS-TAH-301',
      subject: 'Tahsin & Tahfidz',
      level: 'Advanced',
      image: '/images/class_sharaf.jpg',
      instructor: {
        name: 'Syaikh Yusuf Al-Qari',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: "Qira'at & Sanad Al-Jazariyyah",
        email: 'yusuf.alqari@example.com',
        phone: '+62 811-3344-5566'
      },
      enrollment: 254,
      quota: 250,
      schedule: 'Sabtu & Ahad • 06:00 - 07:30 WIB',
      format: 'Live Talaqqi 1-on-1 Turn',
      rating: 5.0,
      reviewsCount: 145,
      price: 'Rp 350.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '15 Ags 2026',
      endDate: '15 Nov 2026',
      totalSessions: 16,
      completedSessions: 12,
      description: 'Pengambilan sanad matan tajwid Al-Jazariyyah, koreksi makharijul huruf dan sifatul huruf talaqqi.',
      enrolledStudents: [
        { id: 'std-3', name: 'Muhammad Khan', email: 'muhammad.khan@example.com', avatar: '/images/student_ali.jpg', studentId: 'STD-2026-003', attendance: '98%', score: '98 (A+)', submittedAssignments: '12/12', status: 'Active' },
        { id: 'std-10', name: 'Khadijah Nur', email: 'khadijah.nur@example.com', avatar: null, studentId: 'STD-2026-010', attendance: '94%', score: '92 (A-)', submittedAssignments: '11/12', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: 'Muqaddimah & Bab Makharijul Huruf', status: 'Selesai' },
        { module: 'Modul 2', title: 'Sifatul Huruf Lazimah & Aridhah', status: 'Selesai' },
        { module: 'Modul 3', title: 'Ahkam Nun Sakinah, Tanwin & Mad', status: 'Selesai' },
        { module: 'Modul 4', title: 'Ikhtibar Sanad & Ujian Ijazah', status: 'Sedang Berjalan' }
      ]
    },
    {
      id: 'cls-4',
      number: 4,
      title: "Fiqih Syafi'i: Matan Abu Syuja' Lengkap",
      code: 'CLS-FIQ-102',
      subject: 'Fiqih & Usul Fiqh',
      level: 'Intermediate',
      image: '/images/class_tajweed.jpg',
      instructor: {
        name: 'Dr. Sheikh Tariq Al-Madani',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: 'Ushul Fiqh & Fiqh Perbandingan',
        email: 'tariq.madani@univ-islamic.org',
        phone: '+62 812-9842-1920'
      },
      enrollment: 221,
      quota: 300,
      schedule: 'Jumat • 19:30 - 21:30 WIB',
      format: 'Live Webinar + Q&A Fatwa',
      rating: 4.9,
      reviewsCount: 88,
      price: 'Rp 199.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '01 Jul 2026',
      endDate: '30 Sep 2026',
      totalSessions: 12,
      completedSessions: 12,
      description: "Kajian sistematis kitab Ghayah wat Taqrib karya Al-Qadhi Abu Syuja' bab Thaharah, Shalat, Zakat, Puasa, Haji.",
      enrolledStudents: [
        { id: 'std-4', name: 'Zahra Putri', email: 'zahra.putri@example.com', avatar: '/images/student_fatimah.jpg', studentId: 'STD-2026-004', attendance: '100%', score: '97 (A+)', submittedAssignments: '12/12', status: 'Graduated' }
      ],
      syllabus: [
        { module: 'Modul 1', title: 'Kitab Thaharah & Pembagian Air', status: 'Selesai' },
        { module: 'Modul 2', title: 'Kitab Shalat: Syarat, Rukun & Pembatal', status: 'Selesai' },
        { module: 'Modul 3', title: 'Kitab Zakat & Puasa Ramadhan', status: 'Selesai' },
        { module: 'Modul 4', title: 'Kitab Haji & Umrah', status: 'Selesai' }
      ]
    },
    {
      id: 'cls-5',
      number: 5,
      title: 'Tafsir Ayat Ahkam & Kaidah Tafsir',
      code: 'CLS-TAF-401',
      subject: 'Tafsir & Ulumul Quran',
      level: 'Advanced',
      image: '/images/class_balaghah.jpg',
      instructor: {
        name: 'Dr. Sheikh Tariq Al-Madani',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: 'Tafsir & Ushul Fiqh',
        email: 'tariq.madani@univ-islamic.org',
        phone: '+62 812-9842-1920'
      },
      enrollment: 198,
      quota: 200,
      schedule: 'Rabu • 20:00 - 21:30 WIB',
      format: 'Live Takhassus',
      rating: 4.9,
      reviewsCount: 73,
      price: 'Rp 299.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '01 Ags 2026',
      endDate: '30 Okt 2026',
      totalSessions: 14,
      completedSessions: 9,
      description: "Menggali istimbath hukum fiqih dari ayat-ayat Al-Qur'an dengan kaidah ushuliyyah muta'akhirin.",
      enrolledStudents: [
        { id: 'std-6', name: 'Maryam Abdullah', email: 'maryam.abdullah@example.com', avatar: null, studentId: 'STD-2026-006', attendance: '99%', score: '99 (A+)', submittedAssignments: '9/9', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: 'Kaidah Penafsiran Lafadz Mujmal & Mubayyan', status: 'Selesai' },
        { module: 'Modul 2', title: 'Tafsir Ayat-Ayat Hukum Waris & Pernikahan', status: 'Sedang Berjalan' },
        { module: 'Modul 3', title: 'Tafsir Ayat Muamalah & Riba Kontemporer', status: 'Mendatang' }
      ]
    },
    {
      id: 'cls-6',
      number: 6,
      title: 'Alfiyyah Ibnu Malik: Nahwu Tingkat Tinggi',
      code: 'CLS-ALF-501',
      subject: 'Nahwu & Shorof',
      level: 'Advanced',
      image: '/images/class_nahwu.jpg',
      instructor: {
        name: 'Ust. Ahmed Mohamed',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: 'Senior Arabic Grammarian',
        email: 'ahmed.mohamed@example.com',
        phone: '+62 812-9876-5432'
      },
      enrollment: 180,
      quota: 200,
      schedule: 'Ahad • 09:00 - 11:30 WIB',
      format: 'Live Talaqqi Syarah',
      rating: 4.9,
      reviewsCount: 64,
      price: 'Rp 399.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '01 Jun 2026',
      endDate: '01 Des 2026',
      totalSessions: 26,
      completedSessions: 16,
      description: "Mengkaji bait per bait Alfiyyah Ibnu Malik dengan Syarah Ibnu 'Aqil dan pembahasan i'rob tingkat tinggi.",
      enrolledStudents: [
        { id: 'std-9', name: 'Zaid Ibrahim', email: 'zaid.ibrahim@example.com', avatar: null, studentId: 'STD-2026-009', attendance: '97%', score: '95 (A)', submittedAssignments: '16/16', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: "Al-Kalam wa ma Yata'allafu Minhu", status: 'Selesai' },
        { module: 'Modul 2', title: "Al-Mu'rab wal Mabni & Anwa'ul I'rob", status: 'Selesai' },
        { module: 'Modul 3', title: "Al-Ibtida' & Nawasikhul Ibtida'", status: 'Sedang Berjalan' }
      ]
    },
    {
      id: 'cls-7',
      number: 7,
      title: "Syarah 40 Hadits Arba'in An-Nawawiyyah",
      code: 'CLS-HAD-101',
      subject: 'Hadits & Musthalah',
      level: 'Intermediate',
      image: '/images/class_conversation.jpg',
      instructor: {
        name: 'Ust. Ahmad Fauzi, Lc.',
        avatar: '/images/tutor_ahmed.jpg',
        specialty: 'Hadits & Sirah Nabawiyyah',
        email: 'ahmad.fauzi@example.com',
        phone: '+62 812-4455-7788'
      },
      enrollment: 165,
      quota: 250,
      schedule: 'Selasa • 19:30 - 21:00 WIB',
      format: 'Live Streaming + Kajian',
      rating: 4.7,
      reviewsCount: 52,
      price: 'Rp 175.000 / bln',
      status: 'Active',
      statusType: 'active',
      startDate: '18 Ags 2026',
      endDate: '18 Nov 2026',
      totalSessions: 12,
      completedSessions: 6,
      description: 'Membedah hadits pokok agama dari niat, rukun Islam-Iman-Ihsan, hingga akhlaqul karimah.',
      enrolledStudents: [
        { id: 'std-7', name: 'Hamzah Al-Farisi', email: 'hamzah.alfarisi@example.com', avatar: null, studentId: 'STD-2026-007', attendance: '88%', score: '86 (B+)', submittedAssignments: '5/6', status: 'Active' }
      ],
      syllabus: [
        { module: 'Modul 1', title: 'Hadits 1-10: Pondasi Aqidah & Ibadah', status: 'Selesai' },
        { module: 'Modul 2', title: "Hadits 11-20: Wara', Akhlak & Kehalalan", status: 'Sedang Berjalan' },
        { module: 'Modul 3', title: 'Hadits 21-42: Muamalah, Doa & Ridha Allah', status: 'Mendatang' }
      ]
    },
    {
      id: 'cls-8',
      number: 8,
      title: 'Khat & Seni Kaligrafi Naskhi Dasar',
      code: 'CLS-KHT-101',
      subject: 'Khat & Kaligrafi',
      level: 'Beginner',
      image: '/images/class_tajweed.jpg',
      instructor: {
        name: 'Ust. Bilal Mansur',
        avatar: '/images/student_omar.jpg',
        specialty: 'Master Calligrapher',
        email: 'bilal.mansur@example.com',
        phone: '+62 813-9988-7711'
      },
      enrollment: 95,
      quota: 100,
      schedule: 'Sabtu • 14:00 - 16:00 WIB',
      format: 'Live Video Praktek Goresan',
      rating: 4.8,
      reviewsCount: 41,
      price: 'Rp 150.000 / bln',
      status: 'Upcoming',
      statusType: 'upcoming',
      startDate: '10 Okt 2026',
      endDate: '10 Des 2026',
      totalSessions: 10,
      completedSessions: 0,
      description: 'Belajar memegang pena kalam bambu, proporsi titik (nuqath), huruf tunggal alif-yaa, dan sambungan huruf.',
      enrolledStudents: [
        { id: 'std-8', name: 'Nurul Hidayah', email: 'nurul.hidayah@example.com', avatar: null, studentId: 'STD-2026-008', attendance: '100%', score: 'Menunggu Kelas', submittedAssignments: '0/10', status: 'Registered' }
      ],
      syllabus: [
        { module: 'Modul 1', title: 'Pengenalan Alat Tulis, Tinta & Ukuran Pena', status: 'Mendatang' },
        { module: 'Modul 2', title: 'Kaidah Huruf Mufradat (Alif s/d Yaa)', status: 'Mendatang' },
        { module: 'Modul 3', title: 'Rangkaian Kata & Penulisan Bismillah', status: 'Mendatang' }
      ]
    }
  ]);

  const currentSelectedClass = classesList.find(c => c.id === selectedClassId) || classesList[0];

  const toggleSelectClassCheckbox = (id) => {
    setSelectedClassCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllClasses = () => {
    if (selectedClassCheckboxes.length === classesList.length) {
      setSelectedClassCheckboxes([]);
    } else {
      setSelectedClassCheckboxes(classesList.map(c => c.id));
    }
  };

  // =========================================================
  // LIVE CLASSROOMS DATASET (matching media_1790734764232.jpg)
  // =========================================================
  const [liveRoomsList, setLiveRoomsList] = useState([
    {
      id: 'live-1',
      number: 1,
      title: 'Quran Recitation',
      subtitle: 'Tajweed Practice',
      image: '/images/class_nahwu.jpg',
      teacher: 'Siti Aisyah',
      teacherAvatar: '/images/student_fatimah.jpg',
      subject: 'Islamic Studies',
      subjectBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      startTime: '23 Sep 2026 09:00 AM',
      startedTimeText: '09:00 AM (1h 20m)',
      duration: '1h 20m',
      attendees: 86,
      status: 'Live',
      statusType: 'live',
      description: "Let's practice correct recitation with proper Tajweed rules."
    },
    {
      id: 'live-2',
      number: 2,
      title: 'English Conversation',
      subtitle: 'Speaking Practice',
      image: '/images/class_conversation.jpg',
      teacher: 'Omar Hassan',
      teacherAvatar: '/images/student_omar.jpg',
      subject: 'English',
      subjectBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      startTime: '23 Sep 2026 10:00 AM',
      startedTimeText: '10:00 AM (1h 0m)',
      duration: '1h 0m',
      attendees: 124,
      status: 'Live',
      statusType: 'live',
      description: 'Daily English dialogue and pronunciation practice with native idioms.'
    },
    {
      id: 'live-3',
      number: 3,
      title: 'Mathematics Basics',
      subtitle: 'Algebra Fundamentals',
      image: '/images/class_sharaf.jpg',
      teacher: 'Layla Karim',
      teacherAvatar: '/images/student_aisha.jpg',
      subject: 'Mathematics',
      subjectBadge: 'bg-purple-50 text-purple-700 border-purple-200',
      startTime: '23 Sep 2026 11:00 AM',
      startedTimeText: '11:00 AM (1h 30m)',
      duration: '1h 30m',
      attendees: 95,
      status: 'Live',
      statusType: 'live',
      description: 'Linear equations, polynomials, and algebraic functions problem solving.'
    },
    {
      id: 'live-4',
      number: 4,
      title: 'Arabic Language',
      subtitle: 'Reading & Writing',
      image: '/images/class_tajweed.jpg',
      teacher: 'Zainab Ali',
      teacherAvatar: '/images/student_fatimah.jpg',
      subject: 'Arabic',
      subjectBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      startTime: '23 Sep 2026 01:00 PM',
      startedTimeText: '01:00 PM (1h 15m)',
      duration: '1h 15m',
      attendees: 78,
      status: 'Upcoming',
      statusType: 'upcoming',
      description: 'Introduction to Arabic alphabet, vowels, and sentence structure.'
    },
    {
      id: 'live-5',
      number: 5,
      title: 'Science Exploration',
      subtitle: 'The Solar System',
      image: '/images/class_balaghah.jpg',
      teacher: 'Dr. Ahmad Fauzi',
      teacherAvatar: '/images/tutor_ahmed.jpg',
      subject: 'Science',
      subjectBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      startTime: '23 Sep 2026 02:00 PM',
      startedTimeText: '02:00 PM (1h 0m)',
      duration: '1h 0m',
      attendees: 64,
      status: 'Upcoming',
      statusType: 'upcoming',
      description: 'Planetary orbits, astrophysics basics, and universe exploration.'
    },
    {
      id: 'live-6',
      number: 6,
      title: 'History of Islam',
      subtitle: 'Early Civilization',
      image: '/images/class_nahwu.jpg',
      teacher: 'Fatimah Nur',
      teacherAvatar: '/images/student_aisha.jpg',
      subject: 'History',
      subjectBadge: 'bg-rose-50 text-rose-700 border-rose-200',
      startTime: '23 Sep 2026 03:00 PM',
      startedTimeText: '03:00 PM (1h 0m)',
      duration: '1h 0m',
      attendees: 52,
      status: 'Upcoming',
      statusType: 'upcoming',
      description: 'The golden age of Islamic scholarship, Baghdad, and Andalusia.'
    },
    {
      id: 'live-7',
      number: 7,
      title: 'Web Development',
      subtitle: 'HTML & CSS Basics',
      image: '/images/class_conversation.jpg',
      teacher: 'Muhammad Khan',
      teacherAvatar: '/images/student_ali.jpg',
      subject: 'Computer Science',
      subjectBadge: 'bg-purple-50 text-purple-700 border-purple-200',
      startTime: '23 Sep 2026 04:00 PM',
      startedTimeText: '04:00 PM (1h 30m)',
      duration: '1h 30m',
      attendees: 68,
      status: 'Ended',
      statusType: 'ended',
      description: 'Semantic HTML, CSS Flexbox and Grid fundamentals.'
    },
    {
      id: 'live-8',
      number: 8,
      title: 'Environmental Care',
      subtitle: 'Sustainability Talk',
      image: '/images/class_sharaf.jpg',
      teacher: 'Nadia Rahman',
      teacherAvatar: '/images/student_aisha.jpg',
      subject: 'Environmental',
      subjectBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      startTime: '23 Sep 2026 05:00 PM',
      startedTimeText: '05:00 PM (1h 0m)',
      duration: '1h 0m',
      attendees: 41,
      status: 'Ended',
      statusType: 'ended',
      description: 'Global climate policies, zero waste, and ecological balance.'
    },
    {
      id: 'live-9',
      number: 9,
      title: 'Business Basics',
      subtitle: 'Entrepreneurship',
      image: '/images/class_tajweed.jpg',
      teacher: 'Ali Reza',
      teacherAvatar: '/images/student_omar.jpg',
      subject: 'Business',
      subjectBadge: 'bg-pink-50 text-pink-700 border-pink-200',
      startTime: '23 Sep 2026 06:00 PM',
      startedTimeText: '06:00 PM (1h 20m)',
      duration: '1h 20m',
      attendees: 57,
      status: 'Ended',
      statusType: 'ended',
      description: 'Startup funding, pitch deck preparation, and market fit.'
    },
    {
      id: 'live-10',
      number: 10,
      title: 'Psychology 101',
      subtitle: 'Mind and Behavior',
      image: '/images/class_balaghah.jpg',
      teacher: 'Hassan Malik',
      teacherAvatar: '/images/tutor_ahmed.jpg',
      subject: 'Psychology',
      subjectBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      startTime: '23 Sep 2026 07:00 PM',
      startedTimeText: '07:00 PM (1h 0m)',
      duration: '1h 0m',
      attendees: 39,
      status: 'Ended',
      statusType: 'ended',
      description: 'Cognitive neuroscience, human perception, and behavioral science.'
    }
  ]);

  const currentSelectedLiveRoom = liveRoomsList.find(r => r.id === selectedLiveRoomId) || liveRoomsList[0];

  const toggleSelectLiveCheckbox = (id) => {
    setSelectedLiveCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllLive = () => {
    if (selectedLiveCheckboxes.length === liveRoomsList.length) {
      setSelectedLiveCheckboxes([]);
    } else {
      setSelectedLiveCheckboxes(liveRoomsList.map(r => r.id));
    }
  };

  // =========================================================
  // SCHEDULES TIMETABLE EVENTS (matching media_1790735024374.png)
  // =========================================================
  const [scheduleEventsList, setScheduleEventsList] = useState([
    {
      id: 'sch-1',
      title: 'Quran Recitation',
      teacher: 'Siti Aisyah',
      subject: 'Islamic Studies',
      day: 'Mon',
      dayDate: '23 Sep',
      timeSlot: '09:00',
      timeText: '09:00 - 10:00',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      dotColor: 'bg-emerald-600',
      room: 'Live Room 1',
      status: 'Live Now'
    },
    {
      id: 'sch-2',
      title: 'Web Development',
      teacher: 'Muhammad Khan',
      subject: 'Computer Science',
      day: 'Mon',
      dayDate: '23 Sep',
      timeSlot: '11:00',
      timeText: '11:00 - 12:00',
      color: 'bg-purple-50 border-purple-300 text-purple-900',
      dotColor: 'bg-purple-600',
      room: 'Live Room 3',
      status: 'Upcoming'
    },
    {
      id: 'sch-3',
      title: 'Computer Science',
      teacher: 'Muhammad Khan',
      subject: 'Computer Science',
      day: 'Mon',
      dayDate: '23 Sep',
      timeSlot: '16:00',
      timeText: '16:00 - 17:00',
      color: 'bg-rose-50 border-rose-300 text-rose-900',
      dotColor: 'bg-rose-600',
      room: 'Live Room 2',
      status: 'Upcoming'
    },
    {
      id: 'sch-4',
      title: 'Arabic Language',
      teacher: 'Zainab Ali',
      subject: 'Arabic',
      day: 'Tue',
      dayDate: '24 Sep',
      timeSlot: '08:00',
      timeText: '08:00 - 09:00',
      color: 'bg-blue-50 border-blue-300 text-blue-900',
      dotColor: 'bg-blue-600',
      room: 'Live Room 1',
      status: 'Upcoming'
    },
    {
      id: 'sch-5',
      title: 'Psychology 101',
      teacher: 'Hassan Malik',
      subject: 'Psychology',
      day: 'Tue',
      dayDate: '24 Sep',
      timeSlot: '14:00',
      timeText: '14:00 - 15:00',
      color: 'bg-amber-50 border-amber-300 text-amber-900',
      dotColor: 'bg-amber-600',
      room: 'Live Room 4',
      status: 'Upcoming'
    },
    {
      id: 'sch-6',
      title: 'Mathematics',
      teacher: 'Layla Karim',
      subject: 'Mathematics',
      day: 'Wed',
      dayDate: '25 Sep',
      timeSlot: '09:00',
      timeText: '09:00 - 10:30',
      color: 'bg-pink-50 border-pink-300 text-pink-900',
      dotColor: 'bg-pink-600',
      room: 'Live Room 2',
      status: 'Upcoming'
    },
    {
      id: 'sch-7',
      title: 'Environmental Care',
      teacher: 'Nadia Rahman',
      subject: 'Environmental',
      day: 'Wed',
      dayDate: '25 Sep',
      timeSlot: '13:00',
      timeText: '13:00 - 14:00',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      dotColor: 'bg-emerald-600',
      room: 'Live Room 5',
      status: 'Upcoming'
    },
    {
      id: 'sch-8',
      title: 'English Conversation',
      teacher: 'Omar Hassan',
      subject: 'English',
      day: 'Thu',
      dayDate: '26 Sep',
      timeSlot: '09:00',
      timeText: '09:00 - 10:00',
      color: 'bg-amber-50 border-amber-300 text-amber-900',
      dotColor: 'bg-amber-600',
      room: 'Live Room 1',
      status: 'Upcoming'
    },
    {
      id: 'sch-9',
      title: 'Business Basics',
      teacher: 'Ali Reza',
      subject: 'Business',
      day: 'Thu',
      dayDate: '26 Sep',
      timeSlot: '13:00',
      timeText: '13:00 - 14:30',
      color: 'bg-rose-50 border-rose-300 text-rose-900',
      dotColor: 'bg-rose-600',
      room: 'Live Room 3',
      status: 'Upcoming'
    },
    {
      id: 'sch-10',
      title: 'Islamic History',
      teacher: 'Fatimah Nur',
      subject: 'History',
      day: 'Fri',
      dayDate: '27 Sep',
      timeSlot: '08:00',
      timeText: '08:00 - 09:30',
      color: 'bg-purple-50 border-purple-300 text-purple-900',
      dotColor: 'bg-purple-600',
      room: 'Live Room 1',
      status: 'Upcoming'
    },
    {
      id: 'sch-11',
      title: 'Academic Writing',
      teacher: 'Omar Hassan',
      subject: 'English',
      day: 'Fri',
      dayDate: '27 Sep',
      timeSlot: '15:00',
      timeText: '15:00 - 16:00',
      color: 'bg-blue-50 border-blue-300 text-blue-900',
      dotColor: 'bg-blue-600',
      room: 'Live Room 2',
      status: 'Upcoming'
    },
    {
      id: 'sch-12',
      title: 'Science Exploration',
      teacher: 'Dr. Ahmad Fauzi',
      subject: 'Science',
      day: 'Sat',
      dayDate: '28 Sep',
      timeSlot: '10:00',
      timeText: '10:00 - 11:00',
      color: 'bg-cyan-50 border-cyan-300 text-cyan-900',
      dotColor: 'bg-cyan-600',
      room: 'Live Room 4',
      status: 'Upcoming'
    },
    {
      id: 'sch-13',
      title: 'Quran Tajweed',
      teacher: 'Siti Aisyah',
      subject: 'Islamic Studies',
      day: 'Sun',
      dayDate: '29 Sep',
      timeSlot: '14:00',
      timeText: '14:00 - 15:30',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      dotColor: 'bg-emerald-600',
      room: 'Live Room 1',
      status: 'Upcoming'
    }
  ]);

  // =========================================================
  // ASSIGNMENTS MOCK DATA (matching media_1790785679753.jpg)
  // =========================================================
  const [assignmentsList, setAssignmentsList] = useState([
    {
      id: 'asg-1',
      num: 1,
      title: 'Essay: Benefits of Renewable Energy',
      type: 'Essay',
      class: 'Grade 10A',
      subject: 'Science',
      subjectColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      teacher: 'Dr. Ahmad Fauzi',
      teacherAvatar: '/images/teacher_ahmad.jpg',
      dueDate: '25 Sep 2026, 23:59',
      submissionsCount: 28,
      totalStudents: 32,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      imageBanner: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Write a 500-800 word essay about the benefits of renewable energy and its impact on the environment.',
      overview: {
        submitted: 28,
        submittedPct: 88,
        pending: 4,
        pendingPct: 12,
        late: 2,
        latePct: 6
      },
      recentSubmissions: [
        { id: 'sub-1', name: 'Ali Reza', avatar: '/images/student_ali.jpg', timeAgo: 'Submitted 2 hours ago', score: '85/100', status: 'graded', gradedScore: 85 },
        { id: 'sub-2', name: 'Nadia Rahman', avatar: '/images/student_fatimah.jpg', timeAgo: 'Submitted 3 hours ago', score: '92/100', status: 'graded', gradedScore: 92 },
        { id: 'sub-3', name: 'Hassan Malik', avatar: '/images/student_omar.jpg', timeAgo: 'Submitted 5 hours ago', score: '78/100', status: 'pending', gradedScore: 78 },
        { id: 'sub-4', name: 'Zainab Ali', avatar: '/images/student_maryam.jpg', timeAgo: 'Submitted 6 hours ago', score: '88/100', status: 'graded', gradedScore: 88 },
        { id: 'sub-5', name: 'Layla Karim', avatar: '/images/student_fatimah.jpg', timeAgo: 'Submitted 8 hours ago', score: '90/100', status: 'graded', gradedScore: 90 }
      ]
    },
    {
      id: 'asg-2',
      num: 2,
      title: 'Quran Recitation Recording',
      type: 'Video Submission',
      class: 'Grade 8B',
      subject: 'Islamic Studies',
      subjectColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      teacher: 'Siti Aisyah',
      teacherAvatar: '/images/tutor_sarah.jpg',
      dueDate: '24 Sep 2026, 23:59',
      submissionsCount: 26,
      totalStudents: 28,
      status: 'Graded',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      imageBanner: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Record video recitation of Surah Al-Mulk verses 1-15 with proper tajweed rules and makhraj.',
      overview: {
        submitted: 26,
        submittedPct: 93,
        pending: 2,
        pendingPct: 7,
        late: 1,
        latePct: 4
      },
      recentSubmissions: [
        { id: 'sub-6', name: 'Muhammad Khan', avatar: '/images/student_ali.jpg', timeAgo: 'Submitted 1 hour ago', score: '96/100', status: 'graded', gradedScore: 96 },
        { id: 'sub-7', name: 'Khadijah Nur', avatar: '/images/student_maryam.jpg', timeAgo: 'Submitted 4 hours ago', score: '94/100', status: 'graded', gradedScore: 94 },
        { id: 'sub-8', name: 'Zaid Ibrahim', avatar: '/images/student_omar.jpg', timeAgo: 'Submitted 5 hours ago', score: '90/100', status: 'graded', gradedScore: 90 }
      ]
    },
    {
      id: 'asg-3',
      num: 3,
      title: 'Mathematics Problem Set',
      type: 'Document',
      class: 'Grade 11A',
      subject: 'Mathematics',
      subjectColor: 'bg-purple-50 text-purple-700 border-purple-200',
      teacher: 'Layla Karim',
      teacherAvatar: '/images/tutor_sarah.jpg',
      dueDate: '23 Sep 2026, 23:59',
      submissionsCount: 30,
      totalStudents: 30,
      status: 'Graded',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      imageBanner: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Complete problems 1 through 20 on advanced quadratic functions and calculus integration.',
      overview: {
        submitted: 30,
        submittedPct: 100,
        pending: 0,
        pendingPct: 0,
        late: 0,
        latePct: 0
      },
      recentSubmissions: [
        { id: 'sub-9', name: 'Ali Reza', avatar: '/images/student_ali.jpg', timeAgo: 'Submitted yesterday', score: '100/100', status: 'graded', gradedScore: 100 },
        { id: 'sub-10', name: 'Omar Hassan', avatar: '/images/student_omar.jpg', timeAgo: 'Submitted yesterday', score: '95/100', status: 'graded', gradedScore: 95 }
      ]
    },
    {
      id: 'asg-4',
      num: 4,
      title: 'Arabic Writing Practice',
      type: 'Document',
      class: 'Grade 9A',
      subject: 'Arabic',
      subjectColor: 'bg-amber-50 text-amber-700 border-amber-200',
      teacher: 'Zainab Ali',
      teacherAvatar: '/images/tutor_sarah.jpg',
      dueDate: '22 Sep 2026, 23:59',
      submissionsCount: 24,
      totalStudents: 28,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      imageBanner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Write a short composition (Insha) about your daily routine in Arabic with diacritics (harakat).',
      overview: {
        submitted: 24,
        submittedPct: 86,
        pending: 4,
        pendingPct: 14,
        late: 1,
        latePct: 4
      },
      recentSubmissions: [
        { id: 'sub-11', name: 'Fatimah Nur', avatar: '/images/student_maryam.jpg', timeAgo: 'Submitted 6 hours ago', score: '88/100', status: 'pending', gradedScore: 88 },
        { id: 'sub-12', name: 'Nurul Hidayah', avatar: '/images/student_fatimah.jpg', timeAgo: 'Submitted 8 hours ago', score: '92/100', status: 'graded', gradedScore: 92 }
      ]
    },
    {
      id: 'asg-5',
      num: 5,
      title: 'History Research Project',
      type: 'Project',
      class: 'Grade 10B',
      subject: 'History',
      subjectColor: 'bg-rose-50 text-rose-700 border-rose-200',
      teacher: 'Fatimah Nur',
      teacherAvatar: '/images/tutor_sarah.jpg',
      dueDate: '20 Sep 2026, 23:59',
      submissionsCount: 18,
      totalStudents: 25,
      status: 'Active',
      statusBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      imageBanner: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Research report on the Golden Age of Islamic Civilization in Baghdad and Andalusia.',
      overview: {
        submitted: 18,
        submittedPct: 72,
        pending: 7,
        pendingPct: 28,
        late: 3,
        latePct: 12
      },
      recentSubmissions: [
        { id: 'sub-13', name: 'Hamzah Al-Farisi', avatar: '/images/student_ali.jpg', timeAgo: 'Submitted 12 hours ago', score: '84/100', status: 'pending', gradedScore: 84 }
      ]
    },
    {
      id: 'asg-6',
      num: 6,
      title: 'Web Development Mini Project',
      type: 'Project',
      class: 'Grade 12A',
      subject: 'Computer Science',
      subjectColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      teacher: 'Muhammad Khan',
      teacherAvatar: '/images/teacher_muhammad.jpg',
      dueDate: '18 Sep 2026, 23:59',
      submissionsCount: 22,
      totalStudents: 24,
      status: 'Graded',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      imageBanner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Build a responsive single-page portfolio website using HTML, CSS, and modern JavaScript.',
      overview: {
        submitted: 22,
        submittedPct: 92,
        pending: 2,
        pendingPct: 8,
        late: 0,
        latePct: 0
      },
      recentSubmissions: [
        { id: 'sub-14', name: 'Zaid Ibrahim', avatar: '/images/student_omar.jpg', timeAgo: 'Submitted 2 days ago', score: '98/100', status: 'graded', gradedScore: 98 }
      ]
    },
    {
      id: 'asg-7',
      num: 7,
      title: 'Business Case Study',
      type: 'Document',
      class: 'Grade 11B',
      subject: 'Business',
      subjectColor: 'bg-orange-50 text-orange-700 border-orange-200',
      teacher: 'Ali Reza',
      teacherAvatar: '/images/teacher_ali.jpg',
      dueDate: '15 Sep 2026, 23:59',
      submissionsCount: 20,
      totalStudents: 28,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      imageBanner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Analyze the business model and sharia compliance strategy of a contemporary FinTech startup.',
      overview: {
        submitted: 20,
        submittedPct: 71,
        pending: 8,
        pendingPct: 29,
        late: 2,
        latePct: 7
      },
      recentSubmissions: [
        { id: 'sub-15', name: 'Maryam Abdullah', avatar: '/images/student_maryam.jpg', timeAgo: 'Submitted 3 days ago', score: '89/100', status: 'pending', gradedScore: 89 }
      ]
    },
    {
      id: 'asg-8',
      num: 8,
      title: 'Environmental Awareness Poster',
      type: 'Image',
      class: 'Grade 9B',
      subject: 'Environmental',
      subjectColor: 'bg-teal-50 text-teal-700 border-teal-200',
      teacher: 'Nadia Rahman',
      teacherAvatar: '/images/tutor_sarah.jpg',
      dueDate: '12 Sep 2026, 23:59',
      submissionsCount: 27,
      totalStudents: 30,
      status: 'Graded',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      imageBanner: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Design a digital poster promoting water conservation and green energy practices in schools.',
      overview: {
        submitted: 27,
        submittedPct: 90,
        pending: 3,
        pendingPct: 10,
        late: 1,
        latePct: 3
      },
      recentSubmissions: [
        { id: 'sub-16', name: 'Nurul Hidayah', avatar: '/images/student_fatimah.jpg', timeAgo: 'Submitted 4 days ago', score: '95/100', status: 'graded', gradedScore: 95 }
      ]
    },
    {
      id: 'asg-9',
      num: 9,
      title: 'Psychology Reflection',
      type: 'Essay',
      class: 'Grade 12B',
      subject: 'Psychology',
      subjectColor: 'bg-violet-50 text-violet-700 border-violet-200',
      teacher: 'Hassan Malik',
      teacherAvatar: '/images/tutor_ahmed.jpg',
      dueDate: '10 Sep 2026, 23:59',
      submissionsCount: 18,
      totalStudents: 24,
      status: 'Active',
      statusBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      imageBanner: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Write a self-reflection essay connecting cognitive behavioral concepts to daily emotional resilience.',
      overview: {
        submitted: 18,
        submittedPct: 75,
        pending: 6,
        pendingPct: 25,
        late: 0,
        latePct: 0
      },
      recentSubmissions: [
        { id: 'sub-17', name: 'Omar Hassan', avatar: '/images/student_omar.jpg', timeAgo: 'Submitted 5 days ago', score: '82/100', status: 'pending', gradedScore: 82 }
      ]
    },
    {
      id: 'asg-10',
      num: 10,
      title: 'English Speaking Presentation',
      type: 'Video Submission',
      class: 'Grade 8A',
      subject: 'English',
      subjectColor: 'bg-blue-50 text-blue-700 border-blue-200',
      teacher: 'Omar Hassan',
      teacherAvatar: '/images/student_omar.jpg',
      dueDate: '8 Sep 2026, 23:59',
      submissionsCount: 25,
      totalStudents: 28,
      status: 'Pending',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      imageBanner: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80',
      totalPoints: 100,
      description: 'Prepare a 3-minute video presentation explaining global cultural exchange and diplomacy.',
      overview: {
        submitted: 25,
        submittedPct: 89,
        pending: 3,
        pendingPct: 11,
        late: 1,
        latePct: 4
      },
      recentSubmissions: [
        { id: 'sub-18', name: 'Zahra Putri', avatar: '/images/student_fatimah.jpg', timeAgo: 'Submitted 1 week ago', score: '88/100', status: 'pending', gradedScore: 88 }
      ]
    }
  ]);

  // =========================================================
  // VIP TEACHERS & APPLICATIONS MOCK DATA (Model 4 Mentorship)
  // =========================================================
  const [vipTeachersList, setVipTeachersList] = useState([
    {
      id: 'vip-1',
      name: 'Dr. Sheikh Tariq Al-Madani',
      avatar: '/images/tutor_ahmed.jpg',
      email: 'tariq.madani@univ-islamic.org',
      phone: '+62 812-9842-1920',
      location: 'Madinah / Jakarta',
      specialty: 'Ushul Fiqh & Qawaid Fiqhiyyah',
      credentials: "S3 Ushul Fiqh UIM Madinah, Sanad Muttashil Mazhab Syafi'i",
      experience: '14+ Years Academic & Talaqqi',
      status: 'Pending Review', // 'Pending Review' | 'Sanad Verified' | 'Approved VIP' | 'Needs Revision'
      statusType: 'pending',
      submittedDate: '28 Sep 2026',
      rating: '5.0',
      classesCount: 42,
      subscribersCount: 0,
      pricingTiers: {
        halakah: { price: 'Rp 199.000 / bln', name: 'VIP Halakah Ushul Fiqh', schedule: 'Setiap Sabtu 20:00 WIB', liveSessionCount: '4x Live / Bln' },
        mentorship: { price: 'Rp 1.250.000 / bln', name: 'Private 1-on-1 Takhassus', quota: 'Max 10 Santri/Bln', benefits: 'Private Talaqqi + Q&A Fatwa Personal' },
        lifetime: { price: 'Rp 3.500.000', name: 'Executive Ilmiyah Pass', benefits: 'Akses Semua Rekaman + Sanad Ijazah Bersertifikat' }
      },
      documents: [
        { id: 'doc-1', name: 'Ijazah_Sanad_Ushul_Madinah.pdf', type: 'sanad', size: '2.4 MB', isVerified: true, date: '28 Sep 2026' },
        { id: 'doc-2', name: 'Curriculum_VIP_Halakah_2026.pdf', type: 'curriculum', size: '1.1 MB', isVerified: false, date: '28 Sep 2026' },
        { id: 'doc-3', name: 'Sample_Lectures_Talaqqi.mp4', type: 'video', size: '48.2 MB', isVerified: true, date: '28 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'BSI (Bank Syariah Indonesia)',
        accNumber: '7148892301',
        accName: 'Tariq Al-Madani',
        mayarId: 'mayar.id/sheikhtariq',
        isMayarConnected: true
      },
      bio: "Dosen tamu di berbagai ma'had 'aly dan pemegang sanad muttashil fiqh serta ushul fiqh dari Masyayikh Masjid Nabawi Madinah. Berpengalaman membimbing riset fatwa kontemporer.",
      sanadLineage: "Sanad Fiqh Syafi'i melalui Syaikh Muhammad bin Ali Al-Khatib Al-Makki hingga Imam Asy-Syafi'i RA.",
      onboardingNote: "Pengajuan kurikulum halakah mingguan fokus pada Matn Al-Waraqat & Ghayatul Wushul."
    },
    {
      id: 'vip-2',
      name: 'Ustadzah Fatimah Zahra, Lc., M.Ag.',
      avatar: '/images/tutor_sarah.jpg',
      email: 'fatimah.zahra@ilmuhub.id',
      phone: '+62 821-4455-8900',
      location: 'Solo, Jawa Tengah',
      specialty: "Tahsin Bersanad Qira'at Ashim",
      credentials: "Al-Azhar Cairo, Sanad Matn Jazariyyah & Thayyibah",
      experience: '9+ Years Pengasuh Tahfidz',
      status: 'Sanad Verified',
      statusType: 'verified',
      submittedDate: '26 Sep 2026',
      rating: '4.95',
      classesCount: 28,
      subscribersCount: 84,
      pricingTiers: {
        halakah: { price: 'Rp 149.000 / bln', name: 'Halakah Tahsin Khusus Akhwat', schedule: 'Setiap Ahad 06:00 WIB', liveSessionCount: '4x Live / Bln' },
        mentorship: { price: 'Rp 850.000 / bln', name: '1-on-1 Talaqqi Ijazah Sanad', quota: 'Max 8 Santri/Bln', benefits: 'Setoran Hafalan 1-on-1 + Koreksi Makhraj' },
        lifetime: { price: 'Rp 2.200.000', name: 'Sanad Tajwid Complete Bundle', benefits: 'Modul Tajwid Lengkap + Ujian Sanad Matn Jazariyyah' }
      },
      documents: [
        { id: 'doc-4', name: 'Sanad_Qiraat_Ashim_Mesir.pdf', type: 'sanad', size: '3.8 MB', isVerified: true, date: '26 Sep 2026' },
        { id: 'doc-5', name: 'Silabus_Tahsin_Takhassus.pdf', type: 'curriculum', size: '950 KB', isVerified: true, date: '26 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'BCA Syariah',
        accNumber: '0283492810',
        accName: 'Fatimah Zahra',
        mayarId: 'mayar.id/ustadzahfatimah',
        isMayarConnected: true
      },
      bio: "Pengasuh Ma'had Tahfidz Putri & pengajar tajwid tahlili bersanad resmi dari Mesir. Telah meluluskan puluhan penghafal Quran bersanad.",
      sanadLineage: "Sanad Qira'at Ashim Riwayat Hafs & Syu'bah dari Syaikhah Ummu Ahmad Al-Mishriyyah (Mesir).",
      onboardingNote: "Dokumen sanad telah diverifikasi oleh tim kurikulum Al-Quran IlmuHub."
    },
    {
      id: 'vip-3',
      name: 'Ustadz Dr. Muhammad Zulkarnain',
      avatar: '/images/tutor_omar.jpg',
      email: 'zulkarnain.sharia@gmail.com',
      phone: '+62 811-2299-7711',
      location: 'Kuala Lumpur / Bandung',
      specialty: 'Islamic Wealth & Sharia FinTech',
      credentials: 'PhD Islamic Banking IIUM, Dewan Pengawas Syariah (DSN-MUI)',
      experience: '12+ Years Konsultan Syariah',
      status: 'Approved VIP',
      statusType: 'approved',
      submittedDate: '15 Sep 2026',
      rating: '4.98',
      classesCount: 56,
      subscribersCount: 142,
      pricingTiers: {
        halakah: { price: 'Rp 299.000 / bln', name: 'Executive Sharia FinTech Halakah', schedule: 'Setiap Rabu 19:30 WIB', liveSessionCount: '4x Live / Bln' },
        mentorship: { price: 'Rp 2.500.000 / bln', name: '1-on-1 Sharia Business Advisory', quota: 'Max 5 CEO/Founder', benefits: 'Review Akad Bisnis & Konsultasi FinTech' },
        lifetime: { price: 'Rp 7.500.000', name: 'Lifetime Sharia Wealth Masterclass', benefits: 'Semua Template Akad + Akses Eksklusif Group DPS' }
      },
      documents: [
        { id: 'doc-6', name: 'Sertifikat_DPS_DSN_MUI.pdf', type: 'certificate', size: '1.7 MB', isVerified: true, date: '15 Sep 2026' },
        { id: 'doc-7', name: 'Executive_Mentorship_Modules.pdf', type: 'curriculum', size: '4.2 MB', isVerified: true, date: '15 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'Bank Mandiri',
        accNumber: '131008829102',
        accName: 'Muhammad Zulkarnain',
        mayarId: 'mayar.id/zulkarnain',
        isMayarConnected: true
      },
      bio: "Praktisi & konsultan muamalah kontemporer untuk institusi perbankan syariah dan fintech global. Anggota DSN-MUI.",
      sanadLineage: "Sertifikasi Kompetensi Pengawas Syariah Lembaga Keuangan Bank & Non-Bank dari OJK/DSN-MUI.",
      onboardingNote: "Status VIP Aktif. Revenue bagi hasil 85% Ustadz / 15% Platform IlmuHub berjalan lancar."
    },
    {
      id: 'vip-4',
      name: 'Syaikh Abdullah Al-Habsyi',
      avatar: '/images/tutor_ahmed.jpg',
      email: 'alhabsyi.nahwu@ilmuhub.id',
      phone: '+62 857-1122-3344',
      location: 'Tarim / Surabaya',
      specialty: 'Nahwu Shorof & Alfiyyah Ibn Malik',
      credentials: 'Dirasah Lughawiyyah Ribath Tarim Hadramaut',
      experience: '16+ Years Pengajar Bahasa Arab',
      status: 'Approved VIP',
      statusType: 'approved',
      submittedDate: '10 Sep 2026',
      rating: '5.0',
      classesCount: 64,
      subscribersCount: 215,
      pricingTiers: {
        halakah: { price: 'Rp 129.000 / bln', name: 'Kajian Rutin Alfiyyah Ibn Malik', schedule: 'Setiap Selasa & Kamis 20:00 WIB', liveSessionCount: '8x Live / Bln' },
        mentorship: { price: 'Rp 650.000 / bln', name: 'Private Talaqqi I’rab Kitab Kuning', quota: 'Max 12 Santri/Bln', benefits: 'Bedah Teks Kitab Klasik Baris-per-Baris' },
        lifetime: { price: 'Rp 1.800.000', name: 'Master Nahwu Shorof Lifetime', benefits: 'Akses 1000+ Bait Nadzam & Video Syarah' }
      },
      documents: [
        { id: 'doc-8', name: 'Ijazah_Lughah_Tarim_Hadramaut.pdf', type: 'sanad', size: '2.1 MB', isVerified: true, date: '10 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'BSI (Bank Syariah Indonesia)',
        accNumber: '7091823901',
        accName: 'Abdullah Al-Habsyi',
        mayarId: 'mayar.id/alhabsyi',
        isMayarConnected: true
      },
      bio: "Pengajar spesialis kitab-kitab induk tata bahasa Arab tingkat lanjutan dengan metode talaqqi interaktif dari Hadramaut.",
      sanadLineage: "Sanad Alfiyyah Ibn Malik bersambung hingga Pengarang Kitab melalui Masyayikh Ribath Tarim.",
      onboardingNote: "Mentor VIP terfavorit untuk kategori Bahasa Arab & Gramatika Klasik."
    },
    {
      id: 'vip-5',
      name: 'Ustadz Rayhan Firdaus, M.A.',
      avatar: '/images/tutor_omar.jpg',
      email: 'rayhan.firdaus@gmail.com',
      phone: '+62 813-7788-9900',
      location: 'Jakarta Selatan',
      specialty: 'Tazkiyatun Nafs & Parenting Islami',
      credentials: 'M.A. Islamic Studies UI, Penulis 4 Buku Parenting',
      experience: '7+ Years Praktisi Konseling',
      status: 'Needs Revision',
      statusType: 'revision',
      submittedDate: '29 Sep 2026',
      rating: '4.8',
      classesCount: 15,
      subscribersCount: 0,
      pricingTiers: {
        halakah: { price: 'Rp 119.000 / bln', name: 'Halakah Parenting Qurani Bulanan', schedule: 'Setiap Sabtu 09:00 WIB', liveSessionCount: '4x Live / Bln' },
        mentorship: { price: 'Rp 500.000 / bln', name: 'Private Family Counseling', quota: 'Max 10 Keluarga', benefits: 'Sesi Curhat Konseling 1 Jam / Minggu' },
        lifetime: { price: 'Rp 1.500.000', name: 'Tazkiyatun Nafs Complete Series', benefits: 'Semua E-Book + Rekaman Kajian Keluarga' }
      },
      documents: [
        { id: 'doc-9', name: 'Proposal_Keluarga_Sakinah.pdf', type: 'curriculum', size: '820 KB', isVerified: false, date: '29 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'BCA',
        accNumber: '882019284',
        accName: 'Rayhan Firdaus',
        mayarId: 'mayar.id/rayhan',
        isMayarConnected: false
      },
      bio: "Trainer keluarga sakinah, konselor pra-nikah, dan pembina komunitas pemuda hijrah.",
      sanadLineage: "Kajian Tazkiyatun Nafs berbasis Kitab Ihya Ulumuddin & Risalah Al-Mustarsyidin.",
      onboardingNote: "Perlu revisi: Mohon upload sertifikat/ijazah pendukung dan hubungkan akun Mayar.id untuk auto-payout."
    },
    {
      id: 'vip-6',
      name: 'Dr. Maryam Al-Khatib',
      avatar: '/images/tutor_sarah.jpg',
      email: 'maryam.khatib@univ.ac.id',
      phone: '+62 819-0123-4567',
      location: 'Amman / Malang',
      specialty: 'Musthalah Hadits & Takhrij Sanad',
      credentials: 'PhD Hadith Sciences University of Jordan',
      experience: '11+ Years Peneliti Manuskrip',
      status: 'Pending Review',
      statusType: 'pending',
      submittedDate: '30 Sep 2026',
      rating: '4.9',
      classesCount: 19,
      subscribersCount: 0,
      pricingTiers: {
        halakah: { price: 'Rp 189.000 / bln', name: 'Halakah Takhrij Hadits Takhassus', schedule: 'Setiap Senin 20:00 WIB', liveSessionCount: '4x Live / Bln' },
        mentorship: { price: 'Rp 950.000 / bln', name: '1-on-1 Bimbingan Tahqiq Sanad', quota: 'Max 6 Mahasiswa S2/S3', benefits: 'Bimbingan Skripsi/Tesis Hadits + Takhrij Riwayat' },
        lifetime: { price: 'Rp 2.800.000', name: 'Koleksi Sanad & Manuskrip Hadits', benefits: 'Akses Database Manuskrip Digital + Ijazah Sanad Hadits' }
      },
      documents: [
        { id: 'doc-10', name: 'Ijazah_Doctorate_Jordan.pdf', type: 'sanad', size: '3.1 MB', isVerified: true, date: '30 Sep 2026' },
        { id: 'doc-11', name: 'Katalog_Sanad_Hadits.pdf', type: 'sanad', size: '1.9 MB', isVerified: false, date: '30 Sep 2026' }
      ],
      bankDetails: {
        bankName: 'BSI (Bank Syariah Indonesia)',
        accNumber: '7192830192',
        accName: 'Maryam Al-Khatib',
        mayarId: 'mayar.id/maryam',
        isMayarConnected: true
      },
      bio: "Peneliti manuskrip hadits klasik dan pengampu kajian tahqiq sanad. Mengajar metodologi kritik matan dan sanad.",
      sanadLineage: "Sanad Shahih Bukhari & Shahih Muslim melalui Muhaddits Jordan dan Syaikh Abdul Fattah Abu Ghuddah.",
      onboardingNote: "Pengajuan baru hari ini. Memerlukan konfirmasi jadwal interview sanad online."
    }
  ]);

  // Selected VIP Teacher for Right Panel CRM with safe fallback
  const currentSelectedVipTeacher = vipTeachersList.find(t => t.id === selectedVipTeacherId) || vipTeachersList[0] || {
    id: 'vip-1',
    name: 'Dr. Sheikh Tariq Al-Madani',
    avatar: '/images/tutor_ahmed.jpg',
    email: 'tariq.madani@univ-islamic.org',
    phone: '+62 812-9842-1920',
    location: 'Madinah / Jakarta',
    specialty: 'Ushul Fiqh & Qawaid Fiqhiyyah',
    credentials: "S3 Ushul Fiqh UIM Madinah, Sanad Muttashil Mazhab Syafi'i",
    experience: '14+ Years Academic & Talaqqi',
    status: 'Pending Review',
    statusType: 'pending',
    submittedDate: '28 Sep 2026',
    rating: '5.0',
    classesCount: 42,
    subscribersCount: 0,
    pricingTiers: {
      halakah: { price: 'Rp 199.000 / bln', name: 'VIP Halakah Ushul Fiqh', schedule: 'Setiap Sabtu 20:00 WIB', liveSessionCount: '4x Live / Bln' },
      mentorship: { price: 'Rp 1.250.000 / bln', name: 'Private 1-on-1 Takhassus', quota: 'Max 10 Santri/Bln', benefits: 'Private Talaqqi + Q&A Fatwa Personal' },
      lifetime: { price: 'Rp 3.500.000', name: 'Executive Ilmiyah Pass', benefits: 'Akses Semua Rekaman + Sanad Ijazah Bersertifikat' }
    },
    documents: [
      { id: 'doc-1', name: 'Ijazah_Sanad_Ushul_Madinah.pdf', type: 'sanad', size: '2.4 MB', isVerified: true, date: '28 Sep 2026' }
    ],
    bankDetails: {
      bankName: 'BSI (Bank Syariah Indonesia)',
      accNumber: '7148892301',
      accName: 'Tariq Al-Madani',
      mayarId: 'mayar.id/sheikhtariq',
      isMayarConnected: true
    },
    bio: "Dosen tamu di berbagai ma'had 'aly dan pemegang sanad muttashil fiqh serta ushul fiqh dari Masyayikh Masjid Nabawi Madinah.",
    sanadLineage: "Sanad Fiqh Syafi'i melalui Syaikh Muhammad bin Ali Al-Khatib Al-Makki.",
    onboardingNote: "Pengajuan kurikulum halakah mingguan fokus pada Matn Al-Waraqat."
  };

  const toggleSelectVipCheckbox = (id) => {
    setSelectedVipCheckboxes(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllVip = () => {
    if (selectedVipCheckboxes.length === vipTeachersList.length) {
      setSelectedVipCheckboxes([]);
    } else {
      setSelectedVipCheckboxes(vipTeachersList.map(t => t.id));
    }
  };

  // Quick Action Handlers for VIP Teachers
  const handleApproveTeacher = (teacherId) => {
    setVipTeachersList(prev => prev.map(t => {
      if (t.id === teacherId) {
        return {
          ...t,
          status: 'Approved VIP',
          statusType: 'approved',
          onboardingNote: `Telah disetujui sebagai VIP Mentor pada ${new Date().toLocaleDateString('id-ID')}. Bagi hasil platform ${platformTakeRate}%.`
        };
      }
      return t;
    }));
    setIsApproveVipModalOpen(false);
    alert('Alhamdulillah! Status Guru VIP berhasil disetujui & badge VIP resmi diterbitkan.');
  };

  const handleVerifySanad = (teacherId) => {
    setVipTeachersList(prev => prev.map(t => {
      if (t.id === teacherId) {
        return {
          ...t,
          status: 'Sanad Verified',
          statusType: 'verified',
          documents: t.documents.map(d => ({ ...d, isVerified: true }))
        };
      }
      return t;
    }));
    alert('Sanad & ijazah guru telah berhasil ditandai Terverifikasi Valid.');
  };

  const handleRequestRevision = (teacherId, notes) => {
    setVipTeachersList(prev => prev.map(t => {
      if (t.id === teacherId) {
        return {
          ...t,
          status: 'Needs Revision',
          statusType: 'revision',
          onboardingNote: notes || 'Perlu melengkapi dokumen sanad dan detail kurikulum halakah.'
        };
      }
      return t;
    }));
    setIsRevisionVipModalOpen(false);
    alert('Permintaan revisi berhasil dikirimkan ke Ustadz/Pengajar.');
  };

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* 1. TOP NAVBAR (Matching media_1790730977291.jpg & media_1790731145724.jpg) */}
      <header className="shrink-0 z-40 bg-white border-b border-gray-200/90 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={onBackToHome}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#114B44] to-[#0A302B] flex items-center justify-center shadow-xs">
            <svg className="w-5 h-5 text-[#E6F4F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M12 6c1.5-1.5 3-1.5 4.5 0" strokeLinecap="round" />
              <circle cx="12" cy="11" r="2" fill="currentColor" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-[#0F172A]">IlmHub</span>
            <p className="text-[9px] text-gray-400 font-medium -mt-0.5">Learn • Teach • Grow</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search users, classes, or anything..."
              className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Notifications Bell with 5 badge */}
          <button 
            onClick={() => alert('Notifikasi Admin: 5 tiket dukungan baru menunggu respon!')}
            className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* Messages */}
          <button 
            onClick={() => setActiveNav('messages')}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <button 
            onClick={() => alert('Language: English / العربية')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>English</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {/* User Profile Capsule */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-2 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shadow-2xs shrink-0">
                <img 
                  src={adminAvatar} 
                  alt={adminName} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                />
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-xs font-extrabold text-gray-900 leading-tight">{adminName}</span>
                <span className="block text-[10px] text-gray-400 font-bold -mt-0.5">{adminRole}</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                <div className="p-3 bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-xl mb-2 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-white/20 border border-white/30 shrink-0">
                    <img src={adminAvatar} alt={adminName} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-xs text-white truncate">{adminName}</h4>
                    <p className="text-[10px] text-gray-300 truncate">{adminEmail}</p>
                    <span className="inline-block mt-0.5 text-[9px] font-black px-2 py-0.2 bg-emerald-500 text-white rounded-full">
                      👑 Super Admin
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('teacher');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-[#114B44]" />
                      <span>Switch to Teacher Mode</span>
                    </button>
                  )}

                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('student');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-[#114B44]" />
                      <span>Switch to Student Mode</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      onBackToHome();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-gray-50 text-gray-700 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                    <span>Back to Public Site</span>
                  </button>

                  <div className="my-1 border-t border-gray-100"></div>

                  {onLogout && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-rose-50 text-rose-600 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. MAIN DASHBOARD LAYOUT: Dark Left Sidebar + Spacious Scrollable Canvas */}
      <div className="flex-1 flex overflow-hidden w-full max-w-[1750px] mx-auto">
        
        {/* DARK THEMED LEFT SIDEBAR (Matching media_1790731145724.jpg) */}
        <aside className="w-60 lg:w-64 bg-[#0A1822] text-gray-300 p-3.5 shrink-0 hidden md:flex flex-col justify-between h-full overflow-y-auto no-scrollbar select-none">
          <div className="space-y-4">
            
            {/* ADMIN PANEL SECTION */}
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-black uppercase tracking-wider text-gray-400 block pb-1">
                Admin Panel
              </span>

              {adminNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black shrink-0 ${
                        isActive
                          ? 'bg-amber-400 text-amber-950 shadow-xs'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Expandable Content Management */}
              <button
                onClick={() => setContentManagementOpen(!contentManagementOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-gray-400" />
                  <span>Content Management</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${contentManagementOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Expandable Settings */}
              <button
                onClick={() => setSettingsMenuOpen(!settingsMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span>Settings</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${settingsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* SYSTEM SECTION */}
            <div className="space-y-1 pt-2 border-t border-white/10">
              <span className="px-3 text-[10px] font-black uppercase tracking-wider text-gray-400 block pb-1">
                System
              </span>

              {systemNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </aside>

        {/* 3. SPACIOUS RIGHT MAIN CONTENT */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 pb-24">
          
          {/* ========================================================= */}
          {/* VIEW 1: USERS ROOM (MATCHING media_1790731145724.jpg)      */}
          {/* ========================================================= */}
          {/* ========================================================= */}
          {/* VIEW 0: VIP TEACHERS & APPROVALS ROOM (Pendaftaran Guru VIP) */}
          {/* ========================================================= */}
          {activeNav === 'vip-teachers' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP VIP TEACHERS HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight whitespace-nowrap">VIP Teachers & Approvals</h1>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300/80 flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>VIP Onboarding</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Verifikasi pendaftaran guru VIP, keabsahan sanad keilmuan, paket mentorship, dan atur bagi hasil platform.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddVipModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <UserPlus className="w-4 h-4 shrink-0" />
                    <span>+ Onboard Guru VIP</span>
                  </button>

                  <button
                    onClick={() => {
                      const rate = prompt('Masukkan persentase komisi platform IlmuHub (%):', platformTakeRate);
                      if (rate !== null && !isNaN(rate) && rate >= 0 && rate <= 50) {
                        setPlatformTakeRate(Number(rate));
                        alert(`Bagi hasil platform berhasil diatur menjadi ${rate}% (Guru menerima ${100 - Number(rate)}%)`);
                      }
                    }}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Sliders className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Komisi Platform: {platformTakeRate}%</span>
                  </button>

                  <button 
                    onClick={() => setIsExportModalOpen(true)}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                    title="Ekspor CSV"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR VIP TEACHERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Registered Teachers */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Total Guru Terdaftar</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-blue-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-blue-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-blue-300 rounded-full h-4"></div>
                      <div className="w-1.5 bg-blue-400 rounded-full h-6"></div>
                      <div className="w-1.5 bg-blue-600 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">1,248</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">+8% dari bulan lalu</span>
                    </div>
                  </div>
                </div>

                {/* VIP Mentors Approved */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">VIP Mentors Aktif</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-amber-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-amber-200 rounded-full h-4"></div>
                      <div className="w-1.5 bg-amber-300 rounded-full h-5.5"></div>
                      <div className="w-1.5 bg-amber-400 rounded-full h-7"></div>
                      <div className="w-1.5 bg-amber-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">342</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">+28% pertumbuhan VIP</span>
                    </div>
                  </div>
                </div>

                {/* Pending VIP Applications */}
                <div className="bg-white rounded-2xl border border-amber-200/90 bg-gradient-to-br from-white to-amber-50/40 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs animate-pulse">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-900 truncate">Menunggu Review</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-200 text-amber-900 border border-amber-300 shrink-0">
                      Action
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-amber-900 tracking-tight leading-none">24 Pengajuan</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700 mt-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                      <span className="truncate">Butuh verifikasi sanad & kurikulum</span>
                    </div>
                  </div>
                </div>

                {/* VIP Mentorship GMV & Platform Fee */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100/80">
                        <Coins className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Total GMV Mentorship</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-emerald-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-emerald-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-emerald-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">Rp 184.500.000</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 mt-2">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span className="truncate">Komisi Admin: Rp 27.675.000 ({platformTakeRate}%)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. MAIN SECTION: Two-Column Layout (70% Table & CRM on Left, 30% Sticky Dossier on Right) */}
              <div className="flex flex-col xl:flex-row gap-5 items-start">
                
                {/* LEFT MAIN AREA: TAB SWITCHER, SEARCH, TABLE & PAGINATION (70%) */}
                <div className="flex-1 w-full min-w-0 space-y-4">
                  
                  {/* Status Tabs Switcher */}
                  <div className="bg-white p-1 rounded-2xl border border-gray-200/90 shadow-2xs flex flex-wrap items-center gap-1">
                    {[
                      { id: 'all', label: 'Semua Pendaftar', count: vipTeachersList.length },
                      { id: 'pending', label: 'Menunggu Review', count: vipTeachersList.filter(t => t.status === 'Pending Review').length, color: 'text-amber-600' },
                      { id: 'verified', label: 'Sanad Terverifikasi', count: vipTeachersList.filter(t => t.status === 'Sanad Verified').length, color: 'text-blue-600' },
                      { id: 'approved', label: 'VIP Aktif', count: vipTeachersList.filter(t => t.status === 'Approved VIP').length, color: 'text-emerald-600' },
                      { id: 'revision', label: 'Butuh Revisi', count: vipTeachersList.filter(t => t.status === 'Needs Revision').length, color: 'text-rose-600' },
                    ].map((tab) => {
                      const isActive = vipTabFilter === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setVipTabFilter(tab.id)}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#114B44] text-white shadow-xs'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search and Multi-Filter Bar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-3">
                    <div className="flex flex-col md:flex-row gap-2.5 items-center justify-between">
                      {/* Search input */}
                      <div className="relative w-full md:flex-1">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={vipSearchQuery}
                          onChange={(e) => setVipSearchQuery(e.target.value)}
                          placeholder="Cari nama ustadz, sanad, universitas, atau bidang keilmuan..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>

                      {/* Dropdown Filters */}
                      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {/* Filter by Subject */}
                        <select
                          value={vipSubjectFilter}
                          onChange={(e) => setVipSubjectFilter(e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs focus:outline-none cursor-pointer"
                        >
                          <option value="All Subjects">Semua Bidang Keilmuan</option>
                          <option value="Ushul Fiqh & Qawaid Fiqhiyyah">Ushul Fiqh & Qawaid</option>
                          <option value="Tahsin Bersanad Qira'at Ashim">Tahsin & Qira'at</option>
                          <option value="Islamic Wealth & Sharia FinTech">Islamic FinTech & Muamalah</option>
                          <option value="Nahwu Shorof & Alfiyyah Ibn Malik">Nahwu Shorof & Balaghah</option>
                          <option value="Musthalah Hadits & Takhrij Sanad">Hadits & Takhrij</option>
                          <option value="Tazkiyatun Nafs & Parenting Islami">Tazkiyatun Nafs</option>
                        </select>

                        {/* Filter by Tier */}
                        <select
                          value={vipTierFilter}
                          onChange={(e) => setVipTierFilter(e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs focus:outline-none cursor-pointer"
                        >
                          <option value="All Tiers">Semua Tier Ditawarkan</option>
                          <option value="halakah">VIP Halakah Rutin</option>
                          <option value="mentorship">1-on-1 Private Mentorship</option>
                          <option value="lifetime">Executive Lifetime Pass</option>
                        </select>
                      </div>
                    </div>

                    {/* Batch Selection Bar (if any checkboxes checked) */}
                    {selectedVipCheckboxes.length > 0 && (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 animate-fadeIn font-bold">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-amber-700" />
                          <span>{selectedVipCheckboxes.length} Pengajuan Pengajar Dipilih</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              selectedVipCheckboxes.forEach(id => handleApproveTeacher(id));
                              setSelectedVipCheckboxes([]);
                            }}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                          >
                            Setujui Masal (Bulk Approve)
                          </button>
                          <button
                            onClick={() => {
                              selectedVipCheckboxes.forEach(id => handleRequestRevision(id, 'Perlu perbaikan kelengkapan berkas sanad.'));
                              setSelectedVipCheckboxes([]);
                            }}
                            className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                          >
                            Minta Revisi Masal
                          </button>
                          <button
                            onClick={() => setSelectedVipCheckboxes([])}
                            className="p-1 hover:bg-amber-100 rounded text-amber-700 cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* VIP TEACHERS CRM TABLE */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[980px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                            <th className="p-3.5 pl-4 w-10">
                              <input
                                type="checkbox"
                                checked={selectedVipCheckboxes.length === vipTeachersList.length && vipTeachersList.length > 0}
                                onChange={toggleSelectAllVip}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-3 min-w-[200px]">Guru / Ustadz</th>
                            <th className="py-3.5 px-3 min-w-[200px]">Spesialisasi & Sanad</th>
                            <th className="py-3.5 px-3 min-w-[190px]">Tarif VIP Diajukan</th>
                            <th className="py-3.5 px-3 min-w-[180px]">Berkas & Bukti</th>
                            <th className="py-3.5 px-3 min-w-[140px]">Status Pengajuan</th>
                            <th className="py-3.5 px-3 text-right pr-4 min-w-[120px]">Aksi Cepat</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {vipTeachersList
                            .filter((t) => {
                              if (vipTabFilter === 'pending') return t.status === 'Pending Review';
                              if (vipTabFilter === 'verified') return t.status === 'Sanad Verified';
                              if (vipTabFilter === 'approved') return t.status === 'Approved VIP';
                              if (vipTabFilter === 'revision') return t.status === 'Needs Revision';
                              return true;
                            })
                            .filter((t) => {
                              if (vipSubjectFilter !== 'All Subjects') return t.specialty === vipSubjectFilter;
                              return true;
                            })
                            .filter((t) => {
                              if (!vipSearchQuery) return true;
                              const q = vipSearchQuery.toLowerCase();
                              return (
                                t.name.toLowerCase().includes(q) ||
                                t.email.toLowerCase().includes(q) ||
                                t.specialty.toLowerCase().includes(q) ||
                                t.credentials.toLowerCase().includes(q) ||
                                t.location.toLowerCase().includes(q)
                              );
                            })
                            .map((teacher) => {
                              const isSelected = selectedVipTeacherId === teacher.id;
                              const isChecked = selectedVipCheckboxes.includes(teacher.id);

                              return (
                                <tr
                                  key={teacher.id}
                                  onClick={() => setSelectedVipTeacherId(teacher.id)}
                                  className={`transition-colors cursor-pointer group ${
                                    isSelected
                                      ? 'bg-amber-50/50'
                                      : 'hover:bg-gray-50/80'
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="p-3.5 pl-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleSelectVipCheckbox(teacher.id)}
                                      className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Teacher Column */}
                                  <td className="py-3 px-3">
                                    <div className="flex items-center gap-3">
                                      <div className="relative shrink-0">
                                        <img
                                          src={teacher.avatar}
                                          alt={teacher.name}
                                          className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                          onError={(e) => {
                                            e.target.src = '/images/tutor_ahmed.jpg';
                                          }}
                                        />
                                        {teacher.status === 'Approved VIP' && (
                                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full text-white flex items-center justify-center text-[8px] font-black shadow-xs">
                                            ★
                                          </div>
                                        )}
                                      </div>
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span className="font-extrabold text-gray-900 group-hover:text-[#114B44] transition-colors truncate whitespace-nowrap">
                                            {teacher.name}
                                          </span>
                                        </div>
                                        <div className="text-[11px] text-gray-500 truncate flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                                          <span>{teacher.location}</span>
                                          <span>•</span>
                                          <span className="text-gray-400 font-mono text-[10px]">{teacher.phone}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Specialty & Sanad Column */}
                                  <td className="py-3 px-3">
                                    <div className="space-y-1">
                                      <span className="inline-block px-2 py-0.5 rounded-md font-bold text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 whitespace-nowrap">
                                        {teacher.specialty}
                                      </span>
                                      <p className="text-[11px] text-gray-600 truncate font-medium max-w-[200px]" title={teacher.credentials}>
                                        {teacher.credentials}
                                      </p>
                                    </div>
                                  </td>

                                  {/* Proposed VIP Pricing */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="space-y-1 text-[11px]">
                                      <div className="font-extrabold text-gray-900 flex items-center gap-1.5 whitespace-nowrap">
                                        <span className="text-gray-400 font-normal">Halakah:</span>
                                        <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono font-bold">{teacher.pricingTiers.halakah.price}</span>
                                      </div>
                                      <div className="text-gray-700 font-semibold flex items-center gap-1.5 whitespace-nowrap">
                                        <span className="text-gray-400 font-normal">1-on-1:</span>
                                        <span className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 font-mono font-bold">{teacher.pricingTiers.mentorship.price}</span>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Documents & Sanad Badge */}
                                  <td className="py-3 px-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex flex-wrap gap-1.5 items-center max-w-[200px]">
                                      {teacher.documents.map((doc) => (
                                        <button
                                          key={doc.id}
                                          onClick={() => {
                                            setActiveDocPreview({ ...doc, teacherName: teacher.name });
                                            setIsDocViewerModalOpen(true);
                                          }}
                                          className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                                            doc.isVerified
                                              ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                                              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                                          }`}
                                          title={`Lihat ${doc.name}`}
                                        >
                                          <FileCheck className="w-3 h-3 text-blue-600 shrink-0" />
                                          <span className="truncate max-w-[85px]">{doc.name}</span>
                                        </button>
                                      ))}
                                    </div>
                                  </td>

                                  {/* Status Column */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    {teacher.status === 'Approved VIP' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                        <span>VIP Aktif</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Sanad Verified' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                                        <ShieldCheck className="w-3 h-3 text-blue-600 shrink-0" />
                                        <span>Sanad Valid</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Pending Review' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200 whitespace-nowrap">
                                        <Clock className="w-3 h-3 text-amber-600 shrink-0" />
                                        <span>Menunggu Review</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Needs Revision' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200 whitespace-nowrap">
                                        <AlertCircle className="w-3 h-3 text-rose-600 shrink-0" />
                                        <span>Butuh Revisi</span>
                                      </span>
                                    )}
                                  </td>

                                  {/* Quick Actions Column */}
                                  <td className="py-3 px-3 text-right pr-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1">
                                      {teacher.status !== 'Approved VIP' && (
                                        <button
                                          onClick={() => {
                                            setTargetVipTeacher(teacher);
                                            setIsApproveVipModalOpen(true);
                                          }}
                                          className="p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                          title="Setujui sebagai VIP Mentor"
                                        >
                                          <Check className="w-3.5 h-3.5" />
                                        </button>
                                      )}

                                      <button
                                        onClick={() => {
                                          setTargetVipTeacher(teacher);
                                          setIsScheduleVipModalOpen(true);
                                        }}
                                        className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                        title="Jadwalkan Interview Sanad"
                                      >
                                        <Calendar className="w-3.5 h-3.5" />
                                      </button>

                                      <button
                                        onClick={() => {
                                          setTargetVipTeacher(teacher);
                                          setIsRevisionVipModalOpen(true);
                                        }}
                                        className="p-1.5 hover:bg-gray-100 text-gray-600 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                        title="Minta Revisi Dokumen"
                                      >
                                        <Edit3 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination Footer */}
                    <div className="p-3.5 border-t border-gray-100 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 font-semibold">
                      <div className="flex items-center gap-1">
                        <span>Menampilkan</span>
                        <span className="font-extrabold text-gray-900">1-{vipTeachersList.length}</span>
                        <span>dari</span>
                        <span className="font-extrabold text-gray-900">24 Pengajuan VIP</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button className="px-2.5 py-1 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold disabled:opacity-50 cursor-pointer">
                          &lt;
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-[#114B44] text-white font-bold cursor-pointer">
                          1
                        </button>
                        <button className="px-3 py-1 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold cursor-pointer">
                          2
                        </button>
                        <button className="px-2.5 py-1 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold cursor-pointer">
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT STICKY DOSSIER PANEL: SELECTED TEACHER APPLICATION DEEP-DIVE (30%) */}
                <aside className="w-full xl:w-96 shrink-0 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-5 animate-fadeIn">
                  
                  {/* Selected Teacher Header Profile */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={currentSelectedVipTeacher.avatar}
                          alt={currentSelectedVipTeacher.name}
                          className="w-13 h-13 rounded-2xl object-cover border-2 border-[#114B44]/20 shadow-xs"
                          onError={(e) => {
                            e.target.src = '/images/tutor_ahmed.jpg';
                          }}
                        />
                        {currentSelectedVipTeacher.status === 'Approved VIP' ? (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full text-white flex items-center justify-center text-[10px] font-black border-2 border-white shadow-xs" title="Verified VIP Mentor">
                            ★
                          </div>
                        ) : (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="font-extrabold text-sm text-gray-900 leading-tight">
                          {currentSelectedVipTeacher.name}
                        </h2>
                        <p className="text-gray-500 text-xs truncate max-w-[170px]">{currentSelectedVipTeacher.email}</p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                            currentSelectedVipTeacher.status === 'Approved VIP'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : currentSelectedVipTeacher.status === 'Sanad Verified'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : currentSelectedVipTeacher.status === 'Pending Review'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}>
                            <span>{currentSelectedVipTeacher.status}</span>
                          </span>
                          <span className="text-[10px] font-bold text-gray-400">
                            ★ {currentSelectedVipTeacher.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setTargetVipTeacher(currentSelectedVipTeacher);
                        setIsRevisionVipModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                      title="Kirim Catatan / Feedback"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 4 Detail Sub-Tabs */}
                  <div className="flex items-center justify-between border-b border-gray-100 text-xs font-bold text-gray-500">
                    {[
                      { id: 'dossier', label: 'Dossier & Bio' },
                      { id: 'tiers', label: 'Paket & Tarif' },
                      { id: 'documents', label: 'Sanad & Dokumen' },
                      { id: 'financials', label: 'Bank & Payout' },
                    ].map((tab) => {
                      const isActive = selectedVipDetailTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedVipDetailTab(tab.id)}
                          className={`pb-2.5 transition-colors cursor-pointer relative ${
                            isActive ? 'text-[#114B44] font-extrabold' : 'hover:text-gray-900'
                          }`}
                        >
                          <span>{tab.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* TAB 1: DOSSIER & BIO */}
                  {selectedVipDetailTab === 'dossier' && (
                    <div className="space-y-3.5 text-xs animate-fadeIn">
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1">
                        <span className="text-[10px] font-bold uppercase text-gray-400 block">Biografi & Pengantar</span>
                        <p className="text-gray-700 leading-relaxed text-[11px] font-medium">
                          {currentSelectedVipTeacher.bio}
                        </p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-gray-400 font-bold shrink-0">Gelar & Asal Univ:</span>
                          <span className="font-extrabold text-gray-900 text-right">{currentSelectedVipTeacher.credentials}</span>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-gray-400 font-bold shrink-0">Silsilah Sanad:</span>
                          <span className="font-semibold text-emerald-800 text-right text-[11px]">{currentSelectedVipTeacher.sanadLineage}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">Pengalaman:</span>
                          <span className="font-bold text-gray-800">{currentSelectedVipTeacher.experience}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">Tanggal Pengajuan:</span>
                          <span className="font-bold text-gray-800">{currentSelectedVipTeacher.submittedDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">Subscribers Aktif:</span>
                          <span className="font-extrabold text-emerald-700">{currentSelectedVipTeacher.subscribersCount} Santri VIP</span>
                        </div>
                      </div>

                      {/* Onboarding Admin Note */}
                      <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 font-medium">
                        <span className="font-bold block mb-0.5 text-amber-950">📌 Catatan Verifikasi:</span>
                        {currentSelectedVipTeacher.onboardingNote}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PAKET VIP & TARIF */}
                  {selectedVipDetailTab === 'tiers' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      {/* Tier 1: Halakah */}
                      <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-emerald-950 text-xs">Tier 1: VIP Halakah</span>
                          <span className="font-black text-emerald-700 text-xs">{currentSelectedVipTeacher.pricingTiers.halakah.price}</span>
                        </div>
                        <p className="text-[11px] text-emerald-900 font-semibold">{currentSelectedVipTeacher.pricingTiers.halakah.name}</p>
                        <div className="text-[10px] text-emerald-700 font-medium flex items-center justify-between pt-1 border-t border-emerald-100">
                          <span>Jadwal: {currentSelectedVipTeacher.pricingTiers.halakah.schedule}</span>
                          <span className="font-bold">{currentSelectedVipTeacher.pricingTiers.halakah.liveSessionCount}</span>
                        </div>
                      </div>

                      {/* Tier 2: 1-on-1 Mentorship */}
                      <div className="p-3 rounded-xl border border-blue-200 bg-blue-50/40 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-blue-950 text-xs">Tier 2: Private 1-on-1</span>
                          <span className="font-black text-blue-700 text-xs">{currentSelectedVipTeacher.pricingTiers.mentorship.price}</span>
                        </div>
                        <p className="text-[11px] text-blue-900 font-semibold">{currentSelectedVipTeacher.pricingTiers.mentorship.name}</p>
                        <div className="text-[10px] text-blue-700 font-medium flex items-center justify-between pt-1 border-t border-blue-100">
                          <span>Kuota: {currentSelectedVipTeacher.pricingTiers.mentorship.quota}</span>
                          <span className="font-bold truncate max-w-[120px]">{currentSelectedVipTeacher.pricingTiers.mentorship.benefits}</span>
                        </div>
                      </div>

                      {/* Tier 3: Lifetime Pass */}
                      <div className="p-3 rounded-xl border border-purple-200 bg-purple-50/40 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-purple-950 text-xs">Tier 3: Lifetime Pass</span>
                          <span className="font-black text-purple-700 text-xs">{currentSelectedVipTeacher.pricingTiers.lifetime.price}</span>
                        </div>
                        <p className="text-[11px] text-purple-900 font-semibold">{currentSelectedVipTeacher.pricingTiers.lifetime.name}</p>
                        <p className="text-[10px] text-purple-700 font-medium pt-1 border-t border-purple-100">
                          Benefit: {currentSelectedVipTeacher.pricingTiers.lifetime.benefits}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: SANAD & DOKUMEN */}
                  {selectedVipDetailTab === 'documents' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      <div className="space-y-2">
                        {currentSelectedVipTeacher.documents.map((doc) => (
                          <div
                            key={doc.id}
                            className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between gap-2"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <FileCheck className={`w-4 h-4 shrink-0 ${doc.isVerified ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="min-w-0">
                                <p className="font-bold text-gray-900 text-[11px] truncate">{doc.name}</p>
                                <p className="text-[10px] text-gray-400">{doc.size} • Diunggah {doc.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => {
                                  setActiveDocPreview({ ...doc, teacherName: currentSelectedVipTeacher.name });
                                  setIsDocViewerModalOpen(true);
                                }}
                                className="p-1 rounded bg-white border border-gray-200 text-gray-600 hover:text-gray-900 text-[10px] font-bold cursor-pointer"
                              >
                                Lihat
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Sanad Verification Checklist */}
                      <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2 text-[11px]">
                        <span className="font-black text-emerald-950 block">Verifikasi Sanad & Kurikulum:</span>
                        <label className="flex items-center gap-2 text-emerald-900 font-semibold cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded text-[#114B44] focus:ring-[#114B44]" />
                          <span>Sanad muttashil bersambung ke Rasulullah SAW</span>
                        </label>
                        <label className="flex items-center gap-2 text-emerald-900 font-semibold cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded text-[#114B44] focus:ring-[#114B44]" />
                          <span>Ijazah pengajaran resmi dari Masyayikh / Ma'had</span>
                        </label>
                        <label className="flex items-center gap-2 text-emerald-900 font-semibold cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded text-[#114B44] focus:ring-[#114B44]" />
                          <span>Silabus Halakah sesuai aqidah Ahlussunnah</span>
                        </label>
                      </div>

                      <button
                        onClick={() => handleVerifySanad(currentSelectedVipTeacher.id)}
                        className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span>Tandai Semua Sanad Valid</span>
                      </button>
                    </div>
                  )}

                  {/* TAB 4: BANK & PAYOUT */}
                  {selectedVipDetailTab === 'financials' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      <div className="p-3 rounded-xl border border-gray-200 bg-[#F8FAFC] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">Bank Penerima:</span>
                          <span className="font-extrabold text-gray-900">{currentSelectedVipTeacher.bankDetails.bankName}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">No. Rekening:</span>
                          <span className="font-mono font-bold text-gray-800">{currentSelectedVipTeacher.bankDetails.accNumber}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 font-bold">Atas Nama:</span>
                          <span className="font-bold text-gray-800">{currentSelectedVipTeacher.bankDetails.accName}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                          <span className="text-gray-400 font-bold">Mayar.id Handle:</span>
                          <span className="font-bold text-emerald-700 flex items-center gap-1">
                            {currentSelectedVipTeacher.bankDetails.mayarId}
                            {currentSelectedVipTeacher.bankDetails.isMayarConnected && (
                              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Revenue Split Simulation */}
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 space-y-2">
                        <span className="font-black text-emerald-950 block text-xs">Simulasi Bagi Hasil Platform:</span>
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                          <span className="text-emerald-900">Hak Pengajar / Ustadz ({100 - platformTakeRate}%):</span>
                          <span className="font-bold text-emerald-950">85% Masuk Otomatis</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                          <span className="text-emerald-900">Komisi Platform IlmuHub ({platformTakeRate}%):</span>
                          <span className="font-bold text-[#114B44]">{platformTakeRate}% Pemeliharaan Server</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions Section Footer */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {/* Primary Button: Approve VIP */}
                    <button
                      onClick={() => {
                        setTargetVipTeacher(currentSelectedVipTeacher);
                        setIsApproveVipModalOpen(true);
                      }}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>{currentSelectedVipTeacher.status === 'Approved VIP' ? 'Perbarui Pengaturan VIP' : 'Setujui & Terbitkan VIP'}</span>
                    </button>

                    {/* Schedule & Chat Side by Side */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setTargetVipTeacher(currentSelectedVipTeacher);
                          setIsScheduleVipModalOpen(true);
                        }}
                        className="flex items-center justify-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>Jadwal Sanad Call</span>
                      </button>

                      <button
                        onClick={() => {
                          window.open(`https://wa.me/${currentSelectedVipTeacher.phone.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20${encodeURIComponent(currentSelectedVipTeacher.name)},%20kami%20dari%20Tim%20Kurikulum%20IlmuHub...`, '_blank');
                        }}
                        className="flex items-center justify-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chat WhatsApp</span>
                      </button>
                    </div>

                    {/* Request Revision */}
                    <button
                      onClick={() => {
                        setTargetVipTeacher(currentSelectedVipTeacher);
                        setIsRevisionVipModalOpen(true);
                      }}
                      className="w-full bg-rose-50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 py-2 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                      <span>Minta Revisi Berkas / Sanad</span>
                    </button>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'teachers' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP TEACHERS HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Teachers</h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Manage all teachers, their profiles, classes, and performance.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddFacultyModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <Plus className="w-4 h-4 shrink-0" />
                    <span>Add Teacher</span>
                  </button>

                  <button 
                    onClick={() => setIsImportFacultyModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Import Teachers</span>
                  </button>

                  <button 
                    onClick={() => alert('More Options')}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR TEACHERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Teachers */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Total Teachers</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">1,248</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>8% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-blue-100 rounded-full h-4"></div>
                    <div className="w-1.5 bg-blue-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-blue-300 rounded-full h-5"></div>
                    <div className="w-1.5 bg-blue-500 rounded-full h-8"></div>
                    <div className="w-1.5 bg-blue-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Active Teachers */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Active Teachers</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">1,092</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>12% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-emerald-100 rounded-full h-3"></div>
                    <div className="w-1.5 bg-emerald-200 rounded-full h-5"></div>
                    <div className="w-1.5 bg-emerald-300 rounded-full h-7"></div>
                    <div className="w-1.5 bg-emerald-400 rounded-full h-9"></div>
                    <div className="w-1.5 bg-emerald-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Classes Taught */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Classes Taught</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">3,428</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>18% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-purple-100 rounded-full h-4"></div>
                    <div className="w-1.5 bg-purple-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-purple-300 rounded-full h-8"></div>
                    <div className="w-1.5 bg-purple-400 rounded-full h-9"></div>
                    <div className="w-1.5 bg-purple-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Average Rating */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Average Rating</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">4.7 / 5</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>0.3 from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-amber-100 rounded-full h-3"></div>
                    <div className="w-1.5 bg-amber-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-amber-300 rounded-full h-8"></div>
                    <div className="w-1.5 bg-amber-400 rounded-full h-9"></div>
                    <div className="w-1.5 bg-amber-500 rounded-full h-10"></div>
                  </div>
                </div>

              </div>

              {/* 3. MAIN SECTION: Two-Column Layout (70% Table, 30% Right Dossier) */}
              <div className="flex flex-col xl:flex-row gap-5 items-start">
                
                {/* LEFT MAIN AREA: TABS, SEARCH & FILTER + TABLE */}
                <div className="flex-1 w-full min-w-0 space-y-4">
                  
                  {/* Status Filter Tabs (Pills) */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    {[
                      { id: 'all', label: 'All Teachers', count: '1,248' },
                      { id: 'active', label: 'Active', count: '1,092' },
                      { id: 'pending', label: 'Pending', count: '48' },
                      { id: 'inactive', label: 'Inactive', count: '108' },
                    ].map((tab) => {
                      const isActive = teacherTabFilter === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setTeacherTabFilter(tab.id)}
                          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[#114B44] text-white shadow-2xs'
                              : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-700'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span
                            className={`px-2 py-0.2 rounded-full text-[10px] font-black ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search and Dropdowns Row */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-3">
                    <div className="flex flex-col md:flex-row gap-2.5 items-center justify-between">
                      {/* Search input */}
                      <div className="relative w-full md:flex-1">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={teacherSearchQuery}
                          onChange={(e) => setTeacherSearchQuery(e.target.value)}
                          placeholder="Search teachers by name, email, or subject..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
                        />
                      </div>

                      {/* Dropdown Filters */}
                      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        <select
                          value={teacherSubjectFilter}
                          onChange={(e) => setTeacherSubjectFilter(e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs focus:outline-none cursor-pointer"
                        >
                          <option value="All Subjects">All Subjects</option>
                          <option value="Arabic">Arabic</option>
                          <option value="Quran">Quran</option>
                          <option value="Islamic Studies">Islamic Studies</option>
                          <option value="English">English</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Science">Science</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Business">Business</option>
                          <option value="Physics">Physics</option>
                          <option value="Psychology">Psychology</option>
                          <option value="Accounting">Accounting</option>
                        </select>

                        <select
                          value={teacherStatusFilter}
                          onChange={(e) => setTeacherStatusFilter(e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs focus:outline-none cursor-pointer"
                        >
                          <option value="All Status">All Status</option>
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Inactive">Inactive</option>
                        </select>

                        <select
                          value={teacherJoinDateFilter}
                          onChange={(e) => setTeacherJoinDateFilter(e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs focus:outline-none cursor-pointer"
                        >
                          <option value="All Joining Dates">All Joining Dates</option>
                          <option value="2024">Joined 2024</option>
                          <option value="2026">Joined 2026</option>
                        </select>

                        <button
                          onClick={() => alert('Filter options')}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold shadow-2xs cursor-pointer"
                        >
                          <Sliders className="w-3.5 h-3.5 text-gray-500" />
                          <span>Filters</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* TEACHERS CRM TABLE (matching media_1790732606905.jpg) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[920px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                            <th className="p-3 pl-4 w-8">
                              <input
                                type="checkbox"
                                checked={selectedFacultyCheckboxes.length === facultyTeachersList.length && facultyTeachersList.length > 0}
                                onChange={toggleSelectAllFaculty}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3 px-2 w-8 text-gray-400">#</th>
                            <th className="py-3 px-3 min-w-[180px]">Teacher</th>
                            <th className="py-3 px-3 min-w-[210px]">Subject(s)</th>
                            <th className="py-3 px-3 min-w-[80px]">Classes</th>
                            <th className="py-3 px-3 min-w-[80px]">Students</th>
                            <th className="py-3 px-3 min-w-[80px]">Rating</th>
                            <th className="py-3 px-3 min-w-[90px]">Status</th>
                            <th className="py-3 px-3 min-w-[100px]">Join Date</th>
                            <th className="py-3 px-3 text-right pr-4 min-w-[100px]">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {facultyTeachersList
                            .filter((f) => {
                              if (teacherTabFilter === 'active') return f.status === 'Active';
                              if (teacherTabFilter === 'pending') return f.status === 'Pending';
                              if (teacherTabFilter === 'inactive') return f.status === 'Inactive';
                              return true;
                            })
                            .filter((f) => {
                              if (teacherStatusFilter !== 'All Status') return f.status === teacherStatusFilter;
                              return true;
                            })
                            .filter((f) => {
                              if (teacherSubjectFilter !== 'All Subjects') {
                                return f.allSubjects?.includes(teacherSubjectFilter);
                              }
                              return true;
                            })
                            .filter((f) => {
                              if (!teacherSearchQuery) return true;
                              const q = teacherSearchQuery.toLowerCase();
                              return (
                                f.name.toLowerCase().includes(q) ||
                                f.email.toLowerCase().includes(q) ||
                                f.allSubjects?.some(s => s.toLowerCase().includes(q))
                              );
                            })
                            .map((teacher) => {
                              const isSelected = selectedFacultyId === teacher.id;
                              const isChecked = selectedFacultyCheckboxes.includes(teacher.id);

                              return (
                                <tr
                                  key={teacher.id}
                                  onClick={() => setSelectedFacultyId(teacher.id)}
                                  className={`transition-colors cursor-pointer group ${
                                    isSelected
                                      ? 'bg-blue-50/40'
                                      : 'hover:bg-gray-50/80'
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="p-3 pl-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleSelectFacultyCheckbox(teacher.id)}
                                      className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* # Number */}
                                  <td className="py-3 px-2 text-gray-400 font-bold text-xs">
                                    {teacher.number}
                                  </td>

                                  {/* Teacher Column */}
                                  <td className="py-3 px-3">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={teacher.avatar}
                                        alt={teacher.name}
                                        className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                        onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                                      />
                                      <div className="min-w-0">
                                        <div className="font-extrabold text-gray-900 group-hover:text-[#114B44] transition-colors truncate whitespace-nowrap text-xs">
                                          {teacher.name}
                                        </div>
                                        <div className="text-[11px] text-gray-400 truncate mt-0.5 whitespace-nowrap">
                                          {teacher.email}
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Subject(s) Column */}
                                  <td className="py-3 px-3">
                                    <div className="flex flex-wrap gap-1.5 items-center">
                                      {teacher.subjects.map((sub, sIdx) => (
                                        <span
                                          key={sIdx}
                                          className={`px-2 py-0.5 rounded text-[10px] font-bold border whitespace-nowrap ${sub.bg}`}
                                        >
                                          {sub.label}
                                        </span>
                                      ))}
                                    </div>
                                  </td>

                                  {/* Classes */}
                                  <td className="py-3 px-3 font-semibold text-gray-700 whitespace-nowrap text-xs">
                                    {teacher.classesCount}
                                  </td>

                                  {/* Students */}
                                  <td className="py-3 px-3 font-semibold text-gray-700 whitespace-nowrap text-xs">
                                    {teacher.totalStudents}
                                  </td>

                                  {/* Rating */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                                      <span className="font-extrabold text-gray-800 text-xs">{teacher.rating}</span>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    {teacher.status === 'Active' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Active
                                      </span>
                                    )}
                                    {teacher.status === 'Pending' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                        Pending
                                      </span>
                                    )}
                                    {teacher.status === 'Inactive' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                        Inactive
                                      </span>
                                    )}
                                  </td>

                                  {/* Join Date */}
                                  <td className="py-3 px-3 text-gray-500 font-medium whitespace-nowrap text-xs">
                                    {teacher.joinDate}
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3 px-3 text-right pr-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1.5 text-gray-400">
                                      <button
                                        onClick={() => setSelectedFacultyId(teacher.id)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="View Profile"
                                      >
                                        <Eye className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Edit ${teacher.name}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="Edit Teacher"
                                      >
                                        <Edit2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Options for ${teacher.name}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="More Options"
                                      >
                                        <MoreHorizontal className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination matching screenshot */}
                    <div className="p-3.5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 font-semibold">
                      <div>
                        Showing 1 to 10 of 1,248 teachers
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-bold flex items-center justify-center cursor-pointer">
                          &lt;
                        </button>
                        <button className="w-7 h-7 rounded-lg bg-[#114B44] text-white font-bold flex items-center justify-center cursor-pointer shadow-xs">
                          1
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer">
                          2
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer">
                          3
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer">
                          4
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer">
                          5
                        </button>
                        <span className="px-1 text-gray-400">...</span>
                        <button className="px-2 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer">
                          125
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-bold flex items-center justify-center cursor-pointer">
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT TEACHER DOSSIER PANEL (matching media_1790732606905.jpg) */}
                <aside className="w-full xl:w-88 shrink-0 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4 animate-fadeIn">
                  
                  {/* Selected Teacher Header Profile */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={currentSelectedFaculty.avatar}
                        alt={currentSelectedFaculty.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                        onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                      />
                      <div>
                        <h2 className="font-extrabold text-sm text-gray-900 leading-tight">
                          {currentSelectedFaculty.name}
                        </h2>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                          <span>{currentSelectedFaculty.status}</span>
                        </div>
                        <p className="text-gray-400 text-[11px] mt-0.5 truncate max-w-[170px]">{currentSelectedFaculty.subtitle}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Edit profile ${currentSelectedFaculty.name}`)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 4 Detail Sub-Tabs (Profile, Classes, Performance, Documents) */}
                  <div className="flex items-center justify-between border-b border-gray-100 text-xs font-bold text-gray-500">
                    {[
                      { id: 'profile', label: 'Profile' },
                      { id: 'classes', label: 'Classes' },
                      { id: 'performance', label: 'Performance' },
                      { id: 'documents', label: 'Documents' },
                    ].map((tab) => {
                      const isActive = selectedFacultyDetailTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedFacultyDetailTab(tab.id)}
                          className={`pb-2.5 transition-colors cursor-pointer relative ${
                            isActive ? 'text-[#114B44] font-extrabold' : 'hover:text-gray-900'
                          }`}
                        >
                          <span>{tab.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* TAB 1: PROFILE (matching media_1790732606905.jpg) */}
                  {selectedFacultyDetailTab === 'profile' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      
                      {/* Full Name */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <User className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Full Name</span>
                          <span className="font-bold text-gray-900">{currentSelectedFaculty.name}</span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Email</span>
                          <span className="font-semibold text-gray-900">{currentSelectedFaculty.email}</span>
                        </div>
                      </div>

                      {/* Teacher ID */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <CreditCard className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Teacher ID</span>
                          <span className="font-mono font-bold text-gray-900">{currentSelectedFaculty.teacherId}</span>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex flex-col gap-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 font-semibold">Subjects</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {currentSelectedFaculty.allSubjects?.map((sub, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="flex items-start gap-2.5 text-gray-700 pt-1">
                        <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 space-y-1">
                          <span className="text-gray-500 font-semibold block">Bio</span>
                          <p className="text-gray-700 text-[11px] leading-relaxed bg-[#F8FAFC] p-2.5 rounded-xl border border-gray-100 font-medium">
                            {currentSelectedFaculty.bio}
                          </p>
                        </div>
                      </div>

                      {/* Join Date */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Join Date</span>
                          <span className="font-bold text-gray-900">{currentSelectedFaculty.joinDate}</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Status</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {currentSelectedFaculty.status}
                          </span>
                        </div>
                      </div>

                      {/* Total Classes */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Total Classes</span>
                          <span className="font-bold text-gray-900">{currentSelectedFaculty.classesCount}</span>
                        </div>
                      </div>

                      {/* Total Students */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <Users className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Total Students</span>
                          <span className="font-bold text-gray-900">{currentSelectedFaculty.totalStudents}</span>
                        </div>
                      </div>

                      {/* Average Rating */}
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5 fill-amber-500" />
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-gray-500 font-semibold">Average Rating</span>
                          <span className="font-bold text-amber-600">
                            ★ {currentSelectedFaculty.rating} ({currentSelectedFaculty.reviewsCount} reviews)
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: CLASSES */}
                  {selectedFacultyDetailTab === 'classes' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Assigned Classes ({currentSelectedFaculty.classesCount})</span>
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-1">
                        <div className="font-bold text-gray-900">Quranic Arabic Intensive</div>
                        <div className="text-[11px] text-gray-500">142 students • Mon & Wed 19:00</div>
                      </div>
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-1">
                        <div className="font-bold text-gray-900">Tajweed & Tahsin Talaqqi</div>
                        <div className="text-[11px] text-gray-500">142 students • Saturday 10:00</div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: PERFORMANCE */}
                  {selectedFacultyDetailTab === 'performance' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Attendance Rate</span>
                          <span className="font-bold text-emerald-700">98.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Student Satisfaction</span>
                          <span className="font-bold text-gray-900">4.8 / 5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Assignments Graded</span>
                          <span className="font-bold text-gray-900">100% On-time</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: DOCUMENTS */}
                  {selectedFacultyDetailTab === 'documents' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="font-bold text-gray-800">Teaching_Certificate.pdf</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Verified</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons Footer (matching media_1790732606905.jpg) */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {/* Primary Green Button: Send Message */}
                    <button
                      onClick={() => alert(`Kirim pesan ke ${currentSelectedFaculty.name}`)}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <Mail className="w-4 h-4 text-white" />
                      <span>Send Message</span>
                    </button>

                    {/* View Profile & Reset Password Side by Side */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => alert(`View Profile ${currentSelectedFaculty.name}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-gray-500" />
                        <span>View Profile</span>
                      </button>

                      <button
                        onClick={() => alert(`Reset password untuk ${currentSelectedFaculty.email}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Key className="w-3.5 h-3.5 text-gray-500" />
                        <span>Reset Password</span>
                      </button>
                    </div>

                    {/* Deactivate Teacher Outline Red Button */}
                    <button
                      onClick={() => alert(`Non-aktifkan akun pengajar ${currentSelectedFaculty.name}`)}
                      className="w-full bg-rose-50/50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                      <span>Deactivate Teacher</span>
                    </button>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'students' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP STUDENTS HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-[#114B44] flex items-center justify-center shadow-xs shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Students</h1>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300/80 flex items-center gap-1 shrink-0">
                        <Users className="w-3 h-3 text-emerald-700" />
                        <span>8,156 Enrolled</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Kelola seluruh data mahasiswa & santri, pantau progres kurikulum, transkrip nilai, dan keaktifan kelas.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddStudentModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <Plus className="w-4 h-4 shrink-0" />
                    <span>Add Student</span>
                  </button>

                  <button 
                    onClick={() => setIsImportStudentModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Import Students</span>
                  </button>

                  <button 
                    onClick={() => setIsExportModalOpen(true)}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                    title="Export Student List"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR STUDENTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Students */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Total Students</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-blue-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-blue-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-blue-300 rounded-full h-4"></div>
                      <div className="w-1.5 bg-blue-400 rounded-full h-6"></div>
                      <div className="w-1.5 bg-blue-600 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">8,156</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">14% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Active Learners */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Active Learners</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-emerald-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-emerald-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-emerald-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">7,420</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">91% Active Rate</span>
                    </div>
                  </div>
                </div>

                {/* Course Completions */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Certificates Issued</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-purple-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-purple-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-purple-600 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">3,862</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">24% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Average Score / GPA */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Average GPA Score</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-amber-100 rounded-full h-3.5"></div>
                      <div className="w-1.5 bg-amber-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-amber-300 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-amber-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">3.82 <span className="text-xs font-bold text-gray-400">/ 4.0</span></div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">4.2% Mumtaz Rate</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. MAIN 2-COLUMN VIEW: LEFT TABLE + RIGHT DOSSIER PROFILE */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* 3A. LEFT 8-COLS (TABLE & FILTERS) */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Status Pills Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
                    <button
                      onClick={() => setStudentTabFilter('all')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        studentTabFilter === 'all'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      All Students (8,156)
                    </button>
                    <button
                      onClick={() => setStudentTabFilter('active')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        studentTabFilter === 'active'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Active (7,420)
                    </button>
                    <button
                      onClick={() => setStudentTabFilter('graduated')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        studentTabFilter === 'graduated'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Graduated (1,890)
                    </button>
                    <button
                      onClick={() => setStudentTabFilter('inactive')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        studentTabFilter === 'inactive'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Inactive / Cuti (736)
                    </button>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                    
                    {/* Search Input */}
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search student name, email, student ID..."
                        value={studentSearchQuery}
                        onChange={(e) => setStudentSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                      {/* Program Filter */}
                      <div className="relative">
                        <select
                          value={studentProgramFilter}
                          onChange={(e) => setStudentProgramFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-[#114B44] cursor-pointer"
                        >
                          <option value="All Programs">All Programs</option>
                          <option value="Bahasa Arab & Nahwu">Bahasa Arab & Nahwu</option>
                          <option value="Arabic Conversation">Arabic Conversation</option>
                          <option value="Tahsin & Tahfidz">Tahsin & Tahfidz</option>
                          <option value="Fiqih & Muamalah">Fiqih & Muamalah</option>
                          <option value="Tafsir & Ulumul Quran">Tafsir & Ulumul Quran</option>
                          <option value="Hadits & Sunnah">Hadits & Sunnah</option>
                          <option value="Khat & Kaligrafi">Khat & Kaligrafi</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Status Filter */}
                      <div className="relative">
                        <select
                          value={studentStatusFilter}
                          onChange={(e) => setStudentStatusFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-[#114B44] cursor-pointer"
                        >
                          <option value="All Status">All Status</option>
                          <option value="Active">Active</option>
                          <option value="Graduated">Graduated</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Pending">Pending</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Bulk Actions Banner */}
                  {selectedStudentCheckboxes.length > 0 && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-900 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-emerald-700" />
                        <span>{selectedStudentCheckboxes.length} mahasiswa terpilih</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Kirim pesan massal ke ${selectedStudentCheckboxes.length} mahasiswa`)}
                          className="px-3 py-1 bg-white border border-emerald-300 rounded-lg text-emerald-800 hover:bg-emerald-100 cursor-pointer"
                        >
                          Kirim Pengumuman
                        </button>
                        <button
                          onClick={() => alert(`Export ${selectedStudentCheckboxes.length} data mahasiswa terpilih`)}
                          className="px-3 py-1 bg-[#114B44] text-white rounded-lg hover:bg-[#0D3B35] cursor-pointer"
                        >
                          Export Terpilih
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Table of Students */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[880px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                            <th className="p-3.5 pl-4 w-8">
                              <input
                                type="checkbox"
                                checked={selectedStudentCheckboxes.length === studentsList.length && studentsList.length > 0}
                                onChange={toggleSelectAllStudents}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-3 min-w-[210px] whitespace-nowrap">Student Name</th>
                            <th className="py-3.5 px-3 min-w-[170px] whitespace-nowrap">Program & Level</th>
                            <th className="py-3.5 px-3 min-w-[140px] whitespace-nowrap">Progres & GPA</th>
                            <th className="py-3.5 px-3 min-w-[100px] whitespace-nowrap">Attendance</th>
                            <th className="py-3.5 px-3 min-w-[100px] whitespace-nowrap">Status</th>
                            <th className="py-3.5 px-3 min-w-[110px] whitespace-nowrap">Join Date</th>
                            <th className="py-3.5 px-3 text-right pr-4 min-w-[90px] whitespace-nowrap">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {studentsList
                            .filter((s) => {
                              // Tab Filter
                              if (studentTabFilter === 'active' && s.status !== 'Active') return false;
                              if (studentTabFilter === 'graduated' && s.status !== 'Graduated') return false;
                              if (studentTabFilter === 'inactive' && s.status !== 'Inactive' && s.status !== 'Pending') return false;

                              // Program Filter
                              if (studentProgramFilter !== 'All Programs' && !s.program.toLowerCase().includes(studentProgramFilter.toLowerCase())) {
                                return false;
                              }

                              // Status Filter
                              if (studentStatusFilter !== 'All Status' && s.status !== studentStatusFilter) {
                                return false;
                              }

                              // Search Query
                              if (studentSearchQuery.trim()) {
                                const q = studentSearchQuery.toLowerCase();
                                return (
                                  s.name.toLowerCase().includes(q) ||
                                  s.email.toLowerCase().includes(q) ||
                                  s.studentId.toLowerCase().includes(q) ||
                                  s.city.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((student) => {
                              const isSelectedRow = student.id === selectedStudentId;
                              const isChecked = selectedStudentCheckboxes.includes(student.id);

                              return (
                                <tr
                                  key={student.id}
                                  onClick={() => setSelectedStudentId(student.id)}
                                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer ${
                                    isSelectedRow ? 'bg-emerald-50/40 font-semibold' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="p-3.5 pl-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleSelectStudentCheckbox(student.id)}
                                      className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Student Name & ID */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                      {student.avatar ? (
                                        <img
                                          src={student.avatar}
                                          alt={student.name}
                                          className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                        />
                                      ) : (
                                        <div className="w-9 h-9 rounded-full bg-emerald-700 text-white font-black flex items-center justify-center text-xs shrink-0 shadow-2xs">
                                          {student.initials || student.name.substring(0, 2).toUpperCase()}
                                        </div>
                                      )}
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                                          <span className="font-extrabold text-gray-900 text-xs hover:text-[#114B44] whitespace-nowrap">
                                            {student.name}
                                          </span>
                                          {student.vipMentorship && (
                                            <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-amber-100 text-amber-800 border border-amber-300 shrink-0 whitespace-nowrap">
                                              VIP
                                            </span>
                                          )}
                                        </div>
                                        <div className="text-[11px] text-gray-400 font-mono whitespace-nowrap">
                                          {student.studentId} • {student.city}
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Program & Level */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="space-y-0.5">
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                                        {student.program}
                                      </span>
                                      <div className="text-[10px] text-gray-500 font-semibold pl-0.5 whitespace-nowrap">
                                        Level: <span className="text-gray-700 font-bold">{student.level}</span>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Progress & GPA */}
                                  <td className="py-3 px-3 whitespace-nowrap min-w-[130px]">
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between text-[11px] whitespace-nowrap">
                                        <span className="font-bold text-gray-700">{student.progress}%</span>
                                        <span className="font-mono text-emerald-700 font-black">GPA {student.gpa}</span>
                                      </div>
                                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                        <div
                                          className={`h-full rounded-full ${
                                            student.progress === 100
                                              ? 'bg-purple-600'
                                              : student.progress >= 70
                                              ? 'bg-emerald-500'
                                              : 'bg-blue-500'
                                          }`}
                                          style={{ width: `${student.progress}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Attendance */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px] border border-emerald-200 whitespace-nowrap">
                                      {student.attendance}
                                    </span>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    {student.status === 'Active' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                                        Active
                                      </span>
                                    )}
                                    {student.status === 'Graduated' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200 whitespace-nowrap">
                                        Graduated
                                      </span>
                                    )}
                                    {student.status === 'Pending' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 whitespace-nowrap">
                                        Pending
                                      </span>
                                    )}
                                    {student.status === 'Inactive' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 whitespace-nowrap">
                                        Inactive
                                      </span>
                                    )}
                                  </td>

                                  {/* Join Date */}
                                  <td className="py-3 px-3 text-gray-500 font-medium whitespace-nowrap text-xs">
                                    {student.joinDate}
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3 px-3 text-right pr-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1.5 text-gray-400">
                                      <button
                                        onClick={() => setSelectedStudentId(student.id)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="View Student Dossier"
                                      >
                                        <Eye className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Edit data mahasiswa ${student.name}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="Edit Student"
                                      >
                                        <Edit2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Opsi lanjutan untuk ${student.name}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="More Options"
                                      >
                                        <MoreHorizontal className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-3.5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 font-semibold">
                      <div>
                        Showing 1 to 10 of 8,156 students
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 disabled:opacity-50 cursor-pointer">
                          Previous
                        </button>
                        <button className="w-7 h-7 bg-[#114B44] text-white rounded-lg font-bold flex items-center justify-center">
                          1
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          2
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          3
                        </button>
                        <span className="px-1 text-gray-400">...</span>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          816
                        </button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 3B. RIGHT 4-COLS (STUDENT DOSSIER / PROFILE PANEL) */}
                <aside className="lg:col-span-4 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                  
                  {/* Student Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {currentSelectedStudent.avatar ? (
                        <img
                          src={currentSelectedStudent.avatar}
                          alt={currentSelectedStudent.name}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-500/30 shadow-xs"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white font-black flex items-center justify-center text-lg shadow-xs">
                          {currentSelectedStudent.initials || currentSelectedStudent.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-base font-black text-gray-900 leading-tight">
                            {currentSelectedStudent.name}
                          </h2>
                        </div>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">{currentSelectedStudent.studentId}</p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          {currentSelectedStudent.status === 'Active' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Active Student
                            </span>
                          )}
                          {currentSelectedStudent.status === 'Graduated' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                              Alumni / Graduated
                            </span>
                          )}
                          {currentSelectedStudent.status === 'Inactive' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                              Cuti / Inactive
                            </span>
                          )}
                          {currentSelectedStudent.status === 'Pending' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400">
                      <button 
                        onClick={() => alert(`Edit ${currentSelectedStudent.name}`)}
                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                        title="Edit Student Data"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => alert('Options')}
                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 4 Detail Tabs */}
                  <div className="flex border-b border-gray-100 text-xs font-bold text-gray-500 pt-1 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => setSelectedStudentDetailTab('profile')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedStudentDetailTab === 'profile'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => setSelectedStudentDetailTab('courses')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedStudentDetailTab === 'courses'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Classes ({currentSelectedStudent.enrolledCourses})
                    </button>
                    <button
                      onClick={() => setSelectedStudentDetailTab('certificates')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedStudentDetailTab === 'certificates'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Certificates ({currentSelectedStudent.certificates.length})
                    </button>
                    <button
                      onClick={() => setSelectedStudentDetailTab('payments')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedStudentDetailTab === 'payments'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Payments
                    </button>
                  </div>

                  {/* TAB 1: PROFILE */}
                  {selectedStudentDetailTab === 'profile' && (
                    <div className="space-y-3.5 text-xs animate-fadeIn">
                      
                      {/* Bio */}
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100 text-gray-600 text-[11px] leading-relaxed italic">
                        "{currentSelectedStudent.bio}"
                      </div>

                      {/* Contact Info List */}
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5 text-gray-700">
                          <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="truncate">{currentSelectedStudent.email}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-700">
                          <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>{currentSelectedStudent.phone}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-700">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>{currentSelectedStudent.city}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-700">
                          <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>Join: {currentSelectedStudent.joinDate} • Aktif: {currentSelectedStudent.lastActive}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-700 pt-1 border-t border-gray-100">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="text-[11px]">Wali: {currentSelectedStudent.guardian}</span>
                        </div>
                      </div>

                      {/* Performance Mini Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                        <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-gray-200">
                          <div className="text-[10px] text-gray-500 font-bold">Total Nilai / GPA</div>
                          <div className="text-base font-black text-gray-900">{currentSelectedStudent.gpa} / 4.0</div>
                        </div>
                        <div className="p-2.5 bg-[#F8FAFC] rounded-xl border border-gray-200">
                          <div className="text-[10px] text-gray-500 font-bold">Kehadiran Live</div>
                          <div className="text-base font-black text-emerald-700">{currentSelectedStudent.attendance}</div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: COURSES */}
                  {selectedStudentDetailTab === 'courses' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Kelas Terdaftar ({currentSelectedStudent.courses.length})</span>
                      {currentSelectedStudent.courses.map((c, i) => (
                        <div key={i} className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-gray-900">{c.name}</span>
                            <span className="text-[10px] font-extrabold text-[#114B44] bg-emerald-100 px-1.5 py-0.5 rounded">{c.score}</span>
                          </div>
                          <div className="text-[11px] text-gray-500">Pengajar: {c.tutor}</div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${c.progress}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 3: CERTIFICATES */}
                  {selectedStudentDetailTab === 'certificates' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Sertifikat & Ijazah Resmi</span>
                      {currentSelectedStudent.certificates.length === 0 ? (
                        <div className="p-4 bg-gray-50 rounded-xl text-center text-gray-400 font-medium text-xs">
                          Belum ada sertifikat yang diterbitkan.
                        </div>
                      ) : (
                        currentSelectedStudent.certificates.map((cert, idx) => (
                          <div key={idx} className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                                <Award className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 leading-tight">{cert.title}</div>
                                <div className="text-[10px] text-gray-400 font-mono mt-0.5">{cert.code} • {cert.issueDate}</div>
                              </div>
                            </div>
                            <button
                              onClick={() => alert(`Mengunduh berkas sertifikat ${cert.title}`)}
                              className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg cursor-pointer"
                              title="Download PDF"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* TAB 4: PAYMENTS */}
                  {selectedStudentDetailTab === 'payments' && (
                    <div className="space-y-2 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Riwayat Transaksi & SPP</span>
                      {currentSelectedStudent.payments.map((p, pIdx) => (
                        <div key={pIdx} className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900">{p.item}</div>
                            <div className="text-[10px] text-gray-500">{p.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-black text-gray-900">{p.amount}</div>
                            <span className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                              {p.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons Footer */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {/* Send Message */}
                    <button
                      onClick={() => alert(`Buka chat & WhatsApp dengan ${currentSelectedStudent.name} (${currentSelectedStudent.phone})`)}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span>Kirim Pesan / WhatsApp</span>
                    </button>

                    {/* Transkrip & Reset Password */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => alert(`Mencetak Transkrip Akademik Mahasiswa ${currentSelectedStudent.name}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-gray-500" />
                        <span>Transkrip</span>
                      </button>

                      <button
                        onClick={() => alert(`Kirim tautan reset password ke email ${currentSelectedStudent.email}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Key className="w-3.5 h-3.5 text-gray-500" />
                        <span>Reset Sandi</span>
                      </button>
                    </div>

                    {/* Suspend / Deactivate Button */}
                    <button
                      onClick={() => alert(`Status akun santri/mahasiswa ${currentSelectedStudent.name} diubah.`)}
                      className="w-full bg-rose-50/50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Ban className="w-3.5 h-3.5 text-rose-600" />
                      <span>Cuti / Non-aktifkan Santri</span>
                    </button>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'classes' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP CLASSES HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Classes Management</h1>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-300/80 flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        <span>248 Active Classes</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Kelola jadwal kelas talaqqi, data pengajar ustadz/ustadzah, kurikulum modul, dan daftar santri terdaftar.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddClassModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <Plus className="w-4 h-4 shrink-0" />
                    <span>Create Class</span>
                  </button>

                  <button 
                    onClick={() => setIsImportClassesModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Import Classes</span>
                  </button>

                  <button 
                    onClick={() => setIsExportModalOpen(true)}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                    title="Export Class Catalog"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR CLASSES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Total Classes</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-blue-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-blue-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-blue-300 rounded-full h-4"></div>
                      <div className="w-1.5 bg-blue-400 rounded-full h-6"></div>
                      <div className="w-1.5 bg-blue-600 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">248</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">18% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Enrolled Students */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Class Enrollments</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-emerald-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-emerald-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-emerald-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">18,450</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">22% enrollment growth</span>
                    </div>
                  </div>
                </div>

                {/* Live Sessions Completed */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                        <Video className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Live Sessions Held</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-purple-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-purple-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-purple-600 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">1,420</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">98.4% On-time Rate</span>
                    </div>
                  </div>
                </div>

                {/* Average Satisfaction */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 truncate">Class Rating Avg</span>
                    </div>
                    <div className="flex items-end gap-1 h-8 shrink-0">
                      <div className="w-1.5 bg-amber-100 rounded-full h-3.5"></div>
                      <div className="w-1.5 bg-amber-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-amber-300 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-amber-500 rounded-full h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-gray-900 tracking-tight leading-none">4.9 <span className="text-xs font-bold text-gray-400">/ 5.0</span></div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">94% 5-Star Reviews</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. MAIN 2-COLUMN VIEW: LEFT CLASSES TABLE + RIGHT CLASS & STUDENTS DOSSIER */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* 3A. LEFT 8-COLS (TABLE & FILTERS) */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Status Pills Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
                    <button
                      onClick={() => setClassTabFilter('all')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        classTabFilter === 'all'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      All Classes (248)
                    </button>
                    <button
                      onClick={() => setClassTabFilter('active')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        classTabFilter === 'active'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Active / Live (184)
                    </button>
                    <button
                      onClick={() => setClassTabFilter('upcoming')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        classTabFilter === 'upcoming'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Upcoming (42)
                    </button>
                    <button
                      onClick={() => setClassTabFilter('completed')}
                      className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        classTabFilter === 'completed'
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      Archived / Completed (22)
                    </button>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                    
                    {/* Search Input */}
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search class title, instructor name, code..."
                        value={classSearchQuery}
                        onChange={(e) => setClassSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                      {/* Subject Filter */}
                      <div className="relative">
                        <select
                          value={classSubjectFilter}
                          onChange={(e) => setClassSubjectFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-[#114B44] cursor-pointer"
                        >
                          <option value="All Subjects">All Subjects</option>
                          <option value="Nahwu & Shorof">Nahwu & Shorof</option>
                          <option value="Arabic Conversation">Arabic Conversation</option>
                          <option value="Tahsin & Tahfidz">Tahsin & Tahfidz</option>
                          <option value="Fiqih & Usul Fiqh">Fiqih & Usul Fiqh</option>
                          <option value="Tafsir & Ulumul Quran">Tafsir & Ulumul Quran</option>
                          <option value="Hadits & Musthalah">Hadits & Musthalah</option>
                          <option value="Khat & Kaligrafi">Khat & Kaligrafi</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Level Filter */}
                      <div className="relative">
                        <select
                          value={classLevelFilter}
                          onChange={(e) => setClassLevelFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-[#114B44] cursor-pointer"
                        >
                          <option value="All Levels">All Levels</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Bulk Actions Banner */}
                  {selectedClassCheckboxes.length > 0 && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs font-bold text-blue-900 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-blue-700" />
                        <span>{selectedClassCheckboxes.length} kelas terpilih</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Broadcast pengumuman ke ${selectedClassCheckboxes.length} kelas terpilih`)}
                          className="px-3 py-1 bg-white border border-blue-300 rounded-lg text-blue-800 hover:bg-blue-100 cursor-pointer"
                        >
                          Kirim Pengumuman
                        </button>
                        <button
                          onClick={() => alert(`Export data ${selectedClassCheckboxes.length} kelas terpilih`)}
                          className="px-3 py-1 bg-[#114B44] text-white rounded-lg hover:bg-[#0D3B35] cursor-pointer"
                        >
                          Export Jadwal
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Table of Classes */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[860px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                            <th className="p-3.5 pl-4 w-8">
                              <input
                                type="checkbox"
                                checked={selectedClassCheckboxes.length === classesList.length && classesList.length > 0}
                                onChange={toggleSelectAllClasses}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-3">Class Title & Code</th>
                            <th className="py-3.5 px-3">Instructor / Ustadz</th>
                            <th className="py-3.5 px-3">Enrollment / Quota</th>
                            <th className="py-3.5 px-3">Schedule & Format</th>
                            <th className="py-3.5 px-3">Rating</th>
                            <th className="py-3.5 px-3">Status</th>
                            <th className="py-3.5 px-3 text-right pr-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {classesList
                            .filter((c) => {
                              // Tab Filter
                              if (classTabFilter === 'active' && c.status !== 'Active') return false;
                              if (classTabFilter === 'upcoming' && c.status !== 'Upcoming') return false;
                              if (classTabFilter === 'completed' && c.status !== 'Completed') return false;

                              // Subject Filter
                              if (classSubjectFilter !== 'All Subjects' && c.subject !== classSubjectFilter) {
                                return false;
                              }

                              // Level Filter
                              if (classLevelFilter !== 'All Levels' && c.level !== classLevelFilter) {
                                return false;
                              }

                              // Search Query
                              if (classSearchQuery.trim()) {
                                const q = classSearchQuery.toLowerCase();
                                return (
                                  c.title.toLowerCase().includes(q) ||
                                  c.code.toLowerCase().includes(q) ||
                                  c.instructor.name.toLowerCase().includes(q) ||
                                  c.subject.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((cls) => {
                              const isSelectedRow = cls.id === selectedClassId;
                              const isChecked = selectedClassCheckboxes.includes(cls.id);

                              return (
                                <tr
                                  key={cls.id}
                                  onClick={() => setSelectedClassId(cls.id)}
                                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer ${
                                    isSelectedRow ? 'bg-blue-50/40 font-semibold' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="p-3.5 pl-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleSelectClassCheckbox(cls.id)}
                                      className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Class Title & Code */}
                                  <td className="py-3 px-3">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={cls.image}
                                        alt={cls.title}
                                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                                      />
                                      <div className="min-w-0">
                                        <div className="font-extrabold text-gray-900 text-xs hover:text-[#114B44] truncate max-w-[200px]">
                                          {cls.title}
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                          <span className="text-[10px] font-mono text-gray-500 font-bold bg-gray-100 px-1.5 py-0.2 rounded">
                                            {cls.code}
                                          </span>
                                          <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                                            {cls.level}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Instructor / Ustadz */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={cls.instructor.avatar}
                                        alt={cls.instructor.name}
                                        className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0"
                                      />
                                      <div>
                                        <div className="font-bold text-gray-900 text-xs">{cls.instructor.name}</div>
                                        <div className="text-[10px] text-gray-500">{cls.instructor.specialty}</div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Enrollment & Quota */}
                                  <td className="py-3 px-3 whitespace-nowrap min-w-[130px]">
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between text-[11px]">
                                        <span className="font-black text-gray-900">{cls.enrollment} Santri</span>
                                        <span className="text-gray-400 font-semibold">/ {cls.quota} Kuota</span>
                                      </div>
                                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                        <div
                                          className={`h-full rounded-full ${
                                            cls.enrollment >= cls.quota
                                              ? 'bg-amber-500'
                                              : 'bg-emerald-500'
                                          }`}
                                          style={{ width: `${Math.min(100, (cls.enrollment / cls.quota) * 100)}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Schedule & Format */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="space-y-0.5">
                                      <div className="font-bold text-gray-800 text-xs">{cls.schedule}</div>
                                      <div className="text-[10px] text-gray-500 font-medium">{cls.format}</div>
                                    </div>
                                  </td>

                                  {/* Rating */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                                      <span className="font-black text-gray-900 text-xs">{cls.rating}</span>
                                      <span className="text-[10px] text-gray-400 font-semibold">({cls.reviewsCount})</span>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    {cls.status === 'Active' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Live & Active
                                      </span>
                                    )}
                                    {cls.status === 'Upcoming' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                        Upcoming
                                      </span>
                                    )}
                                    {cls.status === 'Completed' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-700 border border-gray-200">
                                        Archived
                                      </span>
                                    )}
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3 px-3 text-right pr-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1.5 text-gray-400">
                                      <button
                                        onClick={() => setSelectedClassId(cls.id)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="View Class Dossier"
                                      >
                                        <Eye className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Edit kelas ${cls.title}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="Edit Class Details"
                                      >
                                        <Edit2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Opsi kelas ${cls.title}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="More Options"
                                      >
                                        <MoreHorizontal className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-3.5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 font-semibold">
                      <div>
                        Showing 1 to 8 of 248 classes
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 disabled:opacity-50 cursor-pointer">
                          Previous
                        </button>
                        <button className="w-7 h-7 bg-[#114B44] text-white rounded-lg font-bold flex items-center justify-center">
                          1
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          2
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          3
                        </button>
                        <span className="px-1 text-gray-400">...</span>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          31
                        </button>
                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 3B. RIGHT 4-COLS (CLASS DOSSIER & STUDENT ROSTER PANEL) */}
                <aside className="lg:col-span-4 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                  
                  {/* Class Thumbnail & Header */}
                  <div className="space-y-3">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xs aspect-video">
                      <img
                        src={currentSelectedClass.image}
                        alt={currentSelectedClass.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-black/70 text-white backdrop-blur-xs">
                          {currentSelectedClass.code}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#114B44] text-white shadow-xs">
                          {currentSelectedClass.price}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                          {currentSelectedClass.subject} • {currentSelectedClass.level}
                        </span>
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-black text-gray-900">{currentSelectedClass.rating}</span>
                        </div>
                      </div>
                      <h2 className="text-base font-black text-gray-900 leading-tight mt-1.5">
                        {currentSelectedClass.title}
                      </h2>
                    </div>
                  </div>

                  {/* Instructor Mini Card */}
                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={currentSelectedClass.instructor.avatar}
                        alt={currentSelectedClass.instructor.name}
                        className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-extrabold text-gray-900 text-xs truncate">
                          {currentSelectedClass.instructor.name}
                        </div>
                        <div className="text-[10px] text-gray-500 font-semibold truncate">
                          {currentSelectedClass.instructor.specialty}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Hubungi ustadz ${currentSelectedClass.instructor.name} via WhatsApp (${currentSelectedClass.instructor.phone})`)}
                      className="p-1.5 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg text-gray-600 shadow-2xs cursor-pointer shrink-0"
                      title="Contact Instructor"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                    </button>
                  </div>

                  {/* 4 Detail Tabs (Overview, Santri, Syllabus, Stats) - Single Row Horizontal Scrollable */}
                  <div className="flex border-b border-gray-100 text-xs font-bold text-gray-500 pt-1 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => setSelectedClassDetailTab('overview')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedClassDetailTab === 'overview'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setSelectedClassDetailTab('students')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedClassDetailTab === 'students'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Santri ({currentSelectedClass.enrolledStudents.length})
                    </button>
                    <button
                      onClick={() => setSelectedClassDetailTab('syllabus')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedClassDetailTab === 'syllabus'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Syllabus
                    </button>
                    <button
                      onClick={() => setSelectedClassDetailTab('grades')}
                      className={`pb-2 px-2.5 sm:px-3 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        selectedClassDetailTab === 'grades'
                          ? 'text-[#114B44] border-b-2 border-[#114B44] font-black'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      Stats
                    </button>
                  </div>

                  {/* TAB 1: OVERVIEW */}
                  {selectedClassDetailTab === 'overview' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {currentSelectedClass.description}
                      </p>

                      <div className="space-y-2 pt-1 border-t border-gray-100">
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="text-gray-500 font-medium">Jadwal Pertemuan</span>
                          <span className="font-bold">{currentSelectedClass.schedule}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="text-gray-500 font-medium">Format Kelas</span>
                          <span className="font-bold">{currentSelectedClass.format}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="text-gray-500 font-medium">Periode Kursus</span>
                          <span className="font-bold">{currentSelectedClass.startDate} - {currentSelectedClass.endDate}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="text-gray-500 font-medium">Progress Pertemuan</span>
                          <span className="font-bold text-emerald-700">{currentSelectedClass.completedSessions} / {currentSelectedClass.totalSessions} Sesi Selesai</span>
                        </div>
                      </div>

                      {/* Live Monitoring Badge */}
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                          </span>
                          <span className="font-bold text-emerald-900 text-xs">Live Classroom Ready</span>
                        </div>
                        <button
                          onClick={() => {
                            if (onNavigateToLive) {
                              onNavigateToLive({
                                title: currentSelectedClass.title,
                                tutor: currentSelectedClass.instructor,
                                image: currentSelectedClass.image
                              });
                            } else {
                              alert(`Masuk memantau ruang kelas live ${currentSelectedClass.title}`);
                            }
                          }}
                          className="px-2.5 py-1 bg-[#114B44] text-white rounded-lg font-bold text-[11px] hover:bg-[#0D3B35] cursor-pointer"
                        >
                          Join Monitor
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: ENROLLED STUDENTS */}
                  {selectedClassDetailTab === 'students' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-bold block">Santri Terdaftar ({currentSelectedClass.enrolledStudents.length})</span>
                        <button
                          onClick={() => setIsEnrollStudentModalOpen(true)}
                          className="text-[11px] font-extrabold text-[#114B44] hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>+ Daftarkan Santri</span>
                        </button>
                      </div>

                      <div className="space-y-2 max-h-64 overflow-y-auto no-scrollbar">
                        {currentSelectedClass.enrolledStudents.map((st, i) => (
                          <div key={i} className="p-2.5 bg-[#F8FAFC] rounded-xl border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-2.5 min-w-0">
                              {st.avatar ? (
                                <img
                                  src={st.avatar}
                                  alt={st.name}
                                  className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs shrink-0">
                                  {st.name.substring(0, 2).toUpperCase()}
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="font-extrabold text-gray-900 truncate text-xs">{st.name}</div>
                                <div className="text-[10px] text-gray-400 font-mono">{st.studentId} • Tugas: {st.submittedAssignments}</div>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="font-black text-[#114B44] text-xs">{st.score}</div>
                              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded">
                                {st.attendance}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: SYLLABUS & MODULES */}
                  {selectedClassDetailTab === 'syllabus' && (
                    <div className="space-y-2.5 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Silabus Kurikulum & Modul</span>
                      {currentSelectedClass.syllabus.map((syl, sIdx) => (
                        <div key={sIdx} className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-gray-900">{syl.module}</span>
                            <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                              syl.status === 'Selesai'
                                ? 'bg-emerald-100 text-emerald-800'
                                : syl.status === 'Sedang Berjalan'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {syl.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-600 leading-snug">{syl.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 4: GRADES & STATS */}
                  {selectedClassDetailTab === 'grades' && (
                    <div className="space-y-3 text-xs animate-fadeIn">
                      <span className="text-gray-500 font-bold block">Statistik & Kinerja Kelas</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                          <div className="text-[10px] text-gray-500 font-bold">Rata-rata Nilai</div>
                          <div className="text-lg font-black text-gray-900 mt-0.5">92.4 <span className="text-xs text-emerald-600 font-bold">(A)</span></div>
                        </div>
                        <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200">
                          <div className="text-[10px] text-gray-500 font-bold">Presensi Kehadiran</div>
                          <div className="text-lg font-black text-emerald-700 mt-0.5">94.8%</div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-200 space-y-2">
                        <div className="flex justify-between text-gray-600 font-medium">
                          <span>Pengumpulan Tugas Tepat Waktu</span>
                          <span className="font-bold text-gray-900">96.2%</span>
                        </div>
                        <div className="flex justify-between text-gray-600 font-medium">
                          <span>Tingkat Kepuasan Ulasan</span>
                          <span className="font-bold text-amber-600">4.9 / 5.0 ⭐</span>
                        </div>
                        <div className="flex justify-between text-gray-600 font-medium">
                          <span>Tingkat Kelulusan Ujian</span>
                          <span className="font-bold text-emerald-700">98.0%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons Footer */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {/* Primary Button: Enter Live Monitoring */}
                    <button
                      onClick={() => {
                        if (onNavigateToLive) {
                          onNavigateToLive({
                            title: currentSelectedClass.title,
                            tutor: currentSelectedClass.instructor,
                            image: currentSelectedClass.image
                          });
                        } else {
                          alert(`Masuk ke live classroom ${currentSelectedClass.title}`);
                        }
                      }}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <Video className="w-4 h-4 text-white" />
                      <span>Masuk Live Classroom (Monitor)</span>
                    </button>

                    {/* Broadcast & Edit Side by Side */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => alert(`Kirim pesan broadcast ke seluruh santri di kelas ${currentSelectedClass.title}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                        <span>Broadcast</span>
                      </button>

                      <button
                        onClick={() => alert(`Edit data kurikulum & jadwal ${currentSelectedClass.title}`)}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                        <span>Edit Kelas</span>
                      </button>
                    </div>

                    {/* Close / Archive Class Outline Red Button */}
                    <button
                      onClick={() => alert(`Status kelas ${currentSelectedClass.title} diarsipkan/ditutup.`)}
                      className="w-full bg-rose-50/50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Ban className="w-3.5 h-3.5 text-rose-600" />
                      <span>Arsipkan / Tutup Kelas</span>
                    </button>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'live' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP LIVE ROOMS HEADER (matching media_1790734764232.jpg) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Live Rooms</h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Manage live classrooms, monitor sessions, and view real-time activity.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsCreateLiveModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <Plus className="w-4 h-4 shrink-0" />
                    <span>Create Live Room</span>
                  </button>

                  <button 
                    onClick={() => setIsScheduleLiveModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Schedule Room</span>
                  </button>

                  <button 
                    onClick={() => alert('Live Room Options')}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR LIVE ROOMS */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 min-w-0">
                
                {/* Live Now */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100/80">
                      <Radio className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-rose-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-rose-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-rose-300 rounded-full h-4"></div>
                      <div className="w-1.5 bg-rose-400 rounded-full h-6"></div>
                      <div className="w-1.5 bg-rose-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Live Now</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">12</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-600 mt-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0"></span>
                      <span className="truncate">3 more than usual</span>
                    </div>
                  </div>
                </div>

                {/* Total Sessions (Today) */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-blue-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-blue-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-blue-300 rounded-full h-4"></div>
                      <div className="w-1.5 bg-blue-400 rounded-full h-6"></div>
                      <div className="w-1.5 bg-blue-600 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Total Sessions (Today)</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">48</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 20% from yesterday</span>
                    </div>
                  </div>
                </div>

                {/* Total Attendees */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-purple-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-purple-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-purple-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Total Attendees</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">2,856</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 28% from yesterday</span>
                    </div>
                  </div>
                </div>

                {/* Average Duration */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-emerald-100 rounded-full h-3"></div>
                      <div className="w-1.5 bg-emerald-200 rounded-full h-5"></div>
                      <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-emerald-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Average Duration</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">52 min</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 12% from last week</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. STATUS FILTER PILLS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold min-w-0">
                <button
                  onClick={() => setLiveTabFilter('all')}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    liveTabFilter === 'all'
                      ? 'bg-[#114B44] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>All Rooms</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                    liveTabFilter === 'all' ? 'bg-emerald-950/60 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>48</span>
                </button>

                <button
                  onClick={() => setLiveTabFilter('live')}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    liveTabFilter === 'live'
                      ? 'bg-[#114B44] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>Live Now</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-700">12</span>
                </button>

                <button
                  onClick={() => setLiveTabFilter('upcoming')}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    liveTabFilter === 'upcoming'
                      ? 'bg-[#114B44] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>Upcoming</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-100 text-blue-700">18</span>
                </button>

                <button
                  onClick={() => setLiveTabFilter('ended')}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    liveTabFilter === 'ended'
                      ? 'bg-[#114B44] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>Ended</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-gray-100 text-gray-600">18</span>
                </button>
              </div>

              {/* 4. MAIN 2-COLUMN VIEW: LEFT TABLE + RIGHT DOSSIER */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start min-w-0">
                
                {/* 4A. LEFT 8-COLS (SEARCH & TABLE) */}
                <div className="lg:col-span-8 space-y-4 min-w-0">
                  
                  {/* Search & Filters Bar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 sm:p-4 shadow-2xs space-y-3 min-w-0">
                    {/* Full Width Search Bar */}
                    <div className="relative w-full min-w-0">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by title, teacher, or subject..."
                        value={liveSearchQuery}
                        onChange={(e) => setLiveSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#114B44] shadow-2xs"
                      />
                    </div>

                    {/* Filter Dropdowns Strip (Smooth Horizontal Side-Scrollable) */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full min-w-0">
                      {/* Subject */}
                      <div className="relative shrink-0">
                        <select
                          value={liveSubjectFilter}
                          onChange={(e) => setLiveSubjectFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Subjects">All Subjects</option>
                          <option value="Islamic Studies">Islamic Studies</option>
                          <option value="English">English</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Arabic">Arabic</option>
                          <option value="Science">Science</option>
                          <option value="History">History</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Environmental">Environmental</option>
                          <option value="Business">Business</option>
                          <option value="Psychology">Psychology</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Teachers */}
                      <div className="relative shrink-0">
                        <select
                          value={liveTeacherFilter}
                          onChange={(e) => setLiveTeacherFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Teachers">All Teachers</option>
                          <option value="Siti Aisyah">Siti Aisyah</option>
                          <option value="Omar Hassan">Omar Hassan</option>
                          <option value="Layla Karim">Layla Karim</option>
                          <option value="Zainab Ali">Zainab Ali</option>
                          <option value="Dr. Ahmad Fauzi">Dr. Ahmad Fauzi</option>
                          <option value="Fatimah Nur">Fatimah Nur</option>
                          <option value="Muhammad Khan">Muhammad Khan</option>
                          <option value="Nadia Rahman">Nadia Rahman</option>
                          <option value="Ali Reza">Ali Reza</option>
                          <option value="Hassan Malik">Hassan Malik</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Status */}
                      <div className="relative shrink-0">
                        <select
                          value={liveStatusFilter}
                          onChange={(e) => setLiveStatusFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Status">All Status</option>
                          <option value="Live">Live</option>
                          <option value="Upcoming">Upcoming</option>
                          <option value="Ended">Ended</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Filter Reset Button */}
                      <button
                        onClick={() => {
                          setLiveSearchQuery('');
                          setLiveSubjectFilter('All Subjects');
                          setLiveTeacherFilter('All Teachers');
                          setLiveStatusFilter('All Status');
                        }}
                        className="py-2 px-3 border border-gray-200 hover:bg-gray-50 rounded-xl text-gray-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0 whitespace-nowrap"
                        title="Reset Filters"
                      >
                        <Sliders className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span>Filters</span>
                      </button>
                    </div>
                  </div>

                  {/* Table of Live Rooms (matching media_1790734764232.jpg) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[880px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider whitespace-nowrap">
                            <th className="p-3.5 pl-4 w-8">
                              <input
                                type="checkbox"
                                checked={selectedLiveCheckboxes.length === liveRoomsList.length && liveRoomsList.length > 0}
                                onChange={toggleSelectAllLive}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-2 w-6 text-gray-400">#</th>
                            <th className="py-3.5 px-3">Room Title</th>
                            <th className="py-3.5 px-3">Teacher</th>
                            <th className="py-3.5 px-3">Subject</th>
                            <th className="py-3.5 px-3">Start Time</th>
                            <th className="py-3.5 px-3">Duration</th>
                            <th className="py-3.5 px-3">Attendees</th>
                            <th className="py-3.5 px-3">Status</th>
                            <th className="py-3.5 px-3 text-right pr-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {liveRoomsList
                            .filter((r) => {
                              // Tab Filter
                              if (liveTabFilter === 'live' && r.status !== 'Live') return false;
                              if (liveTabFilter === 'upcoming' && r.status !== 'Upcoming') return false;
                              if (liveTabFilter === 'ended' && r.status !== 'Ended') return false;

                              // Subject Filter
                              if (liveSubjectFilter !== 'All Subjects' && r.subject !== liveSubjectFilter) {
                                return false;
                              }

                              // Teacher Filter
                              if (liveTeacherFilter !== 'All Teachers' && r.teacher !== liveTeacherFilter) {
                                return false;
                              }

                              // Status Filter
                              if (liveStatusFilter !== 'All Status' && r.status !== liveStatusFilter) {
                                return false;
                              }

                              // Search Query
                              if (liveSearchQuery.trim()) {
                                const q = liveSearchQuery.toLowerCase();
                                return (
                                  r.title.toLowerCase().includes(q) ||
                                  r.subtitle.toLowerCase().includes(q) ||
                                  r.teacher.toLowerCase().includes(q) ||
                                  r.subject.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((room) => {
                              const isSelectedRow = room.id === selectedLiveRoomId;
                              const isChecked = selectedLiveCheckboxes.includes(room.id);

                              return (
                                <tr
                                  key={room.id}
                                  onClick={() => setSelectedLiveRoomId(room.id)}
                                  className={`hover:bg-gray-50/80 transition-colors cursor-pointer ${
                                    isSelectedRow ? 'bg-blue-50/40 font-semibold' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="p-3.5 pl-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleSelectLiveCheckbox(room.id)}
                                      className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Row Number */}
                                  <td className="py-3 px-2 text-gray-400 font-bold text-xs">
                                    {room.number}
                                  </td>

                                  {/* Room Title */}
                                  <td className="py-3 px-3">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={room.image}
                                        alt={room.title}
                                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                                      />
                                      <div className="min-w-0">
                                        <div className="font-extrabold text-gray-900 text-xs hover:text-[#114B44]">
                                          {room.title}
                                        </div>
                                        <div className="text-[11px] text-gray-400 font-medium truncate">
                                          {room.subtitle}
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Teacher */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={room.teacherAvatar}
                                        alt={room.teacher}
                                        className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0"
                                      />
                                      <span className="font-bold text-gray-800 text-xs">{room.teacher}</span>
                                    </div>
                                  </td>

                                  {/* Subject */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold border ${room.subjectBadge}`}>
                                      {room.subject}
                                    </span>
                                  </td>

                                  {/* Start Time */}
                                  <td className="py-3 px-3 text-gray-600 font-medium whitespace-nowrap text-xs">
                                    {room.startTime}
                                  </td>

                                  {/* Duration */}
                                  <td className="py-3 px-3 text-gray-600 font-bold whitespace-nowrap text-xs">
                                    {room.duration}
                                  </td>

                                  {/* Attendees */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    <div className="flex items-center gap-1 text-gray-700 font-bold text-xs">
                                      <Users className="w-3.5 h-3.5 text-gray-400" />
                                      <span>{room.attendees}</span>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3 px-3 whitespace-nowrap">
                                    {room.status === 'Live' && (
                                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
                                        <span>Live</span>
                                      </span>
                                    )}
                                    {room.status === 'Upcoming' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                        Upcoming
                                      </span>
                                    )}
                                    {room.status === 'Ended' && (
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
                                        Ended
                                      </span>
                                    )}
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3 px-3 text-right pr-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1.5 text-gray-400">
                                      <button
                                        onClick={() => setSelectedLiveRoomId(room.id)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="View Live Room Details"
                                      >
                                        <Eye className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Edit ruang kelas live ${room.title}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="Edit Live Room"
                                      >
                                        <Edit2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => alert(`Opsi live room ${room.title}`)}
                                        className="p-1 hover:text-gray-700 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                        title="More Options"
                                      >
                                        <MoreHorizontal className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination matching media_1790734764232.jpg */}
                    <div className="p-3.5 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500 font-semibold">
                      <div>
                        Showing 1 to 10 of 48 live rooms
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="w-7 h-7 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 flex items-center justify-center cursor-pointer">
                          &lt;
                        </button>
                        <button className="w-7 h-7 bg-[#114B44] text-white rounded-lg font-bold flex items-center justify-center">
                          1
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          2
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          3
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          4
                        </button>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          5
                        </button>
                        <span className="px-1 text-gray-400">...</span>
                        <button className="w-7 h-7 hover:bg-gray-100 text-gray-600 rounded-lg font-bold flex items-center justify-center cursor-pointer">
                          48
                        </button>
                        <button className="w-7 h-7 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 flex items-center justify-center cursor-pointer">
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 4B. RIGHT 4-COLS (LIVE ROOM DETAILS & ACTIVITIES - matching media_1790734764232.jpg) */}
                <aside className="lg:col-span-4 space-y-4">
                  
                  {/* SECTION 1: LIVE ROOM DETAILS */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                    
                    {/* Header with View Room link */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-black text-gray-900">Live Room Details</h2>
                      <button
                        onClick={() => {
                          if (onNavigateToLive) {
                            onNavigateToLive({
                              title: currentSelectedLiveRoom.title,
                              tutor: { name: currentSelectedLiveRoom.teacher, avatar: currentSelectedLiveRoom.teacherAvatar },
                              image: currentSelectedLiveRoom.image
                            });
                          }
                        }}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Room</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Image Card with LIVE badge */}
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 aspect-video shadow-2xs">
                      <img
                        src={currentSelectedLiveRoom.image}
                        alt={currentSelectedLiveRoom.title}
                        className="w-full h-full object-cover"
                      />
                      {currentSelectedLiveRoom.status === 'Live' && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-600 text-white flex items-center gap-1 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            <span>LIVE</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-base font-black text-gray-900 leading-tight">
                        {currentSelectedLiveRoom.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {currentSelectedLiveRoom.subtitle}
                      </p>
                    </div>

                    {/* Teacher & Subject Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Teacher</div>
                        <div className="flex items-center gap-2">
                          <img
                            src={currentSelectedLiveRoom.teacherAvatar}
                            alt={currentSelectedLiveRoom.teacher}
                            className="w-6 h-6 rounded-full object-cover border border-gray-200"
                          />
                          <span className="font-bold text-gray-900 text-xs truncate">{currentSelectedLiveRoom.teacher}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Subject</div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold border ${currentSelectedLiveRoom.subjectBadge}`}>
                          {currentSelectedLiveRoom.subject}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Rows */}
                    <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                      <div className="flex items-center justify-between text-gray-700">
                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>Started</span>
                        </div>
                        <span className="font-bold text-gray-900">{currentSelectedLiveRoom.startedTimeText}</span>
                      </div>

                      <div className="flex items-center justify-between text-gray-700">
                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                          <Users className="w-3.5 h-3.5 text-gray-400" />
                          <span>Attendees</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-gray-900">{currentSelectedLiveRoom.attendees}</span>
                          {currentSelectedLiveRoom.status === 'Live' && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              ● Live now
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-gray-700 pt-1">
                        <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-500 font-medium block">Description</span>
                          <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                            {currentSelectedLiveRoom.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Join Room & End Session */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => {
                          if (onNavigateToLive) {
                            onNavigateToLive({
                              title: currentSelectedLiveRoom.title,
                              tutor: { name: currentSelectedLiveRoom.teacher, avatar: currentSelectedLiveRoom.teacherAvatar },
                              image: currentSelectedLiveRoom.image
                            });
                          } else {
                            alert(`Bergabung ke ruang kelas live ${currentSelectedLiveRoom.title}`);
                          }
                        }}
                        className="flex items-center justify-center gap-1.5 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95"
                      >
                        <Video className="w-3.5 h-3.5 text-white" />
                        <span>Join Room</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Akhiri sesi live room ${currentSelectedLiveRoom.title}?`)) {
                            const updated = liveRoomsList.map(r => r.id === currentSelectedLiveRoom.id ? { ...r, status: 'Ended', statusType: 'ended' } : r);
                            setLiveRoomsList(updated);
                            alert(`Sesi live room ${currentSelectedLiveRoom.title} telah berakhir.`);
                          }
                        }}
                        className="flex items-center justify-center gap-1.5 bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 py-2.5 rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-600" />
                        <span>End Session</span>
                      </button>
                    </div>

                  </div>

                  {/* SECTION 2: LIVE ACTIVITY FEED (matching media_1790734764232.jpg) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Live Activity</h3>
                      <button
                        onClick={() => alert('View all real-time activities')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate">Ahmad joined the room</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">2m ago</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate">New message in chat</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">5m ago</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <HelpCircle className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate">Hana asked a question</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">8m ago</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                            <Heart className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate">25 reactions</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">12m ago</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate">Zaid joined the room</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">15m ago</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 min-w-0">
                        <div className="flex items-center gap-2 text-gray-800 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <FileText className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-[11px] truncate" title="File shared: Tajweed_Guide.pdf">File shared: Tajweed_Guide.pdf</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium shrink-0 whitespace-nowrap">18m ago</span>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: QUICK ACTIONS (matching media_1790734764232.jpg) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <h3 className="text-sm font-black text-gray-900">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(window.location.href);
                          alert('Tautan Live Room berhasil disalin ke papan klip!');
                        }}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer min-w-0"
                      >
                        <Copy className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Copy Link</span>
                      </button>

                      <button
                        onClick={() => alert('Buka panel moderasi percakapan live')}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer min-w-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Moderate</span>
                      </button>

                      <button
                        onClick={() => alert(`Kelola ${currentSelectedLiveRoom.attendees} peserta di ${currentSelectedLiveRoom.title}`)}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer min-w-0"
                      >
                        <Users className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Participants</span>
                      </button>

                      <button
                        onClick={() => alert(`Pengaturan ruang live ${currentSelectedLiveRoom.title}`)}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer min-w-0"
                      >
                        <Settings className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Settings</span>
                      </button>
                    </div>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'schedules' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP SCHEDULES HEADER (matching media_1790735024374.png) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Schedules</h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Manage class schedules, view upcoming sessions, and organize time slots.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS FOR SCHEDULES */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 min-w-0">
                
                {/* Total Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100/80">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-blue-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-blue-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-blue-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-blue-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Total Classes</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">248</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 18% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Scheduled Sessions */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100/80">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-emerald-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-emerald-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-emerald-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Scheduled Sessions</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">1,248</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 24% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Active Teachers */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100/80">
                      <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-purple-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-purple-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-purple-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Active Teachers</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">186</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 12% from last month</span>
                    </div>
                  </div>
                </div>

                {/* Total Students */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100/80">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                      <div className="w-1.5 bg-amber-100 rounded-full h-2.5"></div>
                      <div className="w-1.5 bg-amber-200 rounded-full h-4.5"></div>
                      <div className="w-1.5 bg-amber-300 rounded-full h-6"></div>
                      <div className="w-1.5 bg-amber-500 rounded-full h-7 sm:h-8"></div>
                    </div>
                  </div>
                  <div className="mt-3 min-w-0">
                    <span className="text-xs font-bold text-gray-500 block truncate">Total Students</span>
                    <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mt-1">9,856</div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mt-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">↑ 20% from last month</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. VIEW MODE BUTTONS & DATE NAVIGATOR (matching media_1790735024374.png) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                
                {/* Left View Mode Tabs */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-gray-200 shadow-2xs overflow-x-auto no-scrollbar shrink-0 min-w-0">
                  <button
                    onClick={() => setScheduleViewMode('calendar')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      scheduleViewMode === 'calendar'
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Calendar View
                  </button>
                  <button
                    onClick={() => setScheduleViewMode('list')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      scheduleViewMode === 'list'
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    List View
                  </button>
                  <button
                    onClick={() => setScheduleViewMode('teacher')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      scheduleViewMode === 'teacher'
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Teacher View
                  </button>
                  <button
                    onClick={() => setScheduleViewMode('room')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      scheduleViewMode === 'room'
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Room View
                  </button>
                </div>

                {/* Right Date Navigator */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-2xs">
                    <button
                      onClick={() => alert('Previous week')}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded-xl cursor-pointer"
                    >
                      &lt;
                    </button>
                    <span className="px-3 text-xs font-extrabold text-gray-800 whitespace-nowrap">
                      23 - 29 Sep 2026
                    </span>
                    <button
                      onClick={() => alert('Next week')}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded-xl cursor-pointer"
                    >
                      &gt;
                    </button>
                  </div>

                  <button
                    onClick={() => alert('Navigated to Today: 23 Sep 2026')}
                    className="h-10 px-4 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold shadow-2xs cursor-pointer whitespace-nowrap"
                  >
                    Today
                  </button>
                </div>

              </div>

              {/* 4. MAIN 2-COLUMN VIEW: TIMETABLE CANVAS + RIGHT SIDEBAR */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start min-w-0">
                
                {/* 4A. LEFT 8-COLS (FILTERS & TIMETABLE CALENDAR GRID) */}
                <div className="lg:col-span-8 space-y-4 min-w-0">
                  
                  {/* Filter Dropdowns Bar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 sm:p-4 shadow-2xs space-y-3 min-w-0">
                    {/* Full Width Search by class, teacher */}
                    <div className="relative w-full min-w-0">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by class, teacher, or subject..."
                        value={scheduleSearchQuery}
                        onChange={(e) => setScheduleSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#114B44] shadow-2xs"
                      />
                    </div>

                    {/* Dropdowns Strip (Dedicated full-width horizontal side-scrollable) */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full min-w-0">
                      {/* Class Filter */}
                      <div className="relative shrink-0">
                        <select
                          value={scheduleClassFilter}
                          onChange={(e) => setScheduleClassFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Classes">All Classes</option>
                          <option value="Quran Recitation">Quran Recitation</option>
                          <option value="Arabic Language">Arabic Language</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="English Conversation">English Conversation</option>
                          <option value="Science Exploration">Science Exploration</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Teacher Filter */}
                      <div className="relative shrink-0">
                        <select
                          value={scheduleTeacherFilter}
                          onChange={(e) => setScheduleTeacherFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Teachers">All Teachers</option>
                          <option value="Siti Aisyah">Siti Aisyah</option>
                          <option value="Omar Hassan">Omar Hassan</option>
                          <option value="Muhammad Khan">Muhammad Khan</option>
                          <option value="Zainab Ali">Zainab Ali</option>
                          <option value="Layla Karim">Layla Karim</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Subject Filter */}
                      <div className="relative shrink-0">
                        <select
                          value={scheduleSubjectFilter}
                          onChange={(e) => setScheduleSubjectFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Subjects">All Subjects</option>
                          <option value="Islamic Studies">Islamic Studies</option>
                          <option value="Arabic">Arabic</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="English">English</option>
                          <option value="Science">Science</option>
                          <option value="History">History</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Business">Business</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* Status Filter */}
                      <div className="relative shrink-0">
                        <select
                          value={scheduleStatusFilter}
                          onChange={(e) => setScheduleStatusFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:border-[#114B44] cursor-pointer whitespace-nowrap hover:bg-gray-50"
                        >
                          <option value="All Status">All Status</option>
                          <option value="Live Now">Live Now</option>
                          <option value="Upcoming">Upcoming</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* WEEKLY TIMETABLE GRID (matching media_1790735024374.png) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs p-4 overflow-x-auto">
                    <div className="min-w-[760px]">
                      
                      {/* Grid Header: Days of the Week */}
                      <div className="grid grid-cols-8 border-b border-gray-100 pb-3 text-center">
                        <div className="text-xs font-bold text-gray-400">Time</div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Mon</div>
                          <div className="text-[11px] font-bold text-gray-400">23 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Tue</div>
                          <div className="text-[11px] font-bold text-gray-400">24 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Wed</div>
                          <div className="text-[11px] font-bold text-gray-400">25 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Thu</div>
                          <div className="text-[11px] font-bold text-gray-400">26 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Fri</div>
                          <div className="text-[11px] font-bold text-gray-400">27 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Sat</div>
                          <div className="text-[11px] font-bold text-gray-400">28 Sep</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-black text-gray-900">Sun</div>
                          <div className="text-[11px] font-bold text-gray-400">29 Sep</div>
                        </div>
                      </div>

                      {/* Grid Body: 10 Hourly Slots (08:00 to 17:00) */}
                      <div className="divide-y divide-gray-100 relative">
                        {[
                          '08:00', '09:00', '10:00', '11:00', '12:00', 
                          '13:00', '14:00', '15:00', '16:00', '17:00'
                        ].map((timeSlot) => (
                          <div key={timeSlot} className="grid grid-cols-8 min-h-[58px] py-1">
                            {/* Time Label */}
                            <div className="text-xs font-bold text-gray-400 pt-1 pr-2 text-right">
                              {timeSlot}
                            </div>

                            {/* 7 Day Columns */}
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                              // Find event that matches this day and timeSlot
                              const matchingEvent = scheduleEventsList.find(
                                ev => ev.day === day && ev.timeSlot === timeSlot
                              );

                              return (
                                <div key={day} className="px-1 py-0.5 border-l border-gray-50 relative flex items-start">
                                  {matchingEvent && (
                                    <div
                                      onClick={() => {
                                        if (onNavigateToLive && matchingEvent.status === 'Live Now') {
                                          onNavigateToLive({
                                            title: matchingEvent.title,
                                            tutor: { name: matchingEvent.teacher, avatar: '/images/tutor_ahmed.jpg' },
                                            image: '/images/class_nahwu.jpg'
                                          });
                                        } else {
                                          alert(`Jadwal: ${matchingEvent.title} (${matchingEvent.timeText}) bersama ${matchingEvent.teacher}`);
                                        }
                                      }}
                                      className={`w-full p-2 rounded-xl border text-[11px] font-bold shadow-2xs transition-transform hover:scale-[1.02] cursor-pointer ${matchingEvent.color}`}
                                    >
                                      <div className="flex items-center justify-between text-[10px] opacity-80">
                                        <span>{matchingEvent.timeText}</span>
                                        <Video className="w-3 h-3 shrink-0" />
                                      </div>
                                      <div className="font-extrabold truncate text-xs mt-0.5">{matchingEvent.title}</div>
                                      <div className="text-[10px] opacity-75 truncate">{matchingEvent.teacher}</div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      {/* Bottom Subject Legend Dots (matching media_1790735024374.png) */}
                      <div className="flex items-center justify-center gap-4 flex-wrap pt-4 mt-2 border-t border-gray-100 text-[11px] font-bold text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span>Islamic Studies</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                          <span>Arabic</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                          <span>Mathematics</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span>English</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                          <span>Science</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                          <span>History</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span>Computer Science</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                          <span>Business</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* 4B. RIGHT 4-COLS (CALENDAR WIDGET & UPCOMING CLASSES) */}
                <aside className="lg:col-span-4 space-y-4">
                  
                  {/* + Create Schedule Button (matching media_1790735024374.png) */}
                  <button
                    onClick={() => setIsCreateScheduleModalOpen(true)}
                    className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-3 rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Schedule</span>
                  </button>

                  {/* September 2026 Mini Calendar Widget */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">September 2026</h3>
                      <button onClick={() => alert('Next month')} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        &gt;
                      </button>
                    </div>

                    <div className="grid grid-cols-7 text-center text-xs gap-y-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <span key={d} className="text-[10px] font-bold text-gray-400">{d}</span>
                      ))}

                      {/* September 2026 Days */}
                      <span className="text-gray-300 font-medium">30</span>
                      <span className="text-gray-300 font-medium">31</span>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(day => (
                        <div key={day} className="flex items-center justify-center">
                          <button
                            onClick={() => setSelectedCalendarDate(day)}
                            className={`w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center cursor-pointer transition-colors ${
                              day === selectedCalendarDate
                                ? 'bg-[#114B44] text-white shadow-xs'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {day}
                          </button>
                        </div>
                      ))}
                      <span className="text-gray-300 font-medium">1</span>
                      <span className="text-gray-300 font-medium">2</span>
                      <span className="text-gray-300 font-medium">3</span>
                    </div>
                  </div>

                  {/* Upcoming Classes Section (matching media_1790735024374.png) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Upcoming Classes</h3>
                      <button
                        onClick={() => alert('View all upcoming classes')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      {/* Item 1 */}
                      <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-emerald-50/40 hover:border-emerald-200 transition-all flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-extrabold text-gray-900 text-xs truncate">Quran Recitation</div>
                            <div className="text-[11px] text-gray-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-bold text-emerald-800 shrink-0">09:00 Today</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">Siti Aisyah</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black shrink-0 whitespace-nowrap bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Live Now
                        </span>
                      </div>

                      {/* Item 2 */}
                      <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-blue-50/40 hover:border-blue-200 transition-all flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-extrabold text-gray-900 text-xs truncate">English Conversation</div>
                            <div className="text-[11px] text-gray-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-bold text-gray-700 shrink-0">10:00 Today</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">Omar Hassan</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-200">
                          Upcoming
                        </span>
                      </div>

                      {/* Item 3 */}
                      <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-purple-50/40 hover:border-purple-200 transition-all flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-extrabold text-gray-900 text-xs truncate">Mathematics</div>
                            <div className="text-[11px] text-gray-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-bold text-gray-700 shrink-0">11:00 Today</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">Layla Karim</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-200">
                          Upcoming
                        </span>
                      </div>

                      {/* Item 4 */}
                      <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-amber-50/40 hover:border-amber-200 transition-all flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-extrabold text-gray-900 text-xs truncate">Environmental Care</div>
                            <div className="text-[11px] text-gray-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-bold text-gray-700 shrink-0">13:00 Today</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">Nadia Rahman</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-200">
                          Upcoming
                        </span>
                      </div>

                      {/* Item 5 */}
                      <div className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-rose-50/40 hover:border-rose-200 transition-all flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-extrabold text-gray-900 text-xs truncate">Business Basics</div>
                            <div className="text-[11px] text-gray-500 font-medium truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-bold text-gray-700 shrink-0">14:00 Today</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">Ali Reza</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-200">
                          Upcoming
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions (2x2 Grid) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                    <h3 className="text-sm font-black text-gray-900">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => setIsCreateScheduleModalOpen(true)}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Create Schedule</span>
                      </button>

                      <button
                        onClick={() => setIsImportScheduleModalOpen(true)}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Import Schedule</span>
                      </button>

                      <button
                        onClick={() => alert('Buka manajemen ruangan kelas & live stream')}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer"
                      >
                        <Settings className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">Manage Rooms</span>
                      </button>

                      <button
                        onClick={() => alert('Lihat laporan analisis utilisasi jadwal')}
                        className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-bold transition-colors cursor-pointer"
                      >
                        <BarChart2 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">View Reports</span>
                      </button>
                    </div>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'assignments' ? (
            (() => {
              const currentSelectedAssignment = assignmentsList.find(a => a.id === selectedAssignmentId) || assignmentsList[0];
              
              // Filtering
              const filteredAssignments = assignmentsList.filter(item => {
                // Tab filter
                if (assignmentTabFilter === 'active' && item.status.toLowerCase() !== 'active') return false;
                if (assignmentTabFilter === 'pending' && item.status.toLowerCase() !== 'pending') return false;
                if (assignmentTabFilter === 'graded' && item.status.toLowerCase() !== 'graded') return false;
                if (assignmentTabFilter === 'drafts' && item.status.toLowerCase() !== 'draft') return false;
                if (assignmentTabFilter === 'archived' && item.status.toLowerCase() !== 'archived') return false;

                // Search query
                if (assignmentSearchQuery.trim()) {
                  const q = assignmentSearchQuery.toLowerCase();
                  const matchTitle = item.title.toLowerCase().includes(q);
                  const matchClass = item.class.toLowerCase().includes(q);
                  const matchSubject = item.subject.toLowerCase().includes(q);
                  const matchTeacher = item.teacher.toLowerCase().includes(q);
                  if (!matchTitle && !matchClass && !matchSubject && !matchTeacher) return false;
                }

                // Class filter
                if (assignmentClassFilter !== 'All Classes' && item.class !== assignmentClassFilter) return false;

                // Subject filter
                if (assignmentSubjectFilter !== 'All Subjects' && item.subject !== assignmentSubjectFilter) return false;

                // Teacher filter
                if (assignmentTeacherFilter !== 'All Teachers' && item.teacher !== assignmentTeacherFilter) return false;

                // Status filter
                if (assignmentStatusFilter !== 'All Status' && item.status.toLowerCase() !== assignmentStatusFilter.toLowerCase()) return false;

                return true;
              });

              return (
                <div className="space-y-5 animate-fadeIn">
                  
                  {/* 1. TOP ASSIGNMENTS HEADER */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-xs shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight whitespace-nowrap">Assignments</h1>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                          Create, manage, and track assignments. Review submissions and provide feedback.
                        </p>
                      </div>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        onClick={() => setIsCreateAssignmentModalOpen(true)}
                        className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                      >
                        <Plus className="w-4 h-4 shrink-0" />
                        <span>Create Assignment</span>
                      </button>

                      <button
                        onClick={() => setIsImportAssignmentModalOpen(true)}
                        className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                      >
                        <Download className="w-4 h-4 text-gray-500 shrink-0" />
                        <span>Import Assignments</span>
                      </button>

                      <button 
                        onClick={() => alert('Opsi lanjutan tugas')}
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 2. TOP 4 KPI CARDS FOR ASSIGNMENTS */}
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 min-w-0">
                    
                    {/* Total Assignments */}
                    <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100/80">
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-xs font-bold text-gray-500 truncate">Total Assignments</span>
                        </div>
                        <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                          <div className="w-1.5 bg-blue-100 rounded-full h-2.5"></div>
                          <div className="w-1.5 bg-blue-200 rounded-full h-4.5"></div>
                          <div className="w-1.5 bg-blue-300 rounded-full h-6"></div>
                          <div className="w-1.5 bg-blue-500 rounded-full h-7 sm:h-8"></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">284</div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-2">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">↑ 18% from last month</span>
                        </div>
                      </div>
                    </div>

                    {/* Submitted */}
                    <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100/80">
                            <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-xs font-bold text-gray-500 truncate">Submitted</span>
                        </div>
                        <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                          <div className="w-1.5 bg-emerald-100 rounded-full h-2.5"></div>
                          <div className="w-1.5 bg-emerald-200 rounded-full h-4.5"></div>
                          <div className="w-1.5 bg-emerald-300 rounded-full h-6"></div>
                          <div className="w-1.5 bg-emerald-500 rounded-full h-7 sm:h-8"></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">2,416</div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-2">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">↑ 24% from last month</span>
                        </div>
                      </div>
                    </div>

                    {/* Pending Review */}
                    <div className="bg-white rounded-2xl border border-amber-200/90 bg-gradient-to-br from-white to-amber-50/30 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-xs font-bold text-amber-900 truncate">Pending Review</span>
                        </div>
                        <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                          <div className="w-1.5 bg-purple-100 rounded-full h-2.5"></div>
                          <div className="w-1.5 bg-purple-200 rounded-full h-4.5"></div>
                          <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                          <div className="w-1.5 bg-purple-500 rounded-full h-7 sm:h-8"></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight leading-none">156</div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-rose-600 mt-2">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0 rotate-180 text-rose-500" />
                          <span className="truncate">↓ 12% from last month</span>
                        </div>
                      </div>
                    </div>

                    {/* Graded */}
                    <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100/80">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-xs font-bold text-gray-500 truncate">Graded</span>
                        </div>
                        <div className="flex items-end gap-1 h-7 sm:h-8 shrink-0">
                          <div className="w-1.5 bg-amber-100 rounded-full h-2.5"></div>
                          <div className="w-1.5 bg-amber-200 rounded-full h-4.5"></div>
                          <div className="w-1.5 bg-amber-300 rounded-full h-6"></div>
                          <div className="w-1.5 bg-amber-500 rounded-full h-7 sm:h-8"></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">2,260</div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-2">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">↑ 28% from last month</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* 3. STATUS FILTER PILLS (matching media_1790785679753.jpg) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 min-w-0">
                    {[
                      { id: 'all', label: 'All Assignments', count: 284 },
                      { id: 'active', label: 'Active', count: 201 },
                      { id: 'pending', label: 'Pending', count: 156 },
                      { id: 'graded', label: 'Graded', count: '2,260' },
                      { id: 'drafts', label: 'Drafts', count: 83 },
                      { id: 'archived', label: 'Archived', count: 22 }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setAssignmentTabFilter(tab.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 shrink-0 transition-all cursor-pointer whitespace-nowrap ${
                          assignmentTabFilter === tab.id
                            ? 'bg-[#114B44] text-white shadow-xs'
                            : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200/80 shadow-2xs'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                          assignmentTabFilter === tab.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* 4. SEARCH & SECONDARY FILTERS BAR (Side scrollable filters on narrow screens) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 sm:p-4 shadow-2xs space-y-3 min-w-0">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 min-w-0">
                      
                      {/* Search Bar */}
                      <div className="relative flex-1 min-w-0">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={assignmentSearchQuery}
                          onChange={(e) => setAssignmentSearchQuery(e.target.value)}
                          placeholder="Search assignments by title, class, or subject..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-xs font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#114B44]/20 focus:border-[#114B44]"
                        />
                      </div>

                      {/* Dropdown Filters (Horizontal side scrollable) */}
                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 shrink-0 min-w-0">
                        {/* Class Dropdown */}
                        <div className="relative shrink-0">
                          <select
                            value={assignmentClassFilter}
                            onChange={(e) => setAssignmentClassFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl pl-3 pr-7 py-2 shadow-2xs focus:outline-none cursor-pointer whitespace-nowrap"
                          >
                            <option value="All Classes">All Classes</option>
                            <option value="Grade 10A">Grade 10A</option>
                            <option value="Grade 8B">Grade 8B</option>
                            <option value="Grade 11A">Grade 11A</option>
                            <option value="Grade 9A">Grade 9A</option>
                            <option value="Grade 10B">Grade 10B</option>
                            <option value="Grade 12A">Grade 12A</option>
                            <option value="Grade 11B">Grade 11B</option>
                            <option value="Grade 9B">Grade 9B</option>
                            <option value="Grade 12B">Grade 12B</option>
                            <option value="Grade 8A">Grade 8A</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Subject Dropdown */}
                        <div className="relative shrink-0">
                          <select
                            value={assignmentSubjectFilter}
                            onChange={(e) => setAssignmentSubjectFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl pl-3 pr-7 py-2 shadow-2xs focus:outline-none cursor-pointer whitespace-nowrap"
                          >
                            <option value="All Subjects">All Subjects</option>
                            <option value="Science">Science</option>
                            <option value="Islamic Studies">Islamic Studies</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Arabic">Arabic</option>
                            <option value="History">History</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Business">Business</option>
                            <option value="Environmental">Environmental</option>
                            <option value="Psychology">Psychology</option>
                            <option value="English">English</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Teacher Dropdown */}
                        <div className="relative shrink-0">
                          <select
                            value={assignmentTeacherFilter}
                            onChange={(e) => setAssignmentTeacherFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl pl-3 pr-7 py-2 shadow-2xs focus:outline-none cursor-pointer whitespace-nowrap"
                          >
                            <option value="All Teachers">All Teachers</option>
                            <option value="Dr. Ahmad Fauzi">Dr. Ahmad Fauzi</option>
                            <option value="Siti Aisyah">Siti Aisyah</option>
                            <option value="Layla Karim">Layla Karim</option>
                            <option value="Zainab Ali">Zainab Ali</option>
                            <option value="Fatimah Nur">Fatimah Nur</option>
                            <option value="Muhammad Khan">Muhammad Khan</option>
                            <option value="Ali Reza">Ali Reza</option>
                            <option value="Nadia Rahman">Nadia Rahman</option>
                            <option value="Hassan Malik">Hassan Malik</option>
                            <option value="Omar Hassan">Omar Hassan</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Status Dropdown */}
                        <div className="relative shrink-0">
                          <select
                            value={assignmentStatusFilter}
                            onChange={(e) => setAssignmentStatusFilter(e.target.value)}
                            className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl pl-3 pr-7 py-2 shadow-2xs focus:outline-none cursor-pointer whitespace-nowrap"
                          >
                            <option value="All Status">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Graded">Graded</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Date Range Button */}
                        <button
                          onClick={() => alert('Filter rentang tanggal tugas')}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                        >
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          <span>Date Range</span>
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        </button>

                        {/* Filters Button */}
                        <button
                          onClick={() => {
                            setAssignmentSearchQuery('');
                            setAssignmentClassFilter('All Classes');
                            setAssignmentSubjectFilter('All Subjects');
                            setAssignmentTeacherFilter('All Teachers');
                            setAssignmentStatusFilter('All Status');
                          }}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl px-3 py-2 shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                          title="Reset Filters"
                        >
                          <Filter className="w-3.5 h-3.5 text-gray-500" />
                          <span>Filters</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Batch Selection Action Bar (if checkboxes checked) */}
                  {selectedAssignmentCheckboxes.length > 0 && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 animate-fadeIn font-bold min-w-0">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-amber-700 shrink-0" />
                        <span className="truncate">{selectedAssignmentCheckboxes.length} Tugas Dipilih</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setAssignmentsList(prev => prev.map(a => selectedAssignmentCheckboxes.includes(a.id) ? { ...a, status: 'Graded', statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200' } : a));
                            setSelectedAssignmentCheckboxes([]);
                            alert('Tugas terpilih berhasil ditandai sebagai Selesai Dinilai!');
                          }}
                          className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Tandai Selesai Dinilai
                        </button>
                        <button
                          onClick={() => setSelectedAssignmentCheckboxes([])}
                          className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Batal Pilihan
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 5. MAIN 2-COLUMN LAYOUT: 8-COLS TABLE + 4-COLS SIDE DOSSIER */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start min-w-0">
                    
                    {/* LEFT 8-COLS: ASSIGNMENTS TABLE (Smooth internal horizontal scroll) */}
                    <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden flex flex-col justify-between min-w-0">
                      <div className="overflow-x-auto w-full min-w-0">
                        <table className="w-full text-left text-xs text-gray-600 min-w-[780px] whitespace-nowrap">
                          <thead className="bg-[#F8FAFC] border-b border-gray-200/80 text-[11px] font-black text-gray-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-3.5 pl-4 w-10">
                                <input
                                  type="checkbox"
                                  checked={selectedAssignmentCheckboxes.length === filteredAssignments.length && filteredAssignments.length > 0}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedAssignmentCheckboxes(filteredAssignments.map(a => a.id));
                                    } else {
                                      setSelectedAssignmentCheckboxes([]);
                                    }
                                  }}
                                  className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                />
                              </th>
                              <th className="py-3.5 px-2 w-8 text-center">#</th>
                              <th className="py-3.5 px-3 min-w-[180px]">Title</th>
                              <th className="py-3.5 px-2 min-w-[85px]">Class</th>
                              <th className="py-3.5 px-2 min-w-[110px]">Subject</th>
                              <th className="py-3.5 px-2 min-w-[125px]">Teacher</th>
                              <th className="py-3.5 px-2 min-w-[115px]">Due Date</th>
                              <th className="py-3.5 px-2 text-center min-w-[85px]">Submissions</th>
                              <th className="py-3.5 px-2 text-center min-w-[85px]">Status</th>
                              <th className="py-3.5 pr-4 text-center min-w-[85px]">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {filteredAssignments.length === 0 ? (
                              <tr>
                                <td colSpan="10" className="p-8 text-center text-gray-400 font-bold">
                                  Tidak ada tugas yang sesuai dengan filter.
                                </td>
                              </tr>
                            ) : (
                              filteredAssignments.map((asg) => {
                                const isSelected = selectedAssignmentId === asg.id;
                                const isChecked = selectedAssignmentCheckboxes.includes(asg.id);

                                return (
                                  <tr
                                    key={asg.id}
                                    onClick={() => setSelectedAssignmentId(asg.id)}
                                    className={`transition-colors cursor-pointer group ${
                                      isSelected
                                        ? 'bg-emerald-50/40 border-l-4 border-l-[#114B44]'
                                        : 'hover:bg-gray-50/80'
                                    }`}
                                  >
                                    {/* Checkbox */}
                                    <td className="p-3.5 pl-4" onClick={(e) => e.stopPropagation()}>
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setSelectedAssignmentCheckboxes(prev => [...prev, asg.id]);
                                          } else {
                                            setSelectedAssignmentCheckboxes(prev => prev.filter(id => id !== asg.id));
                                          }
                                        }}
                                        className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                      />
                                    </td>

                                    {/* Number */}
                                    <td className="py-3.5 px-2 text-center text-gray-400 font-bold text-xs">
                                      {asg.num}
                                    </td>

                                    {/* Title with Type icon */}
                                    <td className="py-3.5 px-3">
                                      <div className="flex items-center gap-2.5">
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                          asg.type === 'Essay' ? 'bg-blue-100 text-blue-600' :
                                          asg.type === 'Video Submission' ? 'bg-emerald-100 text-emerald-600' :
                                          asg.type === 'Project' ? 'bg-purple-100 text-purple-600' :
                                          asg.type === 'Image' ? 'bg-amber-100 text-amber-600' :
                                          'bg-rose-100 text-rose-600'
                                        }`}>
                                          <FileText className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="font-extrabold text-gray-900 text-xs truncate max-w-[190px]" title={asg.title}>
                                            {asg.title}
                                          </div>
                                          <div className="text-[10px] text-gray-400 font-medium truncate">
                                            {asg.type}
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    {/* Class */}
                                    <td className="py-3.5 px-2">
                                      <span className="px-2.5 py-1 rounded-md text-[10px] font-black bg-blue-50 text-blue-700 border border-blue-100 whitespace-nowrap">
                                        {asg.class}
                                      </span>
                                    </td>

                                    {/* Subject */}
                                    <td className="py-3.5 px-2">
                                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border whitespace-nowrap ${asg.subjectColor}`}>
                                        {asg.subject}
                                      </span>
                                    </td>

                                    {/* Teacher */}
                                    <td className="py-3.5 px-2">
                                      <div className="flex items-center gap-2">
                                        <img
                                          src={asg.teacherAvatar}
                                          alt={asg.teacher}
                                          className="w-6 h-6 rounded-full object-cover shrink-0"
                                          onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                                        />
                                        <span className="font-bold text-gray-900 text-xs whitespace-nowrap truncate max-w-[100px]">
                                          {asg.teacher}
                                        </span>
                                      </div>
                                    </td>

                                    {/* Due Date */}
                                    <td className="py-3.5 px-2 text-xs font-bold text-gray-700 whitespace-nowrap">
                                      {asg.dueDate}
                                    </td>

                                    {/* Submissions */}
                                    <td className="py-3.5 px-2 text-center whitespace-nowrap">
                                      <span className="font-black text-gray-900 text-xs">{asg.submissionsCount}</span>
                                      <span className="text-gray-400 font-bold text-[11px]"> / {asg.totalStudents}</span>
                                    </td>

                                    {/* Status */}
                                    <td className="py-3.5 px-2 text-center">
                                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border whitespace-nowrap ${
                                        asg.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                        asg.status === 'Graded' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                        'bg-blue-50 text-blue-700 border-blue-200'
                                      }`}>
                                        {asg.status}
                                      </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3.5 pr-4 text-center" onClick={(e) => e.stopPropagation()}>
                                      <div className="flex items-center justify-center gap-1">
                                        <button
                                          onClick={() => {
                                            setSelectedAssignmentId(asg.id);
                                          }}
                                          title="View Assignment"
                                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                                        >
                                          <Eye className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() => {
                                            setSelectedAssignmentId(asg.id);
                                            setIsCreateAssignmentModalOpen(true);
                                          }}
                                          title="Edit Assignment"
                                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                                        >
                                          <Edit3 className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                          onClick={() => alert(`Opsi tugas: ${asg.title}`)}
                                          title="More Options"
                                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                                        >
                                          <MoreHorizontal className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Bottom Pagination */}
                      <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs min-w-0">
                        <span className="text-gray-500 font-bold whitespace-nowrap">
                          Showing <span className="text-gray-900 font-black">1 to 10</span> of <span className="text-gray-900 font-black">284</span> assignments
                        </span>

                        <div className="flex items-center gap-1 self-center sm:self-auto shrink-0 overflow-x-auto no-scrollbar py-0.5">
                          <button onClick={() => alert('Halaman sebelumnya')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-bold flex items-center justify-center cursor-pointer shadow-2xs text-xs">
                            &lt;
                          </button>
                          <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#114B44] text-white font-extrabold flex items-center justify-center shadow-xs cursor-pointer text-xs">
                            1
                          </button>
                          <button onClick={() => alert('Halaman 2')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer shadow-2xs text-xs">
                            2
                          </button>
                          <button onClick={() => alert('Halaman 3')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer shadow-2xs text-xs">
                            3
                          </button>
                          <span className="px-1 text-gray-400 font-bold text-xs">...</span>
                          <button onClick={() => alert('Halaman 29')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold flex items-center justify-center cursor-pointer shadow-2xs text-xs">
                            29
                          </button>
                          <button onClick={() => alert('Halaman berikutnya')} className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-bold flex items-center justify-center cursor-pointer shadow-2xs text-xs">
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT 4-COLS: ASSIGNMENT DOSSIER & SUBMISSIONS */}
                    <aside className="lg:col-span-4 space-y-4 min-w-0">
                      
                      {/* 1. Assignment Details Card */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-gray-900">Assignment Details</h3>
                          <button
                            onClick={() => alert(`Detail lengkap tugas: ${currentSelectedAssignment.title}`)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                          >
                            <span>View All</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Banner Image */}
                        <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-2xs">
                          <img
                            src={currentSelectedAssignment.imageBanner}
                            alt={currentSelectedAssignment.title}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2.5 left-3 right-3 text-white">
                            <h4 className="font-extrabold text-xs leading-snug line-clamp-2 drop-shadow-xs">
                              {currentSelectedAssignment.title}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                              <span className="text-[10px] font-bold text-blue-100">
                                {currentSelectedAssignment.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Metadata List */}
                        <div className="space-y-2.5 text-xs text-gray-600">
                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                              <span>Class</span>
                            </div>
                            <span className="font-black text-gray-900 truncate">{currentSelectedAssignment.class}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                              <span>Subject</span>
                            </div>
                            <span className="font-black text-gray-900 truncate">{currentSelectedAssignment.subject}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <User className="w-3.5 h-3.5 text-gray-400" />
                              <span>Teacher</span>
                            </div>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <img
                                src={currentSelectedAssignment.teacherAvatar}
                                alt={currentSelectedAssignment.teacher}
                                className="w-4 h-4 rounded-full object-cover shrink-0"
                                onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                              />
                              <span className="font-black text-gray-900 truncate">{currentSelectedAssignment.teacher}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              <span>Due Date</span>
                            </div>
                            <span className="font-black text-gray-900 truncate">{currentSelectedAssignment.dueDate}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <FileText className="w-3.5 h-3.5 text-gray-400" />
                              <span>Type</span>
                            </div>
                            <span className="font-black text-gray-900 truncate">{currentSelectedAssignment.type}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-gray-100 gap-2">
                            <div className="flex items-center gap-2 text-gray-500 font-bold shrink-0">
                              <Award className="w-3.5 h-3.5 text-gray-400" />
                              <span>Total Points</span>
                            </div>
                            <span className="font-black text-emerald-700 truncate">{currentSelectedAssignment.totalPoints}</span>
                          </div>

                          <div className="pt-1">
                            <div className="flex items-center gap-1.5 text-gray-500 font-bold mb-1">
                              <Edit3 className="w-3.5 h-3.5 text-gray-400" />
                              <span>Description</span>
                            </div>
                            <p className="text-[11px] text-gray-600 leading-relaxed bg-[#F8FAFC] p-2.5 rounded-xl border border-gray-100">
                              {currentSelectedAssignment.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. Submission Overview Card */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs space-y-3.5 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-gray-900">Submission Overview</h3>
                          <button
                            onClick={() => alert(`Analisis pengumpulan: ${currentSelectedAssignment.title}`)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                          >
                            <span>View Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Donut Progress Chart & Compact Legends */}
                        <div className="flex items-center justify-between gap-3 pt-1 min-w-0">
                          <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="transparent"
                                stroke="#E2E8F0"
                                strokeWidth="3.5"
                              />
                              <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="transparent"
                                stroke="#10B981"
                                strokeWidth="3.5"
                                strokeDasharray={`${currentSelectedAssignment.overview.submittedPct} 100`}
                                strokeDashoffset="0"
                                strokeLinecap="round"
                              />
                              <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="transparent"
                                stroke="#F59E0B"
                                strokeWidth="3.5"
                                strokeDasharray={`${currentSelectedAssignment.overview.pendingPct} 100`}
                                strokeDashoffset={`-${currentSelectedAssignment.overview.submittedPct}`}
                                strokeLinecap="round"
                              />
                              <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="transparent"
                                stroke="#EF4444"
                                strokeWidth="3.5"
                                strokeDasharray={`${currentSelectedAssignment.overview.latePct} 100`}
                                strokeDashoffset={`-${currentSelectedAssignment.overview.submittedPct + currentSelectedAssignment.overview.pendingPct}`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-[11px] sm:text-xs font-black text-gray-900 leading-tight">
                                {currentSelectedAssignment.overview.submitted} / {currentSelectedAssignment.totalStudents}
                              </span>
                              <span className="text-[8px] sm:text-[9px] font-bold text-gray-400">Submitted</span>
                            </div>
                          </div>

                          {/* Legends (Clean Responsive Rows) */}
                          <div className="space-y-1.5 text-xs flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5 min-w-0">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                                <span className="font-bold text-gray-600 text-[11px] truncate">Submitted</span>
                              </div>
                              <span className="font-black text-gray-900 text-[11px] shrink-0 whitespace-nowrap">
                                {currentSelectedAssignment.overview.submitted} <span className="text-[10px] text-gray-400 font-semibold">({currentSelectedAssignment.overview.submittedPct}%)</span>
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-1.5 min-w-0">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                                <span className="font-bold text-gray-600 text-[11px] truncate">Pending</span>
                              </div>
                              <span className="font-black text-gray-900 text-[11px] shrink-0 whitespace-nowrap">
                                {currentSelectedAssignment.overview.pending} <span className="text-[10px] text-gray-400 font-semibold">({currentSelectedAssignment.overview.pendingPct}%)</span>
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-1.5 min-w-0">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                                <span className="font-bold text-gray-600 text-[11px] truncate">Late</span>
                              </div>
                              <span className="font-black text-gray-900 text-[11px] shrink-0 whitespace-nowrap">
                                {currentSelectedAssignment.overview.late} <span className="text-[10px] text-gray-400 font-semibold">({currentSelectedAssignment.overview.latePct}%)</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. Recent Submissions Card */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-3.5 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-gray-900">Recent Submissions</h3>
                          <button
                            onClick={() => alert(`Lihat semua santri yang telah mengumpulkan: ${currentSelectedAssignment.title}`)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                          >
                            <span>View All</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="space-y-2.5 text-xs">
                          {currentSelectedAssignment.recentSubmissions.map((sub) => (
                            <div
                              key={sub.id}
                              onClick={() => {
                                setSelectedSubmissionToGrade(sub);
                                setGradeInput(sub.gradedScore ? String(sub.gradedScore) : '90');
                                setIsGradeModalOpen(true);
                              }}
                              className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-emerald-50/40 hover:border-emerald-200 transition-all flex items-center justify-between gap-2.5 cursor-pointer group min-w-0"
                            >
                              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                <img
                                  src={sub.avatar}
                                  alt={sub.name}
                                  className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-200"
                                  onError={(e) => { e.target.src = '/images/student_ali.jpg'; }}
                                />
                                <div className="min-w-0 flex-1">
                                  <div className="font-extrabold text-gray-900 text-xs truncate group-hover:text-emerald-800 transition-colors">
                                    {sub.name}
                                  </div>
                                  <div className="text-[10px] text-gray-400 font-medium truncate">
                                    {sub.timeAgo}
                                  </div>
                                </div>
                              </div>

                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black shrink-0 whitespace-nowrap border ${
                                sub.status === 'graded'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-amber-50 text-amber-700 border-amber-200'
                              }`}>
                                {sub.score}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </aside>

                  </div>

                </div>
              );
            })()
          ) : activeNav === 'users' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP USERS HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight whitespace-nowrap">Users</h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Manage all users on the platform. View, edit, and control user accounts.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => setIsAddUserModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <UserPlus className="w-4 h-4 shrink-0" />
                    <span>Add User</span>
                  </button>

                  <button
                    onClick={() => setIsImportUsersModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>Import Users</span>
                  </button>

                  <button 
                    onClick={() => alert('Opsi lanjutan pengguna')}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 shadow-2xs flex items-center justify-center transition-all cursor-pointer shrink-0"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. TOP 4 USERS KPI METRIC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Users */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Total Users</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">12,548</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-blue-100 rounded-full h-4"></div>
                    <div className="w-1.5 bg-blue-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-blue-300 rounded-full h-5"></div>
                    <div className="w-1.5 bg-blue-400 rounded-full h-8"></div>
                    <div className="w-1.5 bg-blue-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Students */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Students</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">9,856</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+14%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-emerald-100 rounded-full h-4"></div>
                    <div className="w-1.5 bg-emerald-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-emerald-300 rounded-full h-7"></div>
                    <div className="w-1.5 bg-emerald-400 rounded-full h-8"></div>
                    <div className="w-1.5 bg-emerald-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Teachers */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Teachers</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">1,248</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-purple-100 rounded-full h-3"></div>
                    <div className="w-1.5 bg-purple-200 rounded-full h-5"></div>
                    <div className="w-1.5 bg-purple-300 rounded-full h-6"></div>
                    <div className="w-1.5 bg-purple-400 rounded-full h-8"></div>
                    <div className="w-1.5 bg-purple-600 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Admins */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Admins</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">56</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+4%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-amber-100 rounded-full h-4"></div>
                    <div className="w-1.5 bg-amber-200 rounded-full h-5"></div>
                    <div className="w-1.5 bg-amber-300 rounded-full h-6"></div>
                    <div className="w-1.5 bg-amber-400 rounded-full h-8"></div>
                    <div className="w-1.5 bg-amber-600 rounded-full h-10"></div>
                  </div>
                </div>

              </div>

              {/* 3. MAIN TWO-COLUMN VIEW (TABLE LEFT + USER DETAIL RIGHT) */}
              <div className="flex flex-col xl:flex-row gap-5 items-start">
                
                {/* LEFT TABLE SECTION (70% WIDTH) */}
                <div className="flex-1 min-w-0 bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-4 w-full">
                  
                  {/* Role Tabs Switcher */}
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3 overflow-x-auto no-scrollbar">
                    {[
                      { id: 'all', label: 'All Users', count: '12,548' },
                      { id: 'students', label: 'Students', count: '9,556' },
                      { id: 'teachers', label: 'Teachers', count: '1,248' },
                      { id: 'admins', label: 'Admins', count: '56' },
                    ].map((tab) => {
                      const isActive = userTabFilter === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setUserTabFilter(tab.id)}
                          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[#114B44] text-white shadow-2xs'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                            isActive ? 'bg-white/20 text-white' : 'bg-gray-200/80 text-gray-700'
                          }`}>
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search & Filters Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search users by name, email, or ID..."
                        value={userSearchQuery}
                        onChange={(e) => setUserSearchQuery(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <select
                        value={userRoleFilter}
                        onChange={(e) => setUserRoleFilter(e.target.value)}
                        className="bg-[#F8FAFC] border border-gray-200 rounded-xl px-2.5 py-2 text-xs font-bold text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <option value="All Roles">All Roles</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                      </select>

                      <select
                        value={userStatusFilter}
                        onChange={(e) => setUserStatusFilter(e.target.value)}
                        className="bg-[#F8FAFC] border border-gray-200 rounded-xl px-2.5 py-2 text-xs font-bold text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <option value="All Status">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                      </select>

                      <select
                        value={userJoinDateFilter}
                        onChange={(e) => setUserJoinDateFilter(e.target.value)}
                        className="bg-[#F8FAFC] border border-gray-200 rounded-xl px-2.5 py-2 text-xs font-bold text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <option value="All Join Dates">All Join Dates</option>
                        <option value="September 2026">September 2026</option>
                        <option value="August 2026">August 2026</option>
                      </select>

                      <button
                        onClick={() => alert('Filter lanjutan pengguna')}
                        className="flex items-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl text-xs font-bold text-gray-700 shadow-2xs cursor-pointer"
                      >
                        <Filter className="w-3.5 h-3.5 text-gray-500" />
                        <span>Filters</span>
                      </button>
                    </div>
                  </div>

                  {/* USERS TABLE */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-gray-400 text-[10.5px] font-extrabold uppercase tracking-wider border-b border-gray-100 pb-2">
                          <th className="pb-3 w-8">
                            <input
                              type="checkbox"
                              checked={selectedUserCheckboxes.length === adminUsersList.length}
                              onChange={toggleSelectAllUsers}
                              className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                            />
                          </th>
                          <th className="pb-3 w-8 font-extrabold">#</th>
                          <th className="pb-3 font-extrabold">User</th>
                          <th className="pb-3 font-extrabold">Role</th>
                          <th className="pb-3 font-extrabold">Status</th>
                          <th className="pb-3 font-extrabold">Join Date</th>
                          <th className="pb-3 font-extrabold">Last Active</th>
                          <th className="pb-3 font-extrabold text-center">Classes</th>
                          <th className="pb-3 font-extrabold text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-medium">
                        {adminUsersList
                          .filter((u) => {
                            if (userTabFilter === 'students' && u.role !== 'Student') return false;
                            if (userTabFilter === 'teachers' && u.role !== 'Teacher') return false;
                            if (userTabFilter === 'admins' && u.role !== 'Admin') return false;
                            if (userRoleFilter !== 'All Roles' && u.role !== userRoleFilter) return false;
                            if (userStatusFilter !== 'All Status' && u.status !== userStatusFilter) return false;
                            if (userSearchQuery.trim() !== '') {
                              const q = userSearchQuery.toLowerCase();
                              return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.userId.toLowerCase().includes(q);
                            }
                            return true;
                          })
                          .map((u) => {
                            const isSelectedRow = selectedUserId === u.id;
                            const isChecked = selectedUserCheckboxes.includes(u.id);

                            return (
                              <tr
                                key={u.id}
                                onClick={() => setSelectedUserId(u.id)}
                                className={`transition-colors cursor-pointer ${
                                  isSelectedRow ? 'bg-emerald-50/50' : 'hover:bg-gray-50/70'
                                }`}
                              >
                                {/* Checkbox */}
                                <td className="py-3 pr-2" onClick={(e) => e.stopPropagation()}>
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelectUserCheckbox(u.id)}
                                    className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                  />
                                </td>

                                {/* Row Number */}
                                <td className="py-3 pr-2 text-gray-400 font-bold text-[11px]">{u.number}</td>

                                {/* User Info */}
                                <td className="py-3 pr-3">
                                  <div className="flex items-center gap-2.5">
                                    {u.avatar ? (
                                      <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-300 shrink-0 bg-gray-100">
                                        <img src={u.avatar} alt={u.name} className="w-full h-full object-cover" />
                                      </div>
                                    ) : (
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${u.initialBg}`}>
                                        {u.initials}
                                      </div>
                                    )}
                                    <div className="min-w-0">
                                      <span className="font-extrabold text-xs text-gray-900 block truncate leading-tight">
                                        {u.name}
                                      </span>
                                      <span className="text-[10px] text-gray-400 block truncate">{u.email}</span>
                                    </div>
                                  </div>
                                </td>

                                {/* Role Badge */}
                                <td className="py-3 pr-3">
                                  <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${u.roleBadge}`}>
                                    {u.role}
                                  </span>
                                </td>

                                {/* Status */}
                                <td className="py-3 pr-3">
                                  {u.statusType === 'active' && (
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-emerald-700">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                      <span>Active</span>
                                    </span>
                                  )}
                                  {u.statusType === 'inactive' && (
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-rose-600">
                                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                      <span>Inactive</span>
                                    </span>
                                  )}
                                  {u.statusType === 'pending' && (
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-amber-600">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                      <span>Pending</span>
                                    </span>
                                  )}
                                </td>

                                {/* Join Date */}
                                <td className="py-3 pr-3 text-gray-500 font-semibold">{u.joinDate}</td>

                                {/* Last Active */}
                                <td className="py-3 pr-3 text-gray-500 font-medium">{u.lastActive}</td>

                                {/* Classes Count */}
                                <td className="py-3 pr-3 text-center font-extrabold text-gray-900">
                                  {u.classesCount}
                                </td>

                                {/* Actions */}
                                <td className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                                  <div className="flex items-center justify-end gap-1">
                                    <button
                                      onClick={() => setSelectedUserId(u.id)}
                                      className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
                                      title="View Details"
                                    >
                                      <Eye className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() => {
                                        setEditingUser(u);
                                        setIsEditUserModalOpen(true);
                                      }}
                                      className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
                                      title="Edit User"
                                    >
                                      <Edit3 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      onClick={() => alert(`Opsi akun untuk ${u.name}`)}
                                      className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
                                    >
                                      <MoreVertical className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>

                  {/* PAGINATION FOOTER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs">
                    <span className="text-gray-500 font-medium">
                      Showing 1 to 10 of 12,548 users
                    </span>

                    <div className="flex items-center gap-1">
                      <button className="px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold cursor-pointer">
                        &lt;
                      </button>
                      <button className="px-3 py-1 rounded-lg bg-[#114B44] text-white font-bold cursor-pointer shadow-2xs">
                        1
                      </button>
                      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700 font-bold cursor-pointer">
                        2
                      </button>
                      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700 font-bold cursor-pointer">
                        3
                      </button>
                      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700 font-bold cursor-pointer">
                        4
                      </button>
                      <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-700 font-bold cursor-pointer">
                        5
                      </button>
                      <span className="px-1 text-gray-400">...</span>
                      <button className="px-2.5 py-1 rounded-lg hover:bg-gray-100 text-gray-700 font-bold cursor-pointer">
                        1,255
                      </button>
                      <button className="px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold cursor-pointer">
                        &gt;
                      </button>
                    </div>
                  </div>

                </div>

                {/* RIGHT DOCKED USER DETAIL CARD (30% WIDTH - MATCHING media_1790731145724.jpg) */}
                <aside className="w-full xl:w-80 shrink-0 bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                  
                  {/* User Profile Header */}
                  <div className="flex items-start justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {currentSelectedUser.avatar ? (
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-2xs">
                            <img src={currentSelectedUser.avatar} alt={currentSelectedUser.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm ${currentSelectedUser.initialBg}`}>
                            {currentSelectedUser.initials}
                          </div>
                        )}
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                      </div>

                      <div>
                        <h3 className="font-extrabold text-sm text-gray-900 leading-tight">
                          {currentSelectedUser.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded-md mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          <span>{currentSelectedUser.status}</span>
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setEditingUser(currentSelectedUser);
                        setIsEditUserModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 4 Profile Sub-Tabs */}
                  <div className="flex items-center justify-between border-b border-gray-100 text-xs font-bold text-gray-500">
                    {[
                      { id: 'profile', label: 'Profile' },
                      { id: 'activity', label: 'Activity' },
                      { id: 'classes', label: 'Classes' },
                      { id: 'certificates', label: 'Certificates' },
                    ].map((tab) => {
                      const isActive = selectedUserDetailTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedUserDetailTab(tab.id)}
                          className={`pb-2.5 transition-colors cursor-pointer relative ${
                            isActive ? 'text-[#114B44] font-extrabold' : 'hover:text-gray-900'
                          }`}
                        >
                          <span>{tab.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#114B44] rounded-full"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Profile Details List */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <UserCheck className="w-3.5 h-3.5 text-gray-400" />
                        <span>Full Name</span>
                      </div>
                      <span className="font-extrabold text-gray-900">{currentSelectedUser.name}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span>Email</span>
                      </div>
                      <span className="font-bold text-gray-700 text-[11px] truncate max-w-[140px]">{currentSelectedUser.email}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Key className="w-3.5 h-3.5 text-gray-400" />
                        <span>User ID</span>
                      </div>
                      <span className="font-mono text-gray-600 font-bold text-[11px]">{currentSelectedUser.userId}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Users className="w-3.5 h-3.5 text-gray-400" />
                        <span>Role</span>
                      </div>
                      <span className="font-extrabold px-2 py-0.5 rounded-md text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {currentSelectedUser.role}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>Join Date</span>
                      </div>
                      <span className="font-bold text-gray-900">{currentSelectedUser.joinDate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>Last Active</span>
                      </div>
                      <span className="font-bold text-gray-900">{currentSelectedUser.lastActive}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                        <span>Total Classes</span>
                      </div>
                      <span className="font-extrabold text-gray-900">{currentSelectedUser.classesCount}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>Completed</span>
                      </div>
                      <span className="font-extrabold text-gray-900">{currentSelectedUser.completedClasses}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 font-bold">
                        <Award className="w-3.5 h-3.5 text-gray-400" />
                        <span>Certificates</span>
                      </div>
                      <span className="font-extrabold text-gray-900">{currentSelectedUser.certificatesCount}</span>
                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {/* Send Message Button */}
                    <button
                      onClick={() => setIsSendMessageModalOpen(true)}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    {/* Reset Password & Suspend User Side by Side */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => alert(`Email reset password telah dikirim ke ${currentSelectedUser.email}`)}
                        className="flex items-center justify-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Key className="w-3 h-3 text-gray-500" />
                        <span>Reset Password</span>
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Suspend akun ${currentSelectedUser.name}?`)) {
                            alert('Akun berhasil di-suspend sementara.');
                          }
                        }}
                        className="flex items-center justify-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
                      >
                        <Ban className="w-3 h-3 text-gray-500" />
                        <span>Suspend User</span>
                      </button>
                    </div>

                    {/* Delete User */}
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus akun ${currentSelectedUser.name} secara permanen?`)) {
                          setAdminUsersList(prev => prev.filter(u => u.id !== currentSelectedUser.id));
                          alert('Akun pengguna berhasil dihapus.');
                        }
                      }}
                      className="w-full bg-rose-50 hover:bg-rose-100/80 text-rose-700 border border-rose-200 py-2 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                      <span>Delete User</span>
                    </button>
                  </div>

                </aside>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW 2: DEFAULT ADMIN OVERVIEW DASHBOARD                  */
            /* ========================================================= */
            <div className="space-y-6 animate-fadeIn">
              {/* HEADER GREETING & DATE FILTER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                    <span>Welcome, Admin</span>
                    <span>👋</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Here's an overview of your platform activity.
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <button
                      onClick={() => setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen)}
                      className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{dateRangeFilter}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </button>

                    {isDateRangeDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-30 text-xs animate-fadeIn space-y-1">
                        {[
                          '1 Sep 2026 - 30 Sep 2026',
                          '1 Aug 2026 - 31 Aug 2026',
                          'Last 30 Days',
                          'Year to Date (2026)',
                          'All Time'
                        ].map((range) => (
                          <button
                            key={range}
                            onClick={() => {
                              setDateRangeFilter(range);
                              setIsDateRangeDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                              dateRangeFilter === range ? 'bg-[#114B44] text-white' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span>{range}</span>
                            {dateRangeFilter === range && <Check className="w-3.5 h-3.5 text-white" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setIsExportModalOpen(true)}
                    className="flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 text-gray-500" />
                    <span>Export Report</span>
                  </button>
                </div>
              </div>

              {/* 4 PRIMARY STATS KPI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topMetrics.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.id} className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-10 h-10 rounded-xl ${card.iconColor} flex items-center justify-center shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-gray-500">{card.title}</span>
                        </div>

                        <div className="pt-2">
                          <div className="text-2xl font-black text-gray-900 leading-tight">{card.value}</div>
                          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                            <TrendingUp className="w-3 h-3" />
                            <span>{card.change}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-end gap-1 h-10 pb-1">
                        <div className="w-1.5 bg-gray-200 rounded-full h-4"></div>
                        <div className="w-1.5 bg-gray-200 rounded-full h-6"></div>
                        <div className="w-1.5 bg-gray-200 rounded-full h-5"></div>
                        <div className="w-1.5 bg-gray-200 rounded-full h-8"></div>
                        <div className={`w-1.5 rounded-full h-10 ${card.iconColor.split(' ')[0]}`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* MIDDLE SECTION: PLATFORM OVERVIEW MULTI-LINE CHART + USER DISTRIBUTION DONUT */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* PLATFORM OVERVIEW MULTI-LINE CHART */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h3 className="font-extrabold text-base text-gray-900 tracking-tight">Platform Overview</h3>
                    
                    <div className="flex items-center gap-3 sm:gap-4 text-xs font-bold text-gray-600 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        <span className="text-[11px]">Users</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[11px]">Enrollments</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        <span className="text-[11px]">Classes</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span className="text-[11px]">Earnings</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-end gap-2 h-56 w-full">
                      <div className="flex flex-col justify-between h-full text-[10px] font-bold text-gray-400 pr-1 shrink-0 pb-6 select-none">
                        <span>800</span>
                        <span>600</span>
                        <span>400</span>
                        <span>200</span>
                        <span>0</span>
                      </div>

                      <div className="relative flex-1 h-full flex flex-col justify-end">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 pb-6">
                          <div className="border-b border-gray-200 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-200 w-full"></div>
                        </div>

                        <svg className="w-full h-[80%] overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                          <polyline fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="10,170 80,140 160,110 240,125 320,85 400,105 480,70 560,95 640,60 690,75" />
                          <polyline fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="10,180 80,165 160,135 240,145 320,115 400,130 480,95 560,110 640,85 690,90" />
                          <polyline fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="10,190 80,182 160,170 240,175 320,155 400,165 480,140 560,150 640,130 690,135" />
                          <polyline fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="10,195 80,190 160,185 240,188 320,175 400,180 480,160 560,170 640,155 690,160" />
                        </svg>

                        <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 pt-2 px-1 border-t border-gray-200 select-none">
                          <span>Sep 1</span>
                          <span>Sep 5</span>
                          <span>Sep 10</span>
                          <span>Sep 15</span>
                          <span>Sep 20</span>
                          <span>Sep 25</span>
                          <span>Sep 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* USER DISTRIBUTION DONUT */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
                  <h3 className="font-extrabold text-base text-gray-900 tracking-tight">User Distribution</h3>

                  <div className="flex flex-col items-center justify-center py-2">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="155.19 238.76" strokeDashoffset="0" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="42.97 238.76" strokeDashoffset="-155.19" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray="11.93 238.76" strokeDashoffset="-198.16" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="28.65 238.76" strokeDashoffset="-210.09" />
                      </svg>

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-base font-black text-gray-900 leading-tight">12,548</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Users</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {userDistributionList.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.dot} shrink-0`}></span>
                          <span className="font-bold text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-black text-gray-900">{item.pct}</span>
                          <span className="text-gray-400 font-semibold w-12 text-right">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* SECONDARY ROW: 4 OPERATIONAL MINI CARDS + REVENUE OVERVIEW */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {secondaryMetrics.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.id} className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs flex items-center gap-3.5">
                        <div className={`w-11 h-11 rounded-xl ${card.iconColor} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-gray-400 block">{card.title}</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-black text-gray-900 leading-tight">{card.value}</span>
                            {card.subtext && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                                {card.subtext}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-bold text-emerald-600 block mt-0.5">{card.change}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Revenue Overview</h3>
                    <select
                      value={revenuePeriodFilter}
                      onChange={(e) => setRevenuePeriodFilter(e.target.value)}
                      className="bg-[#F8FAFC] border border-gray-200 rounded-lg px-2 py-1 text-[10.5px] font-bold text-gray-700 focus:outline-none cursor-pointer"
                    >
                      <option value="All Time">All Time</option>
                      <option value="This Month">This Month</option>
                      <option value="This Year">This Year</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-end gap-1.5 h-36 w-full">
                      <div className="flex flex-col justify-between h-full text-[9px] font-bold text-gray-400 pr-1 shrink-0 pb-4 select-none">
                        <span>$600</span>
                        <span>$400</span>
                        <span>$200</span>
                        <span>$0</span>
                      </div>

                      <div className="relative flex-1 h-full flex flex-col justify-end">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 pb-4">
                          <div className="border-b border-gray-200 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-200 w-full"></div>
                        </div>

                        <div className="relative z-0 h-[80%] flex items-end justify-between gap-1 px-0.5">
                          {dailyRevenueBars.map((bar, i) => (
                            <div key={i} className="flex-1 h-full flex flex-col items-center justify-end group cursor-pointer relative">
                              <div className="w-full bg-emerald-400 hover:bg-emerald-600 rounded-t-xs transition-all duration-200" style={{ height: `${bar.val}%` }}></div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 pt-1 border-t border-gray-200 select-none">
                          <span>Sep 1</span>
                          <span>Sep 5</span>
                          <span>Sep 10</span>
                          <span>Sep 15</span>
                          <span>Sep 20</span>
                          <span>Sep 25</span>
                          <span>Sep 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION: 3 EQUAL COLUMNS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* RECENT ACTIVITIES */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Recent Activities</h3>
                    <button onClick={() => alert('Melihat seluruh riwayat log aktivitas...')} className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer">
                      <span>View All</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {recentActivitiesList.map((act) => {
                      const Icon = act.icon;
                      return (
                        <div key={act.id} className="flex items-center gap-3">
                          {act.avatar ? (
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-300 shrink-0">
                              <img src={act.avatar} alt="User" className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h5 className="font-bold text-xs text-gray-900 truncate leading-snug">{act.title}</h5>
                            <p className="text-[10px] text-gray-400 truncate">{act.sub}</p>
                          </div>
                          <span className="text-[10px] text-gray-400 whitespace-nowrap shrink-0">{act.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* TOP CLASSES */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Top Classes</h3>
                    <button onClick={() => alert('Melihat peringkat seluruh kelas...')} className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer">
                      <span>View All</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {topClassesList.map((cls) => (
                      <div key={cls.id} className="flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-extrabold text-xs text-gray-400 w-3">{cls.rank}</span>
                          <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }} />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-extrabold text-xs text-gray-900 truncate leading-tight">{cls.title}</h5>
                            <span className="text-[10px] text-gray-400 block">{cls.students}</span>
                          </div>
                        </div>

                        <span className="text-xs font-black text-emerald-700 shrink-0">{cls.revenue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SYSTEM STATUS */}
                <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">System Status</h3>
                    <button onClick={() => alert('Melihat detail infrastruktur & server...')} className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer">
                      <span>View Details</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {systemStatusList.map((sys, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="font-bold text-gray-700">{sys.name}</span>
                        </div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {sys.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ADD USER MODAL */}
          {isAddUserModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Add New User</h3>
                      <p className="text-xs text-gray-500">Create a new student, teacher, or admin</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAddUserModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                    <input type="text" placeholder="e.g. Abdullah Al-Ansari" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" placeholder="e.g. abdullah@example.com" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Role</label>
                      <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none">
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Status</label>
                      <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none">
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsAddUserModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                  <button onClick={() => { setIsAddUserModalOpen(false); alert('Pengguna baru berhasil ditambahkan!'); }} className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs">Add User</button>
                </div>
              </div>
            </div>
          )}

          {/* IMPORT USERS MODAL */}
          {isImportUsersModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Import Users Batch</h3>
                      <p className="text-xs text-gray-500">Upload CSV or Excel file</p>
                    </div>
                  </div>
                  <button onClick={() => setIsImportUsersModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl text-center space-y-2 cursor-pointer hover:bg-gray-100/80">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                  <span className="block text-xs font-bold text-gray-800">Drag & drop your CSV file here, or browse</span>
                  <span className="block text-[10px] text-gray-400">Supports .csv, .xlsx up to 25 MB</span>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsImportUsersModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                  <button onClick={() => { setIsImportUsersModalOpen(false); alert('File CSV berhasil diimpor!'); }} className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs">Start Import</button>
                </div>
              </div>
            </div>
          )}

          {/* SEND MESSAGE MODAL */}
          {isSendMessageModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Send Message</h3>
                      <p className="text-xs text-gray-500">To: {currentSelectedUser.name} ({currentSelectedUser.email})</p>
                    </div>
                  </div>
                  <button onClick={() => setIsSendMessageModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Subject</label>
                    <input type="text" placeholder="e.g. Account Notice" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Message</label>
                    <textarea rows="4" placeholder="Type your message here..." className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-[#114B44] resize-none" />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsSendMessageModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                  <button onClick={() => { setIsSendMessageModalOpen(false); alert('Pesan berhasil terkirim!'); }} className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs">Send Message</button>
                </div>
              </div>
            </div>
          )}

          {/* EDIT USER MODAL */}
          {isEditUserModalOpen && editingUser && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Edit3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Edit User Profile</h3>
                      <p className="text-xs text-gray-500">Editing {editingUser.name}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsEditUserModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                    <input type="text" defaultValue={editingUser.name} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" defaultValue={editingUser.email} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Role</label>
                      <select defaultValue={editingUser.role} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none">
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Status</label>
                      <select defaultValue={editingUser.status} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none">
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsEditUserModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                  <button onClick={() => { setIsEditUserModalOpen(false); alert('Perubahan profil berhasil disimpan!'); }} className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs">Save Changes</button>
                </div>
              </div>
            </div>
          )}

          {/* EXPORT REPORT MODAL */}
          {isExportModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Export Platform Report</h3>
                      <p className="text-xs text-gray-500">Download analytics and activity data</p>
                    </div>
                  </div>
                  <button onClick={() => setIsExportModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Report Type</label>
                    <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none">
                      <option value="complete">Complete Executive Summary (All Metrics)</option>
                      <option value="financial">Financial & Earnings Report</option>
                      <option value="users">User Growth & Retention</option>
                      <option value="classes">Classes & Enrollment Metrics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">File Format</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-2.5 rounded-xl border-2 border-[#114B44] bg-emerald-50 text-[#114B44] font-bold text-xs text-center">PDF Document (.pdf)</button>
                      <button className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-bold text-xs text-center hover:bg-gray-100">Excel Spreadsheet (.xlsx)</button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsExportModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                  <button onClick={() => { setIsExportModalOpen(false); alert('Laporan platform berhasil diunduh!'); }} className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs">Download Report</button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIP TEACHERS MODALS                                        */}
          {/* ========================================================= */}

          {/* 1. APPROVE VIP TEACHER MODAL */}
          {isApproveVipModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Setujui & Terbitkan Guru VIP</h3>
                      <p className="text-xs text-gray-500">Berikan akses fitur VIP Mentorship & Halakah</p>
                    </div>
                  </div>
                  <button onClick={() => setIsApproveVipModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                {/* Target Teacher Profile Preview */}
                {targetVipTeacher && (
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/40 border border-amber-200 flex items-center gap-3">
                    <img
                      src={targetVipTeacher.avatar}
                      alt={targetVipTeacher.name}
                      className="w-12 h-12 rounded-xl object-cover border border-amber-300 shadow-xs shrink-0"
                      onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                    />
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-sm text-gray-900 truncate">{targetVipTeacher.name}</h4>
                      <p className="text-xs text-amber-900 font-semibold truncate">{targetVipTeacher.specialty}</p>
                      <p className="text-[11px] text-gray-500 truncate">{targetVipTeacher.email}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Bagi Hasil Platform IlmuHub (%)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        defaultValue={platformTakeRate}
                        onChange={(e) => setPlatformTakeRate(Number(e.target.value))}
                        className="w-24 bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-bold text-gray-900 text-center focus:outline-none focus:border-[#114B44]"
                      />
                      <span className="text-gray-500 font-medium">
                        Guru menerima <span className="font-black text-emerald-700">{100 - platformTakeRate}%</span> otomatis via Mayar.id / Bank.
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Tipe Badge Kehormatan Guru</label>
                    <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none">
                      <option value="gold">★ VIP Verified Mentor (Emas)</option>
                      <option value="grand">👑 Grand Master Ulumuddin (Platinum)</option>
                      <option value="sanad">🏅 Pemegang Sanad Muttashil (Spesialis)</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-[11px]">
                    <span className="font-bold text-gray-900 block">Otomasi Sistem yang Dijalankan:</span>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Aktifkan Room VIP Mentorship di Dashboard Guru</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Kirim email resmi pemberitahuan penerimaan VIP</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Hubungkan link pembayaran Mayar.id ke landing page</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsApproveVipModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      if (targetVipTeacher) {
                        handleApproveTeacher(targetVipTeacher.id);
                      }
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Setujui & Terbitkan VIP Sekarang</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. REQUEST REVISION MODAL */}
          {isRevisionVipModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Minta Revisi Berkas Pengajar</h3>
                      <p className="text-xs text-gray-500">Kirimkan poin-poin yang perlu diperbaiki oleh calon Guru VIP</p>
                    </div>
                  </div>
                  <button onClick={() => setIsRevisionVipModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-[11px]">
                    <span className="font-bold text-gray-900 block">Pilih Poin Revisi Standar:</span>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Sanad / Ijazah keilmuan belum terbaca jelas (Mohon upload scan PDF HD)</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Silabus kurikulum VIP Halakah belum mencantumkan target kitab mingguan</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-[#114B44]" />
                      <span>Sambungkan akun Mayar.id atau nomor rekening bank syariah yang valid</span>
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                      <input type="checkbox" className="rounded text-[#114B44]" />
                      <span>Penyesuaian kuota santri bimbingan 1-on-1 agar tetap kondusif</span>
                    </label>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Pesan Khusus untuk Ustadz/Pengajar</label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan catatan tambahan dengan bahasa yang sopan dan ramah..."
                      defaultValue="Jazakallahu khair atas pengajuannya. Mohon melengkapi dokumen sanad serta nomor rekening bank syariah agar dapat segera kami verifikasi dan terbitkan badge VIP."
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsRevisionVipModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      if (targetVipTeacher) {
                        handleRequestRevision(targetVipTeacher.id, 'Perlu melengkapi dokumen sanad dan detail rekening.');
                      }
                    }}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Kirim Permintaan Revisi</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. SCHEDULE SANAD VERIFICATION INTERVIEW MODAL */}
          {isScheduleVipModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Jadwalkan Sanad & Curriculum Call</h3>
                      <p className="text-xs text-gray-500">Sesi tatap muka online verifikasi keabsahan sanad</p>
                    </div>
                  </div>
                  <button onClick={() => setIsScheduleVipModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Tanggal Sesi</label>
                      <input type="date" defaultValue="2026-10-02" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Waktu (WIB)</label>
                      <input type="time" defaultValue="14:00" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Platform Video Conference</label>
                    <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none">
                      <option value="meet">Google Meet (Auto-generated link: meet.google.com/ilm-talaqqi)</option>
                      <option value="zoom">Zoom Video Meeting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Pewawancara / Tim Verifikasi</label>
                    <input type="text" defaultValue="Dewan Kurikulum & Sanad Syariah IlmuHub" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsScheduleVipModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsScheduleVipModalOpen(false);
                      alert('Undangan interview sanad & link Google Meet telah berhasil dikirimkan ke email dan WhatsApp Ustadz.');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Kirim Undangan Jadwal</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 4. MANUAL ADD / ONBOARD VIP TEACHER MODAL */}
          {isAddVipModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-xl w-full p-6 space-y-4 animate-fadeIn max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Onboard Guru VIP Baru</h3>
                      <p className="text-xs text-gray-500">Daftarkan Ustadz/Pengajar terkemuka langsung dengan status VIP</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAddVipModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Nama Lengkap & Gelar *</label>
                      <input type="text" placeholder="Contoh: Syaikh Dr. Hamdan Al-Atsari" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Bidang Spesialisasi *</label>
                      <input type="text" placeholder="Contoh: Ulumul Hadits & Takhrij" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Email Pengajar *</label>
                      <input type="email" placeholder="ustadz@ilmuhub.id" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Nomor WhatsApp *</label>
                      <input type="text" placeholder="+62 812-xxxx-xxxx" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Tarif VIP Halakah (Bulanan)</label>
                      <input type="text" defaultValue="Rp 199.000 / bln" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Mayar.id Handle</label>
                      <input type="text" placeholder="mayar.id/namaguru" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Silsilah Sanad & Kredensial</label>
                    <textarea rows={2} placeholder="Sebutkan sanad muttashil atau nama guru/masyayikh..." className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsAddVipModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsAddVipModalOpen(false);
                      alert('Guru VIP baru berhasil didaftarkan dan diaktifkan di platform!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Daftarkan & Terbitkan VIP</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 5. SANAD / DOCUMENT LIGHTBOX VIEWER MODAL */}
          {isDocViewerModalOpen && activeDocPreview && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-2xl w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">{activeDocPreview.name}</h3>
                      <p className="text-xs text-gray-500">Dokumen Pengajuan: {activeDocPreview.teacherName || 'Guru VIP'}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsDocViewerModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                {/* Simulated PDF / Certificate Viewer Sheet */}
                <div className="p-6 rounded-2xl bg-amber-50/40 border-2 border-dashed border-amber-300 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-xs">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-gray-900">IJAZAH & SANAD KEILMUAN MUTTASHIL</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Dokumen resmi bertandatangan Masyayikh, stempel ma'had 'aly, dan silsilah talaqqi.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Keaslian Dokumen Terverifikasi Tim Ahli</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                  <span className="text-gray-500 font-medium">Ukuran: {activeDocPreview.size || '2.4 MB'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        alert(`Mengunduh salinan berkas ${activeDocPreview.name}...`);
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Asli</span>
                    </button>
                    <button
                      onClick={() => setIsDocViewerModalOpen(false)}
                      className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl font-bold cursor-pointer"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. ADD STUDENT MODAL */}
          {isAddStudentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Add New Student</h3>
                      <p className="text-xs text-gray-500">Daftarkan santri/mahasiswa baru ke sistem IlmuHub</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAddStudentModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Nama Lengkap Santri/Mahasiswa *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Muhammad Farhan"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        placeholder="farhan@example.com"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">No. WhatsApp *</label>
                      <input
                        type="text"
                        placeholder="+62 812-xxxx-xxxx"
                        value={newStudent.phone}
                        onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Program Studi / Minat</label>
                      <select
                        value={newStudent.program}
                        onChange={(e) => setNewStudent({ ...newStudent, program: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Bahasa Arab & Nahwu">Bahasa Arab & Nahwu</option>
                        <option value="Arabic Conversation">Arabic Conversation</option>
                        <option value="Tahsin & Tahfidz">Tahsin & Tahfidz</option>
                        <option value="Fiqih & Muamalah">Fiqih & Muamalah</option>
                        <option value="Tafsir & Ulumul Quran">Tafsir & Ulumul Quran</option>
                        <option value="Hadits & Sunnah">Hadits & Sunnah</option>
                        <option value="Khat & Kaligrafi">Khat & Kaligrafi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Level Kemampuan</label>
                      <select
                        value={newStudent.level}
                        onChange={(e) => setNewStudent({ ...newStudent, level: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Beginner">Beginner (Pemula)</option>
                        <option value="Intermediate">Intermediate (Menengah)</option>
                        <option value="Advanced">Advanced (Lanjutan)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Kota / Domisili</label>
                    <input
                      type="text"
                      placeholder="Jakarta, Indonesia"
                      value={newStudent.city}
                      onChange={(e) => setNewStudent({ ...newStudent, city: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsAddStudentModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      if (!newStudent.name.trim() || !newStudent.email.trim()) {
                        alert('Silakan lengkapi nama dan email santri/mahasiswa.');
                        return;
                      }
                      const newId = `std-${Date.now()}`;
                      const studentObj = {
                        id: newId,
                        number: studentsList.length + 1,
                        name: newStudent.name,
                        email: newStudent.email,
                        avatar: null,
                        initials: newStudent.name.substring(0, 2).toUpperCase(),
                        studentId: `STD-2026-${String(studentsList.length + 1).padStart(3, '0')}`,
                        phone: newStudent.phone || '+62 812-0000-0000',
                        city: newStudent.city || 'Indonesia',
                        program: newStudent.program,
                        level: newStudent.level,
                        enrolledCourses: 1,
                        completedCourses: 0,
                        progress: 0,
                        gpa: '0.00',
                        attendance: '100%',
                        status: 'Active',
                        statusType: 'active',
                        joinDate: 'Just Now',
                        lastActive: 'Baru Mendaftar',
                        vipMentorship: false,
                        bio: `Mahasiswa baru pada program ${newStudent.program}.`,
                        guardian: 'Wali Siswa',
                        courses: [
                          { name: `Orientasi ${newStudent.program}`, tutor: 'Ust. Ahmed Mohamed', progress: 0, score: 'Belum Ujian' }
                        ],
                        certificates: [],
                        payments: [
                          { item: 'Pendaftaran Mahasiswa Baru', amount: 'Rp 150.000', date: 'Hari Ini', status: 'Lunas' }
                        ]
                      };
                      setStudentsList([studentObj, ...studentsList]);
                      setSelectedStudentId(newId);
                      setIsAddStudentModalOpen(false);
                      setNewStudent({
                        name: '',
                        email: '',
                        phone: '',
                        city: 'Jakarta, Indonesia',
                        program: 'Bahasa Arab & Nahwu',
                        level: 'Beginner',
                        status: 'Active'
                      });
                      alert(`Mahasiswa ${studentObj.name} berhasil ditambahkan ke database!`);
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Daftarkan Mahasiswa</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 7. IMPORT STUDENTS MODAL */}
          {isImportStudentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Import Data Mahasiswa</h3>
                      <p className="text-xs text-gray-500">Unggah berkas CSV / Excel data santri massal</p>
                    </div>
                  </div>
                  <button onClick={() => setIsImportStudentModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl text-center space-y-3 bg-[#F8FAFC]">
                  <UploadCloud className="w-10 h-10 text-gray-400 mx-auto" />
                  <div>
                    <span className="font-bold text-xs text-gray-700 block">Tarik & lepas file CSV / Excel di sini</span>
                    <span className="text-[11px] text-gray-400">atau klik untuk memilih file dari komputer</span>
                  </div>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-bold shadow-2xs hover:bg-gray-50 cursor-pointer">
                    Pilih Berkas (.csv, .xlsx)
                  </button>
                </div>

                <div className="text-[11px] text-gray-500 space-y-1">
                  <div className="font-bold text-gray-700">Format Template Kolom:</div>
                  <div>`Name`, `Email`, `Phone`, `City`, `Program`, `Level`, `Status`</div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsImportStudentModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsImportStudentModalOpen(false);
                      alert('Simulasi Import: 45 data mahasiswa baru berhasil diimpor ke sistem!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Mulai Impor Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 8. CREATE / ADD CLASS MODAL */}
          {isAddClassModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-xl w-full p-6 space-y-4 animate-fadeIn max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Create New Class</h3>
                      <p className="text-xs text-gray-500">Buka ruang kelas talaqqi dan kurikulum baru</p>
                    </div>
                  </div>
                  <button onClick={() => setIsAddClassModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Judul Kelas / Kitab *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Nahwu Dasar: Matan Al-Ajurrumiyyah"
                      value={newClass.title}
                      onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Kode Kelas</label>
                      <input
                        type="text"
                        placeholder="Contoh: CLS-NAH-102"
                        value={newClass.code}
                        onChange={(e) => setNewClass({ ...newClass, code: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Bidang Ilmu / Subjek</label>
                      <select
                        value={newClass.subject}
                        onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Nahwu & Shorof">Nahwu & Shorof</option>
                        <option value="Arabic Conversation">Arabic Conversation</option>
                        <option value="Tahsin & Tahfidz">Tahsin & Tahfidz</option>
                        <option value="Fiqih & Usul Fiqh">Fiqih & Usul Fiqh</option>
                        <option value="Tafsir & Ulumul Quran">Tafsir & Ulumul Quran</option>
                        <option value="Hadits & Musthalah">Hadits & Musthalah</option>
                        <option value="Khat & Kaligrafi">Khat & Kaligrafi</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Pengajar / Ustadz *</label>
                      <select
                        value={newClass.instructor}
                        onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Ust. Ahmed Mohamed">Ust. Ahmed Mohamed (Nahwu & Shorof)</option>
                        <option value="Ustazah Siti Aisyah, M.A.">Ustazah Siti Aisyah, M.A. (Muhadatsah)</option>
                        <option value="Syaikh Yusuf Al-Qari">Syaikh Yusuf Al-Qari (Tahsin & Qiraat)</option>
                        <option value="Dr. Sheikh Tariq Al-Madani">Dr. Sheikh Tariq Al-Madani (Fiqih & Tafsir)</option>
                        <option value="Ust. Ahmad Fauzi, Lc.">Ust. Ahmad Fauzi, Lc. (Hadits)</option>
                        <option value="Ust. Bilal Mansur">Ust. Bilal Mansur (Khat & Kaligrafi)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Level Jenjang</label>
                      <select
                        value={newClass.level}
                        onChange={(e) => setNewClass({ ...newClass, level: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Beginner">Beginner (Pemula)</option>
                        <option value="Intermediate">Intermediate (Menengah)</option>
                        <option value="Advanced">Advanced (Lanjutan)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Jadwal Pertemuan</label>
                      <input
                        type="text"
                        placeholder="Contoh: Senin & Rabu • 19:30 WIB"
                        value={newClass.schedule}
                        onChange={(e) => setNewClass({ ...newClass, schedule: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Kapasitas Kuota Santri</label>
                      <input
                        type="number"
                        placeholder="50"
                        value={newClass.quota}
                        onChange={(e) => setNewClass({ ...newClass, quota: Number(e.target.value) })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Biaya / Biaya Kursus</label>
                      <input
                        type="text"
                        placeholder="Rp 299.000 / bln"
                        value={newClass.price}
                        onChange={(e) => setNewClass({ ...newClass, price: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Format Pembelajaran</label>
                      <input
                        type="text"
                        placeholder="Live Zoom + Rekaman HD"
                        value={newClass.format}
                        onChange={(e) => setNewClass({ ...newClass, format: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Deskripsi Singkat / Target Belajar</label>
                    <textarea
                      rows={2}
                      placeholder="Jelaskan silabus materi atau capaian santri setelah lulus kelas ini..."
                      value={newClass.description}
                      onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsAddClassModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      if (!newClass.title.trim()) {
                        alert('Silakan masukkan judul kelas.');
                        return;
                      }
                      const newId = `cls-${Date.now()}`;
                      const classObj = {
                        id: newId,
                        number: classesList.length + 1,
                        title: newClass.title,
                        code: newClass.code || `CLS-${newClass.subject.substring(0, 3).toUpperCase()}-${String(classesList.length + 1).padStart(3, '0')}`,
                        subject: newClass.subject,
                        level: newClass.level,
                        image: '/images/class_nahwu.jpg',
                        instructor: {
                          name: newClass.instructor,
                          avatar: '/images/tutor_ahmed.jpg',
                          specialty: `${newClass.subject} Tutor`,
                          email: 'instructor@ilmuhub.com',
                          phone: '+62 812-0000-0000'
                        },
                        enrollment: 0,
                        quota: newClass.quota || 50,
                        schedule: newClass.schedule || 'Senin & Rabu • 19:30 WIB',
                        format: newClass.format || 'Live Zoom + Rekaman HD',
                        rating: 5.0,
                        reviewsCount: 0,
                        price: newClass.price || 'Rp 299.000 / bln',
                        status: 'Active',
                        statusType: 'active',
                        startDate: '01 Okt 2026',
                        endDate: '31 Des 2026',
                        totalSessions: 16,
                        completedSessions: 0,
                        description: newClass.description || `Kelas intensif ${newClass.title} bersama ${newClass.instructor}.`,
                        enrolledStudents: [],
                        syllabus: [
                          { module: 'Modul 1', title: 'Orientasi & Pengantar Materi', status: 'Mendatang' },
                          { module: 'Modul 2', title: 'Pendalaman Konsep & Praktik Dasar', status: 'Mendatang' },
                          { module: 'Modul 3', title: 'Evaluasi & Ujian Kelulusan Bersanad', status: 'Mendatang' }
                        ]
                      };
                      setClassesList([classObj, ...classesList]);
                      setSelectedClassId(newId);
                      setIsAddClassModalOpen(false);
                      setNewClass({
                        title: '',
                        code: '',
                        subject: 'Nahwu & Shorof',
                        level: 'Beginner',
                        instructor: 'Ust. Ahmed Mohamed',
                        schedule: 'Senin & Rabu • 19:30 WIB',
                        quota: 50,
                        price: 'Rp 299.000 / bln',
                        format: 'Live Zoom + Rekaman HD',
                        description: ''
                      });
                      alert(`Kelas baru "${classObj.title}" berhasil dibuat dan dibuka untuk pendaftaran!`);
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Terbitkan Kelas</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 9. IMPORT CLASSES MODAL */}
          {isImportClassesModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Import Data Jadwal Kelas</h3>
                      <p className="text-xs text-gray-500">Unggah kurikulum dan jadwal kelas massal</p>
                    </div>
                  </div>
                  <button onClick={() => setIsImportClassesModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl text-center space-y-3 bg-[#F8FAFC]">
                  <UploadCloud className="w-10 h-10 text-gray-400 mx-auto" />
                  <div>
                    <span className="font-bold text-xs text-gray-700 block">Tarik & lepas file CSV / Excel di sini</span>
                    <span className="text-[11px] text-gray-400">atau klik untuk memilih file jadwal dari komputer</span>
                  </div>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-bold shadow-2xs hover:bg-gray-50 cursor-pointer">
                    Pilih Berkas (.csv, .xlsx)
                  </button>
                </div>

                <div className="text-[11px] text-gray-500 space-y-1">
                  <div className="font-bold text-gray-700">Format Template Kolom:</div>
                  <div>`Title`, `Code`, `Subject`, `Instructor`, `Schedule`, `Quota`, `Price`</div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsImportClassesModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsImportClassesModalOpen(false);
                      alert('Simulasi Import: 12 jadwal kelas baru berhasil diimpor!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Mulai Impor Kelas</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 10. ENROLL STUDENT INTO CLASS MODAL */}
          {isEnrollStudentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Daftarkan Santri ke Kelas</h3>
                      <p className="text-xs text-gray-500">{currentSelectedClass.title}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsEnrollStudentModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Pilih Santri / Mahasiswa</label>
                    <select id="enroll-student-select" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer">
                      {studentsList.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.studentId}) • {s.program}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Status Pembayaran</label>
                    <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer">
                      <option value="paid">Lunas (Invoice Verified)</option>
                      <option value="beasiswa">Beasiswa / Gratis</option>
                      <option value="pending">Menunggu Pembayaran</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsEnrollStudentModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      const selectEl = document.getElementById('enroll-student-select');
                      const selectedId = selectEl ? selectEl.value : studentsList[0]?.id;
                      const selectedSt = studentsList.find(s => s.id === selectedId) || studentsList[0];

                      // Add student to current class
                      const updatedClasses = classesList.map(c => {
                        if (c.id === currentSelectedClass.id) {
                          const alreadyIn = c.enrolledStudents.some(st => st.id === selectedSt.id);
                          if (alreadyIn) return c;
                          return {
                            ...c,
                            enrollment: c.enrollment + 1,
                            enrolledStudents: [
                              {
                                id: selectedSt.id,
                                name: selectedSt.name,
                                email: selectedSt.email,
                                avatar: selectedSt.avatar,
                                studentId: selectedSt.studentId,
                                attendance: '100%',
                                score: 'Baru Masuk',
                                submittedAssignments: '0/0',
                                status: 'Active'
                              },
                              ...c.enrolledStudents
                            ]
                          };
                        }
                        return c;
                      });

                      setClassesList(updatedClasses);
                      setIsEnrollStudentModalOpen(false);
                      alert(`Santri ${selectedSt.name} berhasil didaftarkan ke kelas ${currentSelectedClass.title}!`);
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Konfirmasi Pendaftaran</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 11. CREATE LIVE ROOM MODAL */}
          {isCreateLiveModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Create Live Room</h3>
                      <p className="text-xs text-gray-500">Buka sesi siaran langsung interaktif kelas sekarang</p>
                    </div>
                  </div>
                  <button onClick={() => setIsCreateLiveModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Judul Sesi Live *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Quran Recitation & Tajweed Talaqqi"
                      value={newLiveRoom.title}
                      onChange={(e) => setNewLiveRoom({ ...newLiveRoom, title: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Sub-judul / Topik</label>
                    <input
                      type="text"
                      placeholder="Contoh: Tajweed Practice & Makhorijul Huruf"
                      value={newLiveRoom.subtitle}
                      onChange={(e) => setNewLiveRoom({ ...newLiveRoom, subtitle: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Guru / Ustadz Pengajar</label>
                      <select
                        value={newLiveRoom.teacher}
                        onChange={(e) => setNewLiveRoom({ ...newLiveRoom, teacher: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Siti Aisyah">Siti Aisyah</option>
                        <option value="Omar Hassan">Omar Hassan</option>
                        <option value="Layla Karim">Layla Karim</option>
                        <option value="Zainab Ali">Zainab Ali</option>
                        <option value="Dr. Ahmad Fauzi">Dr. Ahmad Fauzi</option>
                        <option value="Fatimah Nur">Fatimah Nur</option>
                        <option value="Muhammad Khan">Muhammad Khan</option>
                        <option value="Nadia Rahman">Nadia Rahman</option>
                        <option value="Ali Reza">Ali Reza</option>
                        <option value="Hassan Malik">Hassan Malik</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Mata Pelajaran / Subject</label>
                      <select
                        value={newLiveRoom.subject}
                        onChange={(e) => setNewLiveRoom({ ...newLiveRoom, subject: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Islamic Studies">Islamic Studies</option>
                        <option value="English">English</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Business">Business</option>
                        <option value="Psychology">Psychology</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Deskripsi Live Room</label>
                    <textarea
                      rows={2}
                      placeholder="Instruksi dan deskripsi materi untuk santri..."
                      value={newLiveRoom.description}
                      onChange={(e) => setNewLiveRoom({ ...newLiveRoom, description: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsCreateLiveModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      if (!newLiveRoom.title.trim()) {
                        alert('Silakan masukkan judul sesi live.');
                        return;
                      }
                      const newId = `live-${Date.now()}`;
                      const roomObj = {
                        id: newId,
                        number: liveRoomsList.length + 1,
                        title: newLiveRoom.title,
                        subtitle: newLiveRoom.subtitle || 'Live Talaqqi Session',
                        image: '/images/class_nahwu.jpg',
                        teacher: newLiveRoom.teacher,
                        teacherAvatar: '/images/tutor_ahmed.jpg',
                        subject: newLiveRoom.subject,
                        subjectBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                        startTime: 'Hari Ini 09:00 AM',
                        startedTimeText: 'Baru Dimulai (Live)',
                        duration: '1h 30m',
                        attendees: 1,
                        status: 'Live',
                        statusType: 'live',
                        description: newLiveRoom.description || 'Sesi pembelajaran langsung interaktif.'
                      };
                      setLiveRoomsList([roomObj, ...liveRoomsList]);
                      setSelectedLiveRoomId(newId);
                      setIsCreateLiveModalOpen(false);
                      setNewLiveRoom({
                        title: '',
                        subtitle: '',
                        teacher: 'Siti Aisyah',
                        subject: 'Islamic Studies',
                        startTime: '23 Sep 2026 09:00 AM',
                        duration: '1h 20m',
                        status: 'Live',
                        description: "Let's practice correct recitation with proper Tajweed rules."
                      });
                      alert(`Ruang live "${roomObj.title}" berhasil dibuka!`);
                    }}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>Mulai Siaran Live</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 12. SCHEDULE LIVE ROOM MODAL */}
          {isScheduleLiveModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-900 leading-tight">Schedule Live Room</h3>
                      <p className="text-xs text-gray-500">Jadwalkan ruang kelas live untuk waktu mendatang</p>
                    </div>
                  </div>
                  <button onClick={() => setIsScheduleLiveModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Judul Kelas</label>
                    <input type="text" placeholder="Contoh: Arabic Language: Reading & Writing" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Tanggal</label>
                      <input type="date" defaultValue="2026-09-24" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Jam Mulai</label>
                      <input type="time" defaultValue="14:00" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsScheduleLiveModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsScheduleLiveModalOpen(false);
                      alert('Jadwal live room berhasil disimpan dan notifikasi telah dikirim ke santri!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Simpan Jadwal</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Create Schedule */}
          {isCreateScheduleModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#114B44] flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Buat Jadwal Kelas Baru</h3>
                      <p className="text-xs text-gray-500">Tambahkan sesi jadwal mingguan ke kalender akademik</p>
                    </div>
                  </div>
                  <button onClick={() => setIsCreateScheduleModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Mata Pelajaran</label>
                    <select
                      value={newScheduleSlot.subject}
                      onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, subject: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    >
                      <option value="Tajweed & Tahsin">Tajweed & Tahsin</option>
                      <option value="Fiqh & Ushul">Fiqh & Ushul</option>
                      <option value="Arabic Language">Arabic Language</option>
                      <option value="Hadith Studies">Hadith Studies</option>
                      <option value="Tafsir Al-Qur'an">Tafsir Al-Qur'an</option>
                      <option value="Islamic History">Islamic History</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Hari</label>
                      <select
                        value={newScheduleSlot.day}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, day: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      >
                        <option value="Mon">Senin (Mon)</option>
                        <option value="Tue">Selasa (Tue)</option>
                        <option value="Wed">Rabu (Wed)</option>
                        <option value="Thu">Kamis (Thu)</option>
                        <option value="Fri">Jumat (Fri)</option>
                        <option value="Sat">Sabtu (Sat)</option>
                        <option value="Sun">Minggu (Sun)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Pengajar / Ustadz</label>
                      <input
                        type="text"
                        value={newScheduleSlot.teacher}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, teacher: e.target.value })}
                        placeholder="Ustadz Abdullah"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Jam Mulai (08:00 - 17:00)</label>
                      <input
                        type="number"
                        min="8"
                        max="16"
                        value={newScheduleSlot.startHour}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, startHour: parseInt(e.target.value) || 8 })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Durasi (Jam)</label>
                      <input
                        type="number"
                        min="1"
                        max="4"
                        value={newScheduleSlot.duration}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, duration: parseInt(e.target.value) || 1 })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Ruangan / Mode</label>
                      <input
                        type="text"
                        value={newScheduleSlot.room}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, room: e.target.value })}
                        placeholder="Contoh: Room 204"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Kapasitas Santri</label>
                      <input
                        type="number"
                        value={newScheduleSlot.students}
                        onChange={(e) => setNewScheduleSlot({ ...newScheduleSlot, students: parseInt(e.target.value) || 25 })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
                  <button onClick={() => setIsCreateScheduleModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      const colorMap = {
                        'Tajweed & Tahsin': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', badge: 'bg-emerald-100 text-emerald-800' },
                        'Fiqh & Ushul': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-900', badge: 'bg-indigo-100 text-indigo-800' },
                        'Arabic Language': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', badge: 'bg-amber-100 text-amber-800' },
                        'Hadith Studies': { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-900', badge: 'bg-sky-100 text-sky-800' },
                        'Tafsir Al-Qur\'an': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-900', badge: 'bg-purple-100 text-purple-800' },
                        'Islamic History': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-900', badge: 'bg-teal-100 text-teal-800' },
                      };
                      const clr = colorMap[newScheduleSlot.subject] || colorMap['Tajweed & Tahsin'];
                      setScheduleEventsList(prev => [
                        ...prev,
                        {
                          id: `sch-${Date.now()}`,
                          title: newScheduleSlot.subject,
                          teacher: newScheduleSlot.teacher,
                          day: newScheduleSlot.day,
                          startHour: newScheduleSlot.startHour,
                          duration: newScheduleSlot.duration,
                          room: newScheduleSlot.room,
                          students: newScheduleSlot.students,
                          ...clr
                        }
                      ]);
                      setIsCreateScheduleModalOpen(false);
                      alert('Jadwal baru berhasil ditambahkan ke kalender!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Tambahkan Jadwal</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Import Schedule */}
          {isImportScheduleModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#114B44] flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Import Jadwal (Excel / CSV)</h3>
                      <p className="text-xs text-gray-500">Unggah file jadwal untuk otomatisasi massal</p>
                    </div>
                  </div>
                  <button onClick={() => setIsImportScheduleModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="border-2 border-dashed border-gray-200 hover:border-[#114B44] transition-colors rounded-2xl p-6 text-center bg-gray-50/60 cursor-pointer flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-teal-100/60 text-[#114B44] flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-gray-800">Klik untuk upload file</div>
                    <div className="text-[11px] text-gray-400">Mendukung format .XLSX, .XLS, atau .CSV (Maks. 10MB)</div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-800 text-[11px] space-y-1">
                    <div className="font-black">Format Kolom yang Dibutuhkan:</div>
                    <div>Hari, Jam Mulai, Jam Selesai, Mata Pelajaran, Ustadz, Ruangan, Kapasitas</div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsImportScheduleModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsImportScheduleModalOpen(false);
                      alert('Proses import data jadwal berhasil! 12 sesi baru dimuat.');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Mulai Import</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* MODALS FOR ASSIGNMENTS ROOM                              */}
          {/* ========================================================= */}
          
          {/* Modal Create Assignment */}
          {isCreateAssignmentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200 my-8">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Buat Tugas Baru (Create Assignment)</h3>
                      <p className="text-xs text-gray-500">Tugaskan latihan, essay, atau proyek untuk santri</p>
                    </div>
                  </div>
                  <button onClick={() => setIsCreateAssignmentModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Judul Tugas *</label>
                    <input
                      type="text"
                      placeholder="Contoh: Essay: Benefits of Renewable Energy"
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Tipe Pengumpulan</label>
                      <select
                        value={newAssignment.type}
                        onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Essay">Essay</option>
                        <option value="Video Submission">Video Submission</option>
                        <option value="Document">Document (PDF/Doc)</option>
                        <option value="Project">Project / Code</option>
                        <option value="Image">Image / Poster</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Target Kelas</label>
                      <select
                        value={newAssignment.class}
                        onChange={(e) => setNewAssignment({ ...newAssignment, class: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Grade 10A">Grade 10A</option>
                        <option value="Grade 8B">Grade 8B</option>
                        <option value="Grade 11A">Grade 11A</option>
                        <option value="Grade 9A">Grade 9A</option>
                        <option value="Grade 10B">Grade 10B</option>
                        <option value="Grade 12A">Grade 12A</option>
                        <option value="Grade 11B">Grade 11B</option>
                        <option value="Grade 9B">Grade 9B</option>
                        <option value="Grade 12B">Grade 12B</option>
                        <option value="Grade 8A">Grade 8A</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Mata Pelajaran</label>
                      <select
                        value={newAssignment.subject}
                        onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Science">Science</option>
                        <option value="Islamic Studies">Islamic Studies</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Arabic">Arabic</option>
                        <option value="History">History</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business">Business</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Psychology">Psychology</option>
                        <option value="English">English</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Guru / Pengampu</label>
                      <select
                        value={newAssignment.teacher}
                        onChange={(e) => setNewAssignment({ ...newAssignment, teacher: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Dr. Ahmad Fauzi">Dr. Ahmad Fauzi</option>
                        <option value="Siti Aisyah">Siti Aisyah</option>
                        <option value="Layla Karim">Layla Karim</option>
                        <option value="Zainab Ali">Zainab Ali</option>
                        <option value="Fatimah Nur">Fatimah Nur</option>
                        <option value="Muhammad Khan">Muhammad Khan</option>
                        <option value="Ali Reza">Ali Reza</option>
                        <option value="Nadia Rahman">Nadia Rahman</option>
                        <option value="Hassan Malik">Hassan Malik</option>
                        <option value="Omar Hassan">Omar Hassan</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Batas Waktu (Due Date)</label>
                      <input
                        type="text"
                        placeholder="Contoh: 30 Sep 2026, 23:59"
                        value={newAssignment.dueDate}
                        onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Total Poin Maksimal</label>
                      <input
                        type="number"
                        placeholder="100"
                        value={newAssignment.totalPoints}
                        onChange={(e) => setNewAssignment({ ...newAssignment, totalPoints: Number(e.target.value) })}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Deskripsi & Instruksi Pengerjaan</label>
                    <textarea
                      rows={3}
                      placeholder="Jelaskan petunjuk teknis pengerjaan tugas ini secara lengkap..."
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsCreateAssignmentModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      if (!newAssignment.title.trim()) {
                        alert('Silakan masukkan judul tugas terlebih dahulu.');
                        return;
                      }

                      const newId = `asg-${Date.now()}`;
                      const createdItem = {
                        id: newId,
                        num: assignmentsList.length + 1,
                        title: newAssignment.title,
                        type: newAssignment.type,
                        class: newAssignment.class,
                        subject: newAssignment.subject,
                        subjectColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
                        teacher: newAssignment.teacher,
                        teacherAvatar: '/images/teacher_ahmad.jpg',
                        dueDate: newAssignment.dueDate || '30 Sep 2026, 23:59',
                        submissionsCount: 0,
                        totalStudents: 30,
                        status: 'Active',
                        statusBadge: 'bg-blue-50 text-blue-700 border-blue-200',
                        imageBanner: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80',
                        totalPoints: newAssignment.totalPoints || 100,
                        description: newAssignment.description || 'Instruksi pengerjaan tugas telah diterbitkan oleh pengampu.',
                        overview: {
                          submitted: 0,
                          submittedPct: 0,
                          pending: 30,
                          pendingPct: 100,
                          late: 0,
                          latePct: 0
                        },
                        recentSubmissions: []
                      };

                      setAssignmentsList([createdItem, ...assignmentsList]);
                      setSelectedAssignmentId(newId);
                      setIsCreateAssignmentModalOpen(false);
                      setNewAssignment({
                        title: '',
                        type: 'Essay',
                        class: 'Grade 10A',
                        subject: 'Science',
                        teacher: 'Dr. Ahmad Fauzi',
                        dueDate: '25 Sep 2026, 23:59',
                        totalPoints: 100,
                        description: ''
                      });
                      alert('Tugas baru berhasil dibuat dan didistribusikan ke kelas!');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Terbitkan Tugas</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Import Assignments */}
          {isImportAssignmentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Import Tugas (Excel / CSV)</h3>
                      <p className="text-xs text-gray-500">Unggah kumpulan soal atau bank tugas secara masal</p>
                    </div>
                  </div>
                  <button onClick={() => setIsImportAssignmentModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="border-2 border-dashed border-gray-200 hover:border-[#114B44] transition-colors rounded-2xl p-6 text-center bg-gray-50/60 cursor-pointer flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100/60 text-purple-600 flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-gray-800">Klik untuk upload file spreadsheet tugas</div>
                    <div className="text-[11px] text-gray-400">Mendukung format .XLSX, .XLS, atau .CSV (Maks. 10MB)</div>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl text-purple-900 text-[11px] space-y-1">
                    <div className="font-black">Format Kolom yang Dibutuhkan:</div>
                    <div>Judul, Tipe, Kelas, Mata Pelajaran, Pengampu, Batas Waktu, Poin Maksimal, Deskripsi</div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsImportAssignmentModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                  <button
                    onClick={() => {
                      setIsImportAssignmentModalOpen(false);
                      alert('Proses import data tugas berhasil! 8 tugas baru siap ditugaskan.');
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Mulai Import</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Grade Student Submission */}
          {isGradeModalOpen && selectedSubmissionToGrade && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={selectedSubmissionToGrade.avatar}
                      alt={selectedSubmissionToGrade.name}
                      className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                      onError={(e) => { e.target.src = '/images/student_ali.jpg'; }}
                    />
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Penilaian Tugas: {selectedSubmissionToGrade.name}</h3>
                      <p className="text-xs text-gray-500">{selectedSubmissionToGrade.timeAgo}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsGradeModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs font-bold cursor-pointer">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Skor Nilai (0 - 100)</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={gradeInput}
                        onChange={(e) => setGradeInput(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-black text-[#114B44] focus:outline-none focus:border-[#114B44]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-400 text-xs">/ 100</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Catatan & Masukan Ustadz / Feedback</label>
                    <textarea
                      rows={3}
                      value={feedbackInput}
                      onChange={(e) => setFeedbackInput(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Nilai dan feedback akan otomatis dikirimkan ke dashboard santri.</span>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                  <button onClick={() => setIsGradeModalOpen(false)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer">Tutup</button>
                  <button
                    onClick={() => {
                      // Update submission score
                      setAssignmentsList(prev => prev.map(a => {
                        if (a.id === selectedAssignmentId) {
                          const updatedRecent = a.recentSubmissions.map(s => {
                            if (s.id === selectedSubmissionToGrade.id) {
                              return { ...s, score: `${gradeInput}/100`, status: 'graded', gradedScore: Number(gradeInput) };
                            }
                            return s;
                          });
                          return { ...a, recentSubmissions: updatedRecent };
                        }
                        return a;
                      }));
                      setIsGradeModalOpen(false);
                      alert(`Nilai ${gradeInput}/100 untuk ${selectedSubmissionToGrade.name} berhasil disimpan!`);
                    }}
                    className="px-5 py-2.5 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Simpan Nilai</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
