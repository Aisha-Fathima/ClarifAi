# ClarifAi

An AI-powered tutoring platform with voice-enabled agents, customizable tutors, session history, and more — built with Next.js, Supabase, Vercel, and Clerk.

---

## 🔗 Live Demo

 [ClarifAi](https://clarifai-ten.vercel.app/)

---

##  Table of Contents

- [Features](#-features)
- [Installation](#️-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Contributions](#-contributions)

---

##  Features

- **AI Voice Agents**: Take tutoring sessions with AI tutors specialized in subjects of your choice.
- **Authentication**: Secure sign-up and sign-in with Clerk, including Google OAuth.
- **Billing & Subscriptions**: Manage plans, upgrades, and payment details with ease.
- **Bookmarks & Session History**: Organize your learning by bookmarking tutors and accessing previous sessions.
- **Code Reusability**: Modular codebase and reusable components for scalable development.
- **Create a Tutor**: Build your own AI tutors — choose the subject, topic, and conversation style.
- **Cross-Device Compatibility**: Fully responsive design for desktop, tablet, and mobile.
- **Database Integration**: Real-time data handling using Supabase.
- **Clean UI/UX**: Sleek, responsive interface built with Tailwind CSS and shadcn/ui.
- **Scalable Tech Stack**: Built on Next.js for performance and scalability.
- **Search Functionality**: Quickly find tutors with robust filtering and search tools.
- **Modularity**: Emphasis on reusability and clean architecture.

---

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

.env.local

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
