import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects, Project } from '../data/event';

const UpcomingProjects: React.FC = () => {
  const daysOfWeek: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const baseYear = today.getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => baseYear - 2 + i);
  
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date(baseYear, today.getMonth(), 1)); 
  const [selectedDate, setSelectedDate] = useState<string>(
    `${baseYear}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  );
  
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  
  // Mobile specific states
  const [isMobileCalendarOpen, setIsMobileCalendarOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // Prevent background scrolling when mobile modal is open
  useEffect(() => {
    if (isMobileCalendarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileCalendarOpen]);

  const currentYear = currentMonthDate.getFullYear();
  const currentMonth = currentMonthDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonthDate(new Date(currentYear, parseInt(e.target.value), 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonthDate(new Date(parseInt(e.target.value), currentMonth, 1));
  };

  const handleGoToToday = () => {
    const t = new Date();
    setCurrentMonthDate(new Date(t.getFullYear(), t.getMonth(), 1));
    const todayString = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
    setSelectedDate(todayString);
    if (isMobileCalendarOpen) setIsMobileCalendarOpen(false);
  };

  const toggleProject = (id: number) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  const formatDateString = (year: number, month: number, day: number): string => {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const upcomingProjects = allProjects.filter(project => project.date >= selectedDate).sort((a, b) => a.date.localeCompare(b.date));

  const openMobileCalendar = () => {
    setIsMobileCalendarOpen(true);
    setHasNotification(false); // Clear notification once opened
  };

  // Extract calendar UI to reuse for both desktop (sidebar) and mobile (modal)
  const renderCalendar = (isMobileView: boolean = false) => (
    <div className={`bg-white shadow-lg border border-gray-100 p-6 ${isMobileView ? 'rounded-t-3xl pb-10' : 'rounded-3xl'}`}>
      {isMobileView && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-6 gap-2">
        <div className="flex gap-2 flex-grow">
          <select 
            value={currentMonth} 
            onChange={handleMonthChange}
            className="p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 outline-none focus:border-blue-500 w-full cursor-pointer appearance-none"
          >
            {monthNames.map((month, index) => (
              <option key={month} value={index}>{month}</option>
            ))}
          </select>
          
          <select 
            value={currentYear} 
            onChange={handleYearChange}
            className="p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 outline-none focus:border-blue-500 w-full cursor-pointer appearance-none"
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-1">
          <button onClick={handlePrevMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={handleNextMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-semibold text-gray-400 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="h-10"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
          const dateString = formatDateString(currentYear, currentMonth, day);
          const hasProjects = allProjects.some(p => p.date === dateString);
          
          const isSelected = selectedDate === dateString;
          const isTodayDate = 
            day === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear();

          return (
            <button
              key={day}
              onClick={() => {
                setSelectedDate(dateString);
                if (isMobileView) setIsMobileCalendarOpen(false); // Close modal on mobile select
              }}
              className="relative h-10 w-full flex items-center justify-center group"
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm transition-all
                ${isTodayDate && !isSelected ? 'bg-blue-100 text-blue-700 font-bold' : ''}
                ${isSelected ? 'bg-blue-600 text-white font-bold shadow-md' : ''}
                ${!isTodayDate && !isSelected ? 'text-gray-700 hover:bg-gray-100' : ''}
              `}>
                {day}
              </div>
              {hasProjects && (
                <span className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-500'}`}></span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
        <button 
          onClick={handleGoToToday}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 hover:bg-blue-50 rounded-lg"
        >
          Go to Today
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-20 bg-gray-50 pb-24 lg:pb-12"
    >
      <div className="mb-8 text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Upcoming Projects & Initiatives</h2>
        <p className="text-gray-500 mt-2">Explore the future missions of our trust and see how we are impacting the community.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* DESKTOP CALENDAR (Hidden on Mobile) */}
        <div className="hidden lg:block w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
          <div className="sticky top-24">
            {renderCalendar(false)}
          </div>
        </div>

        {/* PROJECTS LIST */}
        <div className="w-full lg:w-2/3 xl:w-3/4">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 md:p-8">
            <div className="flex justify-between items-end mb-6 md:mb-8 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Upcoming Project</h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  From {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <AnimatePresence mode="popLayout">
                {upcomingProjects.length > 0 ? (
                  upcomingProjects.map((project, index) => {
                    const projectDate = new Date(project.date);
                    const day = projectDate.getDate();
                    const month = projectDate.toLocaleString('default', { month: 'short' });
                    const isExpanded = expandedProjectId === project.id;

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={project.id}
                        className="flex flex-col p-4 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/30 hover:shadow-lg transition-all"
                      >
                        {/* HEADER: Single Line on Mobile, Rich Layout on Desktop */}
                        <div className="flex flex-row items-center md:items-start gap-3 md:gap-6">
                          
                          {/* Date Badge */}
                          <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-12 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200">
                            <span className="text-[10px] md:text-sm font-bold text-gray-500 uppercase leading-none md:leading-normal">{month}</span>
                            <span className="text-lg md:text-3xl font-black text-gray-900 leading-none md:leading-normal mt-0.5 md:mt-0">{day}</span>
                            <span className="hidden md:block text-xs font-semibold text-gray-400 mt-1">{projectDate.getFullYear()}</span>
                          </div>

                          {/* Title & Category Area */}
                          <div className="flex-grow min-w-0 flex flex-col justify-center">
                            <div className="hidden md:block mb-2">
                              <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${project.theme}`}>
                                {project.category}
                              </span>
                            </div>
                            <h4 className="text-sm md:text-2xl font-bold text-gray-900 truncate md:whitespace-normal">{project.title}</h4>
                          </div>
                          
                          {/* Action Button */}
                          <div className="flex-shrink-0">
                            <button 
                              onClick={() => toggleProject(project.id)}
                              className="px-3 py-1.5 md:px-5 md:py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg md:rounded-xl shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all text-xs md:text-base whitespace-nowrap"
                            >
                              <span className="hidden md:inline">{isExpanded ? 'Hide Details' : 'View Project'}</span>
                              <span className="md:hidden">{isExpanded ? 'Hide' : 'View'}</span>
                            </button>
                          </div>
                        </div>
                        
                        {/* EXPANDED DETAILS SECTION */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 mt-2 md:mt-0 border-t border-gray-100">
                                
                                {/* Status & Category Badges (Visible on mobile inside details) */}
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                  <span className={`md:hidden text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider ${project.theme}`}>
                                    {project.category}
                                  </span>
                                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    {project.status}
                                  </span>
                                </div>
                                
                                <p className="text-gray-700 font-medium text-xs md:text-sm mb-4 leading-relaxed">
                                  {project.shortDescription}
                                </p>

                                <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-100 mb-5 text-xs md:text-sm text-gray-600 leading-relaxed shadow-sm">
                                  <strong className="text-gray-800 block mb-1">Detailed Explanation:</strong>
                                  {project.detailedExplanation}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-2 rounded-lg w-fit">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {project.location}
                                  </div>
                                  
                                  <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all focus:ring-4 focus:ring-blue-100 text-sm">
                                    Support This Project
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No Projects Scheduled</h3>
                    <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto">There are no upcoming projects planned after this date.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE FLOATING ACTION BUTTON */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button 
          onClick={openMobileCalendar}
          className="relative flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          
          {/* Notification Dot */}
          {hasNotification && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {/* MOBILE CALENDAR MODAL / BOTTOM SHEET */}
      <AnimatePresence>
        {isMobileCalendarOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileCalendarOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-sm"
            />
            
            {/* Bottom Sheet Calendar */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            >
              {renderCalendar(true)}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default UpcomingProjects;