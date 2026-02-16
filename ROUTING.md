# Routing Setup Documentation

## Overview
This document describes the routing configuration and navigation system for the application.

## Routes

The application has the following routes configured:

### Posts Routes
- **`/posts`** - Display all posts from JSONPlaceholder API
- **`/posts/:id`** - Display details for a specific post

### User-Related Routes
- **`/users/:id/posts`** - Display all posts for a specific user (with UserTabs navigation)
- **`/users/:id/albums`** - Display all albums for a specific user (with UserTabs navigation)
- **`/users/:id/todos`** - Display all tasks/todos for a specific user (with UserTabs navigation)

### Album Routes
- **`/albums/:id/photos`** - Display all photos in a specific album

## File Structure

### Pages (`src/pages/`)
Page components that represent full-page views:

- **PostsPage.tsx** - Handles both `/posts` and `/posts/:id` routes
- **UserAlbumsPage.tsx** - Handles `/users/:id/albums` route
- **UserPostsPage.tsx** - Handles `/users/:id/posts` route with PostList integration
- **UserTodosPage.tsx** - Handles `/users/:id/todos` route
- **AlbumPhotosPage.tsx** - Handles `/albums/:id/photos` route
- **index.ts** - Barrel export for all pages

### Router Configuration (`src/app/providers/router/`)
Router setup and configuration:

- **router.tsx** - Main router configuration with all routes and ThemeProvider wrapper
- **index.ts** - Export for router provider

### Navigation Component (`src/widgets/UserTabs/`)
Navigation component for switching between user-related sections:

- **UserTabs.tsx** - Tab-based navigation using NavLink
  - Shows different tabs based on route context
  - Uses React Router's NavLink for client-side navigation
  - Active tab styling for current route
- **UserTabs.css** - Styling for navigation tabs
- **index.ts** - Export

### Custom Hook (`src/features/PostList/model/hooks/`)
Custom React hook for fetching posts:

- **usePosts.ts** - Hook for fetching posts data
  - Accepts optional `userId` parameter to fetch user-specific posts
  - Returns `{ posts, loading, error }`
  - Uses JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- **index.ts** - Export with Post interface

## Router Implementation

The router is configured using React Router v6 with the following features:

```tsx
// All routes are wrapped with ThemeProvider for consistent theming across pages
<ThemeProvider>
  <RouterProvider router={router} />
</ThemeProvider>
```

## Navigation Usage

### Using UserTabs Component
The UserTabs component automatically adapts based on the current route:

```tsx
<UserTabs />
```

- On `/posts` route: Shows "All Posts" link
- On user-specific routes (`/users/:id/*`): Shows tabs for Posts, Albums, and Tasks

### Navigating Programmatically
Use React Router's `useNavigate` hook:

```tsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate(`/users/1/posts`)
```

## Custom Hook: usePosts

### Usage
```tsx
import { usePosts } from '@/features/PostList/model/hooks'

// Fetch all posts
const { posts, loading, error } = usePosts()

// Fetch posts for a specific user
const { posts, loading, error } = usePosts(userId)
```

### Return Value
- `posts`: Array of Post objects from the API
- `loading`: Boolean indicating if data is being fetched
- `error`: Error message string or null

### Post Interface
```tsx
interface Post {
  userId: number
  id: number
  title: string
  body: string
}
```

## Integration with PostList Widget

The PostList widget now integrates with the usePosts hook:

```tsx
// Fetch posts from API
<PostList userId={userId} />

// Use custom posts (if needed)
<PostList posts={customPosts} />
```

## API Source

All data is fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):
- Posts: `/posts` and `/posts?userId={id}`
- Ready-to-use for testing and development

## Key Features

1. **Type-Safe Routing** - Full TypeScript support with `useParams`
2. **Client-Side Navigation** - Fast navigation without page reloads using NavLink
3. **Active Route Styling** - Automatic highlighting of current navigation link
4. **Data Fetching** - Custom hook with loading and error handling
5. **Reusable Navigation** - UserTabs component adapts to different contexts
6. **Theme Persistence** - ThemeProvider wraps all routes for consistent theming

## To Be Implemented

- [ ] Detail view components for individual posts
- [ ] Albums list component (`/users/:id/albums`)
- [ ] Photos grid component (`/albums/:id/photos`)
- [ ] Todos list component (`/users/:id/todos`)
- [ ] Custom hooks for albums, todos, and photos
- [ ] Error boundary wrapper for better error handling
