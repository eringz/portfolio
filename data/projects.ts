import { createProject, Project } from '@/utils/createProject';

export const projects: Project[] = [
    createProject(
        {
            num: '01',
            title: 'BIO Pro - Smart Attendance & Analytics Sytem',
            background: 
                'Many companies still rely on manual logs or outdated systems for attendance tracking—causing errors, delayed payroll reports, lack of real-time monitoring, and no integration with productivity analytics.',
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
            image: '/assets/work/bio-pro.png',
            live: '',
            github: 'https://github.com/eringz/bio-pro.git'
        },
        
    ),

    
    // WebChat Data
    createProject(
        {
            num: '02',
            title: 'WebChat - Real-time Messaging App',
            background: 
                'Many small teams and communities need a lightweight, realtime communication tool without relying on heavy third-party platforms.',
            solution: 
                'WebChat is a MERN-stack application that enables instant, socket-based messaging with user authentication and live chat rooms',
            features: [
                { name: 'Instant Messaging', description: 'Real-time chat powered by Socket.IO.'},
                { name: 'User Authentication', description: 'Secure login and registration flow.'},
                { name: 'Chat Rooms', description: 'Separate channels for group conversations.'},
                { name: 'Responsive UI', description: 'Modern chat interface build with React.'},
            ],
            stack: [
                { name: 'UI/UX Layer', frameworks: 'React + CSS3'},
                { name: 'Application Layer', frameworks: 'Node.js + Express'},
                { name: 'Persistence Layer', frameworks: 'MongoDB'},
                { name: 'Real-Time Engine', frameworks: 'Socket.IO'},
                
            ],
            targets: [
                'Small teams needing internal chat tools.',
                'Communities wanting fast and lightweight messaging',
            ],
            impacts: [
                'Delivers a real-time communicaation platform without external dependencies',
                'Communities wanting fast and lightweight messaging',
            ],
            image: '/assets/work/coming-soon.jpg',
            live: '',
            github: 'http://github.com/eringz/web-chat'
        },
        
    ),

    // DPF Store data
    createProject(
        {
            num: '03',
            title: 'DPF Store - Mini E-commerce Platform',
            background: 
                'Many businesses need a simple online store to showcase products and process basic customer orders without high development costs.',
            solution: 
                'DPF Store is a lightweight e-commerce app built on PHP (CodeIgniter MVC), featuring product catalog, shopping cart, and a streamlined checkout process',
            features: [
                { name: 'Product Catalog', description: 'List and filter available products with details.'},
                { name: 'Shopping Cart', description: 'Add, remove, and manage cart items easily.'},
                { name: 'Checkout Flow', description: 'Basic checkout with order summary.'},
            ],
            stack: [
                { name: 'UI/UX Layer', frameworks: 'HTML + CSS + AJAX'},
                { name: 'Application Layer', frameworks: 'CodeIniter'},
                { name: 'Persistence Layer', frameworks: 'MySQL'},
                
            ],
            targets: [
                'Small retailers looking for an affordable e-commerce presence.',
                'Developers learning MVC and PHP frameworks.'
            ],
            impacts: [
                'Provides a working foundation for simple online stores.',
            ],
            image: '/assets/work/coming-soon.jpg',
            live: '',
            github: 'https://github.com/eringz/dpf-store'
        },
        
    ),

    // TempoID data
    createProject(
        {
            num: '04',
            title: 'TempoID - Identity & Access Management Tool',
            background: 
                'In many schools, official ID cards take weeks or months to be released, leaving students without valid identification to access facilities and services.',
            solution: 
                'TempoID is a Java-based system designed to generate and manage temporary school IDs, providing quick issuance, role-based access, and secure database-backed storage.',
            features: [
                { name: 'Temporary ID Generation', description: 'Instantly create unique temporary IDs for students while waiting for official cards.'},
                { name: 'Role-Based Access Control', description: 'Differentiate permissions for admins, staff, and students.'},
                { name: 'Secure Database Storage', description: 'Store ID records safely using MySQL with authentication checks.'},
                { name: 'Quick Issuance Workflow', description: 'Simplify and speed up the process of issuing valid IDs.'},
            ],
            stack: [
                { name: 'UI/UX Layer', frameworks: 'Java Swing'},
                { name: 'Application Layer', frameworks: 'Eclipse IDE'},
                { name: 'Persistence Layer', frameworks: 'MySQL + JDBC'},
                
            ],
            targets: [
                'Schools and universities needing faster student ID issuance.',
                'IT admins seeking a role-based, secure ID management system.'
            ],
            impacts: [
                'Reduces delays in providing students with valid identification.',
                'Improves school operations with streamlined ID workflows.',
            ],
            image: '/assets/work/coming-soon.jpg',
            live: '',
            github: 'https://github.com/eringz/tempoID-git'
        },
        
    ),
];