export default {
  DB: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://dmr1204:admin1204@cluster0-c0e8s.mongodb.net/test?retryWrites=true&w=majority',
    user: process.env.MONGODB_USERNAME || 'dmr1204',
    password: process.env.MONGODB_PASS || 'admin1204'
  },
  JWTSECRET: process.env.JWT_SECRET || 'admin1204'
}