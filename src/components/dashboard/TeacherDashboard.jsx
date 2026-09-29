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
  MoreHorizontal
} from 'lucide-react';

export default function TeacherDashboard({ user, onStartLive, onManageCourses, onBackToHome }) {
  const [activeNav, setActiveNav] = useState('students'); // 'dashboard', 'classes', 'create', 'schedule', 'students'
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

              {/* Main Content Layout: Timetable Grid (Left 8/9 cols) + Right Sidebar (3/4 cols) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                {/* CENTER / TIMETABLE CANVAS (8 or 9 Cols) */}
                <div className="xl:col-span-8 2xl:col-span-9 space-y-6 min-w-0">
                  
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

                {/* RIGHT SIDEBAR COLUMN: Mini Calendar + Today's Schedule + Upcoming (3 or 4 Cols) */}
                <div className="xl:col-span-4 2xl:col-span-3 space-y-5 shrink-0">
                  
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

              {/* Main Content Layout: Table Column (Left 8/9 cols) + Right Sidebar Column (Right 4/3 cols) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                
                {/* CENTER / TABLE CANVAS (8 or 9 Cols) */}
                <div className="xl:col-span-8 2xl:col-span-9 space-y-4 min-w-0">
                  
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

                {/* RIGHT SIDEBAR COLUMN: Growth + Top Performing + Activity + Quick Actions (3 or 4 Cols) */}
                <div className="xl:col-span-4 2xl:col-span-3 space-y-5 shrink-0">
                  
                  {/* WIDGET 1: Student Growth (Matching mockup with SVG bar chart) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Student Growth</h3>
                      <div className="relative">
                        <select 
                          value={studentGrowthRange}
                          onChange={(e) => setStudentGrowthRange(e.target.value)}
                          className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1 pr-6 text-[11px] font-bold text-gray-700 focus:outline-none cursor-pointer"
                        >
                          <option value="Last 30 days">Last 30 days</option>
                          <option value="Last 3 months">Last 3 months</option>
                          <option value="This Year">This Year</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-2 pointer-events-none" />
                      </div>
                    </div>

                    {/* SVG Bar Chart for Student Growth */}
                    <div className="relative pt-2">
                      <div className="flex items-end justify-between h-36 gap-2 border-b border-gray-200 pb-2 px-1">
                        
                        {/* Y-Axis guide labels */}
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] font-bold text-gray-400 pointer-events-none">
                          <span>30</span>
                          <span>20</span>
                          <span>10</span>
                          <span>0</span>
                        </div>

                        {/* Bar 1: 1 Sep (value 12) */}
                        <div className="flex-1 flex flex-col items-center gap-1.5 ml-5">
                          <div className="w-full bg-[#114B44]/80 hover:bg-[#114B44] rounded-t-lg transition-all" style={{ height: '35%' }} title="1 Sep: 12 students"></div>
                          <span className="text-[9px] font-extrabold text-gray-400">1 Sep</span>
                        </div>

                        {/* Bar 2: 8 Sep (value 16) */}
                        <div className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full bg-[#114B44]/80 hover:bg-[#114B44] rounded-t-lg transition-all" style={{ height: '48%' }} title="8 Sep: 16 students"></div>
                          <span className="text-[9px] font-extrabold text-gray-400">8 Sep</span>
                        </div>

                        {/* Bar 3: 15 Sep (value 21) */}
                        <div className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full bg-[#114B44]/80 hover:bg-[#114B44] rounded-t-lg transition-all" style={{ height: '62%' }} title="15 Sep: 21 students"></div>
                          <span className="text-[9px] font-extrabold text-gray-400">15 Sep</span>
                        </div>

                        {/* Bar 4: 22 Sep (value 26) */}
                        <div className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full bg-[#114B44]/90 hover:bg-[#114B44] rounded-t-lg transition-all" style={{ height: '78%' }} title="22 Sep: 26 students"></div>
                          <span className="text-[9px] font-extrabold text-gray-400">22 Sep</span>
                        </div>

                        {/* Bar 5: 30 Sep (value 32) */}
                        <div className="flex-1 flex flex-col items-center gap-1.5">
                          <div className="w-full bg-[#114B44] rounded-t-lg shadow-xs transition-all" style={{ height: '95%' }} title="30 Sep: 32 students"></div>
                          <span className="text-[9px] font-extrabold text-gray-900">30 Sep</span>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* WIDGET 2: Top Performing Students (Matching mockup) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Top Performing Students</h3>
                      <button 
                        onClick={() => alert('Daftar lengkap peringkat siswa')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {topPerformingStudents.map((st) => (
                        <div key={st.rank} className="flex items-center justify-between gap-2.5 p-1.5 rounded-xl hover:bg-gray-50 transition-colors">
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
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black text-gray-900">Student Activity</h3>
                    </div>

                    <div className="flex items-center gap-1 border-b border-gray-100 pb-2">
                      <button
                        onClick={() => setStudentActivityTab('recent')}
                        className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          studentActivityTab === 'recent'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Recent Activity
                      </button>
                      <button
                        onClick={() => setStudentActivityTab('milestones')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          studentActivityTab === 'milestones'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Milestones
                      </button>
                    </div>

                    <div className="space-y-3">
                      {studentActivities.map((act, i) => {
                        const Icon = act.icon;
                        return (
                          <div key={i} className="flex items-start gap-3 text-xs">
                            <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${act.iconBg}`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-gray-900 leading-snug">{act.text}</p>
                              <span className="text-[10px] text-gray-400 mt-0.5 block">{act.time}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* WIDGET 4: Quick Actions (2x2 Grid Matching Mockup) */}
                  <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-xs space-y-3">
                    <h3 className="text-sm font-black text-gray-900">Quick Actions</h3>
                    
                    <div className="grid grid-cols-2 gap-2.5">
                      
                      {/* Invite Students */}
                      <button 
                        onClick={() => setIsInviteModalOpen(true)}
                        className="p-3 rounded-2xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200/70 text-left flex items-center gap-2.5 transition-all cursor-pointer group"
                      >
                        <Mail className="w-4 h-4 text-sky-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-bold text-sky-900">Invite Students</span>
                      </button>

                      {/* Send Announcement */}
                      <button 
                        onClick={() => setIsAnnouncementModalOpen(true)}
                        className="p-3 rounded-2xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200/70 text-left flex items-center gap-2.5 transition-all cursor-pointer group"
                      >
                        <Megaphone className="w-4 h-4 text-orange-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-bold text-orange-900">Send Announcement</span>
                      </button>

                      {/* Download Report */}
                      <button 
                        onClick={() => alert('Mengunduh Laporan Kehadiran & Nilai Siswa (PDF)...')}
                        className="p-3 rounded-2xl bg-teal-50/70 hover:bg-teal-100/70 border border-teal-200/70 text-left flex items-center gap-2.5 transition-all cursor-pointer group"
                      >
                        <Download className="w-4 h-4 text-teal-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-bold text-teal-900">Download Report</span>
                      </button>

                      {/* Message All */}
                      <button 
                        onClick={() => setActiveNav('messages')}
                        className="p-3 rounded-2xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-200/70 text-left flex items-center gap-2.5 transition-all cursor-pointer group"
                      >
                        <MessageSquare className="w-4 h-4 text-purple-700 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-bold text-purple-900">Message All</span>
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW 5: DASHBOARD OVERVIEW CANVAS                         */
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

    </div>
  );
}
