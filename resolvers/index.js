module.exports = () => {
  return {
    Query: {
      user: async (_, args, { db }) => {
        const { rows } = await db.query(`SELECT * FROM users WHERE id = ${args.id}`)
        return rows[0]
      },
      users: async (_, args, { db }) => {
        console.log(args)
        const { rows } = await db.query(`SELECT * FROM users`)
        return rows
      }
    },
    Mutation: {
      createUser: async (_, args, { db }) => {
        const argsArray = Object.keys(args)
        const columns = argsArray.map(key => key).join(',')
        const values = argsArray.map(key => {
          if (typeof args[key] === 'string') {
            return `'${args[key]}'`
          }

          return `'{${args[key]}}'`
        }).join(',')

        const query = `INSERT INTO users (${columns}) VALUES (${values}) RETURNING *`
        const { rows } = await db.query(query)

        return rows[0]
      },
      updateUser: async (_, args, { db }) => {
        const argsArray = Object.keys(args)
        const infoToUpdate = argsArray.map(key => {
          if (typeof args[key] === 'string') {
            return `${key}='${args[key]}'`
          }

          return `${key}=array_cat(${key}, '{${args[key]}}')`
        }).join(',')

        const query = `UPDATE users SET ${infoToUpdate} WHERE id=${args.id} RETURNING *`
        const { rows } = await db.query(query)

        return rows[0]
      },
      deleteUser: async (_, args, { db }) => {
        const { rows } = await db.query(`DELETE FROM users WHERE id = ${args.id}  RETURNING *`)
        return rows[0]
      }
    }
  }
}
