import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Compass, 
  Video, 
  Calendar, 
  FileText, 
  HelpCircle, 
  Award, 
  MessageSquare, 
  DollarSign, 
  BarChart2, 
  Settings, 
  Search, 
  Bell, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  PlayCircle, 
  Radio, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Star, 
  Users, 
  Download, 
  CalendarPlus, 
  Plus, 
  Play, 
  Check, 
  Trophy, 
  MoreVertical, 
  Globe, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  LogOut, 
  User,
  Heart,
  Filter,
  Gift,
  Crown,
  Layers,
  GraduationCap,
  Share2,
  Send,
  Paperclip,
  Smile,
  Phone,
  Wallet,
  CreditCard,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export default function StudentDashboard({ user, onJoinLive, onExploreCourses, onBackToHome, onLogout, onSwitchRole }) {
  const [activeNav, setActiveNav] = useState('browse'); // default or switch to 'browse'
  const [classTabFilter, setClassTabFilter] = useState('all'); // 'all' (8) | 'in_progress' (5) | 'completed' (2) | 'upcoming' (1) | 'saved' (0)
  const [classSearchQuery, setClassSearchQuery] = useState('');
  const [classSortOrder, setClassSortOrder] = useState('Newest First');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(25); // 25 Sep 2026 selected by default
  const [selectedCalendarMonth, setSelectedCalendarMonth] = useState('September 2026');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Schedule View States (matching media_1790727369755.jpg)
  const [scheduleTab, setScheduleTab] = useState('class_schedule'); // 'class_schedule' | 'upcoming' | 'deadlines' | 'reminders' | 'calendar_view'
  const [scheduleViewMode, setScheduleViewMode] = useState('week'); // 'week' | 'month' | 'agenda'
  const [scheduleClassFilter, setScheduleClassFilter] = useState('All Classes');
  const [scheduleInstructorFilter, setScheduleInstructorFilter] = useState('All Instructors');
  const [scheduleTypeFilter, setScheduleTypeFilter] = useState('All Types');
  const [scheduleMonthFilter, setScheduleMonthFilter] = useState('September 2026');
  const [scheduleSelectedDay, setScheduleSelectedDay] = useState(23); // 23 Sep (Wed) default
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);

  // Assignments View States (matching media_1790728280277.jpg)
  const [assignmentTabFilter, setAssignmentTabFilter] = useState('all'); // 'all' | 'todo' | 'in_progress' | 'submitted' | 'graded'
  const [assignmentSearchQuery, setAssignmentSearchQuery] = useState('');
  const [assignmentClassFilter, setAssignmentClassFilter] = useState('All Classes');
  const [assignmentTypeFilter, setAssignmentTypeFilter] = useState('All Types');
  const [assignmentStatusFilter, setAssignmentStatusFilter] = useState('All Status');
  const [assignmentSortOrder, setAssignmentSortOrder] = useState('Due Date (Soonest)');
  const [selectedAssignmentForSubmit, setSelectedAssignmentForSubmit] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Quizzes View States (matching media_1790728429009.jpg)
  const [quizTabFilter, setQuizTabFilter] = useState('all'); // 'all' | 'not_started' | 'in_progress' | 'completed'
  const [quizSearchQuery, setQuizSearchQuery] = useState('');
  const [quizClassFilter, setQuizClassFilter] = useState('All Classes');
  const [quizTypeFilter, setQuizTypeFilter] = useState('All Types');
  const [quizStatusFilter, setQuizStatusFilter] = useState('All Status');
  const [quizSortOrder, setQuizSortOrder] = useState('Due Date');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Certificates View States (matching media_1790728589304.jpg)
  const [certificateTabFilter, setCertificateTabFilter] = useState('all'); // 'all' | 'completed' | 'in_progress' | 'not_started'
  const [certificateSearchQuery, setCertificateSearchQuery] = useState('');
  const [certificateClassFilter, setCertificateClassFilter] = useState('All Classes');
  const [certificateTypeFilter, setCertificateTypeFilter] = useState('All Types');
  const [certificateSortOrder, setCertificateSortOrder] = useState('Newest First');
  const [selectedCertificateId, setSelectedCertificateId] = useState('cert-1');
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Messages View States (matching media_1790728623094.jpg)
  const [messageFilter, setMessageFilter] = useState('all'); // 'all' | 'unread' | 'groups' | 'teachers'
  const [messageSearchQuery, setMessageSearchQuery] = useState('');
  const [activeConversationId, setActiveConversationId] = useState('conv-1');
  const [chatInputText, setChatInputText] = useState('');
  const [activeChatMessages, setActiveChatMessages] = useState([]);
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);

  // Earnings View States (matching media_1790728958033.jpg)
  const [earningsPeriod, setEarningsPeriod] = useState('Month'); // 'Week' | 'Month' | 'Year'
  const [earningsMonth, setEarningsMonth] = useState('September 2026');
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
  const [withdrawAmountInput, setWithdrawAmountInput] = useState('86.50');
  const [selectedWithdrawMethod, setSelectedWithdrawMethod] = useState('PayPal');

  // Browse Classes View States (matching media_1790726478349.jpg)
  const [browseCategory, setBrowseCategory] = useState('all'); // 'all', 'islamic', 'language', 'academic', 'professional', 'personal', 'kids'
  const [browseSearchQuery, setBrowseSearchQuery] = useState('');
  const [browseLevelFilter, setBrowseLevelFilter] = useState('All Levels');
  const [browseLanguageFilter, setBrowseLanguageFilter] = useState('All Languages');
  const [browseTypeFilter, setBrowseTypeFilter] = useState('All Types');
  const [browseSortBy, setBrowseSortBy] = useState('Newest First');
  const [wishlist, setWishlist] = useState(['feat-1', 'all-2']);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const studentName = user?.name || 'Aisha Rahman';
  const studentEmail = user?.email || 'aisha@example.com';
  const studentAvatar = user?.avatar || '/images/student_aisha.jpg';

  // Left Sidebar Navigation Items matching media_1790725449767.jpg
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'My Classes', icon: BookOpen },
    { id: 'browse', label: 'Browse Classes', icon: Compass },
    { id: 'live', label: 'Live Classroom', icon: Video },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '5' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Full detailed class cards matching media_1790725449767.jpg
  const studentClassesList = [
    {
      id: 'cls-1',
      title: 'Nahwu for Beginners',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      status: 'in_progress',
      progress: 85,
      completedLessons: 12,
      totalLessons: 14,
      primaryTag: 'Arabic',
      levelTag: 'Beginner',
      featureTag: { label: 'Live + Recorded', icon: '🎥', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
      nextClassInfo: 'Tomorrow, 10:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-2',
      title: 'Sharaf Basic',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 60,
      completedLessons: 9,
      totalLessons: 15,
      primaryTag: 'Arabic',
      levelTag: 'Beginner',
      featureTag: { label: 'Assignments', icon: '📄', color: 'bg-purple-50 text-purple-700 border-purple-100' },
      nextClassInfo: 'Wed, 25 Sep, 2:00 PM',
      isCompleted: false
    },
    {
      id: 'cls-3',
      title: 'Arabic Conversation',
      tutor: 'Ustadz Omar Hassan',
      image: '/images/class_nahwu.jpg',
      status: 'in_progress',
      progress: 42,
      completedLessons: 5,
      totalLessons: 12,
      primaryTag: 'Arabic',
      levelTag: 'Intermediate',
      featureTag: { label: 'Live Class', icon: '🔴', color: 'bg-rose-50 text-rose-700 border-rose-100' },
      nextClassInfo: 'Thu, 26 Sep, 4:00 PM',
      isCompleted: false
    },
    {
      id: 'cls-4',
      title: 'Academic Writing',
      tutor: 'Dr. Layla Ahmad',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 28,
      completedLessons: 4,
      totalLessons: 14,
      primaryTag: 'Writing',
      levelTag: 'All Levels',
      featureTag: { label: 'Materials', icon: '📚', color: 'bg-blue-50 text-blue-700 border-blue-100' },
      nextClassInfo: 'Sat, 28 Sep, 11:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-5',
      title: 'Islamic History',
      tutor: 'Ustadz Ali Khan',
      image: '/images/class_nahwu.jpg',
      status: 'completed',
      progress: 100,
      completedLessons: 10,
      totalLessons: 10,
      primaryTag: 'History',
      levelTag: 'Beginner',
      featureTag: { label: 'Readings', icon: '📖', color: 'bg-purple-50 text-purple-700 border-purple-100' },
      completedDate: '20 Sep 2026',
      isCompleted: true
    },
    {
      id: 'cls-6',
      title: 'Environmental Management',
      tutor: 'Dr. Sara Nabilah',
      image: '/images/class_conversation.jpg',
      status: 'in_progress',
      progress: 15,
      completedLessons: 2,
      totalLessons: 13,
      primaryTag: 'Science',
      levelTag: 'Intermediate',
      featureTag: { label: 'Project', icon: '💼', color: 'bg-sky-50 text-sky-700 border-sky-100' },
      nextClassInfo: 'Mon, 30 Sep, 9:00 AM',
      isCompleted: false
    },
    {
      id: 'cls-7',
      title: 'Quran Tajweed Mastery',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_tajweed.jpg',
      status: 'completed',
      progress: 100,
      completedLessons: 16,
      totalLessons: 16,
      primaryTag: 'Quran',
      levelTag: 'Beginner',
      featureTag: { label: 'Talaqqi Live', icon: '🎙️', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
      completedDate: '10 Sep 2026',
      isCompleted: true
    },
    {
      id: 'cls-8',
      title: 'Fiqh Ibadah Praktis',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      status: 'upcoming',
      progress: 0,
      completedLessons: 0,
      totalLessons: 10,
      primaryTag: 'Fiqh',
      levelTag: 'All Levels',
      featureTag: { label: 'Starts Next Week', icon: '⏳', color: 'bg-amber-50 text-amber-700 border-amber-100' },
      nextClassInfo: 'Starts 5 Oct 2026',
      isCompleted: false
    }
  ];

  const recommendedCourses = [
    {
      id: 'rc-1',
      title: 'Arabic Writing Skills',
      tutor: 'Dr. Layla Ahmad',
      rating: 4.9,
      students: 320,
      price: 'Free',
      avatar: '/images/student_layla.jpg',
    },
    {
      id: 'rc-2',
      title: 'Islamic History & Civilizations',
      tutor: 'Ustadz Ali Khan',
      rating: 4.9,
      students: 210,
      price: '150 EGP',
      avatar: '/images/student_ali.jpg',
    },
    {
      id: 'rc-3',
      title: 'English for Academic Studies',
      tutor: 'Dr. Sara Nabilah',
      rating: 4.8,
      students: 540,
      price: 'Free',
      avatar: '/images/student_fatimah.jpg',
    },
  ];

  // Browse Classes View Datasets (Matching media_1790726478349.jpg)
  const featuredBrowseClasses = [
    {
      id: 'feat-1',
      title: 'Nahwu for Beginners',
      tutor: 'Ustadz Ahmad Fauzi',
      image: '/images/class_nahwu.jpg',
      badge: { text: 'Bestseller', color: 'bg-amber-400 text-amber-950' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.9,
      reviews: 328,
      students: '2.1K',
      lessons: 12,
      duration: '3h 20m',
      category: 'language',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'feat-2',
      title: 'Sharaf Basic',
      tutor: 'Ustadzah Fatimah Zahra',
      image: '/images/class_conversation.jpg',
      badge: { text: 'Popular', color: 'bg-purple-500 text-white' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.8,
      reviews: 214,
      students: '1.6K',
      lessons: 15,
      duration: '4h 10m',
      category: 'language',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Self-Paced'
    },
    {
      id: 'feat-3',
      title: 'Arabic Conversation',
      tutor: 'Ustadz Omar Hassan',
      image: '/images/class_nahwu.jpg',
      badge: { text: 'New', color: 'bg-emerald-500 text-white' },
      primaryTag: { label: 'Arabic', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      rating: 4.7,
      reviews: 186,
      students: '980',
      lessons: 12,
      duration: '3h 5m',
      category: 'language',
      level: 'Intermediate',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'feat-4',
      title: 'Academic Writing',
      tutor: 'Dr. Layla Ahmad',
      image: '/images/class_conversation.jpg',
      badge: { text: 'Trending', color: 'bg-rose-500 text-white' },
      primaryTag: { label: 'Writing', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.6,
      reviews: 142,
      students: '760',
      lessons: 14,
      duration: '4h 30m',
      category: 'academic',
      level: 'All Levels',
      language: 'English',
      type: 'With Certificate'
    }
  ];

  const allBrowseClassesList = [
    {
      id: 'all-1',
      title: 'Islamic History',
      tutor: 'Ustadz Ali Khan',
      image: '/images/class_nahwu.jpg',
      primaryTag: { label: 'History', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.8,
      reviews: 192,
      students: '1.2K',
      lessons: 10,
      duration: '2h 40m',
      category: 'islamic',
      level: 'Beginner',
      language: 'Arabic',
      type: 'Self-Paced'
    },
    {
      id: 'all-2',
      title: "Qur'an Tajweed",
      tutor: 'Ustadz Yusuf Rahman',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: "Qur'an", color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      levelTag: { label: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      rating: 4.9,
      reviews: 256,
      students: '1.5K',
      lessons: 16,
      duration: '4h 20m',
      category: 'islamic',
      level: 'Intermediate',
      language: 'Arabic',
      type: 'Live Classes'
    },
    {
      id: 'all-3',
      title: 'Environmental Management',
      tutor: 'Dr. Sara Nabilah',
      image: '/images/hero_student.jpg',
      primaryTag: { label: 'Science', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'Intermediate', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      rating: 4.5,
      reviews: 98,
      students: '540',
      lessons: 13,
      duration: '3h 10m',
      category: 'academic',
      level: 'Intermediate',
      language: 'English',
      type: 'With Certificate'
    },
    {
      id: 'all-4',
      title: 'Python for Data Analysis',
      tutor: 'Mr. Ali Rahman',
      image: '/images/login_lms_desk_bg.jpg',
      primaryTag: { label: 'IT & Data', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.7,
      reviews: 176,
      students: '1.1K',
      lessons: 18,
      duration: '5h 30m',
      category: 'professional',
      level: 'Beginner',
      language: 'English',
      type: 'Self-Paced'
    },
    {
      id: 'all-5',
      title: 'Personal Finance',
      tutor: 'Dr. Tariq Mansoor',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: 'Finance', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.8,
      reviews: 145,
      students: '890',
      lessons: 8,
      duration: '2h 15m',
      category: 'professional',
      level: 'All Levels',
      language: 'English',
      type: 'Free Classes'
    },
    {
      id: 'all-6',
      title: 'Kids Islamic Stories',
      tutor: 'Ustadzah Maryam',
      image: '/images/class_nahwu.jpg',
      primaryTag: { label: 'Kids', color: 'bg-amber-50 text-amber-700 border-amber-200' },
      levelTag: { label: 'Beginner', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      rating: 4.9,
      reviews: 310,
      students: '1.8K',
      lessons: 20,
      duration: '3h 45m',
      category: 'kids',
      level: 'Beginner',
      language: 'Indonesian',
      type: 'Self-Paced'
    },
    {
      id: 'all-7',
      title: 'English for Professionals',
      tutor: 'Prof. David Miller',
      image: '/images/class_conversation.jpg',
      primaryTag: { label: 'Language', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      levelTag: { label: 'Intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      rating: 4.7,
      reviews: 220,
      students: '940',
      lessons: 14,
      duration: '4h 00m',
      category: 'language',
      level: 'Intermediate',
      language: 'English',
      type: 'Premium Classes'
    },
    {
      id: 'all-8',
      title: 'Productivity & Time Management',
      tutor: 'Coach Zainab Bilal',
      image: '/images/login_lms_desk_bg.jpg',
      primaryTag: { label: 'Productivity', color: 'bg-rose-50 text-rose-700 border-rose-200' },
      levelTag: { label: 'All Levels', color: 'bg-gray-100 text-gray-700 border-gray-200' },
      rating: 4.8,
      reviews: 185,
      students: '1.3K',
      lessons: 10,
      duration: '2h 30m',
      category: 'personal',
      level: 'All Levels',
      language: 'English',
      type: 'With Certificate'
    }
  ];

  const popularTopicsList = [
    { id: 'top-1', label: "Qur'an & Tajweed", count: '48 classes', icon: '📖', iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100', category: 'islamic' },
    { id: 'top-2', label: 'Arabic Language', count: '36 classes', icon: '🔤', iconBg: 'bg-purple-50 text-purple-700 border-purple-100', category: 'language' },
    { id: 'top-3', label: 'Islamic History', count: '28 classes', icon: '🏛️', iconBg: 'bg-pink-50 text-pink-700 border-pink-100', category: 'islamic' },
    { id: 'top-4', label: 'Academic Writing', count: '24 classes', icon: '✍️', iconBg: 'bg-blue-50 text-blue-700 border-blue-100', category: 'academic' },
    { id: 'top-5', label: 'Data & Technology', count: '22 classes', icon: '💻', iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-100', category: 'professional' },
    { id: 'top-6', label: 'Personal Development', count: '20 classes', icon: '🌿', iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100', category: 'personal' },
    { id: 'top-7', label: 'Kids & Family', count: '18 classes', icon: '👶', iconBg: 'bg-amber-50 text-amber-700 border-amber-100', category: 'kids' },
    { id: 'top-8', label: 'Business & Finance', count: '16 classes', icon: '💼', iconBg: 'bg-rose-50 text-rose-700 border-rose-100', category: 'professional' },
  ];

  const topTeachersList = [
    { id: 'tch-1', name: 'Ustadz Ahmad Fauzi', rating: 4.9, reviews: 328, students: '2.1K', avatar: '/images/tutor_ahmed.jpg' },
    { id: 'tch-2', name: 'Ustadzah Fatimah Zahra', rating: 4.8, reviews: 214, students: '1.6K', avatar: '/images/student_fatimah.jpg' },
    { id: 'tch-3', name: 'Ustadz Omar Hassan', rating: 4.7, reviews: 186, students: '980', avatar: '/images/student_ali.jpg' },
  ];

  // Schedule Datasets (Matching media_1790727369755.jpg)
  const scheduleDays = [
    { dayNumber: 20, dayName: 'Sun', fullDate: 'Sunday, 20 Sep' },
    { dayNumber: 21, dayName: 'Mon', fullDate: 'Monday, 21 Sep' },
    { dayNumber: 22, dayName: 'Tue', fullDate: 'Tuesday, 22 Sep' },
    { dayNumber: 23, dayName: 'Wed', fullDate: 'Wednesday, 23 Sep', isToday: true },
    { dayNumber: 24, dayName: 'Thu', fullDate: 'Thursday, 24 Sep' },
    { dayNumber: 25, dayName: 'Fri', fullDate: 'Friday, 25 Sep' },
    { dayNumber: 26, dayName: 'Sat', fullDate: 'Saturday, 26 Sep' },
  ];

  const scheduleHours = [
    { hour: 8, label: '8:00 AM' },
    { hour: 9, label: '9:00 AM' },
    { hour: 10, label: '10:00 AM' },
    { hour: 11, label: '11:00 AM' },
    { hour: 12, label: '12:00 PM' },
    { hour: 13, label: '1:00 PM' },
    { hour: 14, label: '2:00 PM' },
    { hour: 15, label: '3:00 PM' },
    { hour: 16, label: '4:00 PM' },
    { hour: 17, label: '5:00 PM' },
  ];

  const scheduleWeeklyEvents = [
    {
      id: 'sch-1',
      dayNumber: 21,
      dayName: 'Mon',
      title: 'Nahwu for Beginners',
      time: '10:00 AM - 11:30 AM',
      startHour: 10,
      durationHours: 1.5,
      room: 'Room A',
      instructor: 'Ust. Ahmad Fauzi',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      themeClass: 'bg-emerald-50/90 border-l-4 border-emerald-500 text-emerald-950 hover:bg-emerald-100/90 shadow-2xs'
    },
    {
      id: 'sch-2',
      dayNumber: 21,
      dayName: 'Mon',
      title: 'Sharaf Basic',
      time: '02:00 PM - 03:30 PM',
      startHour: 14,
      durationHours: 1.5,
      room: 'Room B',
      instructor: 'Ustzh. Fatimah',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-purple-100 text-purple-800 border-purple-300',
      themeClass: 'bg-purple-50/90 border-l-4 border-purple-500 text-purple-950 hover:bg-purple-100/90 shadow-2xs'
    },
    {
      id: 'sch-3',
      dayNumber: 22,
      dayName: 'Tue',
      title: 'Islamic History',
      time: '09:00 AM - 10:30 AM',
      startHour: 9,
      durationHours: 1.5,
      room: 'Online Portal',
      instructor: 'Ust. Ali Khan',
      type: 'Recorded',
      badge: 'Recorded',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      themeClass: 'bg-amber-50/90 border-l-4 border-amber-500 text-amber-950 hover:bg-amber-100/90 shadow-2xs'
    },
    {
      id: 'sch-4',
      dayNumber: 22,
      dayName: 'Tue',
      title: 'Quran Tajweed',
      time: '01:00 PM - 02:30 PM',
      startHour: 13,
      durationHours: 1.5,
      room: 'Room A',
      instructor: 'Ustzh. Fatimah',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-teal-100 text-teal-800 border-teal-300',
      themeClass: 'bg-teal-50/90 border-l-4 border-teal-500 text-teal-950 hover:bg-teal-100/90 shadow-2xs'
    },
    {
      id: 'sch-5',
      dayNumber: 23,
      dayName: 'Wed',
      title: 'Nahwu for Beginners',
      time: '10:00 AM - 11:30 AM',
      startHour: 10,
      durationHours: 1.5,
      room: 'Room A',
      instructor: 'Ust. Ahmad Fauzi',
      type: 'Live Class',
      badge: 'Live Now',
      badgeClass: 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse font-extrabold',
      themeClass: 'bg-emerald-100/95 border-l-4 border-[#114B44] text-emerald-950 shadow-sm ring-1 ring-emerald-300/80',
      isLiveNow: true
    },
    {
      id: 'sch-6',
      dayNumber: 23,
      dayName: 'Wed',
      title: 'Arabic Conversation',
      time: '03:00 PM - 04:30 PM',
      startHour: 15,
      durationHours: 1.5,
      room: 'Room C',
      instructor: 'Ust. Omar Hassan',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-sky-100 text-sky-800 border-sky-300',
      themeClass: 'bg-sky-50/90 border-l-4 border-sky-500 text-sky-950 hover:bg-sky-100/90 shadow-2xs'
    },
    {
      id: 'sch-7',
      dayNumber: 24,
      dayName: 'Thu',
      title: 'Academic Writing',
      time: '11:00 AM - 12:30 PM',
      startHour: 11,
      durationHours: 1.5,
      room: 'Online Portal',
      instructor: 'Dr. Layla Ahmad',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-300',
      themeClass: 'bg-blue-50/90 border-l-4 border-blue-500 text-blue-950 hover:bg-blue-100/90 shadow-2xs'
    },
    {
      id: 'sch-8',
      dayNumber: 25,
      dayName: 'Fri',
      title: 'Fiqh Ibadah',
      time: '09:00 AM - 10:30 AM',
      startHour: 9,
      durationHours: 1.5,
      room: 'Room B',
      instructor: 'Ust. Ahmad Fauzi',
      type: 'Live Class',
      badge: 'Live',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
      themeClass: 'bg-rose-50/90 border-l-4 border-rose-500 text-rose-950 hover:bg-rose-100/90 shadow-2xs'
    }
  ];

  const scheduleUpcomingClasses = [
    {
      id: 'sch-up-1',
      title: 'Nahwu for Beginners',
      instructor: 'Ustadz Ahmad Fauzi',
      avatar: '/images/tutor_ahmed.jpg',
      date: 'Wednesday, 23 Sep',
      time: '10:00 AM - 11:30 AM',
      room: 'Room A (Interactive Talaqqi)',
      tag: 'Live Today',
      tagClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      isJoinable: true,
      category: 'Arabic Grammar'
    },
    {
      id: 'sch-up-2',
      title: 'Arabic Conversation',
      instructor: 'Ustadz Omar Hassan',
      avatar: '/images/student_ali.jpg',
      date: 'Wednesday, 23 Sep',
      time: '03:00 PM - 04:30 PM',
      room: 'Room C (Speaking Lab)',
      tag: 'Live Today',
      tagClass: 'bg-sky-50 text-sky-700 border-sky-200',
      isJoinable: false,
      category: 'Language'
    },
    {
      id: 'sch-up-3',
      title: 'Academic Writing & Research',
      instructor: 'Dr. Layla Ahmad',
      avatar: '/images/student_layla.jpg',
      date: 'Thursday, 24 Sep',
      time: '11:00 AM - 12:30 PM',
      room: 'Online Portal',
      tag: 'Live Session',
      tagClass: 'bg-blue-50 text-blue-700 border-blue-200',
      isJoinable: false,
      category: 'Academic'
    },
    {
      id: 'sch-up-4',
      title: 'Islamic History & Civilizations',
      instructor: 'Ustadz Ali Khan',
      avatar: '/images/student_fatimah.jpg',
      date: 'Friday, 25 Sep',
      time: '09:00 AM - 10:30 AM',
      room: 'Room B',
      tag: 'Recorded & Q&A',
      tagClass: 'bg-purple-50 text-purple-700 border-purple-200',
      isJoinable: false,
      category: 'History'
    }
  ];

  const scheduleTodayList = [
    {
      id: 'td-1',
      title: 'Nahwu for Beginners',
      time: '10:00 - 11:30 AM',
      instructor: 'Ust. Ahmad Fauzi',
      room: 'Room A',
      status: 'Live Now',
      isLive: true,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'td-2',
      title: 'Arabic Conversation',
      time: '03:00 - 04:30 PM',
      instructor: 'Ust. Omar Hassan',
      room: 'Room C',
      status: 'Upcoming',
      isLive: false,
      color: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'td-3',
      title: 'Fiqh Reading Task',
      time: '08:00 PM',
      instructor: 'Self-Study Review',
      room: 'Chapter 4',
      status: 'Reminder',
      isLive: false,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  const scheduleDeadlinesList = [
    {
      id: 'dl-1',
      title: "Assignment 3: Nahwu I'rab Exercise",
      due: 'Tomorrow, 11:59 PM',
      course: 'Nahwu for Beginners',
      icon: '⏰',
      tag: 'High Priority',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      id: 'dl-2',
      title: 'Quiz: Sharaf Chapter 2 Tashrif',
      due: '26 Sep, 5:00 PM',
      course: 'Sharaf Basic',
      icon: '📝',
      tag: 'Upcoming',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'dl-3',
      title: 'Mid-term Tajweed Talaqqi Recording',
      due: '28 Sep, 10:00 AM',
      course: 'Quran Tajweed Mastery',
      icon: '🎙️',
      tag: 'Recorded Submissions',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];

  // Assignments Datasets (Matching media_1790728280277.jpg)
  const studentAssignmentsList = [
    {
      id: 'asg-1',
      title: "Bab 2: Isim Ma'rifah - Exercise",
      course: 'Nahwu for Beginners',
      instructor: 'Ustadz Ahmad Fauzi',
      type: 'Written Assignment',
      typeIcon: '📄',
      typeColor: 'bg-blue-50 text-blue-700 border-blue-100',
      dueDate: '25 Sep 2026, 11:59 PM',
      dueDaysLeft: '2 days left',
      status: 'todo',
      statusBadge: 'Due Soon',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-200',
      countdownColor: 'text-rose-600',
      image: '/images/class_nahwu.jpg',
      actionType: 'submit',
      actionLabel: 'Submit Assignment'
    },
    {
      id: 'asg-2',
      title: 'Conversation Practice Recording',
      course: 'Arabic Conversation',
      instructor: 'Ustadz Omar Hassan',
      type: 'Audio Submission',
      typeIcon: '🎙️',
      typeColor: 'bg-sky-50 text-sky-700 border-sky-100',
      dueDate: '26 Sep 2026, 11:59 PM',
      dueDaysLeft: '3 days left',
      status: 'in_progress',
      statusBadge: 'In Progress',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-200',
      countdownColor: 'text-gray-500',
      image: '/images/class_conversation.jpg',
      actionType: 'continue',
      actionLabel: 'Continue'
    },
    {
      id: 'asg-3',
      title: 'Essay: My Learning Journey',
      course: 'Academic Writing',
      instructor: 'Dr. Layla Ahmad',
      type: 'Essay',
      typeIcon: '📝',
      typeColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      dueDate: '28 Sep 2026, 11:59 PM',
      dueDaysLeft: '5 days left',
      status: 'todo',
      statusBadge: 'To Do',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-200',
      countdownColor: 'text-rose-600',
      image: '/images/login_lms_desk_bg.jpg',
      actionType: 'start',
      actionLabel: 'Start Assignment'
    },
    {
      id: 'asg-4',
      title: 'Islamic History Quiz Review',
      course: 'Islamic History',
      instructor: 'Ustadz Ali Khan',
      type: 'Research & Summary',
      typeIcon: '📄',
      typeColor: 'bg-amber-50 text-amber-700 border-amber-100',
      dueDate: '29 Sep 2026, 11:59 PM',
      dueDaysLeft: '6 days left',
      status: 'todo',
      statusBadge: 'To Do',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-200',
      countdownColor: 'text-rose-600',
      image: '/images/class_nahwu.jpg',
      actionType: 'start',
      actionLabel: 'Start Assignment'
    },
    {
      id: 'asg-5',
      title: 'Case Study: Environmental Issues',
      course: 'Environmental Management',
      instructor: 'Dr. Sara Nabilah',
      type: 'Group Assignment',
      typeIcon: '👥',
      typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      dueDate: '1 Oct 2026, 11:59 PM',
      dueDaysLeft: '8 days left',
      status: 'not_started',
      statusBadge: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
      countdownColor: 'text-gray-500',
      image: '/images/class_conversation.jpg',
      actionType: 'view',
      actionLabel: 'View Details'
    },
    {
      id: 'asg-6',
      title: 'Final Project Proposal',
      course: 'Data Analysis',
      instructor: 'Mr. Ali Rahman',
      type: 'Project',
      typeIcon: '📊',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-100',
      dueDate: '5 Oct 2026, 11:59 PM',
      dueDaysLeft: '12 days left',
      status: 'not_started',
      statusBadge: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
      countdownColor: 'text-gray-500',
      image: '/images/login_lms_desk_bg.jpg',
      actionType: 'view',
      actionLabel: 'View Details'
    }
  ];

  const assignmentUpcomingDeadlinesList = [
    {
      id: 'asg-dl-1',
      month: 'SEP',
      day: '25',
      title: "Bab 2: Isim Ma'rifah - Exercise",
      course: 'Nahwu for Beginners',
      daysLeft: '2 days left'
    },
    {
      id: 'asg-dl-2',
      month: 'SEP',
      day: '26',
      title: 'Conversation Practice Recording',
      course: 'Arabic Conversation',
      daysLeft: '3 days left'
    },
    {
      id: 'asg-dl-3',
      month: 'SEP',
      day: '28',
      title: 'Essay: My Learning Journey',
      course: 'Academic Writing',
      daysLeft: '5 days left'
    },
    {
      id: 'asg-dl-4',
      month: 'SEP',
      day: '29',
      title: 'Islamic History Quiz Review',
      course: 'Islamic History',
      daysLeft: '6 days left'
    },
    {
      id: 'asg-dl-5',
      month: 'OCT',
      day: '01',
      title: 'Case Study: Environmental Issues',
      course: 'Environmental Management',
      daysLeft: '8 days left'
    }
  ];

  const assignmentRecentSubmissionsList = [
    {
      id: 'asg-sub-1',
      title: 'Quiz 1: Basic Grammar',
      course: 'Nahwu for Beginners',
      date: '20 Sep 2026',
      grade: '95',
      icon: '📄',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'asg-sub-2',
      title: 'Vocabulary Practice',
      course: 'Arabic Conversation',
      date: '18 Sep 2026',
      grade: '88',
      icon: '📹',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      id: 'asg-sub-3',
      title: 'Introduction Essay',
      course: 'Academic Writing',
      date: '15 Sep 2026',
      grade: '92',
      icon: '🎙️',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  // Quizzes Datasets (Matching media_1790728429009.jpg)
  const studentQuizzesList = [
    {
      id: 'qz-1',
      title: 'Quiz 1: Introduction to Islam',
      course: 'Nahwu for Beginners',
      instructor: 'Ustadz Ahmad Fauzi',
      questionsCount: 10,
      duration: '20 minutes',
      format: 'Multiple Choice',
      dueDate: '25 Sep 2026, 11:59 PM',
      status: 'not_started',
      statusBadge: 'Due Soon',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-200',
      dueDateColor: 'text-rose-600',
      image: '/images/class_nahwu.jpg',
      actionType: 'start',
      actionLabel: 'Start Quiz',
      isPrimaryAction: true
    },
    {
      id: 'qz-2',
      title: 'Quiz 2: Arabic Vocabulary',
      course: 'Arabic Conversation',
      instructor: 'Ustadz Omar Hassan',
      questionsCount: 15,
      duration: '30 minutes',
      format: 'Multiple Choice',
      dueDate: '26 Sep 2026, 11:59 PM',
      status: 'in_progress',
      statusBadge: 'In Progress',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-200',
      dueDateColor: 'text-gray-500',
      image: '/images/class_conversation.jpg',
      actionType: 'continue',
      actionLabel: 'Continue',
      isPrimaryAction: false
    },
    {
      id: 'qz-3',
      title: 'Quiz 3: Academic Writing Basics',
      course: 'Academic Writing',
      instructor: 'Dr. Layla Ahmad',
      questionsCount: 12,
      duration: '25 minutes',
      format: 'Multiple Choice',
      dueDate: '28 Sep 2026, 11:59 PM',
      status: 'not_started',
      statusBadge: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
      dueDateColor: 'text-gray-500',
      image: '/images/login_lms_desk_bg.jpg',
      actionType: 'start',
      actionLabel: 'Start Quiz',
      isPrimaryAction: false
    },
    {
      id: 'qz-4',
      title: 'Quiz 4: Islamic History',
      course: 'Islamic History',
      instructor: 'Ustadz Ali Khan',
      questionsCount: 20,
      duration: '30 minutes',
      format: 'Multiple Choice',
      dueDate: '29 Sep 2026, 11:59 PM',
      status: 'not_started',
      statusBadge: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
      dueDateColor: 'text-gray-500',
      image: '/images/class_nahwu.jpg',
      actionType: 'start',
      actionLabel: 'Start Quiz',
      isPrimaryAction: false
    },
    {
      id: 'qz-5',
      title: 'Quiz 5: Environmental Issues',
      course: 'Environmental Management',
      instructor: 'Dr. Sara Nabilah',
      questionsCount: 15,
      duration: '30 minutes',
      format: 'Multiple Choice',
      dueDate: '1 Oct 2026, 11:59 PM',
      status: 'not_started',
      statusBadge: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
      dueDateColor: 'text-gray-500',
      image: '/images/class_conversation.jpg',
      actionType: 'start',
      actionLabel: 'Start Quiz',
      isPrimaryAction: false
    },
    {
      id: 'qz-6',
      title: 'Quiz 6: Data Analysis Basics',
      course: 'Data Analysis',
      instructor: 'Mr. Ali Rahman',
      questionsCount: 20,
      duration: '40 minutes',
      format: 'Multiple Choice',
      dueDate: '15 Sep 2026, 10:20 AM',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dueDateColor: 'text-gray-500',
      image: '/images/login_lms_desk_bg.jpg',
      actionType: 'review',
      actionLabel: 'Review Quiz',
      isPrimaryAction: false
    }
  ];

  const upcomingQuizzesList = [
    {
      id: 'uq-1',
      month: 'SEP',
      day: '25',
      title: 'Quiz 1: Introduction to Islam',
      course: 'Nahwu for Beginners',
      statusTag: '⏰ Due Soon',
      tagColor: 'text-rose-600'
    },
    {
      id: 'uq-2',
      month: 'SEP',
      day: '26',
      title: 'Quiz 2: Arabic Vocabulary',
      course: 'Arabic Conversation',
      statusTag: '⏳ In Progress',
      tagColor: 'text-amber-600'
    },
    {
      id: 'uq-3',
      month: 'SEP',
      day: '28',
      title: 'Quiz 3: Academic Writing Basics',
      course: 'Academic Writing',
      statusTag: '⚪ Not Started',
      tagColor: 'text-gray-400'
    },
    {
      id: 'uq-4',
      month: 'SEP',
      day: '29',
      title: 'Quiz 4: Islamic History',
      course: 'Islamic History',
      statusTag: '⚪ Not Started',
      tagColor: 'text-gray-400'
    },
    {
      id: 'uq-5',
      month: 'OCT',
      day: '01',
      title: 'Quiz 5: Environmental Issues',
      course: 'Environmental Management',
      statusTag: '⚪ Not Started',
      tagColor: 'text-gray-400'
    }
  ];

  const recentQuizResultsList = [
    {
      id: 'qr-1',
      title: 'Quiz 6: Data Analysis Basics',
      date: '15 Sep 2026',
      score: '95',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'qr-2',
      title: 'Quiz 5: Grammar Review',
      date: '10 Sep 2026',
      score: '88',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'qr-3',
      title: 'Quiz 4: Islamic History',
      date: '5 Sep 2026',
      score: '92',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  // Certificates Datasets (Matching media_1790728589304.jpg)
  const studentCertificatesList = [
    {
      id: 'cert-1',
      title: 'Nahwu for Beginners',
      course: 'Nahwu for Beginners',
      instructor: 'Ustadz Ahmad Fauzi',
      completionDate: '25 September 2026',
      shortDate: '25 Sep 2026',
      credentialId: 'ILMHUB-2026-NB-00123',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-emerald-700',
      accentColor: '#114B44',
      bgTheme: 'from-emerald-50/40 via-amber-50/20 to-teal-50/40',
      borderPattern: 'emerald',
      grade: '95/100 (Distinction)'
    },
    {
      id: 'cert-2',
      title: 'Arabic Conversation',
      course: 'Arabic Conversation',
      instructor: 'Ustadz Omar Hassan',
      completionDate: '26 September 2026',
      shortDate: '26 Sep 2026',
      credentialId: 'ILMHUB-2026-AC-00452',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-amber-700',
      accentColor: '#D97706',
      bgTheme: 'from-amber-50/40 via-orange-50/20 to-yellow-50/40',
      borderPattern: 'amber',
      grade: '88/100 (Pass with Merit)'
    },
    {
      id: 'cert-3',
      title: 'Academic Writing',
      course: 'Academic Writing',
      instructor: 'Dr. Layla Ahmad',
      completionDate: '28 September 2026',
      shortDate: '28 Sep 2026',
      credentialId: 'ILMHUB-2026-AW-00891',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-yellow-800',
      accentColor: '#B45309',
      bgTheme: 'from-yellow-50/40 via-amber-50/20 to-stone-50/40',
      borderPattern: 'gold',
      grade: '92/100 (Distinction)'
    },
    {
      id: 'cert-4',
      title: 'Islamic History',
      course: 'Islamic History',
      instructor: 'Ustadz Ali Khan',
      completionDate: '25 September 2026',
      shortDate: '29 Sep 2026',
      credentialId: 'ILMHUB-2026-IH-00340',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-sky-800',
      accentColor: '#0369A1',
      bgTheme: 'from-sky-50/40 via-blue-50/20 to-cyan-50/40',
      borderPattern: 'sky',
      grade: '100/100 (High Distinction)'
    },
    {
      id: 'cert-5',
      title: 'Environmental Management',
      course: 'Environmental Management',
      instructor: 'Dr. Sara Nabilah',
      completionDate: '20 September 2026',
      shortDate: '1 Oct 2026',
      credentialId: 'ILMHUB-2026-EM-00712',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-emerald-800',
      accentColor: '#059669',
      bgTheme: 'from-emerald-50/40 via-teal-50/20 to-green-50/40',
      borderPattern: 'forest',
      grade: '90/100 (Distinction)'
    },
    {
      id: 'cert-6',
      title: 'Data Analysis Basics',
      course: 'Data Analysis',
      instructor: 'Mr. Ali Rahman',
      completionDate: '25 September 2026',
      shortDate: '5 Oct 2026',
      credentialId: 'ILMHUB-2026-DA-00994',
      certificateType: 'Course Completion',
      status: 'completed',
      statusBadge: '✓ Completed',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeBorder: 'border-indigo-900',
      accentColor: '#1E1B4B',
      bgTheme: 'from-indigo-50/40 via-blue-50/20 to-slate-50/40',
      borderPattern: 'navy',
      grade: '94/100 (Distinction)'
    }
  ];

  // Messages Datasets (Matching media_1790728623094.jpg)
  const studentConversationsList = [
    {
      id: 'conv-1',
      name: 'Ustadz Ahmad Fauzi',
      type: 'teacher',
      role: 'Instructor',
      course: 'Nahwu for Beginners',
      avatar: '/images/tutor_ahmed.jpg',
      isOnline: true,
      lastMessage: 'Baik, untuk tugas minggu ini silakan...',
      time: '10:24 AM',
      unreadCount: 2,
      isGroup: false,
      messages: [
        {
          id: 'm1',
          sender: 'them',
          senderName: 'Ustadz Ahmad Fauzi',
          text: 'Assalamualaikum Aisha,\nBagaimana progres belajar Nahwu minggu ini?\nApakah ada bagian yang masih membingungkan?',
          time: '10:12 AM'
        },
        {
          id: 'm2',
          sender: 'me',
          senderName: 'Aisha Rahman',
          text: "Waalaikumsalam Ustadz,\nAlhamdulillah sejauh ini baik. Saya masih sedikit bingung pada bagian Isim Ma'rifah, terutama perbedaannya dengan Isim Nakirah.",
          time: '10:18 AM',
          status: 'read'
        },
        {
          id: 'm3',
          sender: 'them',
          senderName: 'Ustadz Ahmad Fauzi',
          text: 'Baik, untuk tugas minggu ini silakan kerjakan latihan soal Bab 2 yang sudah saya kirim di kelas. Jika masih ada pertanyaan, boleh langsung ditanyakan di sini atau saat live class besok.',
          time: '10:24 AM',
          attachment: {
            name: 'Latihan_Bab2_Isim_Marifah.pdf',
            size: '1.2 MB',
            type: 'PDF'
          }
        },
        {
          id: 'm4',
          sender: 'me',
          senderName: 'Aisha Rahman',
          text: 'Baik Ustadz, terima kasih banyak 🙏',
          time: '10:26 AM',
          status: 'read'
        }
      ],
      sharedFiles: [
        { name: 'Latihan_Bab2_Isim_Marifah.pdf', size: '1.2 MB', date: '10:24 AM', type: 'pdf' },
        { name: 'Rangkuman_Materi_Bab1.docx', size: '850 KB', date: '18 Sep 2026', type: 'docx' },
        { name: 'Panduan_Belajar_Nahwu.pdf', size: '2.1 MB', date: '12 Sep 2026', type: 'pdf' }
      ]
    },
    {
      id: 'conv-2',
      name: 'Arabic Conversation (Class)',
      type: 'group',
      role: 'Class Group',
      course: 'Arabic Conversation',
      avatar: '/images/class_conversation.jpg',
      isOnline: true,
      lastMessage: 'Omar: Assalamualaikum, apakah...',
      time: '9:18 AM',
      unreadCount: 5,
      isGroup: true,
      messages: [
        {
          id: 'm2-1',
          sender: 'them',
          senderName: 'Omar Hassan',
          text: 'Assalamualaikum rekan-rekan, apakah ada yang mau latihan muhadatsah sore ini?',
          time: '9:15 AM'
        },
        {
          id: 'm2-2',
          sender: 'them',
          senderName: 'Fatimah Zahra',
          text: 'Waalaikumsalam, saya bisa jam 4 sore!',
          time: '9:18 AM'
        }
      ],
      sharedFiles: [
        { name: 'Audio_Muhadatsah_Bab1.mp3', size: '4.5 MB', date: 'Yesterday', type: 'audio' }
      ]
    },
    {
      id: 'conv-3',
      name: 'Dr. Layla Ahmad',
      type: 'teacher',
      role: 'Instructor',
      course: 'Academic Writing',
      avatar: '/images/student_layla.jpg',
      isOnline: false,
      lastMessage: 'Terima kasih, saya sudah periksa esai...',
      time: 'Yesterday',
      unreadDot: true,
      isGroup: false,
      messages: [
        {
          id: 'm3-1',
          sender: 'them',
          senderName: 'Dr. Layla Ahmad',
          text: 'Terima kasih, saya sudah periksa draf esai Anda. Struktur argumennya sudah sangat baik!',
          time: 'Yesterday, 4:30 PM'
        }
      ],
      sharedFiles: [
        { name: 'Feedback_Essay_Draft.docx', size: '1.1 MB', date: 'Yesterday', type: 'docx' }
      ]
    },
    {
      id: 'conv-4',
      name: 'Ustadz Ali Khan',
      type: 'teacher',
      role: 'Instructor',
      course: 'Islamic History',
      avatar: '/images/student_ali.jpg',
      isOnline: false,
      lastMessage: 'Jazakumullah, sampai jumpa di kelas...',
      time: 'Yesterday',
      isGroup: false,
      messages: [
        {
          id: 'm4-1',
          sender: 'them',
          senderName: 'Ustadz Ali Khan',
          text: 'Jazakumullah khair Aisha, sampai jumpa di sesi tanya jawab sejarah Islam besok.',
          time: 'Yesterday, 2:10 PM'
        }
      ],
      sharedFiles: []
    },
    {
      id: 'conv-5',
      name: 'Study Group - Beginners',
      type: 'group',
      role: 'Study Group',
      course: 'General Studies',
      avatar: '/images/student_fatimah.jpg',
      isOnline: true,
      lastMessage: 'Fatimah: Siap, kita ketemu jam 9 ya',
      time: 'Mon',
      unreadCount: 3,
      isGroup: true,
      messages: [
        {
          id: 'm5-1',
          sender: 'them',
          senderName: 'Fatimah',
          text: 'Siap, kita ketemu jam 9 ya di ruang belajar kelompok!',
          time: 'Mon, 8:45 AM'
        }
      ],
      sharedFiles: []
    },
    {
      id: 'conv-6',
      name: 'Omar Hassan',
      type: 'teacher',
      role: 'Instructor',
      course: 'Arabic Conversation',
      avatar: '/images/student_ali.jpg',
      isOnline: true,
      lastMessage: 'File rangkuman materi sudah saya...',
      time: 'Mon',
      isGroup: false,
      messages: [
        {
          id: 'm6-1',
          sender: 'them',
          senderName: 'Omar Hassan',
          text: 'File rangkuman materi sudah saya upload di portal, silakan diunduh.',
          time: 'Mon, 11:20 AM'
        }
      ],
      sharedFiles: []
    },
    {
      id: 'conv-7',
      name: 'Sara Nabilah',
      type: 'teacher',
      role: 'Instructor',
      course: 'Environmental Management',
      avatar: '/images/student_fatimah.jpg',
      isOnline: false,
      lastMessage: 'Baik, terima kasih informasinya 🙏',
      time: 'Sun',
      isGroup: false,
      messages: [
        {
          id: 'm7-1',
          sender: 'them',
          senderName: 'Sara Nabilah',
          text: 'Baik, terima kasih informasinya 🙏 Sampai jumpa di kelas berikutnya.',
          time: 'Sun, 3:15 PM'
        }
      ],
      sharedFiles: []
    },
    {
      id: 'conv-8',
      name: 'General Discussion',
      type: 'group',
      role: 'Discussion Forum',
      course: 'Community',
      avatar: '/images/class_nahwu.jpg',
      isOnline: true,
      lastMessage: 'Ali: Pertanyaannya bagus sekali 👍',
      time: 'Sun',
      isGroup: true,
      messages: [
        {
          id: 'm8-1',
          sender: 'them',
          senderName: 'Ali',
          text: 'Pertanyaannya bagus sekali 👍 Membantu kita semua memahami bab ini.',
          time: 'Sun, 1:40 PM'
        }
      ],
      sharedFiles: []
    }
  ];

  // Earnings Datasets (Matching media_1790728958033.jpg)
  const earningsDailyChart = [
    { day: '1', date: 'Sep 1', amount: 2.5, heightPct: 15 },
    { day: '2', date: 'Sep 2', amount: 3.0, heightPct: 18 },
    { day: '3', date: 'Sep 3', amount: 1.5, heightPct: 10 },
    { day: '4', date: 'Sep 4', amount: 2.0, heightPct: 14 },
    { day: '5', date: 'Sep 5', amount: 12.0, heightPct: 52 },
    { day: '6', date: 'Sep 6', amount: 8.5, heightPct: 38 },
    { day: '7', date: 'Sep 7', amount: 6.0, heightPct: 28 },
    { day: '8', date: 'Sep 8', amount: 3.5, heightPct: 18 },
    { day: '9', date: 'Sep 9', amount: 2.0, heightPct: 12 },
    { day: '10', date: 'Sep 10', amount: 3.0, heightPct: 16 },
    { day: '11', date: 'Sep 11', amount: 14.5, heightPct: 62 },
    { day: '12', date: 'Sep 12', amount: 4.0, heightPct: 20 },
    { day: '13', date: 'Sep 13', amount: 2.5, heightPct: 14 },
    { day: '14', date: 'Sep 14', amount: 7.5, heightPct: 34 },
    { day: '15', date: 'Sep 15', amount: 6.0, heightPct: 28 },
    { day: '16', date: 'Sep 16', amount: 8.0, heightPct: 36 },
    { day: '17', date: 'Sep 17', amount: 5.5, heightPct: 26 },
    { day: '18', date: 'Sep 18', amount: 9.0, heightPct: 40 },
    { day: '19', date: 'Sep 19', amount: 3.5, heightPct: 18 },
    { day: '20', date: 'Sep 20', amount: 12.0, heightPct: 50 },
    { day: '21', date: 'Sep 21', amount: 6.5, heightPct: 30 },
    { day: '22', date: 'Sep 22', amount: 10.0, heightPct: 44 },
    { day: '23', date: 'Sep 23', amount: 9.0, heightPct: 40 },
    { day: '24', date: 'Sep 24', amount: 24.5, heightPct: 95, isPeak: true },
    { day: '25', date: 'Sep 25', amount: 14.0, heightPct: 60 },
    { day: '26', date: 'Sep 26', amount: 9.5, heightPct: 42 },
    { day: '27', date: 'Sep 27', amount: 4.0, heightPct: 20 },
    { day: '28', date: 'Sep 28', amount: 7.5, heightPct: 34 },
    { day: '29', date: 'Sep 29', amount: 12.0, heightPct: 50 },
    { day: '30', date: 'Sep 30', amount: 8.0, heightPct: 36 }
  ];

  const earningsActivitiesList = [
    {
      id: 'act-1',
      title: 'Classes',
      amount: '$52.00',
      pct: 60,
      icon: GraduationCap,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      barColor: 'bg-[#114B44]'
    },
    {
      id: 'act-2',
      title: 'Quizzes',
      amount: '$18.50',
      pct: 21,
      icon: FileText,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      barColor: 'bg-blue-600'
    },
    {
      id: 'act-3',
      title: 'Assignments',
      amount: '$16.00',
      pct: 19,
      icon: Award,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      barColor: 'bg-amber-600'
    },
    {
      id: 'act-4',
      title: 'Achievements',
      amount: '$0.00',
      pct: 0,
      icon: Trophy,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
      barColor: 'bg-purple-600'
    }
  ];

  const recentEarningsList = [
    {
      id: 're-1',
      date: '25 Sep 2026',
      activity: 'Quiz Completed',
      activityIcon: '📄',
      activityIconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      class: 'Islamic History',
      amount: '+$2.50',
      status: 'Completed'
    },
    {
      id: 're-2',
      date: '22 Sep 2026',
      activity: 'Assignment',
      activityIcon: '📄',
      activityIconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      class: 'Academic Writing',
      amount: '+$4.00',
      status: 'Completed'
    },
    {
      id: 're-3',
      date: '20 Sep 2026',
      activity: 'Class Completed',
      activityIcon: '🎓',
      activityIconBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      class: 'Arabic Conversation',
      amount: '+$12.00',
      status: 'Completed'
    },
    {
      id: 're-4',
      date: '18 Sep 2026',
      activity: 'Quiz Completed',
      activityIcon: '📄',
      activityIconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      class: 'Environmental Management',
      amount: '+$2.00',
      status: 'Completed'
    },
    {
      id: 're-5',
      date: '15 Sep 2026',
      activity: 'Assignment',
      activityIcon: '📄',
      activityIconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      class: 'Nahwu for Beginners',
      amount: '+$3.50',
      status: 'Completed'
    }
  ];

  const paymentMethodsList = [
    {
      id: 'pm-1',
      name: 'PayPal',
      account: 'aisha.rahman@example.com',
      isPrimary: true,
      iconType: 'paypal',
      iconColor: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'pm-2',
      name: 'Bank Transfer',
      account: '•••• 1234',
      isPrimary: false,
      iconType: 'bank',
      iconColor: 'bg-slate-50 text-slate-700 border-slate-200'
    },
    {
      id: 'pm-3',
      name: 'Wise',
      account: 'aisha.rahman@wise.com',
      isPrimary: false,
      iconType: 'wise',
      iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  const topEarningClassesList = [
    {
      id: 'tec-1',
      title: 'Arabic Conversation',
      rewards: '3 rewards',
      amount: '$24.00',
      image: '/images/class_conversation.jpg'
    },
    {
      id: 'tec-2',
      title: 'Academic Writing',
      rewards: '2 rewards',
      amount: '$16.00',
      image: '/images/login_lms_desk_bg.jpg'
    },
    {
      id: 'tec-3',
      title: 'Nahwu for Beginners',
      rewards: '2 rewards',
      amount: '$12.00',
      image: '/images/class_nahwu.jpg'
    },
    {
      id: 'tec-4',
      title: 'Islamic History',
      rewards: '1 reward',
      amount: '$8.50',
      image: '/images/class_nahwu.jpg'
    }
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] font-sans text-gray-800 antialiased selection:bg-[#114B44] selection:text-white overflow-hidden">
      
      {/* TOP HEADER BAR (Matching media_1790725449767.jpg) */}
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

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search classes, teachers, or materials..."
              className="w-full bg-[#F8FAFC] border border-gray-200/90 rounded-full pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Right Header Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Notification Bell with red badge 3 */}
          <button 
            onClick={() => alert('Notifikasi Siswa: Anda memiliki 3 pengingat kelas!')}
            className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
              3
            </span>
          </button>

          {/* Chat Icon */}
          <button 
            onClick={() => setActiveNav('messages')}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <button 
            onClick={() => alert('Bahasa: العربية / English')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span>العربية</span>
          </button>

          {/* User Profile Capsule on Top Right with Interactive Role Switcher & Logout */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-2 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shadow-2xs shrink-0">
                <img 
                  src={studentAvatar} 
                  alt={studentName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/student_aisha.jpg';
                  }}
                />
              </div>
              <div className="hidden sm:block text-left">
                <span className="block text-xs font-extrabold text-gray-900 leading-tight">{studentName}</span>
                <span className="block text-[10px] text-emerald-700 font-bold uppercase tracking-wider -mt-0.5">Student</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown Popup */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 text-xs animate-fadeIn">
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl mb-2 flex items-center gap-2.5 border border-emerald-100">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-emerald-100 border border-emerald-300 shrink-0">
                    <img
                      src={studentAvatar}
                      alt={studentName}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-extrabold text-xs text-gray-900 truncate">{studentName}</h4>
                    <p className="text-[10px] text-gray-500 truncate">{studentEmail}</p>
                    <span className="inline-block mt-0.5 text-[9px] font-black px-2 py-0.2 bg-emerald-100 text-[#114B44] rounded-full">
                      🎓 Student Account
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Switch to Teacher Dashboard */}
                  {onSwitchRole && (
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onSwitchRole('teacher');
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] font-bold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">Switch to Teacher Mode</span>
                    </button>
                  )}

                  {/* Back to IlmHub Portal */}
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      onBackToHome();
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-gray-50 text-gray-700 font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">Back to Public Site</span>
                  </button>

                  <div className="my-1 border-t border-gray-100"></div>

                  {/* Logout */}
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

      {/* MAIN DASHBOARD LAYOUT: Locked Left Sidebar + Scrollable Canvas */}
      <div className="flex-1 flex overflow-hidden max-w-[1600px] w-full mx-auto">
        
        {/* FIXED LOCKED LEFT SIDEBAR (Matching media_1790725449767.jpg) */}
        <aside className="w-60 lg:w-64 bg-white border-r border-gray-200/90 p-4 shrink-0 hidden md:flex flex-col h-full overflow-y-auto no-scrollbar select-none justify-between">
          
          <div className="space-y-4">
            
            {/* User Profile Card at Top of Sidebar */}
            <div className="p-2.5 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={studentAvatar}
                  alt={studentName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shadow-2xs"
                  onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[7px] text-white font-black">
                  ✓
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="font-extrabold text-xs text-gray-900 truncate">{studentName}</h3>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px] font-black shrink-0">✓</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium">Student</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500 mt-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal text-[9px]">(12 classes)</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu Items */}
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'live') {
                        onJoinLive({
                          title: 'Nahwu for Beginners (Live Interactive Classroom)',
                          tutor: 'Ustadz Ahmad Fauzi',
                          thumbnail: '/images/class_nahwu.jpg',
                          avatar: '/images/tutor_ahmed.jpg'
                        });
                        return;
                      }
                      setActiveNav(item.id);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#114B44] text-white shadow-2xs'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Left Sidebar Banner: Keep Learning! */}
          <div className="pt-4 border-t border-gray-100">
            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-gray-900 leading-tight">Keep Learning!</h4>
                </div>
              </div>

              <p className="text-[10px] text-gray-600 leading-relaxed">
                Complete more classes to get certificates and unlock new opportunities.
              </p>

              {/* Progress bar */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[9px] font-bold text-gray-500">
                  <span>Progress</span>
                  <span className="text-gray-800">3/5</span>
                </div>
                <div className="w-full h-1.5 bg-amber-200/60 rounded-full overflow-hidden">
                  <div className="h-full bg-[#114B44] rounded-full w-[60%]"></div>
                </div>
              </div>

              <button
                onClick={onExploreCourses}
                className="w-full bg-white hover:bg-amber-100/50 border border-amber-300 text-[#114B44] py-1.5 rounded-xl text-[11px] font-bold transition-all shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore Classes</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </aside>

        {/* MAIN SCROLLABLE CANVAS */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-7 min-w-0 pb-16 space-y-6">
          
          {activeNav === 'browse' ? (
            /* ========================================================= */
            /* VIEW: BROWSE CLASSES (MATCHING media_1790726478349.jpg)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Browse Classes</h1>
                    <p className="text-xs text-gray-500 font-medium">Discover classes from expert teachers. Learn new skills, deepen your knowledge, and grow with IlmHub.</p>
                  </div>
                </div>
              </div>

              {/* 2. CATEGORY FILTER PILLS */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Classes' },
                  { id: 'islamic', label: 'Islamic Studies' },
                  { id: 'language', label: 'Language' },
                  { id: 'academic', label: 'Academic' },
                  { id: 'professional', label: 'Professional Skills' },
                  { id: 'personal', label: 'Personal Development' },
                  { id: 'kids', label: 'Kids & Teens' },
                ].map((cat) => {
                  const isActive = browseCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setBrowseCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* 3. SEARCH & DROPDOWN FILTERS TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={browseSearchQuery}
                    onChange={(e) => setBrowseSearchQuery(e.target.value)}
                    placeholder="Search classes by title, teacher, or keyword..."
                    className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                  />
                </div>

                {/* 4 Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Levels Dropdown */}
                  <div className="relative">
                    <select
                      value={browseLevelFilter}
                      onChange={(e) => setBrowseLevelFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Levels">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Languages Dropdown */}
                  <div className="relative">
                    <select
                      value={browseLanguageFilter}
                      onChange={(e) => setBrowseLanguageFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Languages">All Languages</option>
                      <option value="Arabic">Arabic</option>
                      <option value="English">English</option>
                      <option value="Indonesian">Indonesian</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Class Types Dropdown */}
                  <div className="relative">
                    <select
                      value={browseTypeFilter}
                      onChange={(e) => setBrowseTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Class Types</option>
                      <option value="Live Classes">Live Classes</option>
                      <option value="Self-Paced">Self-Paced</option>
                      <option value="With Certificate">With Certificate</option>
                      <option value="Free Classes">Free Classes</option>
                      <option value="Premium Classes">Premium Classes</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={browseSortBy}
                      onChange={(e) => setBrowseSortBy(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="Newest First">Newest First</option>
                      <option value="Highest Rated">Highest Rated</option>
                      <option value="Most Popular">Most Popular</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. MAIN BROWSE LAYOUT: 2 Columns (Center Feed + Right Sidebar) */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT & CENTER FEED (Flex-1) */}
                <div className="flex-1 min-w-0 space-y-6">
                  
                  {/* Hero Wide Banner: Deepen Your Knowledge */}
                  <div className="relative rounded-3xl overflow-hidden min-h-[150px] p-5 sm:p-7 text-white flex flex-col justify-between shadow-md bg-gradient-to-r from-[#0F2F2B] via-[#114B44] to-[#1E3A34]">
                    <img
                      src="/images/login_lms_desk_bg.jpg"
                      alt="Mosque Silhouette Banner"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35"
                    />
                    <div className="relative z-10 space-y-1.5 max-w-xl">
                      <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                        Deepen Your Knowledge
                      </h2>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                        Explore Islamic knowledge, languages, academic subjects, and practical skills with expert teachers.
                      </p>
                    </div>

                    <div className="relative z-10 pt-3">
                      <button
                        onClick={() => {
                          const el = document.getElementById('featured-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100 border border-emerald-400/40 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer backdrop-blur-xs"
                      >
                        <span>Explore Featured Classes</span>
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-300" />
                      </button>
                    </div>
                  </div>

                  {/* SECTION 1: Featured Classes */}
                  <div id="featured-section" className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base font-black text-gray-900 tracking-tight flex items-center gap-2">
                        <span>Featured Classes</span>
                      </h2>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
                      {featuredBrowseClasses.map((item) => {
                        const isLiked = wishlist.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => onJoinLive({
                              title: item.title,
                              tutor: item.tutor,
                              thumbnail: item.image,
                              avatar: '/images/tutor_ahmed.jpg'
                            })}
                            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                          >
                            <div>
                              {/* Thumbnail with Badge & Heart Button */}
                              <div className="relative h-32 sm:h-36 w-full bg-gray-100 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                                />
                                {/* Top Badge */}
                                {item.badge && (
                                  <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow-2xs ${item.badge.color}`}>
                                    {item.badge.text}
                                  </span>
                                )}
                                {/* Heart Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(item.id);
                                  }}
                                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                                >
                                  <Heart className={`w-3 h-3 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                                </button>
                              </div>

                              {/* Card Body */}
                              <div className="p-3 space-y-1.5">
                                <div>
                                  <h3 className="font-extrabold text-xs text-gray-900 group-hover:text-[#114B44] transition-colors line-clamp-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                    {item.tutor}
                                  </p>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.primaryTag.color}`}>
                                    {item.primaryTag.label}
                                  </span>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.levelTag.color}`}>
                                    {item.levelTag.label}
                                  </span>
                                </div>

                                {/* Rating & Students */}
                                <div className="flex items-center justify-between text-[10px] pt-1">
                                  <div className="flex items-center gap-1 font-bold text-amber-500">
                                    <Star className="w-3 h-3 fill-amber-400" />
                                    <span>{item.rating}</span>
                                    <span className="text-gray-400 font-normal text-[9px]">({item.reviews})</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-500 text-[9px] font-medium">
                                    <Users className="w-3 h-3 text-gray-400" />
                                    <span>{item.students} students</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-3 py-2 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3 text-gray-400" />
                                <span>{item.lessons} lessons</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>{item.duration}</span>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 2: All Classes */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base font-black text-gray-900 tracking-tight flex items-center gap-2">
                        <span>All Classes</span>
                      </h2>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 8 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
                      {allBrowseClassesList.map((item) => {
                        const isLiked = wishlist.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => onJoinLive({
                              title: item.title,
                              tutor: item.tutor,
                              thumbnail: item.image,
                              avatar: '/images/tutor_ahmed.jpg'
                            })}
                            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                          >
                            <div>
                              {/* Thumbnail */}
                              <div className="relative h-32 sm:h-36 w-full bg-gray-100 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                                />
                                {/* Heart Wishlist Button */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(item.id);
                                  }}
                                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                                >
                                  <Heart className={`w-3 h-3 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                                </button>
                              </div>

                              {/* Body */}
                              <div className="p-3 space-y-1.5">
                                <div>
                                  <h3 className="font-extrabold text-xs text-gray-900 group-hover:text-[#114B44] transition-colors line-clamp-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                    {item.tutor}
                                  </p>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.primaryTag.color}`}>
                                    {item.primaryTag.label}
                                  </span>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${item.levelTag.color}`}>
                                    {item.levelTag.label}
                                  </span>
                                </div>

                                {/* Rating & Students */}
                                <div className="flex items-center justify-between text-[10px] pt-1">
                                  <div className="flex items-center gap-1 font-bold text-amber-500">
                                    <Star className="w-3 h-3 fill-amber-400" />
                                    <span>{item.rating}</span>
                                    <span className="text-gray-400 font-normal text-[9px]">({item.reviews})</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-500 text-[9px] font-medium">
                                    <Users className="w-3 h-3 text-gray-400" />
                                    <span>{item.students} students</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="px-3 py-2 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3 text-gray-400" />
                                <span>{item.lessons} lessons</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>{item.duration}</span>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR WIDGETS (Always on the right on desktop) */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4">
                  
                  {/* 1. Popular Topics Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Popular Topics</h3>
                      <button 
                        onClick={() => setBrowseCategory('all')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      {popularTopicsList.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => setBrowseCategory(topic.category)}
                          className="w-full flex items-center justify-between py-1 px-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group text-left"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-6 h-6 rounded-md bg-gray-50 group-hover:bg-emerald-50 border border-gray-100 flex items-center justify-center text-[11px] shrink-0 transition-colors">
                              {topic.icon}
                            </span>
                            <span className="text-[11px] font-bold text-gray-700 group-hover:text-[#114B44] transition-colors truncate">
                              {topic.label}
                            </span>
                          </div>
                          <span className="text-[9px] font-semibold text-gray-400 shrink-0">
                            {topic.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Class Levels Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-2.5">
                    <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Class Levels</h3>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => {
                        const isSelected = browseLevelFilter === lvl;
                        return (
                          <button
                            key={lvl}
                            onClick={() => setBrowseLevelFilter(lvl)}
                            className={`py-1.5 px-2 rounded-xl text-[11px] font-bold text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-50/80 text-[#114B44] border-1.5 border-emerald-600 shadow-2xs'
                                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                            }`}
                          >
                            {lvl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Class Type Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-2.5">
                    <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Class Type</h3>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { id: 'All Types', label: 'All Types', icon: MessageSquare, color: 'text-emerald-700' },
                        { id: 'Live Classes', label: 'Live Classes', icon: Video, color: 'text-rose-500' },
                        { id: 'Self-Paced', label: 'Self-Paced', icon: Play, color: 'text-blue-500' },
                        { id: 'With Certificate', label: 'With Certificate', icon: Award, color: 'text-indigo-500' },
                        { id: 'Free Classes', label: 'Free Classes', icon: Gift, color: 'text-emerald-600' },
                        { id: 'Premium Classes', label: 'Premium Classes', icon: Crown, color: 'text-amber-500' },
                      ].map((t) => {
                        const Icon = t.icon;
                        const isSelected = browseTypeFilter === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setBrowseTypeFilter(t.id)}
                            className={`py-1.5 px-2 rounded-xl text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer text-left ${
                              isSelected
                                ? 'bg-emerald-50/80 text-[#114B44] border-1.5 border-emerald-600 shadow-2xs'
                                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${t.color} shrink-0`} />
                            <span className="truncate leading-tight">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Top Teachers Card */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-3.5 shadow-2xs space-y-2.5">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Top Teachers</h3>
                      <button 
                        onClick={() => setActiveNav('browse')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {topTeachersList.map((tch) => (
                        <div key={tch.id} className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-emerald-300 shadow-2xs shrink-0">
                            <img 
                              src={tch.avatar} 
                              alt={tch.name}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{tch.name}</h4>
                            <div className="flex items-center gap-1 text-[9px] text-gray-500 font-medium mt-0.5">
                              <span className="font-bold text-amber-500 flex items-center gap-0.5">
                                ⭐ {tch.rating}
                              </span>
                              <span className="text-gray-400">({tch.reviews})</span>
                              <span className="text-gray-300">•</span>
                              <span className="truncate">👥 {tch.students} students</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </aside>

              </div>

            </div>
          ) : activeNav === 'classes' ? (
            /* ========================================================= */
            /* VIEW: MY CLASSES (MATCHING media_1790725449767.jpg)       */
            /* ========================================================= */
            <div className="space-y-5">
              
              {/* PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">My Classes</h1>
                    <p className="text-xs text-gray-500 font-medium">Kelola kelas yang Anda ikuti, lihat progres, akses materi, tugas, dan jadwal kelas.</p>
                  </div>
                </div>
              </div>

              {/* FILTER PILLS & CONTROLS TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Tabs Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                  {[
                    { id: 'all', label: 'All Classes', count: 8 },
                    { id: 'in_progress', label: 'In Progress', count: 5 },
                    { id: 'completed', label: 'Completed', count: 2 },
                    { id: 'upcoming', label: 'Upcoming', count: 1 },
                    { id: 'saved', label: 'Saved', count: 0 },
                  ].map((tab) => {
                    const isActive = classTabFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setClassTabFilter(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-2xs'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search & Sort Controls */}
                <div className="flex items-center gap-2.5">
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={classSearchQuery}
                      onChange={(e) => setClassSearchQuery(e.target.value)}
                      placeholder="Search my classes..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="relative shrink-0">
                    <select
                      value={classSortOrder}
                      onChange={(e) => setClassSortOrder(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 appearance-none focus:outline-none cursor-pointer"
                    >
                      <option>Newest First</option>
                      <option>Highest Progress</option>
                      <option>Lowest Progress</option>
                      <option>Oldest First</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4 TOP SUMMARY KPI CARDS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                
                {/* 1. Total Classes */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">8</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Total Classes</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">↑ 2 new this month</p>
                  </div>
                </div>

                {/* 2. In Progress */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">5</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">In Progress</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">62% average progress</p>
                  </div>
                </div>

                {/* 3. Completed */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">2</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Completed</p>
                    <p className="text-[10px] font-bold text-purple-600 mt-0.5">Certificates earned</p>
                  </div>
                </div>

                {/* 4. Upcoming */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900 leading-none">1</span>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">Upcoming</p>
                    <p className="text-[10px] font-bold text-emerald-600 mt-0.5">Next class tomorrow</p>
                  </div>
                </div>

              </div>

              {/* MAIN CONTENT 2-COLUMN GRID (6 Class Cards List + Right Sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* LEFT COLUMN: 6 Detailed Class Cards (8 of 12 Cols) */}
                <div className="lg:col-span-8 space-y-3.5">
                  {studentClassesList
                    .filter((c) => {
                      if (classTabFilter === 'in_progress') return c.status === 'in_progress';
                      if (classTabFilter === 'completed') return c.status === 'completed';
                      if (classTabFilter === 'upcoming') return c.status === 'upcoming';
                      if (classTabFilter === 'saved') return false;
                      return true;
                    })
                    .filter((c) => {
                      if (classSearchQuery) {
                        const q = classSearchQuery.toLowerCase();
                        return c.title.toLowerCase().includes(q) || c.tutor.toLowerCase().includes(q);
                      }
                      return true;
                    })
                    .map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs hover:border-emerald-300 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          
                          {/* Thumbnail & Class Info */}
                          <div className="flex items-center gap-3.5 min-w-0">
                            <div className="relative aspect-[16/10] w-28 sm:w-32 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = '/images/class_nahwu.jpg';
                                }}
                              />
                            </div>

                            <div className="min-w-0 space-y-1">
                              <h3 className="font-extrabold text-sm text-gray-900 leading-snug truncate">{course.title}</h3>
                              <p className="text-[11px] text-gray-500 font-medium">{course.tutor}</p>
                              
                              {/* Tags Row */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                <span className="text-[9px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {course.primaryTag}
                                </span>
                                <span className="text-[9px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {course.levelTag}
                                </span>
                                {course.featureTag && (
                                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-1 ${course.featureTag.color}`}>
                                    <span>{course.featureTag.icon}</span>
                                    <span>{course.featureTag.label}</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Progress Column */}
                          <div className="w-full sm:w-44 space-y-1.5 shrink-0">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[10px] font-bold text-gray-400">Progress</span>
                              <span className="font-black text-gray-900 text-xs">{course.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#114B44] rounded-full transition-all"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium">
                              {course.completedLessons} / {course.totalLessons} lessons completed
                            </p>
                          </div>

                          {/* Action Button & Next Class Info */}
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-2 shrink-0">
                            {course.isCompleted ? (
                              <>
                                <button
                                  onClick={() => alert(`Membuka sertifikat resmi untuk kelas ${course.title}!`)}
                                  className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                                >
                                  View Certificate
                                </button>
                                <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-1">
                                  <span>✓ Completed</span>
                                  <span className="text-gray-400 font-normal">{course.completedDate}</span>
                                </span>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => onJoinLive({
                                    title: course.title,
                                    tutor: { name: course.tutor, avatar: '/images/tutor_ahmed.jpg' },
                                    image: course.image
                                  })}
                                  className="w-full sm:w-auto bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                                >
                                  Continue Learning
                                </button>
                                {course.nextClassInfo && (
                                  <span className="text-[9px] text-gray-500 font-medium flex items-center gap-1">
                                    <span>📅 Next Class:</span>
                                    <span className="font-bold text-gray-800">{course.nextClassInfo}</span>
                                  </span>
                                )}
                              </>
                            )}
                          </div>

                          {/* 3 Dots Menu */}
                          <button
                            onClick={() => alert(`Opsi kelas: ${course.title}`)}
                            className="hidden sm:block p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                        </div>
                      </div>
                    ))}
                </div>

                {/* RIGHT SIDEBAR COLUMN: 4 Stacked Cards (4 of 12 Cols) */}
                <div className="lg:col-span-4 space-y-4">
                  
                  {/* CARD 1: Class Schedule (Interactive Mini Calendar) */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Class Schedule</h3>
                      <button
                        onClick={() => setActiveNav('schedule')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Month bar */}
                    <div className="flex items-center justify-between px-1 text-xs font-bold text-gray-800">
                      <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <span>{selectedCalendarMonth}</span>
                      <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Calendar grid */}
                    <div className="text-[11px]">
                      {/* Day Names */}
                      <div className="grid grid-cols-7 gap-1 text-center font-bold text-gray-400 text-[10px] pb-1 border-b border-gray-100">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>

                      {/* Day Cells */}
                      <div className="grid grid-cols-7 gap-1 text-center pt-2 font-semibold">
                        {[
                          { day: 24, isCurrMonth: false },
                          { day: 25, isCurrMonth: true, isSelected: true },
                          { day: 26, isCurrMonth: true, hasClass: true },
                          { day: 27, isCurrMonth: true },
                          { day: 28, isCurrMonth: true, hasClass: true },
                          { day: 29, isCurrMonth: true },
                          { day: 30, isCurrMonth: true, hasClass: true },
                          { day: 1, isCurrMonth: true },
                          { day: 2, isCurrMonth: true },
                          { day: 3, isCurrMonth: true },
                          { day: 4, isCurrMonth: true },
                          { day: 5, isCurrMonth: true },
                          { day: 6, isCurrMonth: true },
                          { day: 7, isCurrMonth: true },
                          { day: 8, isCurrMonth: true },
                          { day: 9, isCurrMonth: true },
                          { day: 10, isCurrMonth: true },
                          { day: 11, isCurrMonth: true },
                          { day: 12, isCurrMonth: true },
                          { day: 13, isCurrMonth: true },
                          { day: 14, isCurrMonth: true },
                        ].map((c, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedCalendarDate(c.day)}
                            className={`p-1.5 rounded-xl cursor-pointer transition-all relative flex flex-col items-center justify-center ${
                              c.isSelected
                                ? 'bg-[#114B44] text-white font-black shadow-xs'
                                : c.isCurrMonth
                                ? 'text-gray-800 hover:bg-gray-100'
                                : 'text-gray-300'
                            }`}
                          >
                            <span>{c.day}</span>
                            {c.hasClass && !c.isSelected && (
                              <span className="w-1 h-1 rounded-full bg-emerald-500 absolute bottom-1"></span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Upcoming Classes */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Upcoming Classes</h3>
                      <button
                        onClick={() => setActiveNav('schedule')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { title: 'Nahwu for Beginners', time: 'Tomorrow, 10:00 AM', icon: BookOpen, color: 'text-emerald-700 bg-emerald-50' },
                        { title: 'Arabic Conversation', time: 'Thu, 26 Sep, 4:00 PM', icon: Video, color: 'text-rose-700 bg-rose-50' },
                        { title: 'Academic Writing', time: 'Sat, 28 Sep, 11:00 AM', icon: BookOpen, color: 'text-blue-700 bg-blue-50' },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-xs truncate">{item.title}</p>
                              <p className="text-[10px] text-gray-400">{item.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD 3: Recent Activity */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Recent Activity</h3>
                      <button
                        onClick={() => alert('Membuka seluruh riwayat aktivitas belajar...')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {[
                        { title: "Completed lesson: Isim Ma'rifah", sub: 'Nahwu for Beginners • 2 hours ago', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
                        { title: 'Submitted assignment: Bab 2', sub: 'Sharaf Basic • 1 day ago', icon: FileText, color: 'text-purple-600 bg-purple-50' },
                        { title: 'Joined live class', sub: 'Arabic Conversation • 2 days ago', icon: Video, color: 'text-rose-600 bg-rose-50' },
                        { title: 'Earned certificate', sub: 'Islamic History • 5 days ago', icon: Award, color: 'text-amber-600 bg-amber-50' },
                      ].map((act, idx) => {
                        const Icon = act.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className={`w-6 h-6 rounded-lg ${act.color} flex items-center justify-center shrink-0 mt-0.5`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-gray-900 text-[11px] truncate">{act.title}</p>
                              <p className="text-[9px] text-gray-400 truncate">{act.sub}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD 4: Quick Actions */}
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-2xs space-y-2.5">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider px-1">Quick Actions</h3>

                    <div className="grid grid-cols-4 gap-1 text-center">
                      <button
                        onClick={() => onJoinLive({
                          title: 'Nahwu for Beginners',
                          tutor: { name: 'Ustadz Ahmad Fauzi', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_nahwu.jpg'
                        })}
                        className="p-2 rounded-xl bg-purple-50/60 hover:bg-purple-100/60 text-purple-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-purple-100"
                      >
                        <Video className="w-4 h-4 text-purple-700" />
                        <span className="text-[8px] font-bold">Join Live</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('assignments')}
                        className="p-2 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/60 text-emerald-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-emerald-100"
                      >
                        <FileText className="w-4 h-4 text-emerald-700" />
                        <span className="text-[8px] font-bold">Submit Task</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('quizzes')}
                        className="p-2 rounded-xl bg-sky-50/60 hover:bg-sky-100/60 text-sky-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-sky-100"
                      >
                        <HelpCircle className="w-4 h-4 text-sky-700" />
                        <span className="text-[8px] font-bold">Take Quiz</span>
                      </button>

                      <button
                        onClick={() => setActiveNav('certificates')}
                        className="p-2 rounded-xl bg-amber-50/60 hover:bg-amber-100/60 text-amber-700 flex flex-col items-center gap-1 cursor-pointer transition-colors border border-amber-100"
                      >
                        <Award className="w-4 h-4 text-amber-700" />
                        <span className="text-[8px] font-bold">Certificates</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : activeNav === 'schedule' ? (
            /* ========================================================= */
            /* VIEW: SCHEDULES ROOM (MATCHING media_1790727369755.jpg)  */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Schedules</h1>
                    <p className="text-xs text-gray-500 font-medium">Manage your class schedule, upcoming sessions, and deadlines.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAddScheduleModalOpen(true)}
                    className="flex items-center gap-1.5 bg-[#114B44] hover:bg-[#0D3B35] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>

              {/* 2. TAB PILLS NAVIGATION TOOLBAR */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'class_schedule', label: 'Class Schedule', icon: '📅', count: 8 },
                  { id: 'upcoming', label: 'Upcoming Classes', icon: '🗓️', count: 4 },
                  { id: 'deadlines', label: 'Deadlines', icon: '⏰', count: 3 },
                  { id: 'reminders', label: 'Reminders', icon: '🔔', count: 2 },
                  { id: 'calendar_view', label: 'Calendar View', icon: '📆' },
                ].map((tab) => {
                  const isActive = scheduleTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setScheduleTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 3. FILTER DROPDOWNS & VIEW SWITCHER TOOLBAR */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* 4 Filter Dropdowns */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* All Classes Dropdown */}
                  <div className="relative">
                    <select
                      value={scheduleClassFilter}
                      onChange={(e) => setScheduleClassFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Sharaf Basic">Sharaf Basic</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Academic Writing">Academic Writing</option>
                      <option value="Islamic History">Islamic History</option>
                      <option value="Quran Tajweed">Quran Tajweed</option>
                      <option value="Fiqh Ibadah">Fiqh Ibadah</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* All Instructors Dropdown */}
                  <div className="relative">
                    <select
                      value={scheduleInstructorFilter}
                      onChange={(e) => setScheduleInstructorFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Instructors">All Instructors</option>
                      <option value="Ust. Ahmad Fauzi">Ust. Ahmad Fauzi</option>
                      <option value="Ustzh. Fatimah Zahra">Ustzh. Fatimah Zahra</option>
                      <option value="Ust. Omar Hassan">Ust. Omar Hassan</option>
                      <option value="Dr. Layla Ahmad">Dr. Layla Ahmad</option>
                      <option value="Ust. Ali Khan">Ust. Ali Khan</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* All Types Dropdown */}
                  <div className="relative">
                    <select
                      value={scheduleTypeFilter}
                      onChange={(e) => setScheduleTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Live Class">Live Class</option>
                      <option value="Recorded">Recorded</option>
                      <option value="Assignment">Assignment</option>
                      <option value="Quiz">Quiz</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Month Selector Dropdown */}
                  <div className="relative">
                    <select
                      value={scheduleMonthFilter}
                      onChange={(e) => setScheduleMonthFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="September 2026">📅 September 2026</option>
                      <option value="October 2026">📅 October 2026</option>
                      <option value="November 2026">📅 November 2026</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Right View Switcher: Week / Month / Agenda */}
                <div className="flex items-center bg-[#F1F5F9] p-1 rounded-xl shrink-0 self-start xl:self-center">
                  {[
                    { id: 'week', label: 'Week' },
                    { id: 'month', label: 'Month' },
                    { id: 'agenda', label: 'Agenda' },
                  ].map((mode) => {
                    const isActive = scheduleViewMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setScheduleViewMode(mode.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#114B44] text-white shadow-2xs'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. MAIN TWO-COLUMN LAYOUT: CENTER CANVAS + RIGHT SIDEBAR */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT/CENTER MAIN CONTENT AREA */}
                <div className="flex-1 min-w-0 space-y-5 w-full">
                  
                  {/* VIEW: WEEKLY TIMETABLE GRID (When scheduleViewMode === 'week' or scheduleTab === 'class_schedule') */}
                  {(scheduleViewMode === 'week' || scheduleTab === 'class_schedule') && (
                    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-2xs overflow-hidden">
                      
                      {/* Grid Header: Days of the Week */}
                      <div className="grid grid-cols-8 border-b border-gray-200 bg-[#F8FAFC]">
                        {/* Time label corner */}
                        <div className="p-3 text-center border-r border-gray-200 flex items-center justify-center">
                          <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">GMT+3</span>
                        </div>

                        {/* 7 Days: Sun 20 - Sat 26 */}
                        {scheduleDays.map((d) => (
                          <div
                            key={d.dayNumber}
                            onClick={() => setScheduleSelectedDay(d.dayNumber)}
                            className={`p-2.5 sm:p-3 text-center border-r border-gray-200 last:border-r-0 cursor-pointer transition-colors ${
                              scheduleSelectedDay === d.dayNumber ? 'bg-emerald-50/50' : 'hover:bg-gray-100/50'
                            }`}
                          >
                            <span className="block text-[11px] font-bold text-gray-500 uppercase">{d.dayName}</span>
                            <div className="mt-1 flex items-center justify-center">
                              <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-extrabold transition-all ${
                                d.isToday
                                  ? 'bg-[#114B44] text-white shadow-xs ring-2 ring-emerald-500/20'
                                  : scheduleSelectedDay === d.dayNumber
                                  ? 'bg-emerald-200 text-[#114B44]'
                                  : 'text-gray-800'
                              }`}>
                                {d.dayNumber}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Timetable Body (8:00 AM - 5:00 PM) */}
                      <div className="relative overflow-x-auto">
                        <div className="min-w-[650px] relative" style={{ height: '576px' }}>
                          
                          {/* Background Horizontal Hour Grid Lines (9 hourly intervals = 9 * 64px = 576px) */}
                          <div className="absolute inset-0 grid grid-rows-9 pointer-events-none">
                            {scheduleHours.slice(0, 9).map((h, index) => (
                              <div key={h.hour} className="grid grid-cols-8 border-b border-gray-100/80 h-16">
                                <div className="p-2 text-right pr-3 border-r border-gray-100 text-[10px] font-bold text-gray-400 select-none">
                                  {h.label}
                                </div>
                                <div className="border-r border-gray-100/70"></div>
                                <div className="border-r border-gray-100/70"></div>
                                <div className="border-r border-gray-100/70"></div>
                                <div className="border-r border-gray-100/70 bg-emerald-50/20"></div>
                                <div className="border-r border-gray-100/70"></div>
                                <div className="border-r border-gray-100/70"></div>
                                <div></div>
                              </div>
                            ))}
                          </div>

                          {/* 7 Columns Container for Absolute Event Placement */}
                          <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                            {/* Empty col 1 for time */}
                            <div></div>

                            {/* 7 Day Columns (Sun 20 to Sat 26) */}
                            {scheduleDays.map((day) => {
                              const dayEvents = scheduleWeeklyEvents.filter(e => e.dayNumber === day.dayNumber);
                              return (
                                <div key={day.dayNumber} className="relative h-full pointer-events-auto">
                                  {dayEvents.map((evt) => {
                                    const topPx = (evt.startHour - 8) * 64 + 2;
                                    const heightPx = evt.durationHours * 64 - 4;
                                    return (
                                      <div
                                        key={evt.id}
                                        onClick={() => {
                                          if (evt.isLiveNow || evt.badge === 'Live') {
                                            onJoinLive({
                                              title: evt.title,
                                              tutor: { name: evt.instructor, avatar: '/images/tutor_ahmed.jpg' },
                                              image: '/images/class_nahwu.jpg'
                                            });
                                          } else {
                                            alert(`Detail Jadwal:\n${evt.title}\nWaktu: ${evt.time}\nPengajar: ${evt.instructor}\nRuang: ${evt.room}`);
                                          }
                                        }}
                                        style={{
                                          top: `${topPx}px`,
                                          height: `${heightPx}px`,
                                        }}
                                        className={`absolute left-1 right-1 rounded-xl p-2 flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.02] hover:z-20 ${evt.themeClass}`}
                                      >
                                        <div>
                                          <div className="flex items-center justify-between gap-1">
                                            <span className={`text-[8px] font-black px-1.5 py-0.2 rounded border ${evt.badgeClass}`}>
                                              {evt.badge}
                                            </span>
                                            <span className="text-[8px] font-semibold opacity-70">
                                              {evt.time.split(' - ')[0]}
                                            </span>
                                          </div>
                                          <h4 className="font-extrabold text-[10.5px] leading-tight mt-1 truncate">
                                            {evt.title}
                                          </h4>
                                        </div>

                                        <div className="flex items-center justify-between text-[9px] font-medium opacity-80 pt-0.5">
                                          <span className="truncate">{evt.room}</span>
                                          <span className="truncate">{evt.instructor.split(' ')[1] || evt.instructor}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>

                        </div>
                      </div>

                    </div>
                  )}

                  {/* 5. UPCOMING CLASSES HORIZONTAL CARD ROWS (Bottom Left) */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-extrabold text-gray-900">Upcoming Classes</h2>
                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          4 Sessions
                        </span>
                      </div>
                      <button 
                        onClick={() => setActiveNav('classes')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All Classes</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {scheduleUpcomingClasses.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-2xl border border-gray-200/80 bg-white hover:bg-gray-50/80 hover:border-emerald-300 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            {/* Avatar or Icon */}
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-emerald-100 border border-emerald-200 shrink-0">
                              <img
                                src={item.avatar}
                                alt={item.instructor}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                              />
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-extrabold text-xs text-gray-900 truncate group-hover:text-[#114B44] transition-colors">
                                  {item.title}
                                </h3>
                                <span className={`text-[9px] font-bold px-2 py-0.2 rounded-md border ${item.tagClass}`}>
                                  {item.tag}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-1 flex-wrap font-medium">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-gray-400" />
                                  <span>{item.date}</span>
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-gray-400" />
                                  <span>{item.time}</span>
                                </span>
                                <span className="flex items-center gap-1 text-gray-400">
                                  <span>•</span>
                                  <span>{item.room}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="shrink-0 self-end sm:self-center">
                            {item.isJoinable ? (
                              <button
                                onClick={() => onJoinLive({
                                  title: item.title,
                                  tutor: { name: item.instructor, avatar: item.avatar },
                                  image: '/images/class_nahwu.jpg'
                                })}
                                className="px-4 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <Video className="w-3.5 h-3.5" />
                                <span>Join Class</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => alert(`Pengingat disetel untuk sesi ${item.title} pada ${item.date} (${item.time})`)}
                                className="px-3.5 py-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                              >
                                <Bell className="w-3.5 h-3.5 text-gray-400" />
                                <span>Set Reminder</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR (Matching media_1790727369755.jpg) */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4">
                  
                  {/* CARD 1: Interactive Mini Calendar */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">September 2026</h3>
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 cursor-pointer">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Day labels: S M T W T F S */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-gray-400">
                      <span>S</span>
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                    </div>

                    {/* Dates 1-30 */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {/* Empty padding for start of month (Tuesday start) */}
                      <span className="p-1 text-gray-300">30</span>
                      <span className="p-1 text-gray-300">31</span>
                      
                      {Array.from({ length: 30 }).map((_, i) => {
                        const dayNum = i + 1;
                        const isToday = dayNum === 23;
                        const isSelected = scheduleSelectedDay === dayNum;
                        const hasEvent = [21, 22, 23, 24, 25].includes(dayNum);

                        return (
                          <button
                            key={dayNum}
                            onClick={() => setScheduleSelectedDay(dayNum)}
                            className={`p-1 rounded-lg font-bold text-[11px] relative flex flex-col items-center justify-center transition-colors cursor-pointer ${
                              isToday
                                ? 'bg-[#114B44] text-white shadow-xs'
                                : isSelected
                                ? 'bg-emerald-100 text-[#114B44]'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            <span>{dayNum}</span>
                            {hasEvent && (
                              <span className={`w-1 h-1 rounded-full mt-0.5 ${
                                isToday ? 'bg-amber-300' : 'bg-emerald-600'
                              }`}></span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* CARD 2: Today's Schedule List (Wed, 23 Sep) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <div>
                        <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Today's Schedule</h3>
                        <p className="text-[10px] text-gray-400">Wed, 23 Sep 2026</p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                        2 Classes
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {scheduleTodayList.map((td) => (
                        <div
                          key={td.id}
                          className="p-2.5 rounded-xl border border-gray-200/80 bg-[#F8FAFC] hover:bg-emerald-50/50 transition-colors flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{td.title}</h4>
                            <p className="text-[10px] text-gray-500 mt-0.5 flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5 text-gray-400" />
                              <span>{td.time}</span>
                            </p>
                            <p className="text-[9px] text-gray-400 truncate">{td.instructor} • {td.room}</p>
                          </div>

                          {td.isLive ? (
                            <button
                              onClick={() => onJoinLive({
                                title: td.title,
                                tutor: { name: td.instructor, avatar: '/images/tutor_ahmed.jpg' },
                                image: '/images/class_nahwu.jpg'
                              })}
                              className="px-2.5 py-1 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-lg text-[10px] font-black shrink-0 shadow-2xs cursor-pointer flex items-center gap-1"
                            >
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>Join</span>
                            </button>
                          ) : (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-600 shrink-0">
                              {td.status}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3: Reminders & Deadlines List */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Reminders & Deadlines</h3>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                        3 Tasks
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {scheduleDeadlinesList.map((dl) => (
                        <div
                          key={dl.id}
                          className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-gray-100/60 transition-colors space-y-1"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-xs shrink-0">{dl.icon}</span>
                              <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">
                                {dl.title}
                              </h4>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] text-gray-500 font-medium pl-4">
                            <span className="truncate">{dl.course}</span>
                            <span className="font-bold text-rose-600 shrink-0">{dl.due}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </aside>

              </div>

              {/* ADD TO CALENDAR MODAL POPUP */}
              {isAddScheduleModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <CalendarPlus className="w-4 h-4" />
                        </div>
                        <h3 className="font-black text-base text-gray-900">Add to Calendar</h3>
                      </div>
                      <button
                        onClick={() => setIsAddScheduleModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Class Title</label>
                        <input
                          type="text"
                          defaultValue="Nahwu for Beginners"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Date</label>
                          <input
                            type="date"
                            defaultValue="2026-09-23"
                            className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Time Slot</label>
                          <input
                            type="time"
                            defaultValue="10:00"
                            className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Instructor / Room</label>
                        <input
                          type="text"
                          defaultValue="Ustadz Ahmad Fauzi • Room A"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsAddScheduleModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsAddScheduleModalOpen(false);
                          alert('Jadwal baru berhasil ditambahkan ke kalender!');
                        }}
                        className="px-4 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Save Schedule
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : activeNav === 'assignments' ? (
            /* ========================================================= */
            /* VIEW: ASSIGNMENTS ROOM (MATCHING media_1790728280277.jpg)  */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Assignments</h1>
                    <p className="text-xs text-gray-500 font-medium">View, submit, and track your class assignments.</p>
                  </div>
                </div>

                <div className="relative shrink-0">
                  <select
                    value={assignmentClassFilter}
                    onChange={(e) => setAssignmentClassFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-200/90 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                  >
                    <option value="All Classes">All Classes</option>
                    <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                    <option value="Arabic Conversation">Arabic Conversation</option>
                    <option value="Academic Writing">Academic Writing</option>
                    <option value="Islamic History">Islamic History</option>
                    <option value="Environmental Management">Environmental Management</option>
                    <option value="Data Analysis">Data Analysis</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 2. TAB PILLS FILTER TOOLBAR */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Assignments' },
                  { id: 'todo', label: 'To Do', badge: '3', badgeColor: 'bg-rose-500 text-white' },
                  { id: 'in_progress', label: 'In Progress', badge: '2', badgeColor: 'bg-blue-500 text-white' },
                  { id: 'submitted', label: 'Submitted', badge: '5', badgeColor: 'bg-emerald-500 text-white' },
                  { id: 'graded', label: 'Graded', badge: '4', badgeColor: 'bg-indigo-500 text-white' },
                ].map((tab) => {
                  const isActive = assignmentTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setAssignmentTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : tab.badgeColor
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 3. SEARCH & DROPDOWN FILTERS */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={assignmentSearchQuery}
                    onChange={(e) => setAssignmentSearchQuery(e.target.value)}
                    placeholder="Search assignments..."
                    className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                  />
                </div>

                {/* 4 Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Classes */}
                  <div className="relative">
                    <select
                      value={assignmentClassFilter}
                      onChange={(e) => setAssignmentClassFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Academic Writing">Academic Writing</option>
                      <option value="Islamic History">Islamic History</option>
                      <option value="Environmental Management">Environmental Management</option>
                      <option value="Data Analysis">Data Analysis</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Types */}
                  <div className="relative">
                    <select
                      value={assignmentTypeFilter}
                      onChange={(e) => setAssignmentTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Written Assignment">Written Assignment</option>
                      <option value="Audio Submission">Audio Submission</option>
                      <option value="Essay">Essay</option>
                      <option value="Research & Summary">Research & Summary</option>
                      <option value="Group Assignment">Group Assignment</option>
                      <option value="Project">Project</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Status */}
                  <div className="relative">
                    <select
                      value={assignmentStatusFilter}
                      onChange={(e) => setAssignmentStatusFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Status">All Status</option>
                      <option value="Due Soon">Due Soon</option>
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not Started">Not Started</option>
                      <option value="Submitted">Submitted</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={assignmentSortOrder}
                      onChange={(e) => setAssignmentSortOrder(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="Due Date (Soonest)">Due Date (Soonest)</option>
                      <option value="Due Date (Latest)">Due Date (Latest)</option>
                      <option value="Newest First">Newest First</option>
                      <option value="Course Name">Course Name</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. MAIN TWO-COLUMN LAYOUT */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT CANVAS: LIST OF ASSIGNMENT CARDS */}
                <div className="flex-1 min-w-0 space-y-3.5 w-full">
                  {studentAssignmentsList
                    .filter(a => {
                      if (assignmentTabFilter === 'todo') return a.status === 'todo';
                      if (assignmentTabFilter === 'in_progress') return a.status === 'in_progress';
                      if (assignmentTabFilter === 'submitted') return a.status === 'submitted';
                      if (assignmentTabFilter === 'graded') return a.status === 'graded';
                      return true;
                    })
                    .filter(a => {
                      if (assignmentClassFilter !== 'All Classes' && a.course !== assignmentClassFilter) return false;
                      if (assignmentTypeFilter !== 'All Types' && a.type !== assignmentTypeFilter) return false;
                      if (assignmentStatusFilter !== 'All Status' && a.statusBadge !== assignmentStatusFilter) return false;
                      if (assignmentSearchQuery) {
                        const q = assignmentSearchQuery.toLowerCase();
                        return a.title.toLowerCase().includes(q) || a.course.toLowerCase().includes(q) || a.instructor.toLowerCase().includes(q);
                      }
                      return true;
                    })
                    .map((asg) => (
                      <div
                        key={asg.id}
                        className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 group"
                      >
                        {/* Left Info: Image + Details */}
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                          {/* Square Image Thumbnail */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0 relative">
                            <img
                              src={asg.image}
                              alt={asg.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                            />
                          </div>

                          {/* Info Text */}
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#114B44] transition-colors leading-tight">
                                {asg.title}
                              </h3>
                            </div>

                            <p className="text-xs font-semibold text-gray-600 truncate">{asg.course}</p>

                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium truncate">
                              <User className="w-3 h-3 text-gray-400 shrink-0" />
                              <span>{asg.instructor}</span>
                            </div>

                            {/* Type pill + Due Date */}
                            <div className="flex items-center gap-2.5 flex-wrap pt-0.5">
                              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md border ${asg.typeColor}`}>
                                <span>{asg.typeIcon}</span>
                                <span>{asg.type}</span>
                              </span>

                              <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>Due: {asg.dueDate}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Status & Action Controls */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                          {/* Status Badge + Countdown Pill */}
                          <div className="flex sm:flex-col items-center sm:items-end gap-1.5">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${asg.statusColor}`}>
                              {asg.statusBadge}
                            </span>
                            <span className={`text-[10px] font-bold flex items-center gap-1 ${asg.countdownColor}`}>
                              <span>🗓️</span>
                              <span>{asg.dueDaysLeft}</span>
                            </span>
                          </div>

                          {/* Button & Menu */}
                          <div className="flex items-center gap-1.5">
                            {asg.actionType === 'submit' ? (
                              <button
                                onClick={() => {
                                  setSelectedAssignmentForSubmit(asg);
                                  setIsSubmitModalOpen(true);
                                }}
                                className="px-4 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap"
                              >
                                {asg.actionLabel}
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setSelectedAssignmentForSubmit(asg);
                                  setIsSubmitModalOpen(true);
                                }}
                                className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                              >
                                {asg.actionLabel}
                              </button>
                            )}

                            <button
                              onClick={() => alert(`Opsi tugas: ${asg.title}`)}
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* RIGHT SIDEBAR (MATCHING media_1790728280277.jpg) */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4">
                  
                  {/* CARD 1: Assignment Progress Donut Chart */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Assignment Progress</h3>
                      <button
                        onClick={() => setAssignmentTabFilter('all')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {/* Donut Chart */}
                      <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#E2E8F0"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#114B44"
                            strokeWidth="8"
                            strokeDasharray={`${0.6 * 201.06} 201.06`}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                          <span className="text-lg font-black text-gray-900 leading-none">60%</span>
                          <span className="text-[8px] font-bold text-gray-400 mt-0.5">Completed</span>
                        </div>
                      </div>

                      {/* Legend Breakdown */}
                      <div className="space-y-1 text-[10.5px] font-bold min-w-0 flex-1">
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                            <span className="truncate text-gray-500 font-semibold">Total Assignments</span>
                          </span>
                          <span className="font-black text-gray-900">14</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <span className="truncate text-gray-500 font-semibold">Submitted</span>
                          </span>
                          <span className="font-black text-gray-900">5</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            <span className="truncate text-gray-500 font-semibold">Graded</span>
                          </span>
                          <span className="font-black text-gray-900">4</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="truncate text-gray-500 font-semibold">In Progress</span>
                          </span>
                          <span className="font-black text-gray-900">2</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <span className="truncate text-gray-500 font-semibold">To Do</span>
                          </span>
                          <span className="font-black text-gray-900">3</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Upcoming Deadlines */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Upcoming Deadlines</h3>
                      <button
                        onClick={() => setAssignmentTabFilter('todo')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {assignmentUpcomingDeadlinesList.map((dl) => (
                        <div key={dl.id} className="flex items-center gap-3">
                          {/* Date Badge */}
                          <div className="w-10 h-10 rounded-xl bg-rose-50/70 border border-rose-100 text-center flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] font-extrabold text-rose-600 uppercase leading-none">{dl.month}</span>
                            <span className="text-xs font-black text-gray-900 leading-tight mt-0.5">{dl.day}</span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{dl.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate">{dl.course}</p>
                            <span className="text-[9px] font-bold text-rose-600 flex items-center gap-1 mt-0.5">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{dl.daysLeft}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3: Recent Submissions */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Recent Submissions</h3>
                      <button
                        onClick={() => setAssignmentTabFilter('submitted')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {assignmentRecentSubmissionsList.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] flex items-center justify-between gap-2.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm border shrink-0 ${sub.iconBg}`}>
                              {sub.icon}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{sub.title}</h4>
                              <p className="text-[10px] text-gray-400 truncate">{sub.course}</p>
                              <span className="text-[9px] text-gray-400">{sub.date}</span>
                            </div>
                          </div>

                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-black flex items-center justify-center shrink-0">
                            {sub.grade}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </aside>

              </div>

              {/* SUBMIT ASSIGNMENT MODAL POPUP */}
              {isSubmitModalOpen && selectedAssignmentForSubmit && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">Submit Assignment</h3>
                          <p className="text-xs text-gray-500">{selectedAssignmentForSubmit.course}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsSubmitModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-1">
                      <h4 className="font-extrabold text-xs text-gray-900">{selectedAssignmentForSubmit.title}</h4>
                      <div className="flex items-center justify-between text-[11px] text-gray-500">
                        <span>Instructor: {selectedAssignmentForSubmit.instructor}</span>
                        <span className="font-bold text-rose-600">Due: {selectedAssignmentForSubmit.dueDate}</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs">
                      {/* Dropzone */}
                      <div>
                        <label className="block font-bold text-gray-700 mb-1.5">Upload Submission File / Recording</label>
                        <div className="border-2 border-dashed border-gray-300 hover:border-[#114B44] rounded-2xl p-6 text-center bg-gray-50/50 transition-colors cursor-pointer space-y-2">
                          <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#114B44] flex items-center justify-center mx-auto">
                            <Download className="w-5 h-5 rotate-180" />
                          </div>
                          <div>
                            <p className="font-bold text-xs text-gray-800">Drag & drop files here, or <span className="text-[#114B44] underline">browse</span></p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Supports PDF, DOCX, MP3, MP4 up to 50MB</p>
                          </div>
                        </div>
                      </div>

                      {/* Notes input */}
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Student Notes (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Add any comments or questions for your instructor..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-[#114B44] resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsSubmitModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsSubmitModalOpen(false);
                          alert(`Tugas "${selectedAssignmentForSubmit.title}" berhasil dikumpulkan ke ${selectedAssignmentForSubmit.instructor}!`);
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Confirm & Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : activeNav === 'quizzes' ? (
            /* ========================================================= */
            /* VIEW: QUIZZES ROOM (MATCHING media_1790728429009.jpg)     */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Quizzes</h1>
                    <p className="text-xs text-gray-500 font-medium">Test your understanding and track your progress.</p>
                  </div>
                </div>
              </div>

              {/* 2. TAB PILLS FILTER TOOLBAR */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Quizzes' },
                  { id: 'not_started', label: 'Not Started', badge: '4', badgeColor: 'bg-blue-500 text-white' },
                  { id: 'in_progress', label: 'In Progress', badge: '2', badgeColor: 'bg-amber-500 text-white' },
                  { id: 'completed', label: 'Completed', badge: '8', badgeColor: 'bg-emerald-500 text-white' },
                ].map((tab) => {
                  const isActive = quizTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setQuizTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : tab.badgeColor
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 3. SEARCH & DROPDOWN FILTERS */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={quizSearchQuery}
                    onChange={(e) => setQuizSearchQuery(e.target.value)}
                    placeholder="Search quizzes..."
                    className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                  />
                </div>

                {/* 4 Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Classes */}
                  <div className="relative">
                    <select
                      value={quizClassFilter}
                      onChange={(e) => setQuizClassFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Academic Writing">Academic Writing</option>
                      <option value="Islamic History">Islamic History</option>
                      <option value="Environmental Management">Environmental Management</option>
                      <option value="Data Analysis">Data Analysis</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Types */}
                  <div className="relative">
                    <select
                      value={quizTypeFilter}
                      onChange={(e) => setQuizTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Multiple Choice">Multiple Choice</option>
                      <option value="True/False">True/False</option>
                      <option value="Essay & Short Answer">Essay & Short Answer</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Status */}
                  <div className="relative">
                    <select
                      value={quizStatusFilter}
                      onChange={(e) => setQuizStatusFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Status">All Status</option>
                      <option value="Due Soon">Due Soon</option>
                      <option value="Not Started">Not Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={quizSortOrder}
                      onChange={(e) => setQuizSortOrder(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="Due Date">Sort by: Due Date</option>
                      <option value="Newest">Sort by: Newest</option>
                      <option value="Highest Score">Sort by: Highest Score</option>
                      <option value="Title">Sort by: Title</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. MAIN TWO-COLUMN LAYOUT */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT CANVAS: LIST OF QUIZ CARDS */}
                <div className="flex-1 min-w-0 space-y-3.5 w-full">
                  {studentQuizzesList
                    .filter(q => {
                      if (quizTabFilter === 'not_started') return q.status === 'not_started';
                      if (quizTabFilter === 'in_progress') return q.status === 'in_progress';
                      if (quizTabFilter === 'completed') return q.status === 'completed';
                      return true;
                    })
                    .filter(q => {
                      if (quizClassFilter !== 'All Classes' && q.course !== quizClassFilter) return false;
                      if (quizTypeFilter !== 'All Types' && q.format !== quizTypeFilter) return false;
                      if (quizStatusFilter !== 'All Status') {
                        if (quizStatusFilter === 'Completed' && q.status !== 'completed') return false;
                        if (quizStatusFilter === 'In Progress' && q.status !== 'in_progress') return false;
                        if (quizStatusFilter === 'Not Started' && q.status !== 'not_started') return false;
                        if (quizStatusFilter === 'Due Soon' && q.statusBadge !== 'Due Soon') return false;
                      }
                      if (quizSearchQuery) {
                        const sq = quizSearchQuery.toLowerCase();
                        return q.title.toLowerCase().includes(sq) || q.course.toLowerCase().includes(sq) || q.instructor.toLowerCase().includes(sq);
                      }
                      return true;
                    })
                    .map((qz) => (
                      <div
                        key={qz.id}
                        className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 group"
                      >
                        {/* Left Info: Image + Details */}
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                          {/* Square Image Thumbnail */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0 relative">
                            <img
                              src={qz.image}
                              alt={qz.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                            />
                          </div>

                          {/* Info Text */}
                          <div className="min-w-0 flex-1 space-y-1">
                            <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#114B44] transition-colors leading-tight">
                              {qz.title}
                            </h3>

                            <p className="text-xs font-semibold text-gray-600 truncate">
                              {qz.course} • {qz.instructor}
                            </p>

                            {/* Metadata Pills: Questions, Duration, Format */}
                            <div className="flex items-center gap-2.5 flex-wrap pt-0.5 text-[11px] text-gray-500 font-medium">
                              <span className="flex items-center gap-1">
                                <FileText className="w-3 h-3 text-gray-400" />
                                <span>{qz.questionsCount} questions</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span>{qz.duration}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-gray-400" />
                                <span>{qz.format}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Status & Action Controls */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                          {/* Status Badge + Due Date */}
                          <div className="flex sm:flex-col items-center sm:items-end gap-1.5">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${qz.statusColor}`}>
                              {qz.statusBadge}
                            </span>
                            <span className={`text-[10px] font-bold flex items-center gap-1 ${qz.dueDateColor}`}>
                              <Calendar className="w-3 h-3" />
                              <span>{qz.dueDate}</span>
                            </span>
                          </div>

                          {/* Button & Menu */}
                          <div className="flex items-center gap-1.5">
                            {qz.isPrimaryAction ? (
                              <button
                                onClick={() => {
                                  setSelectedQuiz(qz);
                                  setIsQuizModalOpen(true);
                                }}
                                className="px-4 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap"
                              >
                                {qz.actionLabel}
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setSelectedQuiz(qz);
                                  setIsQuizModalOpen(true);
                                }}
                                className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                              >
                                {qz.actionLabel}
                              </button>
                            )}

                            <button
                              onClick={() => alert(`Opsi kuis: ${qz.title}`)}
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* RIGHT SIDEBAR (MATCHING media_1790728429009.jpg) */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4">
                  
                  {/* CARD 1: Quiz Performance Donut Chart */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Quiz Performance</h3>
                      <button
                        onClick={() => setQuizTabFilter('all')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {/* Donut Chart */}
                      <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#E2E8F0"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#114B44"
                            strokeWidth="8"
                            strokeDasharray={`${0.75 * 201.06} 201.06`}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                          <span className="text-lg font-black text-gray-900 leading-none">75%</span>
                          <span className="text-[8px] font-bold text-gray-400 mt-0.5">Average Score</span>
                        </div>
                      </div>

                      {/* Legend Breakdown */}
                      <div className="space-y-1.5 text-[10.5px] font-bold min-w-0 flex-1">
                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            <span className="truncate text-gray-500 font-semibold">Completed</span>
                          </span>
                          <span className="font-black text-gray-900">8</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="truncate text-gray-500 font-semibold">In Progress</span>
                          </span>
                          <span className="font-black text-gray-900">2</span>
                        </div>

                        <div className="flex items-center justify-between text-gray-700">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                            <span className="truncate text-gray-500 font-semibold">Not Started</span>
                          </span>
                          <span className="font-black text-gray-900">4</span>
                        </div>
                      </div>
                    </div>

                    {/* Best Score Banner */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60">
                      <div className="flex items-center gap-2">
                        <span className="text-base">🏆</span>
                        <span className="text-xs font-extrabold text-amber-900">Best Score</span>
                      </div>
                      <span className="text-sm font-black text-amber-800">95%</span>
                    </div>
                  </div>

                  {/* CARD 2: Upcoming Quizzes */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Upcoming Quizzes</h3>
                      <button
                        onClick={() => setQuizTabFilter('not_started')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {upcomingQuizzesList.map((uq) => (
                        <div key={uq.id} className="flex items-center gap-3">
                          {/* Date Badge */}
                          <div className="w-10 h-10 rounded-xl bg-rose-50/70 border border-rose-100 text-center flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] font-extrabold text-rose-600 uppercase leading-none">{uq.month}</span>
                            <span className="text-xs font-black text-gray-900 leading-tight mt-0.5">{uq.day}</span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{uq.title}</h4>
                            <p className="text-[10px] text-gray-500 truncate">{uq.course}</p>
                            <span className={`text-[9px] font-bold flex items-center gap-1 mt-0.5 ${uq.tagColor}`}>
                              <span>{uq.statusTag}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3: Recent Results */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Recent Results</h3>
                      <button
                        onClick={() => setQuizTabFilter('completed')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {recentQuizResultsList.map((qr) => (
                        <div
                          key={qr.id}
                          className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] flex items-center justify-between gap-2.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm border shrink-0 ${qr.iconBg}`}>
                              <FileText className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{qr.title}</h4>
                              <span className="text-[9px] text-gray-400">{qr.date}</span>
                            </div>
                          </div>

                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-black flex items-center justify-center shrink-0">
                            {qr.score}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </aside>

              </div>

              {/* QUIZ DETAILS / START MODAL POPUP */}
              {isQuizModalOpen && selectedQuiz && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">{selectedQuiz.title}</h3>
                          <p className="text-xs text-gray-500">{selectedQuiz.course} • {selectedQuiz.instructor}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsQuizModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Quiz Spec Cards */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Questions</span>
                        <span className="text-sm font-black text-gray-900">{selectedQuiz.questionsCount} Items</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Time Limit</span>
                        <span className="text-sm font-black text-gray-900">{selectedQuiz.duration}</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Passing Score</span>
                        <span className="text-sm font-black text-emerald-600">70%</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-gray-700">
                      <h5 className="font-bold text-gray-900 flex items-center gap-1.5">
                        <span>📌</span>
                        <span>Quiz Instructions:</span>
                      </h5>
                      <ul className="list-disc pl-5 space-y-1 text-[11px] text-gray-600 leading-relaxed">
                        <li>Each question has multiple choices with only one correct answer.</li>
                        <li>The timer will start immediately after you click "Start Test Now".</li>
                        <li>Do not close or refresh your browser while the quiz is in progress.</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsQuizModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          setIsQuizModalOpen(false);
                          alert(`Memulai kuis: ${selectedQuiz.title}! Semoga sukses!`);
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Start Test Now
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : activeNav === 'certificates' ? (
            /* ========================================================= */
            /* VIEW: CERTIFICATES ROOM (MATCHING media_1790728589304.jpg)*/
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Certificates</h1>
                    <p className="text-xs text-gray-500 font-medium">View and manage your course certificates. Download, share, and showcase your achievements.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsVerifyModalOpen(true)}
                    className="flex items-center gap-1.5 bg-white hover:bg-emerald-50/60 border border-emerald-300 text-[#114B44] px-3.5 py-2 rounded-xl text-xs font-bold shadow-2xs transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verify Certificate</span>
                  </button>
                </div>
              </div>

              {/* 2. TAB PILLS FILTER TOOLBAR */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All Certificates (6)' },
                  { id: 'completed', label: 'Completed', count: 6, countColor: 'bg-emerald-100 text-emerald-800' },
                  { id: 'in_progress', label: 'In Progress', count: 2, countColor: 'bg-blue-100 text-blue-800' },
                  { id: 'not_started', label: 'Not Started', count: 3, countColor: 'bg-purple-100 text-purple-800' },
                ].map((tab) => {
                  const isActive = certificateTabFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCertificateTabFilter(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#114B44] text-white shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/80'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive ? 'bg-white/20 text-white' : tab.countColor
                        }`}>
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 3. SEARCH & DROPDOWN FILTERS */}
              <div className="bg-white rounded-2xl border border-gray-200/80 p-3 shadow-2xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={certificateSearchQuery}
                    onChange={(e) => setCertificateSearchQuery(e.target.value)}
                    placeholder="Search certificates..."
                    className="w-full bg-[#F8FAFC] border border-gray-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                  />
                </div>

                {/* Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Classes */}
                  <div className="relative">
                    <select
                      value={certificateClassFilter}
                      onChange={(e) => setCertificateClassFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Classes">All Classes</option>
                      <option value="Nahwu for Beginners">Nahwu for Beginners</option>
                      <option value="Arabic Conversation">Arabic Conversation</option>
                      <option value="Academic Writing">Academic Writing</option>
                      <option value="Islamic History">Islamic History</option>
                      <option value="Environmental Management">Environmental Management</option>
                      <option value="Data Analysis Basics">Data Analysis Basics</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Types */}
                  <div className="relative">
                    <select
                      value={certificateTypeFilter}
                      onChange={(e) => setCertificateTypeFilter(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Course Completion">Course Completion</option>
                      <option value="Specialization Certificate">Specialization Certificate</option>
                      <option value="Honor Certificate">Honor Certificate</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={certificateSortOrder}
                      onChange={(e) => setCertificateSortOrder(e.target.value)}
                      className="appearance-none bg-[#F8FAFC] border border-gray-200/80 hover:border-gray-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="Newest First">Newest First</option>
                      <option value="Oldest First">Oldest First</option>
                      <option value="Course Name">Course Name</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. MAIN TWO-COLUMN LAYOUT: 3x2 CERTIFICATES GRID + RIGHT DETAILS SIDEBAR */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT CANVAS: 6 CERTIFICATES GRID */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {studentCertificatesList
                      .filter(c => {
                        if (certificateTabFilter === 'completed') return c.status === 'completed';
                        if (certificateTabFilter === 'in_progress') return c.status === 'in_progress';
                        if (certificateTabFilter === 'not_started') return c.status === 'not_started';
                        return true;
                      })
                      .filter(c => {
                        if (certificateClassFilter !== 'All Classes' && c.course !== certificateClassFilter) return false;
                        if (certificateTypeFilter !== 'All Types' && c.certificateType !== certificateTypeFilter) return false;
                        if (certificateSearchQuery) {
                          const sq = certificateSearchQuery.toLowerCase();
                          return c.title.toLowerCase().includes(sq) || c.instructor.toLowerCase().includes(sq) || c.credentialId.toLowerCase().includes(sq);
                        }
                        return true;
                      })
                      .map((cert) => {
                        const isSelected = selectedCertificateId === cert.id;
                        return (
                          <div
                            key={cert.id}
                            onClick={() => setSelectedCertificateId(cert.id)}
                            className={`bg-white rounded-2xl p-3 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${
                              isSelected
                                ? 'border-2 border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                                : 'border border-gray-200/80 hover:border-emerald-300'
                            }`}
                          >
                            {/* Visual Certificate Card Mockup */}
                            <div className="relative aspect-[1.42/1] rounded-xl overflow-hidden bg-[#FAF8F3] border-2 border-amber-200/70 p-2.5 flex flex-col justify-between text-center select-none shadow-inner">
                              
                              {/* Ornate corner frame */}
                              <div className="absolute inset-1 border border-amber-300/80 rounded-lg pointer-events-none"></div>

                              {/* Top Verified Checkmark Badge if selected */}
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black shadow-xs z-10">
                                  ✓
                                </div>
                              )}

                              {/* Certificate Header */}
                              <div className="relative z-0 pt-0.5 space-y-0.5">
                                <div className="flex items-center justify-center gap-1">
                                  <div className="w-3.5 h-3.5 rounded bg-[#114B44] text-[#E6F4F1] flex items-center justify-center text-[7px] font-black">
                                    ✦
                                  </div>
                                  <span className="text-[10px] font-black text-gray-900 tracking-wider">IlmHub</span>
                                </div>
                                <h4 className="text-[11px] font-black text-gray-800 tracking-tight font-serif">
                                  Certificate of Completion
                                </h4>
                                <p className="text-[7.5px] text-gray-400 italic -mt-0.5">This certifies that</p>
                              </div>

                              {/* Student Name & Course */}
                              <div className="relative z-0 py-0.5 space-y-0.5">
                                <h3 className="text-xs font-black text-gray-900 tracking-tight font-serif text-[#114B44]">
                                  {studentName}
                                </h3>
                                <p className="text-[7px] text-gray-400">has successfully completed the course</p>
                                <p className="text-[9.5px] font-extrabold text-gray-900 leading-tight truncate px-1">
                                  {cert.title}
                                </p>
                                <p className="text-[7px] text-gray-400">{cert.completionDate}</p>
                              </div>

                              {/* Certificate Footer with Signature, Gold Seal, QR code */}
                              <div className="relative z-0 flex items-center justify-between pt-1 border-t border-amber-200/60 px-1">
                                <div className="text-left">
                                  <span className="font-serif italic text-[8px] font-bold text-gray-800 block -mb-0.5 truncate max-w-[50px]">
                                    {cert.instructor.split(' ')[1] || cert.instructor}
                                  </span>
                                  <span className="text-[6.5px] text-gray-400 font-semibold block">Instructor</span>
                                </div>

                                {/* Golden Seal Stamp */}
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center text-[7px] text-amber-950 font-black shadow-xs border border-amber-200">
                                  ★
                                </div>

                                {/* QR Code Stamp Mockup */}
                                <div className="w-4 h-4 rounded bg-gray-900 p-0.5 flex flex-wrap gap-0.5 items-center justify-center">
                                  <div className="w-1 h-1 bg-white rounded-xs"></div>
                                  <div className="w-1 h-1 bg-white rounded-xs"></div>
                                </div>
                              </div>

                            </div>

                            {/* Card Details under thumbnail */}
                            <div className="pt-2.5 flex items-center justify-between gap-2">
                              <div className="min-w-0">
                                <h3 className="font-extrabold text-xs text-gray-900 truncate group-hover:text-[#114B44] transition-colors">
                                  {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`text-[9px] font-bold px-2 py-0.2 rounded-full border ${cert.statusColor}`}>
                                    {cert.statusBadge}
                                  </span>
                                  <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                                    <Calendar className="w-2.5 h-2.5" />
                                    <span>{cert.shortDate}</span>
                                  </span>
                                </div>
                              </div>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert(`Detail sertifikat: ${cert.title}\nCredential ID: ${cert.credentialId}`);
                                }}
                                className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer shrink-0"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </div>

                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* RIGHT SIDEBAR: CERTIFICATE SUMMARY + DETAILS PANE */}
                <aside className="w-full lg:w-72 xl:w-80 shrink-0 space-y-4">
                  
                  {/* CARD 1: Certificate Summary (4 Stats Grid) */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Certificate Summary</h3>
                      <button
                        onClick={() => setCertificateTabFilter('all')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-base font-black text-gray-900 leading-none">6</span>
                          <span className="text-[10px] font-bold text-gray-500">Earned</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                          <BarChart2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-base font-black text-gray-900 leading-none">2</span>
                          <span className="text-[10px] font-bold text-gray-500">In Progress</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                          <Trophy className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-base font-black text-gray-900 leading-none">3</span>
                          <span className="text-[10px] font-bold text-gray-500">Available</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                          <Star className="w-4 h-4 text-purple-700" />
                        </div>
                        <div>
                          <span className="block text-base font-black text-gray-900 leading-none">9</span>
                          <span className="text-[10px] font-bold text-gray-500">Total Classes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: Certificate Details (Viewer for Selected Certificate) */}
                  {(() => {
                    const selectedCert = studentCertificatesList.find(c => c.id === selectedCertificateId) || studentCertificatesList[0];
                    return (
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3.5">
                        <h3 className="font-extrabold text-xs text-gray-900 tracking-tight pb-1 border-b border-gray-100">
                          Certificate Details
                        </h3>

                        {/* Certificate Big Visual Preview */}
                        <div className="relative aspect-[1.42/1] rounded-2xl bg-[#FAF8F3] border-2 border-amber-300 p-4 text-center flex flex-col justify-between select-none shadow-xs">
                          <div className="absolute inset-1.5 border border-amber-400/80 rounded-xl pointer-events-none"></div>

                          {/* Top Header */}
                          <div className="relative z-0 space-y-0.5">
                            <div className="flex items-center justify-center gap-1">
                              <div className="w-4 h-4 rounded bg-[#114B44] text-[#E6F4F1] flex items-center justify-center text-[8px] font-black">
                                ✦
                              </div>
                              <span className="text-xs font-black text-gray-900 tracking-wider">IlmHub</span>
                            </div>
                            <h4 className="text-xs font-black text-gray-900 tracking-tight font-serif">
                              Certificate of Completion
                            </h4>
                            <p className="text-[8px] text-gray-400 italic">This certifies that</p>
                          </div>

                          {/* Student & Course Name */}
                          <div className="relative z-0 space-y-0.5 py-1">
                            <h3 className="text-sm font-black text-[#114B44] tracking-tight font-serif">
                              {studentName}
                            </h3>
                            <p className="text-[8px] text-gray-500">has successfully completed the course</p>
                            <h4 className="text-xs font-extrabold text-gray-900 font-serif">
                              {selectedCert.title}
                            </h4>
                            <p className="text-[8px] text-gray-400 font-medium">{selectedCert.completionDate}</p>
                          </div>

                          {/* Signature + Seal + QR */}
                          <div className="relative z-0 flex items-center justify-between pt-1 border-t border-amber-200/80 px-2">
                            <div className="text-left">
                              <span className="font-serif italic text-[9px] font-bold text-gray-800 block -mb-0.5">
                                {selectedCert.instructor.split(' ')[1] || selectedCert.instructor}
                              </span>
                              <span className="text-[7.5px] text-gray-400 font-semibold block">Instructor</span>
                            </div>

                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center text-[9px] text-amber-950 font-black shadow-xs border border-amber-200">
                              ★
                            </div>

                            <div className="w-5 h-5 rounded bg-gray-900 p-0.5 flex flex-wrap gap-0.5 items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-xs"></div>
                            </div>
                          </div>
                        </div>

                        {/* Metadata Rows */}
                        <div className="space-y-2 text-xs pt-1 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Course</span>
                            <span className="font-extrabold text-gray-900 truncate max-w-[160px]">{selectedCert.course}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Instructor</span>
                            <span className="font-extrabold text-gray-900 truncate max-w-[160px]">{selectedCert.instructor}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Completion Date</span>
                            <span className="font-extrabold text-gray-900">{selectedCert.completionDate}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Credential ID</span>
                            <span className="font-mono text-[11px] font-bold text-gray-800">{selectedCert.credentialId}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Certificate Type</span>
                            <span className="font-extrabold text-gray-900">{selectedCert.certificateType}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 pt-2">
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => alert(`Mengunduh sertifikat ${selectedCert.title} (PDF)...`)}
                              className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download (PDF)</span>
                            </button>

                            <button
                              onClick={() => setIsShareModalOpen(true)}
                              className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                              <span>Share</span>
                            </button>
                          </div>

                          <button
                            onClick={() => setIsVerifyModalOpen(true)}
                            className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                            <span>Verify Certificate</span>
                          </button>
                        </div>
                      </div>
                    );
                  })()}

                </aside>

              </div>

              {/* VERIFY CERTIFICATE MODAL POPUP */}
              {isVerifyModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">Verify Certificate</h3>
                          <p className="text-xs text-gray-500">IlmHub Official Blockchain Verification</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsVerifyModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Enter Credential ID</label>
                        <input
                          type="text"
                          defaultValue="ILMHUB-2026-NB-00123"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 font-mono text-xs font-bold text-gray-900 focus:outline-none focus:border-[#114B44]"
                        />
                      </div>

                      <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Authentic Verified Certificate</span>
                        </div>
                        <p className="text-[11px] text-emerald-900 leading-relaxed">
                          Issued to <strong>Aisha Rahman</strong> for completing <strong>Nahwu for Beginners</strong> on 25 Sep 2026.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsVerifyModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          setIsVerifyModalOpen(false);
                          alert('Sertifikat terverifikasi valid!');
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Verify Now
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SHARE CERTIFICATE MODAL POPUP */}
              {isShareModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <Share2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">Share Certificate</h3>
                          <p className="text-xs text-gray-500">Showcase your achievement to the world</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsShareModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Public Certificate Link</label>
                        <div className="flex items-center gap-1.5">
                          <input
                            type="text"
                            readOnly
                            value="https://ilmhub.org/verify/ILMHUB-2026-NB-00123"
                            className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-[11px] font-mono font-semibold text-gray-700"
                          />
                          <button
                            onClick={() => alert('Tautan sertifikat berhasil disalin ke clipboard!')}
                            className="px-3 py-2.5 bg-[#114B44] text-white rounded-xl font-bold text-xs shrink-0 cursor-pointer shadow-xs"
                          >
                            Copy
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <button
                          onClick={() => alert('Membuka LinkedIn Share...')}
                          className="p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-colors cursor-pointer border border-blue-200"
                        >
                          <span className="text-sm">💼</span>
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => alert('Membuka WhatsApp Share...')}
                          className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-colors cursor-pointer border border-emerald-200"
                        >
                          <span className="text-sm">💬</span>
                          <span>WhatsApp</span>
                        </button>
                        <button
                          onClick={() => alert('Membuka Twitter/X Share...')}
                          className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-colors cursor-pointer border border-gray-300"
                        >
                          <span className="text-sm">🐦</span>
                          <span>Twitter/X</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-end pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsShareModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : activeNav === 'messages' ? (
            /* ========================================================= */
            /* VIEW: MESSAGES ROOM (MATCHING media_1790728623094.jpg)    */
            /* ========================================================= */
            <div className="space-y-4">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Messages</h1>
                    <p className="text-xs text-gray-500 font-medium">Chat with your teachers, classmates, and class groups.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Header Search Box */}
                  <div className="relative w-56 sm:w-64">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={messageSearchQuery}
                      onChange={(e) => setMessageSearchQuery(e.target.value)}
                      placeholder="Search messages..."
                      className="w-full bg-white border border-gray-200/90 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] shadow-2xs font-medium"
                    />
                  </div>

                  {/* New Message Button */}
                  <button
                    onClick={() => setIsNewMessageModalOpen(true)}
                    className="flex items-center gap-1.5 bg-[#114B44] hover:bg-[#0D3B35] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Message</span>
                  </button>
                </div>
              </div>

              {/* 2. 3-PANEL MESSAGING INTERFACE */}
              {(() => {
                const activeConv = studentConversationsList.find(c => c.id === activeConversationId) || studentConversationsList[0];
                const messagesList = (activeChatMessages[activeConv.id] || activeConv.messages || []);

                const handleSendMessage = () => {
                  if (!chatInputText.trim()) return;
                  const newMsg = {
                    id: 'm-' + Date.now(),
                    sender: 'me',
                    senderName: studentName,
                    text: chatInputText.trim(),
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    status: 'sent'
                  };
                  setActiveChatMessages(prev => ({
                    ...prev,
                    [activeConv.id]: [...(prev[activeConv.id] || activeConv.messages || []), newMsg]
                  }));
                  setChatInputText('');
                };

                return (
                  <div className="flex flex-col lg:flex-row gap-4 items-stretch h-[calc(100vh-210px)] min-h-[580px]">
                    
                    {/* PANEL 1: CONVERSATIONS LIST (LEFT) */}
                    <div className="w-full lg:w-72 xl:w-80 shrink-0 bg-white rounded-3xl border border-gray-200/90 shadow-2xs flex flex-col overflow-hidden">
                      
                      {/* Filter Pills */}
                      <div className="p-3 border-b border-gray-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                        {[
                          { id: 'all', label: 'All' },
                          { id: 'unread', label: 'Unread', badge: '5', badgeColor: 'bg-rose-500 text-white' },
                          { id: 'groups', label: 'Groups' },
                          { id: 'teachers', label: 'Teachers' },
                        ].map((f) => {
                          const isActive = messageFilter === f.id;
                          return (
                            <button
                              key={f.id}
                              onClick={() => setMessageFilter(f.id)}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                isActive
                                  ? 'bg-[#114B44] text-white shadow-2xs'
                                  : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                              }`}
                            >
                              <span>{f.label}</span>
                              {f.badge && (
                                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-black ${
                                  isActive ? 'bg-white/20 text-white' : f.badgeColor
                                }`}>
                                  {f.badge}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Conversations Scrollable List */}
                      <div className="flex-1 overflow-y-auto divide-y divide-gray-100/70 p-1.5 space-y-0.5">
                        {studentConversationsList
                          .filter(c => {
                            if (messageFilter === 'unread') return c.unreadCount || c.unreadDot;
                            if (messageFilter === 'groups') return c.isGroup;
                            if (messageFilter === 'teachers') return c.type === 'teacher';
                            return true;
                          })
                          .filter(c => {
                            if (messageSearchQuery) {
                              const q = messageSearchQuery.toLowerCase();
                              return c.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q) || c.course.toLowerCase().includes(q);
                            }
                            return true;
                          })
                          .map((conv) => {
                            const isSelected = activeConversationId === conv.id;
                            return (
                              <div
                                key={conv.id}
                                onClick={() => setActiveConversationId(conv.id)}
                                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-emerald-50/70 border-l-4 border-[#114B44] shadow-2xs'
                                    : 'hover:bg-gray-50/80 border-l-4 border-transparent'
                                }`}
                              >
                                {/* Avatar */}
                                <div className="relative shrink-0">
                                  {conv.isGroup ? (
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center border border-blue-200 font-bold shadow-2xs">
                                      <Users className="w-5 h-5" />
                                    </div>
                                  ) : (
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shadow-2xs">
                                      <img
                                        src={conv.avatar}
                                        alt={conv.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = '/images/student_aisha.jpg'; }}
                                      />
                                    </div>
                                  )}
                                  {conv.isOnline && (
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                                  )}
                                </div>

                                {/* Info */}
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <h4 className={`text-xs font-extrabold truncate leading-tight ${
                                      isSelected ? 'text-[#114B44]' : 'text-gray-900'
                                    }`}>
                                      {conv.name}
                                    </h4>
                                    <span className="text-[10px] font-semibold text-gray-400 shrink-0">
                                      {conv.time}
                                    </span>
                                  </div>

                                  <p className="text-[11px] text-gray-500 truncate mt-0.5">
                                    {conv.lastMessage}
                                  </p>
                                </div>

                                {/* Unread Badge or Dot */}
                                {conv.unreadCount ? (
                                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-black flex items-center justify-center shrink-0 shadow-2xs">
                                    {conv.unreadCount}
                                  </span>
                                ) : conv.unreadDot ? (
                                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                                ) : null}
                              </div>
                            );
                          })}
                      </div>

                    </div>

                    {/* PANEL 2: CENTER CHAT THREAD (CANVAS) */}
                    <div className="flex-1 min-w-0 bg-white rounded-3xl border border-gray-200/90 shadow-2xs flex flex-col overflow-hidden">
                      
                      {/* Chat Top Bar Header */}
                      <div className="p-3.5 px-5 border-b border-gray-100 flex items-center justify-between gap-3 bg-[#FAFBFD]">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative shrink-0">
                            {activeConv.isGroup ? (
                              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center border border-blue-200">
                                <Users className="w-5 h-5" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-emerald-300">
                                <img
                                  src={activeConv.avatar}
                                  alt={activeConv.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                                />
                              </div>
                            )}
                            {activeConv.isOnline && (
                              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-black text-sm text-gray-900 truncate leading-tight flex items-center gap-2">
                              <span>{activeConv.name}</span>
                              {activeConv.isOnline && (
                                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  <span>Online</span>
                                </span>
                              )}
                            </h3>
                            <p className="text-[11px] text-gray-500 truncate">
                              {activeConv.role} • {activeConv.course}
                            </p>
                          </div>
                        </div>

                        {/* Top Call & Option Action Icons */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => alert(`Memulai Video Call dengan ${activeConv.name}...`)}
                            className="p-2 text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                            title="Video Call"
                          >
                            <Video className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => alert(`Memulai Audio Call dengan ${activeConv.name}...`)}
                            className="p-2 text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                            title="Audio Call"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => alert(`Opsi obrolan dengan ${activeConv.name}`)}
                            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Chat Messages Stream */}
                      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F8FAFC]/50">
                        
                        {/* Centered Date Badge */}
                        <div className="flex items-center justify-center">
                          <span className="bg-gray-200/70 text-gray-600 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-2xs">
                            Today
                          </span>
                        </div>

                        {/* Messages List */}
                        {messagesList.map((msg) => {
                          const isMe = msg.sender === 'me';
                          return (
                            <div
                              key={msg.id}
                              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                            >
                              <div
                                className={`max-w-md sm:max-w-lg p-3.5 sm:p-4 rounded-2xl shadow-2xs text-xs space-y-2.5 ${
                                  isMe
                                    ? 'bg-[#E7F3F1] border border-emerald-200 text-gray-900 rounded-tr-xs'
                                    : 'bg-white border border-gray-200/90 text-gray-800 rounded-tl-xs'
                                }`}
                              >
                                <p className="leading-relaxed whitespace-pre-line font-medium text-xs">
                                  {msg.text}
                                </p>

                                {/* File Attachment if present */}
                                {msg.attachment && (
                                  <div className="p-3 bg-white/90 rounded-xl border border-gray-200 flex items-center justify-between gap-3 shadow-2xs mt-2">
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center text-xs font-black shrink-0">
                                        📄
                                      </div>
                                      <div className="min-w-0">
                                        <h5 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">
                                          {msg.attachment.name}
                                        </h5>
                                        <span className="text-[9px] text-gray-400 font-semibold">
                                          {msg.attachment.type} • {msg.attachment.size}
                                        </span>
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => alert(`Mengunduh berkas: ${msg.attachment.name}`)}
                                      className="p-1.5 text-gray-500 hover:text-[#114B44] hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer shrink-0"
                                      title="Download Attachment"
                                    >
                                      <Download className="w-4 h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* Timestamp + Read Receipt */}
                              <div className="flex items-center gap-1 mt-1 px-1">
                                <span className="text-[10px] text-gray-400 font-semibold">{msg.time}</span>
                                {isMe && (
                                  <span className="text-emerald-600 text-[10px] font-bold">✓✓</span>
                                )}
                              </div>
                            </div>
                          );
                        })}

                      </div>

                      {/* Chat Input Bar */}
                      <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                        <button
                          onClick={() => alert('Lampirkan berkas (PDF, DOCX, gambar)...')}
                          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                          title="Attach file"
                        >
                          <Paperclip className="w-4 h-4" />
                        </button>

                        <input
                          type="text"
                          value={chatInputText}
                          onChange={(e) => setChatInputText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSendMessage();
                          }}
                          placeholder="Type a message..."
                          className="flex-1 bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#114B44] focus:bg-white transition-all shadow-2xs font-medium"
                        />

                        <button
                          onClick={() => alert('Pilih Emoji 😊')}
                          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                          title="Add emoji"
                        >
                          <Smile className="w-4 h-4" />
                        </button>

                        <button
                          onClick={handleSendMessage}
                          className="w-9 h-9 rounded-xl bg-[#114B44] hover:bg-[#0D3B35] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                          title="Send Message"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                    {/* PANEL 3: RIGHT SIDEBAR (CHAT DETAILS & SHARED FILES) */}
                    <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4 overflow-y-auto">
                      
                      {/* CARD 1: Chat Details */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3.5 text-center">
                        <h3 className="font-extrabold text-xs text-gray-900 tracking-tight text-left pb-1 border-b border-gray-100">
                          Chat Details
                        </h3>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-emerald-300 shadow-2xs relative">
                            <img
                              src={activeConv.avatar}
                              alt={activeConv.name}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.src = '/images/tutor_ahmed.jpg'; }}
                            />
                          </div>

                          <h4 className="font-black text-sm text-gray-900 mt-2 leading-tight">
                            {activeConv.name}
                          </h4>
                          <span className="text-xs text-gray-400 font-semibold">{activeConv.role}</span>

                          {activeConv.isOnline && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              <span>Online</span>
                            </span>
                          )}
                        </div>

                        {/* 4 Action Buttons Grid */}
                        <div className="grid grid-cols-4 gap-1 pt-1 text-center">
                          <button
                            onClick={() => alert(`Memulai Video Call dengan ${activeConv.name}...`)}
                            className="p-2 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-1 cursor-pointer transition-colors border border-gray-100"
                          >
                            <Video className="w-4 h-4" />
                            <span className="text-[8px] font-bold truncate">Video Call</span>
                          </button>

                          <button
                            onClick={() => alert(`Memulai Audio Call dengan ${activeConv.name}...`)}
                            className="p-2 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-1 cursor-pointer transition-colors border border-gray-100"
                          >
                            <Phone className="w-4 h-4" />
                            <span className="text-[8px] font-bold truncate">Audio Call</span>
                          </button>

                          <button
                            onClick={() => alert(`Membuka Profil ${activeConv.name}`)}
                            className="p-2 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-1 cursor-pointer transition-colors border border-gray-100"
                          >
                            <User className="w-4 h-4" />
                            <span className="text-[8px] font-bold truncate">View Profile</span>
                          </button>

                          <button
                            onClick={() => alert(`Pengaturan obrolan ${activeConv.name}`)}
                            className="p-2 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-[#114B44] flex flex-col items-center gap-1 cursor-pointer transition-colors border border-gray-100"
                          >
                            <MoreVertical className="w-4 h-4" />
                            <span className="text-[8px] font-bold truncate">More</span>
                          </button>
                        </div>
                      </div>

                      {/* CARD 2: Shared Files */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                          <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Shared Files</h3>
                          <button
                            onClick={() => alert('Melihat semua berkas yang dibagikan...')}
                            className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>View All</span>
                            <span>→</span>
                          </button>
                        </div>

                        <div className="space-y-2.5">
                          {(activeConv.sharedFiles || []).map((file, idx) => (
                            <div
                              key={idx}
                              onClick={() => alert(`Mengunduh berkas: ${file.name}`)}
                              className="p-2 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:bg-emerald-50/50 flex items-center gap-2.5 transition-colors cursor-pointer"
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 border ${
                                file.type === 'pdf' ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                              }`}>
                                {file.type === 'pdf' ? '📄' : '📝'}
                              </div>

                              <div className="min-w-0 flex-1">
                                <h5 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">
                                  {file.name}
                                </h5>
                                <span className="text-[9px] text-gray-400 font-semibold">
                                  {file.size} • {file.date}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CARD 3: Class Information */}
                      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                        <h3 className="font-extrabold text-xs text-gray-900 tracking-tight pb-1 border-b border-gray-100">
                          Class Information
                        </h3>

                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <img
                              src="/images/class_nahwu.jpg"
                              alt="Class banner"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-extrabold text-xs text-gray-900 truncate">{activeConv.course}</h4>
                            <p className="text-[10px] text-gray-400">Arabic • Beginner</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveNav('classes')}
                          className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Go to Class</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </aside>

                  </div>
                );
              })()}

              {/* NEW MESSAGE MODAL POPUP */}
              {isNewMessageModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">New Message</h3>
                          <p className="text-xs text-gray-500">Send a direct message or create a discussion</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsNewMessageModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">To (Teacher or Group)</label>
                        <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#114B44]">
                          <option value="conv-1">Ustadz Ahmad Fauzi (Nahwu for Beginners)</option>
                          <option value="conv-2">Arabic Conversation (Class Group)</option>
                          <option value="conv-3">Dr. Layla Ahmad (Academic Writing)</option>
                          <option value="conv-4">Ustadz Ali Khan (Islamic History)</option>
                          <option value="conv-5">Study Group - Beginners</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Type your message here..."
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-[#114B44] resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsNewMessageModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsNewMessageModalOpen(false);
                          alert('Pesan berhasil dikirim!');
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : activeNav === 'earnings' ? (
            /* ========================================================= */
            /* VIEW: EARNINGS ROOM (MATCHING media_1790728958033.jpg)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* 1. PAGE TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#114B44] text-white flex items-center justify-center shadow-xs">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Earnings</h1>
                    <p className="text-xs text-gray-500 font-medium">Track your earnings from completed classes, quizzes, assignments, and achievements.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <select
                      value={earningsMonth}
                      onChange={(e) => setEarningsMonth(e.target.value)}
                      className="appearance-none bg-white border border-gray-200/90 hover:border-gray-300 rounded-xl pl-3.5 pr-8 py-2 text-xs font-bold text-gray-700 focus:outline-none focus:border-[#114B44] cursor-pointer shadow-2xs transition-all"
                    >
                      <option value="September 2026">📅 September 2026</option>
                      <option value="August 2026">📅 August 2026</option>
                      <option value="July 2026">📅 July 2026</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 2. TOP 4 KPI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Total Earnings */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block">Total Earnings</span>
                    <span className="text-xl font-black text-gray-900 leading-tight">$86.50</span>
                    <span className="text-[10px] font-bold text-emerald-600 block mt-0.5">
                      ↑ +12% this month
                    </span>
                  </div>
                </div>

                {/* Class Rewards */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block">Class Rewards</span>
                    <span className="text-xl font-black text-gray-900 leading-tight">$52.00</span>
                    <span className="text-[10px] font-semibold text-gray-400 block mt-0.5">
                      6 classes completed
                    </span>
                  </div>
                </div>

                {/* Quiz Rewards */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block">Quiz Rewards</span>
                    <span className="text-xl font-black text-gray-900 leading-tight">$18.50</span>
                    <span className="text-[10px] font-semibold text-gray-400 block mt-0.5">
                      8 quizzes completed
                    </span>
                  </div>
                </div>

                {/* Assignment Rewards */}
                <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 block">Assignment Rewards</span>
                    <span className="text-xl font-black text-gray-900 leading-tight">$16.00</span>
                    <span className="text-[10px] font-semibold text-gray-400 block mt-0.5">
                      4 assignments completed
                    </span>
                  </div>
                </div>

              </div>

              {/* 3. MAIN TWO-COLUMN LAYOUT */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                
                {/* LEFT CANVAS: CHART + ACTIVITY + RECENT EARNINGS */}
                <div className="flex-1 min-w-0 space-y-5 w-full">
                  
                  {/* SECTION 1: Earnings Overview Chart */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-gray-900 tracking-tight">Earnings Overview</h3>
                      
                      {/* Period Pill Switcher: Week / Month / Year */}
                      <div className="flex items-center bg-[#F1F5F9] p-1 rounded-xl">
                        {['Week', 'Month', 'Year'].map((p) => {
                          const isActive = earningsPeriod === p;
                          return (
                            <button
                              key={p}
                              onClick={() => setEarningsPeriod(p)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#114B44] text-white shadow-2xs'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bar Chart Canvas */}
                    <div className="pt-2">
                      <div className="flex items-end gap-2 h-48 w-full">
                        {/* Y-Axis Scale */}
                        <div className="flex flex-col justify-between h-full text-[10px] font-bold text-gray-400 pr-1 shrink-0 pb-6 select-none">
                          <span>$30</span>
                          <span>$20</span>
                          <span>$10</span>
                          <span>$0</span>
                        </div>

                        {/* Chart Area with Gridlines & Columns */}
                        <div className="relative flex-1 h-full flex flex-col justify-end">
                          {/* Horizontal Background Gridlines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 pb-6">
                            <div className="border-b border-gray-200 w-full"></div>
                            <div className="border-b border-gray-100 w-full"></div>
                            <div className="border-b border-gray-100 w-full"></div>
                            <div className="border-b border-gray-200 w-full"></div>
                          </div>

                          {/* Daily Bars */}
                          <div className="relative z-0 h-[80%] flex items-end justify-between gap-1 sm:gap-1.5 px-1">
                            {earningsDailyChart.map((item, i) => (
                              <div key={i} className="flex-1 h-full flex flex-col items-center justify-end group relative cursor-pointer">
                                {/* Tooltip */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-10 pointer-events-none">
                                  {item.date}: ${item.amount.toFixed(2)}
                                </div>
                                <div
                                  className={`w-full rounded-t-sm transition-all duration-300 ${
                                    item.isPeak
                                      ? 'bg-emerald-500 hover:bg-emerald-600'
                                      : 'bg-emerald-300/80 hover:bg-emerald-400'
                                  }`}
                                  style={{ height: `${item.heightPct}%` }}
                                ></div>
                              </div>
                            ))}
                          </div>

                          {/* X-Axis Labels */}
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

                  {/* SECTION 2: Earnings by Activity (4 Cards Grid) */}
                  <div className="space-y-3">
                    <h3 className="font-extrabold text-base text-gray-900 tracking-tight">Earnings by Activity</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
                      {earningsActivitiesList.map((act) => {
                        const Icon = act.icon;
                        return (
                          <div
                            key={act.id}
                            className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs space-y-3"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${act.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="font-extrabold text-xs text-gray-800">{act.title}</span>
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-base font-black text-gray-900">{act.amount}</span>
                                <span className="text-xs font-bold text-gray-400">{act.pct}%</span>
                              </div>

                              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${act.barColor}`}
                                  style={{ width: `${act.pct}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SECTION 3: Recent Earnings Table */}
                  <div className="bg-white rounded-3xl border border-gray-200/90 p-5 shadow-2xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-gray-900 tracking-tight">Recent Earnings</h3>
                      <button
                        onClick={() => alert('Melihat seluruh riwayat pendapatan...')}
                        className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="text-gray-400 text-[10.5px] font-extrabold uppercase tracking-wider border-b border-gray-100 pb-2">
                            <th className="pb-2.5 font-extrabold">Date</th>
                            <th className="pb-2.5 font-extrabold">Activity</th>
                            <th className="pb-2.5 font-extrabold">Class</th>
                            <th className="pb-2.5 font-extrabold">Amount</th>
                            <th className="pb-2.5 font-extrabold text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100/80 font-medium">
                          {recentEarningsList.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50/70 transition-colors">
                              <td className="py-3 text-gray-500 font-semibold">{row.date}</td>
                              <td className="py-3">
                                <div className="flex items-center gap-2">
                                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs border ${row.activityIconBg}`}>
                                    {row.activityIcon}
                                  </span>
                                  <span className="font-bold text-gray-900">{row.activity}</span>
                                </div>
                              </td>
                              <td className="py-3 text-gray-600">{row.class}</td>
                              <td className="py-3 font-black text-emerald-700">{row.amount}</td>
                              <td className="py-3 text-right">
                                <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* RIGHT SIDEBAR (MATCHING media_1790728958033.jpg) */}
                <aside className="w-full lg:w-64 xl:w-72 shrink-0 space-y-4">
                  
                  {/* CARD 1: Withdraw Earnings */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3.5">
                    <h3 className="font-extrabold text-xs text-gray-900 tracking-tight pb-1 border-b border-gray-100">
                      Withdraw Earnings
                    </h3>

                    {/* Available Balance Box */}
                    <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center shrink-0">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 block">Available Balance</span>
                        <span className="text-lg font-black text-gray-900 leading-tight">$86.50</span>
                      </div>
                    </div>

                    {/* Withdraw Button */}
                    <button
                      onClick={() => setIsWithdrawModalOpen(true)}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 rotate-180" />
                      <span>Withdraw Now</span>
                    </button>

                    <p className="text-[10px] text-gray-400 text-center font-medium -mt-1">
                      Minimum withdrawal: $10.00
                    </p>
                  </div>

                  {/* CARD 2: Payment Method */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Payment Method</h3>
                      <button
                        onClick={() => setIsAddPaymentModalOpen(true)}
                        className="text-[10px] font-bold text-[#114B44] hover:underline cursor-pointer"
                      >
                        Manage
                      </button>
                    </div>

                    <div className="space-y-2">
                      {paymentMethodsList.map((pm) => (
                        <div
                          key={pm.id}
                          className="p-2.5 rounded-xl border border-gray-100 bg-[#F8FAFC] flex items-center justify-between gap-2.5 hover:bg-gray-100/60 transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs border shrink-0 ${pm.iconColor}`}>
                              {pm.iconType === 'paypal' ? 'P' : pm.iconType === 'bank' ? '🏦' : 'W'}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h5 className="font-extrabold text-[11px] text-gray-900 leading-tight truncate">{pm.name}</h5>
                                {pm.isPrimary && (
                                  <span className="text-[8px] font-black px-1.5 py-0.2 rounded-md bg-emerald-100 text-emerald-800">
                                    Primary
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-gray-400 truncate block">{pm.account}</span>
                            </div>
                          </div>

                          <button className="p-1 text-gray-400 hover:text-gray-600 rounded-md cursor-pointer shrink-0">
                            <MoreVertical className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsAddPaymentModalOpen(true)}
                      className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-gray-500" />
                      <span>Add Payment Method</span>
                    </button>
                  </div>

                  {/* CARD 3: Top Earning Classes */}
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                      <h3 className="font-extrabold text-xs text-gray-900 tracking-tight">Top Earning Classes</h3>
                      <button
                        onClick={() => setActiveNav('classes')}
                        className="text-[10px] font-bold text-[#114B44] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View All</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {topEarningClassesList.map((cls) => (
                        <div key={cls.id} className="flex items-center justify-between gap-2.5">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-9 h-9 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                              <img
                                src={cls.image}
                                alt={cls.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = '/images/class_nahwu.jpg'; }}
                              />
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-extrabold text-[11px] text-gray-900 truncate leading-tight">{cls.title}</h5>
                              <span className="text-[10px] text-gray-400 block">{cls.rewards}</span>
                            </div>
                          </div>

                          <span className="text-xs font-black text-[#114B44] shrink-0">{cls.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </aside>

              </div>

              {/* WITHDRAW MODAL POPUP */}
              {isWithdrawModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <Wallet className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">Withdraw Earnings</h3>
                          <p className="text-xs text-gray-500">Transfer your earnings to your payment method</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsWithdrawModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
                        <span className="text-gray-600 font-bold">Available Balance</span>
                        <span className="text-base font-black text-[#114B44]">$86.50</span>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Withdrawal Amount ($)</label>
                        <input
                          type="number"
                          value={withdrawAmountInput}
                          onChange={(e) => setWithdrawAmountInput(e.target.value)}
                          max="86.50"
                          min="10"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-[#114B44]"
                        />
                        <span className="text-[10px] text-gray-400 mt-1 block">Min: $10.00 • Max: $86.50</span>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Payment Method</label>
                        <select
                          value={selectedWithdrawMethod}
                          onChange={(e) => setSelectedWithdrawMethod(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#114B44]"
                        >
                          <option value="PayPal">PayPal (aisha.rahman@example.com) [Primary]</option>
                          <option value="Bank Transfer">Bank Transfer (•••• 1234)</option>
                          <option value="Wise">Wise (aisha.rahman@wise.com)</option>
                        </select>
                      </div>

                      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-[11px] space-y-1">
                        <div className="flex items-center justify-between text-gray-500">
                          <span>Transfer Fee</span>
                          <span className="font-bold text-emerald-600">Free ($0.00)</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-900 font-extrabold border-t border-gray-200 pt-1">
                          <span>Total to Receive</span>
                          <span>${withdrawAmountInput || '0.00'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsWithdrawModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsWithdrawModalOpen(false);
                          alert(`Permintaan penarikan $${withdrawAmountInput} ke ${selectedWithdrawMethod} berhasil diajukan!`);
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Confirm Withdrawal
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ADD PAYMENT METHOD MODAL POPUP */}
              {isAddPaymentModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#114B44] flex items-center justify-center">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-black text-base text-gray-900 leading-tight">Add Payment Method</h3>
                          <p className="text-xs text-gray-500">Connect a new payout account</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsAddPaymentModalOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg text-xs cursor-pointer font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Method Type</label>
                        <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#114B44]">
                          <option value="paypal">PayPal</option>
                          <option value="bank">Bank Transfer (SWIFT / IBAN)</option>
                          <option value="wise">Wise Account</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Account Email / IBAN</label>
                        <input
                          type="text"
                          placeholder="e.g. yourname@paypal.com"
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Account Holder Name</label>
                        <input
                          type="text"
                          defaultValue={studentName}
                          className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 text-xs font-semibold focus:outline-none focus:border-[#114B44]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setIsAddPaymentModalOpen(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsAddPaymentModalOpen(false);
                          alert('Metode pembayaran baru berhasil disimpan!');
                        }}
                        className="px-5 py-2 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                      >
                        Save Method
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW: DEFAULT STUDENT OVERVIEW DASHBOARD (FULL & RICH)   */
            /* ========================================================= */
            <div className="space-y-6">
              
              {/* Top Greeting Header with Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Welcome back, {studentName.split(' ')[0]}!
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Continue your learning journey and explore upcoming classes.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3.5 py-2 rounded-xl shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Wednesday, 24 Sep 2026</span>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Enrolled Classes</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">8</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Completed</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">12 Lessons</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Certificates</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">3</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Learning Streak</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-0.5">15 Days</div>
                  </div>
                </div>
              </div>

              {/* Section 1: Continue Learning (Left 2 Cols) & Next Class (Right 1 Col) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Continue Learning Big Card */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-6 pb-3 flex items-center justify-between">
                      <h2 className="text-base font-extrabold text-gray-900">Continue Learning</h2>
                      <span className="text-xs font-bold text-[#114B44] bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span>📊 85% Completed</span>
                      </span>
                    </div>

                    <div className="px-6 space-y-4">
                      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                        <img 
                          src="/images/class_nahwu.jpg" 
                          alt="Nahwu for Beginners" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-extrabold text-lg text-gray-900">Nahwu for Beginners</h3>
                        <p className="text-xs text-gray-500 mt-0.5">by Ustadz Ahmad Fauzi</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-3">
                          <div className="h-full bg-[#114B44] rounded-full w-[85%]"></div>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">Lesson 12 of 14: <strong className="text-gray-700">Kaidah Maf'ul Bih dan Contoh Kalimat</strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <button
                      onClick={() => onJoinLive({
                        title: 'Nahwu for Beginners',
                        tutor: { name: 'Ustadz Ahmad Fauzi', avatar: '/images/tutor_ahmed.jpg' },
                        image: '/images/class_nahwu.jpg'
                      })}
                      className="w-full bg-[#114B44] hover:bg-[#0D3B35] text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-all"
                    >
                      <span>Continue Learning</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Next Class & Upcoming Classes */}
                <div className="space-y-4">
                  
                  {/* Next Class Card */}
                  <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-extrabold text-gray-900">Next Class</h2>
                      <button 
                        onClick={() => setActiveNav('classes')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 shrink-0">
                        <span className="block text-base font-extrabold text-gray-900">24</span>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">Sep</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-xs text-gray-900">Sharaf Basic</h4>
                        <span className="text-[11px] text-gray-500 block">🕒 13:00 - 14:30 (GMT+2)</span>
                        <span className="text-[11px] text-gray-400 block">with Ustadzah Fatimah Zahra</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onJoinLive({
                          title: 'Sharaf Basic',
                          tutor: { name: 'Ustadzah Fatimah Zahra', avatar: '/images/tutor_ahmed.jpg' },
                          image: '/images/class_conversation.jpg'
                        })}
                        className="flex-1 bg-[#114B44] hover:bg-[#0D3B35] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Join Class
                      </button>
                      <button 
                        onClick={() => alert('Jadwal kelas berhasil disinkronkan ke kalender Anda!')}
                        className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        <CalendarPlus className="w-3.5 h-3.5" />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  </div>

                  {/* Upcoming Classes */}
                  <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-extrabold text-gray-900">Upcoming Classes</h2>
                      <button 
                        onClick={() => setActiveNav('classes')}
                        className="text-[11px] font-bold text-[#114B44] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs">
                        <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                          <span className="block font-bold text-gray-900">26</span>
                          <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Arabic Conversation</h5>
                          <p className="text-[11px] text-gray-400">18:00 - 20:30 • with Ustadz Omar Hassan</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="text-center bg-gray-50 p-2 rounded-xl border border-gray-100 shrink-0 w-10">
                          <span className="block font-bold text-gray-900">28</span>
                          <span className="block text-[9px] text-gray-400 uppercase">Sep</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Academic Writing</h5>
                          <p className="text-[11px] text-gray-400">10:00 - 11:30 • with Dr. Layla Ahmad</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Section 2: My Active Classes (4 Horizontal Cards) */}
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-extrabold text-gray-900">My Active Classes</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Kelas-kelas yang sedang aktif Anda pelajari.</p>
                  </div>

                  <button 
                    onClick={() => setActiveNav('classes')}
                    className="text-xs font-bold text-[#114B44] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-center"
                  >
                    <span>View All (8 Classes)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studentClassesList.slice(0, 4).map((c) => (
                    <div 
                      key={c.id}
                      onClick={() => onJoinLive({
                        title: c.title,
                        tutor: { name: c.tutor, avatar: '/images/tutor_ahmed.jpg' },
                        image: c.image
                      })}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between cursor-pointer group"
                    >
                      <div>
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                          <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute top-2 right-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                            {c.primaryTag}
                          </span>
                        </div>
                        <div className="p-3.5 space-y-1">
                          <h4 className="font-extrabold text-xs text-gray-900 truncate group-hover:text-[#114B44] transition-colors">{c.title}</h4>
                          <p className="text-[11px] text-gray-400">{c.tutor}</p>
                        </div>
                      </div>

                      <div className="p-3.5 pt-0 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold">
                          <span className="text-gray-400">{c.completedLessons}/{c.totalLessons} Lessons</span>
                          <span className="text-emerald-700">{c.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#114B44] rounded-full" style={{ width: `${c.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Learning Progress Chart & Recommended for You */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Learning Progress (Left 2 Cols) */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900">Learning Progress</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Grafik jam belajar dan penyelesaian materi.</p>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer">
                      <span>September 2026</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>

                  {/* Visual Learning Progress Chart Canvas */}
                  <div className="pt-2">
                    <div className="flex items-end gap-2 h-44 w-full">
                      {/* Y-Axis scale */}
                      <div className="flex flex-col justify-between h-full text-[9px] font-bold text-gray-400 pr-1 shrink-0 pb-5 select-none">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                      </div>

                      {/* Chart Area with Gridlines & Columns */}
                      <div className="relative flex-1 h-full flex flex-col justify-end">
                        {/* Background Gridlines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40 pb-5">
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-100 w-full"></div>
                          <div className="border-b border-gray-200 w-full"></div>
                        </div>

                        {/* Bars */}
                        <div className="relative z-0 h-[82%] flex items-end justify-between gap-1.5 sm:gap-2 px-1">
                          {[
                            { label: '1 Sep', val: 45, hours: '1.5h' },
                            { label: '4 Sep', val: 65, hours: '2.5h' },
                            { label: '7 Sep', val: 35, hours: '1.2h' },
                            { label: '10 Sep', val: 85, hours: '3.5h' },
                            { label: '13 Sep', val: 50, hours: '2.0h' },
                            { label: '16 Sep', val: 95, hours: '4.0h' },
                            { label: '19 Sep', val: 70, hours: '2.8h' },
                            { label: '22 Sep', val: 80, hours: '3.2h' },
                            { label: '25 Sep', val: 90, hours: '3.8h', isToday: true },
                            { label: '28 Sep', val: 60, hours: '2.4h' },
                            { label: '30 Sep', val: 75, hours: '3.0h' },
                          ].map((item, i) => (
                            <div key={i} className="flex-1 h-full flex flex-col items-center justify-end group relative cursor-pointer">
                              {/* Hover Tooltip */}
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-10 pointer-events-none">
                                {item.hours} ({item.val}%)
                              </div>
                              <div 
                                className={`w-full rounded-t-lg transition-all duration-300 shadow-2xs ${
                                  item.isToday ? 'bg-[#114B44] ring-2 ring-[#114B44]/20' : 'bg-[#114B44] hover:bg-emerald-600'
                                }`}
                                style={{ height: `${item.val}%` }}
                              ></div>
                              <span className="text-[9px] font-semibold text-gray-400 mt-2 truncate">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Lessons Completed</span>
                      <span className="text-base font-black text-gray-900">12</span>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Study Time</span>
                      <span className="text-base font-black text-gray-900">18 hours</span>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-xl">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Average Score</span>
                      <span className="text-base font-black text-emerald-600">92%</span>
                    </div>
                  </div>
                </div>

                {/* Recommended for You (Right 1 Col) */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-gray-900">Recommended for You</h3>
                  </div>

                  <div className="space-y-3">
                    {recommendedCourses.map((rc) => (
                      <div key={rc.id} className="flex items-center justify-between gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img 
                            src={rc.avatar} 
                            alt={rc.tutor} 
                            className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0" 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/student_aisha.jpg';
                            }}
                          />
                          <div className="min-w-0">
                            <h5 className="font-extrabold text-xs text-gray-900 truncate">{rc.title}</h5>
                            <p className="text-[10px] text-gray-400 truncate">{rc.tutor}</p>
                            <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-0.5">
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                              <span>{rc.rating} ({rc.students} students)</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-black text-[#114B44] shrink-0">{rc.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Section 4: Explore More Classes Banner + Your Certificates */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Explore More Classes Wide Banner */}
                <div className="lg:col-span-2 relative rounded-3xl overflow-hidden p-6 text-white flex flex-col justify-between shadow-md">
                  <img 
                    src="/images/login_lms_desk_bg.jpg" 
                    alt="Explore Background" 
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                  />
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-extrabold">Explore More Classes</h3>
                    <p className="text-xs text-gray-200">Temukan ribuan kelas dan materi dari tutor berpengalaman di seluruh dunia.</p>
                  </div>

                  <div className="relative z-10 mt-6 max-w-md">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search classes, subjects, or tutors..."
                        className="w-full bg-white/95 text-gray-900 rounded-full pl-4 pr-10 py-2.5 text-xs placeholder-gray-400 focus:outline-none shadow-xs"
                      />
                      <button 
                        onClick={onExploreCourses}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#114B44] hover:bg-[#0D3B35] text-white rounded-full flex items-center justify-center cursor-pointer shadow-xs"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Your Certificates */}
                <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">Your Certificates</h3>
                    <button 
                      onClick={() => setActiveNav('classes')}
                      className="text-xs font-bold text-[#114B44] hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900">Islamic History</h5>
                        <p className="text-[10px] text-gray-400">Completed on 20 Sep 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-xs text-gray-900">Quran Tajweed Mastery</h5>
                        <p className="text-[10px] text-gray-400">Completed on 10 Sep 2026</p>
                      </div>
                    </div>
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
