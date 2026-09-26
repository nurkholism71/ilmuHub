import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SubjectCategories from './components/SubjectCategories';
import PopularClasses from './components/PopularClasses';
import TopTutors from './components/TopTutors';
import PromoBanners from './components/PromoBanners';
import WhyLearnWithUs from './components/WhyLearnWithUs';
import TrustStatsBar from './components/TrustStatsBar';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ExplorePage from './components/explore/ExplorePage';
import TutorsPage from './components/tutors/TutorsPage';
import ClassesPage from './components/classes/ClassesPage';
import FreeClassesPage from './components/freeclasses/FreeClassesPage';
import UniversityCoursesPage from './components/university/UniversityCoursesPage';
import LiveClassroomPage from './components/live/LiveClassroomPage';
import LoginPage from './components/auth/LoginPage';
import StudentDashboard from './components/dashboard/StudentDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ClassModal from './components/ClassModal';
import TutorModal from './components/TutorModal';
import AuthModal from './components/AuthModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState('universities'); // Default tab
  const [previousTab, setPreviousTab] = useState('universities');
  const [selectedSubject, setSelectedSubject] = useState('nahwu');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [activeLiveCourse, setActiveLiveCourse] = useState({
    title: 'Nahwu for Beginners',
    tutor: 'Ahmed Mohamed',
    thumbnail: '/images/class_nahwu.jpg',
    avatar: '/images/tutor_ahmed.jpg'
  });
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login' });
  const [currentUser, setCurrentUser] = useState(null);

  const handleJoinLive = (course) => {
    if (course) {
      setActiveLiveCourse({
        title: course.title || 'Nahwu for Beginners',
        tutor: course.tutor?.name || course.tutor || 'Ahmed Mohamed',
        thumbnail: course.image || course.thumbnail || '/images/class_nahwu.jpg',
        avatar: course.tutor?.avatar || course.avatar || '/images/tutor_ahmed.jpg'
      });
    }
    setPreviousTab(currentTab);
    setCurrentTab('live');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLogin = (mode = 'login') => {
    setPreviousTab(currentTab);
    setCurrentTab('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    // Direct user straight to their personalized dashboard according to role!
    setCurrentTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeaveLive = () => {
    setCurrentTab(previousTab === 'live' || previousTab === 'login' ? 'universities' : previousTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplore = () => {
    setCurrentTab('classes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBecomeTutor = () => {
    handleOpenLogin('signup');
  };

  // If on Fullscreen Live Classroom view
  if (currentTab === 'live') {
    return (
      <LiveClassroomPage
        courseTitle={activeLiveCourse.title}
        tutorName={activeLiveCourse.tutor}
        courseThumbnail={activeLiveCourse.thumbnail}
        tutorAvatar={activeLiveCourse.avatar}
        onLeaveClass={handleLeaveLive}
      />
    );
  }

  // If on Fullscreen Login Portal view
  if (currentTab === 'login') {
    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        onBackToHome={() => setCurrentTab(previousTab === 'login' ? 'universities' : previousTab)}
      />
    );
  }

  // If on Fullscreen Role Dashboard view (with dedicated header + left sidebar + wide canvas)
  if (currentTab === 'dashboard') {
    if (currentUser?.role === 'admin') {
      return (
        <AdminDashboard
          user={currentUser}
          onNavigateToLive={handleJoinLive}
          onBackToHome={() => setCurrentTab('home')}
        />
      );
    } else if (currentUser?.role === 'teacher') {
      return (
        <TeacherDashboard
          user={currentUser}
          onStartLive={handleJoinLive}
          onManageCourses={() => setCurrentTab('classes')}
          onBackToHome={() => setCurrentTab('home')}
        />
      );
    } else {
      return (
        <StudentDashboard
          user={currentUser}
          onJoinLive={handleJoinLive}
          onExploreCourses={() => setCurrentTab('classes')}
          onBackToHome={() => setCurrentTab('home')}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0F172A] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        activeTab={currentTab}
        currentUser={currentUser}
        onLogout={handleLogout}
        onNavigate={(tab) => {
          if (tab === 'login') {
            handleOpenLogin();
          } else {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenAuth={(mode) => handleOpenLogin(mode)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Main Content: Render Universities Room, Free Classes Room, Classes Room, Tutors Room, Explore Room, or Home Landing */}
      <main className="flex-1">
        {currentTab === 'universities' ? (
          <UniversityCoursesPage
            onSelectClass={setSelectedClass}
            onRequestCourse={() => setAuthModal({ open: true, mode: 'login' })}
          />
        ) : currentTab === 'free-classes' ? (
          <FreeClassesPage
            onSelectClass={setSelectedClass}
            onExploreAllPaid={() => {
              setCurrentTab('classes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentTab === 'classes' ? (
          <ClassesPage
            onSelectClass={setSelectedClass}
            onExploreFree={() => {
              setCurrentTab('free-classes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentTab === 'tutors' ? (
          <TutorsPage
            onSelectTutor={setSelectedTutor}
            onStartTeaching={handleBecomeTutor}
          />
        ) : currentTab === 'explore' ? (
          <ExplorePage
            onSelectClass={setSelectedClass}
            onSelectTutor={setSelectedTutor}
            onExploreFree={() => {
              setCurrentTab('free-classes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection
              onExplore={handleExplore}
              onBecomeTutor={handleBecomeTutor}
            />

            {/* Subject Categories */}
            <SubjectCategories
              selectedSubject={selectedSubject}
              onSelectSubject={setSelectedSubject}
            />

            {/* Popular Classes */}
            <PopularClasses
              activeCategory={selectedSubject}
              searchQuery={searchQuery}
              onSelectClass={setSelectedClass}
            />

            {/* Top Tutors */}
            <TopTutors
              onSelectTutor={setSelectedTutor}
            />

            {/* Promo Banners */}
            <PromoBanners
              onExploreFree={() => {
                setCurrentTab('free-classes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartTeaching={handleBecomeTutor}
            />

            {/* Why Learn With Us */}
            <WhyLearnWithUs />

            {/* Trust Stats Bar */}
            <TrustStatsBar />

            {/* CTA Banner */}
            <CtaBanner
              onExplore={handleExplore}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedClass && (
        <ClassModal
          course={selectedClass}
          onClose={() => setSelectedClass(null)}
          onEnroll={(course) => handleJoinLive(course)}
        />
      )}

      {selectedTutor && (
        <TutorModal
          tutor={selectedTutor}
          onClose={() => setSelectedTutor(null)}
        />
      )}

      {authModal.open && (
        <AuthModal
          initialMode={authModal.mode}
          onClose={() => setAuthModal({ open: false, mode: 'login' })}
        />
      )}
    </div>
  );
}
