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
  CreditCard
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

  const adminName = user?.name || 'Admin';
  const adminRole = 'Super Admin';
  const adminEmail = user?.email || 'admin@ilmhub.com';
  const adminAvatar = user?.avatar || '/images/tutor_ahmed.jpg';

  // Navigation Items matching media_1790730977291.jpg & media_1790731145724.jpg & media_1790731825631.jpg
  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap, badge: '24' },
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
                    onClick={() => {
                      if (item.id === 'live') {
                        onNavigateToLive({
                          title: 'Nahwu for Beginners (Super Admin Monitoring)',
                          tutor: { name: 'Ahmed Mohamed', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        });
                        return;
                      }
                      setActiveNav(item.id);
                    }}
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
          {activeNav === 'teachers' ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. TOP VIP TEACHERS HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <GraduationCap className="w-5 h-5" />
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
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Total Guru Terdaftar</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">1,248</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8% dari bulan lalu</span>
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

                {/* VIP Mentors Approved */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">VIP Mentors Aktif</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-gray-900 leading-tight">342</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        <span>+28% pertumbuhan VIP</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-amber-100 rounded-full h-3"></div>
                    <div className="w-1.5 bg-amber-200 rounded-full h-5"></div>
                    <div className="w-1.5 bg-amber-300 rounded-full h-7"></div>
                    <div className="w-1.5 bg-amber-400 rounded-full h-9"></div>
                    <div className="w-1.5 bg-amber-500 rounded-full h-10"></div>
                  </div>
                </div>

                {/* Pending VIP Applications */}
                <div className="bg-white rounded-2xl border border-amber-200/80 bg-gradient-to-br from-white to-amber-50/40 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs animate-pulse">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-amber-900">Menunggu Review</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-black text-amber-900 leading-tight">24 Pengajuan</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>Butuh verifikasi sanad & kurikulum</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-200 text-amber-900">
                    Action
                  </span>
                </div>

                {/* VIP Mentorship GMV & Platform Fee */}
                <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Coins className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Total GMV Mentorship</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-black text-gray-900 leading-tight">Rp 184.500.000</div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 mt-0.5">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Komisi Admin: Rp 27.675.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10 pb-1">
                    <div className="w-1.5 bg-emerald-100 rounded-full h-3"></div>
                    <div className="w-1.5 bg-emerald-200 rounded-full h-6"></div>
                    <div className="w-1.5 bg-emerald-300 rounded-full h-8"></div>
                    <div className="w-1.5 bg-emerald-500 rounded-full h-10"></div>
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
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-gray-100 bg-[#F8FAFC] text-gray-500 font-bold uppercase text-[10px] tracking-wider">
                            <th className="p-3.5 pl-4 w-10">
                              <input
                                type="checkbox"
                                checked={selectedVipCheckboxes.length === vipTeachersList.length && vipTeachersList.length > 0}
                                onChange={toggleSelectAllVip}
                                className="rounded text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3.5 px-3">Guru / Ustadz</th>
                            <th className="py-3.5 px-3">Spesialisasi & Sanad</th>
                            <th className="py-3.5 px-3">Tarif VIP Diajukan</th>
                            <th className="py-3.5 px-3">Berkas & Bukti</th>
                            <th className="py-3.5 px-3">Status Pengajuan</th>
                            <th className="py-3.5 px-3 text-right pr-4">Aksi Cepat</th>
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
                                          <span className="font-extrabold text-gray-900 group-hover:text-[#114B44] transition-colors truncate">
                                            {teacher.name}
                                          </span>
                                        </div>
                                        <div className="text-[11px] text-gray-500 truncate flex items-center gap-1.5 mt-0.5">
                                          <span>{teacher.location}</span>
                                          <span>•</span>
                                          <span className="text-gray-400 font-mono text-[10px]">{teacher.phone}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Specialty & Sanad Column */}
                                  <td className="py-3 px-3">
                                    <div className="space-y-1 max-w-[200px]">
                                      <span className="inline-block px-2 py-0.5 rounded-md font-bold text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200">
                                        {teacher.specialty}
                                      </span>
                                      <p className="text-[11px] text-gray-600 truncate font-medium">
                                        {teacher.credentials}
                                      </p>
                                    </div>
                                  </td>

                                  {/* Proposed VIP Pricing */}
                                  <td className="py-3 px-3">
                                    <div className="space-y-0.5 text-[11px]">
                                      <div className="font-extrabold text-gray-900 flex items-center gap-1">
                                        <span className="text-gray-400 font-normal">Halakah:</span>
                                        <span className="text-emerald-700">{teacher.pricingTiers.halakah.price}</span>
                                      </div>
                                      <div className="text-gray-600 font-semibold flex items-center gap-1">
                                        <span className="text-gray-400 font-normal">1-on-1:</span>
                                        <span>{teacher.pricingTiers.mentorship.price}</span>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Documents & Sanad Badge */}
                                  <td className="py-3 px-3" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex flex-wrap gap-1 items-center max-w-[170px]">
                                      {teacher.documents.map((doc) => (
                                        <button
                                          key={doc.id}
                                          onClick={() => {
                                            setActiveDocPreview({ ...doc, teacherName: teacher.name });
                                            setIsDocViewerModalOpen(true);
                                          }}
                                          className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border transition-colors cursor-pointer ${
                                            doc.isVerified
                                              ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                                              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                                          }`}
                                          title={`Lihat ${doc.name}`}
                                        >
                                          <FileCheck className="w-3 h-3 text-blue-600" />
                                          <span className="truncate max-w-[90px]">{doc.name}</span>
                                        </button>
                                      ))}
                                    </div>
                                  </td>

                                  {/* Status Column */}
                                  <td className="py-3 px-3">
                                    {teacher.status === 'Approved VIP' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                        <span>VIP Aktif</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Sanad Verified' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                                        <span>Sanad Valid</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Pending Review' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200">
                                        <Clock className="w-3 h-3 text-amber-600" />
                                        <span>Menunggu Review</span>
                                      </span>
                                    )}
                                    {teacher.status === 'Needs Revision' && (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                                        <AlertCircle className="w-3 h-3 text-rose-600" />
                                        <span>Butuh Revisi</span>
                                      </span>
                                    )}
                                  </td>

                                  {/* Quick Actions Column */}
                                  <td className="py-3 px-3 text-right pr-4" onClick={(e) => e.stopPropagation()}>
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

        </main>
      </div>

    </div>
  );
}
