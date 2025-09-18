import { createProject, Project } from '@/utils/createProject';

export const projects: Project[] = [
    createProject(
        {
            num: '01',
            title: 'BIO Pro - Smart Attendance & Analytics Sytem',
            background: 
                'In many companies, especially in manufacturing and BPO industries, attendance tracking is still done through manual logs, outdated biometric devices, or basic spreadsheets. Common issues include duplicate or incorrect time logs, delays in generating reports for payroll, lack of real-time monitoring and notifications, and no integration with productivity analytics.',
            solution: 
                'Bio Pro is a smart attendance system that leverages Face Recognition (mock-up via laptop camera) and is designed to evolve with Fingerprint/IoT hardware integration in the future. It provides an end-to-end solution from attendance logging to payroll-ready reporting',
            features: [
                { name: 'Real-Time Monitoring', description: 'Live dashboard to track employee check-in/out status.'},
                { name: 'Smart Time Rules', description: 'Automatically restricts duplicate time-ins/outs per shift.' },
                { name: 'Employee Notification', description: 'Built-in reminders for employees nearing shift time.' },
                { name: 'Analytic Dashboard', description: 'Charts for lateness, absences, and overtime trends.' },
                { name: 'Automated Reports', description: 'Exportable Excel/CSV reports for payroll processing.' },
            ],
            stack: [
                { name: 'UI/UX Layer', frameworks: 'Next.js + TailwindCSS'},
                { name: 'Application Layer', frameworks: 'Node.js + Express'},
                { name: 'Persistence Layer', frameworks: 'PostgreSQL'},
                { name: 'Intelligence Layer', frameworks: 'OpenCV.js / TensorFlow.js (mock)'},
                { name: 'Insights Layer', frameworks: 'Chart.js / Recharts'},
                { name: 'Output Layer', frameworks: 'ExcelJS / CSV'},
            ],
            targets: [
                'Small to mid-size business without advanced biometric solutions.',
                'HR and payroll teams seeking an automated and reliable, attendance system.'
            ],
            impacts: [
                'Eliminates manual errors in attendance.',
                'Reduces HRprocessing time for payroll.',
                'Improves employee accountability with real-time monitoring.',
                'Demonstrates engineering, analytics, and development skills in one project'
            ],
            image: '/assets/work/coming-soon.jpg',
            live: '',
            github: ''
        },
        
    ),

    createProject(
        {
            num: '02',
            title: 'BIO Pro V2 - Smart Attendance & Analytics Sytem',
            background: 
                'In many companies, especially in manufacturing and BPO industries, attendance tracking is still done through manual logs, outdated biometric devices, or basic spreadsheets. Common issues include duplicate or incorrect time logs, delays in generating reports for payroll, lack of real-time monitoring and notifications, and no integration with productivity analytics.',
            solution: 
                'Bio Pro is a smart attendance system that leverages Face Recognition (mock-up via laptop camera) and is designed to evolve with Fingerprint/IoT hardware integration in the future. It provides an end-to-end solution from attendance logging to payroll-ready reporting',
            features: [
                { name: 'Real-Time Monitoring', description: 'Live dashboard to track employee check-in/out status.'},
                { name: 'Smart Time Rules', description: 'Automatically restricts duplicate time-ins/outs per shift.' },
                { name: 'Employee Notification', description: 'Built-in reminders for employees nearing shift time.' },
                { name: 'Analytic Dashboard', description: 'Charts for lateness, absences, and overtime trends.' },
                { name: 'Automated Reports', description: 'Exportable Excel/CSV reports for payroll processing.' },
            ],
            stack: [
                { name: 'UI/UX Layer', frameworks: 'Next.js + TailwindCSS'},
                { name: 'Application Layer', frameworks: 'Node.js + Express'},
                { name: 'Persistence Layer', frameworks: 'PostgreSQL'},
                { name: 'Intelligence Layer', frameworks: 'OpenCV.js / TensorFlow.js (mock)'},
                { name: 'Insights Layer', frameworks: 'Chart.js / Recharts'},
                { name: 'Output Layer', frameworks: 'ExcelJS / CSV'},
            ],
            targets: [
                'Small to mid-size business without advanced biometric solutions.',
                'HR and payroll teams seeking an automated and reliable, attendance system.'
            ],
            impacts: [
                'Eliminates manual errors in attendance.',
                'Reduces HRprocessing time for payroll.',
                'Improves employee accountability with real-time monitoring.',
                'Demonstrates engineering, analytics, and development skills in one project'
            ],
            image: '/assets/work/coming-soon.jpg',
            live: '',
            github: ''
        },
        
    ),
];