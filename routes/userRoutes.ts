import { Hono } from 'hono'
import { user } from '../controllers'
import { protect } from '../middlewares'

const users = new Hono()

// Get All Users
users.get('/', protect, (c) => user.getUsers(c))

// Create User
users.post('/', (c) => user.createUser(c))

// Get Single User
users.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: `User ${id}` })
})

// Get User Profile
users.get('/profile', (c) => {
  return c.json({ message: 'User Profile' })
})

export default users
