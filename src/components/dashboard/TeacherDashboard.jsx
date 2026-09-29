import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  PlusCircle, 
  Video, 
  Users, 
  Calendar, 
  FileText, 
  HelpCircle, 
  DollarSign, 
  MessageSquare, 
  Star, 
  BarChart2, 
  User, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Upload, 
  Radio, 
  ArrowUpRight, 
  CheckCircle2, 
  Edit3,
  TrendingUp,
  SlidersHorizontal,
  Share2,
  CalendarPlus,
  Award,
  Folder,
  MoreVertical,
  Layers,
  Globe,
  Sparkles,
  Clock,
  ArrowRight,
  ArrowLeft,
  Copy,
  RotateCcw,
  Check,
  Trophy,
  ExternalLink,
  BookMarked,
  Eye,
  GripVertical,
  Trash2,
  Plus,
  Image as ImageIcon,
  Lock,
  Unlock,
  ShieldCheck,
  Tag,
  GraduationCap,
  List,
  Ban,
  RefreshCw,
  X,
  Download,
  Mail,
  Megaphone,
  UserMinus,
  UserCheck,
  FolderPlus,
  CloudUpload,
  Play,
  Link2,
  HardDrive,
  ClipboardCheck,
  CheckSquare,
  FolderOpen,
  CalendarDays,
  Edit,
  Sliders,
  Phone,
  Paperclip,
  Smile,
  Send,
  ThumbsUp,
  MessageCircle,
  Flag
} from 'lucide-react';

export default function TeacherDashboard({ user, onStartLive, onManageCourses, onBackToHome }) {
  const [activeNav, setActiveNav] = useState('assignments'); // 'dashboard', 'classes', 'create', 'schedule', 'students', 'materials', 'assignments'
  const [selectedPeriod, setSelectedPeriod] = useState('Sep 2026');
  const [classTabFilter, setClassTabFilter] = useState('all'); // all, ongoing, upcoming, completed, draft, archived
  const [subjectFilter, setSubjectFilter] = useState('All Subjects');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  const teacherName = user?.name || 'Ahmed Mohamed';
  const teacherEmail = user?.email || 'ahmed.mohamed@ilmhub.com';

  // Create Class Wizard State (matching media_1790720686824.jpg)
  const [createStep, setCreateStep] = useState(1);
  const [newPointText, setNewPointText] = useState('');
  const [createForm, setCreateForm] = useState({
    title: 'Nahwu for Beginners',
    subject: 'Arabic Language',
    level: 'Beginner',
    description: "Dasar-dasar Nahwu secara sistematis untuk pemula. Belajar mengidentifikasi jumlah ismiyah dan fi'liyah dengan mudah.",
    thumbnail: '/images/class_nahwu.jpg',
    learningPoints: [
      'Memahami pengertian Nahwu dan pentingnya',
      'Mengenal jumlah ismiyah dan fi\'liyah',
      'Mengidentifikasi rukun dan i\'rab secara sederhana',
      'Latihan soal dan contoh dalam kehidupan sehari-hari'
    ],
    pricingType: 'free', // 'free' | 'paid'
    price: 150,
    visibility: 'public', // 'public' | 'private'
    studentsCount: 32,
    totalLessons: 12,
    durationWeeks: 4,
    hasCertificate: true
  });

  // Schedule View States (matching media_1790721133363.jpg)
  const [scheduleViewMode, setScheduleViewMode] = useState('calendar'); // 'calendar' | 'list'
  const [scheduleFilterRange, setScheduleFilterRange] = useState('week'); // 'today' | 'week' | 'month'
  const [selectedScheduleDay, setSelectedScheduleDay] = useState(23);
  const [scheduleTimezone, setScheduleTimezone] = useState('(GMT+2) Cairo, Egypt');
  const [scheduleDuration, setScheduleDuration] = useState('90 minutes');
  const [scheduleBuffer, setScheduleBuffer] = useState('15 minutes');
  const [allowBooking, setAllowBooking] = useState(true);
  const [sendReminder, setSendReminder] = useState(true);
  const [reminderTiming, setReminderTiming] = useState('1 hour before');
  const [availabilityDays, setAvailabilityDays] = useState([
    { day: 'Monday', hours: '08:00 - 21:00', enabled: true },
    { day: 'Tuesday', hours: '08:00 - 21:00', enabled: true },
    { day: 'Wednesday', hours: '08:00 - 21:00', enabled: true },
    { day: 'Thursday', hours: '08:00 - 21:00', enabled: true },
    { day: 'Friday', hours: '08:00 - 21:00', enabled: true },
    { day: 'Saturday', hours: '10:00 - 20:00', enabled: true },
    { day: 'Sunday', hours: 'Not Available', enabled: false },
  ]);
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const [isRecurringModalOpen, setIsRecurringModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [selectedScheduleEvent, setSelectedScheduleEvent] = useState(null);

  // New Schedule Form state
  const [newScheduleForm, setNewScheduleForm] = useState({
    courseTitle: 'Nahwu for Beginners',
    day: 'wed',
    date: '2026-09-23',
    startTime: '09:00',
    endTime: '10:30',
    type: 'Live Class',
    colorTheme: 'emerald',
    studentsCount: 32
  });

  const weekDays = [
    { id: 'mon', dayName: 'Mon', date: '21 Sep', dayNum: 21, isToday: false },
    { id: 'tue', dayName: 'Tue', date: '22 Sep', dayNum: 22, isToday: false },
    { id: 'wed', dayName: 'Wed', date: '23 Sep', dayNum: 23, isToday: true },
    { id: 'thu', dayName: 'Thu', date: '24 Sep', dayNum: 24, isToday: false },
    { id: 'fri', dayName: 'Fri', date: '25 Sep', dayNum: 25, isToday: false },
    { id: 'sat', dayName: 'Sat', date: '26 Sep', dayNum: 26, isToday: false },
    { id: 'sun', dayName: 'Sun', date: '27 Sep', dayNum: 27, isToday: false },
  ];

  const timeHours = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const [scheduleEventsList, setScheduleEventsList] = useState([
    // Nahwu for Beginners (Mon, Wed, Fri 09:00 - 10:30)
    {
      id: 'ev-1',
      day: 'mon',
      title: 'Nahwu for Beginners',
      time: '09:00 - 10:30',
      type: 'Live Class',
      hourSlot: '09:00',
      colorTheme: 'emerald',
      studentsCount: 32,
      image: '/images/class_nahwu.jpg'
    },
    {
      id: 'ev-2',
      day: 'wed',
      title: 'Nahwu for Beginners',
      time: '09:00 - 10:30',
      type: 'Live Class',
      hourSlot: '09:00',
      colorTheme: 'emerald',
      studentsCount: 32,
      image: '/images/class_nahwu.jpg'
    },
    {
      id: 'ev-3',
      day: 'fri',
      title: 'Nahwu for Beginners',
      time: '09:00 - 10:30',
      type: 'Live Class',
      hourSlot: '09:00',
      colorTheme: 'emerald',
      studentsCount: 28,
      image: '/images/class_nahwu.jpg'
    },
    // Arabic Conversation (Tue, Thu, Sat 10:00 - 11:30)
    {
      id: 'ev-4',
      day: 'tue',
      title: 'Arabic Conversation',
      time: '10:00 - 11:30',
      type: 'Live Class',
      hourSlot: '10:00',
      colorTheme: 'blue',
      studentsCount: 32,
      image: '/images/class_conversation.jpg'
    },
    {
      id: 'ev-5',
      day: 'thu',
      title: 'Arabic Conversation',
      time: '10:00 - 11:30',
      type: 'Live Class',
      hourSlot: '10:00',
      colorTheme: 'blue',
      studentsCount: 30,
      image: '/images/class_conversation.jpg'
    },
    {
      id: 'ev-6',
      day: 'sat',
      title: 'Arabic Conversation',
      time: '10:00 - 11:30',
      type: 'Live Class',
      hourSlot: '10:00',
      colorTheme: 'blue',
      studentsCount: 32,
      image: '/images/class_conversation.jpg'
    },
    // Sharaf Basic (Mon, Wed, Fri 13:00 - 14:30)
    {
      id: 'ev-7',
      day: 'mon',
      title: 'Sharaf Basic',
      time: '13:00 - 14:30',
      type: 'Live Class',
      hourSlot: '13:00',
      colorTheme: 'purple',
      studentsCount: 28,
      image: '/images/class_sharaf.jpg'
    },
    {
      id: 'ev-8',
      day: 'wed',
      title: 'Sharaf Basic',
      time: '13:00 - 14:30',
      type: 'Live Class',
      hourSlot: '13:00',
      colorTheme: 'purple',
      studentsCount: 28,
      image: '/images/class_sharaf.jpg'
    },
    {
      id: 'ev-9',
      day: 'fri',
      title: 'Sharaf Basic',
      time: '13:00 - 14:30',
      type: 'Live Class',
      hourSlot: '13:00',
      colorTheme: 'purple',
      studentsCount: 28,
      image: '/images/class_sharaf.jpg'
    },
    // Academic Writing (Tue, Thu 16:00 - 17:30)
    {
      id: 'ev-10',
      day: 'tue',
      title: 'Academic Writing',
      time: '16:00 - 17:30',
      type: 'Live Class',
      hourSlot: '16:00',
      colorTheme: 'amber',
      studentsCount: 18,
      image: '/images/class_balaghah.jpg'
    },
    {
      id: 'ev-11',
      day: 'thu',
      title: 'Academic Writing',
      time: '16:00 - 17:30',
      type: 'Live Class',
      hourSlot: '16:00',
      colorTheme: 'amber',
      studentsCount: 18,
      image: '/images/class_balaghah.jpg'
    },
    // Quran Tajweed (Mon, Wed, Sat 19:00 - 20:30)
    {
      id: 'ev-12',
      day: 'mon',
      title: 'Quran Tajweed',
      time: '19:00 - 20:30',
      type: 'Live Class',
      hourSlot: '19:00',
      colorTheme: 'indigo',
      studentsCount: 24,
      image: '/images/class_tajweed.jpg'
    },
    {
      id: 'ev-13',
      day: 'wed',
      title: 'Quran Tajweed',
      time: '19:00 - 20:30',
      type: 'Live Class',
      hourSlot: '19:00',
      colorTheme: 'indigo',
      studentsCount: 24,
      image: '/images/class_tajweed.jpg'
    },
    {
      id: 'ev-14',
      day: 'sat',
      title: 'Quran Tajweed',
      time: '19:00 - 20:30',
      type: 'Live Class',
      hourSlot: '19:00',
      colorTheme: 'indigo',
      studentsCount: 24,
      image: '/images/class_tajweed.jpg'
    }
  ]);

  const upcomingScheduleList = [
    { dateDay: '24', dateMonth: 'Sep', title: 'Arabic Conversation', time: '10:00 - 11:30', students: 32, image: '/images/class_conversation.jpg' },
    { dateDay: '25', dateMonth: 'Sep', title: 'Nahwu for Beginners', time: '09:00 - 10:30', students: 28, image: '/images/class_nahwu.jpg' },
    { dateDay: '25', dateMonth: 'Sep', title: 'Sharaf Basic', time: '13:00 - 14:30', students: 28, image: '/images/class_sharaf.jpg' },
    { dateDay: '26', dateMonth: 'Sep', title: 'Academic Writing', time: '16:00 - 17:30', students: 18, image: '/images/class_balaghah.jpg' },
    { dateDay: '27', dateMonth: 'Sep', title: 'Quran Tajweed', time: '19:00 - 20:30', students: 24, image: '/images/class_tajweed.jpg' }
  ];

  const getEventStyle = (theme) => {
    switch (theme) {
      case 'emerald':
        return 'bg-[#E8F8F5] border-[#B3E5DC] text-[#0A3D36] hover:bg-[#D8F3ED]';
      case 'blue':
        return 'bg-[#EAF2FD] border-[#BFDBFE] text-[#1E3A8A] hover:bg-[#D8E8FC]';
      case 'purple':
        return 'bg-[#F5EDFD] border-[#E9D5FF] text-[#581C87] hover:bg-[#EDE0FB]';
      case 'amber':
        return 'bg-[#FEF7E6] border-[#FDE68A] text-[#78350F] hover:bg-[#FEEFC7]';
      case 'indigo':
        return 'bg-[#EEF2FF] border-[#C7D2FE] text-[#312E81] hover:bg-[#E0E7FF]';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  // Students View States (matching media_1790721537116.jpg)
  const [studentTabFilter, setStudentTabFilter] = useState('all'); // 'all' (32) | 'active' (28) | 'inactive' (4) | 'invited' (2)
  const [studentClassFilter, setStudentClassFilter] = useState('All Classes');
  const [studentStatusFilter, setStudentStatusFilter] = useState('All Status');
  const [studentSortBy, setStudentSortBy] = useState('Newest');
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [studentPage, setStudentPage] = useState(1);
  const [studentGrowthRange, setStudentGrowthRange] = useState('Last 30 days');
  const [studentActivityTab, setStudentActivityTab] = useState('recent'); // 'recent' | 'milestones'
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
  const [selectedStudentModal, setSelectedStudentModal] = useState(null);

  // New Student Form State
  const [newStudentForm, setNewStudentForm] = useState({
    name: '',
    email: '',
    className: 'Nahwu for Beginners',
    status: 'active'
  });

  const [studentsList, setStudentsList] = useState([
    {
      id: 'st-1',
      name: 'Fatimah Zahra',
      email: 'fatimah@example.com',
      avatar: '/images/student_fatimah.jpg',
      className: 'Nahwu for Beginners',
      progress: 85,
      lastActivity: 'Today 10:24 AM',
      status: 'active'
    },
    {
      id: 'st-2',
      name: 'Omar Hassan',
      email: 'omar@example.com',
      avatar: '/images/student_omar.jpg',
      className: 'Sharaf Basic',
      progress: 72,
      lastActivity: 'Today 09:18 AM',
      status: 'active'
    },
    {
      id: 'st-3',
      name: 'Ali Khan',
      email: 'ali@example.com',
      avatar: '/images/student_ali.jpg',
      className: 'Quran Tajweed',
      progress: 60,
      lastActivity: 'Yesterday 07:45 PM',
      status: 'active'
    },
    {
      id: 'st-4',
      name: 'Aisha Rahman',
      email: 'aisha@example.com',
      avatar: '/images/student_aisha.jpg',
      className: 'Arabic Conversation',
      progress: 90,
      lastActivity: 'Today 11:02 AM',
      status: 'active'
    },
    {
      id: 'st-5',
      name: 'Yusuf Mansur',
      email: 'yusuf@example.com',
      avatar: null,
      initials: 'YM',
      initialBg: 'bg-[#C6ECE5] text-[#0A4D42]',
      className: 'Nahwu for Beginners',
      progress: 40,
      lastActivity: '2 days ago 20 Sep 2026',
      status: 'active'
    },
    {
      id: 'st-6',
      name: 'Sara Nabilah',
      email: 'sara@example.com',
      avatar: null,
      initials: 'SN',
      initialBg: 'bg-gray-200 text-gray-700',
      className: 'Academic Writing',
      progress: 75,
      lastActivity: 'Today 09:11 AM',
      status: 'active'
    },
    {
      id: 'st-7',
      name: 'Hasan Ali',
      email: 'hasan@example.com',
      avatar: '/images/tutor_khalid.jpg',
      className: 'Sharaf Basic',
      progress: 20,
      lastActivity: '3 days ago 19 Sep 2026',
      status: 'inactive'
    },
    {
      id: 'st-8',
      name: 'Layla Ahmad',
      email: 'layla@example.com',
      avatar: '/images/tutor_layla.jpg',
      className: 'Arabic Conversation',
      progress: 0,
      lastActivity: '1 week ago 15 Sep 2026',
      status: 'inactive'
    },
    {
      id: 'st-9',
      name: 'Muhammad Arif',
      email: 'arif@example.com',
      avatar: null,
      initials: 'MA',
      initialBg: 'bg-[#E5D7FA] text-[#4C1D95]',
      className: 'Quran Tajweed',
      progress: 100,
      lastActivity: 'Today 08:30 AM',
      status: 'active'
    },
    {
      id: 'st-10',
      name: 'Dina Salsabila',
      email: 'dina@example.com',
      avatar: null,
      initials: 'DN',
      initialBg: 'bg-[#CCE1FD] text-[#1E3A8A]',
      className: 'Nahwu for Beginners',
      progress: 55,
      lastActivity: 'Yesterday 07:12 PM',
      status: 'active'
    }
  ]);

  const topPerformingStudents = [
    { rank: 1, name: 'Aisha Rahman', avatar: '/images/student_aisha.jpg', score: '95%', medalColor: 'bg-amber-400 text-white' },
    { rank: 2, name: 'Fatimah Zahra', avatar: '/images/student_fatimah.jpg', score: '90%', medalColor: 'bg-sky-400 text-white' },
    { rank: 3, name: 'Omar Hassan', avatar: '/images/student_omar.jpg', score: '88%', medalColor: 'bg-orange-400 text-white' },
    { rank: 4, name: 'Sara Nabilah', initials: 'SN', score: '85%', medalColor: 'bg-gray-300 text-gray-700' },
    { rank: 5, name: 'Ali Khan', avatar: '/images/student_ali.jpg', score: '82%', medalColor: 'bg-gray-300 text-gray-700' },
  ];

  const studentActivities = [
    { icon: BookOpen, iconBg: 'bg-emerald-100 text-emerald-700', text: 'Fatimah Zahra completed Lesson 4', time: '10 minutes ago' },
    { icon: FileText, iconBg: 'bg-blue-100 text-blue-700', text: 'Omar Hassan submitted assignment', time: '2 hours ago' },
    { icon: Users, iconBg: 'bg-sky-100 text-sky-700', text: 'Ali Khan joined the class', time: '3 hours ago' },
    { icon: Trophy, iconBg: 'bg-amber-100 text-amber-700', text: 'Aisha Rahman scored 95% on quiz', time: '5 hours ago' },
    { icon: Video, iconBg: 'bg-purple-100 text-purple-700', text: 'Yusuf Mansur watched live class', time: '1 day ago' },
  ];

  const getClassBadgeStyle = (className) => {
    if (className.includes('Nahwu')) return 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]';
    if (className.includes('Sharaf')) return 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]';
    if (className.includes('Quran') || className.includes('Tajweed')) return 'bg-[#EEF2FF] text-[#312E81] border border-[#C7D2FE]';
    if (className.includes('Arabic') || className.includes('Conversation')) return 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]';
    if (className.includes('Writing') || className.includes('Balaghah')) return 'bg-[#FEF7E6] text-[#78350F] border border-[#FDE68A]';
    return 'bg-gray-100 text-gray-700 border border-gray-200';
  };

  // Materials View States (matching media_1790722178619.jpg)
  const [materialTabFilter, setMaterialTabFilter] = useState('all'); // 'all' (48) | 'documents' (18) | 'videos' (12) | 'presentations' (8) | 'links' (6) | 'others' (4)
  const [materialClassFilter, setMaterialClassFilter] = useState('All Classes');
  const [materialTopicFilter, setMaterialTopicFilter] = useState('All Topics');
  const [materialSortBy, setMaterialSortBy] = useState('Newest');
  const [materialSearchQuery, setMaterialSearchQuery] = useState('');
  const [isUploadMaterialModalOpen, setIsUploadMaterialModalOpen] = useState(false);
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [selectedMaterialPreview, setSelectedMaterialPreview] = useState(null);

  // New Material Form
  const [newMaterialForm, setNewMaterialForm] = useState({
    title: '',
    category: 'documents',
    fileType: 'PDF',
    className: 'Nahwu for Beginners',
    topic: 'Pendahuluan',
    fileSize: '2.5 MB'
  });

  const [materialsDataList, setMaterialsDataList] = useState([
    {
      id: 'mat-1',
      title: 'Modul Nahwu Dasar',
      category: 'documents',
      fileType: 'PDF',
      meta: '20 halaman',
      fileSize: '2.4 MB',
      className: 'Nahwu for Beginners',
      topic: 'Pendahuluan',
      tagType: 'Module',
      views: '1.2K views',
      viewsNum: '1.2K',
      timeAgo: '2 weeks ago',
      date: '20 Sep 2026',
      coverType: 'pdf',
      iconColor: 'text-red-500',
      tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      extraTagColor: 'bg-gray-100 text-gray-700'
    },
    {
      id: 'mat-2',
      title: 'Pengantar Ilmu Nahwu',
      category: 'videos',
      fileType: 'Video',
      meta: 'MP4',
      duration: '32:15',
      className: 'Nahwu for Beginners',
      topic: 'Dasar-dasar Nahwu',
      tagType: 'Lecture',
      views: '856 views',
      viewsNum: '856',
      timeAgo: '1 week ago',
      date: '18 Sep 2026',
      coverType: 'video',
      coverImage: '/images/class_nahwu.jpg',
      tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      extraTagColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'mat-3',
      title: 'PPT: Isim, Fi\'il, dan Harf',
      category: 'presentations',
      fileType: 'PPT',
      meta: 'PPTX • 35 slides',
      fileSize: '5.1 MB',
      className: 'Sharaf Basic',
      topic: 'Jenis Kata',
      tagType: 'Presentation',
      views: '640 views',
      viewsNum: '640',
      timeAgo: '3 weeks ago',
      date: '15 Sep 2026',
      coverType: 'ppt',
      iconColor: 'text-orange-500',
      tagColor: 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]',
      extraTagColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'mat-4',
      title: 'Latihan Soal Nahwu 1',
      category: 'documents',
      fileType: 'Document',
      meta: 'Word • 15 halaman',
      fileSize: '1.8 MB',
      className: 'Nahwu for Beginners',
      topic: 'Latihan',
      tagType: 'Exercise',
      views: '1.1K views',
      viewsNum: '1.1K',
      timeAgo: '5 days ago',
      date: '12 Sep 2026',
      coverType: 'docx',
      iconColor: 'text-blue-500',
      tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      extraTagColor: 'bg-sky-100 text-sky-700'
    },
    {
      id: 'mat-5',
      title: 'Pembahasan Latihan Soal',
      category: 'videos',
      fileType: 'Video',
      meta: 'MP4',
      duration: '28:40',
      className: 'Nahwu for Beginners',
      topic: 'Latihan',
      tagType: 'Discussion',
      views: '720 views',
      viewsNum: '720',
      timeAgo: '3 days ago',
      date: '10 Sep 2026',
      coverType: 'video',
      coverImage: '/images/class_sharaf.jpg',
      tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      extraTagColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'mat-6',
      title: 'Ringkasan Kaidah Nahwu',
      category: 'documents',
      fileType: 'PDF',
      meta: 'PDF • 12 halaman',
      fileSize: '1.5 MB',
      className: 'Nahwu for Beginners',
      topic: 'Kaidah Utama',
      tagType: 'Summary',
      views: '930 views',
      viewsNum: '930',
      timeAgo: '1 week ago',
      date: '08 Sep 2026',
      coverType: 'pdf',
      iconColor: 'text-red-500',
      tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      extraTagColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'mat-7',
      title: 'Link Referensi Online',
      category: 'links',
      fileType: 'Link',
      meta: 'External Resource',
      url: 'https://al-maktaba.org/nahwu',
      className: 'General',
      topic: 'Referensi Tambahan',
      tagType: 'Reference',
      views: '430 views',
      viewsNum: '430',
      timeAgo: '2 weeks ago',
      date: '05 Sep 2026',
      coverType: 'link',
      iconColor: 'text-sky-600',
      tagColor: 'bg-gray-100 text-gray-700',
      extraTagColor: 'bg-gray-100 text-gray-700'
    },
    {
      id: 'mat-8',
      title: 'Praktik Membaca Teks Arab',
      category: 'videos',
      fileType: 'Video',
      meta: 'MP4',
      duration: '45:20',
      className: 'Arabic Conversation',
      topic: 'Qira\'ah',
      tagType: 'Practice',
      views: '680 views',
      viewsNum: '680',
      timeAgo: '1 week ago',
      date: '03 Sep 2026',
      coverType: 'video',
      coverImage: '/images/class_conversation.jpg',
      tagColor: 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]',
      extraTagColor: 'bg-purple-100 text-purple-700'
    }
  ]);

  const popularMaterialsList = [
    { rank: 1, title: 'Modul Nahwu Dasar', type: 'PDF', views: '1.2K views', iconColor: 'text-red-500', iconBg: 'bg-red-50' },
    { rank: 2, title: 'Latihan Soal Nahwu 1', type: 'DOCX', views: '1.1K views', iconColor: 'text-blue-500', iconBg: 'bg-blue-50' },
    { rank: 3, title: 'Ringkasan Kaidah Nahwu', type: 'PDF', views: '930 views', iconColor: 'text-orange-500', iconBg: 'bg-orange-50' },
    { rank: 4, title: 'Pengantar Ilmu Nahwu', type: 'Video', views: '856 views', image: '/images/class_nahwu.jpg' },
    { rank: 5, title: 'Pembahasan Latihan Soal', type: 'Video', views: '720 views', image: '/images/class_sharaf.jpg' },
  ];

  // Assignments View States (matching media_1790722499906.jpg)
  const [assignmentTabFilter, setAssignmentTabFilter] = useState('all'); // 'all' (12) | 'drafts' (2) | 'scheduled' (3) | 'published' (7) | 'archived' (1)
  const [assignmentClassFilter, setAssignmentClassFilter] = useState('All Classes');
  const [assignmentStatusFilter, setAssignmentStatusFilter] = useState('All Status');
  const [assignmentTypeFilter, setAssignmentTypeFilter] = useState('All Types');
  const [assignmentSearchQuery, setAssignmentSearchQuery] = useState('');
  const [selectedAssignmentIds, setSelectedAssignmentIds] = useState([]);
  const [assignmentViewMode, setAssignmentViewMode] = useState('list'); // 'list' | 'calendar'
  const [isCreateAssignmentModalOpen, setIsCreateAssignmentModalOpen] = useState(false);
  const [selectedAssignmentModal, setSelectedAssignmentModal] = useState(null);

  // New Assignment Form State
  const [newAssignmentForm, setNewAssignmentForm] = useState({
    title: '',
    description: '',
    className: 'Nahwu for Beginners',
    type: 'Exercise',
    dueDate: '2026-10-15',
    dueTime: '23:59',
    totalPoints: 100,
    status: 'published'
  });

  const [assignmentsDataList, setAssignmentsDataList] = useState([
    {
      id: 'asg-1',
      title: 'Latihan Nahwu Dasar 1',
      description: 'Identifikasi jumlah ismiyah dan fi\'liyah',
      className: 'Nahwu for Beginners',
      type: 'Exercise',
      typeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      dueDate: '25 Sep 2026',
      dueTime: '23:59',
      submittedCount: 28,
      totalCount: 32,
      progressPercent: 88,
      status: 'published',
      daysLeft: '2 days left'
    },
    {
      id: 'asg-2',
      title: 'Analisis Teks Arab',
      description: 'Tentukan i\'rab pada teks...',
      className: 'Sharaf Basic',
      type: 'Essay',
      typeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      dueDate: '28 Sep 2026',
      dueTime: '23:59',
      submittedCount: 24,
      totalCount: 28,
      progressPercent: 86,
      status: 'published',
      daysLeft: '5 days left'
    },
    {
      id: 'asg-3',
      title: 'Hafalan Mufradat',
      description: 'Kumpulkan video hafalan 10 kata',
      className: 'Arabic Conversation',
      type: 'Video',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      dueDate: '30 Sep 2026',
      dueTime: '23:59',
      submittedCount: 20,
      totalCount: 30,
      progressPercent: 67,
      status: 'published',
      daysLeft: '7 days left'
    },
    {
      id: 'asg-4',
      title: 'Tugas Kuis Bab 1',
      description: 'Pilihan ganda 20 soal',
      className: 'Nahwu for Beginners',
      type: 'Quiz',
      typeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      dueDate: '5 Oct 2026',
      dueTime: '23:59',
      submittedCount: 32,
      totalCount: 32,
      progressPercent: 100,
      status: 'published',
      daysLeft: '12 days left'
    },
    {
      id: 'asg-5',
      title: 'Ringkasan Materi',
      description: 'Buat ringkasan 2 halaman',
      className: 'Sharaf Basic',
      type: 'Document',
      typeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      dueDate: '8 Oct 2026',
      dueTime: '23:59',
      submittedCount: 18,
      totalCount: 28,
      progressPercent: 64,
      status: 'published',
      daysLeft: '15 days left'
    },
    {
      id: 'asg-6',
      title: 'Proyek Mini',
      description: 'Analisis teks pendek',
      className: 'Academic Writing',
      type: 'Project',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      dueDate: '12 Oct 2026',
      dueTime: '23:59',
      submittedCount: 12,
      totalCount: 24,
      progressPercent: 50,
      status: 'published',
      daysLeft: '19 days left'
    },
    {
      id: 'asg-7',
      title: 'Latihan Soal 2',
      description: 'Pembahasan dengan contoh',
      className: 'Nahwu for Beginners',
      type: 'Exercise',
      typeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      dueDate: '15 Oct 2026',
      dueTime: '23:59',
      submittedCount: 6,
      totalCount: 32,
      progressPercent: 19,
      status: 'draft',
      daysLeft: '22 days left'
    },
    {
      id: 'asg-8',
      title: 'Tugas Diskusi',
      description: 'Berikan pendapat tentang topik',
      className: 'Arabic Conversation',
      type: 'Discussion',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      dueDate: '20 Oct 2026',
      dueTime: '23:59',
      submittedCount: 0,
      totalCount: 28,
      progressPercent: 0,
      status: 'scheduled',
      daysLeft: '27 days left'
    }
  ]);

  const recentSubmissionsList = [
    { studentName: 'Aisha Rahman', avatar: '/images/student_aisha.jpg', assignment: 'Latihan Nahwu Dasar 1', time: '2 minutes ago' },
    { studentName: 'Omar Hassan', avatar: '/images/student_omar.jpg', assignment: 'Analisis Teks Arab', time: '15 minutes ago', isNew: true },
    { studentName: 'Fatimah Zahra', avatar: '/images/student_fatimah.jpg', assignment: 'Hafalan Mufradat', time: '1 hour ago' },
    { studentName: 'Ali Khan', avatar: '/images/student_ali.jpg', assignment: 'Ringkasan Materi', time: '3 hours ago' },
  ];

  // Quizzes View States (matching media_1790723029058.jpg)
  const [quizTabFilter, setQuizTabFilter] = useState('all'); // 'all' (16) | 'drafts' (3) | 'published' (10) | 'archived' (3)
  const [quizClassFilter, setQuizClassFilter] = useState('All Classes');
  const [quizStatusFilter, setQuizStatusFilter] = useState('All Status');
  const [quizQuestionTypeFilter, setQuizQuestionTypeFilter] = useState('All Question Types');
  const [quizSearchQuery, setQuizSearchQuery] = useState('');
  const [selectedQuizIds, setSelectedQuizIds] = useState([]);
  const [quizPage, setQuizPage] = useState(1);
  const [quizItemsPerPage, setQuizItemsPerPage] = useState('10 per page');
  const [isCreateQuizModalOpen, setIsCreateQuizModalOpen] = useState(false);
  const [selectedQuizModal, setSelectedQuizModal] = useState(null);

  // New Quiz Form State
  const [newQuizForm, setNewQuizForm] = useState({
    title: '',
    topic: '',
    className: 'Nahwu for Beginners',
    questionsCount: 20,
    timeLimit: '15 min',
    passingGrade: 75,
    status: 'published'
  });

  const [quizzesDataList, setQuizzesDataList] = useState([
    {
      id: 'qz-1',
      num: 1,
      title: 'Kuis Nahwu Dasar 1',
      topic: 'Konsep dasar isim, fi\'il, dan harf',
      image: '/images/class_nahwu.jpg',
      className: 'Nahwu for Beginners',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      questions: 20,
      timeLimit: '15 min',
      attempts: 42,
      avgScore: 85,
      avgScoreColor: 'bg-emerald-600',
      status: 'published'
    },
    {
      id: 'qz-2',
      num: 2,
      title: 'Kuis Sharaf 1',
      topic: 'Tashrif fi\'il madhi',
      image: '/images/class_sharaf.jpg',
      className: 'Sharaf Basic',
      classColor: 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]',
      questions: 15,
      timeLimit: '10 min',
      attempts: 38,
      avgScore: 78,
      avgScoreColor: 'bg-emerald-600',
      status: 'published'
    },
    {
      id: 'qz-3',
      num: 3,
      title: 'Kuis Kosakata Arab',
      topic: 'Mufradat sehari-hari',
      image: '/images/class_conversation.jpg',
      className: 'Arabic Conversation',
      classColor: 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]',
      questions: 25,
      timeLimit: '20 min',
      attempts: 51,
      avgScore: 72,
      avgScoreColor: 'bg-emerald-600',
      status: 'published'
    },
    {
      id: 'qz-4',
      num: 4,
      title: 'Kuis Teks Arab',
      topic: 'Pemahaman bacaan',
      image: '/images/class_sharaf.jpg',
      className: 'Sharaf Basic',
      classColor: 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]',
      questions: 20,
      timeLimit: '15 min',
      attempts: 36,
      avgScore: 68,
      avgScoreColor: 'bg-amber-500',
      status: 'published'
    },
    {
      id: 'qz-5',
      num: 5,
      title: 'Kuis Hafalan',
      topic: 'Surat pendek',
      image: '/images/class_nahwu.jpg',
      className: 'Nahwu for Beginners',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      questions: 10,
      timeLimit: '10 min',
      attempts: 28,
      avgScore: 90,
      avgScoreColor: 'bg-emerald-600',
      status: 'published'
    },
    {
      id: 'qz-6',
      num: 6,
      title: 'Kuis Bab 1',
      topic: 'Review materi minggu 1',
      image: '/images/class_conversation.jpg',
      className: 'Academic Writing',
      classColor: 'bg-amber-50 text-amber-700 border border-amber-200',
      questions: 30,
      timeLimit: '25 min',
      attempts: 24,
      avgScore: 64,
      avgScoreColor: 'bg-amber-500',
      status: 'scheduled'
    },
    {
      id: 'qz-7',
      num: 7,
      title: 'Kuis Diskusi',
      topic: 'Pemahaman konsep',
      image: '/images/class_nahwu.jpg',
      className: 'Arabic Conversation',
      classColor: 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]',
      questions: 15,
      timeLimit: '15 min',
      attempts: 18,
      avgScore: 56,
      avgScoreColor: 'bg-rose-500',
      status: 'draft'
    },
    {
      id: 'qz-8',
      num: 8,
      title: 'Kuis Akhir Modul',
      topic: 'Evaluasi keseluruhan',
      image: '/images/class_nahwu.jpg',
      className: 'Nahwu for Beginners',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      questions: 40,
      timeLimit: '30 min',
      attempts: 5,
      avgScore: null,
      avgScoreColor: 'bg-gray-300',
      status: 'draft'
    }
  ]);

  const upcomingQuizzesList = [
    { dateNum: '25', month: 'Sep', title: 'Kuis Bab 1', className: 'Nahwu for Beginners', timeLeft: '2 days left', isUrgent: true },
    { dateNum: '28', month: 'Sep', title: 'Kuis Kosakata Arab', className: 'Arabic Conversation', timeLeft: '5 days left' },
    { dateNum: '1', month: 'Oct', title: 'Kuis Teks Arab', className: 'Sharaf Basic', timeLeft: '8 days left' },
    { dateNum: '5', month: 'Oct', title: 'Kuis Akhir Modul', className: 'Nahwu for Beginners', timeLeft: '12 days left' },
  ];

  const recentQuizAttemptsList = [
    { studentName: 'Aisha Rahman', quizTitle: 'Kuis Nahwu Dasar 1', score: '92%', scoreBadge: 'bg-emerald-100 text-emerald-800', time: '10 minutes ago', avatar: '/images/student_aisha.jpg' },
    { studentName: 'Omar Hassan', quizTitle: 'Kuis Sharaf 1', score: '76%', scoreBadge: 'bg-amber-100 text-amber-800', time: '25 minutes ago', avatar: '/images/student_omar.jpg' },
    { studentName: 'Fatimah Zahra', quizTitle: 'Kuis Kosakata Arab', score: '88%', scoreBadge: 'bg-emerald-100 text-emerald-800', time: '1 hour ago', avatar: '/images/student_fatimah.jpg' },
    { studentName: 'Ali Khan', quizTitle: 'Kuis Teks Arab', score: '60%', scoreBadge: 'bg-amber-100 text-amber-800', time: '2 hours ago', avatar: '/images/student_ali.jpg' },
  ];

  // Certificates View States (matching media_1790723361189.jpg)
  const [certTabFilter, setCertTabFilter] = useState('all'); // 'all' (48) | 'templates' (8) | 'issued' (36) | 'drafts' (6) | 'expired' (6)
  const [certClassFilter, setCertClassFilter] = useState('All Classes');
  const [certStatusFilter, setCertStatusFilter] = useState('All Status');
  const [certTypeFilter, setCertTypeFilter] = useState('All Certificate Types');
  const [certSearchQuery, setCertSearchQuery] = useState('');
  const [selectedCertIds, setSelectedCertIds] = useState([]);
  const [isCreateCertModalOpen, setIsCreateCertModalOpen] = useState(false);
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  // New Certificate Form State
  const [newCertForm, setNewCertForm] = useState({
    studentName: 'Aisha Rahman',
    studentEmail: 'aisha@example.com',
    className: 'Nahwu for Beginners',
    type: 'Course Completion',
    template: 'Modern Islamic',
    issueDate: '2026-09-30',
    status: 'issued'
  });

  const certTemplatesList = [
    {
      id: 'tpl-1',
      title: 'Modern Islamic',
      subtitle: 'For general courses',
      theme: 'emerald',
      bgGradient: 'from-[#0A3D36] via-[#114B44] to-[#062823]',
      borderPattern: 'border-emerald-400/40',
      badge: 'Modern'
    },
    {
      id: 'tpl-2',
      title: 'Classic Arabic',
      subtitle: 'For Arabic courses',
      theme: 'amber',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900',
      borderPattern: 'border-amber-400/50',
      badge: 'Calligraphy'
    },
    {
      id: 'tpl-3',
      title: 'Minimal Clean',
      subtitle: 'For all subjects',
      theme: 'sky',
      bgGradient: 'from-slate-900 via-sky-950 to-blue-950',
      borderPattern: 'border-sky-400/40',
      badge: 'Minimal'
    },
    {
      id: 'tpl-4',
      title: 'Premium Gold',
      subtitle: 'For advanced courses',
      theme: 'gold',
      bgGradient: 'from-zinc-950 via-neutral-900 to-black',
      borderPattern: 'border-amber-300/60',
      badge: 'Premium'
    }
  ];

  const [certificatesDataList, setCertificatesDataList] = useState([
    {
      id: 'crt-1',
      num: 1,
      studentName: 'Aisha Rahman',
      email: 'aisha@example.com',
      avatar: '/images/student_aisha.jpg',
      className: 'Nahwu for Beginners',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      type: 'Course Completion',
      typeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
      issueDate: '25 Sep 2026',
      issueTime: '10:24 AM',
      status: 'issued',
      certId: 'ILM-2026-NHW-001'
    },
    {
      id: 'crt-2',
      num: 2,
      studentName: 'Omar Hassan',
      email: 'omar@example.com',
      avatar: '/images/student_omar.jpg',
      className: 'Sharaf Basic',
      classColor: 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]',
      type: 'Quiz Certificate',
      typeColor: 'text-purple-700 bg-purple-50 border border-purple-200',
      issueDate: '24 Sep 2026',
      issueTime: '02:15 PM',
      status: 'issued',
      certId: 'ILM-2026-SHR-002'
    },
    {
      id: 'crt-3',
      num: 3,
      studentName: 'Fatimah Zahra',
      email: 'fatimah@example.com',
      avatar: '/images/student_fatimah.jpg',
      className: 'Arabic Conversation',
      classColor: 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]',
      type: 'Course Completion',
      typeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
      issueDate: '20 Sep 2026',
      issueTime: '09:40 AM',
      status: 'issued',
      certId: 'ILM-2026-ARB-003'
    },
    {
      id: 'crt-4',
      num: 4,
      studentName: 'Ali Khan',
      email: 'ali@example.com',
      avatar: '/images/student_ali.jpg',
      className: 'Quran Tajweed',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      type: 'Assignment Certificate',
      typeColor: 'text-amber-700 bg-amber-50 border border-amber-200',
      issueDate: '18 Sep 2026',
      issueTime: '11:30 AM',
      status: 'issued',
      certId: 'ILM-2026-QRN-004'
    },
    {
      id: 'crt-5',
      num: 5,
      studentName: 'Sara Nabilah',
      email: 'sara@example.com',
      initials: 'SN',
      className: 'Academic Writing',
      classColor: 'bg-amber-50 text-amber-700 border border-amber-200',
      type: 'Course Completion',
      typeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
      issueDate: '15 Sep 2026',
      issueTime: '03:20 PM',
      status: 'issued',
      certId: 'ILM-2026-WRT-005'
    },
    {
      id: 'crt-6',
      num: 6,
      studentName: 'Yusuf Mansur',
      email: 'yusuf@example.com',
      initials: 'YM',
      className: 'Nahwu for Beginners',
      classColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
      type: 'Quiz Certificate',
      typeColor: 'text-purple-700 bg-purple-50 border border-purple-200',
      issueDate: '12 Sep 2026',
      issueTime: '08:10 AM',
      status: 'pending',
      certId: 'ILM-2026-NHW-006'
    },
    {
      id: 'crt-7',
      num: 7,
      studentName: 'Layla Ahmad',
      email: 'layla@example.com',
      avatar: '/images/tutor_layla.jpg',
      className: 'Sharaf Basic',
      classColor: 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]',
      type: 'Course Completion',
      typeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
      issueDate: '10 Sep 2026',
      issueTime: '01:45 PM',
      status: 'issued',
      certId: 'ILM-2026-SHR-007'
    },
    {
      id: 'crt-8',
      num: 8,
      studentName: 'Hasan Ali',
      email: 'hasan@example.com',
      initials: 'HA',
      className: 'Arabic Conversation',
      classColor: 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]',
      type: 'Assignment Certificate',
      typeColor: 'text-amber-700 bg-amber-50 border border-amber-200',
      issueDate: '5 Sep 2026',
      issueTime: '04:30 PM',
      status: 'expired',
      certId: 'ILM-2026-ARB-008'
    }
  ]);

  const recentCertificatesList = [
    { studentName: 'Aisha Rahman', type: 'Course Completion', date: '25 Sep 2026', avatar: '/images/student_aisha.jpg' },
    { studentName: 'Omar Hassan', type: 'Quiz Certificate', date: '24 Sep 2026', avatar: '/images/student_omar.jpg' },
    { studentName: 'Fatimah Zahra', type: 'Course Completion', date: '20 Sep 2026', avatar: '/images/student_fatimah.jpg' },
    { studentName: 'Ali Khan', type: 'Assignment Certificate', date: '18 Sep 2026', avatar: '/images/student_ali.jpg' },
    { studentName: 'Sara Nabilah', type: 'Course Completion', date: '15 Sep 2026', initials: 'SN' },
  ];

  // Earnings View States (matching media_1790723603405.jpg)
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('320.75');
  const [withdrawMethod, setWithdrawMethod] = useState('paypal');
  const [selectedTransactionModal, setSelectedTransactionModal] = useState(null);
  const [earningsPeriod, setEarningsPeriod] = useState('Last 12 months');
  const [revenueByClassPeriod, setRevenueByClassPeriod] = useState('Last 30 days');

  const earningsOverviewData = [
    { month: 'Jan', classRev: 45, tipsRev: 25, total: 70 },
    { month: 'Feb', classRev: 80, tipsRev: 35, total: 115 },
    { month: 'Mar', classRev: 98, tipsRev: 55, total: 153 },
    { month: 'Apr', classRev: 115, tipsRev: 50, total: 165 },
    { month: 'May', classRev: 148, tipsRev: 58, total: 206 },
    { month: 'Jun', classRev: 172, tipsRev: 62, total: 234 },
    { month: 'Jul', classRev: 145, tipsRev: 58, total: 203 },
    { month: 'Aug', classRev: 175, tipsRev: 60, total: 235 },
    { month: 'Sep', classRev: 280, tipsRev: 40.75, total: 320.75, isSelected: true },
    { month: 'Oct', classRev: 230, tipsRev: 55, total: 285 },
    { month: 'Nov', classRev: 245, tipsRev: 60, total: 305 },
    { month: 'Dec', classRev: 260, tipsRev: 70, total: 330 },
  ];

  const [recentTransactionsList, setRecentTransactionsList] = useState([
    {
      id: 'tx-1',
      date: '30 Sep 2026',
      studentName: 'Aisha Rahman',
      avatar: '/images/student_aisha.jpg',
      item: 'Nahwu for Beginners',
      type: 'Class Enrollment',
      amount: '$25.00',
      status: 'Completed',
      invoice: 'INV-7821'
    },
    {
      id: 'tx-2',
      date: '29 Sep 2026',
      studentName: 'Omar Hassan',
      avatar: '/images/student_omar.jpg',
      item: 'Sharaf Basic',
      type: 'Class Enrollment',
      amount: '$18.00',
      status: 'Completed',
      invoice: 'INV-7819'
    },
    {
      id: 'tx-3',
      date: '28 Sep 2026',
      studentName: 'Fatimah Zahra',
      avatar: '/images/student_fatimah.jpg',
      item: 'Arabic Conversation',
      type: 'Class Enrollment',
      amount: '$20.00',
      status: 'Completed',
      invoice: 'INV-7815'
    },
    {
      id: 'tx-4',
      date: '27 Sep 2026',
      studentName: 'Sara Nabilah',
      initials: 'SN',
      item: 'Quran Tajweed',
      type: 'Class Enrollment',
      amount: '$15.00',
      status: 'Completed',
      invoice: 'INV-7812'
    },
    {
      id: 'tx-5',
      date: '26 Sep 2026',
      studentName: 'Ali Khan',
      avatar: '/images/student_ali.jpg',
      item: 'Nahwu for Beginners',
      type: 'Class Enrollment',
      amount: '$25.00',
      status: 'Completed',
      invoice: 'INV-7810'
    },
    {
      id: 'tx-6',
      date: '25 Sep 2026',
      studentName: 'Yusuf Mansur',
      initials: 'YM',
      item: 'Tips from Student',
      type: 'Tip / Donation',
      amount: '$5.00',
      status: 'Completed',
      invoice: 'INV-7808'
    },
    {
      id: 'tx-7',
      date: '24 Sep 2026',
      studentName: 'Layla Ahmad',
      avatar: '/images/tutor_layla.jpg',
      item: 'Academic Writing',
      type: 'Class Enrollment',
      amount: '$12.00',
      status: 'Completed',
      invoice: 'INV-7805'
    },
    {
      id: 'tx-8',
      date: '23 Sep 2026',
      studentName: 'Hasan Ali',
      initials: 'HA',
      item: 'Sharaf Basic',
      type: 'Class Enrollment',
      amount: '$18.00',
      status: 'Completed',
      invoice: 'INV-7802'
    }
  ]);

  const revenueByClassList = [
    { title: 'Nahwu for Beginners', image: '/images/class_nahwu.jpg', amount: '$120.50', percent: 38, barColor: 'bg-emerald-600' },
    { title: 'Sharaf Basic', image: '/images/class_sharaf.jpg', amount: '$85.75', percent: 27, barColor: 'bg-emerald-600' },
    { title: 'Arabic Conversation', image: '/images/class_conversation.jpg', amount: '$62.30', percent: 20, barColor: 'bg-emerald-600' },
    { title: 'Quran Tajweed', image: '/images/class_nahwu.jpg', amount: '$35.20', percent: 11, barColor: 'bg-emerald-600' },
    { title: 'Academic Writing', image: '/images/class_conversation.jpg', amount: '$17.00', percent: 5, barColor: 'bg-emerald-600' },
  ];

  // Messages View States (matching media_1790723892683.jpg)
  const [messageTabFilter, setMessageTabFilter] = useState('all'); // 'all' (24) | 'unread' (5) | 'students' | 'groups'
  const [messageSearchQuery, setMessageSearchQuery] = useState('');
  const [activeConversationId, setActiveConversationId] = useState('conv-1');
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);
  const [chatInputText, setChatInputText] = useState('');

  const [conversationsList, setConversationsList] = useState([
    {
      id: 'conv-1',
      name: 'Aisha Rahman',
      email: 'aisha@example.com',
      avatar: '/images/student_aisha.jpg',
      isOnline: true,
      role: 'Student',
      className: 'Nahwu for Beginners',
      lastMessage: 'Jazakum Allahu khairan ustadz...',
      time: '10:24 AM',
      unreadCount: 2,
      isGroup: false,
      location: 'Cairo, Egypt',
      stats: { classes: 12, avgScore: '85%', certificates: 6 },
      messages: [
        {
          id: 'msg-1',
          sender: 'teacher',
          text: "Assalamu'alaikum Aisha,\nHere is the material for next week. Please read it before the live class. If you have any questions, feel free to ask.",
          time: '9:20 AM',
          attachment: {
            type: 'pdf',
            name: 'Modul Nahwu Dasar - Bab 2.pdf',
            size: '2.4 MB'
          }
        },
        {
          id: 'msg-2',
          sender: 'student',
          text: "Wa'alaikumussalam ustadz.\nJazakum Allahu khairan for the material. 🙏",
          time: '9:45 AM'
        },
        {
          id: 'msg-3',
          sender: 'student',
          text: "I have a question about the exercise number 3. Is the answer 'مبتدأ' or 'فاعل'?",
          time: '9:47 AM'
        },
        {
          id: 'msg-4',
          sender: 'teacher',
          text: "Good question! For number 3, the correct answer is 'مبتدأ' because it is the subject of the sentence. I also attached a short explanation in the image below.",
          time: '10:05 AM',
          imageAttachment: '/images/class_nahwu.jpg',
          imageCaption: "Contoh Analisis I'rab: أَوْفَى الْيَقِيْنُ أُنْسَ حَبْرٍ"
        },
        {
          id: 'msg-5',
          sender: 'student',
          text: "SubhanAllah, now I understand. Thank you ustadz! May Allah increase your knowledge. 🤲",
          time: '10:24 AM'
        }
      ]
    },
    {
      id: 'conv-2',
      name: 'Omar Hassan',
      email: 'omar@example.com',
      avatar: '/images/student_omar.jpg',
      isOnline: true,
      role: 'Student',
      className: 'Sharaf Basic',
      lastMessage: 'Can we reschedule the class?',
      time: '9:18 AM',
      unreadCount: 1,
      isGroup: false,
      location: 'Alexandria, Egypt',
      stats: { classes: 8, avgScore: '78%', certificates: 4 },
      messages: [
        {
          id: 'msg-o1',
          sender: 'student',
          text: "Assalamu'alaikum Ustadz, can we reschedule tomorrow's Sharaf session to 2:00 PM?",
          time: '9:18 AM'
        }
      ]
    },
    {
      id: 'conv-3',
      name: 'Quran Tajweed - Batch 1',
      avatar: null,
      initials: 'QT',
      initialBg: 'bg-purple-100 text-purple-800',
      isOnline: false,
      role: 'Group',
      className: 'Quran Tajweed',
      lastMessage: "Fatimah: Assalamu'alaikum...",
      time: '8:45 AM',
      unreadCount: 12,
      isGroup: true,
      stats: { classes: 1, avgScore: '82%', certificates: 24 },
      messages: [
        {
          id: 'msg-q1',
          sender: 'student',
          studentName: 'Fatimah',
          text: "Assalamu'alaikum semua, latihan makhraj huruf hari ini jam berapa ya?",
          time: '8:45 AM'
        }
      ]
    },
    {
      id: 'conv-4',
      name: 'Fatimah Zahra',
      email: 'fatimah@example.com',
      avatar: '/images/student_fatimah.jpg',
      isOnline: false,
      role: 'Student',
      className: 'Arabic Conversation',
      lastMessage: 'The assignment is submitted ✓',
      time: 'Yesterday',
      unreadCount: 1,
      isGroup: false,
      location: 'Dubai, UAE',
      stats: { classes: 10, avgScore: '90%', certificates: 5 },
      messages: [
        {
          id: 'msg-f1',
          sender: 'student',
          text: "Alhamdulillah ustadz, the conversation assignment is submitted ✓",
          time: 'Yesterday'
        }
      ]
    },
    {
      id: 'conv-5',
      name: 'Ali Khan',
      email: 'ali@example.com',
      avatar: '/images/student_ali.jpg',
      isOnline: false,
      role: 'Student',
      className: 'Nahwu for Beginners',
      lastMessage: 'Thank you for the materials',
      time: 'Yesterday',
      unreadCount: 0,
      isGroup: false,
      location: 'Karachi, Pakistan',
      stats: { classes: 6, avgScore: '74%', certificates: 2 },
      messages: []
    },
    {
      id: 'conv-6',
      name: 'Nahwu for Beginners',
      avatar: null,
      initials: 'NB',
      initialBg: 'bg-emerald-100 text-emerald-800',
      isOnline: false,
      role: 'Group',
      className: 'Nahwu for Beginners',
      lastMessage: 'Yusuf: I have a question about...',
      time: 'Yesterday',
      unreadCount: 3,
      isGroup: true,
      stats: { classes: 1, avgScore: '86%', certificates: 32 },
      messages: []
    },
    {
      id: 'conv-7',
      name: 'Layla Ahmad',
      email: 'layla@example.com',
      avatar: '/images/tutor_layla.jpg',
      isOnline: false,
      role: 'Student',
      className: 'Academic Writing',
      lastMessage: 'Is the quiz open now?',
      time: '21 Sep',
      unreadCount: 0,
      isGroup: false,
      location: 'Amman, Jordan',
      stats: { classes: 4, avgScore: '80%', certificates: 2 },
      messages: []
    },
    {
      id: 'conv-8',
      name: 'Sara Nabilah',
      email: 'sara@example.com',
      avatar: null,
      initials: 'SN',
      initialBg: 'bg-amber-100 text-amber-800',
      isOnline: false,
      role: 'Student',
      className: 'Quran Tajweed',
      lastMessage: 'Okay, noted. Thank you!',
      time: '21 Sep',
      unreadCount: 0,
      isGroup: false,
      location: 'Jakarta, Indonesia',
      stats: { classes: 5, avgScore: '85%', certificates: 3 },
      messages: []
    },
    {
      id: 'conv-9',
      name: 'Hasan Ali',
      email: 'hasan@example.com',
      avatar: null,
      initials: 'HA',
      initialBg: 'bg-sky-100 text-sky-800',
      isOnline: false,
      role: 'Student',
      className: 'Sharaf Basic',
      lastMessage: 'File: latihan_nahwu.pdf',
      time: '20 Sep',
      unreadCount: 0,
      isGroup: false,
      location: 'Kuala Lumpur, Malaysia',
      stats: { classes: 3, avgScore: '70%', certificates: 1 },
      messages: []
    },
    {
      id: 'conv-10',
      name: 'Class Discussion',
      avatar: null,
      initials: 'CD',
      initialBg: 'bg-purple-100 text-purple-800',
      isOnline: false,
      role: 'Group',
      className: 'All Classes',
      lastMessage: 'Admin: Next class will be on...',
      time: '20 Sep',
      unreadCount: 5,
      isGroup: true,
      stats: { classes: 4, avgScore: '80%', certificates: 48 },
      messages: []
    }
  ]);

  // =========================================================
  // REVIEWS VIEW STATES & DATA (matching media_1790724440982.jpg)
  // =========================================================
  const [reviewTabFilter, setReviewTabFilter] = useState('all'); // 'all' (128) | 'published' (120) | 'pending' (5) | 'reported' (3)
  const [reviewClassFilter, setReviewClassFilter] = useState('All Classes');
  const [reviewRatingFilter, setReviewRatingFilter] = useState('All Ratings');
  const [reviewStatusFilter, setReviewStatusFilter] = useState('All Status');
  const [reviewSearchQuery, setReviewSearchQuery] = useState('');
  const [reviewSortOrder, setReviewSortOrder] = useState('Newest First');
  const [reviewsCurrentPage, setReviewsCurrentPage] = useState(1);
  const [isRequestReviewModalOpen, setIsRequestReviewModalOpen] = useState(false);
  const [selectedReviewForReply, setSelectedReviewForReply] = useState(null);
  const [replyInputText, setReplyInputText] = useState('');
  const [selectedReviewDetailModal, setSelectedReviewDetailModal] = useState(null);

  const [reviewsList, setReviewsList] = useState([
    {
      id: 'rev-1',
      studentName: 'Aisha Rahman',
      avatar: '/images/student_aisha.jpg',
      date: '25 Sep 2026',
      rating: 5,
      className: 'Nahwu for Beginners',
      classTagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      comment: 'Penjelasan sangat jelas dan mudah dipahami. Ustadz menjelaskan dengan sabar dan memberikan contoh yang relevan. Alhamdulillah sangat membantu.',
      status: 'Published',
      replies: [
        {
          id: 'rep-1',
          author: 'Ahmed Mohamed',
          role: 'Teacher',
          date: '25 Sep 2026',
          text: "Alhamdulillah, barakallahu fiik Aisha. Tetap semangat mengulang kaidah bab Fa'il dan Maf'ul Bih ya!"
        }
      ]
    },
    {
      id: 'rev-2',
      studentName: 'Omar Hassan',
      avatar: '/images/student_omar.jpg',
      date: '24 Sep 2026',
      rating: 5,
      className: 'Sharaf Basic',
      classTagColor: 'bg-purple-50 text-purple-700 border-purple-100',
      comment: 'Kelasnya terstruktur dan materi disampaikan dengan baik. Banyak latihan soal sehingga lebih mudah memahami. Jazakum Allahu khairan.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-3',
      studentName: 'Fatimah Zahra',
      avatar: '/images/student_fatimah.jpg',
      date: '22 Sep 2026',
      rating: 4,
      className: 'Arabic Conversation',
      classTagColor: 'bg-blue-50 text-blue-700 border-blue-100',
      comment: 'Materinya bagus, tapi mungkin bisa lebih banyak praktik percakapan di kelas live. Secara keseluruhan sangat bermanfaat.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-4',
      studentName: 'Sara Nabilah',
      avatar: null,
      initials: 'SN',
      initialBg: 'bg-sky-100 text-sky-800',
      date: '20 Sep 2026',
      rating: 5,
      className: 'Quran Tajweed',
      classTagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      comment: "Ustadz sangat sabar dan cara mengajarnya mudah dipahami. Saya jadi lebih percaya diri membaca Al-Qur'an dengan tajwid yang benar.",
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-5',
      studentName: 'Ali Khan',
      avatar: '/images/student_ali.jpg',
      date: '18 Sep 2026',
      rating: 5,
      className: 'Academic Writing',
      classTagColor: 'bg-amber-50 text-amber-700 border-amber-100',
      comment: 'Materi sangat lengkap dan contoh-contohnya jelas. Tugas dan feedback membantu saya meningkatkan kemampuan menulis dalam bahasa Arab.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-6',
      studentName: 'Hasan Ali',
      avatar: null,
      initials: 'HA',
      initialBg: 'bg-emerald-100 text-emerald-800',
      date: '16 Sep 2026',
      rating: 5,
      className: 'Nahwu for Beginners',
      classTagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      comment: 'Penjelasan tabel tashrif dan skema bagan nahwu sangat sistematis. Rekaman kelas juga sangat membantu pengulangan mandiri.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-7',
      studentName: 'Layla Ahmad',
      avatar: '/images/student_layla.jpg',
      date: '14 Sep 2026',
      rating: 4,
      className: 'Arabic Conversation',
      classTagColor: 'bg-blue-50 text-blue-700 border-blue-100',
      comment: 'Sesi dialog interaktif 2 arah membuat santri tidak takut salah berbicara dalam bahasa fusha.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-8',
      studentName: 'Tariq Ziyad',
      avatar: null,
      initials: 'TZ',
      initialBg: 'bg-indigo-100 text-indigo-800',
      date: '12 Sep 2026',
      rating: 5,
      className: 'Sharaf Basic',
      classTagColor: 'bg-purple-50 text-purple-700 border-purple-100',
      comment: 'Ustadz sangat menguasai materi dan selalu memberikan kuis cepat di akhir pertemuan untuk menguji pemahaman.',
      status: 'Published',
      replies: []
    },
    {
      id: 'rev-9',
      studentName: 'Maryam Basyir',
      avatar: null,
      initials: 'MB',
      initialBg: 'bg-pink-100 text-pink-800',
      date: '10 Sep 2026',
      rating: 5,
      className: 'Quran Tajweed',
      classTagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      comment: 'Bimbingan privat makhraj huruf sangat teliti. Menunggu persetujuan moderasi.',
      status: 'Pending',
      replies: []
    },
    {
      id: 'rev-10',
      studentName: 'Bilal Ibrahim',
      avatar: null,
      initials: 'BI',
      initialBg: 'bg-rose-100 text-rose-800',
      date: '08 Sep 2026',
      rating: 2,
      className: 'Academic Writing',
      classTagColor: 'bg-amber-50 text-amber-700 border-amber-100',
      comment: 'Koneksi audio sempat terputus pada pertemuan ke-3, mohon periksa mikrofon.',
      status: 'Reported',
      replies: []
    }
  ]);

  // =========================================================
  // ANALYTICS VIEW STATES & DATA (matching media_1790724716497.jpg)
  // =========================================================
  const [analyticsPeriod, setAnalyticsPeriod] = useState('Last 30 days');
  const [analyticsClassFilter, setAnalyticsClassFilter] = useState('All Classes');
  const [analyticsContentTab, setAnalyticsContentTab] = useState('materials'); // 'materials' | 'assignments' | 'quizzes'
  const [analyticsEarningsPeriod, setAnalyticsEarningsPeriod] = useState('Last 30 days');
  const [hoveredGrowthIndex, setHoveredGrowthIndex] = useState(21); // Default to 22 Sep (21)

  const topPerformingData = {
    materials: [
      { id: 1, title: 'Kuis Nahwu Dasar 1', views: '1.2K views', img: '/images/class_nahwu.jpg' },
      { id: 2, title: 'Kuis Sharaf 1', views: '980 views', img: '/images/class_conversation.jpg' },
      { id: 3, title: "Materi Isim, Fi'il, dan Harf", views: '842 views', img: '/images/class_nahwu.jpg' },
      { id: 4, title: 'Percakapan Bahasa Arab', views: '730 views', img: '/images/class_conversation.jpg' },
      { id: 5, title: 'Latihan Soal Nahwu', views: '690 views', img: '/images/class_nahwu.jpg' },
    ],
    assignments: [
      { id: 1, title: "Tugas Analisis I'rab Bab Fa'il", views: '450 submissions', img: '/images/class_nahwu.jpg' },
      { id: 2, title: 'Latihan Tashrif Lughawi', views: '410 submissions', img: '/images/class_conversation.jpg' },
      { id: 3, title: 'Menulis Paragraf Bahasa Arab', views: '380 submissions', img: '/images/class_nahwu.jpg' },
      { id: 4, title: 'Hafalan Matan Jurumiyyah', views: '320 submissions', img: '/images/class_conversation.jpg' },
      { id: 5, title: 'Tugas Kaidah I\'rob Lanjutan', views: '290 submissions', img: '/images/class_nahwu.jpg' },
    ],
    quizzes: [
      { id: 1, title: 'Kuis Nahwu Bab 1-3', views: '520 attempts', img: '/images/class_nahwu.jpg' },
      { id: 2, title: 'Ujian Tengah Semester Sharaf', views: '480 attempts', img: '/images/class_conversation.jpg' },
      { id: 3, title: 'Kuis Kosakata Percakapan', views: '410 attempts', img: '/images/class_nahwu.jpg' },
      { id: 4, title: 'Kuis Tajweed Hukum Nun Mati', views: '390 attempts', img: '/images/class_conversation.jpg' },
      { id: 5, title: 'Kuis Fiqih Sholat Berjamaah', views: '350 attempts', img: '/images/class_nahwu.jpg' },
    ]
  };

  const topStudentsAnalyticsList = [
    { id: 1, name: 'Aisha Rahman', completion: '95% completion', activities: '28 activities', avatar: '/images/student_aisha.jpg' },
    { id: 2, name: 'Omar Hassan', completion: '92% completion', activities: '25 activities', avatar: '/images/student_omar.jpg' },
    { id: 3, name: 'Fatimah Zahra', completion: '88% completion', activities: '22 activities', avatar: '/images/student_fatimah.jpg' },
    { id: 4, name: 'Ali Khan', completion: '85% completion', activities: '20 activities', avatar: '/images/student_ali.jpg' },
    { id: 5, name: 'Sara Nabilah', completion: '82% completion', activities: '18 activities', avatar: null, initials: 'SN', initialBg: 'bg-sky-100 text-sky-800' },
  ];

  // Sidebar Items matching reference image
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen, badge: '6' },
    { id: 'create', label: 'Create Class', icon: PlusCircle },
    { id: 'live', label: 'Live Classroom', icon: Video, badge: 'LIVE' },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'materials', label: 'Materials', icon: Folder },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '5' },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Full detailed classes for "My Classes" view
  const [myClassesDetailed, setMyClassesDetailed] = useState([
    {
      id: 'mc-1',
      title: 'Nahwu for Beginners',
      subject: 'Arabic Language',
      description: "Dasar-dasar Nahwu secara sistematis untuk pemula. Belajar mengidentifikasi jumlah ismiyah dan fi'liyah dengan mudah.",
      status: 'ongoing',
      statusLabel: 'Ongoing',
      isLiveNow: true,
      studentsCount: 32,
      time: '09:00 – 10:30 (GMT+2)',
      lessonInfo: {
        lessonText: 'Lesson 4 of 12',
        percent: 60,
        subtext: "Jumlah Ismiyah dan I'rabnya"
      },
      image: '/images/class_nahwu.jpg',
      primaryAction: { label: 'Enter Classroom', type: 'enter-live' }
    },
    {
      id: 'mc-2',
      title: 'Sharaf Basic',
      subject: 'Arabic Language',
      description: 'Pengenalan ilmu Sharaf untuk memahami perubahan kata dalam Bahasa Arab.',
      status: 'upcoming',
      statusLabel: 'Upcoming',
      startsIn: 'Starts in 2 hours',
      studentsCount: 28,
      time: 'Today, 13:00 – 14:30 (GMT+2)',
      image: '/images/class_sharaf.jpg',
      primaryAction: { label: 'Start Class', type: 'start' }
    },
    {
      id: 'mc-3',
      title: 'Quran Tajweed',
      subject: 'Quran',
      description: 'Belajar tajwid dari dasar dengan praktik bacaan yang benar.',
      status: 'upcoming',
      statusLabel: 'Upcoming',
      startsIn: 'Starts in 1 day',
      studentsCount: 15,
      time: 'Tomorrow, 16:00 – 17:30 (GMT+2)',
      image: '/images/class_tajweed.jpg',
      primaryAction: { label: 'Start Class', type: 'start' }
    },
    {
      id: 'mc-4',
      title: 'Arabic Conversation',
      subject: 'Arabic Language',
      description: 'Percakapan Bahasa Arab sehari-hari untuk meningkatkan kemampuan berbicara.',
      status: 'completed',
      statusLabel: 'Completed',
      studentsCount: 24,
      totalLessons: 12,
      completedDate: 'Completed: 20 Sep 2026',
      completionPercent: 100,
      image: '/images/class_conversation.jpg',
      primaryAction: { label: 'View Report', type: 'report' },
      secondaryAction: { label: 'Clone Class', type: 'clone' }
    },
    {
      id: 'mc-5',
      title: 'Academic Arabic Writing',
      subject: 'Arabic Language',
      description: 'Latihan menulis akademik dalam Bahasa Arab untuk mahasiswa.',
      status: 'draft',
      statusLabel: 'Draft',
      studentsCount: 0,
      time: 'Not scheduled',
      image: '/images/class_writing.jpg',
      primaryAction: { label: 'Publish Class', type: 'publish' }
    },
    {
      id: 'mc-6',
      title: 'Islamic History',
      subject: 'Islamic Studies',
      description: 'Sejarah Islam dari masa ke masa.',
      status: 'archived',
      statusLabel: 'Archived',
      studentsCount: 45,
      totalLessons: 10,
      archivedDate: 'Archived: 1 Aug 2026',
      image: '/images/class_history.jpg',
      primaryAction: { label: 'View Class', type: 'view' },
      secondaryAction: { label: 'Unarchive', type: 'unarchive' }
    }
  ]);

  // Handle adding learning point
  const handleAddLearningPoint = () => {
    if (newPointText.trim()) {
      setCreateForm({
        ...createForm,
        learningPoints: [...createForm.learningPoints, newPointText.trim()]
      });
      setNewPointText('');
    } else {
      const defaultNew = `Materi lanjutan poin ke-${createForm.learningPoints.length + 1}`;
      setCreateForm({
        ...createForm,
        learningPoints: [...createForm.learningPoints, defaultNew]
      });
    }
  };

  const handleRemoveLearningPoint = (index) => {
    const updated = createForm.learningPoints.filter((_, i) => i !== index);
    setCreateForm({ ...createForm, learningPoints: updated });
  };

  const handlePublishCreatedClass = () => {
    const newClassObj = {
      id: `mc-${Date.now()}`,
      title: createForm.title || 'Untitled Class',
      subject: createForm.subject,
      description: createForm.description,
      status: 'ongoing',
      statusLabel: 'Ongoing',
      studentsCount: 0,
      time: 'Schedule pending',
      image: createForm.thumbnail,
      primaryAction: { label: 'Start Class', type: 'start' }
    };

    setMyClassesDetailed([newClassObj, ...myClassesDetailed]);
    alert(`🎉 Selamat! Kelas "${createForm.title}" berhasil dibuat dan dipublikasikan!`);
    setActiveNav('classes');
  };

  // Filter logic for My Classes
  const filteredClasses = myClassesDetailed.filter((cls) => {
    if (classTabFilter !== 'all' && cls.status !== classTabFilter) return false;
    if (subjectFilter !== 'All Subjects' && cls.subject !== subjectFilter) return false;
    if (statusFilter !== 'All Status' && cls.status !== statusFilter.toLowerCase()) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return cls.title.toLowerCase().includes(q) || cls.description.toLowerCase().includes(q) || cls.subject.toLowerCase().includes(q);
    }
    return true;
  });

  // Filter counts
  const countAll = myClassesDetailed.length;
  const countOngoing = myClassesDetailed.filter(c => c.status === 'ongoing').length;
  const countUpcoming = myClassesDetailed.filter(c => c.status === 'upcoming').length;
  const countCompleted = myClassesDetailed.filter(c => c.status === 'completed').length;
  const countDraft = myClassesDetailed.filter(c => c.status === 'draft').length;
  const countArchived = myClassesDetailed.filter(c => c.status === 'archived').length;

  // Today's schedule items for right sidebar
  const todayScheduleItems = [
    {
      timeStart: '09:00',
      timeEnd: '10:30',
      title: 'Nahwu for Beginners',
      statusBadge: 'Live Now',
      subtext: '32 students',
      image: '/images/class_nahwu.jpg',
      hasJoin: true
    },
    {
      timeStart: '13:00',
      timeEnd: '14:30',
      title: 'Sharaf Basic',
      subtext: 'Start in 2 hours',
      image: '/images/class_sharaf.jpg'
    },
    {
      timeStart: '16:00',
      timeEnd: '17:30',
      title: 'Quran Tajweed',
      subtext: 'Start in 1 day',
      image: '/images/class_tajweed.jpg'
    },
    {
      timeStart: '19:00',
      timeEnd: '20:30',
      title: 'Arabic Conversation',
      subtext: 'Start in 1 day',
      image: '/images/class_conversation.jpg'
    }
  ];

  // Quick statistics
  const classStats = [
    { label: 'Total Students', value: '1,240', change: '+12%', icon: Users, color: 'text-emerald-700', bg: 'bg-emerald-50' },
    { label: 'Total Classes', value: '6', change: '+2', icon: BookOpen, color: 'text-blue-700', bg: 'bg-blue-50' },
    { label: 'Total Lessons', value: '48', change: '+8', icon: Clock, color: 'text-amber-700', bg: 'bg-amber-50' },
    { label: 'Average Rating', value: '4.9', change: '+0.1', icon: Star, color: 'text-purple-700', bg: 'bg-purple-50' },
  ];

  const todaysClasses = [
    {
      id: 'tc-1',
      timeStart: '09:00',
      timeEnd: '10:30',
      title: 'Nahwu Intermediate',
      studentsCount: 45,
      type: 'Live Class',
      image: '/images/class_nahwu.jpg',
    },
    {
      id: 'tc-2',
      timeStart: '13:00',
      timeEnd: '14:30',
      title: 'Sharaf Basic',
      studentsCount: 28,
      type: 'Live Class',
      image: '/images/class_sharaf.jpg',
    },
    {
      id: 'tc-3',
      timeStart: '19:00',
      timeEnd: '20:30',
      title: 'Arabic Conversation',
      studentsCount: 32,
      type: 'Live Class',
      image: '/images/class_arabic.jpg',
    },
  ];

  const recentStudents = [
    { name: 'Omar Hassan', classEnrolled: 'Joined Nahwu Intermediate', time: '2 hours ago', avatar: '/images/student_omar.jpg' },
    { name: 'Fatimah Ali', classEnrolled: 'Joined Sharaf Basic', time: '5 hours ago', avatar: '/images/student_fatimah.jpg' },
    { name: 'Youssef Tarek', classEnrolled: 'Joined Arabic Conversation', time: '1 day ago', avatar: '/images/student_ali.jpg' },
  ];

  const recentReviews = [
    { name: 'Sara Ahmad', rating: '5.0', comment: 'Ustadz sangat jelas dalam menjelaskan. Barakallah.', avatar: '/images/student_aisha.jpg' },
    { name: 'Ali Mahmoud', rating: '4.8', comment: 'Kelasnya sangat bermanfaat dan terstruktur.', avatar: '/images/student_ali.jpg' },
    { name: 'Aisha Khaled', rating: '5.0', comment: 'Penjelasan mudah dipahami, sangat membantu.', avatar: '/images/student_fatimah.jpg' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* Top Fixed Header Bar */}
      <header className="shrink-0 z-40 bg-white border-b border-gray-200 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
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
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">IlmHub</span>
            <p className="text-[9px] text-gray-400 font-medium -mt-0.5">Learn • Teach • Grow</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search classes, students, or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:ring-1 focus:ring-[#114B44] transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          <button 
            onClick={() => setActiveNav('messages')}
            className="relative p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          <button className="hidden sm:flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>العربية</span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300">
              <img 
                src="/images/tutor_ahmed.jpg" 
                alt={teacherName} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                }}
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-xs font-bold text-gray-900 leading-tight">{teacherName}</span>
              <span className="block text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Teacher</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout: Fixed Locked Left Sidebar + Scrollable Spacious Canvas */}
      <div className="flex-1 flex overflow-hidden w-full max-w-[1700px] mx-auto">
        
        {/* FIXED LOCKED LEFT SIDEBAR */}
        <aside className="w-60 lg:w-64 bg-white border-r border-gray-200 p-4 shrink-0 hidden md:flex flex-col justify-between h-full overflow-y-auto no-scrollbar select-none">
          
          <div className="space-y-4">
            {/* Teacher Profile Card */}
            <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-300 shrink-0">
                <img 
                  src="/images/tutor_ahmed.jpg" 
                  alt={teacherName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-xs font-bold text-gray-900 truncate">{teacherName}</h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 fill-emerald-100" />
                </div>
                <p className="text-[10px] text-gray-500 truncate">Arabic & Nahwu Tutor</p>
                <div className="flex items-center gap-1 text-[10px] text-amber-500 font-semibold mt-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal">(1.2k students)</span>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation Menu */}
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'live') {
                        onStartLive({
                          title: 'Nahwu for Beginners (Live Class)',
                          tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        });
                      } else {
                        setActiveNav(item.id);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-xs'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${
                        item.badge === 'LIVE' 
                          ? 'bg-red-500 text-white animate-pulse' 
                          : isActive ? 'bg-white/20 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Card: "Become a Top Tutor" */}
          <div className="pt-4 border-t border-gray-100">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 p-3 rounded-2xl space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">Become a Top Tutor</h4>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    Complete your profile and create more classes to reach more students.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-gray-400">Profile Strength</span>
                  <span className="text-amber-700">80%</span>
                </div>
                <div className="w-full h-1.5 bg-amber-200/50 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[80%]"></div>
                </div>
              </div>

              <button 
                onClick={() => alert('Membuka tips optimasi profil tutor')}
                className="w-full text-center text-[11px] font-bold text-gray-800 hover:text-[#114B44] transition-colors py-1 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Tips</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </aside>

        {/* RIGHT SPACIOUS MAIN CANVAS (Scrollable Area) */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 min-w-0 pb-20">
          
          {/* ========================================================= */}
          {/* VIEW: CREATE A NEW CLASS (Matching media_1790720686824)  */}
          {/* ========================================================= */}
          {activeNav === 'create' ? (
            <div className="space-y-6 max-w-7xl mx-auto">
              
              {/* Top Header with Back Arrow & 4-Step Wizard */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-200/80">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveNav('classes')}
                    className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-2xs transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Create a New Class</h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Buat kelas baru untuk berbagi ilmu dengan siswa di seluruh dunia.
                    </p>
                  </div>
                </div>

                {/* 4-Step Wizard Stepper */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs font-bold overflow-x-auto pb-1 sm:pb-0">
                  {[
                    { step: 1, label: 'Basic Info' },
                    { step: 2, label: 'Content & Schedule' },
                    { step: 3, label: 'Settings' },
                    { step: 4, label: 'Publish' },
                  ].map((s, idx) => {
                    const isPassed = createStep > s.step;
                    const isCurrent = createStep === s.step;
                    return (
                      <React.Fragment key={s.step}>
                        <button
                          onClick={() => setCreateStep(s.step)}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                            isCurrent
                              ? 'text-[#114B44] font-extrabold bg-emerald-50'
                              : isPassed
                              ? 'text-emerald-700 font-semibold'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                            isCurrent
                              ? 'bg-[#114B44] text-white'
                              : isPassed
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {isPassed ? '✓' : s.step}
                          </span>
                          <span className="whitespace-nowrap">{s.label}</span>
                        </button>
                        {idx < 3 && <div className="w-6 h-0.5 bg-gray-200 shrink-0"></div>}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Main Form Grid: Left 2 Cols (Form Inputs) + Right 1 Col (Class Preview & Options) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT FORM CANVAS (7 or 8 Cols) */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                  
                  {/* Step 1: Basic Information Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs space-y-5">
                    <div>
                      <h2 className="text-base font-extrabold text-gray-900">Basic Information</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Isi informasi dasar kelas yang akan kamu ajar.</p>
                    </div>

                    {/* Class Title */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-900">
                        Class Title <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={createForm.title}
                          onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
                          placeholder="e.g. Nahwu for Beginners"
                          maxLength={100}
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">
                          {createForm.title.length}/100
                        </span>
                      </div>
                    </div>

                    {/* Subject & Level Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-900">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            value={createForm.subject}
                            onChange={(e) => setCreateForm({ ...createForm, subject: e.target.value })}
                            className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer"
                          >
                            <option value="Arabic Language">📖 Arabic Language</option>
                            <option value="Quran">📖 Quran & Tajweed</option>
                            <option value="Islamic Studies">🕌 Islamic Studies</option>
                            <option value="Hadith">📜 Hadith Studies</option>
                            <option value="Fiqh">⚖️ Fiqh & Sharia</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Level */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-900">
                          Level <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            value={createForm.level}
                            onChange={(e) => setCreateForm({ ...createForm, level: e.target.value })}
                            className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-800 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer"
                          >
                            <option value="Beginner">📊 Beginner</option>
                            <option value="Intermediate">📊 Intermediate</option>
                            <option value="Advanced">📊 Advanced</option>
                            <option value="All Levels">📊 All Levels</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Short Description */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-900">
                        Short Description <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea 
                          rows={3}
                          value={createForm.description}
                          onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                          placeholder="Jelaskan ringkasan materi dan target kelas ini..."
                          maxLength={500}
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-normal text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all resize-none"
                        />
                        <span className="absolute right-3 bottom-3 text-[10px] text-gray-400 font-medium">
                          {createForm.description.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Class Thumbnail */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-900">
                        Class Thumbnail <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Live Current Image */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200 group">
                          <img 
                            src={createForm.thumbnail} 
                            alt="Class thumbnail" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/class_nahwu.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button 
                              onClick={() => setCreateForm({ ...createForm, thumbnail: '/images/class_sharaf.jpg' })}
                              className="bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs cursor-pointer hover:bg-gray-100"
                            >
                              Ganti Foto
                            </button>
                          </div>
                        </div>

                        {/* Upload Box */}
                        <div 
                          onClick={() => setCreateForm({ ...createForm, thumbnail: '/images/class_sharaf.jpg' })}
                          className="border-2 border-dashed border-gray-300 hover:border-[#114B44] rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-[#F8FAFC] hover:bg-emerald-50/40 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-full bg-emerald-100/70 text-[#114B44] flex items-center justify-center mb-2">
                            <Upload className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-gray-800">Upload Image</span>
                          <span className="text-[10px] text-gray-400 mt-0.5">JPEG, PNG (Max 5MB)</span>
                          <span className="text-[9px] text-gray-400">Recommended size 1280x720</span>
                        </div>
                      </div>
                    </div>

                    {/* What Will Students Learn? (Bullet Points) */}
                    <div className="space-y-3 pt-2 border-t border-gray-100">
                      <div>
                        <label className="block text-xs font-bold text-gray-900">
                          What Will Students Learn?
                        </label>
                        <p className="text-[11px] text-gray-400">Tambahkan poin-poin yang akan dipelajari dalam kelas ini.</p>
                      </div>

                      <div className="space-y-2">
                        {createForm.learningPoints.map((point, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2.5 group hover:border-gray-300 transition-colors"
                          >
                            <GripVertical className="w-4 h-4 text-gray-400 shrink-0 cursor-grab" />
                            <span className="flex-1 text-xs font-medium text-gray-800">{point}</span>
                            <button 
                              onClick={() => handleRemoveLearningPoint(index)}
                              className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add point input */}
                      <div className="flex items-center gap-2">
                        <input 
                          type="text"
                          placeholder="Ketik materi belajar baru..."
                          value={newPointText}
                          onChange={(e) => setNewPointText(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') handleAddLearningPoint(); }}
                          className="flex-1 bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44]"
                        />
                        <button 
                          onClick={handleAddLearningPoint}
                          className="bg-white border border-emerald-600 text-[#114B44] hover:bg-emerald-50 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Learning Point</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Wizard Step 2 / Bottom Navigation */}
                  <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs">
                    <button 
                      onClick={() => setActiveNav('classes')}
                      className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      Batal
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => alert('Draft kelas disimpan secara lokal!')}
                        className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        Save as Draft
                      </button>
                      <button 
                        onClick={handlePublishCreatedClass}
                        className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        <span>Publish Class</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Live Class Preview & Options (4 or 5 Cols) */}
                <div className="lg:col-span-5 xl:col-span-4 space-y-5">
                  
                  {/* Card 1: Live Class Preview (Matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-gray-900">Class Preview</h3>
                      <button 
                        onClick={() => alert('Pratinjau tampilan bagi murid')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View as Student</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Preview Card */}
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-2xs bg-white">
                      {/* Image Thumbnail */}
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                        <img 
                          src={createForm.thumbnail} 
                          alt={createForm.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/class_nahwu.jpg';
                          }}
                        />
                        <button className="absolute top-2.5 right-2.5 bg-black/60 hover:bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-xs flex items-center gap-1 cursor-pointer">
                          <Eye className="w-3 h-3" />
                          <span>Preview</span>
                        </button>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 space-y-3">
                        <div>
                          <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                            {createForm.title || 'Class Title'}
                          </h4>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {createForm.subject}
                            </span>
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Edit3 className="w-3 h-3" />
                              {createForm.level}
                            </span>
                          </div>
                        </div>

                        {/* Tutor Row */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shrink-0">
                              <img src="/images/tutor_ahmed.jpg" alt={teacherName} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-gray-900 leading-tight">{teacherName}</div>
                              <div className="text-[10px] text-gray-400">Arabic & Nahwu Tutor</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span>4.9</span>
                            <span className="text-gray-400 font-normal">(1.2k)</span>
                          </div>
                        </div>

                        {/* Description Preview */}
                        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                          {createForm.description || 'Deskripsi singkat kelas...'}
                        </p>

                        {/* 4 Feature Badges */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-[10px] text-gray-600 font-semibold">
                          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-gray-50">
                            <Users className="w-3.5 h-3.5 text-gray-400" />
                            <span>{createForm.studentsCount} students</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-gray-50">
                            <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                            <span>{createForm.totalLessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-gray-50">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span>{createForm.durationWeeks} weeks duration</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-gray-50">
                            <Award className="w-3.5 h-3.5 text-gray-400" />
                            <span>Certificate included</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Card 2: Pricing Option */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-3">
                    <div>
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Pricing</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Tentukan harga kelas atau buat kelas gratis.</p>
                    </div>

                    <div className="space-y-2">
                      {/* Free Option */}
                      <label 
                        onClick={() => setCreateForm({ ...createForm, pricingType: 'free' })}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          createForm.pricingType === 'free'
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-2xs'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                          createForm.pricingType === 'free'
                            ? 'bg-[#114B44] text-white'
                            : 'border border-gray-300'
                        }`}>
                          {createForm.pricingType === 'free' && '✓'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Free Class</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">Gratis untuk semua siswa.</div>
                        </div>
                      </label>

                      {/* Paid Option */}
                      <label 
                        onClick={() => setCreateForm({ ...createForm, pricingType: 'paid' })}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          createForm.pricingType === 'paid'
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-2xs'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                          createForm.pricingType === 'paid'
                            ? 'bg-[#114B44] text-white'
                            : 'border border-gray-300'
                        }`}>
                          {createForm.pricingType === 'paid' && '✓'}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold text-gray-900">Paid Class</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">Tentukan harga untuk kelas premium.</div>
                          
                          {createForm.pricingType === 'paid' && (
                            <div className="mt-2 flex items-center gap-2">
                              <input 
                                type="number" 
                                value={createForm.price}
                                onChange={(e) => setCreateForm({ ...createForm, price: Number(e.target.value) })}
                                className="w-28 bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-800 focus:outline-none focus:border-[#114B44]"
                              />
                              <span className="text-xs font-bold text-gray-700">EGP</span>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Card 3: Class Visibility */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-3">
                    <div>
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Class Visibility</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Pilih siapa yang dapat melihat dan bergabung dengan kelas ini.</p>
                    </div>

                    <div className="space-y-2">
                      {/* Public */}
                      <label 
                        onClick={() => setCreateForm({ ...createForm, visibility: 'public' })}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          createForm.visibility === 'public'
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-2xs'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                          createForm.visibility === 'public'
                            ? 'bg-[#114B44] text-white'
                            : 'border border-gray-300'
                        }`}>
                          {createForm.visibility === 'public' && '✓'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Public</span>
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">Terbuka untuk semua pengguna.</div>
                        </div>
                      </label>

                      {/* Private */}
                      <label 
                        onClick={() => setCreateForm({ ...createForm, visibility: 'private' })}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          createForm.visibility === 'private'
                            ? 'border-emerald-600 bg-emerald-50/50 shadow-2xs'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                          createForm.visibility === 'private'
                            ? 'bg-[#114B44] text-white'
                            : 'border border-gray-300'
                        }`}>
                          {createForm.visibility === 'private' && '✓'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-gray-500" />
                            <span>Private</span>
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">Hanya siswa dengan link undangan.</div>
                        </div>
                      </label>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'classes' ? (
            /* ========================================================= */
            /* VIEW 2: MY CLASSES VIEW                                   */
            /* ========================================================= */
            <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
              
              {/* LEFT / CENTER COLUMN: My Classes Catalog */}
              <div className="flex-1 min-w-0 w-full space-y-4">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">My Classes</h1>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Kelola semua kelas yang kamu ajar. Buat kelas baru, atur jadwal, lihat siswa, dan mulai mengajar.
                      </p>
                    </div>
                  </div>

                  {/* Header Action Buttons */}
                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <button 
                      onClick={() => setActiveNav('create')}
                      className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Create Class</span>
                    </button>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>Manage Schedule</span>
                    </button>
                  </div>
                </div>

                {/* Filter Tabs Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
                  {[
                    { id: 'all', label: 'All Classes', count: countAll },
                    { id: 'ongoing', label: 'Ongoing', count: countOngoing },
                    { id: 'upcoming', label: 'Upcoming', count: countUpcoming },
                    { id: 'completed', label: 'Completed', count: countCompleted },
                    { id: 'draft', label: 'Draft', count: countDraft },
                    { id: 'archived', label: 'Archived', count: countArchived },
                  ].map((tab) => {
                    const isActive = classTabFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setClassTabFilter(tab.id)}
                        className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-xs'
                            : 'bg-white border border-gray-200/80 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search & Filter Dropdowns Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search my classes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-8 pr-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44]"
                    />
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <select 
                      value={subjectFilter} 
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="bg-[#F8FAFC] border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-2.5 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="All Subjects">All Subjects</option>
                      <option value="Arabic Language">Arabic Language</option>
                      <option value="Quran">Quran</option>
                      <option value="Islamic Studies">Islamic Studies</option>
                    </select>

                    <select 
                      value={statusFilter} 
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-[#F8FAFC] border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-2.5 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="All Status">All Status</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Completed">Completed</option>
                      <option value="Draft">Draft</option>
                      <option value="Archived">Archived</option>
                    </select>

                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-[#F8FAFC] border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-2.5 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Most Students">Most Students</option>
                    </select>
                  </div>
                </div>

                {/* Class Cards List */}
                <div className="space-y-3">
                  {filteredClasses.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center space-y-2">
                      <BookOpen className="w-8 h-8 text-gray-300 mx-auto" />
                      <h4 className="text-sm font-bold text-gray-700">Tidak ada kelas yang sesuai filter</h4>
                      <p className="text-xs text-gray-400">Coba ubah kata kunci pencarian atau tab filter di atas.</p>
                      <button 
                        onClick={() => { setClassTabFilter('all'); setSubjectFilter('All Subjects'); setStatusFilter('All Status'); setSearchQuery(''); }}
                        className="text-xs font-bold text-[#114B44] hover:underline"
                      >
                        Reset Filter
                      </button>
                    </div>
                  ) : (
                    filteredClasses.map((cls) => (
                      <div 
                        key={cls.id}
                        className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all space-y-3"
                      >
                        {/* TIER 1: TOP MAIN ROW (Thumbnail + Details) */}
                        <div className="flex items-start gap-3.5 sm:gap-4">
                          {/* Thumbnail */}
                          <div className="relative w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100 shadow-2xs">
                            <img 
                              src={cls.image} 
                              alt={cls.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                            
                            <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                              <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs ${
                                cls.status === 'ongoing' ? 'bg-[#114B44] text-white' :
                                cls.status === 'upcoming' ? 'bg-blue-600 text-white' :
                                cls.status === 'completed' ? 'bg-gray-700 text-white' :
                                cls.status === 'draft' ? 'bg-amber-600 text-white' :
                                'bg-gray-500 text-white'
                              }`}>
                                {cls.statusLabel}
                              </span>
                            </div>

                            {cls.isLiveNow && (
                              <div className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-xs animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                <span>LIVE</span>
                              </div>
                            )}
                          </div>

                          {/* Info Column */}
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-snug">
                                {cls.title}
                              </h3>
                              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                                {cls.subject}
                              </span>
                            </div>

                            <p className="text-xs text-gray-500 line-clamp-1 leading-relaxed">
                              {cls.description}
                            </p>

                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-0.5">
                              <span className="flex items-center gap-1 font-medium">
                                <Users className="w-3.5 h-3.5 text-gray-400" />
                                <span>{cls.studentsCount} students</span>
                              </span>

                              {cls.isLiveNow && (
                                <span className="flex items-center gap-1 text-red-600 font-bold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                  <span>Live Now</span>
                                </span>
                              )}

                              {cls.time && (
                                <span className="flex items-center gap-1 text-gray-500 font-medium">
                                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                                  <span>{cls.time}</span>
                                </span>
                              )}

                              {cls.completedDate && (
                                <span className="text-gray-400 font-medium">{cls.completedDate}</span>
                              )}

                              {cls.archivedDate && (
                                <span className="text-gray-400 font-medium">{cls.archivedDate}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* TIER 2: BOTTOM ACTION & PROGRESS BAR ROW */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pt-2.5 border-t border-gray-100">
                          
                          {/* Left: Progress info / Countdown / Completion */}
                          <div className="flex items-center gap-3 min-w-0">
                            {cls.lessonInfo && (
                              <div className="w-40 sm:w-48 space-y-1">
                                <div className="flex items-center justify-between text-[11px] font-bold">
                                  <span className="text-gray-700">{cls.lessonInfo.lessonText}</span>
                                  <span className="text-emerald-700">{cls.lessonInfo.percent}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${cls.lessonInfo.percent}%` }}></div>
                                </div>
                                <p className="text-[10px] text-gray-400 truncate">{cls.lessonInfo.subtext}</p>
                              </div>
                            )}

                            {cls.startsIn && (
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-xl whitespace-nowrap">
                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                <span>{cls.startsIn}</span>
                              </div>
                            )}

                            {cls.completionPercent && (
                              <div className="w-36 space-y-1">
                                <div className="flex items-center justify-between text-[11px] font-bold">
                                  <span className="text-gray-400">Completion</span>
                                  <span className="text-emerald-600">{cls.completionPercent}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-600 rounded-full w-full"></div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Right: Buttons */}
                          <div className="flex items-center gap-2 ml-auto shrink-0">
                            {cls.primaryAction?.type === 'enter-live' && (
                              <button
                                onClick={() => onStartLive({
                                  title: cls.title,
                                  tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                                  image: cls.image
                                })}
                                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
                              >
                                <span>Enter Classroom</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            )}

                            {cls.primaryAction?.type === 'start' && (
                              <button
                                onClick={() => onStartLive({
                                  title: cls.title,
                                  tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                                  image: cls.image
                                })}
                                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 whitespace-nowrap"
                              >
                                Start Class
                              </button>
                            )}

                            {cls.primaryAction?.type === 'publish' && (
                              <button
                                onClick={() => alert(`Mempublikasikan kelas: ${cls.title}`)}
                                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap"
                              >
                                Publish Class
                              </button>
                            )}

                            {cls.primaryAction?.type === 'report' && (
                              <button
                                onClick={() => alert(`Laporan kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                              >
                                View Report
                              </button>
                            )}

                            {cls.primaryAction?.type === 'view' && (
                              <button
                                onClick={() => alert(`Lihat arsip kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                              >
                                View Class
                              </button>
                            )}

                            {cls.secondaryAction?.type === 'clone' && (
                              <button
                                onClick={() => alert(`Duplikasi kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                              >
                                Clone Class
                              </button>
                            )}

                            {cls.secondaryAction?.type === 'unarchive' && (
                              <button
                                onClick={() => alert(`Buka arsip kelas: ${cls.title}`)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                              >
                                Unarchive
                              </button>
                            )}

                            {!cls.secondaryAction && cls.status !== 'completed' && (
                              <>
                                <button 
                                  onClick={() => alert(`Lihat detail kelas: ${cls.title}`)}
                                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                                >
                                  View
                                </button>
                                <button 
                                  onClick={() => alert(`Edit kelas: ${cls.title}`)}
                                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                                >
                                  Edit
                                </button>
                              </>
                            )}

                            <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
                      </div>
                    ))
                  )}
                </div>

              </div>

              {/* RIGHT SIDEBAR WIDGETS COLUMN (Ramping, Compact & Rapi) */}
              <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                
                {/* Widget 1: Today's Schedule */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Today's Schedule</h2>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {todayScheduleItems.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-2.5 text-xs p-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="text-center bg-gray-50 p-1.5 rounded-lg border border-gray-100 shrink-0 w-12">
                            <span className="block font-black text-gray-900 text-[10px] leading-tight">{item.timeStart}</span>
                            <span className="block text-[8px] text-gray-400 leading-tight">{item.timeEnd}</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-gray-900 text-xs truncate leading-tight">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5">
                              {item.statusBadge ? (
                                <span className="text-red-600 font-bold">{item.statusBadge} • {item.subtext}</span>
                              ) : (
                                item.subtext
                              )}
                            </p>
                          </div>
                        </div>

                        {item.hasJoin ? (
                          <button 
                            onClick={() => onStartLive({
                              title: item.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: item.image
                            })}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shadow-xs cursor-pointer shrink-0"
                          >
                            Join
                          </button>
                        ) : (
                          <button className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer shrink-0">
                            <MoreVertical className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Widget 2: Class Statistics */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Class Statistics</h2>
                    <select className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5 cursor-pointer focus:outline-none">
                      <option>Last 30 days</option>
                      <option>Last 6 months</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {classStats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} className="p-2.5 rounded-xl bg-[#F8FAFC] border border-gray-100 flex items-start justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[9px] text-gray-400 font-medium">{stat.label}</span>
                            <div className="text-base font-black text-gray-900">{stat.value}</div>
                            <span className="text-[9px] text-emerald-600 font-bold">{stat.change}</span>
                          </div>
                          <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color} shrink-0`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Widget 3: Quick Actions */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-2.5">
                  <h2 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Quick Actions</h2>
                  <div className="space-y-1.5">
                    <button 
                      onClick={() => setActiveNav('create')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Create New Class</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka upload materi PDF / Video')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-blue-700" />
                      <span>Upload Material</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka form penugasan baru')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-purple-700" />
                      <span>Create Assignment</span>
                    </button>
                    <button 
                      onClick={() => alert('Membuka form kuis baru')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                      <span>Create Quiz</span>
                    </button>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors border border-gray-100 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Manage Schedule</span>
                    </button>
                  </div>
                </div>

                {/* Widget 4: Schedule Promo Helper */}
                <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white rounded-2xl border border-emerald-200/60 p-4 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600/10 text-[#114B44] flex items-center justify-center shrink-0">
                      <CalendarPlus className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-900">Kelola jadwal dengan mudah</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
                        Atur kelas recurring, tambah waktu tersedia, dan biarkan siswa booking kelasmu.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveNav('schedule')}
                    className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Open Schedule →
                  </button>
                </div>

              </div>

            </div>
          ) : activeNav === 'schedule' ? (
            /* ========================================================= */
            /* VIEW 3: SCHEDULE ROOM (Matching media_1790721133363.jpg)  */
            /* ========================================================= */
            <div className="space-y-6 max-w-[1600px] mx-auto">
              
              {/* Header: Title + Recurring Schedule + Add Schedule */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#114B44] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Calendar className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Schedule</h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Atur jadwal kelas, kelola sesi, dan lihat semua aktivitas mengajar kamu.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                  <button 
                    onClick={() => setIsRecurringModalOpen(true)}
                    className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-2xs transition-colors cursor-pointer active:scale-95"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
                    <span>Recurring Schedule</span>
                  </button>

                  <button 
                    onClick={() => setIsAddScheduleModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4 text-emerald-300" />
                    <span>Add Schedule</span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>
              </div>

              {/* Main Content Layout: Timetable Grid (Left) + Right Compact Sidebar (w-72/w-80) */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER / TIMETABLE CANVAS (Spacious & Flexible) */}
                <div className="flex-1 min-w-0 w-full space-y-6">
                  
                  {/* Calendar View Controls Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-gray-200/80 shadow-2xs">
                    
                    {/* Left: View Tabs + Presets */}
                    <div className="flex items-center flex-wrap gap-2">
                      <div className="flex items-center bg-gray-100/80 p-1 rounded-xl">
                        <button
                          onClick={() => setScheduleViewMode('calendar')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                            scheduleViewMode === 'calendar'
                              ? 'bg-white text-[#114B44] shadow-2xs'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Calendar View</span>
                        </button>

                        <button
                          onClick={() => setScheduleViewMode('list')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            scheduleViewMode === 'list'
                              ? 'bg-white text-[#114B44] shadow-2xs'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <List className="w-3.5 h-3.5 text-gray-500" />
                          <span>List View</span>
                        </button>
                      </div>

                      <div className="h-4 w-px bg-gray-200 hidden sm:block mx-1"></div>

                      <div className="flex items-center gap-1">
                        {['Today', 'This Week', 'This Month'].map((range) => {
                          const key = range.toLowerCase().replace(' ', '-');
                          const isSelected = (range === 'This Week' && scheduleFilterRange === 'week') ||
                                            (range === 'Today' && scheduleFilterRange === 'today') ||
                                            (range === 'This Month' && scheduleFilterRange === 'month');
                          return (
                            <button
                              key={range}
                              onClick={() => {
                                if (range === 'Today') setScheduleFilterRange('today');
                                else if (range === 'This Week') setScheduleFilterRange('week');
                                else setScheduleFilterRange('month');
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-white border border-gray-300 text-gray-900 shadow-2xs font-extrabold'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: Month Navigation + Week Dropdown */}
                    <div className="flex items-center gap-2 ml-auto">
                      <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-xl px-1 py-0.5">
                        <button 
                          onClick={() => alert('Bulan sebelumnya')}
                          className="p-1 text-gray-500 hover:text-gray-800 rounded-lg hover:bg-gray-200/60 cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-extrabold text-gray-800 px-2">Sep 2026</span>
                        <button 
                          onClick={() => alert('Bulan berikutnya')}
                          className="p-1 text-gray-500 hover:text-gray-800 rounded-lg hover:bg-gray-200/60 cursor-pointer"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="relative">
                        <select 
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-1.5 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                          defaultValue="Week"
                        >
                          <option value="Week">Week</option>
                          <option value="Day">Day</option>
                          <option value="Month">Month</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                    </div>

                  </div>

                  {/* WEEKLY TIMETABLE GRID (Exact match to media_1790721133363.jpg) */}
                  {scheduleViewMode === 'calendar' ? (
                    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] border-collapse text-left">
                          
                          {/* Table Header: Day Columns */}
                          <thead>
                            <tr className="bg-[#F8FAFC] border-b border-gray-200 text-center">
                              <th className="w-16 sm:w-20 p-3 text-[11px] font-bold text-gray-400 border-r border-gray-200/80">
                                <Clock className="w-3.5 h-3.5 mx-auto text-gray-400" />
                              </th>
                              {weekDays.map((d) => (
                                <th 
                                  key={d.id} 
                                  className={`p-3 text-center border-r border-gray-200/80 last:border-r-0 transition-colors ${
                                    d.isToday ? 'bg-emerald-50/70 border-b-2 border-b-emerald-600' : ''
                                  }`}
                                >
                                  <span className={`block text-xs ${d.isToday ? 'font-black text-[#114B44]' : 'font-extrabold text-gray-700'}`}>
                                    {d.dayName}
                                  </span>
                                  <span className={`block text-[11px] ${d.isToday ? 'font-black text-[#114B44]' : 'text-gray-400 font-medium'}`}>
                                    {d.date}
                                  </span>
                                </th>
                              ))}
                            </tr>
                          </thead>

                          {/* Table Body: 08:00 to 21:00 Slots */}
                          <tbody>
                            {timeHours.map((hour, rowIdx) => (
                              <tr key={hour} className="border-b border-gray-100 hover:bg-gray-50/40 transition-colors group">
                                
                                {/* Time Column */}
                                <td className="p-2 sm:p-3 text-[11px] font-bold text-gray-400 text-center align-top border-r border-gray-100 bg-[#FBFBF9]/40 w-16 sm:w-20 select-none">
                                  {hour}
                                </td>

                                {/* 7 Day Columns */}
                                {weekDays.map((day) => {
                                  const matchingEvents = scheduleEventsList.filter(
                                    (ev) => ev.day === day.id && ev.hourSlot === hour
                                  );

                                  return (
                                    <td 
                                      key={day.id} 
                                      className={`p-1.5 align-top border-r border-gray-100 last:border-r-0 h-16 sm:h-20 relative transition-colors ${
                                        day.isToday ? 'bg-emerald-50/20' : ''
                                      }`}
                                    >
                                      {matchingEvents.length > 0 ? (
                                        matchingEvents.map((ev) => (
                                          <div
                                            key={ev.id}
                                            onClick={() => setSelectedScheduleEvent(ev)}
                                            className={`p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer transition-all duration-200 hover:shadow-xs active:scale-[0.98] ${getEventStyle(
                                              ev.colorTheme
                                            )}`}
                                          >
                                            <div className="font-extrabold text-[11px] sm:text-xs leading-tight line-clamp-1">
                                              {ev.title}
                                            </div>
                                            <div className="text-[10px] opacity-80 mt-0.5 font-medium flex items-center gap-1">
                                              <span>{ev.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[9px] font-extrabold mt-1.5">
                                              <Video className="w-2.5 h-2.5 shrink-0" />
                                              <span>{ev.type}</span>
                                            </div>
                                          </div>
                                        ))
                                      ) : (
                                        <button
                                          onClick={() => {
                                            setNewScheduleForm(prev => ({ ...prev, day: day.id, startTime: hour }));
                                            setIsAddScheduleModalOpen(true);
                                          }}
                                          className="w-full h-full rounded-lg opacity-0 group-hover:opacity-100 hover:bg-emerald-50/60 flex items-center justify-center text-emerald-600 transition-all cursor-pointer"
                                          title={`Tambah jadwal di ${day.dayName} ${hour}`}
                                        >
                                          <Plus className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                                        </button>
                                      )}
                                    </td>
                                  );
                                })}

                              </tr>
                            ))}
                          </tbody>

                        </table>
                      </div>
                    </div>
                  ) : (
                    /* LIST VIEW MODE */
                    <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <h3 className="font-extrabold text-sm text-gray-900">List of All Scheduled Sessions (September 2026)</h3>
                        <span className="text-xs text-gray-500">{scheduleEventsList.length} total sessions</span>
                      </div>

                      <div className="divide-y divide-gray-100">
                        {scheduleEventsList.map((ev) => {
                          const matchingDay = weekDays.find(d => d.id === ev.day);
                          return (
                            <div key={ev.id} className="py-3 flex items-center justify-between gap-4 hover:bg-gray-50 px-2 rounded-xl transition-colors">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-12 text-center p-1.5 rounded-xl bg-gray-100 font-bold text-xs text-gray-800 shrink-0">
                                  <span className="block text-[10px] text-gray-500 uppercase">{matchingDay?.dayName}</span>
                                  <span>{matchingDay?.date.split(' ')[0]}</span>
                                </div>
                                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-extrabold text-xs text-gray-900 truncate">{ev.title}</h4>
                                  <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                                    <span className="text-emerald-700 font-bold">{ev.time}</span>
                                    <span>•</span>
                                    <span>{ev.studentsCount} Students</span>
                                    <span>•</span>
                                    <span className="text-red-500 font-semibold">{ev.type}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => onStartLive({
                                    title: ev.title,
                                    tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                                    image: ev.image
                                  })}
                                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                                >
                                  <Radio className="w-3 h-3 animate-pulse" />
                                  <span>Start Live</span>
                                </button>
                                <button 
                                  onClick={() => setSelectedScheduleEvent(ev)}
                                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                                >
                                  Details
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* BOTTOM 3-CARD SETTINGS & AVAILABILITY GRID (Exact match to media_1790721133363.jpg) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* CARD 1: Schedule Settings */}
                    <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
                      <h3 className="text-sm font-black text-gray-900 tracking-tight">Schedule Settings</h3>
                      
                      <div className="space-y-3">
                        {/* Time Zone */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                            <Globe className="w-3.5 h-3.5 text-gray-400" />
                            <span>Time Zone</span>
                          </div>
                          <div className="relative">
                            <select 
                              value={scheduleTimezone}
                              onChange={(e) => setScheduleTimezone(e.target.value)}
                              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                            >
                              <option value="(GMT+2) Cairo, Egypt">(GMT+2) Cairo, Egypt</option>
                              <option value="(GMT+3) Riyadh, Saudi Arabia">(GMT+3) Riyadh, Saudi Arabia</option>
                              <option value="(GMT+7) Jakarta, Indonesia">(GMT+7) Jakarta, Indonesia</option>
                              <option value="(GMT+0) London, UK">(GMT+0) London, UK</option>
                              <option value="(GMT-4) New York, USA">(GMT-4) New York, USA</option>
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
                          </div>
                        </div>

                        {/* Default Class Duration */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span>Default Class Duration</span>
                          </div>
                          <div className="relative">
                            <select 
                              value={scheduleDuration}
                              onChange={(e) => setScheduleDuration(e.target.value)}
                              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                            >
                              <option value="45 minutes">45 minutes</option>
                              <option value="60 minutes">60 minutes</option>
                              <option value="90 minutes">90 minutes</option>
                              <option value="120 minutes">120 minutes</option>
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
                          </div>
                        </div>

                        {/* Buffer Time */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                            <Layers className="w-3.5 h-3.5 text-gray-400" />
                            <span>Buffer Time</span>
                          </div>
                          <div className="relative">
                            <select 
                              value={scheduleBuffer}
                              onChange={(e) => setScheduleBuffer(e.target.value)}
                              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                            >
                              <option value="5 minutes">5 minutes</option>
                              <option value="10 minutes">10 minutes</option>
                              <option value="15 minutes">15 minutes</option>
                              <option value="30 minutes">30 minutes</option>
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
                          </div>
                        </div>

                        {/* Allow Students to Book Slots */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                            <span>Allow Students to Book Slots</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setAllowBooking(!allowBooking)}
                            className={`w-10 h-5.5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                              allowBooking ? 'bg-[#114B44]' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition-transform ${
                              allowBooking ? 'translate-x-4.5' : 'translate-x-0'
                            }`} />
                          </button>
                        </div>

                        {/* Send Reminder to Students */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                            <Bell className="w-3.5 h-3.5 text-gray-400" />
                            <span>Send Reminder to Students</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <select
                              value={reminderTiming}
                              onChange={(e) => setReminderTiming(e.target.value)}
                              className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-[11px] font-bold text-gray-700 focus:outline-none"
                            >
                              <option value="30 mins before">30 mins before</option>
                              <option value="1 hour before">1 hour before</option>
                              <option value="24 hours before">24 hours before</option>
                            </select>
                            <button
                              type="button"
                              onClick={() => setSendReminder(!sendReminder)}
                              className={`w-10 h-5.5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                                sendReminder ? 'bg-[#114B44]' : 'bg-gray-300'
                              }`}
                            >
                              <div className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition-transform ${
                                sendReminder ? 'translate-x-4.5' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* CARD 2: Quick Actions */}
                    <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3">
                      <h3 className="text-sm font-black text-gray-900 tracking-tight">Quick Actions</h3>
                      
                      <div className="space-y-2.5">
                        
                        {/* Add Single Class */}
                        <button
                          onClick={() => setIsAddScheduleModalOpen(true)}
                          className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50/50 border border-transparent hover:border-emerald-200/60 flex items-center gap-3 transition-all cursor-pointer group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Plus className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold text-gray-900 group-hover:text-emerald-800">Add Single Class</span>
                            <span className="block text-[10px] text-gray-400">Buat satu jadwal kelas</span>
                          </div>
                        </button>

                        {/* Add Recurring Class */}
                        <button
                          onClick={() => setIsRecurringModalOpen(true)}
                          className="w-full text-left p-2.5 rounded-2xl hover:bg-sky-50/50 border border-transparent hover:border-sky-200/60 flex items-center gap-3 transition-all cursor-pointer group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 border border-sky-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <RotateCcw className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold text-gray-900 group-hover:text-sky-800">Add Recurring Class</span>
                            <span className="block text-[10px] text-gray-400">Jadwal otomatis mingguan</span>
                          </div>
                        </button>

                        {/* Block Time */}
                        <button
                          onClick={() => alert('Waktu telah ditandai Tidak Tersedia (Blocked).')}
                          className="w-full text-left p-2.5 rounded-2xl hover:bg-rose-50/50 border border-transparent hover:border-rose-200/60 flex items-center gap-3 transition-all cursor-pointer group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Ban className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold text-gray-900 group-hover:text-rose-800">Block Time</span>
                            <span className="block text-[10px] text-gray-400">Tandai waktu tidak tersedia</span>
                          </div>
                        </button>

                        {/* Sync with Calendar */}
                        <button
                          onClick={() => alert('Menghubungkan ke Google Calendar & iCal sync...')}
                          className="w-full text-left p-2.5 rounded-2xl hover:bg-purple-50/50 border border-transparent hover:border-purple-200/60 flex items-center gap-3 transition-all cursor-pointer group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold text-gray-900 group-hover:text-purple-800">Sync with Calendar</span>
                            <span className="block text-[10px] text-gray-400">Hubungkan Google Calendar</span>
                          </div>
                        </button>

                      </div>
                    </div>

                    {/* CARD 3: Your Availability */}
                    <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black text-gray-900 tracking-tight">Your Availability</h3>
                        <button 
                          onClick={() => setIsAvailabilityModalOpen(true)}
                          className="text-xs font-bold text-[#114B44] hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>

                      <div className="divide-y divide-gray-100">
                        {availabilityDays.map((item, idx) => (
                          <div key={idx} className="py-2 flex items-center justify-between text-xs">
                            <span className="font-bold text-gray-700">{item.day}</span>
                            <div className="flex items-center gap-2.5">
                              <span className={`text-[11px] font-semibold ${item.enabled ? 'text-gray-500' : 'text-gray-400 italic'}`}>
                                {item.hours}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setAvailabilityDays(prev => 
                                    prev.map((d, i) => i === idx ? { ...d, enabled: !d.enabled } : d)
                                  );
                                }}
                                className={`w-8 h-4.5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                                  item.enabled ? 'bg-[#114B44]' : 'bg-gray-300'
                                }`}
                              >
                                <div className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform ${
                                  item.enabled ? 'translate-x-3.5' : 'translate-x-0'
                                }`} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Mini Calendar + Today's Schedule + Upcoming (Compact w-72 / w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Mini Interactive Calendar Picker (Matching mockup) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">September 2026</h3>
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors cursor-pointer">
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors cursor-pointer">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                      <span>Sun</span>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>

                    {/* Calendar Number Matrix */}
                    <div className="grid grid-cols-7 text-center text-xs font-bold gap-y-1">
                      {/* Prev month days (30, 31) */}
                      <span className="py-1 text-gray-300">30</span>
                      <span className="py-1 text-gray-300">31</span>
                      
                      {/* September days 1 to 30 */}
                      {[...Array(30)].map((_, i) => {
                        const dayNum = i + 1;
                        const isSelected = selectedScheduleDay === dayNum;
                        return (
                          <button
                            key={dayNum}
                            onClick={() => setSelectedScheduleDay(dayNum)}
                            className={`w-7 h-7 mx-auto flex items-center justify-center rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#114B44] text-white shadow-xs font-black'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}

                      {/* Next month days */}
                      <span className="py-1 text-gray-300">1</span>
                      <span className="py-1 text-gray-300">2</span>
                    </div>
                  </div>

                  {/* WIDGET 2: Today's Schedule (Matching mockup with Start buttons) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Today's Schedule</h3>
                      <button 
                        onClick={() => setScheduleFilterRange('today')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {[
                        { timeStart: '09:00', timeEnd: '10:30', title: 'Nahwu for Beginners', students: 32, image: '/images/class_nahwu.jpg' },
                        { timeStart: '13:00', timeEnd: '14:30', title: 'Sharaf Basic', students: 28, image: '/images/class_sharaf.jpg' },
                        { timeStart: '19:00', timeEnd: '20:30', title: 'Quran Tajweed', students: 24, image: '/images/class_tajweed.jpg' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2.5 p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                          <div className="text-center bg-gray-50 p-1.5 rounded-xl border border-gray-100 shrink-0 w-12">
                            <span className="block font-black text-gray-900 text-[10px] leading-tight">{item.timeStart}</span>
                            <span className="block text-[8px] text-gray-400 leading-tight">{item.timeEnd}</span>
                          </div>
                          <div className="w-9 h-9 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-extrabold text-gray-900 text-xs truncate">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5">
                              <span className="text-red-500 font-bold">Live Class</span> • {item.students} students
                            </p>
                          </div>
                          <button
                            onClick={() => onStartLive({
                              title: item.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: item.image
                            })}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
                          >
                            Start
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Upcoming Schedule (Matching mockup with Join buttons) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Upcoming Schedule</h3>
                      <button 
                        onClick={() => setScheduleFilterRange('week')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {upcomingScheduleList.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2.5 p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                          <div className="text-center bg-gray-50 p-1.5 rounded-xl border border-gray-100 shrink-0 w-11">
                            <span className="block font-black text-gray-900 text-xs leading-tight">{item.dateDay}</span>
                            <span className="block text-[9px] text-gray-400 leading-tight uppercase font-bold">{item.dateMonth}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-extrabold text-gray-900 text-xs truncate">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5">
                              {item.time} • {item.students} students
                            </p>
                          </div>
                          <button
                            onClick={() => onStartLive({
                              title: item.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: item.image
                            })}
                            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shadow-2xs cursor-pointer active:scale-95 shrink-0"
                          >
                            Join
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'students' ? (
            /* ========================================================= */
            /* VIEW 4: STUDENTS ROOM (Matching media_1790721537116.jpg)  */
            /* ========================================================= */
            <div className="space-y-6 max-w-[1600px] mx-auto">
              
              {/* Header: Title + Export + Add Student */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#114B44] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Users className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Students</h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Kelola semua siswa di kelasmu. Lihat progres, kehadiran, nilai, dan aktivitas mereka.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                  <button 
                    onClick={() => alert('Mengekspor data 32 siswa ke file CSV / Excel...')}
                    className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-2xs transition-colors cursor-pointer active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 text-gray-500" />
                    <span>Export</span>
                  </button>

                  <button 
                    onClick={() => setIsAddStudentModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4 text-emerald-300" />
                    <span>Add Student</span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>
              </div>

              {/* Filter Tabs: All Students (32) | Active (28) | Inactive (4) | Invited (2) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: 'all', label: 'All Students (32)' },
                  { id: 'active', label: 'Active (28)' },
                  { id: 'inactive', label: 'Inactive (4)' },
                  { id: 'invited', label: 'Invited (2)' },
                ].map((tab) => {
                  const isActive = studentTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setStudentTabFilter(tab.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-200/80'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* 4 Metric Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Total Students */}
                <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 leading-none">32</span>
                    <span className="block text-xs font-bold text-gray-500 mt-1">Total Students</span>
                    <span className="block text-[11px] font-extrabold text-emerald-700 mt-0.5">+5 this month</span>
                  </div>
                </div>

                {/* Metric 2: Active Students */}
                <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 leading-none">28</span>
                    <span className="block text-xs font-bold text-gray-500 mt-1">Active Students</span>
                    <span className="block text-[11px] font-extrabold text-emerald-700 mt-0.5">88%</span>
                  </div>
                </div>

                {/* Metric 3: Inactive Students */}
                <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center shrink-0">
                    <UserMinus className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 leading-none">4</span>
                    <span className="block text-xs font-bold text-gray-500 mt-1">Inactive Students</span>
                    <span className="block text-[11px] font-extrabold text-rose-600 mt-0.5">12%</span>
                  </div>
                </div>

                {/* Metric 4: Average Rating */}
                <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 fill-amber-400" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 leading-none">4.9</span>
                    <span className="block text-xs font-bold text-gray-500 mt-1">Average Rating</span>
                    <span className="block text-[11px] font-medium text-gray-400 mt-0.5">(120 reviews)</span>
                  </div>
                </div>

              </div>

              {/* Main Content Layout: Table Column (Left) + Right Compact Sidebar (w-72/w-80) */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER / TABLE CANVAS (Spacious, Wide & Flexible) */}
                <div className="flex-1 min-w-0 w-full space-y-4">
                  
                  {/* Search & Filter Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-2xs">
                    
                    {/* Search input */}
                    <div className="relative flex-1 min-w-[220px]">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input 
                        type="text"
                        value={studentSearchQuery}
                        onChange={(e) => setStudentSearchQuery(e.target.value)}
                        placeholder="Search students by name or email..."
                        className="w-full bg-gray-50/80 border border-gray-200 rounded-xl pl-9.5 pr-4 py-2 text-xs font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex items-center flex-wrap gap-2">
                      
                      {/* All Classes */}
                      <div className="relative">
                        <select
                          value={studentClassFilter}
                          onChange={(e) => setStudentClassFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="All Classes">All Classes</option>
                          <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                          <option value="Sharaf Basic">Sharaf Basic</option>
                          <option value="Quran Tajweed">Quran Tajweed</option>
                          <option value="Arabic Conversation">Arabic Conversation</option>
                          <option value="Academic Writing">Academic Writing</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                      {/* All Status */}
                      <div className="relative">
                        <select
                          value={studentStatusFilter}
                          onChange={(e) => setStudentStatusFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="All Status">All Status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                      {/* Sort by: Newest */}
                      <div className="relative">
                        <select
                          value={studentSortBy}
                          onChange={(e) => setStudentSortBy(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="Newest">Sort by: Newest</option>
                          <option value="Highest Progress">Highest Progress</option>
                          <option value="Lowest Progress">Lowest Progress</option>
                          <option value="Name A-Z">Name A-Z</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                    </div>

                  </div>

                  {/* STUDENTS DATA TABLE (Exact match to media_1790721537116.jpg) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[780px] text-left border-collapse">
                        
                        {/* Table Header */}
                        <thead>
                          <tr className="bg-[#F8FAFC] border-b border-gray-200 text-[11px] font-extrabold text-gray-500 uppercase tracking-wider">
                            <th className="w-10 p-3.5 text-center">
                              <input 
                                type="checkbox" 
                                checked={selectedStudentIds.length === studentsList.length && studentsList.length > 0}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedStudentIds(studentsList.map(s => s.id));
                                  } else {
                                    setSelectedStudentIds([]);
                                  }
                                }}
                                className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 cursor-pointer"
                              />
                            </th>
                            <th className="p-3.5">Student</th>
                            <th className="p-3.5">Classes</th>
                            <th className="p-3.5">Progress</th>
                            <th className="p-3.5">Last Activity</th>
                            <th className="p-3.5">Status</th>
                            <th className="p-3.5 text-center">Actions</th>
                          </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100 text-xs">
                          {studentsList
                            .filter(s => {
                              if (studentTabFilter === 'active') return s.status === 'active';
                              if (studentTabFilter === 'inactive') return s.status === 'inactive';
                              if (studentTabFilter === 'invited') return false;
                              return true;
                            })
                            .filter(s => {
                              if (studentClassFilter !== 'All Classes') return s.className === studentClassFilter;
                              return true;
                            })
                            .filter(s => {
                              if (studentStatusFilter === 'Active') return s.status === 'active';
                              if (studentStatusFilter === 'Inactive') return s.status === 'inactive';
                              return true;
                            })
                            .filter(s => {
                              if (studentSearchQuery) {
                                const q = studentSearchQuery.toLowerCase();
                                return s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q);
                              }
                              return true;
                            })
                            .map((student) => {
                              const isChecked = selectedStudentIds.includes(student.id);
                              return (
                                <tr key={student.id} className="hover:bg-gray-50/80 transition-colors">
                                  
                                  {/* Checkbox */}
                                  <td className="p-3.5 text-center">
                                    <input 
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setSelectedStudentIds(prev => [...prev, student.id]);
                                        } else {
                                          setSelectedStudentIds(prev => prev.filter(id => id !== student.id));
                                        }
                                      }}
                                      className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 cursor-pointer"
                                    />
                                  </td>

                                  {/* Student (Avatar + Name + Email) */}
                                  <td className="p-3.5">
                                    <div className="flex items-center gap-3">
                                      {student.avatar ? (
                                        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                          <img 
                                            src={student.avatar} 
                                            alt={student.name} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                              e.target.onerror = null;
                                              e.target.src = '/images/student_fatimah.jpg';
                                            }}
                                          />
                                        </div>
                                      ) : (
                                        <div className={`w-9 h-9 rounded-full font-black text-xs flex items-center justify-center shrink-0 ${student.initialBg || 'bg-gray-100 text-gray-700'}`}>
                                          {student.initials}
                                        </div>
                                      )}
                                      <div className="min-w-0">
                                        <h4 className="font-extrabold text-gray-900 text-xs truncate leading-tight">{student.name}</h4>
                                        <p className="text-[11px] text-gray-400 truncate mt-0.5">{student.email}</p>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Classes Badge */}
                                  <td className="p-3.5">
                                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${getClassBadgeStyle(student.className)}`}>
                                      {student.className}
                                    </span>
                                  </td>

                                  {/* Progress */}
                                  <td className="p-3.5">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-16 sm:w-20 bg-gray-100 rounded-full h-2 overflow-hidden">
                                        <div 
                                          className={`h-full rounded-full transition-all ${
                                            student.progress === 0 
                                              ? 'bg-transparent' 
                                              : student.progress < 30 
                                              ? 'bg-red-500' 
                                              : 'bg-[#114B44]'
                                          }`}
                                          style={{ width: `${student.progress}%` }}
                                        />
                                      </div>
                                      <span className="font-extrabold text-[11px] text-gray-700 min-w-8">
                                        {student.progress}%
                                      </span>
                                    </div>
                                  </td>

                                  {/* Last Activity */}
                                  <td className="p-3.5">
                                    <div className="text-[11px] leading-tight">
                                      <span className="block font-bold text-gray-800">{student.lastActivity.split(' ')[0]}</span>
                                      <span className="block text-gray-400">{student.lastActivity.split(' ').slice(1).join(' ')}</span>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="p-3.5">
                                    {student.status === 'active' ? (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                        <span>Active</span>
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                        <span>Inactive</span>
                                      </span>
                                    )}
                                  </td>

                                  {/* Actions */}
                                  <td className="p-3.5 text-center">
                                    <div className="flex items-center justify-center gap-1">
                                      <button 
                                        onClick={() => setActiveNav('messages')}
                                        className="p-1.5 text-gray-500 hover:text-emerald-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                        title={`Kirim pesan ke ${student.name}`}
                                      >
                                        <MessageSquare className="w-3.5 h-3.5" />
                                      </button>
                                      <button 
                                        onClick={() => setSelectedStudentModal(student)}
                                        className="p-1.5 text-gray-500 hover:text-emerald-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                        title={`Lihat analisis performa ${student.name}`}
                                      >
                                        <BarChart2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button 
                                        onClick={() => alert(`Aksi lainnya untuk ${student.name}`)}
                                        className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
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

                    {/* Pagination Footer */}
                    <div className="p-4 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-gray-500 font-medium">
                        Showing 1–10 of 32 students
                      </span>

                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => setStudentPage(Math.max(1, studentPage - 1))}
                          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        
                        {[1, 2, 3, 4].map((p) => (
                          <button
                            key={p}
                            onClick={() => setStudentPage(p)}
                            className={`w-7 h-7 rounded-lg text-xs font-black transition-all cursor-pointer ${
                              studentPage === p
                                ? 'bg-[#114B44] text-white shadow-xs'
                                : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {p}
                          </button>
                        ))}

                        <button 
                          onClick={() => setStudentPage(Math.min(4, studentPage + 1))}
                          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="relative">
                        <select className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-1.5 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none cursor-pointer">
                          <option>10 per page</option>
                          <option>25 per page</option>
                          <option>50 per page</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Compact, Rapi & Fixed Width (w-72 / w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Student Growth (Matching mockup with crisp visible bar chart) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Student Growth</h3>
                      <div className="relative">
                        <select 
                          value={studentGrowthRange}
                          onChange={(e) => setStudentGrowthRange(e.target.value)}
                          className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-2 py-0.5 pr-5 text-[10px] font-bold text-gray-700 focus:outline-none cursor-pointer"
                        >
                          <option value="Last 30 days">Last 30 days</option>
                          <option value="Last 3 months">Last 3 months</option>
                          <option value="This Year">This Year</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-1.5 top-1.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Crisp Visible Bar Chart */}
                    <div className="pt-2">
                      <div className="flex items-end justify-between h-32 gap-2 border-b border-gray-200 pb-1.5 pl-5 pr-1 relative">
                        
                        {/* Y-Axis Guide Labels */}
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] font-bold text-gray-400 pointer-events-none select-none">
                          <span>30</span>
                          <span>20</span>
                          <span>10</span>
                          <span>0</span>
                        </div>

                        {/* Bar 1: 1 Sep (value 12) */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full group">
                          <div 
                            className="w-full max-w-[24px] bg-[#114B44]/75 hover:bg-[#114B44] rounded-t-md transition-all cursor-pointer shadow-2xs"
                            style={{ height: '38px' }}
                            title="1 Sep: 12 students"
                          />
                          <span className="text-[9px] font-extrabold text-gray-400 mt-1.5">1 Sep</span>
                        </div>

                        {/* Bar 2: 8 Sep (value 16) */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full group">
                          <div 
                            className="w-full max-w-[24px] bg-[#114B44]/80 hover:bg-[#114B44] rounded-t-md transition-all cursor-pointer shadow-2xs"
                            style={{ height: '52px' }}
                            title="8 Sep: 16 students"
                          />
                          <span className="text-[9px] font-extrabold text-gray-400 mt-1.5">8 Sep</span>
                        </div>

                        {/* Bar 3: 15 Sep (value 21) */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full group">
                          <div 
                            className="w-full max-w-[24px] bg-[#114B44]/85 hover:bg-[#114B44] rounded-t-md transition-all cursor-pointer shadow-2xs"
                            style={{ height: '68px' }}
                            title="15 Sep: 21 students"
                          />
                          <span className="text-[9px] font-extrabold text-gray-400 mt-1.5">15 Sep</span>
                        </div>

                        {/* Bar 4: 22 Sep (value 26) */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full group">
                          <div 
                            className="w-full max-w-[24px] bg-[#114B44]/90 hover:bg-[#114B44] rounded-t-md transition-all cursor-pointer shadow-2xs"
                            style={{ height: '86px' }}
                            title="22 Sep: 26 students"
                          />
                          <span className="text-[9px] font-extrabold text-gray-400 mt-1.5">22 Sep</span>
                        </div>

                        {/* Bar 5: 30 Sep (value 32) */}
                        <div className="flex-1 flex flex-col items-center justify-end h-full group">
                          <div 
                            className="w-full max-w-[24px] bg-[#114B44] rounded-t-md transition-all cursor-pointer shadow-xs"
                            style={{ height: '106px' }}
                            title="30 Sep: 32 students"
                          />
                          <span className="text-[9px] font-black text-gray-900 mt-1.5">30 Sep</span>
                        </div>

                      </div>

                      <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-1 mt-1.5">
                        <span>Min: 12</span>
                        <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          +166% Growth
                        </span>
                        <span className="font-black text-gray-800">32 Total</span>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Top Performing Students (Matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Top Performing Students</h3>
                      <button 
                        onClick={() => alert('Daftar lengkap peringkat siswa')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {topPerformingStudents.map((st) => (
                        <div key={st.rank} className="flex items-center justify-between gap-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${st.medalColor}`}>
                              {st.rank}
                            </div>
                            {st.avatar ? (
                              <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                <img src={st.avatar} alt={st.name} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                                {st.initials}
                              </div>
                            )}
                            <span className="font-extrabold text-xs text-gray-900 truncate">{st.name}</span>
                          </div>
                          <span className="font-black text-xs text-emerald-700 shrink-0">{st.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Student Activity (Matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Student Activity</h3>
                    </div>

                    <div className="flex items-center gap-1 border-b border-gray-100 pb-2">
                      <button
                        onClick={() => setStudentActivityTab('recent')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          studentActivityTab === 'recent'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Recent Activity
                      </button>
                      <button
                        onClick={() => setStudentActivityTab('milestones')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          studentActivityTab === 'milestones'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Milestones
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {studentActivities.map((act, i) => {
                        const Icon = act.icon;
                        return (
                          <div key={i} className="flex items-start gap-2.5 text-xs">
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${act.iconBg}`}>
                              <Icon className="w-3 h-3" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] leading-snug truncate">{act.text}</p>
                              <span className="text-[9px] text-gray-400 mt-0.5 block">{act.time}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* WIDGET 4: Quick Actions (2x2 Grid Matching Mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Quick Actions</h3>
                    
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Invite Students */}
                      <button 
                        onClick={() => setIsInviteModalOpen(true)}
                        className="p-2.5 rounded-xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200/70 text-left flex items-center gap-2 transition-all cursor-pointer group"
                      >
                        <Mail className="w-3.5 h-3.5 text-sky-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-[11px] font-bold text-sky-900 leading-tight">Invite Students</span>
                      </button>

                      {/* Send Announcement */}
                      <button 
                        onClick={() => setIsAnnouncementModalOpen(true)}
                        className="p-2.5 rounded-xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200/70 text-left flex items-center gap-2 transition-all cursor-pointer group"
                      >
                        <Megaphone className="w-3.5 h-3.5 text-orange-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-[11px] font-bold text-orange-900 leading-tight">Send Announce</span>
                      </button>

                      {/* Download Report */}
                      <button 
                        onClick={() => alert('Mengunduh Laporan Kehadiran & Nilai Siswa (PDF)...')}
                        className="p-2.5 rounded-xl bg-teal-50/70 hover:bg-teal-100/70 border border-teal-200/70 text-left flex items-center gap-2 transition-all cursor-pointer group"
                      >
                        <Download className="w-3.5 h-3.5 text-teal-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-[11px] font-bold text-teal-900 leading-tight">Download PDF</span>
                      </button>

                      {/* Message All */}
                      <button 
                        onClick={() => setActiveNav('messages')}
                        className="p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-200/70 text-left flex items-center gap-2 transition-all cursor-pointer group"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-[11px] font-bold text-purple-900 leading-tight">Message All</span>
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'materials' ? (
            /* ========================================================= */
            /* VIEW 5: MATERIALS ROOM (Matching media_1790722178619.jpg) */
            /* ========================================================= */
            <div className="space-y-6 max-w-[1600px] mx-auto">
              
              {/* Header: Title + Upload Material */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#114B44] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Folder className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Materials</h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Kelola semua materi pembelajaran untuk kelasmu. Upload, atur, dan bagikan ke siswa.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                  <button 
                    onClick={() => setIsUploadMaterialModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4 text-emerald-300" />
                    <span>Upload Material</span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs: All Materials (48) | Documents (18) | Videos (12) | Presentations (8) | Links (6) | Others (4) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: 'all', label: 'All Materials (48)' },
                  { id: 'documents', label: 'Documents (18)' },
                  { id: 'videos', label: 'Videos (12)' },
                  { id: 'presentations', label: 'Presentations (8)' },
                  { id: 'links', label: 'Links (6)' },
                  { id: 'others', label: 'Others (4)' },
                ].map((tab) => {
                  const isActive = materialTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setMaterialTabFilter(tab.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-200/80'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Main Content Layout: Material Catalog (Left) + Right Compact Sidebar (w-72/w-80) */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER / MATERIAL CATALOG CANVAS (Spacious & Flexible) */}
                <div className="flex-1 min-w-0 w-full space-y-5">
                  
                  {/* Search & Filter Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-2xs">
                    
                    {/* Search input */}
                    <div className="relative flex-1 min-w-[200px]">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <input 
                        type="text"
                        value={materialSearchQuery}
                        onChange={(e) => setMaterialSearchQuery(e.target.value)}
                        placeholder="Search materials..."
                        className="w-full bg-gray-50/80 border border-gray-200 rounded-xl pl-9.5 pr-4 py-2 text-xs font-bold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex items-center flex-wrap gap-2">
                      
                      {/* All Classes */}
                      <div className="relative">
                        <select
                          value={materialClassFilter}
                          onChange={(e) => setMaterialClassFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="All Classes">All Classes</option>
                          <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                          <option value="Sharaf Basic">Sharaf Basic</option>
                          <option value="Quran Tajweed">Quran Tajweed</option>
                          <option value="Arabic Conversation">Arabic Conversation</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                      {/* All Topics */}
                      <div className="relative">
                        <select
                          value={materialTopicFilter}
                          onChange={(e) => setMaterialTopicFilter(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="All Topics">All Topics</option>
                          <option value="Pendahuluan">Pendahuluan</option>
                          <option value="Dasar-dasar Nahwu">Dasar-dasar Nahwu</option>
                          <option value="Jenis Kata">Jenis Kata</option>
                          <option value="Latihan">Latihan</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                      {/* Sort: Newest */}
                      <div className="relative">
                        <select
                          value={materialSortBy}
                          onChange={(e) => setMaterialSortBy(e.target.value)}
                          className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 pr-7 text-xs font-bold text-gray-700 shadow-2xs focus:outline-none focus:border-emerald-600 cursor-pointer"
                        >
                          <option value="Newest">Sort: Newest</option>
                          <option value="Most Viewed">Most Viewed</option>
                          <option value="Title A-Z">Title A-Z</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-3 pointer-events-none" />
                      </div>

                    </div>

                  </div>

                  {/* GRID OF 8 MATERIAL CARDS (2 rows x 4 cards matching mockup) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {materialsDataList
                      .filter(m => {
                        if (materialTabFilter === 'documents') return m.category === 'documents';
                        if (materialTabFilter === 'videos') return m.category === 'videos';
                        if (materialTabFilter === 'presentations') return m.category === 'presentations';
                        if (materialTabFilter === 'links') return m.category === 'links';
                        if (materialTabFilter === 'others') return m.category === 'others';
                        return true;
                      })
                      .filter(m => {
                        if (materialClassFilter !== 'All Classes') return m.className === materialClassFilter;
                        return true;
                      })
                      .filter(m => {
                        if (materialTopicFilter !== 'All Topics') return m.topic === materialTopicFilter;
                        return true;
                      })
                      .filter(m => {
                        if (materialSearchQuery) {
                          return m.title.toLowerCase().includes(materialSearchQuery.toLowerCase());
                        }
                        return true;
                      })
                      .map((mat) => (
                        <div 
                          key={mat.id}
                          className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                        >
                          {/* Top: Thumbnail Cover Area */}
                          <div>
                            <div 
                              onClick={() => setSelectedMaterialPreview(mat)}
                              className="h-32 rounded-xl bg-gray-50 flex items-center justify-center relative overflow-hidden border border-gray-100 cursor-pointer select-none"
                            >
                              {/* PDF Cover Mockup */}
                              {mat.coverType === 'pdf' && (
                                <div className="flex flex-col items-center justify-center p-3 text-center">
                                  <div className="w-10 h-12 rounded-lg bg-white border border-red-200 shadow-2xs flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
                                    <div className="w-6 h-1 bg-red-400 rounded-full mb-1"></div>
                                    <span className="text-[10px] font-black text-red-600 tracking-wider">PDF</span>
                                  </div>
                                </div>
                              )}

                              {/* Video Cover Mockup */}
                              {mat.coverType === 'video' && (
                                <div className="w-full h-full relative">
                                  <img 
                                    src={mat.coverImage || '/images/class_nahwu.jpg'} 
                                    alt={mat.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = '/images/class_nahwu.jpg';
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                                      <Play className="w-4 h-4 fill-gray-900 ml-0.5" />
                                    </div>
                                  </div>
                                  {mat.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md">
                                      {mat.duration}
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* PPT Cover Mockup */}
                              {mat.coverType === 'ppt' && (
                                <div className="flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-amber-50 to-orange-50 w-full h-full">
                                  <div className="w-10 h-12 rounded-lg bg-white border border-orange-200 shadow-2xs flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
                                    <div className="w-6 h-1 bg-orange-400 rounded-full mb-1"></div>
                                    <span className="text-[10px] font-black text-orange-600 tracking-wider">PPT</span>
                                  </div>
                                </div>
                              )}

                              {/* DOCX Cover Mockup */}
                              {mat.coverType === 'docx' && (
                                <div className="flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-sky-50 to-blue-50 w-full h-full">
                                  <div className="w-10 h-12 rounded-lg bg-white border border-blue-200 shadow-2xs flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
                                    <div className="w-6 h-1 bg-blue-400 rounded-full mb-1"></div>
                                    <span className="text-[9px] font-black text-blue-600 tracking-wider">DOCX</span>
                                  </div>
                                </div>
                              )}

                              {/* Link Cover Mockup */}
                              {mat.coverType === 'link' && (
                                <div className="flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-slate-50 to-blue-50 w-full h-full">
                                  <div className="w-11 h-11 rounded-full bg-white border border-sky-200 shadow-2xs flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                                    <Link2 className="w-5 h-5" />
                                  </div>
                                </div>
                              )}

                              {/* File Size Badge (for files) */}
                              {mat.fileSize && (
                                <span className="absolute bottom-2 right-2 bg-gray-900/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-2xs">
                                  {mat.fileSize}
                                </span>
                              )}
                            </div>

                            {/* Title & Metadata */}
                            <div className="mt-2.5">
                              <h4 
                                onClick={() => setSelectedMaterialPreview(mat)}
                                className="font-extrabold text-xs text-gray-900 truncate leading-tight hover:text-emerald-700 cursor-pointer"
                                title={mat.title}
                              >
                                {mat.title}
                              </h4>
                              <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                                {mat.fileType} • {mat.meta}
                              </p>

                              {/* Tags Row */}
                              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md truncate max-w-[120px] ${mat.tagColor}`}>
                                  {mat.className}
                                </span>
                                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md ${mat.extraTagColor}`}>
                                  {mat.tagType}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Footer: Views & 3-Dots */}
                          <div className="pt-2.5 mt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                            <span>{mat.views} • {mat.timeAgo}</span>
                            <button 
                              onClick={() => setSelectedMaterialPreview(mat)}
                              className="p-1 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
                            >
                              <MoreVertical className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>
                      ))}
                  </div>

                  {/* MATERIAL LIST TABLE (Matching mockup below the card grid) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Material List</h3>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                            <th className="py-2.5 pr-2 w-8">#</th>
                            <th className="py-2.5 px-3">Title</th>
                            <th className="py-2.5 px-3">Type</th>
                            <th className="py-2.5 px-3">Class</th>
                            <th className="py-2.5 px-3">Topic</th>
                            <th className="py-2.5 px-3">Views</th>
                            <th className="py-2.5 px-3">Date</th>
                            <th className="py-2.5 pl-2 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {materialsDataList.slice(0, 5).map((m, idx) => (
                            <tr key={m.id} className="hover:bg-gray-50/80 transition-colors">
                              <td className="py-3 pr-2 text-gray-400 font-bold">{idx + 1}</td>
                              
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2.5">
                                  {m.coverType === 'pdf' ? (
                                    <div className="w-6 h-6 rounded-md bg-red-50 text-red-600 flex items-center justify-center font-black text-[9px] shrink-0 border border-red-200">
                                      PDF
                                    </div>
                                  ) : m.coverType === 'video' ? (
                                    <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                                      <Play className="w-3 h-3 fill-purple-600" />
                                    </div>
                                  ) : m.coverType === 'ppt' ? (
                                    <div className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center font-black text-[9px] shrink-0 border border-orange-200">
                                      PPT
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-black text-[9px] shrink-0 border border-blue-200">
                                      DOC
                                    </div>
                                  )}
                                  <span className="font-extrabold text-xs text-gray-900 truncate max-w-[180px] sm:max-w-none">{m.title}</span>
                                </div>
                              </td>

                              <td className="py-3 px-3 font-semibold text-gray-600">{m.fileType}</td>
                              
                              <td className="py-3 px-3">
                                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold ${m.tagColor}`}>
                                  {m.className}
                                </span>
                              </td>

                              <td className="py-3 px-3 font-medium text-gray-500">{m.topic}</td>
                              <td className="py-3 px-3 font-bold text-gray-800">{m.viewsNum}</td>
                              <td className="py-3 px-3 text-gray-400 text-[11px]">{m.date}</td>
                              
                              <td className="py-3 pl-2 text-right">
                                <button 
                                  onClick={() => setSelectedMaterialPreview(m)}
                                  className="p-1 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Storage Usage + Materials by Type + Popular + Actions (w-72/w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Storage Usage (Matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Storage Usage</h3>
                      <span className="text-xs font-black text-emerald-700">24%</span>
                    </div>

                    <p className="text-[11px] text-gray-500">2.4 GB of 10 GB used</p>

                    {/* Segmented Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2 flex overflow-hidden">
                      <div className="bg-emerald-600 h-full" style={{ width: '50%' }} title="Documents: 1.2 GB"></div>
                      <div className="bg-sky-500 h-full" style={{ width: '33%' }} title="Videos: 800 MB"></div>
                      <div className="bg-amber-400 h-full" style={{ width: '12%' }} title="Presentations: 280 MB"></div>
                      <div className="bg-purple-400 h-full" style={{ width: '5%' }} title="Others: 120 MB"></div>
                    </div>

                    {/* Breakdown legend */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Documents</span>
                        </div>
                        <span className="font-extrabold text-gray-900 text-[11px]">1.2 GB</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Videos</span>
                        </div>
                        <span className="font-extrabold text-gray-900 text-[11px]">800 MB</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Presentations</span>
                        </div>
                        <span className="font-extrabold text-gray-900 text-[11px]">280 MB</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Others</span>
                        </div>
                        <span className="font-extrabold text-gray-900 text-[11px]">120 MB</span>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Materials by Type (SVG Donut Chart matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Materials by Type</h3>

                    {/* Donut Chart and Legend */}
                    <div className="flex items-center gap-4 pt-1">
                      
                      {/* SVG Donut */}
                      <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          {/* Background ring */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4"></circle>
                          {/* Segment 1: Documents 38% */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="33.4 88" strokeDashoffset="0"></circle>
                          {/* Segment 2: Videos 25% */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="22 88" strokeDashoffset="-33.4"></circle>
                          {/* Segment 3: Presentations 17% */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="15 88" strokeDashoffset="-55.4"></circle>
                          {/* Segment 4: Links 12% */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="10.5 88" strokeDashoffset="-70.4"></circle>
                          {/* Segment 5: Others 8% */}
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="7.1 88" strokeDashoffset="-80.9"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center text-center">
                          <span className="text-sm font-black text-gray-900 leading-none">48</span>
                          <span className="text-[8px] text-gray-400 font-bold uppercase">Total</span>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="space-y-1 text-[10px] font-semibold flex-1">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Documents
                          </span>
                          <span className="text-gray-400">18 (38%)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Videos
                          </span>
                          <span className="text-gray-400">12 (25%)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Presentations
                          </span>
                          <span className="text-gray-400">8 (17%)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Links
                          </span>
                          <span className="text-gray-400">6 (12%)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Others
                          </span>
                          <span className="text-gray-400">4 (8%)</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* WIDGET 3: Popular Materials (Matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Popular Materials</h3>
                      <button 
                        onClick={() => setMaterialSortBy('Most Viewed')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {popularMaterialsList.map((item) => (
                        <div key={item.rank} className="flex items-center justify-between gap-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-[10px] font-black text-gray-400 w-3">{item.rank}</span>
                            {item.image ? (
                              <div className="w-7 h-7 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className={`w-7 h-7 rounded-lg font-black text-[9px] flex items-center justify-center shrink-0 border border-gray-200 ${item.iconBg} ${item.iconColor}`}>
                                {item.type}
                              </div>
                            )}
                            <span className="font-extrabold text-xs text-gray-900 truncate">{item.title}</span>
                          </div>
                          <span className="font-bold text-[10px] text-gray-500 shrink-0">{item.views}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 4: Quick Actions (Clickable items with right chevron matching mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-2">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-2">Quick Actions</h3>

                    {/* Upload Material */}
                    <button
                      onClick={() => setIsUploadMaterialModalOpen(true)}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <CloudUpload className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Upload Material</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Create Folder */}
                    <button
                      onClick={() => setIsCreateFolderModalOpen(true)}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <FolderPlus className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Create Folder</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Create Quiz from Material */}
                    <button
                      onClick={() => alert('Membuka Generator Kuis otomatis dari materi PDF / Video ini!')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <HelpCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Create Quiz from Material</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Share with Students */}
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText('https://ilmhub.com/materials/nahwu-dasar-folder');
                        alert('Link koleksi materi disalin ke clipboard!');
                      }}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Link2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Share with Students</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'assignments' ? (
            /* ========================================================= */
            /* VIEW: ASSIGNMENTS (MATCHING MOCKUP & COMPACT RIGHT SIDEBAR) */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and + Create Assignment Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Assignments</h1>
                    <p className="text-xs text-gray-500 font-medium">Manage, track, and grade all student assignments across your classes.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsCreateAssignmentModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Assignment</span>
                  </button>
                </div>
              </div>

              {/* TABS FILTER (Matching Mockup with count pills) */}
              <div className="flex items-center gap-2 border-b border-gray-200/80 pb-px overflow-x-auto no-scrollbar">
                {[
                  { id: 'all', label: 'All Assignments', count: assignmentsDataList.length },
                  { id: 'drafts', label: 'Drafts', count: assignmentsDataList.filter(a => a.status === 'draft').length },
                  { id: 'scheduled', label: 'Scheduled', count: assignmentsDataList.filter(a => a.status === 'scheduled').length },
                  { id: 'published', label: 'Published', count: assignmentsDataList.filter(a => a.status === 'published').length },
                  { id: 'archived', label: 'Archived', count: assignmentsDataList.filter(a => a.status === 'archived').length },
                ].map((tab) => {
                  const isActive = assignmentTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setAssignmentTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'border-[#114B44] text-[#114B44]'
                          : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isActive ? 'bg-[#114B44] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* CONTROLS TOOLBAR: Class Dropdown, Status Dropdown, Type Dropdown, Search bar, View toggles */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Class Filter */}
                  <div className="relative">
                    <select
                      value={assignmentClassFilter}
                      onChange={(e) => setAssignmentClassFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Sharaf Basic">Sharaf Basic</option>
                      <option value="Quran Tajweed">Quran Tajweed</option>
                      <option value="Academic Writing">Academic Writing</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                    <select
                      value={assignmentStatusFilter}
                      onChange={(e) => setAssignmentStatusFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Status">All Status</option>
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="archived">Archived</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Type Filter */}
                  <div className="relative">
                    <select
                      value={assignmentTypeFilter}
                      onChange={(e) => setAssignmentTypeFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Exercise">Exercise</option>
                      <option value="Essay">Essay</option>
                      <option value="Video">Video</option>
                      <option value="Quiz">Quiz</option>
                      <option value="Document">Document</option>
                      <option value="Project">Project</option>
                      <option value="Discussion">Discussion</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Search bar */}
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={assignmentSearchQuery}
                      onChange={(e) => setAssignmentSearchQuery(e.target.value)}
                      placeholder="Search assignments..."
                      className="w-full bg-gray-50/80 border border-gray-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>

                  {/* List / Calendar View Toggle */}
                  <div className="flex items-center bg-gray-100 p-0.5 rounded-xl shrink-0">
                    <button
                      onClick={() => setAssignmentViewMode('list')}
                      className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        assignmentViewMode === 'list'
                          ? 'bg-white text-gray-900 shadow-2xs'
                          : 'text-gray-400 hover:text-gray-700'
                      }`}
                      title="List View"
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setAssignmentViewMode('calendar')}
                      className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        assignmentViewMode === 'calendar'
                          ? 'bg-white text-gray-900 shadow-2xs'
                          : 'text-gray-400 hover:text-gray-700'
                      }`}
                      title="Calendar View"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 METRIC SUMMARY CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* Total Assignments */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Assignments</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">12</h3>
                    <p className="text-[10px] text-gray-400 truncate">Across 4 active classes</p>
                  </div>
                </div>

                {/* Submissions */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Submissions</p>
                    <div className="flex items-baseline gap-1.5">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">28</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">91%</span>
                    </div>
                    <p className="text-[10px] text-gray-400 truncate">Average submission rate</p>
                  </div>
                </div>

                {/* Graded */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Graded</p>
                    <div className="flex items-baseline gap-1.5">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">24</h3>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded">86%</span>
                    </div>
                    <p className="text-[10px] text-gray-400 truncate">Graded submissions</p>
                  </div>
                </div>

                {/* Pending Review */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pending Review</p>
                    <div className="flex items-baseline gap-1.5">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">4</h3>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded">14%</span>
                    </div>
                    <p className="text-[10px] text-gray-400 truncate">Needs grading & feedback</p>
                  </div>
                </div>
              </div>

              {/* 2-COLUMN LAYOUT: Center Assignments Table Canvas + Right Sidebar Column */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER CANVAS: Assignments Table (flex-1 min-w-0 w-full) */}
                <div className="flex-1 min-w-0 w-full space-y-4">
                  
                  {/* Bulk Actions Banner if selected */}
                  {selectedAssignmentIds.length > 0 && (
                    <div className="bg-[#114B44]/5 border border-[#114B44]/20 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-[#114B44] font-bold">
                        <CheckSquare className="w-4 h-4" />
                        <span>{selectedAssignmentIds.length} assignment(s) selected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setAssignmentsDataList(prev => prev.map(a => selectedAssignmentIds.includes(a.id) ? { ...a, status: 'published' } : a));
                            setSelectedAssignmentIds([]);
                          }}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          Publish
                        </button>
                        <button
                          onClick={() => {
                            setAssignmentsDataList(prev => prev.map(a => selectedAssignmentIds.includes(a.id) ? { ...a, status: 'archived' } : a));
                            setSelectedAssignmentIds([]);
                          }}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          Archive
                        </button>
                        <button
                          onClick={() => {
                            setAssignmentsDataList(prev => prev.filter(a => !selectedAssignmentIds.includes(a.id)));
                            setSelectedAssignmentIds([]);
                          }}
                          className="px-3 py-1 bg-rose-50 border border-rose-200 rounded-lg font-bold text-rose-700 hover:bg-rose-100 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Table Container */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50/60 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                            <th className="py-3 px-4 w-10">
                              <input
                                type="checkbox"
                                checked={selectedAssignmentIds.length > 0 && selectedAssignmentIds.length === assignmentsDataList.length}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedAssignmentIds(assignmentsDataList.map(a => a.id));
                                  } else {
                                    setSelectedAssignmentIds([]);
                                  }
                                }}
                                className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3 px-3">Assignment Name</th>
                            <th className="py-3 px-3">Class</th>
                            <th className="py-3 px-3">Type</th>
                            <th className="py-3 px-3">Due Date</th>
                            <th className="py-3 px-3">Submissions</th>
                            <th className="py-3 px-3">Status</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-xs">
                          {assignmentsDataList
                            .filter(item => {
                              if (assignmentTabFilter === 'drafts') return item.status === 'draft';
                              if (assignmentTabFilter === 'scheduled') return item.status === 'scheduled';
                              if (assignmentTabFilter === 'published') return item.status === 'published';
                              if (assignmentTabFilter === 'archived') return item.status === 'archived';
                              return true;
                            })
                            .filter(item => {
                              if (assignmentClassFilter !== 'All Classes' && item.className !== assignmentClassFilter) return false;
                              if (assignmentStatusFilter !== 'All Status' && item.status !== assignmentStatusFilter.toLowerCase()) return false;
                              if (assignmentTypeFilter !== 'All Types' && item.type !== assignmentTypeFilter) return false;
                              if (assignmentSearchQuery) {
                                const q = assignmentSearchQuery.toLowerCase();
                                return (
                                  item.title.toLowerCase().includes(q) ||
                                  item.description?.toLowerCase().includes(q) ||
                                  item.className.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((assignment) => {
                              const isSelected = selectedAssignmentIds.includes(assignment.id);
                              return (
                                <tr
                                  key={assignment.id}
                                  className={`hover:bg-gray-50/80 transition-colors ${
                                    isSelected ? 'bg-emerald-50/30' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="py-3.5 px-4">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setSelectedAssignmentIds(prev => [...prev, assignment.id]);
                                        } else {
                                          setSelectedAssignmentIds(prev => prev.filter(id => id !== assignment.id));
                                        }
                                      }}
                                      className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Assignment Name & Description */}
                                  <td className="py-3.5 px-3 min-w-[180px]">
                                    <div 
                                      onClick={() => setSelectedAssignmentModal(assignment)}
                                      className="cursor-pointer group"
                                    >
                                      <p className="font-bold text-gray-900 group-hover:text-[#114B44] transition-colors">
                                        {assignment.title}
                                      </p>
                                      <p className="text-[11px] text-gray-400 truncate max-w-[220px]">
                                        {assignment.description}
                                      </p>
                                    </div>
                                  </td>

                                  {/* Class */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className="font-semibold text-gray-700 text-[11px]">
                                      {assignment.className}
                                    </span>
                                  </td>

                                  {/* Type */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${
                                      assignment.type === 'Exercise' ? 'bg-sky-50 text-sky-700 border-sky-200' :
                                      assignment.type === 'Essay' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                      assignment.type === 'Video' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                      assignment.type === 'Quiz' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                                      assignment.type === 'Document' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                      assignment.type === 'Project' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                                      'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    }`}>
                                      {assignment.type}
                                    </span>
                                  </td>

                                  {/* Due Date */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <div>
                                      <span className="font-bold text-gray-800 text-[11px] block">{assignment.dueDate}</span>
                                      <span className="text-[10px] text-gray-400 font-medium">{assignment.dueTime}</span>
                                    </div>
                                  </td>

                                  {/* Submissions Progress */}
                                  <td className="py-3.5 px-3 min-w-[140px]">
                                    <div className="space-y-1">
                                      <div className="flex items-center justify-between text-[11px]">
                                        <span className="font-bold text-gray-800">{assignment.submittedCount}/{assignment.totalCount}</span>
                                        <span className="font-black text-gray-500 text-[10px]">{assignment.progressPercent}%</span>
                                      </div>
                                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                        <div
                                          className={`h-full rounded-full transition-all duration-500 ${
                                            assignment.progressPercent >= 80 ? 'bg-emerald-600' :
                                            assignment.progressPercent >= 50 ? 'bg-sky-500' :
                                            'bg-amber-400'
                                          }`}
                                          style={{ width: `${assignment.progressPercent}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold capitalize ${
                                      assignment.status === 'published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                      assignment.status === 'draft' ? 'bg-gray-100 text-gray-600 border border-gray-200' :
                                      assignment.status === 'scheduled' ? 'bg-sky-50 text-sky-700 border border-sky-200' :
                                      'bg-purple-50 text-purple-700 border border-purple-200'
                                    }`}>
                                      {assignment.status}
                                    </span>
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                    <div className="flex items-center justify-end gap-1.5">
                                      <button
                                        onClick={() => setSelectedAssignmentModal(assignment)}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                                        title="View Details / Grade"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          const newTitle = prompt('Edit Judul Tugas:', assignment.title);
                                          if (newTitle) {
                                            setAssignmentsDataList(prev => prev.map(a => a.id === assignment.id ? { ...a, title: newTitle } : a));
                                          }
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                                        title="Edit Assignment"
                                      >
                                        <Edit className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          if (confirm(`Hapus tugas "${assignment.title}"?`)) {
                                            setAssignmentsDataList(prev => prev.filter(a => a.id !== assignment.id));
                                          }
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                                        title="Delete Assignment"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Assignment Statistics + Upcoming Deadlines + Recent Submissions + Quick Actions (w-full lg:w-72 xl:w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Assignment Statistics (Matching Mockup with Donut Chart) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Assignment Statistics</h3>
                      <button 
                        onClick={() => alert('Exporting assignment report summary...')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Donut Chart SVG Container */}
                    <div className="flex items-center justify-center py-2">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background Track */}
                          <circle cx="50" cy="50" r="38" fill="transparent" stroke="#F1F5F9" strokeWidth="12" />
                          
                          {/* Segment 1: On Time (71% = 169.5 / 238.76) - Emerald */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#059669"
                            strokeWidth="12"
                            strokeDasharray="169.5 238.76"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                          />
                          
                          {/* Segment 2: Late (14% = 33.4 / 238.76) - Amber */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#F59E0B"
                            strokeWidth="12"
                            strokeDasharray="33.4 238.76"
                            strokeDashoffset="-175"
                            strokeLinecap="round"
                          />

                          {/* Segment 3: Missing (14% = 33.4 / 238.76) - Rose */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#EF4444"
                            strokeWidth="12"
                            strokeDasharray="33.4 238.76"
                            strokeDashoffset="-213"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-xl font-black text-gray-900 leading-none">28</span>
                          <span className="text-[10px] font-bold text-gray-400 mt-0.5">Submissions</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend Breakdown */}
                    <div className="space-y-2 pt-1 border-t border-gray-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                          <span className="text-gray-600 font-medium text-[11px]">On Time</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-gray-900 text-[11px]">20</span>
                          <span className="text-[10px] font-bold text-gray-400">(71%)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Late</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-gray-900 text-[11px]">4</span>
                          <span className="text-[10px] font-bold text-gray-400">(14%)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                          <span className="text-gray-600 font-medium text-[11px]">Missing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-gray-900 text-[11px]">4</span>
                          <span className="text-[10px] font-bold text-gray-400">(14%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Upcoming Deadlines */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Upcoming Deadlines</h3>
                      <button 
                        onClick={() => setAssignmentTabFilter('all')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {assignmentsDataList.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedAssignmentModal(item)}
                          className="flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-800 text-[11px] truncate">{item.title}</p>
                            <p className="text-[10px] text-gray-400 font-medium">{item.dueDate}</p>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            item.daysLeft?.includes('2 days') ? 'bg-amber-50 text-amber-700' :
                            item.daysLeft?.includes('5 days') ? 'bg-sky-50 text-sky-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {item.daysLeft}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Recent Submissions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Recent Submissions</h3>
                      <button 
                        onClick={() => alert('Opening all submissions log...')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {recentSubmissionsList.map((sub, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2.5 text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={sub.avatar}
                              alt={sub.studentName}
                              className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-100"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] items-center justify-center hidden shrink-0">
                              {sub.studentName.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{sub.studentName}</p>
                              <p className="text-[10px] text-gray-400 truncate">{sub.assignment}</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium shrink-0">{sub.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 4: Quick Actions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-2">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-2">Quick Actions</h3>

                    {/* Create Assignment */}
                    <button
                      onClick={() => setIsCreateAssignmentModalOpen(true)}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Plus className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Create Assignment</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Import from Materials */}
                    <button
                      onClick={() => {
                        setActiveNav('materials');
                      }}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <FolderOpen className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Import from Materials</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Bulk Grade */}
                    <button
                      onClick={() => alert('Membuka mode Bulk Grade: Nilai semua tugas sekaligus dengan kriteria rubrik.')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <CheckSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Bulk Grade</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Assignment Settings */}
                    <button
                      onClick={() => alert('Membuka pengaturan default tugas & batas waktu submisi.')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Sliders className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Assignment Settings</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'quizzes' ? (
            /* ========================================================= */
            /* VIEW: QUIZZES (MATCHING MOCKUP & COMPACT RIGHT SIDEBAR)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and + Create Quiz Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Quizzes</h1>
                    <p className="text-xs text-gray-500 font-medium">Buat, kelola, dan analisis kuis untuk menguji pemahaman siswa.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsCreateQuizModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Quiz</span>
                  </button>
                </div>
              </div>

              {/* TABS FILTER (Matching Mockup with count pills) */}
              <div className="flex items-center gap-2 border-b border-gray-200/80 pb-px overflow-x-auto no-scrollbar">
                {[
                  { id: 'all', label: 'All Quizzes', count: 16 },
                  { id: 'drafts', label: 'Drafts', count: 3 },
                  { id: 'published', label: 'Published', count: 10 },
                  { id: 'archived', label: 'Archived', count: 3 },
                ].map((tab) => {
                  const isActive = quizTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setQuizTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'border-[#114B44] text-[#114B44]'
                          : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isActive ? 'bg-[#114B44] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 4 METRIC SUMMARY CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* Total Quizzes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <List className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">16</h3>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded">Total Quizzes</span>
                    </div>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">+2 this month</p>
                  </div>
                </div>

                {/* Total Attempts */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">284</h3>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">Total Attempts</span>
                    </div>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">+18% from last month</p>
                  </div>
                </div>

                {/* Average Score */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">78%</h3>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded">Average Score</span>
                    </div>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">+6% improvement</p>
                  </div>
                </div>

                {/* Average Time */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-gray-900 leading-tight">12 min</h3>
                      <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded">Average Time</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">per attempt</p>
                  </div>
                </div>
              </div>

              {/* CONTROLS TOOLBAR: Class Dropdown, Status Dropdown, Question Types Dropdown, Search bar */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Class Filter */}
                  <div className="relative">
                    <select
                      value={quizClassFilter}
                      onChange={(e) => setQuizClassFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Sharaf Basic">Sharaf Basic</option>
                      <option value="Academic Writing">Academic Writing</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                    <select
                      value={quizStatusFilter}
                      onChange={(e) => setQuizStatusFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Status">All Status</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="draft">Draft</option>
                      <option value="archived">Archived</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Question Types Filter */}
                  <div className="relative">
                    <select
                      value={quizQuestionTypeFilter}
                      onChange={(e) => setQuizQuestionTypeFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Question Types">All Question Types</option>
                      <option value="Multiple Choice">Multiple Choice</option>
                      <option value="True/False">True/False</option>
                      <option value="Fill in the Blank">Fill in the Blank</option>
                      <option value="Short Answer">Short Answer</option>
                      <option value="Matching">Matching</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Search bar */}
                  <div className="relative flex-1 md:w-64">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={quizSearchQuery}
                      onChange={(e) => setQuizSearchQuery(e.target.value)}
                      placeholder="Search quizzes..."
                      className="w-full bg-gray-50/80 border border-gray-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* 2-COLUMN LAYOUT: Center Quizzes Table Canvas + Right Sidebar Column */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER CANVAS: Quizzes Table (flex-1 min-w-0 w-full) */}
                <div className="flex-1 min-w-0 w-full space-y-4">
                  
                  {/* Table Container */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50/60 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                            <th className="py-3 px-3 w-10">
                              <input
                                type="checkbox"
                                checked={selectedQuizIds.length > 0 && selectedQuizIds.length === quizzesDataList.length}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedQuizIds(quizzesDataList.map(q => q.id));
                                  } else {
                                    setSelectedQuizIds([]);
                                  }
                                }}
                                className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3 px-2 w-8 text-center">#</th>
                            <th className="py-3 px-3">Title</th>
                            <th className="py-3 px-3">Class</th>
                            <th className="py-3 px-3 text-center">Questions</th>
                            <th className="py-3 px-3 text-center">Time Limit</th>
                            <th className="py-3 px-3 text-center">Attempts</th>
                            <th className="py-3 px-3">Average Score</th>
                            <th className="py-3 px-3 text-center">Status</th>
                            <th className="py-3 px-3 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-xs">
                          {quizzesDataList
                            .filter(item => {
                              if (quizTabFilter === 'drafts') return item.status === 'draft';
                              if (quizTabFilter === 'published') return item.status === 'published';
                              if (quizTabFilter === 'archived') return item.status === 'archived';
                              return true;
                            })
                            .filter(item => {
                              if (quizClassFilter !== 'All Classes' && item.className !== quizClassFilter) return false;
                              if (quizStatusFilter !== 'All Status' && item.status !== quizStatusFilter.toLowerCase()) return false;
                              if (quizSearchQuery) {
                                const q = quizSearchQuery.toLowerCase();
                                return (
                                  item.title.toLowerCase().includes(q) ||
                                  item.topic.toLowerCase().includes(q) ||
                                  item.className.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((quiz) => {
                              const isSelected = selectedQuizIds.includes(quiz.id);
                              return (
                                <tr
                                  key={quiz.id}
                                  className={`hover:bg-gray-50/80 transition-colors ${
                                    isSelected ? 'bg-emerald-50/30' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="py-3.5 px-3">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setSelectedQuizIds(prev => [...prev, quiz.id]);
                                        } else {
                                          setSelectedQuizIds(prev => prev.filter(id => id !== quiz.id));
                                        }
                                      }}
                                      className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Index # */}
                                  <td className="py-3.5 px-2 text-center text-gray-400 font-bold text-[11px]">
                                    {quiz.num}
                                  </td>

                                  {/* Title & Topic */}
                                  <td className="py-3.5 px-3 min-w-[200px]">
                                    <div 
                                      onClick={() => setSelectedQuizModal(quiz)}
                                      className="flex items-center gap-3 cursor-pointer group"
                                    >
                                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                                        <img 
                                          src={quiz.image} 
                                          alt={quiz.title} 
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                          onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                          }}
                                        />
                                        <div className="w-full h-full bg-emerald-50 text-emerald-800 font-black text-xs hidden items-center justify-center">
                                          {quiz.title.slice(0, 2).toUpperCase()}
                                        </div>
                                      </div>
                                      <div className="min-w-0">
                                        <p className="font-bold text-gray-900 group-hover:text-[#114B44] transition-colors text-xs truncate">
                                          {quiz.title}
                                        </p>
                                        <p className="text-[11px] text-gray-400 truncate max-w-[180px]">
                                          {quiz.topic}
                                        </p>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Class */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${quiz.classColor}`}>
                                      {quiz.className}
                                    </span>
                                  </td>

                                  {/* Questions */}
                                  <td className="py-3.5 px-3 text-center font-bold text-gray-700 text-[11px] whitespace-nowrap">
                                    {quiz.questions}
                                  </td>

                                  {/* Time Limit */}
                                  <td className="py-3.5 px-3 text-center font-bold text-gray-700 text-[11px] whitespace-nowrap">
                                    {quiz.timeLimit}
                                  </td>

                                  {/* Attempts */}
                                  <td className="py-3.5 px-3 text-center font-bold text-gray-700 text-[11px] whitespace-nowrap">
                                    {quiz.attempts}
                                  </td>

                                  {/* Average Score */}
                                  <td className="py-3.5 px-3 min-w-[120px]">
                                    {quiz.avgScore !== null ? (
                                      <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                          <div
                                            className={`h-full rounded-full ${quiz.avgScoreColor}`}
                                            style={{ width: `${quiz.avgScore}%` }}
                                          ></div>
                                        </div>
                                        <span className="font-black text-gray-700 text-[11px]">{quiz.avgScore}%</span>
                                      </div>
                                    ) : (
                                      <span className="text-gray-400 font-bold text-xs">-</span>
                                    )}
                                  </td>

                                  {/* Status */}
                                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold capitalize ${
                                      quiz.status === 'published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                      quiz.status === 'scheduled' ? 'bg-sky-50 text-sky-700 border border-sky-200' :
                                      'bg-gray-100 text-gray-600 border border-gray-200'
                                    }`}>
                                      {quiz.status}
                                    </span>
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-1">
                                      <button
                                        onClick={() => setSelectedQuizModal(quiz)}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                                        title="View Details"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          const newTitle = prompt('Edit Judul Kuis:', quiz.title);
                                          if (newTitle) {
                                            setQuizzesDataList(prev => prev.map(q => q.id === quiz.id ? { ...q, title: newTitle } : q));
                                          }
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                                        title="Edit Quiz"
                                      >
                                        <Edit3 className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          if (confirm(`Hapus kuis "${quiz.title}"?`)) {
                                            setQuizzesDataList(prev => prev.filter(q => q.id !== quiz.id));
                                          }
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                                        title="Delete Quiz"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Table Footer / Pagination Matching Mockup */}
                    <div className="p-3.5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-gray-500 font-medium">Showing 1-8 of 16 quizzes</span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setQuizPage(Math.max(1, quizPage - 1))}
                          disabled={quizPage === 1}
                          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setQuizPage(1)}
                          className={`w-7 h-7 rounded-lg font-bold text-xs cursor-pointer ${
                            quizPage === 1 ? 'bg-[#114B44] text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          1
                        </button>
                        <button
                          onClick={() => setQuizPage(2)}
                          className={`w-7 h-7 rounded-lg font-bold text-xs cursor-pointer ${
                            quizPage === 2 ? 'bg-[#114B44] text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          2
                        </button>
                        <button
                          onClick={() => setQuizPage(3)}
                          className={`w-7 h-7 rounded-lg font-bold text-xs cursor-pointer ${
                            quizPage === 3 ? 'bg-[#114B44] text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          3
                        </button>
                        <button
                          onClick={() => setQuizPage(Math.min(3, quizPage + 1))}
                          disabled={quizPage === 3}
                          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="relative">
                        <select
                          value={quizItemsPerPage}
                          onChange={(e) => setQuizItemsPerPage(e.target.value)}
                          className="bg-gray-50/80 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                        >
                          <option value="10 per page">10 per page</option>
                          <option value="20 per page">20 per page</option>
                          <option value="50 per page">50 per page</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Quiz Performance + Question Types + Upcoming Quizzes + Recent Attempts (w-full lg:w-72 xl:w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Quiz Performance (Bar Chart SVG Matching Mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900">Quiz Performance</h3>
                      <div className="relative">
                        <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5 pr-5 text-[10px] font-bold text-gray-600 appearance-none focus:outline-none cursor-pointer">
                          <option>Last 30 days</option>
                          <option>Last 7 days</option>
                          <option>This Semester</option>
                        </select>
                        <ChevronDown className="w-2.5 h-2.5 text-gray-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* SVG Bar Chart with Y-axis scale and horizontal grid lines */}
                    <div className="pt-1">
                      <div className="flex gap-2 items-stretch h-36">
                        {/* Y-Axis scale */}
                        <div className="flex flex-col justify-between text-[9px] text-gray-400 font-semibold py-0.5 text-right w-5 shrink-0">
                          <span>40</span>
                          <span>30</span>
                          <span>20</span>
                          <span>10</span>
                          <span>0</span>
                        </div>

                        {/* Chart Canvas */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="relative flex-1 w-full flex items-end justify-between gap-1.5 pt-1 pb-1 border-b border-gray-100">
                            {/* Gridlines background */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="w-full"></div>
                            </div>

                            {/* 7 Bars matching mockup */}
                            {[
                              { label: '1 Sep', val: 16, height: 40 },
                              { label: '5 Sep', val: 22, height: 55 },
                              { label: '8 Sep', val: 26, height: 65 },
                              { label: '15 Sep', val: 32, height: 80 },
                              { label: '20 Sep', val: 28, height: 70 },
                              { label: '22 Sep', val: 35, height: 88 },
                              { label: '30 Sep', val: 40, height: 100 },
                            ].map((bar, idx) => (
                              <div key={idx} className="relative flex-1 h-full flex items-end justify-center group z-10">
                                <div
                                  className="w-full max-w-[18px] bg-[#10B981] hover:bg-[#059669] rounded-t-sm transition-all duration-300 cursor-pointer shadow-2xs"
                                  style={{ height: `${bar.height}%` }}
                                  title={`${bar.label}: ${bar.val} attempts`}
                                ></div>
                                {/* Hover tooltip value */}
                                <div className="absolute -top-5 hidden group-hover:flex items-center justify-center bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-20 pointer-events-none">
                                  {bar.val}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* X-Axis labels matching mockup */}
                          <div className="flex justify-between pt-1 text-[9px] text-gray-400 font-medium px-1">
                            <span>1 Sep</span>
                            <span>8 Sep</span>
                            <span>15 Sep</span>
                            <span>22 Sep</span>
                            <span>30 Sep</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Question Types (Donut Chart SVG Matching Mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Question Types</h3>

                    {/* Donut Chart SVG */}
                    <div className="flex items-center justify-center py-1">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Multiple Choice (50%) - Blue */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#3B82F6"
                            strokeWidth="14"
                            strokeDasharray="119.38 238.76"
                            strokeDashoffset="0"
                          />
                          {/* True/False (20%) - Green */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#10B981"
                            strokeWidth="14"
                            strokeDasharray="47.75 238.76"
                            strokeDashoffset="-119.38"
                          />
                          {/* Fill in the Blank (15%) - Amber */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#F59E0B"
                            strokeWidth="14"
                            strokeDasharray="35.81 238.76"
                            strokeDashoffset="-167.13"
                          />
                          {/* Short Answer (10%) - Purple */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#8B5CF6"
                            strokeWidth="14"
                            strokeDasharray="23.88 238.76"
                            strokeDashoffset="-202.94"
                          />
                          {/* Matching (5%) - Pink */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#EC4899"
                            strokeWidth="14"
                            strokeDasharray="11.94 238.76"
                            strokeDashoffset="-226.82"
                          />
                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-base font-black text-gray-900 leading-none">120</span>
                          <span className="text-[9px] font-bold text-gray-400 mt-0.5">Questions</span>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown legend */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      {[
                        { label: 'Multiple Choice', count: '60 (50%)', dotColor: 'bg-blue-500' },
                        { label: 'True/False', count: '24 (20%)', dotColor: 'bg-emerald-500' },
                        { label: 'Fill in the Blank', count: '18 (15%)', dotColor: 'bg-amber-500' },
                        { label: 'Short Answer', count: '12 (10%)', dotColor: 'bg-purple-500' },
                        { label: 'Matching', count: '6 (5%)', dotColor: 'bg-pink-500' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                            <span className="text-gray-600 font-medium">{item.label}</span>
                          </div>
                          <span className="font-extrabold text-gray-800">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Upcoming Quizzes */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Upcoming Quizzes</h3>
                      <button 
                        onClick={() => setQuizTabFilter('all')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {upcomingQuizzesList.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-2 text-xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center shrink-0">
                              <span className="text-xs font-black text-gray-900 leading-none">{item.dateNum}</span>
                              <span className="text-[9px] font-bold text-gray-400 uppercase leading-none mt-0.5">{item.month}</span>
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{item.title}</p>
                              <p className="text-[10px] text-gray-400 truncate">{item.className}</p>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold shrink-0 ${
                            item.isUrgent ? 'text-rose-600' : 'text-amber-600'
                          }`}>
                            {item.timeLeft}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 4: Recent Attempts */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Recent Attempts</h3>
                      <button 
                        onClick={() => alert('Membuka seluruh riwayat pengerjaan kuis siswa...')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {recentQuizAttemptsList.map((sub, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2.5 text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={sub.avatar}
                              alt={sub.studentName}
                              className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-100"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] items-center justify-center hidden shrink-0">
                              {sub.studentName.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{sub.studentName}</p>
                              <p className="text-[10px] text-gray-400 truncate">{sub.quizTitle}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end shrink-0">
                            <span className={`text-[10px] font-black px-1.5 py-0.2 rounded ${sub.scoreBadge}`}>
                              {sub.score}
                            </span>
                            <span className="text-[9px] text-gray-400 font-medium mt-0.5">{sub.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'certificates' ? (
            /* ========================================================= */
            /* VIEW: CERTIFICATES (MATCHING MOCKUP & COMPACT SIDEBAR)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and + Create Certificate Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Certificates</h1>
                    <p className="text-xs text-gray-500 font-medium">Buat, kelola, dan berikan sertifikat untuk siswa yang menyelesaikan kelas, kuis, atau tugas.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsCreateCertModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Certificate</span>
                  </button>
                </div>
              </div>

              {/* TABS FILTER (Matching Mockup with count pills) */}
              <div className="flex items-center gap-2 border-b border-gray-200/80 pb-px overflow-x-auto no-scrollbar">
                {[
                  { id: 'all', label: 'All Certificates', count: 48 },
                  { id: 'templates', label: 'Templates', count: 8 },
                  { id: 'issued', label: 'Issued', count: 36 },
                  { id: 'drafts', label: 'Drafts', count: 6 },
                  { id: 'expired', label: 'Expired', count: 6 },
                ].map((tab) => {
                  const isActive = certTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCertTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'border-[#114B44] text-[#114B44]'
                          : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isActive ? 'bg-[#114B44] text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 4 METRIC SUMMARY CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* Total Certificates */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-gray-900 leading-tight">48</h3>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Certificates</p>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">+12 this month</p>
                  </div>
                </div>

                {/* Issued Certificates */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-gray-900 leading-tight">36</h3>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Issued Certificates</p>
                    <p className="text-[10px] text-purple-700 font-bold mt-0.5">75% completion rate</p>
                  </div>
                </div>

                {/* Average Rating */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-gray-900 leading-tight">4.9</h3>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Average Rating</p>
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs mt-0.5">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>

                {/* Pending Issue */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-gray-900 leading-tight">6</h3>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pending Issue</p>
                    <p className="text-[10px] text-amber-700 font-bold mt-0.5">Need review</p>
                  </div>
                </div>
              </div>

              {/* CERTIFICATE TEMPLATES SECTION (Matching Mockup with 4 Cards) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-black text-gray-900">Certificate Templates</h2>
                    <p className="text-xs text-gray-500">Pilih template atau buat desain sertifikat sendiri.</p>
                  </div>
                  <button
                    onClick={() => setCertTabFilter('templates')}
                    className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Templates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 4 Template Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {certTemplatesList.map((tpl) => (
                    <div
                      key={tpl.id}
                      onClick={() => {
                        setSelectedCertModal({
                          studentName: 'Nama Siswa Contoh',
                          className: 'Nahwu for Beginners',
                          type: 'Course Completion',
                          issueDate: '30 Sep 2026',
                          certId: 'ILM-SAMPLE-2026',
                          template: tpl.title
                        });
                      }}
                      className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs hover:shadow-md transition-all cursor-pointer group space-y-2.5"
                    >
                      {/* Template Preview Graphic */}
                      <div className={`relative h-28 rounded-xl bg-linear-to-br ${tpl.bgGradient} p-3 flex flex-col justify-between overflow-hidden border ${tpl.borderPattern}`}>
                        {/* Decorative Islamic border corners */}
                        <div className="absolute inset-1.5 border border-white/10 rounded-lg pointer-events-none"></div>
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[9px] font-black tracking-widest text-amber-300 uppercase">Certificate</span>
                          <span className="text-[8px] bg-white/20 text-white font-bold px-1.5 py-0.5 rounded backdrop-blur-xs">
                            {tpl.badge}
                          </span>
                        </div>
                        <div className="text-center z-10 my-auto">
                          <p className="text-[11px] font-serif font-bold text-white tracking-wide">of Completion</p>
                          <p className="text-[9px] text-white/70 font-medium mt-0.5">Student Name</p>
                        </div>
                        <div className="flex items-center justify-between text-[8px] text-white/50 z-10">
                          <span>IlmHub Verified</span>
                          <span>★ Official</span>
                        </div>
                      </div>

                      {/* Template Title & Subtitle */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 text-xs truncate group-hover:text-[#114B44] transition-colors">{tpl.title}</p>
                          <p className="text-[11px] text-gray-400 truncate">{tpl.subtitle}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Memilih template ${tpl.title} sebagai default.`);
                          }}
                          className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTROLS TOOLBAR: Class Dropdown, Status Dropdown, Type Dropdown, Search bar, Calendar button */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Class Filter */}
                  <div className="relative">
                    <select
                      value={certClassFilter}
                      onChange={(e) => setCertClassFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Sharaf Basic">Sharaf Basic</option>
                      <option value="Quran Tajweed">Quran Tajweed</option>
                      <option value="Academic Writing">Academic Writing</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                    <select
                      value={certStatusFilter}
                      onChange={(e) => setCertStatusFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Status">All Status</option>
                      <option value="issued">Issued</option>
                      <option value="pending">Pending</option>
                      <option value="expired">Expired</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Type Filter */}
                  <div className="relative">
                    <select
                      value={certTypeFilter}
                      onChange={(e) => setCertTypeFilter(e.target.value)}
                      className="bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer transition-colors"
                    >
                      <option value="All Certificate Types">All Certificate Types</option>
                      <option value="Course Completion">Course Completion</option>
                      <option value="Quiz Certificate">Quiz Certificate</option>
                      <option value="Assignment Certificate">Assignment Certificate</option>
                      <option value="Custom Certificate">Custom Certificate</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Search bar */}
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={certSearchQuery}
                      onChange={(e) => setCertSearchQuery(e.target.value)}
                      placeholder="Search certificates..."
                      className="w-full bg-gray-50/80 border border-gray-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Calendar filter button */}
                  <button
                    onClick={() => alert('Filter berdasarkan rentang tanggal penerbitan sertifikat')}
                    className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-600 cursor-pointer"
                    title="Filter by Date"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 2-COLUMN LAYOUT: Center Certificates Table Canvas + Right Sidebar Column */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER CANVAS: Certificates Table (flex-1 min-w-0 w-full) */}
                <div className="flex-1 min-w-0 w-full space-y-4">
                  
                  {/* Table Container */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50/60 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                            <th className="py-3 px-3 w-10">
                              <input
                                type="checkbox"
                                checked={selectedCertIds.length > 0 && selectedCertIds.length === certificatesDataList.length}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedCertIds(certificatesDataList.map(c => c.id));
                                  } else {
                                    setSelectedCertIds([]);
                                  }
                                }}
                                className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                              />
                            </th>
                            <th className="py-3 px-2 w-8 text-center">#</th>
                            <th className="py-3 px-3">Student</th>
                            <th className="py-3 px-3">Class</th>
                            <th className="py-3 px-3">Type</th>
                            <th className="py-3 px-3">Issue Date</th>
                            <th className="py-3 px-3">Status</th>
                            <th className="py-3 px-3 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-xs">
                          {certificatesDataList
                            .filter(item => {
                              if (certTabFilter === 'issued') return item.status === 'issued';
                              if (certTabFilter === 'drafts') return item.status === 'draft';
                              if (certTabFilter === 'expired') return item.status === 'expired';
                              return true;
                            })
                            .filter(item => {
                              if (certClassFilter !== 'All Classes' && item.className !== certClassFilter) return false;
                              if (certStatusFilter !== 'All Status' && item.status !== certStatusFilter.toLowerCase()) return false;
                              if (certTypeFilter !== 'All Certificate Types' && item.type !== certTypeFilter) return false;
                              if (certSearchQuery) {
                                const q = certSearchQuery.toLowerCase();
                                return (
                                  item.studentName.toLowerCase().includes(q) ||
                                  item.email?.toLowerCase().includes(q) ||
                                  item.className.toLowerCase().includes(q) ||
                                  item.certId?.toLowerCase().includes(q)
                                );
                              }
                              return true;
                            })
                            .map((cert) => {
                              const isSelected = selectedCertIds.includes(cert.id);
                              return (
                                <tr
                                  key={cert.id}
                                  className={`hover:bg-gray-50/80 transition-colors ${
                                    isSelected ? 'bg-emerald-50/30' : ''
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <td className="py-3.5 px-3">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setSelectedCertIds(prev => [...prev, cert.id]);
                                        } else {
                                          setSelectedCertIds(prev => prev.filter(id => id !== cert.id));
                                        }
                                      }}
                                      className="rounded border-gray-300 text-[#114B44] focus:ring-[#114B44] cursor-pointer"
                                    />
                                  </td>

                                  {/* Index # */}
                                  <td className="py-3.5 px-2 text-center text-gray-400 font-bold text-[11px]">
                                    {cert.num}
                                  </td>

                                  {/* Student Name & Email */}
                                  <td className="py-3.5 px-3 min-w-[180px]">
                                    <div 
                                      onClick={() => setSelectedCertModal(cert)}
                                      className="flex items-center gap-2.5 cursor-pointer group"
                                    >
                                      {cert.avatar ? (
                                        <img 
                                          src={cert.avatar} 
                                          alt={cert.studentName} 
                                          className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-100 group-hover:scale-105 transition-transform" 
                                          onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                          }}
                                        />
                                      ) : null}
                                      <div className={`w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] items-center justify-center shrink-0 ${cert.avatar ? 'hidden' : 'flex'}`}>
                                        {cert.initials || cert.studentName.slice(0, 2).toUpperCase()}
                                      </div>
                                      <div className="min-w-0">
                                        <p className="font-bold text-gray-900 group-hover:text-[#114B44] transition-colors text-xs truncate">
                                          {cert.studentName}
                                        </p>
                                        <p className="text-[11px] text-gray-400 truncate max-w-[160px]">
                                          {cert.email}
                                        </p>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Class */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${cert.classColor}`}>
                                      {cert.className}
                                    </span>
                                  </td>

                                  {/* Type */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${cert.typeColor}`}>
                                      {cert.type}
                                    </span>
                                  </td>

                                  {/* Issue Date */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <div>
                                      <span className="font-bold text-gray-800 text-[11px] block">{cert.issueDate}</span>
                                      <span className="text-[10px] text-gray-400 font-medium">{cert.issueTime}</span>
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td className="py-3.5 px-3 whitespace-nowrap">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold capitalize ${
                                      cert.status === 'issued' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                      cert.status === 'pending' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                      'bg-rose-50 text-rose-700 border border-rose-200'
                                    }`}>
                                      <span className={`w-1.5 h-1.5 rounded-full ${
                                        cert.status === 'issued' ? 'bg-emerald-600' :
                                        cert.status === 'pending' ? 'bg-amber-500' :
                                        'bg-rose-500'
                                      }`}></span>
                                      <span>{cert.status}</span>
                                    </span>
                                  </td>

                                  {/* Actions */}
                                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-1">
                                      <button
                                        onClick={() => setSelectedCertModal(cert)}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                                        title="Preview Certificate"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          alert(`Mengunduh sertifikat resmi PDF untuk ${cert.studentName}...`);
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                                        title="Download PDF"
                                      >
                                        <Download className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={() => {
                                          if (confirm(`Hapus / Cabut sertifikat ${cert.studentName}?`)) {
                                            setCertificatesDataList(prev => prev.filter(c => c.id !== cert.id));
                                          }
                                        }}
                                        className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                                        title="Revoke / Delete"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Certificate Statistics + Types + Recent + Quick Actions (w-full lg:w-72 xl:w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Certificate Statistics (Matching Mockup with Y-Axis and Bars) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900">Certificate Statistics</h3>
                      <div className="relative">
                        <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5 pr-5 text-[10px] font-bold text-gray-600 appearance-none focus:outline-none cursor-pointer">
                          <option>Last 30 days</option>
                          <option>Last 7 days</option>
                          <option>This Semester</option>
                        </select>
                        <ChevronDown className="w-2.5 h-2.5 text-gray-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* SVG Bar Chart with Y-axis scale and horizontal grid lines */}
                    <div className="pt-1">
                      <div className="flex gap-2 items-stretch h-36">
                        {/* Y-Axis scale */}
                        <div className="flex flex-col justify-between text-[9px] text-gray-400 font-semibold py-0.5 text-right w-5 shrink-0">
                          <span>20</span>
                          <span>15</span>
                          <span>10</span>
                          <span>5</span>
                          <span>0</span>
                        </div>

                        {/* Chart Canvas */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="relative flex-1 w-full flex items-end justify-between gap-1.5 pt-1 pb-1 border-b border-gray-100">
                            {/* Gridlines background */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="w-full"></div>
                            </div>

                            {/* 7 Bars matching mockup */}
                            {[
                              { label: '1 Sep', val: 8, height: 40 },
                              { label: '5 Sep', val: 12, height: 60 },
                              { label: '8 Sep', val: 14, height: 70 },
                              { label: '15 Sep', val: 11, height: 55 },
                              { label: '20 Sep', val: 15, height: 75 },
                              { label: '22 Sep', val: 17, height: 85 },
                              { label: '30 Sep', val: 19, height: 95 },
                            ].map((bar, idx) => (
                              <div key={idx} className="relative flex-1 h-full flex items-end justify-center group z-10">
                                <div
                                  className="w-full max-w-[18px] bg-[#10B981] hover:bg-[#059669] rounded-t-sm transition-all duration-300 cursor-pointer shadow-2xs"
                                  style={{ height: `${bar.height}%` }}
                                  title={`${bar.label}: ${bar.val} certificates`}
                                ></div>
                                {/* Hover tooltip value */}
                                <div className="absolute -top-5 hidden group-hover:flex items-center justify-center bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-20 pointer-events-none">
                                  {bar.val}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* X-Axis labels matching mockup */}
                          <div className="flex justify-between pt-1 text-[9px] text-gray-400 font-medium px-1">
                            <span>1 Sep</span>
                            <span>8 Sep</span>
                            <span>15 Sep</span>
                            <span>22 Sep</span>
                            <span>30 Sep</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Certificate Types (Donut Chart SVG Matching Mockup) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Certificate Types</h3>

                    {/* Donut Chart SVG */}
                    <div className="flex items-center justify-center py-1">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Course Completion (50%) - Emerald */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#10B981"
                            strokeWidth="14"
                            strokeDasharray="119.38 238.76"
                            strokeDashoffset="0"
                          />
                          {/* Quiz Certificate (21%) - Blue */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#3B82F6"
                            strokeWidth="14"
                            strokeDasharray="50.14 238.76"
                            strokeDashoffset="-119.38"
                          />
                          {/* Assignment Certificate (17%) - Amber */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#F59E0B"
                            strokeWidth="14"
                            strokeDasharray="40.59 238.76"
                            strokeDashoffset="-169.52"
                          />
                          {/* Custom Certificate (12%) - Purple */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#8B5CF6"
                            strokeWidth="14"
                            strokeDasharray="28.65 238.76"
                            strokeDashoffset="-210.11"
                          />
                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-base font-black text-gray-900 leading-none">48</span>
                          <span className="text-[9px] font-bold text-gray-400 mt-0.5">Total</span>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown legend */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      {[
                        { label: 'Course Completion', count: '24 (50%)', dotColor: 'bg-emerald-500' },
                        { label: 'Quiz Certificate', count: '10 (21%)', dotColor: 'bg-blue-500' },
                        { label: 'Assignment Certificate', count: '8 (17%)', dotColor: 'bg-amber-500' },
                        { label: 'Custom Certificate', count: '6 (12%)', dotColor: 'bg-purple-500' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                            <span className="text-gray-600 font-medium">{item.label}</span>
                          </div>
                          <span className="font-extrabold text-gray-800">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Recent Certificates */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Recent Certificates</h3>
                      <button 
                        onClick={() => setCertTabFilter('issued')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {recentCertificatesList.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-2.5 text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            {item.avatar ? (
                              <img
                                src={item.avatar}
                                alt={item.studentName}
                                className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-100"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className={`w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] items-center justify-center shrink-0 ${item.avatar ? 'hidden' : 'flex'}`}>
                              {item.initials || item.studentName.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{item.studentName}</p>
                              <p className="text-[10px] text-gray-400 truncate">{item.type}</p>
                              <p className="text-[9px] text-gray-400">{item.date}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedCertModal({
                                studentName: item.studentName,
                                className: 'Nahwu for Beginners',
                                type: item.type,
                                issueDate: item.date,
                                certId: `ILM-${Date.now().toString().slice(-5)}`,
                                template: 'Modern Islamic'
                              });
                            }}
                            className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-[10px] font-bold text-gray-700 shrink-0 cursor-pointer"
                          >
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 4: Quick Actions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-2">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-2">Quick Actions</h3>

                    {/* Create Certificate */}
                    <button
                      onClick={() => setIsCreateCertModalOpen(true)}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Plus className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Create Certificate</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Upload Template */}
                    <button
                      onClick={() => alert('Membuka uploader template sertifikat baru (SVG/PNG kustom)...')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <ImageIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Upload Template</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Bulk Issue */}
                    <button
                      onClick={() => alert('Membuka mode Bulk Issue: Terbitkan sertifikat massal untuk seluruh siswa yang lulus ujian.')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Bulk Issue</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                    {/* Certificate Settings */}
                    <button
                      onClick={() => alert('Membuka pengaturan sertifikat: Penandatangan digital, nomor seri otomatis, & QR verification.')}
                      className="w-full p-2.5 rounded-xl hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-gray-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Settings className="w-3.5 h-3.5" />
                        </div>
                        <span className="group-hover:text-emerald-900">Certificate Settings</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700" />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'earnings' ? (
            /* ========================================================= */
            /* VIEW: EARNINGS (MATCHING MOCKUP & COMPACT RIGHT SIDEBAR)  */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and Withdraw Earnings Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Earnings</h1>
                    <p className="text-xs text-gray-500 font-medium">Lihat pendapatan, transaksi, dan analisis penghasilan dari kelas Anda.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsWithdrawModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Withdraw Earnings</span>
                  </button>
                </div>
              </div>

              {/* 4 METRIC SUMMARY CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* Total Earnings */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Earnings</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">$1,248.50</h3>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">↑ +12% this month</p>
                  </div>
                </div>

                {/* This Month */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">This Month</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">$320.75</h3>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">↑ +18% from last month</p>
                  </div>
                </div>

                {/* Total Students */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Students</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">512</h3>
                    <p className="text-[10px] text-emerald-600 font-bold mt-0.5">+28 new students</p>
                  </div>
                </div>

                {/* Active Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Classes</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight">8</h3>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">Generating revenue</p>
                  </div>
                </div>
              </div>

              {/* 2-COLUMN LAYOUT: Center Earnings Canvas + Right Sidebar Column */}
              <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 items-start">
                
                {/* CENTER CANVAS: Earnings Overview Chart + Recent Transactions Table (flex-1 min-w-0 w-full) */}
                <div className="flex-1 min-w-0 w-full space-y-5">
                  
                  {/* WIDGET 1: Earnings Overview Stacked Bar Chart */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h2 className="text-sm font-black text-gray-900">Earnings Overview</h2>
                      </div>

                      {/* Legend */}
                      <div className="flex items-center gap-4 text-xs font-semibold">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#059669]"></span>
                          <span className="text-gray-600 text-[11px]">Class Revenue</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6EE7B7]"></span>
                          <span className="text-gray-600 text-[11px]">Other Revenue (Tips, etc)</span>
                        </div>
                      </div>

                      {/* Period selector */}
                      <div className="relative self-start sm:self-auto">
                        <select
                          value={earningsPeriod}
                          onChange={(e) => setEarningsPeriod(e.target.value)}
                          className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                        >
                          <option value="Last 12 months">Last 12 months</option>
                          <option value="This Year">This Year (2026)</option>
                          <option value="Last 6 months">Last 6 months</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Stacked Bar Chart Area */}
                    <div className="pt-2">
                      <div className="flex gap-3 items-stretch h-56">
                        {/* Y-Axis scale */}
                        <div className="flex flex-col justify-between text-[10px] text-gray-400 font-semibold py-1 text-right w-8 shrink-0">
                          <span>$400</span>
                          <span>$300</span>
                          <span>$200</span>
                          <span>$100</span>
                          <span>$0</span>
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="relative flex-1 w-full flex items-end justify-between gap-2 pt-2 pb-1 border-b border-gray-100">
                            {/* Horizontal Gridlines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="border-b border-dashed border-gray-200 w-full"></div>
                              <div className="w-full"></div>
                            </div>

                            {/* 12 Stacked Bars */}
                            {earningsOverviewData.map((item, idx) => {
                              const classHeight = (item.classRev / 400) * 100;
                              const tipsHeight = (item.tipsRev / 400) * 100;
                              return (
                                <div key={idx} className="relative flex-1 h-full flex flex-col justify-end items-center group z-10">
                                  {/* Tooltip on Sep (or on hover) */}
                                  {item.month === 'Sep' && (
                                    <div className="absolute -top-16 bg-white border border-gray-200 rounded-xl p-2 shadow-lg text-[10px] whitespace-nowrap z-30 pointer-events-none animate-in fade-in">
                                      <p className="font-bold text-gray-500">Sep 2026</p>
                                      <p className="font-black text-gray-900 text-xs">${item.total.toFixed(2)}</p>
                                      <div className="space-y-0.5 pt-1 text-[9px]">
                                        <div className="flex items-center gap-1.5 text-gray-600">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                                          <span>Class Revenue:</span>
                                          <span className="font-bold">${item.classRev.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-600">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7]"></span>
                                          <span>Tips & Others:</span>
                                          <span className="font-bold">${item.tipsRev.toFixed(2)}</span>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Stacked Bars */}
                                  <div className="w-full max-w-[24px] flex flex-col justify-end rounded-t-md overflow-hidden cursor-pointer shadow-2xs group-hover:opacity-90 transition-opacity">
                                    {/* Tips / Other Revenue (Light Mint) */}
                                    <div
                                      className="w-full bg-[#6EE7B7] hover:bg-[#34D399] transition-all duration-300 rounded-t-md"
                                      style={{ height: `${tipsHeight * 1.6}px` }}
                                      title={`${item.month} Tips: $${item.tipsRev}`}
                                    ></div>
                                    {/* Class Revenue (Dark Emerald) */}
                                    <div
                                      className="w-full bg-[#059669] hover:bg-[#047857] transition-all duration-300"
                                      style={{ height: `${classHeight * 1.6}px` }}
                                      title={`${item.month} Class Revenue: $${item.classRev}`}
                                    ></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* X-Axis labels */}
                          <div className="flex justify-between pt-1.5 text-[10px] text-gray-400 font-bold px-1">
                            {earningsOverviewData.map((item, idx) => (
                              <span key={idx} className={item.month === 'Sep' ? 'text-gray-900 font-black' : ''}>
                                {item.month}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Recent Transactions Table */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <h2 className="text-sm font-black text-gray-900">Recent Transactions</h2>
                      <button
                        onClick={() => alert('Membuka seluruh riwayat transaksi & mutasi rekening...')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50/60 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                            <th className="py-3 px-3">Date</th>
                            <th className="py-3 px-3">Student</th>
                            <th className="py-3 px-3">Class / Product</th>
                            <th className="py-3 px-3">Type</th>
                            <th className="py-3 px-3">Amount</th>
                            <th className="py-3 px-3">Status</th>
                            <th className="py-3 px-3">Invoice</th>
                            <th className="py-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-xs">
                          {recentTransactionsList.map((tx) => (
                            <tr key={tx.id} className="hover:bg-gray-50/80 transition-colors">
                              {/* Date */}
                              <td className="py-3.5 px-3 font-semibold text-gray-700 whitespace-nowrap text-[11px]">
                                {tx.date}
                              </td>

                              {/* Student */}
                              <td className="py-3.5 px-3 min-w-[140px] whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  {tx.avatar ? (
                                    <img
                                      src={tx.avatar}
                                      alt={tx.studentName}
                                      className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-100"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                  ) : null}
                                  <div className={`w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] items-center justify-center shrink-0 ${tx.avatar ? 'hidden' : 'flex'}`}>
                                    {tx.initials || tx.studentName.slice(0, 2).toUpperCase()}
                                  </div>
                                  <span className="font-bold text-gray-900 text-xs">{tx.studentName}</span>
                                </div>
                              </td>

                              {/* Class / Product */}
                              <td className="py-3.5 px-3 font-semibold text-gray-700 text-xs whitespace-nowrap">
                                {tx.item}
                              </td>

                              {/* Type */}
                              <td className="py-3.5 px-3 text-gray-500 text-[11px] whitespace-nowrap">
                                {tx.type}
                              </td>

                              {/* Amount */}
                              <td className="py-3.5 px-3 font-black text-gray-900 text-xs whitespace-nowrap">
                                {tx.amount}
                              </td>

                              {/* Status */}
                              <td className="py-3.5 px-3 whitespace-nowrap">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                  <span>{tx.status}</span>
                                </span>
                              </td>

                              {/* Invoice */}
                              <td className="py-3.5 px-3 font-mono text-[11px] text-gray-500 whitespace-nowrap">
                                {tx.invoice}
                              </td>

                              {/* Actions */}
                              <td className="py-3.5 px-3 text-right whitespace-nowrap">
                                <button
                                  onClick={() => setSelectedTransactionModal(tx)}
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                                  title="View Invoice"
                                >
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: Revenue by Class + Earnings Breakdown + Payout Info (w-full lg:w-72 xl:w-80) */}
                <div className="w-full lg:w-72 xl:w-80 space-y-4 shrink-0">
                  
                  {/* WIDGET 1: Revenue by Class */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900">Revenue by Class</h3>
                      <div className="relative">
                        <select
                          value={revenueByClassPeriod}
                          onChange={(e) => setRevenueByClassPeriod(e.target.value)}
                          className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5 pr-5 text-[10px] font-bold text-gray-600 appearance-none focus:outline-none cursor-pointer"
                        >
                          <option value="Last 30 days">Last 30 days</option>
                          <option value="Last 90 days">Last 90 days</option>
                          <option value="This Year">This Year</option>
                        </select>
                        <ChevronDown className="w-2.5 h-2.5 text-gray-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {revenueByClassList.map((cls, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2 min-w-0">
                              <img
                                src={cls.image}
                                alt={cls.title}
                                className="w-6 h-6 rounded-md object-cover shrink-0 border border-gray-100"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              <span className="font-bold text-gray-900 text-[11px] truncate">{cls.title}</span>
                            </div>
                            <span className="font-black text-emerald-800 text-[11px] shrink-0">{cls.amount}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="h-full bg-emerald-600 rounded-full"
                                style={{ width: `${cls.percent}%` }}
                              ></div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 shrink-0">{cls.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 2: Earnings Breakdown (Donut Chart) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Earnings Breakdown</h3>

                    {/* Donut Chart SVG */}
                    <div className="flex items-center justify-center py-1">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Class Enrollments (68%) - Emerald */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#10B981"
                            strokeWidth="14"
                            strokeDasharray="162.36 238.76"
                            strokeDashoffset="0"
                          />
                          {/* Tips & Donations (15%) - Cyan */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#06B6D4"
                            strokeWidth="14"
                            strokeDasharray="35.81 238.76"
                            strokeDashoffset="-162.36"
                          />
                          {/* Certificates (10%) - Blue */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#3B82F6"
                            strokeWidth="14"
                            strokeDasharray="23.88 238.76"
                            strokeDashoffset="-198.17"
                          />
                          {/* Other (7%) - Purple */}
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke="#8B5CF6"
                            strokeWidth="14"
                            strokeDasharray="16.71 238.76"
                            strokeDashoffset="-222.05"
                          />
                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-sm font-black text-gray-900 leading-none">$320.75</span>
                          <span className="text-[9px] font-bold text-gray-400 mt-0.5">This Month</span>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown legend */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      {[
                        { label: 'Class Enrollments', count: '68%', dotColor: 'bg-emerald-500' },
                        { label: 'Tips & Donations', count: '15%', dotColor: 'bg-cyan-500' },
                        { label: 'Certificates', count: '10%', dotColor: 'bg-blue-500' },
                        { label: 'Other', count: '7%', dotColor: 'bg-purple-500' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                            <span className="text-gray-600 font-medium">{item.label}</span>
                          </div>
                          <span className="font-extrabold text-gray-800">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WIDGET 3: Payout Information */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Payout Information</h3>
                      <button 
                        onClick={() => setIsWithdrawModalOpen(true)}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Manage</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Available Balance Box */}
                    <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/60 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#114B44] text-white flex items-center justify-center">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-500 uppercase">Available Balance</p>
                          <p className="text-base font-black text-gray-900">$320.75</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsWithdrawModalOpen(true)}
                        className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-3 py-1.5 rounded-lg font-bold text-xs cursor-pointer shadow-2xs"
                      >
                        Withdraw
                      </button>
                    </div>

                    {/* Stats details */}
                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-[11px]">Pending Balance</span>
                        </div>
                        <span className="font-black text-gray-900 text-[11px]">$48.00</span>
                      </div>

                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-[11px]">Total Withdrawn</span>
                        </div>
                        <span className="font-black text-gray-900 text-[11px]">$880.25</span>
                      </div>

                      <div 
                        onClick={() => alert('Membuka pengaturan akun rekening PayPal / Bank')}
                        className="flex items-center justify-between text-gray-600 pt-1 border-t border-gray-100 cursor-pointer hover:bg-gray-50 p-1 rounded-lg"
                      >
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Payment Method</p>
                          <p className="font-bold text-gray-800 text-[11px] truncate">PayPal (ahmed@example.com)</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'messages' ? (
            /* ========================================================= */
            /* VIEW: MESSAGES (MATCHING MOCKUP WITH 3-COLUMN CHAT)      */
            /* ========================================================= */
            <div className="space-y-5">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and + New Message Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Messages</h1>
                    <p className="text-xs text-gray-500 font-medium">Chat with your students, manage discussions, and stay connected with your class.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsNewMessageModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Message</span>
                  </button>
                </div>
              </div>

              {/* TABS & CONTROLS TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                  {[
                    { id: 'all', label: 'All', count: 24 },
                    { id: 'unread', label: 'Unread', count: 5, isUnread: true },
                    { id: 'students', label: 'Students' },
                    { id: 'groups', label: 'Groups' },
                  ].map((tab) => {
                    const isActive = messageTabFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setMessageTabFilter(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-2xs'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {tab.count !== undefined && (
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                            isActive ? 'bg-white/20 text-white' : tab.isUnread ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'
                          }`}>
                            {tab.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="relative flex-1 md:w-64">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={messageSearchQuery}
                      onChange={(e) => setMessageSearchQuery(e.target.value)}
                      placeholder="Search messages..."
                      className="w-full bg-gray-50/80 border border-gray-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="relative">
                    <select className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer">
                      <option>All</option>
                      <option>Recent</option>
                      <option>Archived</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <button className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200/80 text-gray-600 cursor-pointer">
                    <MoreVertical className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* MAIN 3-COLUMN CHAT CANVAS (EXPANDED CHAT CANVAS + COMPACT RIGHT SIDEBAR) */}
              <div className="flex flex-col lg:flex-row gap-3 xl:gap-4 items-start">
                
                {/* COLUMN 1: Conversation List (Left - Compact & Clean) */}
                <div className="w-full lg:w-60 xl:w-64 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex flex-col shrink-0 h-[700px]">
                  <div className="p-3 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Conversations</span>
                    <span className="text-[10px] font-bold text-gray-400">10 Active</span>
                  </div>

                  {/* Scrollable List */}
                  <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                    {conversationsList
                      .filter(c => {
                        if (messageTabFilter === 'unread') return c.unreadCount > 0;
                        if (messageTabFilter === 'students') return !c.isGroup;
                        if (messageTabFilter === 'groups') return c.isGroup;
                        return true;
                      })
                      .filter(c => {
                        if (messageSearchQuery) {
                          const q = messageSearchQuery.toLowerCase();
                          return c.name.toLowerCase().includes(q) || c.lastMessage?.toLowerCase().includes(q);
                        }
                        return true;
                      })
                      .map((conv) => {
                        const isSelected = activeConversationId === conv.id;
                        return (
                          <div
                            key={conv.id}
                            onClick={() => {
                              setActiveConversationId(conv.id);
                              // Mark as read
                              setConversationsList(prev => prev.map(c => c.id === conv.id ? { ...c, unreadCount: 0 } : c));
                            }}
                            className={`p-2.5 flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-emerald-50/60 border-l-4 border-l-[#114B44]'
                                : 'hover:bg-gray-50/80 border-l-4 border-l-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="relative shrink-0">
                                {conv.avatar ? (
                                  <img
                                    src={conv.avatar}
                                    alt={conv.name}
                                    className="w-9 h-9 rounded-full object-cover border border-gray-100"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                ) : null}
                                <div className={`w-9 h-9 rounded-full font-black text-xs items-center justify-center ${conv.initialBg || 'bg-emerald-100 text-emerald-800'} ${conv.avatar ? 'hidden' : 'flex'}`}>
                                  {conv.initials || conv.name.slice(0, 2).toUpperCase()}
                                </div>
                                {conv.isOnline && (
                                  <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
                                )}
                              </div>

                              <div className="min-w-0">
                                <p className={`text-xs truncate ${isSelected ? 'font-black text-[#114B44]' : 'font-bold text-gray-900'}`}>
                                  {conv.name}
                                </p>
                                <p className="text-[10px] text-gray-400 truncate mt-0.5 max-w-[125px]">
                                  {conv.lastMessage}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span className="text-[9px] text-gray-400 font-medium">{conv.time}</span>
                              {conv.unreadCount > 0 && (
                                <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                                  {conv.unreadCount}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* COLUMN 2: Active Chat Window (Expanded Middle Canvas) */}
                {(() => {
                  const activeConv = conversationsList.find(c => c.id === activeConversationId) || conversationsList[0];
                  return (
                    <div className="flex-1 min-w-0 w-full bg-white rounded-2xl border border-gray-200/80 shadow-2xs flex flex-col h-[700px] overflow-hidden">
                      
                      {/* Chat Header */}
                      <div className="p-3 border-b border-gray-100 flex items-center justify-between gap-3 bg-white">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative shrink-0">
                            {activeConv.avatar ? (
                              <img
                                src={activeConv.avatar}
                                alt={activeConv.name}
                                className="w-9 h-9 rounded-full object-cover border border-gray-100"
                              />
                            ) : (
                              <div className={`w-9 h-9 rounded-full font-black text-xs flex items-center justify-center ${activeConv.initialBg || 'bg-emerald-100 text-emerald-800'}`}>
                                {activeConv.initials || activeConv.name.slice(0, 2).toUpperCase()}
                              </div>
                            )}
                            {activeConv.isOnline && (
                              <span className="w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-black text-gray-900 truncate">{activeConv.name}</h3>
                              {activeConv.isOnline && (
                                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  Online
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 truncate font-medium">
                              {activeConv.role} {activeConv.className ? `• ${activeConv.className}` : ''}
                            </p>
                          </div>
                        </div>

                        {/* Action icons */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => alert(`Memulai panggilan video dengan ${activeConv.name}...`)}
                            className="p-2 rounded-xl text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 cursor-pointer transition-colors"
                            title="Video Call"
                          >
                            <Video className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => alert(`Memulai panggilan suara dengan ${activeConv.name}...`)}
                            className="p-2 rounded-xl text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 cursor-pointer transition-colors"
                            title="Voice Call"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => alert('Opsi kontak & percakapan')}
                            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Message History (Scrollable with Spacious Layout) */}
                      <div className="flex-1 p-4 md:p-5 overflow-y-auto space-y-4 bg-gray-50/40">
                        {activeConv.messages && activeConv.messages.length > 0 ? (
                          activeConv.messages.map((msg) => {
                            const isTeacher = msg.sender === 'teacher';
                            return (
                              <div
                                key={msg.id}
                                className={`flex items-start gap-2.5 ${isTeacher ? 'justify-end' : 'justify-start'}`}
                              >
                                {!isTeacher && (
                                  <img
                                    src={activeConv.avatar || '/images/student_aisha.jpg'}
                                    alt={activeConv.name}
                                    className="w-7 h-7 rounded-full object-cover shrink-0 mt-1 border border-gray-200"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                  />
                                )}

                                <div className={`max-w-[85%] md:max-w-[75%] space-y-1.5`}>
                                  <div
                                    className={`p-3.5 rounded-2xl text-xs space-y-2.5 shadow-2xs ${
                                      isTeacher
                                        ? 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC] rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-200/80 rounded-tl-none'
                                    }`}
                                  >
                                    <p className="whitespace-pre-line leading-relaxed text-xs sm:text-[13px]">{msg.text}</p>

                                    {/* Attachment PDF */}
                                    {msg.attachment && (
                                      <div className="p-2.5 bg-white rounded-xl border border-[#B3E5DC] flex items-center justify-between gap-3 text-xs shadow-2xs">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 font-black text-[9px] flex items-center justify-center shrink-0">
                                            PDF
                                          </div>
                                          <div className="min-w-0">
                                            <p className="font-bold text-gray-900 text-xs truncate">{msg.attachment.name}</p>
                                            <p className="text-[10px] text-gray-400">{msg.attachment.size}</p>
                                          </div>
                                        </div>
                                        <button
                                          onClick={() => alert(`Mengunduh berkas: ${msg.attachment.name}`)}
                                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 cursor-pointer"
                                        >
                                          <Download className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    )}

                                    {/* Image Attachment (I'rab Analysis Diagram) */}
                                    {msg.imageAttachment && (
                                      <div className="rounded-xl overflow-hidden border border-[#B3E5DC] bg-white p-2.5 space-y-1.5">
                                        <div className="relative rounded-lg overflow-hidden bg-emerald-950/5 border border-emerald-100 p-3 text-center">
                                          <p className="text-[11px] font-bold text-emerald-800">Contoh Analisis I'rab</p>
                                          <p className="text-base sm:text-lg font-serif font-bold text-gray-900 py-1.5" dir="rtl">
                                            أَوْفَى الْيَقِيْنُ أُنْسَ حَبْرٍ
                                          </p>
                                          <div className="flex justify-around text-[10px] text-gray-600 font-medium pt-1.5 border-t border-emerald-100/80">
                                            <span>فعل ماض</span>
                                            <span>فاعل مرفوع</span>
                                            <span>مفعول به</span>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  <div className={`flex items-center gap-1 text-[10px] text-gray-400 ${isTeacher ? 'justify-end' : 'justify-start'}`}>
                                    <span>{msg.time}</span>
                                    {isTeacher && <Check className="w-3 h-3 text-emerald-600" />}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-2 py-20">
                            <MessageSquare className="w-10 h-10 text-gray-300" />
                            <p className="text-xs font-bold">Belum ada percakapan dengan {activeConv.name}</p>
                            <p className="text-[11px]">Ketik pesan di bawah untuk memulai obrolan.</p>
                          </div>
                        )}
                      </div>

                      {/* Chat Input Bar */}
                      <div className="p-3 border-t border-gray-100 bg-white">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!chatInputText.trim()) return;
                            const newMsg = {
                              id: `msg-${Date.now()}`,
                              sender: 'teacher',
                              text: chatInputText,
                              time: 'Just now'
                            };
                            setConversationsList(prev => prev.map(c => {
                              if (c.id === activeConv.id) {
                                return {
                                  ...c,
                                  lastMessage: chatInputText,
                                  time: 'Just now',
                                  messages: [...(c.messages || []), newMsg]
                                };
                              }
                              return c;
                            }));
                            setChatInputText('');
                          }}
                          className="flex items-center gap-2"
                        >
                          <div className="flex items-center gap-1 text-gray-400">
                            <button
                              type="button"
                              onClick={() => alert('Pilih berkas lampiran (PDF, DOCX, ZIP)...')}
                              className="p-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                              title="Attach File"
                            >
                              <Paperclip className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => alert('Pilih gambar untuk dikirim...')}
                              className="p-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                              title="Attach Image"
                            >
                              <ImageIcon className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setChatInputText(prev => prev + ' 😊 ')}
                              className="p-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                              title="Insert Emoji"
                            >
                              <Smile className="w-4 h-4" />
                            </button>
                          </div>

                          <input
                            type="text"
                            value={chatInputText}
                            onChange={(e) => setChatInputText(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                          />

                          <button
                            type="submit"
                            className="w-10 h-10 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white flex items-center justify-center cursor-pointer shadow-xs transition-transform active:scale-95 shrink-0"
                            title="Send Message"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </form>
                      </div>

                    </div>
                  );
                })()}

                {/* COLUMN 3: Student Contact Profile (Right Sidebar - Slim & Neat) */}
                {(() => {
                  const activeConv = conversationsList.find(c => c.id === activeConversationId) || conversationsList[0];
                  return (
                    <div className="w-full lg:w-56 xl:w-60 space-y-3 shrink-0">
                      
                      {/* WIDGET 1: Student Profile Card */}
                      <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-2.5 text-center relative">
                        <button className="absolute right-2.5 top-2.5 p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer">
                          <MoreVertical className="w-3 h-3" />
                        </button>

                        <div className="flex flex-col items-center">
                          {activeConv.avatar ? (
                            <img
                              src={activeConv.avatar}
                              alt={activeConv.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-2xs"
                            />
                          ) : (
                            <div className={`w-12 h-12 rounded-full font-black text-sm flex items-center justify-center ${activeConv.initialBg || 'bg-emerald-100 text-emerald-800'}`}>
                              {activeConv.initials || activeConv.name.slice(0, 2).toUpperCase()}
                            </div>
                          )}

                          <h3 className="font-black text-gray-900 text-xs mt-1.5">{activeConv.name}</h3>
                          <p className="text-[10px] text-gray-400 truncate max-w-[170px]">{activeConv.email || 'student@example.com'}</p>
                          <p className="text-[9px] text-gray-500 font-semibold mt-0.5">📍 {activeConv.location || 'Cairo, Egypt'}</p>
                        </div>

                        {/* 3 Counter stats */}
                        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-gray-100 text-center">
                          <div className="p-1.5 bg-gray-50 rounded-xl">
                            <p className="text-xs font-black text-gray-900 leading-none">{activeConv.stats?.classes || 12}</p>
                            <p className="text-[8px] text-gray-400 font-bold uppercase mt-0.5">Classes</p>
                          </div>
                          <div className="p-1.5 bg-gray-50 rounded-xl">
                            <p className="text-xs font-black text-emerald-700 leading-none">{activeConv.stats?.avgScore || '85%'}</p>
                            <p className="text-[8px] text-gray-400 font-bold uppercase mt-0.5">Score</p>
                          </div>
                          <div className="p-1.5 bg-gray-50 rounded-xl">
                            <p className="text-xs font-black text-purple-700 leading-none">{activeConv.stats?.certificates || 6}</p>
                            <p className="text-[8px] text-gray-400 font-bold uppercase mt-0.5">Certs</p>
                          </div>
                        </div>
                      </div>

                      {/* WIDGET 2: Current Class */}
                      <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs space-y-2">
                        <h4 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider">Current Class</h4>
                        
                        <div className="p-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                              <BookOpen className="w-3 h-3" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[10px] truncate">{activeConv.className}</p>
                              <p className="text-[8px] text-gray-400">Started: Sep 2026</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setActiveNav('classes');
                            }}
                            className="px-2 py-0.5 bg-white border border-gray-200 hover:bg-gray-50 rounded-md text-[8px] font-bold text-gray-700 shrink-0 cursor-pointer"
                          >
                            View
                          </button>
                        </div>
                      </div>

                      {/* WIDGET 3: Shared Files */}
                      <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider">Shared Files</h4>
                          <button
                            onClick={() => alert('Membuka seluruh file lampiran obrolan...')}
                            className="text-[9px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>View All</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                          </button>
                        </div>

                        <div className="space-y-1.5">
                          {[
                            { name: 'Modul Nahwu Dasar.pdf', meta: '2.4 MB • 10:05 AM', iconBg: 'bg-red-500', type: 'PDF' },
                            { name: 'Latihan Soal.docx', meta: '1.2 MB • 18 Sep', iconBg: 'bg-blue-500', type: 'DOC' },
                            { name: 'Penjelasan I\'rab.png', meta: '850 KB • 18 Sep', iconBg: 'bg-sky-500', type: 'PNG' },
                          ].map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between gap-1.5 p-1 rounded-lg hover:bg-gray-50 text-xs">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <div className={`w-5 h-5 rounded ${file.iconBg} text-white font-black text-[7px] flex items-center justify-center shrink-0`}>
                                  {file.type}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-gray-900 text-[10px] truncate">{file.name}</p>
                                  <p className="text-[8px] text-gray-400">{file.meta}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => alert(`Mengunduh ${file.name}...`)}
                                className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                              >
                                <Download className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WIDGET 4: Recent Activity */}
                      <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs space-y-2">
                        <h4 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider">Recent Activity</h4>
                        
                        <div className="space-y-1.5 text-xs">
                          {[
                            { title: 'Submitted Assignment', sub: 'Latihan Soal 1', date: '18 Sep', color: 'text-purple-600 bg-purple-50' },
                            { title: 'Completed Quiz', sub: 'Kuis Nahwu 1', date: '15 Sep', color: 'text-emerald-600 bg-emerald-50' },
                            { title: 'Attended Live Class', sub: 'Nahwu Session 2', date: '12 Sep', color: 'text-amber-600 bg-amber-50' },
                          ].map((act, idx) => (
                            <div key={idx} className="flex items-center justify-between gap-1 text-xs">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <div className={`w-5 h-5 rounded-md ${act.color} flex items-center justify-center shrink-0`}>
                                  <CheckCircle2 className="w-3 h-3" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-gray-900 text-[10px] truncate">{act.title}</p>
                                  <p className="text-[8px] text-gray-400 truncate">{act.sub}</p>
                                </div>
                              </div>
                              <span className="text-[8px] text-gray-400 font-medium shrink-0">{act.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WIDGET 5: Quick Actions */}
                      <div className="bg-white rounded-2xl border border-gray-200/80 p-2.5 shadow-2xs space-y-1.5">
                        <h4 className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider px-1">Quick Actions</h4>
                        
                        <div className="grid grid-cols-4 gap-1 text-center">
                          <button
                            onClick={() => alert(`Memulai Video Call dengan ${activeConv.name}`)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-0.5 cursor-pointer transition-colors"
                          >
                            <Video className="w-3.5 h-3.5 text-emerald-700" />
                            <span className="text-[8px] font-bold">Video</span>
                          </button>

                          <button
                            onClick={() => alert(`Memulai Voice Call dengan ${activeConv.name}`)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-0.5 cursor-pointer transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-700" />
                            <span className="text-[8px] font-bold">Voice</span>
                          </button>

                          <button
                            onClick={() => {
                              setActiveNav('schedule');
                            }}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-0.5 cursor-pointer transition-colors"
                          >
                            <Calendar className="w-3.5 h-3.5 text-purple-700" />
                            <span className="text-[8px] font-bold">Jadwal</span>
                          </button>

                          <button
                            onClick={() => {
                              setActiveNav('students');
                            }}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-0.5 cursor-pointer transition-colors"
                          >
                            <User className="w-3.5 h-3.5 text-sky-700" />
                            <span className="text-[8px] font-bold">Profil</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })()}

              </div>

            </div>
          ) : activeNav === 'reviews' ? (
            /* ========================================================= */
            /* VIEW: REVIEWS (MATCHING media_1790724440982.jpg)          */
            /* ========================================================= */
            <div className="space-y-5">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and Request Review Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <Star className="w-5 h-5 fill-white text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Reviews</h1>
                    <p className="text-xs text-gray-500 font-medium">Lihat ulasan dari siswa, kelola feedback, dan tingkatkan kualitas kelas Anda.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsRequestReviewModalOpen(true)}
                    className="flex items-center gap-2 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Review</span>
                  </button>
                </div>
              </div>

              {/* TABS FILTER PILLS */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Reviews', count: 128 },
                  { id: 'published', label: 'Published', count: 120 },
                  { id: 'pending', label: 'Pending', count: 5, badgeColor: 'bg-rose-500 text-white' },
                  { id: 'reported', label: 'Reported', count: 3, badgeColor: 'bg-indigo-600 text-white' },
                ].map((tab) => {
                  const isActive = reviewTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setReviewTabFilter(tab.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-2xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80 shadow-2xs'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : tab.badgeColor || 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* FILTER & SEARCH TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5 flex-1 min-w-0">
                  
                  {/* Select Class */}
                  <div className="relative">
                    <select
                      value={reviewClassFilter}
                      onChange={(e) => setReviewClassFilter(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer"
                    >
                      <option>All Classes</option>
                      <option>Nahwu for Beginners</option>
                      <option>Sharaf Basic</option>
                      <option>Arabic Conversation</option>
                      <option>Quran Tajweed</option>
                      <option>Academic Writing</option>
                      <option>Fiqh Ibadah</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Select Rating */}
                  <div className="relative">
                    <select
                      value={reviewRatingFilter}
                      onChange={(e) => setReviewRatingFilter(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer"
                    >
                      <option>All Ratings</option>
                      <option value="5">5 Stars (★★★★★)</option>
                      <option value="4">4 Stars (★★★★☆)</option>
                      <option value="3">3 Stars (★★★☆☆)</option>
                      <option value="2">2 Stars (★★☆☆☆)</option>
                      <option value="1">1 Star (★☆☆☆☆)</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Select Status */}
                  <div className="relative">
                    <select
                      value={reviewStatusFilter}
                      onChange={(e) => setReviewStatusFilter(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] cursor-pointer"
                    >
                      <option>All Status</option>
                      <option>Published</option>
                      <option>Pending</option>
                      <option>Reported</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Search Input */}
                  <div className="relative flex-1 min-w-[180px]">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={reviewSearchQuery}
                      onChange={(e) => setReviewSearchQuery(e.target.value)}
                      placeholder="Search reviews..."
                      className="w-full bg-gray-50/80 border border-gray-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Sort dropdown */}
                <div className="relative shrink-0">
                  <select
                    value={reviewSortOrder}
                    onChange={(e) => setReviewSortOrder(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                  >
                    <option>Newest First</option>
                    <option>Highest Rating</option>
                    <option>Lowest Rating</option>
                    <option>Oldest First</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* MAIN REVIEWS CANVAS: 2-Column Grid (Main Reviews Feed + Right Sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* LEFT COLUMN: 4 Summary Cards + Reviews List (8 of 12 Cols) */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* 4 SUMMARY METRIC CARDS */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    
                    {/* Card 1: Average Rating */}
                    <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-black text-gray-900 leading-none">4.9</span>
                          <div className="flex text-amber-400 text-xs">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-[10px] font-medium text-gray-400 mt-1 truncate">Average Rating</p>
                        <p className="text-[9px] text-gray-400">from 128 reviews</p>
                      </div>
                    </div>

                    {/* Card 2: Total Students */}
                    <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xl font-black text-gray-900 leading-none">1.2K</span>
                        <p className="text-[10px] font-medium text-gray-400 mt-1">Total Students</p>
                        <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-md mt-0.5">
                          +18% this month
                        </span>
                      </div>
                    </div>

                    {/* Card 3: Total Reviews */}
                    <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xl font-black text-gray-900 leading-none">128</span>
                        <p className="text-[10px] font-medium text-gray-400 mt-1">Total Reviews</p>
                        <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-md mt-0.5">
                          +24 this month
                        </span>
                      </div>
                    </div>

                    {/* Card 4: Positive Reviews */}
                    <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                        <ThumbsUp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xl font-black text-gray-900 leading-none">96%</span>
                        <p className="text-[10px] font-medium text-gray-400 mt-1">Positive Reviews</p>
                        <p className="text-[9px] text-gray-400 mt-0.5">(4-5 stars)</p>
                      </div>
                    </div>

                  </div>

                  {/* REVIEWS LIST CONTAINER */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs divide-y divide-gray-100 overflow-hidden">
                    {reviewsList
                      .filter((rev) => {
                        if (reviewTabFilter === 'published') return rev.status === 'Published';
                        if (reviewTabFilter === 'pending') return rev.status === 'Pending';
                        if (reviewTabFilter === 'reported') return rev.status === 'Reported';
                        return true;
                      })
                      .filter((rev) => {
                        if (reviewClassFilter !== 'All Classes') return rev.className === reviewClassFilter;
                        return true;
                      })
                      .filter((rev) => {
                        if (reviewRatingFilter !== 'All Ratings') return rev.rating === Number(reviewRatingFilter);
                        return true;
                      })
                      .filter((rev) => {
                        if (reviewStatusFilter !== 'All Status') return rev.status === reviewStatusFilter;
                        return true;
                      })
                      .filter((rev) => {
                        if (reviewSearchQuery) {
                          const q = reviewSearchQuery.toLowerCase();
                          return (
                            rev.studentName.toLowerCase().includes(q) ||
                            rev.comment.toLowerCase().includes(q) ||
                            rev.className.toLowerCase().includes(q)
                          );
                        }
                        return true;
                      })
                      .map((review) => (
                        <div key={review.id} className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors space-y-3">
                          
                          {/* Row 1: Student Header, Class Tag, Status, and Options */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                              <div className="relative shrink-0 mt-0.5">
                                {review.avatar ? (
                                  <img
                                    src={review.avatar}
                                    alt={review.studentName}
                                    className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-2xs"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                ) : null}
                                <div className={`w-10 h-10 rounded-full font-black text-xs items-center justify-center ${review.initialBg || 'bg-emerald-100 text-emerald-800'} ${review.avatar ? 'hidden' : 'flex'}`}>
                                  {review.initials || review.studentName.slice(0, 2).toUpperCase()}
                                </div>
                              </div>

                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="font-extrabold text-sm text-gray-900">{review.studentName}</h4>
                                  
                                  {/* Class Badge */}
                                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${review.classTagColor || 'bg-indigo-50 text-indigo-700 border-indigo-100'}`}>
                                    {review.className}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-2 mt-1">
                                  {/* Star row */}
                                  <div className="flex items-center gap-0.5 text-amber-400">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`w-3.5 h-3.5 ${
                                          star <= review.rating
                                            ? 'fill-amber-400 text-amber-400'
                                            : 'fill-gray-200 text-gray-200'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-[11px] text-gray-400 font-medium">• {review.date}</span>
                                </div>
                              </div>
                            </div>

                            {/* Right Status Badge & Action */}
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 ${
                                review.status === 'Published'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : review.status === 'Pending'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  review.status === 'Published' ? 'bg-emerald-500' : review.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'
                                }`}></span>
                                {review.status}
                              </span>

                              <button
                                onClick={() => setSelectedReviewDetailModal(review)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 cursor-pointer"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Row 2: Review Content Text */}
                          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed pl-13">
                            {review.comment}
                          </p>

                          {/* Row 3: Teacher Replies / Responses */}
                          {review.replies && review.replies.length > 0 && (
                            <div className="ml-13 space-y-2 pt-2">
                              {review.replies.map((reply) => (
                                <div key={reply.id} className="p-3 bg-[#E8F8F5] border border-[#B3E5DC] rounded-xl text-xs space-y-1">
                                  <div className="flex items-center justify-between text-[11px]">
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-extrabold text-[#0A3D36]">{reply.author}</span>
                                      <span className="text-[9px] bg-[#114B44] text-white px-1.5 py-0.2 rounded-sm font-bold">
                                        {reply.role}
                                      </span>
                                    </div>
                                    <span className="text-gray-400 text-[10px]">{reply.date}</span>
                                  </div>
                                  <p className="text-gray-800 text-xs leading-relaxed">{reply.text}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Row 4: Reply & Action Buttons */}
                          <div className="flex items-center justify-end gap-2 pt-1 pl-13">
                            <button
                              onClick={() => {
                                setSelectedReviewForReply(review);
                                setReplyInputText('');
                              }}
                              className="px-3 py-1.5 rounded-xl border border-gray-200 hover:border-[#114B44] text-gray-700 hover:text-[#114B44] bg-white hover:bg-emerald-50/50 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>Reply</span>
                            </button>
                          </div>

                        </div>
                      ))}
                  </div>

                  {/* PAGINATION FOOTER */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-gray-500 font-medium">Showing 1-5 of 128 reviews</span>

                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-lg bg-[#114B44] text-white font-bold flex items-center justify-center cursor-pointer shadow-2xs">
                        1
                      </button>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold cursor-pointer">
                        2
                      </button>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold cursor-pointer">
                        3
                      </button>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold cursor-pointer">
                        4
                      </button>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold cursor-pointer">
                        5
                      </button>
                      <span className="px-1 text-gray-400">...</span>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold cursor-pointer">
                        26
                      </button>
                      <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative">
                      <select className="bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1 pr-6 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer">
                        <option>5 per page</option>
                        <option>10 per page</option>
                        <option>20 per page</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN: 4 Stacked Cards (4 of 12 Cols) */}
                <div className="lg:col-span-4 space-y-4">
                  
                  {/* CARD 1: Rating Distribution */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Rating Distribution</h3>
                    
                    <div className="space-y-2 text-xs">
                      {[
                        { star: 5, count: 82, pct: '64%', barWidth: 'w-[64%]', color: 'bg-emerald-600' },
                        { star: 4, count: 40, pct: '31%', barWidth: 'w-[31%]', color: 'bg-emerald-500' },
                        { star: 3, count: 5, pct: '4%', barWidth: 'w-[4%]', color: 'bg-amber-500' },
                        { star: 2, count: 1, pct: '1%', barWidth: 'w-[1%]', color: 'bg-orange-500' },
                        { star: 1, count: 0, pct: '0%', barWidth: 'w-[0%]', color: 'bg-rose-500' },
                      ].map((item) => (
                        <div key={item.star} className="flex items-center gap-2">
                          <div className="flex items-center gap-1 w-8 shrink-0 text-[11px] font-bold text-gray-700">
                            <span>{item.star}</span>
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          </div>

                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.pct }}></div>
                          </div>

                          <span className="text-[11px] font-bold text-gray-600 w-14 text-right shrink-0">
                            {item.count} <span className="text-gray-400 font-normal">({item.pct})</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 2: Recent Reviews */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Recent Reviews</h3>
                      <button
                        onClick={() => setReviewTabFilter('all')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: 'Aisha Rahman', rating: 5, avatar: '/images/student_aisha.jpg', text: 'Penjelasan sangat jelas dan mudah dipahami...' },
                        { name: 'Omar Hassan', rating: 5, avatar: '/images/student_omar.jpg', text: '24 Sep 2026 • Kelasnya terstruktur dan materi...' },
                        { name: 'Fatimah Zahra', rating: 4, avatar: '/images/student_fatimah.jpg', text: 'Materinya bagus, tapi mungkin bisa lebih banya...' },
                      ].map((mini, idx) => (
                        <div key={idx} className="flex items-start justify-between gap-2 text-xs pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                          <div className="flex items-start gap-2 min-w-0">
                            <img
                              src={mini.avatar}
                              alt={mini.name}
                              className="w-7 h-7 rounded-full object-cover border border-gray-100 shrink-0 mt-0.5"
                            />
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-xs truncate">{mini.name}</p>
                              <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star key={s} className={`w-2.5 h-2.5 ${s <= mini.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} />
                                ))}
                              </div>
                              <p className="text-[10px] text-gray-500 truncate mt-0.5">{mini.text}</p>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer shrink-0">
                            <MoreVertical className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3: Top Rated Classes */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Top Rated Classes</h3>
                      <button
                        onClick={() => setActiveNav('classes')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { title: 'Nahwu for Beginners', img: '/images/class_nahwu.jpg', rating: '4.9', reviews: '56' },
                        { title: 'Sharaf Basic', img: '/images/class_conversation.jpg', rating: '4.8', reviews: '42' },
                        { title: 'Arabic Conversation', img: '/images/class_nahwu.jpg', rating: '4.8', reviews: '28' },
                      ].map((cls, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <img
                            src={cls.img}
                            alt={cls.title}
                            className="w-10 h-10 rounded-xl object-cover shrink-0 border border-gray-100"
                            onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                          />
                          <div className="min-w-0">
                            <p className="font-bold text-xs text-gray-900 truncate">{cls.title}</p>
                            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 mt-0.5">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span>{cls.rating}</span>
                              <span className="text-gray-400 font-normal text-[10px]">({cls.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 4: Quick Actions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-2.5">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Quick Actions</h3>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <button
                        onClick={() => setIsRequestReviewModalOpen(true)}
                        className="p-2.5 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/60 text-[#114B44] flex flex-col items-center gap-1.5 cursor-pointer transition-colors border border-emerald-100"
                      >
                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xs">
                          <Star className="w-3.5 h-3.5 fill-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-900 leading-tight">Ask for Review</p>
                          <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-2">Kirim permintaan ulasan ke siswa</p>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          const firstUnreplied = reviewsList.find(r => !r.replies || r.replies.length === 0);
                          if (firstUnreplied) {
                            setSelectedReviewForReply(firstUnreplied);
                          } else {
                            alert('Semua ulasan telah ditanggapi!');
                          }
                        }}
                        className="p-2.5 rounded-xl bg-purple-50/60 hover:bg-purple-100/60 text-purple-700 flex flex-col items-center gap-1.5 cursor-pointer transition-colors border border-purple-100"
                      >
                        <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-2xs">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-900 leading-tight">Reply to Reviews</p>
                          <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-2">Tanggapi ulasan siswa</p>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveNav('analytics')}
                        className="p-2.5 rounded-xl bg-sky-50/60 hover:bg-sky-100/60 text-sky-700 flex flex-col items-center gap-1.5 cursor-pointer transition-colors border border-sky-100"
                      >
                        <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-2xs">
                          <BarChart2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-900 leading-tight">View Analytics</p>
                          <p className="text-[8px] text-gray-500 mt-0.5 line-clamp-2">Lihat analisis rating & feedback</p>
                        </div>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'analytics' ? (
            /* ========================================================= */
            /* VIEW: ANALYTICS (MATCHING media_1790724716497.jpg)        */
            /* ========================================================= */
            <div className="space-y-5">
              
              {/* TOP HEADER: Icon, Title, Subtitle, and Timeframe Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Analytics</h1>
                    <p className="text-xs text-gray-500 font-medium">Lihat statistik lengkap untuk memantau perkembangan kelas, siswa, dan performa Anda.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <select
                      value={analyticsPeriod}
                      onChange={(e) => setAnalyticsPeriod(e.target.value)}
                      className="bg-white border border-gray-200/90 rounded-xl pl-9 pr-8 py-2 text-xs font-bold text-gray-700 appearance-none focus:outline-none focus:border-[#114B44] shadow-2xs cursor-pointer"
                    >
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                      <option>This Year</option>
                      <option>All Time</option>
                    </select>
                    <Calendar className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 6 TOP KPI STAT CARDS */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                
                {/* 1. Total Students */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">512</span>
                    <p className="text-[11px] font-bold text-gray-600">Total Students</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 18% from last month</p>
                  </div>
                </div>

                {/* 2. Active Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">8</span>
                    <p className="text-[11px] font-bold text-gray-600">Active Classes</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 2 new classes</p>
                  </div>
                </div>

                {/* 3. Total Assignments */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-purple-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">284</span>
                    <p className="text-[11px] font-bold text-gray-600">Total Assignments</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 24% completion</p>
                  </div>
                </div>

                {/* 4. Total Quizzes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">16</span>
                    <p className="text-[11px] font-bold text-gray-600">Total Quizzes</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 12% participation</p>
                  </div>
                </div>

                {/* 5. Certificates Issued */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-rose-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">48</span>
                    <p className="text-[11px] font-bold text-gray-600">Certificates Issued</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 36% from last month</p>
                  </div>
                </div>

                {/* 6. Total Earnings */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#114B44] flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-tight">$1,248.50</span>
                    <p className="text-[11px] font-bold text-gray-600">Total Earnings</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 12% from last month</p>
                  </div>
                </div>

              </div>

              {/* ROW 1: 2 BIG VISUAL CHARTS (Student Growth & Class Performance) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* CHART 1: Student Growth (Combo Bar + Line Chart with Tooltip) */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Student Growth</h3>
                      <p className="text-[11px] text-gray-500">Jumlah siswa baru dan total siswa aktif.</p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-gray-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                        New Students
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-900">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#114B44]"></span>
                        Total Students
                      </span>
                    </div>
                  </div>

                  {/* Visual Chart Canvas */}
                  <div className="relative pt-4">
                    
                    {/* Floating Tooltip matching mockup */}
                    <div className="absolute top-1 left-[58%] -translate-x-1/2 z-10 bg-white/95 backdrop-blur-xs border border-gray-200/80 rounded-xl p-2.5 shadow-lg text-[11px] space-y-1 pointer-events-none">
                      <p className="text-[10px] font-bold text-gray-400">22 Sep 2026</p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-1 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#114B44]"></span>
                          Total Students
                        </span>
                        <span className="font-extrabold text-gray-900">428</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-1 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          New Students
                        </span>
                        <span className="font-extrabold text-gray-900">36</span>
                      </div>
                    </div>

                    <div className="flex items-end gap-2 h-48 w-full">
                      {/* Y-Axis scale */}
                      <div className="flex flex-col justify-between h-full text-[9px] font-semibold text-gray-400 pr-2 shrink-0 select-none pb-4">
                        <span>600</span>
                        <span>500</span>
                        <span>400</span>
                        <span>300</span>
                        <span>200</span>
                        <span>100</span>
                        <span>0</span>
                      </div>

                      {/* Chart Area with Gridlines, Bars & SVG Line */}
                      <div className="relative flex-1 h-full flex flex-col justify-end">
                        
                        {/* Background Horizontal Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-200 w-full"></div>
                        </div>

                        {/* Bar Columns Container (30 Days) */}
                        <div className="relative z-0 h-[85%] flex items-end justify-between gap-1 px-1">
                          {[
                            { day: 1, total: 100, newSt: 8 },
                            { day: 2, total: 115, newSt: 12 },
                            { day: 3, total: 130, newSt: 15 },
                            { day: 4, total: 145, newSt: 18 },
                            { day: 5, total: 160, newSt: 14 },
                            { day: 6, total: 175, newSt: 20 },
                            { day: 7, total: 190, newSt: 22 },
                            { day: 8, total: 205, newSt: 19 },
                            { day: 9, total: 220, newSt: 24 },
                            { day: 10, total: 235, newSt: 25 },
                            { day: 11, total: 250, newSt: 22 },
                            { day: 12, total: 265, newSt: 28 },
                            { day: 13, total: 280, newSt: 26 },
                            { day: 14, total: 295, newSt: 30 },
                            { day: 15, total: 310, newSt: 27 },
                            { day: 16, total: 325, newSt: 32 },
                            { day: 17, total: 340, newSt: 34 },
                            { day: 18, total: 355, newSt: 30 },
                            { day: 19, total: 375, newSt: 35 },
                            { day: 20, total: 395, newSt: 38 },
                            { day: 21, total: 410, newSt: 32 },
                            { day: 22, total: 428, newSt: 36 }, // Active Tooltip Point
                            { day: 23, total: 445, newSt: 40 },
                            { day: 24, total: 460, newSt: 38 },
                            { day: 25, total: 475, newSt: 42 },
                            { day: 26, total: 485, newSt: 35 },
                            { day: 27, total: 495, newSt: 44 },
                            { day: 28, total: 502, newSt: 48 },
                            { day: 29, total: 508, newSt: 52 },
                            { day: 30, total: 512, newSt: 55 },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="group relative flex-1 flex flex-col items-center justify-end h-full cursor-pointer"
                              onMouseEnter={() => setHoveredGrowthIndex(idx)}
                            >
                              {/* Stacked Bars (Dark emerald for new, light for base) */}
                              <div
                                className="w-full rounded-t-sm transition-all duration-300"
                                style={{
                                  height: `${(item.total / 600) * 100}%`,
                                  backgroundColor: idx === 21 ? '#114B44' : '#A7F3D0'
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>

                        {/* Overlay SVG Line Graph for Total Students */}
                        <svg className="absolute inset-0 w-full h-[85%] pointer-events-none overflow-visible">
                          <polyline
                            fill="none"
                            stroke="#114B44"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="
                              10,135 25,130 40,125 55,120 70,115 85,110 100,105 115,100 130,95 145,90 
                              160,85 175,80 190,75 205,70 220,65 235,60 250,55 265,50 280,45 295,40 
                              310,36 325,32 340,28 355,25 370,22 385,19 400,16 415,14 430,12 445,10
                            "
                          />
                          {/* Dot at Sep 22 */}
                          <circle cx="325" cy="32" r="4" fill="#114B44" stroke="#ffffff" strokeWidth="2" />
                          <circle cx="445" cy="10" r="4" fill="#114B44" stroke="#ffffff" strokeWidth="2" />
                        </svg>

                        {/* X-Axis dates */}
                        <div className="flex justify-between text-[9px] font-semibold text-gray-400 pt-2 border-t border-gray-200">
                          <span>1 Sep</span>
                          <span>5 Sep</span>
                          <span>10 Sep</span>
                          <span>15 Sep</span>
                          <span>20 Sep</span>
                          <span>25 Sep</span>
                          <span>30 Sep</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* CHART 2: Class Performance (Paired Bar Chart: Score vs Completion) */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-2xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-black text-gray-900">Class Performance</h3>
                      <p className="text-[11px] text-gray-500">Rata-rata nilai dan tingkat penyelesaian per kelas.</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2.5 text-xs font-bold">
                        <span className="flex items-center gap-1 text-gray-700">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                          Average Score
                        </span>
                        <span className="flex items-center gap-1 text-gray-700">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          Completion Rate
                        </span>
                      </div>

                      <div className="relative">
                        <select
                          value={analyticsClassFilter}
                          onChange={(e) => setAnalyticsClassFilter(e.target.value)}
                          className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                        >
                          <option>All Classes</option>
                          <option>Nahwu for Beginners</option>
                          <option>Sharaf Basic</option>
                          <option>Arabic Conversation</option>
                          <option>Quran Tajweed</option>
                          <option>Academic Writing</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart Area */}
                  <div className="flex items-end gap-2 h-48 w-full pt-4">
                    {/* Y-Axis */}
                    <div className="flex flex-col justify-between h-full text-[9px] font-semibold text-gray-400 pr-2 shrink-0 select-none pb-6">
                      <span>100%</span>
                      <span>80%</span>
                      <span>60%</span>
                      <span>40%</span>
                      <span>20%</span>
                      <span>0%</span>
                    </div>

                    {/* Bars Grid */}
                    <div className="relative flex-1 h-full flex flex-col justify-end">
                      
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-200 w-full"></div>
                      </div>

                      {/* 5 Classes Paired Bars */}
                      <div className="relative z-0 h-[80%] flex items-end justify-around gap-2 px-2">
                        {[
                          { title: 'Nahwu for Beginners', score: 85, completion: 78 },
                          { title: 'Sharaf Basic', score: 78, completion: 72 },
                          { title: 'Arabic Conversation', score: 72, completion: 68 },
                          { title: 'Quran Tajweed', score: 90, completion: 84 },
                          { title: 'Academic Writing', score: 68, completion: 60 },
                        ].map((cls, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                            
                            {/* Paired Bars Container */}
                            <div className="flex items-end gap-1.5 h-full">
                              {/* Blue Score Bar */}
                              <div className="flex flex-col items-center justify-end h-full">
                                <span className="text-[9px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-0.5">
                                  {cls.score}%
                                </span>
                                <div
                                  className="w-4 sm:w-5 bg-blue-500 rounded-t-sm shadow-2xs hover:brightness-110 transition-all"
                                  style={{ height: `${cls.score}%` }}
                                ></div>
                              </div>

                              {/* Green Completion Bar */}
                              <div className="flex flex-col items-center justify-end h-full">
                                <span className="text-[9px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-0.5">
                                  {cls.completion}%
                                </span>
                                <div
                                  className="w-4 sm:w-5 bg-emerald-500 rounded-t-sm shadow-2xs hover:brightness-110 transition-all"
                                  style={{ height: `${cls.completion}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Class Label Below */}
                            <span className="text-[9px] font-medium text-gray-600 text-center max-w-[70px] truncate block mt-1">
                              {cls.title}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* ROW 2: 3 COLUMNS (Engagement Line Chart, Top Performing Content, Student Activity Donut) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* 1. Engagement Multi-Line Chart */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-black text-gray-900">Engagement</h3>
                      <p className="text-[10px] text-gray-400">Aktivitas siswa di platform Anda.</p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold">
                      <span className="flex items-center gap-1 text-purple-800">
                        <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                        Class Attendance
                      </span>
                      <span className="flex items-center gap-1 text-purple-400">
                        <span className="w-2 h-2 rounded-full bg-purple-300"></span>
                        Material Views
                      </span>
                    </div>
                  </div>

                  {/* Line Chart Visual */}
                  <div className="flex items-end gap-2 h-36 w-full pt-2">
                    <div className="flex flex-col justify-between h-full text-[8px] font-semibold text-gray-400 shrink-0 pb-3">
                      <span>200</span>
                      <span>150</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>

                    <div className="relative flex-1 h-full flex flex-col justify-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-200 w-full"></div>
                      </div>

                      {/* SVG Line Curves */}
                      <svg className="relative z-0 w-full h-[80%] overflow-visible">
                        {/* Material Views (Light Purple) */}
                        <path
                          d="M 10,75 Q 40,78 70,60 T 130,55 T 190,45 T 250,30 T 310,40 T 360,35"
                          fill="none"
                          stroke="#C084FC"
                          strokeWidth="2"
                        />
                        {/* Attendance (Deep Purple) */}
                        <path
                          d="M 10,65 Q 40,55 70,40 T 130,60 T 190,30 T 250,20 T 310,48 T 360,15"
                          fill="none"
                          stroke="#6D28D9"
                          strokeWidth="2.5"
                        />
                        <circle cx="10" cy="65" r="3" fill="#6D28D9" />
                        <circle cx="70" cy="40" r="3" fill="#6D28D9" />
                        <circle cx="130" cy="60" r="3" fill="#6D28D9" />
                        <circle cx="190" cy="30" r="3" fill="#6D28D9" />
                        <circle cx="250" cy="20" r="3" fill="#6D28D9" />
                        <circle cx="310" cy="48" r="3" fill="#6D28D9" />
                        <circle cx="360" cy="15" r="3" fill="#6D28D9" />
                      </svg>

                      {/* X-Axis dates */}
                      <div className="flex justify-between text-[8px] font-semibold text-gray-400 pt-1 border-t border-gray-200">
                        <span>1 Sep</span>
                        <span>5 Sep</span>
                        <span>10 Sep</span>
                        <span>15 Sep</span>
                        <span>20 Sep</span>
                        <span>25 Sep</span>
                        <span>30 Sep</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Top Performing Content */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-black text-gray-900">Top Performing Content</h3>
                      <p className="text-[10px] text-gray-400">Materi, tugas, dan kuis yang paling diminati.</p>
                    </div>
                  </div>

                  {/* Pills Switcher */}
                  <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                    {[
                      { id: 'materials', label: 'Materials' },
                      { id: 'assignments', label: 'Assignments' },
                      { id: 'quizzes', label: 'Quizzes' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setAnalyticsContentTab(tab.id)}
                        className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                          analyticsContentTab === tab.id
                            ? 'bg-[#114B44] text-white shadow-2xs'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Top Items List */}
                  <div className="space-y-2">
                    {(topPerformingData[analyticsContentTab] || topPerformingData.materials).map((item, idx) => (
                      <div key={item.id} className="flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-black text-gray-400 text-xs w-3.5 shrink-0">{idx + 1}</span>
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-7 h-7 rounded-lg object-cover shrink-0 border border-gray-100"
                            onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                          />
                          <p className="font-bold text-gray-900 text-[11px] truncate">{item.title}</p>
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 shrink-0">{item.views}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Student Activity Donut Chart */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div>
                    <h3 className="text-xs font-black text-gray-900">Student Activity</h3>
                    <p className="text-[10px] text-gray-400">Distribusi aktivitas siswa.</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    {/* Donut Ring Visual */}
                    <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        {/* Background ring */}
                        <path
                          className="text-gray-100"
                          strokeWidth="3.8"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* 1. Material Views: 42% (Blue) */}
                        <path
                          className="text-blue-500"
                          strokeDasharray="42, 100"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* 2. Assignment Submissions: 24% (Emerald) */}
                        <path
                          className="text-emerald-500"
                          strokeDasharray="24, 100"
                          strokeDashoffset="-42"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* 3. Quiz Attempts: 18% (Amber) */}
                        <path
                          className="text-amber-500"
                          strokeDasharray="18, 100"
                          strokeDashoffset="-66"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* 4. Live Class: 10% (Purple) */}
                        <path
                          className="text-purple-500"
                          strokeDasharray="10, 100"
                          strokeDashoffset="-84"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* 5. Discussion: 6% (Rose) */}
                        <path
                          className="text-rose-400"
                          strokeDasharray="6, 100"
                          strokeDashoffset="-94"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      
                      {/* Center Label */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-black text-gray-900 leading-none">1.2K</span>
                        <span className="text-[8px] font-bold text-gray-400 mt-0.5">Total Activities</span>
                      </div>
                    </div>

                    {/* Donut Legend */}
                    <div className="space-y-1.5 flex-1 text-[10px]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Material Views
                        </span>
                        <span className="font-bold text-gray-900">42%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          Assignment Submissions
                        </span>
                        <span className="font-bold text-gray-900">24%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          Quiz Attempts
                        </span>
                        <span className="font-bold text-gray-900">18%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          Live Class Attendance
                        </span>
                        <span className="font-bold text-gray-900">10%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                          Discussion Posts
                        </span>
                        <span className="font-bold text-gray-900">6%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* ROW 3: 3 COLUMNS (Earnings Analytics Bar Chart, Top Students, Device Usage Donut) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* 1. Earnings Analytics Bar Chart */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-black text-gray-900">Earnings Analytics</h3>
                      <p className="text-[10px] text-gray-400">Pendapatan dari kelas Anda.</p>
                    </div>

                    <div className="relative">
                      <select
                        value={analyticsEarningsPeriod}
                        onChange={(e) => setAnalyticsEarningsPeriod(e.target.value)}
                        className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5 pr-6 text-[10px] font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                      >
                        <option>Last 30 days</option>
                        <option>Last 7 days</option>
                        <option>Last 3 months</option>
                      </select>
                      <ChevronDown className="w-3 h-3 text-gray-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Daily Vertical Bars */}
                  <div className="flex items-end gap-1.5 h-36 w-full pt-2">
                    <div className="flex flex-col justify-between h-full text-[8px] font-semibold text-gray-400 shrink-0 pb-3">
                      <span>$200</span>
                      <span>$150</span>
                      <span>$100</span>
                      <span>$50</span>
                      <span>$0</span>
                    </div>

                    <div className="relative flex-1 h-full flex flex-col justify-end">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-100 w-full"></div>
                        <div className="border-b border-gray-200 w-full"></div>
                      </div>

                      {/* Daily Bars (Sep 1 to 30) */}
                      <div className="relative z-0 h-[80%] flex items-end justify-between gap-1 px-1">
                        {[
                          10, 15, 25, 20, 30, 35, 28, 45, 50, 42,
                          55, 60, 48, 65, 70, 62, 75, 80, 72, 85,
                          90, 82, 95, 110, 105, 130, 120, 140, 135, 160
                        ].map((val, idx) => (
                          <div
                            key={idx}
                            className="group relative flex-1 flex flex-col items-center justify-end h-full"
                          >
                            <div
                              className="w-full bg-[#114B44] hover:bg-emerald-600 rounded-t-xs transition-all shadow-2xs"
                              style={{ height: `${(val / 200) * 100}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between text-[8px] font-semibold text-gray-400 pt-1 border-t border-gray-200">
                        <span>1 Sep</span>
                        <span>5 Sep</span>
                        <span>10 Sep</span>
                        <span>15 Sep</span>
                        <span>20 Sep</span>
                        <span>25 Sep</span>
                        <span>30 Sep</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Top Students List */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-black text-gray-900">Top Students</h3>
                      <p className="text-[10px] text-gray-400">Siswa paling aktif di kelas Anda.</p>
                    </div>
                    <button
                      onClick={() => setActiveNav('students')}
                      className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {topStudentsAnalyticsList.map((st, idx) => (
                      <div key={st.id} className="flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Rank badge */}
                          <span className={`w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center shrink-0 ${
                            idx === 0 ? 'bg-amber-100 text-amber-800 font-black' : idx === 1 ? 'bg-gray-200 text-gray-700' : idx === 2 ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {idx + 1}
                          </span>

                          {st.avatar ? (
                            <img
                              src={st.avatar}
                              alt={st.name}
                              className="w-6 h-6 rounded-full object-cover border border-gray-100 shrink-0"
                            />
                          ) : (
                            <div className={`w-6 h-6 rounded-full font-black text-[9px] flex items-center justify-center shrink-0 ${st.initialBg}`}>
                              {st.initials}
                            </div>
                          )}

                          <p className="font-bold text-gray-900 text-[11px] truncate">{st.name}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                            {st.completion}
                          </span>
                          <span className="text-[9px] text-gray-400 font-medium">
                            {st.activities}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Device Usage Donut Chart */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                  <div>
                    <h3 className="text-xs font-black text-gray-900">Device Usage</h3>
                    <p className="text-[10px] text-gray-400">Perangkat yang digunakan siswa.</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    {/* Donut Visual */}
                    <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-100"
                          strokeWidth="3.8"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Mobile: 68% (Blue) */}
                        <path
                          className="text-blue-500"
                          strokeDasharray="68, 100"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Desktop: 26% (Emerald) */}
                        <path
                          className="text-emerald-500"
                          strokeDasharray="26, 100"
                          strokeDashoffset="-68"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Tablet: 6% (Purple) */}
                        <path
                          className="text-purple-500"
                          strokeDasharray="6, 100"
                          strokeDashoffset="-94"
                          strokeWidth="4"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-black text-gray-900 leading-none">512</span>
                        <span className="text-[8px] font-bold text-gray-400 mt-0.5">Students</span>
                      </div>
                    </div>

                    {/* Donut Legend */}
                    <div className="space-y-2 flex-1 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                          Mobile
                        </span>
                        <span className="font-bold text-gray-900">68%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          Desktop
                        </span>
                        <span className="font-bold text-gray-900">26%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                          Tablet
                        </span>
                        <span className="font-bold text-gray-900">6%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW 6: DASHBOARD OVERVIEW CANVAS                         */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* Top Greeting Header with Month Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Welcome back, {teacherName.split(' ')[0]}!
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Here's what is happening with your classes today.
                  </p>
                </div>

                {/* Period Selector */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <div className="relative">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold text-xs px-4 py-2 rounded-xl shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{selectedPeriod}</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Total Students</span>
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">1,240</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12% this month</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Active Classes</span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">8</div>
                  <div className="flex items-center gap-1 text-[11px] text-blue-600 font-bold mt-1">
                    <span>+2 new</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Total Earnings</span>
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">18,450 <span className="text-xs font-bold text-gray-400">EGP</span></div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+8% from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-xs font-semibold text-gray-500">Average Rating</span>
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                      <Star className="w-4 h-4 fill-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-3 flex items-center gap-1">
                    <span>4.9</span>
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline -mt-1" />
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mt-1">
                    Based on 254 reviews
                  </div>
                </div>
              </div>

              {/* Section 1: Today's Scheduled Classes & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Cols: Today's Classes */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-extrabold text-gray-900">Today's Classes</h2>
                      <p className="text-xs text-gray-400 mt-0.5">3 live interactive sessions scheduled for today</p>
                    </div>
                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Schedule</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {todaysClasses.map((cls) => (
                      <div 
                        key={cls.id}
                        className="p-3.5 rounded-2xl border border-gray-100 hover:border-gray-200 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="text-center shrink-0 w-14 bg-white p-2 rounded-xl border border-gray-200">
                            <span className="block text-xs font-extrabold text-gray-900 leading-tight">{cls.timeStart}</span>
                            <span className="block text-[10px] text-gray-400 leading-tight">{cls.timeEnd}</span>
                          </div>

                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100 shrink-0">
                            <img 
                              src={cls.image} 
                              alt={cls.title} 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/class_nahwu.jpg';
                              }}
                            />
                          </div>

                          <div>
                            <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">{cls.title}</h4>
                            <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              <span>{cls.type}</span>
                              <span>•</span>
                              <span>{cls.studentsCount} students</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            onClick={() => onStartLive({
                              title: cls.title,
                              tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                              image: cls.image
                            })}
                            className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                          >
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>Start Class</span>
                          </button>
                          <button 
                            onClick={() => alert(`Edit materi kelas: ${cls.title}`)}
                            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 1 Col: Quick Actions */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <h2 className="text-base font-extrabold text-gray-900">Quick Actions</h2>
                  
                  <div className="space-y-2.5">
                    <button 
                      onClick={() => setActiveNav('create')}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer shadow-xs"
                    >
                      <PlusCircle className="w-4 h-4 text-emerald-300" />
                      <span>Create New Class</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('schedule')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-emerald-700" />
                      <span>Schedule Class</span>
                    </button>

                    <button 
                      onClick={() => alert('Membuka upload materi PDF / Video')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-emerald-700" />
                      <span>Upload Material</span>
                    </button>

                    <button 
                      onClick={() => onStartLive({
                        title: 'Nahwu Intermediate (Live Class)',
                        tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                        image: '/images/class_nahwu.jpg'
                      })}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-all cursor-pointer shadow-xs"
                    >
                      <Video className="w-4 h-4 text-emerald-300" />
                      <span>Start Live Class</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('earnings')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <DollarSign className="w-4 h-4 text-emerald-700" />
                      <span>View Earnings</span>
                    </button>

                    <button 
                      onClick={() => setActiveNav('students')}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 p-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>View Students</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Section 2: Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Student Growth Chart */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Student Growth</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Total enrolled students over time</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>Last 6 months</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  <div className="pt-6">
                    <div className="relative h-48">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                        <div className="border-b border-dashed border-gray-100 w-full"></div>
                      </div>

                      <div className="relative h-full flex items-end justify-between gap-1.5 sm:gap-3 px-1 z-10">
                        {[
                          { month: 'Jan', val: 500, height: '40%' },
                          { month: 'Feb', val: 650, height: '50%' },
                          { month: 'Mar', val: 750, height: '58%' },
                          { month: 'Apr', val: 820, height: '65%' },
                          { month: 'May', val: 900, height: '72%' },
                          { month: 'Jun', val: 980, height: '78%' },
                          { month: 'Jul', val: 1050, height: '84%' },
                          { month: 'Aug', val: 1150, height: '90%' },
                          { month: 'Sep', val: 1240, height: '98%', active: true },
                        ].map((bar) => (
                          <div key={bar.month} className="flex-1 h-full flex flex-col justify-end items-center gap-2 group relative">
                            {bar.active && (
                              <div className="absolute -top-3 bg-[#0F172A] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 flex flex-col items-center">
                                <span>Sep 2026: 1,240 students</span>
                                <div className="w-2 h-2 bg-[#0F172A] rotate-45 -mb-1 mt-0.5"></div>
                              </div>
                            )}
                            <div className="w-full flex-1 flex items-end justify-center">
                              <div 
                                className={`w-full max-w-[32px] rounded-t-lg transition-all duration-500 cursor-pointer ${
                                  bar.active 
                                    ? 'bg-gradient-to-t from-[#0A302B] to-[#114B44] shadow-md' 
                                    : 'bg-[#D1FAE5] hover:bg-[#A7F3D0]'
                                }`}
                                style={{ height: bar.height }}
                              ></div>
                            </div>
                            <span className={`text-[10px] font-semibold ${bar.active ? 'text-[#114B44] font-bold' : 'text-gray-400'}`}>
                              {bar.month}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings Overview Chart */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Earnings Overview</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">Monthly revenue in EGP</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>Last 6 months</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  <div className="pt-6">
                    <div className="relative h-48 flex flex-col justify-between">
                      <div className="absolute -top-3 right-4 bg-[#0F172A] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg z-20 flex flex-col items-center">
                        <span>Sep 2026: 18,450 EGP</span>
                        <div className="w-2 h-2 bg-[#0F172A] rotate-45 -mb-1 mt-0.5"></div>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">20k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">15k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">10k</div>
                        <div className="border-b border-dashed border-gray-100 w-full flex justify-end pr-1 text-[9px] text-gray-300">5k</div>
                      </div>
                      
                      <div className="relative flex-1 w-full flex items-end z-10">
                        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="earnGradTeacherOverview" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#114B44" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#114B44" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 95 Q 60 85, 120 72 T 250 50 T 380 32 T 500 10 L 500 120 L 0 120 Z"
                            fill="url(#earnGradTeacherOverview)"
                          />
                          <path
                            d="M 0 95 Q 60 85, 120 72 T 250 50 T 380 32 T 500 10"
                            fill="none"
                            stroke="#114B44"
                            strokeWidth="3.5"
                          />
                          <circle cx="500" cy="10" r="5" fill="#114B44" stroke="#ffffff" strokeWidth="2.5" />
                        </svg>
                      </div>

                      <div className="flex justify-between text-[10px] text-gray-400 font-semibold px-2 pt-2 border-t border-gray-100">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Section 3: Recent Students & Recent Reviews */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Students */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Recent Students</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentStudents.map((s, i) => (
                      <div key={i} className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                            <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-xs text-gray-900">{s.name}</h4>
                            <p className="text-[11px] text-gray-400">{s.classEnrolled}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Recent Reviews</h3>
                    <button 
                      onClick={() => alert('Semua review')}
                      className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentReviews.map((r, i) => (
                      <div key={i} className="py-3 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                          <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-extrabold text-xs text-gray-900">{r.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-xs font-bold text-gray-700">{r.rating}</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-500 italic">"{r.comment}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

        </main>
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: ADD SCHEDULE MODAL                               */}
      {/* ========================================================= */}
      {isAddScheduleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                  <CalendarPlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Add New Class Schedule</h3>
                  <p className="text-xs text-gray-500">Tentukan jadwal kelas langsung untuk siswa.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAddScheduleModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const newEv = {
                  id: `ev-${Date.now()}`,
                  day: newScheduleForm.day,
                  title: newScheduleForm.courseTitle,
                  time: `${newScheduleForm.startTime} - ${newScheduleForm.endTime}`,
                  type: newScheduleForm.type,
                  hourSlot: newScheduleForm.startTime.split(':')[0] + ':00',
                  colorTheme: newScheduleForm.colorTheme,
                  studentsCount: newScheduleForm.studentsCount,
                  image: '/images/class_nahwu.jpg'
                };
                setScheduleEventsList(prev => [...prev, newEv]);
                setIsAddScheduleModalOpen(false);
                alert(`Jadwal baru "${newScheduleForm.courseTitle}" berhasil ditambahkan!`);
              }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-gray-700">Class Name</label>
                <select 
                  value={newScheduleForm.courseTitle}
                  onChange={(e) => {
                    const title = e.target.value;
                    let theme = 'emerald';
                    if (title.includes('Arabic')) theme = 'blue';
                    else if (title.includes('Sharaf')) theme = 'purple';
                    else if (title.includes('Writing') || title.includes('Balaghah')) theme = 'amber';
                    else if (title.includes('Tajweed') || title.includes('Quran')) theme = 'indigo';
                    setNewScheduleForm(prev => ({ ...prev, courseTitle: title, colorTheme: theme }));
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                  <option value="Arabic Conversation">Arabic Conversation</option>
                  <option value="Sharaf Basic">Sharaf Basic</option>
                  <option value="Academic Writing">Academic Writing</option>
                  <option value="Quran Tajweed">Quran Tajweed</option>
                  <option value="Balaghah & Ushul Fiqh">Balaghah & Ushul Fiqh</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-gray-700">Day</label>
                  <select 
                    value={newScheduleForm.day}
                    onChange={(e) => setNewScheduleForm(prev => ({ ...prev, day: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="mon">Monday (21 Sep)</option>
                    <option value="tue">Tuesday (22 Sep)</option>
                    <option value="wed">Wednesday (23 Sep)</option>
                    <option value="thu">Thursday (24 Sep)</option>
                    <option value="fri">Friday (25 Sep)</option>
                    <option value="sat">Saturday (26 Sep)</option>
                    <option value="sun">Sunday (27 Sep)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-gray-700">Room Type</label>
                  <select 
                    value={newScheduleForm.type}
                    onChange={(e) => setNewScheduleForm(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Live Class">Live Interactive Whiteboard</option>
                    <option value="Webinar">Live Lecture / Webinar</option>
                    <option value="Q&A Session">Live Q&A Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-gray-700">Start Time</label>
                  <select 
                    value={newScheduleForm.startTime}
                    onChange={(e) => {
                      const st = e.target.value;
                      const hr = parseInt(st.split(':')[0]);
                      const endHr = (hr + 1).toString().padStart(2, '0') + ':30';
                      setNewScheduleForm(prev => ({ ...prev, startTime: st, endTime: endHr }));
                    }}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  >
                    {timeHours.map(th => (
                      <option key={th} value={th}>{th}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-gray-700">End Time</label>
                  <input 
                    type="text"
                    value={newScheduleForm.endTime}
                    onChange={(e) => setNewScheduleForm(prev => ({ ...prev, endTime: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddScheduleModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white text-xs font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Save Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: RECURRING SCHEDULE MODAL                         */}
      {/* ========================================================= */}
      {isRecurringModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Recurring Schedule Setup</h3>
                  <p className="text-xs text-gray-500">Jadwalkan kelas berulang otomatis setiap minggu.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsRecurringModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Pilih Kelas</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800">
                  <option>Nahwu for Beginners (Senin, Rabu, Jumat)</option>
                  <option>Arabic Conversation (Selasa, Kamis, Sabtu)</option>
                  <option>Sharaf Basic (Senin, Rabu, Jumat)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-extrabold text-gray-700">Repeat On Days</label>
                <div className="flex items-center gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <label key={i} className="flex-1 text-center border border-gray-200 rounded-xl py-2 cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 font-bold transition-colors has-checked:bg-[#114B44] has-checked:text-white has-checked:border-[#114B44]">
                      <input type="checkbox" defaultChecked={i === 0 || i === 2 || i === 4} className="sr-only" />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Class Time</label>
                  <input type="text" defaultValue="09:00 - 10:30" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800" />
                </div>
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Duration (Weeks)</label>
                  <select defaultValue="4 weeks" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800">
                    <option value="4 weeks">4 Weeks (1 Month)</option>
                    <option value="8 weeks">8 Weeks (2 Months)</option>
                    <option value="12 weeks">12 Weeks (1 Semester)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsRecurringModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsRecurringModalOpen(false);
                    alert('Jadwal mingguan recurring berhasil diperbarui!');
                  }}
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Save Recurring Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: EVENT DETAILS & QUICK LAUNCH                     */}
      {/* ========================================================= */}
      {selectedScheduleEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img src={selectedScheduleEvent.image} alt={selectedScheduleEvent.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900 leading-tight">{selectedScheduleEvent.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold mt-0.5">
                    <Video className="w-3 h-3" />
                    <span>{selectedScheduleEvent.type}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedScheduleEvent(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Day & Date:</span>
                <span className="font-extrabold text-gray-800 uppercase">{selectedScheduleEvent.day} (September 2026)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Scheduled Time:</span>
                <span className="font-extrabold text-emerald-700">{selectedScheduleEvent.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Enrolled Students:</span>
                <span className="font-extrabold text-gray-800">{selectedScheduleEvent.studentsCount} Students</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Tutor:</span>
                <span className="font-extrabold text-gray-800">{teacherName}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedScheduleEvent(null);
                  onStartLive({
                    title: selectedScheduleEvent.title,
                    tutor: { name: teacherName, avatar: '/images/tutor_ahmed.jpg' },
                    image: selectedScheduleEvent.image
                  });
                }}
                className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                <span>Enter Live Classroom</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setScheduleEventsList(prev => prev.filter(e => e.id !== selectedScheduleEvent.id));
                  setSelectedScheduleEvent(null);
                }}
                className="p-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer"
                title="Hapus sesi ini"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: EDIT AVAILABILITY                                */}
      {/* ========================================================= */}
      {isAvailabilityModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-base font-black text-gray-900">Edit Teaching Availability</h3>
                <p className="text-xs text-gray-500">Sesuaikan rentang jam kerja mingguan kamu.</p>
              </div>
              <button 
                onClick={() => setIsAvailabilityModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {availabilityDays.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-between gap-3 text-xs">
                  <div className="w-24 font-bold text-gray-900">{item.day}</div>
                  <input 
                    type="text"
                    value={item.hours}
                    onChange={(e) => {
                      const newHours = e.target.value;
                      setAvailabilityDays(prev => prev.map((d, i) => i === idx ? { ...d, hours: newHours } : d));
                    }}
                    className="flex-1 bg-white border border-gray-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-gray-800"
                  />
                  <input 
                    type="checkbox"
                    checked={item.enabled}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setAvailabilityDays(prev => prev.map((d, i) => i === idx ? { ...d, enabled: checked } : d));
                    }}
                    className="w-4 h-4 text-emerald-600 rounded cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setIsAvailabilityModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#114B44] text-white text-xs font-bold cursor-pointer"
              >
                Save Availability
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 5: ADD NEW STUDENT                                  */}
      {/* ========================================================= */}
      {isAddStudentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Add New Student</h3>
                  <p className="text-xs text-gray-500">Daftarkan siswa secara manual ke kelasmu.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAddStudentModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!newStudentForm.name || !newStudentForm.email) return;
                const initials = newStudentForm.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                const newSt = {
                  id: `st-${Date.now()}`,
                  name: newStudentForm.name,
                  email: newStudentForm.email,
                  avatar: null,
                  initials: initials || 'ST',
                  initialBg: 'bg-emerald-100 text-emerald-800',
                  className: newStudentForm.className,
                  progress: 0,
                  lastActivity: 'Just added',
                  status: newStudentForm.status
                };
                setStudentsList(prev => [newSt, ...prev]);
                setIsAddStudentModalOpen(false);
                setNewStudentForm({ name: '', email: '', className: 'Nahwu for Beginners', status: 'active' });
                alert(`Siswa ${newStudentForm.name} berhasil didaftarkan ke kelas!`);
              }}
              className="space-y-4 text-xs"
            >
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Student Full Name</label>
                <input 
                  type="text"
                  required
                  value={newStudentForm.name}
                  onChange={(e) => setNewStudentForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Contoh: Bilal Abdillah"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Email Address</label>
                <input 
                  type="email"
                  required
                  value={newStudentForm.email}
                  onChange={(e) => setNewStudentForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="bilal@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Assign to Class</label>
                <select 
                  value={newStudentForm.className}
                  onChange={(e) => setNewStudentForm(prev => ({ ...prev, className: e.target.value }))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                  <option value="Sharaf Basic">Sharaf Basic</option>
                  <option value="Quran Tajweed">Quran Tajweed</option>
                  <option value="Arabic Conversation">Arabic Conversation</option>
                  <option value="Academic Writing">Academic Writing</option>
                </select>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddStudentModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 6: INVITE STUDENTS MODAL                            */}
      {/* ========================================================= */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Invite Students</h3>
                  <p className="text-xs text-gray-500">Kirim undangan via email atau bagikan link pendaftaran.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsInviteModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Pilih Kelas</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800">
                  <option>Nahwu for Beginners</option>
                  <option>Sharaf Basic</option>
                  <option>Arabic Conversation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Emails (Pisahkan dengan koma)</label>
                <textarea 
                  rows={3} 
                  placeholder="student1@email.com, student2@email.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-medium text-gray-800 resize-none focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-extrabold text-gray-700">Atau Bagikan Link Undangan Langsung</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value="https://ilmhub.com/join/class-nahwu-9283" 
                    className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 text-[11px] font-mono text-gray-600"
                  />
                  <button 
                    onClick={() => {
                      navigator.clipboard?.writeText('https://ilmhub.com/join/class-nahwu-9283');
                      alert('Link pendaftaran disalin ke clipboard!');
                    }}
                    className="p-2 bg-[#114B44] text-white rounded-xl hover:bg-[#0D3B35] cursor-pointer"
                    title="Salin Link"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsInviteModalOpen(false);
                    alert('Undangan berhasil dikirimkan via email!');
                  }}
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Send Invitations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 7: SEND ANNOUNCEMENT MODAL                          */}
      {/* ========================================================= */}
      {isAnnouncementModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Send Announcement</h3>
                  <p className="text-xs text-gray-500">Siarkan pengumuman penting ke semua siswa.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAnnouncementModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Target Siswa</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800">
                  <option>Semua Siswa Terdaftar (32 Siswa)</option>
                  <option>Nahwu for Beginners (12 Siswa)</option>
                  <option>Sharaf Basic (8 Siswa)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Judul Pengumuman</label>
                <input 
                  type="text" 
                  defaultValue="Jadwal Tambahan Sesi Live Q&A Nahwu Pekan Ini" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Isi Pesan Pengumuman</label>
                <textarea 
                  rows={4} 
                  defaultValue="Assalamu'alaikum teman-teman, jangan lupa hari Rabu pukul 09:00 kita akan mengadakan sesi bedah kitab Jurumiyah lanjutan. Siapkan pertanyaan kalian ya!"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-medium text-gray-800 resize-none focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setIsAnnouncementModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsAnnouncementModalOpen(false);
                    alert('Pengumuman berhasil disiarkan ke siswa!');
                  }}
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Broadcast Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 8: STUDENT DETAILS & ANALYTICS                      */}
      {/* ========================================================= */}
      {selectedStudentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {selectedStudentModal.avatar ? (
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                    <img src={selectedStudentModal.avatar} alt={selectedStudentModal.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center shrink-0 ${selectedStudentModal.initialBg}`}>
                    {selectedStudentModal.initials}
                  </div>
                )}
                <div>
                  <h3 className="text-base font-black text-gray-900 leading-tight">{selectedStudentModal.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedStudentModal.email}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStudentModal(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Enrolled Class:</span>
                <span className="font-extrabold text-emerald-800">{selectedStudentModal.className}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Course Progress:</span>
                <span className="font-extrabold text-[#114B44]">{selectedStudentModal.progress}% Completed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Last Activity:</span>
                <span className="font-bold text-gray-700">{selectedStudentModal.lastActivity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Account Status:</span>
                <span className="font-bold text-emerald-700 uppercase tracking-wider">{selectedStudentModal.status}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedStudentModal(null);
                  setActiveNav('messages');
                }}
                className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Direct Message</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setStudentsList(prev => prev.filter(s => s.id !== selectedStudentModal.id));
                  setSelectedStudentModal(null);
                }}
                className="p-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer"
                title="Hapus siswa dari kelas"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 9: UPLOAD NEW MATERIAL                              */}
      {/* ========================================================= */}
      {isUploadMaterialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                  <CloudUpload className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Upload Learning Material</h3>
                  <p className="text-xs text-gray-500">Unggah berkas PDF, video MP4, PPT, atau link materi.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsUploadMaterialModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!newMaterialForm.title) return;
                const newMat = {
                  id: `mat-${Date.now()}`,
                  title: newMaterialForm.title,
                  category: newMaterialForm.category,
                  fileType: newMaterialForm.fileType,
                  meta: newMaterialForm.fileType === 'PDF' ? 'PDF • 10 halaman' : newMaterialForm.fileType === 'Video' ? 'Video • MP4' : 'Dokumen',
                  fileSize: newMaterialForm.fileSize || '2.5 MB',
                  className: newMaterialForm.className,
                  topic: newMaterialForm.topic,
                  tagType: 'Material',
                  views: '0 views',
                  viewsNum: '0',
                  timeAgo: 'Just now',
                  date: 'Today',
                  coverType: newMaterialForm.category === 'videos' ? 'video' : newMaterialForm.category === 'presentations' ? 'ppt' : newMaterialForm.category === 'links' ? 'link' : 'pdf',
                  iconColor: 'text-emerald-700',
                  tagColor: 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]',
                  extraTagColor: 'bg-gray-100 text-gray-700'
                };
                setMaterialsDataList(prev => [newMat, ...prev]);
                setIsUploadMaterialModalOpen(false);
                setNewMaterialForm({ title: '', category: 'documents', fileType: 'PDF', className: 'Nahwu for Beginners', topic: 'Pendahuluan', fileSize: '2.5 MB' });
                alert(`Materi "${newMaterialForm.title}" berhasil diunggah!`);
              }}
              className="space-y-4 text-xs"
            >
              {/* Dropzone mockup */}
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/40 rounded-2xl p-5 text-center cursor-pointer hover:bg-emerald-50/70 transition-colors">
                <CloudUpload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-extrabold text-gray-800 text-xs">Drag & drop berkas PDF, MP4, atau PPT di sini</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Maksimal ukuran file 100 MB</p>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Material Title</label>
                <input 
                  type="text"
                  required
                  value={newMaterialForm.title}
                  onChange={(e) => setNewMaterialForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Contoh: Modul Nahwu Lanjutan Bab Fa'il"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Material Category</label>
                  <select 
                    value={newMaterialForm.category}
                    onChange={(e) => {
                      const cat = e.target.value;
                      let fType = 'PDF';
                      if (cat === 'videos') fType = 'Video';
                      else if (cat === 'presentations') fType = 'PPT';
                      else if (cat === 'links') fType = 'Link';
                      setNewMaterialForm(prev => ({ ...prev, category: cat, fileType: fType }));
                    }}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="documents">Document (PDF / Word)</option>
                    <option value="videos">Video (MP4 / WebM)</option>
                    <option value="presentations">Presentation (PPTX / Slides)</option>
                    <option value="links">External Link</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Assign to Class</label>
                  <select 
                    value={newMaterialForm.className}
                    onChange={(e) => setNewMaterialForm(prev => ({ ...prev, className: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                    <option value="Sharaf Basic">Sharaf Basic</option>
                    <option value="Quran Tajweed">Quran Tajweed</option>
                    <option value="Arabic Conversation">Arabic Conversation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Topic / Chapter</label>
                <input 
                  type="text"
                  value={newMaterialForm.topic}
                  onChange={(e) => setNewMaterialForm(prev => ({ ...prev, topic: e.target.value }))}
                  placeholder="Contoh: Bab 2 - Pembagian Kalimat"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsUploadMaterialModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Publish Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 10: CREATE FOLDER MODAL                             */}
      {/* ========================================================= */}
      {isCreateFolderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <FolderPlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Create Material Folder</h3>
                  <p className="text-xs text-gray-500">Kelompokkan materi berdasarkan modul atau semester.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCreateFolderModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Folder Name</label>
                <input 
                  type="text" 
                  defaultValue="Modul Nahwu Semester 1"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Pilih Kelas</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800">
                  <option>Nahwu for Beginners</option>
                  <option>Sharaf Basic</option>
                  <option>Arabic Conversation</option>
                </select>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setIsCreateFolderModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsCreateFolderModalOpen(false);
                    alert('Folder materi baru berhasil dibuat!');
                  }}
                  className="px-5 py-2 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white font-bold shadow-xs cursor-pointer active:scale-95"
                >
                  Create Folder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 11: MATERIAL PREVIEW & DETAILS                      */}
      {/* ========================================================= */}
      {selectedMaterialPreview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between pb-3 border-b border-gray-100">
              <div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${selectedMaterialPreview.tagColor}`}>
                  {selectedMaterialPreview.className}
                </span>
                <h3 className="text-base font-black text-gray-900 leading-tight mt-1.5">{selectedMaterialPreview.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{selectedMaterialPreview.fileType} • {selectedMaterialPreview.meta}</p>
              </div>
              <button 
                onClick={() => setSelectedMaterialPreview(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Topic:</span>
                <span className="font-extrabold text-gray-800">{selectedMaterialPreview.topic}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Total Views:</span>
                <span className="font-extrabold text-emerald-800">{selectedMaterialPreview.views}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Uploaded Date:</span>
                <span className="font-bold text-gray-700">{selectedMaterialPreview.date} ({selectedMaterialPreview.timeAgo})</span>
              </div>
              {selectedMaterialPreview.fileSize && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">File Size:</span>
                  <span className="font-bold text-gray-700">{selectedMaterialPreview.fileSize}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  alert(`Membuka & mengunduh materi: ${selectedMaterialPreview.title}`);
                }}
                className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Open / Download Material</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMaterialsDataList(prev => prev.filter(m => m.id !== selectedMaterialPreview.id));
                  setSelectedMaterialPreview(null);
                }}
                className="p-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer"
                title="Hapus materi ini"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CREATE ASSIGNMENT MODAL                            */}
      {/* ========================================================= */}
      {isCreateAssignmentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Create New Assignment</h3>
                  <p className="text-xs text-gray-500">Buat tugas baru untuk siswa di kelasmu.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCreateAssignmentModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newAssignmentForm.title.trim()) {
                  alert('Mohon masukkan judul tugas.');
                  return;
                }
                const newAsg = {
                  id: `asg-${Date.now()}`,
                  title: newAssignmentForm.title,
                  description: newAssignmentForm.description || 'Kerjakan tugas sesuai instruksi guru.',
                  className: newAssignmentForm.className,
                  type: newAssignmentForm.type,
                  typeColor: newAssignmentForm.type === 'Exercise' ? 'bg-sky-50 text-sky-700 border-sky-200' :
                             newAssignmentForm.type === 'Essay' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                             newAssignmentForm.type === 'Video' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                             newAssignmentForm.type === 'Quiz' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                             'bg-emerald-50 text-emerald-700 border-emerald-200',
                  dueDate: newAssignmentForm.dueDate || '30 Oct 2026',
                  dueTime: newAssignmentForm.dueTime || '23:59',
                  submittedCount: 0,
                  totalCount: 32,
                  progressPercent: 0,
                  status: newAssignmentForm.status,
                  daysLeft: '30 days left'
                };
                setAssignmentsDataList(prev => [newAsg, ...prev]);
                setIsCreateAssignmentModalOpen(false);
                setNewAssignmentForm({
                  title: '',
                  description: '',
                  className: 'Nahwu for Beginners',
                  type: 'Exercise',
                  dueDate: '2026-10-15',
                  dueTime: '23:59',
                  totalPoints: 100,
                  status: 'published'
                });
                alert('Tugas baru berhasil dibuat dan dipublikasikan!');
              }}
              className="space-y-4 text-xs"
            >
              {/* Assignment Title */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Assignment Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newAssignmentForm.title}
                  onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, title: e.target.value })}
                  placeholder="e.g. Latihan Nahwu Bab Isim Mufrod" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              {/* Instructions / Description */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Instructions / Description</label>
                <textarea 
                  rows={3} 
                  value={newAssignmentForm.description}
                  onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, description: e.target.value })}
                  placeholder="Instruksi pengerjaan tugas bagi siswa..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-medium text-gray-800 resize-none focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Target Class & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Class</label>
                  <select 
                    value={newAssignmentForm.className}
                    onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, className: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                    <option value="Arabic Conversation">Arabic Conversation</option>
                    <option value="Sharaf Basic">Sharaf Basic</option>
                    <option value="Quran Tajweed">Quran Tajweed</option>
                    <option value="Academic Writing">Academic Writing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Type</label>
                  <select 
                    value={newAssignmentForm.type}
                    onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, type: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="Exercise">Exercise</option>
                    <option value="Essay">Essay</option>
                    <option value="Video">Video Submission</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Document">Document</option>
                    <option value="Project">Project</option>
                    <option value="Discussion">Discussion</option>
                  </select>
                </div>
              </div>

              {/* Due Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Due Date</label>
                  <input 
                    type="date" 
                    value={newAssignmentForm.dueDate}
                    onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, dueDate: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Due Time</label>
                  <input 
                    type="time" 
                    value={newAssignmentForm.dueTime}
                    onChange={(e) => setNewAssignmentForm({ ...newAssignmentForm, dueTime: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Status</label>
                <div className="flex items-center gap-3 pt-1">
                  {[
                    { id: 'published', label: 'Publish Immediately' },
                    { id: 'draft', label: 'Save as Draft' },
                    { id: 'scheduled', label: 'Schedule Later' }
                  ].map(st => (
                    <label key={st.id} className="flex items-center gap-1.5 cursor-pointer font-semibold text-gray-700">
                      <input 
                        type="radio" 
                        name="asgStatus" 
                        checked={newAssignmentForm.status === st.id}
                        onChange={() => setNewAssignmentForm({ ...newAssignmentForm, status: st.id })}
                        className="text-[#114B44] focus:ring-[#114B44]"
                      />
                      <span>{st.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsCreateAssignmentModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer"
                >
                  Create & Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: ASSIGNMENT DETAILS & GRADING MODAL                 */}
      {/* ========================================================= */}
      {selectedAssignmentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">{selectedAssignmentModal.title}</h3>
                  <p className="text-xs text-gray-500">{selectedAssignmentModal.className} • {selectedAssignmentModal.type}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedAssignmentModal(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <p className="text-gray-500 font-semibold">Deskripsi / Petunjuk:</p>
                <p className="text-gray-800 font-medium">{selectedAssignmentModal.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <p className="text-[10px] font-bold text-emerald-700 uppercase">Submissions</p>
                  <p className="text-base font-black text-emerald-900">{selectedAssignmentModal.submittedCount}/{selectedAssignmentModal.totalCount}</p>
                </div>
                <div className="p-2.5 bg-sky-50/60 rounded-xl border border-sky-100">
                  <p className="text-[10px] font-bold text-sky-700 uppercase">Progress</p>
                  <p className="text-base font-black text-sky-900">{selectedAssignmentModal.progressPercent}%</p>
                </div>
                <div className="p-2.5 bg-amber-50/60 rounded-xl border border-amber-100">
                  <p className="text-[10px] font-bold text-amber-700 uppercase">Due Date</p>
                  <p className="text-xs font-black text-amber-900 mt-1">{selectedAssignmentModal.dueDate}</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <p className="font-extrabold text-gray-900 text-xs">Recent Submissions in this Assignment:</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 font-bold text-[10px] flex items-center justify-center">AR</div>
                      <span className="font-bold text-gray-800 text-xs">Aisha Rahman</span>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Graded: 95/100</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 font-bold text-[10px] flex items-center justify-center">OH</div>
                      <span className="font-bold text-gray-800 text-xs">Omar Hassan</span>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Needs Review</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedAssignmentModal(null)}
                className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer text-xs"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Membuka antarmuka koreksi & grading untuk tugas: ${selectedAssignmentModal.title}`);
                  setSelectedAssignmentModal(null);
                }}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer text-xs flex items-center gap-2"
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Grade Submissions</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CREATE QUIZ MODAL                                  */}
      {/* ========================================================= */}
      {isCreateQuizModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Create New Quiz</h3>
                  <p className="text-xs text-gray-500">Buat kuis interaktif baru untuk siswa.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCreateQuizModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newQuizForm.title.trim()) {
                  alert('Mohon masukkan judul kuis.');
                  return;
                }
                const newQuiz = {
                  id: `qz-${Date.now()}`,
                  num: quizzesDataList.length + 1,
                  title: newQuizForm.title,
                  topic: newQuizForm.topic || 'Ujian evaluasi materi',
                  image: '/images/class_nahwu.jpg',
                  className: newQuizForm.className,
                  classColor: newQuizForm.className === 'Nahwu for Beginners' ? 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]' :
                              newQuizForm.className === 'Sharaf Basic' ? 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]' :
                              newQuizForm.className === 'Arabic Conversation' ? 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]' :
                              'bg-amber-50 text-amber-700 border border-amber-200',
                  questions: parseInt(newQuizForm.questionsCount) || 20,
                  timeLimit: newQuizForm.timeLimit || '15 min',
                  attempts: 0,
                  avgScore: null,
                  avgScoreColor: 'bg-gray-300',
                  status: newQuizForm.status
                };
                setQuizzesDataList(prev => [newQuiz, ...prev]);
                setIsCreateQuizModalOpen(false);
                setNewQuizForm({
                  title: '',
                  topic: '',
                  className: 'Nahwu for Beginners',
                  questionsCount: 20,
                  timeLimit: '15 min',
                  passingGrade: 75,
                  status: 'published'
                });
                alert('Kuis baru berhasil dibuat dan siap dikerjakan siswa!');
              }}
              className="space-y-4 text-xs"
            >
              {/* Quiz Title */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Quiz Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newQuizForm.title}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, title: e.target.value })}
                  placeholder="e.g. Kuis Nahwu Bab Isim Mufrod" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-gray-800 focus:outline-none focus:border-purple-600"
                  required
                />
              </div>

              {/* Topic / Subtitle */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Topic / Subtitle</label>
                <input 
                  type="text" 
                  value={newQuizForm.topic}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, topic: e.target.value })}
                  placeholder="e.g. Konsep dasar isim, fi'il, dan harf" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-purple-600"
                />
              </div>

              {/* Class & Question Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Class</label>
                  <select 
                    value={newQuizForm.className}
                    onChange={(e) => setNewQuizForm({ ...newQuizForm, className: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-purple-600 cursor-pointer"
                  >
                    <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                    <option value="Arabic Conversation">Arabic Conversation</option>
                    <option value="Sharaf Basic">Sharaf Basic</option>
                    <option value="Academic Writing">Academic Writing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Total Questions</label>
                  <input 
                    type="number" 
                    min={5}
                    max={100}
                    value={newQuizForm.questionsCount}
                    onChange={(e) => setNewQuizForm({ ...newQuizForm, questionsCount: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              {/* Time Limit & Passing Grade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Time Limit</label>
                  <select 
                    value={newQuizForm.timeLimit}
                    onChange={(e) => setNewQuizForm({ ...newQuizForm, timeLimit: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-purple-600 cursor-pointer"
                  >
                    <option value="10 min">10 minutes</option>
                    <option value="15 min">15 minutes</option>
                    <option value="20 min">20 minutes</option>
                    <option value="25 min">25 minutes</option>
                    <option value="30 min">30 minutes</option>
                    <option value="45 min">45 minutes</option>
                    <option value="60 min">60 minutes</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Passing Grade (%)</label>
                  <input 
                    type="number" 
                    min={50}
                    max={100}
                    value={newQuizForm.passingGrade}
                    onChange={(e) => setNewQuizForm({ ...newQuizForm, passingGrade: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Status</label>
                <div className="flex items-center gap-3 pt-1">
                  {[
                    { id: 'published', label: 'Publish' },
                    { id: 'draft', label: 'Draft' },
                    { id: 'scheduled', label: 'Scheduled' }
                  ].map(st => (
                    <label key={st.id} className="flex items-center gap-1.5 cursor-pointer font-semibold text-gray-700">
                      <input 
                        type="radio" 
                        name="quizStatusForm" 
                        checked={newQuizForm.status === st.id}
                        onChange={() => setNewQuizForm({ ...newQuizForm, status: st.id })}
                        className="text-[#114B44] focus:ring-[#114B44]"
                      />
                      <span>{st.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsCreateQuizModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer"
                >
                  Save & Publish Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: QUIZ DETAILS & ANALYTICS MODAL                     */}
      {/* ========================================================= */}
      {selectedQuizModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">{selectedQuizModal.title}</h3>
                  <p className="text-xs text-gray-500">{selectedQuizModal.className} • {selectedQuizModal.questions} Soal</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedQuizModal(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                <p className="text-gray-500 font-semibold">Topik Pembahasan:</p>
                <p className="text-gray-800 font-bold">{selectedQuizModal.topic}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <p className="text-[10px] font-bold text-emerald-700 uppercase">Total Attempts</p>
                  <p className="text-base font-black text-emerald-900">{selectedQuizModal.attempts}</p>
                </div>
                <div className="p-2.5 bg-sky-50/60 rounded-xl border border-sky-100">
                  <p className="text-[10px] font-bold text-sky-700 uppercase">Avg Score</p>
                  <p className="text-base font-black text-sky-900">{selectedQuizModal.avgScore !== null ? `${selectedQuizModal.avgScore}%` : 'N/A'}</p>
                </div>
                <div className="p-2.5 bg-amber-50/60 rounded-xl border border-amber-100">
                  <p className="text-[10px] font-bold text-amber-700 uppercase">Time Limit</p>
                  <p className="text-xs font-black text-amber-900 mt-1">{selectedQuizModal.timeLimit}</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <p className="font-extrabold text-gray-900 text-xs">Top Performer Attempts:</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 font-bold text-[10px] flex items-center justify-center">AR</div>
                      <span className="font-bold text-gray-800 text-xs">Aisha Rahman</span>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Score: 92%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 font-bold text-[10px] flex items-center justify-center">FZ</div>
                      <span className="font-bold text-gray-800 text-xs">Fatimah Zahra</span>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Score: 88%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedQuizModal(null)}
                className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer text-xs"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Membuka editor bank soal untuk kuis: ${selectedQuizModal.title}`);
                  setSelectedQuizModal(null);
                }}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer text-xs flex items-center gap-2"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Questions</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CREATE / ISSUE CERTIFICATE MODAL                   */}
      {/* ========================================================= */}
      {isCreateCertModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Issue New Certificate</h3>
                  <p className="text-xs text-gray-500">Berikan sertifikat resmi bagi siswa berprestasi.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCreateCertModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newCertForm.studentName.trim()) {
                  alert('Mohon masukkan nama siswa.');
                  return;
                }
                const newCert = {
                  id: `crt-${Date.now()}`,
                  num: certificatesDataList.length + 1,
                  studentName: newCertForm.studentName,
                  email: newCertForm.studentEmail || 'student@example.com',
                  avatar: '/images/student_aisha.jpg',
                  className: newCertForm.className,
                  classColor: newCertForm.className === 'Nahwu for Beginners' ? 'bg-[#E8F8F5] text-[#0A3D36] border border-[#B3E5DC]' :
                              newCertForm.className === 'Sharaf Basic' ? 'bg-[#F5EDFD] text-[#581C87] border border-[#E9D5FF]' :
                              newCertForm.className === 'Arabic Conversation' ? 'bg-[#EAF2FD] text-[#1E3A8A] border border-[#BFDBFE]' :
                              'bg-amber-50 text-amber-700 border border-amber-200',
                  type: newCertForm.type,
                  typeColor: newCertForm.type === 'Course Completion' ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' :
                             newCertForm.type === 'Quiz Certificate' ? 'text-purple-700 bg-purple-50 border border-purple-200' :
                             'text-amber-700 bg-amber-50 border border-amber-200',
                  issueDate: '30 Sep 2026',
                  issueTime: '12:00 PM',
                  status: newCertForm.status,
                  certId: `ILM-${Date.now().toString().slice(-6)}`
                };
                setCertificatesDataList(prev => [newCert, ...prev]);
                setIsCreateCertModalOpen(false);
                alert('Sertifikat berhasil dibuat dan diterbitkan kepada siswa!');
              }}
              className="space-y-4 text-xs"
            >
              {/* Student Name */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Student Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newCertForm.studentName}
                  onChange={(e) => setNewCertForm({ ...newCertForm, studentName: e.target.value })}
                  placeholder="e.g. Aisha Rahman" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              {/* Student Email */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Student Email</label>
                <input 
                  type="email" 
                  value={newCertForm.studentEmail}
                  onChange={(e) => setNewCertForm({ ...newCertForm, studentEmail: e.target.value })}
                  placeholder="e.g. aisha@example.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Target Class & Certificate Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Class</label>
                  <select 
                    value={newCertForm.className}
                    onChange={(e) => setNewCertForm({ ...newCertForm, className: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                    <option value="Arabic Conversation">Arabic Conversation</option>
                    <option value="Sharaf Basic">Sharaf Basic</option>
                    <option value="Quran Tajweed">Quran Tajweed</option>
                    <option value="Academic Writing">Academic Writing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-gray-700">Certificate Type</label>
                  <select 
                    value={newCertForm.type}
                    onChange={(e) => setNewCertForm({ ...newCertForm, type: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-gray-800 focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="Course Completion">Course Completion</option>
                    <option value="Quiz Certificate">Quiz Certificate</option>
                    <option value="Assignment Certificate">Assignment Certificate</option>
                    <option value="Custom Certificate">Custom Certificate</option>
                  </select>
                </div>
              </div>

              {/* Template Selection */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Design Template</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {certTemplatesList.map(tpl => (
                    <button
                      type="button"
                      key={tpl.id}
                      onClick={() => setNewCertForm({ ...newCertForm, template: tpl.title })}
                      className={`p-2 rounded-xl border text-center cursor-pointer transition-all ${
                        newCertForm.template === tpl.title
                          ? 'border-[#114B44] bg-[#114B44]/5 text-[#114B44] font-extrabold ring-1 ring-[#114B44]'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <p className="text-[11px] truncate">{tpl.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsCreateCertModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer"
                >
                  Issue Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: CERTIFICATE PREVIEW / VERIFICATION MODAL           */}
      {/* ========================================================= */}
      {selectedCertModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Official Certificate Preview</h3>
                  <p className="text-xs text-gray-500">ID: {selectedCertModal.certId || 'ILM-2026-PREVIEW'}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCertModal(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Certificate Paper */}
            <div className="relative rounded-2xl p-8 bg-linear-to-br from-[#0A3D36] via-[#114B44] to-[#072B26] text-white shadow-xl border-4 border-amber-400/40 text-center space-y-4 overflow-hidden">
              {/* Corner Ornaments */}
              <div className="absolute inset-2 border border-amber-300/30 rounded-xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between text-amber-300 text-xs font-black tracking-widest uppercase">
                <span>★ IlmHub Academy</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded-full border border-amber-400/30">Verified</span>
              </div>

              <div className="space-y-1 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-black tracking-wider text-amber-200 uppercase">
                  Certificate of Achievement
                </h2>
                <p className="text-xs text-emerald-100/80 font-light italic">This is proudly presented to</p>
              </div>

              <div className="py-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight underline decoration-amber-400/50 underline-offset-8">
                  {selectedCertModal.studentName}
                </h3>
              </div>

              <p className="text-xs text-emerald-100/90 max-w-md mx-auto leading-relaxed">
                has successfully completed the comprehensive course and evaluation for <span className="font-black text-white">{selectedCertModal.className}</span> with excellence.
              </p>

              <div className="pt-6 flex items-end justify-between border-t border-white/10 text-xs">
                <div className="text-left">
                  <p className="text-[10px] text-emerald-200 font-bold">Issued on</p>
                  <p className="font-extrabold text-white text-xs">{selectedCertModal.issueDate || '30 Sep 2026'}</p>
                </div>

                <div className="w-12 h-12 rounded-full border-2 border-amber-400/60 bg-amber-400/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-300" />
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-emerald-200 font-bold">Instructor</p>
                  <p className="font-extrabold text-white text-xs">{teacherName}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5 text-xs">
              <button
                type="button"
                onClick={() => setSelectedCertModal(null)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Mengunduh berkas PDF kualitas cetak sertifikat ${selectedCertModal.studentName}...`);
                }}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download High-Res PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: WITHDRAW EARNINGS MODAL                            */}
      {/* ========================================================= */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Withdraw Earnings</h3>
                  <p className="text-xs text-gray-500">Tarik saldo pendapatan ke rekening Anda.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWithdrawModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Permintaan penarikan dana sebesar $${withdrawAmount} berhasil diajukan! Dana akan ditransfer dalam 1x24 jam.`);
                setIsWithdrawModalOpen(false);
              }}
              className="space-y-4 text-xs"
            >
              {/* Available balance highlight */}
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Saldo Tersedia</p>
                  <p className="text-lg font-black text-emerald-900">$320.75</p>
                </div>
                <button
                  type="button"
                  onClick={() => setWithdrawAmount('320.75')}
                  className="px-2.5 py-1 bg-white border border-emerald-300 text-emerald-800 rounded-lg font-bold text-[10px] cursor-pointer hover:bg-emerald-50"
                >
                  Tarik Semua
                </button>
              </div>

              {/* Amount input */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Jumlah Penarikan (USD) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-gray-500">$</span>
                  <input 
                    type="number"
                    step="0.01"
                    min="10"
                    max="320.75"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 font-bold text-gray-800 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>
                <p className="text-[10px] text-gray-400">Minimal penarikan $10.00</p>
              </div>

              {/* Destination method */}
              <div className="space-y-1">
                <label className="font-extrabold text-gray-700">Metode Pembayaran</label>
                <div className="space-y-2 pt-1">
                  {[
                    { id: 'paypal', label: 'PayPal (ahmed@example.com)', desc: 'Instan • Biaya 0%' },
                    { id: 'bank', label: 'Bank Transfer (BCA / Mandiri / BSI)', desc: '1-2 Hari Kerja • Biaya $1.50' },
                    { id: 'stripe', label: 'Stripe Direct Payout', desc: 'Instan • Biaya 0%' },
                  ].map(method => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        withdrawMethod === method.id
                          ? 'border-[#114B44] bg-[#114B44]/5'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="payoutMethod"
                          checked={withdrawMethod === method.id}
                          onChange={() => setWithdrawMethod(method.id)}
                          className="text-[#114B44] focus:ring-[#114B44]"
                        />
                        <div>
                          <p className="font-bold text-gray-900 text-xs">{method.label}</p>
                          <p className="text-[10px] text-gray-400">{method.desc}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsWithdrawModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer"
                >
                  Konfirmasi Penarikan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: TRANSACTION INVOICE DETAILS MODAL                  */}
      {/* ========================================================= */}
      {selectedTransactionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Rincian Transaksi</h3>
                  <p className="text-xs text-gray-500">{selectedTransactionModal.invoice}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTransactionModal(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Tanggal Transaksi:</span>
                <span className="font-bold text-gray-800">{selectedTransactionModal.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Nama Siswa:</span>
                <span className="font-extrabold text-gray-900">{selectedTransactionModal.studentName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Item / Kelas:</span>
                <span className="font-bold text-gray-800">{selectedTransactionModal.item}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Jenis Transaksi:</span>
                <span className="font-bold text-gray-800">{selectedTransactionModal.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Status Pembayaran:</span>
                <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
                  {selectedTransactionModal.status}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-900 font-extrabold">Total Diterima:</span>
                <span className="text-lg font-black text-[#114B44]">{selectedTransactionModal.amount}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5 text-xs">
              <button
                type="button"
                onClick={() => setSelectedTransactionModal(null)}
                className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Mengunduh struk / invoice resmi untuk ${selectedTransactionModal.invoice}`);
                }}
                className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: NEW MESSAGE / COMPOSE DIALOG                        */}
      {/* ========================================================= */}
      {isNewMessageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#114B44] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Kirim Pesan Baru</h3>
                  <p className="text-xs text-gray-500">Mulai obrolan baru dengan murid atau grup kelas</p>
                </div>
              </div>
              <button 
                onClick={() => setIsNewMessageModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Pesan baru berhasil dikirim!');
              setIsNewMessageModalOpen(false);
            }} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Pilih Penerima</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors">
                  <option value="1">Aisha Rahman (Nahwu for Beginners)</option>
                  <option value="2">Omar Hassan (Quran Tajweed Batch 1)</option>
                  <option value="3">Quran Tajweed Batch 1 (Grup Kelas - 24 Murid)</option>
                  <option value="4">Fatimah Zahra (Arabic Speaking Mastery)</option>
                  <option value="5">Ali Khan (Nahwu for Beginners)</option>
                  <option value="6">Layla Ahmad (Fiqh Ibadah)</option>
                  <option value="7">Sara Nabilah (Arabic Speaking Mastery)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Subjek / Topik (Opsional)</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Feedback Tugas 4 / Tanya Jawab Materi"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Isi Pesan</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tuliskan pesan Anda kepada murid..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => alert('Fitur lampirkan file dibuka')}
                  className="p-2 rounded-xl text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                >
                  <Paperclip className="w-4 h-4" />
                  <span>Lampiran File</span>
                </button>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setIsNewMessageModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: REQUEST REVIEW MODAL                                */}
      {/* ========================================================= */}
      {isRequestReviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#114B44] flex items-center justify-center">
                  <Star className="w-4 h-4 fill-[#114B44]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Request Review</h3>
                  <p className="text-xs text-gray-500">Kirim permintaan ulasan & feedback ke santri Anda</p>
                </div>
              </div>
              <button 
                onClick={() => setIsRequestReviewModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Permintaan ulasan berhasil dikirimkan ke santri!');
              setIsRequestReviewModalOpen(false);
            }} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Pilih Kelas Sasaran</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-medium text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors">
                  <option value="nahwu">Nahwu for Beginners (34 Santri)</option>
                  <option value="sharaf">Sharaf Basic (28 Santri)</option>
                  <option value="conversation">Arabic Conversation (22 Santri)</option>
                  <option value="tajweed">Quran Tajweed (40 Santri)</option>
                  <option value="all">Semua Siswa Terdaftar (128 Santri)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Target Penerima</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-medium text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors">
                  <option value="completed">Siswa yang baru menyelesaikan tugas / kuis</option>
                  <option value="all">Seluruh siswa aktif di kelas ini</option>
                  <option value="specific">Pilih siswa tertentu</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Pesan Undangan Ulasan</label>
                <textarea 
                  rows={4}
                  defaultValue={"Assalamu'alaikum, terima kasih telah mengikuti kelas kami dengan sungguh-sungguh. Mohon luangkan 1 menit untuk memberikan ulasan & masukan jujur agar kami dapat terus meningkatkan kualitas pembelajaran. Jazakumullahu khairan!"}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsRequestReviewModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Permintaan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: REPLY TO STUDENT REVIEW DIALOG                      */}
      {/* ========================================================= */}
      {selectedReviewForReply && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#114B44] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Tanggapi Ulasan</h3>
                  <p className="text-xs text-gray-500">Balasan akan tampil publik di bawah ulasan siswa</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedReviewForReply(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Review Preview Card */}
            <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-gray-900">{selectedReviewForReply.studentName}</span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-bold">
                    {selectedReviewForReply.className}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-3 h-3 ${s <= selectedReviewForReply.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic">"{selectedReviewForReply.comment}"</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              if (!replyInputText.trim()) return;

              const newReply = {
                id: `rep-${Date.now()}`,
                author: teacherName,
                role: 'Teacher',
                date: 'Just now',
                text: replyInputText
              };

              setReviewsList(prev => prev.map(r => {
                if (r.id === selectedReviewForReply.id) {
                  return {
                    ...r,
                    replies: [...(r.replies || []), newReply]
                  };
                }
                return r;
              }));

              alert('Balasan ulasan berhasil dipublikasikan!');
              setSelectedReviewForReply(null);
              setReplyInputText('');
            }} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Tulis Balasan Ustadz / Pengajar</label>
                <textarea 
                  rows={4}
                  required
                  value={replyInputText}
                  onChange={(e) => setReplyInputText(e.target.value)}
                  placeholder="Ketik tanggapan Anda untuk santri, contoh: Jazakallahu khairan atas masukan dan semangat belajarnya..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:border-[#114B44] focus:bg-white transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setSelectedReviewForReply(null)}
                  className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-[#114B44] hover:bg-[#0D3B35] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Kirim Balasan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: REVIEW DETAIL & MODERATION DIALOG                   */}
      {/* ========================================================= */}
      {selectedReviewDetailModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <div>
                  <h3 className="text-base font-black text-gray-900">Kelola Ulasan</h3>
                  <p className="text-xs text-gray-500">Moderasi dan tindakan ulasan siswa</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedReviewDetailModal(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Nama Siswa:</span>
                <span className="font-extrabold text-gray-900">{selectedReviewDetailModal.studentName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Kelas:</span>
                <span className="font-bold text-gray-800">{selectedReviewDetailModal.className}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Rating:</span>
                <span className="font-bold text-amber-500 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {selectedReviewDetailModal.rating} dari 5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Tanggal:</span>
                <span className="font-bold text-gray-800">{selectedReviewDetailModal.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
                  {selectedReviewDetailModal.status}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <span className="text-gray-500 block mb-1 font-semibold">Isi Ulasan:</span>
                <p className="text-gray-800 bg-white p-2.5 rounded-xl border border-gray-200 leading-relaxed italic">
                  "{selectedReviewDetailModal.comment}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <button
                type="button"
                onClick={() => {
                  alert(`Ulasan dari ${selectedReviewDetailModal.studentName} berhasil ditandai sebagai ulasan unggulan (Featured Review)!`);
                  setSelectedReviewDetailModal(null);
                }}
                className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold hover:bg-emerald-100 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jadikan Unggulan</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  alert(`Laporan ulasan telah diteruskan ke tim moderasi IlmuHub.`);
                  setSelectedReviewDetailModal(null);
                }}
                className="p-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-bold hover:bg-rose-100 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Laporkan Ulasan</span>
              </button>
            </div>

            <div className="pt-1 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedReviewDetailModal(null)}
                className="px-4 py-2 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 text-xs cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
