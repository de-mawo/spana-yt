# Spana: Leave Management App

### Usage
- Users can submit leave requests
- Admins & Moderators can view and edit submitted leaves
- Approved leaves trigger automatic balances updates
- Everyone can view the Organisational Calendar and see upcoming events
- Admins can add settings and edit balances

### Author 
- Prince De Mawo 

<img src="/spanaOG.png" alt="project-Img" />

## <a href="#"> Video Tutorial </a>

### Tech-Stack
The app was built using the following technologies:

- Next.js as the React framework
- Prisma as the ORM for migrations and database access
- PostgreSQL: database for local testing
- Next-Auth/Authjs: for authentication
- TypeScript: the programming language
- TailwindCSS: Styling
- shadcn/ui for UI components



#### Clone the repo
`https://github.com/de-mawo/spana-yt.git `

Install packages
`yarn `

#### Setup the .env file
- See the `.env.example ` file

#### Setup Prisma
`yarn prisma generate`
`yarn prisma migrate dev `

#### Start the app
`yarn dev`