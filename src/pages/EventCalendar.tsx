import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from '../data/event';
import { Users, Calendar } from 'lucide-react';

type CalendarView = 'days' | 'months' | 'years';

const UpcomingProjects: React.FC = () => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const baseYear = today.getFullYear();
  const years = Array.from({ length: 12 }, (_, i) => baseYear - 2 + i);
  
  const [calendarView, setCalendarView] = useState<CalendarView>('days');
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date(baseYear, today.getMonth(), 1)); 
  const [selectedDate, setSelectedDate] = useState<string>(
    `${baseYear}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  );
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [isMobileCalendarOpen, setIsMobileCalendarOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isMobileCalendarOpen ? 'hidden' : 'unset';
  }, [isMobileCalendarOpen]);

  const currentYear = currentMonthDate.getFullYear();
  const currentMonth = currentMonthDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => setCurrentMonthDate(new Date(currentYear, currentMonth - 1, 1));
  const handleNextMonth = () => setCurrentMonthDate(new Date(currentYear, currentMonth + 1, 1));
  
  const handleGoToToday = () => {
    const t = new Date();
    setCurrentMonthDate(new Date(t.getFullYear(), t.getMonth(), 1));
    setSelectedDate(`${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`);
    setCalendarView('days');
    if (isMobileCalendarOpen) setIsMobileCalendarOpen(false);
  };

  const formatDateString = (year: number, month: number, day: number): string => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const upcomingProjects = allProjects
    .filter(project => project.date >= selectedDate)
    .sort((a, b) => a.date.localeCompare(b.date));

  const renderCalendar = (isMobileView: boolean = false) => (
    <div className={`bg-white shadow-lg border border-gray-100 p-6 ${isMobileView ? 'rounded-t-3xl pb-10' : 'rounded-3xl'}`}>
      {isMobileView && <div className="flex justify-center mb-4"><div className="w-12 h-1.5 bg-gray-200 rounded-full" /></div>}
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-1">
          <button 
            onClick={() => setCalendarView(v => v === 'months' ? 'days' : 'months')}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${calendarView === 'months' ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
          >
            {monthNames[currentMonth].substring(0, 3)}
          </button>
          <button 
            onClick={() => setCalendarView(v => v === 'years' ? 'days' : 'years')}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${calendarView === 'years' ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
          >
            {currentYear}
          </button>
        </div>

        {calendarView === 'days' && (
          <div className="flex gap-1">
            <button onClick={handlePrevMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={handleNextMonth} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden min-h-[260px]">
        <AnimatePresence mode="wait">
          {calendarView === 'days' && (
            <motion.div key="days" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map(day => <div key={day} className="text-center text-xs font-bold text-gray-400 py-1">{day}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} className="h-9" />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const dateStr = formatDateString(currentYear, currentMonth, day);
                  const isSelected = selectedDate === dateStr;
                  const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                  const hasProj = allProjects.some(p => p.date === dateStr);
                  return (
                    <button key={day} onClick={() => { setSelectedDate(dateStr); if (isMobileView) setIsMobileCalendarOpen(false); }} className="relative h-9 w-full flex items-center justify-center">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm transition-all ${isToday && !isSelected ? 'bg-blue-100 text-blue-700 font-bold' : ''} ${isSelected ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}>{day}</div>
                      {hasProj && <span className={`absolute bottom-0.5 w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {calendarView === 'months' && (
            <motion.div key="months" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-3 gap-2 absolute inset-0 bg-white">
              {monthNames.map((m, i) => (
                <button key={m} onClick={() => { setCurrentMonthDate(new Date(currentYear, i, 1)); setCalendarView('days'); }} className={`h-14 rounded-xl text-xs font-bold transition-all ${i === currentMonth ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-blue-50'}`}>{m.substring(0, 3)}</button>
              ))}
            </motion.div>
          )}

          {calendarView === 'years' && (
            <motion.div key="years" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-3 gap-2 absolute inset-0 bg-white overflow-y-auto">
              {years.map(y => (
                <button key={y} onClick={() => { setCurrentMonthDate(new Date(y, currentMonth, 1)); setCalendarView('months'); }} className={`h-14 rounded-xl text-xs font-bold transition-all ${y === currentYear ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-blue-50'}`}>{y}</button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button onClick={handleGoToToday} className="w-full py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-all">Go to Today</button>
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen pt-20 bg-gray-50 pb-24 lg:pb-12">
      <div className="mb-8 text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Projects</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Explore the mission and impacts of our upcoming trust activities.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-1/4 flex-shrink-0 relative z-20">
          <div className="sticky top-24">{renderCalendar()}</div>
        </div>

        {/* Project List */}
        <div className="w-full lg:w-3/4 relative z-10">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 md:p-8">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Project Roadmap</h3>
              <p className="text-gray-500 text-xs mt-1 italic">Showing projects from {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {upcomingProjects.length > 0 ? upcomingProjects.map((project) => {
                  const pDate = new Date(project.date);
                  const isExp = expandedProjectId === project.id;
                  
                  return (
                    <motion.div layout key={project.id} className="flex flex-col p-3 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/40 hover:shadow-md transition-all">
                      <div className="flex flex-row items-center gap-3 md:gap-6">
                        
                        {/* Conditional Display: Image OR Date Badge */}
                        <div className="flex-shrink-0 relative">
                          {project.imageUrl ? (
                            <img 
                              src={project.imageUrl} 
                              alt={project.title} 
                              className="w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl object-cover border border-gray-200 shadow-sm"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white rounded-lg md:rounded-xl border border-gray-200 shadow-sm">
                              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase leading-none">{pDate.toLocaleString('default', { month: 'short' })}</span>
                              <span className="text-lg md:text-2xl font-black text-gray-900 leading-none mt-1">{pDate.getDate()}</span>
                            </div>
                          )}
                        </div>

                        {/* Title & Info */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${project.theme}`}>{project.category}</span>
                            {/* Show date in text if image is being shown instead of badge */}
                            {project.imageUrl && (
                                <span className="text-[9px] font-bold text-gray-400 flex items-center gap-1"><Calendar size={10}/> {pDate.toLocaleDateString()}</span>
                            )}
                          </div>
                          <h4 className="text-sm md:text-xl font-bold text-gray-900 truncate md:whitespace-normal leading-tight">{project.title}</h4>
                        </div>

                        <button 
                          onClick={() => setExpandedProjectId(isExp ? null : project.id)} 
                          className="flex-shrink-0 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg text-[10px] md:text-xs hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm"
                        >
                          {isExp ? 'Hide' : 'View'}
                        </button>
                      </div>

                      <AnimatePresence>
                        {isExp && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pt-4 mt-3 border-t border-gray-100">
                              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">{project.detailedExplanation}</p>
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-gray-500 bg-white border border-gray-100 px-3 py-1.5 rounded-lg">
                                  <Users className="w-3 h-3 text-blue-500" /> {project.location}
                                </div>
                                <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-100 active:scale-95 transition-all">Support Now</button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }) : (
                  <div className="py-20 text-center text-gray-400 font-medium border-2 border-dashed border-gray-100 rounded-2xl">No projects scheduled for the selected date.</div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button onClick={() => { setIsMobileCalendarOpen(true); setHasNotification(false); }} className="relative flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all ring-4 ring-white">
          <Calendar className="w-6 h-6" />
          {hasNotification && <span className="absolute -top-1 -right-1 flex h-5 w-5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white text-[10px] items-center justify-center">!</span></span>}
        </button>
      </div>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {isMobileCalendarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileCalendarOpen(false)} className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed bottom-0 left-0 right-0 z-50">{renderCalendar(true)}</motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UpcomingProjects;