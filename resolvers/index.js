module.exports = () => {
  return {
    Query: {
      user: async (_, args, { db }) => {
        const { rows } = await db.query(`SELECT * FROM users WHERE id = ${args.id}`)
        return rows[0]
      },
      users: async (_, args, { db }) => {
        const { rows } = await db.query(`SELECT * FROM users`)
        return rows
      }
    },
    Mutation: {
      createUser: async (_, args, { db }) => {
        const values = `'${args.name}', '${args.username}'`
        const { rows } = await db.query(`INSERT INTO users (name,username) VALUES (${values}) RETURNING *`)
        return rows[0]
      },
      deleteUser: async (_, args, { db }) => {
        const { rows } = await db.query(`DELETE FROM users WHERE id = ${args.id}  RETURNING *`)
        return rows[0]
      }

    }
  }
}
