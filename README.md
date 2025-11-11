# alx-project-0x00-setup

🏡 ALX Listing App (Next.js + TypeScript Project)
📖 Project Description

This is a Next.js-based project built to teach the fundamentals of creating modern, responsive web applications using React, TypeScript, and Next.js.
The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components, while emphasizing front-end best practices and scalable code architecture.

🎯 Learning Objectives

By completing this project, you will:

⚙️ Understand how to scaffold a Next.js project with TypeScript

📁 Learn Next.js folder structure and organization best practices

🧭 Implement basic routing using the Pages Router

🧩 Create reusable React components with TypeScript

🧠 Work with TypeScript interfaces for component props

🖼️ Manage assets and static files in Next.js

🏗️ Develop an understanding of component composition

📱 Implement responsive design using Tailwind CSS

🧹 Set up and configure ESLint for code quality

🧰 Requirements

Before you begin, ensure you have the following installed:

Node.js (v16 or later)

npm or yarn

Visual Studio Code (or any preferred IDE)

Next.js v13+

TypeScript

Tailwind CSS

ESLint

🏗️ Best Practices
🗂️ Project Structure

Components are organized in a dedicated components/ directory

TypeScript interfaces are centralized in an interfaces/ directory

Pages follow Next.js conventions in the pages/ directory

⚛️ Component Design

Components are typed using TypeScript interfaces

Reusable components accept props for customization

Each component maintains a single responsibility

✅ Code Quality

ESLint ensures consistent and clean code

TypeScript adds strong type safety

Consistent use of arrow function syntax

🎨 Styling

Tailwind CSS enables utility-first styling

Responsive design principles are applied throughout

Consistent spacing, color, and typography scales

🚀 Performance

Next.js <Image> component optimizes image loading

Automatic code splitting enhances speed

Only essential dependencies are included.

---

**Objective**: You will understand the essence of creating a project using cli-tools like npx, coupled with create-next-app. There are multiple ways you can create a project using the create-next-app cli-tool.

The first approach will be to use the command npx create-next-app@latest This option will provide you with multiple prompts to help set up your initial project
The next approach is to be familiar with the [options] ahead of creating the project. This is the option we will be using.
Instructions:

Start a new visual studio code (vscode instance), open the terminal using the Terminal -> New Terminal
Navigate to your project directory
Run the command npx create-next-app@latest alx-project-0x00 –-typescript
Select Yes for the following option [Eslint, Tailwind CSS, import alias]
Select No for /src directory and App Router
Start your application using the command npm run dev -- -p 3000
