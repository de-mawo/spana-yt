export const leaveTypes = [
    { label: "Annual", value: "ANNUAL" },
    { label: "Health", value: "HEALTH" },
    { label: "Study", value: "STUDY" },
    { label: "Family", value: "FAMILY" },
    { label: "Maternity", value: "MATERNITY" },
    { label: "Paternity", value: "PATERNITY" },
    { label: "Unpaid", value: "UNPAID" },
  ] as const

  export const orgDepartments = [
    { label: "Finance", id: "1ea40bcd-b285-4405-84be-c5591c62dfd2", desc: "Handles money", users: [] },
    { label: "Tech", id: "687d77fe-dfc1-4380-a1c5-3d2e30b1f42f", desc: "Develop Software", users: [] },
    { label: "Human Resources", id: "85c738e2-65ac-4a53-8ad1-2cb6cf43d3b4", desc: "Deals with human matters", users: [] },
    { label: "Operations", id: "843e8109-d4b8-4323-9433-2554e1704e7c", desc: "Runs operations", users: [] },
    { label: "Product", id: "39707d6f-4aba-4f49-8039-68e95b6f5e4e", desc: "Manages product development", users: [] },
  ] as const

  export const orgTitles = [
    { label: "CEO", id: "b8bcdc18-3c95-4a28-b378-df811619580e", desc: "Handles money", subordinates: [] },
    { label: "Senior Developer", id: "68100e6a-5651-4e2e-a188-749eed93cda3", desc: "Develop Software", subordinates: [] },
    { label: "Human Resources Manager", id: "d65fff39-2a43-4018-a219-f46ca1db8153", desc: "Deals with human matters", subordinates: [] },
    { label: "Operations Manager", id: "b775b1fe-f9c1-41f7-96b3-44024add621a", desc: "Runs operations", subordinates: [] },
    { label: "Product Owner", id: "b723765a-da0e-4065-b858-74cb915bdc44", desc: "Manages product development", subordinates: [] },
  ] as const

  export const UserRoles = [
    "ADMIN",
    "USER",
    "MODERATOR",
 ] as const

  export const leaveStatus = [
     "APPROVED",
     "PENDING",
     "INMODERATION",
     "REJECTED",
  ] as const

  export const userLeaveBalances = [
      {
        year: "2023",
        leaveType: "ANNUAL",
        credit: 22,
        used: 19,
        balance: 3
      } ,
      {
        year: "2023",
        leaveType: "HEALTH",
        credit: 15,
        used: 5,
        balance: 10
      },
      {
        year: "2023",
        leaveType: "MATERNITY",
        credit: 20,
        used: 8,
        balance: 12
      },
      {
        year: "2023",
        leaveType: "STUDY",
        credit: 10,
        used: 3,
        balance: 7
      },
      {
        year: "2023",
        leaveType: "FAMILY",
        credit: 18,
        used: 6,
        balance: 12
      },
      {
        year: "2023",
        leaveType: "PATERNITY",
        credit: 12,
        used: 4,
        balance: 8
      },
      {
        year: "2023",
        leaveType: "UNPAID",
        credit: 0, 
        used: 5,
        balance: -5 
      } 
  ]




  export const leaveHistory = [
    {
      id: 1,
      user: 'Mary Jones',
      type: "ANNUAL",
      createdAt: "2023-09-20T20:33:29.000Z",
      startDate: "2023-10-07T00:00:00.000Z",
      endDate: "2023-10-10T00:00:00.000Z",
      days: 3,
      status: "APPROVED ",
      notes: "There remaining are 5 days on your balance",
      updatedAt: "2023-09-20T20:40:29.000Z",
      updatedBy: "Joe Doe "
    },
    {
      id: 2,
      user: 'Cherly Mathews',
      type: "HEALTH",
      createdAt: "2023-09-20T20:33:29.000Z",
      startDate: "2023-01-07T00:00:00.000Z",
      endDate: "2023-01-07T00:00:00.000Z",
      days: 1,
      status: "APPROVED ",
      notes: "Bring Doctor's medical note",
      updatedAt:"2023-09-20T20:33:29.000Z",
      updatedBy: "Joe Doe "
    },
    {
      id: 3,
      user: 'Mary Jones',
      type: "STUDY",
      createdAt: "2023-09-20T20:33:29.000Z",
      startDate: "2023-10-07T00:00:00.000Z",
      endDate: "2023-10-07T00:00:00.000Z",
      days: 6,
      status: "PENDING ",
      notes: "",
      updatedAt: "2023-09-20T20:33:29.000Z",
      updatedBy: "Joe Doe "
    },
    {
      id: 4,
      user: 'Shyleen Marsh',
      type: "FAMILY",
      createdAt: "2023-09-20T20:33:29.000Z",
      startDate: "2023-11-03T00:00:00.000Z",
      endDate: "2023-11-07T00:00:00.000Z",
      days: 4,
      status: "PRE-APPROVED ",
      notes: "Lets hear what the Manager says",
      updatedAt: "2023-09-20T20:33:29.000Z",
      updatedBy: "Joe Doe "
    },
    {
      id: 5,
      user: 'Moses Phiri',
      type: "MATERNITY",
      createdAt: "2023-09-20T20:33:29.000Z",
      startDate: "2023-10-07T00:00:00.000Z",
      endDate: "2023-10-07T00:00:00.000Z",
      days: 5,
      status: "APPROVED ",
      notes: "Take Care",
      updatedAt: "2023-09-20T20:33:29.000Z",
      updatedBy: "Joe Doe "
    },
    {
      id: 6,
      user: 'Wanguda',
      type: "PATERNITY",
      createdAt: "2023-08-20T20:33:29.000Z",
      startDate: "2023-10-17T00:00:00.000Z",
      endDate: "2023-10-27T00:00:00.000Z",
      days: 10,
      status: "PENDING ",
      notes: "",
      updatedAt: "2023-08-20T20:33:29.000Z",
      updatedBy: " "
    },
    {
      id: 7,
      user: 'De Mawo',
      type: "UNPAID",
      createdAt: "2023-02-20T20:33:29.000Z",
      startDate: "2023-03-01T00:00:00.000Z",
      endDate: "2023-03-07T00:00:00.000Z",
      days: 7,
      status: "REJECTED ",
      notes: "Man you don't have time",
      updatedAt: "2023-02-21T20:33:29.000Z",
      updatedBy: "Jane Smith"
    },
  ]