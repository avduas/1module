# Quick Reference Guide

## 🚀 Getting Started

```bash
npm install          # Install dependencies (react-router-dom already added)
npm run dev         # Start development server
npm run build       # Build for production
```

## 📍 Available Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/posts` | PostsPage | View all posts |
| `/posts/:id` | PostsPage | View specific post (detail) |
| `/users/:id/posts` | UserPostsPage | View user's posts with navigation |
| `/users/:id/albums` | UserAlbumsPage | View user's albums with navigation |
| `/users/:id/todos` | UserTodosPage | View user's todos with navigation |
| `/albums/:id/photos` | AlbumPhotosPage | View album photos |

## 🎯 Using Navigation

### In Components
```tsx
import { NavLink } from 'react-router-dom'

<NavLink to="/posts">All Posts</NavLink>
<NavLink to="/users/1/posts">User 1's Posts</NavLink>
```

### With UserTabs Component
```tsx
import { UserTabs } from '@/widgets/UserTabs'

<UserTabs />  // Automatically shows relevant tabs based on current route
```

### Programmatically
```tsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/posts')
navigate(`/users/${userId}/albums`)
```

## 🪝 Using usePosts Hook

```tsx
import { usePosts } from '@/features/PostList/model/hooks'

// All posts
const { posts, loading, error } = usePosts()

// User's posts
const { posts, loading, error } = usePosts(1)

// With loading/error handling
if (loading) return <div>Loading...</div>
if (error) return <div>Error: {error}</div>
return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>
```

## 📦 File Locations

| What | Where |
|------|-------|
| Routes config | `src/app/providers/router/router.tsx` |
| Page components | `src/pages/` |
| Navigation | `src/widgets/UserTabs/` |
| Custom hooks | `src/features/PostList/model/hooks/` |
| PostList widget | `src/widgets/PostList/PostList.tsx` |

## 🔗 Import Paths

```tsx
// Use @ alias for cleaner imports
import { PostsPage } from '@/pages'
import { UserTabs } from '@/widgets/UserTabs'
import { usePosts } from '@/features/PostList/model/hooks'
import { MainLayout } from '@/shared/layouts/MainLayout'

// Avoid relative imports - use @ alias instead
// ❌ import { PostsPage } from '../../../pages'
// ✅ import { PostsPage } from '@/pages'
```

## 🔧 Common Tasks

### Add New Route
1. Create page component in `src/pages/`
2. Add route to `src/app/providers/router/router.tsx`
3. Export page in `src/pages/index.ts`

Example:
```tsx
// src/app/providers/router/router.tsx
{
  path: '/new-route',
  element: <NewPage />,
}
```

### Add Navigation Link
Use `NavLink` from React Router:
```tsx
<NavLink 
  to="/new-route"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  Link Text
</NavLink>
```

### Fetch Data
Use the `usePosts` hook or create similar hooks:
```tsx
const { posts, loading, error } = usePosts()
```

### Get Route Parameters
```tsx
import { useParams } from 'react-router-dom'

const { id } = useParams<{ id: string }>()
```

## 🎨 Styling Navigation

The UserTabs component uses CSS variables for theming:
```css
.tab {
  color: var(--text-secondary, #666);
}

.tab.active {
  color: var(--primary-color, #007bff);
  border-bottom-color: var(--primary-color, #007bff);
}
```

Customize colors in your CSS/theme files.

## 📊 Data Sources

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **User Posts**: `https://jsonplaceholder.typicode.com/users/{userId}/posts`

API documentation: https://jsonplaceholder.typicode.com/

## ⚠️ Important Notes

1. **Type Safety**: All routes are TypeScript-enabled with full type support
2. **Active Link Styling**: NavLink automatically handles active state
3. **Theme Persistence**: ThemeProvider wraps all routes - theme is consistent everywhere
4. **Path Alias**: Always use `@/` for imports from src directory
5. **Hook Dependency**: usePosts has userId as dependency - updates when userId changes

## 🔍 Debugging

### Check Current Route
```tsx
import { useLocation } from 'react-router-dom'

const location = useLocation()
console.log(location.pathname) // e.g., '/posts'
```

### Debug Route Parameters
```tsx
const params = useParams()
console.log(params) // { id: '1' }
```

### View All Routes
Open: `http://localhost:5173/posts` and check the router configuration in `src/app/providers/router/router.tsx`
