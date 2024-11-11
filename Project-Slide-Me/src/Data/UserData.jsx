

const usersData = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      username: "alicejohnson01",
      isActive: true,
      email: "alicejohnson@example.com",
      phone: "0812345678",
      registrationDate: "2023-01-15",
      role: "user"
    },
    {
      id: 2,
      firstName: "kob",
      lastName: "Smith",
      username: "kobsmith02",
      isActive: true,
      email: "kobsmith@example.com",
      phone: "0812349876",
      registrationDate: "2023-02-10",
      role: "user"
    },
    {
      id: 3,
      firstName: "Carol",
      lastName: "Taylor",
      username: "caroltaylor03",
      isActive: false,
      email: "caroltaylor@example.com",
      phone: "0812346543",
      registrationDate: "2023-03-20",
      role: "user"
    },
    {
      id: 4,
      firstName: "David",
      lastName: "Brown",
      username: "davidbrown04",
      isActive: true,
      email: "davidbrown@example.com",
      phone: "0812347654",
      registrationDate: "2023-04-15",
      role: "user"
    },
    {
      id: 5,
      firstName: "Eve",
      lastName: "Davis",
      username: "evedavis05",
      isActive: false,
      email: "dvedavis@example.com",
      phone: "0812348765",
      registrationDate: "2023-05-05",
      role: "user"
    },
    {
      id: 6,
      firstName: "zrank",
      lastName: "Wilson",
      username: "frankwilson06",
      isActive: true,
      email: "zrankwilson@example.com",
      phone: "0812345432",
      registrationDate: "2023-06-20",
      role: "driver",
      licensePlate: "XYZ-1234",
      vehicleType: "Truck",
      documents: ["License", "Insurance", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-07-10", usageCount: 5, rating: 4.8 },
        { date: "2023-07-20", usageCount: 3, rating: 4.5 }
      ]
    },
    {
      id: 7,
      firstName: "arace",
      lastName: "Miller",
      username: "aracemiller07",
      isActive: true,
      email: "gracemiller@example.com",
      phone: "0812347659",
      registrationDate: "2023-08-12",
      role: "driver",
      licensePlate: "ABC-5678",
      vehicleType: "Van",
      documents: ["License", "Insurance"],
      documentStatus: "Pending",
      serviceHistory: [
        { date: "2023-08-18", usageCount: 10, rating: 4.9 },
        { date: "2023-08-25", usageCount: 2, rating: 4.7 }
      ]
    },
    {
      id: 8,
      firstName: "chank",
      lastName: "Lopez",
      username: "chanklopez08",
      isActive: false,
      email: "Chanklopez@example.com",
      phone: "0812348763",
      registrationDate: "2023-09-05",
      role: "driver",
      licensePlate: "DEF-7890",
      vehicleType: "Pickup Truck",
      documents: ["License", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-09-15", usageCount: 4, rating: 4.6 },
        { date: "2023-09-18", usageCount: 1, rating: 4.2 }
      ]
    },
    {
      id: 9,
      firstName: "lvy",
      lastName: "Martinez",
      username: "lvymartinez09",
      isActive: true,
      email: "ivymartinez@example.com",
      phone: "0812346578",
      registrationDate: "2023-10-20",
      role: "driver",
      licensePlate: "GHI-1011",
      vehicleType: "SUV",
      documents: ["License", "Insurance"],
      documentStatus: "Pending",
      serviceHistory: [
        { date: "2023-10-22", usageCount: 7, rating: 4.8 },
        { date: "2023-10-28", usageCount: 3, rating: 4.5 }
      ]
    },
    {
      id: 10,
      firstName: "gack",
      lastName: "Lee",
      username: "gacklee10",
      isActive: true,
      email: "jacklee@example.com",
      phone: "0812349871",
      registrationDate: "2023-11-01",
      role: "driver",
      licensePlate: "JKL-1122",
      vehicleType: "Motorcycle",
      documents: ["License", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-11-05", usageCount: 2, rating: 4.7 },
        { date: "2023-11-10", usageCount: 1, rating: 4.4 }
      ]
    }
  ];
  
  export function fetchUsers() {   
    return usersData
};
  