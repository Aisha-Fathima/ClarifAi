


## <a name="features"> Features</a>

 - **AI Voice Agents**: Take tutoring sessions with voiced AIs specializing in the topics you want to get better at.

 **Authentication**: Secure user sign-up and sign-in with Clerk; Google authentication and many more.

 **Billing & Subscriptions**: Easily manage plans, upgrades, and payment details.

**Bookmarks and Session History**: Let users organise their learning by bookmarking tutors and accessing previous sessions.

 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

 **Create a Tutor**: Create your own AI tutors, choosing a subject, topic, and style of conversation.

 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

 **Database Integration**: Uses Supabase for real-time data handling and storage needs.

 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

 **Scalable Tech Stack**: Built with Next.js for a fast, production-ready web application that scales seamlessly.

 **Search Functionality**: Find tutors quickly with robust filters and search bar.

and many more, including code architecture and reusability.



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

