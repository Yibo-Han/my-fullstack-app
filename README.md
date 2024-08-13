# Teaching Service Invoice System

The Teaching Service Invoice System is a web application designed to streamline the process of generating and managing invoices for teaching services. Built using Next.js and React, and styled with Ant Design, this application allows users to register, log in, and manage their personal and financial information, as well as track their teaching services. The system integrates with MongoDB for data storage and includes functionality to automatically generate and send invoices in PDF format via email.

## Features

### User Management

**User Registration:** New users can sign up by providing their basic details.
**User Login:** Registered users can log in securely to access their dashboard.
**Personal Information:** Users can view their personal information, including name, email, and contact details.
**Bank Information:** Users can manage and view their bank details, such as account number, BSB, and bank name.
**Teaching Courses List:** Users can see a list of their associated teaching courses.

### Service Form

**Service List Calculation:** Users can fill out a form to calculate the total service cost based on the unit code, working hours, hourly rate, and number of students.
**PDF Generation:** Once the service form is filled out, the system automatically generates a PDF invoice.
**Email Sending:** The generated invoice can be sent directly via email to the relevant staff members.

## Tech Stack

**Frontend:** Next.js, React, Ant Design
**Backend:** Node.js
**Database:** MongoDB
**PDF Generation:** jsPDF
**Email Service:** EmailJS

## Usage

**Register/Login:** Start by registering a new account or logging in if you already have one.
**View Details:** After logging in, navigate to the user detail page to view your personal and bank information.
**Manage Services:** Use the Service Form page to enter service details, calculate costs, generate invoices, and send them via email.
